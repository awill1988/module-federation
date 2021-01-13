module.exports = {
  moduleFileExtensions: ["js", "json", "ts", "vue"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/webpack/"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  testEnvironment: "jsdom",
  snapshotSerializers: ["jest-serializer-vue"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/*.{ts,vue}"],
  coverageReporters: ["html", "text-summary"],
  testMatch: ["<rootDir>/**/*.spec.[jt]s?(x)"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
