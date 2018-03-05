exports.id = 0;
exports.modules = {

/***/ "./client/src/components/UserHome/UserHome.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Button_Button__ = __webpack_require__("semantic-ui-react/dist/commonjs/elements/Button/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Button_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Button_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var UserHome = function (_React$Component) {
  _inherits(UserHome, _React$Component);

  function UserHome(props) {
    _classCallCheck(this, UserHome);

    return _possibleConstructorReturn(this, (UserHome.__proto__ || Object.getPrototypeOf(UserHome)).call(this, props));
  }

  _createClass(UserHome, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h1',
          null,
          'Hello Universe Router\'s in'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          null,
          'hey homeys'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Button_Button___default.a,
          { primary: true },
          'Primary'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Button_Button___default.a,
          { secondary: true },
          'Secondary'
        )
      );
    }
  }]);

  return UserHome;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

var _default = UserHome;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserHome, 'UserHome', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/UserHome.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/UserHome.jsx');
}();

;

/***/ })

};