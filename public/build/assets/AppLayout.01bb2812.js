import{o as s,e as a,a as t,d as M,j as k,k as L,l as D,g as i,n as m,f as c,t as b,m as x,p as F,q as O,r as v,s as j,v as B,x as z,b as u,w as r,T as E,c as f,L as C,H as I,i as l,F as $,h as A,y as P}from"./app.f171c1d5.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";const U={},H={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},R=t("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#ffc107"},null,-1),q=t("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#ffc107"},null,-1),J=[R,q];function G(d,n){return s(),a("svg",H,J)}const K=V(U,[["render",G]]),Q={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},W={class:"flex items-center justify-between flex-wrap"},X={class:"w-0 flex-1 flex items-center min-w-0"},Y={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},Z=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ee=[Z],te={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},se=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},null,-1),oe=[se],re={class:"ml-3 font-medium text-sm text-white truncate"},ne={class:"shrink-0 sm:ml-3"},ae=t("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),ie=[ae],le={__name:"Banner",setup(d){const n=M(!0),o=k(()=>{var e;return((e=L().props.value.jetstream.flash)==null?void 0:e.bannerStyle)||"success"}),p=k(()=>{var e;return((e=L().props.value.jetstream.flash)==null?void 0:e.banner)||""});return D(p,async()=>{n.value=!0}),(e,y)=>(s(),a("div",null,[n.value&&i(p)?(s(),a("div",{key:0,class:m({"bg-yellow-500":i(o)=="success","bg-red-700":i(o)=="danger"})},[t("div",Q,[t("div",W,[t("div",X,[t("span",{class:m(["flex p-2 rounded-lg",{"bg-yellow-600":i(o)=="success","bg-red-600":i(o)=="danger"}])},[i(o)=="success"?(s(),a("svg",Y,ee)):c("",!0),i(o)=="danger"?(s(),a("svg",te,oe)):c("",!0)],2),t("p",re,b(i(p)),1)]),t("div",ne,[t("button",{type:"button",class:m(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-yellow-600 focus:bg-yellow-600":i(o)=="success","hover:bg-red-600 focus:bg-red-600":i(o)=="danger"}]),"aria-label":"Dismiss",onClick:y[0]||(y[0]=x(h=>n.value=!1,["prevent"]))},ie,2)])])])],2)):c("",!0)]))}},de={class:"relative"},N={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(d){const n=d;let o=M(!1);const p=h=>{o.value&&h.key==="Escape"&&(o.value=!1)};F(()=>document.addEventListener("keydown",p)),O(()=>document.removeEventListener("keydown",p));const e=k(()=>({48:"w-48"})[n.width.toString()]),y=k(()=>n.align==="left"?"origin-top-left left-0":n.align==="right"?"origin-top-right right-0":"origin-top");return(h,_)=>(s(),a("div",de,[t("div",{onClick:_[0]||(_[0]=T=>j(o)?o.value=!i(o):o=!i(o))},[v(h.$slots,"trigger")]),B(t("div",{class:"fixed inset-0 z-40",onClick:_[1]||(_[1]=T=>j(o)?o.value=!1:o=!1)},null,512),[[z,i(o)]]),u(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:r(()=>[B(t("div",{class:m(["absolute z-50 mt-2 rounded-md shadow-lg",[i(e),i(y)]]),style:{display:"none"},onClick:_[2]||(_[2]=T=>j(o)?o.value=!1:o=!1)},[t("div",{class:m(["rounded-md ring-1 ring-black ring-opacity-5",d.contentClasses])},[v(h.$slots,"content")],2)],2),[[z,i(o)]])]),_:3})]))}},ue={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},ce=["href"],w={__name:"DropdownLink",props:{href:String,as:String},setup(d){return(n,o)=>(s(),a("div",null,[d.as=="button"?(s(),a("button",ue,[v(n.$slots,"default")])):d.as=="a"?(s(),a("a",{key:1,href:d.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[v(n.$slots,"default")],8,ce)):(s(),f(i(C),{key:2,href:d.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:r(()=>[v(n.$slots,"default")]),_:3},8,["href"]))]))}},S={__name:"NavLink",props:{href:String,active:Boolean},setup(d){const n=d,o=k(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-yellow-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-yellow-700 transition":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition");return(p,e)=>(s(),f(i(C),{href:d.href,class:m(i(o))},{default:r(()=>[v(p.$slots,"default")]),_:3},8,["href","class"]))}},g={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(d){const n=d,o=k(()=>n.active?"block pl-3 pr-4 py-2 border-l-4 border-yellow-400 text-base font-medium text-yellow-700 bg-yellow-50 focus:outline-none focus:text-yellow-800 focus:bg-yellow-100 focus:border-yellow-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(p,e)=>(s(),a("div",null,[d.as=="button"?(s(),a("button",{key:0,class:m([i(o),"w-full text-left"])},[v(p.$slots,"default")],2)):(s(),f(i(C),{key:1,href:d.href,class:m(i(o))},{default:r(()=>[v(p.$slots,"default")]),_:3},8,["href","class"]))]))}},he={class:"min-h-screen bg-gray-100"},pe={class:"bg-white border-b border-gray-100"},fe={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},me={class:"flex justify-between h-16"},ge={class:"flex"},ve={class:"shrink-0 flex items-center"},_e={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},ye=l(" Dashboard "),be=l(" Service Order "),we=l(" User Management "),ke=l(" Customer "),xe={class:"hidden sm:flex sm:items-center sm:ml-6"},$e={class:"ml-3 relative"},Se={class:"inline-flex rounded-md"},Ce={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"},je=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Me={class:"w-60"},Te=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),Le=l(" Team Settings "),Be=l(" Create New Team "),ze=t("div",{class:"border-t border-gray-100"},null,-1),Ae=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Pe=["onSubmit"],Ne={class:"flex items-center"},De={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},Fe=t("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Oe=[Fe],Ee={class:"ml-3 relative"},Ie={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Ve=["src","alt"],Ue={key:1,class:"inline-flex rounded-md"},He={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"},Re=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),qe=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Je=l(" Profile "),Ge=l(" API Tokens "),Ke=t("div",{class:"border-t border-gray-100"},null,-1),Qe=["onSubmit"],We=l(" Log Out "),Xe={class:"-mr-2 flex items-center sm:hidden"},Ye={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ze={class:"pt-2 pb-3 space-y-1"},et=l(" Dashboard "),tt=l(" Service Order "),st=l(" User Management "),ot=l(" Customer "),rt={class:"pt-4 pb-1 border-t border-gray-200"},nt={class:"flex items-center px-4"},at={key:0,class:"shrink-0 mr-3"},it=["src","alt"],lt={class:"font-medium text-base text-gray-800"},dt={class:"font-medium text-sm text-gray-500"},ut={class:"mt-3 space-y-1"},ct=l(" Profile "),ht=l(" API Tokens "),pt=["onSubmit"],ft=l(" Log Out "),mt=t("div",{class:"border-t border-gray-200"},null,-1),gt=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),vt=l(" Team Settings "),_t=l(" Create New Team "),yt=t("div",{class:"border-t border-gray-200"},null,-1),bt=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),wt=["onSubmit"],kt={class:"flex items-center"},xt={key:0,class:"mr-2 h-5 w-5 text-green-400",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",stroke:"currentColor",viewBox:"0 0 24 24"},$t=t("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),St=[$t],Ct={key:0,class:"bg-white shadow"},jt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},Lt={__name:"AppLayout",props:{title:String},setup(d){const n=M(!1),o=e=>{P.Inertia.put(route("current-team.update"),{team_id:e.id},{preserveState:!1})},p=()=>{P.Inertia.post(route("logout"))};return(e,y)=>(s(),a("div",null,[u(i(I),{title:d.title},null,8,["title"]),u(le),t("div",he,[t("nav",pe,[t("div",fe,[t("div",me,[t("div",ge,[t("div",ve,[u(i(C),{href:e.route("dashboard")},{default:r(()=>[u(K,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),t("div",_e,[u(S,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:r(()=>[ye]),_:1},8,["href","active"]),u(S,{href:e.route("service-orders.index"),active:e.route().current("service-orders.*")||e.route().current("control-cards.*")},{default:r(()=>[be]),_:1},8,["href","active"]),["superadmin"].includes(e.$page.props.user.role)?(s(),f(S,{key:0,href:e.route("users.index"),active:e.route().current("users.*")},{default:r(()=>[we]),_:1},8,["href","active"])):c("",!0),["superadmin"].includes(e.$page.props.user.role)?(s(),f(S,{key:1,href:e.route("customers.index"),active:e.route().current("customers.*")},{default:r(()=>[ke]),_:1},8,["href","active"])):c("",!0)])]),t("div",xe,[t("div",$e,[e.$page.props.jetstream.hasTeamFeatures?(s(),f(N,{key:0,align:"right",width:"60"},{trigger:r(()=>[t("span",Se,[t("button",Ce,[l(b(e.$page.props.user.current_team.name)+" ",1),je])])]),content:r(()=>[t("div",Me,[e.$page.props.jetstream.hasTeamFeatures?(s(),a($,{key:0},[Te,u(w,{href:e.route("teams.show",e.$page.props.user.current_team)},{default:r(()=>[Le]),_:1},8,["href"]),e.$page.props.jetstream.canCreateTeams?(s(),f(w,{key:0,href:e.route("teams.create")},{default:r(()=>[Be]),_:1},8,["href"])):c("",!0),ze,Ae,(s(!0),a($,null,A(e.$page.props.user.all_teams,h=>(s(),a("form",{key:h.id,onSubmit:x(_=>o(h),["prevent"])},[u(w,{as:"button"},{default:r(()=>[t("div",Ne,[h.id==e.$page.props.user.current_team_id?(s(),a("svg",De,Oe)):c("",!0),t("div",null,b(h.name),1)])]),_:2},1024)],40,Pe))),128))],64)):c("",!0)])]),_:1})):c("",!0)]),t("div",Ee,[u(N,{align:"right",width:"48"},{trigger:r(()=>[e.$page.props.jetstream.managesProfilePhotos?(s(),a("button",Ie,[t("img",{class:"h-8 w-8 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,Ve)])):(s(),a("span",Ue,[t("button",He,[l(b(e.$page.props.user.name)+" ",1),Re])]))]),content:r(()=>[qe,u(w,{href:e.route("profile.show")},{default:r(()=>[Je]),_:1},8,["href"]),e.$page.props.jetstream.hasApiFeatures?(s(),f(w,{key:0,href:e.route("api-tokens.index")},{default:r(()=>[Ge]),_:1},8,["href"])):c("",!0),Ke,t("form",{onSubmit:x(p,["prevent"])},[u(w,{as:"button"},{default:r(()=>[We]),_:1})],40,Qe)]),_:1})])]),t("div",Xe,[t("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",onClick:y[0]||(y[0]=h=>n.value=!n.value)},[(s(),a("svg",Ye,[t("path",{class:m({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:m({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:m([{block:n.value,hidden:!n.value},"sm:hidden"])},[t("div",Ze,[u(g,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:r(()=>[et]),_:1},8,["href","active"]),u(g,{href:e.route("service-orders.index"),active:e.route().current("service-orders.*")||e.route().current("control-cards.*")},{default:r(()=>[tt]),_:1},8,["href","active"]),["superadmin"].includes(e.$page.props.user.role)?(s(),f(g,{key:0,href:e.route("users.index"),active:e.route().current("users.*")},{default:r(()=>[st]),_:1},8,["href","active"])):c("",!0),["superadmin"].includes(e.$page.props.user.role)?(s(),f(g,{key:1,href:e.route("customers.index"),active:e.route().current("customers.*")},{default:r(()=>[ot]),_:1},8,["href","active"])):c("",!0)]),t("div",rt,[t("div",nt,[e.$page.props.jetstream.managesProfilePhotos?(s(),a("div",at,[t("img",{class:"h-10 w-10 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,it)])):c("",!0),t("div",null,[t("div",lt,b(e.$page.props.user.name),1),t("div",dt,b(e.$page.props.user.email),1)])]),t("div",ut,[u(g,{href:e.route("profile.show"),active:e.route().current("profile.show")},{default:r(()=>[ct]),_:1},8,["href","active"]),e.$page.props.jetstream.hasApiFeatures?(s(),f(g,{key:0,href:e.route("api-tokens.index"),active:e.route().current("api-tokens.index")},{default:r(()=>[ht]),_:1},8,["href","active"])):c("",!0),t("form",{method:"POST",onSubmit:x(p,["prevent"])},[u(g,{as:"button"},{default:r(()=>[ft]),_:1})],40,pt),e.$page.props.jetstream.hasTeamFeatures?(s(),a($,{key:1},[mt,gt,u(g,{href:e.route("teams.show",e.$page.props.user.current_team),active:e.route().current("teams.show")},{default:r(()=>[vt]),_:1},8,["href","active"]),e.$page.props.jetstream.canCreateTeams?(s(),f(g,{key:0,href:e.route("teams.create"),active:e.route().current("teams.create")},{default:r(()=>[_t]),_:1},8,["href","active"])):c("",!0),yt,bt,(s(!0),a($,null,A(e.$page.props.user.all_teams,h=>(s(),a("form",{key:h.id,onSubmit:x(_=>o(h),["prevent"])},[u(g,{as:"button"},{default:r(()=>[t("div",kt,[h.id==e.$page.props.user.current_team_id?(s(),a("svg",xt,St)):c("",!0),t("div",null,b(h.name),1)])]),_:2},1024)],40,wt))),128))],64)):c("",!0)])])],2)]),e.$slots.header?(s(),a("header",Ct,[t("div",jt,[v(e.$slots,"header")])])):c("",!0),t("main",null,[v(e.$slots,"default")])])]))}};export{Lt as _};
