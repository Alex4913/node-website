// config.js
// aoneill - 05/09/15

var fs = require('fs'),
    path = require('path');

// Settings
module.exports = {
  'httpPort':    process.env.HTTPPORT || 80,
  'httpsPort':   process.env.HTTPSPORT || 443,
  'credentials': {
    key:  fs.readFileSync(path.join(__dirname, 'assets/ssl/ssl.key')),
    cert: fs.readFileSync(path.join(__dirname, 'assets/ssl/ssl.crt'))
  'apps':        '/apps',
  'css':         '/css',
  'resume':      'static/docs/resume',
  'routes':      './routes.js',
  'sass':        '/assets/sass',
  'static':      '/static',
  'views':       '/views',
  },
};
