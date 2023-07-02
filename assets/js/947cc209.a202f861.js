"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,f=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},13999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"$addField",description:"Adds field to embed message.",id:"addfield"},l=void 0,d={unversionedId:"functions/addfield",id:"version-5.5.5/functions/addfield",title:"$addField",description:"Adds field to embed message.",source:"@site/versioned_docs/version-5.5.5/functions/addfield.md",sourceDirName:"functions",slug:"/functions/addfield",permalink:"/docs/5.5.5/functions/addfield",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1688314942,formattedLastUpdatedAt:"Jul 2, 2023",frontMatter:{title:"$addField",description:"Adds field to embed message.",id:"addfield"},sidebar:"docs",previous:{title:"$addEmoji",permalink:"/docs/5.5.5/functions/addemoji"},next:{title:"$addFields",permalink:"/docs/5.5.5/functions/addfields"}},o={},s=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Notice",id:"notice",level:2},{value:"Embed Limits",id:"embed-limits",level:2},{value:"Examples",id:"examples",level:2},{value:"Without inline:",id:"without-inline",level:3},{value:"With inline:",id:"with-inline",level:3}],p={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$addField")," allows you to add a field to in embed message."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$addField[index;name;text;inline?]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"index"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The embed's index"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The field's title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The field's description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"inline"),(0,r.kt)("td",{parentName:"tr",align:"left"},"For the field be in line or not"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,r.kt)("h2",{id:"notice"},"Notice"),(0,r.kt)("p",null,"If you are updated to latest version of aoi.js, you will not be ",(0,r.kt)("strong",{parentName:"p"},"required")," to use ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," anymore."),(0,r.kt)("p",null,"If you are using a number in the first field without anything else, you will be forced to use a index."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Due to aoi.js thinking you're going to use an index as first parameter")),(0,r.kt)("h2",{id:"embed-limits"},"Embed Limits"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Field Limit: 25 Fields"),(0,r.kt)("li",{parentName:"ul"},"Field Name Limit: 256 Characters"),(0,r.kt)("li",{parentName:"ul"},"Field Text Limit: 1024 Characters"))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"without-inline"},"Without inline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "add-field",\n  code: `\n  $addField[1;Your Username;Hello, I am Neo!]\n  `\n});\n')),(0,r.kt)("h3",{id:"with-inline"},"With inline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "add-field",\n  code: `\n  $addField[1;My Gender;Male.;yes]\n  \n  $addField[1;My Age;I\'m 20 years old.;yes]\n  \n  $addField[1;My name;My name is Neo.;yes]\n  `\n});\n')))}u.isMDXComponent=!0}}]);