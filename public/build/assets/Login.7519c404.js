import{u as g,o as i,e as d,b as a,g as s,w as m,F as w,H as y,t as h,f as u,a as t,c as x,L as k,n as V,m as v,i as p}from"./app.655df51d.js";import{J as $}from"./AuthenticationCard.ed8d9071.js";import{_ as B}from"./AuthenticationCardLogo.59081133.js";import{_ as F}from"./Button.b880c575.js";import{_ as c,a as _}from"./InputError.2e4c1321.js";import{_ as L}from"./Checkbox.9b81002c.js";import{_ as f}from"./Label.d01ab87f.js";import"./_plugin-vue_export-helper.cdc0426e.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},S=["onSubmit"],C={class:"mt-4"},q={class:"block mt-4"},P={class:"flex items-center"},R=t("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),U={class:"flex items-center justify-end mt-4"},H=p(" Forgot your password? "),J=p(" Log in "),I={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=g({salary_number:"",password:"",remember:!1}),b=()=>{e.transform(n=>({...n,remember:e.remember?"on":""})).post(route("login"),{onFinish:()=>e.reset("password")})};return(n,r)=>(i(),d(w,null,[a(s(y),{title:"Log in"}),a($,null,{logo:m(()=>[a(B)]),default:m(()=>[l.status?(i(),d("div",N,h(l.status),1)):u("",!0),t("form",{onSubmit:v(b,["prevent"])},[t("div",null,[a(f,{for:"salary_number",value:"Salary Number"}),a(c,{id:"salary_number",modelValue:s(e).salary_number,"onUpdate:modelValue":r[0]||(r[0]=o=>s(e).salary_number=o),type:"text",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"]),a(_,{class:"mt-2",message:s(e).errors.salary_number},null,8,["message"])]),t("div",C,[a(f,{for:"password",value:"Password"}),a(c,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":r[1]||(r[1]=o=>s(e).password=o),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(_,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",q,[t("label",P,[a(L,{checked:s(e).remember,"onUpdate:checked":r[2]||(r[2]=o=>s(e).remember=o),name:"remember"},null,8,["checked"]),R])]),t("div",U,[l.canResetPassword?(i(),x(s(k),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[H]),_:1},8,["href"])):u("",!0),a(F,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[J]),_:1},8,["class","disabled"])])],40,S)]),_:1})],64))}};export{I as default};
