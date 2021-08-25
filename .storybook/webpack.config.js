const { resolve } = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "sass-loader",
        options: {
          // @import '@material/ripple/mixins';
          // のようにnode_modules内のscssをimportしている場合はこれが必要。
          // ただしビルドが遅くなるので不要な場合は消したほうがいい。
          //includePaths: [resolve(__dirname, "../node_modules/")]
        }
      }
    ]
  });
  return config;
};
