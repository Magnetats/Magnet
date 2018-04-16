exports.id = 0;
exports.modules = {

/***/ "./client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/ResumeReview.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon__ = __webpack_require__("semantic-ui-react/dist/commonjs/elements/Icon/Icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion__ = __webpack_require__("semantic-ui-react/dist/commonjs/modules/Accordion/Accordion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ResumeReview = function (_Component) {
  _inherits(ResumeReview, _Component);

  function ResumeReview(props) {
    _classCallCheck(this, ResumeReview);

    var _this = _possibleConstructorReturn(this, (ResumeReview.__proto__ || Object.getPrototypeOf(ResumeReview)).call(this, props));

    _this.state = {
      activeIndex: 0
    };
    return _this;
  }

  _createClass(ResumeReview, [{
    key: 'handleClick',
    value: function handleClick(e, titleProps) {
      var index = titleProps.index;
      var activeIndex = this.state.activeIndex;

      var newIndex = activeIndex === index ? -1 : index;
      this.setState({ activeIndex: newIndex });
    }
  }, {
    key: 'render',
    value: function render() {
      var activeIndex = this.state.activeIndex;


      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a,
        { styled: true },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a.Title,
          {
            active: activeIndex === 0,
            index: 0,
            onClick: this.handleClick
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, { name: 'dropdown' }),
          'What is a dog?'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a.Content,
          { active: activeIndex === 0 },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'p',
            null,
            'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a.Title,
          {
            active: activeIndex === 1,
            index: 1,
            onClick: this.handleClick
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, { name: 'dropdown' }),
          'What kinds of dogs are there?'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a.Content,
          { active: activeIndex === 1 },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'p',
            null,
            'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a.Title,
          {
            active: activeIndex === 2,
            index: 2,
            onClick: this.handleClick
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, { name: 'dropdown' }),
          'How do you acquire a dog?'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a.Content,
          { active: activeIndex === 2 },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'p',
            null,
            'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'p',
            null,
            'A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.'
          )
        )
      );
    }
  }]);

  return ResumeReview;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

var _default = ResumeReview;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ResumeReview, 'ResumeReview', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/ResumeReview.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/ResumeReview.jsx');
}();

;

/***/ })

};