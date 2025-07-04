const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "production",
  target: 'node',
  experiments: {
    outputModule: true,
  },
  output: {
    filename: '[name].mjs',
    chunkFilename: '[name].mjs',
    chunkFormat: 'module',
    chunkLoading: 'import',
    publicPath: '/',
    library: {
      type: 'module',
    },
  },
  optimization: {
    minimize: false,
  }
};

export default config;
