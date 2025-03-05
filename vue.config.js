module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/learn-js/" : "/",

  configureWebpack: {
    resolve: {
      extensions: [".ts", ".tsx", ".vue", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: { appendTsSuffixTo: [/\.vue$/] },
          exclude: /node_modules/,
        },
      ],
    },
  },
};
