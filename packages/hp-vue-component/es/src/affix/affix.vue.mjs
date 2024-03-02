import { defineComponent as c, ref as i, computed as n, watchEffect as w, openBlock as B, createElementBlock as y, normalizeStyle as r, unref as v, createElementVNode as T, normalizeClass as b, renderSlot as _ } from "vue";
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
    const t = d, f = i(), e = i(), l = i(0), p = E(), u = m(f), s = n(() => m(S(t.target))), x = n(() => {
      var o, a;
      return {
        width: e.value ? ((o = f.value) == null ? void 0 : o.style.width) + "px" : "",
        height: e.value ? ((a = f.value) == null ? void 0 : a.style.height) + "px" : ""
      };
    }), g = n(() => {
      var o, a;
      return e.value ? {
        top: e.value === "top" && t.offsetTop ? l.value + "px" : "",
        bottom: e.value === "bottom" && t.offsetBottom ? l.value + "px" : "",
        width: ((o = f.value) == null ? void 0 : o.style.width) + "px",
        height: ((a = f.value) == null ? void 0 : a.style.height) + "px"
      } : {};
    });
    return w(() => {
      e.value = void 0, t.target === window ? (t.offsetTop && t.offsetTop > u.top.value && (l.value = t.offsetTop, e.value = "top"), t.offsetBottom && p.height.value + t.offsetBottom < u.bottom.value && (l.value = t.offsetBottom, e.value = "bottom")) : (t.offsetTop && t.offsetTop + s.value.top.value > u.top.value && (l.value = t.offsetTop + s.value.top.value, e.value = "top"), t.offsetBottom && t.offsetBottom + s.value.bottom.value < u.bottom.value && (l.value = p.height.value - t.offsetBottom - s.value.bottom.value, e.value = "bottom")), h("change", e.value);
    }), (o, a) => (B(), y("div", {
      ref_key: "affixRoot",
      ref: f,
      class: "hp-affix",
      style: r(v(x))
    }, [
      T("div", {
        class: b({ "hp-affix-fixed": e.value }),
        style: r(v(g))
      }, [
        _(o.$slots, "default")
      ], 6)
    ], 4));
  }
});
export {
  L as default
};
