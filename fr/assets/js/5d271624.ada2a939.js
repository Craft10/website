"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[43440],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),u=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return a.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(t),m=n,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(f,i(i({ref:r},s),{},{components:t})):a.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84681:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>y,default:()=>h,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&s(e,t,r[t]);if(o)for(var t of o(r))u.call(r,t)&&s(e,t,r[t]);return e},d=(e,r)=>l(e,i(r)),m=(e,r)=>{var t={};for(var a in e)c.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))r.indexOf(a)<0&&u.call(e,a)&&(t[a]=e[a]);return t};const f={title:"$arrayIncludes",description:"$arrayIncludes v\xe9rifiera si un \xe9l\xe9ment sp\xe9cifique existe dans le tableau.",id:"arrayIncludes"},y=void 0,b={unversionedId:"functions/array-related/arrayIncludes",id:"version-6.4.0/functions/array-related/arrayIncludes",title:"$arrayIncludes",description:"$arrayIncludes v\xe9rifiera si un \xe9l\xe9ment sp\xe9cifique existe dans le tableau.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayIncludes.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayIncludes",permalink:"/fr/docs/functions/array-related/arrayIncludes",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691966519,formattedLastUpdatedAt:"13 ao\xfbt 2023",frontMatter:{title:"$arrayIncludes",description:"$arrayIncludes v\xe9rifiera si un \xe9l\xe9ment sp\xe9cifique existe dans le tableau.",id:"arrayIncludes"},sidebar:"docs",previous:{title:"$arrayForEach",permalink:"/fr/docs/functions/array-related/arrayForEach"},next:{title:"$arrayIndexOf",permalink:"/fr/docs/functions/array-related/arrayIndexOf"}},v={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:g},O="wrapper";function h(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,a.kt)(O,d(p(p({},k),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayIncludes")," v\xe9rifiera si un \xe9l\xe9ment sp\xe9cifique existe dans le tableau."),(0,a.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$arrayIncludes[nom;requ\xeate]\n")),(0,a.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"requ\xeate"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"L'\xe9l\xe9ment que nous allons rechercher pour chaque \xe9l\xe9ment du tableau."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")))),(0,a.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-includes",\n    code: `\n  $arrayIncludes[tableau;Leref]\n  $createArray[tableau;aoi.js;akarui;documents;bot]\n  `\n    // Ceci renverra "false" car le tableau ne contient pas le mot "Leref".\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-includes",\n    code: `\n  $arrayIncludes[tableau;akarui]\n  $createArray[tableau;aoi.js;akarui;documents;bot]\n  `\n    // Ceci renverra "true" car le tableau contient le mot "akarui".\n});\n')))}h.isMDXComponent=!0}}]);