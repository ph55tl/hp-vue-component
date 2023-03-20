import { createApp } from 'vue'
import App from './app.vue'
import HpComponents from '@hp-vue-component/components'

const app = createApp(App)
app.use(HpComponents)
app.mount('#app')
