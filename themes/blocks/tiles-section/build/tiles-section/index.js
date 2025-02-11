(()=>{"use strict";var e,i={658:()=>{const e=window.wp.blocks,i=window.wp.i18n,a=window.wp.blockEditor,n=window.wp.components,s=window.ReactJSXRuntime,t=JSON.parse('{"UU":"create-block/tiles-section"}');(0,e.registerBlockType)(t.UU,{edit:function({attributes:e,setAttributes:t}){const{heading:r="",paragraph:l="",tiles:o=[]}=e;let c=0;const d=(e,i,a)=>{const n=[...o];n[e]={...n[e],[i]:a},t({tiles:n})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.InspectorControls,{children:(0,s.jsxs)(n.PanelBody,{title:(0,i.__)("Component Settings","tiles-section"),children:[(0,s.jsx)(n.TextControl,{label:(0,i.__)("Heading","tiles-section"),value:r||"",onChange:e=>t({heading:e})}),(0,s.jsx)(n.TextareaControl,{label:(0,i.__)("Paragraph","tiles-section"),value:l||"",onChange:e=>t({paragraph:e})}),(0,s.jsxs)("div",{children:[o.map(((e,t)=>(0,s.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,s.jsx)(n.TextControl,{label:(0,i.__)("Tile Heading","tiles-section"),value:e.heading||"",onChange:e=>d(t,"heading",e)}),(0,s.jsx)(n.TextareaControl,{label:(0,i.__)("Tile Paragraph","tiles-section"),value:e.paragraph||"",onChange:e=>d(t,"paragraph",e)}),(0,s.jsx)(a.MediaUpload,{onSelect:e=>{d(t,"image",e.url),d(t,"image_alt",e.alt)},allowedTypes:["image"],render:({open:a})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(n.Button,{onClick:a,variant:"secondary",children:e.image?(0,i.__)("Replace Image","tiles-section"):(0,i.__)("Upload Image","tiles-section")}),e.image&&(0,s.jsxs)("div",{style:{marginTop:"10px",alignItems:"center",display:"grid"},children:[(0,s.jsx)("img",{src:e.image,alt:(0,i.__)("Tile Image","tiles-section"),style:{maxWidth:"100%",border:"1px solid #ccc",padding:"10px"}}),(0,s.jsx)(n.Button,{onClick:()=>d(t,"image",""),variant:"link",isDestructive:!0,children:(0,i.__)("Remove Image","tiles-section")})]})]})})]},t))),(0,s.jsx)(n.Button,{onClick:()=>{const e=[...o,{heading:"",paragraph:"",image:""}];t({tiles:e})},variant:"primary",style:{marginTop:"20px"},children:(0,i.__)("Add Tile","tiles-section")})]})]})}),(0,s.jsx)("div",{...(0,a.useBlockProps)(),id:"tiles-section",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("header",{children:[(0,s.jsx)("h2",{children:r}),(0,s.jsx)("p",{children:l})]}),o.map(((e,i)=>""!==e.image?(0,s.jsx)("img",{src:e.image,alt:e.image_alt},i):(c++,(0,s.jsxs)("div",{className:"tile "+(i%2!=0?"even":"odd"),children:[(0,s.jsx)("h3",{children:String(c).padStart(2,"0")}),(0,s.jsx)("h3",{children:e.heading}),(0,s.jsx)("p",{children:e.paragraph})]},i))))]})})]})},save:function({attributes:e}){const{heading:i="",paragraph:n="",tiles:t=[]}=e;let r=0;return(0,s.jsx)("div",{...a.useBlockProps.save(),id:"tiles-section",children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("header",{children:[(0,s.jsx)("h2",{children:i}),(0,s.jsx)("p",{children:n})]}),t.map(((e,i)=>""!==e.image?(0,s.jsx)("img",{src:e.image,alt:e.image_alt},i):(r++,(0,s.jsxs)("div",{className:"tile "+(i%2!=0?"even":"odd"),children:[(0,s.jsx)("h3",{children:String(r).padStart(2,"0")}),(0,s.jsx)("h3",{children:e.heading}),(0,s.jsx)("p",{children:e.paragraph})]},i))))]})})}})}},a={};function n(e){var s=a[e];if(void 0!==s)return s.exports;var t=a[e]={exports:{}};return i[e](t,t.exports,n),t.exports}n.m=i,e=[],n.O=(i,a,s,t)=>{if(!a){var r=1/0;for(d=0;d<e.length;d++){for(var[a,s,t]=e[d],l=!0,o=0;o<a.length;o++)(!1&t||r>=t)&&Object.keys(n.O).every((e=>n.O[e](a[o])))?a.splice(o--,1):(l=!1,t<r&&(r=t));if(l){e.splice(d--,1);var c=s();void 0!==c&&(i=c)}}return i}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[a,s,t]},n.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={281:0,485:0};n.O.j=i=>0===e[i];var i=(i,a)=>{var s,t,[r,l,o]=a,c=0;if(r.some((i=>0!==e[i]))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(o)var d=o(n)}for(i&&i(a);c<r.length;c++)t=r[c],n.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return n.O(d)},a=globalThis.webpackChunktiles_section=globalThis.webpackChunktiles_section||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))})();var s=n.O(void 0,[485],(()=>n(658)));s=n.O(s)})();