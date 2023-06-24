"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[16395],{3905:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>f});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function m(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),u=c(o),p=r,f=u["".concat(l,".").concat(p)]||u[p]||s[p]||a;return o?t.createElement(f,i(i({ref:n},d),{},{components:o})):t.createElement(f,i({ref:n},d))}));function f(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m[u]="string"==typeof e?e:r,i[1]=m;for(var c=2;c<a;c++)i[c]=o[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},18136:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>m,toc:()=>c});var t=o(87462),r=(o(67294),o(3905));const a={title:"$randomEmoji",description:"Returns a random custom emoji from a Guild or a Global custom emoji."},i=void 0,m={unversionedId:"functions/randomemoji",id:"version-5.5.5/functions/randomemoji",title:"$randomEmoji",description:"Returns a random custom emoji from a Guild or a Global custom emoji.",source:"@site/versioned_docs/version-5.5.5/functions/randomemoji.md",sourceDirName:"functions",slug:"/functions/randomemoji",permalink:"/docs/5.5.5/functions/randomemoji",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687638269,formattedLastUpdatedAt:"Jun 24, 2023",frontMatter:{title:"$randomEmoji",description:"Returns a random custom emoji from a Guild or a Global custom emoji."},sidebar:"docs",previous:{title:"$randomChannelID",permalink:"/docs/5.5.5/functions/randomchannelid"},next:{title:"$randomGuildID",permalink:"/docs/5.5.5/functions/randomguildid"}},l={},c=[{value:"Example Commands:",id:"example-commands",level:4}],d={toc:c},u="wrapper";function s(e){let{components:n,...o}=e;return(0,r.kt)(u,(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns a random custom emoji from from current/provided guild or a custom emoji from one random guild the bot is in depending on given options."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$randomEmoji[guildID/global (optional)]")," "),(0,r.kt)("h4",{id:"example-commands"},"Example Commands:"),(0,r.kt)("p",null,"Using a random emoji from the current guild:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "randomemoji",\ncode: `\nhere a custom emoji from this server: $randomEmoji\n`\n})\n')),(0,r.kt)("p",null,"Using a random emoji from a specific guild:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "randomemoji",\ncode: `\nhere a custom emoji from a specific guild: $randomEmoji[837748010317250641]\n`\n})\n')),(0,r.kt)("p",null,"Using a random emoji from a random guild the bot is in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "globalemoji",\ncode: `\nhere a custom emoji from a random server: $randomEmoji[global]\n`\n})\n')))}s.isMDXComponent=!0}}]);