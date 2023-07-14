"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[8266],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(r),v=i,d=p["".concat(s,".").concat(v)]||p[v]||u[v]||o;return r?n.createElement(d,a(a({ref:t},f),{},{components:r})):n.createElement(d,a({ref:t},f))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},76470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={title:"$serverVerificationLevel",description:"Sends the verification level of the current server"},a=void 0,c={unversionedId:"functions/serververificationlevel",id:"version-5.5.5/functions/serververificationlevel",title:"$serverVerificationLevel",description:"Sends the verification level of the current server",source:"@site/versioned_docs/version-5.5.5/functions/serververificationlevel.md",sourceDirName:"functions",slug:"/functions/serververificationlevel",permalink:"/docs/5.5.5/functions/serververificationlevel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689356303,formattedLastUpdatedAt:"Jul 14, 2023",frontMatter:{title:"$serverVerificationLevel",description:"Sends the verification level of the current server"},sidebar:"docs",previous:{title:"$serverSplash",permalink:"/docs/5.5.5/functions/serversplash"},next:{title:"$setBotAvatar",permalink:"/docs/5.5.5/functions/setbotavatar"}},s={},l=[],f={toc:l},p="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function returns the current guild's server verification level"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "serverVerificationLvl",\ncode: `Server Verification Level: $serverVerificationLevel`\n})\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(78430).Z,width:"703",height:"519"})))}u.isMDXComponent=!0},78430:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/image (32)-e5374ab937bcb234dd1417bf90df1889.png"}}]);