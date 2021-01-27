module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
  ],
  setupFiles: ['./tests/setup.js'],
  coverageDirectory: '<rootDir>tests/coverage/unit',
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/src/**/*.spec.js'
  ],
};
