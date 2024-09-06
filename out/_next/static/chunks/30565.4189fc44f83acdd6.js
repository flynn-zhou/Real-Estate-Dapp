"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[30565],{51375:function(e,t,n){n.d(t,{u:function(){return a}});var i=n(67294);async function o(e){switch(e){case"es_ES":return(await n.e(84663).then(n.bind(n,84663))).default;case"ja_JP":return(await n.e(70314).then(n.bind(n,70314))).default;case"tl_PH":return(await n.e(93672).then(n.bind(n,93672))).default;case"vi_VN":return(await n.e(39835).then(n.bind(n,39835))).default;case"de_DE":return(await n.e(12390).then(n.bind(n,12390))).default;case"ko_KR":return(await n.e(36377).then(n.bind(n,36377))).default;case"fr_FR":return(await n.e(928).then(n.bind(n,928))).default;default:return(await n.e(57981).then(n.bind(n,57981))).default}}function a(e){let[t,n]=(0,i.useState)(void 0);return(0,i.useEffect)(()=>{o(e).then(e=>{n(e)})},[e]),t}},75980:function(e,t,n){n.d(t,{p:function(){return C}});var i=n(85893),o=n(43191),a=n(88144),r=n(67294),l=n(28933),s=n(88615);async function d(e){let t=await fetch(`${(0,s.TS)("inAppWallet")}/api/2024-05-05/ecosystem-wallet`,{headers:{"x-ecosystem-id":e}}),n=await t.json();if(!n||"UNAUTHORIZED"===n.code)throw Error(n.message||`Could not find ecosystem wallet with id ${e}, please check your ecosystem wallet configuration.`);return n.authOptions??void 0}var c=n(85044),u=n(8098),p=n(59416),h=n(69314),g=n(51964),m=n(68817),w=n(44789),f=n(49233),y=n(15879),b=n(54888),x=n(14514),v=n(57654),k=n(25153),$=n(20070),E=n(69538),I=n(16696),j=n(477),W=n(38170);let L=["email","phone","google","apple","facebook","passkey"],C=e=>{let t=e.locale,{wallet:n}=e,o=(0,y.aV)(),s=(0,g.v$)(),E=(0,r.useMemo)(()=>"inApp"===e.wallet.id?e.wallet.getConfig()?.metadata?.image:void 0,[e.wallet]),C={google:t.signInWithGoogle,facebook:t.signInWithFacebook,apple:t.signInWithApple,discord:t.signInWithDiscord,farcaster:"Farcaster",telegram:"Telegram"},{data:P,isLoading:R}=(0,a.a)({queryKey:["auth-options",n.id],queryFn:async()=>(0,c.J)(n)?d(n.id):null,enabled:(0,c.J)(n),retry:!1}),_=(0,c.J)(n)?P??L:n.getConfig()?.auth?.options??L,A=_.indexOf("email"),O=-1!==A,T=_.indexOf("phone"),F=-1!==T,[U,J]=(0,r.useState)(null),Z=(0,r.useMemo)(()=>U||(O&&F?A<T?"email":"phone":O?"email":F?"phone":"none"),[O,F,A,T,U]);if((0,c.J)(n)&&R)return(0,i.jsx)(j.a,{});let M=_.includes("passkey"),B="email"===Z?t.emailPlaceholder:t.phonePlaceholder,q="email"===Z?t.emailRequired:t.phoneRequired,H="text";"email"===Z?H="email":"phone"===Z&&(H="tel");let D=_.filter(e=>h.D.includes(e)),N=D.length>0,z=(0,c.J)(n)?{id:n.id,partnerId:n.getConfig()?.partnerId}:void 0,G=async t=>{let i=n.getConfig(),a=i?.auth?.mode??"popup";if(i&&"auth"in i&&"popup"!==a&&!e.isLinking)return(0,p.Z)({authOption:t,client:e.client,ecosystem:z,redirectUrl:i?.auth?.redirectUrl,mode:a});try{let i=(0,W.P)({authOption:t,themeObj:s,client:e.client,ecosystem:z});if(!i)throw Error("Failed to open login window");let a={chain:e.chain,client:e.client,strategy:t,openedWindow:i,closeOpenedWindow:e=>{e.close()}},r=(()=>{if(e.isLinking){if("inApp"!==n.id)throw Error("Only in-app wallets support multi-auth");return(0,u.$)(n,a)}{let e=n.connect(a);return(0,w.F)(t,l.x),e}})();o({socialLogin:{type:t,connectionPromise:r}}),e.select()}catch(e){console.error(`Error signing in with ${t}`,e)}},K=D.length>2;return(0,i.jsxs)($.W2,{flex:"column",gap:"md",style:{position:"relative"},children:[E&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.E,{client:e.client,src:E.src,alt:E.alt,width:`${E.width}`,height:`${E.height}`,style:{margin:"auto"}}),(0,i.jsx)(v.L,{y:"xxs"})]}),N&&(0,i.jsx)($.W2,{flex:"row",center:"x",gap:D.length>4?"xs":"sm",style:{justifyContent:"space-between",display:"grid",gridTemplateColumns:`repeat(${D.length}, 1fr)`},children:D.map(t=>{let n=K?D.length>4?m.EA.md:m.EA.lg:m.EA.md;return(0,i.jsxs)(S,{"aria-label":`Login with ${t}`,"data-variant":K?"icon":"full",variant:"outline",disabled:e.disabled,onClick:()=>{G(t)},children:[(0,i.jsx)(x.E,{src:f.R[t],width:n,height:n,client:e.client}),!K&&`${1===D.length?"Continue with ":""}${C[t]}`]},t)})}),"wide"===e.size&&N&&(O||F)&&(0,i.jsx)(k.B,{text:t.or}),O&&(0,i.jsx)(i.Fragment,{children:"email"===Z?(0,i.jsx)(I.m,{type:H,onSelect:t=>{o({emailLogin:t}),e.select()},placeholder:B,name:"email",errorMessage:e=>{var n;if(n=e.toLowerCase(),!/^\S+@\S+\.\S+$/.test(n.replace(/\+/g,"")))return t.invalidEmail},disabled:e.disabled,emptyErrorMessage:q,submitButtonText:t.submitEmail}):(0,i.jsx)(b._,{client:e.client,icon:f.J2,onClick:()=>{J("email")},title:t.emailPlaceholder,disabled:e.disabled})}),F&&(0,i.jsx)(i.Fragment,{children:"phone"===Z?(0,i.jsx)(I.m,{format:"phone",type:H,onSelect:t=>{o({phoneLogin:t.replace(/[-\(\) ]/g,"")}),e.select()},placeholder:B,name:"phone",errorMessage:e=>{let n=e.replace(/[-\(\) ]/g,"");if(!/^[0-9]+$/.test(n)&&F)return t.invalidPhone},disabled:e.disabled,emptyErrorMessage:q,submitButtonText:t.submitEmail}):(0,i.jsx)(b._,{client:e.client,icon:f.T0,onClick:()=>{J("phone")},title:t.phonePlaceholder,disabled:e.disabled})}),M&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(b._,{client:e.client,icon:f.jH,onClick:()=>{o({passkeyLogin:!0}),e.select()},title:t.passkey,disabled:e.disabled})}),e.isLinking&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(b._,{client:e.client,icon:(0,f.ow)(""),onClick:()=>{o({walletLogin:!0}),e.select()},title:t.linkWallet})})]})},S=(0,o.Z)(E.zx)({flexGrow:1,"&[data-variant='full']":{display:"flex",justifyContent:"flex-start",padding:m.W0.md,gap:m.W0.sm,fontSize:m.JB.md,fontWeight:500,transition:"background-color 0.2s ease","&:active":{boxShadow:"none"}},"&[data-variant='icon']":{padding:m.W0.sm}})},38170:function(e,t,n){n.d(t,{P:function(){return o}});var i=n(72514);function o({authOption:e,themeObj:t,client:n,ecosystem:o}){let{height:r,width:l}="facebook"===e?{width:715,height:555}:{width:350,height:500},s=(window.innerHeight-r)/2,d=(window.innerWidth-l)/2,c=window.open(function(e,t,n){switch(e){case"apple":case"facebook":case"google":case"farcaster":case"telegram":case"discord":return(0,i.Z)({authOption:e,client:t,ecosystem:n});default:return""}}(e,n,o),void 0,`width=${l}, height=${r}, top=${s}, left=${d}`);if(c){let n="google"===e?"Sign In - Google Accounts":`Sign In - ${e.slice(0,1).toUpperCase()}${e.slice(1)}`;c.document.title=n,c.document.body.innerHTML=a,c.document.body.style.background=t.colors.modalBg,c.document.body.style.color=t.colors.accentText}return c&&window.addEventListener("beforeunload",()=>{c?.close()}),c}let a=`
<svg class="loader" viewBox="0 0 50 50">
  <circle
    cx="25"
    cy="25"
    r="20"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
  />
