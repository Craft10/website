"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71464],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94462:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>j,frontMatter:()=>m,metadata:()=>b,toc:()=>k});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$uri",description:"$uri codificar\xe1 o descodificar\xe1 una URL.",id:"uri"},y=void 0,b={unversionedId:"functions/info-related/uri",id:"version-6.4.0/functions/info-related/uri",title:"$uri",description:"$uri codificar\xe1 o descodificar\xe1 una URL.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/uri.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/uri",permalink:"/es/docs/functions/info-related/uri",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689803006,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$uri",description:"$uri codificar\xe1 o descodificar\xe1 una URL.",id:"uri"},sidebar:"docs",previous:{title:"$uptime",permalink:"/es/docs/functions/info-related/uptime"},next:{title:"$vanityUses",permalink:"/es/docs/functions/info-related/vanityUses"}},g={},k=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:k},O="wrapper";function j(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(O,s(d(d({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$uri")," codificar\xe1 o descodificar\xe1 una URL."),(0,n.kt)("h2",d({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$uri[texto;tipo?]\n")),(0,n.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"texto"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Texto a codificar/decodificar."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"tipo?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Qu\xe9 hacer con el texto dado. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"encode")," (por defecto) ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"decode")),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto codificar\xe1 un texto determinado:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'encode',\n    code: `\n  $uri[aoi.js es genial :);encode]\n  `\n});\n")),(0,n.kt)("p",null,"Esto decodificar\xe1 un texto determinado:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'decode',\n    code: `\n  $uri[aoi.js%20es%20genial%20%3A);decode]\n  `\n});\n")))}j.isMDXComponent=!0}}]);