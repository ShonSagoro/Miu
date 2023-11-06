import React, { useMemo, useState } from "react";
import functionCheck from "../data/states.js"

import CheckContext from "./CheckContext";

const CheckProvider = ({ children }) => {
  
  
  async function checkGrammar(code) {
    const subChecks=["init", "content", "content-return"]
    const codeLines = code.split("\n"); //hace un array con los saltos de linea, y quita los saltos de linea vacios ( es decir esto ->[1]=="")
    let state = "init";
    console.log(codeLines);

    for (let i=0; i<codeLines.length; i++) {
      console.log(state);

      
      if (!/^\s*$/.test(codeLines[i])) {
        let lineClean = codeLines[i].replace(/[\r\n\t]/gm, ""); //limpia las tabulaciones
        console.log("CHECANDO: "+lineClean);
        if(subChecks.includes(state)) {
          i--;
        }
        state = validatePiece(state, lineClean);
      }
      
      const checkError=state?.split(":")
      if (checkError!= undefined && checkError[0]=="Error") {
        console.log("Error me fuirse, linea: "+ (i+1));
        return state + ", linea del error: "+(i+1);
      }
      
      console.log(state);
    }
    return "Codigo bien escrito..."
  }

  const validatePiece = (currentState, code) => {
    if (currentState !== undefined) {
      if (functionCheck[currentState] &&functionCheck[currentState].length > 0) {
        for (const checkState of functionCheck[currentState]) {
          console.log("Rule: "+ checkState.rule);
          if (checkState.rule.test(code)) {
            console.log("state eNTRE: "+ currentState);
            console.log("Rule eNTRE: "+ checkState.rule);
            return checkState.nextCheck;
            }
          } 
          console.log("Error")
          return functionCheck[currentState][0].error;
      }
    }
  };

  const value = useMemo(() => {
    return {
      checkGrammar,
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
