(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["np-st-template-03"],{

/***/ "LkCu":
/*!************************************************************************************************************!*\
  !*** /app/custom/plugins/NpStTemplate_03/src/Resources/app/storefront/src/script/quantity-field.plugin.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QuantityFieldPlugin; });\n/* harmony import */ var src_plugin_system_plugin_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/plugin-system/plugin.class */ \"FGIj\");\n/* harmony import */ var src_helper_dom_access_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/helper/dom-access.helper */ \"gHbT\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar QuantityFieldPlugin = /*#__PURE__*/function (_Plugin) {\n  _inherits(QuantityFieldPlugin, _Plugin);\n\n  function QuantityFieldPlugin() {\n    _classCallCheck(this, QuantityFieldPlugin);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(QuantityFieldPlugin).apply(this, arguments));\n  }\n\n  _createClass(QuantityFieldPlugin, [{\n    key: \"init\",\n    value: function init() {\n      this.minus = src_helper_dom_access_helper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].querySelector(this.el, '.decrease');\n      this.plus = src_helper_dom_access_helper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].querySelector(this.el, '.increase');\n      this.field = src_helper_dom_access_helper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].querySelector(this.el, 'input[type=\"number\"]');\n      this.registerEvents();\n    }\n  }, {\n    key: \"registerEvents\",\n    value: function registerEvents() {\n      this.minus.addEventListener('click', this.decreaseQuantity.bind(this));\n      this.plus.addEventListener('click', this.increaseQuantity.bind(this));\n    }\n  }, {\n    key: \"decreaseQuantity\",\n    value: function decreaseQuantity() {\n      //assignment says minimum number should be 0 but it makes no sense so I keep it at minimum purchaseStep\n      var priceDetail = document.getElementsByClassName('product-detail-price')[0];\n      var step = parseInt(this.options.purchaseSteps);\n      var newQuant = parseInt(this.field.value) - step;\n\n      if (newQuant <= step) {\n        this.field.value = step;\n\n        var _price = parseFloat(this.options.unitPrice) * step;\n\n        priceDetail.innerText = \"€\" + _price.toFixed(2) + \"*\";\n        return;\n      }\n\n      this.field.value = newQuant;\n      var price = parseFloat(this.options.unitPrice) * newQuant;\n      priceDetail.innerText = \"€\" + price.toFixed(2) + \"*\";\n    }\n  }, {\n    key: \"increaseQuantity\",\n    value: function increaseQuantity() {\n      //--formatter for currency-- \n      //---but don't know how to get the € symbol in front of the number :(---\n\n      /**\n      *var formatter = new Intl.NumberFormat('de-DE', {\n      *    style: 'currency',\n      *    currency: 'EUR'\n      *})\n      */\n      var priceDetail = document.getElementsByClassName('product-detail-price')[0];\n      var step = parseInt(this.options.purchaseSteps);\n      var maxQuant = parseInt(this.options.maxQuantity);\n      var newQuant = parseInt(this.field.value) + step;\n\n      if (newQuant >= maxQuant) {\n        this.field.value = maxQuant;\n\n        var _price2 = parseFloat(this.options.unitPrice) * maxQuant;\n\n        priceDetail.innerText = \"€\" + _price2.toFixed(2) + \"*\";\n        return;\n      }\n\n      this.field.value = newQuant;\n      var price = parseFloat(this.options.unitPrice) * newQuant;\n      priceDetail.innerText = \"€\" + price.toFixed(2) + \"*\";\n    }\n  }]);\n\n  return QuantityFieldPlugin;\n}(src_plugin_system_plugin_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGtDdS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8vYXBwL2N1c3RvbS9wbHVnaW5zL05wU3RUZW1wbGF0ZV8wMy9zcmMvUmVzb3VyY2VzL2FwcC9zdG9yZWZyb250L3NyYy9zY3JpcHQvcXVhbnRpdHktZmllbGQucGx1Z2luLmpzP2JiMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsdWdpbiBmcm9tICdzcmMvcGx1Z2luLXN5c3RlbS9wbHVnaW4uY2xhc3MnXG5pbXBvcnQgRG9tQWNjZXNzIGZyb20gJ3NyYy9oZWxwZXIvZG9tLWFjY2Vzcy5oZWxwZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1YW50aXR5RmllbGRQbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMubWludXMgPSBEb21BY2Nlc3MucXVlcnlTZWxlY3Rvcih0aGlzLmVsLCAnLmRlY3JlYXNlJylcbiAgICAgICAgdGhpcy5wbHVzID0gRG9tQWNjZXNzLnF1ZXJ5U2VsZWN0b3IodGhpcy5lbCwgJy5pbmNyZWFzZScpXG4gICAgICAgIHRoaXMuZmllbGQgPSBEb21BY2Nlc3MucXVlcnlTZWxlY3Rvcih0aGlzLmVsLCAnaW5wdXRbdHlwZT1cIm51bWJlclwiXScpXG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpXG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHRoaXMubWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlY3JlYXNlUXVhbnRpdHkuYmluZCh0aGlzKSlcbiAgICAgICAgdGhpcy5wbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5pbmNyZWFzZVF1YW50aXR5LmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgZGVjcmVhc2VRdWFudGl0eSgpIHtcbiAgICAgICAgLy9hc3NpZ25tZW50IHNheXMgbWluaW11bSBudW1iZXIgc2hvdWxkIGJlIDAgYnV0IGl0IG1ha2VzIG5vIHNlbnNlIHNvIEkga2VlcCBpdCBhdCBtaW5pbXVtIHB1cmNoYXNlU3RlcFxuICAgICAgICBjb25zdCBwcmljZURldGFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2R1Y3QtZGV0YWlsLXByaWNlJylbMF1cbiAgICAgICAgY29uc3Qgc3RlcCA9IHBhcnNlSW50KHRoaXMub3B0aW9ucy5wdXJjaGFzZVN0ZXBzKVxuICAgICAgICBjb25zdCBuZXdRdWFudCA9IHBhcnNlSW50KHRoaXMuZmllbGQudmFsdWUpIC0gc3RlcFxuICAgICAgICBpZihuZXdRdWFudCA8PSBzdGVwKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkLnZhbHVlID0gc3RlcFxuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBwYXJzZUZsb2F0KHRoaXMub3B0aW9ucy51bml0UHJpY2UpKnN0ZXBcbiAgICAgICAgICAgIHByaWNlRGV0YWlsLmlubmVyVGV4dCA9IFwi4oKsXCIgKyBwcmljZS50b0ZpeGVkKDIpICsgXCIqXCJcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGQudmFsdWUgPSBuZXdRdWFudFxuICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQodGhpcy5vcHRpb25zLnVuaXRQcmljZSkqbmV3UXVhbnRcbiAgICAgICAgcHJpY2VEZXRhaWwuaW5uZXJUZXh0ID0gXCLigqxcIiArIHByaWNlLnRvRml4ZWQoMikgKyBcIipcIlxuICAgIH1cblxuICAgIGluY3JlYXNlUXVhbnRpdHkoKSB7XG4gICAgICAgIC8vLS1mb3JtYXR0ZXIgZm9yIGN1cnJlbmN5LS0gXG4gICAgICAgIC8vLS0tYnV0IGRvbid0IGtub3cgaG93IHRvIGdldCB0aGUg4oKsIHN5bWJvbCBpbiBmcm9udCBvZiB0aGUgbnVtYmVyIDooLS0tXG4gICAgICAgIC8qKlxuICAgICAgICAqdmFyIGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZGUtREUnLCB7XG4gICAgICAgICogICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICAgICogICAgY3VycmVuY3k6ICdFVVInXG4gICAgICAgICp9KVxuICAgICAgICAqL1xuXG4gICAgICAgIGNvbnN0IHByaWNlRGV0YWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvZHVjdC1kZXRhaWwtcHJpY2UnKVswXVxuICAgICAgICBjb25zdCBzdGVwID0gcGFyc2VJbnQodGhpcy5vcHRpb25zLnB1cmNoYXNlU3RlcHMpXG4gICAgICAgIGNvbnN0IG1heFF1YW50ID0gcGFyc2VJbnQodGhpcy5vcHRpb25zLm1heFF1YW50aXR5KVxuICAgICAgICBjb25zdCBuZXdRdWFudCA9IHBhcnNlSW50KHRoaXMuZmllbGQudmFsdWUpICsgc3RlcFxuICAgICAgICBpZihuZXdRdWFudCA+PSBtYXhRdWFudCkge1xuICAgICAgICAgICAgdGhpcy5maWVsZC52YWx1ZSA9IG1heFF1YW50XG4gICAgICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQodGhpcy5vcHRpb25zLnVuaXRQcmljZSkqbWF4UXVhbnRcbiAgICAgICAgICAgIHByaWNlRGV0YWlsLmlubmVyVGV4dCA9IFwi4oKsXCIgKyBwcmljZS50b0ZpeGVkKDIpICsgXCIqXCJcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGQudmFsdWUgPSBuZXdRdWFudFxuICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQodGhpcy5vcHRpb25zLnVuaXRQcmljZSkqbmV3UXVhbnRcbiAgICAgICAgcHJpY2VEZXRhaWwuaW5uZXJUZXh0ID0gXCLigqxcIiArIHByaWNlLnRvRml4ZWQoMikgKyBcIipcIlxuICAgIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFyREE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///LkCu\n");

/***/ }),

