import { HpAnchor } from "./src/anchor/index.mjs";
const index = {
  install: (app) => {
    app.use(HpAnchor);
  }
};
export {
  HpAnchor,
  index as default
};
