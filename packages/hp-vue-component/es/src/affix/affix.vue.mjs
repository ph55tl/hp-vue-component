import { defineComponent as c, ref as n, computed as r, watchEffect as x, openBlock as B, createElementBlock as y, normalizeStyle as p, unref as v, createElementVNode as T, normalizeClass as b, renderSlot as _ } from "vue";
import "./style/index.css";
import { getHTMLElement as S } from "@hp-vue-component/utils";
import { useWindowSize as E, useElementBounding as m } from "@vueuse/core";
const z = c({ name: "HpAffix" }), L = /* @__PURE__ */ c({
  ...z,
  props: {
    offsetTop: null,
    offsetBottom: null,
    target: { default: () => window }
  },
  emits: ["change"],
  setup(d, { emit: h }) {
    const t = d, l = n(), e = n(), f = n(0), i = E(), u = m(l), s = r(() => m(S(t.target))), g = r(() => {
      var o, a;
      return {
        width: e.value ? ((o = l.value) == null ? void 0 : o.style.width) + "px" : "",
        height: e.value ? ((a = l.value) == null ? void 0 : a.style.height) + "px" : ""
      };
    }), w = r(() => {
      var o, a;
      return e.value ? {
        top: e.value === "top" && t.offsetTop ? f.value + "px" : "",
        bottom: e.value === "bottom" && t.offsetBottom ? f.value + "px" : "",
        width: ((o = l.value) == null ? void 0 : o.style.width) + "px",
        height: ((a = l.value) == null ? void 0 : a.style.height) + "px"
      } : {};
    });
    return x(() => {
      e.value = void 0, t.target === window ? (t.offsetTop && t.offsetTop > u.top.value && (f.value = t.offsetTop, e.value = "top"), t.offsetBottom && i.height.value + t.offsetBottom < u.bottom.value && (f.value = t.offsetBottom, e.value = "bottom")) : (t.offsetTop && t.offsetTop + s.value.top.value > u.top.value && (f.value = t.offsetTop + s.value.top.value, e.value = "top"), t.offsetBottom && t.offsetBottom + s.value.bottom.value < u.bottom.value && (f.value = i.height.value - t.offsetBottom - s.value.bottom.value, e.value = "bottom")), h("change", e.value);
    }), (o, a) => (B(), y("div", {
      ref_key: "root",
      ref: l,
      style: p(v(g))
    }, [
      T("div", {
        class: b({ "hp-affix": e.value }),
        style: p(v(w))
      }, [
        _(o.$slots, "default")
      ], 6)
    ], 4));
  }
});
export {
  L as default
};
