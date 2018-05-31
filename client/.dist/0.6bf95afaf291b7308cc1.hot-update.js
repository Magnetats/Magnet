exports.id = 0;
exports.modules = {

/***/ "./client/src/components/Registration/RegisterUser.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form__ = __webpack_require__("semantic-ui-react/dist/commonjs/collections/Form/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var options = [{ key: 'r', text: 'Recruiter', value: 'Recruiter' }, { key: 'hm', text: 'Hiring Manager', value: 'Hiring Manager' }, { key: 'tm', text: 'Talent Manager', value: 'Talent Manager' }];

var RegisterUser = function (_Component) {
  _inherits(RegisterUser, _Component);

  function RegisterUser(props) {
    _classCallCheck(this, RegisterUser);

    var _this = _possibleConstructorReturn(this, (RegisterUser.__proto__ || Object.getPrototypeOf(RegisterUser)).call(this, props));

    _this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      userRole: '',
      password: '',
      password2: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(RegisterUser, [{
    key: 'handleChange',
    value: function handleChange(e, _ref) {
      var name = _ref.name,
          value = _ref.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _state = this.state,
          firstName = _state.firstName,
          lastName = _state.lastName,
          email = _state.email,
          username = _state.username,
          userRole = _state.userRole,
          password = _state.password,
          password2 = _state.password2;

      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/users/register', {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
        password2: password2,
        userRole: userRole
      }).then(function (response) {
        console.log(response);
      }).catch(function (err) {
        console.log(err);
      });
      this.setState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        password2: '',
        userRole: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          firstName = _state2.firstName,
          lastName = _state2.lastName,
          email = _state2.email,
          username = _state2.username,
          userRole = _state2.userRole,
          password = _state2.password,
          password2 = _state2.password2;
      var value = this.state.value;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'ui text container' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a,
          null,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Group,
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, {
              fluid: true,
              label: 'First name',
              placeholder: 'First name'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, {
              fluid: true,
              label: 'Last name',
              placeholder: 'Last name'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, {
              fluid: true,
              label: 'User Name',
              placeholder: 'User Name'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, {
              fluid: true,
              label: 'Company Name',
              placeholder: 'Company Name'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, {
              fluid: true,
              label: 'Password',
              placeholder: 'Password'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, {
              fluid: true,
              label: 'Repeat Password',
              placeholder: 'Repeat Password'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Select, {
              fluid: true,
              label: 'I am a',
              options: options,
              placeholder: 'Super Hero'
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Checkbox, { label: 'I agree to the Terms and Conditions' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Button,
            null,
            'Submit'
          )
        )
      );
    }
  }]);

  return RegisterUser;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = RegisterUser;


/* harmony default export */ __webpack_exports__["a"] = (_default);

// import React, { Component } from 'react'
// import { Popup, Button, Header, Image, Modal, Form, Message } from 'semantic-ui-react'

// class RegisterUser extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       open: false,
//     }
//      this.handleItemClick = this.handleItemClick.bind(this)
//    }

//   show = dimmer => () => this.setState({ dimmer, open: true })
//   close = () => this.setState({ open: false })

//   render() {
//     const { open, dimmer } = this.state

//     return (
//       <div>
//         {/* <Button onClick={this.show(true)}>Default</Button>
//         <Button onClick={this.show('inverted')}>Inverted</Button> */}
//         <Button onClick={this.show('blurring')}>Blurring</Button>
//         <Popup trigger={<Button onClick={this.show(false)}>None</Button>}>
//           <Popup.Header>Heads up!</Popup.Header>
//           <Popup.Content>
//             By default, a Modal closes when escape is pressed or when the dimmer is
//             clicked. Setting the dimmer to "None" (dimmer={'{'}false{'}'}) means that there is no
//             dimmer to click so clicking outside won't close the Modal. To close on
//             outside click when there's no dimmer, you can pass the "closeOnDocumentClick" prop.
//           </Popup.Content>
//         </Popup>

//         <Modal dimmer={dimmer} open={open} onClose={this.close}>
//           <Modal.Header>Select a Photo</Modal.Header>
//           <Modal.Content image>
//             <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
//             <Modal.Description>
//               <Header>Default Profile Image</Header>
//               <p>We've found the following gravatar image associated with your e-mail address.</p>
//               <p>Is it okay to use this photo?</p>
//             </Modal.Description>
//           </Modal.Content>
//           <Modal.Actions>
//             <Button color='black' onClick={this.close}>
//               Nope
//             </Button>
//             <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
//           </Modal.Actions>
//         </Modal>
//       </div>
//     )
//   }
// }

// export default RegisterUser


// const FormExampleSuccess = () => (
//   <Form success>
//     <Form.Input label='Email' placeholder='joe@schmoe.com' />
//     <Message
//       success
//       header='Form Completed'
//       content="You're all signed up for the newsletter"
//     />
//     <Button>Submit</Button>
//   </Form>
// )

// export default FormExampleSuccess

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(options, 'options', '/Users/crizzcoxx/dev/magnet/client/src/components/Registration/RegisterUser.jsx');

  __REACT_HOT_LOADER__.register(RegisterUser, 'RegisterUser', '/Users/crizzcoxx/dev/magnet/client/src/components/Registration/RegisterUser.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/Registration/RegisterUser.jsx');
}();

;

/***/ })

};