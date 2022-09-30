import{u as l,d,o as c,e as u,b as o,g as e,w as r,F as p,H as f,a,n as _,m as w,i as b}from"./app.cd7d4e01.js";import{J as g}from"./AuthenticationCard.fb594e25.js";import{_ as h}from"./AuthenticationCardLogo.74ac34c5.js";import{_ as x}from"./Button.0f444946.js";import{_ as v}from"./Input.d00a032d.js";import{_ as y}from"./InputError.8294ad35.js";import{_ as V}from"./Label.9b3af21c.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C=a("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$=["onSubmit"],k={class:"flex justify-end mt-4"},F=b(" Confirm "),q={__name:"ConfirmPassword",setup(B){const s=l({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(N,i)=>(c(),u(p,null,[o(e(f),{title:"Secure Area"}),o(g,null,{logo:r(()=>[o(h)]),default:r(()=>[C,a("form",{onSubmit:w(n,["prevent"])},[a("div",null,[o(V,{for:"password",value:"Password"}),o(v,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=m=>e(s).password=m),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(y,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),a("div",k,[o(x,{class:_(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[F]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{q as default};