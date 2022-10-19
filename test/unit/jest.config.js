// jest.config.js
const path = require('path');

module.exports = {
  verbose: true,
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: ['js', 'json'],
  testMatch: [
    // 匹配测试用例的文件
    '<rootDir>/test/unit/specs/*.test.js',
  ],
  transformIgnorePatterns: ['/node_modules/'],
};
