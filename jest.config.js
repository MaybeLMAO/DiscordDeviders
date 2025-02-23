module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/src/js/**/*.test.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
};