"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[64013],{55061:(e,t,i)=>{i.d(t,{Z:()=>d});var a=i(67294),s=i(86010),r=i(51933),l=i(77886),n=Object.defineProperty,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,k=(e,t)=>{for(var i in t||(t={}))m.call(t,i)&&u(e,i,t[i]);if(c)for(var i of c(t))o.call(t,i)&&u(e,i,t[i]);return e},b=(e,t)=>{var i={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&o.call(e,a)&&(i[a]=e[a]);return i};function d(e){const t=e,{sidebar:i,toc:n,children:c}=t,m=b(t,["sidebar","toc","children"]),o=i&&i.items.length>0;return a.createElement(r.Z,k({},m),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(l.Z,{sidebar:i}),a.createElement("main",{className:(0,s.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&a.createElement("div",{className:"col col--2"},n))))}},77701:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(67294),s=i(86010),r=i(11128);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function n({permalink:e,label:t,count:i}){return a.createElement(r.Z,{href:e,className:(0,s.Z)(l.tag,i?l.tagWithCount:l.tagRegular)},t,i&&a.createElement("span",null,i))}},17119:(e,t,i)=>{i.d(t,{Z:()=>r});var a=i(67294),s=i(30143);const r=()=>a.createElement(s.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:10,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",textAlign:"center",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},77886:(e,t,i)=>{i.d(t,{Z:()=>N});var a=i(67294),s=i(13044),r=i(86010),l=i(11128),n=i(14699);const c={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",newItem:"newItem_b9o7",newTag:"newTag_fGI0",activeButton:"activeButton_HxF9",searchContainer:"searchContainer_GE6j",searchInput:"searchInput_nz1m",mobileSearchContainer:"mobileSearchContainer_i5LO",mobileSearchInput:"mobileSearchInput_ULu5",searchIcon:"searchIcon_X7sx",searchClose:"searchClose_K_EJ"};function m({sidebar:e}){const t=["/wikis/submit","/wikis/guidelines","/wikis/tags","es/wikis/submit","es/wikis/guidelines","es/wikis/tags","fr/wikis/submit","fr/wikis/guidelines","fr/wikis/tags","ar/wikis/submit","ar/wikis/guidelines","ar/wikis/tags","ru/wikis/submit","ru/wikis/guidelines","ru/wikis/tags","uk/wikis/submit","uk/wikis/guidelines","uk/wikis/tags","tr/wikis/submit","tr/wikis/guidelines","tr/wikis/tags","de/wikis/submit","de/wikis/guidelines","de/wikis/tags"],[i,s]=(0,a.useState)(!1),[m,o]=(0,a.useState)("");(0,a.useEffect)((()=>{const e=u("sortingState");e&&s(JSON.parse(e))}),[]),(0,a.useEffect)((()=>{b()&&k("sortingState",JSON.stringify(i))}),[i]);const u=e=>b()?localStorage.getItem(e):null,k=(e,t)=>{b()&&localStorage.setItem(e,t)},b=()=>{try{const e="test";return localStorage.testKey=e,!0}catch(e){return!1}},d=e.items.filter((e=>!t.includes(e.permalink))).filter((e=>e.title.toLowerCase().includes(m.toLowerCase()))).sort(((e,t)=>{if(i)return e.title.localeCompare(t.title)}));return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,r.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,n.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.Z)(c.sidebarItemTitle,"margin-bottom--md")},a.createElement("span",null,"Introduction")),a.createElement("ul",{className:(0,r.Z)(c.sidebarItemList,"clean-list")},a.createElement("li",{key:"/wikis/guidelines",className:c.sidebarItem},a.createElement(l.Z,{isNavLink:!0,to:"/wikis/guidelines",className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},"Wiki Guidelines")),a.createElement("li",{key:"/wikis/submit",className:c.sidebarItem},a.createElement(l.Z,{isNavLink:!0,to:"/wikis/submit",className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},"Submit Wiki")),a.createElement("li",{key:"/wikis/tags",className:c.sidebarItem},a.createElement(l.Z,{isNavLink:!0,to:"/wikis/tags",className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},"Tags"))),a.createElement("div",{className:(0,r.Z)(c.sidebarItemTitle,"margin-bottom--md")},"Wikis",a.createElement("button",{className:(0,r.Z)(c.activeButton,{[c.activeButton]:i}),onClick:()=>{s((e=>!e))}},i?"A-Z":"Newest First")),a.createElement("div",{className:c.searchContainer},a.createElement("input",{type:"text",className:c.searchInput,placeholder:"Search Wikis...",value:m,onChange:e=>{o(e.target.value)}})),a.createElement("ul",{className:(0,r.Z)(c.sidebarItemList,"clean-list")},d.map(((e,t)=>{return a.createElement("li",{key:e.permalink,className:c.sidebarItem},a.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},(i=e.title).charAt(0).toUpperCase()+i.slice(1)));var i})))))}var o=i(56981),u=Object.defineProperty,k=Object.defineProperties,b=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,w=(e,t,i)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,v=(e,t)=>{for(var i in t||(t={}))g.call(t,i)&&w(e,i,t[i]);if(d)for(var i of d(t))p.call(t,i)&&w(e,i,t[i]);return e},E=(e,t)=>k(e,b(t));function f({sidebar:e,onSearch:t}){const[i,s]=(0,a.useState)(""),r=["/wikis/submit","/wikis/guidelines","/wikis/tags","es/wikis/submit","es/wikis/guidelines","es/wikis/tags","fr/wikis/submit","fr/wikis/guidelines","fr/wikis/tags","ar/wikis/submit","ar/wikis/guidelines","ar/wikis/tags","ru/wikis/submit","ru/wikis/guidelines","ru/wikis/tags","uk/wikis/submit","uk/wikis/guidelines","uk/wikis/tags","tr/wikis/submit","tr/wikis/guidelines","tr/wikis/tags","de/wikis/submit","de/wikis/guidelines","de/wikis/tags"],n=null==e?void 0:e.items.filter((e=>!r.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title))),[m,o]=(0,a.useState)(n);return a.createElement("ul",{className:"menu__list"},a.createElement("div",{className:"menu__title"},"Introduction"),a.createElement("li",{key:"/wikis/guidelines",className:"menu__list-item"},a.createElement(l.Z,{isNavLink:!0,to:"/wikis/guidelines",className:"menu__link",activeClassName:"menu__link--active"},"Wiki Guidelines")),a.createElement("li",{key:"/wikis/submit",className:"menu__list-item"},a.createElement(l.Z,{isNavLink:!0,to:"/wikis/submit",className:"menu__link",activeClassName:"menu__link--active"},"Submit Wiki")),a.createElement("li",{key:"/wikis/tags",className:"menu__list-item"},a.createElement(l.Z,{isNavLink:!0,to:"/wikis/tags",className:"menu__link",activeClassName:"menu__link--active"},"Tags")),a.createElement("div",{className:"menu__title",style:{marginTop:"25px",marginBottom:"15px"}},"Wikis"),a.createElement("div",{className:c.searchContainer},a.createElement("input",{type:"text",className:c.searchInput,placeholder:"Search Wikis...",value:i,onChange:e=>{const t=e.target.value.toLowerCase(),i=n.filter((e=>e.title.toLowerCase().includes(t)));o(i),s(t)}})),m.map((e=>{return a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},(t=e.title).charAt(0).toUpperCase()+t.slice(1)));var t})))}function h({sidebar:e,onSearch:t}){const i=["/wikis/submit","/wikis/guidelines","/wikis/tags"],s=null==e?void 0:e.items.filter((e=>!i.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title)));return a.createElement(o.Zo,{component:f,props:{sidebar:E(v({},e),{items:s.map((e=>{return E(v({},e),{title:(t=e.title,t.charAt(0).toUpperCase()+t.slice(1))});var t}))})}})}function N({sidebar:e}){const t=(0,s.i)();return(null==e?void 0:e.items.length)?"mobile"===t?a.createElement(h,{sidebar:e}):a.createElement(m,{sidebar:e}):null}},25030:(e,t,i)=>{i.r(t),i.d(t,{default:()=>N});var a=i(67294),s=i(86010),r=i(14699);const l=()=>(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=i(17766),c=i(55116),m=i(17119),o=i(55061),u=i(77701);const k={tag:"tag_Nnez"};var b=Object.defineProperty,d=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,w=(e,t,i)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,v=(e,t)=>{for(var i in t||(t={}))g.call(t,i)&&w(e,i,t[i]);if(d)for(var i of d(t))p.call(t,i)&&w(e,i,t[i]);return e};function E({letterEntry:e}){return a.createElement("article",null,a.createElement("h2",null,e.letter),a.createElement("ul",{className:"padding--none"},e.tags.map((e=>a.createElement("li",{key:e.permalink,className:k.tag},a.createElement(u.Z,v({},e)))))),a.createElement("hr",null))}function f({tags:e}){const t=function(e){const t={};return Object.values(e).forEach((e=>{const i=function(e){return e[0].toUpperCase()}(e.label);null!=t[i]||(t[i]=[]),t[i].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}(e);return a.createElement("section",{className:"margin-vert--lg"},t.map((e=>a.createElement(E,{key:e.letter,letterEntry:e}))))}var h=i(68190);function N({tags:e,sidebar:t}){const i=l();return a.createElement(n.FG,{className:(0,s.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},a.createElement("div",null,a.createElement(m.Z,null)),a.createElement(n.d,{title:i}),a.createElement(h.Z,{tag:"blog_tags_list"}),a.createElement(o.Z,{sidebar:t},a.createElement("h2",null,i),a.createElement(f,{tags:e})))}}}]);