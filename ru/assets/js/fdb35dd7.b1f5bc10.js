"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[79525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>b,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>o(e,a(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$isUnicodeEmoji",description:"$isUnicodeEmoji \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0439 \u044d\u043c\u043e\u0434\u0437\u0438 \u044e\u043d\u0438\u043e\u0440\u043e\u043c \u044d\u043c\u043e\u0434\u0437\u0438.",id:"isUnicodeEmoji"},b=void 0,y={unversionedId:"functions/util-related/isUnicodeEmoji",id:"version-6.4.0/functions/util-related/isUnicodeEmoji",title:"$isUnicodeEmoji",description:"$isUnicodeEmoji \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0439 \u044d\u043c\u043e\u0434\u0437\u0438 \u044e\u043d\u0438\u043e\u0440\u043e\u043c \u044d\u043c\u043e\u0434\u0437\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isUnicodeEmoji.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isUnicodeEmoji",permalink:"/ru/docs/functions/util-related/isUnicodeEmoji",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691966519,formattedLastUpdatedAt:"13 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"$isUnicodeEmoji",description:"$isUnicodeEmoji \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0439 \u044d\u043c\u043e\u0434\u0437\u0438 \u044e\u043d\u0438\u043e\u0440\u043e\u043c \u044d\u043c\u043e\u0434\u0437\u0438.",id:"isUnicodeEmoji"},sidebar:"docs",previous:{title:"$isTimeout",permalink:"/ru/docs/functions/util-related/isTimeout"},next:{title:"$isUserDmEnabled",permalink:"/ru/docs/functions/util-related/isUserDmEnabled"}},j={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],g={toc:v},O="wrapper";function k(e){var t=e,{components:n}=t,i=m(t,["components"]);return(0,r.kt)(O,d(u(u({},g),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$isUnicodeEmoji")," \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442, \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043b\u0438 \u044d\u0442\u0438 \u044d\u043c\u043e\u0434\u0437\u0438 \u0435\u0434\u0438\u043d\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u043c\u0438."),(0,r.kt)("h2",u({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$isUnicodeEmoji[emojiResolver]\n")),(0,r.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"emojiResolver"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Unicode emoji."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,r.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0438\u0441\u0442\u0438\u043d\u0443"),' \u043a\u0430\u043a "\ud83e\udd13" \u0432\u0435\u0440\u043d\u044b\u0439 unicode emoji:'),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isUnicodeEmoji',\n    code: `\n  $isUnicodeEmoji[\ud83e\udd13]\n  `\n});\n")))}k.isMDXComponent=!0}}]);