import * as components from './index'
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    HpAnchor: typeof components.HpAnchor
  }
}
export {};
