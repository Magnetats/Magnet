exports.id = 0;
exports.modules = {

/***/ "./client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStages.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_modules_Popup_Popup__ = __webpack_require__("semantic-ui-react/dist/commonjs/modules/Popup/Popup");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_modules_Popup_Popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_modules_Popup_Popup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon__ = __webpack_require__("semantic-ui-react/dist/commonjs/elements/Icon/Icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__ = __webpack_require__("./client/src/styling/theme/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResumeReview__ = __webpack_require__("./client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/ResumeReview.jsx");



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var FunnelDiv = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
  displayName: 'FunnelStages__FunnelDiv',
  componentId: 's9e2m4z-0'
})(['']);
var FunnelStage = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
  displayName: 'FunnelStages__FunnelStage',
  componentId: 's9e2m4z-1'
})(['{height:49px;color:', ';font-size:91%;font-weight:500;background-color:#FFFFFF;border:5px solid ', ' !important;margin-right:24px;padding-top:3px;display:inline-block;text-align:center;vertical-align:middle;overflow:visible;white-space:nowrap;text-overflow:ellipsis;width:89px;position:relative;border-radius:11px;&:hover{background:', ';color:#FFFFFF;&:after{top:50%;left:78px;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(136,183,213,0);border-left-color:', ' !important;border-width:9px;margin-top:-9px;}}}p{&:first-child{margin-bottom:-3px;}}p{&:last-child{margin-bottom:1px;}}&:last-child{p{padding-top:9px;text-align:center;margin-bottom:17px;}}}.funnel-number{color:', ';&:hover{color:', ';}}.icons-n-numbers{position:relative;top:-4px;& i{top:-2px;position:relative;}}&.funnel-stage{&:before{white-space:none;text-overflow:none;left:100%;top:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(194,225,245,0);border-left-color:#c2e1f5;border-width:15px;margin-top:-15px;}&:after{white-space:none;text-overflow:none;top:50%;left:78px;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(136,183,213,0);border-left-color:#FFFFFF;border-width:9px;margin-top:-9px;}&:last-child{&:after{color:transparent !important;border-color:transparent !important;background-color:transparent !important;}&:before{color:transparent !important;border-color:transparent !important;background-color:transparent !important;}}}'], __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__["c" /* appGrayLightest */], __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__["d" /* lightestBlueBorder */], __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__["f" /* medBlue */], __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__["f" /* medBlue */], __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__["c" /* appGrayLightest */], __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__["c" /* appGrayLightest */]);

var FunnelStages = function FunnelStages() {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    FunnelDiv,
    null,
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_modules_Popup_Popup___default.a, _defineProperty({
      trigger: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        FunnelStage,
        {
          className: 'funnel-stage'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'p',
          null,
          'Resume'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'p',
          null,
          'Review'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            className: 'icons-n-numbers'
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
            size: 'large',
            name: 'users',
            className: 'funnel-number'
          }),
          '12,300'
        )
      ),
      inverted: true,
      content: 'As expected this popup is way off to the bottom',
      position: 'bottom center',
      verticalOffset: -5,
      hoverable: 'false',
      on: 'focus'
    }, 'on', 'hover')),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      FunnelStage,
      {
        className: 'funnel-stage'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Subbed to'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Recruiter'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'icons-n-numbers'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
          size: 'large',
          name: 'users',
          className: 'funnel-number'
        }),
        '12,300'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      FunnelStage,
      {
        className: 'funnel-stage'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Hiring '
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Team Screens'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'icons-n-numbers'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
          size: 'large',
          name: 'users',
          className: 'funnel-number'
        }),
        '12,300'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      FunnelStage,
      {
        className: 'funnel-stage'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Onsite'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Interviews'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'icons-n-numbers'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
          size: 'large',
          name: 'users',
          className: 'funnel-number'
        }),
        '12,300'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      FunnelStage,
      {
        className: 'funnel-stage'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Offers'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Extended'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'icons-n-numbers'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
          size: 'large',
          name: 'users',
          className: 'funnel-number'
        }),
        '12,300'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      FunnelStage,
      {
        className: 'funnel-stage'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Offers'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Accepted'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'icons-n-numbers'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
          size: 'large',
          name: 'users',
          className: 'funnel-number'
        }),
        '12,300'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      FunnelStage,
      {
        className: 'funnel-stage'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Hired'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'icons-n-numbers'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
          size: 'large',
          name: 'users',
          className: 'funnel-number'
        }),
        '12,300'
      )
    )
  );
};

var _default = FunnelStages;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FunnelDiv, 'FunnelDiv', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStages.jsx');

  __REACT_HOT_LOADER__.register(FunnelStage, 'FunnelStage', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStages.jsx');

  __REACT_HOT_LOADER__.register(FunnelStages, 'FunnelStages', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStages.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStages.jsx');
}();

;

/***/ }),

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
/* unused harmony default export */ var _unused_webpack_default_export = (_default);
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