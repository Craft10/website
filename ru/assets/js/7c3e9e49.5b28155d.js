"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[13769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,d=c["".concat(s,".").concat(m)]||c[m]||g[m]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>v,frontMatter:()=>d,metadata:()=>k,toc:()=>y});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e},g=(e,t)=>l(e,o(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$getMessage",description:"$getMessage will return properties about a given message.",id:"getMessage"},f=void 0,k={unversionedId:"functions/info-related/getMessage",id:"version-6.4.0/functions/info-related/getMessage",title:"$getMessage",description:"$getMessage will return properties about a given message.",source:"@site/versioned_docs/version-6.4.0/functions/info-related/getMessage.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getMessage",permalink:"/ru/docs/functions/info-related/getMessage",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691966519,formattedLastUpdatedAt:"13 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"$getMessage",description:"$getMessage will return properties about a given message.",id:"getMessage"},sidebar:"docs",previous:{title:"$getEmbed",permalink:"/ru/docs/functions/info-related/getEmbed"},next:{title:"$getReactions",permalink:"/ru/docs/functions/info-related/getReactions"}},b={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],N={toc:y},h="wrapper";function v(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(h,g(c(c({},N),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getMessage")," will return properties about a given message."),(0,r.kt)("h2",c({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$getMessage[channelID;messageID;option?]\n")),(0,r.kt)("h2",c({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"channelID"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID of the channel where the message is located in."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"messageID"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"The ID of the message."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"option?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Which option to fetch."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"false")))),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("h3",null," Options ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"content"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Content of the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"userID"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Author User ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"usertag"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Author Discriminator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"username"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Author Username."))))),(0,r.kt)("h2",c({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the content of your sent message:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getMessage',\n    code: `\n$getMessage[$channelID;$messageID;content]\n  `\n});\n")))}v.isMDXComponent=!0}}]);