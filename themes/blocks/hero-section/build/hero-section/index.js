(()=>{"use strict";var e,a={316:()=>{const e=window.wp.blocks,a=window.wp.i18n,l=window.wp.blockEditor,c=window.wp.components,s=window.ReactJSXRuntime;function n({url:e,isSecondary:a,type:l,className:c,children:n}){return(0,s.jsx)("a",{className:`custom-button ${null!=c?c:""}${a?"secondary":""}`,href:e,children:n})}const r=JSON.parse('{"UU":"create-block/hero-section"}');(0,e.registerBlockType)(r.UU,{edit:function({attributes:e,setAttributes:r}){const{header:t="",text:o="",HeaderType:i="h2",button:h={text:"",url:"",isSecondary:!1,svg:"",svg_alt:""},links:d=[]}=e,p=(e,a,l)=>{const c=[...d];c[e][a]=l,r({links:c})},x=(e,a)=>{r({button:{...h,[e]:a}})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.InspectorControls,{children:(0,s.jsxs)(c.PanelBody,{title:(0,a.__)("Settings","hero-section"),children:[(0,s.jsx)(c.SelectControl,{label:(0,a.__)("Header Type","hero-section"),value:i,options:[{label:"H1",value:"h1"},{label:"H2",value:"h2"},{label:"H3",value:"h3"},{label:"H4",value:"h4"},{label:"H5",value:"h5"},{label:"H6",value:"h6"}],onChange:e=>r({HeaderType:e})}),(0,s.jsx)(c.TextareaControl,{label:(0,a.__)("Heading","hero-section"),value:t||"",onChange:e=>r({header:e}),height:2}),(0,s.jsx)(c.TextareaControl,{label:(0,a.__)("Text","hero-section"),value:o||"",onChange:e=>r({text:e})}),(0,s.jsx)(c.TextControl,{label:(0,a.__)("Button Text","hero-section"),value:h.text||"",onChange:e=>x("text",e)}),(0,s.jsx)(l.URLInput,{label:(0,a.__)("Button URL","hero-section"),value:h.url||"",onChange:e=>x("url",e)}),(0,s.jsx)(c.ToggleControl,{label:(0,a.__)("Is Secondary Button?","hero-section"),checked:h.isSecondary,onChange:e=>x("isSecondary",e)}),(0,s.jsx)(l.MediaUpload,{onSelect:e=>{r({button:{...h,svg:e.url,svg_alt:e.alt}})},allowedTypes:["image"],render:({open:e})=>(0,s.jsx)(c.Button,{onClick:e,variant:"secondary",isPrimary:!1,className:"custom-media-upload-button",style:{display:"grid"},children:h?.svg?(0,a.__)("Replace SVG","hero-section"):(0,a.__)("Upload SVG","hero-section")})}),h?.svg&&(0,s.jsx)(c.Button,{onClick:()=>{r({button:{...h,svg:""}})},variant:"link",isDestructive:!0,className:"custom-remove-svg-button",style:{display:"grid"},children:(0,a.__)("Remove SVG","hero-section")}),d.map(((e,n)=>(0,s.jsxs)("div",{className:"link-control",children:[(0,s.jsx)(l.URLInput,{value:e.url,label:(0,a.__)("Link URL","hero-section"),onChange:e=>p(n,"url",e)}),(0,s.jsx)(c.TextControl,{label:(0,a.__)("Link Text","hero-section"),value:e.text,onChange:e=>p(n,"text",e)}),(0,s.jsx)(c.ToggleControl,{label:(0,a.__)("Is Overlapping?","hero-section"),checked:e.isOverlapping,onChange:e=>p(n,"isOverlapping",e)}),(0,s.jsx)(c.SelectControl,{label:(0,a.__)("Color Type","hero-section"),value:e.color,options:[{label:"Szary",value:"gray"},{label:"Niebiesko-szary",value:"blue-green"}],onChange:e=>p(n,"color",e)}),(0,s.jsx)(c.Button,{isSecondary:!0,isSmall:!0,onClick:()=>(e=>{const a=d.filter(((a,l)=>l!==e));r({links:a})})(n),className:"remove-link-button",children:(0,a.__)("Remove Link","hero-section")})]},n))),(0,s.jsx)(c.Button,{isPrimary:!0,isSmall:!0,onClick:()=>{d.length<4&&r({links:[...d,{url:"",text:"",isOverlapping:!1}]})},disabled:d.length>=4,style:{marginTop:"10px"},children:(0,a.__)("Add Link","hero-section")})]})}),(0,s.jsx)("section",{...(0,l.useBlockProps)(),id:"hero-section",children:(0,s.jsxs)("div",{className:"section-wrapper",children:[(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsxs)("header",{className:"header-wrapper",children:[(0,s.jsx)(i,{className:"wp-blocks wp-header header",children:t}),(0,s.jsx)("p",{className:"paragraph",children:o}),(0,s.jsx)(n,{...h,children:(0,s.jsxs)(s.Fragment,{children:[h.text,(0,s.jsx)("img",{src:h.svg,alt:h.svg_alt})]})})]})}),(0,s.jsxs)("div",{className:"animation-wrapper",children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"347",height:"316",fill:"none",viewBox:"0 0 347 316",style:{zIndex:"2",position:"relative"},children:[(0,s.jsx)("path",{fill:"#E8EBEF",d:"M44.672 259.358c8.02 14.804 22.388 24.544 38.45 26.032 4.01.371 15.657.884 24.875-4.337a25 25 0 0 0 3.703-2.567c3.359 8.449 10.303 15.919 19.545 21.044 15.38 8.532 31.607 11.526 44.521 8.21 6.109-1.574 11.788-3.861 16.832-6.717 9.125-5.169 16.193-12.205 19.984-20.236 3.37-7.115 2.666-19.735-1.418-26.148l-.011-.019-11.829-20.886a2.7 2.7 0 0 0-.619-1.092L94.005 47.784c-.026-.047-.065-.085-.095-.138-4.493-7.902-13.724-13.007-23.871-13.083-10.968-.08-20.268 5.257-26.135 9.744-9.674 7.409-16.231 17.128-18.45 27.38-2.314 10.671.407 21.801 6.944 29.336-13.793 5.11-24.888 16.782-29.679 31.645-5.146 15.987-1.87 32.643 8.78 44.55 5.985 6.7 14.065 10.571 22.107 10.736-.347 4.316.32 8.901 2.005 13.413 1.78 4.771 4.56 9.003 8 12.268-7.2 14.109-6.828 31.149 1.061 45.723"}),(0,s.jsx)("path",{fill:"#DDF6FE",d:"M300.748 96.228c-1.038-4.627-3.238-9.186-6.407-13.17-3.003-3.767-6.582-6.693-10.473-8.618 3.994-6.982 4.829-15.902 2.161-24.482-4.742-15.252-17.339-26.638-33.692-30.438-15.205-3.539-30.921-.026-42.403 9.18-3.097-9.475-11.247-17.54-21.588-21.042-9.934-3.369-21.645-2.75-32.971 1.743-6.866 2.725-16.225 7.956-21.796 17.404-5.154 8.742-5.523 19.284-1.056 27.2.026.047.039.1.069.153l104.699 184.858c.12.41.332.786.619 1.092l11.829 20.886.011.02c3.4 6.8 13.861 13.894 21.697 14.662 8.84.869 18.506-1.564 27.631-6.733 5.044-2.856 9.925-6.551 14.417-10.981 9.485-9.37 15.265-24.82 15.854-42.405.353-10.568-2.489-20.361-7.997-27.584a25 25 0 0 0 4.106-1.856c9.217-5.221 14.768-15.473 16.512-19.103 6.976-14.537 6.019-31.873-2.554-46.364-8.442-14.26-22.862-23.353-38.661-24.426z"}),(0,s.jsx)("path",{fill:"#515A6A",d:"M216.16 239.416q-.196-.647-.656-1.158L110.82 53.426c-.026-.046-.069-.09-.095-.137-4.538-7.98-13.863-13.146-24.106-13.22-11.05-.086-20.402 5.28-26.305 9.797C50.591 57.311 44 67.093 41.764 77.407 39.46 88.02 42.1 99.1 48.508 106.682c-13.7 5.213-24.701 16.867-29.471 31.675-5.179 16.083-1.873 32.836 8.837 44.821 5.964 6.677 13.998 10.575 22.02 10.829-.301 4.273.368 8.787 2.034 13.232 1.772 4.741 4.517 8.957 7.914 12.239-7.145 14.146-6.741 31.195 1.165 45.785 8.058 14.887 22.514 24.672 38.66 26.174 4.032.376 15.75.892 25.04-4.37a25 25 0 0 0 3.467-2.354c3.432 8.363 10.338 15.75 19.507 20.838 15.444 8.566 31.746 11.57 44.726 8.234 6.132-1.579 11.825-3.873 16.894-6.744 9.179-5.199 16.281-12.281 20.107-20.357 3.401-7.185 2.694-19.917-1.427-26.395l-.015-.027-11.814-20.859zm7.749 44.681c-5.17 10.924-17.511 19.826-33.013 23.809-11.486 2.95-26.161.163-40.255-7.663-8.081-4.488-14.108-10.922-16.972-18.129-3.165-7.968-2.223-17.036 2.397-23.112q.026-.04.044-.077c2.208.306 4.449.348 6.656.098 3.638-.409 7.184-1.609 10.39-3.425 4.846-2.745 8.915-6.892 11.367-11.853a3.05 3.05 0 0 0-1.379-4.077 3.05 3.05 0 0 0-4.079 1.381c-3.182 6.434-9.849 11.123-16.983 11.93s-14.678-2.255-19.22-7.817-6.038-13.563-3.818-20.391a3.037 3.037 0 0 0-1.952-3.831 3.04 3.04 0 0 0-3.833 1.954c-2.846 8.747-.93 18.994 4.889 26.12 3.059 3.742 7.176 6.59 11.717 8.312-3.652 5.927-4.923 13.495-3.606 20.841-5.952 6.534-17.265 8.04-26.024 7.222-14.118-1.312-26.785-9.921-33.88-23.015-6.755-12.479-7.304-26.96-1.584-39.125 5.44 3.28 11.787 4.491 17.65 3.266a21.6 21.6 0 0 0 6.205-2.341c4.095-2.32 7.328-5.932 8.966-10.241a3.036 3.036 0 0 0-1.76-3.922 3.04 3.04 0 0 0-3.925 1.762c-1.647 4.323-5.854 7.765-10.721 8.784-4.66.97-10.012-.205-14.304-3.145-4.042-2.777-7.33-7.138-9.259-12.295-2.173-5.817-2.278-11.929-.283-16.76 2.165-5.251 7.005-9.035 12.036-9.425a3.04 3.04 0 0 0 2.803-3.265 3.04 3.04 0 0 0-3.264-2.801c-7.27.554-14.18 5.841-17.204 13.168a24 24 0 0 0-.656 1.867c-6.682.117-13.547-3.052-18.652-8.765-9.398-10.513-12.16-24.696-7.584-38.908 4.385-13.616 14.71-24.175 27.438-28.403-.035 6.695 3.519 13.338 9.4 16.735a3.04 3.04 0 0 0 3.022.008 3.044 3.044 0 0 0 .02-5.277c-4.934-2.846-7.512-9.348-5.882-14.807 1.633-5.453 7.365-9.474 13.05-9.156a3.044 3.044 0 0 0 3.213-2.863 3.047 3.047 0 0 0-2.862-3.21c-7.476-.425-14.76 3.987-18.081 10.605-5.94-6.144-8.466-15.838-6.44-25.172 1.93-8.907 7.722-17.428 16.304-24 5.144-3.94 13.234-8.617 22.561-8.546 8.27.061 16.01 4.42 19.254 10.84q.085.148.181.289l20.337 35.908c-5.144 4.504-11.178 7.348-17.174 8.015-6.953.774-14.038-1.54-18.504-6.033-4.7-4.734-6.442-12.064-4.233-17.835A3.036 3.036 0 0 0 84.67 73.4a3.04 3.04 0 0 0-3.928 1.755c-3.082 8.055-.83 17.818 5.601 24.291 5.828 5.869 14.607 8.779 23.49 7.789 4.629-.518 9.255-2.069 13.581-4.519a41.7 41.7 0 0 0 5.983-4.145l24.657 43.535c.758 7.74-4.295 16.798-11.272 20.003-6.92 3.181-15.878 1.475-21.225-3.927 1.163-4.196 1.398-8.648.526-12.952-2.114-10.457-10.495-19.19-20.855-21.744a3.046 3.046 0 0 0-3.68 2.223 3.04 3.04 0 0 0 2.222 3.678c7.992 1.966 14.719 8.976 16.347 17.04 1.628 8.065-1.841 17.139-8.435 22.064-6.604 4.922-16.285 5.669-23.558 1.81a3.047 3.047 0 0 0-4.113 1.26 3.04 3.04 0 0 0 1.259 4.111c8.43 4.473 18.979 4.199 27.229-.473a26.5 26.5 0 0 0 2.819-1.84c3.269-2.442 5.915-5.601 7.828-9.162 7.213 5.84 17.658 7.347 26.177 3.426a22 22 0 0 0 1.551-.792c5.728-3.245 10.197-9.295 12.196-15.868l47.768 84.338c-9.205-1.174-19.12 2.399-24.936 9.665-7.506 9.379-7.525 24.086-.051 33.489a3.037 3.037 0 0 0 4.273.483 3.043 3.043 0 0 0 .492-4.276c-5.779-7.27-5.761-18.648.041-25.906 5.59-6.99 16.085-9.57 24.328-6.148l11.68 20.623a1.4 1.4 0 0 0 .107.174c2.797 4.247 3.887 14.815 1.132 20.652z"}),(0,s.jsx)("path",{fill:"#515A6A",d:"M161.076 216.948c7.163-4.058 11.969-12.185 11.886-20.438-.089-8.91-5.881-17.554-14.086-21.033a3.043 3.043 0 0 0-2.374 5.604c6.044 2.564 10.312 8.934 10.375 15.494s-4.069 13.021-10.056 15.717c-5.99 2.688-13.567 1.487-18.428-2.921a3.04 3.04 0 0 0-4.299.21 3.037 3.037 0 0 0 .207 4.297c6.597 5.981 16.879 7.614 25.012 3.964q.903-.408 1.763-.894M285.633 91.604c-1.067-4.601-3.272-9.123-6.427-13.081-2.956-3.715-6.485-6.6-10.302-8.549 3.907-7.01 4.696-15.905 2.037-24.454-4.772-15.35-17.439-26.8-33.896-30.628-15.153-3.524-30.805-.083-42.321 8.986-3.218-9.397-11.353-17.357-21.639-20.84-9.996-3.386-21.774-2.763-33.16 1.747-6.909 2.74-16.321 8.001-21.929 17.522-5.2 8.829-5.57 19.476-1.059 27.472.026.046.039.1.069.152l104.685 184.832c.13.43.354.825.655 1.158l11.811 20.853.015.026c3.437 6.867 13.993 14.02 21.903 14.798 8.895.872 18.621-1.577 27.799-6.776 5.063-2.867 9.971-6.577 14.472-11.021 9.537-9.417 15.344-24.943 15.939-42.592.352-10.481-2.436-20.209-7.84-27.447a25.3 25.3 0 0 0 3.802-1.762c9.29-5.262 14.874-15.578 16.624-19.228 7.016-14.62 6.057-32.05-2.567-46.617-8.453-14.28-22.857-23.39-38.667-24.544zm35.752 68.53c-3.802 7.933-10.918 16.865-19.576 18.606-5.623-4.907-12.767-7.71-19.728-7.626.858-4.779.536-9.785-1.104-14.323-3.115-8.648-10.922-15.568-19.887-17.625a3.041 3.041 0 1 0-1.365 5.926c6.997 1.608 13.089 7.005 15.524 13.761s1.186 14.807-3.179 20.504c-4.362 5.703-11.811 9.01-18.966 8.43a3.043 3.043 0 0 0-3.281 2.788 3.04 3.04 0 0 0 2.787 3.28c5.515.448 11.165-.909 16.01-3.654 3.207-1.816 6.06-4.24 8.282-7.15a26.7 26.7 0 0 0 3.339-5.758 1 1 0 0 1 .088.002c7.587-.838 15.849 3.017 21.054 9.829 4.709 6.163 7.131 14.647 6.82 23.879-.546 16.11-5.692 30.131-14.129 38.465-11.387 11.247-25.369 17.253-37.396 16.07-6.419-.632-14.926-7.008-17.131-11.591l-.052-.092c-.018-.033-.027-.063-.042-.089l-11.683-20.629c1.303-8.83 8.914-16.504 17.783-17.703 9.209-1.244 18.976 4.592 22.239 13.286a3.042 3.042 0 0 0 4.353 1.576 3.05 3.05 0 0 0 1.351-3.711c-4.218-11.239-16.847-18.783-28.748-17.179-9.222 1.252-17.386 7.918-21.112 16.416l-47.768-84.338c6.665 1.665 14.153.944 19.881-2.3a19 19 0 0 0 1.477-.924c7.737-5.286 11.823-15.022 10.523-24.211 4.032.194 8.112-.448 11.884-2.003a26 26 0 0 0 3.028-1.471c8.25-4.673 13.913-13.59 14.408-23.11a3.041 3.041 0 0 0-6.074-.314c-.43 8.223-6.05 16.142-13.667 19.274-7.622 3.126-17.185 1.442-23.261-4.112-6.082-5.55-8.632-14.918-6.208-22.783a3.035 3.035 0 0 0-2.011-3.797 3.04 3.04 0 0 0-3.799 2.013c-3.141 10.191.042 21.877 7.924 29.068 3.246 2.967 7.188 5.045 11.378 6.209 1.883 7.364-1.257 15.93-7.547 20.223-6.336 4.336-16.703 4.011-22.952-.619l-24.657-43.535a41.5 41.5 0 0 0 6.631-3c4.326-2.45 8.039-5.613 10.86-9.323 5.417-7.11 7.436-16.136 5.4-24.152-2.244-8.845-9.46-15.796-17.953-17.295a3.047 3.047 0 0 0-3.525 2.466 3.043 3.043 0 0 0 2.465 3.523c6.086 1.072 11.476 6.337 13.12 12.801 1.557 6.141-.108 13.411-4.342 18.973-3.656 4.8-9.197 8.511-15.706 10.607l-20.337-35.908c-.056-.099-.093-.209-.155-.303-3.841-6.09-3.596-14.963.604-22.088 4.729-8.032 12.905-12.558 18.931-14.954 10.051-3.98 20.337-4.566 28.968-1.641 9.048 3.063 16.064 10.214 18.278 18.468-7.384-.555-14.918 3.417-18.395 10.053a3.04 3.04 0 0 0 1.282 4.106 3.044 3.044 0 0 0 4.108-1.284c2.647-5.045 9.043-7.894 14.56-6.49s9.764 6.967 9.674 12.658a3.036 3.036 0 0 0 2.991 3.086 3 3 0 0 0 1.546-.388 3.05 3.05 0 0 0 1.546-2.597c.111-6.79-3.759-13.254-9.518-16.667 10.171-8.742 24.54-12.16 38.469-8.925 14.543 3.383 25.286 13.046 29.469 26.512 2.274 7.317 1.462 14.834-2.075 20.504a24 24 0 0 0-1.938-.397c-7.839-1.174-15.927 2.034-20.14 7.983a3.044 3.044 0 0 0 .723 4.24 3.046 3.046 0 0 0 4.242-.725c2.911-4.117 8.645-6.322 14.272-5.476 5.17.774 10.357 4.007 14.229 8.862 3.43 4.306 5.49 9.371 5.783 14.264.318 5.199-1.424 10.383-4.659 13.884-3.376 3.651-8.499 5.492-13.047 4.678a3.04 3.04 0 1 0-1.07 5.986c4.537.811 9.291-.1 13.393-2.423a21.5 21.5 0 0 0 5.199-4.118c4.066-4.397 6.291-10.464 6.276-16.817 13.374 1.351 25.508 9.262 32.74 21.479 7.588 12.815 8.457 28.106 2.316 40.892z"}),(0,s.jsx)("path",{fill:"#515A6A",d:"M238.961 150.195a3.04 3.04 0 0 0-2.39 3.579c1.28 6.436-1.586 13.552-6.973 17.307s-13.052 3.977-18.65.542c-5.594-3.428-8.865-10.37-7.953-16.867a3.044 3.044 0 0 0-2.589-3.435 3.05 3.05 0 0 0-3.438 2.59c-1.236 8.826 3.206 18.235 10.795 22.897 7.025 4.313 16.477 4.374 23.641.316a22 22 0 0 0 1.673-1.052c7.307-5.094 11.204-14.75 9.463-23.489a3.046 3.046 0 0 0-3.579-2.388"})]}),d.map(((e,a)=>(0,s.jsx)("a",{href:e.url,className:`animation-inside-link link-${a} ${e.isOverlapping?"overlap":"default"} ${"gray"==e.color&&"gray"}`,children:e.text},a)))]})]})})]})},save:function({attributes:e}){const{header:a="",text:c="",HeaderType:r="h2",button:t={text:"",url:"",isSecondary:!1,svg:"",svg_alt:""},links:o=[]}=e,i=l.useBlockProps.save();return(0,s.jsx)("section",{...i,id:"hero-section",children:(0,s.jsxs)("div",{className:"section-wrapper",children:[(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsxs)("header",{className:"header-wrapper",children:[(0,s.jsx)(r,{className:"wp-blocks wp-header header",children:a}),(0,s.jsx)("p",{className:"paragraph",children:c}),(0,s.jsx)(n,{...t,children:(0,s.jsxs)(s.Fragment,{children:[t.text,(0,s.jsx)("img",{src:t.svg,alt:t.svg_alt})]})})]})}),(0,s.jsxs)("div",{className:"animation-wrapper",children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"347",height:"316",fill:"none",viewBox:"0 0 347 316",style:{zIndex:"2",position:"relative"},children:[(0,s.jsx)("path",{fill:"#E8EBEF",d:"M44.672 259.358c8.02 14.804 22.388 24.544 38.45 26.032 4.01.371 15.657.884 24.875-4.337a25 25 0 0 0 3.703-2.567c3.359 8.449 10.303 15.919 19.545 21.044 15.38 8.532 31.607 11.526 44.521 8.21 6.109-1.574 11.788-3.861 16.832-6.717 9.125-5.169 16.193-12.205 19.984-20.236 3.37-7.115 2.666-19.735-1.418-26.148l-.011-.019-11.829-20.886a2.7 2.7 0 0 0-.619-1.092L94.005 47.784c-.026-.047-.065-.085-.095-.138-4.493-7.902-13.724-13.007-23.871-13.083-10.968-.08-20.268 5.257-26.135 9.744-9.674 7.409-16.231 17.128-18.45 27.38-2.314 10.671.407 21.801 6.944 29.336-13.793 5.11-24.888 16.782-29.679 31.645-5.146 15.987-1.87 32.643 8.78 44.55 5.985 6.7 14.065 10.571 22.107 10.736-.347 4.316.32 8.901 2.005 13.413 1.78 4.771 4.56 9.003 8 12.268-7.2 14.109-6.828 31.149 1.061 45.723"}),(0,s.jsx)("path",{fill:"#DDF6FE",d:"M300.748 96.228c-1.038-4.627-3.238-9.186-6.407-13.17-3.003-3.767-6.582-6.693-10.473-8.618 3.994-6.982 4.829-15.902 2.161-24.482-4.742-15.252-17.339-26.638-33.692-30.438-15.205-3.539-30.921-.026-42.403 9.18-3.097-9.475-11.247-17.54-21.588-21.042-9.934-3.369-21.645-2.75-32.971 1.743-6.866 2.725-16.225 7.956-21.796 17.404-5.154 8.742-5.523 19.284-1.056 27.2.026.047.039.1.069.153l104.699 184.858c.12.41.332.786.619 1.092l11.829 20.886.011.02c3.4 6.8 13.861 13.894 21.697 14.662 8.84.869 18.506-1.564 27.631-6.733 5.044-2.856 9.925-6.551 14.417-10.981 9.485-9.37 15.265-24.82 15.854-42.405.353-10.568-2.489-20.361-7.997-27.584a25 25 0 0 0 4.106-1.856c9.217-5.221 14.768-15.473 16.512-19.103 6.976-14.537 6.019-31.873-2.554-46.364-8.442-14.26-22.862-23.353-38.661-24.426z"}),(0,s.jsx)("path",{fill:"#515A6A",d:"M216.16 239.416q-.196-.647-.656-1.158L110.82 53.426c-.026-.046-.069-.09-.095-.137-4.538-7.98-13.863-13.146-24.106-13.22-11.05-.086-20.402 5.28-26.305 9.797C50.591 57.311 44 67.093 41.764 77.407 39.46 88.02 42.1 99.1 48.508 106.682c-13.7 5.213-24.701 16.867-29.471 31.675-5.179 16.083-1.873 32.836 8.837 44.821 5.964 6.677 13.998 10.575 22.02 10.829-.301 4.273.368 8.787 2.034 13.232 1.772 4.741 4.517 8.957 7.914 12.239-7.145 14.146-6.741 31.195 1.165 45.785 8.058 14.887 22.514 24.672 38.66 26.174 4.032.376 15.75.892 25.04-4.37a25 25 0 0 0 3.467-2.354c3.432 8.363 10.338 15.75 19.507 20.838 15.444 8.566 31.746 11.57 44.726 8.234 6.132-1.579 11.825-3.873 16.894-6.744 9.179-5.199 16.281-12.281 20.107-20.357 3.401-7.185 2.694-19.917-1.427-26.395l-.015-.027-11.814-20.859zm7.749 44.681c-5.17 10.924-17.511 19.826-33.013 23.809-11.486 2.95-26.161.163-40.255-7.663-8.081-4.488-14.108-10.922-16.972-18.129-3.165-7.968-2.223-17.036 2.397-23.112q.026-.04.044-.077c2.208.306 4.449.348 6.656.098 3.638-.409 7.184-1.609 10.39-3.425 4.846-2.745 8.915-6.892 11.367-11.853a3.05 3.05 0 0 0-1.379-4.077 3.05 3.05 0 0 0-4.079 1.381c-3.182 6.434-9.849 11.123-16.983 11.93s-14.678-2.255-19.22-7.817-6.038-13.563-3.818-20.391a3.037 3.037 0 0 0-1.952-3.831 3.04 3.04 0 0 0-3.833 1.954c-2.846 8.747-.93 18.994 4.889 26.12 3.059 3.742 7.176 6.59 11.717 8.312-3.652 5.927-4.923 13.495-3.606 20.841-5.952 6.534-17.265 8.04-26.024 7.222-14.118-1.312-26.785-9.921-33.88-23.015-6.755-12.479-7.304-26.96-1.584-39.125 5.44 3.28 11.787 4.491 17.65 3.266a21.6 21.6 0 0 0 6.205-2.341c4.095-2.32 7.328-5.932 8.966-10.241a3.036 3.036 0 0 0-1.76-3.922 3.04 3.04 0 0 0-3.925 1.762c-1.647 4.323-5.854 7.765-10.721 8.784-4.66.97-10.012-.205-14.304-3.145-4.042-2.777-7.33-7.138-9.259-12.295-2.173-5.817-2.278-11.929-.283-16.76 2.165-5.251 7.005-9.035 12.036-9.425a3.04 3.04 0 0 0 2.803-3.265 3.04 3.04 0 0 0-3.264-2.801c-7.27.554-14.18 5.841-17.204 13.168a24 24 0 0 0-.656 1.867c-6.682.117-13.547-3.052-18.652-8.765-9.398-10.513-12.16-24.696-7.584-38.908 4.385-13.616 14.71-24.175 27.438-28.403-.035 6.695 3.519 13.338 9.4 16.735a3.04 3.04 0 0 0 3.022.008 3.044 3.044 0 0 0 .02-5.277c-4.934-2.846-7.512-9.348-5.882-14.807 1.633-5.453 7.365-9.474 13.05-9.156a3.044 3.044 0 0 0 3.213-2.863 3.047 3.047 0 0 0-2.862-3.21c-7.476-.425-14.76 3.987-18.081 10.605-5.94-6.144-8.466-15.838-6.44-25.172 1.93-8.907 7.722-17.428 16.304-24 5.144-3.94 13.234-8.617 22.561-8.546 8.27.061 16.01 4.42 19.254 10.84q.085.148.181.289l20.337 35.908c-5.144 4.504-11.178 7.348-17.174 8.015-6.953.774-14.038-1.54-18.504-6.033-4.7-4.734-6.442-12.064-4.233-17.835A3.036 3.036 0 0 0 84.67 73.4a3.04 3.04 0 0 0-3.928 1.755c-3.082 8.055-.83 17.818 5.601 24.291 5.828 5.869 14.607 8.779 23.49 7.789 4.629-.518 9.255-2.069 13.581-4.519a41.7 41.7 0 0 0 5.983-4.145l24.657 43.535c.758 7.74-4.295 16.798-11.272 20.003-6.92 3.181-15.878 1.475-21.225-3.927 1.163-4.196 1.398-8.648.526-12.952-2.114-10.457-10.495-19.19-20.855-21.744a3.046 3.046 0 0 0-3.68 2.223 3.04 3.04 0 0 0 2.222 3.678c7.992 1.966 14.719 8.976 16.347 17.04 1.628 8.065-1.841 17.139-8.435 22.064-6.604 4.922-16.285 5.669-23.558 1.81a3.047 3.047 0 0 0-4.113 1.26 3.04 3.04 0 0 0 1.259 4.111c8.43 4.473 18.979 4.199 27.229-.473a26.5 26.5 0 0 0 2.819-1.84c3.269-2.442 5.915-5.601 7.828-9.162 7.213 5.84 17.658 7.347 26.177 3.426a22 22 0 0 0 1.551-.792c5.728-3.245 10.197-9.295 12.196-15.868l47.768 84.338c-9.205-1.174-19.12 2.399-24.936 9.665-7.506 9.379-7.525 24.086-.051 33.489a3.037 3.037 0 0 0 4.273.483 3.043 3.043 0 0 0 .492-4.276c-5.779-7.27-5.761-18.648.041-25.906 5.59-6.99 16.085-9.57 24.328-6.148l11.68 20.623a1.4 1.4 0 0 0 .107.174c2.797 4.247 3.887 14.815 1.132 20.652z"}),(0,s.jsx)("path",{fill:"#515A6A",d:"M161.076 216.948c7.163-4.058 11.969-12.185 11.886-20.438-.089-8.91-5.881-17.554-14.086-21.033a3.043 3.043 0 0 0-2.374 5.604c6.044 2.564 10.312 8.934 10.375 15.494s-4.069 13.021-10.056 15.717c-5.99 2.688-13.567 1.487-18.428-2.921a3.04 3.04 0 0 0-4.299.21 3.037 3.037 0 0 0 .207 4.297c6.597 5.981 16.879 7.614 25.012 3.964q.903-.408 1.763-.894M285.633 91.604c-1.067-4.601-3.272-9.123-6.427-13.081-2.956-3.715-6.485-6.6-10.302-8.549 3.907-7.01 4.696-15.905 2.037-24.454-4.772-15.35-17.439-26.8-33.896-30.628-15.153-3.524-30.805-.083-42.321 8.986-3.218-9.397-11.353-17.357-21.639-20.84-9.996-3.386-21.774-2.763-33.16 1.747-6.909 2.74-16.321 8.001-21.929 17.522-5.2 8.829-5.57 19.476-1.059 27.472.026.046.039.1.069.152l104.685 184.832c.13.43.354.825.655 1.158l11.811 20.853.015.026c3.437 6.867 13.993 14.02 21.903 14.798 8.895.872 18.621-1.577 27.799-6.776 5.063-2.867 9.971-6.577 14.472-11.021 9.537-9.417 15.344-24.943 15.939-42.592.352-10.481-2.436-20.209-7.84-27.447a25.3 25.3 0 0 0 3.802-1.762c9.29-5.262 14.874-15.578 16.624-19.228 7.016-14.62 6.057-32.05-2.567-46.617-8.453-14.28-22.857-23.39-38.667-24.544zm35.752 68.53c-3.802 7.933-10.918 16.865-19.576 18.606-5.623-4.907-12.767-7.71-19.728-7.626.858-4.779.536-9.785-1.104-14.323-3.115-8.648-10.922-15.568-19.887-17.625a3.041 3.041 0 1 0-1.365 5.926c6.997 1.608 13.089 7.005 15.524 13.761s1.186 14.807-3.179 20.504c-4.362 5.703-11.811 9.01-18.966 8.43a3.043 3.043 0 0 0-3.281 2.788 3.04 3.04 0 0 0 2.787 3.28c5.515.448 11.165-.909 16.01-3.654 3.207-1.816 6.06-4.24 8.282-7.15a26.7 26.7 0 0 0 3.339-5.758 1 1 0 0 1 .088.002c7.587-.838 15.849 3.017 21.054 9.829 4.709 6.163 7.131 14.647 6.82 23.879-.546 16.11-5.692 30.131-14.129 38.465-11.387 11.247-25.369 17.253-37.396 16.07-6.419-.632-14.926-7.008-17.131-11.591l-.052-.092c-.018-.033-.027-.063-.042-.089l-11.683-20.629c1.303-8.83 8.914-16.504 17.783-17.703 9.209-1.244 18.976 4.592 22.239 13.286a3.042 3.042 0 0 0 4.353 1.576 3.05 3.05 0 0 0 1.351-3.711c-4.218-11.239-16.847-18.783-28.748-17.179-9.222 1.252-17.386 7.918-21.112 16.416l-47.768-84.338c6.665 1.665 14.153.944 19.881-2.3a19 19 0 0 0 1.477-.924c7.737-5.286 11.823-15.022 10.523-24.211 4.032.194 8.112-.448 11.884-2.003a26 26 0 0 0 3.028-1.471c8.25-4.673 13.913-13.59 14.408-23.11a3.041 3.041 0 0 0-6.074-.314c-.43 8.223-6.05 16.142-13.667 19.274-7.622 3.126-17.185 1.442-23.261-4.112-6.082-5.55-8.632-14.918-6.208-22.783a3.035 3.035 0 0 0-2.011-3.797 3.04 3.04 0 0 0-3.799 2.013c-3.141 10.191.042 21.877 7.924 29.068 3.246 2.967 7.188 5.045 11.378 6.209 1.883 7.364-1.257 15.93-7.547 20.223-6.336 4.336-16.703 4.011-22.952-.619l-24.657-43.535a41.5 41.5 0 0 0 6.631-3c4.326-2.45 8.039-5.613 10.86-9.323 5.417-7.11 7.436-16.136 5.4-24.152-2.244-8.845-9.46-15.796-17.953-17.295a3.047 3.047 0 0 0-3.525 2.466 3.043 3.043 0 0 0 2.465 3.523c6.086 1.072 11.476 6.337 13.12 12.801 1.557 6.141-.108 13.411-4.342 18.973-3.656 4.8-9.197 8.511-15.706 10.607l-20.337-35.908c-.056-.099-.093-.209-.155-.303-3.841-6.09-3.596-14.963.604-22.088 4.729-8.032 12.905-12.558 18.931-14.954 10.051-3.98 20.337-4.566 28.968-1.641 9.048 3.063 16.064 10.214 18.278 18.468-7.384-.555-14.918 3.417-18.395 10.053a3.04 3.04 0 0 0 1.282 4.106 3.044 3.044 0 0 0 4.108-1.284c2.647-5.045 9.043-7.894 14.56-6.49s9.764 6.967 9.674 12.658a3.036 3.036 0 0 0 2.991 3.086 3 3 0 0 0 1.546-.388 3.05 3.05 0 0 0 1.546-2.597c.111-6.79-3.759-13.254-9.518-16.667 10.171-8.742 24.54-12.16 38.469-8.925 14.543 3.383 25.286 13.046 29.469 26.512 2.274 7.317 1.462 14.834-2.075 20.504a24 24 0 0 0-1.938-.397c-7.839-1.174-15.927 2.034-20.14 7.983a3.044 3.044 0 0 0 .723 4.24 3.046 3.046 0 0 0 4.242-.725c2.911-4.117 8.645-6.322 14.272-5.476 5.17.774 10.357 4.007 14.229 8.862 3.43 4.306 5.49 9.371 5.783 14.264.318 5.199-1.424 10.383-4.659 13.884-3.376 3.651-8.499 5.492-13.047 4.678a3.04 3.04 0 1 0-1.07 5.986c4.537.811 9.291-.1 13.393-2.423a21.5 21.5 0 0 0 5.199-4.118c4.066-4.397 6.291-10.464 6.276-16.817 13.374 1.351 25.508 9.262 32.74 21.479 7.588 12.815 8.457 28.106 2.316 40.892z"}),(0,s.jsx)("path",{fill:"#515A6A",d:"M238.961 150.195a3.04 3.04 0 0 0-2.39 3.579c1.28 6.436-1.586 13.552-6.973 17.307s-13.052 3.977-18.65.542c-5.594-3.428-8.865-10.37-7.953-16.867a3.044 3.044 0 0 0-2.589-3.435 3.05 3.05 0 0 0-3.438 2.59c-1.236 8.826 3.206 18.235 10.795 22.897 7.025 4.313 16.477 4.374 23.641.316a22 22 0 0 0 1.673-1.052c7.307-5.094 11.204-14.75 9.463-23.489a3.046 3.046 0 0 0-3.579-2.388"})]}),o.map(((e,a)=>(0,s.jsx)("a",{href:e.url,className:`animation-inside-link link-${a} ${e.isOverlapping?"overlap":"default"} ${"gray"==e.color&&"gray"}`,children:e.text},a)))]})]})})}})}},l={};function c(e){var s=l[e];if(void 0!==s)return s.exports;var n=l[e]={exports:{}};return a[e](n,n.exports,c),n.exports}c.m=a,e=[],c.O=(a,l,s,n)=>{if(!l){var r=1/0;for(h=0;h<e.length;h++){for(var[l,s,n]=e[h],t=!0,o=0;o<l.length;o++)(!1&n||r>=n)&&Object.keys(c.O).every((e=>c.O[e](l[o])))?l.splice(o--,1):(t=!1,n<r&&(r=n));if(t){e.splice(h--,1);var i=s();void 0!==i&&(a=i)}}return a}n=n||0;for(var h=e.length;h>0&&e[h-1][2]>n;h--)e[h]=e[h-1];e[h]=[l,s,n]},c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={536:0,248:0};c.O.j=a=>0===e[a];var a=(a,l)=>{var s,n,[r,t,o]=l,i=0;if(r.some((a=>0!==e[a]))){for(s in t)c.o(t,s)&&(c.m[s]=t[s]);if(o)var h=o(c)}for(a&&a(l);i<r.length;i++)n=r[i],c.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return c.O(h)},l=globalThis.webpackChunkhero_section=globalThis.webpackChunkhero_section||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))})();var s=c.O(void 0,[248],(()=>c(316)));s=c.O(s)})();