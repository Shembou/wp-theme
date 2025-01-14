/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/enumerated-tiles-section/edit.js":
/*!**********************************************!*\
  !*** ./src/enumerated-tiles-section/edit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/enumerated-tiles-section/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

function Edit({
  attributes,
  setAttributes
}) {
  const {
    tag = '',
    heading = '',
    paragraph = '',
    tiles = [],
    button = {
      url: '',
      text: '',
      svg: ''
    }
  } = attributes;

  // Update base attributes
  const updateBaseAttribute = (key, value) => {
    setAttributes({
      [key]: value
    });
  };

  // Update button attributes
  const updateButtonAttribute = (key, value) => {
    const updatedButton = {
      ...button,
      [key]: value
    };
    setAttributes({
      button: updatedButton
    });
  };

  // Add a new tile to the tiles array
  const addTile = () => {
    const newTiles = [...tiles, {
      icon: '',
      title: '',
      description: ''
    }];
    setAttributes({
      tiles: newTiles
    });
  };

  // Update a specific tile
  const updateTile = (index, key, value) => {
    const updatedTiles = [...tiles];
    updatedTiles[index][key] = value;
    setAttributes({
      tiles: updatedTiles
    });
  };

  // Remove a tile from the tiles array
  const removeTile = index => {
    const updatedTiles = [...tiles];
    updatedTiles.splice(index, 1);
    setAttributes({
      tiles: updatedTiles
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "Base Settings",
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Tag",
            value: tag,
            onChange: value => updateBaseAttribute('tag', value)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Heading",
            value: heading,
            onChange: value => updateBaseAttribute('heading', value)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Paragraph",
            value: paragraph,
            onChange: value => updateBaseAttribute('paragraph', value)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button URL",
            value: button.url,
            onChange: value => updateButtonAttribute('url', value)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: "Button Text",
            value: button.text,
            onChange: value => updateButtonAttribute('text', value)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: media => updateButtonAttribute('svg', media.url),
            allowedTypes: ['image'],
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                onClick: open,
                variant: "secondary",
                children: button.svg ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Replace SVG', 'header-with-icons') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload SVG', 'header-with-icons')
              }), button.svg && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                style: {
                  marginTop: '10px',
                  alignItems: 'center',
                  display: 'grid'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: button.svg,
                  alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Svg', 'header-with-icons'),
                  style: {
                    maxWidth: '100%',
                    border: '1px',
                    padding: '10px'
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  onClick: () => updateBaseAttribute('image', ''),
                  variant: "link",
                  isDestructive: true,
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Image', 'header-with-icons')
                })]
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "Tiles",
        initialOpen: false,
        children: [tiles.map((tile, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            marginBottom: '20px',
            borderBottom: '1px solid #ddd',
            paddingBottom: '10px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Tile ${index + 1} Title`,
              value: tile.heading,
              onChange: value => updateTile(index, 'heading', value)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
              label: `Tile ${index + 1} Description`,
              value: tile.paragraph,
              onChange: value => updateTile(index, 'paragraph', value)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
              icon: "trash",
              label: "Remove Tile",
              onClick: () => removeTile(index),
              isDestructive: true
            })
          })]
        }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            onClick: addTile,
            children: "Add Tile"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
      id: "enumerated-tiles-section",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("header", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "tag",
          children: tag
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          children: heading
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          children: paragraph
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "tiles-wrapper",
        children: tiles.map(({
          heading,
          paragraph
        }, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: `tile ${index % 2 == 0 ? 'green' : 'white'}`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h2", {
            children: ["0", index + 1, " ", heading]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: paragraph
          })]
        }, index))
      })]
    })]
  });
}
const BrainIcon = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "148",
  height: "134",
  fill: "none",
  viewBox: "0 0 148 134",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
    fill: "#E8EBEF",
    d: "M18.952 110.223c3.428 6.313 9.57 10.466 16.434 11.101 1.714.158 6.693.377 10.632-1.85a10.7 10.7 0 0 0 1.583-1.094c1.436 3.603 4.404 6.788 8.354 8.974 6.574 3.638 13.51 4.915 19.029 3.501 2.611-.672 5.038-1.647 7.194-2.865 3.9-2.204 6.921-5.204 8.541-8.629 1.441-3.034 1.14-8.416-.605-11.15l-.005-.009-5.056-8.906a1.15 1.15 0 0 0-.265-.466L40.038 20c-.01-.02-.028-.036-.04-.059-1.92-3.37-5.866-5.547-10.203-5.579-4.688-.034-8.663 2.242-11.17 4.155-4.136 3.16-6.938 7.304-7.887 11.676-.989 4.55.174 9.297 2.969 12.51C7.81 44.882 3.069 49.859 1.02 56.198c-2.2 6.817-.799 13.92 3.752 18.997 2.559 2.857 6.012 4.508 9.45 4.578-.149 1.841.136 3.796.856 5.72.761 2.035 1.95 3.84 3.42 5.232-3.078 6.016-2.918 13.283.453 19.498"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
    fill: "#DDF6FE",
    d: "M128.403 40.658c-.444-1.973-1.384-3.917-2.739-5.616-1.283-1.606-2.813-2.854-4.476-3.675 1.708-2.977 2.064-6.781.924-10.44-2.027-6.504-7.411-11.36-14.401-12.98-6.498-1.509-13.216-.011-18.123 3.915-1.324-4.04-4.807-7.48-9.227-8.973-4.246-1.437-9.252-1.173-14.092.743-2.935 1.162-6.935 3.393-9.317 7.422-2.202 3.727-2.36 8.223-.45 11.599.01.02.016.043.029.065l44.75 78.83c.051.175.142.335.264.466l5.056 8.906.005.009c1.453 2.9 5.924 5.925 9.273 6.252 3.779.371 7.91-.667 11.81-2.871 2.156-1.218 4.242-2.793 6.162-4.682 4.054-3.996 6.525-10.585 6.776-18.083.152-4.507-1.063-8.683-3.417-11.764a10.7 10.7 0 0 0 1.754-.79c3.94-2.227 6.312-6.6 7.058-8.147 2.982-6.2 2.572-13.592-1.092-19.771-3.608-6.081-9.771-9.96-16.524-10.416z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
    fill: "#515A6A",
    d: "M92.249 101.719a1.3 1.3 0 0 0-.28-.494L47.225 22.406c-.011-.02-.03-.039-.04-.058-1.94-3.404-5.926-5.606-10.304-5.638-4.723-.037-8.72 2.252-11.243 4.178-4.156 3.175-6.973 7.346-7.929 11.744-.984 4.526.145 9.25 2.883 12.484-5.855 2.223-10.557 7.193-12.596 13.508-2.213 6.858-.8 14.002 3.777 19.113 2.55 2.847 5.983 4.51 9.412 4.618-.129 1.822.157 3.747.869 5.642.758 2.022 1.93 3.82 3.383 5.22-3.054 6.032-2.882 13.302.498 19.524 3.444 6.348 9.622 10.521 16.524 11.161 1.723.161 6.731.381 10.702-1.863a11 11 0 0 0 1.482-1.004c1.467 3.566 4.419 6.716 8.337 8.886 6.601 3.653 13.569 4.934 19.117 3.511 2.621-.673 5.054-1.651 7.22-2.876 3.924-2.216 6.96-5.236 8.595-8.681 1.453-3.063 1.151-8.493-.61-11.255l-.007-.012-5.05-8.895zm3.312 19.053c-2.21 4.659-7.485 8.455-14.11 10.153-4.91 1.259-11.182.07-17.206-3.267-3.454-1.914-6.03-4.658-7.254-7.731-1.353-3.398-.95-7.265 1.025-9.856l.018-.033c.944.13 1.902.149 2.845.042a11.7 11.7 0 0 0 4.441-1.461c2.071-1.17 3.81-2.939 4.858-5.054a1.3 1.3 0 0 0-.589-1.739 1.306 1.306 0 0 0-1.743.589c-1.36 2.744-4.21 4.743-7.26 5.088s-6.273-.962-8.214-3.334-2.58-5.784-1.632-8.695a1.3 1.3 0 0 0-2.473-.8c-1.216 3.73-.397 8.099 2.09 11.138 1.307 1.596 3.067 2.81 5.008 3.544-1.56 2.528-2.104 5.755-1.541 8.888-2.544 2.786-7.38 3.428-11.123 3.079-6.034-.559-11.449-4.23-14.48-9.814-2.888-5.322-3.123-11.497-.678-16.684 2.325 1.398 5.038 1.915 7.544 1.392a9.2 9.2 0 0 0 2.652-.998c1.75-.99 3.132-2.53 3.832-4.367a1.3 1.3 0 0 0-2.43-.921c-.704 1.843-2.502 3.311-4.582 3.746-1.991.413-4.28-.088-6.114-1.342-1.727-1.184-3.133-3.044-3.957-5.242-.929-2.481-.974-5.087-.121-7.148.925-2.239 2.994-3.852 5.144-4.019a1.298 1.298 0 1 0-.197-2.587c-3.107.237-6.06 2.491-7.353 5.616q-.156.39-.28.796c-2.856.05-5.79-1.302-7.972-3.738-4.017-4.483-5.198-10.531-3.242-16.592 1.874-5.806 6.287-10.309 11.727-12.111-.015 2.854 1.504 5.687 4.018 7.136.413.237.903.223 1.292.003a1.297 1.297 0 0 0 .008-2.25c-2.109-1.214-3.21-3.986-2.514-6.314.698-2.326 3.148-4.04 5.578-3.905a1.3 1.3 0 0 0 1.373-1.22 1.3 1.3 0 0 0-1.223-1.37c-3.195-.181-6.308 1.7-7.728 4.523-2.54-2.62-3.619-6.754-2.753-10.735.825-3.798 3.3-7.431 6.969-10.234 2.198-1.68 5.656-3.675 9.643-3.645 3.535.027 6.843 1.886 8.23 4.623q.036.063.076.123l8.693 15.313c-2.199 1.92-4.778 3.133-7.34 3.418-2.972.33-6-.657-7.91-2.573-2.008-2.019-2.753-5.145-1.808-7.606a1.3 1.3 0 0 0-2.428-.926c-1.318 3.436-.356 7.6 2.393 10.36 2.491 2.502 6.244 3.743 10.04 3.321 1.979-.221 3.956-.882 5.805-1.927a18 18 0 0 0 2.557-1.768l10.539 18.565c.324 3.3-1.836 7.164-4.818 8.53-2.958 1.357-6.786.63-9.072-1.674.497-1.79.598-3.688.225-5.524-.904-4.459-4.486-8.183-8.914-9.272a1.3 1.3 0 0 0-1.573.948 1.297 1.297 0 0 0 .95 1.568c3.416.839 6.291 3.828 6.987 7.267s-.787 7.309-3.605 9.409c-2.823 2.099-6.96 2.417-10.07.772a1.303 1.303 0 0 0-1.757.537 1.296 1.296 0 0 0 .538 1.753c3.603 1.907 8.112 1.79 11.638-.202q.625-.352 1.205-.784a11.9 11.9 0 0 0 3.346-3.907c3.083 2.49 7.547 3.132 11.188 1.46q.336-.155.663-.337c2.448-1.384 4.358-3.964 5.213-6.767l20.417 35.965c-3.935-.5-8.173 1.023-10.659 4.122-3.208 3.999-3.216 10.271-.021 14.281a1.3 1.3 0 0 0 1.826.205c.564-.448.656-1.26.21-1.823-2.47-3.1-2.462-7.952.018-11.047 2.389-2.981 6.875-4.082 10.398-2.622l4.992 8.794.024.035.022.039c1.196 1.812 1.661 6.318.484 8.807z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
    fill: "#515A6A",
    d: "M68.705 92.137c3.062-1.73 5.116-5.196 5.08-8.715-.038-3.8-2.513-7.486-6.02-8.97-.66-.278-1.425.031-1.705.69s.028 1.418.69 1.7c2.583 1.094 4.408 3.81 4.435 6.608s-1.74 5.552-4.298 6.702c-2.56 1.147-5.8.634-7.877-1.246a1.3 1.3 0 0 0-1.837.09 1.293 1.293 0 0 0 .088 1.833c2.82 2.55 7.214 3.246 10.69 1.69q.388-.174.754-.382M121.943 38.687c-.456-1.963-1.399-3.891-2.747-5.579-1.264-1.584-2.772-2.814-4.404-3.645 1.671-2.99 2.008-6.783.871-10.429-2.039-6.545-7.454-11.428-14.487-13.06-6.477-1.503-13.167-.036-18.09 3.832-1.375-4.008-4.852-7.402-9.248-8.887-4.272-1.444-9.307-1.179-14.173.744-2.953 1.169-6.976 3.413-9.373 7.473-2.223 3.765-2.38 8.305-.452 11.715.01.02.016.042.029.065l44.744 78.819c.055.183.151.351.28.494l5.048 8.892.006.011c1.469 2.928 5.981 5.979 9.362 6.31 3.802.372 7.959-.672 11.882-2.889 2.164-1.223 4.262-2.805 6.185-4.7 4.077-4.016 6.559-10.636 6.813-18.163.15-4.47-1.041-8.617-3.351-11.704q.854-.312 1.625-.752c3.971-2.243 6.357-6.642 7.105-8.2 2.999-6.234 2.589-13.667-1.097-19.878-3.613-6.09-9.769-9.975-16.527-10.467zm15.281 29.223c-1.626 3.383-4.667 7.192-8.368 7.934-2.403-2.092-5.456-3.287-8.432-3.251.367-2.039.23-4.174-.471-6.109-1.332-3.687-4.668-6.638-8.5-7.516a1.3 1.3 0 0 0-1.559.974 1.295 1.295 0 0 0 .975 1.554c2.991.685 5.595 2.987 6.635 5.868 1.041 2.88.507 6.314-1.358 8.743-1.865 2.432-5.049 3.842-8.107 3.595a1.3 1.3 0 0 0-1.402 1.19 1.297 1.297 0 0 0 1.191 1.398c2.358.19 4.772-.388 6.843-1.558a11.7 11.7 0 0 0 3.54-3.05 11.4 11.4 0 0 0 1.427-2.455l.038.001c3.242-.357 6.774 1.287 8.999 4.192 2.012 2.628 3.047 6.246 2.915 10.183-.234 6.87-2.433 12.849-6.04 16.402-4.867 4.796-10.842 7.358-15.983 6.853-2.744-.269-6.38-2.988-7.322-4.943l-.022-.039q-.01-.021-.018-.038l-4.994-8.797c.557-3.765 3.81-7.038 7.601-7.55 3.936-.53 8.11 1.96 9.505 5.667a1.302 1.302 0 0 0 2.438-.911c-1.803-4.793-7.201-8.01-12.287-7.326-3.942.534-7.431 3.377-9.024 7L75.028 59.958c2.848.71 6.049.403 8.497-.98a8 8 0 0 0 .631-.395c3.307-2.254 5.054-6.406 4.498-10.324a11.9 11.9 0 0 0 5.08-.854q.669-.273 1.293-.628c3.526-1.992 5.947-5.795 6.159-9.854a1.299 1.299 0 0 0-2.596-.134c-.184 3.506-2.586 6.883-5.842 8.219-3.257 1.333-7.345.614-9.942-1.754-2.6-2.367-3.69-6.362-2.653-9.715a1.3 1.3 0 0 0-2.484-.761c-1.342 4.346.018 9.329 3.387 12.395 1.387 1.266 3.072 2.152 4.863 2.648.805 3.14-.537 6.793-3.226 8.624-2.708 1.849-7.139 1.71-9.81-.264L62.346 37.615c.994-.35 1.945-.777 2.834-1.28 1.849-1.044 3.436-2.393 4.642-3.975 2.315-3.032 3.178-6.88 2.308-10.299-.96-3.772-4.043-6.736-7.673-7.376a1.3 1.3 0 0 0-1.507 1.052 1.3 1.3 0 0 0 1.053 1.502c2.602.458 4.906 2.703 5.608 5.46.665 2.618-.046 5.718-1.856 8.09-1.562 2.047-3.93 3.63-6.713 4.523L52.35 20c-.024-.042-.04-.089-.066-.13-1.642-2.597-1.537-6.38.258-9.418 2.021-3.426 5.516-5.356 8.091-6.378 4.296-1.697 8.693-1.946 12.382-.7 3.867 1.307 6.865 4.356 7.812 7.876-3.156-.236-6.376 1.457-7.862 4.287a1.295 1.295 0 0 0 .548 1.751c.635.334 1.42.087 1.755-.547 1.132-2.152 3.865-3.367 6.223-2.768 2.358.598 4.174 2.971 4.135 5.398-.01.714.56 1.307 1.279 1.316a1.298 1.298 0 0 0 1.322-1.273c.047-2.896-1.607-5.652-4.069-7.108C88.504 8.58 94.646 7.122 100.6 8.5c6.216 1.443 10.808 5.564 12.596 11.306.972 3.12.625 6.326-.887 8.744-.274-.064-.548-.128-.828-.17-3.351-.5-6.808.868-8.609 3.405a1.3 1.3 0 0 0 .309 1.808 1.304 1.304 0 0 0 1.813-.31c1.245-1.755 3.696-2.695 6.101-2.335 2.209.33 4.426 1.71 6.081 3.78 1.466 1.836 2.347 3.996 2.472 6.082.136 2.217-.608 4.428-1.991 5.921-1.443 1.557-3.633 2.342-5.577 1.995a1.3 1.3 0 0 0-1.508 1.049 1.295 1.295 0 0 0 1.051 1.504c1.939.345 3.971-.043 5.724-1.034a9.2 9.2 0 0 0 2.222-1.756c1.738-1.875 2.689-4.462 2.683-7.171 5.716.576 10.902 3.95 13.993 9.16 3.244 5.464 3.615 11.985.99 17.437z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
    fill: "#515A6A",
    d: "M101.994 63.672c-.705.139-1.16.822-1.021 1.526.547 2.745-.678 5.779-2.98 7.38s-5.58 1.696-7.972.231c-2.39-1.461-3.789-4.422-3.399-7.192a1.3 1.3 0 0 0-1.107-1.465 1.3 1.3 0 0 0-1.469 1.104c-.528 3.764 1.37 7.776 4.614 9.764 3.002 1.84 7.043 1.865 10.104.135q.368-.207.716-.448c3.123-2.173 4.788-6.29 4.044-10.017a1.3 1.3 0 0 0-1.53-1.018"
  })]
});

/***/ }),

