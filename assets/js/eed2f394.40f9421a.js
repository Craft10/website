"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,b=m["".concat(d,".").concat(u)]||m[u]||c[u]||l;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67310:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>v,frontMatter:()=>b,metadata:()=>f,toc:()=>h});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&s(e,r,t[r]);return e},c=(e,t)=>l(e,o(t)),u=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const b={title:"$oldMember",description:"$oldMember holds data for the member before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (memberUpdate event)",id:"oldMember"},g=void 0,f={unversionedId:"functions/event-related/oldMember",id:"version-6.4.0/functions/event-related/oldMember",title:"$oldMember",description:"$oldMember holds data for the member before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (memberUpdate event)",source:"@site/versioned_docs/version-6.4.0/functions/event-related/oldMember.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/oldMember",permalink:"/docs/functions/event-related/oldMember",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691966519,formattedLastUpdatedAt:"Aug 13, 2023",frontMatter:{title:"$oldMember",description:"$oldMember holds data for the member before it was updated, this is from discord cache and might be empty depending on whether it's cached, so use partial option before attempting to access any property. (memberUpdate event)",id:"oldMember"},sidebar:"docs",previous:{title:"$oldGuild",permalink:"/docs/functions/event-related/oldGuild"},next:{title:"$oldMessage",permalink:"/docs/functions/event-related/oldMessage"}},k={},h=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Options",id:"options",level:3},{value:"Example(s)",id:"examples",level:2}],y={toc:h},N="wrapper";function v(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(N,c(m(m({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$oldMember")," holds data for the member before it was updated, this is from discord cache and might be empty depending on\nwhether it's cached, so use partial option before attempting to access any property. (memberUpdate event)"),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$oldMember[option]\n")),(0,n.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Option to retrieve."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h3",m({},{id:"options"}),"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"id"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Returns User ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Returns Name of user.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"roles"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Returns User roles.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"permissions"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Returns User permissions.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"nick"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Returns User nickname.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"highestRoleID"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Returns Higher role ID user has.")))),(0,n.kt)("h2",m({},{id:"examples"}),"Example(s)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Note: You need ",(0,n.kt)("inlineCode",{parentName:"strong"},"GuildMembers")," intent"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),'bot.memberUpdateCommand({\n    channel: "channelid",\n    code: `\n    $username[$newMember[id]] has updated their nickname!\n- New Nickname: $newMember[nick]\n - Old Nickname: $oldMember[nick]\n \n   $username[$newMember[id]] has updated their name!\n- New Name: $newMember[name]\n - Old Name: $oldMember[name]`\n})\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This code will execute when ",(0,n.kt)("strong",{parentName:"li"},"member updates their guild nickname or discord username"))),(0,n.kt)("hr",null))}v.isMDXComponent=!0}}]);