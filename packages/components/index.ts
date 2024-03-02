export * from './src/index'
import { App } from 'vue'
import { HpAffix, HpAnchor } from './src/index'

export default {
  install: (app: App) => {
    app.use(HpAffix)
    app.use(HpAnchor)
  }
}
