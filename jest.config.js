// jest.config.js
export default {
    testEnvironment: 'node',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.mjs$': 'babel-jest', // Añade esta línea para manejar módulos ESM
    },
  };