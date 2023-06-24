"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37304],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"$pinsUpdate",description:"$pinsUpdate holds data for the channel the channel pins were updated in. (channelPinsUpdate event)",id:"pinsUpdate"},i=void 0,o={unversionedId:"functions/event-related/pinsUpdate",id:"version-6.2.6/functions/event-related/pinsUpdate",title:"$pinsUpdate",description:"$pinsUpdate holds data for the channel the channel pins were updated in. (channelPinsUpdate event)",source:"@site/versioned_docs/version-6.2.6/functions/event-related/pinsUpdate.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/pinsUpdate",permalink:"/docs/functions/event-related/pinsUpdate",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687638269,formattedLastUpdatedAt:"Jun 24, 2023",frontMatter:{title:"$pinsUpdate",description:"$pinsUpdate holds data for the channel the channel pins were updated in. (channelPinsUpdate event)",id:"pinsUpdate"},sidebar:"docs",previous:{title:"$oldVariable",permalink:"/docs/functions/event-related/oldVariable"},next:{title:"$reactionData",permalink:"/docs/functions/event-related/reactionData"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$pinsUpdate")," holds data for the channel the channel pins were updated in. (channelPinsUpdate event)"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$pinsUpdate[option]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"option"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Option to retrieve. ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"time"),"  ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"channelID")," ",(0,a.kt)("br",null)," 3. ",(0,a.kt)("strong",{parentName:"td"},"channelName")," ",(0,a.kt)("br",null)," 4. ",(0,a.kt)("strong",{parentName:"td"},"channelMention")," ",(0,a.kt)("br",null)," 5. ",(0,a.kt)("strong",{parentName:"td"},"guildID")," ",(0,a.kt)("br",null)," 6. ",(0,a.kt)("strong",{parentName:"td"},"guildName")," ",(0,a.kt)("br",null)," 7. ",(0,a.kt)("strong",{parentName:"td"},"messageID")," ",(0,a.kt)("br",null)," 8. ",(0,a.kt)("strong",{parentName:"td"},"messageContent")),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")))))}u.isMDXComponent=!0}}]);