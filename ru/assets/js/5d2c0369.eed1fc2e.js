"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[76314],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,y=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return n?r.createElement(y,o(o({ref:t},m),{},{components:n})):r.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>N,frontMatter:()=>y,metadata:()=>k,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&m(e,n,t[n]);return e},s=(e,t)=>l(e,o(t)),d=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const y={title:"$mentionType",description:"$mentionType will return the type of the mention.",id:"mentionType"},f=void 0,k={unversionedId:"functions/util-related/mentionType",id:"version-6.4.0/functions/util-related/mentionType",title:"$mentionType",description:"$mentionType will return the type of the mention.",source:"@site/versioned_docs/version-6.4.0/functions/util-related/mentionType.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionType",permalink:"/ru/docs/functions/util-related/mentionType",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691966519,formattedLastUpdatedAt:"13 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"$mentionType",description:"$mentionType will return the type of the mention.",id:"mentionType"},sidebar:"docs",previous:{title:"$log",permalink:"/ru/docs/functions/util-related/log"},next:{title:"$mentioned",permalink:"/ru/docs/functions/util-related/mentioned"}},g={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:b},h="wrapper";function N(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(h,s(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$mentionType")," will return the type of the mention."),(0,r.kt)("h2",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$mentionType[content]\n")),(0,r.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"content"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The mention whose mention type will be returned."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("details",null,(0,r.kt)("summary",null," ",(0,r.kt)("h3",null," Mention Types ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"everyone"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"@everyone")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"@here")," mentions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"users"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"All user mentions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"roles"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"All role mentions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"all"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Everything listed above."))))),(0,r.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," as you're an user:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mentionType',\n    code: `\n  $mentionType[<@$authorID>]\n  `\n});\n")))}N.isMDXComponent=!0}}]);