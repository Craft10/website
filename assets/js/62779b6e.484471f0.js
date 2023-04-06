"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[22656],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),u=o,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"$cooldown",description:"$cooldown will set a cooldown for the author of the command after being used.",id:"cooldown"},l=void 0,i={unversionedId:"functions/Util/cooldown",id:"functions/Util/cooldown",title:"$cooldown",description:"$cooldown will set a cooldown for the author of the command after being used.",source:"@site/docs/functions/Util/cooldown.md",sourceDirName:"functions/Util",slug:"/functions/Util/cooldown",permalink:"/docs/functions/Util/cooldown",draft:!1,tags:[],version:"current",frontMatter:{title:"$cooldown",description:"$cooldown will set a cooldown for the author of the command after being used.",id:"cooldown"},sidebar:"docs",previous:{title:"$concatTextSplit",permalink:"/docs/functions/Util/concatTextSplit"},next:{title:"$creationDate",permalink:"/docs/functions/Util/creationDate"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$cooldown")," will set a user-based cooldown."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$cooldown[time;errorMessage?]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You are able to retrieve the remaining cooldown in the ",(0,o.kt)("inlineCode",{parentName:"li"},"$cooldown")," function by using ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"%time%"))," or any of the\nfollowing below.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%sec%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"time"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"the duration of the cooldown"),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"errorMessage?"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"error message when there's remaining time for the cooldown"),(0,o.kt)("td",{parentName:"tr",align:null},"false")))),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will set a cooldown for a command which applies to the user only and returns the remaining cooldown:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'cooldown',\n    code: `\n  hello\n  $cooldown[2m;Please wait %time% to execute this command again.]\n  `\n});\n")))}m.isMDXComponent=!0}}]);