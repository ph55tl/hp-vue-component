import { createApp } from 'vue'
import App from './app.vue'
// 正式包
// import HpComponents from 'hp-vue-component'
// 测试包
import HpComponents from '@hp-vue-component/components'

const app = createApp(App)
app.use(HpComponents)
app.mount('#app')
