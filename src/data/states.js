  // * cero o mas
  // + uno o mas

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
        rule: /^[a-z][a-z|A-Z|0-9]*[\s]*[==|!=|>|<|>=|<=][\s]*(\d+|('[^']*')|("[^"]*")|([a-z][a-z|A-Z|0-9]*.[A-Z][a-z|A-Z|0-9]*\(\))|([A-Z][a-z|A-Z|0-9]*\(\)))/,
        error: "",
        nextCheck: "if-t",
      },
      {
        rule: /^[a-z][a-z|A-Z|0-9]*[\s]*=/,
        error: "",
        nextCheck: "val",
      },
      {
        rule: /^for/,
        error: "",
        nextCheck: "for",
      },
      {
        rule: /^let/,
        error: "",
        nextCheck: "dval",
      },
      {
        rule: /^[a-z][a-z|A-Z|0-9]*\./,
        error: "",
        nextCheck: "fn-call",
      },
      {
        rule: /^}/,
        error: "",
        nextCheck: "fn-f",
      },
    ],
    "content-return": [
      {
        rule: /^if/,
        error: "",
        nextCheck: "if",
      },
      {
        rule: /^[a-z][a-z|A-Z|0-9]*[\s]*[==|!=|>|<|>=|<=][\s]*(\d+|('[^']*')|("[^"]*")|([a-z][a-z|A-Z|0-9]*.[A-Z][a-z|A-Z|0-9]*\(\))|([A-Z][a-z|A-Z|0-9]*\(\)))/,
        error: "",
        nextCheck: "if-t",
      },    
      {
        rule: /^[a-z][a-z|A-Z|0-9]*[\s]*=/,
        error: "",
        nextCheck: "val",
      },
      {
        rule: /^for/,
        error: "",
        nextCheck: "for",
      },
      {
        rule: /^let/,
        error: "",
        nextCheck: "dval",
      },
      {
        rule: /^\}$/,
        error: "Error: No se cerro la funcion",
        nextCheck: "fn",
      },
    ],
    "fn": [
        {
          rule: /^fn [A-Z][a-z|A-Z|0-9]*\((?:[a-zA-Z]+:[\s]*?(int|char|string|float))?\)[\s]*\{$/,
          error: "Error: en la escritura de la funcion",
          nextCheck: "content",
        },
        {
          rule: /^fn [A-Z][a-z|A-Z|0-9]*\((?:[a-zA-Z]+:[\s]*?(int|char|string|float))?\)[\s]*->[\s]*(int|char|string|float)[\s]*\{$/,
          error: "Error: en la escritura de la funcion",
          nextCheck: "content-return",
        },
      ],
    "use":[
      {
        rule: /^use [A-Z|a-z][a-z|A-Z|0-9]*::[A-Z|a-z][a-z|A-Z|0-9]*(?:::[A-Z|a-z][a-z|A-Z|0-9]*);$/,
        error: "Error: En el modulo",
        nextCheck: "init",
      }
    ],
    "for":[
        {
            rule: /^$/
        }
    ],
    "val":[
        {
            rule: /^[a-z][a-z|A-Z|0-9]*[\s]*=(\d+|('[^']*')|("[^"]*")|([a-z][a-z|A-Z|0-9]*.[A-Z][a-z|A-Z|0-9]*\(\))|([A-Z][a-z|A-Z|0-9]*\(\)));$/,
            error: "Error: En el modulo",
            nextCheck: "content",
        }
    ],
    "dval":[
        {
            rule: /^let [a-z][a-z|A-Z|0-9]*[\s]*=(\d+|('[^']*')|("[^"]*")|([a-z][a-z|A-Z|0-9]*.[A-Z][a-z|A-Z|0-9]*\(\))|([A-Z][a-z|A-Z|0-9]*\(\)));$/,
            error: "Error: En el modulo",
            nextCheck: "content",
        },
        {
            rule: /^let [a-z][a-z|A-Z|0-9]*:((int[\s]*=[\s]*\d+)|(char[\s]*=[\s]*'[^']')|(string[\s]*=[\s]*"[^"]*")|(float[\s]*=[\s]\d+\.\d+)|([a-z][a-z|A-Z|0-9]*.[A-Z][a-z|A-Z|0-9]*\(\))|([A-Z][a-z|A-Z|0-9]*\(\)));$/,
            error: "Error: En el modulo",
            nextCheck: "content",
        },
    ],
    "fn-call":[
        {
            rule: /^[a-z][a-z|A-Z|0-9]*\.[A-Z][a-z|A-Z|0-9]*\((?:\d+|('[^']*')|("[^"]*")|(\d+\.\d))?\);/, //(
            error: "Error: la llamada esta mal hecha",
            nextCheck: "content",
        },
        {
            rule: /^[A-Z][a-z|A-Z|0-9]\((?:[a-z][a-z|A-Z|0-9]*)?\);/,
            error: "Error: la llamada esta mal hecha",
            nextCheck: "content",
        }
    ],
    "fn-f":[
        {
            rule: /^fn/,
            error: "Error: deberia seguir otra funcion",
            nextCheck: "fn",
        },
        {
            rule: /^\s/,
            error: "Error: deberia seguir otra funcion",
            nextCheck: "",
        }
    ]
  };


export default functionCheck;