import{u as k,D as h,k as S,o as p,c as U,w as i,a as m,b as o,g as s,e as _,f,n as w,i as d}from"./app.584c462a.js";import{_ as $}from"./ActionMessage.8fd79bfb.js";import{_ as x}from"./Button.0c94c83b.js";import{_ as N}from"./FormSection.ca824834.js";import{_ as u}from"./Input.dc1091c3.js";import{_ as v}from"./InputSelect.1885ac84.js";import{_ as n}from"./InputError.a1029272.js";import{_ as t}from"./Label.0324249a.js";import"./SectionTitle.3f14d00e.js";import"./_plugin-vue_export-helper.cdc0426e.js";const B=d(" Edit User "),E=d(" Edit your subordinate data. "),T={class:"col-span-6 sm:col-span-6"},P={class:"col-span-6 sm:col-span-6"},C={key:0,class:"col-span-6 sm:col-span-6"},F={key:1,class:"col-span-6 sm:col-span-6"},R={class:"col-span-6 sm:col-span-6"},j={class:"col-span-6 sm:col-span-6"},z={class:"col-span-6 sm:col-span-6"},A=d(" Saved. "),D=d(" Save "),W={__name:"EditUserForm",props:{user:Object},setup(V){const r=V,e=k({id:r.user.id,name:r.user.name,salary_number:r.user.salary_number,role:r.user.role,position:r.user.position,address:r.user.address,phone:r.user.phone,superior_id:r.user.superior_id}),c=[{value:"superadmin",option:"Superadmin"},{value:"supervisor",option:"Supervisor"},{value:"sales_support",option:"Sales Support"},{value:"foreman",option:"Foreman"},{value:"serviceman",option:"Serviceman"}],b=[{value:"Technician",option:"Technician"},{value:"Senior Technician",option:"Senior Technician"}],g=()=>{e.put(route("users.update",r.user.id))};return h(()=>{S().props.value.user.role!="superadmin"&&c.shift()}),(y,a)=>(p(),U(N,{onSubmitted:g},{title:i(()=>[B]),description:i(()=>[E]),form:i(()=>[m("div",T,[o(t,{for:"name",value:"Name*"}),o(u,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":a[0]||(a[0]=l=>s(e).name=l),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(n,{message:s(e).errors.name,class:"mt-2"},null,8,["message"])]),m("div",P,[o(t,{for:"salary_number",value:"Salary Number*"}),o(u,{id:"salary_number",modelValue:s(e).salary_number,"onUpdate:modelValue":a[1]||(a[1]=l=>s(e).salary_number=l),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(n,{message:s(e).errors.salary_number,class:"mt-2"},null,8,["message"])]),["superadmin","supervisor"].includes(y.$page.props.user.role)?(p(),_("div",C,[o(t,{for:"role",value:"Role*"}),o(v,{id:"role",modelValue:s(e).role,"onUpdate:modelValue":a[2]||(a[2]=l=>s(e).role=l),options:c,class:"mt-1 block w-full"},null,8,["modelValue"]),o(n,{message:s(e).errors.role,class:"mt-2"},null,8,["message"])])):f("",!0),s(e).role=="serviceman"?(p(),_("div",F,[o(t,{for:"position",value:"Position*"}),o(v,{id:"position",modelValue:s(e).position,"onUpdate:modelValue":a[3]||(a[3]=l=>s(e).position=l),options:b,class:"mt-1 block w-full"},null,8,["modelValue"]),o(n,{message:s(e).errors.position,class:"mt-2"},null,8,["message"])])):f("",!0),m("div",R,[o(t,{for:"phone",value:"Phone Number"}),o(u,{id:"phone",modelValue:s(e).phone,"onUpdate:modelValue":a[4]||(a[4]=l=>s(e).phone=l),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(n,{message:s(e).errors.phone,class:"mt-2"},null,8,["message"])]),m("div",j,[o(t,{for:"email",value:"Email"}),o(u,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":a[5]||(a[5]=l=>s(e).email=l),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),o(n,{message:s(e).errors.email,class:"mt-2"},null,8,["message"])]),m("div",z,[o(t,{for:"address",value:"Address"}),o(u,{id:"address",modelValue:s(e).address,"onUpdate:modelValue":a[6]||(a[6]=l=>s(e).address=l),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),o(n,{message:s(e).errors.address,class:"mt-2"},null,8,["message"])])]),actions:i(()=>[o($,{on:s(e).recentlySuccessful,class:"mr-3"},{default:i(()=>[A]),_:1},8,["on"]),o(x,{class:w({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[D]),_:1},8,["class","disabled"])]),_:1}))}};export{W as default};