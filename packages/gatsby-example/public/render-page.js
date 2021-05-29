/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var plugins = [{
  name: 'default-site-plugin',
  plugin: __webpack_require__(/*! ./gatsby-ssr */ "./gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    try {
      const result = plugin.plugin[api](args, plugin.options);

      if (result && argTransform) {
        args = argTransform({
          args,
          result
        });
      }

      return result;
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`;
      }

      throw e;
    }
  }); // Filter out undefined results.

  results = results.filter(result => typeof result !== `undefined`);

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {ReactNode} $0.bodyComponent The React element to be rendered as the page body
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // Import React so that you can use JSX in HeadComponents
 * const React = require("react")
 *
 * const HtmlAttributes = {
 *   lang: "en"
 * }
 *
 * const HeadComponents = [
 *   <script key="my-script" src="https://gatsby.dev/my-script" />
 * ]
 *
 * const BodyAttributes = {
 *   "data-theme": "dark"
 * }
 *
 * exports.onRenderBody = ({
 *   setHeadComponents,
 *   setHtmlAttributes,
 *   setBodyAttributes
 * }, pluginOptions) => {
 *   setHtmlAttributes(HtmlAttributes)
 *   setHeadComponents(HeadComponents)
 *   setBodyAttributes(BodyAttributes)
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HTML)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", props.htmlAttributes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("body", props.bodyAttributes, props.preBodyComponents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: `body`,
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  headComponents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  bodyAttributes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  preBodyComponents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  body: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  postBodyComponents: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array)
};

/***/ }),

/***/ "./gatsby-ssr.js":
/*!***********************!*\
  !*** ./gatsby-ssr.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onRenderBody": () => (/* binding */ onRenderBody)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var humix_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! humix-ui */ "../humix-ui/lib/index.esm.js");


const onRenderBody = ({
  setHeadComponents
}) => {
  setHeadComponents([/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", {
    id: "stitches",
    dangerouslySetInnerHTML: {
      __html: (0,humix_ui__WEBPACK_IMPORTED_MODULE_1__.getCssString)()
    }
  })]);
};

/***/ }),

/***/ "../humix-ui/lib/index.esm.js":
/*!************************************!*\
  !*** ../humix-ui/lib/index.esm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "Button": () => (/* binding */ Button),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "Typography": () => (/* binding */ Typography),
/* harmony export */   "createTheme": () => (/* binding */ theme),
/* harmony export */   "fontFace": () => (/* binding */ fontFace),
/* harmony export */   "getCssString": () => (/* binding */ getCssString),
/* harmony export */   "multiFontFace": () => (/* binding */ multiFontFace),
/* harmony export */   "pastelTheme": () => (/* binding */ pastelTheme),
/* harmony export */   "resetCSS": () => (/* binding */ resetCSS)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



var {
  toPrimitive: e
} = Symbol,
    t = Symbol.for("sxs.composers"),
    {
  assign: n,
  create: r,
  defineProperties: i,
  getOwnPropertyDescriptors: o
} = Object,
    a = (t, r, a) => n(i(t, o(a)), {
  [e]: () => t[r],
  toString: () => t[r]
}),
    l = e => e.includes("-") ? e : e.replace(/[A-Z]/g, e => "-" + e.toLowerCase()),
    s = (e, t) => e.reduce((e, n) => (e.push(...t.map(e => e.includes("&") ? e.replace(/&/g, /[ +>|~]/.test(n) && /&.*&/.test(e) ? `:is(${n})` : n) : n + " " + e)), e), []),
    {
  isArray: d
} = Array,
    {
  from: c
} = Array,
    {
  prototype: {
    toString: g
  }
} = Object,
    p = /\s*,\s*(?![^()]*\))/,
    m = /([\d.]+)([^]*)/,
    h = {
  blockSize: 1,
  height: 1,
  inlineSize: 1,
  maxBlockSize: 1,
  maxHeight: 1,
  maxInlineSize: 1,
  maxWidth: 1,
  minBlockSize: 1,
  minHeight: 1,
  minInlineSize: 1,
  minWidth: 1,
  width: 1
},
    u = {
  animationDelay: 1,
  animationDuration: 1,
  backgroundSize: 1,
  blockSize: 1,
  border: 1,
  borderBlock: 1,
  borderBlockEnd: 1,
  borderBlockEndWidth: 1,
  borderBlockStart: 1,
  borderBlockStartWidth: 1,
  borderBlockWidth: 1,
  borderBottom: 1,
  borderBottomLeftRadius: 1,
  borderBottomRightRadius: 1,
  borderBottomWidth: 1,
  borderEndEndRadius: 1,
  borderEndStartRadius: 1,
  borderInlineEnd: 1,
  borderInlineEndWidth: 1,
  borderInlineStart: 1,
  borderInlineStartWidth: 1,
  borderInlineWidth: 1,
  borderLeft: 1,
  borderLeftWidth: 1,
  borderRadius: 1,
  borderRight: 1,
  borderRightWidth: 1,
  borderSpacing: 1,
  borderStartEndRadius: 1,
  borderStartStartRadius: 1,
  borderTop: 1,
  borderTopLeftRadius: 1,
  borderTopRightRadius: 1,
  borderTopWidth: 1,
  borderWidth: 1,
  bottom: 1,
  columnGap: 1,
  columnRule: 1,
  columnRuleWidth: 1,
  columnWidth: 1,
  containIntrinsicSize: 1,
  flexBasis: 1,
  fontSize: 1,
  gap: 1,
  gridAutoColumns: 1,
  gridAutoRows: 1,
  gridTemplateColumns: 1,
  gridTemplateRows: 1,
  height: 1,
  inlineSize: 1,
  inset: 1,
  insetBlock: 1,
  insetBlockEnd: 1,
  insetBlockStart: 1,
  insetInline: 1,
  insetInlineEnd: 1,
  insetInlineStart: 1,
  left: 1,
  letterSpacing: 1,
  margin: 1,
  marginBlock: 1,
  marginBlockEnd: 1,
  marginBlockStart: 1,
  marginBottom: 1,
  marginInline: 1,
  marginInlineEnd: 1,
  marginInlineStart: 1,
  marginLeft: 1,
  marginRight: 1,
  marginTop: 1,
  maxBlockSize: 1,
  maxHeight: 1,
  maxInlineSize: 1,
  maxWidth: 1,
  minBlockSize: 1,
  minHeight: 1,
  minInlineSize: 1,
  minWidth: 1,
  offsetDistance: 1,
  offsetRotate: 1,
  outline: 1,
  outlineOffset: 1,
  outlineWidth: 1,
  overflowClipMargin: 1,
  padding: 1,
  paddingBlock: 1,
  paddingBlockEnd: 1,
  paddingBlockStart: 1,
  paddingBottom: 1,
  paddingInline: 1,
  paddingInlineEnd: 1,
  paddingInlineStart: 1,
  paddingLeft: 1,
  paddingRight: 1,
  paddingTop: 1,
  perspective: 1,
  right: 1,
  rowGap: 1,
  scrollMargin: 1,
  scrollMarginBlock: 1,
  scrollMarginBlockEnd: 1,
  scrollMarginBlockStart: 1,
  scrollMarginBottom: 1,
  scrollMarginInline: 1,
  scrollMarginInlineEnd: 1,
  scrollMarginInlineStart: 1,
  scrollMarginLeft: 1,
  scrollMarginRight: 1,
  scrollMarginTop: 1,
  scrollPadding: 1,
  scrollPaddingBlock: 1,
  scrollPaddingBlockEnd: 1,
  scrollPaddingBlockStart: 1,
  scrollPaddingBottom: 1,
  scrollPaddingInline: 1,
  scrollPaddingInlineEnd: 1,
  scrollPaddingInlineStart: 1,
  scrollPaddingLeft: 1,
  scrollPaddingRight: 1,
  scrollPaddingTop: 1,
  shapeMargin: 1,
  textDecoration: 1,
  textDecorationThickness: 1,
  textIndent: 1,
  textUnderlineOffset: 1,
  top: 1,
  transitionDelay: 1,
  transitionDuration: 1,
  verticalAlign: 1,
  width: 1,
  wordSpacing: 1
},
    f = /\s+(?![^()]*\))/,
    b = e => t => e(...("string" == typeof t ? String(t).split(f) : [t])),
    S = JSON.stringify,
    k = {
  appearance: e => ({
    WebkitAppearance: e,
    appearance: e
  }),
  backfaceVisibility: e => ({
    WebkitBackfaceVisibility: e,
    backfaceVisibility: e
  }),
  backdropFilter: e => ({
    WebkitBackdropFilter: e,
    backdropFilter: e
  }),
  backgroundClip: e => ({
    WebkitBackgroundClip: e,
    backgroundClip: e
  }),
  boxDecorationBreak: e => ({
    WebkitBoxDecorationBreak: e,
    boxDecorationBreak: e
  }),
  clipPath: e => ({
    WebkitClipPath: e,
    clipPath: e
  }),
  content: e => ({
    content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"`
  }),
  hyphens: e => ({
    WebkitHyphens: e,
    hyphens: e
  }),
  maskImage: e => ({
    WebkitMaskImage: e,
    maskImage: e
  }),
  tabSize: e => ({
    MozTabSize: e,
    tabSize: e
  }),
  userSelect: e => ({
    WebkitUserSelect: e,
    userSelect: e
  }),
  marginBlock: b((e, t) => ({
    marginBlockStart: e,
    marginBlockEnd: t || e
  })),
  marginInline: b((e, t) => ({
    marginInlineStart: e,
    marginInlineEnd: t || e
  })),
  maxSize: b((e, t) => ({
    maxBlockSize: e,
    maxInlineSize: t || e
  })),
  minSize: b((e, t) => ({
    minBlockSize: e,
    minInlineSize: t || e
  })),
  paddingBlock: b((e, t) => ({
    paddingBlockStart: e,
    paddingBlockEnd: t || e
  })),
  paddingInline: b((e, t) => ({
    paddingInlineStart: e,
    paddingInlineEnd: t || e
  }))
},
    B = e => {
  let t, n, r, i;
  const o = {};
  return a => {
    const c = S(a);
    return c in o ? o[c] : o[c] = ((e, t) => {
      const n = new WeakSet(),
            r = (e, i, o, a, c) => {
        let m = "";

        e: for (const h in e) {
          const u = 64 === h.charCodeAt(0);

          for (const f of u && d(e[h]) ? e[h] : [e[h]]) {
            if (t && (h !== a || f !== c)) {
              const n = t(h, f, e);

              if (null !== n) {
                m += "object" == typeof n && n ? r(n, i, o, h, f) : null == n ? "" : n;
                continue e;
              }
            }

            if ("object" == typeof f && f && f.toString === g) {
              n.has(i) && (n.delete(i), m += "}");
              const e = Object(h),
                    t = u ? i : i.length ? s(i, h.split(p)) : h.split(p);
              m += r(f, t, u ? o.concat(e) : o), n.has(e) && (n.delete(e), m += "}"), n.has(t) && (n.delete(t), m += "}");
            } else {
              for (let e = 0; e < o.length; ++e) n.has(o[e]) || (n.add(o[e]), m += o[e] + "{");

              i.length && !n.has(i) && (n.add(i), m += i + "{"), m += (u ? h + " " : l(h) + ":") + String(f) + ";";
            }
          }
        }

        return m;
      };

      return r(e, [], []);
    })(a, (o, a) => {
      const s = o.charCodeAt(0),
            d = 64 === s ? o : /[A-Z]/.test(c = o) ? c : c.replace(/-[^]/g, e => e[1].toUpperCase());
      var c;
      const g = 64 === s ? o : l(o);

      if ("function" == typeof e.utils[o]) {
        if (e.utils[o] != r || a != i) return r = e.utils[o], i = a, r(e)(i);
      } else if ("function" == typeof k[d] && (k[d] != r || a != i)) return r = k[d], i = a, r(i);

      if (i = a, t != d && n != a && g in h) {
        t = d, n = a;

        const e = ((e, t) => t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, n, r, i) => n + ("stretch" === r ? `-moz-available${i};${e}:${n}-webkit-fill-available` : `-moz-fit-content${i};${e}:${n}fit-content`) + i))(g, String(n));

        if (e != a) return {
          [o]: e
        };
      }

      let p = 64 === s ? (o.slice(1) in e.media ? "@media " + e.media[o.slice(1)] : o).replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e, t, n, r, i, o) => {
        const a = m.test(t),
              l = .0625 * (a ? -1 : 1),
              [s, d] = a ? [r, t] : [t, r];
        return "(" + ("=" === n[0] ? "" : ">" === n[0] === a ? "max-" : "min-") + s + ":" + ("=" !== n[0] && 1 === n.length ? d.replace(m, (e, t, r) => Number(t) + l * (">" === n ? 1 : -1) + r) : d) + (i ? ") and (" + (">" === i[0] ? "min-" : "max-") + s + ":" + (1 === i.length ? o.replace(m, (e, t, n) => Number(t) + l * (">" === i ? -1 : 1) + n) : o) : "") + ")";
      }) : 36 === s ? ("sx" === e.prefix ? "-" : "--" + e.prefix) + o.replace(/\$/g, "-") : o;
      const f = "object" == typeof a && a ? a : "number" == typeof a && a && d in u ? String(a) + "px" : ((e, t, n) => t.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (t, r, i, o, a) => "$" == o == !!i ? t : (r || "--" == o ? "calc(" : "") + "var(" + ("$" === o ? ("sx" === n.prefix ? "-" : "--" + n.prefix) + "-" + (a.includes("$") ? "" : e in n.themeMap ? n.themeMap[e] + "-" : "") + a.replace(/\$/g, "-") : o + a) + ")" + (r || "--" == o ? "*" + (r || "") + (i || "1") + ")" : "")))(d, String(a), e);
      return a != f || g != p ? {
        [p]: f
      } : null;
    });
  };
},
    {
  ownKeys: y
} = Reflect,
    I = class extends Set {
  toString() {
    return c(this).join("");
  }

  get hasChanged() {
    const {
      size: e
    } = this;
    return () => e < this.size;
  }

},
    x = I;

