import{_ as i}from"./AppLayout.5bf918e8.js";import{_ as l}from"./Breadcrumb.a4ce8470.js";import p from"./EditCustomerForm.cfe0126d.js";import{o as c,c as n,w as t,b as r,a as e}from"./app.3552a682.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ActionMessage.4cf99c13.js";import"./Button.f17634a2.js";import"./FormSection.6cbff13b.js";import"./SectionTitle.cce4ca68.js";import"./Input.3d0ff162.js";import"./InputError.e5750b98.js";import"./Label.d314d6c0.js";const u=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Customer ",-1),_={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},N={__name:"Edit",props:{data:Object},setup(a){const o=a,s=[{label:"Customer",url:route("customers.index")},{label:o.data.salary_number,url:null},{label:"Edit",url:null}];return(m,d)=>(c(),n(i,{title:"Edit Customer"},{header:t(()=>[u,r(l,{links:s})]),default:t(()=>[e("div",_,[r(p,{user:m.$page.props.data},null,8,["user"])])]),_:1}))}};export{N as default};
