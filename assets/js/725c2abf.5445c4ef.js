"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[35310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(s,".").concat(u)]||p[u]||f[u]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={title:"$addFilter",description:"Adds filter(s) to playing track(s).",id:"addfilter"},l=void 0,o={unversionedId:"functions/addfilter",id:"version-5.5.5/functions/addfilter",title:"$addFilter",description:"Adds filter(s) to playing track(s).",source:"@site/versioned_docs/version-5.5.5/functions/addfilter.md",sourceDirName:"functions",slug:"/functions/addfilter",permalink:"/docs/5.5.5/functions/addfilter",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688622430,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$addFilter",description:"Adds filter(s) to playing track(s).",id:"addfilter"},sidebar:"docs",previous:{title:"$addFields",permalink:"/docs/5.5.5/functions/addfields"},next:{title:"$addMessageReactions",permalink:"/docs/5.5.5/functions/addmessagereactions"}},s={},d=[{value:"Usage",id:"usage",level:2},{value:"Fields",id:"fields",level:2},{value:"Notice",id:"notice",level:2},{value:"Examples",id:"examples",level:2},{value:"Custom Filter",id:"custom-filter",level:2},{value:"Information",id:"information",level:2}],c={toc:d},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$addFilter")," adds the given filter(s) to track, removes the settled filters."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Requires ",(0,a.kt)("inlineCode",{parentName:"p"},"@akarui/aoi.music")," package.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$addFilter[filters]\n\n")),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"filters"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The filters will be added to track"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,a.kt)("h2",{id:"notice"},"Notice"),(0,a.kt)("p",null,"To know other filters as well, please check ",(0,a.kt)("a",{parentName:"p",href:"https://ffmpeg.org/ffmpeg-filters.html"},"FFmpeg filters"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"We already made a ",(0,a.kt)("inlineCode",{parentName:"p"},"nightcore")," filter for you, so you can use it like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "filter-nightcore",\n  code: `\n  $let[filter;$addFilter[{"nightcore": 1.10}]]\n  `\n});\n')),(0,a.kt)("h2",{id:"custom-filter"},"Custom Filter"),(0,a.kt)("p",null,"For a custom filter from ffmpeg."),(0,a.kt)("p",null,"This will make the track like 8D."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n  name: "filter-custom",\n  code: `\n  8D audio: on!\n  $let[filter;$addFilter[{"aecho": "1.0:0.8:50:0.5"}]]\n  `\n});\n')),(0,a.kt)("h2",{id:"information"},"Information"),(0,a.kt)("p",null,"We used ",(0,a.kt)("inlineCode",{parentName:"p"},"$let")," function on there, due to ",(0,a.kt)("inlineCode",{parentName:"p"},"$addFilter")," function returns as a message of the song."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$let")," function can be used as a trick in those circumstances."))}f.isMDXComponent=!0}}]);