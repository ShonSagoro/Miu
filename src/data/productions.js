const producctions = [
  {
    symbol: {
      key: "F",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^(fn)$/,
        isTerminal: true,
        length: 2,
      },
      {
        key: "FS",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "FS",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^\s$/,
        isTerminal: true,
        length: 1,
      },
      {
        key: "FN",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "FN",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^[A-Z]$/,
        isTerminal: true,
        length: 1,
      },
      {
        key: "FNR",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "FNR",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^[a-zA-Z0-9]$/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FNR",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\($/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FPRI",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FPRI",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^\s/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FPRI",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^[a-zA-Z]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FPR",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\)/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FPIF",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FPR",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^[a-zA-Z]/,
        isTerminal: true,
        length: 1,
      },
      {
        key: "FPRR",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "FPRR",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^[a-zA-Z]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FPRR",
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
            key: "FTP",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FTP",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^\s/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FTP",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^(string)/,
            isTerminal: true,
            length: 6,
          },
          {
            key: "FCPR",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^(float)/,
            isTerminal: true,
            length: 5,
          },
          {
            key: "FCPR",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^(int)/,
            isTerminal: true,
            length: 3,
          },
          {
            key: "FCPR",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^(char)/,
            isTerminal: true,
            length: 4,
          },
          {
            key: "FCPR",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FCPR",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^\s/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FCPR",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^,/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FNPR",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\)/,
            isTerminal: true,
            length: 5,
          },
          {
            key: "FPIF",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FPIF",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^\s/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FPIF",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\{/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FCN",
            isTerminal: false,
          },
        ]
      ]
    ],
  },
  {
    symbol: {
      key: "FCN",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^contenido/,
        isTerminal: true,
        length: 9,
      },
      {
        key: "FPC",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "FPC",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^;/,
        isTerminal: true,
        length: 1,
      },
      {
        key: "FPFF",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "FPFF",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^}/,
        isTerminal: true,
        length: 1,
      }
    ],
  },
];

export default producctions;
