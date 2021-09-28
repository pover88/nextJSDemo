"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(445);
// EXTERNAL MODULE: ./styles/utils.module.css
var utils_module = __webpack_require__(855);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "gray-matter"
const external_gray_matter_namespaceObject = require("gray-matter");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_namespaceObject);
;// CONCATENATED MODULE: ./lib/posts.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const postsDirectory = external_path_default().join(process.cwd(), 'posts');
function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = external_fs_default().readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, ''); // Read markdown file as string

    const fullPath = external_path_default().join(postsDirectory, fileName);
    const fileContents = external_fs_default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

    const matterResult = external_gray_matter_default()(fileContents); // Combine the data with the id

    return _objectSpread({
      id
    }, matterResult.data);
  }); // Sort posts by date

  return allPostsData.sort(({
    date: a
  }, {
    date: b
  }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
;// CONCATENATED MODULE: external "contentful"
const external_contentful_namespaceObject = require("contentful");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/productCard.js




function ProductCard({
  product
}) {
  const {
    productName,
    productDescription,
    productImage
  } = product.fields;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "card",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "featured",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: 'https:' + productImage.fields.file.url,
        width: productImage.fields.file.details.image.width,
        height: productImage.fields.file.details.image.height
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "content",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "info",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          children: productName
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: productDescription
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "actions",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/products/productPage",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "More Information"
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
  });
}
;// CONCATENATED MODULE: ./pages/index.js









async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const client = (0,external_contentful_namespaceObject.createClient)({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });
  const res = await client.getEntries({
    content_type: 'product'
  });
  return {
    props: {
      allPostsData,
      products: res.items
    }
  };
}
function Home({
  allPostsData,
  products
}) {
  //console.log(products)
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout/* default */.Z, {
    home: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: layout/* siteTitle */.y
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("section", {
      className: (utils_module_default()).headingMd,
      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "This is a test to showcase different rendering strategies in conjunction with nextJS and contentful"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
      className: `${(utils_module_default()).headingMd} ${(utils_module_default()).padding1px}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: (utils_module_default()).headingLg,
        children: "Product Stories"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Read interesting stories about how other customer use our products"
      }), products.map(product => /*#__PURE__*/jsx_runtime_.jsx(ProductCard, {
        product: product
      }, product.sys.id))]
    })]
  });
}

/***/ }),

/***/ 325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61,938], () => (__webpack_exec__(271)));
module.exports = __webpack_exports__;

})();