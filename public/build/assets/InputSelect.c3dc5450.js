import{d as f,p as m,o as a,e as t,F as v,h as p,t as g}from"./app.3552a682.js";const y=["value"],_=["value"],b={__name:"InputSelect",props:{modelValue:String,options:Object},emits:["update:modelValue"],setup(s,{expose:d}){const u=f(null);return m(()=>{u.value.hasAttribute("autofocus")&&u.value.focus()}),d({focus:()=>u.value.focus()}),(i,l)=>(a(),t("select",{ref_key:"input",ref:u,value:s.modelValue,onChange:l[0]||(l[0]=e=>i.$emit("update:modelValue",e.target.value)),class:"border-gray-300 focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(a(!0),t(v,null,p(s.options,e=>{var o,r,n,c;return a(),t("option",{key:(o=e.value)!=null?o:e,value:(r=e.value)!=null?r:e},g((c=(n=e.option)!=null?n:e.value)!=null?c:e),9,_)}),128))],40,y))}};export{b as _};