"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[14932],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>b,default:()=>x,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>i(e,l(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$isValidHex",description:"$isValidHex \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0439 \u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u043c.",id:"isValidHex"},b=void 0,y={unversionedId:"functions/util-related/isValidHex",id:"version-6.4.0/functions/util-related/isValidHex",title:"$isValidHex",description:"$isValidHex \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0439 \u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u043c.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isValidHex.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isValidHex",permalink:"/ru/docs/functions/util-related/isValidHex",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689803006,formattedLastUpdatedAt:"19 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$isValidHex",description:"$isValidHex \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0439 \u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u043c.",id:"isValidHex"},sidebar:"docs",previous:{title:"$isUserDmEnabled",permalink:"/ru/docs/functions/util-related/isUserDmEnabled"},next:{title:"$isValidImageLink",permalink:"/ru/docs/functions/util-related/isValidImageLink"}},g={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],k={toc:v},O="wrapper";function x(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,u(s(s({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$isValidHex")," \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442, \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c \u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0439 \u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043d\u044b\u0439 / \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u044b\u0439 \u0446\u0432\u0435\u0442."),(0,r.kt)("h2",s({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$isValidHex[colorResolver]\n")),(0,r.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0446\u0432\u0435\u0442\u043e\u0440\u0435\u0437\u043e\u043b\u0432\u0435\u0440"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430, \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Hex / \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u0430\u044f \u0446\u0432\u0435\u0442\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,r.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0438\u0441\u0442\u0438\u043d\u0443")," \u043a\u0430\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"#30dbd8")," \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043d\u044b\u0439 \u0446\u0432\u0435\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isValidHex',\n    code: `\n  $isValidHex[#30dbd8]\n  `\n});\n")),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0432\u0435\u0440\u043d\u043e \u0432\u0435\u0440\u043d\u044b\u0439 \u0448\u0435\u0441\u0442\u043d\u0430\u0434\u0446\u0430\u0442\u0435\u0440\u0438\u0447\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u0438\u0441\u0442\u0438\u043d\u043d\u043e\u0433\u043e")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"80"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isValidHex',\n    code: `\n  $isValidHex[80]\n  `\n});\n")))}x.isMDXComponent=!0}}]);