"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96418],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(h,o(o({ref:n},s),{},{components:t})):a.createElement(h,o({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50510:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={title:"$cloneChannel",description:"$cloneChannel will clone a channel.",id:"cloneChannel"},o=void 0,c={unversionedId:"functions/Calling/cloneChannel",id:"functions/Calling/cloneChannel",title:"$cloneChannel",description:"$cloneChannel will clone a channel.",source:"@site/docs/functions/Calling/cloneChannel.md",sourceDirName:"functions/Calling",slug:"/functions/Calling/cloneChannel",permalink:"/docs/functions/Calling/cloneChannel",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1679163118,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"$cloneChannel",description:"$cloneChannel will clone a channel.",id:"cloneChannel"},sidebar:"docs",previous:{title:"$clearReactions",permalink:"/docs/functions/Calling/clearReactions"},next:{title:"$color",permalink:"/docs/functions/Calling/color"}},i={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"It won&#39;t clone any messages of that channel.",id:"it-wont-clone-any-messages-of-that-channel",level:3},{value:"Example(s)",id:"examples",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$cloneChannel")," will clone a channel."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$cloneChannel[channelID;name;returnID?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"channel ID to clone"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the cloned channel"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"returnID?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"return channel ID"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h3",{id:"it-wont-clone-any-messages-of-that-channel"},"It won't clone any messages of that channel."),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,'This will clone the current channel and name it "new channel":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'cloneChannel',\n    code: `\n  $cloneChannel[$channelID;new channel;false]\n  `\n});\n")))}u.isMDXComponent=!0}}]);