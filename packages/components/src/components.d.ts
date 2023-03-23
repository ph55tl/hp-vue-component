import * as components from './index'
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    HpAffix: typeof components.HpAffix
  }
}
export {};
