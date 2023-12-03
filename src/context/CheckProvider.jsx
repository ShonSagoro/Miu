import React, { useMemo, useState } from "react";
import producctions from "../data/productions.js";

import CheckContext from "./CheckContext";

const CheckProvider = ({ children }) => {
  let stack = [];

  const [consoleMessage, setConsoleMessage] = useState("");
  const [isDebugEnable, setIsDebugEnable] = useState(false);
  const [isQuickEnable, setIsQuickEnable] = useState(false);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const seconds = 0.000001;

  const executeWithDelay = async (fn, args) => {
    fn(args);
    await wait(seconds);
  };

  const addQuickMessage = async (message) => {
    await executeWithDelay(setConsoleMessage, JSON.stringify(message));
  };
  const addMessage = async (message) => {
    if(!isQuickEnable){
      await executeWithDelay(setConsoleMessage, JSON.stringify(message));
    }
  };

  

  const addDebugMessage = async (message) => {
    if (isDebugEnable) {
      await executeWithDelay(
        setConsoleMessage,
        JSON.stringify(">> " + message)
      );
    }
  };

  const printStack = async () => {
    if (!isQuickEnable) {
      let reversestack = stack.slice().reverse();
      await addMessage(" ");
      await addMessage("[] Stack-------------------------------------[]");
      for (let stackElement of reversestack) {
        if (Array.isArray(stackElement)) {
          let stackElementReverse=stackElement.slice().reverse();
          await addMessage(
            "  []Options element-------------------------------------"
          );
          for (let stackElementOption of stackElement) {
            let stackElementOptionReverse =stackElementOption.slice().reverse();
            await addMessage("[Option]: ");
            await addMessage("[");
            for (let dataOption of stackElementOption){
              await addMessage(dataOption);
            }
            await addMessage("]");
          }
          await addMessage(
            "  []Options element-------------------------------------"
          );
        } else {
          await addMessage("Stack Content: " + stackElement.key);
          await addMessage("-is Terminal?: " + stackElement.isTerminal);
          if(stackElement.isTerminal) {
            await addMessage("---REGEX?: " + stackElement.regex);
          }
        }
      }
      await addMessage("[] FIN-Stack-------------------------------------[]");
      await addMessage(" ");
    }
  };

  async function checkGrammar(code) {
    let positionFail = -1;
    stack.splice(0, stack.length);

    await addQuickMessage("[-] Stack Empty: " + JSON.stringify(stack) + " [-]");
    stack.push({
      key: "INIT",
      isTerminal: false,
    });
    await addQuickMessage("[-] Stack Init: " + JSON.stringify(stack) + " [-]");

    const codeLines = code.split("\n");
    let state;
    for (let i = 0; i < codeLines.length; i++) {
      if (!/^\s*$/.test(codeLines[i])) {
        await addDebugMessage("code");
        await addDebugMessage(codeLines);
        let lineClean = codeLines[i].replace(/[\r\n\t]/gm, "");
        await addDebugMessage("line Check");
        await addDebugMessage(lineClean);
        state = await checkGrammarLine(lineClean);
        if (!state) {
          await addDebugMessage(
            "[x] Falle en la linea: " + JSON.stringify(i + 1) + " [x]"
          );
          positionFail = i + 1;
          break;
        }
        await addDebugMessage("El stack quedo asi: " + JSON.stringify(stack));
      }
    }

    if (!Array.isArray(stack[0])) {
      if(stack.key="INIT"){
        stack.pop();
      }
    }

    await printStack();
    await addQuickMessage("[F] Stack final: " + JSON.stringify(stack) + " [F]");

    return stack.length === 0
      ? "todo ok"
      : "OH no tenemos un problema";
  }

  async function checkGrammarLine(code) {
    let character;
    let symbol;
    for (let i = 0; i < code.length; i++) {
      await printStack();
      character = code[i];
      symbol = stack.pop();
      await addMessage(
        "[c] Character Actual: " + JSON.stringify(character) + " [c]"
      );
      await addMessage("[p] Posicion Actual: " + JSON.stringify(i) + " [p]");

      if (Array.isArray(symbol)) {
        let pass = await checkOrOptions(symbol, code, i);
        if (!pass) {
          await addDebugMessage(
            "[x] Error: con las opciones en produccion [x]"
          );
          return false;
        } else {
          symbol = stack.pop();
          i += symbol.length - 1;
        }
      } else if (symbol.isTerminal) {
        await addDebugMessage(
          "[o] Terminal: " + JSON.stringify(symbol) + " [o]"
        );
        await addDebugMessage(
          "[c] Letra: " + JSON.stringify(character) + " [c]"
        );
        if (symbol.length != undefined) {
          character = code.slice(i, i + symbol.length);
          await addDebugMessage(
            "[c] Palabra: " + JSON.stringify(character) + " [c]"
          );
          await addDebugMessage(
            "[r] Regex: " + symbol.regex.toString() + " [r]"
          );
          await addDebugMessage(
            "[R] Resultado de test: " +
              JSON.stringify(symbol.regex.test(character)) +
              " [R]"
          );
          if (symbol.regex.test(character)) {
            i += symbol.length - 1;
          } else {
            await addDebugMessage("[x] Error: con la terminal [x]");
            return false;
          }
        }
      } else {
        i--;
        await addDebugMessage("[i] Buscando Produccion [i]");
        let production = findProduction(symbol);

        if (production != undefined) {
          await addDebugMessage("[i] Produccion Encontrada[i]");
          const reversestack = production.symbols.slice().reverse();
          for (let newSymbols of reversestack) {
            if (newSymbols != undefined) {
              stack.push(newSymbols);
            }
          }
        }
      }
    }
    await addDebugMessage("[ok] todo bien con: " + code + " [ok]");
    return true;
  }

  async function checkOrOptions(symbol, code, position) {
    let symbolstackReverse = symbol.slice().reverse();
    for (let orArraySymbols of symbolstackReverse) {
      await addDebugMessage(
        "[o] Array Option: " + JSON.stringify(orArraySymbols) + " [o]"
      );
      if (orArraySymbols[0].isTerminal) {
        if (orArraySymbols[0].length != undefined) {
          await addDebugMessage(
            "[o] code eval: " + JSON.stringify(code) + " [o]"
          );
          let character = code.slice(
            position,
            position + orArraySymbols[0].length
          );
          await addDebugMessage(
            "[o] slice code eval: " + JSON.stringify(character) + " [o]"
          );
          await addDebugMessage(
            "[r] Regex: " + orArraySymbols[0].regex.toString() + " [r]"
          );
          if (orArraySymbols[0].regex.test(character)) {
            const reversestack = orArraySymbols.slice().reverse();
            await addDebugMessage(
              "[ok] Push Option Correct: " +
                JSON.stringify(reversestack) +
                " [ok]"
            );
            for (let newSymbols of reversestack) {
              if (newSymbols != undefined) {
                stack.push(newSymbols);
              }
            }
            return true;
          }
        }
      }
    }
    await addDebugMessage("[x] Error: con las opciones [x]");
    await addDebugMessage("[x] Evalue:" + JSON.stringify(code) + "[x]");
    await addDebugMessage("[x] Con:" + JSON.stringify(symbol) + " [x]");
    return false;
  }

  function findProduction(symbol) {
    for (let production of producctions) {
      if (production.symbol.key === symbol.key) {
        return production;
      }
    }
    return undefined;
  }

  const value = useMemo(() => {
    return {
      checkGrammar,
      consoleMessage,
      isDebugEnable,
      setIsDebugEnable,
      isQuickEnable,
      setIsQuickEnable,
    };
  }, [consoleMessage, isDebugEnable, isQuickEnable]);

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