I.prototype[e] = I.prototype.toString;

var w = "colors",
    z = "sizes",
    W = "space",
    E = {
  gap: W,
  gridGap: W,
  columnGap: W,
  gridColumnGap: W,
  rowGap: W,
  gridRowGap: W,
  inset: W,
  insetBlock: W,
  insetBlockEnd: W,
  insetBlockStart: W,
  insetInline: W,
  insetInlineEnd: W,
  insetInlineStart: W,
  margin: W,
  marginTop: W,
  marginRight: W,
  marginBottom: W,
  marginLeft: W,
  marginBlock: W,
  marginBlockEnd: W,
  marginBlockStart: W,
  marginInline: W,
  marginInlineEnd: W,
  marginInlineStart: W,
  padding: W,
  paddingTop: W,
  paddingRight: W,
  paddingBottom: W,
  paddingLeft: W,
  paddingBlock: W,
  paddingBlockEnd: W,
  paddingBlockStart: W,
  paddingInline: W,
  paddingInlineEnd: W,
  paddingInlineStart: W,
  top: W,
  right: W,
  bottom: W,
  left: W,
  scrollMargin: W,
  scrollMarginTop: W,
  scrollMarginRight: W,
  scrollMarginBottom: W,
  scrollMarginLeft: W,
  scrollMarginX: W,
  scrollMarginY: W,
  scrollMarginBlock: W,
  scrollMarginBlockEnd: W,
  scrollMarginBlockStart: W,
  scrollMarginInline: W,
  scrollMarginInlineEnd: W,
  scrollMarginInlineStart: W,
  scrollPadding: W,
  scrollPaddingTop: W,
  scrollPaddingRight: W,
  scrollPaddingBottom: W,
  scrollPaddingLeft: W,
  scrollPaddingX: W,
  scrollPaddingY: W,
  scrollPaddingBlock: W,
  scrollPaddingBlockEnd: W,
  scrollPaddingBlockStart: W,
  scrollPaddingInline: W,
  scrollPaddingInlineEnd: W,
  scrollPaddingInlineStart: W,
  fontSize: "fontSizes",
  background: w,
  backgroundColor: w,
  backgroundImage: w,
  border: w,
  borderBlock: w,
  borderBlockEnd: w,
  borderBlockStart: w,
  borderBottom: w,
  borderBottomColor: w,
  borderColor: w,
  borderInline: w,
  borderInlineEnd: w,
  borderInlineStart: w,
  borderLeft: w,
  borderLeftColor: w,
  borderRight: w,
  borderRightColor: w,
  borderTop: w,
  borderTopColor: w,
  caretColor: w,
  color: w,
  columnRuleColor: w,
  fill: w,
  outline: w,
  outlineColor: w,
  stroke: w,
  textDecorationColor: w,
  fontFamily: "fonts",
  fontWeight: "fontWeights",
  lineHeight: "lineHeights",
  letterSpacing: "letterSpacings",
  blockSize: z,
  minBlockSize: z,
  maxBlockSize: z,
  inlineSize: z,
  minInlineSize: z,
  maxInlineSize: z,
  width: z,
  minWidth: z,
  maxWidth: z,
  height: z,
  minHeight: z,
  maxHeight: z,
  flexBasis: z,
  gridTemplateColumns: z,
  gridTemplateRows: z,
  borderWidth: "borderWidths",
  borderTopWidth: "borderWidths",
  borderRightWidth: "borderWidths",
  borderBottomWidth: "borderWidths",
  borderLeftWidth: "borderWidths",
  borderStyle: "borderStyles",
  borderTopStyle: "borderStyles",
  borderRightStyle: "borderStyles",
  borderBottomStyle: "borderStyles",
  borderLeftStyle: "borderStyles",
  borderRadius: "radii",
  borderTopLeftRadius: "radii",
  borderTopRightRadius: "radii",
  borderBottomRightRadius: "radii",
  borderBottomLeftRadius: "radii",
  boxShadow: "shadows",
  textShadow: "shadows",
  transition: "transitions",
  zIndex: "zIndices"
},
    R = (e, t) => {
  for (var n = JSON.stringify(t), r = n.length, i = 9; r;) i = Math.imul(i ^ n.charCodeAt(--r), 9 ** 9);

  return e + (i ^ i >>> 9).toString(36).slice(-5);
},
    M = e => e ? "-" + e : "",
    C = class {
  constructor(e, t, n = "", r = "") {
    this.value = e, this.token = t, this.scale = n, this.prefix = r;
  }

  get computedValue() {
    return "var(" + this.variable + ")";
  }

  get variable() {
    return "-" + M(this.prefix) + M(this.scale) + "-" + this.token;
  }

  toString() {
    return this.computedValue;
  }

},
    P = class extends Array {
  toString() {
    return this.join("");
  }

  get hasChanged() {
    const e = String(this);
    return () => e !== String(this);
  }

},
    T = P;

P.prototype[e] = P.prototype.toString;

