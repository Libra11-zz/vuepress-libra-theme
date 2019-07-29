// .vuepress/enhanceApp.js
// 全局注册 Element 组件库
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

export default ({
  Vue
}) => {
  Vue.use(Vuetify)
}