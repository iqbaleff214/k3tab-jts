import{_ as c}from"./AppLayout.aaf8d1a9.js";import p from"./DeleteUserForm.c0b21b8d.js";import{J as s}from"./SectionBorder.11a11c13.js";import l from"./LogoutOtherBrowserSessionsForm.b369f24b.js";import f from"./TwoFactorAuthenticationForm.be489507.js";import u from"./UpdatePasswordForm.764963ad.js";import _ from"./UpdateProfileInformationForm.12745c6d.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.655df51d.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.bca9137b.js";import"./SectionTitle.d073ac84.js";import"./DangerButton.9af5fda3.js";import"./InputError.2e4c1321.js";import"./SecondaryButton.56d6501e.js";import"./ActionMessage.a55dfa7a.js";import"./Button.b880c575.js";import"./Label.d01ab87f.js";import"./FormSection.f13b5810.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},M={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{M as default};
