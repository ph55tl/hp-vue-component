export * from './src/index'
import { App } from 'vue'
import { HpAnchor } from './src/index'

export default {
  install: (app: App) => {
    app.use(HpAnchor)
  }
}
