"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,g=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>v,frontMatter:()=>g,metadata:()=>b,toc:()=>f});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),c=(e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const g={title:"Parser",description:"This guide explains how to properly use embed parsers and component parsers. Including basics and examples.",id:"parser"},k=void 0,b={unversionedId:"guides/other/parser",id:"version-6.4.0/guides/other/parser",title:"Parser",description:"This guide explains how to properly use embed parsers and component parsers. Including basics and examples.",source:"@site/versioned_docs/version-6.4.0/guides/other/2parser.md",sourceDirName:"guides/other",slug:"/guides/other/parser",permalink:"/fr/docs/guides/other/parser",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689803006,formattedLastUpdatedAt:"19 juil. 2023",frontMatter:{title:"Parser",description:"This guide explains how to properly use embed parsers and component parsers. Including basics and examples.",id:"parser"},sidebar:"docs",previous:{title:"Command Options",permalink:"/fr/docs/guides/other/commandoptions"},next:{title:"Invite System",permalink:"/fr/docs/guides/other/invite-system"}},h={},f=[{value:"This guide covers everything you need to know about embed parsers, component parsers, including basics and examples.",id:"this-guide-covers-everything-you-need-to-know-about-embed-parsers-component-parsers-including-basics-and-examples",level:4},{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Embed Parser",id:"embed-parser",level:2},{value:"Embed Parser Functions",id:"embed-parser-functions",level:3},{value:"Components Parser",id:"components-parser",level:2},{value:"Button Parser",id:"button-parser",level:3},{value:"Select Menu Parser",id:"select-menu-parser",level:3},{value:"Interaction Modal Parser",id:"interaction-modal-parser",level:3},{value:"Parsers Examples",id:"parsers-examples",level:2},{value:"Embed Parser",id:"embed-parser-1",level:3},{value:"Components Parser",id:"components-parser-1",level:3},{value:"Button Parser",id:"button-parser-1",level:4},{value:"Select Menu Parser",id:"select-menu-parser-1",level:4},{value:"Interaction Modal Parser",id:"interaction-modal-parser-1",level:4}],N={toc:f},y="wrapper";function v(e){var t=e,{components:n}=t,r=c(t,["components"]);return(0,a.kt)(y,d(m(m({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h4",m({},{id:"this-guide-covers-everything-you-need-to-know-about-embed-parsers-component-parsers-including-basics-and-examples"}),"This guide covers everything you need to know about embed parsers, component parsers, including basics and examples."),(0,a.kt)("h3",m({},{id:"table-of-contents"}),"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"#embed-parser"}),"Embed Parser")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"#embed-parser-functions"}),"Embeds"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"#components-parser"}),"Components Parser")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"#button-parser"}),"Button Parser"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"#select-menu-parser"}),"Select Menu Parser"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"#interaction-modal-parser"}),"Interaction Modal Parser"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"#parsers-examples"}),"Examples")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"#embed-parser-1"}),"Embed Parser Examples"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"#components-parser-1"}),"Component Parser Examples"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",m({parentName:"strong"},{href:"#interaction-modal-parser-1"}),"Interaction Modal Parser Example")))))),(0,a.kt)("hr",null),(0,a.kt)("h2",m({},{id:"embed-parser"}),"Embed Parser"),(0,a.kt)("p",null,"Embed Parser are quite easy to use once you know how, this section will be covering the basics about embed parsers. You\nrequire ",(0,a.kt)("inlineCode",{parentName:"p"},"{newEmbed:{...}}")," every time you want to use embed parsers."),(0,a.kt)("h3",m({},{id:"embed-parser-functions"}),"Embed Parser Functions"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"{title:text}\n{description:text}\n{color:...}\n{footer:text:icon?}\n{image:URL}\n{thumbnail:URL}\n{author:name:icon?}\n{authorURL:URL}\n{field:title:value:inline? (true / false)}\n{timestamp:ms?}\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",m({},{id:"components-parser"}),"Components Parser"),(0,a.kt)("p",null,"For every component parser is one thing always the same, ",(0,a.kt)("inlineCode",{parentName:"p"},"{actionRow:{...}}"),". We use that to declare the arguments\ninside of it as components."),(0,a.kt)("h3",m({},{id:"button-parser"}),"Button Parser"),(0,a.kt)("p",null,"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"{button:label:style:customID:disabled? (true / false):emoji?}\n")),(0,a.kt)("details",{open:!0},(0,a.kt)("summary",null,(0,a.kt)("h3",null," Button Types ")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Value"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Color"),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Primary"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"1"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"blurple"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{button:Example Button!:primary:customID:false}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Secondary"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"grey"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{button:Example Button!:secondary:customID:false}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Success"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"3"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"green"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{button:Example Button!:success:customID:false}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Danger"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"4"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"red"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{button:Example Button!:danger:customID:false}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Link"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"5"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"grey, navigates to a URL"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{button:Example Button!:link:https\\\\:discord.gg:false}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Emoji"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"0"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"primary button with emoji"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"{button:Example Button!:primary:customID:false:emojiName,emojiID}")))))),(0,a.kt)("h3",m({},{id:"select-menu-parser"}),"Select Menu Parser"),(0,a.kt)("p",null,"Select Menu Parser Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"{selectMenu:customID:placeholder:minValue:maxValue:default(true / false):...options}\n\n{selectMenuOptions:optionName:customID:optionDescription:default? (true / false):emoji?}\n")),(0,a.kt)("h3",m({},{id:"interaction-modal-parser"}),"Interaction Modal Parser"),(0,a.kt)("p",null,"Interaction Modal Parser Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"{textInput:label:style:customID:required? (true / false):placeholder?:minLength?:maxLength?:defaultValue?}\n")),(0,a.kt)("h2",m({},{id:"parsers-examples"}),"Parsers Examples"),(0,a.kt)("p",null,"Below are simple examples of each parser and how to use them."),(0,a.kt)("h3",m({},{id:"embed-parser-1"}),"Embed Parser"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Embed with title, footer, image and field.")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"{newEmbed:{title:Another Awesome Example !}{image:https\\\\://cdn.discordapp.com/icons/773352845738115102/f6b0d1a62a83397976ea441c5377e6ad.png?size=128}{field:This is a field title!:And a field description which is not inline!:false}{footer:Example #2}}\n")),(0,a.kt)("p",null,(0,a.kt)("img",m({parentName:"p"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/others/embed-image-footer.png",alt:"preview"}))),(0,a.kt)("hr",null),(0,a.kt)("h3",m({},{id:"components-parser-1"}),"Components Parser"),(0,a.kt)("h4",m({},{id:"button-parser-1"}),"Button Parser"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Two buttons each one in a different row.")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"{actionRow:{button:Button:secondary:button1}}{actionRow:{button:Button:primary:button2}}\n")),(0,a.kt)("p",null,(0,a.kt)("img",m({parentName:"p"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/others/embed-buttons.png",alt:"preview"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Three buttons, one with emoji.")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"{actionRow:{button:Button:primary:button1:false}{button:Button:primary:button2:false}{button:Button:danger:button3:false:\ud83d\udc4b}}\n")),(0,a.kt)("p",null,(0,a.kt)("img",m({parentName:"p"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/others/embed-buttons-3.png",alt:"preview"}))),(0,a.kt)("h4",m({},{id:"select-menu-parser-1"}),"Select Menu Parser"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Single-Select Menu with two options")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"{actionRow:{selectMenu:customID:Placeholder:1:1:false:{selectMenuOptions:Option1:1:OptionDescription1:false:\ud83d\udc4b}{selectMenuOptions:Option2:2:OptionDescription2:false}}}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Multi-Select Menu with three options and and a maximum of 2 selectable options")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"{actionRow:{selectMenu:customID:Placeholder:1:2:false:{selectMenuOptions:Option1:1:OptionDescription1:false:\ud83d\udc4b}{selectMenuOptions:Option2:2:OptionDescription2:false}{selectMenuOptions:Option3:3:OptionDescription3:false}}}\n")),(0,a.kt)("h4",m({},{id:"interaction-modal-parser-1"}),"Interaction Modal Parser"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Modal with two fields one being normal sized and the other being bigger.")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"{actionRow:{textInput:ExampleTitle1:1:customID1:true}}{actionRow:{textInput:ExampleTitle2:2:customID2:false}}\n")))}v.isMDXComponent=!0}}]);