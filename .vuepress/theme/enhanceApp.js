// .vuepress/enhanceApp.js
// 全局注册 Element 组件库
import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/dist/vuetify.css'

export default ({
  Vue
}) => {
  Vue.use(Vuetify)
  new Vuetify({
    icons: {
      iconfont: 'fa',
    },
  })
}