</svg>

<style>
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }

  .loader circle {
    animation: loading 1.5s linear infinite;
  }

  @keyframes loading {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
        }
  }
</style>
`},72514:function(e,t,n){n.d(t,{Z:function(){return r},o:function(){return l}});var i=n(88615),o=n(69314);let a=e=>{if(!o.L.includes(e)&&"wallet"!==e)throw Error(`Unknown auth option ${e}`);return"wallet"===e?"siwe":e},r=({authOption:e,client:t,ecosystem:n,mode:o="popup",redirectUrl:r})=>{if("popup"===o&&r)throw Error("Redirect URL is not supported for popup mode");if("window"===o&&!r)throw Error("Redirect URL is required for window mode");let l=a(e),s=`${(0,i.TS)("inAppWallet")}/api/2024-05-05/login/${l}?clientId=${t.clientId}`;if(n?.partnerId?s=`${s}&ecosystemId=${n.id}&ecosystemPartnerId=${n.partnerId}`:n&&(s=`${s}&ecosystemId=${n.id}`),"popup"!==o){let t=new URL(r||window.location.href);t.searchParams.set("walletId",n?.id||"inApp"),t.searchParams.set("authProvider",e),s=`${s}&redirectUrl=${encodeURIComponent(t.toString())}`}return s},l=({authOption:e,client:t,ecosystem:n})=>{let o=a(e),r=`${(0,i.TS)("inAppWallet")}/api/2024-05-05/login/${o}/callback?clientId=${t.clientId}`;return n?.partnerId?r=`${r}&ecosystemId=${n.id}&ecosystemPartnerId=${n.partnerId}`:n&&(r=`${r}&ecosystemId=${n.id}`),r}},59416:function(e,t,n){n.d(t,{f:function(){return l},Z:function(){return r}});var i=n(88615),o=n(72514);let a=({isWindowOpenedByFn:e,win:t,closeOpenedWindow:n})=>{e?t?.close():t&&n?n(t):t&&t.close()},r=e=>{let t=(0,o.Z)({...e,mode:e.mode||"redirect"});"redirect"===e.mode?window.location.href=t:window.open(t)},l=async e=>{let t=e.openedWindow,n=!1;if(t||(t=window.open((0,o.Z)({...e,mode:"popup"}),`Login to ${e.authOption}`,"width=350, height=500"),n=!0),!t)throw Error("Something went wrong opening pop-up");return await new Promise((o,r)=>{let l=window.setInterval(async()=>{t.closed&&(clearInterval(l),window.removeEventListener("message",s),r(Error("User closed login window")))},1e3),s=async d=>{if(d.origin===(0,i.TS)("inAppWallet")){if("object"!=typeof d.data){r(Error("Invalid event data"));return}switch(d.data.eventType){case"oauthSuccessResult":window.removeEventListener("message",s),clearInterval(l),a({isWindowOpenedByFn:n,win:t,closeOpenedWindow:e.closeOpenedWindow}),d.data.authResult&&o(d.data.authResult);break;case"oauthFailureResult":window.removeEventListener("message",s),clearInterval(l),a({isWindowOpenedByFn:n,win:t,closeOpenedWindow:e.closeOpenedWindow}),r(Error(d.data.errorString))}}};window.addEventListener("message",s)})}}}]);