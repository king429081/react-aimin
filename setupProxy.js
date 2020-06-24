const { proxy  } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api', {
        target: 'http://news-at.zhihu.com/api/4',
        changeOrigin: true,
        
  }))
}