var j = e => {
  let t,
      r,
      i,
      o,
      a,
      l = !1;
  const s = "append" === e.insertionMethod ? "append" : "prepend";
  return e => {
    "object" == typeof document && (t || (t = document.head || document.documentElement), r || (r = document.getElementById("stitches") || n(document.createElement("style"), {
      id: "stitches",
      textContent: e
    })), i || (i = r.firstChild || new Text(), l = !i.data), o || (o = r.insertBefore(new Text(), i)), r.isConnected || t[s](r), o.data = e, !l && e && (clearTimeout(a), a = setTimeout(() => {
      i.remove(), l = !0;
    }, 250)));
  };
},
    v = e => {
  e = "object" == typeof e && e || {};
  const i = {};
  i.media = n({
    initial: "all"
  }, e.media), i.theme = "object" == typeof e.theme && e.theme || {}, i.themeMap = "object" == typeof e.themeMap && e.themeMap || E, i.utils = "object" == typeof e.utils && e.utils || {};
  const o = new Set(e.passthru ? [...e.passthru, "as", "className"] : ["as", "className"]),
        l = i.prefix = e.prefix || "sx";
  i.insertionMethod = e.insertionMethod || "prepend";
  const s = ("function" == typeof i.insertionMethod ? i.insertionMethod : j)(i),
        d = "03kze",
        g = B(i),
        p = new x(),
        m = new x(),
        h = new x(),
        u = new x(),
        f = new x([p, m, h, u]);
  let b = "";

  const S = () => {
    const e = c(f).join("");
    b !== e && s(b = e);
  },
        k = (e, t) => {
    t = "object" == typeof e && e || Object(t);
    const n = "root" !== (e = "string" == typeof e ? e : ""),
          i = (n ? "." : ":root,.") + (e = n && e || R(l, t)),
          o = a(r(null), "className", {
      className: e,
      selector: i
    }),
          s = {},
          c = s[i] = {};

    for (const e in t) {
      o[e] = r(null);

      for (const n in t[e]) {
        let r = String(t[e][n]);
        r.includes("$") && (r = r.replace(/\$([$\w-]+)/g, (t, n) => n.includes("$") ? t : "$" + e + t));
        const i = o[e][n] = new C(r, n, e, "sx" === l ? "" : l);
        c[i.variable] = i.value;
      }
    }

    const p = e === l + d ? "" : g(s);
    return a(o, "className", {
      get className() {
        const {
          hasChanged: t
        } = m;
        return m.add(p), t() && S(), e;
      },

      selector: i
    });
  },
        I = (e, t = "") => {
    const n = new x(),
          i = new x();

    for (const t in e) if (e[t] !== Object(e[t]) || y(e[t]).length) {
      const r = g({
        [t]: e[t]
      });
      ("@import" === t ? n : i).add(r);
    }

    const o = a(r(null), "name", {
      name: t
    }),
          l = a(() => {
      let e = p.hasChanged,
          t = h.hasChanged;
      return n.forEach(e => {
        p.add(e);
      }), i.forEach(e => {
        h.add(e);
      }), (e() || t()) && S(), o;
    }, "name", {
      get name() {
        return String(l());
      }

    });
    return l;
  },
        w = e => {
    const t = new x(),
          n = new T(),
          i = new x(),
          o = new x([t, n, i]);
    let {
      variants: a,
      compoundVariants: s,
      defaultVariants: c,
      ...p
    } = e;
    c = Object(c);
    const m = R(l, e),
          h = "." + m,
          f = m === l + d ? "" : g({
      [h]: p
    });
    u.add(o);
    const b = r(null),
          S = [],
          k = [];

    for (const e in a) for (const t in a[e]) {
      const n = a[e][t];
      k.push({
        [e]: t,
        css: n
      });
    }

    k.push(...(s || []));

    for (const e in k) {
      const {
        css: t,
        ...i
      } = k[e],
            o = y(i),
            a = o.length;

      for (const e of o) b[e] = b[e] || r(null), b[e][i[e]] = !0;

      const l = (e, r) => {
        e = { ...e
        };

        for (const t in r) void 0 !== e[t] || Object(b[t])[e[t]] || (e[t] = r[t]);

        const l = new Set();

        if (o.length && o.every(t => {
          const n = e[t],
                r = String(i[t]);
          if (r === String(n)) return !0;
          if (n === Object(n)) for (const e in n) if (r == String(n[e]) && 64 === e.charCodeAt(0)) return l.add(e), !0;
        })) {
          let e = Object(t);

          for (const t of l) e = {
            [t]: e
          };

          const r = m + R("", e) + "--" + (1 === a ? o[0] + "-" + i[o[0]] : "c" + a),
                s = g({
            ["." + r]: e
          });
          return (n[a - 1] || (n[a - 1] = new x())).add(s), r;
        }
      };

      S.push(l);
    }

    return {
      apply(e, r, i) {
        const a = t.hasChanged,
              l = n.hasChanged;

        if (t.add(f), e) {
          r.add(m);

          for (const t of S) {
            const n = t(e, i);
            n && r.add(n);
          }
        }

        if (a() || l()) return u.add(o), !0;
      },

      inline(e, t) {
        const n = R("-", e),
              r = m === "-" + n ? "" : g({
          [h + n]: e
        });
        t.add(m + n);
        const {
          hasChanged: o
        } = i;
        return r && i.add(r), o();
      },

      className: m,
      defaultVariants: c,
      selector: h,
      variantProps: b
    };
  },
        z = k("root", i.theme),
        W = a({
    css: (...e) => {
      let i,
          l = [],
          s = r(null);

      for (const r of e) if (r === Object(r)) if (t in r) for (const e of r[t]) l.push(e), n(s, e.defaultVariants);else l.push(i = w(r)), n(s, i.defaultVariants);

      return i || l.push(i = w({})), a(e => {
        const {
          css: n,
          ...d
        } = Object(e),
              g = new Set();
        let p,
            m = !1;

        for (const e of l) m = e.apply(d, g, s) || m;

        n === Object(n) && (p = i.inline(n, g)), (m || p) && S();

        for (const e in i.variantProps) o.has(e) || delete d[e];

        void 0 !== d.className && String(d.className).split(/\s+/).forEach(g.add, g);
        const h = c(g);
        return d.className = h.join(" "), a(r(null), "className", {
          get [t]() {
            return l;
          },

          className: d.className,
          props: d,
          selector: i.selector
        });
      }, "className", {
        get [t]() {
          return l;
        },

        get className() {
          return i.apply() && S(), i.className;
        },

        selector: i.selector
      });
    },
    config: i,
    global: I,
    keyframes: e => {
      const t = R(l, e);
      return I({
        ["@keyframes " + t]: e
      }, t);
    },
    prefix: l,
    reset: () => (p.clear(), m.clear(), h.clear(), u.clear(), z.className, W),
    theme: n(k, z),

    get cssText() {
      return b;
    },

    getCssString: () => b
  }, "cssText", {});

  return W;
},
    $ = Symbol.for("react.element"),
    N = Symbol.for("react.forward_ref"),
    O = e => {
  const r = v(e);
  return n(r, {
    styled: (...e) => {
      const n = e.map(e => Object(e).type ? e.type : e).find(e => e) || "span",
            i = r.css(...e.filter(e => t in Object(e) || e && "object" == typeof e && !e.$$typeof));
      return Object.setPrototypeOf({
        render(e, t) {
          const {
            props: {
              as: r = n,
              ...o
            },
            ...a
          } = i(e);
          return {
            constructor: void 0,
            $$typeof: $,
            props: o,
            ref: t,
            type: r,
            __v: 0
          };
        },

        $$typeof: N,
        [t]: i[t],
        [Symbol.toPrimitive]: () => i.selector,
        toString: () => i.selector,

        get className() {
          return i.className;
        },

        get selector() {
          return i.selector;
        },

        type: n
      }, Object(n));
    }
  });
},
    L = () => L.config || (L.config = O()),
    D = (...e) => L().global(...e); //# sourceMappingUrl=index.map

/**
 * The default humix theme
 */


const defaultTheme = O({
  prefix: 'humix-',
  theme: {
    fonts: {
      body: '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto'
    },
    colors: {
      primary100: 'hsl(170, 86%, 62%)',
      primary200: 'hsl(170, 86%, 80%)',
      secondary100: 'hsl(359, 93%, 70%)',
      secondary200: 'hsl(359, 93%, 60%)',
      focusOutline: 'hsl(300, 47%, 75%)',
      darkText: '#2F2F2F',
      lightText: '#F7F3F5'
    },
    space: {
      1: '0px',
      2: '2px',
      3: '4px',
      4: '8px',
      5: '16px',
      6: '32px',
      7: '64px',
      8: '128px',
      9: '256px',
      10: '512px'
    },
    fontSizes: {
      xs: '0.75rem',
      s: '0.875rem',
      m: '1rem',
      l: '1.25rem',
      xl: '1.5rem',
      xxl: '2rem',
      huge: '3rem',
      jumbo: '4rem' // jumbo

    },
    fontWeights: {},
    lineHeights: {
      solid: 1,
      heading: 1.25,
      body: 1.5
    },
    letterSpacings: {},
    sizes: {
      maxWidth: 1440,
      interactiveElementHeight: '40px',
      interactiveElementMinWidth: '100px'
    },
    borderWidths: {
      1: '0px',
      2: '1px',
      3: '2px',
      4: '4px'
    },
    borderStyles: {
      1: 'none',
      2: 'solid'
    },
    // Radius
    radii: {
      none: '0px',
      slight: '5px',
      rounded: '9px',
      pill: '9999px' // rounded

    },
    shadows: {
      primaryFocus: '0px 1px 0px 0px rgba(0,0,0,1), 0px 0px 8px hsl(170, 86%, 62%)',
      secondaryFocus: '0px 1px 0px 0px rgba(0,0,0,1), 0px 0px 8px hsl(359, 93%, 52%)',
      primaryBoxBottomRight: '10px 10px 1px 1px hsl(170, 86%, 62%)',
      secondaryBoxBottomRight: '10px 10px 1px 1px hsl(359, 93%, 52%)',
      primaryBoxBottomLeft: '-10px 10px 1px 1px hsl(170, 86%, 62%)',
      secondaryBoxBottomLeft: '-10px 10px 1px 1px hsl(359, 93%, 52%)',
      primaryBoxTopRight: '10px -10px 1px 1px hsl(170, 86%, 62%)',
      secondaryBoxTopRight: '10px -10px 1px 1px hsl(359, 93%, 52%)',
      primaryBoxTopLeft: '-10px -10px 1px 1px hsl(170, 86%, 62%)',
      secondaryBoxTopLeft: '-10px -10px 1px 1px hsl(359, 93%, 52%)'
    },
    zIndices: {
      neutral: 0,
      above: 100,
      below: -100,
      onTop: 999999999
    },
    transitions: {}
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)'
  }
});
const {
  styled,
  getCssString,
  css,
  theme
} = defaultTheme;
/**
 * An example custom theme with pastel colors.
 */

const pastelTheme = theme({
  colors: {
    primary100: 'hsl(110, 100%, 87%)',
    primary200: 'hsl(110, 100%, 80%)',
    secondary100: 'hsl(62, 100%, 86%)',
    secondary200: 'hsl(62, 100%, 76%)',
    darkText: '#001F52',
    lightText: '#FFFFFC'
  }
});

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function toVal(mix) {
  var k,
      y,
      str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

function _clsx() {
  var i = 0,
      tmp,
      x,
      str = '';

  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += ' ');
        str += x;
      }
    }
  }

  return str;
} // During SSR, React emits a warning when calling useLayoutEffect.
// Since neither useLayoutEffect nor useEffect run on the server,
// we can suppress this by replace it with a noop on the server.


const useLayoutEffect = typeof window !== 'undefined' ? (react__WEBPACK_IMPORTED_MODULE_0___default().useLayoutEffect) : () => {};
let $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap = new Map();
/**
 * Merges two ids.
 * Different ids will trigger a side-effect and re-render components hooked up with `useId`.
 */

