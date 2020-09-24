const esModules = ["@fortawesome"].join("|");

module.exports = {
  verbose: true,
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
