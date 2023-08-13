"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,f=m["".concat(u,".").concat(s)]||m[s]||d[s]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},33967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>h,toc:()=>y});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>i(e,l(t)),s=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$thumbnail",description:"$thumbnail ajoute une miniature \xe0 un embed (en haut \xe0 droite).",id:"thumbnail"},b=void 0,h={unversionedId:"functions/interaction-related/thumbnail",id:"version-6.4.0/functions/interaction-related/thumbnail",title:"$thumbnail",description:"$thumbnail ajoute une miniature \xe0 un embed (en haut \xe0 droite).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/thumbnail.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/thumbnail",permalink:"/fr/docs/functions/interaction-related/thumbnail",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691966519,formattedLastUpdatedAt:"13 ao\xfbt 2023",frontMatter:{title:"$thumbnail",description:"$thumbnail ajoute une miniature \xe0 un embed (en haut \xe0 droite).",id:"thumbnail"},sidebar:"docs",previous:{title:"$spawnShard",permalink:"/fr/docs/functions/interaction-related/spawnShard"},next:{title:"$title",permalink:"/fr/docs/functions/interaction-related/title"}},v={},y=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],g={toc:y},k="wrapper";function O(e){var t=e,{components:n}=t,a=s(t,["components"]);return(0,r.kt)(k,d(m(m({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$thumbnail")," ajoute une miniature \xe0 un embed (image du coin en haut \xe0 droite)."),(0,r.kt)("h2",m({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$thumbnail[index?;URL]\n")),(0,r.kt)("h2",m({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"index?"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"nombre"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Index de l'embed."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"Faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"URL"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"URL de l'image de miniature."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")))),(0,r.kt)("h2",m({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela va cr\xe9er un embed avec votre avatar en miniature :"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'thumbnail',\n    code: `\n   \n   $thumbnail[$userAvatar[$authorID]]\n   $description[Coucou, c'est ton avatar !]`\n});\n")))}O.isMDXComponent=!0}}]);