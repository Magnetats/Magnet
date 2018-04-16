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
      content: __WEBPACK_IMPORTED_MODULE_5__ResumeReview__["a" /* default */].Accordion,
      position: 'bottom center',
      verticalOffset: -5
      // hoverable="false"
      , on: 'focus'
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

/***/ })

};