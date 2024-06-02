/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modern-normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modern-normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */

/*
Document
========
*/

/**
Use a better box model (opinionated).
*/

*,
::before,
::after {
	box-sizing: border-box;
}

html {
	/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */
	font-family:
		system-ui,
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji';
	line-height: 1.15; /* 1. Correct the line height in all browsers. */
	-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */
	-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */
	tab-size: 4; /* 3 */
}

/*
Sections
========
*/

body {
	margin: 0; /* Remove the margin in all browsers. */
}

/*
Grouping content
================
*/

/**
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
*/

hr {
	height: 0; /* 1 */
	color: inherit; /* 2 */
}

/*
Text-level semantics
====================
*/

/**
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr[title] {
	text-decoration: underline dotted;
}

/**
Add the correct font weight in Edge and Safari.
*/

b,
strong {
	font-weight: bolder;
}

/**
1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
2. Correct the odd 'em' font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
	font-family:
		ui-monospace,
		SFMono-Regular,
		Consolas,
		'Liberation Mono',
		Menlo,
		monospace; /* 1 */
	font-size: 1em; /* 2 */
}

/**
Add the correct font size in all browsers.
*/

small {
	font-size: 80%;
}

/**
Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
*/

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/*
Tabular data
============
*/

/**
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
*/

table {
	text-indent: 0; /* 1 */
	border-color: inherit; /* 2 */
}

/*
Forms
=====
*/

/**
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

/**
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
	text-transform: none;
}

/**
Correct the inability to style clickable types in iOS and Safari.
*/

/* button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
} */

/**
Remove the inner border and padding in Firefox.
*/

::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
Restore the focus styles unset by the previous rule.
*/

:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
Remove the additional ':invalid' styles in Firefox.
See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
*/

:-moz-ui-invalid {
	box-shadow: none;
}

/**
Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
*/

legend {
	padding: 0;
}

/**
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
	vertical-align: baseline;
}

/**
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
	height: auto;
}

/**
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

/**
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to 'inherit' in Safari.
*/

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}

/*
Interactive
===========
*/

/*
Add the correct display in Chrome and Safari.
*/

