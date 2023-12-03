import React, { useMemo, useState } from "react";
import producctions from "../data/productions.js";

import CheckContext from "./CheckContext";

const CheckProvider = ({ children }) => {
  let stack = [];

  const [consoleMessage, setConsoleMessage] = useState("");
  const [isDebugEnable, setIsDebugEnable] = useState(false);

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const seconds = 0.000001;

  const executeWithDelay = async (fn, args) => {
    fn(args);
    await wait(seconds);
  };

  const addMessage = async (message) => {
    await executeWithDelay(setConsoleMessage, JSON.stringify(message));
  };
  const addDebugMessage = async (message) => {
    if (isDebugEnable) {
      await executeWithDelay(
        setConsoleMessage,
        JSON.stringify(">> " + message)
      );
    }
  };

  async function checkGrammar(code, debugMode) {
    setIsDebugEnable(debugMode);
    let positionFail = -1;
    stack.splice(0, stack.length);

    await addMessage("[-] Stack Empty: " + JSON.stringify(stack) + " [-]");
    stack.push({
      key: "INIT",
      isTerminal: false,
    });
    await addMessage("[-] Stack Init: " + JSON.stringify(stack) + " [-]");

    const codeLines = code.split("\n");
    let state;
    for (let i = 0; i < codeLines.length; i++) {
      if (!/^\s*$/.test(codeLines[i])) {
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

    if(stack[0].key =="INIT"){
      stack.pop();
    }
    
    await addMessage("[F] Stack final: " + JSON.stringify(stack) + " [F]");
    await addMessage("[F] State final: " + JSON.stringify(state) + " [F]");

    return stack.length === 0 && state && positionFail === -1
      ? "todo ok"
      : "todo mal JAJAJAJ, en la linea: " + positionFail;
  }

  async function checkGrammarLine(code) {
    let character;
    let symbol;
    for (let i = 0; i < code.length; i++) {
      await addDebugMessage("STACK");
      await addDebugMessage(JSON.stringify(stack));
      await addDebugMessage("STACK");
      character = code[i];
      symbol = stack.pop();
      await addDebugMessage("STACK");
      await addDebugMessage(JSON.stringify(stack));
      await addDebugMessage("STACK");
      await addDebugMessage(
        "[c] Character Actual: " + JSON.stringify(character) + " [c]"
      );
      await addDebugMessage(
        "[symbol] Symbolo Actual: " + JSON.stringify(symbol) + " [symbol]"
      );
      await addDebugMessage(
        "[p] Posicion Actual: " + JSON.stringify(i) + " [p]"
      );

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
    };
  }, [consoleMessage, isDebugEnable]);

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
