"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82559],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"Client Status",description:"This guide will be covering the functionality and usage of client statuses.",id:"status"},s=void 0,l={unversionedId:"guides/Client/status",id:"version-6.3.0/guides/Client/status",title:"Client Status",description:"This guide will be covering the functionality and usage of client statuses.",source:"@site/versioned_docs/version-6.3.0/guides/Client/5status.md",sourceDirName:"guides/Client",slug:"/guides/Client/status",permalink:"/docs/guides/Client/status",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688622430,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"Client Status",description:"This guide will be covering the functionality and usage of client statuses.",id:"status"},sidebar:"docs",previous:{title:"Variables",permalink:"/docs/guides/Client/variables"},next:{title:"Sharding",permalink:"/docs/guides/Client/sharding"}},o={},u=[{value:"This guide will be covering statuses and client presences.",id:"this-guide-will-be-covering-statuses-and-client-presences",level:4},{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Bot Status",id:"bot-status",level:3},{value:"This section will cover how to customize your bot&#39;s status.",id:"this-section-will-cover-how-to-customize-your-bots-status",level:4},{value:"Client Presence",id:"client-presence",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"this-guide-will-be-covering-statuses-and-client-presences"},"This guide will be covering statuses and client presences."),(0,r.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#bot-status"},"Statuses"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#client-presence"},"Client Presence")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"bot-status"},"Bot Status"),(0,r.kt)("h4",{id:"this-section-will-cover-how-to-customize-your-bots-status"},"This section will cover how to customize your bot's status."),(0,r.kt)("p",null,"First of all we have to add the following piece of code to our main file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.status({\n    text: string,\n    type: string,\n    time: number,\n    URL?: string,\n    afk?: boolean\n});\n")),(0,r.kt)("p",null,"When you use sharding you can individually change the status of each shard:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.status({\n    text: string,\n    type: string,\n    time: number,\n    shard: number\n});\n")),(0,r.kt)("p",null,'This will display the text "Example Text!" as bot status, of course you can modify it.'),(0,r.kt)("p",null,"If you want to have multiple statuses just add multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"bot.status({...})"),", simple do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'bot.status({\n    text: "Example Text one!",\n    type: "PLAYING",\n    time: 12\n});\n\nbot.status({\n    text: "Example Text two!",\n    type: "STREAMING",\n    URL: "some URL"\n});\n')),(0,r.kt)("p",null,"There are various types of statuses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PLAYING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WATCHING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"STREAMING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LISTENING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"COMPETING"))),(0,r.kt)("h3",{id:"client-presence"},"Client Presence"),(0,r.kt)("p",null,"You can also set the bot's presence, by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," property, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'bot.status({\n    text: "Example Text!",\n    type: "PLAYING",\n    status: "dnd",\n    time: 12\n});\n')),(0,r.kt)("p",null,"There are multiple types of presences:"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"online")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"idle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"dnd")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"invisible")))))}d.isMDXComponent=!0}}]);