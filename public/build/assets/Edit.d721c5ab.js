import{_ as l}from"./AppLayout.b302c6bb.js";import{_ as n}from"./Breadcrumb.269f650c.js";import{S as o}from"./SectionBorder.15734d66.js";import u from"./EditServiceOrderForm.4715f8f8.js";import _ from"./ServicemenForm.04ff4f44.js";import f from"./ProgressPercentageForm.a9819d06.js";import{o as s,c as v,w as a,b as e,a as p,e as i,f as m}from"./app.cd7d4e01.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./ActionMessage.ece9ce86.js";import"./Button.0f444946.js";import"./FormSection.06acc35f.js";import"./SectionTitle.4dbc9fe9.js";import"./Input.d00a032d.js";import"./InputSelect.777344b6.js";import"./Checkbox.9736c19b.js";import"./InputError.8294ad35.js";import"./Label.9b3af21c.js";const b=p("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Service Order ",-1),g={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},O={key:0,class:"mb-4"},$={key:1,class:"mb-4"},H={__name:"Edit",props:{data:Object},setup(t){const c=t,d=[{label:"Service Order",url:route("service-orders.index")},{label:c.data.service_order_no,url:null},{label:"Edit",url:null}];return(r,h)=>(s(),v(l,{title:"Edit ServiceOrder"},{header:a(()=>[b,e(n,{links:d})]),default:a(()=>[p("div",g,[["foreman"].includes(r.$page.props.user.role)?(s(),i("div",O,[e(u,{serviceOrder:r.$page.props.data},null,8,["serviceOrder"]),e(o)])):m("",!0),t.data.status=="in_progress"?(s(),i("div",$,[e(f,{serviceOrder:r.$page.props.data},null,8,["serviceOrder"]),e(o)])):m("",!0),e(_,{serviceOrder:r.$page.props.data,user:r.$page.props.servicemen},null,8,["serviceOrder","user"])])]),_:1}))}};export{H as default};