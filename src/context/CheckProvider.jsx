/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import MiuLexer from "../data/analizar_lexico/MiuLanguage_lexLexer.js";
import MiuParser from "../data/analizar_lexico/MiuLanguage_lexParser.js"
import MiuLexer_sin from "../data/analizar_sintactico/MiuLanguage_sinLexer.js"
import MiuParser_sin from "../data/analizar_sintactico/MiuLanguage_sinParser.js"
import antlr4 from "antlr4";
import MiuInterpreteVisitor from '../data/interprete/MiuInterpreteVisitor.js';

import CheckContext from "./CheckContext";
import MiuSemanticVisitor from "../data/analizador_semantico/MiuSemanticVisitor.js";

// eslint-disable-next-line react/prop-types
const CheckProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [consoleMessage, setConsoleMessage] = useState("");
  const [isDebugEnable, setIsDebugEnable] = useState(false);
  const [isQuickEnable, setIsQuickEnable] = useState(false);
  const [codeJS, setCodeJS] = useState(null);

  const TOKEN_NAMES = {
    [MiuLexer.COMPARISON_OPERATOR]: "Comparison Operator",
    [MiuLexer.ADD_OPERATOR]: "Addition Operator",
    [MiuLexer.EQ]: "Equal",
    [MiuLexer.AND]: "And",
    [MiuLexer.OR]: "Or",
    [MiuLexer.NEQ]: "Not Equal",
    [MiuLexer.GT]: "Greater Than",
    [MiuLexer.LT]: "Less Than",
    [MiuLexer.GTEQ]: "Greater Than or Equal",
    [MiuLexer.LTEQ]: "Less Than or Equal",
    [MiuLexer.EQUAL]: "Assignment",
    [MiuLexer.FN]: "Function Keyword",
    [MiuLexer.USE]: "Use Keyword",
    [MiuLexer.LET]: "Let Keyword",
    [MiuLexer.IN]: "In Keyword",
    [MiuLexer.IF]: "If Keyword",
    [MiuLexer.ELSE]: "Else Keyword",
    [MiuLexer.FOR]: "For Keyword",
    [MiuLexer.RETURN]: "Return Keyword",
    [MiuLexer.ARROW]: "Arrow",
    [MiuLexer.DOT]: "Dot",
    [MiuLexer.DOUBLE_DOT]: "Double Dot",
    [MiuLexer.COMMA]: "Comma",
    [MiuLexer.PC]: "Semicolon",
    [MiuLexer.PP]: "Double Colon",
    [MiuLexer.P]: "Colon",
    [MiuLexer.LPAREN]: "Left Parenthesis",
    [MiuLexer.RPAREN]: "Right Parenthesis",
    [MiuLexer.LBRACE]: "Left Brace",
    [MiuLexer.RBRACE]: "Right Brace",
    [MiuLexer.TYPE]: "Type",
    [MiuLexer.BOOL]: "Boolean",
    [MiuLexer.STRING]: "String",
    [MiuLexer.CHAR]: "Character",
    [MiuLexer.FLOAT]: "Float",
    [MiuLexer.INT]: "Integer",
    [MiuLexer.IDF]: "Function Identifier",
    [MiuLexer.ID]: "Identifier",
  };

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const seconds = 0.000001;

  const executeWithDelay = async (fn, args) => {
    fn(args);
    await wait(seconds);
  };

  const addQuickMessage = async (message) => {
    await executeWithDelay(setConsoleMessage, message);
  };

  const addErrorMessage = async (message) => {
    message = `[ERROR] >> ${message} \n`;
    await executeWithDelay(setConsoleMessage, message);
  };
  const addWarningMessage = async (message) => {
    message = `[WARN] >> ${message} \n`;
    await executeWithDelay(setConsoleMessage, message);
  };

  // eslint-disable-next-line no-unused-vars
  const addMessage = async (message) => {
    message = `>> ${message} \n`;
    if (!isQuickEnable) {
      await executeWithDelay(setConsoleMessage, message);
    }
  };

  function printTree(node, indent = 0) {
    let result = "";
    let indentation = " ";

    if (node.constructor.name != "Me" || node.constructor.name != ")") {
      indentation = " ".repeat(indent * 4);
    }
    if (node.constructor.name === "Me"  || node.constructor.name === "Ue") {
      result += `${indentation}(Token: "${node.getText()}"$`;
    } else {
      result += `${indentation}(${node.constructor.name}: \n`;
    }

    if (node.children) {
      for (const child of node.children) {
        result += printTree(child, indent + 1);
      }
    }

    result = result.replace(/\$\s+/g, "$");
    result += `${indentation})\n`;

    return result;
  }

  const addMessageTree = async (tree) => {
    let formattedTree = printTree(tree);
    formattedTree = formattedTree.replace(/\$/g, "");
    formattedTree = "\n[TREE] >>\n" + formattedTree + "\n";

    if (isDebugEnable) {
      await executeWithDelay(setConsoleMessage, formattedTree);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const addDebugMessage = async (message) => {
    message = "[DEBUG] >> " + message;
    if (isDebugEnable) {
      await executeWithDelay(setConsoleMessage, message);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkGrammar = async (code) => {
    let tokenCounts = {};
    let messageQueue = [];
    let js_code = "";
    try {
      let res_lex = await checkLexical(code, messageQueue, tokenCounts);
      let tree = await checkSintactic(code, messageQueue, tokenCounts);
      let res_sem = await checkSematic(tree);

      if (res_lex && tree && res_sem) {
        js_code = await generatedCode(tree);
        await addQuickMessage("Código generado correctamente");
        setCodeJS(js_code);
        await addDebugMessage("Code: \n"+js_code);
        return true;
      }
      await addErrorMessage(`Algun error en el código, no se puede ejecutar`);
      return false;
    } catch (e) {
      await addErrorMessage(`${e}`);
      return false;
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const codeEjecuction = async () => {
    await addMessage("Ejecutando código...");
    const originalLog = console.log;
    let messages = [];
    console.log = function (message) {
      messages.push(message);
      originalLog.apply(console, arguments);
    };

    try {
      if (codeJS) {
        let result = eval(codeJS);
        console.log = originalLog;
        let messagesAsString = messages.join('\n');
        await addQuickMessage(">> " + messagesAsString);
        return result;
      }else{
        return "No hay código para ejecutar, dale a Check code primero";
      }
    } catch (e) {
      return e;
    }
  }

  const checkSematic = async (tree) => {
    await addMessage("Iniciando análisis semantico...");
    const visitor = new MiuSemanticVisitor();
    tree.accept(visitor);
    if (visitor.errors.length > 0) {
      for (const error of visitor.errors) {
        await addErrorMessage(error);
      }
      return false;
    }
    if (visitor.warnings.length > 0) {
      for (const warning of visitor.warnings) {
        await addWarningMessage(warning);
      }
    }
    return true;
  }

  const checkSintactic = async (code, messageQueue, tokenCounts) => {
    await addMessage("Iniciando análisis sintactico...");
    const chars = new antlr4.InputStream(code);
    const lexer = new MiuLexer_sin(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MiuParser_sin(tokens);
    parser.addErrorListener({
      syntaxError: function (
        recognizer,
        offendingSymbol,
        line,
        column,
        msg,
        e
      ) {
        let line_str = line.toString();
        let column_str = column.toString();
        let msg_str = msg.toString();
        messageQueue.push(
          `En la línea ${line_str}:${column_str}: ${msg_str}`
        );
      },
    });
    let tree = parser.program();

    if (messageQueue.length > 0) {
      for (const message of messageQueue) {
        await addErrorMessage(message);
      }
      await addMessageTree(tree);
      return tree;
    }

    tokenCounts = await countTokens(tokens.tokens);
    for (const lexema in tokenCounts) {
      await addDebugMessage(
        `Token: Token= ${tokenCounts[lexema].token}, Lexema= ${lexema}, Count: ${tokenCounts[lexema].count}`
      );
    }
    parser.buildParseTrees = true;

    await addMessageTree(tree);
    return tree;
  }

  const checkLexical = async (code, messageQueue, tokenCounts) => {
    await addMessage("Iniciando análisis lexico...");
    const chars = new antlr4.InputStream(code);
    const lexer = new MiuLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MiuParser(tokens);
    parser.addErrorListener({
      syntaxError: function (
        recognizer,
        offendingSymbol,
        line,
        column,
        msg,
        e
      ) {
        let line_str = line.toString();
        let column_str = column.toString();
        let msg_str = msg.toString();
        messageQueue.push(
          `En la línea ${line_str}:${column_str}: ${msg_str}`
        );
      },
    });
    let tree = parser.program();
    await addMessageTree(tree);


    if (messageQueue.length > 0) {
      for (const message of messageQueue) {
        await addErrorMessage(message);
      }
      return false;
    }

    tokenCounts = await countTokens(tokens.tokens);
    for (const lexema in tokenCounts) {
      await addDebugMessage(
        `Token: Token= ${tokenCounts[lexema].token}, Lexema= ${lexema}, Count: ${tokenCounts[lexema].count}`
      );
    }
    parser.buildParseTrees = true;

    await addMessageTree(tree);
    return true;
  }

  const countTokens = async (tokens) => {
    let tokenCounts = {};
    tokens.forEach(async (token) => {
      if (!tokenCounts[token.text]) {
        tokenCounts[token.text] = {
          count: 1,
          token: TOKEN_NAMES[token.type],
        };
      } else {
        tokenCounts[token.text].count++;
      }
    });
    return tokenCounts;
  };

  const getTree = (code) => {
    const chars = new antlr4.InputStream(code);
    const lexer = new MiuLexer_sin(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MiuParser_sin(tokens);
    let tree = parser.program();
    parser.buildParseTrees = true;
    return tree;
  }


  const generatedCode = async (tree) => {
    return tree.accept(new MiuInterpreteVisitor());
  }

  const value = useMemo(() => {
    return {
      checkGrammar,
      consoleMessage,
      isDebugEnable,
      setIsDebugEnable,
      isQuickEnable,
      setIsQuickEnable,
      codeEjecuction
    };
  }, [consoleMessage, isDebugEnable, isQuickEnable, checkGrammar, codeEjecuction]);

  return (
    <CheckContext.Provider value={value}>{children}</CheckContext.Provider>
  );
};

export default CheckProvider;

export function UseCheck() {
  const context = React.useContext(CheckContext);
  if (!context) {
    throw new Error("useCheck debe estar dentro del CheckContext");
  }

  return context;
}



