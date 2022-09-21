import{d as le,u as _e,D as ue,o as m,c as ve,w as t,k as me,a as d,b as r,v as pe,K as Oe,g as c,e as te,h as be,t as ge,F as fe,n as ye,i as v}from"./app.f171c1d5.js";import{_ as he}from"./ActionMessage.c6a10b3d.js";import{_ as we}from"./Button.bf50e133.js";import{_ as Se}from"./FormSection.602b1a1b.js";import{_ as u}from"./Input.158cae6f.js";import{_ as ke}from"./InputError.fed075b3.js";import{_ as l}from"./Label.8ab97e0c.js";import"./SectionTitle.24ac6694.js";import"./_plugin-vue_export-helper.cdc0426e.js";const xe=v(" Choose Serviceman "),je=v(" Choose serviceman to handle this service order. "),$e={class:"col-span-6 sm:col-span-4"},Ne=["value"],Be={class:"col-span-6 sm:col-span-4"},Ce={class:"col-span-6 sm:col-span-4"},Fe={class:"col-span-6 sm:col-span-4"},Ve={class:"col-span-6 sm:col-span-4"},De=v(" Saved. "),qe=v(" Save "),Ue={__name:"ServicemenForm",props:{user:Object,serviceOrder:Object},setup(de){var O,b,g,f,y,h,w,S,k,x,j,$,N,B,C,F,V,D,q,z,M,P,A,E,K,L,R,T,U,G,H,I,J,Q,W,X,Y,Z,ee,re,se;const e=de,n=le(null),a=_e({id:(O=e.serviceOrder)==null?void 0:O.id,segment:(b=e.serviceOrder)==null?void 0:b.segment,operation:(g=e.serviceOrder)==null?void 0:g.operation,job_code:(f=e.serviceOrder)==null?void 0:f.job_code,component_code:(y=e.serviceOrder)==null?void 0:y.component_code,smu:(h=e.serviceOrder)==null?void 0:h.smu,warranty:(w=e.serviceOrder)==null?void 0:w.warranty,warranty_text:(S=e.serviceOrder)==null?void 0:S.warranty_text,pip_psp:(k=e.serviceOrder)==null?void 0:k.pip_psp,job_control:(x=e.serviceOrder)==null?void 0:x.job_control,business_area:(j=e.serviceOrder)==null?void 0:j.business_area,customer_name:($=e.serviceOrder)==null?void 0:$.customer_name,service_team:(N=e.serviceOrder)==null?void 0:N.service_team,group_number:(B=e.serviceOrder)==null?void 0:B.group_number,customer_no:(C=e.serviceOrder)==null?void 0:C.customer_no,make:(F=e.serviceOrder)==null?void 0:F.make,model:(V=e.serviceOrder)==null?void 0:V.model,serial_number:(D=e.serviceOrder)==null?void 0:D.serial_number,arrg_no:(q=e.serviceOrder)==null?void 0:q.arrg_no,std_hours:(z=e.serviceOrder)==null?void 0:z.std_hours,job_description:(M=e.serviceOrder)==null?void 0:M.job_description,labor_hours:(P=e.serviceOrder)==null?void 0:P.labor_hours,date_sent:(A=e.serviceOrder)==null?void 0:A.date_sent,date_required:(E=e.serviceOrder)==null?void 0:E.date_required,date_returned:(K=e.serviceOrder)==null?void 0:K.date_returned,date_received_back:(L=e.serviceOrder)==null?void 0:L.date_received_back,date_segment_closed:(R=e.serviceOrder)==null?void 0:R.date_segment_closed,receive_by:(T=e.serviceOrder)==null?void 0:T.receive_by,surplus_part_returned:(U=e.serviceOrder)==null?void 0:U.surplus_part_returned,sims_completed:(G=e.serviceOrder)==null?void 0:G.sims_completed,note:(H=e.serviceOrder)==null?void 0:H.note,deliver_to:(I=e.serviceOrder)==null?void 0:I.deliver_to,return_to:(J=e.serviceOrder)==null?void 0:J.return_to,signed_1:(Q=e.serviceOrder)==null?void 0:Q.signed_1,signed_2:(W=e.serviceOrder)==null?void 0:W.signed_2,status:(X=e.serviceOrder)==null?void 0:X.status,progress_percentage:(Y=e.serviceOrder)==null?void 0:Y.progress_percentage,customer_id:(Z=e.serviceOrder)==null?void 0:Z.customer_id,supervisor_id:(ee=e.serviceOrder)==null?void 0:ee.supervisor_id,foreman_id:(re=e.serviceOrder)==null?void 0:re.foreman_id,serviceman_id:(se=e.serviceOrder)==null?void 0:se.serviceman_id,assign_serviceman:!0}),ce=()=>{a.put(route("service-orders.update",e.serviceOrder.id),{preserveScroll:!0,preserveState:!0})},ne=s=>p(s.target.value),p=s=>{const i=me().props.value.servicemen.find(_=>_.id==s);n.value=i};return ue(()=>{var s;p((s=e.serviceOrder)==null?void 0:s.serviceman_id)}),(s,i)=>(m(),ve(Se,{onSubmitted:ce},{title:t(()=>[xe]),description:t(()=>[je]),form:t(()=>{var _,ae,oe,ie;return[d("div",$e,[r(l,{for:"serviceman_id",value:"Serviceman Name"}),pe(d("select",{onChange:i[0]||(i[0]=o=>ne(o)),"onUpdate:modelValue":i[1]||(i[1]=o=>c(a).serviceman_id=o),id:"superior_id",class:"border-gray-300 mt-1 block w-full focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm"},[(m(!0),te(fe,null,be(s.$page.props.servicemen,o=>(m(),te("option",{key:o.id,value:o.id},ge(o.name),9,Ne))),128))],544),[[Oe,c(a).serviceman_id]]),r(ke,{message:c(a).errors.serviceman_id,class:"mt-2"},null,8,["message"])]),d("div",Be,[r(l,{for:"salary_number",value:"Salary Number"}),r(u,{id:"salary_number",value:(_=n.value)==null?void 0:_.salary_number,disabled:"",type:"text",class:"mt-1 block w-full bg-gray-100"},null,8,["value"])]),d("div",Ce,[r(l,{for:"role",value:"Role"}),r(u,{id:"role",value:(ae=n.value)==null?void 0:ae.role,disabled:"",type:"text",class:"mt-1 block w-full bg-gray-100 capitalize"},null,8,["value"])]),d("div",Fe,[r(l,{for:"phone",value:"Phone Number"}),r(u,{id:"phone",value:(oe=n.value)==null?void 0:oe.phone,disabled:"",type:"text",class:"mt-1 block w-full bg-gray-100"},null,8,["value"])]),d("div",Ve,[r(l,{for:"address",value:"Address"}),r(u,{id:"address",value:(ie=n.value)==null?void 0:ie.address,disabled:"",type:"text",class:"mt-1 block w-full bg-gray-100"},null,8,["value"])])]}),actions:t(()=>[r(he,{on:c(a).recentlySuccessful,class:"mr-3"},{default:t(()=>[De]),_:1},8,["on"]),r(we,{class:ye({"opacity-25":c(a).processing}),disabled:c(a).processing},{default:t(()=>[qe]),_:1},8,["class","disabled"])]),_:1}))}};export{Ue as default};
