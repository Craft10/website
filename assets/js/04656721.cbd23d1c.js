"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(g,r(r({ref:t},m),{},{components:n})):a.createElement(g,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const i={title:"Interaction Commands",description:"This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.",id:"interactioncommands"},r=void 0,l={unversionedId:"guides/interactioncommands",id:"guides/interactioncommands",title:"Interaction Commands",description:"This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.",source:"@site/docs/guides/6interaction.md",sourceDirName:"guides",slug:"/guides/interactioncommands",permalink:"/docs/guides/interactioncommands",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1679163118,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{title:"Interaction Commands",description:"This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.",id:"interactioncommands"},sidebar:"docs",previous:{title:"Variables",permalink:"/docs/guides/variables"},next:{title:"Sharding",permalink:"/docs/guides/sharding"}},p={},s=[{value:"Table of Content",id:"table-of-content",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Inviting your bot with correct permissions",id:"inviting-your-bot-with-correct-permissions",level:3},{value:"Important",id:"important",level:2},{value:"Creating Application Commands",id:"creating-application-commands",level:2},{value:"Application Types",id:"application-types",level:4},{value:"Examples of creating Application Commands",id:"examples-of-creating-application-commands",level:3},{value:"Using Application Commands",id:"using-application-commands",level:2},{value:"AutoCompleteRespond Functions &amp; Examples",id:"autocompleterespond-functions--examples",level:3},{value:"Usage",id:"usage",level:4},{value:"Application Command Option Type",id:"application-command-option-type",level:2},{value:"Interaction Functions",id:"interaction-functions",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#introduction"},"Introduction"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#getting-started"},"Getting Started")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#inviting-your-bot-with-correct-permissions"},"Inviting your bot with correct permissions"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/topics/gateway#list-of-intents"},"Discord Developer Portal - Documentation"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#important"},"Important"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#creating-application-commands"},"Creating Application Commands")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#application-types"},"Application Types"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#examples-of-creating-application-commands"},"Multiple Examples of creating Application Commands"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#using-application-commands"},"Using Application Commands")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#autocompleterespond-functions--examples"},"Auto Complete Respond"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#application-command-option-type"},"Application Command Option Type")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type"},"Discord Developer Portal - Documentation"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#interaction-functions"},"Interaction Functions")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Slash Commands are the new and exciting way to create and interact with applications on Discord. With Slash Commands,\nall you need to do is type ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," and you'll be able to use your favourite bot."),(0,o.kt)("p",null,"Users can easily learn what your bot can do, and discover new features as they are added. Validation, error states, and\nuser-friendly interface guides them through your commands, so they can get it right the first time, especially on\nmobile. Slash Commands set your users up for success instead of confusion and frustration. They separate how users think\nand how your code works, meaning false matter how complex your codebase and commands may become, people who love your\nbot will find it easy to use and accessible."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1061712111052521493/1062518328268169306/image_4.png",alt:"slash"})),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h3",{id:"inviting-your-bot-with-correct-permissions"},"Inviting your bot with correct permissions"),(0,o.kt)("p",null,"In order to use Application Commands, your bot needs the ",(0,o.kt)("inlineCode",{parentName:"p"},"application.commands")," scope which can be found on\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications/"},"Discord Developer Portal"),". You don't have to kick your bot or\nanything, simply reinvite it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1061712111052521493/1062539303386873929/image_5.png?width=1200&height=447",alt:"scope"})),(0,o.kt)("h2",{id:"important"},"Important"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Due to Discord's Limitation you can only have up to ",(0,o.kt)("strong",{parentName:"li"},"50 slash commands")," in your bot / per guild."),(0,o.kt)("li",{parentName:"ul"},"Two Application commands can ",(0,o.kt)("strong",{parentName:"li"},"not have the same name")," in the same guild."),(0,o.kt)("li",{parentName:"ul"},"Application command names can ",(0,o.kt)("strong",{parentName:"li"},"not contain special symbols")," and must be shorter than ",(0,o.kt)("strong",{parentName:"li"},"32 characters"),"."),(0,o.kt)("li",{parentName:"ul"},"You require ",(0,o.kt)("inlineCode",{parentName:"li"},'events: ["onMessage", "onInteractionCreate"]')," in your main file.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1061712111052521493/1062559509601591427/image_6.png",alt:"slash.example"})),(0,o.kt)("h2",{id:"creating-application-commands"},"Creating Application Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"$createApplicationCommand[guildID / global;name;description;defaultPermission(true / false);type(slash / user / message)(optional);options(optional)]\n")),(0,o.kt)("h4",{id:"application-types"},"Application Types"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message")," \u2014 Creates an Application Command as slash command."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"slash")," \u2014 Creates an Application Command that can be executed on a message."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user")," \u2014 Creates an Application Command that can be executed on a user."))),(0,o.kt)("h3",{id:"examples-of-creating-application-commands"},"Examples of creating Application Commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[$guildID/global;example;slash command description!;true;slash]`\n});\n/* Will create a slash commands without any user input, you can choose between global/$guildID to create a command globally or only for a specific guild.\nExample created by dodoGames#7509. */\n')),(0,o.kt)("p",null,"Adding ",(0,o.kt)("strong",{parentName:"p"},"choices")," to the application command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[$guildID;choice;slash command choices showcase!;true;slash;[{\n  "name": "option",\n  "description": "options example",\n  "required": true,\n  "type": 3,\n  "choices" : [{\n  "name" : "test1",\n  "value" : "value1"\n  }, {\n  "name" : "test2",\n  "value" : "value2"\n  }, {\n  "name" : "test3",\n  "value" : "value3"\n  }]\n}]]`\n});\n/* You can choose between global/$guildID to create a command globally or only for a specific guild.\nExample created by dodoGames#7509. */\n')),(0,o.kt)("p",null,"Adding ",(0,o.kt)("strong",{parentName:"p"},"sub commands")," to the application command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[$guildID;slash;sub commands showcase!;true;slash;[\n  {\n  "name": "sub1",\n  "description": "an sub command example!",\n  "type": 1,\n  "options": [\n       {\n          "name": "user", \n          "description": "example option", \n          "required": true, \n          "type": 6\n        }\n  ]\n}]`\n});\n/* You can choose between global/$guildID to create a command globally or only for a specific guild.\nExample created by dodoGames#7509. */\n')),(0,o.kt)("h2",{id:"using-application-commands"},"Using Application Commands"),(0,o.kt)("p",null,"To use application commands you require ",(0,o.kt)("inlineCode",{parentName:"p"},"interaction")," commands."),(0,o.kt)("p",null,"Main file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'bot.interactionCommand({\n    name: "slash command name", //name of the slash command\n    prototype: "slash", //clarifying that this command belongs to a slash command \n    code: `code` // code that will be executed if slash command triggered\n});\n')),(0,o.kt)("p",null,"Command Handler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    name: "slash command name", //name of the slash command\n    prototype: "slash", //clarifying that this command belongs to a slash command \n    type: "interaction", //clarifying that this command is an interaction command\n    code: `code` // code that will be executed if slash command triggered\n}]\n')),(0,o.kt)("p",null,"You can retrive information given in slash commands by using ",(0,o.kt)("inlineCode",{parentName:"p"},"$slashOption[slashcommandoptionname]"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'$createApplicationCommand[$guildID;say;saycommand;true;slash;[{\n    "name": "text",\n    "description": "Text you want to say!",\n    "required": true,\n    "type": 3\n}]]\n// make sure to eval the code above\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    name: "say",\n    prototype: "slash",\n    type: "interaction",\n    code: `$interactionReply[You said: $slashOption[text]!;;;;everyone]`\n}]\n')),(0,o.kt)("h3",{id:"autocompleterespond-functions--examples"},"AutoCompleteRespond Functions & Examples"),(0,o.kt)("p",null,"There are multiple ways of using ",(0,o.kt)("inlineCode",{parentName:"p"},"$autoCompleteRespond"),", you can either use JSON or the simple aoi.js way."),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$autoCompleteRespond[OptionName;OptionReply;...]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$autoCompleteRespond[[{ \n    "name" : "Option Name One",\n    "value" : "Option Reply 1"\n  }, {\n    "name" : "Option Name Two",\n    "value" : "Option Reply 2"\n  }]]\n')),(0,o.kt)("p",null,"Create the slash-commands: (please note that you require the ",(0,o.kt)("inlineCode",{parentName:"p"},"onInteractionCreate")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"events")," property in your main\nfile)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: \'createSlashCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n  "name": "option", \n  "description": "test",\n  "required": false,\n  "type": 3, \n  "autocomplete": true\n}]]`\n});\n')),(0,o.kt)("p",null,"Checking if autoComplete equals ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", if so it will respond with the given respond (addition of the code above):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "example",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[First option;You selected the first option, therefore I\'m responding with this!;Second option;You selected the first second, therefore I\'m responding with this!]\n  $else\n  $interactionReply[$slashOption[option];;;;everyone]\n  $endif\n  `\n});\n')),(0,o.kt)("p",null,"Create the slash-commands: (please note that you require the ",(0,o.kt)("inlineCode",{parentName:"p"},"onInteractionCreate")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"events")," property in your main\nfile)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: \'createSlashCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n  "name": "option",\n  "description": "test",\n  "required": false, \n  "type": 3,\n  "autocomplete": true \n}, {\n  "name": "anotheroption",\n  "description": "test",\n  "required": false,\n  "type": 3\n}]]`\n});\n')),(0,o.kt)("p",null,"Using JSON and checking if autoComplete equals ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", if so it will respond with the given respond (addition of the\ncode above):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "example",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[[{ \n    "name" : "First Option",\n    "value" : "You selected the first option, therefore I\\\'m responding with this!"\n  }, {\n    "name" : "Second Option",\n    "value" : "You selected the second option, therefore I\\\'m responding with this!"\n  }]]\n  $else\n  $interactionReply[$slashOption[option] - autocomplete #SEMI# $slashOption[anotheroption] - false autocomplete;;;;everyone]\n  $endif\n  `\n});\n')),(0,o.kt)("h2",{id:"application-command-option-type"},(0,o.kt)("a",{parentName:"h2",href:"https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type"},"Application Command Option Type")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"NAME"),(0,o.kt)("th",{parentName:"tr",align:null},"ID"),(0,o.kt)("th",{parentName:"tr",align:null},"NOTE"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SUB_COMMAND"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SUB_COMMAND_GROUP"),(0,o.kt)("td",{parentName:"tr",align:null},"2"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"STRING"),(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"Any Integer between -2^53 and 2^53")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,o.kt)("td",{parentName:"tr",align:null},"5"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"USER"),(0,o.kt)("td",{parentName:"tr",align:null},"6"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CHANNEL"),(0,o.kt)("td",{parentName:"tr",align:null},"7"),(0,o.kt)("td",{parentName:"tr",align:null},"Includes all channel types + categories")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ROLE"),(0,o.kt)("td",{parentName:"tr",align:null},"8"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MENTIONABLE"),(0,o.kt)("td",{parentName:"tr",align:null},"9"),(0,o.kt)("td",{parentName:"tr",align:null},"Includes users and roles")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NUMBER"),(0,o.kt)("td",{parentName:"tr",align:null},"10"),(0,o.kt)("td",{parentName:"tr",align:null},"Any double between -2^53 and 2^53")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ATTACHMENT"),(0,o.kt)("td",{parentName:"tr",align:null},"11"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://discord.com/developers/docs/resources/channel#attachment-object"},"attachment")," object")))),(0,o.kt)("h2",{id:"interaction-functions"},"Interaction Functions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Calling/createApplicationCommand"},"$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message) (optional);options (optional)]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Events/interactionReply"},"$interactionReply[message;embeds?;components?;files?;ephemeral(true/false)]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Events/interactionDefer"},"$interactionDefer[ephemeral]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Events/interactionDeferUpdate"},"$interactionDeferUpdate[ephemeral]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Events/interactionDelete"},"$interactionDelete"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Events/interactionEdit"},"$interactionEdit[content?;embeds?;components?;files?;allowedMentions]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Events/interactionFollowUp"},"$interactionFollowUp[content?;embeds?;components?;files?;ephemeral?]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Events/interactionUpdate"},"$interactionUpdate[content?;embeds?;components?;files?;allowedMentions]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Events/slashOption"},"$slashOption[option]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Calling/deleteApplicationCommand"},"$deleteApplicationCommand[guildID/global;id]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Calling/modifyApplicationCommand"},"$modifyApplicationCommand[guildID/global;commandID;name;description;type;options (optional);defaultPermission(optional)]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Calling/removeApplicationCommandPermissions"},"$removeApplicationCommandPermissions[guildID/global (optional : global as default);id;roruids]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Misc/getApplicationCommandOptions"},"$getApplicationCommandOptions[name;guildID/global (optional : global as default)]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Misc/getApplicationCommandID"},"$getApplicationCommandID[name;guildID/global (optional : global as default)]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Calling/autoCompleteRespond"},"$autoCompleteRespond[OptionName;OptionReply;...]"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/functions/Calling/isAutoComplete"},"$isAutoComplete")))))}c.isMDXComponent=!0}}]);