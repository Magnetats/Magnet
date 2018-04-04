exports.id = 0;
exports.modules = {

/***/ "./client/src/components/UserHome/LeftNav/LeftNav.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon__ = __webpack_require__("semantic-ui-react/dist/commonjs/elements/Icon/Icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Image_Image__ = __webpack_require__("semantic-ui-react/dist/commonjs/elements/Image/Image");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Image_Image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Image_Image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react_dist_commonjs_collections_Menu_Menu__ = __webpack_require__("semantic-ui-react/dist/commonjs/collections/Menu/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react_dist_commonjs_collections_Menu_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react_dist_commonjs_collections_Menu_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styling_theme_variables__ = __webpack_require__("./client/src/styling/theme/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TopNav_TopNav__ = __webpack_require__("./client/src/components/UserHome/TopNav/TopNav.jsx");




var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var LeftNav = function (_Component) {
  _inherits(LeftNav, _Component);

  function LeftNav(props) {
    _classCallCheck(this, LeftNav);

    var _this = _possibleConstructorReturn(this, (LeftNav.__proto__ || Object.getPrototypeOf(LeftNav)).call(this, props));

    _this.state = {
      activeItem: 'home'
      // visible: false

      // this.toggleVisibility = this.toggleVisibility.bind(this)
    };_this.handleItemClick = _this.handleItemClick.bind(_this);
    return _this;
  }

  // toggleVisibility() {
  //   this.setState({
  //     visible: !this.state.visible,
  //     activeItem: 'home'
  //   })
  // }


  _createClass(LeftNav, [{
    key: 'handleItemClick',
    value: function handleItemClick(e, _ref) {
      var name = _ref.name;

      this.setState({
        activeItem: name
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          visible = _state.visible,
          activeItem = _state.activeItem;


      var LeftNavMenu = __WEBPACK_IMPORTED_MODULE_4_styled_components___default()(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react_dist_commonjs_collections_Menu_Menu___default.a).withConfig({
        displayName: 'LeftNav__LeftNavMenu',
        componentId: 'btrex0-0'
      })(['& #side-user-pic{min-width:6em;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:#fff;border-radius:0.28571429rem 0.28571429rem 0 0;border-radius:0 !important;background:0 0;color:rgba(255,255,255,0.9);height:auto;text-align:center;color:#1b1c1d;display:block;background:0 0;border-top:none;border-right:none;border-radius:5px 5px 0px 0px;padding:16px;&:hover{color:', ';}}&&&&{width:0%;min-width:120px;margin-left:2.4%;top:59px;background-color:#fff;position:relative;margin-top:21px;border-radius:5px 5px 5px 5px;-webkit-box-shadow:17px 25px 94px -10px rgba(48,72,97,1);-moz-box-shadow:17px 25px 94px -10px rgba(48,72,97,1);box-shadow:17px 25px 94px -10px rgba(48,72,97,1);}'], __WEBPACK_IMPORTED_MODULE_5__styling_theme_variables__["e" /* medBlue */]);

      var LeftNavMenuItem = __WEBPACK_IMPORTED_MODULE_4_styled_components___default()(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react_dist_commonjs_collections_Menu_Menu___default.a.Item).withConfig({
        displayName: 'LeftNav__LeftNavMenuItem',
        componentId: 'btrex0-1'
      })(['&&&&&&{&.active{font-size:104%;background-color:#565656 !important;color:transparent !important;text-shadow:2px 2px 3px rgba(255,255,255,0.5);-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;&:after{height:18px;width:18px;background-color:white !important;&:hover{height:18px;width:18px;background-color:white !important;}}}color:', ';background-color:', ' !important;font-weight:500;&:last-child{border-radius:0px 0px 5px 5px;}&:hover{font-size:104%;background-color:#565656 !important;color:transparent !important;text-shadow:2px 2px 3px rgba(255,255,255,0.5);-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;}}'], __WEBPACK_IMPORTED_MODULE_5__styling_theme_variables__["c" /* darkerWhite */], __WEBPACK_IMPORTED_MODULE_5__styling_theme_variables__["e" /* medBlue */]);

      var NavIcon = __WEBPACK_IMPORTED_MODULE_4_styled_components___default()(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a).withConfig({
        displayName: 'LeftNav__NavIcon',
        componentId: 'btrex0-2'
      })(['color:', ';font-weight:600;&:hover{font-size:102%;background-color:#565656 !important;color:transparent !important;text-shadow:2px 2px 3px rgba(255,255,255,0.5);-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;}}'], __WEBPACK_IMPORTED_MODULE_5__styling_theme_variables__["c" /* darkerWhite */]);

      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        { id: 'sidebar-container' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__TopNav_TopNav__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          LeftNavMenu,
          {
            pointing: true,
            vertical: true,
            icon: 'labeled',
            inverted: true,
            className: 'side-nav-background'
          },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            LeftNavMenuItem,
            {
              name: 'user pic',
              id: 'side-user-pic'
            },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Image_Image___default.a, { src: 'https://pbs.twimg.com/profile_images/965410440120483840/ydq7NYb4_400x400.jpg', size: 'medium', circular: true })
          ),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            LeftNavMenuItem,
            {
              name: 'home',
              className: 'menu-names',
              active: activeItem === 'home',
              onClick: this.handleItemClick
            },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(NavIcon, {
              name: 'home',
              className: 'left-nav-icons'
            }),
            'Home'
          ),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            LeftNavMenuItem,
            {
              name: 'jobs',
              className: 'menu-names',
              active: activeItem === 'jobs',
              onClick: this.handleItemClick
            },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(NavIcon, {
              name: 'suitcase',
              className: 'left-nav-icons'
            }),
            'My Jobs'
          ),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            LeftNavMenuItem,
            {
              name: 'candidates',
              className: 'menu-names',
              active: activeItem === 'candidates',
              onClick: this.handleItemClick
            },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(NavIcon, {
              name: 'users',
              className: 'left-nav-icons'
            }),
            'Candidates'
          ),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            LeftNavMenuItem,
            {
              name: 'metrics',
              className: 'menu-names',
              active: activeItem === 'metrics',
              onClick: this.handleItemClick
            },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(NavIcon, {
              name: 'bar chart',
              className: 'left-nav-icons'
            }),
            'Metrics'
          )
        )
      );
    }
  }]);

  return LeftNav;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

var _default = LeftNav;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LeftNav, 'LeftNav', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/LeftNav.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/LeftNav.jsx');
}();

;

/***/ })

};