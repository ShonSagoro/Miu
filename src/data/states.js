  // * cero o mas
  // + uno o mas

const operatorAddition= new RegExp(`\\|\\||\\&\\&`)
const mathOperator = new RegExp(`[+|*|\/|-]`);
const operator=/!=|>=|<=|==|>|</;
const callFuncVal=/[a-z][a-zA-Z0-9]*\.[A-Z][a-zA-Z0-9]*\((?:\d+|('[^']*')|("[^"]*")|(\d+\.\d))?\)/;
const callFunc=/[A-Z][a-zA-Z0-9]*\((?:\d+|('[^']*')|("[^"]*")|(\d+\.\d))?\)/;
const valueChar=/'[^']'/;
const valueString=/"[^"]*"/;
const valueFloat=/\d+\.\d+/;
const valueInt=/\d+/;
const variable=/[a-z][a-zA-Z0-9]*/;
const ifValue= new RegExp(`${variable.source}|${callFuncVal.source}|${callFunc.source}|${valueInt.source}|${valueFloat.source}|${valueString.source}|${valueChar.source}`)
const NegativeValue= new RegExp(`${callFuncVal.source}|${callFunc.source}|${variable.source}`)

const negativeAffirmation=new RegExp(`!(${NegativeValue.source})`)
const operatorAffirmation=new RegExp(`(${ifValue.source})[\\s]*(${operator.source})[\\s]*(${ifValue.source})`)
const affirmations=new RegExp(`${negativeAffirmation.source}|${operatorAffirmation.source}`)

const combinedAffirmations = new RegExp(`(${affirmations.source})(\\s*(?:(${operatorAddition.source})\\s*)(${affirmations.source}))*`);

const ifRegex = new RegExp(`if\\s+${combinedAffirmations.source}\\s*\\{\\s*`);

const elseIfRegex = new RegExp(`}(?:\\s*else\\s*if\\s+${combinedAffirmations.source}\\s*\\{\\s*|\\s*else\\s*if\\s+${combinedAffirmations.source}\\s*\\{\\s*)`);

const ifRegexT = new RegExp(`${combinedAffirmations.source}\\s*\\?\\s*\\{\\s*`);
const elseIfRegexT = new RegExp(`}\\s*:\\s*${combinedAffirmations.source}\\s*\\?\\s*\\{\\s*`);

const forRangeInt= new RegExp(`${valueInt.source}..${valueInt.source}`)

const forRange= new RegExp(`${forRangeInt.source}|${callFuncVal.source}|${callFunc.source}`)

const forRegex = new RegExp(`for\\s+${variable.source}\\s+in\\s+${forRange.source}\\s*\\{\\s*`);

const returnValue= new RegExp(`${variable.source}|${callFuncVal.source}|${callFunc.source}|${valueInt.source}|${valueFloat.source}|${valueString.source}|${valueChar.source}`);
const returnCombinedValue= new RegExp(`${variable.source}|${valueInt.source}|${valueFloat.source}|${valueString.source}|${valueChar.source}`);
const mathExpressionRegex = new RegExp(`${mathOperator.source}\\s*(${returnCombinedValue})+(?:\\s*${mathOperator.source}\\s*(${returnCombinedValue}))*`);

const possibleReturn= new RegExp(`(${combinedAffirmations.source})||${mathExpressionRegex.source}||${returnValue.source}`);


const returnSimpleRegex = new RegExp(`${possibleReturn.source}`);
const returnRegex = new RegExp(`return\\s+${returnSimpleRegex.source};`);

const functionCheck = {
    "init": [
      {
        rule: /^fn/,
        error: "Error: Debes iniciar con una funcion o modulo",
        nextCheck: "fn",
      },
      {
        rule: /^use/,
        error: "Error: Debes iniciar con una funcion o modulo",
        nextCheck: "use",
      },
      {
        rule: /^ /,
        error: "Todo ok",
        nextCheck: "",
      },
    ],
    "content": [
      {
        rule: /^if/, 
        error: "",
        nextCheck: "if",
      },
      {
        rule: new RegExp(`^${combinedAffirmations.source}\\s*\\?\\s*\\{\\s*$`),
        error: "",
        nextCheck: "if-t",
      },
      {
        rule: /^[a-z][a-zA-Z0-9]*[\s]*=/,
        error: "",
        nextCheck: "val", //list
      },
      {
        rule: /^for/,
        error: "",
        nextCheck: "for", //list
      },
      {
        rule: /^let/,
        error: "",
        nextCheck: "dval", //list
      },
      {
        rule: /^[a-z][a-zA-Z0-9]*\./,
        error: "",
        nextCheck: "fn-call", //list
      },
      {
        rule: /^}/,
        error: "",
        nextCheck: "fn-f", //list
      },
    ],
    "content-r": [
      {
        rule: /^if/, 
        error: "",
        nextCheck: "if-r",
      },
      {
        rule: new RegExp(`^${combinedAffirmations.source}\\s*\\?\\s*`),
        error: "",
        nextCheck: "if-t-r",
      },
      {
        rule: /^[a-z][a-zA-Z0-9]*[\s]*=/,
        error: "",
        nextCheck: "val-r", //list
      },
      {
        rule: /^for/,
        error: "",
        nextCheck: "for-r", //list
      },
      {
        rule: /^let/,
        error: "",
        nextCheck: "dval-r", //list
      },
      {
        rule: /^[a-z][a-zA-Z0-9]*\./,
        error: "",
        nextCheck: "fn-call-r", //list
      },
      {
        rule: new RegExp(`^${returnRegex.source}$`),
        error: "",
        nextCheck: "fn-f-r", //list
      },
      {
        rule: new RegExp(`^${returnSimpleRegex.source}$`),
        error: "",
        nextCheck: "fn-f-r", //list
      },
    ],
    "fn": [
        {
          rule: /^fn [A-Z][a-zA-Z0-9]*\((?:[a-zA-Z]+:[\s]*?(int|char|string|float))?\)\s*\{$/,
          error: "Error: en la escritura de la funcion",
          nextCheck: "content",
        },
        {
          rule: /^fn [A-Z][a-zA-Z0-9]*\((?:[a-zA-Z]+:[\s]*?(int|char|string|float))?\)[\s]*->[\s]*(int|char|string|float)\s*\{$/,
          error: "Error: en la escritura de la funcion",
          nextCheck: "content-return",
        },
      ],
    "use":[
      {
        rule: /^use [A-Za-z][a-zA-Z0-9]*(::[A-Za-z][A-Za-z0-9]+)*;$/,
        error: "Error: En el modulo",
        nextCheck: "init",
      }
    ],
    "if-t":[
      {
        rule: new RegExp(`^${ifRegexT.source}$`), 
        error: "Error: en la escritura del if ternario",
        nextCheck: "else-t",
      }
    ],
    "else-t":[
      {
        rule:new RegExp(`^${elseIfRegexT.source}$`),
        error: "Error: en la escritura del if else ternario",
        nextCheck: "else-t",
      },
      {
        rule: /^\}\s*:\s*\{$/,
        error: "Error: en la escritura del else ternario",
        nextCheck: "else-f",
      }, {
        rule: /^\}\s*$/,
        error: "Error: raro, obtuviste un error muy raro",
        nextCheck: "content",
      },
    ],
    "if":[
      {
        rule: new RegExp(`^${ifRegex.source}$`), 
        error: "Error: en la escritura del if",
        nextCheck: "else",
      }
    ],
    "else":[
      {
        rule:new RegExp(`^${elseIfRegex.source}$`),
        error: "Error: en la escritura del else if",
        nextCheck: "else",
      },
      {
        rule: /^\}\s*else\s*\{$/,
        error: "Error: en la escritura del else",
        nextCheck: "else-f",
      },
      {
        rule: /^\}\s*$/,
        error: "Error: raro, obtuviste un error muy raro",
        nextCheck: "content",
      },
    ],
    "else-f":[
      {
        rule: /^\}\s*$/,
        error: "Error: en la escritura del no cerror correctamente su else",
        nextCheck: "content",
      },
    ],
    "for":[
      {
        rule: new RegExp(`^${forRegex.source}$`),
        error: "Error: En la declaracion del for",
        nextCheck: "for",
      },
      {
        rule: /^\}\s*$/,
        error: "Error: En la declaracion del for",
        nextCheck: "content",
      },
    ],
    "val":[
        {
            rule: /^[a-z][a-zA-Z0-9]*[\s]*=(\d+|('[^']*')|("[^"]*")|([a-z][a-zA-Z0-9]*.[A-Z][a-zA-Z0-9]*\(\))|([A-Z][a-zA-Z0-9]*\(\)));$/,
            error: "Error: En el modulo",
            nextCheck: "content",
        }
    ],
    "dval":[
        {
            rule: /^let [a-z][a-zA-Z0-9]*[\s]*=(\d+|('[^']*')|("[^"]*")|([a-z][a-zA-Z0-9]*.[A-Z][a-zA-Z0-9]*\(\))|([A-Z][a-zA-Z0-9]*\(\)));$/,
            error: "Error: En el modulo",
            nextCheck: "content",
        },
        {
            rule: /^let [a-z][a-zA-Z0-9]*:((int[\s]*=[\s]*\d+)|(char[\s]*=[\s]*'[^']')|(string[\s]*=[\s]*"[^"]*")|(float[\s]*=[\s]\d+\.\d+)|([a-z][a-zA-Z0-9]*.[A-Z][a-zA-Z0-9]*\(\))|([A-Z][a-zA-Z0-9]*\(\)));$/,
            error: "Error: En el modulo",
            nextCheck: "content",
        },
    ],
    "fn-call":[
        {
            rule: /^[a-z][a-zA-Z0-9]*\.[A-Z][a-zA-Z0-9]*\((?:\d+|('[^']*')|("[^"]*")|(\d+\.\d))?\);$/,
            error: "Error: la llamada esta mal hecha",
            nextCheck: "content",
        },
        {
            rule: /^[A-Z][a-zA-Z0-9]\((?:[a-z][a-zA-Z0-9]*)?\);$/,
            error: "Error: la llamada esta mal hecha",
            nextCheck: "content",
        }
      ],
      "fn-f":[
          {
              rule: /^}\s*$/,
              error: "Error: deberia seguir otra funcion",
              nextCheck: "init",
          }
      ],
      "fn-f-r":[
          {
            rule: new RegExp(`^${returnRegex.source}$`),
            error: "Error: return mal escrito",
            nextCheck: "fn-f", //list
          },
          {
            rule: new RegExp(`^${returnSimpleRegex.source}$`),
            error: "Error: return mal escrito",
            nextCheck: "fn-f", //list
          },
      ],
      "if-t-r":[
        {
          rule: new RegExp(`^${ifRegexT.source}$`), 
          error: "Error: en la escritura del if ternario",
          nextCheck: "else-t-r",
        }
      ],
      "else-t-r":[
        {
          rule:new RegExp(`^${elseIfRegexT.source}$`),
          error: "Error: en la escritura del if else ternario",
          nextCheck: "else-t-r",
        },
        {
          rule: /^\}\s*:\s*\{$/,
          error: "Error: en la escritura del else ternario",
          nextCheck: "else-f-r",
        }, {
          rule: /^\}\s*$/,
          error: "Error: raro, obtuviste un error muy raro",
          nextCheck: "content-r",
        },
      ],
      "if-r":[
        {
          rule: new RegExp(`^${ifRegex.source}$`), 
          error: "Error: en la escritura del if",
          nextCheck: "content-r",
        }
      ],
      "else-r":[
        {
          rule:new RegExp(`^${elseIfRegex.source}$`),
          error: "Error: en la escritura del else if",
          nextCheck: "else-r",
        },
        {
          rule: /^\}\s*else\s*\{$/,
          error: "Error: en la escritura del else",
          nextCheck: "else-f-r",
        },
        {
          rule: /^\}\s*$/,
          error: "Error: raro, obtuviste un error muy raro",
          nextCheck: "content-r",
        },
      ],
      "else-f-r":[
        {
          rule: /^\}\s*$/,
          error: "Error: en la escritura del no cerror correctamente su else",
          nextCheck: "content-r",
        },
      ],
      "for-r":[
        {
          rule: new RegExp(`^${forRegex.source}$`),
          error: "Error: En la declaracion del for",
          nextCheck: "for-r",
        },
        {
          rule: /^\}\s*$/,
          error: "Error: En la declaracion del for",
          nextCheck: "content-r",
        },
      ],
      "val-r":[
          {
              rule: /^[a-z][a-zA-Z0-9]*[\s]*=(\d+|('[^']*')|("[^"]*")|([a-z][a-zA-Z0-9]*.[A-Z][a-zA-Z0-9]*\(\))|([A-Z][a-zA-Z0-9]*\(\)));$/,
              error: "Error: En el modulo",
              nextCheck: "content-r",
          }
      ],
      "dval-r":[
          {
              rule: /^let [a-z][a-zA-Z0-9]*[\s]*=(\d+|('[^']*')|("[^"]*")|([a-z][a-zA-Z0-9]*.[A-Z][a-zA-Z0-9]*\(\))|([A-Z][a-zA-Z0-9]*\(\)));$/,
              error: "Error: En el modulo",
              nextCheck: "content-r",
          },
          {
              rule: /^let [a-z][a-zA-Z0-9]*:((int[\s]*=[\s]*\d+)|(char[\s]*=[\s]*'[^']')|(string[\s]*=[\s]*"[^"]*")|(float[\s]*=[\s]\d+\.\d+)|([a-z][a-zA-Z0-9]*.[A-Z][a-zA-Z0-9]*\(\))|([A-Z][a-zA-Z0-9]*\(\)));$/,
              error: "Error: En el modulo",
              nextCheck: "content-r",
          },
      ],
      "fn-call-r":[
          {
              rule: /^[a-z][a-zA-Z0-9]*\.[A-Z][a-zA-Z0-9]*\((?:\d+|('[^']*')|("[^"]*")|(\d+\.\d))?\);$/,
              error: "Error: la llamada esta mal hecha",
              nextCheck: "content",
          },
          {
              rule: /^[A-Z][a-zA-Z0-9]\((?:[a-z][a-zA-Z0-9]*)?\);$/,
              error: "Error: la llamada esta mal hecha",
              nextCheck: "content",
          }
        ],
  };


export default functionCheck;
