import{d as k,c as q,B as c,C as m,F as o,aH as e,aG as n,aJ as D,aI as R,u as x,b1 as z,aD as A,aM as r,b2 as E,e as G,r as H,aL as I,aU as J,b3 as Q,b4 as T,b5 as j,b6 as K,b7 as O,aV as W,b8 as X,b9 as Y,ba as Z,bb as ee}from"./arco.bbdacfc8.js";import{F as oe,_ as se}from"./index.d68d4ca2.js";import{u as V,_ as F,a as ae,I as ne,b as te}from"./index.140309e9.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{f as re,g as le}from"./vue.67b87df8.js";import{u as ie}from"./loading.b4b50533.js";import"./chart.6ce23b19.js";const S="/assets/login-banner.426fb77f.png",ce={class:"banner"},_e={class:"banner-inner"},de={class:"carousel-title"},ue={class:"carousel-sub-title"},me=["src"],ge=k({__name:"banner",setup(i){const{t}=V(),g=q(()=>[{slogan:t("login.banner.slogan1"),subSlogan:t("login.banner.subSlogan1"),image:S},{slogan:t("login.banner.slogan2"),subSlogan:t("login.banner.subSlogan2"),image:S},{slogan:t("login.banner.slogan3"),subSlogan:t("login.banner.subSlogan3"),image:S}]);return(f,b)=>{const p=E,v=z;return c(),m("div",ce,[o("div",_e,[e(v,{class:"carousel","animation-name":"fade"},{default:n(()=>[(c(!0),m(D,null,R(x(g),s=>(c(),A(p,{key:s.slogan},{default:n(()=>[(c(),m("div",{key:s.slogan,class:"carousel-item"},[o("div",de,r(s.slogan),1),o("div",ue,r(s.subSlogan),1),o("img",{class:"carousel-image",src:s.image},null,8,me)]))]),_:2},1024))),128))]),_:1})])])}}});const pe=F(ge,[["__scopeId","data-v-2ce84fe6"]]),fe={class:"login-form-wrapper"},be={class:"login-form-title"},ve={class:"login-form-sub-title"},he={class:"login-form-error-msg"},we={class:"login-form-password-actions"},ye=k({__name:"login-form",setup(i){const t=re(),{t:g}=V(),f=G(""),{loading:b,setLoading:p}=ie(),v=ae(),s=le("login-config",{rememberPassword:!0,username:"admin",password:"admin"}),_=H({username:s.value.username,password:s.value.password}),C=async({errors:a,values:l})=>{if(!b.value&&!a){p(!0);try{await v.login(l);const{redirect:d,...h}=t.currentRoute.value.query;t.push({name:d||"MultiDimensionDataAnalysis",query:{...h}}),J.success(g("login.form.login.success"));const{rememberPassword:u}=s.value,{username:w,password:y}=l;s.value.username=u?w:"",s.value.password=u?y:""}catch(d){f.value=d.message}finally{p(!1)}}},P=a=>{s.value.rememberPassword=a};return(a,l)=>{const d=ne,h=Q,u=T,w=te,y=j,L=K,B=O,M=W,N=X,U=Y;return c(),m("div",fe,[o("div",be,r(a.$t("login.form.title")),1),o("div",ve,r(a.$t("login.form.title")),1),o("div",he,r(f.value),1),e(U,{ref:"loginForm",model:_,class:"login-form",layout:"vertical",onSubmit:C},{default:n(()=>[e(u,{field:"username",rules:[{required:!0,message:a.$t("login.form.userName.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[e(h,{modelValue:_.username,"onUpdate:modelValue":l[0]||(l[0]=$=>_.username=$),placeholder:a.$t("login.form.userName.placeholder")},{prefix:n(()=>[e(d)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(u,{field:"password",rules:[{required:!0,message:a.$t("login.form.password.errMsg")}],"validate-trigger":["change","blur"],"hide-label":""},{default:n(()=>[e(y,{modelValue:_.password,"onUpdate:modelValue":l[1]||(l[1]=$=>_.password=$),placeholder:a.$t("login.form.password.placeholder"),"allow-clear":""},{prefix:n(()=>[e(w)]),_:1},8,["modelValue","placeholder"])]),_:1},8,["rules"]),e(N,{size:16,direction:"vertical"},{default:n(()=>[o("div",we,[e(L,{checked:"rememberPassword","model-value":x(s).rememberPassword,onChange:P},{default:n(()=>[I(r(a.$t("login.form.rememberPassword")),1)]),_:1},8,["model-value","onChange"]),e(B,null,{default:n(()=>[I(r(a.$t("login.form.forgetPassword")),1)]),_:1})]),e(M,{type:"primary","html-type":"submit",long:"",loading:x(b)},{default:n(()=>[I(r(a.$t("login.form.login")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])}}});const $e=F(ye,[["__scopeId","data-v-0c3f4feb"]]),Ie=i=>(Z("data-v-ba53ad0a"),i=i(),ee(),i),Se={class:"container"},xe=Ie(()=>o("div",{class:"logo"},[o("img",{alt:"logo",src:se,style:{width:"32px",height:"32px"}}),o("div",{class:"logo-text"},"Furina")],-1)),ke={class:"content"},Fe={class:"content-inner"},Ve={class:"footer"},Ce=k({__name:"index",setup(i){return(t,g)=>(c(),m("div",Se,[xe,e(pe),o("div",ke,[o("div",Fe,[e($e)]),o("div",Ve,[e(oe)])])]))}});const Ee=F(Ce,[["__scopeId","data-v-ba53ad0a"]]);export{Ee as default};
