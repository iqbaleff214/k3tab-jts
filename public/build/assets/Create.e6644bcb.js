import{_ as i}from"./AppLayout.d36003de.js";import{_ as c}from"./Breadcrumb.9af92b8c.js";import m from"./CreateControlCardForm.a88dbb00.js";import{o as n,c as d,w as t,b as s,a}from"./app.ea35995a.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ActionMessage.c4bf83a7.js";import"./Button.7664f22f.js";import"./FormSection.1e947bd3.js";import"./SectionTitle.651b9cd6.js";import"./Input.735bef14.js";import"./InputError.d438de51.js";import"./Label.8d3a12f9.js";import"./SecondaryButton.7cad3c00.js";const p=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Control Card ",-1),_={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},V={__name:"Create",props:{so:Object},setup(o){var e;const r=o,l=[{label:"Service Order",url:route("service-orders.index")},{label:(e=r.so)==null?void 0:e.service_order_no,url:null},{label:"Control Card",url:route("control-cards.index",r.so.id)},{label:"Create",url:null}];return(u,x)=>(n(),d(i,{title:"New Control Card Note"},{header:t(()=>[p,s(c,{links:l})]),default:t(()=>[a("div",_,[s(m,{so:o.so},null,8,["so"])])]),_:1}))}};export{V as default};
