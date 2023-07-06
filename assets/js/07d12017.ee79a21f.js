"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Voice"},i=void 0,l={unversionedId:"class/Voice",id:"version-5.5.5/class/Voice",title:"Voice",description:"Usage",source:"@site/versioned_docs/version-5.5.5/class/Voice.md",sourceDirName:"class",slug:"/class/Voice",permalink:"/docs/5.5.5/class/Voice",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688622430,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"Voice"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"joinVc()",id:"joinvc",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Example",id:"example",level:4},{value:"readonly serversSize",id:"readonly-serverssize",level:3},{value:"Usage",id:"usage-2",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Initialise The Voice Class To Enable Aoijs Music System \n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"new Voice(client:Bot,ytdlOptions:YTDL,scOptions:SCDL,cacheOptions:CacheOptions)\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/5.5.5/options/voiceOptions"},"VoiceOptions")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"joinvc"},"joinVc()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Joins The Voice Channel")),(0,a.kt)("h4",{id:"usage-1"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"}," Voice.joinVc(voiceChannel:VoiceChannel,textChannel:TextChannel); \n")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," Voice.joinVc(member.voice.channel,channel) \n")),(0,a.kt)("h3",{id:"readonly-serverssize"},"readonly serversSize"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Gives Count Of All Voice Connections")),(0,a.kt)("h4",{id:"usage-2"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"}," Voice.serversSize \n")),(0,a.kt)("p",null,"Returns: ",(0,a.kt)("strong",{parentName:"p"},"number")))}d.isMDXComponent=!0}}]);