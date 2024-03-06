module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/task-manager/' : '/',
  outputDir: 'dist',
  filenameHashing: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'task-manager';
        return args;
      });
  }
};