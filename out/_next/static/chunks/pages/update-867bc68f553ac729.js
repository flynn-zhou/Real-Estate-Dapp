(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8060],{31430:function(e,l,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/update",function(){return a(93255)}])},93255:function(e,l,a){"use strict";a.r(l);var s=a(85893),i=a(67294),c=a(35553);a(87066);var t=a(70907),r=a(94141),n=a(95600),d=a(24683);let o=["Housing","Rental","Farmhouse","Office","Commercial","Country"];l.default=()=>{let[e,l]=(0,i.useState)(!1),[a,m]=(0,i.useState)([]),[h,p]=(0,i.useState)(null),[x,j]=(0,i.useState)(null),[g,u]=(0,i.useState)("Upload Image"),{firstAccount:N,createPropertyFunction:v}=(0,n.F1)(),[f,b]=(0,i.useState)({propertyTitle:"",description:"",category:"",price:"",images:"",propertyAddress:""}),w=(e,l)=>{b({...f,[e]:l.target.value})},y=async()=>{(0,d.xg)(f.images,async e=>{e?(l(!0),await v({...f,price:c.vz(f.price,18)}),l(!1)):(alert("Provide valid image URL"),b({...f,images:""}))})},C=async()=>{if(u("Image Uploading..."),h)try{let e=await d.OH.upload.file(h);console.log("handleIPFS upload return upload: ",e);let l=await d.OH.gateways.createSignedURL({cid:e.cid,expires:30});return b({...f,images:l}),u("Image Uploaded"),p(null),alert("Successfully Image Uploaded"),l}catch(e){console.log("Unable to upload image: ",e),alert("Unable to upload image to pinata")}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"creat-collection-area pt--80",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row g-5 ",children:[(0,s.jsxs)("div",{className:"col-lg-3 offset-1 ml_md--0 ml_sm--0",children:[(0,s.jsxs)("div",{className:"collection-single-wized banner",children:[(0,s.jsx)("label",{className:"title required",children:"Property image"}),(0,s.jsxs)("div",{className:"create-collection-input logo-image",children:[(0,s.jsxs)("div",{className:"logo-c-image logo",children:[(0,s.jsx)("img",{id:"rbtinput1",src:x||"/profile/profile-01.jpg",alt:"Profile-NFT"}),(0,s.jsx)("label",{htmlFor:"fatima",title:"No File Choosen",children:(0,s.jsx)("span",{className:"text-center color-white",children:(0,s.jsx)("i",{className:"feather-edit"})})})]}),(0,s.jsx)("div",{className:"button-area",children:(0,s.jsx)("div",{className:"brows-file-wrapper",children:(0,s.jsx)("input",{name:"fatima",id:"fatima",type:"file",onChange:e=>{let l=e.target.files[0],a=new window.FileReader;a.readAsArrayBuffer(l),a.onloadend=()=>{alert("onloadend call back setting"),p(e.target.files[0]),e.target.files&&e.target.files[0]&&j(URL.createObjectURL(e.target.files[0]))},e.preventDefault()}})})})]}),h&&(0,s.jsx)("a",{onClick:()=>C(),className:"btn btn-primary-alta btn-large",children:g})]}),(0,s.jsxs)("div",{className:"collection-single-wized banner",children:[(0,s.jsx)("label",{className:"title",children:"Cover Image"}),(0,s.jsxs)("div",{className:"create-collection-input feature-image",children:[(0,s.jsxs)("div",{className:"logo-c-image feature",children:[(0,s.jsx)("img",{id:"rbtinput2",src:"/profile/cover-04.png",alt:"Profile-NFT"}),(0,s.jsx)("label",{htmlFor:"nipa",title:"No File Choosen",children:(0,s.jsx)("span",{className:"text-center color-white",children:(0,s.jsx)("i",{className:"feather-edit"})})})]}),(0,s.jsx)("div",{className:"button-area",children:(0,s.jsx)("div",{className:"brows-file-wrapper",children:(0,s.jsx)("input",{name:"nipa",id:"nipa",type:"file"})})})]})]}),(0,s.jsxs)("div",{className:"collection-single-wized banner",children:[(0,s.jsx)("label",{className:"title",children:"Featured image"}),(0,s.jsxs)("div",{className:"create-collection-input feature-image",children:[(0,s.jsxs)("div",{className:"logo-c-image feature",children:[(0,s.jsx)("img",{id:"createfileImage",src:"/profile/cover-03.jpg",alt:"Profile-NFT"}),(0,s.jsx)("label",{htmlFor:"createinputfile",title:"No File Choosen",children:(0,s.jsx)("span",{className:"text-center color-white",children:(0,s.jsx)("i",{className:"feather-edit"})})})]}),(0,s.jsx)("div",{className:"button-area",children:(0,s.jsx)("div",{className:"brows-file-wrapper",children:(0,s.jsx)("input",{name:"createinputfile",id:"createinputfile",type:"file"})})})]})]})]}),(0,s.jsx)("div",{className:"col-lg-7",children:(0,s.jsx)("div",{className:"create-collection-form-wrapper",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"collection-single-wized",children:[(0,s.jsx)("label",{htmlFor:"name",className:"title required",children:"Property Title"}),(0,s.jsx)("div",{className:"create-collection-input",children:(0,s.jsx)("input",{id:"name",className:"name",type:"text",required:!0,placeholder:"propertyTitle",onChange:e=>w("propertyTitle",e)})})]})}),(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"collection-single-wized",children:[(0,s.jsx)("label",{htmlFor:"url",className:"title",children:"Image"}),(0,s.jsx)("div",{className:"create-collection-input",children:(0,s.jsx)("input",{id:"url",className:"url",type:"text",required:!0,placeholder:"images",value:null==f?void 0:f.images,onChange:e=>w("images",e)})})]})}),(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsxs)("div",{className:"collection-single-wized",children:[(0,s.jsx)("label",{className:"title",children:"Category"}),(0,s.jsx)("div",{className:"create-collection-input",children:(0,s.jsxs)("div",{className:"nice-select mb--30",tabIndex:"0",children:[(0,s.jsx)("span",{className:"current",children:"Add Category"}),(0,s.jsx)("ul",{className:"list",children:o.map((e,l)=>(0,s.jsx)("li",{onClick:()=>b({...f,category:e}),"data-value":"Housing",className:"option",children:e},l+1))})]})})]})}),(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsxs)("div",{className:"collection-single-wized",children:[(0,s.jsx)("label",{htmlFor:"description",className:"title",children:"Description"}),(0,s.jsx)("div",{className:"create-collection-input",children:(0,s.jsx)("textarea",{id:"description",className:"text-area",placeholder:"description",onChange:e=>w("description",e)})})]})}),(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"collection-single-wized",children:[(0,s.jsx)("label",{htmlFor:"earning",className:"title",children:"Price"}),(0,s.jsx)("div",{className:"create-collection-input",children:(0,s.jsx)("input",{id:"earning",className:"url",type:"number",placeholder:"price",onChange:e=>w("price",e)})})]})}),(0,s.jsx)("div",{className:"col-lg-6",children:(0,s.jsxs)("div",{className:"collection-single-wized",children:[(0,s.jsx)("label",{htmlFor:"wallet",className:"title",children:"Property Address"}),(0,s.jsx)("div",{className:"create-collection-input",children:(0,s.jsx)("input",{id:"wallet",className:"url",type:"text",placeholder:"propertyAddress",onChange:e=>w("propertyAddress",e)})})]})}),(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsx)("div",{className:"nuron-information mb--30",children:(0,s.jsxs)("div",{className:"single-notice-setting",children:[(0,s.jsxs)("div",{className:"input",children:[(0,s.jsx)("input",{type:"checkbox",id:"themeSwitch",name:"theme-switch",className:"theme-switch__input"}),(0,s.jsx)("label",{for:"themeSwitch",className:"theme-switch__label",children:(0,s.jsx)("span",{})})]}),(0,s.jsx)("div",{className:"content-text",children:(0,s.jsx)("p",{children:"Explicit & sensitive content"})})]})})}),(0,s.jsx)("div",{className:"col-lg-12",children:(0,s.jsxs)("div",{className:"button-wrapper",children:[(0,s.jsx)("a",{href:"#",className:"btn btn-primary btn-large mr--30","data-bs-toggle":"modal","data-bs-target":"#collectionModal",children:"Preview"}),(0,s.jsx)("a",{onClick:()=>y(),className:"btn btn-primary-alta btn-large",children:e?(0,s.jsx)(t.aN,{}):"Create"})]})})]})})})]})})}),(0,s.jsx)(r.rM,{data:f})]})}}},function(e){e.O(0,[57409,90479,9526,91855,62413,66428,87066,48464,94141,92888,49774,40179],function(){return e(e.s=31430)}),_N_E=e.O()}]);