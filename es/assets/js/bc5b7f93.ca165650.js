"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[37567],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>O,frontMatter:()=>k,metadata:()=>b,toc:()=>h});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>o(e,s(t)),m=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const k={title:"$sendWebhookMessage",description:"$sendWebhookMessage enviar\xe1 un mensaje usando un webhook existente.",id:"sendWebhookMessage"},g=void 0,b={unversionedId:"functions/message-related/sendWebhookMessage",id:"version-6.4.0/functions/message-related/sendWebhookMessage",title:"$sendWebhookMessage",description:"$sendWebhookMessage enviar\xe1 un mensaje usando un webhook existente.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/message-related/sendWebhookMessage.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/sendWebhookMessage",permalink:"/es/docs/functions/message-related/sendWebhookMessage",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689803006,formattedLastUpdatedAt:"19 jul 2023",frontMatter:{title:"$sendWebhookMessage",description:"$sendWebhookMessage enviar\xe1 un mensaje usando un webhook existente.",id:"sendWebhookMessage"},sidebar:"docs",previous:{title:"$sendMessage",permalink:"/es/docs/functions/message-related/sendMessage"},next:{title:"$unPinMessage",permalink:"/es/docs/functions/message-related/unPinMessage"}},f={},h=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:h},y="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(y,c(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"$sendWebhookMessage enviar\xe1 un mensaje usando un webhook existente."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$sendWebhookMessage[ID de webhook;Token de webhook;contenido;ID de retorno?]\n")),(0,r.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID de webhook"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"El ID del webhook."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Token de webhook"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Token del webhook."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"contenido"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"El contenido del mensaje a enviar."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"ID de retorno?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\xbfDevolver ID del mensaje?  ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"true")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"false")," (por defecto)"),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto crear\xe1 un webhook y enviar\xe1 un mensaje usando:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'sendWebhookMessage',\n    code: `\n   $sendWebhookMessage[$splitText[1];$splitText[2];Hello!;false]\n   $textSplit[$createWebhook[$channelID;$username;$userAvatar;Testing!;,];,]\n  ` \n/* Usar $textSplit para dividir el ID y el Token en partes separadas para usarlo en sendWebhookMessage\n $splitText[1] es igual a la ID del webhook\n$splitText[2] es igual al token de webhook\n  */\n});\n")))}O.isMDXComponent=!0}}]);