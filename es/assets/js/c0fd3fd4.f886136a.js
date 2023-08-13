"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[95741],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(d,".").concat(m)]||p[m]||s[m]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&c(e,t,n[t]);if(i)for(var t of i(n))u.call(n,t)&&c(e,t,n[t]);return e},s=(e,n)=>l(e,o(n)),m=(e,n)=>{var t={};for(var r in e)d.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&u.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$findGuildChannel",description:"$findGuildChannel buscar\xe1 un canal de gremio dentro de un gremio.",id:"findGuildChannel"},b=void 0,g={unversionedId:"functions/util-related/findGuildChannel",id:"version-6.4.0/functions/util-related/findGuildChannel",title:"$findGuildChannel",description:"$findGuildChannel buscar\xe1 un canal de gremio dentro de un gremio.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/findGuildChannel.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/findGuildChannel",permalink:"/es/docs/functions/util-related/findGuildChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691966519,formattedLastUpdatedAt:"13 ago 2023",frontMatter:{title:"$findGuildChannel",description:"$findGuildChannel buscar\xe1 un canal de gremio dentro de un gremio.",id:"findGuildChannel"},sidebar:"docs",previous:{title:"$findChannel",permalink:"/es/docs/functions/util-related/findChannel"},next:{title:"$findNumbers",permalink:"/es/docs/functions/util-related/findNumbers"}},v={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},h="wrapper";function O(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.kt)(h,s(p(p({},k),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$findGuildChannel")," buscar\xe1 un canal determinado por su nombre."),(0,r.kt)("h2",p({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$findGuildChannel[canalResolver;returnSelf?;servidorID?]\n")),(0,r.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"canalResolver"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Nombre del canal en el que estuvo trabajando"),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"volverYo mismo?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"booleano"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Devuelve el canal en el que el comando fue ejecutado cuando no se encontr\xf3 nada."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"servidorID?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"ID del servidor desde el que se contar\xe1n los canales."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 el ID de canal de un canal llamado ",(0,r.kt)("inlineCode",{parentName:"p"},"#rules")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'findGuildChannel',\n    code: `\n  $findGuildChannel[rules;false;$guildID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);