import{u as B,d as y,o as m,c as $,w as n,e as g,a as t,b as e,v as b,x as k,G as j,m as V,f as c,g as o,n as S,L as E,i,y as F}from"./app.ea35995a.js";import{_ as L}from"./Button.7664f22f.js";import{_ as R}from"./FormSection.1e947bd3.js";import{_ as p}from"./Input.735bef14.js";import{_ as f}from"./InputError.d438de51.js";import{_ as d}from"./Label.8d3a12f9.js";import{_ as z}from"./ActionMessage.c4bf83a7.js";import{_ as C}from"./SecondaryButton.7cad3c00.js";import"./SectionTitle.651b9cd6.js";import"./_plugin-vue_export-helper.cdc0426e.js";const D=i(" Profile Information "),T=i(" Update your account's profile information and email address. "),G={key:0,class:"col-span-6 sm:col-span-4"},M={class:"mt-2"},O=["src","alt"],Y={class:"mt-2"},q=i(" Select A New Photo "),H=i(" Remove Photo "),J={class:"col-span-6 sm:col-span-4"},K={class:"col-span-6 sm:col-span-4"},Q={key:0,class:"text-xs mt-1 text-gray-500"},W={key:1,class:"text-xs mt-1 text-gray-500"},X={key:1,class:"col-span-6 sm:col-span-4"},Z={class:"col-span-6 sm:col-span-4"},ee={key:0},se={class:"text-sm mt-2"},oe=i(" Your email address is unverified. "),ae=i(" Click here to re-send the verification email. "),le={class:"mt-2 font-medium text-sm text-green-600"},te={class:"col-span-6 sm:col-span-4"},re={class:"col-span-6 sm:col-span-4"},ne=i(" Saved. "),ie=i(" Save "),ye={__name:"UpdateProfileInformationForm",props:{user:Object},setup(_){const v=_,s=B({_method:"PUT",name:v.user.name,salary_number:v.user.salary_number,email:v.user.email,phone:v.user.phone,address:v.user.address,photo:null}),w=y(null),h=y(null),u=y(null),x=()=>{u.value&&(s.photo=u.value.files[0]),s.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>P()})},U=()=>{w.value=!0},N=()=>{u.value.click()},I=()=>{const a=u.value.files[0];if(!a)return;const l=new FileReader;l.onload=r=>{h.value=r.target.result},l.readAsDataURL(a)},A=()=>{F.Inertia.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{h.value=null,P()}})},P=()=>{var a;(a=u.value)!=null&&a.value&&(u.value.value=null)};return(a,l)=>(m(),$(R,{onSubmitted:x},{title:n(()=>[D]),description:n(()=>[T]),form:n(()=>[a.$page.props.jetstream.managesProfilePhotos?(m(),g("div",G,[t("input",{ref_key:"photoInput",ref:u,type:"file",class:"hidden",onChange:I},null,544),e(d,{for:"photo",value:"Photo"}),b(t("div",M,[t("img",{src:_.user.profile_photo_url,alt:_.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,O)],512),[[k,!h.value]]),b(t("div",Y,[t("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:j("background-image: url('"+h.value+"');")},null,4)],512),[[k,h.value]]),e(C,{class:"mt-2 mr-2",type:"button",onClick:V(N,["prevent"])},{default:n(()=>[q]),_:1},8,["onClick"]),_.user.profile_photo_path?(m(),$(C,{key:0,type:"button",class:"mt-2",onClick:V(A,["prevent"])},{default:n(()=>[H]),_:1},8,["onClick"])):c("",!0),e(f,{message:o(s).errors.photo,class:"mt-2"},null,8,["message"])])):c("",!0),t("div",J,[e(d,{for:"name",value:"Name"}),e(p,{id:"name",modelValue:o(s).name,"onUpdate:modelValue":l[0]||(l[0]=r=>o(s).name=r),type:"text",class:"mt-1 block w-full",autocomplete:"name"},null,8,["modelValue"]),e(f,{message:o(s).errors.name,class:"mt-2"},null,8,["message"])]),t("div",K,[e(d,{for:"salary_number",value:a.$page.props.user.role=="customer"?"Customer Number":"Salary Number"},null,8,["value"]),e(p,{id:"salary_number",modelValue:o(s).salary_number,"onUpdate:modelValue":l[1]||(l[1]=r=>o(s).salary_number=r),type:"text",disabled:["serviceman","foreman","customer","sales_support","supervisor"].includes(a.$page.props.user.role),class:S([{"bg-gray-100":["serviceman","foreman","customer","sales_support","supervisor"].includes(a.$page.props.user.role)},"mt-1 block w-full"])},null,8,["modelValue","disabled","class"]),["serviceman","foreman","sales_support","supervisor"].includes(a.$page.props.user.role)?(m(),g("p",Q,"Used for log in to system. Ask superadmin if you want to change it.")):c("",!0),["customer"].includes(a.$page.props.user.role)?(m(),g("p",W,"Used for log in to system.")):c("",!0),e(f,{message:o(s).errors.salary_number,class:"mt-2"},null,8,["message"])]),a.$page.props.user.role!="customer"?(m(),g("div",X,[e(d,{for:"role",value:"Role"}),e(p,{id:"role",value:a.$page.props.user.role,disabled:"",type:"text",class:"mt-1 block w-full bg-gray-100 capitalize",autocomplete:"role"},null,8,["value"])])):c("",!0),t("div",Z,[e(d,{for:"email",value:"Email"}),e(p,{id:"email",modelValue:o(s).email,"onUpdate:modelValue":l[2]||(l[2]=r=>o(s).email=r),type:"email",class:"mt-1 block w-full"},null,8,["modelValue"]),e(f,{message:o(s).errors.email,class:"mt-2"},null,8,["message"]),a.$page.props.jetstream.hasEmailVerification&&_.user.email_verified_at===null?(m(),g("div",ee,[t("p",se,[oe,e(o(E),{href:a.route("verification.send"),method:"post",as:"button",class:"underline text-gray-600 hover:text-gray-900",onClick:V(U,["prevent"])},{default:n(()=>[ae]),_:1},8,["href","onClick"])]),b(t("div",le," A new verification link has been sent to your email address. ",512),[[k,w.value]])])):c("",!0)]),t("div",te,[e(d,{for:"phone",value:"Phone Number"}),e(p,{id:"phone",modelValue:o(s).phone,"onUpdate:modelValue":l[3]||(l[3]=r=>o(s).phone=r),type:"text",class:"mt-1 block w-full",autocomplete:"phone"},null,8,["modelValue"]),e(f,{message:o(s).errors.phone,class:"mt-2"},null,8,["message"])]),t("div",re,[e(d,{for:"address",value:"Address"}),e(p,{id:"address",modelValue:o(s).address,"onUpdate:modelValue":l[4]||(l[4]=r=>o(s).address=r),type:"text",class:"mt-1 block w-full",autocomplete:"address"},null,8,["modelValue"]),e(f,{message:o(s).errors.address,class:"mt-2"},null,8,["message"])])]),actions:n(()=>[e(z,{on:o(s).recentlySuccessful,class:"mr-3"},{default:n(()=>[ne]),_:1},8,["on"]),e(L,{class:S({"opacity-25":o(s).processing}),disabled:o(s).processing},{default:n(()=>[ie]),_:1},8,["class","disabled"])]),_:1}))}};export{ye as default};