function mergeIds(idA, idB) {
  if (idA === idB) {
    return idA;
  }

  let setIdA = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(idA);

  if (setIdA) {
    setIdA(idB);
    return idB;
  }

  let setIdB = $f8b5fdd96fb429d7102983f777c41307$var$idsUpdaterMap.get(idB);

  if (setIdB) {
    setIdB(idA);
    return idA;
  }

  return idB;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/**
 * Calls all functions in the order they were chained with the same arguments.
 */


function chain() {
  for (var _len = arguments.length, callbacks = new Array(_len), _key = 0; _key < _len; _key++) {
    callbacks[_key] = arguments[_key];
  }

  return function () {
    for (let callback of callbacks) {
      if (typeof callback === 'function') {
        callback(...arguments);
      }
    }
  };
}
/**
 * Merges multiple props objects together. Event handlers are chained,
 * classNames are combined, and ids are deduplicated - different ids
 * will trigger a side-effect and re-render components hooked up with `useId`.
 * For all other props, the last prop object overrides all previous ones.
 * @param args - Multiple sets of props to merge together.
 */


function mergeProps() {
  let result = {};

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (let props of args) {
    for (let key in result) {
      // Chain events
      if (/^on[A-Z]/.test(key) && typeof result[key] === 'function' && typeof props[key] === 'function') {
        result[key] = chain(result[key], props[key]); // Merge classnames, sometimes classNames are empty string which eval to false, so we just need to do a type check
      } else if (key === 'className' && typeof result.className === 'string' && typeof props.className === 'string') {
        result[key] = _clsx(result.className, props.className);
      } else if (key === 'UNSAFE_className' && typeof result.UNSAFE_className === 'string' && typeof props.UNSAFE_className === 'string') {
        result[key] = _clsx(result.UNSAFE_className, props.UNSAFE_className);
      } else if (key === 'id' && result.id && props.id) {
        result.id = mergeIds(result.id, props.id); // Override others
      } else {
        result[key] = props[key] !== undefined ? props[key] : result[key];
      }
    } // Add props from b that are not in a


    for (let key in props) {
      if (result[key] === undefined) {
        result[key] = props[key];
      }
    }
  }

  return result;
}

const $f6a965352cabf1a7c37e8c1337e5eab$var$DOMPropNames = new Set(['id']);
const $f6a965352cabf1a7c37e8c1337e5eab$var$labelablePropNames = new Set(['aria-label', 'aria-labelledby', 'aria-describedby', 'aria-details']);
const $f6a965352cabf1a7c37e8c1337e5eab$var$propRe = /^(data-.*)$/;
/**
 * Filters out all props that aren't valid DOM props or defined via override prop obj.
 * @param props - The component props to be filtered.
 * @param opts - Props to override.
 */

function filterDOMProps(props, opts) {
  if (opts === void 0) {
    opts = {};
  }

  let {
    labelable,
    propNames
  } = opts;
  let filteredProps = {};

  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && ($f6a965352cabf1a7c37e8c1337e5eab$var$DOMPropNames.has(prop) || labelable && $f6a965352cabf1a7c37e8c1337e5eab$var$labelablePropNames.has(prop) || (propNames == null ? void 0 : propNames.has(prop)) || $f6a965352cabf1a7c37e8c1337e5eab$var$propRe.test(prop))) {
      filteredProps[prop] = props[prop];
    }
  }

  return filteredProps;
} // Currently necessary for Safari and old Edge:
// https://caniuse.com/#feat=mdn-api_htmlelement_focus_preventscroll_option
// See https://bugs.webkit.org/show_bug.cgi?id=178583
//
// Original licensing for the following methods can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/calvellido/focus-options-polyfill


function focusWithoutScrolling(element) {
  if ($bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScroll()) {
    element.focus({
      preventScroll: true
    });
  } else {
    let scrollableElements = $bc7c9c3af78f5218ff72cecce15730$var$getScrollableElements(element);
    element.focus();
    $bc7c9c3af78f5218ff72cecce15730$var$restoreScrollPosition(scrollableElements);
  }
}

let $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = null;

function $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScroll() {
  if ($bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached == null) {
    $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = false;

    try {
      var focusElem = document.createElement('div');
      focusElem.focus({
        get preventScroll() {
          $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached = true;
          return true;
        }

      });
    } catch (e) {// Ignore
    }
  }

  return $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScrollCached;
}

function $bc7c9c3af78f5218ff72cecce15730$var$getScrollableElements(element) {
  var parent = element.parentNode;
  var scrollableElements = [];
  var rootScrollingElement = document.scrollingElement || document.documentElement;

  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    }

    parent = parent.parentNode;
  }

  if (rootScrollingElement instanceof HTMLElement) {
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  }

  return scrollableElements;
}

