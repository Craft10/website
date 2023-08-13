"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[3126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>j,contentTitle:()=>g,default:()=>k,frontMatter:()=>f,metadata:()=>v,toc:()=>y});var n=r(3905),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&d(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&d(e,r,t[r]);return e},c=(e,t)=>a(e,l(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$guildEmojiExists",description:"$guildEmojiExists v\xe9rifiera si l'emoji donn\xe9 existe dans le serveur donn\xe9.",id:"guildEmojiExists"},g=void 0,v={unversionedId:"functions/guild-related/guildEmojiExists",id:"version-6.4.0/functions/guild-related/guildEmojiExists",title:"$guildEmojiExists",description:"$guildEmojiExists v\xe9rifiera si l'emoji donn\xe9 existe dans le serveur donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildEmojiExists.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildEmojiExists",permalink:"/fr/docs/functions/guild-related/guildEmojiExists",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691966519,formattedLastUpdatedAt:"13 ao\xfbt 2023",frontMatter:{title:"$guildEmojiExists",description:"$guildEmojiExists v\xe9rifiera si l'emoji donn\xe9 existe dans le serveur donn\xe9.",id:"guildEmojiExists"},sidebar:"docs",previous:{title:"$guildDescription",permalink:"/fr/docs/functions/guild-related/guildDescription"},next:{title:"$guildEmojis",permalink:"/fr/docs/functions/guild-related/guildEmojis"}},j={},y=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],E={toc:y},b="wrapper";function k(e){var t=e,{components:r}=t,i=m(t,["components"]);return(0,n.kt)(b,c(p(p({},E),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildEmojiExists")," v\xe9rifiera si l'emoji donn\xe9 existe dans le serveur donn\xe9."),(0,n.kt)("h2",p({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildEmojiExists[emojiDevant\xcatreV\xe9rifier;IDserveur?]\n")),(0,n.kt)("h2",p({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"emojiDevant\xcatreV\xe9rifier"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Emoji dont vous souhaitez v\xe9rifier l'existence sur le serveur donn\xe9."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"IDserveur?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"ID du serveur o\xf9 vous souhaitez v\xe9rifier l'existence de l'emoji donn\xe9."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"faux")))),(0,n.kt)("h2",p({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela renverra ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," car l'\xe9moji ",(0,n.kt)("img",p({parentName:"p"},{src:"https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless",alt:"emoji"}))," existe:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'emojiServeurExiste',\n    code: `\n  $guildEmojiExists[<:LerefMoney:1003365344724910191>;$guildID]\n  `\n});\n")))}k.isMDXComponent=!0}}]);