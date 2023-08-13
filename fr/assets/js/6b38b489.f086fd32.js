"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[68682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>v,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},s=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$ordinal",description:"$ordinal ajoute st, nd, th \xe0 un nombre tel que : 1st, 2nd, 3rd, 4th.",id:"ordinal"},b=void 0,v={unversionedId:"functions/math-related/ordinal",id:"version-6.4.0/functions/math-related/ordinal",title:"$ordinal",description:"$ordinal ajoute st, nd, th \xe0 un nombre tel que : 1st, 2nd, 3rd, 4th.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/math-related/ordinal.md",sourceDirName:"functions/math-related",slug:"/functions/math-related/ordinal",permalink:"/fr/docs/functions/math-related/ordinal",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691966519,formattedLastUpdatedAt:"13 ao\xfbt 2023",frontMatter:{title:"$ordinal",description:"$ordinal ajoute st, nd, th \xe0 un nombre tel que : 1st, 2nd, 3rd, 4th.",id:"ordinal"},sidebar:"docs",previous:{title:"$multi",permalink:"/fr/docs/functions/math-related/multi"},next:{title:"$round",permalink:"/fr/docs/functions/math-related/round"}},y={},k=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],h={toc:k},g="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(g,s(u(u({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$ordinal")," ajoute ",(0,r.kt)("inlineCode",{parentName:"p"},"st"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"th")," \xe0 un nombre tel que : ",(0,r.kt)("inlineCode",{parentName:"p"},"1er"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2nd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"3rd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"4th"),"."),(0,r.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$ordinal[nombre]\n")),(0,r.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"nombre"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"nombre"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Nombre dont on va ajouter ",(0,r.kt)("inlineCode",{parentName:"td"},"st"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nd"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"rd"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"th")," \xe0 celui-ci."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")))),(0,r.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'ordinal',\n    code: `\n  $ordinal[12] -> Renvoie 12nd \n  $ordinal[50] -> Renvoie 50th\n  $ordinal[11] -> Renvoie 11st\n  $ordinal[88] -> Renvoie 88th\n  `\n});\n")))}O.isMDXComponent=!0}}]);