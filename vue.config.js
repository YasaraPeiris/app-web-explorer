const recLaOptions = require('rec-la').httpsOptions;
recLaOptions.https = true;
recLaOptions.host = 'l.rec.la';

module.exports = {
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  transpileDependencies: [
    'vuetify',
  ],
  devServer: recLaOptions,
};
