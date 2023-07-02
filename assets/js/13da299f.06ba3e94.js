"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56430],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),p=o,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},63688:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const a={title:"Long Serverinfo command",description:"A long serverinfo command just for you. Nothing fancy about it.",authors:{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,l={permalink:"/wikis/posts/632607624742961153/iiwq2",source:"@site/forums/posts/632607624742961153/iiwq2.md",title:"Long Serverinfo command",description:"A long serverinfo command just for you. Nothing fancy about it.",date:"2023-07-01T23:56:31.000Z",formattedDate:"July 1, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png",imageURL:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"}],frontMatter:{title:"Long Serverinfo command",description:"A long serverinfo command just for you. Nothing fancy about it.",authors:{name:"@dodogames",title:"Member - 632607624742961153",userid:"632607624742961153",url:"https://discord.com/users/632607624742961153",image_url:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png",imageURL:"https://cdn.discordapp.com/avatars/632607624742961153/5a4dc9bcccf66c5372f410c40d267708.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"HowGamer command",permalink:"/wikis/posts/632607624742961153/ic9vu7"},nextItem:{title:"Author button",permalink:"/wikis/posts/632607624742961153/mnfe6"}},c={authorsImageUrls:[void 0]},s=[],d={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  name: "serverinfo",\n  aliases: "server",\n  code: `$title[Server Info]\n  $addField[Verification Level;$get[verifylevel]]\n  $addField[Other;\nServer Created since: $creationDate[$guildID;date]\nContent Filter: $get[content]\nServer ID: $guildID\n]\n  $addField[General;\nRoles: $roleCount[$guildID;true]\nEmojis: $emojiCount[$guildID] \nServer Boosts: $guildBoostCount[$guildID]\n\n]\n  $addField[Channels;\nTotal: $channelCount[$guildID;all]\nText Channels: $channelCount[$guildID;Text]\nVoice Channels: $channelCount[$guildID;Voice]\nAnnouncement Channels: $channelCount[$guildID;Announcement]\nForum Channels: $channelCount[$guildID;Forum]\nCategories: $channelCount[$guildID;Category]\n]\n  $addField[Members information;\nTotal: $membersCount[$guildID;all;true]\nHumans: $membersCount[$guildID;all;false]\nBots: $guildBotCount[$guildID]\n]\n  $thumbnail[$get[serverimage]]\n  $cooldown[5s; Slow down! Don\'t spam the command!\nTime left: \\`%time%\\`]\n  \n  $let[verifylevel;$replaceText[$replaceText[$replaceText[$replaceText[$GuildVerificationLevel;1;Low];2;Medium];3;High];4;Very High]]\n  $let[content;$replaceText[$replaceText[$replaceText[$guildContentFilter[$guildID];0;Disabled];1;Medium];2;High]]\n  $let[serverimage;$replaceText[$replaceText[$checkCondition[$guildIcon==];false;$guildIcon];true;$userAvatar[$clientID]]]\n`\n}\n')),(0,o.kt)("h1",{id:"note"},"Note"),(0,o.kt)("p",null,"This command requires the intent ",(0,o.kt)("inlineCode",{parentName:"p"},"GuildPresences")," to be added into your bot's main file (aka index.js) for the total members shown to be correct. If this doesn't work then eval ",(0,o.kt)("inlineCode",{parentName:"p"},"$cacheMembers[$guildID]")," in the server where you used serverinfo command (while having the intent added as well) and then try again. Feel free to ask for help in support if needed!"))}m.isMDXComponent=!0}}]);