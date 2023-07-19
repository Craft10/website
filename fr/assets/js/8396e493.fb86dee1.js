"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>k,toc:()=>v});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&s(e,n,t[n]);return e},p=(e,t)=>l(e,o(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$reactionCollector",description:"$reactionCollector va cr\xe9er un collecteur de r\xe9actions sur un message donn\xe9.",id:"reactionCollector"},f=void 0,k={unversionedId:"functions/awaited-related/reactionCollector",id:"version-6.4.0/functions/awaited-related/reactionCollector",title:"$reactionCollector",description:"$reactionCollector va cr\xe9er un collecteur de r\xe9actions sur un message donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/reactionCollector.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/reactionCollector",permalink:"/fr/docs/functions/awaited-related/reactionCollector",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689803006,formattedLastUpdatedAt:"19 juil. 2023",frontMatter:{title:"$reactionCollector",description:"$reactionCollector va cr\xe9er un collecteur de r\xe9actions sur un message donn\xe9.",id:"reactionCollector"},sidebar:"docs",previous:{title:"$editIn",permalink:"/fr/docs/functions/awaited-related/editIn"},next:{title:"$broadcastEval",permalink:"/fr/docs/functions/client-related/broadcastEval"}},N={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],b={toc:v},y="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(y,p(d(d({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$reactionCollector")," va cr\xe9er un collecteur de r\xe9actions sur un message donn\xe9."),(0,r.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$reactionCollector[IDsalon;IDmessage;filtreUtilisateur;temps;r\xe9actions;commandesAttendues;retirerR\xe9action?;donn\xe9esAttendues?;finAttente?]\n")),(0,r.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"IDsalon"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"ID du salon"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"IDmessage"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"ID du message"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"filtreUtilisateur"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"\xe0 ce que le bot r\xe9pondra ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"everyone")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"Identifiant sp\xe9cifique d'utilisateur")," - tout identifiant d'utilisateur"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"temps"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"quand la commande se termine/expire"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"r\xe9actions"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"r\xe9actions, vous pouvez s\xe9parer plusieurs \xe9motic\xf4nes par une virgule ( ",(0,r.kt)("inlineCode",{parentName:"td"},","),")"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"commandesAttendues"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Commandes qui seront ex\xe9cut\xe9es, vous pouvez s\xe9parer plusieurs commandes par une virgule ( ",(0,r.kt)("inlineCode",{parentName:"td"},","),")"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"retirerR\xe9action?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"supprimer les r\xe9actions apr\xe8s l'ex\xe9cution des commandes"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"donn\xe9esAttendues?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8re"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Donn\xe9es attendues"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"finAttente?"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8re"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"fin de la commande attendue / commande attendue \xe0 ex\xe9cuter lorsque le minuteur se termine"),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"faux")))),(0,r.kt)("h2",d({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Ceci enverra un message lorsque vous ajouterez une r\xe9action :"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "reactionCollector",\n    code: `\n  $reactionCollector[$channelID;$splitText[1];$authorID;10m;\ud83d\udc40;awaitReaction;;true]\n  $textSplit[$sendMessage[R\xe9agissez avec "\ud83d\udc40" pour quelque chose de sp\xe9cial !;true]; ]\n  `\n});\n\nbot.awaitedCommand({\n    name: "awaitReaction",\n    code: `\n  $sendMessage[\ud83d\udc40 qu\'est-ce que c\'est ?]\n  `\n});\n')))}O.isMDXComponent=!0}}]);