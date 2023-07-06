"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[43630],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(o,".").concat(m)]||p[m]||u[m]||l;return t?a.createElement(g,s(s({ref:n},d),{},{components:t})):a.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const l={title:"$channelSendMessage",description:"$channelSendMessage will send a message in a specific channel.",id:"channelSendMessage"},s=void 0,i={unversionedId:"functions/message-related/channelSendMessage",id:"version-6.3.0/functions/message-related/channelSendMessage",title:"$channelSendMessage",description:"$channelSendMessage will send a message in a specific channel.",source:"@site/versioned_docs/version-6.3.0/functions/message-related/channelSendMessage.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/channelSendMessage",permalink:"/docs/functions/message-related/channelSendMessage",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688622430,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$channelSendMessage",description:"$channelSendMessage will send a message in a specific channel.",id:"channelSendMessage"},sidebar:"docs",previous:{title:"$addMessageReactions",permalink:"/docs/functions/message-related/addMessageReactions"},next:{title:"$deleteMessage",permalink:"/docs/functions/message-related/deleteMessage"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2},{value:"Embeds",id:"embeds",level:3}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$channelSendMessage")," will send a message in a specific channel."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$channelSendMessage[channelID;content;returnID?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Where the messages shall be sent to."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"What the content of the message should be."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"returnID?"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If the message ID should be returned or not. ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"true")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"false")," (default)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,'This will send "Hello!" to the current channel:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'channelSendMessage',\n    code: `\n  $channelSendMessage[$channelID;Hello!;false]\n  `\n});\n")),(0,r.kt)("h3",{id:"embeds"},"Embeds"),(0,r.kt)("p",null,"This will send an embed with description and footer to the current channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'channelSendMessage',\n    code: `\n  $channelSendMessage[$channelID;{newEmbed:{title:Hello}{footer:Bye}};false]\n  `\n});\n")))}u.isMDXComponent=!0}}]);