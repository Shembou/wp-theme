(()=>{"use strict";var e,s={998:()=>{const e=window.wp.blocks,s=window.wp.i18n,i=window.wp.blockEditor,a=window.wp.components,l=(window.React,window.ReactJSXRuntime),n=()=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"16",fill:"none",viewBox:"0 0 15 16",children:(0,l.jsx)("path",{fill:"#00A6E0",d:"M12.988 8.332 8.769 12.55a.47.47 0 0 1-.663-.663l3.419-3.418H2.344a.469.469 0 0 1 0-.938h9.18L8.107 4.113a.469.469 0 1 1 .663-.663l4.219 4.218a.47.47 0 0 1 0 .664"})}),t=e=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"9",height:"13",fill:"none",viewBox:"0 0 9 13",children:(0,l.jsx)("path",{stroke:"#1A4553",strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 1.152v10.667m0 0 4-4m-4 4-4-4"})}),r=()=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"16",fill:"none",viewBox:"0 0 15 16",children:(0,l.jsx)("path",{fill:"#00A6E0",d:"M12.988 8.332 8.769 12.55a.47.47 0 0 1-.663-.663l3.419-3.418H2.344a.469.469 0 0 1 0-.938h9.18L8.107 4.113a.469.469 0 1 1 .663-.663l4.219 4.218a.47.47 0 0 1 0 .664"})}),o=e=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"9",height:"13",fill:"none",viewBox:"0 0 9 13",children:(0,l.jsx)("path",{stroke:"#1A4553",strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 1.152v10.667m0 0 4-4m-4 4-4-4"})}),d=JSON.parse('{"UU":"create-block/detailed-employees-section"}');(0,e.registerBlockType)(d.UU,{edit:function({attributes:e,setAttributes:r}){const{employees:o=[],limit:d="2"}=e,[c,p]=React.useState(parseInt(d)),h=(e,s,i)=>{const a=[...o];a[e][s]=i,r({employees:a})},m=(e,s)=>(0,l.jsxs)("div",{style:{display:"grid"},children:[e.tags.map(((e,i)=>(0,l.jsx)("div",{children:(0,l.jsx)(a.TextControl,{label:`Tag ${i+1}`,value:e,onChange:e=>((e,s,i)=>{const a=[...o],l={...a[s]};l.tags=[...l.tags],l.tags[e]=i,a[s]=l,r({employees:a})})(i,s,e)})},i))),(0,l.jsx)(a.Button,{isPrimary:!0,onClick:()=>(e=>{const s=[...o],i={...s[e]};i.tags=[...i.tags,""],s[e]=i,r({employees:s})})(s),children:"Add Tag"})]});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.InspectorControls,{children:[(0,l.jsxs)(a.PanelBody,{title:"Employees",initialOpen:!0,children:[o.map(((e,n)=>(0,l.jsxs)("div",{style:{width:"100%"},children:[(0,l.jsx)(a.PanelRow,{children:(0,l.jsx)(a.TextControl,{label:`Heading ${n+1}`,value:e.heading,onChange:e=>h(n,"heading",e)})}),(0,l.jsx)(a.PanelRow,{children:(0,l.jsx)(i.RichText,{tagName:"p",label:`Paragraph ${n+1}`,value:e.paragraph,onChange:e=>h(n,"paragraph",e),style:{border:"1px solid black",width:"100%"}})}),(0,l.jsx)(a.PanelRow,{children:(0,l.jsx)(a.TextControl,{label:`Link ${n+1}`,value:e.link,onChange:e=>h(n,"link",e)})}),(0,l.jsx)(a.PanelRow,{children:(0,l.jsx)(i.MediaUpload,{onSelect:e=>{h(n,"image",e.url),h(n,"image_alt",e.alt)},allowedTypes:["image"],render:({open:i})=>(0,l.jsxs)("div",{children:[(0,l.jsx)(a.Button,{onClick:i,variant:"secondary",children:e.image?(0,s.__)("Replace Image","detailed-employees-section"):(0,s.__)("Upload Image","detailed-employees-section")}),e.image&&(0,l.jsxs)("div",{style:{marginTop:"10px",alignItems:"center",display:"grid"},children:[(0,l.jsx)("img",{src:e.image,alt:(0,s.__)("Image","header-with-icons"),style:{maxWidth:"100%",border:"1px",padding:"10px"}}),(0,l.jsx)(a.Button,{onClick:()=>h(n,"image",""),variant:"link",isDestructive:!0,children:(0,s.__)("Remove Image","header-with-icons")})]})]})})}),(0,l.jsx)(a.PanelRow,{children:m(e,n)}),(0,l.jsx)(a.Button,{isDestructive:!0,onClick:()=>(e=>{const s=o.filter(((s,i)=>i!==e));r({employees:s})})(n),children:"Remove Employee"})]},n))),(0,l.jsx)(a.Button,{isPrimary:!0,onClick:()=>{r({employees:[...o,{heading:"",tags:[],paragraph:"",link:"",image:"",image_alt:""}]})},children:"Add new employee"})]}),(0,l.jsx)(a.PanelBody,{title:"Settings",initialOpen:!1,children:(0,l.jsx)(a.PanelRow,{children:(0,l.jsx)(a.TextControl,{label:"Card Limit",value:d,onChange:e=>{const s=parseInt(e,10)||0;r({limit:e}),p(s)}})})})]}),(0,l.jsxs)("section",{...(0,i.useBlockProps)(),id:"detailed-employees-section",children:[o.slice(0,c).map((({image:e,heading:s,tags:i,paragraph:a,link:t,image_alt:r},o)=>(0,l.jsxs)("div",{className:"employee-wrapper "+(o%2?"odd":"even"),children:[(0,l.jsx)("img",{src:e,alt:r}),(0,l.jsxs)("div",{className:"description-wrapper",children:[(0,l.jsx)("h2",{children:s}),(0,l.jsx)("div",{className:"tags-wrapper",children:i.map(((e,s)=>(0,l.jsx)("p",{className:"tag",children:e},s)))}),a&&(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:a},className:"paragraph"}),(0,l.jsxs)("a",{href:t,className:"button",children:["Dowiedz się więcej ",(0,l.jsx)(n,{})]})]})]},o))),c<o.length&&(0,l.jsxs)("div",{className:"tooltip-wrapper",style:{"--currentPercentile":`${parseInt(c/o.length*100)}%`},children:[(0,l.jsx)("div",{className:"tooltip",children:(0,l.jsxs)("p",{children:[c," / ",o.length]})}),(0,l.jsx)("div",{className:"progress-bar-wrapper",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"text",children:(0,l.jsxs)("button",{className:"load-more",onClick:()=>p(c+parseInt(d)),children:["Zobacz innych specjalistów ",(0,l.jsx)(t,{})]})})]})]})]})},save:function({attributes:e}){const{employees:s,limit:a}=e;return(0,l.jsxs)("section",{...i.useBlockProps.save(),id:"detailed-employees-section",children:[s.map((({image:e,heading:s,tags:i,paragraph:n,link:t,image_alt:o},d)=>(0,l.jsxs)("div",{className:"employee-wrapper "+(d%2?"odd":"even"),style:{display:d+1>a?"none":""},children:[(0,l.jsx)("img",{src:e,alt:o}),(0,l.jsxs)("div",{className:"description-wrapper",children:[(0,l.jsx)("h2",{children:s}),(0,l.jsx)("div",{className:"tags-wrapper",children:i.map(((e,s)=>(0,l.jsx)("p",{className:"tag",children:e},s)))}),n&&(0,l.jsx)("div",{dangerouslySetInnerHTML:{__html:n},className:"paragraph"}),(0,l.jsxs)("a",{href:t,className:"button",children:["Dowiedz się więcej ",(0,l.jsx)(r,{})]})]})]},d))),parseInt(a)<s.length&&(0,l.jsxs)("div",{className:"tooltip-wrapper",style:{"--currentPercentile":`${parseInt(a/s.length*100)}%`},children:[(0,l.jsx)("div",{className:"tooltip",children:(0,l.jsxs)("p",{children:[a," / ",s.length]})}),(0,l.jsx)("div",{className:"progress-bar-wrapper",children:(0,l.jsx)("div",{})}),(0,l.jsx)("div",{className:"text",children:(0,l.jsxs)("button",{className:"load-more",children:["Zobacz innych specjalistów ",(0,l.jsx)(o,{})]})})]})]})}})}},i={};function a(e){var l=i[e];if(void 0!==l)return l.exports;var n=i[e]={exports:{}};return s[e](n,n.exports,a),n.exports}a.m=s,e=[],a.O=(s,i,l,n)=>{if(!i){var t=1/0;for(c=0;c<e.length;c++){for(var[i,l,n]=e[c],r=!0,o=0;o<i.length;o++)(!1&n||t>=n)&&Object.keys(a.O).every((e=>a.O[e](i[o])))?i.splice(o--,1):(r=!1,n<t&&(t=n));if(r){e.splice(c--,1);var d=l();void 0!==d&&(s=d)}}return s}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[i,l,n]},a.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={520:0,24:0};a.O.j=s=>0===e[s];var s=(s,i)=>{var l,n,[t,r,o]=i,d=0;if(t.some((s=>0!==e[s]))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(o)var c=o(a)}for(s&&s(i);d<t.length;d++)n=t[d],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},i=globalThis.webpackChunkdetailed_employees_section=globalThis.webpackChunkdetailed_employees_section||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))})();var l=a.O(void 0,[24],(()=>a(998)));l=a.O(l)})();