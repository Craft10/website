"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46226],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),p=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(u.Provider,{value:r},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,y=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return t?a.createElement(y,i(i({ref:r},c),{},{components:t})):a.createElement(y,i({ref:r},c))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1164:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>k,toc:()=>v});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&c(e,t,r[t]);if(o)for(var t of o(r))p.call(r,t)&&c(e,t,r[t]);return e},s=(e,r)=>l(e,i(r)),m=(e,r)=>{var t={};for(var a in e)u.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&o)for(var a of o(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const y={title:"$arrayFind",description:"$arrayFind v\xe9rifiera le premier \xe9l\xe9ment du tableau qui correspond \xe0 la requ\xeate et le retournera.",id:"arrayFind"},f=void 0,k={unversionedId:"functions/array-related/arrayFind",id:"version-6.4.0/functions/array-related/arrayFind",title:"$arrayFind",description:"$arrayFind v\xe9rifiera le premier \xe9l\xe9ment du tableau qui correspond \xe0 la requ\xeate et le retournera.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayFind.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayFind",permalink:"/fr/docs/functions/array-related/arrayFind",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"8 ao\xfbt 2023",frontMatter:{title:"$arrayFind",description:"$arrayFind v\xe9rifiera le premier \xe9l\xe9ment du tableau qui correspond \xe0 la requ\xeate et le retournera.",id:"arrayFind"},sidebar:"docs",previous:{title:"$arrayFilter",permalink:"/fr/docs/functions/array-related/arrayFilter"},next:{title:"$arrayForEach",permalink:"/fr/docs/functions/array-related/arrayForEach"}},b={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Op\xe9rateurs de comparaison",id:"op\xe9rateurs-de-comparaison",level:2},{value:"Exemple(s)",id:"exemples",level:2}],g={toc:v},N="wrapper";function O(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,a.kt)(N,s(d(d({},g),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayFind")," v\xe9rifiera le premier \xe9l\xe9ment du tableau qui correspond \xe0 la requ\xeate et le retournera."),(0,a.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$arrayFind[nom;requ\xeate;typeDeRequ\xeate?;s\xe9parateur?]\n")),(0,a.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"requ\xeate"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L'\xe9l\xe9ment que nous allons rechercher pour chaque \xe9l\xe9ment du tableau."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"typeDeRequ\xeate?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"L'op\xe9rateur de comparaison."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"s\xe9parateur?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"S\xe9parateur."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")))),(0,a.kt)("h2",d({},{id:"op\xe9rateurs-de-comparaison"}),"Op\xe9rateurs de comparaison"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"==")," \u2014 Chaque \xe9l\xe9ment correspondant \xe0 la requ\xeate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!=")," \u2014 Chaque \xe9l\xe9ment qui ne correspond pas \xe0 la requ\xeate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">")," - Tous les \xe9l\xe9ments situ\xe9s \xe0 \"gauche\" de l'\xe9l\xe9ment trouv\xe9, \xe0 l'exclusion de lui-m\xeame."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<")," - Tous les \xe9l\xe9ments situ\xe9s \xe0 \"droite\" de l'\xe9l\xe9ment trouv\xe9, \xe0 l'exclusion de lui-m\xeame."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">="),' - Tous les \xe9l\xe9ments situ\xe9s \xe0 "gauche" de l\'\xe9l\xe9ment trouv\xe9, y compris lui-m\xeame.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<="),' - Tous les \xe9l\xe9ments situ\xe9s \xe0 "droite" de l\'\xe9l\xe9ment trouv\xe9, y compris lui-m\xeame.')),(0,a.kt)("h2",d({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-find",\n    code: `\n  $arrayFind[tableau;akarui;==;, ]\n  $createArray[tableau;aoi.js;akarui;documents;bot]\n  `\n    // Ceci renverra "akarui" car il correspond \xe0 la requ\xeate.\n});\n')))}O.isMDXComponent=!0}}]);