"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97179],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),u=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56706:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>g,default:()=>h,frontMatter:()=>k,metadata:()=>N,toc:()=>f});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m=(t,e)=>{for(var n in e||(e={}))d.call(e,n)&&p(t,n,e[n]);if(i)for(var n of i(e))u.call(e,n)&&p(t,n,e[n]);return t},s=(t,e)=>l(t,o(e)),c=(t,e)=>{var n={};for(var a in t)d.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&i)for(var a of i(t))e.indexOf(a)<0&&u.call(t,a)&&(n[a]=t[a]);return n};const k={title:"$addButton",description:"$addButton ajoutera un bouton au message du bot.",id:"addButton"},g=void 0,N={unversionedId:"functions/interaction-related/addButton",id:"version-6.4.0/functions/interaction-related/addButton",title:"$addButton",description:"$addButton ajoutera un bouton au message du bot.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/addButton.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/addButton",permalink:"/fr/docs/functions/interaction-related/addButton",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691966519,formattedLastUpdatedAt:"13 ao\xfbt 2023",frontMatter:{title:"$addButton",description:"$addButton ajoutera un bouton au message du bot.",id:"addButton"},sidebar:"docs",previous:{title:"$addApplicationCommandPermissions",permalink:"/fr/docs/functions/interaction-related/addApplicationCommandPermissions"},next:{title:"$addClientReactions",permalink:"/fr/docs/functions/interaction-related/addClientReactions"}},b={},f=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:f},v="wrapper";function h(t){var e=t,{components:n}=e,r=c(e,["components"]);return(0,a.kt)(v,s(m(m({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$addButton")," ajoutera un bouton au message du bot."),(0,a.kt)("h2",m({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$addButton[index;\xe9tiquette;style;IDpersonnalis\xe9;d\xe9sactiv\xe9?;\xe9moji?]\n")),(0,a.kt)("h2",m({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"index"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"nombre"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Dans quelle ligne (action) le bouton appara\xeet."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\xe9tiquette"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Le texte qui sera affich\xe9 sur le bouton comme \xe9tiquette."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"style"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Le ",(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("a",m({parentName:"strong"},{href:"https://discord.com/developers/docs/interactions/message-components#button-object-button-styles"}),"style"))," du bouton."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"IDpersonnalis\xe9"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"L'ID personnalis\xe9 du composant utilis\xe9 pour identifier le bouton."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"d\xe9sactiv\xe9?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bool\xe9en"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Rendre le bouton inutilisable/d\xe9sactiv\xe9? ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"true")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"false")," (par d\xe9faut)"),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"Faux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\xe9moji?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"L'\xe9moji affich\xe9 dans le bouton."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"Faux")))),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h3",null," Types de boutons ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nom"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Valeur"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Couleur"),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Primary"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"bleu-violet"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Bouton exemple;primary;IDpersonnalis\xe9;false]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Secondary"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"gris"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Bouton exemple;secondary;IDpersonnalis\xe9;false]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Success"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Vert"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Bouton exemple;success;IDpersonnalis\xe9;false]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Danger"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"rouge"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Bouton exemple;danger;IDpersonnalis\xe9;false]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Link"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"5"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"gris, navigue vers une URL"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Bouton exemple;link;https://discord.gg;false]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Emoji personnalis\xe9"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"peu importe"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"peu importe"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Bouton exemple;link;lien;false;nomEmoji,ID\xe9moji,anim\xe9 (true/false)]"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Unicode EmojiEmoji unicode"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"peu importe"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"peu importe"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"$addButton[1;Bouton exemple;link;lien;false;\ud83d\ude00]")))))),(0,a.kt)("h2",m({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("p",null,"Ceci ajoute un bouton principal et un lien au message du bot :"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'addButton',\n    code: `\n    Bonjour!\n    $addButton[1;Bouton exemple !;primary;boutonExemple;false;\ud83d\udc94]\n    $addButton[1;Bouton exemple !;link;https://discord.gg;false]\n  `\n});\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.interactionCommand({\n    name : 'boutonExemple',\n    prototype: 'button',\n    code: `\n    $interactionReply[Interaction de bouton g\xe9niale !]\n  `\n});\n")))}h.isMDXComponent=!0}}]);