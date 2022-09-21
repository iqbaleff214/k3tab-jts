import{d as V,u as C,D as F,o as i,c as E,w as d,k as w,a as p,b as o,g as l,v as k,K as S,e as c,F as $,h as x,t as N,n as U,i as f}from"./app.f171c1d5.js";import{_ as z}from"./ActionMessage.c6a10b3d.js";import{_ as M}from"./Button.bf50e133.js";import{_ as P}from"./FormSection.602b1a1b.js";import{_}from"./Input.158cae6f.js";import{_ as j}from"./InputError.fed075b3.js";import{_ as m}from"./Label.8ab97e0c.js";import"./SectionTitle.24ac6694.js";import"./_plugin-vue_export-helper.cdc0426e.js";const A=f(" Edit Direct Superior "),K=f(" Select your subordinate's direct superior. "),L={class:"col-span-6 sm:col-span-4"},O=["value"],R=["value"],T={class:"col-span-6 sm:col-span-4"},q={class:"col-span-6 sm:col-span-4"},G={class:"col-span-6 sm:col-span-4"},H={class:"col-span-6 sm:col-span-4"},I=f(" Saved. "),J=f(" Save "),ae={__name:"EditDirectSuperiorForm",props:{user:Object},setup(B){const a=B,n=V(null),r=C({id:a.user.id,name:a.user.name,salary_number:a.user.salary_number,role:a.user.role,address:a.user.address,phone:a.user.phone,superior_id:a.user.superior_id}),D=()=>{r.put(route("users.update",a.user.id))},v=t=>b(t.target.value),b=t=>{if(r.role=="serviceman"){const s=w().props.value.foremen.find(u=>u.id==t);n.value=s}else{const s=w().props.value.supervisors.find(u=>u.id==t);n.value=s}};return F(()=>{b(a.user.superior_id)}),(t,s)=>(i(),E(P,{onSubmitted:D},{title:d(()=>[A]),description:d(()=>[K]),form:d(()=>{var u,g,y,h;return[p("div",L,[o(m,{for:"name",value:"Name"}),l(r).role=="serviceman"?k((i(),c("select",{key:0,onChange:s[0]||(s[0]=e=>v(e)),"onUpdate:modelValue":s[1]||(s[1]=e=>l(r).superior_id=e),id:"superior_id",class:"border-gray-300 mt-1 block w-full focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),c($,null,x(t.$page.props.foremen,e=>(i(),c("option",{key:e.id,value:e.id},N(e.name),9,O))),128))],544)),[[S,l(r).superior_id]]):k((i(),c("select",{key:1,onChange:s[2]||(s[2]=e=>v(e)),"onUpdate:modelValue":s[3]||(s[3]=e=>l(r).superior_id=e),id:"superior_id",class:"border-gray-300 mt-1 block w-full focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),c($,null,x(t.$page.props.supervisors,e=>(i(),c("option",{key:e.id,value:e.id},N(e.name),9,R))),128))],544)),[[S,l(r).superior_id]]),o(j,{message:l(r).errors.name,class:"mt-2"},null,8,["message"])]),p("div",T,[o(m,{for:"salary_number",value:"Salary Number"}),o(_,{id:"salary_number",value:(u=n.value)==null?void 0:u.salary_number,disabled:"",type:"text",class:"mt-1 block w-full bg-gray-100"},null,8,["value"])]),p("div",q,[o(m,{for:"role",value:"Role"}),o(_,{id:"role",value:(g=n.value)==null?void 0:g.role,disabled:"",type:"text",class:"mt-1 block w-full bg-gray-100 capitalize"},null,8,["value"])]),p("div",G,[o(m,{for:"phone",value:"Phone Number"}),o(_,{id:"phone",value:(y=n.value)==null?void 0:y.phone,disabled:"",type:"text",class:"mt-1 block w-full bg-gray-100"},null,8,["value"])]),p("div",H,[o(m,{for:"address",value:"Address"}),o(_,{id:"address",value:(h=n.value)==null?void 0:h.address,disabled:"",type:"text",class:"mt-1 block w-full bg-gray-100"},null,8,["value"])])]}),actions:d(()=>[o(z,{on:l(r).recentlySuccessful,class:"mr-3"},{default:d(()=>[I]),_:1},8,["on"]),o(M,{class:U({"opacity-25":l(r).processing}),disabled:l(r).processing},{default:d(()=>[J]),_:1},8,["class","disabled"])]),_:1}))}};export{ae as default};
