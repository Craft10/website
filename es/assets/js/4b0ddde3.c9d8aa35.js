"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[42149],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return t?n.createElement(m,l(l({ref:r},s),{},{components:t})):n.createElement(m,l({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},76974:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>v,default:()=>j,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&s(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&s(e,t,r[t]);return e},d=(e,r)=>a(e,l(r)),f=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const m={title:"$authorBannerColor",description:"$authorBannerColor devolver\xe1 el color del banner del perfil del autor del comando.",id:"authorBannerColor"},v=void 0,b={unversionedId:"functions/user-related/authorBannerColor",id:"version-6.4.0/functions/user-related/authorBannerColor",title:"$authorBannerColor",description:"$authorBannerColor devolver\xe1 el color del banner del perfil del autor del comando.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/authorBannerColor.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/authorBannerColor",permalink:"/es/docs/functions/user-related/authorBannerColor",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"8 ago 2023",frontMatter:{title:"$authorBannerColor",description:"$authorBannerColor devolver\xe1 el color del banner del perfil del autor del comando.",id:"authorBannerColor"},sidebar:"docs",previous:{title:"$authorAvatar",permalink:"/es/docs/functions/user-related/authorAvatar"},next:{title:"$authorID",permalink:"/es/docs/functions/user-related/authorID"}},y={},O=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:O},g="wrapper";function j(e){var r=e,{components:t}=r,o=f(r,["components"]);return(0,n.kt)(g,d(p(p({},h),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$authorBannerColor")," devolver\xe1 el color del banner del perfil del autor del comando."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$authorBannerColor\n")),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 el color de tu banner de perfil (si existe):"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'userBanner',\n    code: `\n  $authorBannerColor\n  `\n});\n")))}j.isMDXComponent=!0}}]);