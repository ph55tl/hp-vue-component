export * from './src/index';
import { App } from 'vue';
import { HpAffix } from './src/index';

export default {
  install: (app: App) => {
    app.use(HpAffix);
  }
};
