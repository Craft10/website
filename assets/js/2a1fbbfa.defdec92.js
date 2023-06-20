"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,v=d["".concat(s,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65636:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"$deleteServerVar"},o=void 0,i={unversionedId:"functions/deleteservervar",id:"version-5.5.5/functions/deleteservervar",title:"$deleteServerVar",description:"This function deletes the specified variable from the database",source:"@site/versioned_docs/version-5.5.5/functions/deleteservervar.md",sourceDirName:"functions",slug:"/functions/deleteservervar",permalink:"/docs/5.5.5/functions/deleteservervar",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687258307,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$deleteServerVar"},sidebar:"docs",previous:{title:"$deleteRoles",permalink:"/docs/5.5.5/functions/deleteroles"},next:{title:"$deleteStageInstance",permalink:"/docs/5.5.5/functions/deletestageinstance"}},s={},c=[{value:"Fields",id:"fields",level:2},{value:"Options",id:"options",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function deletes the specified variable from the database"),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("p",null,"This function has 1 required field"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Variable ","(","Required",")"),(0,a.kt)("li",{parentName:"ol"},"Server ID ","(","Optional",")")),(0,a.kt)("p",null,"Raw Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$deleteServerVar[variable;serverID (optional)]")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Variable - The variable we're deleting"),(0,a.kt)("li",{parentName:"ul"},"Server ID - The server we're deleting for")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Without optional fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "deleteVar",\ncode: `$deleteServerVar[total_money]`\n})\n')),(0,a.kt)("p",null,"With optional fields"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "deleteVar",\ncode: `$deleteServerVar[total_money;773352845738115102]`\n})\n')))}u.isMDXComponent=!0}}]);