function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dealer-app-dealer-app-module"], {
  /***/
  "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js ***!
    \***************************************************************************/

  /*! exports provided: NgSelectComponent, NgSelectConfig, NgSelectModule, SELECTION_MODEL_FACTORY, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs */

  /***/
  function node_modulesNgSelectNgSelectFesm2015NgSelectNgSelectJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectComponent", function () {
      return NgSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectConfig", function () {
      return NgSelectConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectModule", function () {
      return NgSelectModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECTION_MODEL_FACTORY", function () {
      return SELECTION_MODEL_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return DefaultSelectionModelFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return DefaultSelectionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return NgDropdownPanelService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return NgItemLabelDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return NgOptionTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return NgOptgroupTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return NgLabelTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return NgMultiLabelTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return NgHeaderTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return NgFooterTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return NgNotFoundTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return NgTypeToSearchTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return NgLoadingTextTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return NgTagTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return NgLoadingSpinnerTemplateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return NgDropdownPanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return NgOptionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return ConsoleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var unescapedHTMLExp = /[&<>"']/g;
    /** @type {?} */

    var hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
    /** @type {?} */

    var htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;'
    };
    /**
     * @param {?} string
     * @return {?}
     */

    function escapeHTML(string) {
      return string && hasUnescapedHTMLExp.test(string) ? string.replace(unescapedHTMLExp,
      /**
      * @param {?} chr
      * @return {?}
      */
      function (chr) {
        return htmlEscapes[chr];
      }) : string;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isDefined(value) {
      return value !== undefined && value !== null;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isObject(value) {
      return typeof value === 'object' && isDefined(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isPromise(value) {
      return value instanceof Promise;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isFunction(value) {
      return value instanceof Function;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgItemLabelDirective = /*#__PURE__*/function () {
      /**
       * @param {?} element
       */
      function NgItemLabelDirective(element) {
        _classCallCheck(this, NgItemLabelDirective);

        this.element = element;
        this.escape = true;
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(NgItemLabelDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
        }
      }]);

      return NgItemLabelDirective;
    }();

    NgItemLabelDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngItemLabel]'
      }]
    }];
    /** @nocollapse */

    NgItemLabelDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    NgItemLabelDirective.propDecorators = {
      ngItemLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      escape: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}

    var NgOptionTemplateDirective =
    /**
     * @param {?} template
     */
    function NgOptionTemplateDirective(template) {
      _classCallCheck(this, NgOptionTemplateDirective);

      this.template = template;
    };

    NgOptionTemplateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng-option-tmp]'
      }]
    }];
    /** @nocollapse */

    NgOptionTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    if (false) {}

    var NgOptgroupTemplateDirective =
    /**
     * @param {?} template
     */
    function NgOptgroupTemplateDirective(template) {
      _classCallCheck(this, NgOptgroupTemplateDirective);

      this.template = template;
    };

    NgOptgroupTemplateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng-optgroup-tmp]'
      }]
    }];
    /** @nocollapse */

    NgOptgroupTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    if (false) {}

    var NgLabelTemplateDirective =
    /**
     * @param {?} template
     */
    function NgLabelTemplateDirective(template) {
      _classCallCheck(this, NgLabelTemplateDirective);

      this.template = template;
    };

    NgLabelTemplateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng-label-tmp]'
      }]
    }];
    /** @nocollapse */

    NgLabelTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    if (false) {}

    var NgMultiLabelTemplateDirective =
    /**
     * @param {?} template
     */
    function NgMultiLabelTemplateDirective(template) {
      _classCallCheck(this, NgMultiLabelTemplateDirective);

      this.template = template;
    };

    NgMultiLabelTemplateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng-multi-label-tmp]'
      }]
    }];
    /** @nocollapse */

    NgMultiLabelTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    if (false) {}

    var NgHeaderTemplateDirective =
    /**
     * @param {?} template
     */
    function NgHeaderTemplateDirective(template) {
      _classCallCheck(this, NgHeaderTemplateDirective);

      this.template = template;
    };

    NgHeaderTemplateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng-header-tmp]'
      }]
    }];
    /** @nocollapse */

    NgHeaderTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    if (false) {}

    var NgFooterTemplateDirective =
    /**
     * @param {?} template
     */
    function NgFooterTemplateDirective(template) {
      _classCallCheck(this, NgFooterTemplateDirective);

      this.template = template;
    };

    NgFooterTemplateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng-footer-tmp]'
      }]
    }];
    /** @nocollapse */

    NgFooterTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    if (false) {}

    var NgNotFoundTemplateDirective =
    /**
     * @param {?} template
     */
    function NgNotFoundTemplateDirective(template) {
      _classCallCheck(this, NgNotFoundTemplateDirective);

      this.template = template;
    };

    NgNotFoundTemplateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng-notfound-tmp]'
      }]
    }];
    /** @nocollapse */

    NgNotFoundTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    if (false) {}

    var NgTypeToSearchTemplateDirective =
    /**
     * @param {?} template
     */
    function NgTypeToSearchTemplateDirective(template) {
      _classCallCheck(this, NgTypeToSearchTemplateDirective);

      this.template = template;
    };

    NgTypeToSearchTemplateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng-typetosearch-tmp]'
      }]
    }];
    /** @nocollapse */

    NgTypeToSearchTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    if (false) {}

    var NgLoadingTextTemplateDirective =
    /**
     * @param {?} template
     */
    function NgLoadingTextTemplateDirective(template) {
      _classCallCheck(this, NgLoadingTextTemplateDirective);

      this.template = template;
    };

    NgLoadingTextTemplateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng-loadingtext-tmp]'
      }]
    }];
    /** @nocollapse */

    NgLoadingTextTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    if (false) {}

    var NgTagTemplateDirective =
    /**
     * @param {?} template
     */
    function NgTagTemplateDirective(template) {
      _classCallCheck(this, NgTagTemplateDirective);

      this.template = template;
    };

    NgTagTemplateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng-tag-tmp]'
      }]
    }];
    /** @nocollapse */

    NgTagTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    if (false) {}

    var NgLoadingSpinnerTemplateDirective =
    /**
     * @param {?} template
     */
    function NgLoadingSpinnerTemplateDirective(template) {
      _classCallCheck(this, NgLoadingSpinnerTemplateDirective);

      this.template = template;
    };

    NgLoadingSpinnerTemplateDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ng-loadingspinner-tmp]'
      }]
    }];
    /** @nocollapse */

    NgLoadingSpinnerTemplateDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ConsoleService = /*#__PURE__*/function () {
      function ConsoleService() {
        _classCallCheck(this, ConsoleService);
      }

      _createClass(ConsoleService, [{
        key: "warn",

        /**
         * @param {?} message
         * @return {?}
         */
        value: function warn(message) {
          console.warn(message);
        }
      }]);

      return ConsoleService;
    }();

    ConsoleService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ConsoleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ConsoleService_Factory() {
        return new ConsoleService();
      },
      token: ConsoleService,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */

    function newId() {
      // First character is an 'a', it's good practice to tag id to begin with a letter
      return 'axxxxxxxxxxx'.replace(/[x]/g,
      /**
      * @param {?} _
      * @return {?}
      */
      function (_) {
        // tslint:disable-next-line:no-bitwise

        /** @type {?} */
        var val = Math.random() * 16 | 0;
        return val.toString(16);
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var diacritics = {
      "\u24B6": 'A',
      "\uFF21": 'A',
      "\xC0": 'A',
      "\xC1": 'A',
      "\xC2": 'A',
      "\u1EA6": 'A',
      "\u1EA4": 'A',
      "\u1EAA": 'A',
      "\u1EA8": 'A',
      "\xC3": 'A',
      "\u0100": 'A',
      "\u0102": 'A',
      "\u1EB0": 'A',
      "\u1EAE": 'A',
      "\u1EB4": 'A',
      "\u1EB2": 'A',
      "\u0226": 'A',
      "\u01E0": 'A',
      "\xC4": 'A',
      "\u01DE": 'A',
      "\u1EA2": 'A',
      "\xC5": 'A',
      "\u01FA": 'A',
      "\u01CD": 'A',
      "\u0200": 'A',
      "\u0202": 'A',
      "\u1EA0": 'A',
      "\u1EAC": 'A',
      "\u1EB6": 'A',
      "\u1E00": 'A',
      "\u0104": 'A',
      "\u023A": 'A',
      "\u2C6F": 'A',
      "\uA732": 'AA',
      "\xC6": 'AE',
      "\u01FC": 'AE',
      "\u01E2": 'AE',
      "\uA734": 'AO',
      "\uA736": 'AU',
      "\uA738": 'AV',
      "\uA73A": 'AV',
      "\uA73C": 'AY',
      "\u24B7": 'B',
      "\uFF22": 'B',
      "\u1E02": 'B',
      "\u1E04": 'B',
      "\u1E06": 'B',
      "\u0243": 'B',
      "\u0182": 'B',
      "\u0181": 'B',
      "\u24B8": 'C',
      "\uFF23": 'C',
      "\u0106": 'C',
      "\u0108": 'C',
      "\u010A": 'C',
      "\u010C": 'C',
      "\xC7": 'C',
      "\u1E08": 'C',
      "\u0187": 'C',
      "\u023B": 'C',
      "\uA73E": 'C',
      "\u24B9": 'D',
      "\uFF24": 'D',
      "\u1E0A": 'D',
      "\u010E": 'D',
      "\u1E0C": 'D',
      "\u1E10": 'D',
      "\u1E12": 'D',
      "\u1E0E": 'D',
      "\u0110": 'D',
      "\u018B": 'D',
      "\u018A": 'D',
      "\u0189": 'D',
      "\uA779": 'D',
      "\u01F1": 'DZ',
      "\u01C4": 'DZ',
      "\u01F2": 'Dz',
      "\u01C5": 'Dz',
      "\u24BA": 'E',
      "\uFF25": 'E',
      "\xC8": 'E',
      "\xC9": 'E',
      "\xCA": 'E',
      "\u1EC0": 'E',
      "\u1EBE": 'E',
      "\u1EC4": 'E',
      "\u1EC2": 'E',
      "\u1EBC": 'E',
      "\u0112": 'E',
      "\u1E14": 'E',
      "\u1E16": 'E',
      "\u0114": 'E',
      "\u0116": 'E',
      "\xCB": 'E',
      "\u1EBA": 'E',
      "\u011A": 'E',
      "\u0204": 'E',
      "\u0206": 'E',
      "\u1EB8": 'E',
      "\u1EC6": 'E',
      "\u0228": 'E',
      "\u1E1C": 'E',
      "\u0118": 'E',
      "\u1E18": 'E',
      "\u1E1A": 'E',
      "\u0190": 'E',
      "\u018E": 'E',
      "\u24BB": 'F',
      "\uFF26": 'F',
      "\u1E1E": 'F',
      "\u0191": 'F',
      "\uA77B": 'F',
      "\u24BC": 'G',
      "\uFF27": 'G',
      "\u01F4": 'G',
      "\u011C": 'G',
      "\u1E20": 'G',
      "\u011E": 'G',
      "\u0120": 'G',
      "\u01E6": 'G',
      "\u0122": 'G',
      "\u01E4": 'G',
      "\u0193": 'G',
      "\uA7A0": 'G',
      "\uA77D": 'G',
      "\uA77E": 'G',
      "\u24BD": 'H',
      "\uFF28": 'H',
      "\u0124": 'H',
      "\u1E22": 'H',
      "\u1E26": 'H',
      "\u021E": 'H',
      "\u1E24": 'H',
      "\u1E28": 'H',
      "\u1E2A": 'H',
      "\u0126": 'H',
      "\u2C67": 'H',
      "\u2C75": 'H',
      "\uA78D": 'H',
      "\u24BE": 'I',
      "\uFF29": 'I',
      "\xCC": 'I',
      "\xCD": 'I',
      "\xCE": 'I',
      "\u0128": 'I',
      "\u012A": 'I',
      "\u012C": 'I',
      "\u0130": 'I',
      "\xCF": 'I',
      "\u1E2E": 'I',
      "\u1EC8": 'I',
      "\u01CF": 'I',
      "\u0208": 'I',
      "\u020A": 'I',
      "\u1ECA": 'I',
      "\u012E": 'I',
      "\u1E2C": 'I',
      "\u0197": 'I',
      "\u24BF": 'J',
      "\uFF2A": 'J',
      "\u0134": 'J',
      "\u0248": 'J',
      "\u24C0": 'K',
      "\uFF2B": 'K',
      "\u1E30": 'K',
      "\u01E8": 'K',
      "\u1E32": 'K',
      "\u0136": 'K',
      "\u1E34": 'K',
      "\u0198": 'K',
      "\u2C69": 'K',
      "\uA740": 'K',
      "\uA742": 'K',
      "\uA744": 'K',
      "\uA7A2": 'K',
      "\u24C1": 'L',
      "\uFF2C": 'L',
      "\u013F": 'L',
      "\u0139": 'L',
      "\u013D": 'L',
      "\u1E36": 'L',
      "\u1E38": 'L',
      "\u013B": 'L',
      "\u1E3C": 'L',
      "\u1E3A": 'L',
      "\u0141": 'L',
      "\u023D": 'L',
      "\u2C62": 'L',
      "\u2C60": 'L',
      "\uA748": 'L',
      "\uA746": 'L',
      "\uA780": 'L',
      "\u01C7": 'LJ',
      "\u01C8": 'Lj',
      "\u24C2": 'M',
      "\uFF2D": 'M',
      "\u1E3E": 'M',
      "\u1E40": 'M',
      "\u1E42": 'M',
      "\u2C6E": 'M',
      "\u019C": 'M',
      "\u24C3": 'N',
      "\uFF2E": 'N',
      "\u01F8": 'N',
      "\u0143": 'N',
      "\xD1": 'N',
      "\u1E44": 'N',
      "\u0147": 'N',
      "\u1E46": 'N',
      "\u0145": 'N',
      "\u1E4A": 'N',
      "\u1E48": 'N',
      "\u0220": 'N',
      "\u019D": 'N',
      "\uA790": 'N',
      "\uA7A4": 'N',
      "\u01CA": 'NJ',
      "\u01CB": 'Nj',
      "\u24C4": 'O',
      "\uFF2F": 'O',
      "\xD2": 'O',
      "\xD3": 'O',
      "\xD4": 'O',
      "\u1ED2": 'O',
      "\u1ED0": 'O',
      "\u1ED6": 'O',
      "\u1ED4": 'O',
      "\xD5": 'O',
      "\u1E4C": 'O',
      "\u022C": 'O',
      "\u1E4E": 'O',
      "\u014C": 'O',
      "\u1E50": 'O',
      "\u1E52": 'O',
      "\u014E": 'O',
      "\u022E": 'O',
      "\u0230": 'O',
      "\xD6": 'O',
      "\u022A": 'O',
      "\u1ECE": 'O',
      "\u0150": 'O',
      "\u01D1": 'O',
      "\u020C": 'O',
      "\u020E": 'O',
      "\u01A0": 'O',
      "\u1EDC": 'O',
      "\u1EDA": 'O',
      "\u1EE0": 'O',
      "\u1EDE": 'O',
      "\u1EE2": 'O',
      "\u1ECC": 'O',
      "\u1ED8": 'O',
      "\u01EA": 'O',
      "\u01EC": 'O',
      "\xD8": 'O',
      "\u01FE": 'O',
      "\u0186": 'O',
      "\u019F": 'O',
      "\uA74A": 'O',
      "\uA74C": 'O',
      "\u01A2": 'OI',
      "\uA74E": 'OO',
      "\u0222": 'OU',
      "\u24C5": 'P',
      "\uFF30": 'P',
      "\u1E54": 'P',
      "\u1E56": 'P',
      "\u01A4": 'P',
      "\u2C63": 'P',
      "\uA750": 'P',
      "\uA752": 'P',
      "\uA754": 'P',
      "\u24C6": 'Q',
      "\uFF31": 'Q',
      "\uA756": 'Q',
      "\uA758": 'Q',
      "\u024A": 'Q',
      "\u24C7": 'R',
      "\uFF32": 'R',
      "\u0154": 'R',
      "\u1E58": 'R',
      "\u0158": 'R',
      "\u0210": 'R',
      "\u0212": 'R',
      "\u1E5A": 'R',
      "\u1E5C": 'R',
      "\u0156": 'R',
      "\u1E5E": 'R',
      "\u024C": 'R',
      "\u2C64": 'R',
      "\uA75A": 'R',
      "\uA7A6": 'R',
      "\uA782": 'R',
      "\u24C8": 'S',
      "\uFF33": 'S',
      "\u1E9E": 'S',
      "\u015A": 'S',
      "\u1E64": 'S',
      "\u015C": 'S',
      "\u1E60": 'S',
      "\u0160": 'S',
      "\u1E66": 'S',
      "\u1E62": 'S',
      "\u1E68": 'S',
      "\u0218": 'S',
      "\u015E": 'S',
      "\u2C7E": 'S',
      "\uA7A8": 'S',
      "\uA784": 'S',
      "\u24C9": 'T',
      "\uFF34": 'T',
      "\u1E6A": 'T',
      "\u0164": 'T',
      "\u1E6C": 'T',
      "\u021A": 'T',
      "\u0162": 'T',
      "\u1E70": 'T',
      "\u1E6E": 'T',
      "\u0166": 'T',
      "\u01AC": 'T',
      "\u01AE": 'T',
      "\u023E": 'T',
      "\uA786": 'T',
      "\uA728": 'TZ',
      "\u24CA": 'U',
      "\uFF35": 'U',
      "\xD9": 'U',
      "\xDA": 'U',
      "\xDB": 'U',
      "\u0168": 'U',
      "\u1E78": 'U',
      "\u016A": 'U',
      "\u1E7A": 'U',
      "\u016C": 'U',
      "\xDC": 'U',
      "\u01DB": 'U',
      "\u01D7": 'U',
      "\u01D5": 'U',
      "\u01D9": 'U',
      "\u1EE6": 'U',
      "\u016E": 'U',
      "\u0170": 'U',
      "\u01D3": 'U',
      "\u0214": 'U',
      "\u0216": 'U',
      "\u01AF": 'U',
      "\u1EEA": 'U',
      "\u1EE8": 'U',
      "\u1EEE": 'U',
      "\u1EEC": 'U',
      "\u1EF0": 'U',
      "\u1EE4": 'U',
      "\u1E72": 'U',
      "\u0172": 'U',
      "\u1E76": 'U',
      "\u1E74": 'U',
      "\u0244": 'U',
      "\u24CB": 'V',
      "\uFF36": 'V',
      "\u1E7C": 'V',
      "\u1E7E": 'V',
      "\u01B2": 'V',
      "\uA75E": 'V',
      "\u0245": 'V',
      "\uA760": 'VY',
      "\u24CC": 'W',
      "\uFF37": 'W',
      "\u1E80": 'W',
      "\u1E82": 'W',
      "\u0174": 'W',
      "\u1E86": 'W',
      "\u1E84": 'W',
      "\u1E88": 'W',
      "\u2C72": 'W',
      "\u24CD": 'X',
      "\uFF38": 'X',
      "\u1E8A": 'X',
      "\u1E8C": 'X',
      "\u24CE": 'Y',
      "\uFF39": 'Y',
      "\u1EF2": 'Y',
      "\xDD": 'Y',
      "\u0176": 'Y',
      "\u1EF8": 'Y',
      "\u0232": 'Y',
      "\u1E8E": 'Y',
      "\u0178": 'Y',
      "\u1EF6": 'Y',
      "\u1EF4": 'Y',
      "\u01B3": 'Y',
      "\u024E": 'Y',
      "\u1EFE": 'Y',
      "\u24CF": 'Z',
      "\uFF3A": 'Z',
      "\u0179": 'Z',
      "\u1E90": 'Z',
      "\u017B": 'Z',
      "\u017D": 'Z',
      "\u1E92": 'Z',
      "\u1E94": 'Z',
      "\u01B5": 'Z',
      "\u0224": 'Z',
      "\u2C7F": 'Z',
      "\u2C6B": 'Z',
      "\uA762": 'Z',
      "\u24D0": 'a',
      "\uFF41": 'a',
      "\u1E9A": 'a',
      "\xE0": 'a',
      "\xE1": 'a',
      "\xE2": 'a',
      "\u1EA7": 'a',
      "\u1EA5": 'a',
      "\u1EAB": 'a',
      "\u1EA9": 'a',
      "\xE3": 'a',
      "\u0101": 'a',
      "\u0103": 'a',
      "\u1EB1": 'a',
      "\u1EAF": 'a',
      "\u1EB5": 'a',
      "\u1EB3": 'a',
      "\u0227": 'a',
      "\u01E1": 'a',
      "\xE4": 'a',
      "\u01DF": 'a',
      "\u1EA3": 'a',
      "\xE5": 'a',
      "\u01FB": 'a',
      "\u01CE": 'a',
      "\u0201": 'a',
      "\u0203": 'a',
      "\u1EA1": 'a',
      "\u1EAD": 'a',
      "\u1EB7": 'a',
      "\u1E01": 'a',
      "\u0105": 'a',
      "\u2C65": 'a',
      "\u0250": 'a',
      "\uA733": 'aa',
      "\xE6": 'ae',
      "\u01FD": 'ae',
      "\u01E3": 'ae',
      "\uA735": 'ao',
      "\uA737": 'au',
      "\uA739": 'av',
      "\uA73B": 'av',
      "\uA73D": 'ay',
      "\u24D1": 'b',
      "\uFF42": 'b',
      "\u1E03": 'b',
      "\u1E05": 'b',
      "\u1E07": 'b',
      "\u0180": 'b',
      "\u0183": 'b',
      "\u0253": 'b',
      "\u24D2": 'c',
      "\uFF43": 'c',
      "\u0107": 'c',
      "\u0109": 'c',
      "\u010B": 'c',
      "\u010D": 'c',
      "\xE7": 'c',
      "\u1E09": 'c',
      "\u0188": 'c',
      "\u023C": 'c',
      "\uA73F": 'c',
      "\u2184": 'c',
      "\u24D3": 'd',
      "\uFF44": 'd',
      "\u1E0B": 'd',
      "\u010F": 'd',
      "\u1E0D": 'd',
      "\u1E11": 'd',
      "\u1E13": 'd',
      "\u1E0F": 'd',
      "\u0111": 'd',
      "\u018C": 'd',
      "\u0256": 'd',
      "\u0257": 'd',
      "\uA77A": 'd',
      "\u01F3": 'dz',
      "\u01C6": 'dz',
      "\u24D4": 'e',
      "\uFF45": 'e',
      "\xE8": 'e',
      "\xE9": 'e',
      "\xEA": 'e',
      "\u1EC1": 'e',
      "\u1EBF": 'e',
      "\u1EC5": 'e',
      "\u1EC3": 'e',
      "\u1EBD": 'e',
      "\u0113": 'e',
      "\u1E15": 'e',
      "\u1E17": 'e',
      "\u0115": 'e',
      "\u0117": 'e',
      "\xEB": 'e',
      "\u1EBB": 'e',
      "\u011B": 'e',
      "\u0205": 'e',
      "\u0207": 'e',
      "\u1EB9": 'e',
      "\u1EC7": 'e',
      "\u0229": 'e',
      "\u1E1D": 'e',
      "\u0119": 'e',
      "\u1E19": 'e',
      "\u1E1B": 'e',
      "\u0247": 'e',
      "\u025B": 'e',
      "\u01DD": 'e',
      "\u24D5": 'f',
      "\uFF46": 'f',
      "\u1E1F": 'f',
      "\u0192": 'f',
      "\uA77C": 'f',
      "\u24D6": 'g',
      "\uFF47": 'g',
      "\u01F5": 'g',
      "\u011D": 'g',
      "\u1E21": 'g',
      "\u011F": 'g',
      "\u0121": 'g',
      "\u01E7": 'g',
      "\u0123": 'g',
      "\u01E5": 'g',
      "\u0260": 'g',
      "\uA7A1": 'g',
      "\u1D79": 'g',
      "\uA77F": 'g',
      "\u24D7": 'h',
      "\uFF48": 'h',
      "\u0125": 'h',
      "\u1E23": 'h',
      "\u1E27": 'h',
      "\u021F": 'h',
      "\u1E25": 'h',
      "\u1E29": 'h',
      "\u1E2B": 'h',
      "\u1E96": 'h',
      "\u0127": 'h',
      "\u2C68": 'h',
      "\u2C76": 'h',
      "\u0265": 'h',
      "\u0195": 'hv',
      "\u24D8": 'i',
      "\uFF49": 'i',
      "\xEC": 'i',
      "\xED": 'i',
      "\xEE": 'i',
      "\u0129": 'i',
      "\u012B": 'i',
      "\u012D": 'i',
      "\xEF": 'i',
      "\u1E2F": 'i',
      "\u1EC9": 'i',
      "\u01D0": 'i',
      "\u0209": 'i',
      "\u020B": 'i',
      "\u1ECB": 'i',
      "\u012F": 'i',
      "\u1E2D": 'i',
      "\u0268": 'i',
      "\u0131": 'i',
      "\u24D9": 'j',
      "\uFF4A": 'j',
      "\u0135": 'j',
      "\u01F0": 'j',
      "\u0249": 'j',
      "\u24DA": 'k',
      "\uFF4B": 'k',
      "\u1E31": 'k',
      "\u01E9": 'k',
      "\u1E33": 'k',
      "\u0137": 'k',
      "\u1E35": 'k',
      "\u0199": 'k',
      "\u2C6A": 'k',
      "\uA741": 'k',
      "\uA743": 'k',
      "\uA745": 'k',
      "\uA7A3": 'k',
      "\u24DB": 'l',
      "\uFF4C": 'l',
      "\u0140": 'l',
      "\u013A": 'l',
      "\u013E": 'l',
      "\u1E37": 'l',
      "\u1E39": 'l',
      "\u013C": 'l',
      "\u1E3D": 'l',
      "\u1E3B": 'l',
      "\u017F": 'l',
      "\u0142": 'l',
      "\u019A": 'l',
      "\u026B": 'l',
      "\u2C61": 'l',
      "\uA749": 'l',
      "\uA781": 'l',
      "\uA747": 'l',
      "\u01C9": 'lj',
      "\u24DC": 'm',
      "\uFF4D": 'm',
      "\u1E3F": 'm',
      "\u1E41": 'm',
      "\u1E43": 'm',
      "\u0271": 'm',
      "\u026F": 'm',
      "\u24DD": 'n',
      "\uFF4E": 'n',
      "\u01F9": 'n',
      "\u0144": 'n',
      "\xF1": 'n',
      "\u1E45": 'n',
      "\u0148": 'n',
      "\u1E47": 'n',
      "\u0146": 'n',
      "\u1E4B": 'n',
      "\u1E49": 'n',
      "\u019E": 'n',
      "\u0272": 'n',
      "\u0149": 'n',
      "\uA791": 'n',
      "\uA7A5": 'n',
      "\u01CC": 'nj',
      "\u24DE": 'o',
      "\uFF4F": 'o',
      "\xF2": 'o',
      "\xF3": 'o',
      "\xF4": 'o',
      "\u1ED3": 'o',
      "\u1ED1": 'o',
      "\u1ED7": 'o',
      "\u1ED5": 'o',
      "\xF5": 'o',
      "\u1E4D": 'o',
      "\u022D": 'o',
      "\u1E4F": 'o',
      "\u014D": 'o',
      "\u1E51": 'o',
      "\u1E53": 'o',
      "\u014F": 'o',
      "\u022F": 'o',
      "\u0231": 'o',
      "\xF6": 'o',
      "\u022B": 'o',
      "\u1ECF": 'o',
      "\u0151": 'o',
      "\u01D2": 'o',
      "\u020D": 'o',
      "\u020F": 'o',
      "\u01A1": 'o',
      "\u1EDD": 'o',
      "\u1EDB": 'o',
      "\u1EE1": 'o',
      "\u1EDF": 'o',
      "\u1EE3": 'o',
      "\u1ECD": 'o',
      "\u1ED9": 'o',
      "\u01EB": 'o',
      "\u01ED": 'o',
      "\xF8": 'o',
      "\u01FF": 'o',
      "\u0254": 'o',
      "\uA74B": 'o',
      "\uA74D": 'o',
      "\u0275": 'o',
      "\u01A3": 'oi',
      "\u0223": 'ou',
      "\uA74F": 'oo',
      "\u24DF": 'p',
      "\uFF50": 'p',
      "\u1E55": 'p',
      "\u1E57": 'p',
      "\u01A5": 'p',
      "\u1D7D": 'p',
      "\uA751": 'p',
      "\uA753": 'p',
      "\uA755": 'p',
      "\u24E0": 'q',
      "\uFF51": 'q',
      "\u024B": 'q',
      "\uA757": 'q',
      "\uA759": 'q',
      "\u24E1": 'r',
      "\uFF52": 'r',
      "\u0155": 'r',
      "\u1E59": 'r',
      "\u0159": 'r',
      "\u0211": 'r',
      "\u0213": 'r',
      "\u1E5B": 'r',
      "\u1E5D": 'r',
      "\u0157": 'r',
      "\u1E5F": 'r',
      "\u024D": 'r',
      "\u027D": 'r',
      "\uA75B": 'r',
      "\uA7A7": 'r',
      "\uA783": 'r',
      "\u24E2": 's',
      "\uFF53": 's',
      "\xDF": 's',
      "\u015B": 's',
      "\u1E65": 's',
      "\u015D": 's',
      "\u1E61": 's',
      "\u0161": 's',
      "\u1E67": 's',
      "\u1E63": 's',
      "\u1E69": 's',
      "\u0219": 's',
      "\u015F": 's',
      "\u023F": 's',
      "\uA7A9": 's',
      "\uA785": 's',
      "\u1E9B": 's',
      "\u24E3": 't',
      "\uFF54": 't',
      "\u1E6B": 't',
      "\u1E97": 't',
      "\u0165": 't',
      "\u1E6D": 't',
      "\u021B": 't',
      "\u0163": 't',
      "\u1E71": 't',
      "\u1E6F": 't',
      "\u0167": 't',
      "\u01AD": 't',
      "\u0288": 't',
      "\u2C66": 't',
      "\uA787": 't',
      "\uA729": 'tz',
      "\u24E4": 'u',
      "\uFF55": 'u',
      "\xF9": 'u',
      "\xFA": 'u',
      "\xFB": 'u',
      "\u0169": 'u',
      "\u1E79": 'u',
      "\u016B": 'u',
      "\u1E7B": 'u',
      "\u016D": 'u',
      "\xFC": 'u',
      "\u01DC": 'u',
      "\u01D8": 'u',
      "\u01D6": 'u',
      "\u01DA": 'u',
      "\u1EE7": 'u',
      "\u016F": 'u',
      "\u0171": 'u',
      "\u01D4": 'u',
      "\u0215": 'u',
      "\u0217": 'u',
      "\u01B0": 'u',
      "\u1EEB": 'u',
      "\u1EE9": 'u',
      "\u1EEF": 'u',
      "\u1EED": 'u',
      "\u1EF1": 'u',
      "\u1EE5": 'u',
      "\u1E73": 'u',
      "\u0173": 'u',
      "\u1E77": 'u',
      "\u1E75": 'u',
      "\u0289": 'u',
      "\u24E5": 'v',
      "\uFF56": 'v',
      "\u1E7D": 'v',
      "\u1E7F": 'v',
      "\u028B": 'v',
      "\uA75F": 'v',
      "\u028C": 'v',
      "\uA761": 'vy',
      "\u24E6": 'w',
      "\uFF57": 'w',
      "\u1E81": 'w',
      "\u1E83": 'w',
      "\u0175": 'w',
      "\u1E87": 'w',
      "\u1E85": 'w',
      "\u1E98": 'w',
      "\u1E89": 'w',
      "\u2C73": 'w',
      "\u24E7": 'x',
      "\uFF58": 'x',
      "\u1E8B": 'x',
      "\u1E8D": 'x',
      "\u24E8": 'y',
      "\uFF59": 'y',
      "\u1EF3": 'y',
      "\xFD": 'y',
      "\u0177": 'y',
      "\u1EF9": 'y',
      "\u0233": 'y',
      "\u1E8F": 'y',
      "\xFF": 'y',
      "\u1EF7": 'y',
      "\u1E99": 'y',
      "\u1EF5": 'y',
      "\u01B4": 'y',
      "\u024F": 'y',
      "\u1EFF": 'y',
      "\u24E9": 'z',
      "\uFF5A": 'z',
      "\u017A": 'z',
      "\u1E91": 'z',
      "\u017C": 'z',
      "\u017E": 'z',
      "\u1E93": 'z',
      "\u1E95": 'z',
      "\u01B6": 'z',
      "\u0225": 'z',
      "\u0240": 'z',
      "\u2C6C": 'z',
      "\uA763": 'z',
      "\u0386": "\u0391",
      "\u0388": "\u0395",
      "\u0389": "\u0397",
      "\u038A": "\u0399",
      "\u03AA": "\u0399",
      "\u038C": "\u039F",
      "\u038E": "\u03A5",
      "\u03AB": "\u03A5",
      "\u038F": "\u03A9",
      "\u03AC": "\u03B1",
      "\u03AD": "\u03B5",
      "\u03AE": "\u03B7",
      "\u03AF": "\u03B9",
      "\u03CA": "\u03B9",
      "\u0390": "\u03B9",
      "\u03CC": "\u03BF",
      "\u03CD": "\u03C5",
      "\u03CB": "\u03C5",
      "\u03B0": "\u03C5",
      "\u03C9": "\u03C9",
      "\u03C2": "\u03C3"
    };
    /**
     * @param {?} text
     * @return {?}
     */

    function stripSpecialChars(text) {
      /** @type {?} */
      var match =
      /**
      * @param {?} a
      * @return {?}
      */
      function match(a) {
        return diacritics[a] || a;
      };

      return text.replace(/[^\u0000-\u007E]/g, match);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ItemsList = /*#__PURE__*/function () {
      /**
       * @param {?} _ngSelect
       * @param {?} _selectionModel
       */
      function ItemsList(_ngSelect, _selectionModel) {
        _classCallCheck(this, ItemsList);

        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
      }
      /**
       * @return {?}
       */


      _createClass(ItemsList, [{
        key: "setItems",

        /**
         * @param {?} items
         * @return {?}
         */
        value: function setItems(items) {
          var _this2 = this;

          this._items = items.map(
          /**
          * @param {?} item
          * @param {?} index
          * @return {?}
          */
          function (item, index) {
            return _this2.mapItem(item, index);
          });

          if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
          } else {
            this._groups = new Map();

            this._groups.set(undefined, this._items);
          }

          this._filteredItems = _toConsumableArray(this._items);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(item) {
          if (item.selected || this.maxItemsSelected) {
            return;
          }
          /** @type {?} */


          var multiple = this._ngSelect.multiple;

          if (!multiple) {
            this.clearSelected();
          }

          this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);

          if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
          }
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "unselect",
        value: function unselect(item) {
          if (!item.selected) {
            return;
          }

          this._selectionModel.unselect(item, this._ngSelect.multiple);

          if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "findItem",
        value: function findItem(value) {
          var _this3 = this;

          /** @type {?} */
          var findBy;

          if (this._ngSelect.compareWith) {
            findBy =
            /**
            * @param {?} item
            * @return {?}
            */
            function findBy(item) {
              return _this3._ngSelect.compareWith(item.value, value);
            };
          } else if (this._ngSelect.bindValue) {
            findBy =
            /**
            * @param {?} item
            * @return {?}
            */
            function findBy(item) {
              return !item.children && _this3.resolveNested(item.value, _this3._ngSelect.bindValue) === value;
            };
          } else {
            findBy =
            /**
            * @param {?} item
            * @return {?}
            */
            function findBy(item) {
              return item.value === value || !item.children && item.label && item.label === _this3.resolveNested(value, _this3._ngSelect.bindLabel);
            };
          }

          return this._items.find(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return findBy(item);
          });
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "addItem",
        value: function addItem(item) {
          /** @type {?} */
          var option = this.mapItem(item, this._items.length);

          this._items.push(option);

          this._filteredItems.push(option);

          return option;
        }
        /**
         * @param {?=} keepDisabled
         * @return {?}
         */

      }, {
        key: "clearSelected",
        value: function clearSelected() {
          var keepDisabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          this._selectionModel.clear(keepDisabled);

          this._items.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
          });

          if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
          }
        }
        /**
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "findByLabel",
        value: function findByLabel(term) {
          term = stripSpecialChars(term).toLocaleLowerCase();
          return this.filteredItems.find(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            /** @type {?} */
            var label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
          });
        }
        /**
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "filter",
        value: function filter(term) {
          var _this4 = this;

          if (!term) {
            this.resetFilteredItems();
            return;
          }

          this._filteredItems = [];
          term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
          /** @type {?} */

          var match = this._ngSelect.searchFn || this._defaultSearchFn;
          /** @type {?} */

          var hideSelected = this._ngSelect.hideSelected;

          for (var _i2 = 0, _Array$from = Array.from(this._groups.keys()); _i2 < _Array$from.length; _i2++) {
            var key = _Array$from[_i2];

            /** @type {?} */
            var matchedItems = [];

            var _iterator = _createForOfIteratorHelper(this._groups.get(key)),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;

                if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                  continue;
                }
                /** @type {?} */


                var searchItem = this._ngSelect.searchFn ? item.value : item;

                if (match(term, searchItem)) {
                  matchedItems.push(item);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (matchedItems.length > 0) {
              (function () {
                var _this4$_filteredItems;

                var _matchedItems$slice = matchedItems.slice(-1),
                    _matchedItems$slice2 = _slicedToArray(_matchedItems$slice, 1),
                    last = _matchedItems$slice2[0];

                if (last.parent) {
                  /** @type {?} */
                  var head = _this4._items.find(
                  /**
                  * @param {?} x
                  * @return {?}
                  */
                  function (x) {
                    return x === last.parent;
                  });

                  _this4._filteredItems.push(head);
                }

                (_this4$_filteredItems = _this4._filteredItems).push.apply(_this4$_filteredItems, matchedItems);
              })();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "resetFilteredItems",
        value: function resetFilteredItems() {
          if (this._filteredItems.length === this._items.length) {
            return;
          }

          if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return !x.selected;
            });
          } else {
            this._filteredItems = this._items;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "unmarkItem",
        value: function unmarkItem() {
          this._markedIndex = -1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "markNextItem",
        value: function markNextItem() {
          this._stepToItem(+1);
        }
        /**
         * @return {?}
         */

      }, {
        key: "markPreviousItem",
        value: function markPreviousItem() {
          this._stepToItem(-1);
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "markItem",
        value: function markItem(item) {
          this._markedIndex = this._filteredItems.indexOf(item);
        }
        /**
         * @param {?=} markDefault
         * @return {?}
         */

      }, {
        key: "markSelectedOrDefault",
        value: function markSelectedOrDefault(markDefault) {
          if (this._filteredItems.length === 0) {
            return;
          }
          /** @type {?} */


          var lastMarkedIndex = this._getLastMarkedIndex();

          if (lastMarkedIndex > -1) {
            this._markedIndex = lastMarkedIndex;
          } else {
            this._markedIndex = markDefault ? this.filteredItems.findIndex(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return !x.disabled;
            }) : -1;
          }
        }
        /**
         * @param {?} option
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "resolveNested",
        value: function resolveNested(option, key) {
          if (!isObject(option)) {
            return option;
          }

          if (key.indexOf('.') === -1) {
            return option[key];
          } else {
            /** @type {?} */
            var keys = key.split('.');
            /** @type {?} */

            var value = option;

            for (var i = 0, len = keys.length; i < len; ++i) {
              if (value == null) {
                return null;
              }

              value = value[keys[i]];
            }

            return value;
          }
        }
        /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "mapItem",
        value: function mapItem(item, index) {
          /** @type {?} */
          var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
          /** @type {?} */

          var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
          return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: "".concat(this._ngSelect.dropdownId, "-").concat(index)
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "mapSelectedItems",
        value: function mapSelectedItems() {
          var _this5 = this;

          /** @type {?} */
          var multiple = this._ngSelect.multiple;

          var _iterator2 = _createForOfIteratorHelper(this.selectedItems),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var selected = _step2.value;

              /** @type {?} */
              var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
              /** @type {?} */

              var item = isDefined(value) ? this.findItem(value) : null;

              this._selectionModel.unselect(selected, multiple);

              this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return _this5.selectedItems.indexOf(x) === -1;
            });
          }
        }
        /**
         * @private
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_showSelected",
        value: function _showSelected(item) {
          this._filteredItems.push(item);

          if (item.parent) {
            /** @type {?} */
            var _parent2 = item.parent;
            /** @type {?} */

            var parentExists = this._filteredItems.find(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x === _parent2;
            });

            if (!parentExists) {
              this._filteredItems.push(_parent2);
            }
          } else if (item.children) {
            var _iterator3 = _createForOfIteratorHelper(item.children),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var child = _step3.value;
                child.selected = false;

                this._filteredItems.push(child);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          this._filteredItems = _toConsumableArray(this._filteredItems.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return a.index - b.index;
          }));
        }
        /**
         * @private
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_hideSelected",
        value: function _hideSelected(item) {
          this._filteredItems = this._filteredItems.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x !== item;
          });

          if (item.parent) {
            /** @type {?} */
            var children = item.parent.children;

            if (children.every(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.selected;
            })) {
              this._filteredItems = this._filteredItems.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x !== item.parent;
              });
            }
          } else if (item.children) {
            this._filteredItems = this.filteredItems.filter(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.parent !== item;
            });
          }
        }
        /**
         * @private
         * @param {?} search
         * @param {?} opt
         * @return {?}
         */

      }, {
        key: "_defaultSearchFn",
        value: function _defaultSearchFn(search, opt) {
          /** @type {?} */
          var label = stripSpecialChars(opt.label).toLocaleLowerCase();
          return label.indexOf(search) > -1;
        }
        /**
         * @private
         * @param {?} steps
         * @return {?}
         */

      }, {
        key: "_getNextItemIndex",
        value: function _getNextItemIndex(steps) {
          if (steps > 0) {
            return this._markedIndex === this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
          }

          return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
        }
        /**
         * @private
         * @param {?} steps
         * @return {?}
         */

      }, {
        key: "_stepToItem",
        value: function _stepToItem(steps) {
          if (this._filteredItems.length === 0 || this._filteredItems.every(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.disabled;
          })) {
            return;
          }

          this._markedIndex = this._getNextItemIndex(steps);

          if (this.markedItem.disabled) {
            this._stepToItem(steps);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getLastMarkedIndex",
        value: function _getLastMarkedIndex() {
          if (this._ngSelect.hideSelected) {
            return -1;
          }

          if (this._markedIndex > -1 && this.markedItem === undefined) {
            return -1;
          }
          /** @type {?} */


          var selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);

          if (this.lastSelectedItem && selectedIndex < 0) {
            return -1;
          }

          return Math.max(this.markedIndex, selectedIndex);
        }
        /**
         * @private
         * @param {?} items
         * @param {?} prop
         * @return {?}
         */

      }, {
        key: "_groupBy",
        value: function _groupBy(items, prop) {
          var _this6 = this;

          /** @type {?} */
          var groups = new Map();

          if (items.length === 0) {
            return groups;
          } // Check if items are already grouped by given key.


          if (Array.isArray(items[0].value[
          /** @type {?} */
          prop])) {
            var _iterator4 = _createForOfIteratorHelper(items),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var item = _step4.value;

                /** @type {?} */
                var children = (item.value[
                /** @type {?} */
                prop] || []).map(
                /**
                * @param {?} x
                * @param {?} index
                * @return {?}
                */
                function (x, index) {
                  return _this6.mapItem(x, index);
                });
                groups.set(item, children);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return groups;
          }
          /** @type {?} */


          var isFnKey = isFunction(this._ngSelect.groupBy);
          /** @type {?} */

          var keyFn =
          /**
          * @param {?} item
          * @return {?}
          */
          function keyFn(item) {
            /** @type {?} */
            var key = isFnKey ?
            /** @type {?} */
            prop(item.value) : item.value[
            /** @type {?} */
            prop];
            return isDefined(key) ? key : undefined;
          }; // Group items by key.


          var _iterator5 = _createForOfIteratorHelper(items),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _item = _step5.value;

              /** @type {?} */
              var key = keyFn(_item);
              /** @type {?} */

              var group = groups.get(key);

              if (group) {
                group.push(_item);
              } else {
                groups.set(key, [_item]);
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          return groups;
        }
        /**
         * @private
         * @param {?} groups
         * @return {?}
         */

      }, {
        key: "_flatten",
        value: function _flatten(groups) {
          var _this7 = this;

          /** @type {?} */
          var isGroupByFn = isFunction(this._ngSelect.groupBy);
          /** @type {?} */

          var items = [];

          var _loop = function _loop() {
            var key = _Array$from2[_i3];

            /** @type {?} */
            var i = items.length;

            if (key === undefined) {
              /** @type {?} */
              var withoutGroup = groups.get(undefined) || [];
              items.push.apply(items, _toConsumableArray(withoutGroup.map(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return Object.assign({}, x, {
                  index: i++
                });
              })));
              return "continue";
            }
            /** @type {?} */


            var isObjectKey = isObject(key);
            /** @type {?} */

            var parent = {
              label: isObjectKey ? '' : String(key),
              children: undefined,
              parent: null,
              index: i++,
              disabled: !_this7._ngSelect.selectableGroup,
              htmlId: newId()
            };
            /** @type {?} */

            var groupKey = isGroupByFn ? _this7._ngSelect.bindLabel :
            /** @type {?} */
            _this7._ngSelect.groupBy;
            /** @type {?} */

            var groupValue = _this7._ngSelect.groupValue ||
            /**
            * @return {?}
            */
            function () {
              if (isObjectKey) {
                return (
                  /** @type {?} */
                  key.value
                );
              }

              return _defineProperty({}, groupKey, key);
            };
            /** @type {?} */


            var children = groups.get(key).map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              x.parent = parent;
              x.children = undefined;
              x.index = i++;
              return x;
            });
            parent.children = children;
            parent.value = groupValue(key, children.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.value;
            }));
            items.push(parent);
            items.push.apply(items, _toConsumableArray(children));
          };

          for (var _i3 = 0, _Array$from2 = Array.from(groups.keys()); _i3 < _Array$from2.length; _i3++) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }

          return items;
        }
      }, {
        key: "items",
        get: function get() {
          return this._items;
        }
        /**
         * @return {?}
         */

      }, {
        key: "filteredItems",
        get: function get() {
          return this._filteredItems;
        }
        /**
         * @return {?}
         */

      }, {
        key: "markedIndex",
        get: function get() {
          return this._markedIndex;
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectedItems",
        get: function get() {
          return this._selectionModel.value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "markedItem",
        get: function get() {
          return this._filteredItems[this._markedIndex];
        }
        /**
         * @return {?}
         */

      }, {
        key: "noItemsToSelect",
        get: function get() {
          return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "maxItemsSelected",
        get: function get() {
          return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "lastSelectedItem",
        get: function get() {
          /** @type {?} */
          var i = this.selectedItems.length - 1;

          for (; i >= 0; i--) {
            /** @type {?} */
            var item = this.selectedItems[i];

            if (!item.disabled) {
              return item;
            }
          }

          return null;
        }
      }]);

      return ItemsList;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function NgOption() {}

    if (false) {}
    /** @enum {number} */


    var KeyCode = {
      Tab: 9,
      Enter: 13,
      Esc: 27,
      Space: 32,
      ArrowUp: 38,
      ArrowDown: 40,
      Backspace: 8
    };
    KeyCode[KeyCode.Tab] = 'Tab';
    KeyCode[KeyCode.Enter] = 'Enter';
    KeyCode[KeyCode.Esc] = 'Esc';
    KeyCode[KeyCode.Space] = 'Space';
    KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
    KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
    KeyCode[KeyCode.Backspace] = 'Backspace';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */

    function ItemsRangeResult() {}

    if (false) {}
    /**
     * @record
     */


    function PanelDimensions() {}

    if (false) {}

    var NgDropdownPanelService = /*#__PURE__*/function () {
      function NgDropdownPanelService() {
        _classCallCheck(this, NgDropdownPanelService);

        this._dimensions = {
          itemHeight: 0,
          panelHeight: 0,
          itemsPerViewport: 0
        };
      }
      /**
       * @return {?}
       */


      _createClass(NgDropdownPanelService, [{
        key: "calculateItems",

        /**
         * @param {?} scrollPos
         * @param {?} itemsLength
         * @param {?} buffer
         * @return {?}
         */
        value: function calculateItems(scrollPos, itemsLength, buffer) {
          /** @type {?} */
          var d = this._dimensions;
          /** @type {?} */

          var scrollHeight = d.itemHeight * itemsLength;
          /** @type {?} */

          var scrollTop = Math.max(0, scrollPos);
          /** @type {?} */

          var indexByScrollTop = scrollTop / scrollHeight * itemsLength;
          /** @type {?} */

          var end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
          /** @type {?} */

          var maxStartEnd = end;
          /** @type {?} */

          var maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
          /** @type {?} */

          var start = Math.min(maxStart, Math.floor(indexByScrollTop));
          /** @type {?} */

          var topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
          topPadding = !isNaN(topPadding) ? topPadding : 0;
          start = !isNaN(start) ? start : -1;
          end = !isNaN(end) ? end : -1;
          start -= buffer;
          start = Math.max(0, start);
          end += buffer;
          end = Math.min(itemsLength, end);
          return {
            topPadding: topPadding,
            scrollHeight: scrollHeight,
            start: start,
            end: end
          };
        }
        /**
         * @param {?} itemHeight
         * @param {?} panelHeight
         * @return {?}
         */

      }, {
        key: "setDimensions",
        value: function setDimensions(itemHeight, panelHeight) {
          /** @type {?} */
          var itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
          this._dimensions = {
            itemHeight: itemHeight,
            panelHeight: panelHeight,
            itemsPerViewport: itemsPerViewport
          };
        }
        /**
         * @param {?} itemTop
         * @param {?} itemHeight
         * @param {?} lastScroll
         * @return {?}
         */

      }, {
        key: "getScrollTo",
        value: function getScrollTo(itemTop, itemHeight, lastScroll) {
          var panelHeight = this.dimensions.panelHeight;
          /** @type {?} */

          var itemBottom = itemTop + itemHeight;
          /** @type {?} */

          var top = lastScroll;
          /** @type {?} */

          var bottom = top + panelHeight;

          if (panelHeight >= itemBottom && lastScroll === itemTop) {
            return null;
          }

          if (itemBottom > bottom) {
            return top + itemBottom - bottom;
          } else if (itemTop <= top) {
            return itemTop;
          }

          return null;
        }
      }, {
        key: "dimensions",
        get: function get() {
          return this._dimensions;
        }
      }]);

      return NgDropdownPanelService;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var TOP_CSS_CLASS = 'ng-select-top';
    /** @type {?} */

    var BOTTOM_CSS_CLASS = 'ng-select-bottom';
    /** @type {?} */

    var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"];

    var NgDropdownPanelComponent = /*#__PURE__*/function () {
      /**
       * @param {?} _renderer
       * @param {?} _zone
       * @param {?} _panelService
       * @param {?} _elementRef
       * @param {?} _document
       */
      function NgDropdownPanelComponent(_renderer, _zone, _panelService, _elementRef, _document) {
        _classCallCheck(this, NgDropdownPanelComponent);

        this._renderer = _renderer;
        this._zone = _zone;
        this._panelService = _panelService;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._scrollToEndFired = false;
        this._updateScrollHeight = false;
        this._lastScrollPosition = 0;
        this._dropdown = _elementRef.nativeElement;
      }
      /**
       * @return {?}
       */


      _createClass(NgDropdownPanelComponent, [{
        key: "handleMousedown",

        /**
         * @param {?} $event
         * @return {?}
         */
        value: function handleMousedown($event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          $event.target;

          if (target.tagName === 'INPUT') {
            return;
          }

          $event.preventDefault();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._select = this._dropdown.parentElement;
          this._virtualPadding = this.paddingElementRef.nativeElement;
          this._scrollablePanel = this.scrollElementRef.nativeElement;
          this._contentPanel = this.contentElementRef.nativeElement;

          this._handleScroll();

          this._handleOutsideClick();

          this._appendDropdown();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.items) {
            /** @type {?} */
            var change = changes.items;

            this._onItemsChange(change.currentValue, change.firstChange);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroy$.next();

          this._destroy$.complete();

          this._destroy$.unsubscribe();

          if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
          }
        }
        /**
         * @param {?} option
         * @param {?=} startFromOption
         * @return {?}
         */

      }, {
        key: "scrollTo",
        value: function scrollTo(option) {
          var startFromOption = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (!option) {
            return;
          }
          /** @type {?} */


          var index = this.items.indexOf(option);

          if (index < 0 || index >= this.itemsLength) {
            return;
          }
          /** @type {?} */


          var scrollTo;

          if (this.virtualScroll) {
            /** @type {?} */
            var itemHeight = this._panelService.dimensions.itemHeight;
            scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
          } else {
            /** @type {?} */
            var item = this._dropdown.querySelector("#".concat(option.htmlId));
            /** @type {?} */


            var lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
            scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
          }

          if (isDefined(scrollTo)) {
            this._scrollablePanel.scrollTop = scrollTo;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "scrollToTag",
        value: function scrollToTag() {
          /** @type {?} */
          var panel = this._scrollablePanel;
          panel.scrollTop = panel.scrollHeight - panel.clientHeight;
        }
        /**
         * @return {?}
         */

      }, {
        key: "adjustPosition",
        value: function adjustPosition() {
          /** @type {?} */
          var parent = this._parent.getBoundingClientRect();
          /** @type {?} */


          var select = this._select.getBoundingClientRect();

          this._setOffset(parent, select);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleDropdownPosition",
        value: function _handleDropdownPosition() {
          this._currentPosition = this._calculateCurrentPosition(this._dropdown);

          if (this._currentPosition === 'top') {
            this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);

            this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);

            this._renderer.addClass(this._select, TOP_CSS_CLASS);

            this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
          } else {
            this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);

            this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);

            this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);

            this._renderer.removeClass(this._select, TOP_CSS_CLASS);
          }

          if (this.appendTo) {
            this._updatePosition();
          }

          this._dropdown.style.opacity = '1';
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleScroll",
        value: function _handleScroll() {
          var _this8 = this;

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this8.scrollElementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this8._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return _this8._onContentScrolled(e.target.scrollTop);
            });
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleOutsideClick",
        value: function _handleOutsideClick() {
          var _this9 = this;

          if (!this._document) {
            return;
          }

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this9._document, 'touchstart', {
              capture: true
            }), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this9._document, 'mousedown', {
              capture: true
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this9._destroy$)).subscribe(
            /**
            * @param {?} $event
            * @return {?}
            */
            function ($event) {
              return _this9._checkToClose($event);
            });
          });
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_checkToClose",
        value: function _checkToClose($event) {
          var _this10 = this;

          if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
            return;
          }
          /** @type {?} */


          var path = $event.path || $event.composedPath && $event.composedPath();

          if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
          }

          this._zone.run(
          /**
          * @return {?}
          */
          function () {
            return _this10.outsideClick.emit();
          });
        }
        /**
         * @private
         * @param {?} items
         * @param {?} firstChange
         * @return {?}
         */

      }, {
        key: "_onItemsChange",
        value: function _onItemsChange(items, firstChange) {
          this.items = items || [];
          this._scrollToEndFired = false;
          this.itemsLength = items.length;

          if (this.virtualScroll) {
            this._updateItemsRange(firstChange);
          } else {
            this._updateItems(firstChange);
          }
        }
        /**
         * @private
         * @param {?} firstChange
         * @return {?}
         */

      }, {
        key: "_updateItems",
        value: function _updateItems(firstChange) {
          var _this11 = this;

          this.update.emit(this.items);

          if (firstChange === false) {
            return;
          }

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            Promise.resolve().then(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var panelHeight = _this11._scrollablePanel.clientHeight;

              _this11._panelService.setDimensions(0, panelHeight);

              _this11._handleDropdownPosition();

              _this11.scrollTo(_this11.markedItem, firstChange);
            });
          });
        }
        /**
         * @private
         * @param {?} firstChange
         * @return {?}
         */

      }, {
        key: "_updateItemsRange",
        value: function _updateItemsRange(firstChange) {
          var _this12 = this;

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this12._measureDimensions().then(
            /**
            * @return {?}
            */
            function () {
              if (firstChange) {
                _this12._renderItemsRange(_this12._startOffset);

                _this12._handleDropdownPosition();
              } else {
                _this12._renderItemsRange();
              }
            });
          });
        }
        /**
         * @private
         * @param {?} scrollTop
         * @return {?}
         */

      }, {
        key: "_onContentScrolled",
        value: function _onContentScrolled(scrollTop) {
          if (this.virtualScroll) {
            this._renderItemsRange(scrollTop);
          }

          this._lastScrollPosition = scrollTop;

          this._fireScrollToEnd(scrollTop);
        }
        /**
         * @private
         * @param {?} height
         * @return {?}
         */

      }, {
        key: "_updateVirtualHeight",
        value: function _updateVirtualHeight(height) {
          if (this._updateScrollHeight) {
            this._virtualPadding.style.height = "".concat(height, "px");
            this._updateScrollHeight = false;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_onItemsLengthChanged",
        value: function _onItemsLengthChanged() {
          this._updateScrollHeight = true;
        }
        /**
         * @private
         * @param {?=} scrollTop
         * @return {?}
         */

      }, {
        key: "_renderItemsRange",
        value: function _renderItemsRange() {
          var _this13 = this;

          var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (scrollTop && this._lastScrollPosition === scrollTop) {
            return;
          }

          scrollTop = scrollTop || this._scrollablePanel.scrollTop;
          /** @type {?} */

          var range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);

          this._updateVirtualHeight(range.scrollHeight);

          this._contentPanel.style.transform = "translateY(".concat(range.topPadding, "px)");

          this._zone.run(
          /**
          * @return {?}
          */
          function () {
            _this13.update.emit(_this13.items.slice(range.start, range.end));

            _this13.scroll.emit({
              start: range.start,
              end: range.end
            });
          });

          if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
            this._scrollablePanel.scrollTop = scrollTop;
            this._lastScrollPosition = scrollTop;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_measureDimensions",
        value: function _measureDimensions() {
          var _this14 = this;

          if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
            return Promise.resolve(this._panelService.dimensions);
          }

          var _this$items = _slicedToArray(this.items, 1),
              first = _this$items[0];

          this.update.emit([first]);
          return Promise.resolve().then(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var option = _this14._dropdown.querySelector("#".concat(first.htmlId));
            /** @type {?} */


            var optionHeight = option.clientHeight;
            _this14._virtualPadding.style.height = "".concat(optionHeight * _this14.itemsLength, "px");
            /** @type {?} */

            var panelHeight = _this14._scrollablePanel.clientHeight;

            _this14._panelService.setDimensions(optionHeight, panelHeight);

            return _this14._panelService.dimensions;
          });
        }
        /**
         * @private
         * @param {?} scrollTop
         * @return {?}
         */

      }, {
        key: "_fireScrollToEnd",
        value: function _fireScrollToEnd(scrollTop) {
          var _this15 = this;

          if (this._scrollToEndFired || scrollTop === 0) {
            return;
          }
          /** @type {?} */


          var padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;

          if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this._zone.run(
            /**
            * @return {?}
            */
            function () {
              return _this15.scrollToEnd.emit();
            });

            this._scrollToEndFired = true;
          }
        }
        /**
         * @private
         * @param {?} dropdownEl
         * @return {?}
         */

      }, {
        key: "_calculateCurrentPosition",
        value: function _calculateCurrentPosition(dropdownEl) {
          if (this.position !== 'auto') {
            return this.position;
          }
          /** @type {?} */


          var selectRect = this._select.getBoundingClientRect();
          /** @type {?} */


          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          /** @type {?} */

          var offsetTop = selectRect.top + window.pageYOffset;
          /** @type {?} */

          var height = selectRect.height;
          /** @type {?} */

          var dropdownHeight = dropdownEl.getBoundingClientRect().height;

          if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
          } else {
            return 'bottom';
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_appendDropdown",
        value: function _appendDropdown() {
          if (!this.appendTo) {
            return;
          }

          this._parent = document.querySelector(this.appendTo);

          if (!parent) {
            throw new Error("appendTo selector ".concat(this.appendTo, " did not found any parent element"));
          }

          this._parent.appendChild(this._dropdown);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updatePosition",
        value: function _updatePosition() {
          /** @type {?} */
          var select = this._select.getBoundingClientRect();
          /** @type {?} */


          var parent = this._parent.getBoundingClientRect();
          /** @type {?} */


          var offsetLeft = select.left - parent.left;

          this._setOffset(parent, select);

          this._dropdown.style.left = offsetLeft + 'px';
          this._dropdown.style.width = select.width + 'px';
          this._dropdown.style.minWidth = select.width + 'px';
        }
        /**
         * @private
         * @param {?} parent
         * @param {?} select
         * @return {?}
         */

      }, {
        key: "_setOffset",
        value: function _setOffset(parent, select) {
          /** @type {?} */
          var delta = select.height;

          if (this._currentPosition === 'top') {
            /** @type {?} */
            var offsetBottom = parent.bottom - select.bottom;
            this._dropdown.style.bottom = offsetBottom + delta + 'px';
            this._dropdown.style.top = 'auto';
          } else if (this._currentPosition === 'bottom') {
            /** @type {?} */
            var offsetTop = select.top - parent.top;
            this._dropdown.style.top = offsetTop + delta + 'px';
            this._dropdown.style.bottom = 'auto';
          }
        }
      }, {
        key: "currentPosition",
        get: function get() {
          return this._currentPosition;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "itemsLength",
        get: function get() {
          return this._itemsLength;
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._itemsLength) {
            this._itemsLength = value;

            this._onItemsLengthChanged();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_startOffset",
        get: function get() {
          if (this.markedItem) {
            var _this$_panelService$d = this._panelService.dimensions,
                itemHeight = _this$_panelService$d.itemHeight,
                panelHeight = _this$_panelService$d.panelHeight;
            /** @type {?} */

            var offset = this.markedItem.index * itemHeight;
            return panelHeight > offset ? 0 : offset;
          }

          return 0;
        }
      }]);

      return NgDropdownPanelComponent;
    }();

    NgDropdownPanelComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        selector: 'ng-dropdown-panel',
        template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
      }]
    }];
    /** @nocollapse */

    NgDropdownPanelComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: NgDropdownPanelService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };

    NgDropdownPanelComponent.propDecorators = {
      items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      markedItem: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      appendTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bufferAmount: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      virtualScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      headerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      footerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      filterValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      scroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      scrollToEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      outsideClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      contentElementRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['content', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          "static": true
        }]
      }],
      scrollElementRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['scroll', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          "static": true
        }]
      }],
      paddingElementRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['padding', {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          "static": true
        }]
      }],
      handleMousedown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mousedown', ['$event']]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgOptionComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       */
      function NgOptionComponent(elementRef) {
        _classCallCheck(this, NgOptionComponent);

        this.elementRef = elementRef;
        this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._disabled = false;
      }
      /**
       * @return {?}
       */


      _createClass(NgOptionComponent, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes.disabled) {
            this.stateChange$.next({
              value: this.value,
              disabled: this._disabled
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this.label !== this._previousLabel) {
            this._previousLabel = this.label;
            this.stateChange$.next({
              value: this.value,
              disabled: this._disabled,
              label: this.elementRef.nativeElement.innerHTML
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stateChange$.complete();
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_isDisabled",
        value: function _isDisabled(value) {
          return value != null && "".concat(value) !== 'false';
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = this._isDisabled(value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "label",
        get: function get() {
          return (this.elementRef.nativeElement.textContent || '').trim();
        }
      }]);

      return NgOptionComponent;
    }();

    NgOptionComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ng-option',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        template: "<ng-content></ng-content>"
      }]
    }];
    /** @nocollapse */

    NgOptionComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    NgOptionComponent.propDecorators = {
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgSelectConfig = function NgSelectConfig() {
      _classCallCheck(this, NgSelectConfig);

      this.notFoundText = 'No items found';
      this.typeToSearchText = 'Type to search';
      this.addTagText = 'Add item';
      this.loadingText = 'Loading...';
      this.clearAllText = 'Clear all';
      this.disableVirtualScroll = true;
      this.openOnEnter = true;
      this.appearance = 'underline';
    };

    NgSelectConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgSelectConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgSelectConfig_Factory() {
        return new NgSelectConfig();
      },
      token: NgSelectConfig,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ng-select-selection-model');

    var NgSelectComponent = /*#__PURE__*/function () {
      /**
       * @param {?} classes
       * @param {?} autoFocus
       * @param {?} config
       * @param {?} newSelectionModel
       * @param {?} _elementRef
       * @param {?} _cd
       * @param {?} _console
       */
      function NgSelectComponent(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        var _this16 = this;

        _classCallCheck(this, NgSelectComponent);

        this.classes = classes;
        this.autoFocus = autoFocus;
        this._cd = _cd;
        this._console = _console;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.trackByFn = null;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.inputAttrs = {};
        this.readonly = false;
        this.searchWhileComposing = true;
        this.minTermLength = 0;
        this.editableSearchTerm = false;

        this.keyDownFn =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {
          return true;
        };

        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false; // output events

        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.viewPortItems = [];
        this.searchTerm = null;
        this.dropdownId = newId();
        this.escapeHTML = true;
        this.useDefaultClass = true;
        this._items = [];
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._isComposing = false;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();

        this._onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        this.clearItem =
        /**
        * @param {?} item
        * @return {?}
        */
        function (item) {
          /** @type {?} */
          var option = _this16.selectedItems.find(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.value === item;
          });

          _this16.unselect(option);
        };

        this.trackByOption =
        /**
        * @param {?} _
        * @param {?} item
        * @return {?}
        */
        function (_, item) {
          if (_this16.trackByFn) {
            return _this16.trackByFn(item.value);
          }

          return item;
        };

        this._mergeGlobalConfig(config);

        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
      }
      /**
       * @return {?}
       */


      _createClass(NgSelectComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._handleKeyPresses();

          this._setInputAttributes();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.multiple) {
            this.itemsList.clearSelected();
          }

          if (changes.items) {
            this._setItems(changes.items.currentValue || []);
          }

          if (changes.isOpen) {
            this._manualOpen = isDefined(changes.isOpen.currentValue);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (!this._itemsAreUsed) {
            this.escapeHTML = false;

            this._setItemsFromNgOptions();
          }

          if (isDefined(this.autoFocus)) {
            this.focus();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroy$.next();

          this._destroy$.complete();
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "handleKeyDown",
        value: function handleKeyDown($event) {
          /** @type {?} */
          var keyCode = KeyCode[$event.which];

          if (keyCode) {
            if (this.keyDownFn($event) === false) {
              return;
            }

            this.handleKeyCode($event);
          } else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
          }
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "handleKeyCode",
        value: function handleKeyCode($event) {
          switch ($event.which) {
            case KeyCode.ArrowDown:
              this._handleArrowDown($event);

              break;

            case KeyCode.ArrowUp:
              this._handleArrowUp($event);

              break;

            case KeyCode.Space:
              this._handleSpace($event);

              break;

            case KeyCode.Enter:
              this._handleEnter($event);

              break;

            case KeyCode.Tab:
              this._handleTab($event);

              break;

            case KeyCode.Esc:
              this.close();
              $event.preventDefault();
              break;

            case KeyCode.Backspace:
              this._handleBackspace();

              break;
          }
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "handleMousedown",
        value: function handleMousedown($event) {
          /** @type {?} */
          var target =
          /** @type {?} */
          $event.target;

          if (target.tagName !== 'INPUT') {
            $event.preventDefault();
          }

          if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
          }

          if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
          }

          if (target.classList.contains('ng-value-icon')) {
            return;
          }

          if (!this.focused) {
            this.focus();
          }

          if (this.searchable) {
            this.open();
          } else {
            this.toggle();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleArrowClick",
        value: function handleArrowClick() {
          if (this.isOpen) {
            this.close();
          } else {
            this.open();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleClearClick",
        value: function handleClearClick() {
          if (this.hasValue) {
            this.itemsList.clearSelected(true);

            this._updateNgModel();
          }

          this._clearSearch();

          this.focus();
          this.clearEvent.emit();

          this._onSelectionChanged();
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearModel",
        value: function clearModel() {
          if (!this.clearable) {
            return;
          }

          this.itemsList.clearSelected();

          this._updateNgModel();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.itemsList.clearSelected();

          this._handleWriteValue(value);

          this._cd.markForCheck();
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * @param {?} state
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(state) {
          this._disabled = state;

          this._cd.markForCheck();
        }
        /**
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (!this.isOpen) {
            this.open();
          } else {
            this.close();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
          }

          if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
          }

          this.isOpen = true;
          this.itemsList.markSelectedOrDefault(this.markFirst);
          this.openEvent.emit();

          if (!this.searchTerm) {
            this.focus();
          }

          this.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (!this.isOpen || this._manualOpen) {
            return;
          }

          this.isOpen = false;

          if (!this._editableSearchTerm) {
            this._clearSearch();
          } else {
            this.itemsList.resetFilteredItems();
          }

          this.itemsList.unmarkItem();

          this._onTouched();

          this.closeEvent.emit();

          this._cd.markForCheck();
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "toggleItem",
        value: function toggleItem(item) {
          if (!item || item.disabled || this.disabled) {
            return;
          }

          if (this.multiple && item.selected) {
            this.unselect(item);
          } else {
            this.select(item);
          }

          if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
          }

          this._onSelectionChanged();
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(item) {
          if (!item.selected) {
            this.itemsList.select(item);

            if (this.clearSearchOnAdd && !this._editableSearchTerm) {
              this._clearSearch();
            }

            this._updateNgModel();

            if (this.multiple) {
              this.addEvent.emit(item.value);
            }
          }

          if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this.searchInput.nativeElement.focus();
        }
        /**
         * @return {?}
         */

      }, {
        key: "blur",
        value: function blur() {
          this.searchInput.nativeElement.blur();
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "unselect",
        value: function unselect(item) {
          if (!item) {
            return;
          }

          this.itemsList.unselect(item);
          this.focus();

          this._updateNgModel();

          this.removeEvent.emit(item);
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectTag",
        value: function selectTag() {
          var _this17 = this;

          /** @type {?} */
          var tag;

          if (isFunction(this.addTag)) {
            tag =
            /** @type {?} */
            this.addTag(this.searchTerm);
          } else {
            tag = this._primitive ? this.searchTerm : _defineProperty({}, this.bindLabel, this.searchTerm);
          }
          /** @type {?} */


          var handleTag =
          /**
          * @param {?} item
          * @return {?}
          */
          function handleTag(item) {
            return _this17._isTypeahead || !_this17.isOpen ? _this17.itemsList.mapItem(item, null) : _this17.itemsList.addItem(item);
          };

          if (isPromise(tag)) {
            tag.then(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return _this17.select(handleTag(item));
            })["catch"](
            /**
            * @return {?}
            */
            function () {});
          } else if (tag) {
            this.select(handleTag(tag));
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "showClear",
        value: function showClear() {
          return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
        }
        /**
         * @return {?}
         */

      }, {
        key: "showNoItemsFound",

        /**
         * @return {?}
         */
        value: function showNoItemsFound() {
          /** @type {?} */
          var empty = this.itemsList.filteredItems.length === 0;
          return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
        }
        /**
         * @return {?}
         */

      }, {
        key: "showTypeToSearch",
        value: function showTypeToSearch() {
          /** @type {?} */
          var empty = this.itemsList.filteredItems.length === 0;
          return empty && this._isTypeahead && !this._validTerm && !this.loading;
        }
        /**
         * @return {?}
         */

      }, {
        key: "onCompositionStart",
        value: function onCompositionStart() {
          this._isComposing = true;
        }
        /**
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "onCompositionEnd",
        value: function onCompositionEnd(term) {
          this._isComposing = false;

          if (this.searchWhileComposing) {
            return;
          }

          this.filter(term);
        }
        /**
         * @param {?} term
         * @return {?}
         */

      }, {
        key: "filter",
        value: function filter(term) {
          if (this._isComposing && !this.searchWhileComposing) {
            return;
          }

          this.searchTerm = term;

          if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
            this.typeahead.next(term);
          }

          if (!this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);

            if (this.isOpen) {
              this.itemsList.markSelectedOrDefault(this.markFirst);
            }
          }

          this.searchEvent.emit({
            term: term,
            items: this.itemsList.filteredItems.map(
            /**
            * @param {?} x
            * @return {?}
            */
            function (x) {
              return x.value;
            })
          });
          this.open();
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onInputFocus",
        value: function onInputFocus($event) {
          if (this.focused) {
            return;
          }

          if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
          }

          this.element.classList.add('ng-select-focused');
          this.focusEvent.emit($event);
          this.focused = true;
        }
        /**
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "onInputBlur",
        value: function onInputBlur($event) {
          this.element.classList.remove('ng-select-focused');
          this.blurEvent.emit($event);

          if (!this.isOpen && !this.disabled) {
            this._onTouched();
          }

          if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
          }

          this.focused = false;
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "onItemHover",
        value: function onItemHover(item) {
          if (item.disabled) {
            return;
          }

          this.itemsList.markItem(item);
        }
        /**
         * @return {?}
         */

      }, {
        key: "detectChanges",
        value: function detectChanges() {
          if (!
          /** @type {?} */
          this._cd.destroyed) {
            this._cd.detectChanges();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setSearchTermFromItems",
        value: function _setSearchTermFromItems() {
          /** @type {?} */
          var selected = this.selectedItems && this.selectedItems[0];
          this.searchTerm = selected && selected.label || null;
        }
        /**
         * @private
         * @param {?} items
         * @return {?}
         */

      }, {
        key: "_setItems",
        value: function _setItems(items) {
          /** @type {?} */
          var firstItem = items[0];
          this.bindLabel = this.bindLabel || this._defaultLabel;
          this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
          this.itemsList.setItems(items);

          if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
          }

          if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
          }

          if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setItemsFromNgOptions",
        value: function _setItemsFromNgOptions() {
          var _this18 = this;

          /** @type {?} */
          var mapNgOptions =
          /**
          * @param {?} options
          * @return {?}
          */
          function mapNgOptions(options) {
            _this18.items = options.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return {
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
              };
            });

            _this18.itemsList.setItems(_this18.items);

            if (_this18.hasValue) {
              _this18.itemsList.mapSelectedItems();
            }

            _this18.detectChanges();
          };
          /** @type {?} */


          var handleOptionChange =
          /**
          * @return {?}
          */
          function handleOptionChange() {
            /** @type {?} */
            var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(_this18.ngOptions.changes, _this18._destroy$);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"]).apply(void 0, _toConsumableArray(_this18.ngOptions.map(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              return option.stateChange$;
            }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(changedOrDestroyed)).subscribe(
            /**
            * @param {?} option
            * @return {?}
            */
            function (option) {
              /** @type {?} */
              var item = _this18.itemsList.findItem(option.value);

              item.disabled = option.disabled;
              item.label = option.label || item.label;

              _this18._cd.detectChanges();
            });
          };

          this.ngOptions.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.ngOptions), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$)).subscribe(
          /**
          * @param {?} options
          * @return {?}
          */
          function (options) {
            _this18.bindLabel = _this18._defaultLabel;
            mapNgOptions(options);
            handleOptionChange();
          });
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_isValidWriteValue",
        value: function _isValidWriteValue(value) {
          var _this19 = this;

          if (!isDefined(value) || this.multiple && value === '' || Array.isArray(value) && value.length === 0) {
            return false;
          }
          /** @type {?} */


          var validateBinding =
          /**
          * @param {?} item
          * @return {?}
          */
          function validateBinding(item) {
            if (!isDefined(_this19.compareWith) && isObject(item) && _this19.bindValue) {
              _this19._console.warn("Binding object(".concat(JSON.stringify(item), ") with bindValue is not allowed."));

              return false;
            }

            return true;
          };

          if (this.multiple) {
            if (!Array.isArray(value)) {
              this._console.warn('Multiple select ngModel should be array.');

              return false;
            }

            return value.every(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return validateBinding(item);
            });
          } else {
            return validateBinding(value);
          }
        }
        /**
         * @private
         * @param {?} ngModel
         * @return {?}
         */

      }, {
        key: "_handleWriteValue",
        value: function _handleWriteValue(ngModel) {
          var _this20 = this;

          if (!this._isValidWriteValue(ngModel)) {
            return;
          }
          /** @type {?} */


          var select =
          /**
          * @param {?} val
          * @return {?}
          */
          function select(val) {
            /** @type {?} */
            var item = _this20.itemsList.findItem(val);

            if (item) {
              _this20.itemsList.select(item);
            } else {
              /** @type {?} */
              var isValObject = isObject(val);
              /** @type {?} */

              var isPrimitive = !isValObject && !_this20.bindValue;

              if (isValObject || isPrimitive) {
                _this20.itemsList.select(_this20.itemsList.mapItem(val, null));
              } else if (_this20.bindValue) {
                var _item2;

                item = (_item2 = {}, _defineProperty(_item2, _this20.bindLabel, null), _defineProperty(_item2, _this20.bindValue, val), _item2);

                _this20.itemsList.select(_this20.itemsList.mapItem(item, null));
              }
            }
          };

          if (this.multiple) {
            /** @type {?} */
            ngModel.forEach(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return select(item);
            });
          } else {
            select(ngModel);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleKeyPresses",
        value: function _handleKeyPresses() {
          var _this21 = this;

          if (this.searchable) {
            return;
          }

          this._keyPress$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(
          /**
          * @param {?} letter
          * @return {?}
          */
          function (letter) {
            return _this21._pressedKeys.push(letter);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @return {?}
          */
          function () {
            return _this21._pressedKeys.length > 0;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @return {?}
          */
          function () {
            return _this21._pressedKeys.join('');
          })).subscribe(
          /**
          * @param {?} term
          * @return {?}
          */
          function (term) {
            /** @type {?} */
            var item = _this21.itemsList.findByLabel(term);

            if (item) {
              if (_this21.isOpen) {
                _this21.itemsList.markItem(item);

                _this21._cd.markForCheck();
              } else {
                _this21.select(item);
              }
            }

            _this21._pressedKeys = [];
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setInputAttributes",
        value: function _setInputAttributes() {
          /** @type {?} */
          var input = this.searchInput.nativeElement;
          /** @type {?} */

          var attributes = Object.assign({
            type: 'text',
            autocorrect: 'off',
            autocapitalize: 'off',
            autocomplete: this.labelForId ? 'off' : this.dropdownId
          }, this.inputAttrs);

          for (var _i4 = 0, _Object$keys = Object.keys(attributes); _i4 < _Object$keys.length; _i4++) {
            var key = _Object$keys[_i4];
            input.setAttribute(key, attributes[key]);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateNgModel",
        value: function _updateNgModel() {
          /** @type {?} */
          var model = [];

          var _iterator6 = _createForOfIteratorHelper(this.selectedItems),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var item = _step6.value;

              if (this.bindValue) {
                /** @type {?} */
                var value = null;

                if (item.children) {
                  /** @type {?} */
                  var groupKey = this.groupValue ? this.bindValue :
                  /** @type {?} */
                  this.groupBy;
                  value = item.value[groupKey ||
                  /** @type {?} */
                  this.groupBy];
                } else {
                  value = this.itemsList.resolveNested(item.value, this.bindValue);
                }

                model.push(value);
              } else {
                model.push(item.value);
              }
            }
            /** @type {?} */

          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          var selected = this.selectedItems.map(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.value;
          });

          if (this.multiple) {
            this._onChange(model);

            this.changeEvent.emit(selected);
          } else {
            this._onChange(isDefined(model[0]) ? model[0] : null);

            this.changeEvent.emit(selected[0]);
          }

          this._cd.markForCheck();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_clearSearch",
        value: function _clearSearch() {
          if (!this.searchTerm) {
            return;
          }

          this._changeSearch(null);

          this.itemsList.resetFilteredItems();
        }
        /**
         * @private
         * @param {?} searchTerm
         * @return {?}
         */

      }, {
        key: "_changeSearch",
        value: function _changeSearch(searchTerm) {
          this.searchTerm = searchTerm;

          if (this._isTypeahead) {
            this.typeahead.next(searchTerm);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollToMarked",
        value: function _scrollToMarked() {
          if (!this.isOpen || !this.dropdownPanel) {
            return;
          }

          this.dropdownPanel.scrollTo(this.itemsList.markedItem);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_scrollToTag",
        value: function _scrollToTag() {
          if (!this.isOpen || !this.dropdownPanel) {
            return;
          }

          this.dropdownPanel.scrollToTag();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_onSelectionChanged",
        value: function _onSelectionChanged() {
          if (this.isOpen && this.multiple && this.appendTo) {
            // Make sure items are rendered.
            this._cd.detectChanges();

            this.dropdownPanel.adjustPosition();
          }
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleTab",
        value: function _handleTab($event) {
          if (this.isOpen === false && !this.addTag) {
            return;
          }

          if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
              this.toggleItem(this.itemsList.markedItem);
              $event.preventDefault();
            } else if (this.showAddTag) {
              this.selectTag();
              $event.preventDefault();
            } else {
              this.close();
            }
          } else {
            this.close();
          }
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleEnter",
        value: function _handleEnter($event) {
          if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
              this.toggleItem(this.itemsList.markedItem);
            } else if (this.showAddTag) {
              this.selectTag();
            }
          } else if (this.openOnEnter) {
            this.open();
          } else {
            return;
          }

          $event.preventDefault();
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleSpace",
        value: function _handleSpace($event) {
          if (this.isOpen || this._manualOpen) {
            return;
          }

          this.open();
          $event.preventDefault();
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleArrowDown",
        value: function _handleArrowDown($event) {
          if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();

            this._scrollToTag();
          } else {
            this.itemsList.markNextItem();

            this._scrollToMarked();
          }

          this.open();
          $event.preventDefault();
        }
        /**
         * @private
         * @param {?} $event
         * @return {?}
         */

      }, {
        key: "_handleArrowUp",
        value: function _handleArrowUp($event) {
          if (!this.isOpen) {
            return;
          }

          if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();

            this._scrollToTag();
          } else {
            this.itemsList.markPreviousItem();

            this._scrollToMarked();
          }

          $event.preventDefault();
        }
        /**
         * @private
         * @param {?} nextStep
         * @return {?}
         */

      }, {
        key: "_nextItemIsTag",
        value: function _nextItemIsTag(nextStep) {
          /** @type {?} */
          var nextIndex = this.itemsList.markedIndex + nextStep;
          return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_handleBackspace",
        value: function _handleBackspace() {
          if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
          }

          if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
          } else {
            this.clearModel();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_mergeGlobalConfig",

        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        value: function _mergeGlobalConfig(config) {
          this.placeholder = this.placeholder || config.placeholder;
          this.notFoundText = this.notFoundText || config.notFoundText;
          this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
          this.addTagText = this.addTagText || config.addTagText;
          this.loadingText = this.loadingText || config.loadingText;
          this.clearAllText = this.clearAllText || config.clearAllText;
          this.virtualScroll = isDefined(this.virtualScroll) ? this.virtualScroll : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
          this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
          this.appendTo = this.appendTo || config.appendTo;
          this.bindValue = this.bindValue || config.bindValue;
          this.appearance = this.appearance || config.appearance;
        }
      }, {
        key: "items",
        get: function get() {
          return this._items;
        },

        /**
         * @param {?} value
         * @return {?}
         */
        set: function set(value) {
          this._itemsAreUsed = true;
          this._items = value;
        }
      }, {
        key: "compareWith",

        /**
         * @return {?}
         */
        get: function get() {
          return this._compareWith;
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        ,
        set: function set(fn) {
          if (!isFunction(fn)) {
            throw Error('`compareWith` must be a function.');
          }

          this._compareWith = fn;
        }
        /**
         * @return {?}
         */

      }, {
        key: "clearSearchOnAdd",
        get: function get() {
          return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect;
        },

        /**
         * @param {?} value
         * @return {?}
         */
        set: function set(value) {
          this._clearSearchOnAdd = value;
        }
      }, {
        key: "disabled",

        /**
         * @return {?}
         */
        get: function get() {
          return this.readonly || this._disabled;
        }
      }, {
        key: "filtered",

        /**
         * @return {?}
         */
        get: function get() {
          return !!this.searchTerm && this.searchable || this._isComposing;
        }
      }, {
        key: "_editableSearchTerm",

        /**
         * @private
         * @return {?}
         */
        get: function get() {
          return this.editableSearchTerm && !this.multiple;
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectedItems",
        get: function get() {
          return this.itemsList.selectedItems;
        }
        /**
         * @return {?}
         */

      }, {
        key: "selectedValues",
        get: function get() {
          return this.selectedItems.map(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.value;
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "hasValue",
        get: function get() {
          return this.selectedItems.length > 0;
        }
        /**
         * @return {?}
         */

      }, {
        key: "currentPanelPosition",
        get: function get() {
          if (this.dropdownPanel) {
            return this.dropdownPanel.currentPosition;
          }

          return undefined;
        }
      }, {
        key: "showAddTag",
        get: function get() {
          if (!this._validTerm) {
            return false;
          }
          /** @type {?} */


          var term = this.searchTerm.toLowerCase().trim();
          return this.addTag && !this.itemsList.filteredItems.some(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.label.toLowerCase() === term;
          }) && (!this.hideSelected && this.isOpen || !this.selectedItems.some(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.label.toLowerCase() === term;
          })) && !this.loading;
        }
      }, {
        key: "_isTypeahead",
        get: function get() {
          return this.typeahead && this.typeahead.observers.length > 0;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_validTerm",
        get: function get() {
          /** @type {?} */
          var term = this.searchTerm && this.searchTerm.trim();
          return term && term.length >= this.minTermLength;
        }
      }]);

      return NgSelectComponent;
    }();

    NgSelectComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ng-select',
        template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\xD7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\xD7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return NgSelectComponent;
          }),
          multi: true
        }, NgDropdownPanelService],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        host: {
          'role': 'listbox',
          '[class.ng-select]': 'useDefaultClass',
          '[class.ng-select-single]': '!multiple'
        },
        styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:-webkit-box;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{-webkit-box-flex:1;flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
      }]
    }];
    /** @nocollapse */

    NgSelectComponent.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['class']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['autofocus']
        }]
      }, {
        type: NgSelectConfig
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [SELECTION_MODEL_FACTORY]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: ConsoleService
      }];
    };

    NgSelectComponent.propDecorators = {
      bindLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bindValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      markFirst: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      notFoundText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      typeToSearchText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      addTagText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      loadingText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clearAllText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dropdownPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      appendTo: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      loading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      closeOnSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hideSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectOnTab: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      openOnEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxSelectedItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      groupBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      groupValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bufferAmount: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      virtualScroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectableGroup: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectableGroupAsModel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      searchFn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      trackByFn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clearOnBackspace: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      labelForId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      inputAttrs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      searchWhileComposing: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minTermLength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      editableSearchTerm: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      keyDownFn: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      typeahead: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-typeahead']
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-multiple']
      }],
      addTag: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-taggable']
      }],
      searchable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-searchable']
      }],
      clearable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-clearable']
      }],
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-opened']
      }],
      items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      clearSearchOnAdd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      blurEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['blur']
      }],
      focusEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['focus']
      }],
      changeEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['change']
      }],
      openEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['open']
      }],
      closeEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['close']
      }],
      searchEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['search']
      }],
      clearEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['clear']
      }],
      addEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['add']
      }],
      removeEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['remove']
      }],
      scroll: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['scroll']
      }],
      scrollToEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['scrollToEnd']
      }],
      optionTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgOptionTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      optgroupTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgOptgroupTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      labelTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgLabelTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      multiLabelTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgMultiLabelTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      headerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgHeaderTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      footerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgFooterTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      notFoundTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgNotFoundTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      typeToSearchTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgTypeToSearchTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      loadingTextTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgLoadingTextTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      tagTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgTagTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      loadingSpinnerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgLoadingSpinnerTemplateDirective, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          "static": false
        }]
      }],
      dropdownPanel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return NgDropdownPanelComponent;
        }), {
          "static": false
        }]
      }],
      searchInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['searchInput', {
          "static": true
        }]
      }],
      ngOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgOptionComponent, {
          descendants: true
        }]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-disabled']
      }],
      filtered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.ng-select-filtered']
      }],
      handleKeyDown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['keydown', ['$event']]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function DefaultSelectionModelFactory() {
      return new DefaultSelectionModel();
    }
    /**
     * @record
     */


    function SelectionModel() {}

    if (false) {}

    var DefaultSelectionModel = /*#__PURE__*/function () {
      function DefaultSelectionModel() {
        _classCallCheck(this, DefaultSelectionModel);

        this._selected = [];
      }
      /**
       * @return {?}
       */


      _createClass(DefaultSelectionModel, [{
        key: "select",

        /**
         * @param {?} item
         * @param {?} multiple
         * @param {?} groupAsModel
         * @return {?}
         */
        value: function select(item, multiple, groupAsModel) {
          item.selected = true;

          if (!item.children || !multiple && groupAsModel) {
            this._selected.push(item);
          }

          if (multiple) {
            if (item.parent) {
              /** @type {?} */
              var childrenCount = item.parent.children.length;
              /** @type {?} */

              var selectedCount = item.parent.children.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x.selected;
              }).length;
              item.parent.selected = childrenCount === selectedCount;
            } else if (item.children) {
              this._setChildrenSelectedState(item.children, true);

              this._removeChildren(item);

              if (groupAsModel && this._activeChildren(item)) {
                this._selected = [].concat(_toConsumableArray(this._selected.filter(
                /**
                * @param {?} x
                * @return {?}
                */
                function (x) {
                  return x.parent !== item;
                })), [item]);
              } else {
                this._selected = [].concat(_toConsumableArray(this._selected), _toConsumableArray(item.children.filter(
                /**
                * @param {?} x
                * @return {?}
                */
                function (x) {
                  return !x.disabled;
                })));
              }
            }
          }
        }
        /**
         * @param {?} item
         * @param {?} multiple
         * @return {?}
         */

      }, {
        key: "unselect",
        value: function unselect(item, multiple) {
          this._selected = this._selected.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x !== item;
          });
          item.selected = false;

          if (multiple) {
            if (item.parent && item.parent.selected) {
              var _this$_selected;

              /** @type {?} */
              var children = item.parent.children;

              this._removeParent(item.parent);

              this._removeChildren(item.parent);

              (_this$_selected = this._selected).push.apply(_this$_selected, _toConsumableArray(children.filter(
              /**
              * @param {?} x
              * @return {?}
              */
              function (x) {
                return x !== item && !x.disabled;
              })));

              item.parent.selected = false;
            } else if (item.children) {
              this._setChildrenSelectedState(item.children, false);

              this._removeChildren(item);
            }
          }
        }
        /**
         * @param {?} keepDisabled
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear(keepDisabled) {
          this._selected = keepDisabled ? this._selected.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.disabled;
          }) : [];
        }
        /**
         * @private
         * @param {?} children
         * @param {?} selected
         * @return {?}
         */

      }, {
        key: "_setChildrenSelectedState",
        value: function _setChildrenSelectedState(children, selected) {
          var _iterator7 = _createForOfIteratorHelper(children),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var child = _step7.value;

              if (child.disabled) {
                continue;
              }

              child.selected = selected;
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          ;
        }
        /**
         * @private
         * @param {?} parent
         * @return {?}
         */

      }, {
        key: "_removeChildren",
        value: function _removeChildren(parent) {
          this._selected = [].concat(_toConsumableArray(this._selected.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.parent !== parent;
          })), _toConsumableArray(parent.children.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x.parent === parent && x.disabled && x.selected;
          })));
        }
        /**
         * @private
         * @param {?} parent
         * @return {?}
         */

      }, {
        key: "_removeParent",
        value: function _removeParent(parent) {
          this._selected = this._selected.filter(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return x !== parent;
          });
        }
        /**
         * @private
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_activeChildren",
        value: function _activeChildren(item) {
          return item.children.every(
          /**
          * @param {?} x
          * @return {?}
          */
          function (x) {
            return !x.disabled || x.selected;
          });
        }
      }, {
        key: "value",
        get: function get() {
          return this._selected;
        }
      }]);

      return DefaultSelectionModel;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ɵ0 = DefaultSelectionModelFactory;

    var NgSelectModule = function NgSelectModule() {
      _classCallCheck(this, NgSelectModule);
    };

    NgSelectModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
        exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective],
        providers: [{
          provide: SELECTION_MODEL_FACTORY,
          useValue: ɵ0
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ng-select-ng-select.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDealerAppDealerDashboadComponentDealerDashboadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<section class=\"container py-4\">\n    <nav id=\"toggleMenu\" class=\"d-flex justify-content-between align-items-end\">\n        <a [ngClass]=\"paid ? 'active' : ''\" (click)=\"getMonthData(true)\"> Paid </a>\n        <a [ngClass]=\"!paid ? 'active' : ''\"  (click)=\"unpaid()\">Unpaid</a>\n    </nav>\n    <a (click)=\"toggleFilter()\" class=\"filterNow\"><span class=\"filter\"></span> Filter</a>\n    <div class=\"p-4\" id=\"filterSec\" >\n        <div *ngIf=\"paid\">\n            <owl-carousel [options]=\"menuOptions\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthDataDh\">\n                <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'cash'}\" (click)=\"sltArea('cash')\">\n                        <strong>Cash</strong>\n                        <i class=\"payee\"></i>\n                      <span>({{dataResult['cash'] !== undefined ?dataResult['cash']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.cash}}/-</span>\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'card'}\" (click)=\"sltArea('card')\">\n                    <strong>Card</strong>\n                    <i class=\"payee\"></i>\n                    <span>({{dataResult['card'] !== undefined ? dataResult['card']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.card}}/-</span>\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'Net Banking'}\" (click)=\"sltArea('Net Banking')\">\n                    <strong>Net banking</strong>\n                    <i class=\"sponsor\"></i>\n                    ({{dataResult['Net Banking'] !== undefined ?dataResult['Net Banking']?.length : 0}})  &nbsp; &nbsp;Rs. {{this.netBanking}}/-\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'upi'}\" (click)=\"sltArea('upi')\">\n                    <strong>UPI</strong>\n                    <i class=\"sponsor\"></i>\n                    <span>({{dataResult['upi'] !== undefined ?dataResult['upi']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.upi}}/-</span>\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'other'}\" (click)=\"sltArea('other')\">\n                  <strong>Other</strong>\n                  <i class=\"sponsor\"></i>\n\n                  <span>({{dataResult['other'] !== undefined ? dataResult['other']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.other}}/-</span>\n              </div>\n            </owl-carousel>\n        </div>\n        <div  *ngIf=\"filter || !paid\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthData\">\n                <div class=\"optionList\" *ngIf=\"monthData[0]\" (click)=\"filterMonthsWeek(1,0, monthData[0].list)\" [ngClass]=\"{'active': selectMonth === 0}\">\n                    <strong>Current Month</strong>\n                    <i class=\"currentMonth\"></i>\n                    <span>({{monthData[0].list !== undefined ? monthData[0].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[0].price}}/-</span>\n                </div>\n                <div class=\"optionList\" *ngIf=\"monthData[1]\" (click)=\"filterMonthsWeek(2,1, monthData[1].list)\" [ngClass]=\"{'active': selectMonth === 1}\">\n                    <strong>Last 2 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    <span>({{monthData[0].list !== undefined ? monthData[2].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[2].price}}/-</span>\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[2]\" (click)=\"filterMonthsWeek(3,2, monthData[2].list)\" [ngClass]=\"{'active': selectMonth === 2}\">\n                    <strong>Last 3 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    <span>({{monthData[0].list !== undefined ? monthData[2].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[2].price}}/-</span>\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[3]\" (click)=\"filterMonthsWeek(6,3, monthData[3].list)\" [ngClass]=\"{'active': selectMonth === 3}\">\n                    <strong>Last 6 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    <span>({{monthData[0].list !== undefined ? monthData[3].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[3].price}}/-</span>\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[4]\" (click)=\"filterMonthsWeek(9,4, monthData[4].list)\" [ngClass]=\"{'active': selectMonth === 4}\">\n                    <strong>Last 9 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    <span>({{monthData[0].list !== undefined ? monthData[4].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[4].price}}/-</span>\n                </div>\n            </owl-carousel>\n          </div>\n            <div class=\"\" *ngIf=\"filter\">\n                <div class=\"\">\n                    <owl-carousel [options]=\"menuOptions\" [items]=\"weekData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                        <div class=\"optionList\" *ngFor=\"let wk of weekData; let i = index\" [ngClass]=\"{'active': selectWeek == i}\" (click)='filterDays(i+1, monthData[4].list)'>\n                            <strong>Week {{i+1}}</strong>\n                            <i class=\"week\"></i>\n\n                            <span>({{wk.list?.length}}) &nbsp; &nbsp;  Rs. {{wk.price}}/-</span>\n                        </div>\n                    </owl-carousel>\n                </div>\n            </div>\n            <div class=\"\" *ngIf=\"filter\">\n              <div class=\"\">\n                  <owl-carousel [options]=\"menuOptions\" [items]=\"daysData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                      <div class=\"optionList\" *ngFor=\"let wk of daysData; let i = index\" (click)='upiPaymentData(i, wk)' [ngClass]=\"{'active': selectedDay == i}\">\n                          <strong *ngIf=\"i == 0 && selectWeek == 0\">Today</strong>\n                          <strong *ngIf=\"i == 1 && selectWeek == 0\">Yesterday</strong>\n                          <strong *ngIf=\"i == 0 && selectWeek > 0\">day 1</strong>\n                          <strong *ngIf=\"i == 1 && selectWeek > 0\">day 2</strong>\n                          <strong *ngIf=\"i > 1\">day {{i+1}}</strong>\n                          <i class=\"week\"></i>\n                          <span>({{wk.list?.length}}) &nbsp; &nbsp;  Rs. {{wk.price}}/-</span>\n                      </div>\n                  </owl-carousel>\n              </div>\n          </div>\n          <div class=\"\" *ngIf=\"filter && upiPaymmentArray.length &&  currentActiveTopTab === 'upi'\">\n\n            <owl-carousel [options]=\"menuOptions\" [items]=\"upiPaymmentArray\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\">\n                    <strong>GPay</strong>\n                    <i class=\"week\"></i>\n                    Rs. {{upiPaymmentArray[0]}}/-\n                </div>\n                <div class=\"optionList\">\n                  <strong>Phone Pay</strong>\n                  <i class=\"week\"></i>\n                  Rs. {{upiPaymmentArray[1]}}/-\n              </div>\n              <div class=\"optionList\">\n                <strong>Paytm</strong>\n                <i class=\"week\"></i>\n                Rs. {{upiPaymmentArray[2]}}/-\n            </div>\n            </owl-carousel>\n      </div>\n\n    </div>\n</section>\n<section class=\"container\">\n    <nav class=\"menuBtn d-flex justify-content-between mb-2\">\n         <a (click)=\"openModal(template)\" class=\"btn\"><i class=\"billing\"></i> New Bill</a>\n    </nav>\n    <div class=\"my-3\">\n\n        <owl-carousel\n            [options]=\"cOptions\" [items]=\"billDData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <fieldset *ngFor=\"let bImg of billDData; let i = index\">\n                <legend>{{bImg.billDetails.deportment}} {{bImg.billDetails.genDate | date: 'medium'}} {{bImg.billDetails.user}}</legend>\n                <nav class=\"menuBtn d-flex justify-content-between mb-4\">\n\n                    <a (click)=\"openDelivery(deliveryTemplate, bImg._id, bImg.paymentMode)\" class=\"btn\" *ngIf=\"bImg.category !== 'delivery'\"><i class=\"delivery\"></i> Delivery</a>\n\n                    <a  class=\"btn nonActicebutton\" *ngIf=\"bImg.category == 'delivery'\"><i class=\"delivery\"></i> Delivered</a>\n                    <a class=\"btn nonActicebutton\" *ngIf=\"bImg.paymentMode !== 'credit' && bImg.payStatus\"><i class=\"forward\"></i> Payed</a>\n                    <a (click)=\"openMoveTocredit(moveToCredit, bImg._id)\" class=\"btn\" *ngIf=\"bImg.paymentMode !== 'credit' && !bImg.payStatus\"><i class=\"forward\"></i> Move to credit</a>\n                    <a  class=\"btn\" *ngIf=\"bImg.paymentMode === 'credit'\"><i class=\"forward\"></i> Credited</a>\n                </nav>\n                <img [src]=\"serverPath+'pdfBills/images/'+bImg.billDetails.billImg[0].name\" alt=\"{{bImg.billDetails.billImg[0].name}}\" (click)=\"showBill(i)\" />\n                <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\" *ngIf=\"!bImg.payStatus\">\n                  <form class=\"d-flex align-items-center justify-content-between ml-auto\">\n                      <input type=\"text\" placeholder=\"Rs.\" [value]=\"cleanPrice(bImg.billDetails.total)\" disabled />\n                      <a class=\"btn\" (click)=\"openUpdatepayment(updatePayment, bImg._id)\">Update Payment</a>\n                  </form>\n              </nav>\n            </fieldset>\n        </owl-carousel>\n\n    </div>\n</section>\n<!-- <section id=\"chartSec\" class=\"container my-4 text-center\">\n    <img src=\"/assets/images/pie-chart.jpg\" alt=\"pie chart\" />\n</section> -->\n<app-side-bar></app-side-bar>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Select product</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"dMsg\" class=\"alert-success\">{{dMsg.msg}}</div>\n    <ng-select\n        [items]=\"productList\"\n        bindLabel=\"name\"\n        [multiple]=\"true\"\n        placeholder=\"Select Product\"\n        clearAllText=\"Clear\"\n        [searchable]=\"true\"\n        [(ngModel)]=\"selectedProduct\"\n        loadingText='Loading...'\n        [loading]=loadingProduct\n        (keyup)=\"searchProductName($event)\"\n        (change)=\"setQuantity()\">\n      </ng-select>\n      <div class=\"container mt-2\">\n        <div class=\"row mt-4\" *ngIf=\"selectedProduct.length > 0\">\n          <div class=\"col-4\"><b>Mobile Number</b></div>\n          <div class=\"col-8\"><input type=\"text\" value=\"\" placeholder=\"Enter the mobile number of retailer\" (input)=\"setMobileNumber($event.target.value)\"></div>\n        </div>\n        <div class=\"row setBoarder mt-4\" *ngIf=\"selectedProduct.length > 0\">\n          <div class=\"col-4\"><b>Product Name</b></div>\n          <div class=\"col-4\"><b>Price</b></div>\n          <div class=\"col-4\"><b>Quantity</b></div>\n        </div>\n        <div class=\"row mt-2\" *ngFor=\"let item of selectedProduct; index as i\">\n            <div class=\"col-4\">{{item.name}}</div>\n            <div class=\"col-4\">{{item.price}}</div>\n            <div class=\"col-4\">\n              <input type=\"number\" class=\"setWidth\" (input)=\"setQuantity($event.target.value, i)\" min=\"1\" value=\"1\"/>\n            </div>\n        </div>\n        <div class=\"row  mt-2\" *ngIf=\"selectedProduct.length > 0\">\n          <div class=\"col-4\"><b></b></div>\n          <div class=\"col-4\"><b>Total Price</b></div>\n          <div class=\"col-4\"><b> &#x20B9; {{totalPrice}}</b></div>\n        </div>\n      </div>\n    <button type=\"submit\" class=\"mt-4\" [disabled]=\"dBtm\" (click)=\"NewDealerBill()\">Send</button>\n\n\n  </div>\n</ng-template>\n\n<ng-template #updatePayment>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Update Payment Status</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"dMsg\" class=\"alert-success\">{{msg}}</div>\n    <form [formGroup]=\"paymentForm\" (submit)=\"updatePayment1()\">\n        <h4>Select a payment method</h4>\n        <select formControlName=\"payMode\" class=\"form-control\" >\n            <option value=\"\">Select</option>\n            <option value=\"Net Banking\">Net Banking</option>\n            <option value=\"cash\">Cash</option>\n            <option value=\"card\">Card</option>\n            <option value=\"upi\">UPI</option>\n            <option value=\"other\">Other</option>\n            <option value=\"credit\">Credit</option>\n        </select>\n        <button type=\"submit\" class=\"mt-4 buttonClass\" [disabled]=\"dBtm\">Update</button>\n    </form>\n  </div>\n</ng-template>\n\n<ng-template #deliveryTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Delivered</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"dBtm\" class=\"alert\" [ngClass]=\"dMsg.alert\">{{dMsg.msg}}</div>\n    <form [formGroup]=\"deliveryFrm\" (submit)=\"addDelivery()\">\n        <h4>Enter Address</h4>\n        <textarea formControlName=\"address\" ></textarea>\n        <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"dSubmit && dFrm.address.errors\">\n            <div *ngIf=\"dFrm.address.errors.required\">Please mention your delivery address</div>\n        </div>\n        <hr />\n        <h4>Payment method</h4>\n        <p *ngIf=\"paid\">{{paymentModeForCredit === 'other' ? 'No Payment Found' : paymentModeForCredit}}</p>\n        <select formControlName=\"payMode\" *ngIf=\"!paid\">\n          <option value=\"\" disabled>Select</option>\n          <option value=\"\">Pay on Delivery</option>\n          <option value=\"Net Banking\">Net Banking</option>\n          <option value=\"cash\">Cash</option>\n          <option value=\"card\">Card</option>\n          <option value=\"upi\">UPI</option>\n          <option value=\"other\">Other</option>\n          <option value=\"credit\">Credit</option>\n        </select>\n        <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"dSubmit && dFrm.payMode.errors\">\n            <div *ngIf=\"dFrm.payMode.errors.required\">Please mention your payment mode</div>\n        </div>\n        <button type=\"submit\" class=\"mt-4\" [disabled]=\"dBtm\">Send</button>\n    </form>\n  </div>\n</ng-template>\n\n<ng-template #moveToCredit>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Move to credit</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"dBtm\" class=\"alert\" [ngClass]=\"dMsg.alert\">{{dMsg.msg}}</div>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <div class=\"card\">\n                  <div class=\"card-body\">\n                    <div class=\"container\">\n                      <b>Credit Line</b>\n                      <div class=\"top\">\n                        <div class=\"top-element\">12 sep Rs 1000</div>\n                        <div class=\"top-element\">12 sep Rs 500</div>\n                        <div class=\"top-element\">30 sep Rs 2000</div>\n                      </div>\n                        <div class=\"line\"></div>\n                        <div class=\"bottom\">\n                          <!-- <div class=\"bottom-element\">20 september Rs 1000</div>\n                          <div class=\"bottom-element\">20 september Rs 1800</div> -->\n                        </div>\n                    </div>\n                    <div class=\"container\">\n                      <b>Purchase line</b>\n                      <div class=\"top\">\n\n                      </div>\n                        <div class=\"line\"></div>\n                        <div class=\"bottom\">\n                          <div class=\"bottom-element\">20 sep Rs 1000</div>\n                          <div class=\"bottom-element\">20 sep Rs 1800</div>\n                        </div>\n                    </div>\n                  </div>\n              </div>\n\n          </div>\n      </div>\n    </div>\n    <form [formGroup]=\"movetocredit\" (submit)=\"moveToCredit1()\">\n\n\n        <button type=\"submit\" class=\"mt-4\" [disabled]=\"dBtm\">Send</button>\n    </form>\n  </div>\n</ng-template>\n\n\n<section id=\"billPop\" *ngIf=\"popBill\">\n    <aside>\n        <a (click)=\"showBill(0)\" class=\"close\"></a>\n        <img [src]=\"serverPath+'/pdfBills/images/'+billData[popId].billImg[0].name\" alt=\"{{billData[popId].billImg[0].name}}\" />\n    </aside>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDealerAppDealerDeliveryPgDealerDeliveryPgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<section class=\"container py-4\">\n  <nav id=\"toggleMenu\" class=\"d-flex justify-content-between align-items-end\">\n      <a [ngClass]=\"paid ? 'active' : ''\" (click)=\"getMonthData()\"> Paid </a>\n      <a [ngClass]=\"!paid ? 'active' : ''\"  (click)=\"unpaid()\">Unpaid</a>\n  </nav>\n  <a (click)=\"toggleFilter()\" class=\"filterNow\"><span class=\"filter\"></span> Filter</a>\n  <div class=\"p-4\" id=\"filterSec\" >\n    <div *ngIf=\"paid\">\n      <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthDataDh\">\n          <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'cash'}\" (click)=\"sltArea('cash')\">\n                  <strong>Cash</strong>\n                  <i class=\"payee\"></i>\n                <span>({{dataResult['cash'] !== undefined ?dataResult['cash']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.cash}}/-</span>\n          </div>\n          <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'card'}\" (click)=\"sltArea('card')\">\n              <strong>Card</strong>\n              <i class=\"payee\"></i>\n              <span>({{dataResult['card'] !== undefined ? dataResult['card']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.card}}/-</span>\n          </div>\n          <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'Net Banking'}\" (click)=\"sltArea('Net Banking')\">\n              <strong>Net banking</strong>\n              <i class=\"sponsor\"></i>\n              ({{dataResult['Net Banking'] !== undefined ?dataResult['Net Banking']?.length : 0}})  &nbsp; &nbsp;Rs. {{this.netBanking}}/-\n          </div>\n          <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'upi'}\" (click)=\"sltArea('upi')\">\n              <strong>UPI</strong>\n              <i class=\"sponsor\"></i>\n              <span>({{dataResult['upi'] !== undefined ?dataResult['upi']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.upi}}/-</span>\n          </div>\n          <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'other'}\" (click)=\"sltArea('other')\">\n            <strong>Other</strong>\n            <i class=\"sponsor\"></i>\n            <span>({{dataResult['Other'] !== undefined ? dataResult['Other']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.Other}}/-</span>\n        </div>\n      </owl-carousel>\n  </div>\n  <div  *ngIf=\"filter || !paid\">\n      <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthData\">\n          <div class=\"optionList\" *ngIf=\"monthData[0]\" (click)=\"filterMonthsWeek(1,0, monthData[0].list)\" [ngClass]=\"{'active': selectMonth === 0}\">\n              <strong>Current Month</strong>\n              <i class=\"currentMonth\"></i>\n              <span>({{monthData[0].list !== undefined ? monthData[0].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[0].price}}/-</span>\n          </div>\n          <div class=\"optionList\" *ngIf=\"monthData[1]\" (click)=\"filterMonthsWeek(2,1, monthData[1].list)\" [ngClass]=\"{'active': selectMonth === 1}\">\n              <strong>Last 2 Months</strong>\n              <i class=\"lastMonth\"></i>\n              <span>({{monthData[0].list !== undefined ? monthData[2].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[2].price}}/-</span>\n          </div>\n\n          <div class=\"optionList\" *ngIf=\"monthData[2]\" (click)=\"filterMonthsWeek(3,2, monthData[2].list)\" [ngClass]=\"{'active': selectMonth === 2}\">\n              <strong>Last 3 Months</strong>\n              <i class=\"lastMonth\"></i>\n              <span>({{monthData[0].list !== undefined ? monthData[2].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[2].price}}/-</span>\n          </div>\n\n          <div class=\"optionList\" *ngIf=\"monthData[3]\" (click)=\"filterMonthsWeek(6,3, monthData[3].list)\" [ngClass]=\"{'active': selectMonth === 3}\">\n              <strong>Last 6 Months</strong>\n              <i class=\"lastMonth\"></i>\n              <span>({{monthData[0].list !== undefined ? monthData[3].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[3].price}}/-</span>\n          </div>\n\n          <div class=\"optionList\" *ngIf=\"monthData[4]\" (click)=\"filterMonthsWeek(9,4, monthData[4].list)\" [ngClass]=\"{'active': selectMonth === 4}\">\n              <strong>Last 9 Months</strong>\n              <i class=\"lastMonth\"></i>\n              <span>({{monthData[0].list !== undefined ? monthData[4].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[4].price}}/-</span>\n          </div>\n      </owl-carousel>\n    </div>\n      <div class=\"\" *ngIf=\"filter\">\n          <div class=\"\">\n              <owl-carousel [options]=\"menuOptions\" [items]=\"weekData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                  <div class=\"optionList\" *ngFor=\"let wk of weekData; let i = index\" [ngClass]=\"{'active': selectWeek == i}\" (click)='filterDays(i+1, monthData[4].list)'>\n                      <strong>Week {{i+1}}</strong>\n                      <i class=\"week\"></i>\n\n                      <span>({{wk.list?.length}}) &nbsp; &nbsp;  Rs. {{wk.price}}/-</span>\n                  </div>\n              </owl-carousel>\n          </div>\n      </div>\n      <div class=\"\" *ngIf=\"filter\">\n        <div class=\"\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"daysData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngFor=\"let wk of daysData; let i = index\" (click)='upiPaymentData(i,wk)'  [ngClass]=\"{'active': selectedDay == i}\">\n                  <strong *ngIf=\"i == 0 && selectWeek == 0\">Today</strong>\n                  <strong *ngIf=\"i == 1 && selectWeek == 0\">Yesterday</strong>\n                  <strong *ngIf=\"i == 0 && selectWeek > 0\">day 1</strong>\n                  <strong *ngIf=\"i == 1 && selectWeek > 0\">day 2</strong>\n                  <strong *ngIf=\"i > 1\">day {{i+1}}</strong>\n                  <i class=\"week\"></i>\n                  <span>({{wk.list?.length}}) &nbsp; &nbsp;  Rs. {{wk.price}}/-</span>\n                </div>\n            </owl-carousel>\n        </div>\n    </div>\n    <div class=\"\" *ngIf=\"filter && upiPaymmentArray.length &&  currentActiveTopTab === 'upi'\">\n\n      <owl-carousel [options]=\"menuOptions\" [items]=\"upiPaymmentArray\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n          <div class=\"optionList\">\n              <strong>GPay</strong>\n              <i class=\"week\"></i>\n              Rs. {{upiPaymmentArray[0]}}/-\n          </div>\n          <div class=\"optionList\">\n            <strong>Phone Pay</strong>\n            <i class=\"week\"></i>\n            Rs. {{upiPaymmentArray[1]}}/-\n        </div>\n        <div class=\"optionList\">\n          <strong>Paytm</strong>\n          <i class=\"week\"></i>\n          Rs. {{upiPaymmentArray[2]}}/-\n      </div>\n      </owl-carousel>\n</div>\n\n\n  </div>\n</section>\n<section class=\"container\">\n\n    <div class=\"my-3\">\n\n        <owl-carousel\n            [options]=\"cOptions\" [items]=\"billDData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <fieldset *ngFor=\"let bImg of billDData; let i = index\">\n                <legend>{{bImg.billDetails.deportment}} {{bImg.billDetails.genDate | date: 'medium'}} {{bImg.billDetails.user}}</legend>\n\n                <nav class=\"menuBtn d-flex justify-content-between mb-4\">\n                    <a (click)=\"openInvoiceStatus(invoiceStatusTemplate, bImg._id)\" class=\"btn\"><i class=\"delivery\"></i> Update Status</a>\n                </nav>\n                <section id=\"deliverySec\" class=\"container my-4\">\n                  <div class=\"row p-4\">\n                      <div class=\"col-6\">\n                          <h3>From:</h3>\n                          <p>Warehouse location</p>\n                          <p><strong>Request ON:</strong> {{bImg.createdOn | date: 'medium'}}</p>\n                      </div>\n                      <div class=\"col-6\">\n                          <h3>To:</h3>\n                          <p>{{bImg.paidBy}} - {{bImg.usrNumber}}</p>\n                          <p>{{bImg.address}}</p>\n                      </div>\n                  </div>\n              </section>\n                <div id=\"shipTrack\" class=\"py-5\">\n                  <div class=\"d-flex justify-content-center align-items-center\">\n                      <i class=\"active\"></i>\n                      <span [ngClass]=\"bImg?.invoiceStatus >= 2? 'shipTrack1' : ''\"></span>\n                      <i [ngClass]=\"bImg?.invoiceStatus >= 2? 'active' : ''\"></i>\n                      <span  [ngClass]=\"bImg?.invoiceStatus >= 3? 'shipTrack1' : ''\"></span>\n                      <i [ngClass]=\"bImg?.invoiceStatus >= 3? 'active' : '' \"></i>\n                      <span  [ngClass]=\"bImg?.invoiceStatus >= 4? 'shipTrack1' : ''\"></span>\n                      <i [ngClass]=\"bImg?.invoiceStatus == 4? 'active' : ''\"></i>\n                  </div>\n                  <div class=\"d-flex justify-content-center align-items-center\">\n                    <span class=\"shipTrack2\">Ordered</span>\n                    <span class=\"shipTrack2 setAlign\">Packed</span>\n                    <span class=\"shipTrack2 setAlign ml-3\">Shipped</span>\n                    <span class=\"shipTrack2 text-right\">Delivered</span>\n                  </div>\n                </div>\n                <img [src]=\"serverPath+'/pdfBills/images/'+bImg.billDetails.billImg[0].name\" alt=\"{{bImg.billDetails.billImg[0].name}}\" (click)=\"showBill(i)\" />\n                <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\" *ngIf=\"!bImg.payStatus\">\n                    <form class=\"d-flex align-items-center justify-content-between ml-auto\">\n                        <input type=\"text\" placeholder=\"Rs.\" [value]=\"cleanPrice(bImg.billDetails.total)\" disabled />\n                        <a class=\"btn\" (click)=\"openUpdatepayment(updatePayment, bImg._id)\">Update Payment</a>\n                    </form>\n                </nav>\n            </fieldset>\n        </owl-carousel>\n\n    </div>\n</section>\n\n<app-side-bar></app-side-bar>\n\n<ng-template #invoiceStatusTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Update Status</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"dMsg1\" class=\"alert-success\">{{dMsg.msg}}</div>\n    <form [formGroup]=\"invoicStatus\" (submit)=\"updateInvoiceStatus()\">\n        <h4>Select a status </h4>\n        <select formControlName=\"status\" class=\"form-control\" >\n            <option value=\"\" [selected] =\"updateStatusValue == ''\">Select</option>\n            <option value=\"1\" [selected] =\"updateStatusValue == 1\">Ordered</option>\n            <option value=\"2\" [selected] =\"updateStatusValue == 2\">Packed</option>\n            <option value=\"3\" [selected] =\"updateStatusValue == 3\">Shipped</option>\n            <option value=\"4\" [selected] =\"updateStatusValue == 4\">Delivered</option>\n\n        </select>\n\n        <button type=\"submit\" class=\"mt-4 buttonClass\" [disabled]=\"dBtm\">Update</button>\n    </form>\n  </div>\n</ng-template>\n\n<section id=\"billPop\" *ngIf=\"popBill\">\n    <aside>\n        <a (click)=\"showBill(0)\" class=\"close\"></a>\n        <img [src]=\"serverPath+'/pdfBills/images/'+billData[popId].billImg[0].name\" alt=\"{{billData[popId].billImg[0].name}}\" />\n    </aside>\n</section>\n<ng-template #updatePayment>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Update Payment Status</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"dMsg\" class=\"alert-success\">{{msg}}</div>\n    <form [formGroup]=\"paymentForm\" (submit)=\"updatePayment1()\">\n        <h4>Select a payment method</h4>\n        <select formControlName=\"payMode\" class=\"form-control\" >\n            <option value=\"\">Select</option>\n            <option value=\"Net Banking\">Net Banking</option>\n            <option value=\"cash\">Cash</option>\n            <option value=\"card\">Card</option>\n            <option value=\"upi\">UPI</option>\n            <option value=\"other\">Other</option>\n            <option value=\"credit\">Credit</option>\n        </select>\n        <!-- <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"dSubmit && dFrm.payMode.errors\">\n            <div *ngIf=\"dFrm.payMode.errors.required\">Please mention your payment mode</div>\n        </div> -->\n        <!-- <button type=\"submit\" class=\"mt-4\"  [disabled]=\"dBtm\"><a class=\"btn\">Update</a></button> -->\n        <button type=\"submit\" class=\"mt-4 buttonClass\" [disabled]=\"dBtm\">Update</button>\n    </form>\n  </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/move-to-credit/move-to-credit.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/move-to-credit/move-to-credit.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDealerAppMoveToCreditMoveToCreditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n\r\n<section class=\"container py-4\">\r\n  <!-- <nav id=\"toggleMenu\" class=\"d-flex justify-content-between align-items-end\">\r\n      <a [ngClass]=\"paid ? 'active' : ''\" (click)=\"getMonthData()\"> Paid </a>\r\n      <a [ngClass]=\"!paid ? 'active' : ''\"  (click)=\"unpaid()\">Unpaid</a>\r\n  </nav> -->\r\n  <a (click)=\"toggleFilter()\" class=\"filterNow\"><span class=\"filter\"></span> Filter</a>\r\n  <div class=\"p-4\" id=\"filterSec\" >\r\n\r\n    <div  >\r\n      <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthData\">\r\n          <div class=\"optionList\" *ngIf=\"monthData[0]\" (click)=\"filterMonthsWeek(1,0, monthData[0].list)\" [ngClass]=\"{'active': selectMonth === 0}\">\r\n              <strong>Current Month</strong>\r\n              <i class=\"currentMonth\"></i>\r\n              <span>({{monthData[0].list !== undefined ? monthData[0].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[0].price}}/-</span>\r\n          </div>\r\n          <div class=\"optionList\" *ngIf=\"monthData[1]\" (click)=\"filterMonthsWeek(2,1, monthData[1].list)\" [ngClass]=\"{'active': selectMonth === 1}\">\r\n              <strong>Last 2 Months</strong>\r\n              <i class=\"lastMonth\"></i>\r\n              <span>({{monthData[0].list !== undefined ? monthData[2].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[2].price}}/-</span>\r\n          </div>\r\n\r\n          <div class=\"optionList\" *ngIf=\"monthData[2]\" (click)=\"filterMonthsWeek(3,2, monthData[2].list)\" [ngClass]=\"{'active': selectMonth === 2}\">\r\n              <strong>Last 3 Months</strong>\r\n              <i class=\"lastMonth\"></i>\r\n              <span>({{monthData[0].list !== undefined ? monthData[2].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[2].price}}/-</span>\r\n          </div>\r\n\r\n          <div class=\"optionList\" *ngIf=\"monthData[3]\" (click)=\"filterMonthsWeek(6,3, monthData[3].list)\" [ngClass]=\"{'active': selectMonth === 3}\">\r\n              <strong>Last 6 Months</strong>\r\n              <i class=\"lastMonth\"></i>\r\n              <span>({{monthData[0].list !== undefined ? monthData[3].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[3].price}}/-</span>\r\n          </div>\r\n\r\n          <div class=\"optionList\" *ngIf=\"monthData[4]\" (click)=\"filterMonthsWeek(9,4, monthData[4].list)\" [ngClass]=\"{'active': selectMonth === 4}\">\r\n              <strong>Last 9 Months</strong>\r\n              <i class=\"lastMonth\"></i>\r\n              <span>({{monthData[0].list !== undefined ? monthData[4].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[4].price}}/-</span>\r\n          </div>\r\n      </owl-carousel>\r\n    </div>\r\n    <div  *ngIf=\"filter\">\r\n          <div class=\"\">\r\n              <owl-carousel [options]=\"menuOptions\" [items]=\"weekData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n                  <div class=\"optionList\" *ngFor=\"let wk of weekData; let i = index\" [ngClass]=\"{'active': selectWeek == i}\" (click)='filterDays(i+1, monthData[4].list)'>\r\n                      <strong>Week {{i+1}}</strong>\r\n                      <i class=\"week\"></i>\r\n\r\n                      <span>({{wk.list?.length}}) &nbsp; &nbsp;  Rs. {{wk.price}}/-</span>\r\n                  </div>\r\n              </owl-carousel>\r\n          </div>\r\n      </div>\r\n      <div class=\"\" *ngIf=\"filter\">\r\n        <div class=\"\">\r\n            <owl-carousel [options]=\"menuOptions\" [items]=\"daysData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n                <div class=\"optionList\" *ngFor=\"let wk of daysData; let i = index\" (click)='upiPaymentData(wk)'>\r\n                  <strong *ngIf=\"i == 0 && selectWeek == 0\">Today</strong>\r\n                  <strong *ngIf=\"i == 1 && selectWeek == 0\">Yesterday</strong>\r\n                  <strong *ngIf=\"i == 0 && selectWeek > 0\">day 1</strong>\r\n                  <strong *ngIf=\"i == 1 && selectWeek > 0\">day 2</strong>\r\n                  <strong *ngIf=\"i > 1\">day {{i+1}}</strong>\r\n                  <i class=\"week\"></i>\r\n                  <span>({{wk.list?.length}}) &nbsp; &nbsp;  Rs. {{wk.price}}/-</span>\r\n                </div>\r\n            </owl-carousel>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"container\">\r\n                    <b>Purchase Line</b>\r\n                    <div class=\"top\">\r\n                      <div class=\"top-element\">12 sep Rs 1000</div>\r\n                      <div class=\"top-element\">12 sep Rs 500</div>\r\n                      <div class=\"top-element\">30 sep Rs 2000</div>\r\n                      <div class=\"top-element\">1 oct Rs 2000</div>\r\n                      <div class=\"top-element\">10 oct Rs 2000</div>\r\n                      <div class=\"top-element\">20 oct Rs 2000</div>\r\n                    </div>\r\n                      <div class=\"line\"></div>\r\n                      <div class=\"bottom\">\r\n                        <!-- <div class=\"bottom-element\">20 september Rs 1000</div>\r\n                        <div class=\"bottom-element\">20 september Rs 1800</div> -->\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"container\">\r\n                    <b>Payment line</b>\r\n                    <div class=\"top\">\r\n\r\n                    </div>\r\n                      <div class=\"line\"></div>\r\n                      <div class=\"bottom\">\r\n                        <div class=\"bottom-element\">20 sep Rs 1000</div>\r\n                        <div class=\"bottom-element\">20 sep Rs 1800</div>\r\n                        <div class=\"bottom-element\">30 sep Rs 1000</div>\r\n                        <div class=\"bottom-element\">1 oct Rs 1800</div>\r\n                        <div class=\"bottom-element\">10 oct Rs 1000</div>\r\n                        <div class=\"bottom-element\">25 oct Rs 1800</div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"container\">\r\n\r\n    <div class=\"my-3\">\r\n\r\n        <owl-carousel\r\n            [options]=\"cOptions\" [items]=\"billDData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n            <fieldset *ngFor=\"let bImg of billDData; let i = index\">\r\n                <legend>{{bImg.billDetails.deportment}} {{bImg.billDetails.genDate | date: 'medium'}} {{bImg.billDetails.user}}</legend>\r\n\r\n\r\n\r\n                <img [src]=\"serverPath+'/pdfBills/images/'+bImg.billDetails.billImg[0].name\" alt=\"{{bImg.billDetails.billImg[0].name}}\" (click)=\"showBill(i)\" />\r\n                <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\">\r\n\r\n                </nav>\r\n            </fieldset>\r\n        </owl-carousel>\r\n\r\n    </div>\r\n</section>\r\n<!-- <section id=\"chartSec\" class=\"container my-4 text-center\">\r\n    <img src=\"/assets/images/pie-chart.jpg\" alt=\"pie chart\" />\r\n</section> -->\r\n<app-side-bar></app-side-bar>\r\n\r\n<ng-template #deliveryTemplate>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Delivered</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div *ngIf=\"dMsg\" class=\"alert-success\">{{msg}}</div>\r\n    <form [formGroup]=\"paymentForm\" (submit)=\"addDelivery()\">\r\n        <h4>Select a payment method</h4>\r\n        <select formControlName=\"payMode\" class=\"form-control\" >\r\n            <option value=\"\">Select</option>\r\n            <option value=\"Net Banking\">Net Banking</option>\r\n            <option value=\"cash\">Cash</option>\r\n            <option value=\"card\">Card</option>\r\n            <option value=\"upi\">UPI</option>\r\n            <option value=\"other\">Other</option>\r\n            <option value=\"credit\">Credit</option>\r\n        </select>\r\n        <!-- <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"dSubmit && dFrm.payMode.errors\">\r\n            <div *ngIf=\"dFrm.payMode.errors.required\">Please mention your payment mode</div>\r\n        </div> -->\r\n        <!-- <button type=\"submit\" class=\"mt-4\"  [disabled]=\"dBtm\"><a class=\"btn\">Update</a></button> -->\r\n        <button type=\"submit\" class=\"mt-4 buttonClass\" [disabled]=\"dBtm\">Update</button>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n\r\n<section id=\"billPop\" *ngIf=\"popBill\">\r\n    <aside>\r\n        <a (click)=\"showBill(0)\" class=\"close\"></a>\r\n        <img [src]=\"serverPath+'/pdfBills/images/'+billData[popId].billImg[0].name\" alt=\"{{billData[popId].billImg[0].name}}\" />\r\n    </aside>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Observable.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Observable.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var canReportError_1 = __webpack_require__(
    /*! ./util/canReportError */
    "./node_modules/rxjs/internal/util/canReportError.js");

    var toSubscriber_1 = __webpack_require__(
    /*! ./util/toSubscriber */
    "./node_modules/rxjs/internal/util/toSubscriber.js");

    var observable_1 = __webpack_require__(
    /*! ../internal/symbol/observable */
    "./node_modules/rxjs/internal/symbol/observable.js");

    var pipe_1 = __webpack_require__(
    /*! ./util/pipe */
    "./node_modules/rxjs/internal/util/pipe.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var Observable = function () {
      function Observable(subscribe) {
        this._isScalar = false;

        if (subscribe) {
          this._subscribe = subscribe;
        }
      }

      Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };

      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }

        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;

            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }

        return sink;
      };

      Observable.prototype._trySubscribe = function (sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }

          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };

      Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function (value) {
            try {
              next(value);
            } catch (err) {
              reject(err);

              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };

      Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };

      Observable.prototype[observable_1.observable] = function () {
        return this;
      };

      Observable.prototype.pipe = function () {
        var operations = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }

        if (operations.length === 0) {
          return this;
        }

        return pipe_1.pipeFromArray(operations)(this);
      };

      Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var value;

          _this.subscribe(function (x) {
            return value = x;
          }, function (err) {
            return reject(err);
          }, function () {
            return resolve(value);
          });
        });
      };

      Observable.create = function (subscribe) {
        return new Observable(subscribe);
      };

      return Observable;
    }();

    exports.Observable = Observable;

    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }

      if (!promiseCtor) {
        throw new Error('no Promise impl found');
      }

      return promiseCtor;
    } //# sourceMappingURL=Observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/Observer.js":
  /*!************************************************!*\
    !*** ./node_modules/rxjs/internal/Observer.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObserverJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    exports.empty = {
      closed: true,
      next: function next(value) {},
      error: function error(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function complete() {}
    }; //# sourceMappingURL=Observer.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subject.js":
  /*!***********************************************!*\
    !*** ./node_modules/rxjs/internal/Subject.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubjectJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Observable_1 = __webpack_require__(
    /*! ./Observable */
    "./node_modules/rxjs/internal/Observable.js");

    var Subscriber_1 = __webpack_require__(
    /*! ./Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var ObjectUnsubscribedError_1 = __webpack_require__(
    /*! ./util/ObjectUnsubscribedError */
    "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");

    var SubjectSubscription_1 = __webpack_require__(
    /*! ./SubjectSubscription */
    "./node_modules/rxjs/internal/SubjectSubscription.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var SubjectSubscriber = function (_super) {
      __extends(SubjectSubscriber, _super);

      function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;

        _this.destination = destination;
        return _this;
      }

      return SubjectSubscriber;
    }(Subscriber_1.Subscriber);

    exports.SubjectSubscriber = SubjectSubscriber;

    var Subject = function (_super) {
      __extends(Subject, _super);

      function Subject() {
        var _this = _super.call(this) || this;

        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
      }

      Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
      };

      Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
      };

      Subject.prototype.next = function (value) {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }

        if (!this.isStopped) {
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].next(value);
          }
        }
      };

      Subject.prototype.error = function (err) {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }

        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();

        for (var i = 0; i < len; i++) {
          copy[i].error(err);
        }

        this.observers.length = 0;
      };

      Subject.prototype.complete = function () {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }

        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();

        for (var i = 0; i < len; i++) {
          copy[i].complete();
        }

        this.observers.length = 0;
      };

      Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
      };

      Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        } else {
          return _super.prototype._trySubscribe.call(this, subscriber);
        }
      };

      Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        } else if (this.hasError) {
          subscriber.error(this.thrownError);
          return Subscription_1.Subscription.EMPTY;
        } else if (this.isStopped) {
          subscriber.complete();
          return Subscription_1.Subscription.EMPTY;
        } else {
          this.observers.push(subscriber);
          return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
      };

      Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
      };

      Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
      };

      return Subject;
    }(Observable_1.Observable);

    exports.Subject = Subject;

    var AnonymousSubject = function (_super) {
      __extends(AnonymousSubject, _super);

      function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;

        _this.destination = destination;
        _this.source = source;
        return _this;
      }

      AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;

        if (destination && destination.next) {
          destination.next(value);
        }
      };

      AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;

        if (destination && destination.error) {
          this.destination.error(err);
        }
      };

      AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;

        if (destination && destination.complete) {
          this.destination.complete();
        }
      };

      AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;

        if (source) {
          return this.source.subscribe(subscriber);
        } else {
          return Subscription_1.Subscription.EMPTY;
        }
      };

      return AnonymousSubject;
    }(Subject);

    exports.AnonymousSubject = AnonymousSubject; //# sourceMappingURL=Subject.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/SubjectSubscription.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubjectSubscriptionJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics2 = function extendStatics(d, b) {
        _extendStatics2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics2(d, b);
      };

      return function (d, b) {
        _extendStatics2(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var SubjectSubscription = function (_super) {
      __extends(SubjectSubscription, _super);

      function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;

        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
      }

      SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
          return;
        }

        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;

        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
          return;
        }

        var subscriberIndex = observers.indexOf(this.subscriber);

        if (subscriberIndex !== -1) {
          observers.splice(subscriberIndex, 1);
        }
      };

      return SubjectSubscription;
    }(Subscription_1.Subscription);

    exports.SubjectSubscription = SubjectSubscription; //# sourceMappingURL=SubjectSubscription.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscriber.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscriber.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics3 = function extendStatics(d, b) {
        _extendStatics3 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics3(d, b);
      };

      return function (d, b) {
        _extendStatics3(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var Observer_1 = __webpack_require__(
    /*! ./Observer */
    "./node_modules/rxjs/internal/Observer.js");

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    var Subscriber = function (_super) {
      __extends(Subscriber, _super);

      function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;

        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;

          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }

            if (typeof destinationOrNext === 'object') {
              if (destinationOrNext instanceof Subscriber) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }

              break;
            }

          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
            break;
        }

        return _this;
      }

      Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return this;
      };

      Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };

      Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };

      Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          this.isStopped = true;

          this._error(err);
        }
      };

      Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
          this.isStopped = true;

          this._complete();
        }
      };

      Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
          return;
        }

        this.isStopped = true;

        _super.prototype.unsubscribe.call(this);
      };

      Subscriber.prototype._next = function (value) {
        this.destination.next(value);
      };

      Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
      };

      Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
      };

      Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents;

        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
      };

      return Subscriber;
    }(Subscription_1.Subscription);

    exports.Subscriber = Subscriber;

    var SafeSubscriber = function (_super) {
      __extends(SafeSubscriber, _super);

      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;

        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;

          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);

            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }

            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }

        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
      }

      SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;

          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);

              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();

            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }

            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }

            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.complete = function () {
        var _this = this;

        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;

          if (this._complete) {
            var wrappedComplete = function wrappedComplete() {
              return _this._complete.call(_this._context);
            };

            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);

              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();

          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };

      SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error('bad call');
        }

        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }

        return false;
      };

      SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;

        _parentSubscriber.unsubscribe();
      };

      return SafeSubscriber;
    }(Subscriber);

    exports.SafeSubscriber = SafeSubscriber; //# sourceMappingURL=Subscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscription.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscription.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriptionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isArray_1 = __webpack_require__(
    /*! ./util/isArray */
    "./node_modules/rxjs/internal/util/isArray.js");

    var isObject_1 = __webpack_require__(
    /*! ./util/isObject */
    "./node_modules/rxjs/internal/util/isObject.js");

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var UnsubscriptionError_1 = __webpack_require__(
    /*! ./util/UnsubscriptionError */
    "./node_modules/rxjs/internal/util/UnsubscriptionError.js");

    var Subscription = function () {
      function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;

        if (unsubscribe) {
          this._unsubscribe = unsubscribe;
        }
      }

      Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;

        if (this.closed) {
          return;
        }

        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;

        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;

        while (_parent) {
          _parent.remove(this);

          _parent = ++index < len && _parents[index] || null;
        }

        if (isFunction_1.isFunction(_unsubscribe)) {
          try {
            _unsubscribe.call(this);
          } catch (e) {
            hasErrors = true;
            errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }

        if (isArray_1.isArray(_subscriptions)) {
          index = -1;
          len = _subscriptions.length;

          while (++index < len) {
            var sub = _subscriptions[index];

            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                hasErrors = true;
                errors = errors || [];

                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }

        if (hasErrors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };

      Subscription.prototype.add = function (teardown) {
        var subscription = teardown;

        switch (typeof teardown) {
          case 'function':
            subscription = new Subscription(teardown);

          case 'object':
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription)) {
              var tmp = subscription;
              subscription = new Subscription();
              subscription._subscriptions = [tmp];
            }

            break;

          default:
            {
              if (!teardown) {
                return Subscription.EMPTY;
              }

              throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }

        if (subscription._addParent(this)) {
          var subscriptions = this._subscriptions;

          if (subscriptions) {
            subscriptions.push(subscription);
          } else {
            this._subscriptions = [subscription];
          }
        }

        return subscription;
      };

      Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;

        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);

          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };

      Subscription.prototype._addParent = function (parent) {
        var _a = this,
            _parent = _a._parent,
            _parents = _a._parents;

        if (_parent === parent) {
          return false;
        } else if (!_parent) {
          this._parent = parent;
          return true;
        } else if (!_parents) {
          this._parents = [parent];
          return true;
        } else if (_parents.indexOf(parent) === -1) {
          _parents.push(parent);

          return true;
        }

        return false;
      };

      Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
      }(new Subscription());

      return Subscription;
    }();

    exports.Subscription = Subscription;

    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    } //# sourceMappingURL=Subscription.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/config.js":
  /*!**********************************************!*\
    !*** ./node_modules/rxjs/internal/config.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalConfigJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: undefined,

      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }

        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }

    }; //# sourceMappingURL=config.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/symbol/observable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable'; //# sourceMappingURL=observable.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolRxSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.rxSubscriber = typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
    exports.$$rxSubscriber = exports.rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js":
  /*!********************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilObjectUnsubscribedErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function ObjectUnsubscribedErrorImpl() {
      Error.call(this);
      this.message = 'object unsubscribed';
      this.name = 'ObjectUnsubscribedError';
      return this;
    }

    ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
    exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl; //# sourceMappingURL=ObjectUnsubscribedError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilUnsubscriptionErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function UnsubscriptionErrorImpl(errors) {
      Error.call(this);
      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
        return i + 1 + ") " + err.toString();
      }).join('\n  ') : '';
      this.name = 'UnsubscriptionError';
      this.errors = errors;
      return this;
    }

    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    exports.UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/canReportError.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilCanReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    function canReportError(observer) {
      while (observer) {
        var _a = observer,
            closed_1 = _a.closed,
            destination = _a.destination,
            isStopped = _a.isStopped;

        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }

      return true;
    }

    exports.canReportError = canReportError; //# sourceMappingURL=canReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/hostReportError.js":
  /*!************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilHostReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function hostReportError(err) {
      setTimeout(function () {
        throw err;
      });
    }

    exports.hostReportError = hostReportError; //# sourceMappingURL=hostReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isArray.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isArray.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsArrayJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.isArray = Array.isArray || function (x) {
      return x && typeof x.length === 'number';
    }; //# sourceMappingURL=isArray.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/isFunction.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsFunctionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isFunction(x) {
      return typeof x === 'function';
    }

    exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isObject.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isObject.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsObjectJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isObject(x) {
      return x !== null && typeof x === 'object';
    }

    exports.isObject = isObject; //# sourceMappingURL=isObject.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/noop.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/util/noop.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilNoopJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function noop() {}

    exports.noop = noop; //# sourceMappingURL=noop.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/pipe.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/util/pipe.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilPipeJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var noop_1 = __webpack_require__(
    /*! ./noop */
    "./node_modules/rxjs/internal/util/noop.js");

    function pipe() {
      var fns = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }

      return pipeFromArray(fns);
    }

    exports.pipe = pipe;

    function pipeFromArray(fns) {
      if (!fns) {
        return noop_1.noop;
      }

      if (fns.length === 1) {
        return fns[0];
      }

      return function piped(input) {
        return fns.reduce(function (prev, fn) {
          return fn(prev);
        }, input);
      };
    }

    exports.pipeFromArray = pipeFromArray; //# sourceMappingURL=pipe.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/toSubscriber.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilToSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var Observer_1 = __webpack_require__(
    /*! ../Observer */
    "./node_modules/rxjs/internal/Observer.js");

    function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }

        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }

      if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }

      return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }

    exports.toSubscriber = toSubscriber; //# sourceMappingURL=toSubscriber.js.map

    /***/
  },

  /***/
  "./src/app/dealer-app/dealer-app-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/dealer-app/dealer-app-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: DealerAppRoutingModule */

  /***/
  function srcAppDealerAppDealerAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealerAppRoutingModule", function () {
      return DealerAppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../guard/auth.guard */
    "./src/app/guard/auth.guard.ts");
    /* harmony import */


    var _move_to_credit_move_to_credit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./move-to-credit/move-to-credit.component */
    "./src/app/dealer-app/move-to-credit/move-to-credit.component.ts");
    /* harmony import */


    var _dealer_delivery_pg_dealer_delivery_pg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dealer-delivery-pg/dealer-delivery-pg.component */
    "./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.ts");
    /* harmony import */


    var _dealer_dashboad_component_dealer_dashboad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dealer-dashboad-component/dealer-dashboad-component */
    "./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: "dealer/dashboard",
      component: _dealer_dashboad_component_dealer_dashboad_component__WEBPACK_IMPORTED_MODULE_4__["DealerDashboadComponent"]
    }, {
      path: "dealer/delivery",
      component: _dealer_delivery_pg_dealer_delivery_pg_component__WEBPACK_IMPORTED_MODULE_3__["DealerDeliveryPgComponent"]
    }, {
      path: "dealer/moveToCredit",
      component: _move_to_credit_move_to_credit_component__WEBPACK_IMPORTED_MODULE_2__["MoveToCreditComponent"]
    }, {
      path: "/profile",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | profile-profile-module */
        [__webpack_require__.e("default~dashboard-dashboard-module~dealer-app-dealer-app-module~delivery-delivery-module~missing-mis~7042ca7c"), __webpack_require__.e("default~dashboard-dashboard-module~dealer-app-dealer-app-module~landing-landing-module~profile-profi~3a5320aa"), __webpack_require__.e("default~dashboard-dashboard-module~dealer-app-dealer-app-module~delivery-delivery-module~profile-pro~9910a3ab"), __webpack_require__.e("default~dashboard-dashboard-module~dealer-app-dealer-app-module~profile-profile-module~quote-quote-module"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null,
        /*! ../profile/profile.module */
        "./src/app/profile/profile.module.ts")).then(function (m) {
          return m.ProfileModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    }];

    var DealerAppRoutingModule = function DealerAppRoutingModule() {
      _classCallCheck(this, DealerAppRoutingModule);
    };

    DealerAppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })], DealerAppRoutingModule);
    /***/
  },

  /***/
  "./src/app/dealer-app/dealer-app.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/dealer-app/dealer-app.module.ts ***!
    \*************************************************/

  /*! exports provided: DealerAppModule */

  /***/
  function srcAppDealerAppDealerAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealerAppModule", function () {
      return DealerAppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _move_to_credit_move_to_credit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./move-to-credit/move-to-credit.component */
    "./src/app/dealer-app/move-to-credit/move-to-credit.component.ts");
    /* harmony import */


    var _dealer_delivery_pg_dealer_delivery_pg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dealer-delivery-pg/dealer-delivery-pg.component */
    "./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _dealer_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dealer-app-routing.module */
    "./src/app/dealer-app/dealer-app-routing.module.ts");
    /* harmony import */


    var _dealer_dashboad_component_dealer_dashboad_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dealer-dashboad-component/dealer-dashboad-component */
    "./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");

    var DealerAppModule = function DealerAppModule() {
      _classCallCheck(this, DealerAppModule);
    };

    DealerAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      declarations: [_dealer_dashboad_component_dealer_dashboad_component__WEBPACK_IMPORTED_MODULE_10__["DealerDashboadComponent"], _dealer_delivery_pg_dealer_delivery_pg_component__WEBPACK_IMPORTED_MODULE_2__["DealerDeliveryPgComponent"], _move_to_credit_move_to_credit_component__WEBPACK_IMPORTED_MODULE_1__["MoveToCreditComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _dealer_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["DealerAppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__["OwlModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot()]
    })], DealerAppModule);
    /***/
  },

  /***/
  "./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDealerAppDealerDashboadComponentDealerDashboadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "section#chartSec {\n  background-color: #ffffff;\n}\n\nsection#chartSec img {\n  max-width: 100%;\n}\n\nsection#billPop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 500;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n}\n\nsection#billPop aside {\n  background-color: #ffffff;\n  padding: 10px;\n  width: 95%;\n  max-width: 450px;\n  text-align: center;\n  position: relative;\n}\n\nsection#billPop aside {\n  max-width: 600px;\n}\n\nsection#billPop aside img {\n  width: 100%;\n}\n\nsection#billPop aside a.close {\n  cursor: pointer;\n  top: 5px;\n  right: 5px;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/icons/close.svg\");\n}\n\ndiv.modal-body img {\n  width: 100%;\n}\n\nfieldset {\n  border: #AA0000 solid thin;\n  border-radius: 5px;\n  padding: 8px;\n  margin: 10px 0;\n}\n\nfieldset legend {\n  font-size: 15px;\n}\n\nul.sponsorList li {\n  list-style: none;\n  margin: 5px 0;\n}\n\nul.sponsorList li h4 {\n  font-size: 15px;\n  color: #252525;\n}\n\nul.sponsorList li a.btn {\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 15px;\n  cursor: pointer;\n}\n\n.modal-body h4 {\n  font-size: 14px;\n  color: #686868;\n  margin-top: 8px;\n}\n\n.modal-body input[type=text],\n.modal-body textarea,\n.modal-body select {\n  width: 100%;\n  padding: 5px 8px;\n  border-radius: 5px;\n  border: #ccc solid thin;\n  background-color: #ffffff;\n}\n\n.modal-body textarea {\n  height: 80px;\n  resize: none;\n}\n\n.modal-body button[type=submit] {\n  margin-top: 8px;\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 20px;\n  border-radius: 5px;\n  border: none;\n}\n\n.setWidth {\n  width: 100%;\n}\n\nbody {\n  background: #eee;\n  margin-top: 20px;\n}\n\n.hori-timeline .events {\n  border-top: 3px solid #e9ecef;\n}\n\n.hori-timeline .events .event-list {\n  display: block;\n  position: relative;\n  text-align: center;\n  padding-top: 70px;\n  margin-right: 0;\n}\n\n.hori-timeline .events .event-list:before {\n  content: \"\";\n  position: absolute;\n  height: 36px;\n  top: 0;\n}\n\n.hori-timeline .events .event-list .event-date {\n  position: absolute;\n  top: 38px;\n  left: 0;\n  right: 0;\n  width: 75px;\n  margin: 0 auto;\n  border-radius: 4px;\n  padding: 2px 4px;\n}\n\n@media (min-width: 1140px) {\n  .hori-timeline .events .event-list {\n    display: inline-block;\n    width: 24%;\n    padding-top: 45px;\n  }\n\n  .hori-timeline .events .event-list .event-date {\n    top: -12px;\n  }\n}\n\n.bg-soft-primary {\n  background-color: rgba(64, 144, 203, 0.3) !important;\n}\n\n.bg-soft-success {\n  background-color: rgba(71, 189, 154, 0.3) !important;\n}\n\n.bg-soft-danger {\n  background-color: rgba(231, 76, 94, 0.3) !important;\n}\n\n.bg-soft-warning {\n  background-color: rgba(249, 213, 112, 0.3) !important;\n}\n\n.card {\n  border: none;\n  margin-bottom: 24px;\n}\n\n.line {\n  width: 100%;\n  background: blue;\n  margin: 50px 0;\n  height: 5px;\n}\n\n.top,\n.bottom {\n  display: flex;\n  flex-direction: row;\n}\n\n.bottom {\n  padding-left: 50px;\n}\n\n.top .top-element,\n.bottom .bottom-element {\n  padding: 0 25px;\n  position: relative;\n}\n\n.top-element:before,\n.bottom-element:before {\n  content: \"I\";\n  height: 20px;\n  width: 20px;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background: #C33900;\n  color: white;\n  position: absolute;\n  left: 0;\n}\n\n.top-element:before {\n  bottom: -63px;\n}\n\n.bottom-element:before {\n  top: -63px;\n}\n\n.top-element:after,\n.bottom-element:after {\n  content: \"\";\n  height: 10px;\n  width: 2px;\n  background: #8ACCC6;\n  position: absolute;\n}\n\n.top-element:after {\n  left: 10px;\n  bottom: -40px;\n}\n\n.bottom-element:after {\n  left: 10px;\n  top: -20px;\n}\n\n.setBoarder {\n  border-bottom: 2px dashed #000;\n  padding-bottom: 10px;\n}\n\n.nonActicebutton {\n  background-color: #107438 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbGVyLWFwcC9kZWFsZXItZGFzaGJvYWQtY29tcG9uZW50L0M6XFxVc2Vyc1xcQWJoaXNoZWsuU2F4ZW5hMVxcRGVza3RvcFxccHJha2FzaFxcc2hvZWRlbGl2ZXJ5RnJvbnRFbmQvc3JjXFxhcHBcXGRlYWxlci1hcHBcXGRlYWxlci1kYXNoYm9hZC1jb21wb25lbnRcXGRlYWxlci1kYXNoYm9hZC1jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVhbGVyLWFwcC9kZWFsZXItZGFzaGJvYWQtY29tcG9uZW50L2RlYWxlci1kYXNoYm9hZC1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFtQix5QkFBQTtBQ0FuQjs7QURFQTtFQUFzQixlQUFBO0FDRXRCOztBREFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUE7RUFBd0IsZ0JBQUE7QUNJeEI7O0FERkE7RUFBNEIsV0FBQTtBQ001Qjs7QURKQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnREFBQTtBQ09KOztBREpBO0VBQXFCLFdBQUE7QUNRckI7O0FETkE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNTSjs7QUROQTtFQUFrQixlQUFBO0FDVWxCOztBRFJBO0VBQW9CLGdCQUFBO0VBQWtCLGFBQUE7QUNhdEM7O0FEWEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ2NKOztBRFhBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDY0o7O0FEWEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNjSjs7QURYQTs7O0VBR0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDY0o7O0FEWEE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ2NKOztBRFhBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDY0o7O0FEWEE7RUFDRSxXQUFBO0FDY0Y7O0FEWEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDY0Y7O0FEWkE7RUFDRSw2QkFBQTtBQ2VGOztBRGJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNnQkY7O0FEZEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtBQ2lCRjs7QURmQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDa0JGOztBRGhCQTtFQUNFO0lBQ0kscUJBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUNtQko7O0VEakJBO0lBQ0ksVUFBQTtFQ29CSjtBQUNGOztBRGxCQTtFQUNFLG9EQUFBO0FDb0JGOztBRGxCQTtFQUNFLG9EQUFBO0FDcUJGOztBRG5CQTtFQUNFLG1EQUFBO0FDc0JGOztBRHBCQTtFQUNFLHFEQUFBO0FDdUJGOztBRHJCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ3dCRjs7QURmQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDa0JGOztBRGZBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtBQ2tCRjs7QURmQTtFQUNFLGtCQUFBO0FDa0JGOztBRGZBOztFQUVFLGVBQUE7RUFDQSxrQkFBQTtBQ2tCRjs7QURmQTs7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUNrQkY7O0FEZkE7RUFDRSxhQUFBO0FDa0JGOztBRGZBO0VBQ0UsVUFBQTtBQ2tCRjs7QURmQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDa0JGOztBRGZBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNrQkY7O0FEZkE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQ2tCRjs7QURoQkE7RUFDRSw4QkFBQTtFQUNBLG9CQUFBO0FDbUJGOztBRGhCQTtFQUNFLG9DQUFBO0FDbUJGIiwiZmlsZSI6InNyYy9hcHAvZGVhbGVyLWFwcC9kZWFsZXItZGFzaGJvYWQtY29tcG9uZW50L2RlYWxlci1kYXNoYm9hZC1jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2xpYi5zY3NzJztcclxuXHJcbnNlY3Rpb24jY2hhcnRTZWMgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB9XHJcblxyXG5zZWN0aW9uI2NoYXJ0U2VjIGltZ3sgbWF4LXdpZHRoOiAxMDAlOyB9XHJcblxyXG5zZWN0aW9uI2JpbGxQb3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogNTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuc2VjdGlvbiNiaWxsUG9wIGFzaWRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbnNlY3Rpb24jYmlsbFBvcCBhc2lkZSB7IG1heC13aWR0aDogNjAwcHg7IH1cclxuXHJcbnNlY3Rpb24jYmlsbFBvcCBhc2lkZSBpbWcgeyB3aWR0aDogMTAwJTsgfVxyXG5cclxuc2VjdGlvbiNiaWxsUG9wIGFzaWRlIGEuY2xvc2Uge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pY29ucy9jbG9zZS5zdmcnKTtcclxufVxyXG5cclxuZGl2Lm1vZGFsLWJvZHkgaW1nIHsgd2lkdGg6IDEwMCU7IH1cclxuXHJcbmZpZWxkc2V0IHtcclxuICAgIGJvcmRlcjogI0FBMDAwMCBzb2xpZCB0aGluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbmZpZWxkc2V0IGxlZ2VuZCB7IGZvbnQtc2l6ZTogMTVweDsgfVxyXG5cclxudWwuc3BvbnNvckxpc3QgbGkgeyBsaXN0LXN0eWxlOiBub25lOyBtYXJnaW46IDVweCAwOyB9XHJcblxyXG51bC5zcG9uc29yTGlzdCBsaSBoNCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzI1MjUyNTtcclxufVxyXG5cclxudWwuc3BvbnNvckxpc3QgbGkgYS5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogM3B4IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNjg2ODY4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSBpbnB1dFt0eXBlPXRleHRdLFxyXG4ubW9kYWwtYm9keSB0ZXh0YXJlYSxcclxuLm1vZGFsLWJvZHkgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogI2NjYyBzb2xpZCB0aGluO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgdGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSBidXR0b25bdHlwZT1zdWJtaXRdIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDNweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uc2V0V2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5ib2R5e1xyXG4gIGJhY2tncm91bmQ6I2VlZTtcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuLmhvcmktdGltZWxpbmUgLmV2ZW50cyB7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNlOWVjZWY7XHJcbn1cclxuLmhvcmktdGltZWxpbmUgLmV2ZW50cyAuZXZlbnQtbGlzdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuLmhvcmktdGltZWxpbmUgLmV2ZW50cyAuZXZlbnQtbGlzdDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogMzZweDtcclxuICB0b3A6IDA7XHJcbn1cclxuLmhvcmktdGltZWxpbmUgLmV2ZW50cyAuZXZlbnQtbGlzdCAuZXZlbnQtZGF0ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzhweDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAycHggNHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMTQwcHgpIHtcclxuICAuaG9yaS10aW1lbGluZSAuZXZlbnRzIC5ldmVudC1saXN0IHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB3aWR0aDogMjQlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNDVweDtcclxuICB9XHJcbiAgLmhvcmktdGltZWxpbmUgLmV2ZW50cyAuZXZlbnQtbGlzdCAuZXZlbnQtZGF0ZSB7XHJcbiAgICAgIHRvcDogLTEycHg7XHJcbiAgfVxyXG59XHJcbi5iZy1zb2Z0LXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjQsMTQ0LDIwMywuMykhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1zb2Z0LXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzEsMTg5LDE1NCwuMykhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1zb2Z0LWRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzEsNzYsOTQsLjMpIWltcG9ydGFudDtcclxufVxyXG4uYmctc29mdC13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwyMTMsMTEyLC4zKSFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIC8vIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEzcHggMCByZ2JhKDIzNiwyMzYsMjQxLC40NCk7XHJcbiAgLy8gYm94LXNoYWRvdzogMCAwIDEzcHggMCByZ2JhKDIzNiwyMzYsMjQxLC40NCk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5cclxufVxyXG5cclxuLmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi50b3AsXHJcbi5ib3R0b20ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4udG9wIC50b3AtZWxlbWVudCxcclxuLmJvdHRvbSAuYm90dG9tLWVsZW1lbnQge1xyXG4gIHBhZGRpbmc6IDAgMjVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50b3AtZWxlbWVudDpiZWZvcmUsXHJcbi5ib3R0b20tZWxlbWVudDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiSVwiO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNDMzM5MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4udG9wLWVsZW1lbnQ6YmVmb3JlIHtcclxuICBib3R0b206IC02M3B4O1xyXG59XHJcblxyXG4uYm90dG9tLWVsZW1lbnQ6YmVmb3JlIHtcclxuICB0b3A6IC02M3B4O1xyXG59XHJcblxyXG4udG9wLWVsZW1lbnQ6YWZ0ZXIsXHJcbi5ib3R0b20tZWxlbWVudDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjOEFDQ0M2O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnRvcC1lbGVtZW50OmFmdGVyIHtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIGJvdHRvbTogLTQwcHg7XHJcbn1cclxuXHJcbi5ib3R0b20tZWxlbWVudDphZnRlciB7XHJcbiAgbGVmdDogMTBweDtcclxuICB0b3A6IC0yMHB4O1xyXG59XHJcbi5zZXRCb2FyZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5ub25BY3RpY2VidXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDc0MzggIWltcG9ydGFudDtcclxufVxyXG4iLCJzZWN0aW9uI2NoYXJ0U2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuc2VjdGlvbiNjaGFydFNlYyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbnNlY3Rpb24jYmlsbFBvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuc2VjdGlvbiNiaWxsUG9wIGFzaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbnNlY3Rpb24jYmlsbFBvcCBhc2lkZSB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbnNlY3Rpb24jYmlsbFBvcCBhc2lkZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuc2VjdGlvbiNiaWxsUG9wIGFzaWRlIGEuY2xvc2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29ucy9jbG9zZS5zdmdcIik7XG59XG5cbmRpdi5tb2RhbC1ib2R5IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogI0FBMDAwMCBzb2xpZCB0aGluO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxudWwuc3BvbnNvckxpc3QgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG51bC5zcG9uc29yTGlzdCBsaSBoNCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMyNTI1MjU7XG59XG5cbnVsLnNwb25zb3JMaXN0IGxpIGEuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDNweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1ib2R5IGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY4Njg2ODtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubW9kYWwtYm9keSBpbnB1dFt0eXBlPXRleHRdLFxuLm1vZGFsLWJvZHkgdGV4dGFyZWEsXG4ubW9kYWwtYm9keSBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1vZGFsLWJvZHkgdGV4dGFyZWEge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLm1vZGFsLWJvZHkgYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDNweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNldFdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaG9yaS10aW1lbGluZSAuZXZlbnRzIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNlOWVjZWY7XG59XG5cbi5ob3JpLXRpbWVsaW5lIC5ldmVudHMgLmV2ZW50LWxpc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5ob3JpLXRpbWVsaW5lIC5ldmVudHMgLmV2ZW50LWxpc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHRvcDogMDtcbn1cblxuLmhvcmktdGltZWxpbmUgLmV2ZW50cyAuZXZlbnQtbGlzdCAuZXZlbnQtZGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzOHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDc1cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMTQwcHgpIHtcbiAgLmhvcmktdGltZWxpbmUgLmV2ZW50cyAuZXZlbnQtbGlzdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAyNCU7XG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIH1cblxuICAuaG9yaS10aW1lbGluZSAuZXZlbnRzIC5ldmVudC1saXN0IC5ldmVudC1kYXRlIHtcbiAgICB0b3A6IC0xMnB4O1xuICB9XG59XG4uYmctc29mdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwgMTQ0LCAyMDMsIDAuMykgIWltcG9ydGFudDtcbn1cblxuLmJnLXNvZnQtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzEsIDE4OSwgMTU0LCAwLjMpICFpbXBvcnRhbnQ7XG59XG5cbi5iZy1zb2Z0LWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMxLCA3NiwgOTQsIDAuMykgIWltcG9ydGFudDtcbn1cblxuLmJnLXNvZnQtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LCAyMTMsIDExMiwgMC4zKSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgbWFyZ2luOiA1MHB4IDA7XG4gIGhlaWdodDogNXB4O1xufVxuXG4udG9wLFxuLmJvdHRvbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5ib3R0b20ge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi50b3AgLnRvcC1lbGVtZW50LFxuLmJvdHRvbSAuYm90dG9tLWVsZW1lbnQge1xuICBwYWRkaW5nOiAwIDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRvcC1lbGVtZW50OmJlZm9yZSxcbi5ib3R0b20tZWxlbWVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIklcIjtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjQzMzOTAwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbn1cblxuLnRvcC1lbGVtZW50OmJlZm9yZSB7XG4gIGJvdHRvbTogLTYzcHg7XG59XG5cbi5ib3R0b20tZWxlbWVudDpiZWZvcmUge1xuICB0b3A6IC02M3B4O1xufVxuXG4udG9wLWVsZW1lbnQ6YWZ0ZXIsXG4uYm90dG9tLWVsZW1lbnQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQ6ICM4QUNDQzY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnRvcC1lbGVtZW50OmFmdGVyIHtcbiAgbGVmdDogMTBweDtcbiAgYm90dG9tOiAtNDBweDtcbn1cblxuLmJvdHRvbS1lbGVtZW50OmFmdGVyIHtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAtMjBweDtcbn1cblxuLnNldEJvYXJkZXIge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkICMwMDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4ubm9uQWN0aWNlYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwNzQzOCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.ts ***!
    \***********************************************************************************/

  /*! exports provided: DealerDashboadComponent */

  /***/
  function srcAppDealerAppDealerDashboadComponentDealerDashboadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealerDashboadComponent", function () {
      return DealerDashboadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../delivery/delivery.service */
    "./src/app/delivery/delivery.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/filter.service */
    "./src/app/shared/filter.service.ts");
    /* harmony import */


    var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../dashboard/dashboard.service */
    "./src/app/dashboard/dashboard.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/internal/Subject */
    "./node_modules/rxjs/internal/Subject.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    ;
    ;

    var DealerDashboadComponent = /*#__PURE__*/function () {
      function DealerDashboadComponent(formBuilder, fetch, modalService, filterSrv, deliveryService) {
        var _this22 = this;

        _classCallCheck(this, DealerDashboadComponent);

        this.formBuilder = formBuilder;
        this.fetch = fetch;
        this.modalService = modalService;
        this.filterSrv = filterSrv;
        this.deliveryService = deliveryService;
        this.paid = true;
        this.dSubmit = false;
        this.dBtm = false;
        this.popBill = false;
        this.filter = true;
        this.currentMonth = 0;
        this.twoMonth = 0;
        this.threeMonth = 0;
        this.sixMonth = 0;
        this.ninthMonth = 0;
        this.selectWeek = 0;
        this.monthData = [];
        this.weekData = [];
        this.listSponsor = [];
        this.listPayee = [];
        this.monthDataDh = [];
        this.monthDataSp = [];
        this.monthDataPy = [];
        this.monthDataUp = [];
        this.spTotal = 0;
        this.pyTotal = 0;
        this.dashTotal = 0;
        this.upTotal = 0;
        this.col4Data = [];
        this.col3Data = [];
        this.productList = [];
        this.productChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loadingProduct = false;
        this.selectedProduct = [];
        this.cash = 0;
        this.netBanking = 0;
        this.card = 0;
        this.upi = 0;
        this.other = 0;
        this.dataResult = [];
        this.currentActiveTopTab = "";
        this.upiPaymmentArray = [];
        this.selectedDay = '';
        this.totalPrice = 0;
        this.serverPath = this.fetch.serverPath;
        this.menuOptions = this.filterSrv.menuOptions;
        this.cOptions = this.filterSrv.cOptions;
        this.groupedData = [];
        this.productChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(900), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])()).subscribe(function (value) {
          console.log(value);
          _this22.productList = [];
          _this22.loadingProduct = true;

          _this22.fetch.getProductList({
            "name": value
          }).subscribe(function (data) {
            console.log(data);
            _this22.loadingProduct = false;
            _this22.productList = data;
          }, function (err) {});
        });
      }

      _createClass(DealerDashboadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.paymentForm = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            payMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.deliveryFrm = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            payMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.movetocredit = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.getMonthData(true);
          this.getProfileInfo();
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "openDelivery",
        value: function openDelivery(template, billId, paymentType) {
          this.paymentModeForCredit = paymentType;
          this.modalRef = this.modalService.show(template);
          this.deliveryFrm.patchValue({
            billId: billId
          });
          console.log(this.deliveryFrm);
        }
      }, {
        key: "openMoveTocredit",
        value: function openMoveTocredit(template, billId) {
          this.modalRef = this.modalService.show(template);
          console.log(this.profInfo);
          this.movetocredit.patchValue({
            billId: billId
          });
          console.log(this.movetocredit.value);
        }
      }, {
        key: "openSponsor",
        value: function openSponsor(template, billId) {
          this.modalRef = this.modalService.show(template);
          this.billId = billId;
        }
      }, {
        key: "toggleFilter",
        value: function toggleFilter() {
          this.filter = !this.filter;
        }
      }, {
        key: "sltArea",
        value: function sltArea(area) {
          var _this23 = this;

          this.billDData = [];
          this.monthData = [];
          this.selectArea = area;
          this.selectSector = null;
          this.selectBrand = null;
          this.weekData = null;
          this.col3Data = [];
          this.col4Data = [];
          this.currentActiveTopTab = area;
          this.monthDataDh = [];

          if (this.dataResult[area] !== undefined) {
            this.filterSrv.monthFilter.forEach(function (mth) {
              _this23.monthDataDh.push(_this23.filterSrv.filterByDateCash(_this23.dataResult[area], new Date().getTime(), mth));
            });
          }

          this.monthData = [];
          this.weekData = [];
          this.daysData = [];
          this.upiPaymmentArray = [];
          this.monthData = this.monthDataDh;

          if (this.dataResult[area] !== undefined) {
            this.billDData = this.monthData[0].list;
          }
        }
      }, {
        key: "sltMonth",
        value: function sltMonth(month) {
          this.selectMonth = month - 1;
        }
      }, {
        key: "sltWeek",
        value: function sltWeek(week) {
          this.selectWeek = week;
          console.log(this.weekData[week].list);

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            this.billData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billData);
          } else {
            this.billDData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billDData);
          }
        }
      }, {
        key: "getProfileInfo",
        value: function getProfileInfo() {
          var _this24 = this;

          this.fetch.getProfInfo().subscribe(function (res) {
            _this24.profInfo = res;
          }, function (err) {
            _this24.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "getMonthData",
        value: function getMonthData(sectionType) {
          var _this25 = this;

          this.billDData = [];
          this.weekData = [];
          this.daysData = [];
          this.monthData = []; //this.fetch.getAllBill(this.filterSrv.lastNine.getMonth() + 1, this.filterSrv.lastNine.getFullYear())

          this.deliveryService.getAllDelivery().subscribe(function (res) {
            var data = res;
            _this25.paid = sectionType;
            _this25.allData = data; //this.billDData = this.allData;

            data = data.filter(function (d) {
              return d.paymentMode !== "";
            });
            _this25.billDData = data;
            console.log(data);
            var result = data.reduce(function (r, a) {
              r[a.paymentMode] = r[a.paymentMode] || [];
              r[a.paymentMode].push(a);
              return r;
            }, Object.create(null));
            _this25.dataResult = result;
            console.log(_this25.dataResult);

            if (result !== undefined) {
              if (result['cash'] !== undefined) {
                _this25.cash = result['cash'].reduce(function (accumulator, currentValue) {
                  var v = _this25.cleanPrice(currentValue.billDetails.total);

                  return accumulator + parseInt(v);
                }, 0);
              }

              if (result['Net Banking'] !== undefined) {
                _this25.netBanking = result['Net Banking'].reduce(function (accumulator, currentValue) {
                  var v = _this25.cleanPrice(currentValue.billDetails.total);

                  return accumulator + parseInt(v);
                }, 0);
              }

              if (result['card'] !== undefined) {
                _this25.card = result['card'].reduce(function (accumulator, currentValue) {
                  var v = _this25.cleanPrice(currentValue.billDetails.total);

                  return accumulator + parseInt(v);
                }, 0);
              }

              if (result['upi'] !== undefined) {
                _this25.upi = result['upi'].reduce(function (accumulator, currentValue) {
                  var v = _this25.cleanPrice(currentValue.billDetails.total);

                  return accumulator + parseInt(v);
                }, 0);
              }

              if (result['other'] !== undefined) {
                _this25.other = result['other'].reduce(function (accumulator, currentValue) {
                  var v = _this25.cleanPrice(currentValue.billDetails.total);

                  return accumulator + parseInt(v);
                }, 0);
              }
            }

            if (!_this25.paid) {
              _this25.unpaid();
            }
          }, function (err) {
            _this25.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "unpaid",
        value: function unpaid() {
          var _this26 = this;

          console.log(this.allData);
          this.filter = true;
          this.billDData = [];
          this.weekData = [];
          this.daysData = [];
          this.monthData = [];
          this.upiPaymmentArray = [];
          this.allData = this.allData.filter(function (data) {
            return data.payStatus === false;
          });
          this.billDData = this.allData;
          this.monthDataDh = [];
          this.filterSrv.monthFilter.forEach(function (mth) {
            _this26.monthDataDh.push(_this26.filterSrv.filterByDateCash(_this26.allData, new Date().getTime(), mth));
          });
          this.monthData = [];
          this.monthData = this.monthDataDh;
          console.log(this.monthData); // for (var i = 0; i < this.monthData.length; i++) {
          //   this.billDData =  this.billDData.concat(this.monthData[i].list);
          //   }

          console.log(this.billDData);
          this.paid = false;
        }
      }, {
        key: "filterMonthsWeek",
        value: function filterMonthsWeek(month, index, data) {
          var _this27 = this;

          this.sltMonth(month);
          this.weekData = [];
          this.billData = [];
          this.daysData = [];
          var weekList = this.filterSrv.getWeeksStartAndEndInMonth(month, this.filterSrv.today.getMonth());
          var filterData = [];

          if (this.paid) {
            filterData = this.dataResult[this.currentActiveTopTab];
          } else {
            filterData = this.allData;
          }

          weekList.forEach(function (e) {
            _this27.weekData.push(_this27.filterSrv.filterByBillDatecash(filterData, e.end.getTime(), e.start.getTime()));
          });
          this.billDData = this.monthData[index].list;
          this.selectSector = null;
          this.selectBrand = null;
          this.col3Data = [];
          this.col4Data = [];
        }
      }, {
        key: "filterDays",
        value: function filterDays(month, data) {
          var _this28 = this;

          this.daysData = [];
          var daysList = this.filterSrv.getDaysStartAndEndInMonth(month, this.filterSrv.today.getMonth());
          daysList.forEach(function (e) {
            _this28.daysData.push(_this28.filterSrv.filterByBillDatecash(data, e.end.getTime(), e.start.getTime()));
          });
          this.billDData = this.weekData[month - 1].list;
          var setRange = [(month - 1) * 7, (month - 1) * 7 + 7];
          var d = [];

          for (var i = 0; i < this.daysData.length; i++) {
            if (i >= setRange[0] && i <= setRange[1]) {
              d.push(this.daysData[i]);
            }
          }

          this.daysData = d;
          this.selectWeek = month - 1;
          this.selectSector = null;
          this.selectBrand = null;
          this.col3Data = [];
          this.col4Data = [];
        }
      }, {
        key: "cleanPrice",
        value: function cleanPrice(amount) {
          return this.filterSrv.cleanPrice(amount);
        }
      }, {
        key: "showBill",
        value: function showBill(index) {
          this.popBill = !this.popBill;
          this.popId = index;
        }
      }, {
        key: "generateFilter",
        value: function generateFilter(data) {
          var _this29 = this;

          this.selectSector = null;
          this.col3Data = [];
          this.selectBrand = null;
          this.col4Data = [];
          console.log(data);

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(function (e) {
              var updateItem = _this29.col3Data.find(function (x) {
                return x.department === e.deportment;
              });

              if (!updateItem) _this29.col3Data.push({
                department: e.deportment,
                price: _this29.cleanPrice(e.total),
                userType: "department"
              });else {
                var index = _this29.col3Data.indexOf(updateItem);

                _this29.col3Data[index].price = _this29.col3Data[index].price + _this29.cleanPrice(e.total);
              }
            });
          } else {
            data.forEach(function (e) {
              var updateItem = _this29.col3Data.find(function (x) {
                return x.department === e.billDetails.deportment;
              });

              if (!updateItem) _this29.col3Data.push({
                department: e.billDetails.deportment,
                price: _this29.cleanPrice(e.billDetails.total),
                userType: "department"
              });else {
                var index = _this29.col3Data.indexOf(updateItem);

                _this29.col3Data[index].price = _this29.col3Data[index].price + _this29.cleanPrice(e.billDetails.total);
              }
            });
          }
        }
      }, {
        key: "generateBFilter",
        value: function generateBFilter(data) {
          var _this30 = this;

          this.selectBrand = null;
          this.col4Data = [];
          console.log(this.selectArea);

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(function (e) {
              var updateItem = _this30.col4Data.find(function (x) {
                return x.brand === e.title;
              });

              if (!updateItem) _this30.col4Data.push({
                brand: e.title,
                price: _this30.cleanPrice(e.total),
                userType: "brand"
              });else {
                var index = _this30.col4Data.indexOf(updateItem);

                _this30.col4Data[index].price = _this30.col4Data[index].price + _this30.cleanPrice(e.total);
              }
            });
          } else {
            data.forEach(function (e) {
              var updateItem = _this30.col4Data.find(function (x) {
                return x.brand === e.billDetails.title;
              });

              if (!updateItem) _this30.col4Data.push({
                brand: e.billDetails.title,
                price: _this30.cleanPrice(e.billDetails.total),
                userType: "brand"
              });else {
                var index = _this30.col4Data.indexOf(updateItem);

                _this30.col4Data[index].price = _this30.col4Data[index].price + _this30.cleanPrice(e.billDetails.total);
              }
            });
          }
        }
      }, {
        key: "searchProductName",
        value: function searchProductName(event) {
          if (event.target.value.length > 2) {
            this.loadingProduct = true;
            this.productChange.next(event.target.value);
          }
        }
      }, {
        key: "setMobileNumber",
        value: function setMobileNumber(val) {
          this.setMobile = val;
        }
      }, {
        key: "NewDealerBill",
        value: function NewDealerBill() {
          var _this31 = this;

          this.newBill = true;
          this.selectedProduct.forEach(function (data, index) {
            if (_this31.selectedProduct[index].quantity == undefined) {
              _this31.selectedProduct[index]["quantity"] = 1;
            }
          });
          this.fetch.createNewInvoice({
            "selectedProducts": this.selectedProduct
          }).subscribe(function (res) {
            _this31.dMsg = {
              msg: "Bill created successfully.",
              alert: 'alert-success'
            };
            _this31.selectedProduct = [];
            _this31.dBtm = false;
            _this31.paid = false;
            res["mobilenumber"] = _this31.setMobile;
            setTimeout(function () {
              _this31.dMsg = {};

              _this31.deliveryService.generateImageNewInvoice(res).subscribe(function () {
                _this31.getMonthData(false);
              });

              _this31.paid = false;

              _this31.modalRef.hide();
            }, 2800);
          }, function (err) {
            _this31.dBtm = false;
            _this31.dMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "setQuantity",
        value: function setQuantity(val, index) {
          var _this32 = this;

          this.totalPrice = 0;

          if (this.selectedProduct[index] !== undefined) {
            this.selectedProduct[index]['quantity'] = parseInt(val);
          }

          console.log(this.selectedProduct);
          this.selectedProduct.map(function (data) {
            console.log(data.price);
            console.log(data.quantity);
            _this32.totalPrice += parseInt(data.price) * parseInt(data.quantity !== undefined ? data.quantity : 1);
          });
        }
      }, {
        key: "addDelivery",
        value: function addDelivery() {
          var _this33 = this;

          this.dBtm = false;
          var requestData = this.deliveryFrm.value;
          requestData['category'] = 'delivery';
          requestData['payStatus'] = false;

          if (this.paid) {
            requestData['payMode'] = this.paymentModeForCredit;
            requestData['payStatus'] = true;
          } else {
            requestData['payMode'] = this.deliveryFrm.value.payMode;

            if (this.deliveryFrm.value.payMode !== "") {
              requestData['payStatus'] = true;
            } else {
              requestData['payStatus'] = false;
            }
          }

          this.deliveryService.moveToDelivery(requestData).subscribe(function (res) {
            _this33.dMsg = {
              msg: 'Updated Successfully',
              alert: 'alert-success'
            };
            _this33.dBtm = true;
            setTimeout(function () {
              _this33.dBtm = false;

              _this33.modalRef.hide();
            }, 2800);
          }, function (err) {
            _this33.dBtm = true;
            _this33.dMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "moveToCredit1",
        value: function moveToCredit1() {
          var _this34 = this;

          this.dBtm = false;
          var requestData = this.movetocredit.value;
          requestData['category'] = 'credit';
          requestData['payStatus'] = false;
          console.log(requestData);
          this.fetch.updateCreditInvoice(requestData).subscribe(function (res) {
            _this34.dMsg = {
              msg: 'Updated Successfully',
              alert: 'alert-success'
            };
            _this34.dBtm = true;
            setTimeout(function () {
              _this34.dBtm = false;

              _this34.modalRef.hide();
            }, 2800);
          }, function (err) {
            _this34.dBtm = true;
            _this34.dMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "openUpdatepayment",
        value: function openUpdatepayment(template, billId) {
          this.modalRef = this.modalService.show(template);
          this.paymentForm.patchValue({
            billId: billId
          });
        }
      }, {
        key: "updatePayment1",
        value: function updatePayment1() {
          var _this35 = this;

          console.log("hello");
          this.deliveryService.updatepaymentMode(this.paymentForm.value).subscribe(function (data) {
            _this35.paymentForm.reset();

            _this35.dMsg = true;
            _this35.msg = "Payment approved successfully!";
            console.log(data);
            setTimeout(function () {
              _this35.getMonthData(true);

              _this35.dMsg = null;
              _this35.msg = "";

              _this35.modalRef.hide();
            }, 3500);
          }, function (err) {
            console.log("hello");
          });
        }
      }, {
        key: "upiPaymentData",
        value: function upiPaymentData(index, data) {
          var _this36 = this;

          this.billDData = this.daysData[index].list;
          this.selectedDay = index;
          var gpayData = data.list.filter(function (d) {
            return d.upiType === 'gpay';
          });
          var payTmData = data.list.filter(function (d) {
            return d.upiType === 'payTm';
          });
          var phonePay = data.list.filter(function (d) {
            return d.upiType === 'phonePay';
          });
          var gpay = 0;
          gpay = gpayData.reduce(function (accumulator, currentValue) {
            var v = _this36.cleanPrice(currentValue.billDetails.total);

            return accumulator + parseInt(v);
          }, 0);
          var ptpay = 0;
          ptpay = payTmData.reduce(function (accumulator, currentValue) {
            var v = _this36.cleanPrice(currentValue.billDetails.total);

            return accumulator + parseInt(v);
          }, 0);
          var phpay = 0;
          phpay = phonePay.reduce(function (accumulator, currentValue) {
            var v = _this36.cleanPrice(currentValue.billDetails.total);

            return accumulator + parseInt(v);
          }, 0);
          this.upiPaymmentArray.push(gpay);
          this.upiPaymmentArray.push(ptpay);
          this.upiPaymmentArray.push(phpay);
        }
      }, {
        key: "dFrm",
        get: function get() {
          return this.deliveryFrm.controls;
        }
      }]);

      return DealerDashboadComponent;
    }();

    DealerDashboadComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: _shared_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"]
      }, {
        type: _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_1__["DeliveryService"]
      }];
    };

    DealerDashboadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-dealer-dashboad',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dealer-dashboad-component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dealer-dashboad-component.scss */
      "./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.scss"))["default"]]
    })], DealerDashboadComponent);
    /***/
  },

  /***/
  "./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDealerAppDealerDeliveryPgDealerDeliveryPgComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div#filterSec {\n  background-color: #fff;\n  border-radius: 0 0 8px 8px;\n}\n\ndiv#filterSec h4 {\n  font-size: 15px;\n  font-weight: bold;\n  color: #aa0000;\n  margin: 20px 0 1px 0;\n}\n\ndiv.optionList {\n  margin: 5px 0;\n}\n\ndiv.optionList label {\n  width: 150px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  cursor: pointer;\n}\n\ndiv.optionList label input[type=radio] {\n  margin-right: 10px;\n}\n\nsection#deliverySec {\n  background-color: #ffffff;\n}\n\nsection#deliverySec h3 {\n  font-size: 22px;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\nsection#deliverySec p {\n  margin: 3px 0;\n}\n\ndiv#shipTrack i {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #E2E2E2;\n}\n\ndiv#shipTrack i.active {\n  background-color: #AA0000;\n}\n\ndiv#shipTrack span {\n  width: 130px;\n  border-top: #E2E2E2 solid 5px;\n}\n\n.shipTrack1 {\n  border-top: #AA0000 solid 5px !important;\n}\n\ndiv#shipTrack h3 {\n  color: #aa0000;\n  font-size: 18px;\n}\n\nfieldset {\n  border-radius: 5px;\n  padding: 8px;\n  margin: 10px 0;\n}\n\nfieldset legend {\n  font-size: 15px;\n  color: #AA0000;\n}\n\n.buttonClass {\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 15px;\n  cursor: pointer;\n  border: none;\n}\n\ndiv#shipTrack i {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #E2E2E2;\n}\n\ndiv#shipTrack i.active {\n  background-color: #AA0000;\n}\n\ndiv#shipTrack span {\n  width: 130px;\n  border-top: #E2E2E2 solid 5px;\n}\n\ndiv#shipTrack h3 {\n  color: #aa0000;\n  font-size: 18px;\n}\n\n.shipTrack2 {\n  border-top: none !important;\n}\n\n.setAlign {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbGVyLWFwcC9kZWFsZXItZGVsaXZlcnktcGcvQzpcXFVzZXJzXFxBYmhpc2hlay5TYXhlbmExXFxEZXNrdG9wXFxwcmFrYXNoXFxzaG9lZGVsaXZlcnlGcm9udEVuZC9zcmNcXGFwcFxcZGVhbGVyLWFwcFxcZGVhbGVyLWRlbGl2ZXJ5LXBnXFxkZWFsZXItZGVsaXZlcnktcGcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlYWxlci1hcHAvZGVhbGVyLWRlbGl2ZXJ5LXBnL2RlYWxlci1kZWxpdmVyeS1wZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQXlDLGtCQUFBO0FDRXpDOztBREFBO0VBQXNCLHlCQUFBO0FDSXRCOztBREZBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURGQTtFQUNJLGFBQUE7QUNLSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREZBO0VBQXlCLHlCQUFBO0FDTXpCOztBREpBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0FDT0o7O0FESkE7RUFDRSx3Q0FBQTtBQ09GOztBREpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNPSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNPSjs7QURKQTtFQUFrQixlQUFBO0VBQWlCLGNBQUE7QUNTbkM7O0FEUEE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDVUY7O0FEUkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNXRjs7QURSQTtFQUF5Qix5QkFBQTtBQ1l6Qjs7QURWQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQ2FGOztBRFZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNhRjs7QURWQTtFQUNFLDJCQUFBO0FDYUY7O0FEVEE7RUFDRSxrQkFBQTtBQ1lGIiwiZmlsZSI6InNyYy9hcHAvZGVhbGVyLWFwcC9kZWFsZXItZGVsaXZlcnktcGcvZGVhbGVyLWRlbGl2ZXJ5LXBnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2I2ZpbHRlclNlYyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbn1cblxuZGl2I2ZpbHRlclNlYyBoNCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiByZ2IoMTcwLDAsMCk7XG4gICAgbWFyZ2luOiAyMHB4IDAgMXB4IDA7XG59XG5cbmRpdi5vcHRpb25MaXN0IHtcbiAgICBtYXJnaW46IDVweCAwO1xufVxuXG5kaXYub3B0aW9uTGlzdCBsYWJlbCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYub3B0aW9uTGlzdCBsYWJlbCBpbnB1dFt0eXBlPXJhZGlvXSB7IG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG5zZWN0aW9uI2RlbGl2ZXJ5U2VjIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgfVxuXG5zZWN0aW9uI2RlbGl2ZXJ5U2VjIGgzIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5zZWN0aW9uI2RlbGl2ZXJ5U2VjIHAge1xuICAgIG1hcmdpbjogM3B4IDA7XG59XG5cbmRpdiNzaGlwVHJhY2sgaSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UyRTJFMjtcbn1cblxuZGl2I3NoaXBUcmFjayBpLmFjdGl2ZSB7IGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7IH1cblxuZGl2I3NoaXBUcmFjayBzcGFuIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgYm9yZGVyLXRvcDogI0UyRTJFMiBzb2xpZCA1cHg7XG59XG5cbi5zaGlwVHJhY2sxIHtcbiAgYm9yZGVyLXRvcDogI0FBMDAwMCBzb2xpZCA1cHggIWltcG9ydGFudDtcbn1cblxuZGl2I3NoaXBUcmFjayBoMyB7XG4gICAgY29sb3I6ICNhYTAwMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5maWVsZHNldCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHsgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogI0FBMDAwMDsgfVxuXG4uYnV0dG9uQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuZGl2I3NoaXBUcmFjayBpIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UyRTJFMjtcbn1cblxuZGl2I3NoaXBUcmFjayBpLmFjdGl2ZSB7IGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7IH1cblxuZGl2I3NoaXBUcmFjayBzcGFuIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBib3JkZXItdG9wOiAjRTJFMkUyIHNvbGlkIDVweDtcbn1cblxuZGl2I3NoaXBUcmFjayBoMyB7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaGlwVHJhY2syIHtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuXG59XG5cbi5zZXRBbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsImRpdiNmaWx0ZXJTZWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbn1cblxuZGl2I2ZpbHRlclNlYyBoNCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBtYXJnaW46IDIwcHggMCAxcHggMDtcbn1cblxuZGl2Lm9wdGlvbkxpc3Qge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG5kaXYub3B0aW9uTGlzdCBsYWJlbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5vcHRpb25MaXN0IGxhYmVsIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5zZWN0aW9uI2RlbGl2ZXJ5U2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBoMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBwIHtcbiAgbWFyZ2luOiAzcHggMDtcbn1cblxuZGl2I3NoaXBUcmFjayBpIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UyRTJFMjtcbn1cblxuZGl2I3NoaXBUcmFjayBpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG59XG5cbmRpdiNzaGlwVHJhY2sgc3BhbiB7XG4gIHdpZHRoOiAxMzBweDtcbiAgYm9yZGVyLXRvcDogI0UyRTJFMiBzb2xpZCA1cHg7XG59XG5cbi5zaGlwVHJhY2sxIHtcbiAgYm9yZGVyLXRvcDogI0FBMDAwMCBzb2xpZCA1cHggIWltcG9ydGFudDtcbn1cblxuZGl2I3NoaXBUcmFjayBoMyB7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjQUEwMDAwO1xufVxuXG4uYnV0dG9uQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbn1cblxuZGl2I3NoaXBUcmFjayBzcGFuIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBib3JkZXItdG9wOiAjRTJFMkUyIHNvbGlkIDVweDtcbn1cblxuZGl2I3NoaXBUcmFjayBoMyB7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaGlwVHJhY2syIHtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2V0QWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: DealerDeliveryPgComponent */

  /***/
  function srcAppDealerAppDealerDeliveryPgDealerDeliveryPgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealerDeliveryPgComponent", function () {
      return DealerDeliveryPgComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../delivery/delivery.service */
    "./src/app/delivery/delivery.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/filter.service */
    "./src/app/shared/filter.service.ts");
    /* harmony import */


    var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../dashboard/dashboard.service */
    "./src/app/dashboard/dashboard.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/internal/Subject */
    "./node_modules/rxjs/internal/Subject.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    ;
    ;

    var DealerDeliveryPgComponent = /*#__PURE__*/function () {
      function DealerDeliveryPgComponent(formBuilder, fetch, modalService, filterSrv, deliveryService) {
        var _this37 = this;

        _classCallCheck(this, DealerDeliveryPgComponent);

        this.formBuilder = formBuilder;
        this.fetch = fetch;
        this.modalService = modalService;
        this.filterSrv = filterSrv;
        this.deliveryService = deliveryService;
        this.paid = true;
        this.dSubmit = false;
        this.dBtm = false;
        this.popBill = false;
        this.filter = true;
        this.currentMonth = 0;
        this.twoMonth = 0;
        this.threeMonth = 0;
        this.sixMonth = 0;
        this.ninthMonth = 0;
        this.selectWeek = 0;
        this.monthData = [];
        this.weekData = [];
        this.listSponsor = [];
        this.listPayee = [];
        this.monthDataDh = [];
        this.monthDataSp = [];
        this.monthDataPy = [];
        this.monthDataUp = [];
        this.spTotal = 0;
        this.pyTotal = 0;
        this.dashTotal = 0;
        this.upTotal = 0;
        this.col4Data = [];
        this.col3Data = [];
        this.productList = [];
        this.productChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loadingProduct = false;
        this.selectedProduct = [];
        this.cash = 0;
        this.netBanking = 0;
        this.card = 0;
        this.upi = 0;
        this.other = 0;
        this.dataResult = [];
        this.currentActiveTopTab = "";
        this.updateStatusValue = "";
        this.upiPaymmentArray = [];
        this.serverPath = this.fetch.serverPath;
        this.menuOptions = this.filterSrv.menuOptions;
        this.cOptions = this.filterSrv.cOptions;
        this.groupedData = [];
        this.productChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(900), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])()).subscribe(function (value) {
          console.log(value);
          _this37.productList = [];
          _this37.loadingProduct = true;

          _this37.fetch.getProductList({
            "name": value
          }).subscribe(function (data) {
            console.log(data);
            _this37.loadingProduct = false;
            _this37.productList = data;
          }, function (err) {});
        });
      }

      _createClass(DealerDeliveryPgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.paymentForm = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            payMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.invoicStatus = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.getMonthData();
          this.getProfileInfo();
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "openInvoiceStatus",
        value: function openInvoiceStatus(template, billId) {
          this.updateStatusValue = "";
          console.log(this.billDData);
          var f = this.billDData.filter(function (data) {
            return data._id == billId;
          });
          console.log(f);

          if (f.length) {
            this.updateStatusValue = f[0].invoiceStatus;
            console.log(this.updateStatusValue);
          }

          this.modalRef = this.modalService.show(template);
          console.log(this.profInfo);
          this.invoicStatus.patchValue({
            billId: billId
          });
        }
      }, {
        key: "toggleFilter",
        value: function toggleFilter() {
          this.filter = !this.filter;
        }
      }, {
        key: "sltArea",
        value: function sltArea(area) {
          var _this38 = this;

          this.billDData = [];
          this.weekData = [];
          this.monthData = [];
          this.daysData = [];
          this.selectArea = area;
          this.selectWeek = null;
          this.selectSector = null;
          this.selectBrand = null;
          this.weekData = null;
          this.col3Data = [];
          this.col4Data = [];
          this.currentActiveTopTab = area;
          this.monthDataDh = [];

          if (this.dataResult[area] !== undefined) {
            this.filterSrv.monthFilter.forEach(function (mth) {
              _this38.monthDataDh.push(_this38.filterSrv.filterByDateCash(_this38.dataResult[area], new Date().getTime(), mth));
            });
          }

          this.monthData = [];
          this.weekData = [];
          this.daysData = [];
          this.upiPaymmentArray = [];
          this.monthData = this.monthDataDh;

          if (this.dataResult[area] !== undefined) {
            this.billDData = this.monthData[0].list;
          }
        }
      }, {
        key: "sltMonth",
        value: function sltMonth(month) {
          this.selectMonth = month - 1;
        }
      }, {
        key: "sltWeek",
        value: function sltWeek(week) {
          this.selectWeek = week;
          console.log(this.weekData[week].list);

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            this.billData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billData);
          } else {
            this.billDData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billDData);
          }
        }
      }, {
        key: "getProfileInfo",
        value: function getProfileInfo() {
          var _this39 = this;

          this.fetch.getProfInfo().subscribe(function (res) {
            _this39.profInfo = res;
          }, function (err) {
            _this39.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "getMonthData",
        value: function getMonthData() {
          var _this40 = this;

          this.monthData = [];
          this.billDData = [];
          this.deliveryService.getAllDelivery().subscribe(function (res) {
            var data = res;
            _this40.paid = true;
            _this40.allData = data;
            _this40.billDData = _this40.allData;
            console.log(_this40.allData);
            data = data.filter(function (d) {
              return d.paymentMode !== "" && d.category == "delivery";
            });
            _this40.billDData = data;
            var result = data.reduce(function (r, a) {
              r[a.paymentMode] = r[a.paymentMode] || [];
              r[a.paymentMode].push(a);
              return r;
            }, Object.create(null));
            _this40.dataResult = result;
            console.log(_this40.dataResult); //this.billDData = this.dataResult.map((data: any))

            if (result !== undefined) {
              if (result['cash'] !== undefined) {
                _this40.cash = result['cash'].reduce(function (accumulator, currentValue) {
                  var v = _this40.cleanPrice(currentValue.billDetails.total);

                  return accumulator + parseInt(v);
                }, 0);
              }

              if (result['Net Banking'] !== undefined) {
                _this40.netBanking = result['Net Banking'].reduce(function (accumulator, currentValue) {
                  var v = _this40.cleanPrice(currentValue.billDetails.total);

                  return accumulator + parseInt(v);
                }, 0);
              }

              if (result['card'] !== undefined) {
                _this40.card = result['card'].reduce(function (accumulator, currentValue) {
                  var v = _this40.cleanPrice(currentValue.billDetails.total);

                  return accumulator + parseInt(v);
                }, 0);
              }

              if (result['upi'] !== undefined) {
                _this40.upi = result['upi'].reduce(function (accumulator, currentValue) {
                  var v = _this40.cleanPrice(currentValue.billDetails.total);

                  return accumulator + parseInt(v);
                }, 0);
              }

              if (result['other'] !== undefined) {
                _this40.other = result['other'].reduce(function (accumulator, currentValue) {
                  var v = _this40.cleanPrice(currentValue.billDetails.total);

                  return accumulator + parseInt(v);
                }, 0);
              }
            }
          }, function (err) {
            _this40.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "unpaid",
        value: function unpaid() {
          var _this41 = this;

          this.paid = false;
          this.filter = true;
          this.billDData = [];
          this.weekData = [];
          this.daysData = [];
          this.upiPaymmentArray = []; // this.filterSrv.monthFilter.forEach(mth => {
          //   this.monthDataDh.push(this.filterSrv.filterByDateCash(this.allData, this.filterSrv.monthFilter[0], mth))
          // });

          console.log(this.allData);
          this.allData = this.allData.filter(function (data) {
            return data.payStatus === false && data.category === 'delivery';
          });
          console.log(this.allData);
          this.billDData = this.allData;
          this.monthDataDh = [];
          this.filterSrv.monthFilter.forEach(function (mth) {
            _this41.monthDataDh.push(_this41.filterSrv.filterByDateCash(_this41.allData, new Date().getTime(), mth));
          });
          console.log(this.monthDataDh);
          this.monthData = [];
          this.monthData = this.monthDataDh; // for (var i = 0; i < this.monthData.length; i++) {
          //   this.billDData =  this.billDData.concat(this.monthData[i].list);
          //   }

          console.log(this.billDData);
        }
      }, {
        key: "filterMonthsWeek",
        value: function filterMonthsWeek(month, index, data) {
          var _this42 = this;

          this.sltMonth(month);
          this.weekData = [];
          this.billData = [];
          this.daysData = [];
          var weekList = this.filterSrv.getWeeksStartAndEndInMonth(month, this.filterSrv.today.getMonth());
          console.log(weekList); // console.log(this.selectArea);
          //  console.log(this.monthDataDh);

          var filterData = [];

          if (this.paid) {
            filterData = this.dataResult[this.currentActiveTopTab];
          } else {
            filterData = this.allData;
          }

          weekList.forEach(function (e) {
            _this42.weekData.push(_this42.filterSrv.filterByBillDatecash(filterData, e.end.getTime(), e.start.getTime()));
          });
          console.log(this.weekData);
          this.billDData = this.monthData[index].list; // const setRange = [(month -1)*4, (((month -1)*4) + 4) ];
          // console.log(this.weekData);
          // let d = [];
          // for (let i=0; i < this.weekData.length; i++) {
          //   if (i>= setRange[0] && i<= setRange[1]) {
          //     d.push(this.weekData[i])
          //   }
          // }
          // this.weekData = d;

          console.log(this.billDData);
          this.selectWeek = null;
          this.selectSector = null;
          this.selectBrand = null;
          this.col3Data = [];
          this.col4Data = []; //console.log(this.weekData);
        }
      }, {
        key: "filterDays",
        value: function filterDays(month, data) {
          var _this43 = this;

          this.daysData = []; //console.log(data);
          // this.billDData = this.weekData[month].list;

          var daysList = this.filterSrv.getDaysStartAndEndInMonth(month, this.filterSrv.today.getMonth());
          console.log(daysList); // console.log(this.selectArea);

          daysList.forEach(function (e) {
            _this43.daysData.push(_this43.filterSrv.filterByBillDatecash(data, e.end.getTime(), e.start.getTime()));
          });
          this.billDData = this.weekData[month - 1].list;
          var setRange = [(month - 1) * 7, (month - 1) * 7 + 7];
          console.log(this.weekData);
          var d = [];

          for (var i = 0; i < this.daysData.length; i++) {
            if (i >= setRange[0] && i <= setRange[1]) {
              d.push(this.daysData[i]);
            }
          }

          this.daysData = d;
          console.log(this.daysData);
          this.selectWeek = month - 1;
          this.selectSector = null;
          this.selectBrand = null;
          this.col3Data = [];
          this.col4Data = []; //console.log(this.weekData);
        }
      }, {
        key: "cleanPrice",
        value: function cleanPrice(amount) {
          return this.filterSrv.cleanPrice(amount);
        }
      }, {
        key: "showBill",
        value: function showBill(index) {
          this.popBill = !this.popBill;
          this.popId = index;
        }
      }, {
        key: "generateFilter",
        value: function generateFilter(data) {
          var _this44 = this;

          this.selectSector = null;
          this.col3Data = [];
          this.selectBrand = null;
          this.col4Data = [];
          console.log(data);

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(function (e) {
              var updateItem = _this44.col3Data.find(function (x) {
                return x.department === e.deportment;
              });

              if (!updateItem) _this44.col3Data.push({
                department: e.deportment,
                price: _this44.cleanPrice(e.total),
                userType: "department"
              });else {
                var index = _this44.col3Data.indexOf(updateItem);

                _this44.col3Data[index].price = _this44.col3Data[index].price + _this44.cleanPrice(e.total);
              }
            });
          } else {
            data.forEach(function (e) {
              var updateItem = _this44.col3Data.find(function (x) {
                return x.department === e.billDetails.deportment;
              });

              if (!updateItem) _this44.col3Data.push({
                department: e.billDetails.deportment,
                price: _this44.cleanPrice(e.billDetails.total),
                userType: "department"
              });else {
                var index = _this44.col3Data.indexOf(updateItem);

                _this44.col3Data[index].price = _this44.col3Data[index].price + _this44.cleanPrice(e.billDetails.total);
              }
            });
          }
        }
      }, {
        key: "generateBFilter",
        value: function generateBFilter(data) {
          var _this45 = this;

          this.selectBrand = null;
          this.col4Data = [];
          console.log(this.selectArea);

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(function (e) {
              var updateItem = _this45.col4Data.find(function (x) {
                return x.brand === e.title;
              });

              if (!updateItem) _this45.col4Data.push({
                brand: e.title,
                price: _this45.cleanPrice(e.total),
                userType: "brand"
              });else {
                var index = _this45.col4Data.indexOf(updateItem);

                _this45.col4Data[index].price = _this45.col4Data[index].price + _this45.cleanPrice(e.total);
              }
            });
          } else {
            data.forEach(function (e) {
              var updateItem = _this45.col4Data.find(function (x) {
                return x.brand === e.billDetails.title;
              });

              if (!updateItem) _this45.col4Data.push({
                brand: e.billDetails.title,
                price: _this45.cleanPrice(e.billDetails.total),
                userType: "brand"
              });else {
                var index = _this45.col4Data.indexOf(updateItem);

                _this45.col4Data[index].price = _this45.col4Data[index].price + _this45.cleanPrice(e.billDetails.total);
              }
            });
          }
        }
      }, {
        key: "updateInvoiceStatus",
        value: function updateInvoiceStatus() {
          var _this46 = this;

          this.dBtm = true;
          this.fetch.updateInvoiceStatus(this.invoicStatus.value).subscribe(function (res) {
            _this46.dMsg1 = true;
            _this46.dMsg = {
              msg: res,
              alert: 'alert-success'
            };
            _this46.dBtm = false;

            for (var i = 0; i < _this46.billDData.length; i++) {
              if (_this46.billDData[i]._id == _this46.invoicStatus.value.billId) {
                _this46.billDData[i].invoiceStatus = _this46.invoicStatus.value.status;
              }
            }

            setTimeout(function () {
              _this46.dMsg = null;
              _this46.msg = "";

              _this46.modalRef.hide();
            }, 2000);
          }, function (err) {
            _this46.dBtm = false;
            _this46.dMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "openUpdatepayment",
        value: function openUpdatepayment(template, billId) {
          this.modalRef = this.modalService.show(template);
          this.paymentForm.patchValue({
            billId: billId
          });
        }
      }, {
        key: "updatePayment1",
        value: function updatePayment1() {
          var _this47 = this;

          console.log("hello");
          this.deliveryService.updatepaymentMode(this.paymentForm.value).subscribe(function (data) {
            _this47.paymentForm.reset();

            _this47.dMsg = true;
            _this47.msg = "Payment approved successfully!";

            _this47.getMonthData();

            console.log(data);
            setTimeout(function () {
              _this47.dMsg = null;
              _this47.msg = "";

              _this47.getMonthData();

              _this47.modalRef.hide();
            }, 3500);
          }, function (err) {
            console.log("hello");
          });
        }
      }, {
        key: "upiPaymentData",
        value: function upiPaymentData(index, data) {
          var _this48 = this;

          console.log(data);
          this.billDData = this.daysData[index].list;
          this.selectedDay = index;
          var gpayData = data.list.filter(function (d) {
            return d.upiType === 'gpay';
          });
          var payTmData = data.list.filter(function (d) {
            return d.upiType === 'payTm';
          });
          var phonePay = data.list.filter(function (d) {
            return d.upiType === 'phonePay';
          });
          var gpay = 0;
          gpay = gpayData.reduce(function (accumulator, currentValue) {
            var v = _this48.cleanPrice(currentValue.billDetails.total);

            return accumulator + parseInt(v);
          }, 0);
          var ptpay = 0;
          ptpay = payTmData.reduce(function (accumulator, currentValue) {
            var v = _this48.cleanPrice(currentValue.billDetails.total);

            return accumulator + parseInt(v);
          }, 0);
          var phpay = 0;
          phpay = phonePay.reduce(function (accumulator, currentValue) {
            var v = _this48.cleanPrice(currentValue.billDetails.total);

            return accumulator + parseInt(v);
          }, 0);
          this.upiPaymmentArray.push(gpay);
          this.upiPaymmentArray.push(ptpay);
          this.upiPaymmentArray.push(phpay);
        }
      }]);

      return DealerDeliveryPgComponent;
    }();

    DealerDeliveryPgComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: _shared_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"]
      }, {
        type: _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_1__["DeliveryService"]
      }];
    };

    DealerDeliveryPgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-dealer-delivery-pg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dealer-delivery-pg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dealer-delivery-pg.component.scss */
      "./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.scss"))["default"]]
    })], DealerDeliveryPgComponent);
    /***/
  },

  /***/
  "./src/app/dealer-app/move-to-credit/move-to-credit.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/dealer-app/move-to-credit/move-to-credit.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDealerAppMoveToCreditMoveToCreditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div#filterSec {\n  background-color: #fff;\n  border-radius: 0 0 8px 8px;\n}\n\ndiv#filterSec h4 {\n  font-size: 15px;\n  font-weight: bold;\n  color: #aa0000;\n  margin: 20px 0 1px 0;\n}\n\ndiv.optionList {\n  margin: 5px 0;\n}\n\ndiv.optionList label {\n  width: 150px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  cursor: pointer;\n}\n\ndiv.optionList label input[type=radio] {\n  margin-right: 10px;\n}\n\nsection#deliverySec {\n  background-color: #ffffff;\n}\n\nsection#deliverySec h3 {\n  font-size: 22px;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\nsection#deliverySec p {\n  margin: 3px 0;\n}\n\ndiv#shipTrack i {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #E2E2E2;\n}\n\ndiv#shipTrack i.active {\n  background-color: #AA0000;\n}\n\ndiv#shipTrack span {\n  width: 130px;\n  border-top: #E2E2E2 solid 5px;\n}\n\n.shipTrack1 {\n  border-top: #AA0000 solid 5px !important;\n}\n\ndiv#shipTrack h3 {\n  color: #aa0000;\n  font-size: 18px;\n}\n\nfieldset {\n  border-radius: 5px;\n  padding: 8px;\n  margin: 10px 0;\n}\n\nfieldset legend {\n  font-size: 15px;\n  color: #AA0000;\n}\n\n.buttonClass {\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 15px;\n  cursor: pointer;\n  border: none;\n}\n\ndiv#shipTrack i {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #E2E2E2;\n}\n\ndiv#shipTrack i.active {\n  background-color: #AA0000;\n}\n\ndiv#shipTrack span {\n  width: 130px;\n  border-top: #E2E2E2 solid 5px;\n}\n\ndiv#shipTrack h3 {\n  color: #aa0000;\n  font-size: 18px;\n}\n\n.shipTrack2 {\n  border-top: none !important;\n}\n\n.setAlign {\n  text-align: center;\n}\n\n.line {\n  width: 100%;\n  background: blue;\n  margin: 50px 0;\n  height: 5px;\n}\n\n.top,\n.bottom {\n  display: flex;\n  flex-direction: row;\n}\n\n.bottom {\n  padding-left: 50px;\n}\n\n.top .top-element,\n.bottom .bottom-element {\n  padding: 0 25px;\n  position: relative;\n  padding-left: 0px;\n}\n\n.top-element:before,\n.bottom-element:before {\n  content: \"I\";\n  height: 20px;\n  width: 20px;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background: #C33900;\n  color: white;\n  position: absolute;\n  left: 0;\n}\n\n.top-element:before {\n  bottom: -63px;\n}\n\n.bottom-element:before {\n  top: -63px;\n}\n\n.top-element:after,\n.bottom-element:after {\n  content: \"\";\n  height: 10px;\n  width: 2px;\n  background: #8ACCC6;\n  position: absolute;\n}\n\n.top-element:after {\n  left: 10px;\n  bottom: -40px;\n}\n\n.bottom-element:after {\n  left: 10px;\n  top: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbGVyLWFwcC9tb3ZlLXRvLWNyZWRpdC9DOlxcVXNlcnNcXEFiaGlzaGVrLlNheGVuYTFcXERlc2t0b3BcXHByYWthc2hcXHNob2VkZWxpdmVyeUZyb250RW5kL3NyY1xcYXBwXFxkZWFsZXItYXBwXFxtb3ZlLXRvLWNyZWRpdFxcbW92ZS10by1jcmVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlYWxlci1hcHAvbW92ZS10by1jcmVkaXQvbW92ZS10by1jcmVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUF5QyxrQkFBQTtBQ0V6Qzs7QURBQTtFQUFzQix5QkFBQTtBQ0l0Qjs7QURGQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDS0Y7O0FERkE7RUFDRSxhQUFBO0FDS0Y7O0FERkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNLRjs7QURGQTtFQUF5Qix5QkFBQTtBQ016Qjs7QURKQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQ09GOztBREpBO0VBQ0Esd0NBQUE7QUNPQTs7QURKQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDT0Y7O0FESkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDT0Y7O0FESkE7RUFBa0IsZUFBQTtFQUFpQixjQUFBO0FDU25DOztBRFBBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1VBOztBRFJBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDV0E7O0FEUkE7RUFBeUIseUJBQUE7QUNZekI7O0FEVkE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNhQTs7QURWQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDYUE7O0FEVkE7RUFDQSwyQkFBQTtBQ2FBOztBRFRBO0VBQ0Esa0JBQUE7QUNZQTs7QUROQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDU0Y7O0FETkE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0FDU0Y7O0FETkE7RUFDRSxrQkFBQTtBQ1NGOztBRE5BOztFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDU0Y7O0FETkE7O0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDU0Y7O0FETkE7RUFDRSxhQUFBO0FDU0Y7O0FETkE7RUFDRSxVQUFBO0FDU0Y7O0FETkE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1NGOztBRE5BO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNTRjs7QUROQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9kZWFsZXItYXBwL21vdmUtdG8tY3JlZGl0L21vdmUtdG8tY3JlZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2I2ZpbHRlclNlYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcclxufVxyXG5cclxuZGl2I2ZpbHRlclNlYyBoNCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMTcwLDAsMCk7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMXB4IDA7XHJcbn1cclxuXHJcbmRpdi5vcHRpb25MaXN0IHtcclxuICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG5kaXYub3B0aW9uTGlzdCBsYWJlbCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5kaXYub3B0aW9uTGlzdCBsYWJlbCBpbnB1dFt0eXBlPXJhZGlvXSB7IG1hcmdpbi1yaWdodDogMTBweDsgfVxyXG5cclxuc2VjdGlvbiNkZWxpdmVyeVNlYyB7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cclxuXHJcbnNlY3Rpb24jZGVsaXZlcnlTZWMgaDMge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnNlY3Rpb24jZGVsaXZlcnlTZWMgcCB7XHJcbiAgbWFyZ2luOiAzcHggMDtcclxufVxyXG5cclxuZGl2I3NoaXBUcmFjayBpIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xyXG59XHJcblxyXG5kaXYjc2hpcFRyYWNrIGkuYWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDsgfVxyXG5cclxuZGl2I3NoaXBUcmFjayBzcGFuIHtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgYm9yZGVyLXRvcDogI0UyRTJFMiBzb2xpZCA1cHg7XHJcbn1cclxuXHJcbi5zaGlwVHJhY2sxIHtcclxuYm9yZGVyLXRvcDogI0FBMDAwMCBzb2xpZCA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuZGl2I3NoaXBUcmFjayBoMyB7XHJcbiAgY29sb3I6ICNhYTAwMDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuZmllbGRzZXQgbGVnZW5kIHsgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogI0FBMDAwMDsgfVxyXG5cclxuLmJ1dHRvbkNsYXNzIHtcclxuYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcclxuY29sb3I6ICNmZmZmZmY7XHJcbnBhZGRpbmc6IDNweCAxNXB4O1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbmJvcmRlcjogbm9uZTtcclxufVxyXG5kaXYjc2hpcFRyYWNrIGkge1xyXG53aWR0aDogMjBweDtcclxuaGVpZ2h0OiAyMHB4O1xyXG5ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xyXG59XHJcblxyXG5kaXYjc2hpcFRyYWNrIGkuYWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDsgfVxyXG5cclxuZGl2I3NoaXBUcmFjayBzcGFuIHtcclxud2lkdGg6IDEzMHB4O1xyXG5ib3JkZXItdG9wOiAjRTJFMkUyIHNvbGlkIDVweDtcclxufVxyXG5cclxuZGl2I3NoaXBUcmFjayBoMyB7XHJcbmNvbG9yOiAjYWEwMDAwO1xyXG5mb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5zaGlwVHJhY2syIHtcclxuYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLnNldEFsaWduIHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXIge1xyXG5cclxufVxyXG5cclxuLmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi50b3AsXHJcbi5ib3R0b20ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4udG9wIC50b3AtZWxlbWVudCxcclxuLmJvdHRvbSAuYm90dG9tLWVsZW1lbnQge1xyXG4gIHBhZGRpbmc6IDAgMjVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi50b3AtZWxlbWVudDpiZWZvcmUsXHJcbi5ib3R0b20tZWxlbWVudDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiSVwiO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNDMzM5MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4udG9wLWVsZW1lbnQ6YmVmb3JlIHtcclxuICBib3R0b206IC02M3B4O1xyXG59XHJcblxyXG4uYm90dG9tLWVsZW1lbnQ6YmVmb3JlIHtcclxuICB0b3A6IC02M3B4O1xyXG59XHJcblxyXG4udG9wLWVsZW1lbnQ6YWZ0ZXIsXHJcbi5ib3R0b20tZWxlbWVudDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjOEFDQ0M2O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnRvcC1lbGVtZW50OmFmdGVyIHtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIGJvdHRvbTogLTQwcHg7XHJcbn1cclxuXHJcbi5ib3R0b20tZWxlbWVudDphZnRlciB7XHJcbiAgbGVmdDogMTBweDtcclxuICB0b3A6IC0yMHB4O1xyXG59XHJcbiIsImRpdiNmaWx0ZXJTZWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbn1cblxuZGl2I2ZpbHRlclNlYyBoNCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBtYXJnaW46IDIwcHggMCAxcHggMDtcbn1cblxuZGl2Lm9wdGlvbkxpc3Qge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG5kaXYub3B0aW9uTGlzdCBsYWJlbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5vcHRpb25MaXN0IGxhYmVsIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5zZWN0aW9uI2RlbGl2ZXJ5U2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBoMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBwIHtcbiAgbWFyZ2luOiAzcHggMDtcbn1cblxuZGl2I3NoaXBUcmFjayBpIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UyRTJFMjtcbn1cblxuZGl2I3NoaXBUcmFjayBpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG59XG5cbmRpdiNzaGlwVHJhY2sgc3BhbiB7XG4gIHdpZHRoOiAxMzBweDtcbiAgYm9yZGVyLXRvcDogI0UyRTJFMiBzb2xpZCA1cHg7XG59XG5cbi5zaGlwVHJhY2sxIHtcbiAgYm9yZGVyLXRvcDogI0FBMDAwMCBzb2xpZCA1cHggIWltcG9ydGFudDtcbn1cblxuZGl2I3NoaXBUcmFjayBoMyB7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjQUEwMDAwO1xufVxuXG4uYnV0dG9uQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbn1cblxuZGl2I3NoaXBUcmFjayBzcGFuIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBib3JkZXItdG9wOiAjRTJFMkUyIHNvbGlkIDVweDtcbn1cblxuZGl2I3NoaXBUcmFjayBoMyB7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaGlwVHJhY2syIHtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2V0QWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIG1hcmdpbjogNTBweCAwO1xuICBoZWlnaHQ6IDVweDtcbn1cblxuLnRvcCxcbi5ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uYm90dG9tIHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4udG9wIC50b3AtZWxlbWVudCxcbi5ib3R0b20gLmJvdHRvbS1lbGVtZW50IHtcbiAgcGFkZGluZzogMCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4udG9wLWVsZW1lbnQ6YmVmb3JlLFxuLmJvdHRvbS1lbGVtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiSVwiO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNDMzM5MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG4udG9wLWVsZW1lbnQ6YmVmb3JlIHtcbiAgYm90dG9tOiAtNjNweDtcbn1cblxuLmJvdHRvbS1lbGVtZW50OmJlZm9yZSB7XG4gIHRvcDogLTYzcHg7XG59XG5cbi50b3AtZWxlbWVudDphZnRlcixcbi5ib3R0b20tZWxlbWVudDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZDogIzhBQ0NDNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udG9wLWVsZW1lbnQ6YWZ0ZXIge1xuICBsZWZ0OiAxMHB4O1xuICBib3R0b206IC00MHB4O1xufVxuXG4uYm90dG9tLWVsZW1lbnQ6YWZ0ZXIge1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IC0yMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dealer-app/move-to-credit/move-to-credit.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/dealer-app/move-to-credit/move-to-credit.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MoveToCreditComponent */

  /***/
  function srcAppDealerAppMoveToCreditMoveToCreditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveToCreditComponent", function () {
      return MoveToCreditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../delivery/delivery.service */
    "./src/app/delivery/delivery.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/filter.service */
    "./src/app/shared/filter.service.ts");
    /* harmony import */


    var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../dashboard/dashboard.service */
    "./src/app/dashboard/dashboard.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/internal/Subject */
    "./node_modules/rxjs/internal/Subject.js");
    /* harmony import */


    var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    ;
    ;

    var MoveToCreditComponent = /*#__PURE__*/function () {
      function MoveToCreditComponent(formBuilder, fetch, modalService, filterSrv, deliveryService) {
        var _this49 = this;

        _classCallCheck(this, MoveToCreditComponent);

        this.formBuilder = formBuilder;
        this.fetch = fetch;
        this.modalService = modalService;
        this.filterSrv = filterSrv;
        this.deliveryService = deliveryService;
        this.paid = true;
        this.dSubmit = false;
        this.dBtm = false;
        this.popBill = false;
        this.filter = true;
        this.currentMonth = 0;
        this.twoMonth = 0;
        this.threeMonth = 0;
        this.sixMonth = 0;
        this.ninthMonth = 0;
        this.selectWeek = 0;
        this.monthData = [];
        this.weekData = [];
        this.listSponsor = [];
        this.listPayee = [];
        this.monthDataDh = [];
        this.monthDataSp = [];
        this.monthDataPy = [];
        this.monthDataUp = [];
        this.spTotal = 0;
        this.pyTotal = 0;
        this.dashTotal = 0;
        this.upTotal = 0;
        this.col4Data = [];
        this.col3Data = [];
        this.productList = [];
        this.productChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loadingProduct = false;
        this.selectedProduct = [];
        this.cash = 0;
        this.netBanking = 0;
        this.card = 0;
        this.upi = 0;
        this.other = 0;
        this.dataResult = [];
        this.currentActiveTopTab = "";
        this.serverPath = this.fetch.serverPath;
        this.menuOptions = this.filterSrv.menuOptions;
        this.cOptions = this.filterSrv.cOptions;
        this.groupedData = [];
        this.productChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(900), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])()).subscribe(function (value) {
          console.log(value);
          _this49.productList = [];
          _this49.loadingProduct = true;

          _this49.fetch.getProductList({
            "name": value
          }).subscribe(function (data) {
            console.log(data);
            _this49.loadingProduct = false;
            _this49.productList = data;
          }, function (err) {});
        });
      }

      _createClass(MoveToCreditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.paymentForm = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            payMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.deliveryFrm = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            payMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.movetocredit = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.getMonthData();
          this.getProfileInfo();
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "openDelivery",
        value: function openDelivery(template, billId) {
          this.modalRef = this.modalService.show(template);
          console.log(this.profInfo);
          this.deliveryFrm.patchValue({
            billId: billId
          });
          console.log(this.deliveryFrm);
        }
      }, {
        key: "openMoveTocredit",
        value: function openMoveTocredit(template, billId) {
          this.modalRef = this.modalService.show(template);
          console.log(this.profInfo);
          this.movetocredit.patchValue({
            billId: billId
          });
        }
      }, {
        key: "openSponsor",
        value: function openSponsor(template, billId) {
          this.modalRef = this.modalService.show(template);
          this.billId = billId;
        }
      }, {
        key: "toggleFilter",
        value: function toggleFilter() {
          this.filter = !this.filter;
        }
      }, {
        key: "sltArea",
        value: function sltArea(area) {
          var _this50 = this;

          this.billDData = [];
          this.selectArea = area;
          this.selectWeek = null;
          this.selectSector = null;
          this.selectBrand = null;
          this.weekData = null;
          this.col3Data = [];
          this.col4Data = [];
          this.currentActiveTopTab = area;
          this.monthDataDh = [];
          console.log(this.filterSrv.monthFilter);
          this.filterSrv.monthFilter.forEach(function (mth) {
            _this50.monthDataDh.push(_this50.filterSrv.filterByDateCash(_this50.dataResult[area], new Date().getTime(), mth));
          });
          console.log(this.monthDataDh);
          this.monthData = [];
          this.daysData = [];
          this.monthData = this.monthDataDh;

          for (var i = 0; i < this.monthData.length; i++) {
            this.billDData = this.billDData.concat(this.monthData[i].list);
          }

          console.log(this.billDData);
        }
      }, {
        key: "sltMonth",
        value: function sltMonth(month) {
          this.selectMonth = month - 1;
        }
      }, {
        key: "sltWeek",
        value: function sltWeek(week) {
          this.selectWeek = week;
          console.log(this.weekData[week].list);

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            this.billData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billData);
          } else {
            this.billDData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billDData);
          }
        }
      }, {
        key: "getProfileInfo",
        value: function getProfileInfo() {
          var _this51 = this;

          this.fetch.getProfInfo().subscribe(function (res) {
            _this51.profInfo = res;
          }, function (err) {
            _this51.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "getMonthData",
        value: function getMonthData() {
          var _this52 = this;

          this.monthData = [];
          this.billDData = [];
          this.deliveryService.getAllDelivery().subscribe(function (res) {
            var data = res;
            _this52.paid = true;
            console.log(data);
            _this52.allData = data.filter(function (d) {
              return d.paymentMode !== "" && d.category === 'credit';
            });
            _this52.billDData = _this52.allData;

            _this52.unpaid();
          }, function (err) {
            _this52.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "unpaid",
        value: function unpaid() {
          var _this53 = this;

          this.paid = false;
          this.filter = true; //  this.billDData = [];
          // this.filterSrv.monthFilter.forEach(mth => {
          //   this.monthDataDh.push(this.filterSrv.filterByDateCash(this.allData, this.filterSrv.monthFilter[0], mth))
          // });

          console.log(this.allData); //this.allData = this.allData.filter((data: any) => data.payStatus === false);

          console.log(this.allData);
          this.monthDataDh = [];
          this.filterSrv.monthFilter.forEach(function (mth) {
            _this53.monthDataDh.push(_this53.filterSrv.filterByDateCash(_this53.allData, new Date().getTime(), mth));
          });
          console.log(this.monthDataDh);
          this.monthData = [];
          this.monthData = this.monthDataDh; // for (var i = 0; i < this.monthData.length; i++) {
          //   this.billDData =  this.billDData.concat(this.monthData[i].list);
          //   }
        }
      }, {
        key: "filterMonthsWeek",
        value: function filterMonthsWeek(month, index, data) {
          var _this54 = this;

          this.sltMonth(month);
          this.weekData = [];
          this.billData = [];
          this.daysData = [];
          var weekList = this.filterSrv.getWeeksStartAndEndInMonth(month, this.filterSrv.today.getMonth());
          console.log(weekList); // console.log(this.selectArea);
          //  console.log(this.monthDataDh);

          var filterData = [];

          if (this.paid) {
            filterData = this.dataResult[this.currentActiveTopTab];
          } else {
            filterData = this.allData;
          }

          weekList.forEach(function (e) {
            _this54.weekData.push(_this54.filterSrv.filterByBillDatecash(filterData, e.end.getTime(), e.start.getTime()));
          });
          console.log(this.weekData);
          this.billDData = this.monthData[index].list; // const setRange = [(month -1)*4, (((month -1)*4) + 4) ];
          // console.log(this.weekData);
          // let d = [];
          // for (let i=0; i < this.weekData.length; i++) {
          //   if (i>= setRange[0] && i<= setRange[1]) {
          //     d.push(this.weekData[i])
          //   }
          // }
          // this.weekData = d;

          console.log(this.billDData);
          this.selectWeek = null;
          this.selectSector = null;
          this.selectBrand = null;
          this.col3Data = [];
          this.col4Data = []; //console.log(this.weekData);
        }
      }, {
        key: "filterDays",
        value: function filterDays(month, data) {
          var _this55 = this;

          // console.log(month);
          this.sltMonth(month);
          this.daysData = [];
          this.selectWeek = month - 1; //console.log(data);
          // this.billDData = this.weekData[month].list;

          var daysList = this.filterSrv.getDaysStartAndEndInMonth(month, this.filterSrv.today.getMonth());
          console.log(daysList); // console.log(this.selectArea);

          daysList.forEach(function (e) {
            _this55.daysData.push(_this55.filterSrv.filterByBillDatecash(data, e.end.getTime(), e.start.getTime()));
          });
          this.billDData = this.weekData[month - 1].list;
          var setRange = [(month - 1) * 7, (month - 1) * 7 + 7];
          console.log(this.weekData);
          var d = [];

          for (var i = 0; i < this.daysData.length; i++) {
            if (i >= setRange[0] && i <= setRange[1]) {
              d.push(this.daysData[i]);
            }
          }

          this.daysData = d;
          console.log(this.daysData); // console.log(this.weekData);

          this.selectWeek = month - 1;
          this.selectSector = null;
          this.selectBrand = null;
          this.col3Data = [];
          this.col4Data = []; //console.log(this.weekData);
        }
      }, {
        key: "cleanPrice",
        value: function cleanPrice(amount) {
          return this.filterSrv.cleanPrice(amount);
        }
      }, {
        key: "showBill",
        value: function showBill(index) {
          this.popBill = !this.popBill;
          this.popId = index;
        }
      }, {
        key: "generateFilter",
        value: function generateFilter(data) {
          var _this56 = this;

          this.selectSector = null;
          this.col3Data = [];
          this.selectBrand = null;
          this.col4Data = [];
          console.log(data);

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(function (e) {
              var updateItem = _this56.col3Data.find(function (x) {
                return x.department === e.deportment;
              });

              if (!updateItem) _this56.col3Data.push({
                department: e.deportment,
                price: _this56.cleanPrice(e.total),
                userType: "department"
              });else {
                var index = _this56.col3Data.indexOf(updateItem);

                _this56.col3Data[index].price = _this56.col3Data[index].price + _this56.cleanPrice(e.total);
              }
            });
          } else {
            data.forEach(function (e) {
              var updateItem = _this56.col3Data.find(function (x) {
                return x.department === e.billDetails.deportment;
              });

              if (!updateItem) _this56.col3Data.push({
                department: e.billDetails.deportment,
                price: _this56.cleanPrice(e.billDetails.total),
                userType: "department"
              });else {
                var index = _this56.col3Data.indexOf(updateItem);

                _this56.col3Data[index].price = _this56.col3Data[index].price + _this56.cleanPrice(e.billDetails.total);
              }
            });
          }
        }
      }, {
        key: "generateBFilter",
        value: function generateBFilter(data) {
          var _this57 = this;

          this.selectBrand = null;
          this.col4Data = [];
          console.log(this.selectArea);

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(function (e) {
              var updateItem = _this57.col4Data.find(function (x) {
                return x.brand === e.title;
              });

              if (!updateItem) _this57.col4Data.push({
                brand: e.title,
                price: _this57.cleanPrice(e.total),
                userType: "brand"
              });else {
                var index = _this57.col4Data.indexOf(updateItem);

                _this57.col4Data[index].price = _this57.col4Data[index].price + _this57.cleanPrice(e.total);
              }
            });
          } else {
            data.forEach(function (e) {
              var updateItem = _this57.col4Data.find(function (x) {
                return x.brand === e.billDetails.title;
              });

              if (!updateItem) _this57.col4Data.push({
                brand: e.billDetails.title,
                price: _this57.cleanPrice(e.billDetails.total),
                userType: "brand"
              });else {
                var index = _this57.col4Data.indexOf(updateItem);

                _this57.col4Data[index].price = _this57.col4Data[index].price + _this57.cleanPrice(e.billDetails.total);
              }
            });
          }
        }
      }, {
        key: "searchProductName",
        value: function searchProductName(event) {
          if (event.target.value.length > 2) {
            this.loadingProduct = true;
            this.productChange.next(event.target.value);
          }
        }
      }, {
        key: "NewDealerBill",
        value: function NewDealerBill() {
          var _this58 = this;

          this.selectedProduct.forEach(function (data, index) {
            if (_this58.selectedProduct[index].quantity == undefined) {
              _this58.selectedProduct[index]["quantity"] = 1;
            }
          });
          this.fetch.createNewInvoice({
            "selectedProducts": this.selectedProduct
          }).subscribe(function (res) {
            _this58.dMsg = {
              msg: res,
              alert: 'alert-success'
            };
            _this58.selectedProduct = [];
            _this58.dBtm = false;
            setTimeout(function () {
              console.log(res);

              _this58.deliveryService.generateImageNewInvoice(res).subscribe(function () {});

              _this58.modalRef.hide();
            }, 2800);
          }, function (err) {
            _this58.dBtm = false;
            _this58.dMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "setQuantity",
        value: function setQuantity(val, index) {
          this.selectedProduct[index]['quantity'] = parseInt(val);
          console.log(this.selectedProduct);
        }
      }, {
        key: "addDelivery",
        value: function addDelivery() {
          var _this59 = this;

          this.dBtm = false;
          var requestData = this.deliveryFrm.value;
          requestData['category'] = 'delivery';
          console.log(requestData);
          this.deliveryService.moveToDelivery(requestData).subscribe(function (res) {
            _this59.dMsg = {
              msg: 'Updated Successfully',
              alert: 'alert-success'
            };
            _this59.dBtm = true;
            setTimeout(function () {
              _this59.dBtm = false;

              _this59.modalRef.hide();
            }, 2800);
          }, function (err) {
            _this59.dBtm = true;
            _this59.dMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "moveToCredit1",
        value: function moveToCredit1() {
          var _this60 = this;

          this.dBtm = false;
          var requestData = this.movetocredit.value;
          requestData['category'] = 'credit';
          requestData['payStatus'] = false;
          console.log(requestData);
          this.fetch.updateCreditInvoice(requestData).subscribe(function (res) {
            _this60.dMsg = {
              msg: 'Updated Successfully',
              alert: 'alert-success'
            };
            _this60.dBtm = true;
            setTimeout(function () {
              _this60.dBtm = false;

              _this60.modalRef.hide();
            }, 2800);
          }, function (err) {
            _this60.dBtm = true;
            _this60.dMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "openUpdatepayment",
        value: function openUpdatepayment(template, billId) {
          this.modalRef = this.modalService.show(template);
          this.paymentForm.patchValue({
            billId: billId
          });
        }
      }, {
        key: "updatePayment",
        value: function updatePayment() {
          var _this61 = this;

          console.log("hello");
          this.deliveryService.updatepaymentMode(this.paymentForm.value).subscribe(function (data) {
            _this61.paymentForm.reset();

            _this61.dMsg = true;
            _this61.msg = "Payment approved successfully!";
            console.log(data);
            setTimeout(function () {
              _this61.dMsg = null;
              _this61.msg = "";

              _this61.modalRef.hide();
            }, 3500);
          }, function (err) {
            console.log("hello");
          });
        }
      }, {
        key: "dFrm",
        get: function get() {
          return this.deliveryFrm.controls;
        }
      }]);

      return MoveToCreditComponent;
    }();

    MoveToCreditComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"]
      }, {
        type: _shared_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"]
      }, {
        type: _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_1__["DeliveryService"]
      }];
    };

    MoveToCreditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
      selector: 'app-move-to-credit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./move-to-credit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/move-to-credit/move-to-credit.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./move-to-credit.component.scss */
      "./src/app/dealer-app/move-to-credit/move-to-credit.component.scss"))["default"]]
    })], MoveToCreditComponent);
    /***/
  }
}]);
//# sourceMappingURL=dealer-app-dealer-app-module-es5.js.map