function $bc7c9c3af78f5218ff72cecce15730$var$restoreScrollPosition(scrollableElements) {
  for (let {
    element,
    scrollTop,
    scrollLeft
  } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
} // mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.


let $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement = new Map(); // A list of callbacks to call once there are no transitioning elements.

let $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks = new Set();

function $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents() {
  if (typeof window === 'undefined') {
    return;
  }

  let onTransitionStart = e => {
    // Add the transitioning property to the list for this element.
    let transitions = $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.get(e.target);

    if (!transitions) {
      transitions = new Set();
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.set(e.target, transitions); // The transitioncancel event must be registered on the element itself, rather than as a global
      // event. This enables us to handle when the node is deleted from the document while it is transitioning.
      // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.

      e.target.addEventListener('transitioncancel', onTransitionEnd);
    }

    transitions.add(e.propertyName);
  };

  let onTransitionEnd = e => {
    // Remove property from list of transitioning properties.
    let properties = $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.get(e.target);

    if (!properties) {
      return;
    }

    properties.delete(e.propertyName); // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.

    if (properties.size === 0) {
      e.target.removeEventListener('transitioncancel', onTransitionEnd);
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.delete(e.target);
    } // If no transitioning elements, call all of the queued callbacks.


    if ($b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.size === 0) {
      for (let cb of $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks) {
        cb();
      }

      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks.clear();
    }
  };

  document.body.addEventListener('transitionrun', onTransitionStart);
  document.body.addEventListener('transitionend', onTransitionEnd);
}

if (typeof document !== 'undefined') {
  if (document.readyState !== 'loading') {
    $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents();
  } else {
    document.addEventListener('DOMContentLoaded', $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents);
  }
}

function runAfterTransition(fn) {
  // Wait one frame to see if an animation starts, e.g. a transition on mount.
  requestAnimationFrame(() => {
    // If no transitions are running, call the function immediately.
    // Otherwise, add it to a list of callbacks to run at the end of the animation.
    if ($b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionsByElement.size === 0) {
      fn();
    } else {
      $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$transitionCallbacks.add(fn);
    }
  });
}

function useGlobalListeners() {
  let globalListeners = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
  let addGlobalListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options) => {
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options) => {
    eventTarget.removeEventListener(type, listener, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [removeGlobalListener]); // eslint-disable-next-line arrow-body-style

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [removeAllGlobalListeners]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
} // Syncs ref from context with ref passed to hook


function useSyncRef(context, ref) {
  useLayoutEffect(() => {
    if (context && context.ref) {
      context.ref.current = ref.current;
      return () => {
        context.ref.current = null;
      };
    }
  }, [context, ref]);
}

function $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(re) {
  return typeof window !== 'undefined' && window.navigator != null ? re.test(window.navigator.platform) : false;
}

function isMac() {
  return $b0986c1243f71db8e992f67117a1ed9$var$testPlatform(/^Mac/);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

let $e17c9db826984f8ab8e5d837bf0b8$var$state = 'default';
let $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = '';

function $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection() {
  if ($e17c9db826984f8ab8e5d837bf0b8$var$state === 'default') {
    $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
    document.documentElement.style.webkitUserSelect = 'none';
  }

  $e17c9db826984f8ab8e5d837bf0b8$var$state = 'disabled';
}

function $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection() {
  // If the state is already default, there's nothing to do.
  // If it is restoring, then there's no need to queue a second restore.
  if ($e17c9db826984f8ab8e5d837bf0b8$var$state !== 'disabled') {
    return;
  }

  $e17c9db826984f8ab8e5d837bf0b8$var$state = 'restoring'; // There appears to be a delay on iOS where selection still might occur
  // after pointer up, so wait a bit before removing user-select.

  setTimeout(() => {
    // Wait for any CSS transitions to complete so we don't recompute style
    // for the whole page in the middle of the animation and cause jank.
    runAfterTransition(() => {
      // Avoid race conditions
      if ($e17c9db826984f8ab8e5d837bf0b8$var$state === 'restoring') {
        if (document.documentElement.style.webkitUserSelect === 'none') {
          document.documentElement.style.webkitUserSelect = $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect || '';
        }

        $e17c9db826984f8ab8e5d837bf0b8$var$savedUserSelect = '';
        $e17c9db826984f8ab8e5d837bf0b8$var$state = 'default';
      }
    });
  }, 300);
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
// Original licensing for the following method can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/blob/3c713d513195a53788b3f8bb4b70279d68b15bcc/packages/react-interactions/events/src/dom/shared/index.js#L74-L87
// Keyboards, Assistive Technologies, and element.click() all produce a "virtual"
// click event. This is a method of inferring such clicks. Every browser except
// IE 11 only sets a zero value of "detail" for click events that are "virtual".
// However, IE 11 uses a zero value for all click events. For IE 11 we rely on
// the quirk that it produces click events that are of type PointerEvent, and
// where only the "virtual" click lacks a pointerType field.


function $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(event) {
  // JAWS/NVDA with Firefox.
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }

  return event.detail === 0 && !event.pointerType;
}

const $a3ff51240de6f955c79cf17a88e349$export$PressResponderContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

$a3ff51240de6f955c79cf17a88e349$export$PressResponderContext.displayName = 'PressResponderContext';

function $ffc54430b1dbeee65879852feaaff07d$var$usePressResponderContext(props) {
  // Consume context from <PressResponder> and merge with props.
  let context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($a3ff51240de6f955c79cf17a88e349$export$PressResponderContext);

  if (context) {
    let {
      register
    } = context,
        contextProps = _objectWithoutPropertiesLoose(context, ["register"]);

    props = mergeProps(contextProps, props);
    register();
  }

  useSyncRef(context, props.ref);
  return props;
}
/**
 * Handles press interactions across mouse, touch, keyboard, and screen readers.
 * It normalizes behavior across browsers and platforms, and handles many nuances
 * of dealing with pointer and keyboard events.
 */


function usePress(props) {
  let _usePressResponderCon = $ffc54430b1dbeee65879852feaaff07d$var$usePressResponderContext(props),
      {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled,
    isPressed: isPressedProp,
    preventFocusOnPress
  } = _usePressResponderCon,
      domProps = _objectWithoutPropertiesLoose(_usePressResponderCon, ["onPress", "onPressChange", "onPressStart", "onPressEnd", "onPressUp", "isDisabled", "isPressed", "preventFocusOnPress", "ref"]);

  let propsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  propsRef.current = {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled
  };
  let {
    0: isPressed,
    1: setPressed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let {
    addGlobalListener,
    removeAllGlobalListeners
  } = useGlobalListeners();
  let pressProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let state = ref.current;

    let triggerPressStart = (originalEvent, pointerType) => {
      let {
        onPressStart,
        onPressChange,
        isDisabled
      } = propsRef.current;

      if (isDisabled || state.didFirePressStart) {
        return;
      }

      if (onPressStart) {
        onPressStart({
          type: 'pressstart',
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey
        });
      }

      if (onPressChange) {
        onPressChange(true);
      }

      state.didFirePressStart = true;
      setPressed(true);
    };

    let triggerPressEnd = function triggerPressEnd(originalEvent, pointerType, wasPressed) {
      if (wasPressed === void 0) {
        wasPressed = true;
      }

      let {
        onPressEnd,
        onPressChange,
        onPress,
        isDisabled
      } = propsRef.current;

      if (!state.didFirePressStart) {
        return;
      }

      state.ignoreClickAfterPress = true;
      state.didFirePressStart = false;

      if (onPressEnd) {
        onPressEnd({
          type: 'pressend',
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey
        });
      }

      if (onPressChange) {
        onPressChange(false);
      }

      setPressed(false);

      if (onPress && wasPressed && !isDisabled) {
        onPress({
          type: 'press',
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey
        });
      }
    };

    let triggerPressUp = (originalEvent, pointerType) => {
      let {
        onPressUp,
        isDisabled
      } = propsRef.current;

      if (isDisabled) {
        return;
      }

      if (onPressUp) {
        onPressUp({
          type: 'pressup',
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey
        });
      }
    };

    let cancel = e => {
      if (state.isPressed) {
        if (state.isOverTarget) {
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
        }

        state.isPressed = false;
        state.isOverTarget = false;
        state.activePointerId = null;
        state.pointerType = null;
        removeAllGlobalListeners();
        $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
      }
    };

    let pressProps = {
      onKeyDown(e) {
        if ($ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e.nativeEvent)) {
          e.preventDefault();
          e.stopPropagation(); // If the event is repeating, it may have started on a different element
          // after which focus moved to the current element. Ignore these events and
          // only handle the first key down event.

          if (!state.isPressed && !e.repeat) {
            state.target = e.currentTarget;
            state.isPressed = true;
            triggerPressStart(e, 'keyboard'); // Focus may move before the key up event, so register the event on the document
            // instead of the same element where the key down event occurred.

            addGlobalListener(document, 'keyup', onKeyUp, false);
          }
        }
      },

      onKeyUp(e) {
        if ($ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e.nativeEvent) && !e.repeat) {
          triggerPressUp($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), 'keyboard');
        }
      },

      onClick(e) {
        if (e && e.button === 0) {
          e.stopPropagation();

          if (isDisabled) {
            e.preventDefault();
          } // If triggered from a screen reader or by using element.click(),
          // trigger as if it were a keyboard click.


          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e.nativeEvent)) {
            // Ensure the element receives focus (VoiceOver on iOS does not do this)
            if (!isDisabled && !preventFocusOnPress) {
              focusWithoutScrolling(e.currentTarget);
            }

            triggerPressStart(e, 'virtual');
            triggerPressUp(e, 'virtual');
            triggerPressEnd(e, 'virtual');
          }

          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
        }
      }

    };

    let onKeyUp = e => {
      if (state.isPressed && $ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e)) {
        e.preventDefault();
        e.stopPropagation();
        state.isPressed = false;
        triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), 'keyboard', e.target === state.target);
        removeAllGlobalListeners(); // If the target is a link, trigger the click method to open the URL,
        // but defer triggering pressEnd until onClick event handler.

        if (e.target === state.target && $ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(state.target) || state.target.getAttribute('role') === 'link') {
          state.target.click();
        }
      }
    };

    if (typeof PointerEvent !== 'undefined') {
      pressProps.onPointerDown = e => {
        // Only handle left clicks
        if (e.button !== 0) {
          return;
        } // Due to browser inconsistencies, especially on mobile browsers, we prevent
        // default on pointer down and handle focusing the pressable element ourselves.


        if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e.target)) {
          e.preventDefault();
        } // iOS safari fires pointer events from VoiceOver (but only when outside an iframe...)
        // https://bugs.webkit.org/show_bug.cgi?id=222627


        state.pointerType = $ffc54430b1dbeee65879852feaaff07d$var$isVirtualPointerEvent(e.nativeEvent) ? 'virtual' : e.pointerType;
        e.stopPropagation();

        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e.pointerId;
          state.target = e.currentTarget;

          if (!isDisabled && !preventFocusOnPress) {
            focusWithoutScrolling(e.currentTarget);
          }

          $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection();
          triggerPressStart(e, state.pointerType);
          addGlobalListener(document, 'pointermove', onPointerMove, false);
          addGlobalListener(document, 'pointerup', onPointerUp, false);
          addGlobalListener(document, 'pointercancel', onPointerCancel, false);
        }
      };

      pressProps.onMouseDown = e => {
        if (e.button === 0) {
          // Chrome and Firefox on touch Windows devices require mouse down events
          // to be canceled in addition to pointer events, or an extra asynchronous
          // focus event will be fired.
          if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e.target)) {
            e.preventDefault();
          }

          e.stopPropagation();
        }
      };

      pressProps.onPointerUp = e => {
        // Only handle left clicks
        // Safari on iOS sometimes fires pointerup events, even
        // when the touch isn't over the target, so double check.
        if (e.button === 0 && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, e.currentTarget)) {
          triggerPressUp(e, state.pointerType);
        }
      }; // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
      // Use pointer move events instead to implement our own hit testing.
      // See https://bugs.webkit.org/show_bug.cgi?id=199803


      let onPointerMove = e => {
        if (e.pointerId !== state.activePointerId) {
          return;
        }

        if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, state.target)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
        }
      };

      let onPointerUp = e => {
        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0) {
          if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, state.target)) {
            triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType);
          } else if (state.isOverTarget) {
            triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
          }

          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
        }
      };

      let onPointerCancel = e => {
        cancel(e);
      };

      pressProps.onDragStart = e => {
        // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
        cancel(e);
      };
    } else {
      pressProps.onMouseDown = e => {
        // Only handle left clicks
        if (e.button !== 0) {
          return;
        } // Due to browser inconsistencies, especially on mobile browsers, we prevent
        // default on mouse down and handle focusing the pressable element ourselves.


        if ($ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(e.target)) {
          e.preventDefault();
        }

        e.stopPropagation();

        if (state.ignoreEmulatedMouseEvents) {
          return;
        }

        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e.currentTarget;
        state.pointerType = $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e.nativeEvent) ? 'virtual' : 'mouse';

        if (!isDisabled && !preventFocusOnPress) {
          focusWithoutScrolling(e.currentTarget);
        }

        triggerPressStart(e, state.pointerType);
        addGlobalListener(document, 'mouseup', onMouseUp, false);
      };

      pressProps.onMouseEnter = e => {
        e.stopPropagation();

        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true;
          triggerPressStart(e, state.pointerType);
        }
      };

      pressProps.onMouseLeave = e => {
        e.stopPropagation();

        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false;
          triggerPressEnd(e, state.pointerType, false);
        }
      };

      pressProps.onMouseUp = e => {
        if (!state.ignoreEmulatedMouseEvents && e.button === 0) {
          triggerPressUp(e, state.pointerType);
        }
      };

      let onMouseUp = e => {
        // Only handle left clicks
        if (e.button !== 0) {
          return;
        }

        state.isPressed = false;
        removeAllGlobalListeners();

        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }

        if ($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e, state.target)) {
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType);
        } else if (state.isOverTarget) {
          triggerPressEnd($ffc54430b1dbeee65879852feaaff07d$var$createEvent(state.target, e), state.pointerType, false);
        }

        state.isOverTarget = false;
      };

      pressProps.onTouchStart = e => {
        e.stopPropagation();
        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchFromEvent(e.nativeEvent);

        if (!touch) {
          return;
        }

        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e.currentTarget;
        state.pointerType = 'touch'; // Due to browser inconsistencies, especially on mobile browsers, we prevent default
        // on the emulated mouse event and handle focusing the pressable element ourselves.

        if (!isDisabled && !preventFocusOnPress) {
          focusWithoutScrolling(e.currentTarget);
        }

        $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection();
        triggerPressStart(e, state.pointerType);
        addGlobalListener(window, 'scroll', onScroll, true);
      };

      pressProps.onTouchMove = e => {
        e.stopPropagation();

        if (!state.isPressed) {
          return;
        }

        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(e.nativeEvent, state.activePointerId);

        if (touch && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(touch, e.currentTarget)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart(e, state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd(e, state.pointerType, false);
        }
      };

      pressProps.onTouchEnd = e => {
        e.stopPropagation();

        if (!state.isPressed) {
          return;
        }

        let touch = $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(e.nativeEvent, state.activePointerId);

        if (touch && $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(touch, e.currentTarget)) {
          triggerPressUp(e, state.pointerType);
          triggerPressEnd(e, state.pointerType);
        } else if (state.isOverTarget) {
          triggerPressEnd(e, state.pointerType, false);
        }

        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
        removeAllGlobalListeners();
      };

      pressProps.onTouchCancel = e => {
        e.stopPropagation();

        if (state.isPressed) {
          cancel(e);
        }
      };

      let onScroll = e => {
        if (state.isPressed && e.target.contains(state.target)) {
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false
          });
        }
      };

      pressProps.onDragStart = e => {
        cancel(e);
      };
    }

    return pressProps;
  }, [addGlobalListener, isDisabled, preventFocusOnPress, removeAllGlobalListeners]); // Remove user-select: none in case component unmounts immediately after pressStart
  // eslint-disable-next-line arrow-body-style

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection();
  }, []);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: mergeProps(domProps, pressProps)
  };
}

function $ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(target) {
  return target.tagName === 'A' && target.hasAttribute('href');
}

function $ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(event) {
  const {
    key,
    target
  } = event;
  const element = target;
  const {
    tagName,
    isContentEditable
  } = element;
  const role = element.getAttribute('role'); // Accessibility for keyboards. Space and Enter only.
  // "Spacebar" is for IE 11

  return (key === 'Enter' || key === ' ' || key === 'Spacebar') && tagName !== 'INPUT' && tagName !== 'TEXTAREA' && isContentEditable !== true && ( // A link with a valid href should be handled natively,
  // unless it also has role='button' and was triggered using Space.
  !$ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(element) || role === 'button' && key !== 'Enter') && // An element with role='link' should only trigger with Enter key
  !(role === 'link' && key !== 'Enter');
}

function $ffc54430b1dbeee65879852feaaff07d$var$getTouchFromEvent(event) {
  const {
    targetTouches
  } = event;

  if (targetTouches.length > 0) {
    return targetTouches[0];
  }

  return null;
}

function $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;

  for (let i = 0; i < changedTouches.length; i++) {
    const touch = changedTouches[i];

    if (touch.identifier === pointerId) {
      return touch;
    }
  }

  return null;
}

function $ffc54430b1dbeee65879852feaaff07d$var$createEvent(target, e) {
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey
  };
}

function $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  return (point.clientX || 0) >= (rect.left || 0) && (point.clientX || 0) <= (rect.right || 0) && (point.clientY || 0) >= (rect.top || 0) && (point.clientY || 0) <= (rect.bottom || 0);
}

function $ffc54430b1dbeee65879852feaaff07d$var$shouldPreventDefault(target) {
  // We cannot prevent default if the target is inside a draggable element.
  return !target.closest('[draggable="true"]');
}

function $ffc54430b1dbeee65879852feaaff07d$var$isVirtualPointerEvent(event) {
  // If the pointer size is zero, then we assume it's from a screen reader.
  return event.width === 0 && event.height === 0;
} // NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

/**
 * Handles focus events for the immediate target.
 * Focus events on child elements will be ignored.
 */


