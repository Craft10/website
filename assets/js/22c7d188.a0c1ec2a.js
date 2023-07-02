"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[12319],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(t),d=o,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||s;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31695:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const s={title:"$suppressErrors",description:"Supresses all errors in a command, able to send a custom one"},a=void 0,i={unversionedId:"functions/suppresserrors",id:"version-5.5.5/functions/suppresserrors",title:"$suppressErrors",description:"Supresses all errors in a command, able to send a custom one",source:"@site/versioned_docs/version-5.5.5/functions/suppresserrors.md",sourceDirName:"functions",slug:"/functions/suppresserrors",permalink:"/docs/5.5.5/functions/suppresserrors",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1688314942,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$suppressErrors",description:"Supresses all errors in a command, able to send a custom one"},sidebar:"docs",previous:{title:"$sum",permalink:"/docs/5.5.5/functions/sum"},next:{title:"$systemChannelID",permalink:"/docs/5.5.5/functions/systemchannelid"}},c={},p=[],u={toc:p},l="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(l,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function suppresses all errors and sends a custom one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"$suppressErrors[error message (optional)]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "suppressErrors",\ncode: `Nothing is wrong with this code!\n$suppressErrors[Theres something wrong with this code]`\n})\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"From 1.4.0 update, new subfunction, ",(0,o.kt)("inlineCode",{parentName:"p"},"{error}"),"has been added. This will return any errors with your custom error message")))}m.isMDXComponent=!0}}]);