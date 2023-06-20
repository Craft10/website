"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[6856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||s[u]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={title:"$interactionModal",description:"Send an interaction modal."},i=void 0,l={unversionedId:"functions/interactionmodal",id:"version-5.5.5/functions/interactionmodal",title:"$interactionModal",description:"Send an interaction modal.",source:"@site/versioned_docs/version-5.5.5/functions/interactionmodal.md",sourceDirName:"functions",slug:"/functions/interactionmodal",permalink:"/docs/5.5.5/functions/interactionmodal",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687258307,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$interactionModal",description:"Send an interaction modal."},sidebar:"docs",previous:{title:"$interactionFollowUp",permalink:"/docs/5.5.5/functions/interactionfollowup"},next:{title:"$interactionReply",permalink:"/docs/5.5.5/functions/interactionreply"}},p={},m=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Components Options",id:"components-options",level:3},{value:"Components Types",id:"components-types",level:4},{value:"Example",id:"example",level:2}],c={toc:m},d="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$interactionModal"),", sends a modal aka form to user fill it. "),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$interactionModal[title;customID;components]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Title of modal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"customID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"A custom ID for modal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"components"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds components for modal"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,r.kt)("h3",{id:"components-options"},"Components Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{actionRow\n  :{textInput\n  :title\n  :type\n  :customid\n  :required?\n  :placeholder?\n  :minChar?\n  :maxChar?\n  :default?}\n}\n// ? : optional\n")),(0,r.kt)("h4",{id:"components-types"},"Components Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"title")," \u2014 The title of field."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," \u2014 The type of title field",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," \u2192 Single line answer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2")," \u2192 Multi-lines answer")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"customid")," \u2014 Custom ID of the ",(0,r.kt)("inlineCode",{parentName:"li"},"$textInputValue"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"required")," \u2014 The answer required or not."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"placeholder")," \u2014 The text that will show as default label on modal answer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minChar")," \u2014 Minimum character required for the answer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxChar")," \u2014 Maximum character required for the answer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default")," \u2014 The default message will be on the answer field.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.interactionCommand({\n  name: \"profile\", \n  prototype: 'slash',\n  code: `\n  $interactionModal[Hello there!;profileModal;\n    {actionRow:\n      {textInput:What's your name?:1:nameInput:yes:$username:3:30:$username}\n    }\n    {actionRow:\n      {textInput:How old are you?:2:ageInput:no:13+:0:2}\n    }\n  ]\n  `\n});\n\nbot.interactionCommand({\n  name: \"profileModal\",\n  prototype: 'modal',\n  code: `\n  $interactionReply[Nice to meet you, **$textInputValue[nameInput]**. So you are $textInputValue[ageInput] years old.]\n  `\n});\n")))}s.isMDXComponent=!0}}]);