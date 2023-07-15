"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[26047],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),v=o,b=u["".concat(l,".").concat(v)]||u[v]||f[v]||s;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},84796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>j,frontMatter:()=>b,metadata:()=>m,toc:()=>O});var n=r(3905),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>s(e,a(t)),v=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const b={title:"$serverBoostLevel"},d=void 0,m={unversionedId:"functions/serverboostlevel",id:"version-5.5.5/functions/serverboostlevel",title:"$serverBoostLevel",description:"This function returns the server boost level.",source:"@site/versioned_docs/version-5.5.5/functions/serverboostlevel.md",sourceDirName:"functions",slug:"/functions/serverboostlevel",permalink:"/hi/docs/5.5.5/functions/serverboostlevel",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689457644,formattedLastUpdatedAt:"15 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$serverBoostLevel"},sidebar:"docs",previous:{title:"$serverBoostCount",permalink:"/hi/docs/5.5.5/functions/serverboostcount"},next:{title:"$serverChannelExists",permalink:"/hi/docs/5.5.5/functions/serverchannelexists"}},y={},O=[],g={toc:O},h="wrapper";function j(e){var t=e,{components:r}=t,o=v(t,["components"]);return(0,n.kt)(h,f(u(u({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the server boost level."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "boostLevel",\ncode: `\nBoost Level: $serverBoostLevel\n`\n})\n')))}j.isMDXComponent=!0}}]);