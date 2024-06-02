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
  height: 100vh;
  width: calc(50vw + 20rem);
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --white: #fffffe;\n  --text: #2b2c34;\n  --primary: #6246ea;\n  --secondary: #d1d1e9;\n  --tertiary: #e45858;\n  --logo-font: \"Rowdies\", sans-serif;\n  --btn-font: \"Ubuntu Sans\", sans-serif;\n  font-family: \"Dosis\", sans-serif;\n}\n\nbody {\n  background-color: var(--secondary);\n  display: flex;\n  justify-content: center;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n  width: calc(50vw + 20rem);\n  gap: 2rem;\n  padding: 2rem 6rem 2rem 6rem;\n  background-color: var(--white);\n}\n\n.hero {\n  display: flex;\n  align-items: center;\n  width: 10rem;\n  user-select: none;\n}\n\n.hero-text-the {\n  color: var(--text);\n  padding-top: 1.2rem;\n}\n\n.hero-text,\n.home-hero-logo,\n.menu-hero-logo,\n.contact-hero-logo {\n  font-family: var(--logo-font);\n  font-weight: 300;\n  font-size: 1.2rem;\n  color: var(--primary);\n}\n\nnav {\n  display: flex;\n  justify-content: center;\n  gap: 8rem;\n  width: 100%;\n  font-size: 1.1rem;\n  font-family: var(--btn-font);\n}\n\nbutton {\n  appearance: none;\n  background-color: var(--white);\n  border: 0.15rem solid var(--white);\n  transition: 0.2s ease-in-out;\n  padding: 1rem;\n  cursor: pointer;\n  user-select: none;\n  font-weight: 400;\n}\n\nbutton:hover {\n  border-bottom: 0.15rem solid var(--primary);\n  transition: 0.2s ease-in-out;\n}\n\n.button-active {\n  border-bottom: 0.15rem solid var(--primary);\n  color: var(--primary);\n  transition: 0.2s ease-in-out;\n}\n\n.home-container,\n.menu-container,\n.contact-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 40rem;\n  gap: 6rem;\n  text-align: center;\n  font-size: 1.3rem;\n}\n\n.home-hero {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 1.4rem;\n  font-weight: 500;\n  width: 100%;\n}\n\n.home-hero-logo {\n  position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.8rem;\n  margin-left: 0rem;\n}\n\n.home-hero-logo::before {\n  content: \"\";\n  position: absolute;\n  width: 30%;\n  height: 0.15rem;\n  left: 0;\n  top: 60%;\n  background-color: var(--primary);\n}\n\n.home-hero-logo::after {\n  content: \"\";\n  position: absolute;\n  width: 30%;\n  height: 0.15rem;\n  right: 0;\n  top: 60%;\n  background-color: var(--primary);\n}\n\n.home-hero-logo-the {\n  color: var(--text);\n  align-self: flex-end;\n  padding-right: 0.5rem;\n}\n\n.home-hero-logo-bobacube {\n  align-self: flex-end;\n  padding-right: 0.2rem;\n}\n\n.home-text {\n  width: 30rem;\n}\n\n.home-btn {\n  appearance: none;\n  transition: 0.5s ease-in-out;\n  border-radius: 2rem;\n  border: 0.15rem solid var(--primary);\n  padding: 1.1rem 1.8rem 1.1rem 1.8rem;\n  box-shadow: inset 0 0 0 0 var(--primary), 0.3rem 0.3rem var(--secondary);\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n\n.home-btn:hover {\n  box-shadow: inset 0 -4rem 0 0 var(--primary), 0.3rem 0.3rem var(--secondary);\n  color: var(--white);\n}\n\n.home-btn:active {\n  transform: translateX(0.3rem) translateY(0.3rem);\n  box-shadow: inset 0 -4rem 0 0 var(--primary);\n}\n\n.offer-card {\n  display: flex;\n  align-items: center;\n  height: 10rem;\n  width: 40rem;\n  border-radius: 0.2rem;\n  background-color: var(--secondary);\n  background-image: url(./images/bubble-tea-img.jpg);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: right;\n}\n\n.offer-card-text {\n  margin-left: 3.6rem;\n  padding: 1rem 3rem 1rem 3rem;\n  width: 26rem;\n  border: 0.15rem solid var(--white);\n  border-radius: 0.2rem;\n}\n\n.tropical {\n  color: var(--tertiary);\n  font-weight: 600;\n}\n\n.blueberry {\n  color: var(--primary);\n  font-weight: 600;\n}\n\n.menu-container {\n  text-align: start;\n  gap: 2rem;\n}\n\n.menu-hero,\n.contact-hero {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-size: 1.4rem;\n  font-weight: 500;\n}\n\n.menu-hero-logo,\n.contact-hero-logo {\n  display: flex;\n  font-size: 1.8rem;\n  color: var(--tertiary);\n}\n\n.menu-hero-logo::after {\n  content: \"\";\n  position: absolute;\n  width: 63%;\n  height: 0.15rem;\n  right: 0;\n  top: 30%;\n  background-color: var(--primary);\n}\n\n.menu-hero-logo-the,\n.contact-hero-logo-the {\n  color: var(--text);\n  padding-right: 0.4rem;\n  align-self: flex-end;\n}\n\n.menu-hero-logo-bobacube,\n.contact-hero-logo-bobacube {\n  padding-right: 0.2rem;\n  align-self: flex-end;\n}\n\n.menu-card {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.6rem;\n  border-radius: 0.2rem;\n  font-size: 1.1rem;\n  border-top: solid 0.15rem var(--tertiary);\n  font-weight: 500;\n  transition: 0.2s ease-in-out;\n}\n\n.menu-card:hover {\n  background-color: #e2caca;\n}\n\n.menu-price,\n.menu-price-3 {\n  font-weight: 700;\n  text-align: end;\n  border-left: solid 0.15rem var(--primary);\n  width: 7.5rem;\n}\n\n.menu-price-3 {\n  display: flex;\n  justify-content: end;\n  gap: 1rem;\n}\n\n.original-price {\n  position: relative;\n  font-weight: 700;\n  color: var(--tertiary);\n}\n\n.original-price::before {\n  content: \"\";\n  position: absolute;\n  background-color: var(--text);\n  height: 0.1rem;\n  width: 3rem;\n  top: 55%;\n  transform: rotate(160deg);\n}\n\n.contact-hero {\n  align-items: end;\n}\n\n.contact-hero-logo-the {\n  padding-left: 0.2rem;\n}\n\n.contact-hero-logo-bobacube {\n  padding-right: 0rem;\n  color: var(--primary);\n}\n\n.contact-hero-logo::before {\n  content: \"\";\n  position: absolute;\n  width: 63%;\n  height: 0.15rem;\n  left: 0;\n  top: 36%;\n  background-color: var(--tertiary);\n}\n\n.contact-card {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  border: 0.15rem solid var(--primary);\n  padding: 2rem;\n  border-radius: 0.2rem;\n}\n\n.contact-card-img {\n  width: 7rem;\n  height: 6rem;\n  background-image: url(\"./images/contact.png\");\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.contact-card-text-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  font-size: 1.2rem;\n}\n\n.contact-card-address,\n.contact-card-number {\n  color: var(--tertiary);\n  font-weight: 500;\n  font-family: var(--btn-font), sans-serif;\n  font-size: 1.1rem;\n}\n\n.contact-card-address:hover,\n.contact-card-number:hover {\n  cursor: pointer;\n}\n\n.contact-email-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  align-items: center;\n}\n\n.contact-email-btn {\n  appearance: none;\n  transition: 0.5s ease-in-out;\n  border-radius: 2rem;\n  border: 0.15rem solid var(--primary);\n  padding: 1.1rem 1.8rem 1.1rem 1.8rem;\n  box-shadow: inset 0 0 0 0 var(--primary), 0.3rem 0.3rem var(--secondary);\n  font-weight: 600;\n  font-size: 1.2rem;\n  width: max-content;\n}\n\n.contact-email-btn:hover {\n  box-shadow: inset 0 0 0 2rem var(--primary), 0.3rem 0.3rem var(--secondary);\n  color: var(--white);\n}\n\n.contact-email-btn:active {\n  transform: translateX(0.3rem) translateY(0.3rem);\n  box-shadow: inset 0 0 0 2rem var(--primary);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlB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Ozs7QUNBcUI7QUFDVztBQWFYOztBQUVyQixvREFBUTtBQUNSLHVEQUFXO0FBQ1gsd0RBQVk7QUFDWix3REFBWTtBQUNaLG9EQUFRO0FBQ1IseURBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVE7QUFDVixFQUFFLHlEQUFhO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQVk7QUFDZCxFQUFFLHlEQUFhO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQWU7QUFDakIsRUFBRSwyREFBZTtBQUNqQixFQUFFLHdEQUFZO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2Rlcm4tbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kZXJuLW5vcm1hbGl6ZS5jc3M/YjZiZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYmFycmVsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9iYXNlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbW9kZXJuLW5vcm1hbGl6ZSB2Mi4wLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xuXG4vKlxuRG9jdW1lbnRcbj09PT09PT09XG4qL1xuXG4vKipcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cbiovXG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcblx0LyogSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMykgKi9cblx0Zm9udC1mYW1pbHk6XG5cdFx0c3lzdGVtLXVpLFxuXHRcdCdTZWdvZSBVSScsXG5cdFx0Um9ib3RvLFxuXHRcdEhlbHZldGljYSxcblx0XHRBcmlhbCxcblx0XHRzYW5zLXNlcmlmLFxuXHRcdCdBcHBsZSBDb2xvciBFbW9qaScsXG5cdFx0J1NlZ29lIFVJIEVtb2ppJztcblx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy4gKi9cblx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy4gKi9cblx0LW1vei10YWItc2l6ZTogNDsgLyogMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLiAqL1xuXHR0YWItc2l6ZTogNDsgLyogMyAqL1xufVxuXG4vKlxuU2VjdGlvbnNcbj09PT09PT09XG4qL1xuXG5ib2R5IHtcblx0bWFyZ2luOiAwOyAvKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuICovXG59XG5cbi8qXG5Hcm91cGluZyBjb250ZW50XG49PT09PT09PT09PT09PT09XG4qL1xuXG4vKipcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuKi9cblxuaHIge1xuXHRoZWlnaHQ6IDA7IC8qIDEgKi9cblx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcblRleHQtbGV2ZWwgc2VtYW50aWNzXG49PT09PT09PT09PT09PT09PT09PVxuKi9cblxuLyoqXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiovXG5cbmFiYnJbdGl0bGVdIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKipcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuXHRmb250LWZhbWlseTpcblx0XHR1aS1tb25vc3BhY2UsXG5cdFx0U0ZNb25vLVJlZ3VsYXIsXG5cdFx0Q29uc29sYXMsXG5cdFx0J0xpYmVyYXRpb24gTW9ubycsXG5cdFx0TWVubG8sXG5cdFx0bW9ub3NwYWNlOyAvKiAxICovXG5cdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG5cdGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuXHRmb250LXNpemU6IDc1JTtcblx0bGluZS1oZWlnaHQ6IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuXHRib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG5cdHRvcDogLTAuNWVtO1xufVxuXG4vKlxuVGFidWxhciBkYXRhXG49PT09PT09PT09PT1cbiovXG5cbi8qKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuKi9cblxudGFibGUge1xuXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkZvcm1zXG49PT09PVxuKi9cblxuLyoqXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG5cdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuXHRtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuKi9cblxuLyogYnV0dG9uLFxuW3R5cGU9J2J1dHRvbiddLFxuW3R5cGU9J3Jlc2V0J10sXG5bdHlwZT0nc3VibWl0J10ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn0gKi9cblxuLyoqXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuKi9cblxuOjotbW96LWZvY3VzLWlubmVyIHtcblx0Ym9yZGVyLXN0eWxlOiBub25lO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4vKipcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG5cdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuXHRib3gtc2hhZG93OiBub25lO1xufVxuXG4vKipcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5sZWdlbmQge1xuXHRwYWRkaW5nOiAwO1xufVxuXG4vKipcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG5cdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkludGVyYWN0aXZlXG49PT09PT09PT09PVxuKi9cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG5cdGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZGVybi1ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhGQUE4Rjs7QUFFOUY7OztDQUdDOztBQUVEOztDQUVDOztBQUVEOzs7Q0FHQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxzSEFBc0g7Q0FDdEg7Ozs7Ozs7O2tCQVFpQjtDQUNqQixpQkFBaUIsRUFBRSxnREFBZ0Q7Q0FDbkUsOEJBQThCLEVBQUUsMEVBQTBFO0NBQzFHLGdCQUFnQixFQUFFLG1EQUFtRDtDQUNyRSxXQUFXLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7O0NBR0M7O0FBRUQ7Q0FDQyxTQUFTLEVBQUUsdUNBQXVDO0FBQ25EOztBQUVBOzs7Q0FHQzs7QUFFRDs7O0NBR0M7O0FBRUQ7Q0FDQyxTQUFTLEVBQUUsTUFBTTtDQUNqQixjQUFjLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTs7O0NBR0M7O0FBRUQ7O0NBRUM7O0FBRUQ7Q0FDQyxpQ0FBaUM7QUFDbEM7O0FBRUE7O0NBRUM7O0FBRUQ7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBOzs7Q0FHQzs7QUFFRDs7OztDQUlDOzs7Ozs7V0FNVSxFQUFFLE1BQU07Q0FDbEIsY0FBYyxFQUFFLE1BQU07QUFDdkI7O0FBRUE7O0NBRUM7O0FBRUQ7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7O0NBRUM7O0FBRUQ7O0NBRUMsY0FBYztDQUNkLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTs7O0NBR0M7O0FBRUQ7OztDQUdDOztBQUVEO0NBQ0MsY0FBYyxFQUFFLE1BQU07Q0FDdEIscUJBQXFCLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7O0NBR0M7O0FBRUQ7OztDQUdDOztBQUVEOzs7OztDQUtDLG9CQUFvQixFQUFFLE1BQU07Q0FDNUIsZUFBZSxFQUFFLE1BQU07Q0FDdkIsaUJBQWlCLEVBQUUsTUFBTTtDQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNsQjs7QUFFQTs7Q0FFQzs7QUFFRDs7Q0FFQyxvQkFBb0I7QUFDckI7O0FBRUE7O0NBRUM7O0FBRUQ7Ozs7O0dBS0c7O0FBRUg7O0NBRUM7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYOztBQUVBOztDQUVDOztBQUVEO0NBQ0MsOEJBQThCO0FBQy9COztBQUVBOzs7Q0FHQzs7QUFFRDtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLFVBQVU7QUFDWDs7QUFFQTs7Q0FFQzs7QUFFRDtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTs7Q0FFQzs7QUFFRDs7Q0FFQyxZQUFZO0FBQ2I7O0FBRUE7OztDQUdDOztBQUVEO0NBQ0MsNkJBQTZCLEVBQUUsTUFBTTtDQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztDQUVDOztBQUVEO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBOzs7Q0FHQzs7QUFFRDtDQUNDLDBCQUEwQixFQUFFLE1BQU07Q0FDbEMsYUFBYSxFQUFFLE1BQU07QUFDdEI7O0FBRUE7OztDQUdDOztBQUVEOztDQUVDOztBQUVEO0NBQ0Msa0JBQWtCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBtb2Rlcm4tbm9ybWFsaXplIHYyLjAuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplICovXFxuXFxuLypcXG5Eb2N1bWVudFxcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5Vc2UgYSBiZXR0ZXIgYm94IG1vZGVsIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcblxcdC8qIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpICovXFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLFxcblxcdFxcdCdTZWdvZSBVSScsXFxuXFx0XFx0Um9ib3RvLFxcblxcdFxcdEhlbHZldGljYSxcXG5cXHRcXHRBcmlhbCxcXG5cXHRcXHRzYW5zLXNlcmlmLFxcblxcdFxcdCdBcHBsZSBDb2xvciBFbW9qaScsXFxuXFx0XFx0J1NlZ29lIFVJIEVtb2ppJztcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLiAqL1xcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuICovXFxuXFx0LW1vei10YWItc2l6ZTogNDsgLyogMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLiAqL1xcblxcdHRhYi1zaXplOiA0OyAvKiAzICovXFxufVxcblxcbi8qXFxuU2VjdGlvbnNcXG49PT09PT09PVxcbiovXFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwOyAvKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuICovXFxufVxcblxcbi8qXFxuR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4qL1xcblxcbmhyIHtcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4xLiBJbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbjIuIENvcnJlY3QgdGhlIG9kZCAnZW0nIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHR1aS1tb25vc3BhY2UsXFxuXFx0XFx0U0ZNb25vLVJlZ3VsYXIsXFxuXFx0XFx0Q29uc29sYXMsXFxuXFx0XFx0J0xpYmVyYXRpb24gTW9ubycsXFxuXFx0XFx0TWVubG8sXFxuXFx0XFx0bW9ub3NwYWNlOyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcblByZXZlbnQgJ3N1YicgYW5kICdzdXAnIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG5cXHRmb250LXNpemU6IDc1JTtcXG5cXHRsaW5lLWhlaWdodDogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcblxcdGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG5cXHR0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG5UYWJ1bGFyIGRhdGFcXG49PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXG5cXG50YWJsZSB7XFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiovXFxuXFxuLyogYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn0gKi9cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5JbnRlcmFjdGl2ZVxcbj09PT09PT09PT09XFxuKi9cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2J1YmJsZS10ZWEtaW1nLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2NvbnRhY3QucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXdoaXRlOiAjZmZmZmZlO1xuICAtLXRleHQ6ICMyYjJjMzQ7XG4gIC0tcHJpbWFyeTogIzYyNDZlYTtcbiAgLS1zZWNvbmRhcnk6ICNkMWQxZTk7XG4gIC0tdGVydGlhcnk6ICNlNDU4NTg7XG4gIC0tbG9nby1mb250OiBcIlJvd2RpZXNcIiwgc2Fucy1zZXJpZjtcbiAgLS1idG4tZm9udDogXCJVYnVudHUgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogXCJEb3Npc1wiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IGNhbGMoNTB2dyArIDIwcmVtKTtcbiAgZ2FwOiAycmVtO1xuICBwYWRkaW5nOiAycmVtIDZyZW0gMnJlbSA2cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5oZXJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwcmVtO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmhlcm8tdGV4dC10aGUge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIHBhZGRpbmctdG9wOiAxLjJyZW07XG59XG5cbi5oZXJvLXRleHQsXG4uaG9tZS1oZXJvLWxvZ28sXG4ubWVudS1oZXJvLWxvZ28sXG4uY29udGFjdC1oZXJvLWxvZ28ge1xuICBmb250LWZhbWlseTogdmFyKC0tbG9nby1mb250KTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxubmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogOHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tYnRuLWZvbnQpO1xufVxuXG5idXR0b24ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS13aGl0ZSk7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idXR0b24tYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMC4xNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uaG9tZS1jb250YWluZXIsXG4ubWVudS1jb250YWluZXIsXG4uY29udGFjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDByZW07XG4gIGdhcDogNnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLmhvbWUtaGVybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhvbWUtaGVyby1sb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBtYXJnaW4tbGVmdDogMHJlbTtcbn1cblxuLmhvbWUtaGVyby1sb2dvOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMC4xNXJlbTtcbiAgbGVmdDogMDtcbiAgdG9wOiA2MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uaG9tZS1oZXJvLWxvZ286OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAlO1xuICBoZWlnaHQ6IDAuMTVyZW07XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDYwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5ob21lLWhlcm8tbG9nby10aGUge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5ob21lLWhlcm8tbG9nby1ib2JhY3ViZSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XG59XG5cbi5ob21lLXRleHQge1xuICB3aWR0aDogMzByZW07XG59XG5cbi5ob21lLWJ0biB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgcGFkZGluZzogMS4xcmVtIDEuOHJlbSAxLjFyZW0gMS44cmVtO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHZhcigtLXByaW1hcnkpLCAwLjNyZW0gMC4zcmVtIHZhcigtLXNlY29uZGFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uaG9tZS1idG46aG92ZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIC00cmVtIDAgMCB2YXIoLS1wcmltYXJ5KSwgMC4zcmVtIDAuM3JlbSB2YXIoLS1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uaG9tZS1idG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuM3JlbSkgdHJhbnNsYXRlWSgwLjNyZW0pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC00cmVtIDAgMCB2YXIoLS1wcmltYXJ5KTtcbn1cblxuLm9mZmVyLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwcmVtO1xuICB3aWR0aDogNDByZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuXG4ub2ZmZXItY2FyZC10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDMuNnJlbTtcbiAgcGFkZGluZzogMXJlbSAzcmVtIDFyZW0gM3JlbTtcbiAgd2lkdGg6IDI2cmVtO1xuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0td2hpdGUpO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG59XG5cbi50cm9waWNhbCB7XG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ibHVlYmVycnkge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBnYXA6IDJyZW07XG59XG5cbi5tZW51LWhlcm8sXG4uY29udGFjdC1oZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tZW51LWhlcm8tbG9nbyxcbi5jb250YWN0LWhlcm8tbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBjb2xvcjogdmFyKC0tdGVydGlhcnkpO1xufVxuXG4ubWVudS1oZXJvLWxvZ286OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjMlO1xuICBoZWlnaHQ6IDAuMTVyZW07XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDMwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG5cbi5tZW51LWhlcm8tbG9nby10aGUsXG4uY29udGFjdC1oZXJvLWxvZ28tdGhlIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjRyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ubWVudS1oZXJvLWxvZ28tYm9iYWN1YmUsXG4uY29udGFjdC1oZXJvLWxvZ28tYm9iYWN1YmUge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ubWVudS1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBib3JkZXItdG9wOiBzb2xpZCAwLjE1cmVtIHZhcigtLXRlcnRpYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLm1lbnUtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmNhY2E7XG59XG5cbi5tZW51LXByaWNlLFxuLm1lbnUtcHJpY2UtMyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuMTVyZW0gdmFyKC0tcHJpbWFyeSk7XG4gIHdpZHRoOiA3LjVyZW07XG59XG5cbi5tZW51LXByaWNlLTMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ub3JpZ2luYWwtcHJpY2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XG59XG5cbi5vcmlnaW5hbC1wcmljZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgaGVpZ2h0OiAwLjFyZW07XG4gIHdpZHRoOiAzcmVtO1xuICB0b3A6IDU1JTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTYwZGVnKTtcbn1cblxuLmNvbnRhY3QtaGVybyB7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbi5jb250YWN0LWhlcm8tbG9nby10aGUge1xuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbn1cblxuLmNvbnRhY3QtaGVyby1sb2dvLWJvYmFjdWJlIHtcbiAgcGFkZGluZy1yaWdodDogMHJlbTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG4uY29udGFjdC1oZXJvLWxvZ286OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYzJTtcbiAgaGVpZ2h0OiAwLjE1cmVtO1xuICBsZWZ0OiAwO1xuICB0b3A6IDM2JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xufVxuXG4uY29udGFjdC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG59XG5cbi5jb250YWN0LWNhcmQtaW1nIHtcbiAgd2lkdGg6IDdyZW07XG4gIGhlaWdodDogNnJlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5jb250YWN0LWNhcmQtdGV4dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uY29udGFjdC1jYXJkLWFkZHJlc3MsXG4uY29udGFjdC1jYXJkLW51bWJlciB7XG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1idG4tZm9udCksIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uY29udGFjdC1jYXJkLWFkZHJlc3M6aG92ZXIsXG4uY29udGFjdC1jYXJkLW51bWJlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhY3QtZW1haWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFjdC1lbWFpbC1idG4ge1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDEuMXJlbSAxLjhyZW0gMS4xcmVtIDEuOHJlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCB2YXIoLS1wcmltYXJ5KSwgMC4zcmVtIDAuM3JlbSB2YXIoLS1zZWNvbmRhcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4uY29udGFjdC1lbWFpbC1idG46aG92ZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycmVtIHZhcigtLXByaW1hcnkpLCAwLjNyZW0gMC4zcmVtIHZhcigtLXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5jb250YWN0LWVtYWlsLWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4zcmVtKSB0cmFuc2xhdGVZKDAuM3JlbSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJyZW0gdmFyKC0tcHJpbWFyeSk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7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QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQTZDO0VBQzdDLHdCQUF3QjtFQUN4Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQix3Q0FBd0M7RUFDeEMsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsb0NBQW9DO0VBQ3BDLHdFQUF3RTtFQUN4RSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJFQUEyRTtFQUMzRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsMkNBQTJDO0FBQzdDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0td2hpdGU6ICNmZmZmZmU7XFxuICAtLXRleHQ6ICMyYjJjMzQ7XFxuICAtLXByaW1hcnk6ICM2MjQ2ZWE7XFxuICAtLXNlY29uZGFyeTogI2QxZDFlOTtcXG4gIC0tdGVydGlhcnk6ICNlNDU4NTg7XFxuICAtLWxvZ28tZm9udDogXFxcIlJvd2RpZXNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1idG4tZm9udDogXFxcIlVidW50dSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRG9zaXNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogY2FsYyg1MHZ3ICsgMjByZW0pO1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogMnJlbSA2cmVtIDJyZW0gNnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmhlcm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTByZW07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmhlcm8tdGV4dC10aGUge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgcGFkZGluZy10b3A6IDEuMnJlbTtcXG59XFxuXFxuLmhlcm8tdGV4dCxcXG4uaG9tZS1oZXJvLWxvZ28sXFxuLm1lbnUtaGVyby1sb2dvLFxcbi5jb250YWN0LWhlcm8tbG9nbyB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbG9nby1mb250KTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogOHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tYnRuLWZvbnQpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYnV0dG9uLWFjdGl2ZSB7XFxuICBib3JkZXItYm90dG9tOiAwLjE1cmVtIHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhvbWUtY29udGFpbmVyLFxcbi5tZW51LWNvbnRhaW5lcixcXG4uY29udGFjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDQwcmVtO1xcbiAgZ2FwOiA2cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5ob21lLWhlcm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ob21lLWhlcm8tbG9nbyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAwcmVtO1xcbn1cXG5cXG4uaG9tZS1oZXJvLWxvZ286OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDAuMTVyZW07XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLmhvbWUtaGVyby1sb2dvOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDAuMTVyZW07XFxuICByaWdodDogMDtcXG4gIHRvcDogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5ob21lLWhlcm8tbG9nby10aGUge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi5ob21lLWhlcm8tbG9nby1ib2JhY3ViZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMnJlbTtcXG59XFxuXFxuLmhvbWUtdGV4dCB7XFxuICB3aWR0aDogMzByZW07XFxufVxcblxcbi5ob21lLWJ0biB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICBwYWRkaW5nOiAxLjFyZW0gMS44cmVtIDEuMXJlbSAxLjhyZW07XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAwIHZhcigtLXByaW1hcnkpLCAwLjNyZW0gMC4zcmVtIHZhcigtLXNlY29uZGFyeSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5ob21lLWJ0bjpob3ZlciB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC00cmVtIDAgMCB2YXIoLS1wcmltYXJ5KSwgMC4zcmVtIDAuM3JlbSB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmhvbWUtYnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4zcmVtKSB0cmFuc2xhdGVZKDAuM3JlbSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIC00cmVtIDAgMCB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLm9mZmVyLWNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwcmVtO1xcbiAgd2lkdGg6IDQwcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9idWJibGUtdGVhLWltZy5qcGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xcbn1cXG5cXG4ub2ZmZXItY2FyZC10ZXh0IHtcXG4gIG1hcmdpbi1sZWZ0OiAzLjZyZW07XFxuICBwYWRkaW5nOiAxcmVtIDNyZW0gMXJlbSAzcmVtO1xcbiAgd2lkdGg6IDI2cmVtO1xcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuLnRyb3BpY2FsIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYmx1ZWJlcnJ5IHtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tZW51LWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLm1lbnUtaGVybyxcXG4uY29udGFjdC1oZXJvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tZW51LWhlcm8tbG9nbyxcXG4uY29udGFjdC1oZXJvLWxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcXG59XFxuXFxuLm1lbnUtaGVyby1sb2dvOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA2MyU7XFxuICBoZWlnaHQ6IDAuMTVyZW07XFxuICByaWdodDogMDtcXG4gIHRvcDogMzAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxufVxcblxcbi5tZW51LWhlcm8tbG9nby10aGUsXFxuLmNvbnRhY3QtaGVyby1sb2dvLXRoZSB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjRyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLm1lbnUtaGVyby1sb2dvLWJvYmFjdWJlLFxcbi5jb250YWN0LWhlcm8tbG9nby1ib2JhY3ViZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLm1lbnUtY2FyZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDAuMTVyZW0gdmFyKC0tdGVydGlhcnkpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tZW51LWNhcmQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyY2FjYTtcXG59XFxuXFxuLm1lbnUtcHJpY2UsXFxuLm1lbnUtcHJpY2UtMyB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDAuMTVyZW0gdmFyKC0tcHJpbWFyeSk7XFxuICB3aWR0aDogNy41cmVtO1xcbn1cXG5cXG4ubWVudS1wcmljZS0zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLm9yaWdpbmFsLXByaWNlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbn1cXG5cXG4ub3JpZ2luYWwtcHJpY2U6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQpO1xcbiAgaGVpZ2h0OiAwLjFyZW07XFxuICB3aWR0aDogM3JlbTtcXG4gIHRvcDogNTUlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTYwZGVnKTtcXG59XFxuXFxuLmNvbnRhY3QtaGVybyB7XFxuICBhbGlnbi1pdGVtczogZW5kO1xcbn1cXG5cXG4uY29udGFjdC1oZXJvLWxvZ28tdGhlIHtcXG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbn1cXG5cXG4uY29udGFjdC1oZXJvLWxvZ28tYm9iYWN1YmUge1xcbiAgcGFkZGluZy1yaWdodDogMHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLmNvbnRhY3QtaGVyby1sb2dvOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNjMlO1xcbiAgaGVpZ2h0OiAwLjE1cmVtO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMzYlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbn1cXG5cXG4uY29udGFjdC1jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbn1cXG5cXG4uY29udGFjdC1jYXJkLWltZyB7XFxuICB3aWR0aDogN3JlbTtcXG4gIGhlaWdodDogNnJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvY29udGFjdC5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5jb250YWN0LWNhcmQtdGV4dC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QtY2FyZC1hZGRyZXNzLFxcbi5jb250YWN0LWNhcmQtbnVtYmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWJ0bi1mb250KSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uY29udGFjdC1jYXJkLWFkZHJlc3M6aG92ZXIsXFxuLmNvbnRhY3QtY2FyZC1udW1iZXI6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFjdC1lbWFpbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1lbWFpbC1idG4ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXByaW1hcnkpO1xcbiAgcGFkZGluZzogMS4xcmVtIDEuOHJlbSAxLjFyZW0gMS44cmVtO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMCB2YXIoLS1wcmltYXJ5KSwgMC4zcmVtIDAuM3JlbSB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4uY29udGFjdC1lbWFpbC1idG46aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnJlbSB2YXIoLS1wcmltYXJ5KSwgMC4zcmVtIDAuM3JlbSB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmNvbnRhY3QtZW1haWwtYnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4zcmVtKSB0cmFuc2xhdGVZKDAuM3JlbSk7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAycmVtIHZhcigtLXByaW1hcnkpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kZXJuLW5vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IGZpbGxIZXJvLCBmaWxsQnV0dG9ucywgc3R5bGVCdXR0b25zLCBhY3RpdmF0ZUhvbWUgfSBmcm9tIFwiLi9iYXNlLmpzXCI7XG5leHBvcnQgeyBmaWxsSG9tZSwgZmlsbEhvbWVPZmZlciB9IGZyb20gXCIuL3BhZ2VzL2hvbWUuanNcIjtcbmV4cG9ydCB7IGZpbGxNZW51Q2FyZHMsIGZpbGxNZW51SGVybyB9IGZyb20gXCIuL3BhZ2VzL21lbnUuanNcIjtcbmV4cG9ydCB7XG4gIGZpbGxDb250YWN0SGVybyxcbiAgZmlsbENvbnRhY3RDYXJkLFxuICBmaWxsRW1haWxCdG4sXG59IGZyb20gXCIuL3BhZ2VzL2NvbnRhY3QuanNcIjtcbiIsImltcG9ydCBsb2dvQnViYmxlVGVhIGZyb20gXCIuL2ltYWdlcy9idWJibGUtdGVhLWxvZ28ucG5nXCI7XG5leHBvcnQgeyBmaWxsSGVybywgZmlsbEJ1dHRvbnMsIHN0eWxlQnV0dG9ucywgYWN0aXZhdGVIb21lIH07XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xuXG5mdW5jdGlvbiBmaWxsSGVybygpIHtcbiAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlcm9JbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlcm9JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVyb1RleHRGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlcm9UZXh0U2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBoZXJvSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDogNS41cmVtO1wiKTtcbiAgaGVyb0ltYWdlLnNyYyA9IGxvZ29CdWJibGVUZWE7XG4gIGhlcm9UZXh0Rmlyc3QudGV4dENvbnRlbnQgPSBcInRoZVwiO1xuICBoZXJvVGV4dFNlY29uZC50ZXh0Q29udGVudCA9IFwiYm9iYSBjdWJlLlwiO1xuXG4gIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKGhlcm8sIG5hdik7XG4gIGhlcm9JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvSW1hZ2UpO1xuICBoZXJvLmFwcGVuZENoaWxkKGhlcm9JbWFnZUNvbnRhaW5lcik7XG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuICBoZXJvVGV4dC5hcHBlbmRDaGlsZChoZXJvVGV4dEZpcnN0KTtcbiAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVyb1RleHRTZWNvbmQpO1xuICBoZXJvLmNsYXNzTGlzdC50b2dnbGUoXCJoZXJvXCIpO1xuICBoZXJvVGV4dEZpcnN0LmNsYXNzTGlzdC50b2dnbGUoXCJoZXJvLXRleHQtdGhlXCIpO1xuICBoZXJvVGV4dC5jbGFzc0xpc3QudG9nZ2xlKFwiaGVyby10ZXh0XCIpO1xufVxuXG5mdW5jdGlvbiBmaWxsQnV0dG9ucygpIHtcbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIT01FXCI7XG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbiAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiO1xuXG4gIG5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIHN0eWxlQnV0dG9ucygpIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG5cbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbi1hY3RpdmVcIikpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVIb21lKCkge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbiAgY29uc3QgYnV0dG9uc0FycmF5ID0gQXJyYXkuZnJvbShidXR0b25zKTtcblxuICBjb25zdCBob21lQnRuID0gYnV0dG9uc0FycmF5LmZpbHRlcigoYnRuKSA9PiBidG4udGV4dENvbnRlbnQgPT09IFwiSE9NRVwiKTtcbiAgaG9tZUJ0blswXS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWFjdGl2ZVwiKTtcbn1cbiIsImltcG9ydCBjb250YWN0SGVyb0ltZyBmcm9tIFwiLi4vaW1hZ2VzL2NvbnRhY3QtYnViYmxlcy5wbmdcIjtcblxuZXhwb3J0IHsgZmlsbENvbnRhY3RIZXJvLCBmaWxsQ29udGFjdENhcmQsIGZpbGxFbWFpbEJ0biB9O1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5mdW5jdGlvbiBmaWxsQ29udGFjdEhlcm8oKSB7XG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0SGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhY3RIZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhY3RIZXJvTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhY3RIZXJvTG9nb1RoZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhY3RIZXJvTG9nb0JvYmFDdWJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG4gIGNvbnRhY3RIZXJvVGV4dC50ZXh0Q29udGVudCA9IFwiZGVsaXZlcnNcIjtcbiAgY29udGFjdEhlcm9Mb2dvVGhlLnRleHRDb250ZW50ID0gXCJ0aGVcIjtcbiAgY29udGFjdEhlcm9Mb2dvQm9iYUN1YmUudGV4dENvbnRlbnQgPSBcImJvYmEgY3ViZS5cIjtcbiAgY29udGFjdExvZ28uc3JjID0gY29udGFjdEhlcm9JbWc7XG4gIGNvbnRhY3RMb2dvLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwid2lkdGg6Mi41cmVtOyBoZWlnaHQ6YXV0bztcIik7XG5cbiAgY29udGFjdEhlcm9Mb2dvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWhlcm8tbG9nb1wiKTtcbiAgY29udGFjdEhlcm9Mb2dvVGhlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWhlcm8tbG9nby10aGVcIik7XG4gIGNvbnRhY3RIZXJvTG9nb0JvYmFDdWJlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWhlcm8tbG9nby1ib2JhY3ViZVwiKTtcbiAgY29udGFjdEhlcm8uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtaGVyb1wiKTtcbiAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG5cbiAgY29udGFjdEhlcm9Mb2dvLmFwcGVuZENoaWxkKGNvbnRhY3RMb2dvKTtcbiAgY29udGFjdEhlcm9Mb2dvLmFwcGVuZENoaWxkKGNvbnRhY3RIZXJvTG9nb1RoZSk7XG4gIGNvbnRhY3RIZXJvTG9nby5hcHBlbmRDaGlsZChjb250YWN0SGVyb0xvZ29Cb2JhQ3ViZSk7XG4gIGNvbnRhY3RIZXJvLmFwcGVuZENoaWxkKGNvbnRhY3RIZXJvTG9nbyk7XG4gIGNvbnRhY3RIZXJvLmFwcGVuZENoaWxkKGNvbnRhY3RIZXJvVGV4dCk7XG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEhlcm8pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBmaWxsQ29udGFjdENhcmQoKSB7XG4gIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250YWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhY3RDYXJkVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhY3RDYXJkSW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdENhcmRUZXh0Rmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0Q2FyZFRleHRBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdENhcmRUZXh0U2Vjb25kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdENhcmRUZXh0TnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250YWN0Q2FyZFRleHRGaXJzdC50ZXh0Q29udGVudCA9XG4gICAgXCJIYXBweSB0byB3ZWxjb21lIHlvdSBhbnl0aW1lLCBleGNlcHQgdHVlc2RheXMh8J+Yi1wiO1xuICBjb250YWN0Q2FyZFRleHRBZGRyZXNzLnRleHRDb250ZW50ID1cbiAgICBcIvCfp60gMjIxQiwgQmFrZXIgU3RyZWV0LCBMb25kb24sIFVuaXRlZCBLaW5nZG9tXCI7XG4gIGNvbnRhY3RDYXJkVGV4dFNlY29uZC50ZXh0Q29udGVudCA9XG4gICAgXCJXZSBhcmUgdG9vIGZhciBhd2F5PyBDb250YWN0IHVzIGZvciBmcmVlIGRlbGl2ZXJpZXMhXCI7XG4gIGNvbnRhY3RDYXJkVGV4dE51bWJlci50ZXh0Q29udGVudCA9IFwi8J+TniArNDQgNDI0MiA4MjgyODJcIjtcblxuICBjb250YWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jYXJkXCIpO1xuICBjb250YWN0Q2FyZFRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY2FyZC10ZXh0LWNvbnRhaW5lclwiKTtcbiAgY29udGFjdENhcmRJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY2FyZC1pbWdcIik7XG4gIGNvbnRhY3RDYXJkVGV4dEFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY2FyZC1hZGRyZXNzXCIpO1xuICBjb250YWN0Q2FyZFRleHROdW1iZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtY2FyZC1udW1iZXJcIik7XG5cbiAgY29udGFjdENhcmRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkVGV4dEZpcnN0KTtcbiAgY29udGFjdENhcmRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkVGV4dEFkZHJlc3MpO1xuICBjb250YWN0Q2FyZFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdENhcmRUZXh0U2Vjb25kKTtcbiAgY29udGFjdENhcmRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkVGV4dE51bWJlcik7XG4gIGNvbnRhY3RDYXJkLmFwcGVuZENoaWxkKGNvbnRhY3RDYXJkSW1nQ29udGFpbmVyKTtcbiAgY29udGFjdENhcmQuYXBwZW5kQ2hpbGQoY29udGFjdENhcmRUZXh0Q29udGFpbmVyKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q2FyZCk7XG59XG5cbmZ1bmN0aW9uIGZpbGxFbWFpbEJ0bigpIHtcbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1jb250YWluZXJcIik7XG4gIGNvbnN0IGVtYWlsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZW1haWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZW1haWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGVtYWlsVGV4dC50ZXh0Q29udGVudCA9XG4gICAgXCJPciAtIGVtYWlsIHVzISBXZSB3aWxsIHJlc3BvbmQgdG8geW91IGxpa2UgYSBidWJibGUgYnVyc3QhXCI7XG4gIGVtYWlsQnRuLnRleHRDb250ZW50ID0gXCLwn5aCIExldHRlcnMhXCI7XG5cbiAgZW1haWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZW1haWwtY29udGFpbmVyXCIpO1xuICBlbWFpbFRleHQuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZW1haWwtdGV4dFwiKTtcbiAgZW1haWxCdG4uY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtZW1haWwtYnRuXCIpO1xuXG4gIGVtYWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsVGV4dCk7XG4gIGVtYWlsQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsQnRuKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbENvbnRhaW5lcik7XG59XG4iLCJpbXBvcnQgYm9iYUltZyBmcm9tIFwiLi4vaW1hZ2VzL2JvYmEucG5nXCI7XG5leHBvcnQgeyBmaWxsSG9tZSwgZmlsbEhvbWVPZmZlciB9O1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5mdW5jdGlvbiBmaWxsSG9tZSgpIHtcbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhvbWVIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZUhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZUhlcm9Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZUhlcm9Mb2dvVGhlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZUhlcm9Mb2dvQm9iYUN1YmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJvYmFJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgaG9tZUhlcm9UZXh0LnRleHRDb250ZW50ID0gXCJleHBlcmllbmNlXCI7XG4gIGhvbWVIZXJvTG9nb1RoZS50ZXh0Q29udGVudCA9IFwidGhlXCI7XG4gIGhvbWVIZXJvTG9nb0JvYmFDdWJlLnRleHRDb250ZW50ID0gXCJib2JhIGN1YmUuXCI7XG4gIGhvbWVUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIkluZHVsZ2UgaW4gdGhlIHBlcmZlY3QgYmxlbmQgb2YgZmxhdm9ycyBhbmQgZnVuIGF0IG91ciBjYWZlLiBTaXAsIHJlbGF4LCBhbmQgbGV0IHRoZSBnb29kIHRpbWVzIGJ1YmJsZSB1cCFcIjtcbiAgYm9iYUljb24uc3JjID0gYm9iYUltZztcbiAgYm9iYUljb24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ3aWR0aDoycmVtO1wiKTtcbiAgaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiQm9vayBhIEJ1YmJsZSFcIjtcblxuICBob21lSGVyb0xvZ28uY2xhc3NMaXN0LmFkZChcImhvbWUtaGVyby1sb2dvXCIpO1xuICBob21lSGVyb0xvZ29UaGUuY2xhc3NMaXN0LmFkZChcImhvbWUtaGVyby1sb2dvLXRoZVwiKTtcbiAgaG9tZUhlcm9Mb2dvQm9iYUN1YmUuY2xhc3NMaXN0LmFkZChcImhvbWUtaGVyby1sb2dvLWJvYmFjdWJlXCIpO1xuICBob21lSGVyby5jbGFzc0xpc3QuYWRkKFwiaG9tZS1oZXJvXCIpO1xuICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob21lLWNvbnRhaW5lclwiKTtcbiAgaG9tZVRleHQuY2xhc3NMaXN0LmFkZChcImhvbWUtdGV4dFwiKTtcbiAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idG5cIik7XG5cbiAgaG9tZUhlcm9Mb2dvLmFwcGVuZENoaWxkKGhvbWVIZXJvTG9nb1RoZSk7XG4gIGhvbWVIZXJvTG9nby5hcHBlbmRDaGlsZChob21lSGVyb0xvZ29Cb2JhQ3ViZSk7XG4gIGhvbWVIZXJvTG9nby5hcHBlbmRDaGlsZChib2JhSWNvbik7XG4gIGhvbWVIZXJvLmFwcGVuZENoaWxkKGhvbWVIZXJvTG9nbyk7XG4gIGhvbWVIZXJvLmFwcGVuZENoaWxkKGhvbWVIZXJvVGV4dCk7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUhlcm8pO1xuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVUZXh0KTtcbiAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gZmlsbEhvbWVPZmZlcigpIHtcbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1jb250YWluZXJcIik7XG4gIGNvbnN0IG9mZmVyQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG9mZmVyQ2FyZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBvZmZlckNhcmRUZXh0Rmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3Qgb2ZmZXJDYXJkVGV4dExhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3Qgb2ZmZXJDYXJkVGV4dFRyb3BpY2FsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IG9mZmVyQ2FyZFRleHRCbHVlYmVycnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3Qgb2ZmZXJDYXJkVGV4dEFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIG9mZmVyQ2FyZFRleHRGaXJzdC50ZXh0Q29udGVudCA9IFwiQmVhdCB0aGUgc3VtbWVyIGhlYXQhIDQwJSBvZmYgb25cIjtcbiAgb2ZmZXJDYXJkVGV4dFRyb3BpY2FsLnRleHRDb250ZW50ID0gXCIgVHJvcGljYWwgU3dpc2ggXCI7XG4gIG9mZmVyQ2FyZFRleHRBbmQudGV4dENvbnRlbnQgPSBcImFuZFwiO1xuICBvZmZlckNhcmRUZXh0Qmx1ZWJlcnJ5LnRleHRDb250ZW50ID0gXCIgQmx1ZWJlcnJ5IEJsYXN0IFwiO1xuICBvZmZlckNhcmRUZXh0TGFzdC50ZXh0Q29udGVudCA9IFwiYm9iYSBjdXBzIVwiO1xuXG4gIG9mZmVyQ2FyZFRleHRUcm9waWNhbC5jbGFzc0xpc3QuYWRkKFwidHJvcGljYWxcIik7XG4gIG9mZmVyQ2FyZFRleHRCbHVlYmVycnkuY2xhc3NMaXN0LmFkZChcImJsdWViZXJyeVwiKTtcbiAgb2ZmZXJDYXJkVGV4dC5jbGFzc0xpc3QuYWRkKFwib2ZmZXItY2FyZC10ZXh0XCIpO1xuICBvZmZlckNhcmQuY2xhc3NMaXN0LmFkZChcIm9mZmVyLWNhcmRcIik7XG5cbiAgb2ZmZXJDYXJkVGV4dC5hcHBlbmRDaGlsZChvZmZlckNhcmRUZXh0Rmlyc3QpO1xuICBvZmZlckNhcmRUZXh0LmFwcGVuZENoaWxkKG9mZmVyQ2FyZFRleHRUcm9waWNhbCk7XG4gIG9mZmVyQ2FyZFRleHQuYXBwZW5kQ2hpbGQob2ZmZXJDYXJkVGV4dEFuZCk7XG4gIG9mZmVyQ2FyZFRleHQuYXBwZW5kQ2hpbGQob2ZmZXJDYXJkVGV4dEJsdWViZXJyeSk7XG4gIG9mZmVyQ2FyZFRleHQuYXBwZW5kQ2hpbGQob2ZmZXJDYXJkVGV4dExhc3QpO1xuICBvZmZlckNhcmQuYXBwZW5kQ2hpbGQob2ZmZXJDYXJkVGV4dCk7XG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQob2ZmZXJDYXJkKTtcbn1cbiIsImltcG9ydCBib2JhSW1nIGZyb20gXCIuLi9pbWFnZXMvbWVudS1idWJibGVzLnBuZ1wiO1xuZXhwb3J0IHsgZmlsbE1lbnVDYXJkcywgZmlsbE1lbnVIZXJvIH07XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmZ1bmN0aW9uIGZpbGxNZW51SGVybygpIHtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1lbnVIZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudUhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudUhlcm9Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudUhlcm9Mb2dvVGhlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudUhlcm9Mb2dvQm9iYUN1YmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBib2JhSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgbWVudUhlcm9UZXh0LnRleHRDb250ZW50ID0gXCJkZWxpZ2h0c1wiO1xuICBtZW51SGVyb0xvZ29UaGUudGV4dENvbnRlbnQgPSBcInRoZVwiO1xuICBtZW51SGVyb0xvZ29Cb2JhQ3ViZS50ZXh0Q29udGVudCA9IFwiYm9iYSBjdWJlLlwiO1xuICBib2JhSWNvbi5zcmMgPSBib2JhSW1nO1xuICBib2JhSWNvbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcIndpZHRoOjJyZW07IGhlaWdodDphdXRvO1wiKTtcblxuICBtZW51SGVyb0xvZ28uY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVyby1sb2dvXCIpO1xuICBtZW51SGVyb0xvZ29UaGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVyby1sb2dvLXRoZVwiKTtcbiAgbWVudUhlcm9Mb2dvQm9iYUN1YmUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaGVyby1sb2dvLWJvYmFjdWJlXCIpO1xuICBtZW51SGVyby5jbGFzc0xpc3QuYWRkKFwibWVudS1oZXJvXCIpO1xuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRhaW5lclwiKTtcblxuICBtZW51SGVyb0xvZ28uYXBwZW5kQ2hpbGQobWVudUhlcm9Mb2dvVGhlKTtcbiAgbWVudUhlcm9Mb2dvLmFwcGVuZENoaWxkKG1lbnVIZXJvTG9nb0JvYmFDdWJlKTtcbiAgbWVudUhlcm9Mb2dvLmFwcGVuZENoaWxkKGJvYmFJY29uKTtcbiAgbWVudUhlcm8uYXBwZW5kQ2hpbGQobWVudUhlcm9Mb2dvKTtcbiAgbWVudUhlcm8uYXBwZW5kQ2hpbGQobWVudUhlcm9UZXh0KTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SGVybyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGZpbGxNZW51Q2FyZHMoKSB7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuICBjb25zdCBjYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FyZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaWNlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaWNlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG9yaWdpbmFsUHJpY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGlzY291bnRlZFByaWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcmQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FyZDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYXJkNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNhcmQ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpY2U1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpY2U2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpY2U3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpY2U4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgb3JpZ2luYWxQcmljZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkaXNjb3VudGVkUHJpY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjYXJkMS50ZXh0Q29udGVudCA9IFwiVmFuaWxsYSBWZWx2ZXRcIjtcbiAgcHJpY2UxLnRleHRDb250ZW50ID0gXCIkMy4wMFwiO1xuICBjYXJkMi50ZXh0Q29udGVudCA9IFwiU3RyYXdiZXJyeSBTZXJlbmFkZVwiO1xuICBwcmljZTIudGV4dENvbnRlbnQgPSBcIiQzLjUwXCI7XG4gIGNhcmQzLnRleHRDb250ZW50ID0gXCJUcm9waWNhbCBTd2lzaFwiO1xuICBvcmlnaW5hbFByaWNlMS50ZXh0Q29udGVudCA9IFwiJDMuNTBcIjtcbiAgZGlzY291bnRlZFByaWNlMS50ZXh0Q29udGVudCA9IFwiJDIuMTBcIjtcbiAgY2FyZDQudGV4dENvbnRlbnQgPSBcIkNob2NvbGF0ZSBDaGFpXCI7XG4gIHByaWNlNC50ZXh0Q29udGVudCA9IFwiJDMuNTBcIjtcbiAgY2FyZDUudGV4dENvbnRlbnQgPSBcIkNvY29udXQgRHJlYW1cIjtcbiAgcHJpY2U1LnRleHRDb250ZW50ID0gXCIkMy41MFwiO1xuICBjYXJkNi50ZXh0Q29udGVudCA9IFwiQmx1ZWJlcnJ5IEJsYXN0XCI7XG4gIG9yaWdpbmFsUHJpY2UyLnRleHRDb250ZW50ID0gXCIkMy41MFwiO1xuICBkaXNjb3VudGVkUHJpY2UyLnRleHRDb250ZW50ID0gXCIkMi4xMFwiO1xuICBjYXJkNy50ZXh0Q29udGVudCA9IFwiUGVhY2h5IEtlZW5cIjtcbiAgcHJpY2U3LnRleHRDb250ZW50ID0gXCIkMy45OVwiO1xuICBjYXJkOC50ZXh0Q29udGVudCA9IFwiTWF0Y2hhIE1hZG5lc3NcIjtcbiAgcHJpY2U4LnRleHRDb250ZW50ID0gXCIkMy45OVwiO1xuXG4gIGNhcmQxLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XG4gIHByaWNlMS5jbGFzc0xpc3QuYWRkKFwibWVudS1wcmljZVwiKTtcbiAgY2FyZDIuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKTtcbiAgcHJpY2UyLmNsYXNzTGlzdC5hZGQoXCJtZW51LXByaWNlXCIpO1xuICBvcmlnaW5hbFByaWNlMS5jbGFzc0xpc3QuYWRkKFwib3JpZ2luYWwtcHJpY2VcIik7XG4gIGNhcmQzLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XG4gIHByaWNlMy5jbGFzc0xpc3QuYWRkKFwibWVudS1wcmljZS0zXCIpO1xuICBjYXJkNC5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXJkXCIpO1xuICBwcmljZTQuY2xhc3NMaXN0LmFkZChcIm1lbnUtcHJpY2VcIik7XG4gIGNhcmQ1LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIik7XG4gIHByaWNlNS5jbGFzc0xpc3QuYWRkKFwibWVudS1wcmljZVwiKTtcbiAgY2FyZDYuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKTtcbiAgcHJpY2U2LmNsYXNzTGlzdC5hZGQoXCJtZW51LXByaWNlLTNcIik7XG4gIG9yaWdpbmFsUHJpY2UyLmNsYXNzTGlzdC5hZGQoXCJvcmlnaW5hbC1wcmljZVwiKTtcbiAgY2FyZDcuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKTtcbiAgcHJpY2U3LmNsYXNzTGlzdC5hZGQoXCJtZW51LXByaWNlXCIpO1xuICBjYXJkOC5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXJkXCIpO1xuICBwcmljZTguY2xhc3NMaXN0LmFkZChcIm1lbnUtcHJpY2VcIik7XG5cbiAgY2FyZDEuYXBwZW5kQ2hpbGQocHJpY2UxKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkMSk7XG4gIGNhcmQyLmFwcGVuZENoaWxkKHByaWNlMik7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDIpO1xuICBwcmljZTMuYXBwZW5kQ2hpbGQob3JpZ2luYWxQcmljZTEpO1xuICBwcmljZTMuYXBwZW5kQ2hpbGQoZGlzY291bnRlZFByaWNlMSk7XG4gIGNhcmQzLmFwcGVuZENoaWxkKHByaWNlMyk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDMpO1xuICBjYXJkNC5hcHBlbmRDaGlsZChwcmljZTQpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQ0KTtcbiAgY2FyZDUuYXBwZW5kQ2hpbGQocHJpY2U1KTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkNSk7XG4gIGNhcmQ2LmFwcGVuZENoaWxkKHByaWNlNik7XG4gIHByaWNlNi5hcHBlbmRDaGlsZChvcmlnaW5hbFByaWNlMik7XG4gIHByaWNlNi5hcHBlbmRDaGlsZChkaXNjb3VudGVkUHJpY2UyKTtcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkNik7XG4gIGNhcmQ3LmFwcGVuZENoaWxkKHByaWNlNyk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDcpO1xuICBjYXJkOC5hcHBlbmRDaGlsZChwcmljZTgpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQ4KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IHtcbiAgZmlsbEhlcm8sXG4gIGZpbGxCdXR0b25zLFxuICBzdHlsZUJ1dHRvbnMsXG4gIGFjdGl2YXRlSG9tZSxcbiAgZmlsbEhvbWUsXG4gIGZpbGxIb21lT2ZmZXIsXG4gIGZpbGxNZW51Q2FyZHMsXG4gIGZpbGxNZW51SGVybyxcbiAgZmlsbENvbnRhY3RIZXJvLFxuICBmaWxsQ29udGFjdENhcmQsXG4gIGZpbGxFbWFpbEJ0bixcbn0gZnJvbSBcIi4vYmFycmVsLmpzXCI7XG5cbmZpbGxIZXJvKCk7XG5maWxsQnV0dG9ucygpO1xuYWN0aXZhdGVIb21lKCk7XG5zdHlsZUJ1dHRvbnMoKTtcbmZpbGxIb21lKCk7XG5maWxsSG9tZU9mZmVyKCk7XG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5jb25zdCBuYXZCdXR0b25zID0gbmF2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb25zdCBob21lQnRuID0gQXJyYXkuZnJvbShuYXZCdXR0b25zKS5maWx0ZXIoXG4gIChidG4pID0+IGJ0bi50ZXh0Q29udGVudCA9PT0gXCJIT01FXCJcbik7XG5jb25zdCBtZW51QnRuID0gQXJyYXkuZnJvbShuYXZCdXR0b25zKS5maWx0ZXIoXG4gIChidG4pID0+IGJ0bi50ZXh0Q29udGVudCA9PT0gXCJNRU5VXCJcbik7XG5jb25zdCBjb250YWN0QnRuID0gQXJyYXkuZnJvbShuYXZCdXR0b25zKS5maWx0ZXIoXG4gIChidG4pID0+IGJ0bi50ZXh0Q29udGVudCA9PT0gXCJDT05UQUNUXCJcbik7XG5cbmhvbWVCdG5bMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1jb250YWluZXJcIik7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWNvbnRhaW5lclwiKTtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1jb250YWluZXJcIikpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGhvbWVDb250YWluZXIpO1xuICB9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWNvbnRhaW5lclwiKSkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG4gIH1cbiAgZmlsbEhvbWUoKTtcbiAgZmlsbEhvbWVPZmZlcigpO1xufSk7XG5cbm1lbnVCdG5bMF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1jb250YWluZXJcIik7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpO1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWNvbnRhaW5lclwiKTtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1jb250YWluZXJcIikpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGhvbWVDb250YWluZXIpO1xuICB9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGFpbmVyXCIpKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWNvbnRhaW5lclwiKSkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG4gIH1cbiAgZmlsbE1lbnVIZXJvKCk7XG4gIGZpbGxNZW51Q2FyZHMoKTtcbn0pO1xuXG5jb250YWN0QnRuWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtY29udGFpbmVyXCIpO1xuICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1jb250YWluZXJcIik7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtY29udGFpbmVyXCIpKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChob21lQ29udGFpbmVyKTtcbiAgfVxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWNvbnRhaW5lclwiKSkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gIH1cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1jb250YWluZXJcIikpIHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRhY3RDb250YWluZXIpO1xuICB9XG4gIGZpbGxDb250YWN0SGVybygpO1xuICBmaWxsQ29udGFjdENhcmQoKTtcbiAgZmlsbEVtYWlsQnRuKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==