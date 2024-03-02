import { HpAffix as r } from "./src/affix/index.mjs";
import { HpAnchor as t } from "./src/anchor/index.mjs";
const i = {
  install: (o) => {
    o.use(r), o.use(t);
  }
};
export {
  r as HpAffix,
  t as HpAnchor,
  i as default
};
