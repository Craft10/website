"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35264],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(r),f=n,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||l;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,a[1]=i;for(var d=2;d<l;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>k,frontMatter:()=>m,metadata:()=>v,toc:()=>y});var o=r(3905),n=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&u(e,r,t[r]);return e},p=(e,t)=>l(e,a(t)),f=(e,t)=>{var r={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&d.call(e,o)&&(r[o]=e[o]);return r};const m={title:"$guildLowestRole",description:"$guildLowestRole devolver\xe1 el rol m\xe1s bajo de un servidor espec\xedfico.",id:"guildLowestRole"},g=void 0,v={unversionedId:"functions/info-related/guildLowestRole",id:"version-6.4.0/functions/info-related/guildLowestRole",title:"$guildLowestRole",description:"$guildLowestRole devolver\xe1 el rol m\xe1s bajo de un servidor espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/guildLowestRole.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/guildLowestRole",permalink:"/es/docs/functions/info-related/guildLowestRole",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$guildLowestRole",description:"$guildLowestRole devolver\xe1 el rol m\xe1s bajo de un servidor espec\xedfico.",id:"guildLowestRole"},sidebar:"docs",previous:{title:"$getRoleColor",permalink:"/es/docs/functions/info-related/getRoleColor"},next:{title:"$guildVanityURL",permalink:"/es/docs/functions/info-related/guildVanityURL"}},b={},y=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:y},w="wrapper";function k(e){var t=e,{components:r}=t,n=f(t,["components"]);return(0,o.kt)(w,p(c(c({},O),n),{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$guildLowestRole")," devolver\xe1 el rol m\xe1s bajo de un servidor espec\xedfico."),(0,o.kt)("h2",c({},{id:"modo-de-uso"}),"Modo de uso"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$guildLowestRole[servidorID?]\n")),(0,o.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,o.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,o.kt)("th",c({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,o.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",c({parentName:"tr"},{align:null}),"servidorID?"),(0,o.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,o.kt)("td",c({parentName:"tr"},{align:null}),"ID del servidor."),(0,o.kt)("td",c({parentName:"tr"},{align:"center"}),"no")))),(0,o.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,o.kt)("p",null,"Esto devolver\xe1 el ID del rol de servidor m\xe1s bajo:"),(0,o.kt)("pre",null,(0,o.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildLowestRole',\n    code: `\n  $guildLowestRole[$guildID]\n  `\n});\n")))}k.isMDXComponent=!0}}]);