import{u as _,o as f,c as b,w as m,a as t,b as a,g as e,n as V,i}from"./app.f171c1d5.js";import{_ as y}from"./ActionMessage.c6a10b3d.js";import{_ as g}from"./Button.bf50e133.js";import{_ as v}from"./FormSection.602b1a1b.js";import{_ as n}from"./Input.158cae6f.js";import{_ as u}from"./InputError.fed075b3.js";import{_ as d}from"./Label.8ab97e0c.js";import"./SectionTitle.24ac6694.js";import"./_plugin-vue_export-helper.cdc0426e.js";const h=i(" Edit Customer "),x=i(" Edit your customer data. "),k={class:"col-span-6 sm:col-span-4"},w={class:"col-span-6 sm:col-span-4"},C={class:"col-span-6 sm:col-span-4"},N={class:"col-span-6 sm:col-span-4"},$={class:"col-span-6 sm:col-span-4"},U=i(" Saved. "),E=i(" Save "),D={__name:"EditCustomerForm",props:{user:Object},setup(c){const o=c,s=_({id:o.user.id,name:o.user.name,salary_number:o.user.salary_number,role:o.user.role,email:o.user.email,address:o.user.address,phone:o.user.phone,superior_id:o.user.superior_id}),p=()=>{s.put(route("customers.update",o.user.id))};return(S,l)=>(f(),b(v,{onSubmitted:p},{title:m(()=>[h]),description:m(()=>[x]),form:m(()=>[t("div",k,[a(d,{for:"salary_number",value:"Customer Number*"}),a(n,{id:"salary_number",modelValue:e(s).salary_number,"onUpdate:modelValue":l[0]||(l[0]=r=>e(s).salary_number=r),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),a(u,{message:e(s).errors.salary_number,class:"mt-2"},null,8,["message"])]),t("div",w,[a(d,{for:"name",value:"Customer Name*"}),a(n,{id:"name",modelValue:e(s).name,"onUpdate:modelValue":l[1]||(l[1]=r=>e(s).name=r),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),a(u,{message:e(s).errors.name,class:"mt-2"},null,8,["message"])]),t("div",C,[a(d,{for:"phone",value:"Phone Number"}),a(n,{id:"phone",modelValue:e(s).phone,"onUpdate:modelValue":l[2]||(l[2]=r=>e(s).phone=r),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),a(u,{message:e(s).errors.phone,class:"mt-2"},null,8,["message"])]),t("div",N,[a(d,{for:"email",value:"Email"}),a(n,{id:"email",modelValue:e(s).email,"onUpdate:modelValue":l[3]||(l[3]=r=>e(s).email=r),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),a(u,{message:e(s).errors.email,class:"mt-2"},null,8,["message"])]),t("div",$,[a(d,{for:"address",value:"Address"}),a(n,{id:"address",modelValue:e(s).address,"onUpdate:modelValue":l[4]||(l[4]=r=>e(s).address=r),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),a(u,{message:e(s).errors.address,class:"mt-2"},null,8,["message"])])]),actions:m(()=>[a(y,{on:e(s).recentlySuccessful,class:"mr-3"},{default:m(()=>[U]),_:1},8,["on"]),a(g,{class:V({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:m(()=>[E]),_:1},8,["class","disabled"])]),_:1}))}};export{D as default};
