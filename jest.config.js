/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'src',

  // transform: {
  //   '^.+\\.jsx?$': 'babel-jest', // Adding this line solved the issue
  //   '^.+\\.tsx?$': 'ts-jest',
  // },

  // setupFilesAfterEnv: [
  //   'jest-enzyme',
  //   './jest.setup.js',
  // ],

  // testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  verbose: false, // this shows each test inside describes in output

  collectCoverage: true,
  collectCoverageFrom: ['!**/src/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  testPathIgnorePatterns: ['/node_modules/'],
};
