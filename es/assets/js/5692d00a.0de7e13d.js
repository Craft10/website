"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[41599],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},23741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>g});var n=r(3905),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&d(e,r,t[r]);return e},p=(e,t)=>o(e,a(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$divide",description:"Divide the number, in the args."},v=void 0,b={unversionedId:"functions/divide",id:"version-5.5.5/functions/divide",title:"$divide",description:"Divide the number, in the args.",source:"@site/versioned_docs/version-5.5.5/functions/divide.md",sourceDirName:"functions",slug:"/functions/divide",permalink:"/es/docs/5.5.5/functions/divide",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 jul 2023",frontMatter:{title:"$divide",description:"Divide the number, in the args."},sidebar:"docs",previous:{title:"$discriminator",permalink:"/es/docs/5.5.5/functions/discriminator"},next:{title:"$djsEval",permalink:"/es/docs/5.5.5/functions/djseval"}},y={},g=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],O={toc:g},h="wrapper";function k(e){var t=e,{components:r}=t,i=f(t,["components"]);return(0,n.kt)(h,p(u(u({},O),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function divides the given args"),(0,n.kt)("h4",u({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 2 required fields"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Number 1 ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Number 2 ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Etc")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$divide[number1;number2;etc]")),(0,n.kt)("h4",u({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Number 1 - The first number we're dividing"),(0,n.kt)("li",{parentName:"ul"},"Number 2 - The second number we're dividing")),(0,n.kt)("h4",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "divide", \ncode: `$divide[6;2]` //Returns 3\n})\n')))}k.isMDXComponent=!0}}]);