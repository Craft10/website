"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[75357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$setChannelTopic",description:"$setChannelTopic \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0442\u0435\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0430.",id:"setChannelTopic"},g=void 0,y={unversionedId:"functions/guild-related/setChannelTopic",id:"version-6.4.0/functions/guild-related/setChannelTopic",title:"$setChannelTopic",description:"$setChannelTopic \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0442\u0435\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0430.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/setChannelTopic.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/setChannelTopic",permalink:"/ru/docs/functions/guild-related/setChannelTopic",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690798419,formattedLastUpdatedAt:"31 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$setChannelTopic",description:"$setChannelTopic \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0442\u0435\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0430.",id:"setChannelTopic"},sidebar:"docs",previous:{title:"$ownerID",permalink:"/ru/docs/functions/guild-related/ownerID"},next:{title:"$setGuildBanner",permalink:"/ru/docs/functions/guild-related/setGuildBanner"}},b={},h=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],v={toc:h},k="wrapper";function O(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,d(s(s({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setChannelTopic")," \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0442\u0435\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0430."),(0,r.kt)("h2",s({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$setChannelTopic[channelID;topic]\n")),(0,r.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0446\u0435\u043b\u043e\u0435"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0430, \u0442\u0435\u043c\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0434\u0430")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0442\u0435\u043c\u0430"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0441\u0442\u0440\u043e\u043a\u0430"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043d\u043e\u0432\u043e\u0439 \u0442\u0435\u043c\u044b \u043a\u0430\u043d\u0430\u043b\u0430."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,r.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442 \u0442\u0435\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'setChannelTopic',\n    code: `\n   $setChannelTopic[$channelID;Hello! \u042d\u0442\u043e \u043d\u043e\u0432\u0430\u044f \u0442\u0435\u043c\u0430 \u043a\u0430\u043d\u0430\u043b\u0430!]`\n});\n")))}O.isMDXComponent=!0}}]);