/***/ "uvvp":
/*!************************************************************************************!*\
  !*** /app/custom/plugins/NpStTemplate_03/src/Resources/app/storefront/src/main.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_quantity_field_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/quantity-field.plugin */ \"LkCu\");\n\nwindow.PluginManager.register('QuantityField', _script_quantity_field_plugin__WEBPACK_IMPORTED_MODULE_0__[\"default\"], '[data-quantity-field]');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXZ2cC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8vYXBwL2N1c3RvbS9wbHVnaW5zL05wU3RUZW1wbGF0ZV8wMy9zcmMvUmVzb3VyY2VzL2FwcC9zdG9yZWZyb250L3NyYy9tYWluLmpzPzhjZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFF1YW50aXR5RmllbGRQbHVnaW4gZnJvbSAnLi9zY3JpcHQvcXVhbnRpdHktZmllbGQucGx1Z2luJ1xuXG53aW5kb3cuUGx1Z2luTWFuYWdlci5yZWdpc3RlcignUXVhbnRpdHlGaWVsZCcsIFF1YW50aXR5RmllbGRQbHVnaW4sICdbZGF0YS1xdWFudGl0eS1maWVsZF0nKSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///uvvp\n");

/***/ })

},[["uvvp","runtime","vendor-node","vendor-shared"]]]);