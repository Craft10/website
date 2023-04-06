"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74901],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,y=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={title:"$isEveryoneMentioned",description:"$isEveryoneMentioned will check if everyone or here is mentioned.",id:"isEveryoneMentioned"},a=void 0,l={unversionedId:"functions/Util/isEveryoneMentioned",id:"functions/Util/isEveryoneMentioned",title:"$isEveryoneMentioned",description:"$isEveryoneMentioned will check if everyone or here is mentioned.",source:"@site/docs/functions/Util/isEveryoneMentioned.md",sourceDirName:"functions/Util",slug:"/functions/Util/isEveryoneMentioned",permalink:"/docs/functions/Util/isEveryoneMentioned",draft:!1,tags:[],version:"current",frontMatter:{title:"$isEveryoneMentioned",description:"$isEveryoneMentioned will check if everyone or here is mentioned.",id:"isEveryoneMentioned"},sidebar:"docs",previous:{title:"$isDeafen",permalink:"/docs/functions/Util/isDeafen"},next:{title:"$isGuildDeafened",permalink:"/docs/functions/Util/isGuildDeafened"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$isEveryoneMentioned")," will check if everyone or here is mentioned."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$isEveryoneMentioned\n")),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will check if you mentioned ",(0,o.kt)("inlineCode",{parentName:"p"},"@here")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@everyone"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'isEveryoneMentioned',\n    code: `\n  You did not mention @ everyone!\n  $onlyIf[$isEveryoneMentioned==false;You tried to mention @ everyone!]\n  `\n});\n")))}d.isMDXComponent=!0}}]);