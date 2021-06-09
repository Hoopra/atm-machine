const defaults = require('./jest.config');
module.exports = {
  ...defaults,
  collectCoverage: true,
  testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, 'test/integration/'],
};
