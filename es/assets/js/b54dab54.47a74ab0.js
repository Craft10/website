"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68327],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4020:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>y,frontMatter:()=>k,metadata:()=>h,toc:()=>b});var n=a(3905),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&u(e,a,t[a]);return e},d=(e,t)=>r(e,o(t)),m=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const k={title:"Introduction",description:"The basic introduction of aoi.js",slug:"/"},f=void 0,h={unversionedId:"guides/introduction",id:"version-5.5.5/guides/introduction",title:"Introduction",description:"The basic introduction of aoi.js",source:"@site/versioned_docs/version-5.5.5/guides/introduction.md",sourceDirName:"guides",slug:"/",permalink:"/es/docs/5.5.5/",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"Introduction",description:"The basic introduction of aoi.js",slug:"/"},sidebar:"docs",next:{title:"Setup",permalink:"/es/docs/5.5.5/guides/setup"}},g={},b=[{value:"Introduction",id:"introduction",level:3},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Features",id:"features",level:2},{value:"Function usage Example",id:"function-usage-example",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Events",id:"events",level:2},{value:"Database",id:"database",level:2},{value:"Music Integration",id:"music-integration",level:2},{value:"Optional Extensions",id:"optional-extensions",level:2},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Links",id:"links",level:2}],v={toc:b},w="wrapper";function y(e){var t=e,{components:a}=t,i=m(t,["components"]);return(0,n.kt)(w,d(c(c({},v),i),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Welcome to the page of aoi.js Documentation")),(0,n.kt)("h3",c({},{id:"introduction"}),"Introduction"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/aoijs-v5.png",alt:"aoijs"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"The most advanced string-based package to create a Discord Bot fast and powerful.")),(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"https://aoi.js.org/invite"}),(0,n.kt)("img",c({parentName:"a"},{src:"https://img.shields.io/discord/773352845738115102?color=5865F2%5C&logo=discord%5C&logoColor=white",alt:"Discord Server"})))," ",(0,n.kt)("a",c({parentName:"p"},{href:"https://www.npmjs.com/package/aoi.js"}),(0,n.kt)("img",c({parentName:"a"},{src:"https://img.shields.io/npm/v/aoi.js.svg?maxAge=3600",alt:"NPM Version"})))," ",(0,n.kt)("a",c({parentName:"p"},{href:"https://www.npmjs.com/package/aoi.js"}),(0,n.kt)("img",c({parentName:"a"},{src:"https://img.shields.io/npm/dt/aoi.js.svg?maxAge=3600",alt:"NPM Downloads"})))),(0,n.kt)("h2",c({},{id:"table-of-contents"}),"Table of Contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#features"}),"Features")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#function-usage-example"}),"Function usage Example"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#how-does-it-work"}),"How does it work?")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#events"}),"Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#database"}),"Database")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#music-integration"}),"Music Integration")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#optional-extensions"}),"Optional Extensions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#disclaimer"}),"Disclaimer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#links"}),"Links"))),(0,n.kt)("h2",c({},{id:"features"}),"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Built-in support of ",(0,n.kt)("a",c({parentName:"li"},{href:"https://www.npmjs.com/package/dbdjs.db"}),"database")," by default and ready for multipurpose."),(0,n.kt)("li",{parentName:"ul"},"Built-in 600+ functions, simple and easy to learn."),(0,n.kt)("li",{parentName:"ul"},"Simple to learn, all in string-based and compact."),(0,n.kt)("li",{parentName:"ul"},"Support of extensions available to be used by the community.")),(0,n.kt)("h2",c({},{id:"function-usage-example"}),"Function usage Example"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$authorID - Return the author ID/the userID who executed the function\n")),(0,n.kt)("h2",c({},{id:"how-does-it-work"}),"How does it work?"),(0,n.kt)("p",null,"It's fairly simple, by using ",(0,n.kt)("inlineCode",{parentName:"p"},"$")," as a sense of a function to execute, it's run by a command.\nBy using ",(0,n.kt)("inlineCode",{parentName:"p"},"$")," after the function name, and its additional fields, (if any) it'll work as intended by it function."),(0,n.kt)("h2",c({},{id:"events"}),"Events"),(0,n.kt)("p",null,"Events are the most important factor in creating a Discord Bot. This helps developers create certain events to occur within their Client. There are several events within aoi.js, an example event is when the Client is ready and logged onto the API."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.readyCommand({ //Event Command\n    channel: "Channel ID", //The channel where the Client will log. (optional)\n    code: `Code to execute` //This can be a message or code to execute.\n})\n')),(0,n.kt)("h2",c({},{id:"database"}),"Database"),(0,n.kt)("p",null,"With aoi.js powerful integration of database support, it has allowed several custom databases to work aside with aoi.js. Below is an example using the default database, this is not needed."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'}),'const aoijs = require("aoi.js")\n\nconst bot = new aoijs.AoiClient({\ntoken: "DISCORD BOT TOKEN",\nprefix: "DISCORD BOT PREFIX",\nintents: ["GUILDS", "GUILD_MESSAGES"],\n\n//INSERT THE FOLLOWING CODE\n\n  database: {\n    db: require("dbdjs.db"),\n    type: "dbdjs.db",\n    path: "./database/",\n    tables: ["main"],\n  }\n})\n')),(0,n.kt)("h2",c({},{id:"music-integration"}),"Music Integration"),(0,n.kt)("p",null,"Use this on your precaution, we do not endorse anything or affiliated with, we only add support towards it."),(0,n.kt)("p",null,"Do you want to make your Discord Bot different from others, possibly with the ability to play/stream music, it's simple and easy to use!"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$playTrack[type;name] - To play a track from the available third parties supported. \n")),(0,n.kt)("p",null,"More information in our ",(0,n.kt)("a",c({parentName:"p"},{href:"https://aoi.js.org/extensions/aoi.music/aoimusic-introduction"}),"documentation")),(0,n.kt)("h2",c({},{id:"optional-extensions"}),"Optional Extensions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.npmjs.com/package/@akarui/aoi.music"}),"@akarui/aoi.music")," to enable Music Functions compatibility. (",(0,n.kt)("inlineCode",{parentName:"li"},"npm install @akarui/aoi.music"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.npmjs.com/package/@akarui/aoi.panel"}),"@akarui/aoi.panel")," to enable Panel compatibility. (",(0,n.kt)("inlineCode",{parentName:"li"},"npm install @akarui/aoi.panel"),")\n")),(0,n.kt)("h2",c({},{id:"disclaimer"}),"Disclaimer"),(0,n.kt)("p",null,"aoi.js is not affiliated or associated with Discord or any other services."),(0,n.kt)("p",null,"aoi.js is managed by ",(0,n.kt)("a",c({parentName:"p"},{href:"https://discord.gg/HMUfMXDQsV"}),"Akarui Development Team"),"   "),(0,n.kt)("h2",c({},{id:"links"}),"Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://aoi.js.org"}),"Website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.npmjs.com/package/aoi.js"}),"NPM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/AkaruiDevelopment/aoi.js"}),"Github")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://discord.gg/HMUfMXDQsV"}),"Discord Support Server")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://aoi.js.org/docs/"}),"Documentation"))))}y.isMDXComponent=!0}}]);