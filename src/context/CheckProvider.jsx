import React, { useMemo, useState } from "react";

import CheckContext from "./CheckContext";

const CheckProvider = ({ children }) => {
  const [console, setConsole] = useState("Write and check your miu Code");
  // * cero o mas
  // + uno o mas
  const mapCheck = [];

  const functionCheck = {
    "init": [
      {
        rule: /^fn$/,
        error: "Error: Debes iniciar con una funcion o modulo",
        nextCheck: "fn",
      },
      {
        rule: /^use$/,
        error: "Error: Debes iniciar con una funcion o modulo",
        nextCheck: "use",
      },
    ],
    "fn": [
      {
        rule: /^fn [A-Z][a-z|A-Z|0-9]*\((?:[a-zA-Z]+:[\s]*?(int|char|string|float))?\)(?:[\s]*->[\s]*?(int|char|string|float))?[\s]*\{$/,
        error: "Error: en la escritura de la funcion",
        nextCheck: "content",
      },
      {
        rule: /^fn [A-Z][a-z|A-Z|0-9]*\((?:[a-zA-Z]+:[\s]*?(int|char|string|float))?\)(?:[\s]*->[\s]*?(int|char|string|float))?[\s]*(?:->[\s]*?(int|char|string|float))?[\s]*\{$/,
        error: "Error: en la escritura de la funcion",
        nextCheck: "content-return",
      },
    ],
    content: [{}],
    "content-return": [{}],
    "fnf": [
      {
        rule: /^\}/,
        error: "Error: No se cerro la funcion",
        nextCheck: "content",
      },
    ],
  };

  async function checkGrammar(code) {
    const codeLines = code.split("\n");
    let state = "fn";
    console.log(codeLines);

    // for (let line of codeLines) {
    //   let lineClean = line.replace(/[\r\n\t]/gm, "");
    //   state = validatePiece(state, lineClean);
    // }
    setConsole("Codigo bien escrito...");
  }

  const validatePiece = (currentState, code) => {
    if (currentState !== undefined) {
      if (
        functionCheck[currentState] &&
        functionCheck[currentState].length > 0
      ) {
        for (const checkState of functionCheck[currentState]) {
          if (checkState.rule.test(code)) {
            return "OK";
          }
        }
        return functionCheck[currentState][0].error;
      }
    }
  };

  const value = useMemo(() => {
    return {
      checkGrammar,
      console,
      setConsole,
    };
  }, []);

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
