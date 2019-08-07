module.exports = {
    title: "Libra",
    head: [
        ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css' }]
    ],
    chainWebpack: config => {
        config.module
          .rule('less')
          .test(/\.less$/)
          .use('style-loader', 'css-loader', 'less-loader')
          .loader('style-loader', 'css-loader', 'less-loader')
          .end()
    }
}