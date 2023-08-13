"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46504],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),g=l,m=d["".concat(u,".").concat(g)]||d[g]||c[g]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var n=r(3905),l=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&p(e,r,t[r]);return e},c=(e,t)=>a(e,i(t)),g=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$highestGuildRole",description:"$guildHighestRole renverra le r\xf4le le plus \xe9lev\xe9 d'un serveur sp\xe9cifique.",id:"highestGuildRole"},f=void 0,v={unversionedId:"functions/guild-related/highestGuildRole",id:"version-6.4.0/functions/guild-related/highestGuildRole",title:"$highestGuildRole",description:"$guildHighestRole renverra le r\xf4le le plus \xe9lev\xe9 d'un serveur sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/highestGuildRole.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/highestGuildRole",permalink:"/fr/docs/functions/guild-related/highestGuildRole",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691966519,formattedLastUpdatedAt:"13 ao\xfbt 2023",frontMatter:{title:"$highestGuildRole",description:"$guildHighestRole renverra le r\xf4le le plus \xe9lev\xe9 d'un serveur sp\xe9cifique.",id:"highestGuildRole"},sidebar:"docs",previous:{title:"$guildWidgetChannelID",permalink:"/fr/docs/functions/guild-related/guildWidgetChannelID"},next:{title:"$isWidgetEnabled",permalink:"/fr/docs/functions/guild-related/isWidgetEnabled"}},h={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:b},k="wrapper";function O(e){var t=e,{components:r}=t,l=g(t,["components"]);return(0,n.kt)(k,c(d(d({},y),l),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildHighestRole")," renverra le r\xf4le le plus \xe9lev\xe9 d'un serveur sp\xe9cifique."),(0,n.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$guildHighestRole[IDserveur?;option?]\n")),(0,n.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"IDserveur?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"L'ID du serveur."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"option?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"L'option sur la fa\xe7on de retourner le r\xf4le ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"name")," (par d\xe9faut) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"id")," ",(0,n.kt)("br",null)," 3. ",(0,n.kt)("strong",{parentName:"td"},"mention")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")))),(0,n.kt)("h2",d({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela renverra le nom du r\xf4le le plus \xe9lev\xe9 du serveur dans lequel la commande a \xe9t\xe9 ex\xe9cut\xe9e:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'roleLePlusElev\xe9',\n    code: `\n  $guildHighestRole[$guildID;name]\n  `\n});\n")))}O.isMDXComponent=!0}}]);