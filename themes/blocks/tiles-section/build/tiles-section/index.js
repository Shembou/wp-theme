(()=>{"use strict";var e,i={658:()=>{const e=window.wp.blocks,i=window.wp.i18n,n=window.wp.blockEditor,s=window.wp.components,a=window.ReactJSXRuntime,r=JSON.parse('{"UU":"create-block/tiles-section"}');(0,e.registerBlockType)(r.UU,{edit:function({attributes:e,setAttributes:r}){const{heading:t="",paragraph:l="",tiles:o=[]}=e;let c=0;const d=(e,i,n)=>{const s=[...o];s[e]={...s[e],[i]:n},r({tiles:s})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.InspectorControls,{children:(0,a.jsxs)(s.PanelBody,{title:(0,i.__)("Component Settings","tiles-section"),children:[(0,a.jsx)(s.TextControl,{label:(0,i.__)("Heading","tiles-section"),value:t||"",onChange:e=>r({heading:e})}),(0,a.jsx)(s.TextareaControl,{label:(0,i.__)("Paragraph","tiles-section"),value:l||"",onChange:e=>r({paragraph:e})}),(0,a.jsxs)("div",{children:[o.map(((e,r)=>(0,a.jsxs)("div",{style:{marginBottom:"20px"},children:[(0,a.jsx)(s.TextControl,{label:(0,i.__)("Tile Heading","tiles-section"),value:e.heading||"",onChange:e=>d(r,"heading",e)}),(0,a.jsx)(s.TextareaControl,{label:(0,i.__)("Tile Paragraph","tiles-section"),value:e.paragraph||"",onChange:e=>d(r,"paragraph",e)}),(0,a.jsx)(n.MediaUpload,{onSelect:e=>d(r,"image",e.url),allowedTypes:["image"],render:({open:n})=>(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Button,{onClick:n,variant:"secondary",children:e.image?(0,i.__)("Replace Image","tiles-section"):(0,i.__)("Upload Image","tiles-section")}),e.image&&(0,a.jsxs)("div",{style:{marginTop:"10px",alignItems:"center",display:"grid"},children:[(0,a.jsx)("img",{src:e.image,alt:(0,i.__)("Tile Image","tiles-section"),style:{maxWidth:"100%",border:"1px solid #ccc",padding:"10px"}}),(0,a.jsx)(s.Button,{onClick:()=>d(r,"image",""),variant:"link",isDestructive:!0,children:(0,i.__)("Remove Image","tiles-section")})]})]})})]},r))),(0,a.jsx)(s.Button,{onClick:()=>{const e=[...o,{heading:"",paragraph:"",image:""}];r({tiles:e})},variant:"primary",style:{marginTop:"20px"},children:(0,i.__)("Add Tile","tiles-section")})]})]})}),(0,a.jsx)("div",{...(0,n.useBlockProps)(),id:"tiles-section",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("header",{children:[(0,a.jsx)("h2",{children:t}),(0,a.jsx)("p",{children:l})]}),o.map(((e,i)=>""!==e.image?(0,a.jsx)("img",{src:e.image},i):(c++,(0,a.jsxs)("div",{className:"tile "+(i%2!=0?"even":"odd"),children:[(0,a.jsx)("h3",{children:String(c).padStart(2,"0")}),(0,a.jsx)("h3",{children:e.heading}),(0,a.jsx)("p",{children:e.paragraph})]},i))))]})})]})},save:function({attributes:e}){const{heading:i="",paragraph:s="",tiles:r=[]}=e;let t=0;return(0,a.jsx)("div",{...n.useBlockProps.save(),id:"tiles-section",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("header",{children:[(0,a.jsx)("h2",{children:i}),(0,a.jsx)("p",{children:s})]}),r.map(((e,i)=>""!==e.image?(0,a.jsx)("img",{src:e.image},i):(t++,(0,a.jsxs)("div",{className:"tile "+(i%2!=0?"even":"odd"),children:[(0,a.jsx)("h3",{children:String(t).padStart(2,"0")}),(0,a.jsx)("h3",{children:e.heading}),(0,a.jsx)("p",{children:e.paragraph})]},i))))]})})}})}},n={};function s(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}};return i[e](r,r.exports,s),r.exports}s.m=i,e=[],s.O=(i,n,a,r)=>{if(!n){var t=1/0;for(d=0;d<e.length;d++){for(var[n,a,r]=e[d],l=!0,o=0;o<n.length;o++)(!1&r||t>=r)&&Object.keys(s.O).every((e=>s.O[e](n[o])))?n.splice(o--,1):(l=!1,r<t&&(t=r));if(l){e.splice(d--,1);var c=a();void 0!==c&&(i=c)}}return i}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,a,r]},s.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={281:0,485:0};s.O.j=i=>0===e[i];var i=(i,n)=>{var a,r,[t,l,o]=n,c=0;if(t.some((i=>0!==e[i]))){for(a in l)s.o(l,a)&&(s.m[a]=l[a]);if(o)var d=o(s)}for(i&&i(n);c<t.length;c++)r=t[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},n=globalThis.webpackChunktiles_section=globalThis.webpackChunktiles_section||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))})();var a=s.O(void 0,[485],(()=>s(658)));a=s.O(a)})();