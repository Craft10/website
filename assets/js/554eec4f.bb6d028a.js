"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[3963],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=a,g=s["".concat(c,".").concat(f)]||s[f]||p[f]||l;return t?n.createElement(g,o(o({ref:r},d),{},{components:t})):n.createElement(g,o({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=s;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},23303:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=t(87462),a=(t(67294),t(3905));const l={title:"$guildPreferredLocale",description:"$guildPreferredLocale will return a guild's set locale.",id:"guildPreferredLocale"},o=void 0,i={unversionedId:"functions/Info/guildPreferredLocale",id:"functions/Info/guildPreferredLocale",title:"$guildPreferredLocale",description:"$guildPreferredLocale will return a guild's set locale.",source:"@site/docs/functions/Info/guildPreferredLocale.md",sourceDirName:"functions/Info",slug:"/functions/Info/guildPreferredLocale",permalink:"/docs/functions/Info/guildPreferredLocale",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1679163118,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"$guildPreferredLocale",description:"$guildPreferredLocale will return a guild's set locale.",id:"guildPreferredLocale"},sidebar:"docs",previous:{title:"$guildNames",permalink:"/docs/functions/Info/guildNames"},next:{title:"$guildRoles",permalink:"/docs/functions/Info/guildRoles"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:u};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$guildPreferredLocale")," will return a guild's set locale."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$guildPreferredLocale[guildID?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"guild ID"),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("p",null,"This will return the guild's preferred locale:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildPreferredLocale',\n    code: `\n  $guildPreferredLocale[$guildID]\n  `\n});\n")))}p.isMDXComponent=!0}}]);