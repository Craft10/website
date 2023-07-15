"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5843],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?t.createElement(m,i(i({ref:n},p),{},{components:r})):t.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3313:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>w,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var t=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,n,r)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,u=(e,n)=>{for(var r in n||(n={}))s.call(n,r)&&p(e,r,n[r]);if(c)for(var r of c(n))l.call(n,r)&&p(e,r,n[r]);return e},d=(e,n)=>a(e,i(n)),f=(e,n)=>{var r={};for(var t in e)s.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&c)for(var t of c(e))n.indexOf(t)<0&&l.call(e,t)&&(r[t]=e[t]);return r};const m={title:"$nodeVersion",description:"Returns Node.js version."},v=void 0,y={unversionedId:"functions/nodeversion",id:"version-5.5.5/functions/nodeversion",title:"$nodeVersion",description:"Returns Node.js version.",source:"@site/versioned_docs/version-5.5.5/functions/nodeversion.md",sourceDirName:"functions",slug:"/functions/nodeversion",permalink:"/ar/docs/5.5.5/functions/nodeversion",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"\u0661\u0665 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$nodeVersion",description:"Returns Node.js version."},sidebar:"docs",previous:{title:"$nickname",permalink:"/ar/docs/5.5.5/functions/nickname"},next:{title:"$noEscapingMessage",permalink:"/ar/docs/5.5.5/functions/noescapingmessage"}},b={},O=[{value:"Example Command:",id:"example-command",level:4}],g={toc:O},j="wrapper";function w(e){var n=e,{components:r}=n,o=f(n,["components"]);return(0,t.kt)(j,d(u(u({},g),o),{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function returns the current Node.js verion the server is using."),(0,t.kt)("h4",u({},{id:"example-command"}),"Example Command:"),(0,t.kt)("p",null,"The function would return ",(0,t.kt)("inlineCode",{parentName:"p"},"v18.4.0")," as example."),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "node",\ncode: `\ncurrent version: $nodeVersion\n`\n})\n')))}w.isMDXComponent=!0}}]);