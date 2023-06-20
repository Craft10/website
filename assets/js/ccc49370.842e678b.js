"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46103],{45706:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),i=a(99861),n=a(92949);function l(){const{colorMode:e}=(0,n.I)();return r.createElement(i.Z,{repo:"aoijs/website",repoId:"MDEwOlJlcG9zaXRvcnkzNjM3OTEyMzY=",category:"General",categoryId:"DIC_kwDOFa8DhM4CXVEw",mapping:"pathname",term:"aoi.js comment section",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",crossorigin:"anonymous",async:!0})}},31830:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),i=a(86010),n=a(39960);const l={tag:"tag_U0uN",staff:"staff_nctV",mod:"mod_BJV7",creator:"creator_hdXK",contributor:"contributor_Fooe"};function s(e){return e.href?r.createElement(n.Z,e):r.createElement(r.Fragment,null,e.children)}function o(e){let{author:t,className:a}=e;const{name:n,title:o,url:c,imageURL:m,email:d}=t,u=c||d&&`mailto:${d}`||void 0,p=["@leref","@faf4a"].includes(n),g=["@dodogames","@supreme supreme","@supreme","@.josipfx","@faf4a","@satoshisaysnya","@usersatoshi"].includes(n),b=["@dodogames","@supreme supreme","@supreme","@.josipfx","@faf4a","@satoshisaysnya","@usersatoshi","@ahoemi","@snowytealatte"].includes(n),f=["@faf4a"].includes(n);return r.createElement("div",{className:(0,i.Z)("avatar margin-bottom--sm",a)},m&&r.createElement(s,{href:u,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:m,alt:n})),n&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s,{href:u,itemProp:"url"},r.createElement("span",{itemProp:"name"},n)),f&&r.createElement("span",{className:(0,i.Z)(l.tag,l.contributor)},"Contributor"),b&&r.createElement("span",{className:(0,i.Z)(l.tag,l.staff)},"Staff"),g&&r.createElement("span",{className:(0,i.Z)(l.tag,l.mod)},"Moderator"),p&&r.createElement("span",{className:(0,i.Z)(l.tag,l.creator)},"Creator")),o&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}},73591:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(67294),i=a(86010),n=a(95999),l=a(88824),s=a(9460);const o={container:"container_iJTo"};function c(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,l.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return r.createElement(r.Fragment,null,a(t))}function m(){return r.createElement(r.Fragment,null," \xb7 ")}function d(e){let{className:t}=e;const{metadata:a}=(0,s.C)(),{date:n,formattedDate:l,readingTime:d}=a;return r.createElement("div",{className:(0,i.Z)(o.container,"margin-vert--md",t)},void 0!==d&&r.createElement(r.Fragment,null,r.createElement(m,null),r.createElement(c,{readingTime:d})))}},857:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),i=a(9460),n=a(57768),l=a(45706),s=a(72389);function o(e){const{metadata:t,isBlogPostPage:a}=(0,i.C)(),{frontMatter:o,slug:c,title:m}=((0,s.Z)(),t),{enableComments:d}=o;return r.createElement(r.Fragment,null,r.createElement(n.Z,e),d&&a&&r.createElement(l.Z,null))}},97618:(e,t,a)=>{a.d(t,{Z:()=>r});a(67294);function r(e){return null}},9322:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(67294),i=a(87524),n=a(86010),l=a(39960),s=a(95999);const o={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm"};function c(e){let{sidebar:t}=e;const a=["/wikis/submit","/wikis/guidelines"];return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,n.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(o.sidebarItemTitle,"margin-bottom--md")},"Introduction"),r.createElement("ul",{className:(0,n.Z)(o.sidebarItemList,"clean-list")},r.createElement("li",{key:"/wikis/submit",className:o.sidebarItem},r.createElement(l.Z,{isNavLink:!0,to:"/wikis/submit",className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},"Submit Wiki")),r.createElement("li",{key:"/wikis/guidelines",className:o.sidebarItem},r.createElement(l.Z,{isNavLink:!0,to:"/wikis/guidelines",className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},"Wiki Guidelines"))),r.createElement("div",{className:(0,n.Z)(o.sidebarItemTitle,"margin-bottom--md")},"Recent Wikis"),r.createElement("ul",{className:(0,n.Z)(o.sidebarItemList,"clean-list")},t.items.map((e=>a.includes(e.permalink)?null:r.createElement("li",{key:e.permalink,className:o.sidebarItem},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.title)))))))}var m=a(13102);function d(e){var t;let{sidebar:a}=e;return r.createElement("ul",{className:"menu__list"},r.createElement("div",{className:"menu__title"},"Introduction"),r.createElement("li",{key:"/wikis/submit",className:"menu__list-item"},r.createElement(l.Z,{isNavLink:!0,to:"/wikis/submit",className:"menu__link",activeClassName:"menu__link--active"},"Submit Wiki")),r.createElement("li",{key:"/wikis/guidelines",className:"menu__list-item"},r.createElement(l.Z,{isNavLink:!0,to:"/wikis/guidelines",className:"menu__link",activeClassName:"menu__link--active"},"Wiki Guidelines")),r.createElement("div",{className:"menu__title"},"Recent Wikis"),null==a||null==(t=a.items)?void 0:t.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function u(e){var t;let{sidebar:a}=e;const i=["/wikis/submit","/wikis/guidelines"];return r.createElement(m.Zo,{component:d,props:{sidebar:{...a,items:null==a||null==(t=a.items)?void 0:t.filter((e=>!i.includes(e.permalink)))}}})}function p(e){let{sidebar:t}=e;const a=(0,i.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(u,{sidebar:t}):r.createElement(c,{sidebar:t}):null}},58073:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(67294),i=a(8121);const n=e=>{let{children:t,color:a,radius:i,padding:n}=e;return r.createElement("span",{style:{backgroundColor:a,borderRadius:i||"2px",color:"#fff",padding:n||"0.2rem"}},t)};var l=a(74866),s=a(85162),o=a(45706),c=a(17891),m=a(86010),d=a(25365);const u=e=>{let{name:t,id:a,value:i,onChange:n,type:l,error:s}=e;const o={width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid "+(s?"red":"#A9A9A9"),fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",color:"var(--aoijs-color)",background:"var(--aoijs-color)",position:"relative"},[c,m]=(0,r.useState)(""),d=e=>{n(e)},u=async()=>{if("number"!==l)return;if(""===i)return;if(i.length<18)return;let e;try{e=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${i}`)}catch{return}try{const t=await e.text();if(t.startsWith("<"))return;const a=JSON.parse(t);a&&a.avatar&&m(a.avatar)}catch(s){return}};let g=null;switch(l){case"textarea":g=r.createElement("textarea",{name:t,id:a,value:i,onChange:d,style:{...o,minHeight:"150px",resize:"none"},required:!0});break;case"number":const e=e=>{const{value:a}=e.target,r=a.replace(/[^0-9]/g,"");r.length>20||n({target:{name:t,value:r}})};g=r.createElement("div",{style:{position:"relative"}},r.createElement("input",{type:"text",name:t,id:a,value:i,onChange:e,onBlur:u,style:o,inputMode:"numeric",pattern:"[0-9]*",required:!0}),c&&r.createElement("img",{src:c,alt:"Avatar",style:p}));break;case"small":g=r.createElement("input",{type:"text",name:t,id:a,value:i,onChange:d,style:{...o,width:"50%",fontSize:"12px"},required:!0});break;default:g=r.createElement("input",{type:"text",name:t,id:a,value:i,onChange:d,style:o,required:!0})}return r.createElement("div",null,g)},p={position:"absolute",top:"50%",right:"8px",transform:"translateY(-50%)",width:"24px",height:"24px",borderRadius:"50%"};var g=a(99578),b=a(39960);const f=()=>{const[e,t]=(0,r.useState)(0),[a,i]=(0,r.useState)({title:"",discordUID:"",description:"",code:"",tags:[],isUIDValid:!0}),[n,l]=(0,r.useState)({title:!1,discordUID:!1,description:!1,code:!1}),{title:s,description:o,discordUID:c,code:p,tags:f,isUIDValid:h}=a,v=e=>{const{name:t,value:a}=e.target;let r=a;"title"===t?(r=a.replace(/[^a-zA-Z0-9 ]/g,""),r.length>50&&(r=r.substring(0,50))):"description"===t&&a.length>500&&(r=a.substring(0,500)),i((e=>({...e,[t]:r})))},E=async a=>{a.preventDefault();const r=Date.now();if(r-e<15e3)return void alert("Don't spam the submit button!");t(r);const n={title:!1,discordUID:!1,description:!1,code:!1};if(""===s.trim()&&(n.title=!0),""===c.trim()&&(n.discordUID=!0),""===o.trim()&&(n.description=!0),""===p.trim()&&(n.code=!0),l(n),!0===n.description||!0===n.code||!0===n.title||!0===n.discordUID)return;if(!await(async e=>{if(["none"].includes(e))return!1;try{const t=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${e}`);return!(await t.json()).bot}catch(t){return!1}})(c))return void i((e=>({...e,isUIDValid:!1})));const{avatar:m,username:d}=await(async e=>{const t=Math.floor(5*Math.random());try{const a=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${e}`),r=await a.json();return console.log(r.avatar),r&&r.avatar?{avatar:r.avatar,username:r.username}:{avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User"}}catch(a){return{avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User"}}})(c),u=`${s.toLowerCase().replace(/\s+/g,"-")}-${Math.random().toString(36).substring(7)}.md`,g=`---\ntitle: "${s}"\ndescription: "${o}"\nauthors:\n  name: "@${d}"\n  title: Member\n  url: https://discord.com/users/${c}\n  image_url: ${m}\ntags: ${JSON.stringify(f)}\nhide_table_of_contents: false\nenableComments: true\npagination_prev: null\npagination_next: null\n---\n\n${p}`;try{if(!(await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vZ2l0aHVi"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({commitMessage:`Create new file -- ${d}`,content:g,fileName:u})})).ok)return;await alert("Successfully submitted your wiki for review, check back later!"),window.location.reload()}catch(b){return void console.error("Failed to submit the file:",b)}};return r.createElement("form",{onSubmit:E},r.createElement("br",null),r.createElement("br",null),r.createElement("h3",null,"Title of Wiki",r.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short and fitting title for your Wiki)")),r.createElement(u,{name:"title",id:"title",value:s,onChange:v,type:"text",placeholder:"Title",required:!0,pattern:"[a-zA-Z0-9]*",error:n.title}),n.title&&r.createElement("p",{style:{color:"red"}},"Title is required"),r.createElement("br",null),r.createElement("h3",null,"Description",r.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short description about the purpose of your Wiki)")),r.createElement(u,{name:"description",id:"description",value:o,onChange:v,type:"textarea",placeholder:"Description",required:!0,error:n.description}),n.description&&r.createElement("p",{style:{color:"red"}},"Description is required"),r.createElement("br",null),r.createElement("h3",null,"Discord User ID",r.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Your Discord User ID, so you get the full credit of YOUR work)")),r.createElement(u,{name:"discordUID",id:"discordUID",value:c,onChange:v,type:"number",placeholder:"Discord UID",required:!0,error:!h||n.discordUID}),!h&&r.createElement("p",{style:{color:"red"}},"Invalid user"),n.discordUID&&r.createElement("p",{style:{color:"red"}},"Discord UID is required"),r.createElement("br",null),r.createElement("h3",null,"Content of Wiki",r.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(The content of your Wiki)")),r.createElement(u,{name:"code",id:"code",value:p,onChange:v,type:"textarea",placeholder:"Code",required:!0,error:n.code}),r.createElement("h5",{style:{marginBottom:"0.5rem"}},r.createElement("span",{style:{verticalAlign:"middle"}},"Preview",r.createElement("small",{style:{fontSize:"8px",color:"gray",verticalAlign:"middle"}}," ","(How your Wiki will look on the website)"))),r.createElement("div",{style:{width:"100%",borderRadius:"4px",fontSize:"14px",color:"var(--aoijs-color)",background:"var(--aoijs-color)",position:"auto",fontFamily:"var(--ifm-font-family-base)"}},r.createElement("div",{style:{border:"1px solid #A9A9A9",borderRadius:"4px",overflow:"hidden"}},r.createElement("div",{style:{background:"transparent",borderRadius:"4px",padding:"12px"}},r.createElement(d.D,null,p)))),n.code&&r.createElement("p",{style:{color:"red"}},"Content is required"),r.createElement("br",null),r.createElement("h3",null,"Tags",r.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Select Tags that fit your Wiki)")),r.createElement("div",{className:g.Z.tagContainer},["aoi.music","aoi.js","aoi.panel","aoi.dashboard","v6","v7","Other"].map((e=>r.createElement("span",{key:e,className:(0,m.Z)(g.Z.tag,{[g.Z.active]:f.includes(e)}),onClick:()=>(e=>{const t=[...f];t.includes(e)?t.splice(t.indexOf(e),1):t.push(e),i((e=>({...e,tags:t})))})(e)},e)))),r.createElement("div",{className:g.Z.buttons,style:{width:"100%",display:"flex",justifyContent:"flex-end",marginTop:"15px"}},r.createElement(b.Z,{className:(0,m.Z)("button button--outline button--secondary"),onClick:E,style:{width:"100%"}},"Submit")))},h={...i.Z,Highlight:n,GiscusComponent:o.Z,InputField:u,SubmitForm:f,Tabs:l.Z,Tooltip:c.u,TabItem:s.Z}},99578:(e,t,a)=>{a.d(t,{Z:()=>r});const r={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",tagContainer:"tagContainer_k__v",tag:"tag_jTZG",active:"active_Iznl"}}}]);