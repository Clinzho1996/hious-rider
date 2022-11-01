module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  //added this
  resolver: {
    // eslint-disable-next-line prettier/prettier
    sourceExts: ["jsx", "js", "ts", "tsx", "cjs", "json"],
  },
};
