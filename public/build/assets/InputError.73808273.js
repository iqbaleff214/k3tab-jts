import{d as l,p as c,o,e as u,v as i,x as d,a as m,t as p}from"./app.7bd6831f.js";const f=["value"],v={__name:"Input",props:{modelValue:String},emits:["update:modelValue"],setup(s,{expose:t}){const e=l(null);return c(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),t({focus:()=>e.value.focus()}),(r,a)=>(o(),u("input",{ref_key:"input",ref:e,class:"border-gray-300 focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm",value:s.modelValue,onInput:a[0]||(a[0]=n=>r.$emit("update:modelValue",n.target.value))},null,40,f))}},_={class:"text-sm text-red-600"},h={__name:"InputError",props:{message:String},setup(s){return(t,e)=>i((o(),u("div",null,[m("p",_,p(s.message),1)],512)),[[d,s.message]])}};export{v as _,h as a};
