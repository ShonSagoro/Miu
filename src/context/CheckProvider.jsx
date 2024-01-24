/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import MiuLexer from "../data/MiuLanguageLexer.js";
import MiuParser from "../data/MiuLanguageParser.js";
import antlr4 from "antlr4";

import CheckContext from "./CheckContext";

// eslint-disable-next-line react/prop-types
const CheckProvider = ({ children }) => {
  // let stack = [];

  // eslint-disable-next-line no-unused-vars
  const [consoleMessage, setConsoleMessage] = useState("");
  const [isDebugEnable, setIsDebugEnable] = useState(false);
  const [isQuickEnable, setIsQuickEnable] = useState(false);

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
    if (node.constructor.name === "Me") {
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

    try {
      await addMessage("Iniciando análisis...");
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

      // Process the message queue
      if (messageQueue.length > 0) {
        for (const message of messageQueue) {
          await addErrorMessage(message);
        }
        return false;
      }

      tokenCounts = await countTokens(tokens.tokens);
      for (const token in tokenCounts) {
        await addDebugMessage(
          `Token: Type: ${tokenCounts[token].type}, Token= ${token}, Count: ${tokenCounts[token].count}`
        );
      }
      parser.buildParseTrees = true;

      await addMessageTree(tree);

      return true;
    } catch (e) {
      await addErrorMessage(`${e}`);
      return false;
    }
  };

  const countTokens = async (tokens) => {
    let tokenCounts = {};
    tokens.forEach(async (token) => {
      if (!tokenCounts[token.text]) {
        tokenCounts[token.text] = {
          count: 1,
          type: TOKEN_NAMES[token.type],
        };
      } else {
        tokenCounts[token.text].count++;
      }
    });
    return tokenCounts;
  };

  const value = useMemo(() => {
    return {
      checkGrammar,
      consoleMessage,
      isDebugEnable,
      setIsDebugEnable,
      isQuickEnable,
      setIsQuickEnable,
    };
  }, [consoleMessage, isDebugEnable, isQuickEnable, checkGrammar]);

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
