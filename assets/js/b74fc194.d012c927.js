"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"$autoCompleteRespond",description:"$autoCompleteRespond is used to auto-complete slash options.",id:"autoCompleteRespond"},l=void 0,i={unversionedId:"functions/interaction-related/autoCompleteRespond",id:"version-6.3.0/functions/interaction-related/autoCompleteRespond",title:"$autoCompleteRespond",description:"$autoCompleteRespond is used to auto-complete slash options.",source:"@site/versioned_docs/version-6.3.0/functions/interaction-related/autoCompleteRespond.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/autoCompleteRespond",permalink:"/docs/functions/interaction-related/autoCompleteRespond",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688622430,formattedLastUpdatedAt:"Jul 6, 2023",frontMatter:{title:"$autoCompleteRespond",description:"$autoCompleteRespond is used to auto-complete slash options.",id:"autoCompleteRespond"},sidebar:"docs",previous:{title:"$author",permalink:"/docs/functions/interaction-related/author"},next:{title:"$clear",permalink:"/docs/functions/interaction-related/clear"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2},{value:"Advanced Example",id:"advanced-example",level:3}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$autoCompleteRespond")," is used to auto-complete slash options."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$autoCompleteRespond[object]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$autoCompleteRespond[OptionName;OptionReply;...]\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OptionName"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"Name of the auto-complete option that will be displayed to the user."),(0,o.kt)("td",{parentName:"tr",align:"center"},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"OptionReply"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"The reply that will be sent if the auto-complete option was selected, (not visible to the user)."),(0,o.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"Create the slash-commands: (please note that you require the ",(0,o.kt)("inlineCode",{parentName:"p"},'events: ["onMessage", "onInteractionCreate"]')," event in\nyour main file)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: \'createSlashCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n  "name": "option",\n  "description": "test",\n  "required": false,\n  "type": 3,\n  "autocomplete": true\n}]\n  `\n});\n')),(0,o.kt)("p",null,"Interaction Command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "test",\n    prototype: "slash",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[First option;You selected the first option, therefore I\'m responding with this!;Second option;You selected the first second, therefore I\'m responding with this!]\n  $else\n  $interactionReply[$slashOption[option];;;;everyone]\n  $endif\n  `\n});\n')),(0,o.kt)("h3",{id:"advanced-example"},"Advanced Example"),(0,o.kt)("p",null,"Create the slash-commands: (please note that you require the ",(0,o.kt)("inlineCode",{parentName:"p"},'events: ["onMessage", "onInteractionCreate"]')," event in\nyour main file)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: \'createSlashCommand\',\n    code: `\n  $createApplicationCommand[global;example;Awesome example interaction command with auto-complete!;true;slash;[{\n  "name": "option",\n  "description": "test",\n  "required": false,\n  "type": 3,\n  "autocomplete": true\n}, {\n  "name": "anotheroption",\n  "description": "test",\n  "required": false,\n  "type": 3\n}]\n  `\n});\n')),(0,o.kt)("p",null,"Interaction Command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "test",\n    prototype: "slash",\n    $if: "old",\n    code: `\n  $if[$isAutocomplete==true]\n  $autoCompleteRespond[[{ \n    "name" : "First Option",\n    "value" : "You selected the first option, therefore I\\\'m responding with this!"\n  }, {\n    "name" : "Second Option",\n    "value" : "You selected the second option, therefore I\\\'m responding with this!"\n  }]]\n  $else\n  $interactionReply[$slashOption[option] - autocomplete #SEMI# $slashOption[anotheroption] - false autocomplete;;;;everyone]\n  $endif\n  `\n});\n')))}u.isMDXComponent=!0}}]);