function useFocus(props) {
  if (props.isDisabled) {
    return {
      focusProps: {}
    };
  }

  let onFocus, onBlur;

  if (props.onFocus || props.onFocusChange) {
    onFocus = e => {
      if (e.target === e.currentTarget) {
        if (props.onFocus) {
          props.onFocus(e);
        }

        if (props.onFocusChange) {
          props.onFocusChange(true);
        }
      }
    };
  }

  if (props.onBlur || props.onFocusChange) {
    onBlur = e => {
      if (e.target === e.currentTarget) {
        if (props.onBlur) {
          props.onBlur(e);
        }

        if (props.onFocusChange) {
          props.onFocusChange(false);
        }
      }
    };
  }

  return {
    focusProps: {
      onFocus,
      onBlur
    }
  };
}

let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers = new Set();
let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners = false;
let $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false; // Only Tab or Esc keys will make focus visible on text input elements

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers(modality, e) {
  for (let handler of $d01f69bb2ab5f70dfd0005370a2a2cbc$var$changeHandlers) {
    handler(modality, e);
  }
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */


function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$isValidKey(e) {
  return !(e.metaKey || !isMac() && e.altKey || e.ctrlKey);
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent(e) {
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;

  if ($d01f69bb2ab5f70dfd0005370a2a2cbc$var$isValidKey(e)) {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers('keyboard', e);
  }
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent(e) {
  if (e.type === 'mousedown' || e.type === 'pointerdown') {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers('pointer', e);
  }
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleClickEvent(e) {
  if ($f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e)) {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
  }
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleFocusEvent(e) {
  // Firefox fires two extra focus events when the user first clicks into an iframe:
  // first on the window, then on the document. We ignore these events so they don't
  // cause keyboard focus rings to appear.
  if (e.target === window || e.target === document) {
    return;
  } // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
  // This occurs, for example, when navigating a form with the next/previous buttons on iOS.


  if (!$d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus) {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$triggerChangeHandlers('virtual', e);
  }

  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
}

function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleWindowBlur() {
  // When the window is blurred, reset state. This is necessary when tabbing out of the window,
  // for example, since a subsequent focus event won't be fired.
  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = false;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */


function $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents() {
  if (typeof window === 'undefined' || $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners) {
    return;
  } // Programmatic focus() calls shouldn't affect the current input modality.
  // However, we need to detect other cases when a focus event occurs without
  // a preceding user event (e.g. screen reader focus). Overriding the focus
  // method on HTMLElement.prototype is a bit hacky, but works.


  let focus = HTMLElement.prototype.focus;

  HTMLElement.prototype.focus = function () {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };

  document.addEventListener('keydown', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent, true);
  document.addEventListener('keyup', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleKeyboardEvent, true);
  document.addEventListener('click', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleClickEvent, true); // Register focus events on the window so they are sure to happen
  // before React's event listeners (registered on the document).

  window.addEventListener('focus', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleFocusEvent, true);
  window.addEventListener('blur', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handleWindowBlur, false);

  if (typeof PointerEvent !== 'undefined') {
    document.addEventListener('pointerdown', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener('pointermove', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener('pointerup', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
  } else {
    document.addEventListener('mousedown', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener('mousemove', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
    document.addEventListener('mouseup', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$handlePointerEvent, true);
  }

  $d01f69bb2ab5f70dfd0005370a2a2cbc$var$hasSetupGlobalListeners = true;
}

if (typeof document !== 'undefined') {
  if (document.readyState !== 'loading') {
    $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents();
  } else {
    document.addEventListener('DOMContentLoaded', $d01f69bb2ab5f70dfd0005370a2a2cbc$var$setupGlobalFocusEvents);
  }
}
/**
 * This function wraps a React event handler to make stopPropagation the default, and support continuePropagation instead.
 */


function $dc0d75166de722fbf58eb6c3552$export$createEventHandler(handler) {
  if (!handler) {
    return;
  }

  let shouldStopPropagation = true;
  return e => {
    let event = _extends({}, e, {
      preventDefault() {
        e.preventDefault();
      },

      isDefaultPrevented() {
        return e.isDefaultPrevented();
      },

      stopPropagation() {
        console.error('stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.');
      },

      continuePropagation() {
        shouldStopPropagation = false;
      }

    });

    handler(event);

    if (shouldStopPropagation) {
      e.stopPropagation();
    }
  };
}
/**
 * Handles keyboard interactions for a focusable element.
 */


function useKeyboard(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: $dc0d75166de722fbf58eb6c3552$export$createEventHandler(props.onKeyDown),
      onKeyUp: $dc0d75166de722fbf58eb6c3552$export$createEventHandler(props.onKeyUp)
    }
  };
}

let $e11539c8317b2d21639df611cb5658f$var$FocusableContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

function $e11539c8317b2d21639df611cb5658f$var$useFocusableContext(ref) {
  let context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($e11539c8317b2d21639df611cb5658f$var$FocusableContext) || {};
  useSyncRef(context, ref);
  return context;
}
/**
 * Used to make an element focusable and capable of auto focus.
 */


function useFocusable(props, domRef) {
  let {
    focusProps
  } = useFocus(props);
  let {
    keyboardProps
  } = useKeyboard(props);
  let interactions = mergeProps(focusProps, keyboardProps);
  let domProps = $e11539c8317b2d21639df611cb5658f$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (props.autoFocus && domRef.current) {
      domRef.current.focus();
    }
  }, [props.autoFocus, domRef]);
  return {
    focusableProps: mergeProps(_extends({}, interactions, {
      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
    }), interactionProps)
  };
}
/**
 * Provides the behavior and accessibility implementation for a button component. Handles mouse, keyboard, and touch interactions,
 * focus behavior, and ARIA props for both native button elements and custom element types.
 * @param props - Props to be applied to the button.
 * @param ref - A ref to a DOM element for the button.
 */


function useButton(props, ref) {
  /* eslint-enable no-redeclare */
  let {
    elementType = 'button',
    isDisabled,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    // @ts-ignore - undocumented
    preventFocusOnPress,
    // @ts-ignore
    onClick: deprecatedOnClick,
    href,
    target,
    rel,
    type = 'button'
  } = props;
  let additionalProps;

  if (elementType === 'button') {
    additionalProps = {
      type,
      disabled: isDisabled
    };
  } else {
    additionalProps = {
      role: 'button',
      tabIndex: isDisabled ? undefined : 0,
      href: elementType === 'a' && isDisabled ? undefined : href,
      target: elementType === 'a' ? target : undefined,
      type: elementType === 'input' ? type : undefined,
      disabled: elementType === 'input' ? isDisabled : undefined,
      'aria-disabled': !isDisabled || elementType === 'input' ? undefined : isDisabled,
      rel: elementType === 'a' ? rel : undefined
    };
  }

  let {
    pressProps,
    isPressed
  } = usePress({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPress,
    isDisabled,
    preventFocusOnPress,
    ref
  });
  let {
    focusableProps
  } = useFocusable(props, ref);
  let buttonProps = mergeProps(focusableProps, pressProps);
  buttonProps = mergeProps(buttonProps, filterDOMProps(props, {
    labelable: true
  }));
  return {
    isPressed,
    // Used to indicate press state for visual
    buttonProps: mergeProps(additionalProps, buttonProps, {
      'aria-haspopup': props['aria-haspopup'],
      'aria-expanded': props['aria-expanded'],
      'aria-controls': props['aria-controls'],
      'aria-pressed': props['aria-pressed'],
      onClick: e => {
        if (deprecatedOnClick) {
          deprecatedOnClick(e);
          console.warn('onClick is deprecated, please use onPress');
        }
      }
    })
  };
}

const RootBoogie$2 = styled('button', {
  minHeight: '$interactiveElementHeight',
  minWidth: '$interactiveElementMinWidth',
  fontSize: '$3',
  padding: '$4 $5',
  border: 'solid 2px $darkText',
  boxShadow: '-2px 3px 1px 0px rgba(0,0,0,1)',
  transition: 'all 250ms ease',
  cursor: 'pointer',
  '&:active': {
    transform: 'translateY(3px)',
    boxShadow: '0px 1px 0px 0px rgba(0,0,0,1)'
  }
});
const ButtonVariants = styled(RootBoogie$2, {
  variants: {
    color: {
      primary: {
        backgroundColor: '$primary100',
        color: '$darkText',
        '&:hover': {
          backgroundColor: '$primary200'
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '$primaryFocus'
        }
      },
      secondary: {
        backgroundColor: '$secondary100',
        color: '$darkText',
        '&:hover': {
          backgroundColor: '$secondary200'
        },
        '&:focus': {
          outline: 'none',
          boxShadow: '$secondaryFocus'
        }
      }
    },
    cornerRadius: {
      square: {
        borderRadius: '$none'
      },
      slight: {
        borderRadius: '$slight'
      },
      rounded: {
        borderRadius: '$rounded'
      }
    }
  }
});
/**
 * A simple, accesible button component.
 *
 * @param color - primary | secondary
 * @param cornerRadius - square | slight | rounded
 */

const Button = props => {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  const {
    buttonProps
  } = useButton(props, ref);
  const {
    children,
    stylz
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonVariants, {
    css: { ...stylz
    },
    ...buttonProps,
    ref: ref,
    ...props
  }, children);
};
/**
 * Provides the behavior and accessibility implementation for a link component.
 * A link allows a user to navigate to another page or resource within a web page
 * or application.
 */


function useLink(props, ref) {
  let {
    elementType = 'a',
    onPress,
    onPressStart,
    onPressEnd,
    // @ts-ignore
    onClick: deprecatedOnClick,
    isDisabled
  } = props,
      otherProps = _objectWithoutPropertiesLoose(props, ["elementType", "onPress", "onPressStart", "onPressEnd", "onClick", "isDisabled"]);

  let linkProps;

  if (elementType !== 'a') {
    linkProps = {
      role: 'link',
      tabIndex: !isDisabled ? 0 : undefined
    };
  }

  let {
    pressProps,
    isPressed
  } = usePress({
    onPress,
    onPressStart,
    onPressEnd,
    isDisabled,
    ref
  });
  let domProps = filterDOMProps(otherProps, {
    labelable: true
  });
  return {
    isPressed,
    // Used to indicate press state for visual
    linkProps: mergeProps(domProps, _extends({}, pressProps, linkProps, {
      'aria-disabled': isDisabled || undefined,
      onClick: e => {
        pressProps.onClick(e);

        if (deprecatedOnClick) {
          deprecatedOnClick(e);
          console.warn('onClick is deprecated, please use onPress');
        }
      }
    }))
  };
}

const RootBoogie$1 = styled('a', {
  textDecoration: 'none',
  position: 'relative',
  width: 'fit-content',
  zIndex: 11,
  cursor: 'pointer'
});
const LinkVariants = styled(RootBoogie$1, {
  variants: {
    primary: {
      true: {
        '&:hover': {
          '&::after': {
            width: '110%',
            position: 'absolute'
          }
        },
        '&:active': {
          '&::after': {
            backgroundColor: '$primary200'
          }
        },
        '&::after': {
          content: `''`,
          position: 'absolute',
          display: 'inline-block',
          top: '8px',
          left: '-5px',
          height: '10px',
          zIndex: -10,
          width: 0,
          backgroundColor: '$primary100',
          transition: '0.8s ease'
        },
        '&:focus': {
          outline: 'none',
          '&::after': {
            content: `''`,
            position: 'absolute',
            display: 'inline-block',
            top: '8px',
            left: '-5px',
            height: '10px',
            zIndex: -10,
            width: '100%',
            backgroundColor: '$primary100',
            transition: '0.8s ease'
          }
        }
      }
    },
    secondary: {
      true: {
        '&:hover': {
          '&::after': {
            width: '110%',
            position: 'absolute'
          }
        },
        '&:active': {
          '&::after': {
            backgroundColor: '$secondary200'
          }
        },
        '&::after': {
          content: `''`,
          position: 'absolute',
          display: 'inline-block',
          top: '8px',
          left: '-5px',
          height: '10px',
          zIndex: -10,
          width: 0,
          backgroundColor: '$secondary100',
          transition: '0.8s ease'
        },
        '&:focus': {
          outline: 'none',
          '&::after': {
            content: `''`,
            position: 'absolute',
            display: 'inline-block',
            top: '8px',
            left: '-5px',
            height: '10px',
            zIndex: -10,
            width: '100%',
            backgroundColor: '$secondary100',
            transition: '0.8s ease'
          }
        }
      }
    }
  }
});
/**
 * A simple, accesible button component.
 * The `href` prop is used to navigate internally or externally.
 * When used with Nextjs, the `as` prop wont work, instead, wrap this component
 * with the Nextjs Link conponent.
 * @param color - primary | secondary
 */

const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardRef) => {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);

  const {
    linkProps
  } = useLink(props, ref);
  const {
    children,
    href,
    target,
    stylz
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LinkVariants, {
    css: { ...stylz
    },
    ...linkProps,
    ref: forwardRef,
    href: href,
    target: target,
    ...props
  }, children);
}); // auto-fill vs auto-fit https://gridbyexample.com/examples/example37/


const RootBoogie = styled('div', {
  variants: {
    maxWidth: {
      500: {
        maxWidth: '500px'
      },
      1000: {
        maxWidth: '1000px'
      },
      1440: {
        maxWidth: '1440px'
      }
    },
    autoFill300: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 300px))'
      }
    },
    autoFill350: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 350px))'
      }
    },
    autoFill400: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 400px))'
      }
    },
    autoFill450: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 450px))'
      }
    },
    autoFill500: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fill, minmax(auto, 500px))'
      }
    },
    autoFit300: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 300px))'
      }
    },
    autoFit350: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 350px))'
      }
    },
    autoFit400: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 400px))'
      }
    },
    autoFit450: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 450px))'
      }
    },
    autoFit500: {
      true: {
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(auto-fit, minmax(auto, 500px))'
      }
    },
    flex: {
      row: {
        display: 'flex',
        flexDirection: 'row'
      },
      column: {
        display: 'flex',
        flexDirection: 'column'
      }
    },
    align: {
      center: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      even: {
        justifyContent: 'space-evenly',
        alignItems: 'center'
      },
      around: {
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      between: {
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    },
    primaryBottomRight: {
      true: {
        boxShadow: '$primaryBoxBottomRight'
      }
    },
    secondaryBottomRight: {
      true: {
        boxShadow: '$secondaryBoxBottomRight'
      }
    },
    primaryBottomLeft: {
      true: {
        boxShadow: '$primaryBoxBottomLeft'
      }
    },
    secondaryBottomLeft: {
      true: {
        boxShadow: '$secondaryBoxBottomLeft'
      }
    },
    primaryTopRight: {
      true: {
        boxShadow: '$primaryBoxTopRight'
      }
    },
    secondaryTopRight: {
      true: {
        boxShadow: '$secondaryBoxTopRight'
      }
    },
    primaryTopLeft: {
      true: {
        boxShadow: '$primaryBoxTopLeft'
      }
    },
    secondaryTopLeft: {
      true: {
        boxShadow: '$secondaryBoxTopLeft'
      }
    },
    border: {
      true: {
        border: 'solid 2px $darkText'
      }
    }
  }
});
/**
 * A polymorphic box that can become one of the following HTML elements:
 * `div` | `section` | `main` | `header` | `nav` | `footer` | `aside` | `article`
 * @param stylz - Style the container by adding object syntax css. Accepts theme tokens as $myThemeToken
 * @param flex - Creates a flexbox, decide the direction: `row` | `column`
 * @param border - Attaches a 2px border
 * @param maxWidth - Max width of the box. `500` | `1000` | `1440`
 * @param autoFill300 - Responsive grid (auto-fill), min - auto, max - 300px
 * @param autoFill350 - Responsive grid (auto-fill), min - auto, max - 350px
 * @param autoFill400 - Responsive grid (auto-fill), min - auto, max - 400px
 * @param autoFill450 - Responsive grid (auto-fill), min - auto, max - 450px
 * @param autoFill500 - Responsive grid (auto-fill), min - auto, max - 500px
 * @param autoFit300 - Responsive grid (auto-fit), min - auto, max - 300px
 * @param autoFit350 - Responsive grid (auto-fit), min - auto, max - 350px
 * @param autoFit400 - Responsive grid (auto-fit), min - auto, max - 400px
 * @param autoFit450 - Responsive grid (auto-fit), min - auto, max - 450px
 * @param autoFit500 - Responsive grid (auto-fit), min - auto, max - 500px
 * @param primaryBottomRight - A box shadow using the primary color on the bottom right
 * @param primaryBottomLeft - A box shadow using the primary color on the bottom left
 * @param primaryTopRight - A box shadow using the primary color on the top right
 * @param primaryTopLeft - A box shadow using the primary color on the top left
 * @param secondaryTopLeft - A box shadow using the secondary color on the top left
 * @param secondaryTopRight - A box shadow using the secondary color on the top right
 * @param secondaryBottomLeft - A box shadow using the secondary color on the bottom left
 * @param secondaryBottomRight - A box shadow using the secondary color on the bottom right
 */

