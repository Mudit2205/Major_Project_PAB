module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  rootDir: '../../../',
  testURL: 'http://localhost/',
  coverageDirectory: '<rootDir>/target/test-results/',
  testMatch: ['<rootDir>/src/test/javascript/spec/**/@(*.)@(spec.ts?(x))'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/test/javascript'
  ],
  moduleNameMapper: {
    'app/(.*)': '<rootDir>/src/main/webapp/app/$1',
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  reporters: [
    'default',
    [ 'jest-junit', { output: './target/test-results/TESTS-results-jest.xml' } ]
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  setupFiles: [
    '<rootDir>/src/test/javascript/spec/enzyme-setup.ts',
    '<rootDir>/src/test/javascript/spec/storage-mock.ts'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json',
      diagnostics: false
    }
  }
};