summary {
	display: list-item;
}
`, "",{"version":3,"sources":["webpack://./src/modern-normalize.css"],"names":[],"mappings":"AAAA,8FAA8F;;AAE9F;;;CAGC;;AAED;;CAEC;;AAED;;;CAGC,sBAAsB;AACvB;;AAEA;CACC,sHAAsH;CACtH;;;;;;;;kBAQiB;CACjB,iBAAiB,EAAE,gDAAgD;CACnE,8BAA8B,EAAE,0EAA0E;CAC1G,gBAAgB,EAAE,mDAAmD;CACrE,WAAW,EAAE,MAAM;AACpB;;AAEA;;;CAGC;;AAED;CACC,SAAS,EAAE,uCAAuC;AACnD;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;CACC,SAAS,EAAE,MAAM;CACjB,cAAc,EAAE,MAAM;AACvB;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,iCAAiC;AAClC;;AAEA;;CAEC;;AAED;;CAEC,mBAAmB;AACpB;;AAEA;;;CAGC;;AAED;;;;CAIC;;;;;;WAMU,EAAE,MAAM;CAClB,cAAc,EAAE,MAAM;AACvB;;AAEA;;CAEC;;AAED;CACC,cAAc;AACf;;AAEA;;CAEC;;AAED;;CAEC,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;CACC,cAAc,EAAE,MAAM;CACtB,qBAAqB,EAAE,MAAM;AAC9B;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;;;;;CAKC,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;AAClB;;AAEA;;CAEC;;AAED;;CAEC,oBAAoB;AACrB;;AAEA;;CAEC;;AAED;;;;;GAKG;;AAEH;;CAEC;;AAED;CACC,kBAAkB;CAClB,UAAU;AACX;;AAEA;;CAEC;;AAED;CACC,8BAA8B;AAC/B;;AAEA;;;CAGC;;AAED;CACC,gBAAgB;AACjB;;AAEA;;CAEC;;AAED;CACC,UAAU;AACX;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;CAEC;;AAED;;CAEC,YAAY;AACb;;AAEA;;;CAGC;;AAED;CACC,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;AAC7B;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;;CAGC;;AAED;CACC,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AACtB;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,kBAAkB;AACnB","sourcesContent":["/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n\t-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */\n\ttab-size: 4; /* 3 */\n}\n\n/*\nSections\n========\n*/\n\nbody {\n\tmargin: 0; /* Remove the margin in all browsers. */\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\n/* button,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n} */\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bubble-tea-img.jpg */ "./src/images/bubble-tea-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/contact.png */ "./src/images/contact.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --white: #fffffe;
  --text: #2b2c34;
  --primary: #6246ea;
  --secondary: #d1d1e9;
  --tertiary: #e45858;
  --logo-font: "Rowdies", sans-serif;
  --btn-font: "Ubuntu Sans", sans-serif;
  font-family: "Dosis", sans-serif;
}

body {
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(50vw + 20rem);
  min-height: 100vh;
  gap: 2rem;
  padding: 2rem 6rem 2rem 6rem;
  background-color: var(--white);
}

.hero {
  display: flex;
  align-items: center;
  width: 10rem;
  user-select: none;
}

.hero-text-the {
  color: var(--text);
  padding-top: 1.2rem;
}

.hero-text,
.home-hero-logo,
.menu-hero-logo,
.contact-hero-logo {
  font-family: var(--logo-font);
  font-weight: 300;
  font-size: 1.2rem;
  color: var(--primary);
}

nav {
  display: flex;
  justify-content: center;
  gap: 8rem;
  width: 100%;
  font-size: 1.1rem;
  font-family: var(--btn-font);
}

button {
  appearance: none;
  background-color: var(--white);
  border: 0.15rem solid var(--white);
  transition: 0.2s ease-in-out;
  padding: 1rem;
  cursor: pointer;
  user-select: none;
  font-weight: 400;
}

button:hover {
  border-bottom: 0.15rem solid var(--primary);
  transition: 0.2s ease-in-out;
}

.button-active {
  border-bottom: 0.15rem solid var(--primary);
  color: var(--primary);
  transition: 0.2s ease-in-out;
}

.home-container,
.menu-container,
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40rem;
  gap: 6rem;
  text-align: center;
  font-size: 1.3rem;
}

.home-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  width: 100%;
}

.home-hero-logo {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  margin-left: 0rem;
}

.home-hero-logo::before {
  content: "";
  position: absolute;
  width: 30%;
  height: 0.15rem;
  left: 0;
  top: 60%;
  background-color: var(--primary);
}

.home-hero-logo::after {
  content: "";
  position: absolute;
  width: 30%;
  height: 0.15rem;
  right: 0;
  top: 60%;
  background-color: var(--primary);
}

.home-hero-logo-the {
  color: var(--text);
  align-self: flex-end;
  padding-right: 0.5rem;
}

.home-hero-logo-bobacube {
  align-self: flex-end;
  padding-right: 0.2rem;
}

.home-text {
  width: 30rem;
}

.home-btn {
  appearance: none;
  transition: 0.5s ease-in-out;
  border-radius: 2rem;
  border: 0.15rem solid var(--primary);
  padding: 1.1rem 1.8rem 1.1rem 1.8rem;
  box-shadow: inset 0 0 0 0 var(--primary), 0.3rem 0.3rem var(--secondary);
  font-weight: 600;
  font-size: 1.2rem;
}

.home-btn:hover {
  box-shadow: inset 0 -4rem 0 0 var(--primary), 0.3rem 0.3rem var(--secondary);
  color: var(--white);
}

.home-btn:active {
  transform: translateX(0.3rem) translateY(0.3rem);
  box-shadow: inset 0 -4rem 0 0 var(--primary);
}

.offer-card {
  display: flex;
  align-items: center;
  height: 10rem;
  width: 40rem;
  border-radius: 0.2rem;
  background-color: var(--secondary);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}

.offer-card-text {
  margin-left: 3.6rem;
  padding: 1rem 3rem 1rem 3rem;
  width: 26rem;
  border: 0.15rem solid var(--white);
  border-radius: 0.2rem;
}

.tropical {
  color: var(--tertiary);
  font-weight: 600;
}

.blueberry {
  color: var(--primary);
  font-weight: 600;
}

.menu-container {
  text-align: start;
  gap: 2rem;
}

.menu-hero,
.contact-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.4rem;
  font-weight: 500;
}

.menu-hero-logo,
.contact-hero-logo {
  display: flex;
  font-size: 1.8rem;
  color: var(--tertiary);
}

.menu-hero-logo::after {
  content: "";
  position: absolute;
  width: 63%;
  height: 0.15rem;
  right: 0;
  top: 30%;
  background-color: var(--primary);
}

.menu-hero-logo-the,
.contact-hero-logo-the {
  color: var(--text);
  padding-right: 0.4rem;
  align-self: flex-end;
}

.menu-hero-logo-bobacube,
.contact-hero-logo-bobacube {
  padding-right: 0.2rem;
  align-self: flex-end;
}

.menu-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.6rem;
  border-radius: 0.2rem;
  font-size: 1.1rem;
  border-top: solid 0.15rem var(--tertiary);
  font-weight: 500;
  transition: 0.2s ease-in-out;
}

.menu-card:hover {
  background-color: #e2caca;
}

.menu-price,
.menu-price-3 {
  font-weight: 700;
  text-align: end;
  border-left: solid 0.15rem var(--primary);
  width: 7.5rem;
}

.menu-price-3 {
  display: flex;
  justify-content: end;
  gap: 1rem;
}

.original-price {
  position: relative;
  font-weight: 700;
  color: var(--tertiary);
}

.original-price::before {
  content: "";
  position: absolute;
  background-color: var(--text);
  height: 0.1rem;
  width: 3rem;
  top: 55%;
  transform: rotate(160deg);
}

.contact-hero {
  align-items: end;
}

.contact-hero-logo-the {
  padding-left: 0.2rem;
}

.contact-hero-logo-bobacube {
  padding-right: 0rem;
  color: var(--primary);
}

.contact-hero-logo::before {
  content: "";
  position: absolute;
  width: 63%;
  height: 0.15rem;
  left: 0;
  top: 36%;
  background-color: var(--tertiary);
}

.contact-card {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 0.15rem solid var(--primary);
  padding: 2rem;
  border-radius: 0.2rem;
}

.contact-card-img {
  width: 7rem;
  height: 6rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: contain;
  background-repeat: no-repeat;
}

.contact-card-text-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
}

.contact-card-address,
.contact-card-number {
  color: var(--tertiary);
  font-weight: 500;
  font-family: var(--btn-font), sans-serif;
  font-size: 1.1rem;
}

.contact-card-address:hover,
.contact-card-number:hover {
  cursor: pointer;
}

.contact-email-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.contact-email-btn {
  appearance: none;
  transition: 0.5s ease-in-out;
  border-radius: 2rem;
  border: 0.15rem solid var(--primary);
  padding: 1.1rem 1.8rem 1.1rem 1.8rem;
  box-shadow: inset 0 0 0 0 var(--primary), 0.3rem 0.3rem var(--secondary);
  font-weight: 600;
  font-size: 1.2rem;
  width: max-content;
}

.contact-email-btn:hover {
  box-shadow: inset 0 0 0 2rem var(--primary), 0.3rem 0.3rem var(--secondary);
  color: var(--white);
}

.contact-email-btn:active {
  transform: translateX(0.3rem) translateY(0.3rem);
  box-shadow: inset 0 0 0 2rem var(--primary);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --white: #fffffe;\n  --text: #2b2c34;\n  --primary: #6246ea;\n  --secondary: #d1d1e9;\n  --tertiary: #e45858;\n  --logo-font: \"Rowdies\", sans-serif;\n  --btn-font: \"Ubuntu Sans\", sans-serif;\n  font-family: \"Dosis\", sans-serif;\n}\n\nbody {\n  background-color: var(--secondary);\n  display: flex;\n  justify-content: center;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: calc(50vw + 20rem);\n  min-height: 100vh;\n  gap: 2rem;\n  padding: 2rem 6rem 2rem 6rem;\n  background-color: var(--white);\n}\n\n.hero {\n  display: flex;\n  align-items: center;\n  width: 10rem;\n  user-select: none;\n}\n\n.hero-text-the {\n  color: var(--text);\n  padding-top: 1.2rem;\n}\n\n.hero-text,\n.home-hero-logo,\n.menu-hero-logo,\n.contact-hero-logo {\n  font-family: var(--logo-font);\n  font-weight: 300;\n  font-size: 1.2rem;\n  color: var(--primary);\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  gap: 8rem;\n  width: 100%;\n  font-size: 1.1rem;\n  font-family: var(--btn-font);\n}\n\nbutton {\n  appearance: none;\n  background-color: var(--white);\n  border: 0.15rem solid var(--white);\n  transition: 0.2s ease-in-out;\n  padding: 1rem;\n  cursor: pointer;\n  user-select: none;\n  font-weight: 400;\n}\n\nbutton:hover {\n  border-bottom: 0.15rem solid var(--primary);\n  transition: 0.2s ease-in-out;\n}\n\n.button-active {\n  border-bottom: 0.15rem solid var(--primary);\n  color: var(--primary);\n  transition: 0.2s ease-in-out;\n}\n\n.home-container,\n.menu-container,\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 40rem;\n  gap: 6rem;\n  text-align: center;\n  font-size: 1.3rem;\n}\n\n.home-hero {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 500;\n  width: 100%;\n}\n\n.home-hero-logo {\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.8rem;\n  margin-left: 0rem;\n}\n\n.home-hero-logo::before {\n  content: \"\";\n  position: absolute;\n  width: 30%;\n  height: 0.15rem;\n  left: 0;\n  top: 60%;\n  background-color: var(--primary);\n}\n\n.home-hero-logo::after {\n  content: \"\";\n  position: absolute;\n  width: 30%;\n  height: 0.15rem;\n  right: 0;\n  top: 60%;\n  background-color: var(--primary);\n}\n\n.home-hero-logo-the {\n  color: var(--text);\n  align-self: flex-end;\n  padding-right: 0.5rem;\n}\n\n.home-hero-logo-bobacube {\n  align-self: flex-end;\n  padding-right: 0.2rem;\n}\n\n.home-text {\n  width: 30rem;\n}\n\n.home-btn {\n  appearance: none;\n  transition: 0.5s ease-in-out;\n  border-radius: 2rem;\n  border: 0.15rem solid var(--primary);\n  padding: 1.1rem 1.8rem 1.1rem 1.8rem;\n  box-shadow: inset 0 0 0 0 var(--primary), 0.3rem 0.3rem var(--secondary);\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n\n.home-btn:hover {\n  box-shadow: inset 0 -4rem 0 0 var(--primary), 0.3rem 0.3rem var(--secondary);\n  color: var(--white);\n}\n\n.home-btn:active {\n  transform: translateX(0.3rem) translateY(0.3rem);\n  box-shadow: inset 0 -4rem 0 0 var(--primary);\n}\n\n.offer-card {\n  display: flex;\n  align-items: center;\n  height: 10rem;\n  width: 40rem;\n  border-radius: 0.2rem;\n  background-color: var(--secondary);\n  background-image: url(./images/bubble-tea-img.jpg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: right;\n}\n\n.offer-card-text {\n  margin-left: 3.6rem;\n  padding: 1rem 3rem 1rem 3rem;\n  width: 26rem;\n  border: 0.15rem solid var(--white);\n  border-radius: 0.2rem;\n}\n\n.tropical {\n  color: var(--tertiary);\n  font-weight: 600;\n}\n\n.blueberry {\n  color: var(--primary);\n  font-weight: 600;\n}\n\n.menu-container {\n  text-align: start;\n  gap: 2rem;\n}\n\n.menu-hero,\n.contact-hero {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n\n.menu-hero-logo,\n.contact-hero-logo {\n  display: flex;\n  font-size: 1.8rem;\n  color: var(--tertiary);\n}\n\n.menu-hero-logo::after {\n  content: \"\";\n  position: absolute;\n  width: 63%;\n  height: 0.15rem;\n  right: 0;\n  top: 30%;\n  background-color: var(--primary);\n}\n\n.menu-hero-logo-the,\n.contact-hero-logo-the {\n  color: var(--text);\n  padding-right: 0.4rem;\n  align-self: flex-end;\n}\n\n.menu-hero-logo-bobacube,\n.contact-hero-logo-bobacube {\n  padding-right: 0.2rem;\n  align-self: flex-end;\n}\n\n.menu-card {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.6rem;\n  border-radius: 0.2rem;\n  font-size: 1.1rem;\n  border-top: solid 0.15rem var(--tertiary);\n  font-weight: 500;\n  transition: 0.2s ease-in-out;\n}\n\n.menu-card:hover {\n  background-color: #e2caca;\n}\n\n.menu-price,\n.menu-price-3 {\n  font-weight: 700;\n  text-align: end;\n  border-left: solid 0.15rem var(--primary);\n  width: 7.5rem;\n}\n\n.menu-price-3 {\n  display: flex;\n  justify-content: end;\n  gap: 1rem;\n}\n\n.original-price {\n  position: relative;\n  font-weight: 700;\n  color: var(--tertiary);\n}\n\n.original-price::before {\n  content: \"\";\n  position: absolute;\n  background-color: var(--text);\n  height: 0.1rem;\n  width: 3rem;\n  top: 55%;\n  transform: rotate(160deg);\n}\n\n.contact-hero {\n  align-items: end;\n}\n\n.contact-hero-logo-the {\n  padding-left: 0.2rem;\n}\n\n.contact-hero-logo-bobacube {\n  padding-right: 0rem;\n  color: var(--primary);\n}\n\n.contact-hero-logo::before {\n  content: \"\";\n  position: absolute;\n  width: 63%;\n  height: 0.15rem;\n  left: 0;\n  top: 36%;\n  background-color: var(--tertiary);\n}\n\n.contact-card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  border: 0.15rem solid var(--primary);\n  padding: 2rem;\n  border-radius: 0.2rem;\n}\n\n.contact-card-img {\n  width: 7rem;\n  height: 6rem;\n  background-image: url(\"./images/contact.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.contact-card-text-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  font-size: 1.2rem;\n}\n\n.contact-card-address,\n.contact-card-number {\n  color: var(--tertiary);\n  font-weight: 500;\n  font-family: var(--btn-font), sans-serif;\n  font-size: 1.1rem;\n}\n\n.contact-card-address:hover,\n.contact-card-number:hover {\n  cursor: pointer;\n}\n\n.contact-email-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  align-items: center;\n}\n\n.contact-email-btn {\n  appearance: none;\n  transition: 0.5s ease-in-out;\n  border-radius: 2rem;\n  border: 0.15rem solid var(--primary);\n  padding: 1.1rem 1.8rem 1.1rem 1.8rem;\n  box-shadow: inset 0 0 0 0 var(--primary), 0.3rem 0.3rem var(--secondary);\n  font-weight: 600;\n  font-size: 1.2rem;\n  width: max-content;\n}\n\n.contact-email-btn:hover {\n  box-shadow: inset 0 0 0 2rem var(--primary), 0.3rem 0.3rem var(--secondary);\n  color: var(--white);\n}\n\n.contact-email-btn:active {\n  transform: translateX(0.3rem) translateY(0.3rem);\n  box-shadow: inset 0 0 0 2rem var(--primary);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/modern-normalize.css":
/*!**********************************!*\
  !*** ./src/modern-normalize.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./modern-normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/modern-normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/barrel.js":
/*!***********************!*\
  !*** ./src/barrel.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateHome: () => (/* reexport safe */ _base_js__WEBPACK_IMPORTED_MODULE_0__.activateHome),
/* harmony export */   fillButtons: () => (/* reexport safe */ _base_js__WEBPACK_IMPORTED_MODULE_0__.fillButtons),
/* harmony export */   fillContactCard: () => (/* reexport safe */ _pages_contact_js__WEBPACK_IMPORTED_MODULE_3__.fillContactCard),
/* harmony export */   fillContactHero: () => (/* reexport safe */ _pages_contact_js__WEBPACK_IMPORTED_MODULE_3__.fillContactHero),
/* harmony export */   fillEmailBtn: () => (/* reexport safe */ _pages_contact_js__WEBPACK_IMPORTED_MODULE_3__.fillEmailBtn),
/* harmony export */   fillHero: () => (/* reexport safe */ _base_js__WEBPACK_IMPORTED_MODULE_0__.fillHero),
/* harmony export */   fillHome: () => (/* reexport safe */ _pages_home_js__WEBPACK_IMPORTED_MODULE_1__.fillHome),
/* harmony export */   fillHomeOffer: () => (/* reexport safe */ _pages_home_js__WEBPACK_IMPORTED_MODULE_1__.fillHomeOffer),
/* harmony export */   fillMenuCards: () => (/* reexport safe */ _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__.fillMenuCards),
/* harmony export */   fillMenuHero: () => (/* reexport safe */ _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__.fillMenuHero),
/* harmony export */   styleButtons: () => (/* reexport safe */ _base_js__WEBPACK_IMPORTED_MODULE_0__.styleButtons)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./src/base.js");
/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home.js */ "./src/pages/home.js");
/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu.js */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact.js */ "./src/pages/contact.js");






/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateHome: () => (/* binding */ activateHome),
/* harmony export */   fillButtons: () => (/* binding */ fillButtons),
/* harmony export */   fillHero: () => (/* binding */ fillHero),
/* harmony export */   styleButtons: () => (/* binding */ styleButtons)
/* harmony export */ });
/* harmony import */ var _images_bubble_tea_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bubble-tea-logo.png */ "./src/images/bubble-tea-logo.png");



const content = document.querySelector("#content");
const nav = document.querySelector("nav");

function fillHero() {
  const hero = document.createElement("div");
  const heroImageContainer = document.createElement("div");
  const heroImage = document.createElement("img");
  const heroText = document.createElement("div");
  const heroTextFirst = document.createElement("div");
  const heroTextSecond = document.createElement("div");

  heroImage.setAttribute("style", "width: 5.5rem;");
  heroImage.src = _images_bubble_tea_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  heroTextFirst.textContent = "the";
  heroTextSecond.textContent = "boba cube.";

  content.insertBefore(hero, nav);
  heroImageContainer.appendChild(heroImage);
  hero.appendChild(heroImageContainer);
  hero.appendChild(heroText);
  heroText.appendChild(heroTextFirst);
  heroText.appendChild(heroTextSecond);
  hero.classList.toggle("hero");
  heroTextFirst.classList.toggle("hero-text-the");
  heroText.classList.toggle("hero-text");
}

function fillButtons() {
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const contactButton = document.createElement("button");

  homeButton.textContent = "HOME";
  menuButton.textContent = "MENU";
  contactButton.textContent = "CONTACT";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
}

function styleButtons() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((button) => button.classList.remove("button-active"));
      button.classList.add("button-active");
    });
  });
}

function activateHome() {
  const buttons = document.querySelectorAll("button");
  const buttonsArray = Array.from(buttons);

  const homeBtn = buttonsArray.filter((btn) => btn.textContent === "HOME");
  homeBtn[0].classList.add("button-active");
}


/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillContactCard: () => (/* binding */ fillContactCard),
/* harmony export */   fillContactHero: () => (/* binding */ fillContactHero),
/* harmony export */   fillEmailBtn: () => (/* binding */ fillEmailBtn)
/* harmony export */ });
/* harmony import */ var _images_contact_bubbles_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/contact-bubbles.png */ "./src/images/contact-bubbles.png");




const content = document.querySelector("#content");

function fillContactHero() {
  const contactContainer = document.createElement("div");
  const contactHero = document.createElement("div");
  const contactHeroText = document.createElement("div");
  const contactHeroLogo = document.createElement("div");
  const contactHeroLogoThe = document.createElement("div");
  const contactHeroLogoBobaCube = document.createElement("div");
  const contactLogo = document.createElement("img");

  contactHeroText.textContent = "delivers";
  contactHeroLogoThe.textContent = "the";
  contactHeroLogoBobaCube.textContent = "boba cube.";
  contactLogo.src = _images_contact_bubbles_png__WEBPACK_IMPORTED_MODULE_0__;
  contactLogo.setAttribute("style", "width:2.5rem; height:auto;");

  contactHeroLogo.classList.add("contact-hero-logo");
  contactHeroLogoThe.classList.add("contact-hero-logo-the");
  contactHeroLogoBobaCube.classList.add("contact-hero-logo-bobacube");
  contactHero.classList.add("contact-hero");
  contactContainer.classList.add("contact-container");

  contactHeroLogo.appendChild(contactLogo);
  contactHeroLogo.appendChild(contactHeroLogoThe);
  contactHeroLogo.appendChild(contactHeroLogoBobaCube);
  contactHero.appendChild(contactHeroLogo);
  contactHero.appendChild(contactHeroText);
  contactContainer.appendChild(contactHero);
  content.appendChild(contactContainer);
}

function fillContactCard() {
  const contactContainer = document.querySelector(".contact-container");
  const contactCard = document.createElement("div");
  const contactCardTextContainer = document.createElement("div");
  const contactCardImgContainer = document.createElement("div");
  const contactCardTextFirst = document.createElement("div");
  const contactCardTextAddress = document.createElement("div");
  const contactCardTextSecond = document.createElement("div");
  const contactCardTextNumber = document.createElement("div");

  contactCardTextFirst.textContent =
    "Happy to welcome you anytime, except tuesdays!😋";
  contactCardTextAddress.textContent =
    "🧭 221B, Baker Street, London, United Kingdom";
  contactCardTextSecond.textContent =
    "We are too far away? Contact us for free deliveries!";
  contactCardTextNumber.textContent = "📞 +44 4242 828282";

  contactCard.classList.add("contact-card");
  contactCardTextContainer.classList.add("contact-card-text-container");
  contactCardImgContainer.classList.add("contact-card-img");
  contactCardTextAddress.classList.add("contact-card-address");
  contactCardTextNumber.classList.add("contact-card-number");

  contactCardTextContainer.appendChild(contactCardTextFirst);
  contactCardTextContainer.appendChild(contactCardTextAddress);
  contactCardTextContainer.appendChild(contactCardTextSecond);
  contactCardTextContainer.appendChild(contactCardTextNumber);
  contactCard.appendChild(contactCardImgContainer);
  contactCard.appendChild(contactCardTextContainer);
  contactContainer.appendChild(contactCard);
}

function fillEmailBtn() {
  const contactContainer = document.querySelector(".contact-container");
  const emailContainer = document.createElement("div");
  const emailText = document.createElement("div");
  const emailBtn = document.createElement("button");

  emailText.textContent =
    "Or - email us! We will respond to you like a bubble burst!";
  emailBtn.textContent = "🖂 Letters!";

  emailContainer.classList.add("contact-email-container");
  emailText.classList.add("contact-email-text");
  emailBtn.classList.add("contact-email-btn");

  emailContainer.appendChild(emailText);
  emailContainer.appendChild(emailBtn);
  contactContainer.appendChild(emailContainer);
}


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillHome: () => (/* binding */ fillHome),
/* harmony export */   fillHomeOffer: () => (/* binding */ fillHomeOffer)
/* harmony export */ });
/* harmony import */ var _images_boba_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/boba.png */ "./src/images/boba.png");



const content = document.querySelector("#content");

function fillHome() {
  const homeContainer = document.createElement("div");
  const homeHero = document.createElement("div");
  const homeHeroText = document.createElement("div");
  const homeHeroLogo = document.createElement("div");
  const homeHeroLogoThe = document.createElement("div");
  const homeHeroLogoBobaCube = document.createElement("div");
  const homeText = document.createElement("div");
  const bobaIcon = document.createElement("img");
  const homeBtn = document.createElement("button");

  homeHeroText.textContent = "experience";
  homeHeroLogoThe.textContent = "the";
  homeHeroLogoBobaCube.textContent = "boba cube.";
  homeText.textContent =
    "Indulge in the perfect blend of flavors and fun at our cafe. Sip, relax, and let the good times bubble up!";
  bobaIcon.src = _images_boba_png__WEBPACK_IMPORTED_MODULE_0__;
  bobaIcon.setAttribute("style", "width:2rem;");
  homeBtn.textContent = "Book a Bubble!";

  homeHeroLogo.classList.add("home-hero-logo");
  homeHeroLogoThe.classList.add("home-hero-logo-the");
  homeHeroLogoBobaCube.classList.add("home-hero-logo-bobacube");
  homeHero.classList.add("home-hero");
  homeContainer.classList.add("home-container");
  homeText.classList.add("home-text");
  homeBtn.classList.add("home-btn");

  homeHeroLogo.appendChild(homeHeroLogoThe);
  homeHeroLogo.appendChild(homeHeroLogoBobaCube);
  homeHeroLogo.appendChild(bobaIcon);
  homeHero.appendChild(homeHeroLogo);
  homeHero.appendChild(homeHeroText);
  homeContainer.appendChild(homeHero);
  homeContainer.appendChild(homeText);
  homeContainer.appendChild(homeBtn);
  content.appendChild(homeContainer);
}

function fillHomeOffer() {
  const homeContainer = document.querySelector(".home-container");
  const offerCard = document.createElement("div");
  const offerCardText = document.createElement("div");
  const offerCardTextFirst = document.createElement("span");
  const offerCardTextLast = document.createElement("span");
  const offerCardTextTropical = document.createElement("span");
  const offerCardTextBlueberry = document.createElement("span");
  const offerCardTextAnd = document.createElement("span");

  offerCardTextFirst.textContent = "Beat the summer heat! 40% off on";
  offerCardTextTropical.textContent = " Tropical Swish ";
  offerCardTextAnd.textContent = "and";
  offerCardTextBlueberry.textContent = " Blueberry Blast ";
  offerCardTextLast.textContent = "boba cups!";

  offerCardTextTropical.classList.add("tropical");
  offerCardTextBlueberry.classList.add("blueberry");
  offerCardText.classList.add("offer-card-text");
  offerCard.classList.add("offer-card");

  offerCardText.appendChild(offerCardTextFirst);
  offerCardText.appendChild(offerCardTextTropical);
  offerCardText.appendChild(offerCardTextAnd);
  offerCardText.appendChild(offerCardTextBlueberry);
  offerCardText.appendChild(offerCardTextLast);
  offerCard.appendChild(offerCardText);
  homeContainer.appendChild(offerCard);
}


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillMenuCards: () => (/* binding */ fillMenuCards),
/* harmony export */   fillMenuHero: () => (/* binding */ fillMenuHero)
/* harmony export */ });
/* harmony import */ var _images_menu_bubbles_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/menu-bubbles.png */ "./src/images/menu-bubbles.png");



const content = document.querySelector("#content");

function fillMenuHero() {
  const menuContainer = document.createElement("div");
  const menuHero = document.createElement("div");
  const menuHeroText = document.createElement("div");
  const menuHeroLogo = document.createElement("div");
  const menuHeroLogoThe = document.createElement("div");
  const menuHeroLogoBobaCube = document.createElement("div");
  const bobaIcon = document.createElement("img");

  menuHeroText.textContent = "delights";
  menuHeroLogoThe.textContent = "the";
  menuHeroLogoBobaCube.textContent = "boba cube.";
  bobaIcon.src = _images_menu_bubbles_png__WEBPACK_IMPORTED_MODULE_0__;
  bobaIcon.setAttribute("style", "width:2rem; height:auto;");

  menuHeroLogo.classList.add("menu-hero-logo");
  menuHeroLogoThe.classList.add("menu-hero-logo-the");
  menuHeroLogoBobaCube.classList.add("menu-hero-logo-bobacube");
  menuHero.classList.add("menu-hero");
  menuContainer.classList.add("menu-container");

  menuHeroLogo.appendChild(menuHeroLogoThe);
  menuHeroLogo.appendChild(menuHeroLogoBobaCube);
  menuHeroLogo.appendChild(bobaIcon);
  menuHero.appendChild(menuHeroLogo);
  menuHero.appendChild(menuHeroText);
  menuContainer.appendChild(menuHero);
  content.appendChild(menuContainer);
}

function fillMenuCards() {
  const menuContainer = document.querySelector(".menu-container");
  const card1 = document.createElement("div");
  const card2 = document.createElement("div");
  const card3 = document.createElement("div");
  const card4 = document.createElement("div");
  const price1 = document.createElement("div");
  const price2 = document.createElement("div");
  const price3 = document.createElement("div");
  const price4 = document.createElement("div");
  const originalPrice1 = document.createElement("div");
  const discountedPrice1 = document.createElement("div");
  const card5 = document.createElement("div");
  const card6 = document.createElement("div");
  const card7 = document.createElement("div");
  const card8 = document.createElement("div");
  const price5 = document.createElement("div");
  const price6 = document.createElement("div");
  const price7 = document.createElement("div");
  const price8 = document.createElement("div");
  const originalPrice2 = document.createElement("div");
  const discountedPrice2 = document.createElement("div");

  card1.textContent = "Vanilla Velvet";
  price1.textContent = "$3.00";
  card2.textContent = "Strawberry Serenade";
  price2.textContent = "$3.50";
  card3.textContent = "Tropical Swish";
  originalPrice1.textContent = "$3.50";
  discountedPrice1.textContent = "$2.10";
  card4.textContent = "Chocolate Chai";
  price4.textContent = "$3.50";
  card5.textContent = "Coconut Dream";
  price5.textContent = "$3.50";
  card6.textContent = "Blueberry Blast";
  originalPrice2.textContent = "$3.50";
  discountedPrice2.textContent = "$2.10";
  card7.textContent = "Peachy Keen";
  price7.textContent = "$3.99";
  card8.textContent = "Matcha Madness";
  price8.textContent = "$3.99";

  card1.classList.add("menu-card");
  price1.classList.add("menu-price");
  card2.classList.add("menu-card");
  price2.classList.add("menu-price");
  originalPrice1.classList.add("original-price");
  card3.classList.add("menu-card");
  price3.classList.add("menu-price-3");
  card4.classList.add("menu-card");
  price4.classList.add("menu-price");
  card5.classList.add("menu-card");
  price5.classList.add("menu-price");
  card6.classList.add("menu-card");
  price6.classList.add("menu-price-3");
  originalPrice2.classList.add("original-price");
  card7.classList.add("menu-card");
  price7.classList.add("menu-price");
  card8.classList.add("menu-card");
  price8.classList.add("menu-price");

  card1.appendChild(price1);
  menuContainer.appendChild(card1);
  card2.appendChild(price2);
  menuContainer.appendChild(card2);
  price3.appendChild(originalPrice1);
  price3.appendChild(discountedPrice1);
  card3.appendChild(price3);
  menuContainer.appendChild(card3);
  card4.appendChild(price4);
  menuContainer.appendChild(card4);
  card5.appendChild(price5);
  menuContainer.appendChild(card5);
  card6.appendChild(price6);
  price6.appendChild(originalPrice2);
  price6.appendChild(discountedPrice2);
  menuContainer.appendChild(card6);
  card7.appendChild(price7);
  menuContainer.appendChild(card7);
  card8.appendChild(price8);
  menuContainer.appendChild(card8);
}


/***/ }),

/***/ "./src/images/boba.png":
/*!*****************************!*\
  !*** ./src/images/boba.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c68e9c7d3b3c0f8e9f23.png";

/***/ }),

/***/ "./src/images/bubble-tea-img.jpg":
/*!***************************************!*\
  !*** ./src/images/bubble-tea-img.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "055cac6fe3bebb3f87a3.jpg";

/***/ }),

/***/ "./src/images/bubble-tea-logo.png":
/*!****************************************!*\
  !*** ./src/images/bubble-tea-logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "669d50c7c2d705a29550.png";

/***/ }),

/***/ "./src/images/contact-bubbles.png":
/*!****************************************!*\
  !*** ./src/images/contact-bubbles.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c81eaab0e69cf6888d84.png";

/***/ }),

/***/ "./src/images/contact.png":
/*!********************************!*\
  !*** ./src/images/contact.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "98461979ec1206a35d1b.png";

/***/ }),

/***/ "./src/images/menu-bubbles.png":
/*!*************************************!*\
  !*** ./src/images/menu-bubbles.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fe2cf5dd46e8da91ac6.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modern_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modern-normalize.css */ "./src/modern-normalize.css");
/* harmony import */ var _barrel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barrel.js */ "./src/barrel.js");




(0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.fillHero)();
(0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.fillButtons)();
(0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.activateHome)();
(0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.styleButtons)();
(0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.fillHome)();
(0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.fillHomeOffer)();

const nav = document.querySelector("nav");
const navButtons = nav.querySelectorAll("button");
const content = document.querySelector("#content");

const homeBtn = Array.from(navButtons).filter(
  (btn) => btn.textContent === "HOME"
);
const menuBtn = Array.from(navButtons).filter(
  (btn) => btn.textContent === "MENU"
);
const contactBtn = Array.from(navButtons).filter(
  (btn) => btn.textContent === "CONTACT"
);

homeBtn[0].addEventListener("click", () => {
  const homeContainer = document.querySelector(".home-container");
  const menuContainer = document.querySelector(".menu-container");
  const contactContainer = document.querySelector(".contact-container");
  if (document.querySelector(".home-container")) {
    content.removeChild(homeContainer);
  }
  if (document.querySelector(".menu-container")) {
    content.removeChild(menuContainer);
  }
  if (document.querySelector(".contact-container")) {
    content.removeChild(contactContainer);
  }
  (0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.fillHome)();
  (0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.fillHomeOffer)();
});

menuBtn[0].addEventListener("click", () => {
  const homeContainer = document.querySelector(".home-container");
  const menuContainer = document.querySelector(".menu-container");
  const contactContainer = document.querySelector(".contact-container");
  if (document.querySelector(".home-container")) {
    content.removeChild(homeContainer);
  }
  if (document.querySelector(".menu-container")) {
    content.removeChild(menuContainer);
  }
  if (document.querySelector(".contact-container")) {
    content.removeChild(contactContainer);
  }
  (0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.fillMenuHero)();
  (0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.fillMenuCards)();
});

contactBtn[0].addEventListener("click", () => {
  const homeContainer = document.querySelector(".home-container");
  const menuContainer = document.querySelector(".menu-container");
  const contactContainer = document.querySelector(".contact-container");
  if (document.querySelector(".home-container")) {
    content.removeChild(homeContainer);
  }
  if (document.querySelector(".menu-container")) {
    content.removeChild(menuContainer);
  }
  if (document.querySelector(".contact-container")) {
    content.removeChild(contactContainer);
  }
  (0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.fillContactHero)();
  (0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.fillContactCard)();
  (0,_barrel_js__WEBPACK_IMPORTED_MODULE_2__.fillEmailBtn)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxpQ0FBaUMscUJBQXFCLG9CQUFvQix1QkFBdUIseUJBQXlCLHdCQUF3Qix5Q0FBeUMsNENBQTRDLHVDQUF1QyxHQUFHLFVBQVUsdUNBQXVDLGtCQUFrQiw0QkFBNEIsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDhCQUE4QixzQkFBc0IsY0FBYyxpQ0FBaUMsbUNBQW1DLEdBQUcsV0FBVyxrQkFBa0Isd0JBQXdCLGlCQUFpQixzQkFBc0IsR0FBRyxvQkFBb0IsdUJBQXVCLHdCQUF3QixHQUFHLHlFQUF5RSxrQ0FBa0MscUJBQXFCLHNCQUFzQiwwQkFBMEIsR0FBRyxTQUFTLGtCQUFrQiw0QkFBNEIsY0FBYyxnQkFBZ0Isc0JBQXNCLGlDQUFpQyxHQUFHLFlBQVkscUJBQXFCLG1DQUFtQyx1Q0FBdUMsaUNBQWlDLGtCQUFrQixvQkFBb0Isc0JBQXNCLHFCQUFxQixHQUFHLGtCQUFrQixnREFBZ0QsaUNBQWlDLEdBQUcsb0JBQW9CLGdEQUFnRCwwQkFBMEIsaUNBQWlDLEdBQUcsNERBQTRELGtCQUFrQiwyQkFBMkIsd0JBQXdCLGlCQUFpQixjQUFjLHVCQUF1QixzQkFBc0IsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0Isc0JBQXNCLHFCQUFxQixnQkFBZ0IsR0FBRyxxQkFBcUIsdUJBQXVCLGdCQUFnQixrQkFBa0IsNEJBQTRCLHdCQUF3QixzQkFBc0Isc0JBQXNCLEdBQUcsNkJBQTZCLGtCQUFrQix1QkFBdUIsZUFBZSxvQkFBb0IsWUFBWSxhQUFhLHFDQUFxQyxHQUFHLDRCQUE0QixrQkFBa0IsdUJBQXVCLGVBQWUsb0JBQW9CLGFBQWEsYUFBYSxxQ0FBcUMsR0FBRyx5QkFBeUIsdUJBQXVCLHlCQUF5QiwwQkFBMEIsR0FBRyw4QkFBOEIseUJBQXlCLDBCQUEwQixHQUFHLGdCQUFnQixpQkFBaUIsR0FBRyxlQUFlLHFCQUFxQixpQ0FBaUMsd0JBQXdCLHlDQUF5Qyx5Q0FBeUMsNkVBQTZFLHFCQUFxQixzQkFBc0IsR0FBRyxxQkFBcUIsaUZBQWlGLHdCQUF3QixHQUFHLHNCQUFzQixxREFBcUQsaURBQWlELEdBQUcsaUJBQWlCLGtCQUFrQix3QkFBd0Isa0JBQWtCLGlCQUFpQiwwQkFBMEIsdUNBQXVDLHVEQUF1RCw2QkFBNkIsaUNBQWlDLCtCQUErQixHQUFHLHNCQUFzQix3QkFBd0IsaUNBQWlDLGlCQUFpQix1Q0FBdUMsMEJBQTBCLEdBQUcsZUFBZSwyQkFBMkIscUJBQXFCLEdBQUcsZ0JBQWdCLDBCQUEwQixxQkFBcUIsR0FBRyxxQkFBcUIsc0JBQXNCLGNBQWMsR0FBRyxnQ0FBZ0MsdUJBQXVCLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLHNCQUFzQixxQkFBcUIsR0FBRywwQ0FBMEMsa0JBQWtCLHNCQUFzQiwyQkFBMkIsR0FBRyw0QkFBNEIsa0JBQWtCLHVCQUF1QixlQUFlLG9CQUFvQixhQUFhLGFBQWEscUNBQXFDLEdBQUcsa0RBQWtELHVCQUF1QiwwQkFBMEIseUJBQXlCLEdBQUcsNERBQTRELDBCQUEwQix5QkFBeUIsR0FBRyxnQkFBZ0IsZ0JBQWdCLGtCQUFrQixtQ0FBbUMsb0JBQW9CLDBCQUEwQixzQkFBc0IsOENBQThDLHFCQUFxQixpQ0FBaUMsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsaUNBQWlDLHFCQUFxQixvQkFBb0IsOENBQThDLGtCQUFrQixHQUFHLG1CQUFtQixrQkFBa0IseUJBQXlCLGNBQWMsR0FBRyxxQkFBcUIsdUJBQXVCLHFCQUFxQiwyQkFBMkIsR0FBRyw2QkFBNkIsa0JBQWtCLHVCQUF1QixrQ0FBa0MsbUJBQW1CLGdCQUFnQixhQUFhLDhCQUE4QixHQUFHLG1CQUFtQixxQkFBcUIsR0FBRyw0QkFBNEIseUJBQXlCLEdBQUcsaUNBQWlDLHdCQUF3QiwwQkFBMEIsR0FBRyxnQ0FBZ0Msa0JBQWtCLHVCQUF1QixlQUFlLG9CQUFvQixZQUFZLGFBQWEsc0NBQXNDLEdBQUcsbUJBQW1CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGNBQWMseUNBQXlDLGtCQUFrQiwwQkFBMEIsR0FBRyx1QkFBdUIsZ0JBQWdCLGlCQUFpQixvREFBb0QsNkJBQTZCLGlDQUFpQyxHQUFHLGtDQUFrQyxrQkFBa0IsMkJBQTJCLGNBQWMsc0JBQXNCLEdBQUcsa0RBQWtELDJCQUEyQixxQkFBcUIsNkNBQTZDLHNCQUFzQixHQUFHLDhEQUE4RCxvQkFBb0IsR0FBRyw4QkFBOEIsa0JBQWtCLDJCQUEyQixjQUFjLHdCQUF3QixHQUFHLHdCQUF3QixxQkFBcUIsaUNBQWlDLHdCQUF3Qix5Q0FBeUMseUNBQXlDLDZFQUE2RSxxQkFBcUIsc0JBQXNCLHVCQUF1QixHQUFHLDhCQUE4QixnRkFBZ0Ysd0JBQXdCLEdBQUcsK0JBQStCLHFEQUFxRCxnREFBZ0QsR0FBRyxxQkFBcUI7QUFDN3NVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDdlkxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE4RztBQUM5RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLGlHQUFPOzs7O0FBSXdEO0FBQ2hGLE9BQU8saUVBQWUsaUdBQU8sSUFBSSxpR0FBTyxVQUFVLGlHQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2I4RTtBQUNwQjtBQUNJO0FBS2xDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUDZCO0FBQ0k7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pELGtCQUFrQix3REFBYTtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RDJEOztBQUVEOztBQUUxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3REFBYztBQUNsQyxtREFBbUQsWUFBWTs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGeUM7QUFDTjs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2Q0FBTztBQUN4Qiw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RWlEO0FBQ1Y7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFEQUFPO0FBQ3hCLDhDQUE4QyxZQUFZOztBQUUxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDVztBQWFYOztBQUVyQixvREFBUTtBQUNSLHVEQUFXO0FBQ1gsd0RBQVk7QUFDWix3REFBWTtBQUNaLG9EQUFRO0FBQ1IseURBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVE7QUFDVixFQUFFLHlEQUFhO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQVk7QUFDZCxFQUFFLHlEQUFhO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQWU7QUFDakIsRUFBRSwyREFBZTtBQUNqQixFQUFFLHdEQUFZO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2Rlcm4tbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kZXJuLW5vcm1hbGl6ZS5jc3M/YjZiZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYmFycmVsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9iYXNlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbW9kZXJuLW5vcm1hbGl6ZSB2Mi4wLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xuXG4vKlxuRG9jdW1lbnRcbj09PT09PT09XG4qL1xuXG4vKipcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cbiovXG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcblx0LyogSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMykgKi9cblx0Zm9udC1mYW1pbHk6XG5cdFx0c3lzdGVtLXVpLFxuXHRcdCdTZWdvZSBVSScsXG5cdFx0Um9ib3RvLFxuXHRcdEhlbHZldGljYSxcblx0XHRBcmlhbCxcblx0XHRzYW5zLXNlcmlmLFxuXHRcdCdBcHBsZSBDb2xvciBFbW9qaScsXG5cdFx0J1NlZ29lIFVJIEVtb2ppJztcblx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy4gKi9cblx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy4gKi9cblx0LW1vei10YWItc2l6ZTogNDsgLyogMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLiAqL1xuXHR0YWItc2l6ZTogNDsgLyogMyAqL1xufVxuXG4vKlxuU2VjdGlvbnNcbj09PT09PT09XG4qL1xuXG5ib2R5IHtcblx0bWFyZ2luOiAwOyAvKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuICovXG59XG5cbi8qXG5Hcm91cGluZyBjb250ZW50XG49PT09PT09PT09PT09PT09XG4qL1xuXG4vKipcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuKi9cblxuaHIge1xuXHRoZWlnaHQ6IDA7IC8qIDEgKi9cblx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcblRleHQtbGV2ZWwgc2VtYW50aWNzXG49PT09PT09PT09PT09PT09PT09PVxuKi9cblxuLyoqXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnJbdGl0bGVdIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKipcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuXHRmb250LWZhbWlseTpcblx0XHR1aS1tb25vc3BhY2UsXG5cdFx0U0ZNb25vLVJlZ3VsYXIsXG5cdFx0Q29uc29sYXMsXG5cdFx0J0xpYmVyYXRpb24gTW9ubycsXG5cdFx0TWVubG8sXG5cdFx0bW9ub3NwYWNlOyAvKiAxICovXG5cdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG5cdGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuXHRmb250LXNpemU6IDc1JTtcblx0bGluZS1oZWlnaHQ6IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuXHRib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG5cdHRvcDogLTAuNWVtO1xufVxuXG4vKlxuVGFidWxhciBkYXRhXG49PT09PT09PT09PT1cbiovXG5cbi8qKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuKi9cblxudGFibGUge1xuXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkZvcm1zXG49PT09PVxuKi9cblxuLyoqXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG5cdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuXHRtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuKi9cblxuLyogYnV0dG9uLFxuW3R5cGU9J2J1dHRvbiddLFxuW3R5cGU9J3Jlc2V0J10sXG5bdHlwZT0nc3VibWl0J10ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn0gKi9cblxuLyoqXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuKi9cblxuOjotbW96LWZvY3VzLWlubmVyIHtcblx0Ym9yZGVyLXN0eWxlOiBub25lO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4vKipcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG5cdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuXHRib3gtc2hhZG93OiBub25lO1xufVxuXG4vKipcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5sZWdlbmQge1xuXHRwYWRkaW5nOiAwO1xufVxuXG4vKipcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG5cdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkludGVyYWN0aXZlXG49PT09PT09PT09PVxuKi9cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG5cdGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZGVybi1ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhGQUE4Rjs7QUFFOUY7OztDQUdDOztBQUVEOztDQUVDOztBQUVEOzs7Q0FHQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxzSEFBc0g7Q0FDdEg7Ozs7Ozs7O2tCQVFpQjtDQUNqQixpQkFBaUIsRUFBRSxnREFBZ0Q7Q0FDbkUsOEJBQThCLEVBQUUsMEVBQTBFO0NBQzFHLGdCQUFnQixFQUFFLG1EQUFtRDtDQUNyRSxXQUFXLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7O0NBR0M7O0FBRUQ7Q0FDQyxTQUFTLEVBQUUsdUNBQXVDO0FBQ25EOztBQUVBOzs7Q0FHQzs7QUFFRDs7O0NBR0M7O0FBRUQ7Q0FDQyxTQUFTLEVBQUUsTUFBTTtDQUNqQixjQUFjLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTs7O0NBR0M7O0FBRUQ7O0NBRUM7O0FBRUQ7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBRUE7O0NBRUM7O0FBRUQ7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBOzs7Q0FHQzs7QUFFRDs7OztDQUlDOzs7Ozs7V0FNVSxFQUFFLE1BQU07Q0FDbEIsY0FBYyxFQUFFLE1BQU07QUFDdkI7O0FBRUE7O0NBRUM7O0FBRUQ7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUM7O0FBRUQ7O0NBRUMsY0FBYztDQUNkLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTs7O0NBR0M7O0FBRUQ7OztDQUdDOztBQUVEO0NBQ0MsY0FBYyxFQUFFLE1BQU07Q0FDdEIscUJBQXFCLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7O0NBR0M7O0FBRUQ7OztDQUdDOztBQUVEOzs7OztDQUtDLG9CQUFvQixFQUFFLE1BQU07Q0FDNUIsZUFBZSxFQUFFLE1BQU07Q0FDdkIsaUJBQWlCLEVBQUUsTUFBTTtDQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNsQjs7QUFFQTs7Q0FFQzs7QUFFRDs7Q0FFQyxvQkFBb0I7QUFDckI7O0FBRUE7O0NBRUM7O0FBRUQ7Ozs7O0dBS0c7O0FBRUg7O0NBRUM7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYOztBQUVBOztDQUVDOztBQUVEO0NBQ0MsOEJBQThCO0FBQy9COztBQUVBOzs7Q0FHQzs7QUFFRDtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLFVBQVU7QUFDWDs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTs7Q0FFQzs7QUFFRDs7Q0FFQyxZQUFZO0FBQ2I7O0FBRUE7OztDQUdDOztBQUVEO0NBQ0MsNkJBQTZCLEVBQUUsTUFBTTtDQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztDQUVDOztBQUVEO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBOzs7Q0FHQzs7QUFFRDtDQUNDLDBCQUEwQixFQUFFLE1BQU07Q0FDbEMsYUFBYSxFQUFFLE1BQU07QUFDdEI7O0FBRUE7OztDQUdDOztBQUVEOztDQUVDOztBQUVEO0NBQ0Msa0JBQWtCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBtb2Rlcm4tbm9ybWFsaXplIHYyLjAuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplICovXFxuXFxuLypcXG5Eb2N1bWVudFxcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5Vc2UgYSBiZXR0ZXIgYm94IG1vZGVsIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcblxcdC8qIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpICovXFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLFxcblxcdFxcdCdTZWdvZSBVSScsXFxuXFx0XFx0Um9ib3RvLFxcblxcdFxcdEhlbHZldGljYSxcXG5cXHRcXHRBcmlhbCxcXG5cXHRcXHRzYW5zLXNlcmlmLFxcblxcdFxcdCdBcHBsZSBDb2xvciBFbW9qaScsXFxuXFx0XFx0J1NlZ29lIFVJIEVtb2ppJztcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLiAqL1xcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuICovXFxuXFx0LW1vei10YWItc2l6ZTogNDsgLyogMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLiAqL1xcblxcdHRhYi1zaXplOiA0OyAvKiAzICovXFxufVxcblxcbi8qXFxuU2VjdGlvbnNcXG49PT09PT09PVxcbiovXFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwOyAvKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuICovXFxufVxcblxcbi8qXFxuR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4qL1xcblxcbmhyIHtcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbjIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHR1aS1tb25vc3BhY2UsXFxuXFx0XFx0U0ZNb25vLVJlZ3VsYXIsXFxuXFx0XFx0Q29uc29sYXMsXFxuXFx0XFx0J0xpYmVyYXRpb24gTW9ubycsXFxuXFx0XFx0TWVubG8sXFxuXFx0XFx0bW9ub3NwYWNlOyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG5cXHRmb250LXNpemU6IDc1JTtcXG5cXHRsaW5lLWhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcblxcdGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG5cXHR0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG5UYWJ1bGFyIGRhdGFcXG49PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXG5cXG50YWJsZSB7XFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiovXFxuXFxuLyogYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn0gKi9cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5JbnRlcmFjdGl2ZVxcbj09PT09PT09PT09XFxuKi9cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2J1YmJsZS10ZWEtaW1nLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NvbnRhY3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXdoaXRlOiAjZmZmZmZlO1xuICAtLXRleHQ6ICMyYjJjMzQ7XG4gIC0tcHJpbWFyeTogIzYyNDZlYTtcbiAgLS1zZWNvbmRhcnk6ICNkMWQxZTk7XG4gIC0tdGVydGlhcnk6ICNlNDU4NTg7XG4gIC0tbG9nby1mb250OiBcIlJvd2RpZXNcIiwgc2Fucy1zZXJpZjtcbiAgLS1idG4tZm9udDogXCJVYnVudHUgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IGNhbGMoNTB2dyArIDIwcmVtKTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGdhcDogMnJlbTtcbiAgcGFkZGluZzogMnJlbSA2cmVtIDJyZW0gNnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uaGVybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMHJlbTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5oZXJvLXRleHQtdGhlIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBwYWRkaW5nLXRvcDogMS4ycmVtO1xufVxuXG4uaGVyby10ZXh0LFxuLmhvbWUtaGVyby1sb2dvLFxuLm1lbnUtaGVyby1sb2dvLFxuLmNvbnRhY3QtaGVyby1sb2dvIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWxvZ28tZm9udCk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDhyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJ0bi1mb250KTtcbn1cblxuYnV0dG9uIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0td2hpdGUpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5idXR0b246aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnV0dG9uLWFjdGl2ZSB7XG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmhvbWUtY29udGFpbmVyLFxuLm1lbnUtY29udGFpbmVyLFxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQwcmVtO1xuICBnYXA6IDZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi5ob21lLWhlcm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ob21lLWhlcm8tbG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDByZW07XG59XG5cbi5ob21lLWhlcm8tbG9nbzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDAuMTVyZW07XG4gIGxlZnQ6IDA7XG4gIHRvcDogNjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmhvbWUtaGVyby1sb2dvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAwLjE1cmVtO1xuICByaWdodDogMDtcbiAgdG9wOiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uaG9tZS1oZXJvLWxvZ28tdGhlIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xufVxuXG4uaG9tZS1oZXJvLWxvZ28tYm9iYWN1YmUge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xufVxuXG4uaG9tZS10ZXh0IHtcbiAgd2lkdGg6IDMwcmVtO1xufVxuXG4uaG9tZS1idG4ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDEuMXJlbSAxLjhyZW0gMS4xcmVtIDEuOHJlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCB2YXIoLS1wcmltYXJ5KSwgMC4zcmVtIDAuM3JlbSB2YXIoLS1zZWNvbmRhcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmhvbWUtYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNHJlbSAwIDAgdmFyKC0tcHJpbWFyeSksIDAuM3JlbSAwLjNyZW0gdmFyKC0tc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLmhvbWUtYnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjNyZW0pIHRyYW5zbGF0ZVkoMC4zcmVtKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtNHJlbSAwIDAgdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5vZmZlci1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgd2lkdGg6IDQwcmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbn1cblxuLm9mZmVyLWNhcmQtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAzLjZyZW07XG4gIHBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDNyZW07XG4gIHdpZHRoOiAyNnJlbTtcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuXG4udHJvcGljYWwge1xuICBjb2xvcjogdmFyKC0tdGVydGlhcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uYmx1ZWJlcnJ5IHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWVudS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZ2FwOiAycmVtO1xufVxuXG4ubWVudS1oZXJvLFxuLmNvbnRhY3QtaGVybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWVudS1oZXJvLWxvZ28sXG4uY29udGFjdC1oZXJvLWxvZ28ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcbn1cblxuLm1lbnUtaGVyby1sb2dvOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYzJTtcbiAgaGVpZ2h0OiAwLjE1cmVtO1xuICByaWdodDogMDtcbiAgdG9wOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4ubWVudS1oZXJvLWxvZ28tdGhlLFxuLmNvbnRhY3QtaGVyby1sb2dvLXRoZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgcGFkZGluZy1yaWdodDogMC40cmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLm1lbnUtaGVyby1sb2dvLWJvYmFjdWJlLFxuLmNvbnRhY3QtaGVyby1sb2dvLWJvYmFjdWJlIHtcbiAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLm1lbnUtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgYm9yZGVyLXRvcDogc29saWQgMC4xNXJlbSB2YXIoLS10ZXJ0aWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tZW51LWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJjYWNhO1xufVxuXG4ubWVudS1wcmljZSxcbi5tZW51LXByaWNlLTMge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAwLjE1cmVtIHZhcigtLXByaW1hcnkpO1xuICB3aWR0aDogNy41cmVtO1xufVxuXG4ubWVudS1wcmljZS0zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGdhcDogMXJlbTtcbn1cblxuLm9yaWdpbmFsLXByaWNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGVydGlhcnkpO1xufVxuXG4ub3JpZ2luYWwtcHJpY2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dCk7XG4gIGhlaWdodDogMC4xcmVtO1xuICB3aWR0aDogM3JlbTtcbiAgdG9wOiA1NSU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE2MGRlZyk7XG59XG5cbi5jb250YWN0LWhlcm8ge1xuICBhbGlnbi1pdGVtczogZW5kO1xufVxuXG4uY29udGFjdC1oZXJvLWxvZ28tdGhlIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG59XG5cbi5jb250YWN0LWhlcm8tbG9nby1ib2JhY3ViZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDByZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLmNvbnRhY3QtaGVyby1sb2dvOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MyU7XG4gIGhlaWdodDogMC4xNXJlbTtcbiAgbGVmdDogMDtcbiAgdG9wOiAzNiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcbn1cblxuLmNvbnRhY3QtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xufVxuXG4uY29udGFjdC1jYXJkLWltZyB7XG4gIHdpZHRoOiA3cmVtO1xuICBoZWlnaHQ6IDZyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uY29udGFjdC1jYXJkLXRleHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmNvbnRhY3QtY2FyZC1hZGRyZXNzLFxuLmNvbnRhY3QtY2FyZC1udW1iZXIge1xuICBjb2xvcjogdmFyKC0tdGVydGlhcnkpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogdmFyKC0tYnRuLWZvbnQpLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmNvbnRhY3QtY2FyZC1hZGRyZXNzOmhvdmVyLFxuLmNvbnRhY3QtY2FyZC1udW1iZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250YWN0LWVtYWlsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhY3QtZW1haWwtYnRuIHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICBwYWRkaW5nOiAxLjFyZW0gMS44cmVtIDEuMXJlbSAxLjhyZW07XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgdmFyKC0tcHJpbWFyeSksIDAuM3JlbSAwLjNyZW0gdmFyKC0tc2Vjb25kYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLmNvbnRhY3QtZW1haWwtYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnJlbSB2YXIoLS1wcmltYXJ5KSwgMC4zcmVtIDAuM3JlbSB2YXIoLS1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uY29udGFjdC1lbWFpbC1idG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuM3JlbSkgdHJhbnNsYXRlWSgwLjNyZW0pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycmVtIHZhcigtLXByaW1hcnkpO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JB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QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlEQUE2QztFQUM3Qyx3QkFBd0I7RUFDeEIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLG9DQUFvQztFQUNwQyx3RUFBd0U7RUFDeEUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyRUFBMkU7RUFDM0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELDJDQUEyQztBQUM3Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXdoaXRlOiAjZmZmZmZlO1xcbiAgLS10ZXh0OiAjMmIyYzM0O1xcbiAgLS1wcmltYXJ5OiAjNjI0NmVhO1xcbiAgLS1zZWNvbmRhcnk6ICNkMWQxZTk7XFxuICAtLXRlcnRpYXJ5OiAjZTQ1ODU4O1xcbiAgLS1sb2dvLWZvbnQ6IFxcXCJSb3dkaWVzXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tYnRuLWZvbnQ6IFxcXCJVYnVudHUgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogXFxcIkRvc2lzXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogY2FsYyg1MHZ3ICsgMjByZW0pO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBnYXA6IDJyZW07XFxuICBwYWRkaW5nOiAycmVtIDZyZW0gMnJlbSA2cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uaGVybyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uaGVyby10ZXh0LXRoZSB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBwYWRkaW5nLXRvcDogMS4ycmVtO1xcbn1cXG5cXG4uaGVyby10ZXh0LFxcbi5ob21lLWhlcm8tbG9nbyxcXG4ubWVudS1oZXJvLWxvZ28sXFxuLmNvbnRhY3QtaGVyby1sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1sb2dvLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA4cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1idG4tZm9udCk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5idXR0b24tYWN0aXZlIHtcXG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaG9tZS1jb250YWluZXIsXFxuLm1lbnUtY29udGFpbmVyLFxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNDByZW07XFxuICBnYXA6IDZyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLmhvbWUtaGVybyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhvbWUtaGVyby1sb2dvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDByZW07XFxufVxcblxcbi5ob21lLWhlcm8tbG9nbzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMC4xNXJlbTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDYwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uaG9tZS1oZXJvLWxvZ286OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMC4xNXJlbTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLmhvbWUtaGVyby1sb2dvLXRoZSB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLmhvbWUtaGVyby1sb2dvLWJvYmFjdWJlIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xcbn1cXG5cXG4uaG9tZS10ZXh0IHtcXG4gIHdpZHRoOiAzMHJlbTtcXG59XFxuXFxuLmhvbWUtYnRuIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gIHBhZGRpbmc6IDEuMXJlbSAxLjhyZW0gMS4xcmVtIDEuOHJlbTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgdmFyKC0tcHJpbWFyeSksIDAuM3JlbSAwLjNyZW0gdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmhvbWUtYnRuOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTRyZW0gMCAwIHZhcigtLXByaW1hcnkpLCAwLjNyZW0gMC4zcmVtIHZhcigtLXNlY29uZGFyeSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uaG9tZS1idG46YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjNyZW0pIHRyYW5zbGF0ZVkoMC4zcmVtKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTRyZW0gMCAwIHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4ub2ZmZXItY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTByZW07XFxuICB3aWR0aDogNDByZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL2J1YmJsZS10ZWEtaW1nLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XFxufVxcblxcbi5vZmZlci1jYXJkLXRleHQge1xcbiAgbWFyZ2luLWxlZnQ6IDMuNnJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDNyZW07XFxuICB3aWR0aDogMjZyZW07XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0td2hpdGUpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4udHJvcGljYWwge1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5ibHVlYmVycnkge1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1lbnUtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4ubWVudS1oZXJvLFxcbi5jb250YWN0LWhlcm8ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1lbnUtaGVyby1sb2dvLFxcbi5jb250YWN0LWhlcm8tbG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbn1cXG5cXG4ubWVudS1oZXJvLWxvZ286OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDYzJTtcXG4gIGhlaWdodDogMC4xNXJlbTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAzMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLm1lbnUtaGVyby1sb2dvLXRoZSxcXG4uY29udGFjdC1oZXJvLWxvZ28tdGhlIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNHJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubWVudS1oZXJvLWxvZ28tYm9iYWN1YmUsXFxuLmNvbnRhY3QtaGVyby1sb2dvLWJvYmFjdWJlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMnJlbTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubWVudS1jYXJkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYm9yZGVyLXRvcDogc29saWQgMC4xNXJlbSB2YXIoLS10ZXJ0aWFyeSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1lbnUtY2FyZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJjYWNhO1xcbn1cXG5cXG4ubWVudS1wcmljZSxcXG4ubWVudS1wcmljZS0zIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBib3JkZXItbGVmdDogc29saWQgMC4xNXJlbSB2YXIoLS1wcmltYXJ5KTtcXG4gIHdpZHRoOiA3LjVyZW07XFxufVxcblxcbi5tZW51LXByaWNlLTMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ub3JpZ2luYWwtcHJpY2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxufVxcblxcbi5vcmlnaW5hbC1wcmljZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dCk7XFxuICBoZWlnaHQ6IDAuMXJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgdG9wOiA1NSU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNjBkZWcpO1xcbn1cXG5cXG4uY29udGFjdC1oZXJvIHtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5jb250YWN0LWhlcm8tbG9nby10aGUge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XFxufVxcblxcbi5jb250YWN0LWhlcm8tbG9nby1ib2JhY3ViZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwcmVtO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uY29udGFjdC1oZXJvLWxvZ286OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA2MyU7XFxuICBoZWlnaHQ6IDAuMTVyZW07XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAzNiU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxufVxcblxcbi5jb250YWN0LWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbi5jb250YWN0LWNhcmQtaW1nIHtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgaGVpZ2h0OiA2cmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9jb250YWN0LnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZC10ZXh0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY29udGFjdC1jYXJkLWFkZHJlc3MsXFxuLmNvbnRhY3QtY2FyZC1udW1iZXIge1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LWZhbWlseTogdmFyKC0tYnRuLWZvbnQpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5jb250YWN0LWNhcmQtYWRkcmVzczpob3ZlcixcXG4uY29udGFjdC1jYXJkLW51bWJlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWN0LWVtYWlsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0LWVtYWlsLWJ0biB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICBwYWRkaW5nOiAxLjFyZW0gMS44cmVtIDEuMXJlbSAxLjhyZW07XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHZhcigtLXByaW1hcnkpLCAwLjNyZW0gMC4zcmVtIHZhcigtLXNlY29uZGFyeSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxufVxcblxcbi5jb250YWN0LWVtYWlsLWJ0bjpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycmVtIHZhcigtLXByaW1hcnkpLCAwLjNyZW0gMC4zcmVtIHZhcigtLXNlY29uZGFyeSk7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uY29udGFjdC1lbWFpbC1idG46YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjNyZW0pIHRyYW5zbGF0ZVkoMC4zcmVtKTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJyZW0gdmFyKC0tcHJpbWFyeSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGVybi1ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IHsgZmlsbEhlcm8sIGZpbGxCdXR0b25zLCBzdHlsZUJ1dHRvbnMsIGFjdGl2YXRlSG9tZSB9IGZyb20gXCIuL2Jhc2UuanNcIjtcbmV4cG9ydCB7IGZpbGxIb21lLCBmaWxsSG9tZU9mZmVyIH0gZnJvbSBcIi4vcGFnZXMvaG9tZS5qc1wiO1xuZXhwb3J0IHsgZmlsbE1lbnVDYXJkcywgZmlsbE1lbnVIZXJvIH0gZnJvbSBcIi4vcGFnZXMvbWVudS5qc1wiO1xuZXhwb3J0IHtcbiAgZmlsbENvbnRhY3RIZXJvLFxuICBmaWxsQ29udGFjdENhcmQsXG4gIGZpbGxFbWFpbEJ0bixcbn0gZnJvbSBcIi4vcGFnZXMvY29udGFjdC5qc1wiO1xuIiwiaW1wb3J0IGxvZ29CdWJibGVUZWEgZnJvbSBcIi4vaW1hZ2VzL2J1YmJsZS10ZWEtbG9nby5wbmdcIjtcbmV4cG9ydCB7IGZpbGxIZXJvLCBmaWxsQnV0dG9ucywgc3R5bGVCdXR0b25zLCBhY3RpdmF0ZUhvbWUgfTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5cbmZ1bmN0aW9uIGZpbGxIZXJvKCkge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVyb0ltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVyb0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZXJvVGV4dEZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVyb1RleHRTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGhlcm9JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOiA1LjVyZW07XCIpO1xuICBoZXJvSW1hZ2Uuc3JjID0gbG9nb0J1YmJsZVRlYTtcbiAgaGVyb1RleHRGaXJzdC50ZXh0Q29udGVudCA9IFwidGhlXCI7XG4gIGhlcm9UZXh0U2Vjb25kLnRleHRDb250ZW50ID0gXCJib2JhIGN1YmUuXCI7XG5cbiAgY29udGVudC5pbnNlcnRCZWZvcmUoaGVybywgbmF2KTtcbiAgaGVyb0ltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm9JbWFnZSk7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb0ltYWdlQ29udGFpbmVyKTtcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XG4gIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlcm9UZXh0Rmlyc3QpO1xuICBoZXJvVGV4dC5hcHBlbmRDaGlsZChoZXJvVGV4dFNlY29uZCk7XG4gIGhlcm8uY2xhc3NMaXN0LnRvZ2dsZShcImhlcm9cIik7XG4gIGhlcm9UZXh0Rmlyc3QuY2xhc3NMaXN0LnRvZ2dsZShcImhlcm8tdGV4dC10aGVcIik7XG4gIGhlcm9UZXh0LmNsYXNzTGlzdC50b2dnbGUoXCJoZXJvLXRleHRcIik7XG59XG5cbmZ1bmN0aW9uIGZpbGxCdXR0b25zKCkge1xuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDT05UQUNUXCI7XG5cbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVCdXR0b25zKCkge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uLWFjdGl2ZVwiKSk7XG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1hY3RpdmVcIik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUhvbWUoKSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuICBjb25zdCBidXR0b25zQXJyYXkgPSBBcnJheS5mcm9tKGJ1dHRvbnMpO1xuXG4gIGNvbnN0IGhvbWVCdG4gPSBidXR0b25zQXJyYXkuZmlsdGVyKChidG4pID0+IGJ0bi50ZXh0Q29udGVudCA9PT0gXCJIT01FXCIpO1xuICBob21lQnRuWzBdLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tYWN0aXZlXCIpO1xufVxuIiwiaW1wb3J0IGNvbnRhY3RIZXJvSW1nIGZyb20gXCIuLi9pbWFnZXMvY29udGFjdC1idWJibGVzLnBuZ1wiO1xuXG5leHBvcnQgeyBmaWxsQ29udGFjdEhlcm8sIGZpbGxDb250YWN0Q2FyZCwgZmlsbEVtYWlsQnRuIH07XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGZpbGxDb250YWN0SGVybygpIHtcbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhY3RIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdEhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdEhlcm9Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdEhlcm9Mb2dvVGhlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdEhlcm9Mb2dvQm9iYUN1YmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgY29udGFjdEhlcm9UZXh0LnRleHRDb250ZW50ID0gXCJkZWxpdmVyc1wiO1xuICBjb250YWN0SGVyb0xvZ29UaGUudGV4dENvbnRlbnQgPSBcInRoZVwiO1xuICBjb250YWN0SGVyb0xvZ29Cb2JhQ3ViZS50ZXh0Q29udGVudCA9IFwiYm9iYSBjdWJlLlwiO1xuICBjb250YWN0TG9nby5zcmMgPSBjb250YWN0SGVyb0ltZztcbiAgY29udGFjdExvZ28uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDoyLjVyZW07IGhlaWdodDphdXRvO1wiKTtcblxuICBjb250YWN0SGVyb0xvZ28uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaGVyby1sb2dvXCIpO1xuICBjb250YWN0SGVyb0xvZ29UaGUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaGVyby1sb2dvLXRoZVwiKTtcbiAgY29udGFjdEhlcm9Mb2dvQm9iYUN1YmUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaGVyby1sb2dvLWJvYmFjdWJlXCIpO1xuICBjb250YWN0SGVyby5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1oZXJvXCIpO1xuICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRhaW5lclwiKTtcblxuICBjb250YWN0SGVyb0xvZ28uYXBwZW5kQ2hpbGQoY29udGFjdExvZ28pO1xuICBjb250YWN0SGVyb0xvZ28uYXBwZW5kQ2hpbGQoY29udGFjdEhlcm9Mb2dvVGhlKTtcbiAgY29udGFjdEhlcm9Mb2dvLmFwcGVuZENoaWxkKGNvbnRhY3RIZXJvTG9nb0JvYmFDdWJlKTtcbiAgY29udGFjdEhlcm8uYXBwZW5kQ2hpbGQoY29udGFjdEhlcm9Mb2dvKTtcbiAgY29udGFjdEhlcm8uYXBwZW5kQ2hpbGQoY29udGFjdEhlcm9UZXh0KTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SGVybyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGZpbGxDb250YWN0Q2FyZCgpIHtcbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1jb250YWluZXJcIik7XG4gIGNvbnN0IGNvbnRhY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdENhcmRUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdENhcmRJbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0Q2FyZFRleHRGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhY3RDYXJkVGV4dEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0Q2FyZFRleHRTZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0Q2FyZFRleHROdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnRhY3RDYXJkVGV4dEZpcnN0LnRleHRDb250ZW50ID1cbiAgICBcIkhhcHB5IHRvIHdlbGNvbWUgeW91IGFueXRpbWUsIGV4Y2VwdCB0dWVzZGF5cyHwn5iLXCI7XG4gIGNvbnRhY3RDYXJkVGV4dEFkZHJlc3MudGV4dENvbnRlbnQgPVxuICAgIFwi8J+nrSAyMjFCLCBCYWtlciBTdHJlZXQsIExvbmRvbiwgVW5pdGVkIEtpbmdkb21cIjtcbiAgY29udGFjdENhcmRUZXh0U2Vjb25kLnRleHRDb250ZW50ID1cbiAgICBcIldlIGFyZSB0b28gZmFyIGF3YXk/IENvbnRhY3QgdXMgZm9yIGZyZWUgZGVsaXZlcmllcyFcIjtcbiAgY29udGFjdENhcmRUZXh0TnVtYmVyLnRleHRDb250ZW50ID0gXCLwn5OeICs0NCA0MjQyIDgyODI4MlwiO1xuXG4gIGNvbnRhY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNhcmRcIik7XG4gIGNvbnRhY3RDYXJkVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jYXJkLXRleHQtY29udGFpbmVyXCIpO1xuICBjb250YWN0Q2FyZEltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jYXJkLWltZ1wiKTtcbiAgY29udGFjdENhcmRUZXh0QWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jYXJkLWFkZHJlc3NcIik7XG4gIGNvbnRhY3RDYXJkVGV4dE51bWJlci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jYXJkLW51bWJlclwiKTtcblxuICBjb250YWN0Q2FyZFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENhcmRUZXh0Rmlyc3QpO1xuICBjb250YWN0Q2FyZFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENhcmRUZXh0QWRkcmVzcyk7XG4gIGNvbnRhY3RDYXJkVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q2FyZFRleHRTZWNvbmQpO1xuICBjb250YWN0Q2FyZFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENhcmRUZXh0TnVtYmVyKTtcbiAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdENhcmRJbWdDb250YWluZXIpO1xuICBjb250YWN0Q2FyZC5hcHBlbmRDaGlsZChjb250YWN0Q2FyZFRleHRDb250YWluZXIpO1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkKTtcbn1cblxuZnVuY3Rpb24gZmlsbEVtYWlsQnRuKCkge1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgZW1haWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBlbWFpbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBlbWFpbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZW1haWxUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIk9yIC0gZW1haWwgdXMhIFdlIHdpbGwgcmVzcG9uZCB0byB5b3UgbGlrZSBhIGJ1YmJsZSBidXJzdCFcIjtcbiAgZW1haWxCdG4udGV4dENvbnRlbnQgPSBcIvCfloIgTGV0dGVycyFcIjtcblxuICBlbWFpbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1lbWFpbC1jb250YWluZXJcIik7XG4gIGVtYWlsVGV4dC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1lbWFpbC10ZXh0XCIpO1xuICBlbWFpbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1lbWFpbC1idG5cIik7XG5cbiAgZW1haWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxUZXh0KTtcbiAgZW1haWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxCdG4pO1xuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsQ29udGFpbmVyKTtcbn1cbiIsImltcG9ydCBib2JhSW1nIGZyb20gXCIuLi9pbWFnZXMvYm9iYS5wbmdcIjtcbmV4cG9ydCB7IGZpbGxIb21lLCBmaWxsSG9tZU9mZmVyIH07XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGZpbGxIb21lKCkge1xuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZUhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob21lSGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob21lSGVyb0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob21lSGVyb0xvZ29UaGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob21lSGVyb0xvZ29Cb2JhQ3ViZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYm9iYUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBob21lSGVyb1RleHQudGV4dENvbnRlbnQgPSBcImV4cGVyaWVuY2VcIjtcbiAgaG9tZUhlcm9Mb2dvVGhlLnRleHRDb250ZW50ID0gXCJ0aGVcIjtcbiAgaG9tZUhlcm9Mb2dvQm9iYUN1YmUudGV4dENvbnRlbnQgPSBcImJvYmEgY3ViZS5cIjtcbiAgaG9tZVRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiSW5kdWxnZSBpbiB0aGUgcGVyZmVjdCBibGVuZCBvZiBmbGF2b3JzIGFuZCBmdW4gYXQgb3VyIGNhZmUuIFNpcCwgcmVsYXgsIGFuZCBsZXQgdGhlIGdvb2QgdGltZXMgYnViYmxlIHVwIVwiO1xuICBib2JhSWNvbi5zcmMgPSBib2JhSW1nO1xuICBib2JhSWNvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOjJyZW07XCIpO1xuICBob21lQnRuLnRleHRDb250ZW50ID0gXCJCb29rIGEgQnViYmxlIVwiO1xuXG4gIGhvbWVIZXJvTG9nby5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZXJvLWxvZ29cIik7XG4gIGhvbWVIZXJvTG9nb1RoZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZXJvLWxvZ28tdGhlXCIpO1xuICBob21lSGVyb0xvZ29Cb2JhQ3ViZS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZXJvLWxvZ28tYm9iYWN1YmVcIik7XG4gIGhvbWVIZXJvLmNsYXNzTGlzdC5hZGQoXCJob21lLWhlcm9cIik7XG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWUtY29udGFpbmVyXCIpO1xuICBob21lVGV4dC5jbGFzc0xpc3QuYWRkKFwiaG9tZS10ZXh0XCIpO1xuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJob21lLWJ0blwiKTtcblxuICBob21lSGVyb0xvZ28uYXBwZW5kQ2hpbGQoaG9tZUhlcm9Mb2dvVGhlKTtcbiAgaG9tZUhlcm9Mb2dvLmFwcGVuZENoaWxkKGhvbWVIZXJvTG9nb0JvYmFDdWJlKTtcbiAgaG9tZUhlcm9Mb2dvLmFwcGVuZENoaWxkKGJvYmFJY29uKTtcbiAgaG9tZUhlcm8uYXBwZW5kQ2hpbGQoaG9tZUhlcm9Mb2dvKTtcbiAgaG9tZUhlcm8uYXBwZW5kQ2hpbGQoaG9tZUhlcm9UZXh0KTtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lSGVybyk7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVRleHQpO1xuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBmaWxsSG9tZU9mZmVyKCkge1xuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWNvbnRhaW5lclwiKTtcbiAgY29uc3Qgb2ZmZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgb2ZmZXJDYXJkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG9mZmVyQ2FyZFRleHRGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBvZmZlckNhcmRUZXh0TGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBvZmZlckNhcmRUZXh0VHJvcGljYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3Qgb2ZmZXJDYXJkVGV4dEJsdWViZXJyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb25zdCBvZmZlckNhcmRUZXh0QW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgb2ZmZXJDYXJkVGV4dEZpcnN0LnRleHRDb250ZW50ID0gXCJCZWF0IHRoZSBzdW1tZXIgaGVhdCEgNDAlIG9mZiBvblwiO1xuICBvZmZlckNhcmRUZXh0VHJvcGljYWwudGV4dENvbnRlbnQgPSBcIiBUcm9waWNhbCBTd2lzaCBcIjtcbiAgb2ZmZXJDYXJkVGV4dEFuZC50ZXh0Q29udGVudCA9IFwiYW5kXCI7XG4gIG9mZmVyQ2FyZFRleHRCbHVlYmVycnkudGV4dENvbnRlbnQgPSBcIiBCbHVlYmVycnkgQmxhc3QgXCI7XG4gIG9mZmVyQ2FyZFRleHRMYXN0LnRleHRDb250ZW50ID0gXCJib2JhIGN1cHMhXCI7XG5cbiAgb2ZmZXJDYXJkVGV4dFRyb3BpY2FsLmNsYXNzTGlzdC5hZGQoXCJ0cm9waWNhbFwiKTtcbiAgb2ZmZXJDYXJkVGV4dEJsdWViZXJyeS5jbGFzc0xpc3QuYWRkKFwiYmx1ZWJlcnJ5XCIpO1xuICBvZmZlckNhcmRUZXh0LmNsYXNzTGlzdC5hZGQoXCJvZmZlci1jYXJkLXRleHRcIik7XG4gIG9mZmVyQ2FyZC5jbGFzc0xpc3QuYWRkKFwib2ZmZXItY2FyZFwiKTtcblxuICBvZmZlckNhcmRUZXh0LmFwcGVuZENoaWxkKG9mZmVyQ2FyZFRleHRGaXJzdCk7XG4gIG9mZmVyQ2FyZFRleHQuYXBwZW5kQ2hpbGQob2ZmZXJDYXJkVGV4dFRyb3BpY2FsKTtcbiAgb2ZmZXJDYXJkVGV4dC5hcHBlbmRDaGlsZChvZmZlckNhcmRUZXh0QW5kKTtcbiAgb2ZmZXJDYXJkVGV4dC5hcHBlbmRDaGlsZChvZmZlckNhcmRUZXh0Qmx1ZWJlcnJ5KTtcbiAgb2ZmZXJDYXJkVGV4dC5hcHBlbmRDaGlsZChvZmZlckNhcmRUZXh0TGFzdCk7XG4gIG9mZmVyQ2FyZC5hcHBlbmRDaGlsZChvZmZlckNhcmRUZXh0KTtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChvZmZlckNhcmQpO1xufVxuIiwiaW1wb3J0IGJvYmFJbWcgZnJvbSBcIi4uL2ltYWdlcy9tZW51LWJ1YmJsZXMucG5nXCI7XG5leHBvcnQgeyBmaWxsTWVudUNhcmRzLCBmaWxsTWVudUhlcm8gfTtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuZnVuY3Rpb24gZmlsbE1lbnVIZXJvKCkge1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudUhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51SGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51SGVyb0xvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51SGVyb0xvZ29UaGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51SGVyb0xvZ29Cb2JhQ3ViZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJvYmFJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICBtZW51SGVyb1RleHQudGV4dENvbnRlbnQgPSBcImRlbGlnaHRzXCI7XG4gIG1lbnVIZXJvTG9nb1RoZS50ZXh0Q29udGVudCA9IFwidGhlXCI7XG4gIG1lbnVIZXJvTG9nb0JvYmFDdWJlLnRleHRDb250ZW50ID0gXCJib2JhIGN1YmUuXCI7XG4gIGJvYmFJY29uLnNyYyA9IGJvYmFJbWc7XG4gIGJvYmFJY29uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6MnJlbTsgaGVpZ2h0OmF1dG87XCIpO1xuXG4gIG1lbnVIZXJvTG9nby5jbGFzc0xpc3QuYWRkKFwibWVudS1oZXJvLWxvZ29cIik7XG4gIG1lbnVIZXJvTG9nb1RoZS5jbGFzc0xpc3QuYWRkKFwibWVudS1oZXJvLWxvZ28tdGhlXCIpO1xuICBtZW51SGVyb0xvZ29Cb2JhQ3ViZS5jbGFzc0xpc3QuYWRkKFwibWVudS1oZXJvLWxvZ28tYm9iYWN1YmVcIik7XG4gIG1lbnVIZXJvLmNsYXNzTGlzdC5hZGQoXCJtZW51LWhlcm9cIik7XG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGFpbmVyXCIpO1xuXG4gIG1lbnVIZXJvTG9nby5hcHBlbmRDaGlsZChtZW51SGVyb0xvZ29UaGUpO1xuICBtZW51SGVyb0xvZ28uYXBwZW5kQ2hpbGQobWVudUhlcm9Mb2dvQm9iYUN1YmUpO1xuICBtZW51SGVyb0xvZ28uYXBwZW5kQ2hpbGQoYm9iYUljb24pO1xuICBtZW51SGVyby5hcHBlbmRDaGlsZChtZW51SGVyb0xvZ28pO1xuICBtZW51SGVyby5hcHBlbmRDaGlsZChtZW51SGVyb1RleHQpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVIZXJvKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZmlsbE1lbnVDYXJkcygpIHtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIik7XG4gIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FyZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpY2UzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpY2U0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgb3JpZ2luYWxQcmljZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkaXNjb3VudGVkUHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FyZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcmQ3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FyZDggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmljZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmljZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmljZTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmljZTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBvcmlnaW5hbFByaWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRpc2NvdW50ZWRQcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNhcmQxLnRleHRDb250ZW50ID0gXCJWYW5pbGxhIFZlbHZldFwiO1xuICBwcmljZTEudGV4dENvbnRlbnQgPSBcIiQzLjAwXCI7XG4gIGNhcmQyLnRleHRDb250ZW50ID0gXCJTdHJhd2JlcnJ5IFNlcmVuYWRlXCI7XG4gIHByaWNlMi50ZXh0Q29udGVudCA9IFwiJDMuNTBcIjtcbiAgY2FyZDMudGV4dENvbnRlbnQgPSBcIlRyb3BpY2FsIFN3aXNoXCI7XG4gIG9yaWdpbmFsUHJpY2UxLnRleHRDb250ZW50ID0gXCIkMy41MFwiO1xuICBkaXNjb3VudGVkUHJpY2UxLnRleHRDb250ZW50ID0gXCIkMi4xMFwiO1xuICBjYXJkNC50ZXh0Q29udGVudCA9IFwiQ2hvY29sYXRlIENoYWlcIjtcbiAgcHJpY2U0LnRleHRDb250ZW50ID0gXCIkMy41MFwiO1xuICBjYXJkNS50ZXh0Q29udGVudCA9IFwiQ29jb251dCBEcmVhbVwiO1xuICBwcmljZTUudGV4dENvbnRlbnQgPSBcIiQzLjUwXCI7XG4gIGNhcmQ2LnRleHRDb250ZW50ID0gXCJCbHVlYmVycnkgQmxhc3RcIjtcbiAgb3JpZ2luYWxQcmljZTIudGV4dENvbnRlbnQgPSBcIiQzLjUwXCI7XG4gIGRpc2NvdW50ZWRQcmljZTIudGV4dENvbnRlbnQgPSBcIiQyLjEwXCI7XG4gIGNhcmQ3LnRleHRDb250ZW50ID0gXCJQZWFjaHkgS2VlblwiO1xuICBwcmljZTcudGV4dENvbnRlbnQgPSBcIiQzLjk5XCI7XG4gIGNhcmQ4LnRleHRDb250ZW50ID0gXCJNYXRjaGEgTWFkbmVzc1wiO1xuICBwcmljZTgudGV4dENvbnRlbnQgPSBcIiQzLjk5XCI7XG5cbiAgY2FyZDEuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKTtcbiAgcHJpY2UxLmNsYXNzTGlzdC5hZGQoXCJtZW51LXByaWNlXCIpO1xuICBjYXJkMi5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXJkXCIpO1xuICBwcmljZTIuY2xhc3NMaXN0LmFkZChcIm1lbnUtcHJpY2VcIik7XG4gIG9yaWdpbmFsUHJpY2UxLmNsYXNzTGlzdC5hZGQoXCJvcmlnaW5hbC1wcmljZVwiKTtcbiAgY2FyZDMuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKTtcbiAgcHJpY2UzLmNsYXNzTGlzdC5hZGQoXCJtZW51LXByaWNlLTNcIik7XG4gIGNhcmQ0LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XG4gIHByaWNlNC5jbGFzc0xpc3QuYWRkKFwibWVudS1wcmljZVwiKTtcbiAgY2FyZDUuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKTtcbiAgcHJpY2U1LmNsYXNzTGlzdC5hZGQoXCJtZW51LXByaWNlXCIpO1xuICBjYXJkNi5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXJkXCIpO1xuICBwcmljZTYuY2xhc3NMaXN0LmFkZChcIm1lbnUtcHJpY2UtM1wiKTtcbiAgb3JpZ2luYWxQcmljZTIuY2xhc3NMaXN0LmFkZChcIm9yaWdpbmFsLXByaWNlXCIpO1xuICBjYXJkNy5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXJkXCIpO1xuICBwcmljZTcuY2xhc3NMaXN0LmFkZChcIm1lbnUtcHJpY2VcIik7XG4gIGNhcmQ4LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XG4gIHByaWNlOC5jbGFzc0xpc3QuYWRkKFwibWVudS1wcmljZVwiKTtcblxuICBjYXJkMS5hcHBlbmRDaGlsZChwcmljZTEpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQxKTtcbiAgY2FyZDIuYXBwZW5kQ2hpbGQocHJpY2UyKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkMik7XG4gIHByaWNlMy5hcHBlbmRDaGlsZChvcmlnaW5hbFByaWNlMSk7XG4gIHByaWNlMy5hcHBlbmRDaGlsZChkaXNjb3VudGVkUHJpY2UxKTtcbiAgY2FyZDMuYXBwZW5kQ2hpbGQocHJpY2UzKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkMyk7XG4gIGNhcmQ0LmFwcGVuZENoaWxkKHByaWNlNCk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDQpO1xuICBjYXJkNS5hcHBlbmRDaGlsZChwcmljZTUpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQ1KTtcbiAgY2FyZDYuYXBwZW5kQ2hpbGQocHJpY2U2KTtcbiAgcHJpY2U2LmFwcGVuZENoaWxkKG9yaWdpbmFsUHJpY2UyKTtcbiAgcHJpY2U2LmFwcGVuZENoaWxkKGRpc2NvdW50ZWRQcmljZTIpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQ2KTtcbiAgY2FyZDcuYXBwZW5kQ2hpbGQocHJpY2U3KTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkNyk7XG4gIGNhcmQ4LmFwcGVuZENoaWxkKHByaWNlOCk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuL21vZGVybi1ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQge1xuICBmaWxsSGVybyxcbiAgZmlsbEJ1dHRvbnMsXG4gIHN0eWxlQnV0dG9ucyxcbiAgYWN0aXZhdGVIb21lLFxuICBmaWxsSG9tZSxcbiAgZmlsbEhvbWVPZmZlcixcbiAgZmlsbE1lbnVDYXJkcyxcbiAgZmlsbE1lbnVIZXJvLFxuICBmaWxsQ29udGFjdEhlcm8sXG4gIGZpbGxDb250YWN0Q2FyZCxcbiAgZmlsbEVtYWlsQnRuLFxufSBmcm9tIFwiLi9iYXJyZWwuanNcIjtcblxuZmlsbEhlcm8oKTtcbmZpbGxCdXR0b25zKCk7XG5hY3RpdmF0ZUhvbWUoKTtcbnN0eWxlQnV0dG9ucygpO1xuZmlsbEhvbWUoKTtcbmZpbGxIb21lT2ZmZXIoKTtcblxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcbmNvbnN0IG5hdkJ1dHRvbnMgPSBuYXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmNvbnN0IGhvbWVCdG4gPSBBcnJheS5mcm9tKG5hdkJ1dHRvbnMpLmZpbHRlcihcbiAgKGJ0bikgPT4gYnRuLnRleHRDb250ZW50ID09PSBcIkhPTUVcIlxuKTtcbmNvbnN0IG1lbnVCdG4gPSBBcnJheS5mcm9tKG5hdkJ1dHRvbnMpLmZpbHRlcihcbiAgKGJ0bikgPT4gYnRuLnRleHRDb250ZW50ID09PSBcIk1FTlVcIlxuKTtcbmNvbnN0IGNvbnRhY3RCdG4gPSBBcnJheS5mcm9tKG5hdkJ1dHRvbnMpLmZpbHRlcihcbiAgKGJ0bikgPT4gYnRuLnRleHRDb250ZW50ID09PSBcIkNPTlRBQ1RcIlxuKTtcblxuaG9tZUJ0blswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIik7XG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtY29udGFpbmVyXCIpO1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWNvbnRhaW5lclwiKSkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG4gIH1cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIikpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKG1lbnVDb250YWluZXIpO1xuICB9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtY29udGFpbmVyXCIpKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250YWN0Q29udGFpbmVyKTtcbiAgfVxuICBmaWxsSG9tZSgpO1xuICBmaWxsSG9tZU9mZmVyKCk7XG59KTtcblxubWVudUJ0blswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIik7XG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtY29udGFpbmVyXCIpO1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lLWNvbnRhaW5lclwiKSkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoaG9tZUNvbnRhaW5lcik7XG4gIH1cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250YWluZXJcIikpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKG1lbnVDb250YWluZXIpO1xuICB9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtY29udGFpbmVyXCIpKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250YWN0Q29udGFpbmVyKTtcbiAgfVxuICBmaWxsTWVudUhlcm8oKTtcbiAgZmlsbE1lbnVDYXJkcygpO1xufSk7XG5cbmNvbnRhY3RCdG5bMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1jb250YWluZXJcIik7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWNvbnRhaW5lclwiKTtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1jb250YWluZXJcIikpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGhvbWVDb250YWluZXIpO1xuICB9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWNvbnRhaW5lclwiKSkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG4gIH1cbiAgZmlsbENvbnRhY3RIZXJvKCk7XG4gIGZpbGxDb250YWN0Q2FyZCgpO1xuICBmaWxsRW1haWxCdG4oKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9