const Box = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardRef) => {
  const {
    stylz
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RootBoogie, {
    css: { ...stylz
    },
    ...props,
    ref: forwardRef
  });
});

const BoogieBase = styled('p', {
  fontFamily: '$body',
  variants: {
    size: {
      xs: {
        fontSize: '$xs'
      },
      s: {
        fontSize: '$s'
      },
      m: {
        fontSize: '$m'
      },
      l: {
        fontSize: '$l'
      },
      xl: {
        fontSize: '$xl'
      },
      xxl: {
        fontSize: '$xxl'
      },
      huge: {
        fontSize: '$huge'
      },
      jumbo: {
        fontSize: '$jumbo'
      }
    }
  }
});
/**
 * A polymorphic typography component that can become one of the following HTML elements:
 * 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'blockquote' | 'dd' | 'li' | 'abbr' | 'cite' | 'q' | 's'
 * @param stylz - Style the element by adding object syntax css. Accepts theme tokens as $myThemeToken
 * @param xs - Extra small font size
 * @param s - Small font size
 * @param m - Medium font size
 * @param l - Large font size
 * @param xl - Extra large font size
 * @param xxl - Double extra large font size
 * @param huge - Huge large font size
 * @param jumbo - Jumbo large font size
 */

const Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardRef) => {
  const {
    stylz
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BoogieBase, {
    css: { ...stylz
    },
    ...props,
    ref: forwardRef
  });
});
/**
 * Set your font globally with a self hosted font-face.
 * @param fontFamily - The font family. For example: CustomFont1
 * @param src - The path to the self hosted font. For example: local("CustomFont1"), url("CustomFont1.woff2")
 */


const fontFace = (fontFamily, src) => D({
  '@font-face': {
    fontFamily,
    src
  }
});
/**
* Set your font globally with a self hosted font-face. This function sets multiple fonts
* @param fontFaces - An array of font family values.
* The config requires an object array where each object is:
* @example
*  {
    fontFamily: 'CustomFont1',
    src: 'local("CustomFont1"), url("CustomFont1.woff2")',
  },
  {
    fontFamily: 'CustomFont2',
    src: 'local("CustomFont2"), url("CustomFont2.woff2")',
  },
*/


const multiFontFace = fontFaces => D({
  '@font-face': [...fontFaces]
});
/**
* A global css reset. Call function at the root level of your app.
*/


const resetCSS = D({
  '*': {
    verticalAlign: 'baseline',
    fontWeight: 'inherit',
    fontFamily: 'inherit',
    fontStyle: 'inherit',
    fontSize: '100%',
    border: '0 none',
    outline: 0,
    padding: 0,
    margin: 0
  }
});


/***/ }),

