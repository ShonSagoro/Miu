/* eslint-disable no-unused-vars */
import MiuLexer_sin from "../analizar_sintactico/MiuLanguage_sinLexer.js"
import MiuParser_sin from "../analizar_sintactico/MiuLanguage_sinParser.js"
import MiuLexer from "../analizar_lexico/MiuLanguage_lexLexer.js";
import MiuVisitor from "./MiuVisitor.js"
import antlr4 from "antlr4";


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


// eslint-disable-next-line no-unused-vars
const checkSintactic = async (code, messageQueue, tokenCounts) => {
    console.log("Iniciando análisis sintactico...");
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
            console.log(message);
        }
        return false;
    }

    tokenCounts = await countTokens(tokens.tokens);
    // for (const lexema in tokenCounts) {
    //     console.log(
    //         `Token: Token= ${tokenCounts[lexema].token}, Lexema= ${lexema}, Count: ${tokenCounts[lexema].count}`
    //     );
    // }
    parser.buildParseTrees = true;

    // console.log(tree);s
    return tree;
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


const checkGrammar = async (code) => {
    let tokenCounts = {};
    let messageQueue = [];
    let tree = null;

    try {
      tree = await checkSintactic(code, messageQueue, tokenCounts);
      await tryCode(tree);
      return true;
    } catch (e) {
        console.log(`${e}`);
      return false;
    }
  };

  const tryCode = async (tree) => {
    const visitor = new MiuVisitor();
    const code = await  visitor.visit(tree);
    console.log('Generated code:', code);  
  }


let code = `use std::fmt;\n\nfn Module() {\n\tfmt.Print("Hola, mundo!");\n}`
await checkGrammar(code);
console.log('Fin del análisis');