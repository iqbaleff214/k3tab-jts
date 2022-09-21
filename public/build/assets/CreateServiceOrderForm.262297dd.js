import{u as p,o as i,c as f,w as o,a,b as r,g as s,v,K as g,e as u,h as b,t as y,F as w,n as S,i as n}from"./app.ea35995a.js";import{_ as h}from"./ActionMessage.c4bf83a7.js";import{_ as k}from"./Button.7664f22f.js";import{_ as x}from"./FormSection.1e947bd3.js";import{_ as V}from"./Input.735bef14.js";import{_ as d}from"./InputError.d438de51.js";import{_ as c}from"./Label.8d3a12f9.js";import"./SectionTitle.651b9cd6.js";import"./_plugin-vue_export-helper.cdc0426e.js";const $=n(" Create new Service Order "),C=n(" Add new service order for your customer. "),F={class:"col-span-6 sm:col-span-4"},B=a("p",{class:"text-xs mt-1 text-gray-500"},"will be generated automatically if empty.",-1),N={class:"col-span-6 sm:col-span-4"},O=["value"],j=n(" Saved. "),z=n(" Save "),T={__name:"CreateServiceOrderForm",setup(D){const e=p({id:null,segment:null,operation:null,job_code:null,component_code:null,smu:null,warranty:!1,warranty_text:null,pip_psp:null,job_control:null,business_area:null,customer_name:null,service_team:null,group_number:null,customer_no:null,make:null,model:null,serial_number:null,arrg_no:null,std_hours:0,job_description:null,labor_hours:0,date_sent:null,date_required:null,date_returned:null,date_received_back:null,date_segment_closed:null,receive_by:null,surplus_part_returned:!1,sims_completed:!1,note:null,deliver_to:null,return_to:null,signed_1:!1,signed_2:!1,status:"todo",customer_id:null,supervisor_id:null,foreman_id:null,serviceman_id:null,new_customer:!1}),_=()=>{e.post(route("service-orders.store"),{preserveScroll:!0,onSuccess:()=>e.reset()})};return(m,t)=>(i(),f(x,{onSubmitted:_},{title:o(()=>[$]),description:o(()=>[C]),form:o(()=>[a("div",F,[r(c,{for:"id",value:"Service Order Number"}),r(V,{id:"id",modelValue:s(e).id,"onUpdate:modelValue":t[0]||(t[0]=l=>s(e).id=l),type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),B,r(d,{message:s(e).errors.id,class:"mt-2"},null,8,["message"])]),a("div",N,[r(c,{for:"foreman_id",value:"Foreman PIC*",class:"capitalize"}),v(a("select",{"onUpdate:modelValue":t[1]||(t[1]=l=>s(e).foreman_id=l),id:"foreman_id",class:"border-gray-300 mt-1 block w-full focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(i(!0),u(w,null,b(m.$page.props.foremen,l=>(i(),u("option",{key:l.id,value:l.id},y(l.name+" - "+l.salary_number),9,O))),128))],512),[[g,s(e).foreman_id]]),r(d,{message:s(e).errors.foreman_id,class:"mt-2"},null,8,["message"])])]),actions:o(()=>[r(h,{on:s(e).recentlySuccessful,class:"mr-3"},{default:o(()=>[j]),_:1},8,["on"]),r(k,{class:S({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:o(()=>[z]),_:1},8,["class","disabled"])]),_:1}))}};export{T as default};