/***/ "./src/enumerated-tiles-section/index.js":
/*!***********************************************!*\
  !*** ./src/enumerated-tiles-section/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/enumerated-tiles-section/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/enumerated-tiles-section/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/enumerated-tiles-section/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/enumerated-tiles-section/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/enumerated-tiles-section/save.js":
/*!**********************************************!*\
  !*** ./src/enumerated-tiles-section/save.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: 'Enumerated Tiles Section – hello from the saved content!'
  });
}

/***/ }),

/***/ "./src/enumerated-tiles-section/editor.scss":
/*!**************************************************!*\
  !*** ./src/enumerated-tiles-section/editor.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/enumerated-tiles-section/style.scss":
/*!*************************************************!*\
  !*** ./src/enumerated-tiles-section/style.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/enumerated-tiles-section/block.json":
/*!*************************************************!*\
  !*** ./src/enumerated-tiles-section/block.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/enumerated-tiles-section","version":"0.1.0","title":"Enumerated Tiles Section","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false},"textdomain":"enumerated-tiles-section","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"tag":{"type":"string"},"heading":{"type":"string"},"paragraph":{"type":"string"},"tiles":{"type":"array","items":{"type":"object","properties":{"heading":{"type":"string"},"paragraph":{"type":"string"}}}},"button":{"type":"object","properties":{"url":{"type":"string"},"text":{"type":"string"},"svg":{"type":"string","default":""}}}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"enumerated-tiles-section/index": 0,
/******/ 			"enumerated-tiles-section/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkenumerated_tiles_section"] = globalThis["webpackChunkenumerated_tiles_section"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["enumerated-tiles-section/style-index"], () => (__webpack_require__("./src/enumerated-tiles-section/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map