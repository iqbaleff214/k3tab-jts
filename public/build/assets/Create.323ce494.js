import{_ as i}from"./AppLayout.39ca853b.js";import{_ as c}from"./Breadcrumb.eac0b6e8.js";import m from"./CreateControlCardForm.7d829078.js";import{o as n,c as d,w as t,b as s,a}from"./app.584c462a.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ActionMessage.8fd79bfb.js";import"./Button.0c94c83b.js";import"./FormSection.ca824834.js";import"./SectionTitle.3f14d00e.js";import"./Input.dc1091c3.js";import"./InputError.a1029272.js";import"./Label.0324249a.js";import"./SecondaryButton.dff8c3e2.js";const p=a("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Control Card ",-1),_={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},V={__name:"Create",props:{so:Object},setup(o){var e;const r=o,l=[{label:"Service Order",url:route("service-orders.index")},{label:(e=r.so)==null?void 0:e.service_order_no,url:null},{label:"Control Card",url:route("control-cards.index",r.so.id)},{label:"Create",url:null}];return(u,x)=>(n(),d(i,{title:"New Control Card Note"},{header:t(()=>[p,s(c,{links:l})]),default:t(()=>[a("div",_,[s(m,{so:o.so},null,8,["so"])])]),_:1}))}};export{V as default};