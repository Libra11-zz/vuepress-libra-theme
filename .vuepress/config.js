module.exports = {
    title: "Libra",
    chainWebpack: config => {
        config.module
          .rule('less')
          .test(/\.less$/)
          .use('style-loader', 'css-loader', 'less-loader')
          .loader('style-loader', 'css-loader', 'less-loader')
          .end()
    }
}