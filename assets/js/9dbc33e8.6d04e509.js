"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[22238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),g=i,m=p["".concat(u,".").concat(g)]||p[g]||d[g]||l;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},57656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const l={title:"$guildDescription",description:"$guildDescription will return the guild's description.",id:"guildDescription"},a=void 0,o={unversionedId:"functions/guild-related/guildDescription",id:"version-6.3.0/functions/guild-related/guildDescription",title:"$guildDescription",description:"$guildDescription will return the guild's description.",source:"@site/versioned_docs/version-6.3.0/functions/guild-related/guildDescription.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildDescription",permalink:"/docs/functions/guild-related/guildDescription",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688622430,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$guildDescription",description:"$guildDescription will return the guild's description.",id:"guildDescription"},sidebar:"docs",previous:{title:"$guildDefaultMessageNotifications",permalink:"/docs/functions/guild-related/guildDefaultMessageNotifications"},next:{title:"$guildEmojiExists",permalink:"/docs/functions/guild-related/guildEmojiExists"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$guildDescription")," will return the guild's description."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$guildDescription[guildID?]\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the guild."),(0,i.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,i.kt)("h2",{id:"examples"},"Example(s)"),(0,i.kt)("p",null,"This will return the description of a specific guild:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildDescription',\n    code: `\n  $guildDescription[$guildID]\n  `\n});\n")))}d.isMDXComponent=!0}}]);