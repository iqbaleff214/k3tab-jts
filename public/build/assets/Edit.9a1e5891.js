import{_ as i}from"./AppLayout.b302c6bb.js";import{_ as l}from"./Breadcrumb.269f650c.js";import p from"./EditCustomerForm.d3fc7b16.js";import{o as c,c as n,w as t,b as r,a as e}from"./app.cd7d4e01.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ActionMessage.ece9ce86.js";import"./Button.0f444946.js";import"./FormSection.06acc35f.js";import"./SectionTitle.4dbc9fe9.js";import"./Input.d00a032d.js";import"./InputError.8294ad35.js";import"./Label.9b3af21c.js";const u=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Customer ",-1),_={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},N={__name:"Edit",props:{data:Object},setup(a){const o=a,s=[{label:"Customer",url:route("customers.index")},{label:o.data.salary_number,url:null},{label:"Edit",url:null}];return(m,d)=>(c(),n(i,{title:"Edit Customer"},{header:t(()=>[u,r(l,{links:s})]),default:t(()=>[e("div",_,[r(p,{user:m.$page.props.data},null,8,["user"])])]),_:1}))}};export{N as default};