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
            key: "FPRII",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FPRII",
      isTerminal: false,
    },
    symbols: [
      {
        key: "FPRI",
        isTerminal: false,
      },
      {
        key: "FPIF",
        isTerminal: false,
      },
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
            key: "FPRR",
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
            length: 1,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FNPR",
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
            key: "FNPR",
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
            key: "FPRR",
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
        ],
        [
          {
            key: "-",
            regex: /^->/,
            isTerminal: true,
            length: 2,
          },
          {
            key: "FTR",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FCN",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^contenido/,
            isTerminal: true,
            length: 9,
          },
          {
            key: "VPC",
            isTerminal: false,
          },
          {
            key: "FCN",
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
          {
            key: "FPFF",
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
            key: "VVR",
            isTerminal: false,
          },
          {
            key: "VCP",
            isTerminal: false,
          },
          {
            key: "FCN",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^for/,
            isTerminal: true,
            length: 3,
          },
          {
            key: "FORV",
            isTerminal: false,
          },
          {
            key: "FCN",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^let/,
            isTerminal: true,
            length: 3,
          },
          {
            key: "LETV",
            isTerminal: false,
          },
          {
            key: "VCP",
            isTerminal: false,
          },
          {
            key: "FCN",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\}/,
            isTerminal: true,
            length: 1,
          },
        ],
      ],
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
      },
    ],
  },
  {
    symbol: {
      key: "FTR",
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
            key: "FPR",
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
            key: "FTRF",
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
            key: "FTRF",
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
            key: "FTRF",
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
            key: "FTRF",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FTRF",
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
            key: "FTRF",
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
            key: "FCR",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FCR",
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
            key: "VVR",
            isTerminal: false,
          },
          {
            key: "VCP",
            isTerminal: false,
          },
          {
            key: "FCR",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^let/,
            isTerminal: true,
            length: 3,
          },
          {
            key: "LETV",
            isTerminal: false,
          },
          {
            key: "VCP",
            isTerminal: false,
          },
          {
            key: "FCR",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^contenido/,
            isTerminal: true,
            length: 9,
          },
          {
            key: "VCP",
            isTerminal: false,
          },
          {
            key: "FCR",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^return/,
            isTerminal: true,
            length: 6,
          },
          {
            key: "FSRF",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FPCR",
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
        key: "FR",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "FR",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^return/,
        isTerminal: true,
        length: 6,
      },
      {
        key: "FSRF",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "FSRF",
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
            key: "FSRF",
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
            key: "FVR",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^"/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FRVS",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^'/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FRVC",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^[0-9]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FRVN",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FVR",
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
            key: "FRRV",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^==/,
            isTerminal: true,
            length: 2,
          },
          {
            key: "FRRVB",
            isTerminal: false,
          },
        ],
        [
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
      ],
    ],
  },
  {
    symbol: {
      key: "FRRV",
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
            key: "FRRV",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^==/,
            isTerminal: true,
            length: 2,
          },
          {
            key: "FRRVB",
            isTerminal: false,
          },
        ],
        [
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
      ],
    ],
  },
  {
    symbol: {
      key: "FRRVBS",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^==/,
            isTerminal: true,
            length: 2,
          },
          {
            key: "FRRVB",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FRRVB",
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
        key: "FRRRVB",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "LETV",
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
            key: "VVR",
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
          {
            key: "LETV",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FRRRVB",
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
            key: "FRRRVB",
            isTerminal: false,
          },
        ],
        [
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
      ],
    ],
  },
  {
    symbol: {
      key: "FRVS",
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
            key: "FRVS",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^"/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FPC ",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FRVC",
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
        key: "FRVCF",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "FRVCF",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^'/,
        isTerminal: true,
        length: 1,
      },
      {
        key: "FPC",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "FRVN",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^[0-9]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FRVN",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\./,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FRVNF",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^==/,
            isTerminal: true,
            length: 2,
          },
          {
            key: "FRRVB",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "FRVNF",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^[0-9]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "FRVNF",
            isTerminal: false,
          },
        ],
        [
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
        [
          {
            key: "-",
            regex: /^==/,
            isTerminal: true,
            length: 2,
          },
          {
            key: "FRRVB",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVR",
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
            key: "VVR",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^=/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVN",
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
          {
            key: "VVSIM",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^(\+|\-)/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVSIM",
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
            key: "VVTV",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\./,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFN",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVLLFN",
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
            key: "VVLLFN",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\(/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFP",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVLLFP",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^\)/,
            isTerminal: true,
            length: 1,
          }
        ],
        [
          {
            key: "-",
            regex: /^\s/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFP",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^"/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFPS",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^'/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFPC",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^[0-9]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFPN",
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
            key: "VVLLFPV",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVLLFPN",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^[0-9]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFPN",
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
          {
            key: "VVLLFPF",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\./,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFPF",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\)/,
            isTerminal: true,
            length: 1,
          }
        ],
        [
          {
            key: "-",
            regex: /^,/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFP",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVLLFPV",
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
            key: "VVLLFPV",
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
          {
            key: "VVLLFPF",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\./,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFPF",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\)/,
            isTerminal: true,
            length: 1,
          }
        ],
        [
          {
            key: "-",
            regex: /^,/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFP",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVLLFPNF",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^[0-9]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFPNF",
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
          {
            key: "VVLLFPF",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\)/,
            isTerminal: true,
            length: 1,
          }
        ],
        [
          {
            key: "-",
            regex: /^,/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFP",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVLLFPNF",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^[0-9]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFPNF",
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
          {
            key: "VVLLFPNF",
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
            key: "VPC",
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
            key: "VVLLFP",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVLLFPS",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^[\s\S]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFPS",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^"/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVLLFPF",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVLLFPC",
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
        key: "VVLLFPCF",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "VVLLFPCF",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^'/,
        isTerminal: true,
        length: 1,
      },
      {
        key: "VVLLFPF",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "VVLLFPF",
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
            key: "VVLLFPF",
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
            key: "VPC",
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
            key: "VVLLFP",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVSIM",
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
            key: "VVSIM",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^=/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVN",
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
            key: "VVTV",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVTP",
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
            key: "VVTP",
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
            key: "VVSIG",
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
            key: "VVSIG",
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
            key: "VVSIG",
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
            key: "VVSIG",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVSIG",
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
            key: "VVSIG",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^=/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVN",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVN",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^"/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVS",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^'/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVC",
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
            key: "VVV",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^[0-9]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVI",
            isTerminal: false,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVI",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^[0-9]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVI",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^\./,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVF",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^;/,
            isTerminal: true,
            length: 1,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVF",
      isTerminal: false,
    },
    symbols: [
      [
        [
          {
            key: "-",
            regex: /^[0-9]/,
            isTerminal: true,
            length: 1,
          },
          {
            key: "VVF",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^;/,
            isTerminal: true,
            length: 1,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVC",
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
        key: "VVCF",
        isTerminal: false,
      },
    ],
  },
  {
    symbol: {
      key: "VVCF",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^'/,
        isTerminal: true,
        length: 1,
      },
    ],
  },
  {
    symbol: {
      key: "VVS",
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
            key: "VVS",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^"/,
            isTerminal: true,
            length: 1,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VVV",
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
            key: "VVV",
            isTerminal: false,
          },
        ],
        [
          {
            key: "-",
            regex: /^;/,
            isTerminal: true,
            length: 1,
          },
        ],
      ],
    ],
  },
  {
    symbol: {
      key: "VPC",
      isTerminal: false,
    },
    symbols: [
      {
        key: "-",
        regex: /^;/,
        isTerminal: true,
        length: 1,
      },
    ],
  },
];

export default producctions;
