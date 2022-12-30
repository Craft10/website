"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26576],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return r?n.createElement(f,l(l({ref:t},d),{},{components:r})):n.createElement(f,l({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"$color",description:"Add color, to your sidebar embed description."},l=void 0,i={unversionedId:"functions/color",id:"version-5.5.5/functions/color",title:"$color",description:"Add color, to your sidebar embed description.",source:"@site/versioned_docs/version-5.5.5/functions/color.md",sourceDirName:"functions",slug:"/functions/color",permalink:"/docs/functions/color",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"$color",description:"Add color, to your sidebar embed description."},sidebar:"docs",previous:{title:"$closeTicket",permalink:"/docs/functions/closeticket"},next:{title:"$commandCode",permalink:"/docs/functions/commandcode"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Color Types",id:"color-types",level:4},{value:"Example",id:"example",level:2}],d={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function adds color to the embed"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$color[index;color]\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"index"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The index of the embed"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"color"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The color to be added to embed"),(0,o.kt)("td",{parentName:"tr",align:"left"},"color"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,o.kt)("h4",{id:"color-types"},"Color Types"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hex - Use hex color codes - Example: ","#","ff00ff"),(0,o.kt)("li",{parentName:"ul"},"Names - Use the name of the color - Example: RED"),(0,o.kt)("li",{parentName:"ul"},"RANDOM - Chooses a random color")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With Hex")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "color", \ncode: `\n$title[1;Title]\n$description[1;Hello world!]\n$color[1;#FF00FF]\n`\n})\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With Names")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "color", \ncode: `\n$title[1;Title]\n$description[1;Hello world!]\n$color[1;RED]\n`\n})\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"With RANDOM")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "color", \ncode: `\n$title[1;Title]\n$description[1;Hello world!]\n$color[1;RANDOM]\n`\n})\n')))}s.isMDXComponent=!0}}]);