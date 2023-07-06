"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31904],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"$pruneStatus",description:"Returns an amount of members that can be pruned."},i=void 0,u={unversionedId:"functions/prunestatus",id:"version-5.5.5/functions/prunestatus",title:"$pruneStatus",description:"Returns an amount of members that can be pruned.",source:"@site/versioned_docs/version-5.5.5/functions/prunestatus.md",sourceDirName:"functions",slug:"/functions/prunestatus",permalink:"/docs/5.5.5/functions/prunestatus",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688622430,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$pruneStatus",description:"Returns an amount of members that can be pruned."},sidebar:"docs",previous:{title:"$pruneMusic",permalink:"/docs/5.5.5/functions/prunemusic"},next:{title:"$queue",permalink:"/docs/5.5.5/functions/queue"}},l={},s=[{value:"Options:",id:"options",level:4},{value:"Example Command:",id:"example-command",level:4}],p={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function shows you how many inactive members without roles and with optional given roles can be pruned currently from the given guild without actually kicking them.."),(0,a.kt)("p",null,"Raw usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"$pruneMembers[amount of days(optional);guildID(optional);roleid1:roleid2:roleid3... (optional)]")),(0,a.kt)("h4",{id:"options"},"Options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"amount of days")," =",">"," Number of days of inactivity required to kick ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"optional"),(0,a.kt)("li",{parentName:"ul"},"must be between 1 and 30"),(0,a.kt)("li",{parentName:"ul"},"defaults to 7"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"guildID")," =",">"," the guildID the members should be checked for prune status ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"optional"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"roles")," =",">",' Array of roles to bypass the "...and no roles" constraint when pruning so it includes members with given roles in the prune status ',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"optional"),(0,a.kt)("li",{parentName:"ul"},"separated by ",(0,a.kt)("inlineCode",{parentName:"li"},":"))))),(0,a.kt)("h4",{id:"example-command"},"Example Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "prunestatus",\ncode: `\nPruning would kick:\n$pruneStatus[5;$guildID;741266432574357586:820666519331405854] members!\n`\n})\n')))}m.isMDXComponent=!0}}]);