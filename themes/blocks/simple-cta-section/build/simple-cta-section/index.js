(()=>{"use strict";var e,t={958:()=>{const e=window.wp.blocks,t=window.wp.i18n,s=window.wp.blockEditor,n=window.wp.components,i=window.ReactJSXRuntime;function o({url:e,isSecondary:t,type:s,className:n,children:o}){return(0,i.jsx)("a",{className:`custom-button ${null!=n?n:""}${t?"secondary":""}`,href:e,children:o})}const l=window.React,r=JSON.parse('{"UU":"create-block/simple-cta-section"}');(0,e.registerBlockType)(r.UU,{edit:function({attributes:e,setAttributes:r}){const{heading:a="",buttons:c=[]}=e,p=(e,t,s)=>{const n=[...c];n[e]={...n[e],[t]:s},r({buttons:n})};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.InspectorControls,{children:(0,i.jsxs)(n.PanelBody,{title:(0,t.__)("Component Settings","simple-cta-section"),children:[(0,i.jsx)(n.TextControl,{label:(0,t.__)("Heading","tiles-section"),value:a||"",onChange:e=>r({heading:e})}),(0,i.jsxs)("div",{children:[c.map(((e,o)=>(0,i.jsxs)("div",{style:{marginBottom:"10px"},children:[(0,i.jsx)(n.TextControl,{label:(0,t.__)("Button Url","simple-cta-section"),value:e.url||"",onChange:e=>p(o,"url",e)}),(0,i.jsx)(n.TextControl,{label:(0,t.__)("Button Text","simple-cta-section"),value:e.text||"",onChange:e=>p(o,"text",e)}),(0,i.jsx)(n.SelectControl,{label:(0,t.__)("Button Type","simple-cta-section"),value:e.buttonType||"",options:[{label:"Primary",value:"primary"},{label:"Secondary",value:"secondary"}],onChange:e=>p(o,"buttonType",e)}),(0,i.jsx)(s.MediaUpload,{onSelect:e=>p(o,"svg",e.url),allowedTypes:["image"],render:({open:s})=>(0,i.jsxs)("div",{children:[(0,i.jsx)(n.Button,{onClick:s,variant:"secondary",children:e.svg?(0,t.__)("Replace Svg","simple-cta-section"):(0,t.__)("Upload Svg","simple-cta-section")}),e.svg&&(0,i.jsxs)("div",{style:{marginTop:"10px",alignItems:"center",display:"grid"},children:[(0,i.jsx)("img",{src:e.svg,alt:(0,t.__)("Button Svg","simple-cta-section"),style:{maxWidth:"100%",border:"1px",padding:"10px"}}),(0,i.jsx)(n.Button,{onClick:()=>p(o,"svg",""),variant:"link",isDestructive:!0,children:(0,t.__)("Remove Svg","simple-cta-section")})]})]})}),(0,i.jsx)(n.Button,{isDestructive:!0,isSmall:!0,onClick:()=>(e=>{const t=c.filter(((t,s)=>s!==e));r({buttons:t})})(o),children:(0,t.__)("Remove Button","simple-cta-section")})]},o))),(0,i.jsx)(n.Button,{isPrimary:!0,onClick:()=>{const e=[...c,{url:"",text:"",buttonType:"",svg:""}];r({buttons:e})},style:{marginTop:"10px"},children:(0,t.__)("Add Button","simple-cta-section")})]})]})}),(0,i.jsxs)("div",{...(0,s.useBlockProps)(),id:"simple-cta-section",children:[(0,i.jsx)("h2",{children:a}),(0,i.jsx)("div",{className:"buttons-wrapper",children:c.map(((e,t)=>(0,l.createElement)(o,{...e,key:t,className:e.buttonType},(0,i.jsxs)(i.Fragment,{children:[e.text,(0,i.jsx)("img",{src:e.svg})]}))))})]})]})},save:function({attributes:e}){const{heading:t="",buttons:n=[]}=e;return(0,i.jsxs)("div",{...s.useBlockProps.save(),id:"simple-cta-section",children:[(0,i.jsx)("h2",{children:t}),(0,i.jsx)("div",{className:"buttons-wrapper",children:n.map(((e,t)=>(0,l.createElement)(o,{...e,key:t,className:e.buttonType},(0,i.jsxs)(i.Fragment,{children:[e.text,(0,i.jsx)("img",{src:e.svg})]}))))})]})}})}},s={};function n(e){var i=s[e];if(void 0!==i)return i.exports;var o=s[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,s,i,o)=>{if(!s){var l=1/0;for(p=0;p<e.length;p++){for(var[s,i,o]=e[p],r=!0,a=0;a<s.length;a++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](s[a])))?s.splice(a--,1):(r=!1,o<l&&(l=o));if(r){e.splice(p--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[s,i,o]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={543:0,167:0};n.O.j=t=>0===e[t];var t=(t,s)=>{var i,o,[l,r,a]=s,c=0;if(l.some((t=>0!==e[t]))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(a)var p=a(n)}for(t&&t(s);c<l.length;c++)o=l[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(p)},s=globalThis.webpackChunksimple_cta_section=globalThis.webpackChunksimple_cta_section||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var i=n.O(void 0,[167],(()=>n(958)));i=n.O(i)})();