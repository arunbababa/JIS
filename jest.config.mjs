export default {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["./jest.setup.js"],
  };  