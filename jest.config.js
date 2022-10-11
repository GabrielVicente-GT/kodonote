module.exports = {
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    '\\.png$': '<rootDir>/__mocks__/imageMock.js',
    '\\.jpg$': '<rootDir>/__mocks__/imageMock.js',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/', '/node_modules/rehype', '<rootDir>/node_modules/'],
}
