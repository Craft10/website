"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[54360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(o,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>N,frontMatter:()=>v,metadata:()=>h,toc:()=>k});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&u(e,n,t[n]);return e},s=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const v={title:"$createChannelInvite",description:"$createChannelInvite will create a channel invite.",id:"createChannelInvite"},f=void 0,h={unversionedId:"functions/guild-related/createChannelInvite",id:"version-6.4.0/functions/guild-related/createChannelInvite",title:"$createChannelInvite",description:"$createChannelInvite will create a channel invite.",source:"@site/versioned_docs/version-6.4.0/functions/guild-related/createChannelInvite.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/createChannelInvite",permalink:"/docs/functions/guild-related/createChannelInvite",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691966519,formattedLastUpdatedAt:"Aug 13, 2023",frontMatter:{title:"$createChannelInvite",description:"$createChannelInvite will create a channel invite.",id:"createChannelInvite"},sidebar:"docs",previous:{title:"$createChannel",permalink:"/docs/functions/guild-related/createChannel"},next:{title:"$createRole",permalink:"/docs/functions/guild-related/createRole"}},g={},k=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2},{value:"Advanced Example(s)",id:"advanced-examples",level:3}],y={toc:k},b="wrapper";function N(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(b,s(d(d({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$createChannelInvite")," will create a channel invite."),(0,a.kt)("h2",d({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$createChannelInvite[channelID?;...options]\n")),(0,a.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"channelID?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"The channel ID of which the invite will be created."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"options?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Invite options."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h3",null," Invite Target Types ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"TYPE"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"VALUE"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"STREAM"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"EMBEDDED_APPLICATION"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"2"))))),(0,a.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will create an invite of the channel where the command is executed in:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'createChannelInvite',\n    code: `\n  $createChannelInvite[$channelID]\n  `\n});\n")),(0,a.kt)("h3",d({},{id:"advanced-examples"}),"Advanced Example(s)"),(0,a.kt)("p",null,"Create Temporary Invites with limited uses:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'createChannelInvite\',\n    code: `\n  $createChannelInvite[$channelID;{\n            "temporary": true,\n            "maxAge": 650,\n            "maxUses": 25,\n            "unique": true\n  }]\n  `\n});\n')),(0,a.kt)("p",null,"Create Activity Invites:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'createChannelInvite\',\n    code: `\n  $createChannelInvite[voiceID;{\n            "targetApplication": "application ID",\n            "targetType": 2\n  }]\n  `\n});\n')))}N.isMDXComponent=!0}}]);