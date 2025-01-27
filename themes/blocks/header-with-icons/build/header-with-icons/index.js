(()=>{"use strict";var e,i={914:()=>{const e=window.wp.blocks,i=window.wp.i18n,r=window.wp.blockEditor,n=window.wp.components,a=window.ReactJSXRuntime,s=JSON.parse('{"UU":"create-block/header-with-icons"}');(0,e.registerBlockType)(s.UU,{edit:function({attributes:e,setAttributes:s}){const{tag:t="",heading:o="",paragraph:l="",image:c="",description:d=[]}=e,h=(e,i)=>{s({[e]:i})},p=(e,i,r)=>{const n=[...d];n[e][i]=r,s({description:n})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.InspectorControls,{children:[(0,a.jsxs)(n.PanelBody,{title:"Base Settings",initialOpen:!0,children:[(0,a.jsx)(n.PanelRow,{children:(0,a.jsx)(n.TextControl,{label:"Tag",value:t,onChange:e=>h("tag",e)})}),(0,a.jsx)(n.PanelRow,{children:(0,a.jsx)(n.TextControl,{label:"Heading",value:o,onChange:e=>h("heading",e)})}),(0,a.jsx)(n.PanelRow,{children:(0,a.jsx)(n.TextControl,{label:"Paragraph",value:l,onChange:e=>h("paragraph",e)})}),(0,a.jsx)(n.PanelRow,{children:(0,a.jsx)(r.MediaUpload,{onSelect:e=>h("image",e.url),allowedTypes:["image"],render:({open:e})=>(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Button,{onClick:e,variant:"secondary",children:c?(0,i.__)("Replace Image","header-with-icons"):(0,i.__)("Upload Image","header-with-icons")}),c&&(0,a.jsxs)("div",{style:{marginTop:"10px",alignItems:"center",display:"grid"},children:[(0,a.jsx)("img",{src:c,alt:(0,i.__)("Button Svg","header-with-icons"),style:{maxWidth:"100%",border:"1px",padding:"10px"}}),(0,a.jsx)(n.Button,{onClick:()=>h("image",""),variant:"link",isDestructive:!0,children:(0,i.__)("Remove Image","header-with-icons")})]})]})})})]}),(0,a.jsxs)(n.PanelBody,{title:"Description Settings",initialOpen:!1,children:[d.map(((e,t)=>(0,a.jsxs)("div",{style:{marginBottom:"20px",borderBottom:"1px solid #ddd",paddingBottom:"10px"},children:[(0,a.jsx)(n.PanelRow,{children:(0,a.jsx)(r.MediaUpload,{onSelect:e=>p(t,"icon",e.url),allowedTypes:["image"],render:({open:r})=>(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Button,{onClick:r,variant:"secondary",children:e.icon?(0,i.__)("Replace Icon","header-with-icons"):(0,i.__)("Upload Icon","header-with-icons")}),e.icon&&(0,a.jsxs)("div",{style:{marginTop:"10px",alignItems:"center",display:"grid"},children:[(0,a.jsx)("img",{src:e.icon,alt:(0,i.__)("Button Icon","header-with-icons"),style:{maxWidth:"100%",border:"1px",padding:"10px"}}),(0,a.jsx)(n.Button,{onClick:()=>p(t,"icon",""),variant:"link",isDestructive:!0,children:(0,i.__)("Remove Image","header-with-icons")})]})]})})}),(0,a.jsx)(n.PanelRow,{children:(0,a.jsx)(n.TextareaControl,{label:`Description ${t+1} Header`,value:e.header,onChange:e=>p(t,"header",e)})}),(0,a.jsx)(n.PanelRow,{children:(0,a.jsx)(n.TextareaControl,{label:`Description ${t+1} Paragraph`,value:e.paragraph,onChange:e=>p(t,"paragraph",e)})}),(0,a.jsx)(n.PanelRow,{children:(0,a.jsx)(n.IconButton,{icon:"trash",label:"Remove Description",onClick:()=>(e=>{const i=[...d];i.splice(e,1),s({description:i})})(t),isDestructive:!0})})]},t))),(0,a.jsx)(n.Button,{isPrimary:!0,onClick:()=>{const e=[...d,{icon:"",header:"",paragraph:""}];s({description:e})},children:"Add Description"})]})]}),(0,a.jsxs)("section",{...(0,r.useBlockProps)(),id:"header-with-icons",children:[(0,a.jsxs)("header",{children:[(0,a.jsx)("p",{className:"tag",children:t}),(0,a.jsx)("h2",{children:o}),(0,a.jsx)("p",{children:l})]}),(0,a.jsxs)("div",{className:"content-wrapper",children:[(0,a.jsx)("img",{src:c}),(0,a.jsx)("div",{className:"text-wrapper",children:d.map(((e,i)=>(0,a.jsxs)("div",{className:"item-wrapper",children:[(0,a.jsxs)("h2",{children:[(0,a.jsx)("img",{src:e.icon}),e.header]}),(0,a.jsx)("p",{children:e.paragraph})]},i)))})]})]})]})},save:function({attributes:e}){const{tag:i="",heading:n="",paragraph:s="",image:t="",description:o=[]}=e;return(0,a.jsxs)("section",{...r.useBlockProps.save(),id:"header-with-icons",children:[(0,a.jsxs)("header",{children:[(0,a.jsx)("p",{className:"tag",children:i}),(0,a.jsx)("h2",{children:n}),(0,a.jsx)("p",{children:s})]}),(0,a.jsxs)("div",{className:"content-wrapper",children:[(0,a.jsx)("img",{src:t}),(0,a.jsx)("div",{className:"text-wrapper",children:o.map(((e,i)=>(0,a.jsxs)("div",{className:"item-wrapper",children:[(0,a.jsxs)("h2",{children:[(0,a.jsx)("img",{src:e.icon}),e.header]}),(0,a.jsx)("p",{children:e.paragraph})]},i)))})]})]})}})}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var s=r[e]={exports:{}};return i[e](s,s.exports,n),s.exports}n.m=i,e=[],n.O=(i,r,a,s)=>{if(!r){var t=1/0;for(d=0;d<e.length;d++){for(var[r,a,s]=e[d],o=!0,l=0;l<r.length;l++)(!1&s||t>=s)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(o=!1,s<t&&(t=s));if(o){e.splice(d--,1);var c=a();void 0!==c&&(i=c)}}return i}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,a,s]},n.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={97:0,901:0};n.O.j=i=>0===e[i];var i=(i,r)=>{var a,s,[t,o,l]=r,c=0;if(t.some((i=>0!==e[i]))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(l)var d=l(n)}for(i&&i(r);c<t.length;c++)s=t[c],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},r=globalThis.webpackChunkheader_with_icons=globalThis.webpackChunkheader_with_icons||[];r.forEach(i.bind(null,0)),r.push=i.bind(null,r.push.bind(r))})();var a=n.O(void 0,[901],(()=>n(914)));a=n.O(a)})();