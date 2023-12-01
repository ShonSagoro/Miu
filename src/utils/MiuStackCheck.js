const producctions = [
  {
    symbol: {
      key: "PR",
      isTerminal: false,
    },
    symbols: [
      {
        key: "PRN",
        isTerminal: false,
      },
     [
      [
        {
          key: "-",
          regex: /^(char)/,
          isTerminal: true,
          length: 4,
        },
      ],
      [
        {
          key: "-",
          regex: /^(int)/,
          isTerminal: true,
          length: 3,
        },
      ],
      [
        {
          key: "-",
          regex: /^(string)/,
          isTerminal: true,
          length: 6,
        },
      ],
      [
        {
          key: "-",
          regex: /^(float)/,
          isTerminal: true,
          length: 5,
        },
      ],
     ],
    ],
  },
  {
    symbol: {
      key: "PRN",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^[a-zA-Z0-9]/,
        isTerminal: true,
        length: 1,
      },
      {
        key: "RPRN",
        isTerminal: false,
      },
      ,
    ],
  },
  {
    symbol: {
      key: "RPRN",
      isTerminal: false,
    },
    symbols: [
     [
      [
        {
          key: "-",
          regex: /^[a-zA-Z0-9]/,
          isTerminal: true,
          length: 1,
        },
        {
          key: "RPRN",
          isTerminal: false,
        },
      ],
      [
        {
          key: "-",
          regex: /^:/,
          isTerminal: true,
          length: 1,
        },
        {
          key: "RPRN",
          isTerminal: false,
        },
      ],
      [
        {
          key: "-",
          regex: /^\s/,
          isTerminal: true,
          length: 1,
        },
      ],
     ]
    ],
  },
];

let stack = [];

function checkGrammarStack(cadena) {
  let symbol; let character;
  console.log(cadena);
  stack.push({
    key: "PR",
    isTerminal: false,
  });

  for (let i = 0; i < cadena.length; i++) {
    character = cadena[i];
    symbol= stack.pop();

    if (Array.isArray(symbol)) {
      if (!checkOrOptions(symbol, cadena, i)) {
        return "error-codigo";
      }
      break;
    } else if (symbol.isTerminal) {
      if(symbol.length!=undefined){
        console.log(i);
        console.log(symbol.length);
        let characters = cadena.slice(i, symbol.length);
        console.log("Cjaracter: " + JSON.stringify(characters));

        if (symbol.regex.test(characters)) {
          console.log("todo bien");
          i+=symbol.length-1;
        } else {
          console.log("error");
          return "error-codigo";
        }
      }

    } else {
      i--;
      let symbols = findProduction(symbol);
      if (symbols != undefined) {  
        for (let newSymbols of symbols.symbols.reverse()) {
          if(newSymbols!=undefined) {
            stack.push(newSymbols);
          }
        }
      } else {
        return "error-diccionario";
      }
    }
  }

  console.log(stack);
  console.log(cadena);
  return stack.length === 0;
}

function checkOrOptions(symbol, cadena, position) {
  let symbolstackReverse=symbol.slice().reverse();
  symbolstackReverse.forEach((symbolsArray) => {

    symbolsArray.forEach((orSymbol) => {

      console.log(orSymbol);
      
      if (orSymbol.isTerminal) {
        let characters = cadena.slice(position, symbol.length);
        if (orSymbol.regex.test(characters)) {
          console.log("todo bien");
          return true;
        }
      }

    });

  });
  console.log("false");
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

export default checkGrammarStack;
