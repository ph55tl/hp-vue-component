"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./style/index.css");const h=require("@hp-vue-component/utils"),i=require("@vueuse/core"),g=e.defineComponent({name:"HpAffix"}),x=e.defineComponent({...g,props:{offsetTop:null,offsetBottom:null,target:{default:()=>window}},emits:["change"],setup(v,{emit:p}){const t=v,u=e.ref(),o=e.ref(),f=e.ref(0),r=i.useWindowSize(),s=i.useElementBounding(u),n=e.computed(()=>i.useElementBounding(h.getHTMLElement(t.target))),c=e.computed(()=>{var l,a;return{width:o.value?((l=u.value)==null?void 0:l.style.width)+"px":"",height:o.value?((a=u.value)==null?void 0:a.style.height)+"px":""}}),m=e.computed(()=>{var l,a;return o.value?{top:o.value==="top"&&t.offsetTop?f.value+"px":"",bottom:o.value==="bottom"&&t.offsetBottom?f.value+"px":"",width:((l=u.value)==null?void 0:l.style.width)+"px",height:((a=u.value)==null?void 0:a.style.height)+"px"}:{}}),d=()=>{o.value=void 0,t.target===window?(t.offsetTop&&t.offsetTop>s.top.value&&(f.value=t.offsetTop,o.value="top"),t.offsetBottom&&r.height.value+t.offsetBottom<s.bottom.value&&(f.value=t.offsetBottom,o.value="bottom")):(t.offsetTop&&t.offsetTop+n.value.top.value>s.top.value&&(f.value=t.offsetTop+n.value.top.value,o.value="top"),t.offsetBottom&&t.offsetBottom+n.value.bottom.value<s.bottom.value&&(f.value=r.height.value-t.offsetBottom-n.value.bottom.value,o.value="bottom")),p("change",o.value)};return e.watchEffect(d),(l,a)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"affixRoot",ref:u,class:"hp-affix",style:e.normalizeStyle(e.unref(c))},[e.createElementVNode("div",{class:e.normalizeClass({"hp-affix-fixed":o.value}),style:e.normalizeStyle(e.unref(m))},[e.renderSlot(l.$slots,"default")],6)],4))}});exports.default=x;
