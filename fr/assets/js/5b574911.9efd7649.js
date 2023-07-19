"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97629],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(a),u=r,g=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(g,l(l({ref:e},m),{},{components:a})):n.createElement(g,l({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},38012:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>N,contentTitle:()=>k,default:()=>v,frontMatter:()=>g,metadata:()=>h,toc:()=>f});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&m(t,a,e[a]);if(o)for(var a of o(e))s.call(e,a)&&m(t,a,e[a]);return t},d=(t,e)=>i(t,l(e)),u=(t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&o)for(var n of o(t))e.indexOf(n)<0&&s.call(t,n)&&(a[n]=t[n]);return a};const g={title:"Interaction Commands",description:"This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.",id:"interactioncommands"},k=void 0,h={unversionedId:"guides/application-cmds/interactioncommands",id:"version-6.4.0/guides/application-cmds/interactioncommands",title:"Interaction Commands",description:"This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.",source:"@site/versioned_docs/version-6.4.0/guides/application-cmds/1introduction.md",sourceDirName:"guides/application-cmds",slug:"/guides/application-cmds/interactioncommands",permalink:"/fr/docs/guides/application-cmds/interactioncommands",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689803006,formattedLastUpdatedAt:"19 juil. 2023",frontMatter:{title:"Interaction Commands",description:"This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.",id:"interactioncommands"},sidebar:"docs",previous:{title:"Client Sharding",permalink:"/fr/docs/guides/client/sharding"},next:{title:"Message Commands",permalink:"/fr/docs/guides/application-cmds/interaction-messagecommands"}},N={},f=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Inviting your bot with correct permissions",id:"inviting-your-bot-with-correct-permissions",level:3},{value:"Important",id:"important",level:2},{value:"Creating Application Commands",id:"creating-application-commands",level:2},{value:"Application Types",id:"application-types",level:4},{value:"Examples of creating Application Commands",id:"examples-of-creating-application-commands",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Application Command Option Type",id:"application-command-option-type",level:2}],y={toc:f},b="wrapper";function v(t){var e=t,{components:a}=e,r=u(e,["components"]);return(0,n.kt)(b,d(c(c({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h3",c({},{id:"table-of-contents"}),"Table of Contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#introduction"}),"Introduction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#getting-started"}),"Getting Started"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#inviting-your-bot-with-correct-permissions"}),"Inviting your bot with correct permissions")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#important"}),"Important")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#creating-application-commands"}),"Creating Application Commands"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#application-types"}),"Application Types")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#examples-of-creating-application-commands"}),"Examples of creating Application Commands")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#conclusion"}),"Conclusion")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#application-command-option-type"}),"Application Command Option Type")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"#interaction-functions"}),"Interaction Functions"))),(0,n.kt)("hr",null),(0,n.kt)("h2",c({},{id:"introduction"}),"Introduction"),(0,n.kt)("p",null,"Application Commands make it much easier for us to use our favourite bots on Discord. All you need to do is type ",(0,n.kt)("inlineCode",{parentName:"p"},"/")," followed by the command you want to use or right click a message, and your favourite bot will do the rest."),(0,n.kt)("p",null,"Application Commands make it simpler for users to discover what a bot can do, and they can also find new features as they are added. Validation, error states, and a user-friendly interface guide users through the commands, so they can quickly get the results they need without confusion or frustration. Plus, they allow users to keep the mental model of how they think about the bot separate from how it actually works, which makes it easier for everyone to understand and use the bot."),(0,n.kt)("p",null,"Using Application Commands offers a few benefits, like the ability to quickly and easily access the features of a bot, a user-friendly interface to guide users through commands, and the ability to separate the user's mental model from the workings of the bot. All of this makes it simpler for users to use the bot, so they can get the most out of it."),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/application-commands.png",alt:"preview"}))),(0,n.kt)("h2",c({},{id:"getting-started"}),"Getting Started"),(0,n.kt)("h3",c({},{id:"inviting-your-bot-with-correct-permissions"}),"Inviting your bot with correct permissions"),(0,n.kt)("p",null,"In order to use Application Commands, your bot requires the ",(0,n.kt)("inlineCode",{parentName:"p"},"application.commands")," scope which can be found on\nthe ",(0,n.kt)("a",c({parentName:"p"},{href:"https://discord.com/developers/applications/"}),"Discord Developer Portal"),". You don't have to kick your bot or\nanything, simply reinvite it."),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://media.discordapp.net/attachments/1061712111052521493/1062539303386873929/image_5.png?width=1200&height=447",alt:"scope"}))),(0,n.kt)("h2",c({},{id:"important"}),"Important"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Due to Discord's Limitation you can only have up to ",(0,n.kt)("strong",{parentName:"li"},"50 slash commands")," in your bot / per guild."),(0,n.kt)("li",{parentName:"ul"},"Two Application commands can ",(0,n.kt)("strong",{parentName:"li"},"not have the same name")," in the same guild."),(0,n.kt)("li",{parentName:"ul"},"Application command names can ",(0,n.kt)("strong",{parentName:"li"},"not contain special symbols (this includes spaces)")," and must be shorter than ",(0,n.kt)("strong",{parentName:"li"},"32 characters"),"."),(0,n.kt)("li",{parentName:"ul"},"You require ",(0,n.kt)("inlineCode",{parentName:"li"},'events: ["onMessage", "onInteractionCreate"]')," in your main file.")),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://cdn.discordapp.com/attachments/1061712111052521493/1062559509601591427/image_6.png",alt:"slash-example"}))),(0,n.kt)("h2",c({},{id:"creating-application-commands"}),"Creating Application Commands"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-js"}),"$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message);options?]\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"guildID/global"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string, integer"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The type of application command, either for every guild (global) or for one specific guild (specific guildID)."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string, number"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The actual slash command name that will be visible to the user."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"description"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string, number"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The slash command description that will be visible to the user."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"defaultPermission"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"If the application command should syncronisate to the default permissions."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"type"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The application command type (explained below)"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"options?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"#examples-of-creating-application-commands"}),"Slash commands options"),"."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h4",c({},{id:"application-types"}),"Application Types"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"message")," \u2014 Creates an Application Command that can be executed on a message. (",(0,n.kt)("a",c({parentName:"li"},{href:"https://discord.com/developers/docs/interactions/application-commands#message-commands"}),"documentation"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"slash")," \u2014 Creates an Application Command as slash command. (",(0,n.kt)("a",c({parentName:"li"},{href:"https://discord.com/developers/docs/interactions/application-commands"}),"documentation"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"user")," \u2014 Creates an Application Command that can be executed on a user. (",(0,n.kt)("a",c({parentName:"li"},{href:"https://discord.com/developers/docs/interactions/application-commands#user-commands"}),"documentation"),")"))),(0,n.kt)("h3",c({},{id:"examples-of-creating-application-commands"}),"Examples of creating Application Commands"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[guildID/global;example;slash command description!;true;slash]`\n});\n\n')),(0,n.kt)("h2",c({},{id:"conclusion"}),"Conclusion"),(0,n.kt)("p",null,"Interaction Commands are an incredibly useful tool for developing interactive bots. They can be used to create robust\ninteractions with users, and make it easier to manage commands and features. We hope this guide has been helpful in\nlearning how to use Interaction Commands and the basics of how they work."),(0,n.kt)("h2",c({},{id:"application-command-option-type"}),(0,n.kt)("a",c({parentName:"h2"},{href:"https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type"}),"Application Command Option Type")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"NAME"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"ID"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"NOTE"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"SUB_COMMAND"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"SUB_COMMAND_GROUP"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"STRING"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"INTEGER"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Any Integer between -2^53 and 2^53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"BOOLEAN"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"5"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"USER"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"6"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"CHANNEL"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"7"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Includes all channel types + categories")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ROLE"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"8"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MENTIONABLE"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"9"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Includes users and roles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"NUMBER"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"10"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Any double between -2^53 and 2^53")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ATTACHMENT"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"11"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"https://discord.com/developers/docs/resources/channel#attachment-object"}),"attachment")," object")))))}v.isMDXComponent=!0}}]);