/***/ "../../node_modules/lodash/_Hash.js":
/*!******************************************!*\
  !*** ../../node_modules/lodash/_Hash.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "../../node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "../../node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "../../node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "../../node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "../../node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "../../node_modules/lodash/_ListCache.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_ListCache.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "../../node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "../../node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "../../node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "../../node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "../../node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "../../node_modules/lodash/_Map.js":
/*!*****************************************!*\
  !*** ../../node_modules/lodash/_Map.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "../../node_modules/lodash/_MapCache.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_MapCache.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "../../node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "../../node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "../../node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "../../node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "../../node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "../../node_modules/lodash/_Stack.js":
/*!*******************************************!*\
  !*** ../../node_modules/lodash/_Stack.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../../node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "../../node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "../../node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "../../node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "../../node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "../../node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "../../node_modules/lodash/_Symbol.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/_Symbol.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../../node_modules/lodash/_Uint8Array.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_Uint8Array.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "../../node_modules/lodash/_apply.js":
/*!*******************************************!*\
  !*** ../../node_modules/lodash/_apply.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "../../node_modules/lodash/_arrayLikeKeys.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_arrayLikeKeys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../../node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../../node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../../node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "../../node_modules/lodash/_assignMergeValue.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash/_assignMergeValue.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "../../node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "../../node_modules/lodash/_assignValue.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_assignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "../../node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "../../node_modules/lodash/_assocIndexOf.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_assocIndexOf.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "../../node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "../../node_modules/lodash/_baseAssignValue.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_baseAssignValue.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "../../node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "../../node_modules/lodash/_baseCreate.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_baseCreate.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "../../node_modules/lodash/_baseFor.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_baseFor.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "../../node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "../../node_modules/lodash/_baseGetTag.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_baseGetTag.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../../node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../../node_modules/lodash/_baseIsArguments.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_baseIsArguments.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "../../node_modules/lodash/_baseIsNative.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_baseIsNative.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../../node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../../node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "../../node_modules/lodash/_baseIsTypedArray.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash/_baseIsTypedArray.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "../../node_modules/lodash/_baseKeysIn.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_baseKeysIn.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "../../node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "../../node_modules/lodash/_baseMerge.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_baseMerge.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "../../node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "../../node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "../../node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "../../node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../../node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "../../node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "../../node_modules/lodash/_baseMergeDeep.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_baseMergeDeep.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "../../node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "../../node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "../../node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "../../node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "../../node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "../../node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "../../node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "../../node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../../node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "../../node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "../../node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "../../node_modules/lodash/_baseRest.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_baseRest.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "../../node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "../../node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "../../node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "../../node_modules/lodash/_baseSetToString.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_baseSetToString.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "../../node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "../../node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "../../node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "../../node_modules/lodash/_baseTimes.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_baseTimes.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "../../node_modules/lodash/_baseUnary.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_baseUnary.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "../../node_modules/lodash/_cloneArrayBuffer.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash/_cloneArrayBuffer.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "../../node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "../../node_modules/lodash/_cloneBuffer.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_cloneBuffer.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "../../node_modules/lodash/_cloneTypedArray.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_cloneTypedArray.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../../node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "../../node_modules/lodash/_copyArray.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_copyArray.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "../../node_modules/lodash/_copyObject.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_copyObject.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "../../node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../../node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "../../node_modules/lodash/_coreJsData.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_coreJsData.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "../../node_modules/lodash/_createAssigner.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_createAssigner.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "../../node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "../../node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "../../node_modules/lodash/_createBaseFor.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_createBaseFor.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "../../node_modules/lodash/_defineProperty.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_defineProperty.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "../../node_modules/lodash/_freeGlobal.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_freeGlobal.js ***!
  \************************************************/
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ "../../node_modules/lodash/_getMapData.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_getMapData.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "../../node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "../../node_modules/lodash/_getNative.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_getNative.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../../node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../../node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "../../node_modules/lodash/_getPrototype.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_getPrototype.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "../../node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "../../node_modules/lodash/_getRawTag.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_getRawTag.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../../node_modules/lodash/_getValue.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_getValue.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "../../node_modules/lodash/_hashClear.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_hashClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "../../node_modules/lodash/_hashDelete.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_hashDelete.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "../../node_modules/lodash/_hashGet.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_hashGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "../../node_modules/lodash/_hashHas.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_hashHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "../../node_modules/lodash/_hashSet.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_hashSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "../../node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "../../node_modules/lodash/_initCloneObject.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_initCloneObject.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "../../node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../../node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "../../node_modules/lodash/_isIndex.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_isIndex.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "../../node_modules/lodash/_isIterateeCall.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_isIterateeCall.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "../../node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../../node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "../../node_modules/lodash/_isKeyable.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_isKeyable.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "../../node_modules/lodash/_isMasked.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_isMasked.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../../node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "../../node_modules/lodash/_isPrototype.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_isPrototype.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "../../node_modules/lodash/_listCacheClear.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_listCacheClear.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "../../node_modules/lodash/_listCacheDelete.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_listCacheDelete.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "../../node_modules/lodash/_listCacheGet.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_listCacheGet.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "../../node_modules/lodash/_listCacheHas.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_listCacheHas.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "../../node_modules/lodash/_listCacheSet.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_listCacheSet.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "../../node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "../../node_modules/lodash/_mapCacheClear.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_mapCacheClear.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "../../node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "../../node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../../node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "../../node_modules/lodash/_mapCacheDelete.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_mapCacheDelete.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "../../node_modules/lodash/_mapCacheGet.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_mapCacheGet.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "../../node_modules/lodash/_mapCacheHas.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_mapCacheHas.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "../../node_modules/lodash/_mapCacheSet.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_mapCacheSet.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "../../node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "../../node_modules/lodash/_nativeCreate.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_nativeCreate.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "../../node_modules/lodash/_nativeKeysIn.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_nativeKeysIn.js ***!
  \**************************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "../../node_modules/lodash/_nodeUtil.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_nodeUtil.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "../../node_modules/lodash/_objectToString.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_objectToString.js ***!
  \****************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../../node_modules/lodash/_overArg.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_overArg.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "../../node_modules/lodash/_overRest.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_overRest.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "../../node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "../../node_modules/lodash/_root.js":
/*!******************************************!*\
  !*** ../../node_modules/lodash/_root.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../../node_modules/lodash/_safeGet.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_safeGet.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "../../node_modules/lodash/_setToString.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_setToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "../../node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "../../node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "../../node_modules/lodash/_shortOut.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_shortOut.js ***!
  \**********************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "../../node_modules/lodash/_stackClear.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_stackClear.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../../node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "../../node_modules/lodash/_stackDelete.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_stackDelete.js ***!
  \*************************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "../../node_modules/lodash/_stackGet.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_stackGet.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "../../node_modules/lodash/_stackHas.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_stackHas.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "../../node_modules/lodash/_stackSet.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_stackSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../../node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../../node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "../../node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "../../node_modules/lodash/_toSource.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_toSource.js ***!
  \**********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "../../node_modules/lodash/constant.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/constant.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "../../node_modules/lodash/eq.js":
/*!***************************************!*\
  !*** ../../node_modules/lodash/eq.js ***!
  \***************************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "../../node_modules/lodash/identity.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/identity.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "../../node_modules/lodash/isArguments.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/isArguments.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../../node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "../../node_modules/lodash/isArray.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/isArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "../../node_modules/lodash/isArrayLike.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/isArrayLike.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "../../node_modules/lodash/isArrayLikeObject.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash/isArrayLikeObject.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "../../node_modules/lodash/isBuffer.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../../node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "../../node_modules/lodash/isFunction.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/isFunction.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "../../node_modules/lodash/isLength.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isLength.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "../../node_modules/lodash/isObject.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isObject.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../../node_modules/lodash/isObjectLike.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/isObjectLike.js ***!
  \*************************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../../node_modules/lodash/isPlainObject.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/isPlainObject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../../node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "../../node_modules/lodash/isTypedArray.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/isTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../../node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../../node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "../../node_modules/lodash/keysIn.js":
/*!*******************************************!*\
  !*** ../../node_modules/lodash/keysIn.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "../../node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "../../node_modules/lodash/merge.js":
/*!******************************************!*\
  !*** ../../node_modules/lodash/merge.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "../../node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "../../node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "../../node_modules/lodash/stubFalse.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/stubFalse.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../../node_modules/lodash/toPlainObject.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/toPlainObject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../../node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../../node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!*************************************************!*\
  !*** ../../node_modules/object-assign/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../node_modules/prop-types/checkPropTypes.js":
/*!*******************************************************!*\
  !*** ../../node_modules/prop-types/checkPropTypes.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!****************************************************************!*\
  !*** ../../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../../node_modules/prop-types/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/prop-types/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../node_modules/react-is/cjs/react-is.development.js":
/*!***************************************************************!*\
  !*** ../../node_modules/react-is/cjs/react-is.development.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../../node_modules/react-is/index.js":
/*!********************************************!*\
  !*** ../../node_modules/react-is/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "react-dom/server":
/*!************************************************************************************!*\
  !*** external "/Users/richhaines/repos/humix-ui/node_modules/react-dom/server.js" ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/richhaines/repos/humix-ui/node_modules/react-dom/server.js");;

/***/ }),

/***/ "react":
/*!*******************************************************************************!*\
  !*** external "/Users/richhaines/repos/humix-ui/node_modules/react/index.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("/Users/richhaines/repos/humix-ui/node_modules/react/index.js");;

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************!*\
  !*** ./.cache/develop-static-entry.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "../../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_runner_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");
/* harmony import */ var _api_runner_ssr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api_runner_ssr__WEBPACK_IMPORTED_MODULE_3__);



 // import testRequireError from "./test-require-error"
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

const testRequireError = (moduleName, err) => {
  const regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`);
  const firstLine = err.toString().split(`\n`)[0];
  return regex.test(firstLine);
};

let Html;

try {
  Html = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
} catch (err) {
  if (testRequireError(`../src/html`, err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    console.log(`There was an error requiring "src/html.js"\n\n`, err, `\n\n`);
    process.exit();
  }
}

Html = Html && Html.__esModule ? Html.default : Html;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  pagePath
}) => {
  let headComponents = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
    key: "environment",
    name: "note",
    content: "environment=development"
  })];
  let htmlAttributes = {};
  let bodyAttributes = {};
  let preBodyComponents = [];
  let postBodyComponents = [];
  let bodyProps = {};
  let htmlStr;

  const setHeadComponents = components => {
    headComponents = headComponents.concat(components);
  };

  const setHtmlAttributes = attributes => {
    htmlAttributes = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(htmlAttributes, attributes);
  };

  const setBodyAttributes = attributes => {
    bodyAttributes = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(bodyAttributes, attributes);
  };

  const setPreBodyComponents = components => {
    preBodyComponents = preBodyComponents.concat(components);
  };

  const setPostBodyComponents = components => {
    postBodyComponents = postBodyComponents.concat(components);
  };

  const setBodyProps = props => {
    bodyProps = lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()({}, bodyProps, props);
  };

  const getHeadComponents = () => headComponents;

  const replaceHeadComponents = components => {
    headComponents = components;
  };

  const getPreBodyComponents = () => preBodyComponents;

  const replacePreBodyComponents = components => {
    preBodyComponents = components;
  };

  const getPostBodyComponents = () => postBodyComponents;

  const replacePostBodyComponents = components => {
    postBodyComponents = components;
  };

  _api_runner_ssr__WEBPACK_IMPORTED_MODULE_3___default()(`onRenderBody`, {
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
    setPreBodyComponents,
    setPostBodyComponents,
    setBodyProps,
    pathname: pagePath
  });
  _api_runner_ssr__WEBPACK_IMPORTED_MODULE_3___default()(`onPreRenderHTML`, {
    getHeadComponents,
    replaceHeadComponents,
    getPreBodyComponents,
    replacePreBodyComponents,
    getPostBodyComponents,
    replacePostBodyComponents,
    pathname: pagePath
  });
  const htmlElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Html, { ...bodyProps,
    body: ``,
    headComponents: headComponents.concat([/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
      key: `io`,
      src: "/socket.io/socket.io.js"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
      key: "styles",
      rel: "stylesheet",
      href: "/commons.css"
    })]),
    htmlAttributes,
    bodyAttributes,
    preBodyComponents,
    postBodyComponents: postBodyComponents.concat([/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
      key: `polyfill`,
      src: "/polyfill.js",
      noModule: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
      key: `framework`,
      src: "/framework.js"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
      key: `commons`,
      src: "/commons.js"
    })])
  });
  htmlStr = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToStaticMarkup)(htmlElement);
  htmlStr = `<!DOCTYPE html>${htmlStr}`;
  return htmlStr;
});
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=render-page.js.map