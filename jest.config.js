module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["./jest.setup.js"],
  setupFiles: ["./jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};
