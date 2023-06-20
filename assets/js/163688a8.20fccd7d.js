"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[13535],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=m(o),d=i,f=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return o?n.createElement(f,a(a({ref:t},u),{},{components:o})):n.createElement(f,a({ref:t},u))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var m=2;m<r;m++)a[m]=o[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},74886:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=o(87462),i=(o(67294),o(3905));const r={title:"$modifyEmoji",description:"Modifies a custom emoji from this guild by using its ID."},a=void 0,l={unversionedId:"functions/modifyemoji",id:"version-5.5.5/functions/modifyemoji",title:"$modifyEmoji",description:"Modifies a custom emoji from this guild by using its ID.",source:"@site/versioned_docs/version-5.5.5/functions/modifyemoji.md",sourceDirName:"functions",slug:"/functions/modifyemoji",permalink:"/docs/5.5.5/functions/modifyemoji",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687258307,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$modifyEmoji",description:"Modifies a custom emoji from this guild by using its ID."},sidebar:"docs",previous:{title:"$modifyChannelPerms",permalink:"/docs/5.5.5/functions/modifychannelperms"},next:{title:"$modifyRole",permalink:"/docs/5.5.5/functions/modifyrole"}},s={},m=[{value:"Fields",id:"fields",level:4},{value:"Optioons",id:"optioons",level:4},{value:"Usage",id:"usage",level:4}],u={toc:m},c="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function modifies the given emoji"),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This function has 2 required fields"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Emoji ID ","(","Required",")"),(0,i.kt)("li",{parentName:"ol"},"Name ","(","Required",")"),(0,i.kt)("li",{parentName:"ol"},"Role","(","s",")"," ","(","Optional",")")),(0,i.kt)("p",null,"Raw Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"$modifyEmoji[emojiID;name;role1 (optional);role2 (optional);etc]")),(0,i.kt)("h4",{id:"optioons"},"Optioons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Emoji ID - The ID of the emoji we're modifying"),(0,i.kt)("li",{parentName:"ul"},"Name - The new name of the emoji"),(0,i.kt)("li",{parentName:"ul"},"Role","(","s",")"," - The roles that are allowed to use the emoji. Only users with that role can use the emoji. Leave it empty to let everyone use that emoji.")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Without optional field"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "modifyEmoji",\ncode: `$modifyEmoji[775189112474173470;bruhDog]`\n})\n')),(0,i.kt)("p",null,"With optional field"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "modifyEmoji",\ncode: `$modifyEmoji[775189112474173470;bruhDog;773353340674900029]`\n})\n')),(0,i.kt)("p",null,"Emoji must be a custom emoji of one of the bot's servers."))}p.isMDXComponent=!0}}]);