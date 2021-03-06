"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _fs = _interopRequireDefault(require("fs"));

var _gatsbyCoreUtils = require("gatsby-core-utils");

var _common = require("./common.js");

var _getManifestPathname = _interopRequireDefault(require("./get-manifest-pathname"));

// TODO: remove for v3
var withPrefix = _gatsby.withAssetPrefix || _gatsby.withPrefix;
var iconDigest = null;

exports.onRenderBody = function (_ref, _ref2) {
  var setHeadComponents = _ref.setHeadComponents,
      _ref$pathname = _ref.pathname,
      pathname = _ref$pathname === void 0 ? "/" : _ref$pathname;
  var localize = _ref2.localize,
      pluginOptions = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["localize"]);
  // We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
  var headComponents = [];
  var srcIconExists = !!pluginOptions.icon;
  var icons = pluginOptions.icons || _common.defaultIcons;
  var legacy = typeof pluginOptions.legacy !== "undefined" ? pluginOptions.legacy : true;
  var cacheBusting = typeof pluginOptions.cache_busting_mode !== "undefined" ? pluginOptions.cache_busting_mode : "query"; // If icons were generated, also add a favicon link.

  if (srcIconExists) {
    var favicon = icons && icons.length ? icons[0].src : null;

    if (cacheBusting !== "none") {
      iconDigest = (0, _gatsbyCoreUtils.createContentDigest)(_fs.default.readFileSync(pluginOptions.icon));
    }

    var insertFaviconLinkTag = typeof pluginOptions.include_favicon !== "undefined" ? pluginOptions.include_favicon : true;

    if (favicon && insertFaviconLinkTag) {
      headComponents.push(_react.default.createElement("link", {
        key: "gatsby-plugin-manifest-icon-link",
        rel: "icon",
        href: withPrefix((0, _common.addDigestToPath)(favicon, iconDigest, cacheBusting))
      }));
    }
  }

  var manifestFileName = (0, _getManifestPathname.default)(pathname, localize); // Add manifest link tag.

  headComponents.push(_react.default.createElement("link", {
    key: "gatsby-plugin-manifest-link",
    rel: "manifest",
    href: withPrefix("/" + manifestFileName),
    crossOrigin: pluginOptions.crossOrigin
  })); // The user has an option to opt out of the theme_color meta tag being inserted into the head.

  if (pluginOptions.theme_color) {
    var insertMetaTag = typeof pluginOptions.theme_color_in_head !== "undefined" ? pluginOptions.theme_color_in_head : true;

    if (insertMetaTag) {
      headComponents.push(_react.default.createElement("meta", {
        key: "gatsby-plugin-manifest-meta",
        name: "theme-color",
        content: pluginOptions.theme_color
      }));
    }
  }

  if (legacy) {
    var iconLinkTags = icons.map(function (icon) {
      return _react.default.createElement("link", {
        key: "gatsby-plugin-manifest-apple-touch-icon-" + icon.sizes,
        rel: "apple-touch-icon",
        sizes: icon.sizes,
        href: withPrefix((0, _common.addDigestToPath)(icon.src, iconDigest, srcIconExists ? cacheBusting : "none"))
      });
    });
    headComponents = [].concat(headComponents, iconLinkTags);
  }

  setHeadComponents(headComponents);
  return true;
};