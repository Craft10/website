"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),m=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,f=u["".concat(d,".").concat(s)]||u[s]||c[s]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>k,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))m.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>o(e,l(t)),s=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$random",description:"$random generar\xe1 un n\xfamero aleatorio entre tu rango elegido.",id:"random"},g=void 0,k={unversionedId:"functions/util-related/random",id:"version-6.4.0/functions/util-related/random",title:"$random",description:"$random generar\xe1 un n\xfamero aleatorio entre tu rango elegido.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/random.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/random",permalink:"/es/docs/functions/util-related/random",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689803006,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$random",description:"$random generar\xe1 un n\xfamero aleatorio entre tu rango elegido.",id:"random"},sidebar:"docs",previous:{title:"$ram",permalink:"/es/docs/functions/util-related/ram"},next:{title:"$randomChannelID",permalink:"/es/docs/functions/util-related/randomChannelID"}},v={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2},{value:"Ejemplo avanzado",id:"ejemplo-avanzado",level:3}],b={toc:y},N="wrapper";function O(e){var t=e,{components:n}=t,a=s(t,["components"]);return(0,r.kt)(N,c(u(u({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$random")," generar\xe1 un n\xfamero aleatorio entre tu rango elegido."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$random[num1;num2;allow?;random?]\n")),(0,r.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"num1"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Inicio de la extensi\xf3n."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"num2"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Fin de la gama."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\xbfpermitir?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"booleano"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Permite la devoluci\xf3n de n\xfameros decimales."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"#advanced-Example"}),"\xbfaleatorio?")),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Si el n\xfamero devuelto ser\xe1 aleatorio."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 un n\xfamero aleatorio entre ",(0,r.kt)("inlineCode",{parentName:"p"},"20")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"250"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'random',\n    code: `\n  $random[20;250]\n  `\n});\n")),(0,r.kt)("h3",u({},{id:"ejemplo-avanzado"}),"Ejemplo avanzado"),(0,r.kt)("p",null,"Esto devolver\xe1 un n\xfamero decimal aleatorio entre ",(0,r.kt)("inlineCode",{parentName:"p"},"25")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"50"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'random',\n    code: `\n  $random[25;50;true]  \n  `\n});\n")),(0,r.kt)("p",null,"Esto devolver\xe1 un n\xfamero aleatorio entre ",(0,r.kt)("inlineCode",{parentName:"p"},"45")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"64")," y el segundo ",(0,r.kt)("inlineCode",{parentName:"p"},"$random")," tambi\xe9n ser\xe1 aleatorio:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'random',\n    code: `\n  $random[45;65;false;true]\n  $random[45;65;false;true]\n  `\n});\n")))}O.isMDXComponent=!0}}]);