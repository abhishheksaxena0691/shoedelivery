function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js ***!
    \******************************************************************************/

  /*! exports provided: add, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, defineLocale, enGbLocale, endOf, esDoLocale, esLocale, esUsLocale, etLocale, fiLocale, formatDate, frLocale, getDay, getFirstDayOfMonth, getFullYear, getLocale, getMonth, getSetGlobalLocale, glLocale, heLocale, hiLocale, hrLocale, huLocale, idLocale, isAfter, isArray, isBefore, isDate, isDateValid, isDisabledDay, isFirstDayOfWeek, isSame, isSameDay, isSameMonth, isSameYear, itLocale, jaLocale, kaLocale, kkLocale, koLocale, listLocales, ltLocale, lvLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, parseDate, plLocale, ptBrLocale, roLocale, ruLocale, setFullDate, shiftDate, skLocale, slLocale, sqLocale, startOf, subtract, svLocale, thBeLocale, thLocale, trLocale, ukLocale, updateLocale, utcAsLocal, viLocale, zhCnLocale, ɵa */

  /***/
  function node_modulesNgxBootstrapChronosFesm2015NgxBootstrapChronosJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "add", function () {
      return add;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "arLocale", function () {
      return arLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bgLocale", function () {
      return bgLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "caLocale", function () {
      return caLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "csLocale", function () {
      return csLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "daLocale", function () {
      return daLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deLocale", function () {
      return deLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defineLocale", function () {
      return defineLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "enGbLocale", function () {
      return enGbLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "endOf", function () {
      return endOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "esDoLocale", function () {
      return esDoLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "esLocale", function () {
      return esLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "esUsLocale", function () {
      return esUsLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "etLocale", function () {
      return etLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fiLocale", function () {
      return fiLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatDate", function () {
      return formatDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "frLocale", function () {
      return frLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getDay", function () {
      return getDay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFirstDayOfMonth", function () {
      return getFirstDayOfMonth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFullYear", function () {
      return _getFullYear;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getLocale", function () {
      return getLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMonth", function () {
      return getMonth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function () {
      return getSetGlobalLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "glLocale", function () {
      return glLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "heLocale", function () {
      return heLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hiLocale", function () {
      return hiLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hrLocale", function () {
      return hrLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "huLocale", function () {
      return huLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "idLocale", function () {
      return idLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isAfter", function () {
      return isAfter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isArray", function () {
      return isArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isBefore", function () {
      return isBefore;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDate", function () {
      return isDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDateValid", function () {
      return isDateValid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDisabledDay", function () {
      return isDisabledDay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isFirstDayOfWeek", function () {
      return isFirstDayOfWeek;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isSame", function () {
      return isSame;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isSameDay", function () {
      return isSameDay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isSameMonth", function () {
      return isSameMonth;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isSameYear", function () {
      return isSameYear;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "itLocale", function () {
      return itLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jaLocale", function () {
      return jaLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "kaLocale", function () {
      return kaLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "kkLocale", function () {
      return kkLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "koLocale", function () {
      return koLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "listLocales", function () {
      return listLocales;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ltLocale", function () {
      return ltLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lvLocale", function () {
      return lvLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mnLocale", function () {
      return mnLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nbLocale", function () {
      return nbLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nlBeLocale", function () {
      return nlBeLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "nlLocale", function () {
      return nlLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parseDate", function () {
      return parseDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "plLocale", function () {
      return plLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ptBrLocale", function () {
      return ptBrLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "roLocale", function () {
      return roLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ruLocale", function () {
      return ruLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setFullDate", function () {
      return setFullDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "shiftDate", function () {
      return shiftDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "skLocale", function () {
      return skLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slLocale", function () {
      return slLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sqLocale", function () {
      return sqLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startOf", function () {
      return startOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "subtract", function () {
      return subtract;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "svLocale", function () {
      return svLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "thBeLocale", function () {
      return thBeLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "thLocale", function () {
      return thLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "trLocale", function () {
      return trLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ukLocale", function () {
      return ukLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateLocale", function () {
      return updateLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "utcAsLocal", function () {
      return utcAsLocal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "viLocale", function () {
      return viLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "zhCnLocale", function () {
      return zhCnLocale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return createDate;
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} n
     * @param {?} x
     * @return {?}
     */


    function mod(n, x) {
      return (n % x + x) % x;
    }
    /**
     * @param {?} num
     * @return {?}
     */


    function absFloor(num) {
      return num < 0 ? Math.ceil(num) || 0 : Math.floor(num);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} str
     * @return {?}
     */


    function isString(str) {
      return typeof str === 'string';
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isDate(value) {
      return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isBoolean(value) {
      return value === true || value === false;
    }
    /**
     * @param {?} date
     * @return {?}
     */


    function isDateValid(date) {
      return date && date.getTime && !isNaN(date.getTime());
    }
    /**
     * @param {?} fn
     * @return {?}
     */


    function isFunction(fn) {
      return fn instanceof Function || Object.prototype.toString.call(fn) === '[object Function]';
    }
    /**
     * @param {?=} value
     * @return {?}
     */


    function isNumber(value) {
      return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
    }
    /**
     * @template T
     * @param {?=} input
     * @return {?}
     */


    function isArray(input) {
      return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }
    /**
     * @template T
     * @param {?} a
     * @param {?} b
     * @return {?}
     */


    function hasOwnProp(a
    /*object*/
    , b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }
    /**
     * @template T
     * @param {?} input
     * @return {?}
     */


    function isObject(input
    /*object*/
    ) {
      // IE8 will treat undefined and null as object if it wasn't for
      // input != null
      return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }
    /**
     * @param {?} obj
     * @return {?}
     */


    function isObjectEmpty(obj) {
      if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
      }
      /** @type {?} */


      var k;

      for (k in obj) {
        if (obj.hasOwnProperty(k)) {
          return false;
        }
      }

      return true;
    }
    /**
     * @param {?} input
     * @return {?}
     */


    function isUndefined(input) {
      return input === void 0;
    }
    /**
     * @template T
     * @param {?} argumentForCoercion
     * @return {?}
     */


    function toInt(argumentForCoercion) {
      /** @type {?} */
      var coercedNumber = +argumentForCoercion;
      /** @type {?} */

      var value = 0;

      if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
      }

      return value;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var aliases = {};
    /** @type {?} */

    var _mapUnits = {
      date: 'day',
      hour: 'hours',
      minute: 'minutes',
      second: 'seconds',
      millisecond: 'milliseconds'
    };
    /**
     * @param {?} unit
     * @param {?} shorthand
     * @return {?}
     */

    function addUnitAlias(unit, shorthand) {
      /** @type {?} */
      var lowerCase = unit.toLowerCase();
      /** @type {?} */

      var _unit = unit;

      if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
      }

      aliases[lowerCase] = aliases["".concat(lowerCase, "s")] = aliases[shorthand] = _unit;
    }
    /**
     * @param {?} units
     * @return {?}
     */


    function normalizeUnits(units) {
      return isString(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }
    /**
     * @param {?} inputObject
     * @return {?}
     */


    function normalizeObjectUnits(inputObject) {
      /** @type {?} */
      var normalizedInput = {};
      /** @type {?} */

      var normalizedProp;
      /** @type {?} */

      var prop;

      for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);

          if (normalizedProp) {
            normalizedInput[normalizedProp] = inputObject[prop];
          }
        }
      }

      return (
        /** @type {?} */
        normalizedInput
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // place in new Date([array])

    /** @type {?} */


    var YEAR = 0;
    /** @type {?} */

    var MONTH = 1;
    /** @type {?} */

    var DATE = 2;
    /** @type {?} */

    var HOUR = 3;
    /** @type {?} */

    var MINUTE = 4;
    /** @type {?} */

    var SECOND = 5;
    /** @type {?} */

    var MILLISECOND = 6;
    /** @type {?} */

    var WEEK = 7;
    /** @type {?} */

    var WEEKDAY = 8;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} num
     * @param {?} targetLength
     * @param {?=} forceSign
     * @return {?}
     */

    function zeroFill(num, targetLength, forceSign) {
      /** @type {?} */
      var absNumber = "".concat(Math.abs(num));
      /** @type {?} */

      var zerosToFill = targetLength - absNumber.length;
      /** @type {?} */

      var sign = num >= 0;
      /** @type {?} */

      var _sign = sign ? forceSign ? '+' : '' : '-'; // todo: this is crazy slow

      /** @type {?} */


      var _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);

      return _sign + _zeros + absNumber;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var formatFunctions = {};
    /** @type {?} */

    var formatTokenFunctions = {}; // tslint:disable-next-line

    /** @type {?} */

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g; // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }

    /**
     * @param {?} token
     * @param {?} padded
     * @param {?} ordinal
     * @param {?} callback
     * @return {?}
     */

    function addFormatToken(token, padded, ordinal, callback) {
      if (token) {
        formatTokenFunctions[token] = callback;
      }

      if (padded) {
        formatTokenFunctions[padded[0]] =
        /**
        * @return {?}
        */
        function () {
          return zeroFill(callback.apply(null, arguments), padded[1], padded[2]);
        };
      }

      if (ordinal) {
        formatTokenFunctions[ordinal] =
        /**
        * @param {?} date
        * @param {?} opts
        * @return {?}
        */
        function (date, opts) {
          return opts.locale.ordinal(callback.apply(null, arguments), token);
        };
      }
    }
    /**
     * @param {?} format
     * @return {?}
     */


    function makeFormatFunction(format) {
      /** @type {?} */
      var array = format.match(formattingTokens);
      /** @type {?} */

      var length = array.length;
      /** @type {?} */

      var formatArr = new Array(length);

      for (var i = 0; i < length; i++) {
        formatArr[i] = formatTokenFunctions[array[i]] ? formatTokenFunctions[array[i]] : removeFormattingTokens(array[i]);
      }

      return (
        /**
        * @param {?} date
        * @param {?} locale
        * @param {?} isUTC
        * @param {?=} offset
        * @return {?}
        */
        function (date, locale, isUTC) {
          var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

          /** @type {?} */
          var output = '';

          for (var j = 0; j < length; j++) {
            output += isFunction(formatArr[j]) ?
            /** @type {?} */
            formatArr[j].call(null, date, {
              format: format,
              locale: locale,
              isUTC: isUTC,
              offset: offset
            }) : formatArr[j];
          }

          return output;
        }
      );
    }
    /**
     * @param {?} input
     * @return {?}
     */


    function removeFormattingTokens(input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
      }

      return input.replace(/\\/g, '');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?=} y
     * @param {?=} m
     * @param {?=} d
     * @return {?}
     */


    function createUTCDate(y, m, d) {
      /** @type {?} */
      var date = new Date(Date.UTC.apply(null, arguments)); // the Date.UTC function remaps years 0-99 to 1900-1999

      if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
      }

      return date;
    }
    /**
     * @param {?=} y
     * @param {?=} m
     * @param {?=} d
     * @param {?=} h
     * @param {?=} M
     * @param {?=} s
     * @param {?=} ms
     * @return {?}
     */


    function createDate(y) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var M = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var ms = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

      /** @type {?} */
      var date = new Date(y, m, d, h, M, s, ms); // the date constructor remaps years 0-99 to 1900-1999

      if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
      }

      return date;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getHours(date) {
      var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return isUTC ? date.getUTCHours() : date.getHours();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getMinutes(date) {
      var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return isUTC ? date.getUTCMinutes() : date.getMinutes();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getSeconds(date) {
      var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return isUTC ? date.getUTCSeconds() : date.getSeconds();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getMilliseconds(date) {
      var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
    }
    /**
     * @param {?} date
     * @return {?}
     */


    function getTime(date) {
      return date.getTime();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getDay(date) {
      var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return isUTC ? date.getUTCDay() : date.getDay();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getDate(date) {
      var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return isUTC ? date.getUTCDate() : date.getDate();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getMonth(date) {
      var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return isUTC ? date.getUTCMonth() : date.getMonth();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function _getFullYear(date) {
      var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return isUTC ? date.getUTCFullYear() : date.getFullYear();
    }
    /**
     * @param {?} date
     * @return {?}
     */


    function getUnixTime(date) {
      return Math.floor(date.valueOf() / 1000);
    }
    /**
     * @param {?} date
     * @return {?}
     */


    function unix(date) {
      return Math.floor(date.valueOf() / 1000);
    }
    /**
     * @param {?} date
     * @return {?}
     */


    function getFirstDayOfMonth(date) {
      return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
    }
    /**
     * @param {?} date
     * @return {?}
     */


    function daysInMonth(date) {
      return _daysInMonth(date.getFullYear(), date.getMonth());
    }
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */


    function _daysInMonth(year, month) {
      return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }
    /**
     * @param {?} date
     * @param {?} firstDayOfWeek
     * @return {?}
     */


    function isFirstDayOfWeek(date, firstDayOfWeek) {
      return date.getDay() === firstDayOfWeek;
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */


    function isSameMonth(date1, date2) {
      if (!date1 || !date2) {
        return false;
      }

      return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */


    function isSameYear(date1, date2) {
      if (!date1 || !date2) {
        return false;
      }

      return _getFullYear(date1) === _getFullYear(date2);
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */


    function isSameDay(date1, date2) {
      if (!date1 || !date2) {
        return false;
      }

      return isSameYear(date1, date2) && isSameMonth(date1, date2) && getDate(date1) === getDate(date2);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var match1 = /\d/; //       0 - 9

    /** @type {?} */

    var match2 = /\d\d/; //      00 - 99

    /** @type {?} */

    var match3 = /\d{3}/; //     000 - 999

    /** @type {?} */

    var match4 = /\d{4}/; //    0000 - 9999

    /** @type {?} */

    var match6 = /[+-]?\d{6}/; // -999999 - 999999

    /** @type {?} */

    var match1to2 = /\d\d?/; //       0 - 99

    /** @type {?} */

    var match3to4 = /\d\d\d\d?/; //     999 - 9999

    /** @type {?} */

    var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

    /** @type {?} */

    var match1to3 = /\d{1,3}/; //       0 - 999

    /** @type {?} */

    var match1to4 = /\d{1,4}/; //       0 - 9999

    /** @type {?} */

    var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

    /** @type {?} */

    var matchUnsigned = /\d+/; //       0 - inf

    /** @type {?} */

    var matchSigned = /[+-]?\d+/; //    -inf - inf

    /** @type {?} */

    var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

    /** @type {?} */

    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    /** @type {?} */

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    // tslint:disable-next-line

    /** @type {?} */

    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    /** @type {?} */

    var regexes = {};
    /**
     * @param {?} token
     * @param {?} regex
     * @param {?=} strictRegex
     * @return {?}
     */

    function addRegexToken(token, regex, strictRegex) {
      if (isFunction(regex)) {
        regexes[token] = regex;
        return;
      }

      regexes[token] =
      /**
      * @param {?} isStrict
      * @param {?} locale
      * @return {?}
      */
      function (isStrict, locale) {
        return isStrict && strictRegex ? strictRegex : regex;
      };
    }
    /**
     * @param {?} token
     * @param {?} locale
     * @return {?}
     */


    function getParseRegexForToken(token, locale) {
      /** @type {?} */
      var _strict = false;

      if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
      }

      return regexes[token](_strict, locale);
    } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript

    /**
     * @param {?} str
     * @return {?}
     */


    function unescapeFormat(str) {
      // tslint:disable-next-line
      return regexEscape(str.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      /**
      * @param {?} matched
      * @param {?} p1
      * @param {?} p2
      * @param {?} p3
      * @param {?} p4
      * @return {?}
      */
      function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
      }));
    }
    /**
     * @param {?} str
     * @return {?}
     */


    function regexEscape(str) {
      return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var tokens = {};
    /**
     * @param {?} token
     * @param {?} callback
     * @return {?}
     */

    function addParseToken(token, callback) {
      /** @type {?} */
      var _token = isString(token) ? [token] : token;
      /** @type {?} */


      var func = callback;

      if (isNumber(callback)) {
        func =
        /**
        * @param {?} input
        * @param {?} array
        * @param {?} config
        * @return {?}
        */
        function func(input, array, config) {
          array[callback] = toInt(input);
          return config;
        };
      }

      if (isArray(_token) && isFunction(func)) {
        /** @type {?} */
        var i;

        for (i = 0; i < _token.length; i++) {
          tokens[_token[i]] = func;
        }
      }
    }
    /**
     * @param {?} token
     * @param {?} callback
     * @return {?}
     */


    function addWeekParseToken(token, callback) {
      addParseToken(token,
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @param {?} _token
      * @return {?}
      */
      function (input, array, config, _token) {
        config._w = config._w || {};
        return callback(input, config._w, config, _token);
      });
    }
    /**
     * @param {?} token
     * @param {?} input
     * @param {?} config
     * @return {?}
     */


    function addTimeToArrayFromToken(token, input, config) {
      if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
      }

      return config;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var priorities = {};
    /**
     * @param {?} unit
     * @param {?} priority
     * @return {?}
     */

    function addUnitPriority(unit, priority) {
      priorities[unit] = priority;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function initDayOfMonth() {
      // FORMATTING
      addFormatToken('D', ['DD', 2, false], 'Do',
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return getDate(date, opts.isUTC).toString(10);
      }); // ALIASES

      addUnitAlias('date', 'D'); // PRIOROITY

      addUnitPriority('date', 9); // PARSING

      addRegexToken('D', match1to2);
      addRegexToken('DD', match1to2, match2);
      addRegexToken('Do',
      /**
      * @param {?} isStrict
      * @param {?} locale
      * @return {?}
      */
      function (isStrict, locale) {
        return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
      });
      addParseToken(['D', 'DD'], DATE);
      addParseToken('Do',
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        array[DATE] = toInt(input.match(match1to2)[0]);
        return config;
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function defaultParsingFlags() {
      // We need to deep clone this object.
      return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
      };
    }
    /**
     * @param {?} config
     * @return {?}
     */


    function getParsingFlags(config) {
      if (config._pf == null) {
        config._pf = defaultParsingFlags();
      }

      return config._pf;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // FORMATTING

    /**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */


    function getYear(date, opts) {
      if (opts.locale.getFullYear) {
        return opts.locale.getFullYear(date, opts.isUTC).toString();
      }

      return _getFullYear(date, opts.isUTC).toString();
    }
    /**
     * @return {?}
     */


    function initYear() {
      addFormatToken('Y', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        /** @type {?} */
        var y = _getFullYear(date, opts.isUTC);

        return y <= 9999 ? y.toString(10) : "+".concat(y);
      });
      addFormatToken(null, ['YY', 2, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return (_getFullYear(date, opts.isUTC) % 100).toString(10);
      });
      addFormatToken(null, ['YYYY', 4, false], null, getYear);
      addFormatToken(null, ['YYYYY', 5, false], null, getYear);
      addFormatToken(null, ['YYYYYY', 6, true], null, getYear); // ALIASES

      addUnitAlias('year', 'y'); // PRIORITIES

      addUnitPriority('year', 1); // PARSING

      addRegexToken('Y', matchSigned);
      addRegexToken('YY', match1to2, match2);
      addRegexToken('YYYY', match1to4, match4);
      addRegexToken('YYYYY', match1to6, match6);
      addRegexToken('YYYYYY', match1to6, match6);
      addParseToken(['YYYYY', 'YYYYYY'], YEAR);
      addParseToken('YYYY',
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        array[YEAR] = input.length === 2 ? parseTwoDigitYear(input) : toInt(input);
        return config;
      });
      addParseToken('YY',
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        array[YEAR] = parseTwoDigitYear(input);
        return config;
      });
      addParseToken('Y',
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        array[YEAR] = parseInt(input, 10);
        return config;
      });
    }
    /**
     * @param {?} input
     * @return {?}
     */


    function parseTwoDigitYear(input) {
      return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    }
    /**
     * @param {?} year
     * @return {?}
     */


    function daysInYear(year) {
      return isLeapYear(year) ? 366 : 365;
    }
    /**
     * @param {?} year
     * @return {?}
     */


    function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // todo: this is duplicate, source in date-getters.ts

    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */


    function daysInMonth$1(year, month) {
      if (isNaN(year) || isNaN(month)) {
        return NaN;
      }
      /** @type {?} */


      var modMonth = mod(month, 12);
      /** @type {?} */

      var _year = year + (month - modMonth) / 12;

      return modMonth === 1 ? isLeapYear(_year) ? 29 : 28 : 31 - modMonth % 7 % 2;
    }
    /**
     * @return {?}
     */


    function initMonth() {
      // FORMATTING
      addFormatToken('M', ['MM', 2, false], 'Mo',
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return (getMonth(date, opts.isUTC) + 1).toString(10);
      });
      addFormatToken('MMM', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return opts.locale.monthsShort(date, opts.format, opts.isUTC);
      });
      addFormatToken('MMMM', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return opts.locale.months(date, opts.format, opts.isUTC);
      }); // ALIASES

      addUnitAlias('month', 'M'); // PRIORITY

      addUnitPriority('month', 8); // PARSING

      addRegexToken('M', match1to2);
      addRegexToken('MM', match1to2, match2);
      addRegexToken('MMM',
      /**
      * @param {?} isStrict
      * @param {?} locale
      * @return {?}
      */
      function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
      });
      addRegexToken('MMMM',
      /**
      * @param {?} isStrict
      * @param {?} locale
      * @return {?}
      */
      function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
      });
      addParseToken(['M', 'MM'],
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        array[MONTH] = toInt(input) - 1;
        return config;
      });
      addParseToken(['MMM', 'MMMM'],
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @param {?} token
      * @return {?}
      */
      function (input, array, config, token) {
        /** @type {?} */
        var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


        if (month != null) {
          array[MONTH] = month;
        } else {
          getParsingFlags(config).invalidMonth = !!input;
        }

        return config;
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var defaultTimeUnit = {
      year: 0,
      month: 0,
      day: 0,
      hour: 0,
      minute: 0,
      seconds: 0
    };
    /**
     * @param {?} date
     * @param {?} unit
     * @return {?}
     */

    function shiftDate(date, unit) {
      /** @type {?} */
      var _unit = Object.assign({}, defaultTimeUnit, unit);
      /** @type {?} */


      var year = date.getFullYear() + (_unit.year || 0);
      /** @type {?} */

      var month = date.getMonth() + (_unit.month || 0);
      /** @type {?} */

      var day = date.getDate() + (_unit.day || 0);

      if (_unit.month && !_unit.day) {
        day = Math.min(day, daysInMonth$1(year, month));
      }

      return createDate(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
    }
    /**
     * @param {?} date
     * @param {?} unit
     * @return {?}
     */


    function setFullDate(date, unit) {
      return createDate(getNum(date.getFullYear(), unit.year), getNum(date.getMonth(), unit.month), 1, // day, to avoid issue with wrong months selection at the end of current month (#5371)
      getNum(date.getHours(), unit.hour), getNum(date.getMinutes(), unit.minute), getNum(date.getSeconds(), unit.seconds), getNum(date.getMilliseconds(), unit.milliseconds));
    }
    /**
     * @param {?} def
     * @param {?=} num
     * @return {?}
     */


    function getNum(def, num) {
      return isNumber(num) ? num : def;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */


    function setFullYear(date, value, isUTC) {
      /** @type {?} */
      var _month = getMonth(date, isUTC);
      /** @type {?} */


      var _date = getDate(date, isUTC);
      /** @type {?} */


      var _year = _getFullYear(date, isUTC);

      if (isLeapYear(_year) && _month === 1 && _date === 29) {
        /** @type {?} */
        var _daysInMonth2 = daysInMonth$1(value, _month);

        isUTC ? date.setUTCFullYear(value, _month, _daysInMonth2) : date.setFullYear(value, _month, _daysInMonth2);
      }

      isUTC ? date.setUTCFullYear(value) : date.setFullYear(value);
      return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */


    function setMonth(date, value, isUTC) {
      /** @type {?} */
      var dayOfMonth = Math.min(getDate(date), daysInMonth$1(_getFullYear(date), value));
      isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
      return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */


    function setDay(date, value, isUTC) {
      isUTC ? date.setUTCDate(value) : date.setDate(value);
      return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */


    function setHours(date, value, isUTC) {
      isUTC ? date.setUTCHours(value) : date.setHours(value);
      return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */


    function setMinutes(date, value, isUTC) {
      isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
      return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */


    function setSeconds(date, value, isUTC) {
      isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
      return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */


    function setMilliseconds(date, value, isUTC) {
      isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
      return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @param {?=} isUTC
     * @return {?}
     */


    function setDate(date, value, isUTC) {
      isUTC ? date.setUTCDate(value) : date.setDate(value);
      return date;
    }
    /**
     * @param {?} date
     * @param {?} value
     * @return {?}
     */


    function setTime(date, value) {
      date.setTime(value);
      return date;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // fastest way to clone date
    // https://jsperf.com/clone-date-object2

    /**
     * @param {?} date
     * @return {?}
     */


    function cloneDate(date) {
      return new Date(date.getTime());
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} date
     * @param {?} unit
     * @param {?=} isUTC
     * @return {?}
     */


    function startOf(date, unit, isUTC) {
      /** @type {?} */
      var _date = cloneDate(date); // the following switch intentionally omits break keywords
      // to utilize falling through the cases.


      switch (unit) {
        case 'year':
          setMonth(_date, 0, isUTC);

        /* falls through */

        case 'quarter':
        case 'month':
          setDate(_date, 1, isUTC);

        /* falls through */

        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
          setHours(_date, 0, isUTC);

        /* falls through */

        case 'hours':
          setMinutes(_date, 0, isUTC);

        /* falls through */

        case 'minutes':
          setSeconds(_date, 0, isUTC);

        /* falls through */

        case 'seconds':
          setMilliseconds(_date, 0, isUTC);
      } // weeks are a special case


      if (unit === 'week') {
        setLocaleDayOfWeek(_date, 0, {
          isUTC: isUTC
        });
      }

      if (unit === 'isoWeek') {
        setISODayOfWeek(_date, 1);
      } // quarters are also special


      if (unit === 'quarter') {
        setMonth(_date, Math.floor(getMonth(_date, isUTC) / 3) * 3, isUTC);
      }

      return _date;
    }
    /**
     * @param {?} date
     * @param {?} unit
     * @param {?=} isUTC
     * @return {?}
     */


    function endOf(date, unit, isUTC) {
      /** @type {?} */
      var _unit = unit; // 'date' is an alias for 'day', so it should be considered as such.

      if (_unit === 'date') {
        _unit = 'day';
      }
      /** @type {?} */


      var start = startOf(date, _unit, isUTC);
      /** @type {?} */

      var _step = add(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
      /** @type {?} */


      var res = subtract(_step, 1, 'milliseconds', isUTC);
      return res;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function initDayOfYear() {
      // FORMATTING
      addFormatToken('DDD', ['DDDD', 3, false], 'DDDo',
      /**
      * @param {?} date
      * @return {?}
      */
      function (date) {
        return getDayOfYear(date).toString(10);
      }); // ALIASES

      addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

      addUnitPriority('dayOfYear', 4);
      addRegexToken('DDD', match1to3);
      addRegexToken('DDDD', match3);
      addParseToken(['DDD', 'DDDD'],
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        config._dayOfYear = toInt(input);
        return config;
      });
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getDayOfYear(date, isUTC) {
      /** @type {?} */
      var date1 = +startOf(date, 'day', isUTC);
      /** @type {?} */

      var date2 = +startOf(date, 'year', isUTC);
      /** @type {?} */

      var someDate = date1 - date2;
      /** @type {?} */

      var oneDay = 1000 * 60 * 60 * 24;
      return Math.round(someDate / oneDay) + 1;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @return {?}
     */


    function setDayOfYear(date, input) {
      /** @type {?} */
      var dayOfYear = getDayOfYear(date);
      return add(date, input - dayOfYear, 'day');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} year
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */


    function firstWeekOffset(year, dow, doy) {
      // first-week day -- which january is always in the first week (4 for iso, 1 for other)

      /** @type {?} */
      var fwd = dow - doy + 7; // first-week day local weekday -- which local weekday is fwd

      /** @type {?} */

      var fwdlw = (createUTCDate(year, 0, fwd).getUTCDay() - dow + 7) % 7;
      return -fwdlw + fwd - 1;
    } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday

    /**
     * @param {?} year
     * @param {?} week
     * @param {?} weekday
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */


    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
      /** @type {?} */
      var localWeekday = (7 + weekday - dow) % 7;
      /** @type {?} */

      var weekOffset = firstWeekOffset(year, dow, doy);
      /** @type {?} */

      var dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
      /** @type {?} */

      var resYear;
      /** @type {?} */

      var resDayOfYear;

      if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
      } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
      } else {
        resYear = year;
        resDayOfYear = dayOfYear;
      }

      return {
        year: resYear,
        dayOfYear: resDayOfYear
      };
    }
    /**
     * @param {?} date
     * @param {?} dow
     * @param {?} doy
     * @param {?=} isUTC
     * @return {?}
     */


    function weekOfYear(date, dow, doy, isUTC) {
      /** @type {?} */
      var weekOffset = firstWeekOffset(_getFullYear(date, isUTC), dow, doy);
      /** @type {?} */

      var week = Math.floor((getDayOfYear(date, isUTC) - weekOffset - 1) / 7) + 1;
      /** @type {?} */

      var resWeek;
      /** @type {?} */

      var resYear;

      if (week < 1) {
        resYear = _getFullYear(date, isUTC) - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
      } else if (week > weeksInYear(_getFullYear(date, isUTC), dow, doy)) {
        resWeek = week - weeksInYear(_getFullYear(date, isUTC), dow, doy);
        resYear = _getFullYear(date, isUTC) + 1;
      } else {
        resYear = _getFullYear(date, isUTC);
        resWeek = week;
      }

      return {
        week: resWeek,
        year: resYear
      };
    }
    /**
     * @param {?} year
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */


    function weeksInYear(year, dow, doy) {
      /** @type {?} */
      var weekOffset = firstWeekOffset(year, dow, doy);
      /** @type {?} */

      var weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
      return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function LocaleOptionsFormat() {}

    if (false) {}
    /** @type {?} */


    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    /** @type {?} */

    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    /** @type {?} */

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    /** @type {?} */

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    /** @type {?} */

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    /** @type {?} */

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    /** @type {?} */

    var defaultLongDateFormat = {
      LTS: 'h:mm:ss A',
      LT: 'h:mm A',
      L: 'MM/DD/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY h:mm A',
      LLLL: 'dddd, MMMM D, YYYY h:mm A'
    };
    /** @type {?} */

    var defaultOrdinal = '%d';
    /** @type {?} */

    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
    /** @type {?} */

    var defaultMonthsShortRegex = matchWord;
    /** @type {?} */

    var defaultMonthsRegex = matchWord;
    /**
     * @record
     */

    function LocaleData() {}

    if (false) {}

    var Locale = /*#__PURE__*/function () {
      /**
       * @param {?} config
       */
      function Locale(config) {
        _classCallCheck(this, Locale);

        if (!!config) {
          this.set(config);
        }
      }
      /**
       * @param {?} config
       * @return {?}
       */


      _createClass(Locale, [{
        key: "set",
        value: function set(config) {
          /** @type {?} */
          var confKey;

          for (confKey in config) {
            if (!config.hasOwnProperty(confKey)) {
              continue;
            }
            /** @type {?} */


            var prop = config[
            /** @type {?} */
            confKey];
            /** @type {?} */

            var key =
            /** @type {?} */
            isFunction(prop) ? confKey : "_".concat(confKey);
            this[key] =
            /** @type {?} */
            prop;
          }

          this._config = config;
        }
        /**
         * @param {?} key
         * @param {?} date
         * @param {?} now
         * @return {?}
         */

      }, {
        key: "calendar",
        value: function calendar(key, date, now) {
          /** @type {?} */
          var output = this._calendar[key] || this._calendar.sameElse;
          return isFunction(output) ? output.call(null, date, now) : output;
        }
        /**
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "longDateFormat",
        value: function longDateFormat(key) {
          /** @type {?} */
          var format = this._longDateFormat[key];
          /** @type {?} */

          var formatUpper = this._longDateFormat[key.toUpperCase()];

          if (format || !formatUpper) {
            return format;
          }

          this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g,
          /**
          * @param {?} val
          * @return {?}
          */
          function (val) {
            return val.slice(1);
          });
          return this._longDateFormat[key];
        }
        /**
         * @return {?}
         */

      }, {
        key: "ordinal",

        /**
         * @param {?} num
         * @param {?=} token
         * @return {?}
         */
        value: function ordinal(num, token) {
          return this._ordinal.replace('%d', num.toString(10));
        }
        /**
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "preparse",
        value: function preparse(str) {
          return str;
        }
        /**
         * @param {?} date
         * @param {?=} isUTC
         * @return {?}
         */

      }, {
        key: "getFullYear",
        value: function getFullYear(date) {
          var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          return _getFullYear(date, isUTC);
        }
        /**
         * @param {?} str
         * @return {?}
         */

      }, {
        key: "postformat",
        value: function postformat(str) {
          return str;
        }
        /**
         * @param {?} num
         * @param {?} withoutSuffix
         * @param {?} str
         * @param {?} isFuture
         * @return {?}
         */

      }, {
        key: "relativeTime",
        value: function relativeTime(num, withoutSuffix, str, isFuture) {
          /** @type {?} */
          var output = this._relativeTime[str];
          return isFunction(output) ? output(num, withoutSuffix, str, isFuture) : output.replace(/%d/i, num.toString(10));
        }
        /**
         * @param {?} diff
         * @param {?} output
         * @return {?}
         */

      }, {
        key: "pastFuture",
        value: function pastFuture(diff, output) {
          /** @type {?} */
          var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
          return isFunction(format) ? format(output) : format.replace(/%s/i, output);
        }
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */

      }, {
        key: "months",
        value: function months(date, format) {
          var isUTC = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (!date) {
            return isArray(this._months) ? this._months : this._months.standalone;
          }

          if (isArray(this._months)) {
            return this._months[getMonth(date, isUTC)];
          }
          /** @type {?} */


          var key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone';
          return this._months[key][getMonth(date, isUTC)];
        }
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */

      }, {
        key: "monthsShort",
        value: function monthsShort(date, format) {
          var isUTC = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (!date) {
            return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
          }

          if (isArray(this._monthsShort)) {
            return this._monthsShort[getMonth(date, isUTC)];
          }
          /** @type {?} */


          var key = MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone';
          return this._monthsShort[key][getMonth(date, isUTC)];
        }
        /**
         * @param {?} monthName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */

      }, {
        key: "monthsParse",
        value: function monthsParse(monthName, format, strict) {
          /** @type {?} */
          var date;
          /** @type {?} */

          var regex;

          if (this._monthsParseExact) {
            return this.handleMonthStrictParse(monthName, format, strict);
          }

          if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
          } // TODO: add sorting
          // Sorting makes sure if one month (or abbr) is a prefix of another
          // see sorting in computeMonthsParse

          /** @type {?} */


          var i;

          for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(Date.UTC(2000, i));

            if (strict && !this._longMonthsParse[i]) {
              /** @type {?} */
              var _months = this.months(date, '', true).replace('.', '');
              /** @type {?} */


              var _shortMonths = this.monthsShort(date, '', true).replace('.', '');

              this._longMonthsParse[i] = new RegExp("^".concat(_months, "$"), 'i');
              this._shortMonthsParse[i] = new RegExp("^".concat(_shortMonths, "$"), 'i');
            }

            if (!strict && !this._monthsParse[i]) {
              regex = "^".concat(this.months(date, '', true), "|^").concat(this.monthsShort(date, '', true));
              this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            } // test the regex


            if (strict && format === 'MMMM' &&
            /** @type {?} */
            this._longMonthsParse[i].test(monthName)) {
              return i;
            }

            if (strict && format === 'MMM' &&
            /** @type {?} */
            this._shortMonthsParse[i].test(monthName)) {
              return i;
            }

            if (!strict && this._monthsParse[i].test(monthName)) {
              return i;
            }
          }
        }
        /**
         * @param {?} isStrict
         * @return {?}
         */

      }, {
        key: "monthsRegex",
        value: function monthsRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
              this.computeMonthsParse();
            }

            if (isStrict) {
              return this._monthsStrictRegex;
            }

            return this._monthsRegex;
          }

          if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
          }

          return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
        }
        /**
         * @param {?} isStrict
         * @return {?}
         */

      }, {
        key: "monthsShortRegex",
        value: function monthsShortRegex(isStrict) {
          if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
              this.computeMonthsParse();
            }

            if (isStrict) {
              return this._monthsShortStrictRegex;
            }

            return this._monthsShortRegex;
          }

          if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
          }

          return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
        }
        /**
         * Week
         * @param {?} date
         * @param {?=} isUTC
         * @return {?}
         */

      }, {
        key: "week",
        value: function week(date, isUTC) {
          return weekOfYear(date, this._week.dow, this._week.doy, isUTC).week;
        }
        /**
         * @return {?}
         */

      }, {
        key: "firstDayOfWeek",
        value: function firstDayOfWeek() {
          return this._week.dow;
        }
        /**
         * @return {?}
         */

      }, {
        key: "firstDayOfYear",
        value: function firstDayOfYear() {
          return this._week.doy;
        }
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */

      }, {
        key: "weekdays",
        value: function weekdays(date, format, isUTC) {
          if (!date) {
            return isArray(this._weekdays) ? this._weekdays : this._weekdays.standalone;
          }

          if (isArray(this._weekdays)) {
            return this._weekdays[getDay(date, isUTC)];
          }
          /** @type {?} */


          var _key = this._weekdays.isFormat.test(format) ? 'format' : 'standalone';

          return this._weekdays[_key][getDay(date, isUTC)];
        }
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */

      }, {
        key: "weekdaysMin",
        value: function weekdaysMin(date, format, isUTC) {
          return date ? this._weekdaysMin[getDay(date, isUTC)] : this._weekdaysMin;
        }
        /**
         * @param {?=} date
         * @param {?=} format
         * @param {?=} isUTC
         * @return {?}
         */

      }, {
        key: "weekdaysShort",
        value: function weekdaysShort(date, format, isUTC) {
          return date ? this._weekdaysShort[getDay(date, isUTC)] : this._weekdaysShort;
        } // proto.weekdaysParse  =        localeWeekdaysParse;

        /**
         * @param {?=} weekdayName
         * @param {?=} format
         * @param {?=} strict
         * @return {?}
         */

      }, {
        key: "weekdaysParse",
        value: function weekdaysParse(weekdayName, format, strict) {
          /** @type {?} */
          var i;
          /** @type {?} */

          var regex;

          if (this._weekdaysParseExact) {
            return this.handleWeekStrictParse(weekdayName, format, strict);
          }

          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
          }

          for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // fix: here is the issue

            /** @type {?} */
            var date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);

            if (strict && !this._fullWeekdaysParse[i]) {
              this._fullWeekdaysParse[i] = new RegExp("^".concat(this.weekdays(date, '', true).replace('.', '\.?'), "$"), 'i');
              this._shortWeekdaysParse[i] = new RegExp("^".concat(this.weekdaysShort(date, '', true).replace('.', '\.?'), "$"), 'i');
              this._minWeekdaysParse[i] = new RegExp("^".concat(this.weekdaysMin(date, '', true).replace('.', '\.?'), "$"), 'i');
            }

            if (!this._weekdaysParse[i]) {
              regex = "^".concat(this.weekdays(date, '', true), "|^").concat(this.weekdaysShort(date, '', true), "|^").concat(this.weekdaysMin(date, '', true));
              this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }

            if (!isArray(this._fullWeekdaysParse) || !isArray(this._shortWeekdaysParse) || !isArray(this._minWeekdaysParse) || !isArray(this._weekdaysParse)) {
              return;
            } // test the regex


            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
              return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
              return i;
            }
          }
        } // proto.weekdaysRegex       =        weekdaysRegex;

        /**
         * @param {?} isStrict
         * @return {?}
         */

      }, {
        key: "weekdaysRegex",
        value: function weekdaysRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              this.computeWeekdaysParse();
            }

            if (isStrict) {
              return this._weekdaysStrictRegex;
            } else {
              return this._weekdaysRegex;
            }
          } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              this._weekdaysRegex = matchWord;
            }

            return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
          }
        } // proto.weekdaysShortRegex  =        weekdaysShortRegex;
        // proto.weekdaysMinRegex    =        weekdaysMinRegex;

        /**
         * @param {?=} isStrict
         * @return {?}
         */

      }, {
        key: "weekdaysShortRegex",
        value: function weekdaysShortRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              this.computeWeekdaysParse();
            }

            if (isStrict) {
              return this._weekdaysShortStrictRegex;
            } else {
              return this._weekdaysShortRegex;
            }
          } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
              this._weekdaysShortRegex = matchWord;
            }

            return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
          }
        }
        /**
         * @param {?=} isStrict
         * @return {?}
         */

      }, {
        key: "weekdaysMinRegex",
        value: function weekdaysMinRegex(isStrict) {
          if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
              this.computeWeekdaysParse();
            }

            if (isStrict) {
              return this._weekdaysMinStrictRegex;
            } else {
              return this._weekdaysMinRegex;
            }
          } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
              this._weekdaysMinRegex = matchWord;
            }

            return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
          }
        }
        /**
         * @param {?} input
         * @return {?}
         */

      }, {
        key: "isPM",
        value: function isPM(input) {
          // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
          // Using charAt should be more compatible.
          return input.toLowerCase().charAt(0) === 'p';
        }
        /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */

      }, {
        key: "meridiem",
        value: function meridiem(hours, minutes, isLower) {
          if (hours > 11) {
            return isLower ? 'pm' : 'PM';
          }

          return isLower ? 'am' : 'AM';
        }
        /**
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "formatLongDate",
        value: function formatLongDate(key) {
          this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
          /** @type {?} */

          var format = this._longDateFormat[key];
          /** @type {?} */

          var formatUpper = this._longDateFormat[key.toUpperCase()];

          if (format || !formatUpper) {
            return format;
          }

          this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g,
          /**
          * @param {?} val
          * @return {?}
          */
          function (val) {
            return val.slice(1);
          });
          return this._longDateFormat[key];
        }
        /**
         * @private
         * @param {?} monthName
         * @param {?} format
         * @param {?=} strict
         * @return {?}
         */

      }, {
        key: "handleMonthStrictParse",
        value: function handleMonthStrictParse(monthName, format, strict) {
          /** @type {?} */
          var llc = monthName.toLocaleLowerCase();
          /** @type {?} */

          var i;
          /** @type {?} */

          var ii;
          /** @type {?} */

          var mom;

          if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];

            for (i = 0; i < 12; ++i) {
              mom = new Date(2000, i);
              this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
              this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
          }

          if (strict) {
            if (format === 'MMM') {
              ii =
              /** @type {?} */
              this._shortMonthsParse.indexOf(llc);
              return ii !== -1 ? ii : null;
            }

            ii =
            /** @type {?} */
            this._longMonthsParse.indexOf(llc);
            return ii !== -1 ? ii : null;
          }

          if (format === 'MMM') {
            ii =
            /** @type {?} */
            this._shortMonthsParse.indexOf(llc);

            if (ii !== -1) {
              return ii;
            }

            ii =
            /** @type {?} */
            this._longMonthsParse.indexOf(llc);
            return ii !== -1 ? ii : null;
          }

          ii =
          /** @type {?} */
          this._longMonthsParse.indexOf(llc);

          if (ii !== -1) {
            return ii;
          }

          ii =
          /** @type {?} */
          this._shortMonthsParse.indexOf(llc);
          return ii !== -1 ? ii : null;
        }
        /**
         * @private
         * @param {?} weekdayName
         * @param {?} format
         * @param {?} strict
         * @return {?}
         */

      }, {
        key: "handleWeekStrictParse",
        value: function handleWeekStrictParse(weekdayName, format, strict) {
          /** @type {?} */
          var ii;
          /** @type {?} */

          var llc = weekdayName.toLocaleLowerCase();

          if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            /** @type {?} */

            var i;

            for (i = 0; i < 7; ++i) {
              /** @type {?} */
              var date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
              this._minWeekdaysParse[i] = this.weekdaysMin(date).toLocaleLowerCase();
              this._shortWeekdaysParse[i] = this.weekdaysShort(date).toLocaleLowerCase();
              this._weekdaysParse[i] = this.weekdays(date, '').toLocaleLowerCase();
            }
          }

          if (!isArray(this._weekdaysParse) || !isArray(this._shortWeekdaysParse) || !isArray(this._minWeekdaysParse)) {
            return;
          }

          if (strict) {
            if (format === 'dddd') {
              ii = this._weekdaysParse.indexOf(llc);
              return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
              ii = this._shortWeekdaysParse.indexOf(llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = this._minWeekdaysParse.indexOf(llc);
              return ii !== -1 ? ii : null;
            }
          } else {
            if (format === 'dddd') {
              ii = this._weekdaysParse.indexOf(llc);

              if (ii !== -1) {
                return ii;
              }

              ii = this._shortWeekdaysParse.indexOf(llc);

              if (ii !== -1) {
                return ii;
              }

              ii = this._minWeekdaysParse.indexOf(llc);
              return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
              ii = this._shortWeekdaysParse.indexOf(llc);

              if (ii !== -1) {
                return ii;
              }

              ii = this._weekdaysParse.indexOf(llc);

              if (ii !== -1) {
                return ii;
              }

              ii = this._minWeekdaysParse.indexOf(llc);
              return ii !== -1 ? ii : null;
            } else {
              ii = this._minWeekdaysParse.indexOf(llc);

              if (ii !== -1) {
                return ii;
              }

              ii = this._weekdaysParse.indexOf(llc);

              if (ii !== -1) {
                return ii;
              }

              ii = this._shortWeekdaysParse.indexOf(llc);
              return ii !== -1 ? ii : null;
            }
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "computeMonthsParse",
        value: function computeMonthsParse() {
          /** @type {?} */
          var shortPieces = [];
          /** @type {?} */

          var longPieces = [];
          /** @type {?} */

          var mixedPieces = [];
          /** @type {?} */

          var date;
          /** @type {?} */

          var i;

          for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(2000, i);
            shortPieces.push(this.monthsShort(date, ''));
            longPieces.push(this.months(date, ''));
            mixedPieces.push(this.months(date, ''));
            mixedPieces.push(this.monthsShort(date, ''));
          } // Sorting makes sure if one month (or abbr) is a prefix of another it
          // will match the longer piece.


          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);

          for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
          }

          for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
          }

          this._monthsRegex = new RegExp("^(".concat(mixedPieces.join('|'), ")"), 'i');
          this._monthsShortRegex = this._monthsRegex;
          this._monthsStrictRegex = new RegExp("^(".concat(longPieces.join('|'), ")"), 'i');
          this._monthsShortStrictRegex = new RegExp("^(".concat(shortPieces.join('|'), ")"), 'i');
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "computeWeekdaysParse",
        value: function computeWeekdaysParse() {
          /** @type {?} */
          var minPieces = [];
          /** @type {?} */

          var shortPieces = [];
          /** @type {?} */

          var longPieces = [];
          /** @type {?} */

          var mixedPieces = [];
          /** @type {?} */

          var i;

          for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // let mom = createUTC([2000, 1]).day(i);

            /** @type {?} */
            var date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
            /** @type {?} */

            var minp = this.weekdaysMin(date);
            /** @type {?} */

            var shortp = this.weekdaysShort(date);
            /** @type {?} */

            var longp = this.weekdays(date);
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
          } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
          // will match the longer piece.


          minPieces.sort(cmpLenRev);
          shortPieces.sort(cmpLenRev);
          longPieces.sort(cmpLenRev);
          mixedPieces.sort(cmpLenRev);

          for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
          }

          this._weekdaysRegex = new RegExp("^(".concat(mixedPieces.join('|'), ")"), 'i');
          this._weekdaysShortRegex = this._weekdaysRegex;
          this._weekdaysMinRegex = this._weekdaysRegex;
          this._weekdaysStrictRegex = new RegExp("^(".concat(longPieces.join('|'), ")"), 'i');
          this._weekdaysShortStrictRegex = new RegExp("^(".concat(shortPieces.join('|'), ")"), 'i');
          this._weekdaysMinStrictRegex = new RegExp("^(".concat(minPieces.join('|'), ")"), 'i');
        }
      }, {
        key: "invalidDate",
        get: function get() {
          return this._invalidDate;
        }
        /**
         * @param {?} val
         * @return {?}
         */
        ,
        set: function set(val) {
          this._invalidDate = val;
        }
      }]);

      return Locale;
    }();

    if (false) {}
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */


    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var defaultCalendar = {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var defaultInvalidDate = 'Invalid date';
    /** @type {?} */

    var defaultLocaleWeek = {
      dow: 0,
      // Sunday is the first day of the week.
      doy: 6 // The week that contains Jan 1st is the first week of the year.

    };
    /** @type {?} */

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    /** @type {?} */

    var defaultRelativeTime = {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    };
    /** @type {?} */

    var baseConfig = {
      calendar: defaultCalendar,
      longDateFormat: defaultLongDateFormat,
      invalidDate: defaultInvalidDate,
      ordinal: defaultOrdinal,
      dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
      relativeTime: defaultRelativeTime,
      months: defaultLocaleMonths,
      monthsShort: defaultLocaleMonthsShort,
      week: defaultLocaleWeek,
      weekdays: defaultLocaleWeekdays,
      weekdaysMin: defaultLocaleWeekdaysMin,
      weekdaysShort: defaultLocaleWeekdaysShort,
      meridiemParse: defaultLocaleMeridiemParse
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     * @param {?} array1
     * @param {?} array2
     * @param {?} dontConvert
     * @return {?}
     */

    function compareArrays(array1, array2, dontConvert) {
      /** @type {?} */
      var len = Math.min(array1.length, array2.length);
      /** @type {?} */

      var lengthDiff = Math.abs(array1.length - array2.length);
      /** @type {?} */

      var diffs = 0;
      /** @type {?} */

      var i;

      for (i = 0; i < len; i++) {
        if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
          diffs++;
        }
      }

      return diffs + lengthDiff;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // FORMATTING

    /**
     * @return {?}
     */


    function initWeek() {
      addFormatToken('w', ['ww', 2, false], 'wo',
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return getWeek(date, opts.locale).toString(10);
      });
      addFormatToken('W', ['WW', 2, false], 'Wo',
      /**
      * @param {?} date
      * @return {?}
      */
      function (date) {
        return getISOWeek(date).toString(10);
      }); // ALIASES

      addUnitAlias('week', 'w');
      addUnitAlias('isoWeek', 'W'); // PRIORITIES

      addUnitPriority('week', 5);
      addUnitPriority('isoWeek', 5); // PARSING

      addRegexToken('w', match1to2);
      addRegexToken('ww', match1to2, match2);
      addRegexToken('W', match1to2);
      addRegexToken('WW', match1to2, match2);
      addWeekParseToken(['w', 'ww', 'W', 'WW'],
      /**
      * @param {?} input
      * @param {?} week
      * @param {?} config
      * @param {?} token
      * @return {?}
      */
      function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
        return config;
      }); // export function getSetWeek (input) {
      //   var week = this.localeData().week(this);
      //   return input == null ? week : this.add((input - week) * 7, 'd');
      // }
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} locale
     * @return {?}
     */


    function setWeek(date, input) {
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getLocale();

      /** @type {?} */
      var week = getWeek(date, locale);
      return add(date, (input - week) * 7, 'day');
    }
    /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */


    function getWeek(date) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getLocale();
      var isUTC = arguments.length > 2 ? arguments[2] : undefined;
      return locale.week(date, isUTC);
    } // export function getSetISOWeek (input) {
    //   var week = weekOfYear(this, 1, 4).week;
    //   return input == null ? week : this.add((input - week) * 7, 'd');
    // }

    /**
     * @param {?} date
     * @param {?} input
     * @return {?}
     */


    function setISOWeek(date, input) {
      /** @type {?} */
      var week = getISOWeek(date);
      return add(date, (input - week) * 7, 'day');
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getISOWeek(date, isUTC) {
      return weekOfYear(date, 1, 4, isUTC).week;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // FORMATTING

    /**
     * @return {?}
     */


    function initWeekYear() {
      addFormatToken(null, ['gg', 2, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        // return this.weekYear() % 100;
        return (getWeekYear(date, opts.locale) % 100).toString();
      });
      addFormatToken(null, ['GG', 2, false], null,
      /**
      * @param {?} date
      * @return {?}
      */
      function (date) {
        // return this.isoWeekYear() % 100;
        return (getISOWeekYear(date) % 100).toString();
      });
      addWeekYearFormatToken('gggg', _getWeekYearFormatCb);
      addWeekYearFormatToken('ggggg', _getWeekYearFormatCb);
      addWeekYearFormatToken('GGGG', _getISOWeekYearFormatCb);
      addWeekYearFormatToken('GGGGG', _getISOWeekYearFormatCb); // ALIASES

      addUnitAlias('weekYear', 'gg');
      addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

      addUnitPriority('weekYear', 1);
      addUnitPriority('isoWeekYear', 1); // PARSING

      addRegexToken('G', matchSigned);
      addRegexToken('g', matchSigned);
      addRegexToken('GG', match1to2, match2);
      addRegexToken('gg', match1to2, match2);
      addRegexToken('GGGG', match1to4, match4);
      addRegexToken('gggg', match1to4, match4);
      addRegexToken('GGGGG', match1to6, match6);
      addRegexToken('ggggg', match1to6, match6);
      addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'],
      /**
      * @param {?} input
      * @param {?} week
      * @param {?} config
      * @param {?} token
      * @return {?}
      */
      function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
        return config;
      });
      addWeekParseToken(['gg', 'GG'],
      /**
      * @param {?} input
      * @param {?} week
      * @param {?} config
      * @param {?} token
      * @return {?}
      */
      function (input, week, config, token) {
        week[token] = parseTwoDigitYear(input);
        return config;
      });
    }
    /**
     * @param {?} token
     * @param {?} getter
     * @return {?}
     */


    function addWeekYearFormatToken(token, getter) {
      addFormatToken(null, [token, token.length, false], null, getter);
    }
    /**
     * @param {?} date
     * @param {?} opts
     * @return {?}
     */


    function _getWeekYearFormatCb(date, opts) {
      return getWeekYear(date, opts.locale).toString();
    }
    /**
     * @param {?} date
     * @return {?}
     */


    function _getISOWeekYearFormatCb(date) {
      return getISOWeekYear(date).toString();
    } // MOMENTS

    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */


    function getSetWeekYear(date, input) {
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getLocale();
      var isUTC = arguments.length > 3 ? arguments[3] : undefined;
      return getSetWeekYearHelper(date, input, // this.week(),
      getWeek(date, locale, isUTC), // this.weekday(),
      getLocaleDayOfWeek(date, locale, isUTC), locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC);
    }
    /**
     * @param {?} date
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */


    function getWeekYear(date) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getLocale();
      var isUTC = arguments.length > 2 ? arguments[2] : undefined;
      return weekOfYear(date, locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC).year;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} isUTC
     * @return {?}
     */


    function getSetISOWeekYear(date, input, isUTC) {
      return getSetWeekYearHelper(date, input, getISOWeek(date, isUTC), getISODayOfWeek(date, isUTC), 1, 4);
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getISOWeekYear(date, isUTC) {
      return weekOfYear(date, 1, 4, isUTC).year;
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getISOWeeksInYear(date, isUTC) {
      return weeksInYear(_getFullYear(date, isUTC), 1, 4);
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @param {?=} locale
     * @return {?}
     */


    function getWeeksInYear(date, isUTC) {
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getLocale();
      return weeksInYear(_getFullYear(date, isUTC), locale.firstDayOfWeek(), locale.firstDayOfYear());
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?} week
     * @param {?} weekday
     * @param {?} dow
     * @param {?} doy
     * @param {?=} isUTC
     * @return {?}
     */


    function getSetWeekYearHelper(date, input, week, weekday, dow, doy, isUTC) {
      if (!input) {
        return getWeekYear(date, void 0, isUTC);
      }
      /** @type {?} */


      var weeksTarget = weeksInYear(input, dow, doy);
      /** @type {?} */

      var _week = week > weeksTarget ? weeksTarget : week;

      return setWeekAll(date, input, _week, weekday, dow, doy);
    }
    /**
     * @param {?} date
     * @param {?} weekYear
     * @param {?} week
     * @param {?} weekday
     * @param {?} dow
     * @param {?} doy
     * @return {?}
     */


    function setWeekAll(date, weekYear, week, weekday, dow, doy) {
      /** @type {?} */
      var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      /** @type {?} */

      var _date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

      setFullYear(date, _getFullYear(_date, true), true);
      setMonth(date, getMonth(_date, true), true);
      setDate(date, getDate(_date, true), true);
      return date;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // todo: add support for timezones

    /**
     * @return {?}
     */


    function initTimezone() {
      // FORMATTING
      addFormatToken('z', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return opts.isUTC ? 'UTC' : '';
      });
      addFormatToken('zz', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return opts.isUTC ? 'Coordinated Universal Time' : '';
      });
    } // MOMENTS

    /**
     * @param {?} isUTC
     * @return {?}
     */


    function getZoneAbbr(isUTC) {
      return isUTC ? 'UTC' : '';
    }
    /**
     * @param {?} isUTC
     * @return {?}
     */


    function getZoneName(isUTC) {
      return isUTC ? 'Coordinated Universal Time' : '';
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function initTimestamp() {
      // FORMATTING
      addFormatToken('X', null, null,
      /**
      * @param {?} date
      * @return {?}
      */
      function (date) {
        return unix(date).toString(10);
      });
      addFormatToken('x', null, null,
      /**
      * @param {?} date
      * @return {?}
      */
      function (date) {
        return date.valueOf().toString(10);
      }); // PARSING

      addRegexToken('x', matchSigned);
      addRegexToken('X', matchTimestamp);
      addParseToken('X',
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
        return config;
      });
      addParseToken('x',
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        config._d = new Date(toInt(input));
        return config;
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function initSecond() {
      // FORMATTING
      addFormatToken('s', ['ss', 2, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return getSeconds(date, opts.isUTC).toString(10);
      }); // ALIASES

      addUnitAlias('second', 's'); // PRIORITY

      addUnitPriority('second', 15); // PARSING

      addRegexToken('s', match1to2);
      addRegexToken('ss', match1to2, match2);
      addParseToken(['s', 'ss'], SECOND);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function initQuarter() {
      // FORMATTING
      addFormatToken('Q', null, 'Qo',
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return getQuarter(date, opts.isUTC).toString(10);
      }); // ALIASES

      addUnitAlias('quarter', 'Q'); // PRIORITY

      addUnitPriority('quarter', 7); // PARSING

      addRegexToken('Q', match1);
      addParseToken('Q',
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        array[MONTH] = (toInt(input) - 1) * 3;
        return config;
      });
    } // MOMENTS

    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getQuarter(date) {
      var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return Math.ceil((getMonth(date, isUTC) + 1) / 3);
    }
    /**
     * @param {?} date
     * @param {?} quarter
     * @param {?=} isUTC
     * @return {?}
     */


    function setQuarter(date, quarter, isUTC) {
      return setMonth(date, (quarter - 1) * 3 + getMonth(date, isUTC) % 3, isUTC);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} token
     * @param {?} separator
     * @return {?}
     */


    function addOffsetFormatToken(token, separator) {
      addFormatToken(token, null, null,
      /**
      * @param {?} date
      * @param {?} config
      * @return {?}
      */
      function (date, config) {
        /** @type {?} */
        var offset = getUTCOffset(date, {
          _isUTC: config.isUTC,
          _offset: config.offset
        });
        /** @type {?} */

        var sign = '+';

        if (offset < 0) {
          offset = -offset;
          sign = '-';
        }

        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
      });
    }
    /**
     * @return {?}
     */


    function initOffset() {
      addOffsetFormatToken('Z', ':');
      addOffsetFormatToken('ZZ', ''); // PARSING

      addRegexToken('Z', matchShortOffset);
      addRegexToken('ZZ', matchShortOffset);
      addParseToken(['Z', 'ZZ'],
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
        return config;
      });
    } // HELPERS
    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']

    /** @type {?} */


    var chunkOffset = /([\+\-]|\d\d)/gi;
    /**
     * @param {?} matcher
     * @param {?} str
     * @return {?}
     */

    function offsetFromString(matcher, str) {
      /** @type {?} */
      var matches = (str || '').match(matcher);

      if (matches === null) {
        return null;
      }
      /** @type {?} */


      var chunk = matches[matches.length - 1];
      /** @type {?} */

      var parts = chunk.match(chunkOffset) || ['-', '0', '0'];
      /** @type {?} */

      var minutes = parseInt(parts[1], 10) * 60 + toInt(parts[2]);
      /** @type {?} */

      var _min = parts[0] === '+' ? minutes : -minutes;

      return minutes === 0 ? 0 : _min;
    } // Return a moment from input, that is local/utc/zone equivalent to model.

    /**
     * @param {?} input
     * @param {?} date
     * @param {?=} config
     * @return {?}
     */


    function cloneWithOffset(input, date) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (!config._isUTC) {
        return input;
      }
      /** @type {?} */


      var res = cloneDate(date); // todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000

      /** @type {?} */

      var offsetDiff = (config._offset || 0) * 60000;
      /** @type {?} */

      var diff = input.valueOf() - res.valueOf() + offsetDiff; // Use low-level api, because this fn is low-level api.

      res.setTime(res.valueOf() + diff); // todo: add timezone handling
      // hooks.updateOffset(res, false);

      return res;
    }
    /**
     * @param {?} date
     * @return {?}
     */


    function getDateOffset(date) {
      // On Firefox.24 Date#getTimezoneOffset returns a floating point.
      // https://github.com/moment/moment/pull/1871
      return -Math.round(date.getTimezoneOffset() / 15) * 15;
    } // HOOKS
    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    // todo: it's from moment timezones
    // hooks.updateOffset = function () {
    // };
    // MOMENTS
    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.

    /**
     * @param {?} date
     * @param {?=} config
     * @return {?}
     */


    function getUTCOffset(date) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      /** @type {?} */
      var _offset = config._offset || 0;

      return config._isUTC ? _offset : getDateOffset(date);
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} keepLocalTime
     * @param {?=} keepMinutes
     * @param {?=} config
     * @return {?}
     */


    function setUTCOffset(date, input, keepLocalTime, keepMinutes) {
      var config = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      /** @type {?} */
      var offset = config._offset || 0;
      /** @type {?} */

      var localAdjust;
      /** @type {?} */

      var _input = input;
      /** @type {?} */

      var _date = date;

      if (isString(_input)) {
        _input = offsetFromString(matchShortOffset, _input);

        if (_input === null) {
          return _date;
        }
      } else if (isNumber(_input) && Math.abs(_input) < 16 && !keepMinutes) {
        _input = _input * 60;
      }

      if (!config._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(_date);
      }

      config._offset = _input;
      config._isUTC = true;

      if (localAdjust != null) {
        _date = add(_date, localAdjust, 'minutes');
      }

      if (offset !== _input) {
        if (!keepLocalTime || config._changeInProgress) {
          _date = add(_date, _input - offset, 'minutes', config._isUTC); // addSubtract(this, createDuration(_input - offset, 'm'), 1, false);
        } else if (!config._changeInProgress) {
          config._changeInProgress = true; // todo: add timezone handling
          // hooks.updateOffset(this, true);

          config._changeInProgress = null;
        }
      }

      return _date;
    }
    /*
    export function getSetZone(input, keepLocalTime) {
      if (input != null) {
        if (typeof input !== 'string') {
          input = -input;
        }
    
        this.utcOffset(input, keepLocalTime);
    
        return this;
      } else {
        return -this.utcOffset();
      }
    }
    */

    /**
     * @param {?} date
     * @param {?=} keepLocalTime
     * @return {?}
     */


    function setOffsetToUTC(date, keepLocalTime) {
      return setUTCOffset(date, 0, keepLocalTime);
    }
    /**
     * @param {?} date
     * @return {?}
     */


    function isDaylightSavingTime(date) {
      return getUTCOffset(date) > getUTCOffset(setMonth(cloneDate(date), 0)) || getUTCOffset(date) > getUTCOffset(setMonth(cloneDate(date), 5));
    }
    /*export function setOffsetToLocal(date: Date, isUTC?: boolean, keepLocalTime?: boolean) {
      if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;
    
        if (keepLocalTime) {
          this.subtract(getDateOffset(this), 'm');
        }
      }
      return this;
    }*/

    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} config
     * @return {?}
     */


    function setOffsetToParsedOffset(date, input) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (config._tzm != null) {
        return setUTCOffset(date, config._tzm, false, true, config);
      }

      if (isString(input)) {
        /** @type {?} */
        var tZone = offsetFromString(matchOffset, input);

        if (tZone != null) {
          return setUTCOffset(date, tZone, false, false, config);
        }

        return setUTCOffset(date, 0, true, false, config);
      }

      return date;
    }
    /**
     * @param {?} date
     * @param {?=} input
     * @return {?}
     */


    function hasAlignedHourOffset(date, input) {
      /** @type {?} */
      var _input = input ? getUTCOffset(input, {
        _isUTC: false
      }) : 0;

      return (getUTCOffset(date) - _input) % 60 === 0;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function initMinute() {
      // FORMATTING
      addFormatToken('m', ['mm', 2, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return getMinutes(date, opts.isUTC).toString(10);
      }); // ALIASES

      addUnitAlias('minute', 'm'); // PRIORITY

      addUnitPriority('minute', 14); // PARSING

      addRegexToken('m', match1to2);
      addRegexToken('mm', match1to2, match2);
      addParseToken(['m', 'mm'], MINUTE);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function initMillisecond() {
      addFormatToken('S', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return (~~(getMilliseconds(date, opts.isUTC) / 100)).toString(10);
      });
      addFormatToken(null, ['SS', 2, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return (~~(getMilliseconds(date, opts.isUTC) / 10)).toString(10);
      });
      addFormatToken(null, ['SSS', 3, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return getMilliseconds(date, opts.isUTC).toString(10);
      });
      addFormatToken(null, ['SSSS', 4, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 10).toString(10);
      });
      addFormatToken(null, ['SSSSS', 5, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 100).toString(10);
      });
      addFormatToken(null, ['SSSSSS', 6, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 1000).toString(10);
      });
      addFormatToken(null, ['SSSSSSS', 7, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 10000).toString(10);
      });
      addFormatToken(null, ['SSSSSSSS', 8, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 100000).toString(10);
      });
      addFormatToken(null, ['SSSSSSSSS', 9, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 1000000).toString(10);
      }); // ALIASES

      addUnitAlias('millisecond', 'ms'); // PRIORITY

      addUnitPriority('millisecond', 16); // PARSING

      addRegexToken('S', match1to3, match1);
      addRegexToken('SS', match1to3, match2);
      addRegexToken('SSS', match1to3, match3);
      /** @type {?} */

      var token;

      for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
      }
      /**
       * @param {?} input
       * @param {?} array
       * @param {?} config
       * @return {?}
       */


      function parseMs(input, array, config) {
        array[MILLISECOND] = toInt(parseFloat("0.".concat(input)) * 1000);
        return config;
      }

      for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
      } // MOMENTS

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function initHour() {
      // FORMATTING
      // FORMATTING

      /**
       * @param {?} date
       * @param {?} isUTC
       * @return {?}
       */
      function hFormat(date, isUTC) {
        return getHours(date, isUTC) % 12 || 12;
      }
      /**
       * @param {?} date
       * @param {?} isUTC
       * @return {?}
       */


      function kFormat(date, isUTC) {
        return getHours(date, isUTC) || 24;
      }

      addFormatToken('H', ['HH', 2, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return getHours(date, opts.isUTC).toString(10);
      });
      addFormatToken('h', ['hh', 2, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return hFormat(date, opts.isUTC).toString(10);
      });
      addFormatToken('k', ['kk', 2, false], null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return kFormat(date, opts.isUTC).toString(10);
      });
      addFormatToken('hmm', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        /** @type {?} */
        var _h = hFormat(date, opts.isUTC);
        /** @type {?} */


        var _mm = zeroFill(getMinutes(date, opts.isUTC), 2);

        return "".concat(_h).concat(_mm);
      });
      addFormatToken('hmmss', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        /** @type {?} */
        var _h = hFormat(date, opts.isUTC);
        /** @type {?} */


        var _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        /** @type {?} */


        var _ss = zeroFill(getSeconds(date, opts.isUTC), 2);

        return "".concat(_h).concat(_mm).concat(_ss);
      });
      addFormatToken('Hmm', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        /** @type {?} */
        var _H = getHours(date, opts.isUTC);
        /** @type {?} */


        var _mm = zeroFill(getMinutes(date, opts.isUTC), 2);

        return "".concat(_H).concat(_mm);
      });
      addFormatToken('Hmmss', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        /** @type {?} */
        var _H = getHours(date, opts.isUTC);
        /** @type {?} */


        var _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        /** @type {?} */


        var _ss = zeroFill(getSeconds(date, opts.isUTC), 2);

        return "".concat(_H).concat(_mm).concat(_ss);
      });
      /**
       * @param {?} token
       * @param {?} lowercase
       * @return {?}
       */

      function meridiem(token, lowercase) {
        addFormatToken(token, null, null,
        /**
        * @param {?} date
        * @param {?} opts
        * @return {?}
        */
        function (date, opts) {
          return opts.locale.meridiem(getHours(date, opts.isUTC), getMinutes(date, opts.isUTC), lowercase);
        });
      }

      meridiem('a', true);
      meridiem('A', false); // ALIASES

      addUnitAlias('hour', 'h'); // PRIORITY

      addUnitPriority('hour', 13); // PARSING

      /**
       * @param {?} isStrict
       * @param {?} locale
       * @return {?}
       */

      function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
      }

      addRegexToken('a', matchMeridiem);
      addRegexToken('A', matchMeridiem);
      addRegexToken('H', match1to2);
      addRegexToken('h', match1to2);
      addRegexToken('k', match1to2);
      addRegexToken('HH', match1to2, match2);
      addRegexToken('hh', match1to2, match2);
      addRegexToken('kk', match1to2, match2);
      addRegexToken('hmm', match3to4);
      addRegexToken('hmmss', match5to6);
      addRegexToken('Hmm', match3to4);
      addRegexToken('Hmmss', match5to6);
      addParseToken(['H', 'HH'], HOUR);
      addParseToken(['k', 'kk'],
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        /** @type {?} */
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
        return config;
      });
      addParseToken(['a', 'A'],
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
        return config;
      });
      addParseToken(['h', 'hh'],
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
        return config;
      });
      addParseToken('hmm',
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        /** @type {?} */
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
        return config;
      });
      addParseToken('hmmss',
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        /** @type {?} */
        var pos1 = input.length - 4;
        /** @type {?} */

        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
        return config;
      });
      addParseToken('Hmm',
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        /** @type {?} */
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        return config;
      });
      addParseToken('Hmmss',
      /**
      * @param {?} input
      * @param {?} array
      * @param {?} config
      * @return {?}
      */
      function (input, array, config) {
        /** @type {?} */
        var pos1 = input.length - 4;
        /** @type {?} */

        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        return config;
      });
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var locales = {};
    /** @type {?} */

    var localeFamilies = {};
    /** @type {?} */

    var globalLocale;
    /**
     * @param {?} key
     * @return {?}
     */

    function normalizeLocale(key) {
      return key ? key.toLowerCase().replace('_', '-') : key;
    } // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least,
    // but move to the next array item if it's a more specific variant than the current root

    /**
     * @param {?} names
     * @return {?}
     */


    function chooseLocale(names) {
      /** @type {?} */
      var next;
      /** @type {?} */

      var locale;
      /** @type {?} */

      var i = 0;

      while (i < names.length) {
        /** @type {?} */
        var split = normalizeLocale(names[i]).split('-');
        /** @type {?} */

        var j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;

        while (j > 0) {
          locale = loadLocale(split.slice(0, j).join('-'));

          if (locale) {
            return locale;
          }

          if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
            // the next array item is better than a shallower substring of this one
            break;
          }

          j--;
        }

        i++;
      }

      return null;
    }
    /**
     * @param {?} parentConfig
     * @param {?} childConfig
     * @return {?}
     */


    function mergeConfigs(parentConfig, childConfig) {
      /** @type {?} */
      var res = Object.assign({}, parentConfig);

      for (var childProp in childConfig) {
        if (!hasOwnProp(childConfig, childProp)) {
          continue;
        }

        if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
          res[
          /** @type {?} */
          childProp] = {};
          Object.assign(res[childProp], parentConfig[childProp]);
          Object.assign(res[childProp], childConfig[childProp]);
        } else if (childConfig[childProp] != null) {
          res[
          /** @type {?} */
          childProp] = childConfig[childProp];
        } else {
          delete res[
          /** @type {?} */
          childProp];
        }
      }

      for (var parentProp in parentConfig) {
        if (hasOwnProp(parentConfig, parentProp) && !hasOwnProp(childConfig, parentProp) && isObject(parentConfig[
        /** @type {?} */
        parentProp])) {
          // make sure changes to properties don't modify parent config
          res[
          /** @type {?} */
          parentProp] = Object.assign({}, res[
          /** @type {?} */
          parentProp]);
        }
      }

      return res;
    }
    /**
     * @param {?} name
     * @return {?}
     */


    function loadLocale(name) {
      // no way!

      /* var oldLocale = null;
       // TODO: Find a better way to register and load all the locales in Node
       if (!locales[name] && (typeof module !== 'undefined') &&
         module && module.exports) {
         try {
           oldLocale = globalLocale._abbr;
           var aliasedRequire = require;
           aliasedRequire('./locale/' + name);
           getSetGlobalLocale(oldLocale);
         } catch (e) {}
       }*/
      if (!locales[name]) {
        // tslint:disable-next-line
        console.error("Khronos locale error: please load locale \"".concat(name, "\" before using it")); // throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
      }

      return locales[name];
    } // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.

    /**
     * @param {?=} key
     * @param {?=} values
     * @return {?}
     */


    function getSetGlobalLocale(key, values) {
      /** @type {?} */
      var data;

      if (key) {
        if (isUndefined(values)) {
          data = getLocale(key);
        } else if (isString(key)) {
          data = defineLocale(key, values);
        }

        if (data) {
          globalLocale = data;
        }
      }

      return globalLocale && globalLocale._abbr;
    }
    /**
     * @param {?} name
     * @param {?=} config
     * @return {?}
     */


    function defineLocale(name, config) {
      if (config === null) {
        // useful for testing
        delete locales[name];
        globalLocale = getLocale('en');
        return null;
      }

      if (!config) {
        return;
      }
      /** @type {?} */


      var parentConfig = baseConfig;
      config.abbr = name;

      if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          parentConfig = locales[config.parentLocale]._config;
        } else {
          if (!localeFamilies[config.parentLocale]) {
            localeFamilies[config.parentLocale] = [];
          }

          localeFamilies[config.parentLocale].push({
            name: name,
            config: config
          });
          return null;
        }
      }

      locales[name] = new Locale(mergeConfigs(parentConfig, config));

      if (localeFamilies[name]) {
        localeFamilies[name].forEach(
        /**
        * @param {?} x
        * @return {?}
        */
        function (x) {
          defineLocale(x.name, x.config);
        });
      } // backwards compat for now: also set the locale
      // make sure we set the locale AFTER all child locales have been
      // created, so we won't end up with the child locale set.


      getSetGlobalLocale(name);
      return locales[name];
    }
    /**
     * @param {?} name
     * @param {?=} config
     * @return {?}
     */


    function updateLocale(name, config) {
      /** @type {?} */
      var _config = config;

      if (_config != null) {
        /** @type {?} */
        var parentConfig = baseConfig; // MERGE

        /** @type {?} */

        var tmpLocale = loadLocale(name);

        if (tmpLocale != null) {
          parentConfig = tmpLocale._config;
        }

        _config = mergeConfigs(parentConfig, _config);
        /** @type {?} */

        var locale = new Locale(_config);
        locale.parentLocale = locales[name];
        locales[name] = locale; // backwards compat for now: also set the locale

        getSetGlobalLocale(name);
      } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
            locales[name] = locales[name].parentLocale;
          } else if (locales[name] != null) {
            delete locales[name];
          }
        }
      }

      return locales[name];
    } // returns locale data

    /**
     * @param {?=} key
     * @return {?}
     */


    function getLocale(key) {
      setDefaultLocale();

      if (!key) {
        return globalLocale;
      } // let locale;

      /** @type {?} */


      var _key = isArray(key) ? key : [key];

      return chooseLocale(_key);
    }
    /**
     * @return {?}
     */


    function listLocales() {
      return Object.keys(locales);
    }
    /**
     * @return {?}
     */


    function setDefaultLocale() {
      if (locales["en"]) {
        return undefined;
      }

      getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,

        /**
         * @param {?} num
         * @return {?}
         */
        ordinal: function ordinal(num) {
          /** @type {?} */
          var b = num % 10;
          /** @type {?} */

          var output = toInt(num % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
          return num + output;
        }
      });
      initWeek();
      initWeekYear();
      initYear();
      initTimezone();
      initTimestamp();
      initSecond();
      initQuarter();
      initOffset();
      initMonth();
      initMinute();
      initMillisecond();
      initHour();
      initDayOfYear();
      initDayOfWeek();
      initDayOfMonth();
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];

    var ɵ0 =
    /**
    * @param {?} mem
    * @param {?} order
    * @return {?}
    */
    function ɵ0(mem, order) {
      mem[order] = true;
      return mem;
    };
    /** @type {?} */


    var orderingHash = ordering.reduce(ɵ0, {});
    /**
     * @param {?} duration
     * @return {?}
     */

    function isDurationValid(duration) {
      /** @type {?} */
      var durationKeys = Object.keys(duration);

      if (durationKeys.some(
      /**
      * @param {?} key
      * @return {?}
      */
      function (key) {
        return key in orderingHash && duration[key] === null || isNaN(duration[key]);
      })) {
        return false;
      } // for (let key in duration) {
      //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
      //     return false;
      //   }
      // }

      /** @type {?} */


      var unitHasDecimal = false;

      for (var i = 0; i < ordering.length; ++i) {
        if (duration[ordering[i]]) {
          // only allow non-integers for smallest unit
          if (unitHasDecimal) {
            return false;
          }

          if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
            unitHasDecimal = true;
          }
        }
      }

      return true;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} number
     * @return {?}
     */


    function absCeil(number) {
      return number < 0 ? Math.floor(number) : Math.ceil(number);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} dur
     * @return {?}
     */


    function bubble(dur) {
      /** @type {?} */
      var milliseconds = dur._milliseconds;
      /** @type {?} */

      var days = dur._days;
      /** @type {?} */

      var months = dur._months;
      /** @type {?} */

      var data = dur._data; // if we have a mix of positive and negative values, bubble down first
      // check: https://github.com/moment/moment/issues/2166

      if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
      } // The following code bubbles up values, see the tests for
      // examples of what that means.


      data.milliseconds = milliseconds % 1000;
      /** @type {?} */

      var seconds = absFloor(milliseconds / 1000);
      data.seconds = seconds % 60;
      /** @type {?} */

      var minutes = absFloor(seconds / 60);
      data.minutes = minutes % 60;
      /** @type {?} */

      var hours = absFloor(minutes / 60);
      data.hours = hours % 24;
      days += absFloor(hours / 24); // convert days to months

      /** @type {?} */

      var monthsFromDays = absFloor(daysToMonths(days));
      months += monthsFromDays;
      days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

      /** @type {?} */

      var years = absFloor(months / 12);
      months %= 12;
      data.day = days;
      data.month = months;
      data.year = years;
      return dur;
    }
    /**
     * @param {?} day
     * @return {?}
     */


    function daysToMonths(day) {
      // 400 years have 146097 days (taking into account leap year rules)
      // 400 years have 12 months === 4800
      return day * 4800 / 146097;
    }
    /**
     * @param {?} month
     * @return {?}
     */


    function monthsToDays(month) {
      // the reverse of daysToMonths
      return month * 146097 / 4800;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var round = Math.round;
    /** @type {?} */

    var thresholds = {
      ss: 44,
      // a few seconds to seconds
      s: 45,
      // seconds to minute
      m: 45,
      // minutes to hour
      h: 22,
      // hours to day
      d: 26,
      // days to month
      M: 11 // months to year

    }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

    /**
     * @param {?} str
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} isFuture
     * @param {?} locale
     * @return {?}
     */

    function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
      return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
    }
    /**
     * @param {?} posNegDuration
     * @param {?} withoutSuffix
     * @param {?} locale
     * @return {?}
     */


    function relativeTime(posNegDuration, withoutSuffix, locale) {
      /** @type {?} */
      var duration = createDuration(posNegDuration).abs();
      /** @type {?} */

      var seconds = round(duration.as('s'));
      /** @type {?} */

      var minutes = round(duration.as('m'));
      /** @type {?} */

      var hours = round(duration.as('h'));
      /** @type {?} */

      var days = round(duration.as('d'));
      /** @type {?} */

      var months = round(duration.as('M'));
      /** @type {?} */

      var years = round(duration.as('y'));
      /** @type {?} */

      var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
      /** @type {?} */

      var b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale]; // a[2] = withoutSuffix;
      // a[3] = +posNegDuration > 0;
      // a[4] = locale;

      return substituteTimeAgo.apply(null, b);
    } // This function allows you to set the rounding function for relative time strings

    /**
     * @param {?} roundingFunction
     * @return {?}
     */


    function getSetRelativeTimeRounding(roundingFunction) {
      if (roundingFunction === undefined) {
        return round;
      }

      if (typeof roundingFunction === 'function') {
        round = roundingFunction;
        return true;
      }

      return false;
    } // This function allows you to set a threshold for relative time strings

    /**
     * @param {?} threshold
     * @param {?} limit
     * @return {?}
     */


    function getSetRelativeTimeThreshold(threshold, limit) {
      if (thresholds[threshold] === undefined) {
        return false;
      }

      if (limit === undefined) {
        return thresholds[threshold];
      }

      thresholds[threshold] = limit;

      if (threshold === 's') {
        thresholds.ss = limit - 1;
      }

      return true;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var Duration = /*#__PURE__*/function () {
      /**
       * @param {?} duration
       * @param {?=} config
       */
      function Duration(duration) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Duration);

        this._data = {};
        this._locale = getLocale();
        this._locale = config && config._locale || getLocale(); // const normalizedInput = normalizeObjectUnits(duration);

        /** @type {?} */

        var normalizedInput = duration;
        /** @type {?} */

        var years = normalizedInput.year || 0;
        /** @type {?} */

        var quarters = normalizedInput.quarter || 0;
        /** @type {?} */

        var months = normalizedInput.month || 0;
        /** @type {?} */

        var weeks = normalizedInput.week || 0;
        /** @type {?} */

        var days = normalizedInput.day || 0;
        /** @type {?} */

        var hours = normalizedInput.hours || 0;
        /** @type {?} */

        var minutes = normalizedInput.minutes || 0;
        /** @type {?} */

        var seconds = normalizedInput.seconds || 0;
        /** @type {?} */

        var milliseconds = normalizedInput.milliseconds || 0;
        this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

        this._milliseconds = +milliseconds + seconds * 1000 + minutes * 60 * 1000 + // 1000 * 60
        hours * 1000 * 60 * 60; // using 1000 * 60 * 60
        // instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately

        this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.

        this._months = +months + quarters * 3 + years * 12; // this._data = {};
        // this._locale = getLocale();
        // this._bubble();

        return bubble(this);
      }
      /**
       * @return {?}
       */


      _createClass(Duration, [{
        key: "isValid",
        value: function isValid() {
          return this._isValid;
        }
        /**
         * @param {?=} withSuffix
         * @return {?}
         */

      }, {
        key: "humanize",
        value: function humanize(withSuffix) {
          // throw new Error(`TODO: implement`);
          if (!this.isValid()) {
            return this.localeData().invalidDate;
          }
          /** @type {?} */


          var locale = this.localeData();
          /** @type {?} */

          var output = relativeTime(this, !withSuffix, locale);

          if (withSuffix) {
            output = locale.pastFuture(+this, output);
          }

          return locale.postformat(output);
        }
        /**
         * @return {?}
         */

      }, {
        key: "localeData",
        value: function localeData() {
          return this._locale;
        }
        /**
         * @param {?=} localeKey
         * @return {?}
         */

      }, {
        key: "locale",
        value: function locale(localeKey) {
          if (!localeKey) {
            return this._locale._abbr;
          }

          this._locale = getLocale(localeKey) || this._locale;
          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "abs",
        value: function abs() {
          /** @type {?} */
          var mathAbs = Math.abs;
          /** @type {?} */

          var data = this._data;
          this._milliseconds = mathAbs(this._milliseconds);
          this._days = mathAbs(this._days);
          this._months = mathAbs(this._months);
          data.milliseconds = mathAbs(data.milliseconds);
          data.seconds = mathAbs(data.seconds);
          data.minutes = mathAbs(data.minutes);
          data.hours = mathAbs(data.hours);
          data.month = mathAbs(data.month);
          data.year = mathAbs(data.year);
          return this;
        }
        /**
         * @param {?} _units
         * @return {?}
         */

      }, {
        key: "as",
        value: function as(_units) {
          if (!this.isValid()) {
            return NaN;
          }
          /** @type {?} */


          var days;
          /** @type {?} */

          var months;
          /** @type {?} */

          var milliseconds = this._milliseconds;
          /** @type {?} */

          var units = normalizeUnits(_units);

          if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
          } // handle milliseconds separately because of floating point math errors (issue #1867)


          days = this._days + Math.round(monthsToDays(this._months));

          switch (units) {
            case 'week':
              return days / 7 + milliseconds / 6048e5;

            case 'day':
              return days + milliseconds / 864e5;

            case 'hours':
              return days * 24 + milliseconds / 36e5;

            case 'minutes':
              return days * 1440 + milliseconds / 6e4;

            case 'seconds':
              return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here

            case 'milliseconds':
              return Math.floor(days * 864e5) + milliseconds;

            default:
              throw new Error("Unknown unit ".concat(units));
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "valueOf",
        value: function valueOf() {
          if (!this.isValid()) {
            return NaN;
          }

          return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
        }
      }]);

      return Duration;
    }();

    if (false) {}
    /**
     * @param {?} obj
     * @return {?}
     */


    function isDuration(obj) {
      return obj instanceof Duration;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} config
     * @return {?}
     */


    function isValid(config) {
      if (config._isValid == null) {
        /** @type {?} */
        var flags = getParsingFlags(config);
        /** @type {?} */

        var parsedParts = Array.prototype.some.call(flags.parsedDateParts,
        /**
        * @param {?} i
        * @return {?}
        */
        function (i) {
          return i != null;
        });
        /** @type {?} */

        var isNowValid = !isNaN(config._d && config._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

        if (config._strict) {
          isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(config)) {
          config._isValid = isNowValid;
        } else {
          return isNowValid;
        }
      }

      return config._isValid;
    }
    /**
     * @param {?} config
     * @param {?=} flags
     * @return {?}
     */


    function createInvalid(config, flags) {
      config._d = new Date(NaN);
      Object.assign(getParsingFlags(config), flags || {
        userInvalidated: true
      });
      return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */


    function markInvalid(config) {
      config._isValid = false;
      return config;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    // tslint:disable-next-line

    /** @type {?} */


    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/; // tslint:disable-next-line

    /** @type {?} */

    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    /** @type {?} */

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
    /** @type {?} */

    var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/, true], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/, true], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/, true], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/, true], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/, true], ['YYYYMMDD', /\d{8}/, true], // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/, true], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/, true]]; // iso time formats and regexes

    /** @type {?} */

    var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
    /** @type {?} */

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
    /** @type {?} */

    var obsOffsets = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60
    }; // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    // tslint:disable-next-line

    /** @type {?} */

    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/; // date from iso format

    /**
     * @param {?} config
     * @return {?}
     */

    function configFromISO(config) {
      if (!isString(config._i)) {
        return config;
      }
      /** @type {?} */


      var input = config._i;
      /** @type {?} */

      var match = extendedIsoRegex.exec(input) || basicIsoRegex.exec(input);
      /** @type {?} */

      var allowTime;
      /** @type {?} */

      var dateFormat;
      /** @type {?} */

      var timeFormat;
      /** @type {?} */

      var tzFormat;

      if (!match) {
        config._isValid = false;
        return config;
      } // getParsingFlags(config).iso = true;

      /** @type {?} */


      var i;
      /** @type {?} */

      var l;

      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }

      if (dateFormat == null) {
        config._isValid = false;
        return config;
      }

      if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            // match[2] should be 'T' or space
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }

        if (timeFormat == null) {
          config._isValid = false;
          return config;
        }
      }

      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return config;
      }

      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return config;
        }
      }

      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      return configFromStringAndFormat(config);
    } // tslint:disable-next-line

    /**
     * @param {?} yearStr
     * @param {?} monthStr
     * @param {?} dayStr
     * @param {?} hourStr
     * @param {?} minuteStr
     * @param {?} secondStr
     * @return {?}
     */


    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
      /** @type {?} */
      var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

      if (secondStr) {
        result.push(parseInt(secondStr, 10));
      }

      return result;
    }
    /**
     * @param {?} yearStr
     * @return {?}
     */


    function untruncateYear(yearStr) {
      /** @type {?} */
      var year = parseInt(yearStr, 10);
      return year <= 49 ? year + 2000 : year;
    }
    /**
     * @param {?} str
     * @return {?}
     */


    function preprocessRFC2822(str) {
      // Remove comments and folding whitespace and replace multiple-spaces with a single space
      return str.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
    }
    /**
     * @param {?} weekdayStr
     * @param {?} parsedInput
     * @param {?} config
     * @return {?}
     */


    function checkWeekday(weekdayStr, parsedInput, config) {
      if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.

        /** @type {?} */
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr);
        /** @type {?} */

        var weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

        if (weekdayProvided !== weekdayActual) {
          getParsingFlags(config).weekdayMismatch = true;
          config._isValid = false;
          return false;
        }
      }

      return true;
    }
    /**
     * @param {?} obsOffset
     * @param {?} militaryOffset
     * @param {?} numOffset
     * @return {?}
     */


    function calculateOffset(obsOffset, militaryOffset, numOffset) {
      if (obsOffset) {
        return obsOffsets[obsOffset];
      } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
      } else {
        /** @type {?} */
        var hm = parseInt(numOffset, 10);
        /** @type {?} */

        var m = hm % 100;
        /** @type {?} */

        var h = (hm - m) / 100;
        return h * 60 + m;
      }
    } // date and time from ref 2822 format

    /**
     * @param {?} config
     * @return {?}
     */


    function configFromRFC2822(config) {
      if (!isString(config._i)) {
        return config;
      }
      /** @type {?} */


      var match = rfc2822.exec(preprocessRFC2822(config._i));

      if (!match) {
        return markInvalid(config);
      }
      /** @type {?} */


      var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

      if (!checkWeekday(match[1], parsedArray, config)) {
        return config;
      }

      config._a = parsedArray;
      config._tzm = calculateOffset(match[8], match[9], match[10]);
      config._d = createUTCDate.apply(null, config._a);

      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

      getParsingFlags(config).rfc2822 = true;
      return config;
    } // date from iso format or fallback

    /**
     * @param {?} config
     * @return {?}
     */


    function configFromString(config) {
      if (!isString(config._i)) {
        return config;
      }
      /** @type {?} */


      var matched = aspNetJsonRegex.exec(config._i);

      if (matched !== null) {
        config._d = new Date(+matched[1]);
        return config;
      } // todo: update logic processing
      // isISO -> configFromISO
      // isRFC -> configFromRFC


      configFromISO(config);

      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return config;
      }

      configFromRFC2822(config);

      if (config._isValid === false) {
        delete config._isValid;
      } else {
        return config;
      } // Final attempt, use Input Fallback
      // hooks.createFromInputFallback(config);


      return createInvalid(config);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} locale
     * @param {?=} isUTC
     * @param {?=} offset
     * @return {?}
     */


    function formatDate(date, format, locale, isUTC) {
      var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      /** @type {?} */
      var _locale = getLocale(locale || 'en');

      if (!_locale) {
        throw new Error("Locale \"".concat(locale, "\" is not defined, please add it with \"defineLocale(...)\""));
      }
      /** @type {?} */


      var _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
      /** @type {?} */


      var output = formatMoment(date, _format, _locale, isUTC, offset);

      if (!output) {
        return output;
      }

      return _locale.postformat(output);
    } // format date using native date object

    /**
     * @param {?} date
     * @param {?} _format
     * @param {?} locale
     * @param {?=} isUTC
     * @param {?=} offset
     * @return {?}
     */


    function formatMoment(date, _format, locale, isUTC) {
      var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

      if (!isDateValid(date)) {
        return locale.invalidDate;
      }
      /** @type {?} */


      var format = expandFormat(_format, locale);
      formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
      return formatFunctions[format](date, locale, isUTC, offset);
    }
    /**
     * @param {?} _format
     * @param {?} locale
     * @return {?}
     */


    function expandFormat(_format, locale) {
      /** @type {?} */
      var format = _format;
      /** @type {?} */

      var i = 5;
      /** @type {?} */

      var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
      /** @type {?} */

      var replaceLongDateFormatTokens =
      /**
      * @param {?} input
      * @return {?}
      */
      function replaceLongDateFormatTokens(input) {
        return locale.formatLongDate(input) || input;
      };

      localFormattingTokens.lastIndex = 0;

      while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
      }

      return format;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Pick the first defined of two or three arguments.

    /**
     * @template T
     * @param {?=} a
     * @param {?=} b
     * @param {?=} c
     * @return {?}
     */


    function defaults(a, b, c) {
      if (a != null) {
        return a;
      }

      if (b != null) {
        return b;
      }

      return c;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} config
     * @return {?}
     */


    function currentDateArray(config) {
      /** @type {?} */
      var nowValue = new Date();

      if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
      }

      return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    } // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]

    /**
     * @param {?} config
     * @return {?}
     */


    function configFromArray(config) {
      /** @type {?} */
      var input = [];
      /** @type {?} */

      var i;
      /** @type {?} */

      var date;
      /** @type {?} */

      var currentDate;
      /** @type {?} */

      var expectedWeekday;
      /** @type {?} */

      var yearToUse;

      if (config._d) {
        return config;
      }

      currentDate = currentDateArray(config); // compute day of the year from weeks and weekdays

      if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
      } // if the day of the year is set, figure out what it is


      if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
          getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = new Date(Date.UTC(yearToUse, 0, config._dayOfYear));
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
      } // Default to current date.
      // * if no year, month, day of month are given, default to today
      // * if day of month is given, default month and year
      // * if month is given, default only year
      // * if year is given, don't default anything


      for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
      } // Zero out whatever was not defaulted, including time


      for (; i < 7; i++) {
        config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
      } // Check for 24:00:00.000


      if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
      }

      config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
      expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
      // with parseZone.

      if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
      }

      if (config._nextDay) {
        config._a[HOUR] = 24;
      } // check for mismatching day of week


      if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
      }

      return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */


    function dayOfYearFromWeekInfo(config) {
      /** @type {?} */
      var w;
      /** @type {?} */

      var weekYear;
      /** @type {?} */

      var week;
      /** @type {?} */

      var weekday;
      /** @type {?} */

      var dow;
      /** @type {?} */

      var doy;
      /** @type {?} */

      var temp;
      /** @type {?} */

      var weekdayOverflow;
      w = config._w;

      if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).

        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(new Date(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);

        if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
        }
      } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        /** @type {?} */

        var curWeek = weekOfYear(new Date(), dow, doy);
        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
          // weekday -- low day numbers are considered next week
          weekday = w.d;

          if (weekday < 0 || weekday > 6) {
            weekdayOverflow = true;
          }
        } else if (w.e != null) {
          // local weekday -- counting starts from begining of week
          weekday = w.e + dow;

          if (w.e < 0 || w.e > 6) {
            weekdayOverflow = true;
          }
        } else {
          // default to begining of week
          weekday = dow;
        }
      }

      if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
      } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
      } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
      }

      return config;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} config
     * @return {?}
     */


    function checkOverflow(config) {
      /** @type {?} */
      var overflow;
      /** @type {?} */

      var a = config._a;

      if (a && getParsingFlags(config).overflow === -2) {
        // todo: fix this sh*t
        overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth$1(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

        if (getParsingFlags(config)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
        }

        if (getParsingFlags(config)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
        }

        if (getParsingFlags(config)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
        }

        getParsingFlags(config).overflow = overflow;
      }

      return config;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // constant that refers to the ISO standard
    // hooks.ISO_8601 = function () {};

    /** @type {?} */


    var ISO_8601 = 'ISO_8601'; // constant that refers to the RFC 2822 form
    // hooks.RFC_2822 = function () {};

    /** @type {?} */

    var RFC_2822 = 'RFC_2822'; // date from string and format string

    /**
     * @param {?} config
     * @return {?}
     */

    function configFromStringAndFormat(config) {
      // TODO: Move this to another part of the creation flow to prevent circular deps
      if (config._f === ISO_8601) {
        return configFromISO(config);
      }

      if (config._f === RFC_2822) {
        return configFromRFC2822(config);
      }

      config._a = [];
      getParsingFlags(config).empty = true;

      if (isArray(config._f) || !config._i && config._i !== 0) {
        return config;
      } // This array is used to make a Date, either with `new Date` or `Date.UTC`

      /** @type {?} */


      var input = config._i.toString();
      /** @type {?} */


      var totalParsedInputLength = 0;
      /** @type {?} */

      var inputLength = input.length;
      /** @type {?} */

      var tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
      /** @type {?} */

      var i;
      /** @type {?} */

      var token;
      /** @type {?} */

      var parsedInput;
      /** @type {?} */

      var skipped;

      for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (input.match(getParseRegexForToken(token, config._locale)) || [])[0];

        if (parsedInput) {
          skipped = input.substr(0, input.indexOf(parsedInput));

          if (skipped.length > 0) {
            getParsingFlags(config).unusedInput.push(skipped);
          }

          input = input.slice(input.indexOf(parsedInput) + parsedInput.length);
          totalParsedInputLength += parsedInput.length;
        } // don't parse if it's not a known token


        if (formatTokenFunctions[token]) {
          if (parsedInput) {
            getParsingFlags(config).empty = false;
          } else {
            getParsingFlags(config).unusedTokens.push(token);
          }

          addTimeToArrayFromToken(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
          getParsingFlags(config).unusedTokens.push(token);
        }
      } // add remaining unparsed input length to the string


      getParsingFlags(config).charsLeftOver = inputLength - totalParsedInputLength;

      if (input.length > 0) {
        getParsingFlags(config).unusedInput.push(input);
      } // clear _12h flag if hour is <= 12


      if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = void 0;
      }

      getParsingFlags(config).parsedDateParts = config._a.slice(0);
      getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

      config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
      configFromArray(config);
      return checkOverflow(config);
    }
    /**
     * @param {?} locale
     * @param {?} _hour
     * @param {?} meridiem
     * @return {?}
     */


    function meridiemFixWrap(locale, _hour, meridiem) {
      /** @type {?} */
      var hour = _hour;

      if (meridiem == null) {
        // nothing to do
        return hour;
      }

      if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
      }

      if (locale.isPM == null) {
        // this is not supposed to happen
        return hour;
      } // Fallback

      /** @type {?} */


      var isPm = locale.isPM(meridiem);

      if (isPm && hour < 12) {
        hour += 12;
      }

      if (!isPm && hour === 12) {
        hour = 0;
      }

      return hour;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // date from string and array of format strings

    /**
     * @param {?} config
     * @return {?}
     */


    function configFromStringAndArray(config) {
      /** @type {?} */
      var tempConfig;
      /** @type {?} */

      var bestMoment;
      /** @type {?} */

      var scoreToBeat;
      /** @type {?} */

      var currentScore;

      if (!config._f || config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        return createInvalid(config);
      }
      /** @type {?} */


      var i;

      for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = Object.assign({}, config);

        if (config._useUTC != null) {
          tempConfig._useUTC = config._useUTC;
        }

        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
          continue;
        } // if there is any input that was not parsed add a penalty for that format


        currentScore += getParsingFlags(tempConfig).charsLeftOver; // or tokens

        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
        }
      }

      return Object.assign(config, bestMoment || tempConfig);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} config
     * @return {?}
     */


    function configFromObject(config) {
      if (config._d) {
        return config;
      }
      /** @type {?} */


      var input = config._i;

      if (isObject(input)) {
        /** @type {?} */
        var i = normalizeObjectUnits(
        /** @type {?} */
        input);
        config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds] // todo: obsolete -> remove it
        .map(
        /**
        * @param {?} obj
        * @return {?}
        */
        function (obj) {
          return isString(obj) ? parseInt(obj, 10) : obj;
        });
      }

      return configFromArray(config);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} config
     * @return {?}
     */


    function createFromConfig(config) {
      /** @type {?} */
      var res = checkOverflow(prepareConfig(config)); // todo: remove, in moment.js it's never called cuz of moment constructor

      res._d = new Date(res._d != null ? res._d.getTime() : NaN);

      if (!isValid(Object.assign({}, res, {
        _isValid: null
      }))) {
        res._d = new Date(NaN);
      } // todo: update offset

      /*if (res._nextDay) {
        // Adding is smart enough around DST
        res._d = add(res._d, 1, 'day');
        res._nextDay = undefined;
      }*/


      return res;
    }
    /**
     * @param {?} config
     * @return {?}
     */


    function prepareConfig(config) {
      /** @type {?} */
      var input = config._i;
      /** @type {?} */

      var format = config._f;
      config._locale = config._locale || getLocale(config._l);

      if (input === null || format === undefined && input === '') {
        return createInvalid(config, {
          nullInput: true
        });
      }

      if (isString(input)) {
        config._i = input = config._locale.preparse(input);
      }

      if (isDate(input)) {
        config._d = cloneDate(input);
        return config;
      } // todo: add check for recursion


      if (isArray(format)) {
        configFromStringAndArray(config);
      } else if (format) {
        configFromStringAndFormat(config);
      } else {
        configFromInput(config);
      }

      if (!isValid(config)) {
        config._d = null;
      }

      return config;
    }
    /**
     * @param {?} config
     * @return {?}
     */


    function configFromInput(config) {
      /** @type {?} */
      var input = config._i;

      if (isUndefined(input)) {
        config._d = new Date();
      } else if (isDate(input)) {
        config._d = cloneDate(input);
      } else if (isString(input)) {
        configFromString(config);
      } else if (isArray(input) && input.length) {
        /** @type {?} */
        var _arr = input.slice(0);

        config._a = _arr.map(
        /**
        * @param {?} obj
        * @return {?}
        */
        function (obj) {
          return isString(obj) ? parseInt(obj, 10) : obj;
        });
        configFromArray(config);
      } else if (isObject(input)) {
        configFromObject(config);
      } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
      } else {
        //   hooks.createFromInputFallback(config);
        return createInvalid(config);
      }

      return config;
    }
    /**
     * @param {?} input
     * @param {?=} format
     * @param {?=} localeKey
     * @param {?=} strict
     * @param {?=} isUTC
     * @return {?}
     */


    function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
      /** @type {?} */
      var config = {};
      /** @type {?} */

      var _input = input; // params switch -> skip; test it well
      // if (localeKey === true || localeKey === false) {
      //     strict = localeKey;
      //     localeKey = undefined;
      // }
      // todo: fail fast and return not valid date

      if (isObject(_input) && isObjectEmpty(_input) || isArray(_input) && _input.length === 0) {
        _input = undefined;
      } // object construction must be done this way.
      // https://github.com/moment/moment/issues/1423
      // config._isAMomentObject = true;


      config._useUTC = config._isUTC = isUTC;
      config._l = localeKey;
      config._i = _input;
      config._f = format;
      config._strict = strict;
      return createFromConfig(config);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} input
     * @param {?=} format
     * @param {?=} localeKey
     * @param {?=} strict
     * @param {?=} isUTC
     * @return {?}
     */


    function parseDate(input, format, localeKey, strict, isUTC) {
      if (isDate(input)) {
        return input;
      }
      /** @type {?} */


      var config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
      return config._d;
    }
    /**
     * @param {?} date
     * @return {?}
     */


    function utcAsLocal(date) {
      if (!(date instanceof Date)) {
        return null;
      }

      return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} num
     * @return {?}
     */


    function absRound(num) {
      return num < 0 ? Math.round(num * -1) * -1 : Math.round(num);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} date1
     * @param {?} date2
     * @param {?=} units
     * @return {?}
     */


    function isAfter(date1, date2) {
      var units = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'milliseconds';

      if (!date1 || !date2) {
        return false;
      }

      if (units === 'milliseconds') {
        return date1.valueOf() > date2.valueOf();
      }

      return date2.valueOf() < startOf(date1, units).valueOf();
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @param {?=} units
     * @return {?}
     */


    function isBefore(date1, date2) {
      var units = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'milliseconds';

      if (!date1 || !date2) {
        return false;
      }

      if (units === 'milliseconds') {
        return date1.valueOf() < date2.valueOf();
      }

      return endOf(date1, units).valueOf() < date2.valueOf();
    }
    /**
     * @param {?} date
     * @param {?} daysDisabled
     * @return {?}
     */


    function isDisabledDay(date, daysDisabled) {
      if (daysDisabled === undefined || !daysDisabled || !daysDisabled.length) {
        return false;
      }

      return daysDisabled.some(
      /**
      * @param {?} day
      * @return {?}
      */
      function (day) {
        return day === date.getDay();
      });
    }
    /**
     * @param {?} date
     * @param {?} from
     * @param {?} to
     * @param {?} units
     * @param {?=} inclusivity
     * @return {?}
     */


    function isBetween(date, from, to, units) {
      var inclusivity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '()';

      /** @type {?} */
      var leftBound = inclusivity[0] === '(' ? isAfter(date, from, units) : !isBefore(date, from, units);
      /** @type {?} */

      var rightBound = inclusivity[1] === ')' ? isBefore(date, to, units) : !isAfter(date, to, units);
      return leftBound && rightBound;
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @param {?=} units
     * @return {?}
     */


    function isSame(date1, date2) {
      var units = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'milliseconds';

      if (!date1 || !date2) {
        return false;
      }

      if (units === 'milliseconds') {
        return date1.valueOf() === date2.valueOf();
      }
      /** @type {?} */


      var inputMs = date2.valueOf();
      return startOf(date1, units).valueOf() <= inputMs && inputMs <= endOf(date1, units).valueOf();
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */


    function isSameDay$1(date1, date2) {
      return date1.getDay() == date2.getDay();
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @param {?=} units
     * @return {?}
     */


    function isSameOrAfter(date1, date2, units) {
      return isSame(date1, date2, units) || isAfter(date1, date2, units);
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @param {?=} units
     * @return {?}
     */


    function isSameOrBefore(date1, date2, units) {
      return isSame(date1, date2, units) || isBefore(date1, date2, units);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    // tslint:disable-next-line

    /** @type {?} */

    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    /**
     * @param {?=} input
     * @param {?=} key
     * @param {?=} config
     * @return {?}
     */

    function createDuration(input, key) {
      var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      /** @type {?} */
      var duration = convertDuration(input, key); // matching against regexp is expensive, do it on demand

      return new Duration(duration, config);
    }
    /**
     * @param {?} input
     * @param {?} key
     * @return {?}
     */


    function convertDuration(input, key) {
      // checks for null or undefined
      if (input == null) {
        return {};
      }

      if (isDuration(input)) {
        return {
          milliseconds: input._milliseconds,
          day: input._days,
          month: input._months
        };
      }

      if (isNumber(input)) {
        // duration = {};
        return key ? _defineProperty({}, key, input) : {
          milliseconds: input
        };
      }

      if (isString(input)) {
        /** @type {?} */
        var match = aspNetRegex.exec(input);

        if (match) {
          /** @type {?} */
          var sign = match[1] === '-' ? -1 : 1;
          return {
            year: 0,
            day: toInt(match[DATE]) * sign,
            hours: toInt(match[HOUR]) * sign,
            minutes: toInt(match[MINUTE]) * sign,
            seconds: toInt(match[SECOND]) * sign,
            // the millisecond decimal point is included in the match
            milliseconds: toInt(absRound(toInt(match[MILLISECOND]) * 1000)) * sign
          };
        }

        match = isoRegex.exec(input);

        if (match) {
          /** @type {?} */
          var _sign2 = match[1] === '-' ? -1 : match[1] === '+' ? 1 : 1;

          return {
            year: parseIso(match[2], _sign2),
            month: parseIso(match[3], _sign2),
            week: parseIso(match[4], _sign2),
            day: parseIso(match[5], _sign2),
            hours: parseIso(match[6], _sign2),
            minutes: parseIso(match[7], _sign2),
            seconds: parseIso(match[8], _sign2)
          };
        }
      }

      if (isObject(input) && ('from' in input || 'to' in input)) {
        /** @type {?} */
        var diffRes = momentsDifference(parseDate(input.from), parseDate(input.to));
        return {
          milliseconds: diffRes.milliseconds,
          month: diffRes.months
        };
      }

      return input;
    } // createDuration.fn = Duration.prototype;
    // createDuration.invalid = invalid;

    /**
     * @param {?} inp
     * @param {?} sign
     * @return {?}
     */


    function parseIso(inp, sign) {
      // We'd normally use ~~inp for this, but unfortunately it also
      // converts floats to ints.
      // inp may be undefined, so careful calling replace on it.

      /** @type {?} */
      var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

      return (isNaN(res) ? 0 : res) * sign;
    }
    /**
     * @param {?} base
     * @param {?} other
     * @return {?}
     */


    function positiveMomentsDifference(base, other) {
      /** @type {?} */
      var res = {
        milliseconds: 0,
        months: 0
      };
      res.months = getMonth(other) - getMonth(base) + (_getFullYear(other) - _getFullYear(base)) * 12;
      /** @type {?} */

      var _basePlus = add(cloneDate(base), res.months, 'month');

      if (isAfter(_basePlus, other)) {
        --res.months;
      }

      res.milliseconds = +other - +add(cloneDate(base), res.months, 'month');
      return res;
    }
    /**
     * @param {?} base
     * @param {?} other
     * @return {?}
     */


    function momentsDifference(base, other) {
      if (!(isDateValid(base) && isDateValid(other))) {
        return {
          milliseconds: 0,
          months: 0
        };
      }
      /** @type {?} */


      var res;
      /** @type {?} */

      var _other = cloneWithOffset(other, base, {
        _offset: base.getTimezoneOffset()
      });

      if (isBefore(base, _other)) {
        res = positiveMomentsDifference(base, _other);
      } else {
        res = positiveMomentsDifference(_other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
      }

      return res;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} date
     * @param {?} val
     * @param {?} period
     * @param {?=} isUTC
     * @return {?}
     */


    function add(date, val, period, isUTC) {
      /** @type {?} */
      var dur = createDuration(val, period);
      return addSubtract(date, dur, 1, isUTC);
    }
    /**
     * @param {?} date
     * @param {?} val
     * @param {?} period
     * @param {?=} isUTC
     * @return {?}
     */


    function subtract(date, val, period, isUTC) {
      /** @type {?} */
      var dur = createDuration(val, period);
      return addSubtract(date, dur, -1, isUTC);
    }
    /**
     * @param {?} date
     * @param {?} duration
     * @param {?} isAdding
     * @param {?=} isUTC
     * @return {?}
     */


    function addSubtract(date, duration, isAdding, isUTC) {
      /** @type {?} */
      var milliseconds = duration._milliseconds;
      /** @type {?} */

      var days = absRound(duration._days);
      /** @type {?} */

      var months = absRound(duration._months); // todo: add timezones support
      // const _updateOffset = updateOffset == null ? true : updateOffset;

      if (months) {
        setMonth(date, getMonth(date, isUTC) + months * isAdding, isUTC);
      }

      if (days) {
        setDate(date, getDate(date, isUTC) + days * isAdding, isUTC);
      }

      if (milliseconds) {
        setTime(date, getTime(date) + milliseconds * isAdding);
      }

      return cloneDate(date); // todo: add timezones support
      // if (_updateOffset) {
      //   hooks.updateOffset(date, days || months);
      // }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function initDayOfWeek() {
      // FORMATTING
      addFormatToken('d', null, 'do',
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return getDay(date, opts.isUTC).toString(10);
      });
      addFormatToken('dd', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
      });
      addFormatToken('ddd', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
      });
      addFormatToken('dddd', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return opts.locale.weekdays(date, opts.format, opts.isUTC);
      });
      addFormatToken('e', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return getLocaleDayOfWeek(date, opts.locale, opts.isUTC).toString(10); // return getDay(date, opts.isUTC).toString(10);
      });
      addFormatToken('E', null, null,
      /**
      * @param {?} date
      * @param {?} opts
      * @return {?}
      */
      function (date, opts) {
        return getISODayOfWeek(date, opts.isUTC).toString(10);
      }); // ALIASES

      addUnitAlias('day', 'd');
      addUnitAlias('weekday', 'e');
      addUnitAlias('isoWeekday', 'E'); // PRIORITY

      addUnitPriority('day', 11);
      addUnitPriority('weekday', 11);
      addUnitPriority('isoWeekday', 11); // PARSING

      addRegexToken('d', match1to2);
      addRegexToken('e', match1to2);
      addRegexToken('E', match1to2);
      addRegexToken('dd',
      /**
      * @param {?} isStrict
      * @param {?} locale
      * @return {?}
      */
      function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
      });
      addRegexToken('ddd',
      /**
      * @param {?} isStrict
      * @param {?} locale
      * @return {?}
      */
      function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
      });
      addRegexToken('dddd',
      /**
      * @param {?} isStrict
      * @param {?} locale
      * @return {?}
      */
      function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
      });
      addWeekParseToken(['dd', 'ddd', 'dddd'],
      /**
      * @param {?} input
      * @param {?} week
      * @param {?} config
      * @param {?} token
      * @return {?}
      */
      function (input, week, config, token) {
        /** @type {?} */
        var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


        if (weekday != null) {
          week.d = weekday;
        } else {
          getParsingFlags(config).invalidWeekday = !!input;
        }

        return config;
      });
      addWeekParseToken(['d', 'e', 'E'],
      /**
      * @param {?} input
      * @param {?} week
      * @param {?} config
      * @param {?} token
      * @return {?}
      */
      function (input, week, config, token) {
        week[token] = toInt(input);
        return config;
      });
    } // HELPERS

    /**
     * @param {?} input
     * @param {?} locale
     * @return {?}
     */


    function parseWeekday(input, locale) {
      if (!isString(input)) {
        return input;
      }
      /** @type {?} */


      var _num = parseInt(input, 10);

      if (!isNaN(_num)) {
        return _num;
      }
      /** @type {?} */


      var _weekDay = locale.weekdaysParse(input);

      if (isNumber(_weekDay)) {
        return _weekDay;
      }

      return null;
    }
    /**
     * @param {?} input
     * @param {?=} locale
     * @return {?}
     */


    function parseIsoWeekday(input) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getLocale();

      if (isString(input)) {
        return locale.weekdaysParse(input) % 7 || 7;
      }

      return isNumber(input) && isNaN(input) ? null : input;
    } // MOMENTS

    /**
     * @param {?} date
     * @param {?} input
     * @param {?} opts
     * @return {?}
     */


    function getSetDayOfWeek(date, input, opts) {
      if (!input) {
        return getDayOfWeek(date, opts.isUTC);
      }

      return setDayOfWeek(date, input, opts.locale, opts.isUTC);
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */


    function setDayOfWeek(date, input) {
      var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : getLocale();
      var isUTC = arguments.length > 3 ? arguments[3] : undefined;

      /** @type {?} */
      var day = getDay(date, isUTC);
      /** @type {?} */

      var _input = parseWeekday(input, locale);

      return add(date, _input - day, 'day');
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getDayOfWeek(date, isUTC) {
      return getDay(date, isUTC);
    }
    /**
     * ****************************************
     * @param {?} date
     * @param {?=} locale
     * @param {?=} isUTC
     * @return {?}
     */
    // todo: utc
    // getSetLocaleDayOfWeek


    function getLocaleDayOfWeek(date) {
      var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getLocale();
      var isUTC = arguments.length > 2 ? arguments[2] : undefined;
      return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} opts
     * @return {?}
     */


    function setLocaleDayOfWeek(date, input) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      /** @type {?} */
      var weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
      return add(date, input - weekday, 'day');
    } // getSetISODayOfWeek

    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */


    function getISODayOfWeek(date, isUTC) {
      return getDay(date, isUTC) || 7;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} opts
     * @return {?}
     */


    function setISODayOfWeek(date, input) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      // behaves the same as moment#day except
      // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
      // as a setter, sunday should belong to the previous week.
      // behaves the same as moment#day except
      // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
      // as a setter, sunday should belong to the previous week.

      /** @type {?} */
      var weekday = parseIsoWeekday(input, opts.locale);
      return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    //! moment.js locale configuration
    //! locale : Arabic [ar]
    //! author : Abdel Said: https://github.com/abdelsaid
    //! author : Ahmed Elkhatib
    //! author : forabi https://github.com/forabi

    /** @type {?} */


    var symbolMap = {
      1: '١',
      2: '٢',
      3: '٣',
      4: '٤',
      5: '٥',
      6: '٦',
      7: '٧',
      8: '٨',
      9: '٩',
      0: '٠'
    };
    /** @type {?} */

    var numberMap = {
      '١': '1',
      '٢': '2',
      '٣': '3',
      '٤': '4',
      '٥': '5',
      '٦': '6',
      '٧': '7',
      '٨': '8',
      '٩': '9',
      '٠': '0'
    };
    /** @type {?} */

    var pluralForm =
    /**
    * @param {?} num
    * @return {?}
    */
    function pluralForm(num) {
      return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
    };

    var ɵ0$1 = pluralForm;
    /** @type {?} */

    var plurals = {
      s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
      m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
      h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
      d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
      M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
      y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    };
    /** @type {?} */

    var pluralize =
    /**
    * @param {?} u
    * @return {?}
    */
    function pluralize(u) {
      return (
        /**
        * @param {?} num
        * @param {?} withoutSuffix
        * @return {?}
        */
        function (num, withoutSuffix) {
          /** @type {?} */
          var f = pluralForm(num);
          /** @type {?} */

          var str = plurals[u][pluralForm(num)];

          if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
          }

          return (
            /** @type {?} */
            str.replace(/%d/i, num.toString())
          );
        }
      );
    };

    var ɵ1 = pluralize;
    /** @type {?} */

    var months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    /** @type {?} */

    var arLocale = {
      abbr: 'ar',
      months: months,
      monthsShort: months,
      weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
      weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
      weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: "D/\u200FM/\u200FYYYY",
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
      },
      meridiemParse: /ص|م/,

      /**
       * @param {?} input
       * @return {?}
       */
      isPM: function isPM(input) {
        return 'م' === input;
      },

      /**
       * @param {?} hour
       * @param {?} minute
       * @param {?} isLower
       * @return {?}
       */
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 12) {
          return 'ص';
        } else {
          return 'م';
        }
      },
      calendar: {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'بعد %s',
        past: 'منذ %s',
        s: pluralize('s'),
        ss: pluralize('s'),
        m: pluralize('m'),
        mm: pluralize('m'),
        h: pluralize('h'),
        hh: pluralize('h'),
        d: pluralize('d'),
        dd: pluralize('d'),
        M: pluralize('M'),
        MM: pluralize('M'),
        y: pluralize('y'),
        yy: pluralize('y')
      },

      /**
       * @param {?} str
       * @return {?}
       */
      preparse: function preparse(str) {
        return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g,
        /**
        * @param {?} match
        * @return {?}
        */
        function (match) {
          return numberMap[match];
        }).replace(/،/g, ',');
      },

      /**
       * @param {?} str
       * @return {?}
       */
      postformat: function postformat(str) {
        return str.replace(/\d/g,
        /**
        * @param {?} match
        * @return {?}
        */
        function (match) {
          return symbolMap[match];
        }).replace(/,/g, '،');
      },
      week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Bulgarian [bg]
    //! author : Iskren Ivov Chernev : https://github.com/ichernev
    //! author : Kunal Marwaha : https://github.com/marwahaha
    //! author : Matt Grande : https://github.com/mattgrande
    //! author : Isaac Cambron : https://github.com/icambron
    //! author : Venelin Manchev : https://github.com/vmanchev

    var ɵ0$2 =
    /**
    * @param {?} d
    * @return {?}
    */
    function ɵ0$2(d) {
      switch (d) {
        case 0:
        case 3:
        case 6:
          return '[В изминалата] dddd [в] LT';

        case 1:
        case 2:
        case 4:
        case 5:
          return '[В изминалия] dddd [в] LT';
      }
    };
    /** @type {?} */


    var bgLocale = {
      abbr: 'bg',
      months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
      monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
      weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
      weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
      weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'D.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
      },
      calendar: {
        sameDay: '[Днес в] LT',
        nextDay: '[Утре в] LT',
        nextWeek: 'dddd [в] LT',
        lastDay: '[Вчера в] LT',
        lastWeek: ɵ0$2,
        sameElse: 'L'
      },
      relativeTime: {
        future: 'след %s',
        past: 'преди %s',
        s: 'няколко секунди',
        ss: '%d секунди',
        m: 'минута',
        mm: '%d минути',
        h: 'час',
        hh: '%d часа',
        d: 'ден',
        dd: '%d дни',
        M: 'месец',
        MM: '%d месеца',
        y: 'година',
        yy: '%d години'
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
      ordinal:
      /**
      * @param {?} _num
      * @return {?}
      */
      function ordinal(_num) {
        /** @type {?} */
        var number = Number(_num);
        /** @type {?} */

        var lastDigit = number % 10;
        /** @type {?} */

        var last2Digits = number % 100;

        if (number === 0) {
          return number + '-ев';
        } else if (last2Digits === 0) {
          return number + '-ен';
        } else if (last2Digits > 10 && last2Digits < 20) {
          return number + '-ти';
        } else if (lastDigit === 1) {
          return number + '-ви';
        } else if (lastDigit === 2) {
          return number + '-ри';
        } else if (lastDigit === 7 || lastDigit === 8) {
          return number + '-ми';
        } else {
          return number + '-ти';
        }
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Catalan [ca]
    //! author : Xavier Arbat : https://github.com/XavisaurusRex

    /** @type {?} */

    var monthsShortDot = 'gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.'.split('_');
    /** @type {?} */

    var _monthsShort = 'ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des'.split('_');
    /** @type {?} */


    var monthsParse = [/^gen/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^oct/i, /^nov/i, /^des/i];
    /** @type {?} */

    var monthsRegex = /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i;
    /** @type {?} */

    var caLocale = {
      abbr: 'ca',
      months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),

      /**
       * @param {?} date
       * @param {?} format
       * @param {?=} isUTC
       * @return {?}
       */
      monthsShort: function monthsShort(date, format, isUTC) {
        if (!date) {
          return monthsShortDot;
        }

        if (/-MMM-/.test(format)) {
          return _monthsShort[getMonth(date, isUTC)];
        }

        return monthsShortDot[getMonth(date, isUTC)];
      },
      monthsRegex: monthsRegex,
      monthsShortRegex: monthsRegex,
      monthsStrictRegex: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,
      monthsShortStrictRegex: /^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,
      monthsParse: monthsParse,
      longMonthsParse: monthsParse,
      shortMonthsParse: monthsParse,
      weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
      weekdaysShort: 'diu._dil._dim._dix._dij._div._dis.'.split('_'),
      weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
      },
      calendar: {
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay: function sameDay(date) {
          return '[avui a ' + (true ? 'les' : undefined) + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        nextDay: function nextDay(date) {
          return '[dema a ' + (true ? 'les' : undefined) + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek: function nextWeek(date) {
          return 'dddd [a ' + (true ? 'les' : undefined) + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        lastDay: function lastDay(date) {
          return '[ahir a ' + (true ? 'les' : undefined) + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          return '[el] dddd [' + (true ? 'passades les' : undefined) + '] LT';
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'en %s',
        past: 'fa %s',
        s: 'uns segons',
        ss: '%d segons',
        m: 'un minut',
        mm: '%d minuts',
        h: 'una hora',
        hh: '%d hores',
        d: 'un dia',
        dd: '%d dies',
        M: 'un mes',
        MM: '%d mesos',
        y: 'un any',
        yy: '%d anys'
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|on|er|rt|é)/,

      /**
       * @param {?} _num
       * @return {?}
       */
      ordinal: function ordinal(_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */

        var output = num > 4 ? 'é' : num === 1 || num === 3 ? 'r' : num === 2 ? 'n' : num === 4 ? 't' : 'é';
        return num + output;
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Czech [cs]
    //! author : petrbela : https://github.com/petrbela

    /** @type {?} */

    var months$1 = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
    /** @type {?} */

    var monthsShort$1 = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
    /**
     * @param {?} num
     * @return {?}
     */

    function plural(num) {
      return num > 1 && num < 5 && ~~(num / 10) !== 1;
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */


    function translate(num, withoutSuffix, key, isFuture) {
      /** @type {?} */
      var result = num + ' ';

      switch (key) {
        case 's':
          // a few seconds / in a few seconds / a few seconds ago
          return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami';

        case 'ss':
          // 9 seconds / in 9 seconds / 9 seconds ago
          if (withoutSuffix || isFuture) {
            return result + (plural(num) ? 'sekundy' : 'sekund');
          } else {
            return result + 'sekundami';
          }

        // break;

        case 'm':
          // a minute / in a minute / a minute ago
          return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';

        case 'mm':
          // 9 minutes / in 9 minutes / 9 minutes ago
          if (withoutSuffix || isFuture) {
            return result + (plural(num) ? 'minuty' : 'minut');
          } else {
            return result + 'minutami';
          }

        // break;

        case 'h':
          // an hour / in an hour / an hour ago
          return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';

        case 'hh':
          // 9 hours / in 9 hours / 9 hours ago
          if (withoutSuffix || isFuture) {
            return result + (plural(num) ? 'hodiny' : 'hodin');
          } else {
            return result + 'hodinami';
          }

        // break;

        case 'd':
          // a day / in a day / a day ago
          return withoutSuffix || isFuture ? 'den' : 'dnem';

        case 'dd':
          // 9 days / in 9 days / 9 days ago
          if (withoutSuffix || isFuture) {
            return result + (plural(num) ? 'dny' : 'dní');
          } else {
            return result + 'dny';
          }

        // break;

        case 'M':
          // a month / in a month / a month ago
          return withoutSuffix || isFuture ? 'měsíc' : 'měsícem';

        case 'MM':
          // 9 months / in 9 months / 9 months ago
          if (withoutSuffix || isFuture) {
            return result + (plural(num) ? 'měsíce' : 'měsíců');
          } else {
            return result + 'měsíci';
          }

        // break;

        case 'y':
          // a year / in a year / a year ago
          return withoutSuffix || isFuture ? 'rok' : 'rokem';

        case 'yy':
          // 9 years / in 9 years / 9 years ago
          if (withoutSuffix || isFuture) {
            return result + (plural(num) ? 'roky' : 'let');
          } else {
            return result + 'lety';
          }

        // break;
      }
    }

    var ɵ0$3 =
    /**
    * @param {?} months
    * @param {?} monthsShort
    * @return {?}
    */
    function ɵ0$3(months, monthsShort) {
      /** @type {?} */
      var i;
      /** @type {?} */

      var _monthsParse = [];

      for (i = 0; i < 12; i++) {
        // use custom parser to solve problem with July (červenec)
        _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
      }

      return _monthsParse;
    },
        ɵ1$1 =
    /**
    * @param {?} monthsShort
    * @return {?}
    */
    function ɵ1$1(monthsShort) {
      /** @type {?} */
      var i;
      /** @type {?} */

      var _shortMonthsParse = [];

      for (i = 0; i < 12; i++) {
        _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
      }

      return _shortMonthsParse;
    },
        ɵ2 =
    /**
    * @param {?} months
    * @return {?}
    */
    function ɵ2(months) {
      /** @type {?} */
      var i;
      /** @type {?} */

      var _longMonthsParse = [];

      for (i = 0; i < 12; i++) {
        _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
      }

      return _longMonthsParse;
    };
    /** @type {?} */


    var csLocale = {
      abbr: 'cs',
      months: months$1,
      monthsShort: monthsShort$1,
      monthsParse: ɵ0$3(months$1, monthsShort$1),
      shortMonthsParse: ɵ1$1(monthsShort$1),
      longMonthsParse: ɵ2(months$1),
      weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
      weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
      weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd D. MMMM YYYY H:mm',
        l: 'D. M. YYYY'
      },
      calendar: {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',

        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek: function nextWeek(date) {
          switch (getDayOfWeek(date)) {
            case 0:
              return '[v neděli v] LT';

            case 1:
            case 2:
              return '[v] dddd [v] LT';

            case 3:
              return '[ve středu v] LT';

            case 4:
              return '[ve čtvrtek v] LT';

            case 5:
              return '[v pátek v] LT';

            case 6:
              return '[v sobotu v] LT';
          }
        },
        lastDay: '[včera v] LT',

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          switch (getDayOfWeek(date)) {
            case 0:
              return '[minulou neděli v] LT';

            case 1:
            case 2:
              return '[minulé] dddd [v] LT';

            case 3:
              return '[minulou středu v] LT';

            case 4:
            case 5:
              return '[minulý] dddd [v] LT';

            case 6:
              return '[minulou sobotu v] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'za %s',
        past: 'před %s',
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format
    //! moment.js locale configuration
    //! locale : Danish (Denmark) [da]
    //! author : Per Hansen : https://github.com/perhp

    /** @type {?} */

    var daLocale = {
      abbr: 'da',
      months: 'Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
      weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'),
      weekdaysShort: 'Søn_Man_Tir_Ons_Tor_Fre_Lør'.split('_'),
      weekdaysMin: 'Sø_Ma_Ti_On_To_Fr_Lø'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
      },
      calendar: {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'på dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[i] dddd[s kl.] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'få sekunder',
        m: 'et minut',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dage',
        M: 'en måned',
        MM: '%d måneder',
        y: 'et år',
        yy: '%d år'
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:object-literal-key-quotes
    //! moment.js locale configuration
    //! locale : German [de]
    //! author : lluchs : https://github.com/lluchs
    //! author: Menelion Elensúle: https://github.com/Oire
    //! author : Mikolaj Dadela : https://github.com/mik01aj

    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */

    function processRelativeTime(num, withoutSuffix, key, isFuture) {
      /** @type {?} */
      var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [num + ' Tage', num + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [num + ' Monate', num + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [num + ' Jahre', num + ' Jahren']
      };
      return withoutSuffix ? format[key][0] : format[key][1];
    }
    /** @type {?} */


    var deLocale = {
      abbr: 'de',
      months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
      monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
      monthsParseExact: true,
      weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
      weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
      weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
      },
      relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        ss: '%d Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : English (United Kingdom) [en-gb]
    //! author : Chris Gedrim : https://github.com/chrisgedrim

    /** @type {?} */

    var enGbLocale = {
      abbr: 'en-gb',
      months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
      weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
      weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
      weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,

      /**
       * @param {?} _num
       * @return {?}
       */
      ordinal: function ordinal(_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */

        var b = num % 10;
        /** @type {?} */

        var output = ~~(num % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
        return num + output;
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Spanish (Dominican Republic) [es-do]

    /** @type {?} */

    var monthsShortDot$1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
    /** @type {?} */

    var monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    /** @type {?} */

    var monthsParse$1 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    /** @type {?} */

    var monthsRegex$1 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    /** @type {?} */

    var esDoLocale = {
      abbr: 'es-do',
      months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),

      /**
       * @param {?} date
       * @param {?} format
       * @param {?=} isUTC
       * @return {?}
       */
      monthsShort: function monthsShort(date, format, isUTC) {
        if (!date) {
          return monthsShortDot$1;
        } else if (/-MMM-/.test(format)) {
          return monthsShort$2[getMonth(date, isUTC)];
        } else {
          return monthsShortDot$1[getMonth(date, isUTC)];
        }
      },
      monthsRegex: monthsRegex$1,
      monthsShortRegex: monthsRegex$1,
      monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
      monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      monthsParse: monthsParse$1,
      longMonthsParse: monthsParse$1,
      shortMonthsParse: monthsParse$1,
      weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
      weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
      weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY h:mm A',
        LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
      },
      calendar: {
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay: function sameDay(date) {
          return '[hoy a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        nextDay: function nextDay(date) {
          return '[mañana a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek: function nextWeek(date) {
          return 'dddd [a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        lastDay: function lastDay(date) {
          return '[ayer a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          return '[el] dddd [pasado a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Spanish [es]
    //! author : Julio Napurí : https://github.com/julionc

    /** @type {?} */

    var monthsShortDot$2 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
    /** @type {?} */

    var monthsShort$3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    /** @type {?} */

    var monthsParse$2 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    /** @type {?} */

    var monthsRegex$2 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
    /** @type {?} */

    var esLocale = {
      abbr: 'es',
      months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),

      /**
       * @param {?} date
       * @param {?} format
       * @param {?=} isUTC
       * @return {?}
       */
      monthsShort: function monthsShort(date, format, isUTC) {
        if (!date) {
          return monthsShortDot$2;
        }

        if (/-MMM-/.test(format)) {
          return monthsShort$3[getMonth(date, isUTC)];
        }

        return monthsShortDot$2[getMonth(date, isUTC)];
      },
      monthsRegex: monthsRegex$2,
      monthsShortRegex: monthsRegex$2,
      monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
      monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
      monthsParse: monthsParse$2,
      longMonthsParse: monthsParse$2,
      shortMonthsParse: monthsParse$2,
      weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
      weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
      weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
      },
      calendar: {
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay: function sameDay(date) {
          return '[hoy a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        nextDay: function nextDay(date) {
          return '[mañana a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek: function nextWeek(date) {
          return 'dddd [a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        lastDay: function lastDay(date) {
          return '[ayer a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          return '[el] dddd [pasado a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Spanish (United States) [es-us]
    //! author : bustta : https://github.com/bustta

    /** @type {?} */

    var monthsShortDot$3 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
    /** @type {?} */

    var monthsShort$4 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
    /** @type {?} */

    var esUsLocale = {
      abbr: 'es-us',
      months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),

      /**
       * @param {?} date
       * @param {?} format
       * @param {?=} isUTC
       * @return {?}
       */
      monthsShort: function monthsShort(date, format, isUTC) {
        if (!date) {
          return monthsShortDot$3;
        } else if (/-MMM-/.test(format)) {
          return monthsShort$4[getMonth(date, isUTC)];
        } else {
          return monthsShortDot$3[getMonth(date, isUTC)];
        }
      },
      monthsParseExact: true,
      weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
      weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
      weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM [de] D [de] YYYY',
        LLL: 'MMMM [de] D [de] YYYY h:mm A',
        LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A'
      },
      calendar: {
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay: function sameDay(date) {
          return '[hoy a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        nextDay: function nextDay(date) {
          return '[mañana a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek: function nextWeek(date) {
          return 'dddd [a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        lastDay: function lastDay(date) {
          return '[ayer a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          return '[el] dddd [pasado a la' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Estonian [et]
    //! author : Chris Gedrim : https://github.com/a90machado

    /** @type {?} */

    var processRelativeTime$1 =
    /**
    * @param {?} num
    * @param {?} withoutSuffix
    * @param {?} key
    * @param {?} isFuture
    * @return {?}
    */
    function processRelativeTime$1(num, withoutSuffix, key, isFuture) {
      /** @type {?} */
      var format = {
        s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
        ss: [num + 'sekundi', num + 'sekundit'],
        m: ['ühe minuti', 'üks minut'],
        mm: [num + ' minuti', num + ' minutit'],
        h: ['ühe tunni', 'tund aega', 'üks tund'],
        hh: [num + ' tunni', num + ' tundi'],
        d: ['ühe päeva', 'üks päev'],
        M: ['kuu aja', 'kuu aega', 'üks kuu'],
        MM: [num + ' kuu', num + ' kuud'],
        y: ['ühe aasta', 'aasta', 'üks aasta'],
        yy: [num + ' aasta', num + ' aastat']
      };

      if (withoutSuffix) {
        return format[key][2] ? format[key][2] : format[key][1];
      }

      return isFuture ? format[key][0] : format[key][1];
    };

    var ɵ0$4 = processRelativeTime$1;
    /** @type {?} */

    var etLocale = {
      abbr: 'et',
      months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
      monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
      weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
      weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
      weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
      },
      calendar: {
        sameDay: '[Täna,] LT',
        nextDay: '[Homme,] LT',
        nextWeek: '[Järgmine] dddd LT',
        lastDay: '[Eile,] LT',
        lastWeek: '[Eelmine] dddd LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s pärast',
        past: '%s tagasi',
        s: processRelativeTime$1,
        ss: processRelativeTime$1,
        m: processRelativeTime$1,
        mm: processRelativeTime$1,
        h: processRelativeTime$1,
        hh: processRelativeTime$1,
        d: processRelativeTime$1,
        dd: '%d päeva',
        M: processRelativeTime$1,
        MM: processRelativeTime$1,
        y: processRelativeTime$1,
        yy: processRelativeTime$1
      },
      dayOfMonthOrdinalParse: /\d{1,2}./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    // https://github.com/moment/moment/blob/develop/locale/fi.js

    /** @type {?} */

    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' ');
    /** @type {?} */

    var numbersFuture = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', numbersPast[7], numbersPast[8], numbersPast[9]];
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */

    function translate$1(num, withoutSuffix, key, isFuture) {
      /** @type {?} */
      var result = '';

      switch (key) {
        case 's':
          return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';

        case 'ss':
          return isFuture ? 'sekunnin' : 'sekuntia';

        case 'm':
          return isFuture ? 'minuutin' : 'minuutti';

        case 'mm':
          result = isFuture ? 'minuutin' : 'minuuttia';
          break;

        case 'h':
          return isFuture ? 'tunnin' : 'tunti';

        case 'hh':
          result = isFuture ? 'tunnin' : 'tuntia';
          break;

        case 'd':
          return isFuture ? 'päivän' : 'päivä';

        case 'dd':
          result = isFuture ? 'päivän' : 'päivää';
          break;

        case 'M':
          return isFuture ? 'kuukauden' : 'kuukausi';

        case 'MM':
          result = isFuture ? 'kuukauden' : 'kuukautta';
          break;

        case 'y':
          return isFuture ? 'vuoden' : 'vuosi';

        case 'yy':
          result = isFuture ? 'vuoden' : 'vuotta';
          break;
      }

      result = verbalNumber(num, isFuture) + ' ' + result;
      return result;
    }
    /**
     * @param {?} num
     * @param {?} isFuture
     * @return {?}
     */


    function verbalNumber(num, isFuture) {
      return num < 10 ? isFuture ? numbersFuture[num] : numbersPast[num] : num;
    }
    /** @type {?} */


    var fiLocale = {
      abbr: 'fi',
      months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
      monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
      weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
      weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
      weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
      longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD.MM.YYYY',
        LL: 'Do MMMM[ta] YYYY',
        LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
        LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
        l: 'D.M.YYYY',
        ll: 'Do MMM YYYY',
        lll: 'Do MMM YYYY, [klo] HH.mm',
        llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
      },
      calendar: {
        sameDay: '[tänään] [klo] LT',
        nextDay: '[huomenna] [klo] LT',
        nextWeek: 'dddd [klo] LT',
        lastDay: '[eilen] [klo] LT',
        lastWeek: '[viime] dddd[na] [klo] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s päästä',
        past: '%s sitten',
        s: translate$1,
        ss: translate$1,
        m: translate$1,
        mm: translate$1,
        h: translate$1,
        hh: translate$1,
        d: translate$1,
        dd: translate$1,
        M: translate$1,
        MM: translate$1,
        y: translate$1,
        yy: translate$1
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : French [fr]
    //! author : John Fischer : https://github.com/jfroffice

    /** @type {?} */

    var frLocale = {
      abbr: 'fr',
      months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
      monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
      monthsParseExact: true,
      weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
      weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
      weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[Aujourd’hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'dans %s',
        past: 'il y a %s',
        s: 'quelques secondes',
        ss: '%d secondes',
        m: 'une minute',
        mm: '%d minutes',
        h: 'une heure',
        hh: '%d heures',
        d: 'un jour',
        dd: '%d jours',
        M: 'un mois',
        MM: '%d mois',
        y: 'un an',
        yy: '%d ans'
      },
      dayOfMonthOrdinalParse: /\d{1,2}(er|)/,

      /**
       * @param {?} _num
       * @param {?} period
       * @return {?}
       */
      ordinal: function ordinal(_num, period) {
        /** @type {?} */
        var num = Number(_num);

        switch (period) {
          // TODO: Return 'e' when day of month > 1. Move this case inside
          // block for masculine words below.
          // See https://github.com/moment/moment/issues/3375
          case 'D':
            return num + (num === 1 ? 'er' : '');
          // Words with masculine grammatical gender: mois, trimestre, jour

          default:
          case 'M':
          case 'Q':
          case 'DDD':
          case 'd':
            return num + (num === 1 ? 'er' : 'e');
          // Words with feminine grammatical gender: semaine

          case 'w':
          case 'W':
            return num + (num === 1 ? 're' : 'e');
        }
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Galician [gl]
    //! author : Darío Beiró : https://github.com/quinobravo

    /** @type {?} */

    var monthsShortDot$4 = 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_');
    /** @type {?} */

    var monthsShort$5 = 'xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec'.split('_');
    /** @type {?} */

    var monthsParse$3 = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
    /** @type {?} */

    var monthsRegex$3 = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
    /** @type {?} */

    var glLocale = {
      abbr: 'gl',
      months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),

      /**
       * @param {?} date
       * @param {?} format
       * @param {?=} isUTC
       * @return {?}
       */
      monthsShort: function monthsShort(date, format, isUTC) {
        if (!date) {
          return monthsShortDot$4;
        }

        if (/-MMM-/.test(format)) {
          return monthsShort$5[getMonth(date, isUTC)];
        }

        return monthsShortDot$4[getMonth(date, isUTC)];
      },
      monthsRegex: monthsRegex$3,
      monthsShortRegex: monthsRegex$3,
      monthsStrictRegex: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
      monthsShortStrictRegex: /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
      monthsParse: monthsParse$3,
      longMonthsParse: monthsParse$3,
      shortMonthsParse: monthsParse$3,
      weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
      weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
      weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
      },
      calendar: {
        /**
         * @param {?} date
         * @return {?}
         */
        sameDay: function sameDay(date) {
          return '[hoxe á' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        nextDay: function nextDay(date) {
          return '[mañan á' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek: function nextWeek(date) {
          return 'dddd [á' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        lastDay: function lastDay(date) {
          return '[onte á' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          return '[o] dddd [pasado á' + (getHours(date) !== 1 ? 's' : '') + '] LT';
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'en %s',
        past: 'fai %s',
        s: 'uns segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'unha hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un ano',
        yy: '%d anos'
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Hebrew [he]
    //! author : Tomer Cohen : https://github.com/tomer
    //! author : Moshe Simantov : https://github.com/DevelopmentIL
    //! author : Tal Ater : https://github.com/TalAter

    /** @type {?} */

    var heLocale = {
      abbr: 'he',
      months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
      monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
      weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
      weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
      weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [ב]MMMM YYYY',
        LLL: 'D [ב]MMMM YYYY HH:mm',
        LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
        l: 'D/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[היום ב־]LT',
        nextDay: '[מחר ב־]LT',
        nextWeek: 'dddd [בשעה] LT',
        lastDay: '[אתמול ב־]LT',
        lastWeek: '[ביום] dddd [האחרון בשעה] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'בעוד %s',
        past: 'לפני %s',
        s: 'מספר שניות',
        ss: '%d שניות',
        m: 'דקה',
        mm: '%d דקות',
        h: 'שעה',

        /**
         * @param {?} num
         * @return {?}
         */
        hh: function hh(num) {
          if (num === 2) {
            return 'שעתיים';
          }

          return num + ' שעות';
        },
        d: 'יום',

        /**
         * @param {?} num
         * @return {?}
         */
        dd: function dd(num) {
          if (num === 2) {
            return 'יומיים';
          }

          return num + ' ימים';
        },
        M: 'חודש',

        /**
         * @param {?} num
         * @return {?}
         */
        MM: function MM(num) {
          if (num === 2) {
            return 'חודשיים';
          }

          return num + ' חודשים';
        },
        y: 'שנה',

        /**
         * @param {?} num
         * @return {?}
         */
        yy: function yy(num) {
          if (num === 2) {
            return 'שנתיים';
          } else if (num % 10 === 0 && num !== 10) {
            return num + ' שנה';
          }

          return num + ' שנים';
        }
      },
      meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,

      /**
       * @param {?} input
       * @return {?}
       */
      isPM: function isPM(input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
      },

      /**
       * @param {?} hour
       * @param {?} minute
       * @param {?} isLower
       * @return {?}
       */
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 5) {
          return 'לפנות בוקר';
        } else if (hour < 10) {
          return 'בבוקר';
        } else if (hour < 12) {
          return isLower ? 'לפנה"צ' : 'לפני הצהריים';
        } else if (hour < 18) {
          return isLower ? 'אחה"צ' : 'אחרי הצהריים';
        } else {
          return 'בערב';
        }
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:no-parameter-reassignment prefer-switch
    //! moment.js locale configuration
    //! locale : Hindi [hi]
    //! author : Mayank Singhal : https://github.com/mayanksinghal

    /** @type {?} */

    var symbolMap$1 = {
      1: '१',
      2: '२',
      3: '३',
      4: '४',
      5: '५',
      6: '६',
      7: '७',
      8: '८',
      9: '९',
      0: '०'
    };
    /** @type {?} */

    var numberMap$1 = {
      '१': '1',
      '२': '2',
      '३': '3',
      '४': '4',
      '५': '5',
      '६': '6',
      '७': '7',
      '८': '8',
      '९': '9',
      '०': '0'
    };
    /** @type {?} */

    var hiLocale = {
      abbr: 'hi',
      months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
      monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
      monthsParseExact: true,
      weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
      weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
      weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
      longDateFormat: {
        LT: 'A h:mm बजे',
        LTS: 'A h:mm:ss बजे',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, A h:mm बजे',
        LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
      },
      calendar: {
        sameDay: '[आज] LT',
        nextDay: '[कल] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[कल] LT',
        lastWeek: '[पिछले] dddd, LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s में',
        past: '%s पहले',
        s: 'कुछ ही क्षण',
        ss: '%d सेकंड',
        m: 'एक मिनट',
        mm: '%d मिनट',
        h: 'एक घंटा',
        hh: '%d घंटे',
        d: 'एक दिन',
        dd: '%d दिन',
        M: 'एक महीने',
        MM: '%d महीने',
        y: 'एक वर्ष',
        yy: '%d वर्ष'
      },

      /**
       * @param {?} str
       * @return {?}
       */
      preparse: function preparse(str) {
        return str.replace(/[१२३४५६७८९०]/g,
        /**
        * @param {?} match
        * @return {?}
        */
        function (match) {
          return numberMap$1[match];
        });
      },

      /**
       * @param {?} str
       * @return {?}
       */
      postformat: function postformat(str) {
        return str.replace(/\d/g,
        /**
        * @param {?} match
        * @return {?}
        */
        function (match) {
          return symbolMap$1[match];
        });
      },
      // Hindi notation for meridiems are quite fuzzy in practice. While there exists
      // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
      meridiemParse: /रात|सुबह|दोपहर|शाम/,

      /**
       * @param {?} hour
       * @param {?} meridiem
       * @return {?}
       */
      meridiemHour: function meridiemHour(hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }

        if (meridiem === 'रात') {
          return hour < 4 ? hour : hour + 12;
        } else if (meridiem === 'सुबह') {
          return hour;
        } else if (meridiem === 'दोपहर') {
          return hour >= 10 ? hour : hour + 12;
        } else if (meridiem === 'शाम') {
          return hour + 12;
        }
      },

      /**
       * @param {?} hour
       * @param {?} minute
       * @param {?} isLower
       * @return {?}
       */
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
          return 'रात';
        } else if (hour < 10) {
          return 'सुबह';
        } else if (hour < 17) {
          return 'दोपहर';
        } else if (hour < 20) {
          return 'शाम';
        } else {
          return 'रात';
        }
      },
      week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Hungarian [hu]
    //! author : Adam Brunner : https://github.com/adambrunner

    /** @type {?} */

    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */

    function translate$2(num, withoutSuffix, key, isFuture) {
      switch (key) {
        case 's':
          return isFuture || withoutSuffix ? 'néhány másodperc' : 'néhány másodperce';

        case 'ss':
          return num + (isFuture || withoutSuffix ? ' másodperc' : ' másodperce');

        case 'm':
          return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');

        case 'mm':
          return num + (isFuture || withoutSuffix ? ' perc' : ' perce');

        case 'h':
          return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');

        case 'hh':
          return num + (isFuture || withoutSuffix ? ' óra' : ' órája');

        case 'd':
          return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');

        case 'dd':
          return num + (isFuture || withoutSuffix ? ' nap' : ' napja');

        case 'M':
          return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');

        case 'MM':
          return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');

        case 'y':
          return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');

        case 'yy':
          return num + (isFuture || withoutSuffix ? ' év' : ' éve');
      }

      return '';
    }
    /**
     * @param {?} date
     * @param {?} isFuture
     * @return {?}
     */


    function week(date, isFuture) {
      return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[getDayOfWeek(date)] + '] LT[-kor]';
    }
    /** @type {?} */


    var huLocale = {
      abbr: 'hu',
      months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
      monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
      weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
      weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
      weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'YYYY.MM.DD.',
        LL: 'YYYY. MMMM D.',
        LLL: 'YYYY. MMMM D. H:mm',
        LLLL: 'YYYY. MMMM D., dddd H:mm'
      },
      meridiemParse: /de|du/i,

      /**
       * @param {?} input
       * @return {?}
       */
      isPM: function isPM(input) {
        return input.charAt(1).toLowerCase() === 'u';
      },

      /**
       * @param {?} hours
       * @param {?} minutes
       * @param {?} isLower
       * @return {?}
       */
      meridiem: function meridiem(hours, minutes, isLower) {
        if (hours < 12) {
          return isLower === true ? 'de' : 'DE';
        } else {
          return isLower === true ? 'du' : 'DU';
        }
      },
      calendar: {
        sameDay: '[ma] LT[-kor]',
        nextDay: '[holnap] LT[-kor]',

        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek: function nextWeek(date) {
          return week(date, true);
        },
        lastDay: '[tegnap] LT[-kor]',

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          return week(date, false);
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s múlva',
        past: '%s',
        s: translate$2,
        ss: translate$2,
        m: translate$2,
        mm: translate$2,
        h: translate$2,
        hh: translate$2,
        d: translate$2,
        dd: translate$2,
        M: translate$2,
        MM: translate$2,
        y: translate$2,
        yy: translate$2
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Croatian [hr]
    //! author : Danijel Grmec : https://github.com/cobaltsis

    /** @type {?} */

    var hrLocale = {
      abbr: 'hr',
      months: 'Siječanj_Veljača_Ožujak_Travanj_Svibanj_Lipanj_Srpanj_Kolovoz_Rujan_Listopad_Studeni_Prosinac'.split('_'),
      monthsShort: 'Sij_Velj_Ožu_Tra_Svi_Lip_Srp_Kol_Ruj_Lis_Stu_Pro'.split('_'),
      weekdays: 'Nedjelja_Ponedjeljak_Utorak_Srijeda_Četvrtak_Petak_Subota'.split('_'),
      weekdaysShort: 'Ned_Pon_Uto_Sri_Čet_Pet_Sub'.split('_'),
      weekdaysMin: 'Ne_Po_Ut_Sr_Če_Pe_Su'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[Danas u] LT',
        nextDay: '[Sutra u] LT',
        nextWeek: 'dddd [u] LT',
        lastDay: '[Jučer u] LT',
        lastWeek: '[Zadnji] dddd [u] LT',
        sameElse: 'L'
      },
      invalidDate: 'Neispravan datum',
      relativeTime: {
        future: 'za %s',
        past: '%s prije',
        s: 'nekoliko sekundi',
        ss: '%d sekundi',
        m: 'minuta',
        mm: '%d minuta',
        h: 'sat',
        hh: '%d sati',
        d: 'dan',
        dd: '%d dana',
        M: 'mjesec',
        MM: '%d mjeseci',
        y: 'godina',
        yy: '%d godina'
      },
      dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,

      /**
       * @param {?} _num
       * @return {?}
       */
      ordinal: function ordinal(_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */

        var b = num % 10;
        /** @type {?} */

        var output = ~~(num % 100 / 10) === 1 ? '.' : b === 1 ? '.' : b === 2 ? '.' : b === 3 ? '.' : '.';
        return num + output;
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:no-parameter-reassignment prefer-switch
    //! moment.js locale configuration
    //! locale : Indonesia [id]
    //! author : Romy Kusuma : https://github.com/rkusuma
    //! reference: https://github.com/moment/moment/blob/develop/locale/id.js

    /** @type {?} */

    var idLocale = {
      abbr: 'id',
      months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
      weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
      weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
      weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
      longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [pukul] HH.mm',
        LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
      },
      meridiemParse: /pagi|siang|sore|malam/,

      /**
       * @param {?} hour
       * @param {?} meridiem
       * @return {?}
       */
      meridiemHour: function meridiemHour(hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }

        if (meridiem === 'pagi') {
          return hour;
        } else if (meridiem === 'siang') {
          return hour >= 11 ? hour : hour + 12;
        } else if (meridiem === 'sore' || meridiem === 'malam') {
          return hour + 12;
        }
      },

      /**
       * @param {?} hours
       * @param {?} minutes
       * @param {?} isLower
       * @return {?}
       */
      meridiem: function meridiem(hours, minutes, isLower) {
        if (hours < 11) {
          return 'pagi';
        } else if (hours < 15) {
          return 'siang';
        } else if (hours < 19) {
          return 'sore';
        } else {
          return 'malam';
        }
      },
      calendar: {
        sameDay: '[Hari ini pukul] LT',
        nextDay: '[Besok pukul] LT',
        nextWeek: 'dddd [pukul] LT',
        lastDay: '[Kemarin pukul] LT',
        lastWeek: 'dddd [lalu pukul] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'dalam %s',
        past: '%s yang lalu',
        s: 'beberapa detik',
        ss: '%d detik',
        m: 'semenit',
        mm: '%d menit',
        h: 'sejam',
        hh: '%d jam',
        d: 'sehari',
        dd: '%d hari',
        M: 'sebulan',
        MM: '%d bulan',
        y: 'setahun',
        yy: '%d tahun'
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Italian [it]
    //! author : Lorenzo : https://github.com/aliem
    //! author: Mattia Larentis: https://github.com/nostalgiaz

    /** @type {?} */

    var itLocale = {
      abbr: 'it',
      months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
      monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
      weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
      weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
      weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          switch (getDayOfWeek(date)) {
            case 0:
              return '[la scorsa] dddd [alle] LT';

            default:
              return '[lo scorso] dddd [alle] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        /**
         * @param {?} num
         * @return {?}
         */
        future: function future(num) {
          return (/^[0-9].+$/.test(num.toString(10)) ? 'tra' : 'in') + ' ' + num;
        },
        past: '%s fa',
        s: 'alcuni secondi',
        ss: '%d secondi',
        m: 'un minuto',
        mm: '%d minuti',
        h: 'un\'ora',
        hh: '%d ore',
        d: 'un giorno',
        dd: '%d giorni',
        M: 'un mese',
        MM: '%d mesi',
        y: 'un anno',
        yy: '%d anni'
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Japanese [ja]
    //! author : LI Long : https://github.com/baryon

    /** @type {?} */

    var jaLocale = {
      abbr: 'ja',
      months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
      weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
      weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日 HH:mm',
        LLLL: 'YYYY年M月D日 HH:mm dddd',
        l: 'YYYY/MM/DD',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日 HH:mm dddd'
      },
      meridiemParse: /午前|午後/i,

      /**
       * @param {?} input
       * @return {?}
       */
      isPM: function isPM(input) {
        return input === '午後';
      },

      /**
       * @param {?} hour
       * @param {?} minute
       * @param {?} isLower
       * @return {?}
       */
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 12) {
          return '午前';
        } else {
          return '午後';
        }
      },
      calendar: {
        sameDay: '[今日] LT',
        nextDay: '[明日] LT',
        nextWeek: '[来週]dddd LT',
        lastDay: '[昨日] LT',
        lastWeek: '[前週]dddd LT',
        sameElse: 'L'
      },
      dayOfMonthOrdinalParse: /\d{1,2}日/,

      /**
       * @param {?} num
       * @param {?} period
       * @return {?}
       */
      ordinal: function ordinal(num, period) {
        switch (period) {
          case 'd':
          case 'D':
          case 'DDD':
            return num + '日';

          default:
            return num.toString(10);
        }
      },
      relativeTime: {
        future: '%s後',
        past: '%s前',
        s: '数秒',
        ss: '%d秒',
        m: '1分',
        mm: '%d分',
        h: '1時間',
        hh: '%d時間',
        d: '1日',
        dd: '%d日',
        M: '1ヶ月',
        MM: '%dヶ月',
        y: '1年',
        yy: '%d年'
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Georgian [ka]
    //! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
    //! author : Levan Tskipuri : https://github.com/tskipa

    /** @type {?} */

    var kaLocale = {
      abbr: 'ka',
      months: {
        format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_'),
        standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_')
      },
      monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
      weekdays: {
        standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
        format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
        isFormat: /(წინა|შემდეგ)/
      },
      weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
      weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
      longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY h:mm A',
        LLLL: 'dddd, D MMMM YYYY h:mm A'
      },
      calendar: {
        sameDay: '[დღეს] LT[-ზე]',
        nextDay: '[ხვალ] LT[-ზე]',
        lastDay: '[გუშინ] LT[-ზე]',
        nextWeek: '[შემდეგ] dddd LT[-ზე]',
        lastWeek: '[წინა] dddd LT-ზე',
        sameElse: 'L'
      },
      relativeTime: {
        /**
         * @param {?} s
         * @return {?}
         */
        future: function future(s) {
          /** @type {?} */
          var st = s.toString();
          return /(წამი|წუთი|საათი|წელი)/.test(st) ? st.replace(/ი$/, 'ში') : st + 'ში';
        },

        /**
         * @param {?} s
         * @return {?}
         */
        past: function past(s) {
          /** @type {?} */
          var st = s.toString();

          if (/(წამი|წუთი|საათი|დღე|თვე)/.test(st)) {
            return st.replace(/(ი|ე)$/, 'ის წინ');
          }

          if (/წელი/.test(st)) {
            return st.replace(/წელი$/, 'წლის წინ');
          }
        },
        s: 'რამდენიმე წამი',
        ss: '%d წამი',
        m: 'წუთი',
        mm: '%d წუთი',
        h: 'საათი',
        hh: '%d საათი',
        d: 'დღე',
        dd: '%d დღე',
        M: 'თვე',
        MM: '%d თვე',
        y: 'წელი',
        yy: '%d წელი'
      },
      dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,

      /**
       * @param {?} _num
       * @param {?} _period
       * @return {?}
       */
      ordinal: function ordinal(_num, _period) {
        /** @type {?} */
        var num = Number(_num);

        if (num === 0) {
          return num.toString();
        }

        if (num === 1) {
          return num + '-ლი';
        }

        if (num < 20 || num <= 100 && num % 20 === 0 || num % 100 === 0) {
          return 'მე-' + num;
        }

        return num + '-ე';
      },
      week: {
        dow: 1,
        doy: 4
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // ! moment.js locale configuration
    // ! locale : Kazakh [kk]
    // ! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

    /** @type {?} */

    var suffixes = {
      0: '-ші',
      1: '-ші',
      2: '-ші',
      3: '-ші',
      4: '-ші',
      5: '-ші',
      6: '-шы',
      7: '-ші',
      8: '-ші',
      9: '-шы',
      10: '-шы',
      20: '-шы',
      30: '-шы',
      40: '-шы',
      50: '-ші',
      60: '-шы',
      70: '-ші',
      80: '-ші',
      90: '-шы',
      100: '-ші'
    };
    /** @type {?} */

    var kkLocale = {
      abbr: 'kk',
      months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
      monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
      weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
      weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
      weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[Бүгін сағат] LT',
        nextDay: '[Ертең сағат] LT',
        nextWeek: 'dddd [сағат] LT',
        lastDay: '[Кеше сағат] LT',
        lastWeek: '[Өткен аптаның] dddd [сағат] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s ішінде',
        past: '%s бұрын',
        s: 'бірнеше секунд',
        ss: '%d секунд',
        m: 'бір минут',
        mm: '%d минут',
        h: 'бір сағат',
        hh: '%d сағат',
        d: 'бір күн',
        dd: '%d күн',
        M: 'бір ай',
        MM: '%d ай',
        y: 'бір жыл',
        yy: '%d жыл'
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,

      /**
       * @param {?} _num
       * @return {?}
       */
      ordinal: function ordinal(_num) {
        /** @type {?} */
        var a = _num % 10;
        /** @type {?} */

        var b = _num >= 100 ? 100 : null;
        return _num + (suffixes[_num] || suffixes[a] || suffixes[b]);
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 7th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:object-literal-shorthand
    //! moment.js locale configuration
    //! locale : Korean [ko]
    //! author : Kyungwook, Park : https://github.com/kyungw00k
    //! author : Jeeeyul Lee <jeeeyul@gmail.com>

    /** @type {?} */

    var koLocale = {
      abbr: 'ko',
      months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
      monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
      weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
      weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
      weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
      longDateFormat: {
        LT: 'A h:mm',
        LTS: 'A h:mm:ss',
        L: 'YYYY.MM.DD',
        LL: 'YYYY년 MMMM D일',
        LLL: 'YYYY년 MMMM D일 A h:mm',
        LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
        l: 'YYYY.MM.DD',
        ll: 'YYYY년 MMMM D일',
        lll: 'YYYY년 MMMM D일 A h:mm',
        llll: 'YYYY년 MMMM D일 dddd A h:mm'
      },
      calendar: {
        sameDay: '오늘 LT',
        nextDay: '내일 LT',
        nextWeek: 'dddd LT',
        lastDay: '어제 LT',
        lastWeek: '지난주 dddd LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s 후',
        past: '%s 전',
        s: '몇 초',
        ss: '%d초',
        m: '1분',
        mm: '%d분',
        h: '한 시간',
        hh: '%d시간',
        d: '하루',
        dd: '%d일',
        M: '한 달',
        MM: '%d달',
        y: '일 년',
        yy: '%d년'
      },
      dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
      ordinal:
      /**
      * @param {?} num
      * @param {?} period
      * @return {?}
      */
      function ordinal(num, period) {
        switch (period) {
          case 'd':
          case 'D':
          case 'DDD':
            return num + '일';

          case 'M':
            return num + '월';

          case 'w':
          case 'W':
            return num + '주';

          default:
            return num.toString(10);
        }
      },
      meridiemParse: /오전|오후/,
      isPM:
      /**
      * @param {?} token
      * @return {?}
      */
      function isPM(token) {
        return token === '오후';
      },
      meridiem:
      /**
      * @param {?} hour
      * @param {?} minute
      * @param {?} isUpper
      * @return {?}
      */
      function meridiem(hour, minute, isUpper) {
        return hour < 12 ? '오전' : '오후';
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Lithuanian [lt]
    //! author : Stanislavas Guk : https://github.com/ixoster

    /** @type {?} */

    var units = {
      ss: 'sekundė_sekundžių_sekundes',
      m: 'minutė_minutės_minutę',
      mm: 'minutės_minučių_minutes',
      h: 'valanda_valandos_valandą',
      hh: 'valandos_valandų_valandas',
      d: 'diena_dienos_dieną',
      dd: 'dienos_dienų_dienas',
      M: 'mėnuo_mėnesio_mėnesį',
      MM: 'mėnesiai_mėnesių_mėnesius',
      y: 'metai_metų_metus',
      yy: 'metai_metų_metus'
    };
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */

    function translateSeconds(num, withoutSuffix, key, isFuture) {
      if (withoutSuffix) {
        return 'kelios sekundės';
      } else {
        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
      }
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */


    function translateSingular(num, withoutSuffix, key, isFuture) {
      return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
    }
    /**
     * @param {?} num
     * @return {?}
     */


    function special(num) {
      return num % 10 === 0 || num > 10 && num < 20;
    }
    /**
     * @param {?} key
     * @return {?}
     */


    function forms(key) {
      return (
        /** @type {?} */
        units[key].split('_')
      );
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */


    function translate$3(num, withoutSuffix, key, isFuture) {
      /** @type {?} */
      var result = num + ' ';

      if (num === 1) {
        return result + translateSingular(num, withoutSuffix, key[0], isFuture);
      } else if (withoutSuffix) {
        return result + (special(num) ? forms(key)[1] : forms(key)[0]);
      } else {
        if (isFuture) {
          return result + forms(key)[1];
        } else {
          return result + (special(num) ? forms(key)[1] : forms(key)[2]);
        }
      }
    }
    /** @type {?} */


    var ltLocale = {
      abbr: 'lt',
      months: {
        format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
        standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
      },
      monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
      weekdays: {
        format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
        standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
        isFormat: /dddd HH:mm/
      },
      weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
      weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY [m.] MMMM D [d.]',
        LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
        l: 'YYYY-MM-DD',
        ll: 'YYYY [m.] MMMM D [d.]',
        lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
      },
      calendar: {
        sameDay: '[Šiandien] LT',
        nextDay: '[Rytoj] LT',
        nextWeek: 'dddd LT',
        lastDay: '[Vakar] LT',
        lastWeek: '[Praėjusį] dddd LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'po %s',
        past: 'prieš %s',
        s: translateSeconds,
        ss: translate$3,
        m: translateSingular,
        mm: translate$3,
        h: translateSingular,
        hh: translate$3,
        d: translateSingular,
        dd: translate$3,
        M: translateSingular,
        MM: translate$3,
        y: translateSingular,
        yy: translate$3
      },
      dayOfMonthOrdinalParse: /\d{1,2}-oji/,

      /**
       * @param {?} num
       * @return {?}
       */
      ordinal: function ordinal(num) {
        return num + '-oji';
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Latvian [lv]
    //! author : Matiss Janis Aboltins : https://github.com/matissjanis

    /** @type {?} */

    var lvLocale = {
      abbr: 'lv',
      months: 'Janvāris_Februāris_Marts_Aprīlis_Maijs_Jūnijs_Jūlijs_Augusts_Septembris_Oktobris_Novembris_Decembris'.split('_'),
      monthsShort: 'Jan_Feb_Mar_Apr_Mai_Jūn_Jūl_Aug_Sep_Okt_Nov_Dec'.split('_'),
      weekdays: 'Svētdiena_Pirmdiena_Otrdiena_Trešdiena_Ceturtdiena_Piektdiena_Sestdiena'.split('_'),
      weekdaysShort: 'Svētd_Pirmd_Otrd_Trešd_Ceturtd_Piektd_Sestd'.split('_'),
      weekdaysMin: 'Sv_Pi_Ot_Tr_Ce_Pk_Se'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'pēc %s',
        past: 'pirms %s',
        s: 'dažām sekundēm',
        ss: '%d sekundēm',
        m: 'minūtes',
        mm: '%d minūtēm',
        h: 'stundas',
        hh: '%d stundām',
        d: 'dienas',
        dd: '%d dienām',
        M: 'mēneša',
        MM: '%d mēnešiem',
        y: 'gada',
        yy: '%d gadiem'
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,

      /**
       * @param {?} num
       * @return {?}
       */
      ordinal: function ordinal(num) {
        return num + '.';
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:object-literal-shorthand
    //! moment.js locale configuration
    //! locale : Mongolian [mn]
    //! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7

    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */

    function translate$4(num, withoutSuffix, key, isFuture) {
      switch (key) {
        case 's':
          return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';

        case 'ss':
          return num + (withoutSuffix ? ' секунд' : ' секундын');

        case 'm':
        case 'mm':
          return num + (withoutSuffix ? ' минут' : ' минутын');

        case 'h':
        case 'hh':
          return num + (withoutSuffix ? ' цаг' : ' цагийн');

        case 'd':
        case 'dd':
          return num + (withoutSuffix ? ' өдөр' : ' өдрийн');

        case 'M':
        case 'MM':
          return num + (withoutSuffix ? ' сар' : ' сарын');

        case 'y':
        case 'yy':
          return num + (withoutSuffix ? ' жил' : ' жилийн');

        default:
          return num.toString(10);
      }
    }
    /** @type {?} */


    var mnLocale = {
      abbr: 'mn',
      months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
      monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
      monthsParseExact: true,
      weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
      weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
      weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY оны MMMMын D',
        LLL: 'YYYY оны MMMMын D HH:mm',
        LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
      },
      meridiemParse: /ҮӨ|ҮХ/i,
      isPM:
      /**
      * @param {?} input
      * @return {?}
      */
      function isPM(input) {
        return input === 'ҮХ';
      },
      meridiem:
      /**
      * @param {?} hour
      * @param {?} minute
      * @param {?} isLower
      * @return {?}
      */
      function meridiem(hour, minute, isLower) {
        if (hour < 12) {
          return 'ҮӨ';
        } else {
          return 'ҮХ';
        }
      },
      calendar: {
        sameDay: '[Өнөөдөр] LT',
        nextDay: '[Маргааш] LT',
        nextWeek: '[Ирэх] dddd LT',
        lastDay: '[Өчигдөр] LT',
        lastWeek: '[Өнгөрсөн] dddd LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s дараа',
        past: '%s өмнө',
        s: translate$4,
        ss: translate$4,
        m: translate$4,
        mm: translate$4,
        h: translate$4,
        hh: translate$4,
        d: translate$4,
        dd: translate$4,
        M: translate$4,
        MM: translate$4,
        y: translate$4,
        yy: translate$4
      },
      dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
      ordinal:
      /**
      * @param {?} num
      * @param {?} period
      * @return {?}
      */
      function ordinal(num, period) {
        switch (period) {
          case 'd':
          case 'D':
          case 'DDD':
            return num + ' өдөр';

          default:
            return num.toString(10);
        }
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Norwegian Bokmål [nb]
    //! authors : Espen Hovlandsdal : https://github.com/rexxars
    //!           Sigurd Gartmann : https://github.com/sigurdga

    /** @type {?} */

    var nbLocale = {
      abbr: 'nb',
      months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
      monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
      monthsParseExact: true,
      weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
      weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
      weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
      },
      calendar: {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[forrige] dddd [kl.] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'noen sekunder',
        ss: '%d sekunder',
        m: 'ett minutt',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dager',
        M: 'en måned',
        MM: '%d måneder',
        y: 'ett år',
        yy: '%d år'
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Dutch (Belgium) [nl-be]
    //! author : Joris Röling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj

    /** @type {?} */

    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
    /** @type {?} */

    var monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
    /** @type {?} */

    var monthsParse$4 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    /** @type {?} */

    var monthsRegex$4 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    /** @type {?} */

    var nlBeLocale = {
      abbr: 'nl-be',
      months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),

      /**
       * @param {?} date
       * @param {?} format
       * @param {?=} isUTC
       * @return {?}
       */
      monthsShort: function monthsShort(date, format, isUTC) {
        if (!date) {
          return monthsShortWithDots;
        } else if (/-MMM-/.test(format)) {
          return monthsShortWithoutDots[getMonth(date, isUTC)];
        } else {
          return monthsShortWithDots[getMonth(date, isUTC)];
        }
      },
      monthsRegex: monthsRegex$4,
      monthsShortRegex: monthsRegex$4,
      monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
      monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
      monthsParse: monthsParse$4,
      longMonthsParse: monthsParse$4,
      shortMonthsParse: monthsParse$4,
      weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
      weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
      weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,

      /**
       * @param {?} _num
       * @return {?}
       */
      ordinal: function ordinal(_num) {
        /** @type {?} */
        var num = Number(_num);
        return num + (num === 1 || num === 8 || num >= 20 ? 'ste' : 'de');
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Dutch [nl]
    //! author : Joris Röling : https://github.com/jorisroling
    //! author : Jacob Middag : https://github.com/middagj

    /** @type {?} */

    var monthsShortWithDots$1 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
    /** @type {?} */

    var monthsShortWithoutDots$1 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
    /** @type {?} */

    var monthsParse$5 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    /** @type {?} */

    var monthsRegex$5 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    /** @type {?} */

    var nlLocale = {
      abbr: 'nl',
      months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),

      /**
       * @param {?} date
       * @param {?} format
       * @param {?=} isUTC
       * @return {?}
       */
      monthsShort: function monthsShort(date, format, isUTC) {
        if (!date) {
          return monthsShortWithDots$1;
        } else if (/-MMM-/.test(format)) {
          return monthsShortWithoutDots$1[getMonth(date, isUTC)];
        } else {
          return monthsShortWithDots$1[getMonth(date, isUTC)];
        }
      },
      monthsRegex: monthsRegex$5,
      monthsShortRegex: monthsRegex$5,
      monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
      monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
      monthsParse: monthsParse$5,
      longMonthsParse: monthsParse$5,
      shortMonthsParse: monthsParse$5,
      weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
      weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
      weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
      },
      dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,

      /**
       * @param {?} _num
       * @return {?}
       */
      ordinal: function ordinal(_num) {
        /** @type {?} */
        var num = Number(_num);
        return num + (num === 1 || num === 8 || num >= 20 ? 'ste' : 'de');
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Polish [pl]
    //! author : Rafal Hirsz : https://github.com/evoL

    /** @type {?} */

    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
    /** @type {?} */

    var monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    /**
     * @param {?} num
     * @return {?}
     */

    function plural$1(num) {
      return num % 10 < 5 && num % 10 > 1 && ~~(num / 10) % 10 !== 1;
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */


    function translate$5(num, withoutSuffix, key) {
      /** @type {?} */
      var result = num + ' ';

      switch (key) {
        case 'ss':
          return result + (plural$1(num) ? 'sekundy' : 'sekund');

        case 'm':
          return withoutSuffix ? 'minuta' : 'minutę';

        case 'mm':
          return result + (plural$1(num) ? 'minuty' : 'minut');

        case 'h':
          return withoutSuffix ? 'godzina' : 'godzinę';

        case 'hh':
          return result + (plural$1(num) ? 'godziny' : 'godzin');

        case 'MM':
          return result + (plural$1(num) ? 'miesiące' : 'miesięcy');

        case 'yy':
          return result + (plural$1(num) ? 'lata' : 'lat');
      }
    }
    /** @type {?} */


    var plLocale = {
      abbr: 'pl',

      /**
       * @param {?} date
       * @param {?} format
       * @param {?=} isUTC
       * @return {?}
       */
      months: function months(date, format, isUTC) {
        if (!date) {
          return monthsNominative;
        } else if (format === '') {
          // Hack: if format empty we know this is used to generate
          // RegExp by moment. Give then back both valid forms of months
          // in RegExp ready format.
          return '(' + monthsSubjective[getMonth(date, isUTC)] + '|' + monthsNominative[getMonth(date, isUTC)] + ')';
        } else if (/D MMMM/.test(format)) {
          return monthsSubjective[getMonth(date, isUTC)];
        } else {
          return monthsNominative[getMonth(date, isUTC)];
        }
      },
      monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
      weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
      weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
      weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[Dziś o] LT',
        nextDay: '[Jutro o] LT',

        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek: function nextWeek(date) {
          switch (getDayOfWeek(date)) {
            case 0:
              return '[W niedzielę o] LT';

            case 2:
              return '[We wtorek o] LT';

            case 3:
              return '[W środę o] LT';

            case 5:
              return '[W piątek o] LT';

            case 6:
              return '[W sobotę o] LT';

            default:
              return '[W] dddd [o] LT';
          }
        },
        lastDay: '[Wczoraj o] LT',

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          switch (getDayOfWeek(date)) {
            case 0:
              return '[W zeszłą niedzielę o] LT';

            case 3:
              return '[W zeszłą środę o] LT';

            case 4:
              return '[W zeszłą czwartek o] LT';

            case 5:
              return '[W zeszłą piątek o] LT';

            case 6:
              return '[W zeszłą sobotę o] LT';

            default:
              return '[W zeszły] dddd [o] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'za %s',
        past: '%s temu',
        s: 'kilka sekund',
        ss: translate$5,
        m: translate$5,
        mm: translate$5,
        h: translate$5,
        hh: translate$5,
        d: '1 dzień',
        dd: '%d dni',
        M: 'miesiąc',
        MM: translate$5,
        y: 'rok',
        yy: translate$5
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Portuguese (Brazil) [pt-br]
    //! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

    /** @type {?} */

    var ptBrLocale = {
      abbr: 'pt-br',
      months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
      monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
      weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
      weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
      weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
      },
      calendar: {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          return getDayOfWeek(date) === 0 || getDayOfWeek(date) === 6 ? '[Último] dddd [às] LT' : // Saturday + Sunday
          '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'em %s',
        past: '%s atrás',
        s: 'poucos segundos',
        ss: '%d segundos',
        m: 'um minuto',
        mm: '%d minutos',
        h: 'uma hora',
        hh: '%d horas',
        d: 'um dia',
        dd: '%d dias',
        M: 'um mês',
        MM: '%d meses',
        y: 'um ano',
        yy: '%d anos'
      },
      dayOfMonthOrdinalParse: /\d{1,2}º/,
      ordinal: '%dº'
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // ! moment.js locale configuration
    // ! locale : Romanian [ro]
    //! author : Vlad Gurdiga : https://github.com/gurdiga
    //! author : Valentin Agachi : https://github.com/avaly
    // ! author : Earle white: https://github.com/5earle

    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */

    function relativeTimeWithPlural(num, withoutSuffix, key) {
      /** @type {?} */
      var format = {
        ss: 'secunde',
        mm: 'minute',
        hh: 'ore',
        dd: 'zile',
        MM: 'luni',
        yy: 'ani'
      };
      /** @type {?} */

      var separator = ' ';

      if (num % 100 >= 20 || num >= 100 && num % 100 === 0) {
        separator = ' de ';
      }

      return num + separator + format[key];
    }
    /** @type {?} */


    var roLocale = {
      abbr: 'ro',
      months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
      monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
      monthsParseExact: true,
      weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
      weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
      weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
      },
      calendar: {
        sameDay: '[azi la] LT',
        nextDay: '[mâine la] LT',
        nextWeek: 'dddd [la] LT',
        lastDay: '[ieri la] LT',
        lastWeek: '[fosta] dddd [la] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'peste %s',
        past: '%s în urmă',
        s: 'câteva secunde',
        ss: relativeTimeWithPlural,
        m: 'un minut',
        mm: relativeTimeWithPlural,
        h: 'o oră',
        hh: relativeTimeWithPlural,
        d: 'o zi',
        dd: relativeTimeWithPlural,
        M: 'o lună',
        MM: relativeTimeWithPlural,
        y: 'un an',
        yy: relativeTimeWithPlural
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Russian [ru]
    //! author : Viktorminator : https://github.com/Viktorminator
    //! Author : Menelion Elensúle : https://github.com/Oire
    //! author : Коренберг Марк : https://github.com/socketpair

    /**
     * @param {?} word
     * @param {?} num
     * @return {?}
     */

    function plural$2(word, num) {
      /** @type {?} */
      var forms = word.split('_');
      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */


    function relativeTimeWithPlural$1(num, withoutSuffix, key) {
      /** @type {?} */
      var format = {
        ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
        mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        hh: 'час_часа_часов',
        dd: 'день_дня_дней',
        MM: 'месяц_месяца_месяцев',
        yy: 'год_года_лет'
      };

      if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
      }

      return num + ' ' + plural$2(format[key], +num);
    }
    /** @type {?} */


    var monthsParse$6 = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i]; // http://new.gramota.ru/spravka/rules/139-prop : § 103
    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753

    /** @type {?} */

    var ruLocale = {
      abbr: 'ru',
      months: {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
      },
      monthsShort: {
        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
      },
      weekdays: {
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
      },
      weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
      weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
      monthsParse: monthsParse$6,
      longMonthsParse: monthsParse$6,
      shortMonthsParse: monthsParse$6,
      // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
      monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
      // копия предыдущего
      monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
      // полные названия с падежами
      monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
      // Выражение, которое соотвествует только сокращённым формам
      monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., H:mm',
        LLLL: 'dddd, D MMMM YYYY г., H:mm'
      },
      calendar: {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',

        /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        nextWeek: function nextWeek(date, now) {
          if (getWeek(now) !== getWeek(date)) {
            switch (getDayOfWeek(date)) {
              case 0:
                return '[В следующее] dddd [в] LT';

              case 1:
              case 2:
              case 4:
                return '[В следующий] dddd [в] LT';

              case 3:
              case 5:
              case 6:
                return '[В следующую] dddd [в] LT';
            }
          } else {
            if (getDayOfWeek(date) === 2) {
              return '[Во] dddd [в] LT';
            } else {
              return '[В] dddd [в] LT';
            }
          }
        },

        /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        lastWeek: function lastWeek(date, now) {
          if (getWeek(now) !== getWeek(date)) {
            switch (getDayOfWeek(date)) {
              case 0:
                return '[В прошлое] dddd [в] LT';

              case 1:
              case 2:
              case 4:
                return '[В прошлый] dddd [в] LT';

              case 3:
              case 5:
              case 6:
                return '[В прошлую] dddd [в] LT';
            }
          } else {
            if (getDayOfWeek(date) === 2) {
              return '[Во] dddd [в] LT';
            } else {
              return '[В] dddd [в] LT';
            }
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'через %s',
        past: '%s назад',
        s: 'несколько секунд',
        ss: relativeTimeWithPlural$1,
        m: relativeTimeWithPlural$1,
        mm: relativeTimeWithPlural$1,
        h: 'час',
        hh: relativeTimeWithPlural$1,
        d: 'день',
        dd: relativeTimeWithPlural$1,
        M: 'месяц',
        MM: relativeTimeWithPlural$1,
        y: 'год',
        yy: relativeTimeWithPlural$1
      },
      meridiemParse: /ночи|утра|дня|вечера/i,

      /**
       * @param {?} input
       * @return {?}
       */
      isPM: function isPM(input) {
        return /^(дня|вечера)$/.test(input);
      },

      /**
       * @param {?} hour
       * @param {?} minute
       * @param {?} isLower
       * @return {?}
       */
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
          return 'ночи';
        } else if (hour < 12) {
          return 'утра';
        } else if (hour < 17) {
          return 'дня';
        } else {
          return 'вечера';
        }
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,

      /**
       * @param {?} _num
       * @param {?} period
       * @return {?}
       */
      ordinal: function ordinal(_num, period) {
        /** @type {?} */
        var num = Number(_num);

        switch (period) {
          case 'M':
          case 'd':
          case 'DDD':
            return num + '-й';

          case 'D':
            return num + '-го';

          case 'w':
          case 'W':
            return num + '-я';

          default:
            return num.toString(10);
        }
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Slovak [sk]
    //! author : Jozef Pažin : https://github.com/atiris

    /** @type {?} */

    var months$2 = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_');
    /** @type {?} */

    var monthsShort$6 = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    /**
     * @param {?} num
     * @return {?}
     */

    function plural$3(num) {
      return num > 1 && num < 5 && ~~(num / 10) !== 1;
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */


    function translate$6(num, withoutSuffix, key, isFuture) {
      /** @type {?} */
      var result = num + ' ';

      switch (key) {
        case 's':
          // a few seconds / in a few seconds / a few seconds ago
          return withoutSuffix || isFuture ? 'pár sekúnd' : 'pár sekundami';

        case 'ss':
          // 9 seconds / in 9 seconds / 9 seconds ago
          if (withoutSuffix || isFuture) {
            return result + (plural$3(num) ? 'sekundy' : 'sekúnd');
          } else {
            return result + 'sekundami';
          }

        // break;

        case 'm':
          // a minute / in a minute / a minute ago
          return withoutSuffix ? 'minúta' : isFuture ? 'minútu' : 'minútou';

        case 'mm':
          // 9 minutes / in 9 minutes / 9 minutes ago
          if (withoutSuffix || isFuture) {
            return result + (plural$3(num) ? 'minúty' : 'minút');
          } else {
            return result + 'minútami';
          }

        // break;

        case 'h':
          // an hour / in an hour / an hour ago
          return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';

        case 'hh':
          // 9 hours / in 9 hours / 9 hours ago
          if (withoutSuffix || isFuture) {
            return result + (plural$3(num) ? 'hodiny' : 'hodín');
          } else {
            return result + 'hodinami';
          }

        // break;

        case 'd':
          // a day / in a day / a day ago
          return withoutSuffix || isFuture ? 'deň' : 'dňom';

        case 'dd':
          // 9 days / in 9 days / 9 days ago
          if (withoutSuffix || isFuture) {
            return result + (plural$3(num) ? 'dni' : 'dní');
          } else {
            return result + 'dňami';
          }

        // break;

        case 'M':
          // a month / in a month / a month ago
          return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';

        case 'MM':
          // 9 months / in 9 months / 9 months ago
          if (withoutSuffix || isFuture) {
            return result + (plural$3(num) ? 'mesiace' : 'mesiacov');
          } else {
            return result + 'mesiacmi';
          }

        // break;

        case 'y':
          // a year / in a year / a year ago
          return withoutSuffix || isFuture ? 'rok' : 'rokom';

        case 'yy':
          // 9 years / in 9 years / 9 years ago
          if (withoutSuffix || isFuture) {
            return result + (plural$3(num) ? 'roky' : 'rokov');
          } else {
            return result + 'rokmi';
          }

        // break;
      }
    }
    /** @type {?} */


    var skLocale = {
      abbr: 'sk',
      months: months$2,
      monthsShort: monthsShort$6,
      weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
      weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
      weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd D. MMMM YYYY H:mm',
        l: 'D. M. YYYY'
      },
      calendar: {
        sameDay: '[dnes o] LT',
        nextDay: '[zajtra o] LT',

        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek: function nextWeek(date) {
          switch (getDayOfWeek(date)) {
            case 0:
              return '[v nedeľu o] LT';

            case 1:
            case 2:
              return '[v] dddd [o] LT';

            case 3:
              return '[v stredu o] LT';

            case 4:
              return '[vo štvrtok o] LT';

            case 5:
              return '[v piatok o] LT';

            case 6:
              return '[v sobotu o] LT';
          }
        },
        lastDay: '[včera o] LT',

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          switch (getDayOfWeek(date)) {
            case 0:
              return '[minulú nedeľu o] LT';

            case 1:
            case 2:
              return '[minulý] dddd [o] LT';

            case 3:
              return '[minulú stredu o] LT';

            case 4:
            case 5:
              return '[minulý] dddd [o] LT';

            case 6:
              return '[minulú sobotu o] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'o %s',
        past: 'pred %s',
        s: translate$6,
        ss: translate$6,
        m: translate$6,
        mm: translate$6,
        h: translate$6,
        hh: translate$6,
        d: translate$6,
        dd: translate$6,
        M: translate$6,
        MM: translate$6,
        y: translate$6,
        yy: translate$6
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Slovenian [sl]
    //! author : mihan : https://github.com/mihan

    /**
     * @param {?} number
     * @param {?} withoutSuffix
     * @param {?} key
     * @param {?} isFuture
     * @return {?}
     */

    function processRelativeTime$2(number, withoutSuffix, key, isFuture) {
      /** @type {?} */
      var result = number + ' ';

      switch (key) {
        case 's':
          return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';

        case 'ss':
          if (number === 1) {
            result += withoutSuffix ? 'sekundo' : 'sekundi';
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
          } else {
            result += withoutSuffix || isFuture ? 'sekund' : 'sekund';
          }

          return result;

        case 'm':
          return withoutSuffix ? 'ena minuta' : 'eno minuto';

        case 'mm':
          if (number === 1) {
            result += withoutSuffix ? 'minuta' : 'minuto';
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? 'minute' : 'minutami';
          } else {
            result += withoutSuffix || isFuture ? 'minut' : 'minutami';
          }

          return result;

        case 'h':
          return withoutSuffix ? 'ena ura' : 'eno uro';

        case 'hh':
          if (number === 1) {
            result += withoutSuffix ? 'ura' : 'uro';
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? 'uri' : 'urama';
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? 'ure' : 'urami';
          } else {
            result += withoutSuffix || isFuture ? 'ur' : 'urami';
          }

          return result;

        case 'd':
          return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';

        case 'dd':
          if (number === 1) {
            result += withoutSuffix || isFuture ? 'dan' : 'dnem';
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
          } else {
            result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
          }

          return result;

        case 'M':
          return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';

        case 'MM':
          if (number === 1) {
            result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
          } else {
            result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
          }

          return result;

        case 'y':
          return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';

        case 'yy':
          if (number === 1) {
            result += withoutSuffix || isFuture ? 'leto' : 'letom';
          } else if (number === 2) {
            result += withoutSuffix || isFuture ? 'leti' : 'letoma';
          } else if (number < 5) {
            result += withoutSuffix || isFuture ? 'leta' : 'leti';
          } else {
            result += withoutSuffix || isFuture ? 'let' : 'leti';
          }

          return result;
      }
    }
    /** @type {?} */


    var slLocale = {
      abbr: 'sl',
      months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
      monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
      monthsParseExact: true,
      weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
      weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
      weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
      },
      calendar: {
        sameDay: '[danes ob] LT',
        nextDay: '[jutri ob] LT',

        /**
         * @param {?} date
         * @return {?}
         */
        nextWeek: function nextWeek(date) {
          switch (getDayOfWeek(date)) {
            case 0:
              return '[v] [nedeljo] [ob] LT';

            case 3:
              return '[v] [sredo] [ob] LT';

            case 6:
              return '[v] [soboto] [ob] LT';

            case 1:
            case 2:
            case 4:
            case 5:
              return '[v] dddd [ob] LT';
          }
        },
        lastDay: '[včeraj ob] LT',

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          switch (getDayOfWeek(date)) {
            case 0:
              return '[prejšnjo] [nedeljo] [ob] LT';

            case 3:
              return '[prejšnjo] [sredo] [ob] LT';

            case 6:
              return '[prejšnjo] [soboto] [ob] LT';

            case 1:
            case 2:
            case 4:
            case 5:
              return '[prejšnji] dddd [ob] LT';
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'čez %s',
        past: 'pred %s',
        s: processRelativeTime$2,
        ss: processRelativeTime$2,
        m: processRelativeTime$2,
        mm: processRelativeTime$2,
        h: processRelativeTime$2,
        hh: processRelativeTime$2,
        d: processRelativeTime$2,
        dd: processRelativeTime$2,
        M: processRelativeTime$2,
        MM: processRelativeTime$2,
        y: processRelativeTime$2,
        yy: processRelativeTime$2
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      ordinal: '%d.',
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Albanian [sq]
    //! author : Agon Cecelia : https://github.com/agoncecelia

    /** @type {?} */

    var sqLocale = {
      abbr: 'sq',
      months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
      monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
      weekdays: 'E Dielë_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
      weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
      weekdaysMin: 'Di_He_Ma_Me_En_Pr_Sh'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[Sot në] LT',
        nextDay: '[Nesër në] LT',
        nextWeek: 'dddd [në] LT',
        lastDay: '[Dje në] LT',
        lastWeek: 'dddd [e kaluar në] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'në %s',
        past: 'para %sve',
        s: 'disa sekonda',
        ss: '%d sekonda',
        m: 'një minut',
        mm: '%d minuta',
        h: 'një orë',
        hh: '%d orë',
        d: 'një ditë',
        dd: '%d ditë',
        M: 'një muaj',
        MM: '%d muaj',
        y: 'një vit',
        yy: '%d vite'
      },
      dayOfMonthOrdinalParse: /\d{1,2}\./,
      // need clarification
      ordinal: '%d.',
      // need clarification
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Swedish [sv]
    //! author : Jens Alm : https://github.com/ulmus

    /** @type {?} */

    var svLocale = {
      abbr: 'sv',
      months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
      monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
      weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
      weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
      weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd D MMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'om %s',
        past: 'för %s sedan',
        s: 'några sekunder',
        ss: '%d sekunder',
        m: 'en minut',
        mm: '%d minuter',
        h: 'en timme',
        hh: '%d timmar',
        d: 'en dag',
        dd: '%d dagar',
        M: 'en månad',
        MM: '%d månader',
        y: 'ett år',
        yy: '%d år'
      },
      dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,

      /**
       * @param {?} _num
       * @return {?}
       */
      ordinal: function ordinal(_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */

        var b = num % 10;
        /** @type {?} */

        var output = ~~(num % 100 / 10) === 1 ? 'e' : b === 1 ? 'a' : b === 2 ? 'a' : b === 3 ? 'e' : 'e';
        return num + output;
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // moment.js locale configuration
    // locale : Thai [th]
    // author : Watcharapol Sanitwong : https://github.com/tumit

    /** @type {?} */

    var thLocale = {
      abbr: 'th',
      months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
      monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
      monthsParseExact: true,
      weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
      weekdaysShort: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
      // yes, three characters difference
      weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY เวลา H:mm',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
      },
      meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,

      /**
       * @param {?} input
       * @return {?}
       */
      isPM: function isPM(input) {
        return input === 'หลังเที่ยง';
      },

      /**
       * @param {?} hour
       * @param {?} minute
       * @param {?} isLower
       * @return {?}
       */
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 12) {
          return 'ก่อนเที่ยง';
        } else {
          return 'หลังเที่ยง';
        }
      },
      calendar: {
        sameDay: '[วันนี้ เวลา] LT',
        nextDay: '[พรุ่งนี้ เวลา] LT',
        nextWeek: 'dddd[หน้า เวลา] LT',
        lastDay: '[เมื่อวานนี้ เวลา] LT',
        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'อีก %s',
        past: '%sที่แล้ว',
        s: 'ไม่กี่วินาที',
        ss: '%d วินาที',
        m: '1 นาที',
        mm: '%d นาที',
        h: '1 ชั่วโมง',
        hh: '%d ชั่วโมง',
        d: '1 วัน',
        dd: '%d วัน',
        M: '1 เดือน',
        MM: '%d เดือน',
        y: '1 ปี',
        yy: '%d ปี'
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // moment.js locale configuration
    // locale : Thai-Buddhist Era [th-be]
    // author : Watcharapol Sanitwong : https://github.com/tumit

    /** @type {?} */

    var thBeLocale = {
      abbr: 'th-be',
      months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
      monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
      monthsParseExact: true,
      weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
      weekdaysShort: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
      weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
      weekdaysParseExact: true,
      longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY เวลา H:mm',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
      },
      meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,

      /**
       * @param {?} input
       * @return {?}
       */
      isPM: function isPM(input) {
        return input === 'หลังเที่ยง';
      },

      /**
       * @param {?} hour
       * @param {?} minute
       * @param {?} isLower
       * @return {?}
       */
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 12) {
          return 'ก่อนเที่ยง';
        } else {
          return 'หลังเที่ยง';
        }
      },
      calendar: {
        sameDay: '[วันนี้ เวลา] LT',
        nextDay: '[พรุ่งนี้ เวลา] LT',
        nextWeek: 'dddd[หน้า เวลา] LT',
        lastDay: '[เมื่อวานนี้ เวลา] LT',
        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: 'อีก %s',
        past: '%sที่แล้ว',
        s: 'ไม่กี่วินาที',
        ss: '%d วินาที',
        m: '1 นาที',
        mm: '%d นาที',
        h: '1 ชั่วโมง',
        hh: '%d ชั่วโมง',
        d: '1 วัน',
        dd: '%d วัน',
        M: '1 เดือน',
        MM: '%d เดือน',
        y: '1 ปี',
        yy: '%d ปี'
      },

      /**
       * @param {?} date
       * @param {?=} isUTC
       * @return {?}
       */
      getFullYear: function getFullYear(date) {
        var isUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return 543 + (isUTC ? date.getUTCFullYear() : date.getFullYear());
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Turkish [tr]
    //! authors : Erhan Gundogan : https://github.com/erhangundogan,
    //!           Burak Yiğit Kaya: https://github.com/BYK

    /** @type {?} */

    var suffixes$1 = {
      1: '\'inci',
      5: '\'inci',
      8: '\'inci',
      70: '\'inci',
      80: '\'inci',
      2: '\'nci',
      7: '\'nci',
      20: '\'nci',
      50: '\'nci',
      3: '\'üncü',
      4: '\'üncü',
      100: '\'üncü',
      6: '\'ncı',
      9: '\'uncu',
      10: '\'uncu',
      30: '\'uncu',
      60: '\'ıncı',
      90: '\'ıncı'
    };
    /** @type {?} */

    var trLocale = {
      abbr: 'tr',
      months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
      monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
      weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
      weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
      weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[bugün saat] LT',
        nextDay: '[yarın saat] LT',
        nextWeek: '[gelecek] dddd [saat] LT',
        lastDay: '[dün] LT',
        lastWeek: '[geçen] dddd [saat] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s sonra',
        past: '%s önce',
        s: 'birkaç saniye',
        ss: '%d saniye',
        m: 'bir dakika',
        mm: '%d dakika',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir gün',
        dd: '%d gün',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir yıl',
        yy: '%d yıl'
      },
      dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,

      /**
       * @param {?} _num
       * @return {?}
       */
      ordinal: function ordinal(_num) {
        /** @type {?} */
        var num = Number(_num);

        if (num === 0) {
          // special case for zero
          return num + '\'ıncı';
        }
        /** @type {?} */


        var a = num % 10;
        /** @type {?} */

        var b = num % 100 - a;
        /** @type {?} */

        var c = num >= 100 ? 100 : null;
        return num + (suffixes$1[a] || suffixes$1[b] || suffixes$1[c]);
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //! moment.js locale configuration
    //! locale : Ukrainian [uk]
    //! author : zemlanin : https://github.com/zemlanin
    //! Author : Menelion Elensúle : https://github.com/Oire

    /**
     * @param {?} word
     * @param {?} num
     * @return {?}
     */

    function plural$4(word, num) {
      /** @type {?} */
      var forms = word.split('_');
      return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} key
     * @return {?}
     */


    function relativeTimeWithPlural$2(num, withoutSuffix, key) {
      /** @type {?} */
      var format = {
        ss: withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
        mm: withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
        hh: withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
        dd: 'день_дні_днів',
        MM: 'місяць_місяці_місяців',
        yy: 'рік_роки_років'
      };

      if (key === 'm') {
        return withoutSuffix ? 'хвилина' : 'хвилину';
      }

      if (key === 'h') {
        return withoutSuffix ? 'година' : 'годину';
      }

      return num + ' ' + plural$4(format[key], +num);
    }
    /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */


    function weekdaysCaseReplace(date, format, isUTC) {
      /** @type {?} */
      var weekdays = {
        nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
        accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
        genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
      };

      if (!date) {
        return weekdays.nominative;
      }
      /** @type {?} */


      var nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? 'genitive' : 'nominative';
      return weekdays[nounCase][getDayOfWeek(date, isUTC)];
    }
    /**
     * @param {?} str
     * @return {?}
     */


    function processHoursFunction(str) {
      return (
        /**
        * @param {?} date
        * @return {?}
        */
        function (date) {
          return str + 'о' + (getHours(date) === 11 ? 'б' : '') + '] LT';
        }
      );
    }
    /** @type {?} */


    var ukLocale = {
      abbr: 'uk',
      months: {
        format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
        standalone: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
      },
      monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
      weekdays: weekdaysCaseReplace,
      weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
      weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY р.',
        LLL: 'D MMMM YYYY р., HH:mm',
        LLLL: 'dddd, D MMMM YYYY р., HH:mm'
      },
      calendar: {
        sameDay: processHoursFunction('[Сьогодні '),
        nextDay: processHoursFunction('[Завтра '),
        lastDay: processHoursFunction('[Вчора '),
        nextWeek: processHoursFunction('[У] dddd ['),

        /**
         * @param {?} date
         * @return {?}
         */
        lastWeek: function lastWeek(date) {
          switch (getDayOfWeek(date)) {
            case 0:
            case 3:
            case 5:
            case 6:
              return processHoursFunction('[Минулої] dddd [')(date);

            case 1:
            case 2:
            case 4:
              return processHoursFunction('[Минулого] dddd [')(date);
          }
        },
        sameElse: 'L'
      },
      relativeTime: {
        future: 'за %s',
        past: '%s тому',
        s: 'декілька секунд',
        ss: relativeTimeWithPlural$2,
        m: relativeTimeWithPlural$2,
        mm: relativeTimeWithPlural$2,
        h: 'годину',
        hh: relativeTimeWithPlural$2,
        d: 'день',
        dd: relativeTimeWithPlural$2,
        M: 'місяць',
        MM: relativeTimeWithPlural$2,
        y: 'рік',
        yy: relativeTimeWithPlural$2
      },
      // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
      meridiemParse: /ночі|ранку|дня|вечора/,

      /**
       * @param {?} input
       * @return {?}
       */
      isPM: function isPM(input) {
        return /^(дня|вечора)$/.test(input);
      },

      /**
       * @param {?} hour
       * @param {?} minute
       * @param {?} isLower
       * @return {?}
       */
      meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 4) {
          return 'ночі';
        } else if (hour < 12) {
          return 'ранку';
        } else if (hour < 17) {
          return 'дня';
        } else {
          return 'вечора';
        }
      },
      dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,

      /**
       * @param {?} _num
       * @param {?} period
       * @return {?}
       */
      ordinal: function ordinal(_num, period) {
        /** @type {?} */
        var num = Number(_num);

        switch (period) {
          case 'M':
          case 'd':
          case 'DDD':
          case 'w':
          case 'W':
            return num + '-й';

          case 'D':
            return num + '-го';

          default:
            return num.toString();
        }
      },
      week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    //! moment.js locale configuration
    //! locale : Việt Nam [vi]
    //! author : Chris Gedrim : https://github.com/chrisgedrim

    /** @type {?} */

    var viLocale = {
      abbr: 'vi',
      months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
      monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
      monthsParseExact: true,
      weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
      weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      weekdaysParseExact: true,
      meridiemParse: /sa|ch/i,

      /**
       * @param {?} input
       * @return {?}
       */
      isPM: function isPM(input) {
        return /^ch$/i.test(input);
      },

      /**
       * @param {?} hours
       * @param {?} minutes
       * @param {?} isLower
       * @return {?}
       */
      meridiem: function meridiem(hours, minutes, isLower) {
        if (hours < 12) {
          return isLower ? 'sa' : 'SA';
        } else {
          return isLower ? 'ch' : 'CH';
        }
      },
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM [năm] YYYY',
        LLL: 'D MMMM [năm] YYYY HH:mm',
        LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
        l: 'DD/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm'
      },
      calendar: {
        sameDay: '[Hôm nay lúc] LT',
        nextDay: '[Ngày mai lúc] LT',
        nextWeek: 'dddd [tuần tới lúc] LT',
        lastDay: '[Hôm qua lúc] LT',
        lastWeek: 'dddd [tuần trước lúc] LT',
        sameElse: 'L'
      },
      relativeTime: {
        future: '%s tới',
        past: '%s trước',
        s: 'vài giây',
        ss: '%d giây',
        m: 'một phút',
        mm: '%d phút',
        h: 'một giờ',
        hh: '%d giờ',
        d: 'một ngày',
        dd: '%d ngày',
        M: 'một tháng',
        MM: '%d tháng',
        y: 'một năm',
        yy: '%d năm'
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,

      /**
       * @param {?} _num
       * @return {?}
       */
      ordinal: function ordinal(_num) {
        return '' + _num;
      },
      week: {
        dow: 1,
        // Thứ Hai là ngày đầu tuần.
        doy: 4 // Tuần chứa ngày 4 tháng 1 là tuần đầu tiên trong năm.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable:comment-format binary-expression-operand-order max-line-length
    // tslint:disable:no-bitwise prefer-template cyclomatic-complexity
    // tslint:disable:no-shadowed-variable switch-default prefer-const
    // tslint:disable:one-variable-per-declaration newline-before-return
    // tslint:disable:no-parameter-reassignment prefer-switch
    //! moment.js locale configuration
    //! locale : Chinese (China) [zh-cn]
    //! author : suupic : https://github.com/suupic
    //! author : Zeno Zeng : https://github.com/zenozeng

    /** @type {?} */

    var zhCnLocale = {
      abbr: 'zh-cn',
      months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
      monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
      weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
      weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
      weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日Ah点mm分',
        LLLL: 'YYYY年M月D日ddddAh点mm分',
        l: 'YYYY/M/D',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日dddd HH:mm'
      },
      meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,

      /**
       * @param {?} hour
       * @param {?} meridiem
       * @return {?}
       */
      meridiemHour: function meridiemHour(hour, meridiem) {
        if (hour === 12) {
          hour = 0;
        }

        if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
          return hour;
        } else if (meridiem === '下午' || meridiem === '晚上') {
          return hour + 12;
        } else {
          // '中午'
          return hour >= 11 ? hour : hour + 12;
        }
      },

      /**
       * @param {?} hour
       * @param {?} minute
       * @param {?} isLower
       * @return {?}
       */
      meridiem: function meridiem(hour, minute, isLower) {
        /** @type {?} */
        var hm = hour * 100 + minute;

        if (hm < 600) {
          return '凌晨';
        } else if (hm < 900) {
          return '早上';
        } else if (hm < 1130) {
          return '上午';
        } else if (hm < 1230) {
          return '中午';
        } else if (hm < 1800) {
          return '下午';
        } else {
          return '晚上';
        }
      },
      calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
      },
      dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,

      /**
       * @param {?} _num
       * @param {?} period
       * @return {?}
       */
      ordinal: function ordinal(_num, period) {
        /** @type {?} */
        var num = Number(_num);

        switch (period) {
          case 'd':
          case 'D':
          case 'DDD':
            return num + '日';

          case 'M':
            return num + '月';

          case 'w':
          case 'W':
            return num + '周';

          default:
            return num.toString();
        }
      },
      relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        ss: '%d 秒',
        m: '1 分钟',
        mm: '%d 分钟',
        h: '1 小时',
        hh: '%d 小时',
        d: '1 天',
        dd: '%d 天',
        M: '1 个月',
        MM: '%d 个月',
        y: '1 年',
        yy: '%d 年'
      },
      week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.

      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-chronos.js.map

    /***/
  },

  /***/
  "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js":
  /*!************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js ***!
    \************************************************************************************/

  /*! exports provided: BsDatepickerConfig, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineConfig, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineConfig, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatePickerInnerComponent, DatepickerConfig, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo */

  /***/
  function node_modulesNgxBootstrapDatepickerFesm2015NgxBootstrapDatepickerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDatepickerConfig", function () {
      return BsDatepickerConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDatepickerContainerComponent", function () {
      return BsDatepickerContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDatepickerDirective", function () {
      return BsDatepickerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineConfig", function () {
      return BsDatepickerInlineConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineContainerComponent", function () {
      return BsDatepickerInlineContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineDirective", function () {
      return BsDatepickerInlineDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDatepickerInputDirective", function () {
      return BsDatepickerInputDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDatepickerModule", function () {
      return BsDatepickerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDaterangepickerConfig", function () {
      return BsDaterangepickerConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDaterangepickerContainerComponent", function () {
      return BsDaterangepickerContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDaterangepickerDirective", function () {
      return BsDaterangepickerDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInlineConfig", function () {
      return BsDaterangepickerInlineConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInlineContainerComponent", function () {
      return BsDaterangepickerInlineContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInlineDirective", function () {
      return BsDaterangepickerInlineDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsDaterangepickerInputDirective", function () {
      return BsDaterangepickerInputDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BsLocaleService", function () {
      return BsLocaleService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateFormatter", function () {
      return DateFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function () {
      return DatePickerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatePickerInnerComponent", function () {
      return DatePickerInnerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatepickerConfig", function () {
      return DatepickerConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatepickerModule", function () {
      return DatepickerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DayPickerComponent", function () {
      return DayPickerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function () {
      return MonthPickerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YearPickerComponent", function () {
      return YearPickerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return DATEPICKER_CONTROL_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return BsDatepickerAbstractComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return BsDatepickerStore;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return BsDatepickerEffects;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return BsDatepickerActions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return datepickerAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return BsCalendarLayoutComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return BsCurrentDateViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return BsCustomDatesViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return BsDatepickerDayDecoratorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return BsDatepickerNavigationViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return BsDaysCalendarViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return BsMonthCalendarViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return BsTimepickerViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return BsYearsCalendarViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-bootstrap/chronos */
    "./node_modules/ngx-bootstrap/chronos/fesm2015/ngx-bootstrap-chronos.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/mini-ngrx */
    "./node_modules/ngx-bootstrap/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js");
    /* harmony import */


    var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/positioning */
    "./node_modules/ngx-bootstrap/positioning/fesm2015/ngx-bootstrap-positioning.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/component-loader */
    "./node_modules/ngx-bootstrap/component-loader/fesm2015/ngx-bootstrap-component-loader.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
     * except `displayMonths`, for range picker it default to `2`
     */


    var BsDatepickerConfig = function BsDatepickerConfig() {
      _classCallCheck(this, BsDatepickerConfig);

      /**
       * sets use adaptive position
       */
      this.adaptivePosition = false;
      /**
       * sets use UTC date time format
       */

      this.useUtc = false;
      /**
       * turn on/off animation
       */

      this.isAnimated = false;
      /**
       * If true, returns focus to the datepicker / daterangepicker input after date selection
       */

      this.returnFocusToInput = false;
      /**
       * CSS class which will be applied to datepicker container,
       * usually used to set color theme
       */

      this.containerClass = 'theme-green'; // DatepickerRenderOptions

      this.displayMonths = 1;
      /**
       * Allows to hide week numbers in datepicker
       */

      this.showWeekNumbers = true;
      this.dateInputFormat = 'L'; // range picker

      this.rangeSeparator = ' - ';
      /**
       * Date format for date range input field
       */

      this.rangeInputFormat = 'L'; // DatepickerFormatOptions

      this.monthTitle = 'MMMM';
      this.yearTitle = 'YYYY';
      this.dayLabel = 'D';
      this.monthLabel = 'MMMM';
      this.yearLabel = 'YYYY';
      this.weekNumbers = 'w';
    };

    BsDatepickerConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @abstract
     */


    var BsDatepickerAbstractComponent = /*#__PURE__*/function () {
      function BsDatepickerAbstractComponent() {
        _classCallCheck(this, BsDatepickerAbstractComponent);

        this.customRanges = [];
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(BsDatepickerAbstractComponent, [{
        key: "setViewMode",

        /**
         * @param {?} event
         * @return {?}
         */
        value: function setViewMode(event) {}
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "navigateTo",
        value: function navigateTo(event) {}
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "dayHoverHandler",
        value: function dayHoverHandler(event) {}
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "weekHoverHandler",
        value: function weekHoverHandler(event) {}
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "monthHoverHandler",
        value: function monthHoverHandler(event) {}
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "yearHoverHandler",
        value: function yearHoverHandler(event) {}
        /**
         * @param {?} day
         * @return {?}
         */

      }, {
        key: "daySelectHandler",
        value: function daySelectHandler(day) {}
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "monthSelectHandler",
        value: function monthSelectHandler(event) {}
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "yearSelectHandler",
        value: function yearSelectHandler(event) {}
        /* tslint:disable-next-line: no-any */

        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_stopPropagation",
        value: function _stopPropagation(event) {
          event.stopPropagation();
        }
      }, {
        key: "minDate",
        set: function set(value) {
          this._effects.setMinDate(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "maxDate",
        set: function set(value) {
          this._effects.setMaxDate(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "daysDisabled",
        set: function set(value) {
          this._effects.setDaysDisabled(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "datesDisabled",
        set: function set(value) {
          this._effects.setDatesDisabled(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "datesEnabled",
        set: function set(value) {
          this._effects.setDatesEnabled(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isDisabled",
        set: function set(value) {
          this._effects.setDisabled(value);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "dateCustomClasses",
        set: function set(value) {
          this._effects.setDateCustomClasses(value);
        }
      }]);

      return BsDatepickerAbstractComponent;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDatepickerActions = /*#__PURE__*/function () {
      function BsDatepickerActions() {
        _classCallCheck(this, BsDatepickerActions);
      }

      _createClass(BsDatepickerActions, [{
        key: "calculate",

        /**
         * @return {?}
         */
        value: function calculate() {
          return {
            type: BsDatepickerActions.CALCULATE
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "format",
        value: function format() {
          return {
            type: BsDatepickerActions.FORMAT
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "flag",
        value: function flag() {
          return {
            type: BsDatepickerActions.FLAG
          };
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(date) {
          return {
            type: BsDatepickerActions.SELECT,
            payload: date
          };
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "changeViewMode",
        value: function changeViewMode(event) {
          return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
          };
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "navigateTo",
        value: function navigateTo(event) {
          return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
          };
        }
        /**
         * @param {?} step
         * @return {?}
         */

      }, {
        key: "navigateStep",
        value: function navigateStep(step) {
          return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
          };
        }
        /**
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "setOptions",
        value: function setOptions(options) {
          return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
          };
        } // date range picker

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "selectRange",
        value: function selectRange(value) {
          return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
          };
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "hoverDay",
        value: function hoverDay(event) {
          return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
          };
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "minDate",
        value: function minDate(date) {
          return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
          };
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "maxDate",
        value: function maxDate(date) {
          return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
          };
        }
        /**
         * @param {?} days
         * @return {?}
         */

      }, {
        key: "daysDisabled",
        value: function daysDisabled(days) {
          return {
            type: BsDatepickerActions.SET_DAYSDISABLED,
            payload: days
          };
        }
        /**
         * @param {?} dates
         * @return {?}
         */

      }, {
        key: "datesDisabled",
        value: function datesDisabled(dates) {
          return {
            type: BsDatepickerActions.SET_DATESDISABLED,
            payload: dates
          };
        }
        /**
         * @param {?} dates
         * @return {?}
         */

      }, {
        key: "datesEnabled",
        value: function datesEnabled(dates) {
          return {
            type: BsDatepickerActions.SET_DATESENABLED,
            payload: dates
          };
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "isDisabled",
        value: function isDisabled(value) {
          return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
          };
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setDateCustomClasses",
        value: function setDateCustomClasses(value) {
          return {
            type: BsDatepickerActions.SET_DATE_CUSTOM_CLASSES,
            payload: value
          };
        }
        /**
         * @param {?} locale
         * @return {?}
         */

      }, {
        key: "setLocale",
        value: function setLocale(locale) {
          return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
          };
        }
      }]);

      return BsDatepickerActions;
    }();

    BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
    BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
    BsDatepickerActions.FLAG = '[datepicker] set flags';
    BsDatepickerActions.SELECT = '[datepicker] select date';
    BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
    BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
    BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
    BsDatepickerActions.HOVER = '[datepicker] hover date';
    BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
    BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
    BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
    BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
    BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
    BsDatepickerActions.SET_DATESENABLED = '[datepicker] set dates enabled';
    BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
    BsDatepickerActions.SET_DATE_CUSTOM_CLASSES = '[datepicker] set date custom classes';
    BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
    BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
    BsDatepickerActions.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsLocaleService = /*#__PURE__*/function () {
      function BsLocaleService() {
        _classCallCheck(this, BsLocaleService);

        this._defaultLocale = 'en';
        this._locale = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this._defaultLocale);
        this._localeChange = this._locale.asObservable();
      }
      /**
       * @return {?}
       */


      _createClass(BsLocaleService, [{
        key: "use",

        /**
         * @param {?} locale
         * @return {?}
         */
        value: function use(locale) {
          if (locale === this.currentLocale) {
            return;
          }

          this._locale.next(locale);
        }
      }, {
        key: "locale",
        get: function get() {
          return this._locale;
        }
        /**
         * @return {?}
         */

      }, {
        key: "localeChange",
        get: function get() {
          return this._localeChange;
        }
        /**
         * @return {?}
         */

      }, {
        key: "currentLocale",
        get: function get() {
          return this._locale.getValue();
        }
      }]);

      return BsLocaleService;
    }();

    BsLocaleService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDatepickerEffects = /*#__PURE__*/function () {
      /**
       * @param {?} _actions
       * @param {?} _localeService
       */
      function BsDatepickerEffects(_actions, _localeService) {
        _classCallCheck(this, BsDatepickerEffects);

        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
      }
      /**
       * @param {?} _bsDatepickerStore
       * @return {?}
       */


      _createClass(BsDatepickerEffects, [{
        key: "init",
        value: function init(_bsDatepickerStore) {
          this._store = _bsDatepickerStore;
          return this;
        }
        /**
         * setters
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          this._store.dispatch(this._actions.select(value));
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setRangeValue",
        value: function setRangeValue(value) {
          this._store.dispatch(this._actions.selectRange(value));
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setMinDate",
        value: function setMinDate(value) {
          this._store.dispatch(this._actions.minDate(value));

          return this;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setMaxDate",
        value: function setMaxDate(value) {
          this._store.dispatch(this._actions.maxDate(value));

          return this;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setDaysDisabled",
        value: function setDaysDisabled(value) {
          this._store.dispatch(this._actions.daysDisabled(value));

          return this;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setDatesDisabled",
        value: function setDatesDisabled(value) {
          this._store.dispatch(this._actions.datesDisabled(value));

          return this;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setDatesEnabled",
        value: function setDatesEnabled(value) {
          this._store.dispatch(this._actions.datesEnabled(value));

          return this;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setDisabled",
        value: function setDisabled(value) {
          this._store.dispatch(this._actions.isDisabled(value));

          return this;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setDateCustomClasses",
        value: function setDateCustomClasses(value) {
          this._store.dispatch(this._actions.setDateCustomClasses(value));

          return this;
        }
        /* Set rendering options */

        /**
         * @param {?} _config
         * @return {?}
         */

      }, {
        key: "setOptions",
        value: function setOptions(_config) {
          /** @type {?} */
          var _options = Object.assign({
            locale: this._localeService.currentLocale
          }, _config);

          this._store.dispatch(this._actions.setOptions(_options));

          return this;
        }
        /**
         * view to mode bindings
         * @param {?} container
         * @return {?}
         */

      }, {
        key: "setBindings",
        value: function setBindings(container) {
          container.daysCalendar = this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.flaggedMonths;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} months
          * @return {?}
          */
          function (months) {
            return !!months;
          })); // month calendar

          container.monthsCalendar = this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.flaggedMonthsCalendar;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} months
          * @return {?}
          */
          function (months) {
            return !!months;
          })); // year calendar

          container.yearsCalendar = this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.yearsCalendarFlagged;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} years
          * @return {?}
          */
          function (years) {
            return !!years;
          }));
          container.viewMode = this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.view.mode;
          });
          container.options = this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.showWeekNumbers;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(
          /**
          * @param {?} showWeekNumbers
          * @return {?}
          */
          function (showWeekNumbers) {
            return {
              showWeekNumbers: showWeekNumbers
            };
          }));
          return this;
        }
        /**
         * event handlers
         * @param {?} container
         * @return {?}
         */

      }, {
        key: "setEventHandlers",
        value: function setEventHandlers(container) {
          var _this = this;

          container.setViewMode =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this._store.dispatch(_this._actions.changeViewMode(event));
          };

          container.navigateTo =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            _this._store.dispatch(_this._actions.navigateStep(event.step));
          };

          container.dayHoverHandler =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var _cell =
            /** @type {?} */
            event.cell;

            if (_cell.isOtherMonth || _cell.isDisabled) {
              return;
            }

            _this._store.dispatch(_this._actions.hoverDay(event));

            _cell.isHovered = event.isHovered;
          };

          container.monthHoverHandler =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            event.cell.isHovered = event.isHovered;
          };

          container.yearHoverHandler =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            event.cell.isHovered = event.isHovered;
          };

          container.monthSelectHandler =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (event.isDisabled) {
              return;
            }

            _this._store.dispatch(_this._actions.navigateTo({
              unit: {
                month: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(event.date),
                year: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getFullYear"])(event.date)
              },
              viewMode: 'day'
            }));
          };

          container.yearSelectHandler =
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (event.isDisabled) {
              return;
            }

            _this._store.dispatch(_this._actions.navigateTo({
              unit: {
                year: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getFullYear"])(event.date)
              },
              viewMode: 'month'
            }));
          };

          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "registerDatepickerSideEffects",
        value: function registerDatepickerSideEffects() {
          var _this2 = this;

          this._subs.push(this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.view;
          }).subscribe(
          /**
          * @param {?} view
          * @return {?}
          */
          function (view) {
            _this2._store.dispatch(_this2._actions.calculate());
          })); // format calendar values on month model change


          this._subs.push(this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.monthsModel;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} monthModel
          * @return {?}
          */
          function (monthModel) {
            return !!monthModel;
          })).subscribe(
          /**
          * @param {?} month
          * @return {?}
          */
          function (month) {
            return _this2._store.dispatch(_this2._actions.format());
          })); // flag day values


          this._subs.push(this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.formattedMonths;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} month
          * @return {?}
          */
          function (month) {
            return !!month;
          })).subscribe(
          /**
          * @param {?} month
          * @return {?}
          */
          function (month) {
            return _this2._store.dispatch(_this2._actions.flag());
          })); // flag day values


          this._subs.push(this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.selectedDate;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} selectedDate
          * @return {?}
          */
          function (selectedDate) {
            return !!selectedDate;
          })).subscribe(
          /**
          * @param {?} selectedDate
          * @return {?}
          */
          function (selectedDate) {
            return _this2._store.dispatch(_this2._actions.flag());
          })); // flag for date range picker


          this._subs.push(this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.selectedRange;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} selectedRange
          * @return {?}
          */
          function (selectedRange) {
            return !!selectedRange;
          })).subscribe(
          /**
          * @param {?} selectedRange
          * @return {?}
          */
          function (selectedRange) {
            return _this2._store.dispatch(_this2._actions.flag());
          })); // monthsCalendar


          this._subs.push(this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.monthsCalendar;
          }).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this2._store.dispatch(_this2._actions.flag());
          })); // years calendar


          this._subs.push(this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.yearsCalendarModel;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return !!state;
          })).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this2._store.dispatch(_this2._actions.flag());
          })); // on hover


          this._subs.push(this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.hoveredDate;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} hoveredDate
          * @return {?}
          */
          function (hoveredDate) {
            return !!hoveredDate;
          })).subscribe(
          /**
          * @param {?} hoveredDate
          * @return {?}
          */
          function (hoveredDate) {
            return _this2._store.dispatch(_this2._actions.flag());
          })); // date custom classes


          this._subs.push(this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.dateCustomClasses;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} dateCustomClasses
          * @return {?}
          */
          function (dateCustomClasses) {
            return !!dateCustomClasses;
          })).subscribe(
          /**
          * @param {?} dateCustomClasses
          * @return {?}
          */
          function (dateCustomClasses) {
            return _this2._store.dispatch(_this2._actions.flag());
          })); // on locale change


          this._subs.push(this._localeService.localeChange.subscribe(
          /**
          * @param {?} locale
          * @return {?}
          */
          function (locale) {
            return _this2._store.dispatch(_this2._actions.setLocale(locale));
          }));

          return this;
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroy",
        value: function destroy() {
          var _iterator = _createForOfIteratorHelper(this._subs),
              _step2;

          try {
            for (_iterator.s(); !(_step2 = _iterator.n()).done;) {
              var sub = _step2.value;
              sub.unsubscribe();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }]);

      return BsDatepickerEffects;
    }();

    BsDatepickerEffects.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    BsDatepickerEffects.ctorParameters = function () {
      return [{
        type: BsDatepickerActions
      }, {
        type: BsLocaleService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var defaultMonthOptions = {
      width: 7,
      height: 6
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */

    function BsDatepickerViewState() {}

    if (false) {}

    var BsDatepickerState = function BsDatepickerState() {
      _classCallCheck(this, BsDatepickerState);
    };

    if (false) {}
    /** @type {?} */


    var _initialView = {
      date: new Date(),
      mode: 'day'
    };
    /** @type {?} */

    var initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
      locale: 'en',
      view: _initialView,
      selectedRange: [],
      monthViewOptions: defaultMonthOptions
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} date
     * @param {?} options
     * @return {?}
     */

    function getStartingDayOfCalendar(date, options) {
      if (Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isFirstDayOfWeek"])(date, options.firstDayOfWeek)) {
        return date;
      }
      /** @type {?} */


      var weekDay = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getDay"])(date);
      /** @type {?} */

      var offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
      return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(date, {
        day: -offset
      });
    }
    /**
     * @param {?} weekday
     * @param {?} startingDayOffset
     * @return {?}
     */


    function calculateDateOffset(weekday, startingDayOffset) {
      if (startingDayOffset === 0) {
        return weekday;
      }
      /** @type {?} */


      var offset = weekday - startingDayOffset % 7;
      return offset < 0 ? offset + 7 : offset;
    }
    /**
     * @param {?} date
     * @param {?} min
     * @param {?} max
     * @return {?}
     */


    function isMonthDisabled(date, min, max) {
      /** @type {?} */
      var minBound = min && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["endOf"])(date, 'month'), min, 'day');
      /** @type {?} */

      var maxBound = max && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["startOf"])(date, 'month'), max, 'day');
      return minBound || maxBound;
    }
    /**
     * @param {?} date
     * @param {?} min
     * @param {?} max
     * @return {?}
     */


    function isYearDisabled(date, min, max) {
      /** @type {?} */
      var minBound = min && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["endOf"])(date, 'year'), min, 'day');
      /** @type {?} */

      var maxBound = max && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["startOf"])(date, 'year'), max, 'day');
      return minBound || maxBound;
    }
    /**
     * @param {?} date
     * @param {?} datesDisabled
     * @return {?}
     */


    function isDisabledDate(date, datesDisabled) {
      if (!datesDisabled || !Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isArray"])(datesDisabled) || !datesDisabled.length) {
        return false;
      }

      return datesDisabled.some(
      /**
      * @param {?} dateDisabled
      * @return {?}
      */
      function (dateDisabled) {
        return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSame"])(date, dateDisabled, 'date');
      });
    }
    /**
     * @param {?} date
     * @param {?} datesEnabled
     * @return {?}
     */


    function isEnabledDate(date, datesEnabled) {
      if (!datesEnabled || !Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isArray"])(datesEnabled) || !datesEnabled.length) {
        return false;
      }

      return !datesEnabled.some(
      /**
      * @param {?} enabledDate
      * @return {?}
      */
      function (enabledDate) {
        return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSame"])(date, enabledDate, 'date');
      });
    }
    /**
     * @param {?} state
     * @param {?=} calendarIndex
     * @return {?}
     */


    function getYearsCalendarInitialDate(state) {
      var calendarIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      /** @type {?} */
      var model = state && state.yearsCalendarModel && state.yearsCalendarModel[calendarIndex];
      return model && model.years && model.years[0] && model.years[0][0] && model.years[0][0].date;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function MatrixOptions() {}

    if (false) {}
    /**
     * @template T
     * @param {?} options
     * @param {?} fn
     * @return {?}
     */


    function createMatrix(options, fn) {
      /** @type {?} */
      var prevValue = options.initialDate;
      /** @type {?} */

      var matrix = new Array(options.height);

      for (var i = 0; i < options.height; i++) {
        matrix[i] = new Array(options.width);

        for (var j = 0; j < options.width; j++) {
          matrix[i][j] = fn(prevValue);
          prevValue = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(prevValue, options.shift);
        }
      }

      return matrix;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} startingDate
     * @param {?} options
     * @return {?}
     */


    function calcDaysCalendar(startingDate, options) {
      /** @type {?} */
      var firstDay = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getFirstDayOfMonth"])(startingDate);
      /** @type {?} */

      var initialDate = getStartingDayOfCalendar(firstDay, options);
      /** @type {?} */

      var matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate: initialDate,
        shift: {
          day: 1
        }
      };
      /** @type {?} */

      var daysMatrix = createMatrix(matrixOptions,
      /**
      * @param {?} date
      * @return {?}
      */
      function (date) {
        return date;
      });
      return {
        daysMatrix: daysMatrix,
        month: firstDay
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} daysCalendar
     * @param {?} formatOptions
     * @param {?} monthIndex
     * @return {?}
     */


    function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
      return {
        month: daysCalendar.month,
        monthTitle: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
        yearTitle: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
        weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
        weekdays: getShiftedWeekdays(formatOptions.locale),
        weeks: daysCalendar.daysMatrix.map(
        /**
        * @param {?} week
        * @param {?} weekIndex
        * @return {?}
        */
        function (week, weekIndex) {
          return {
            days: week.map(
            /**
            * @param {?} date
            * @param {?} dayIndex
            * @return {?}
            */
            function (date, dayIndex) {
              return {
                date: date,
                label: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, formatOptions.dayLabel, formatOptions.locale),
                monthIndex: monthIndex,
                weekIndex: weekIndex,
                dayIndex: dayIndex
              };
            })
          };
        })
      };
    }
    /**
     * @param {?} daysMatrix
     * @param {?} format
     * @param {?} locale
     * @return {?}
     */


    function getWeekNumbers(daysMatrix, format, locale) {
      return daysMatrix.map(
      /**
      * @param {?} days
      * @return {?}
      */
      function (days) {
        return days[0] ? Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(days[0], format, locale) : '';
      });
    }
    /**
     * @param {?} locale
     * @return {?}
     */


    function getShiftedWeekdays(locale) {
      /** @type {?} */
      var _locale = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getLocale"])(locale);
      /** @type {?} */


      var weekdays =
      /** @type {?} */
      _locale.weekdaysShort();
      /** @type {?} */


      var firstDayOfWeek = _locale.firstDayOfWeek();

      return [].concat(_toConsumableArray(weekdays.slice(firstDayOfWeek)), _toConsumableArray(weekdays.slice(0, firstDayOfWeek)));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function FlagDaysCalendarOptions() {}

    if (false) {}
    /**
     * @param {?} formattedMonth
     * @param {?} options
     * @return {?}
     */


    function flagDaysCalendar(formattedMonth, options) {
      formattedMonth.weeks.forEach(
      /**
      * @param {?} week
      * @return {?}
      */
      function (week) {
        /* tslint:disable-next-line: cyclomatic-complexity */
        week.days.forEach(
        /**
        * @param {?} day
        * @param {?} dayIndex
        * @return {?}
        */
        function (day, dayIndex) {
          // datepicker

          /** @type {?} */
          var isOtherMonth = !Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(day.date, formattedMonth.month);
          /** @type {?} */

          var isHovered = !isOtherMonth && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(day.date, options.hoveredDate); // date range picker

          /** @type {?} */

          var isSelectionStart = !isOtherMonth && options.selectedRange && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(day.date, options.selectedRange[0]);
          /** @type {?} */

          var isSelectionEnd = !isOtherMonth && options.selectedRange && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(day.date, options.selectedRange[1]);
          /** @type {?} */

          var isSelected = !isOtherMonth && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(day.date, options.selectedDate) || isSelectionStart || isSelectionEnd;
          /** @type {?} */

          var isInRange = !isOtherMonth && options.selectedRange && isDateInRange(day.date, options.selectedRange, options.hoveredDate);
          /** @type {?} */

          var isDisabled = options.isDisabled || Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(day.date, options.minDate, 'day') || Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(day.date, options.maxDate, 'day') || Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDisabledDay"])(day.date, options.daysDisabled) || isDisabledDate(day.date, options.datesDisabled) || isEnabledDate(day.date, options.datesEnabled);
          /** @type {?} */

          var currentDate = new Date();
          /** @type {?} */

          var isToday = !isOtherMonth && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(day.date, currentDate);
          /** @type {?} */

          var customClasses = options.dateCustomClasses && options.dateCustomClasses.map(
          /**
          * @param {?} dcc
          * @return {?}
          */
          function (dcc) {
            return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(day.date, dcc.date) ? dcc.classes : [];
          }).reduce(
          /**
          * @param {?} previousValue
          * @param {?} currentValue
          * @return {?}
          */
          function (previousValue, currentValue) {
            return previousValue.concat(currentValue);
          }, []).join(' ') || ''; // decide update or not

          /** @type {?} */

          var newDay = Object.assign({}, day, {
            isOtherMonth: isOtherMonth,
            isHovered: isHovered,
            isSelected: isSelected,
            isSelectionStart: isSelectionStart,
            isSelectionEnd: isSelectionEnd,
            isInRange: isInRange,
            isDisabled: isDisabled,
            isToday: isToday,
            customClasses: customClasses
          });

          if (day.isOtherMonth !== newDay.isOtherMonth || day.isHovered !== newDay.isHovered || day.isSelected !== newDay.isSelected || day.isSelectionStart !== newDay.isSelectionStart || day.isSelectionEnd !== newDay.isSelectionEnd || day.isDisabled !== newDay.isDisabled || day.isInRange !== newDay.isInRange || day.customClasses !== newDay.customClasses) {
            week.days[dayIndex] = newDay;
          }
        });
      }); // todo: add check for linked calendars

      formattedMonth.hideLeftArrow = options.isDisabled || options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
      formattedMonth.hideRightArrow = options.isDisabled || options.monthIndex < options.displayMonths && options.monthIndex + 1 !== options.displayMonths;
      formattedMonth.disableLeftArrow = isMonthDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(formattedMonth.month, {
        month: -1
      }), options.minDate, options.maxDate);
      formattedMonth.disableRightArrow = isMonthDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(formattedMonth.month, {
        month: 1
      }), options.minDate, options.maxDate);
      return formattedMonth;
    }
    /**
     * @param {?} date
     * @param {?} selectedRange
     * @param {?} hoveredDate
     * @return {?}
     */


    function isDateInRange(date, selectedRange, hoveredDate) {
      if (!date || !selectedRange[0]) {
        return false;
      }

      if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
      }

      if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
      }

      return false;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} mode
     * @param {?=} minMode
     * @return {?}
     */


    function canSwitchMode(mode, minMode) {
      return minMode ? mode >= minMode : true;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var height = 4;
    /** @type {?} */

    var width = 3;
    /** @type {?} */

    var shift = {
      month: 1
    };
    /**
     * @param {?} viewDate
     * @param {?} formatOptions
     * @return {?}
     */

    function formatMonthsCalendar(viewDate, formatOptions) {
      /** @type {?} */
      var initialDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["startOf"])(viewDate, 'year');
      /** @type {?} */

      var matrixOptions = {
        width: width,
        height: height,
        initialDate: initialDate,
        shift: shift
      };
      /** @type {?} */

      var monthMatrix = createMatrix(matrixOptions,
      /**
      * @param {?} date
      * @return {?}
      */
      function (date) {
        return {
          date: date,
          label: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, formatOptions.monthLabel, formatOptions.locale)
        };
      });
      return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(viewDate, formatOptions.yearTitle, formatOptions.locale)
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function FlagMonthCalendarOptions() {}

    if (false) {}
    /**
     * @param {?} monthCalendar
     * @param {?} options
     * @return {?}
     */


    function flagMonthsCalendar(monthCalendar, options) {
      monthCalendar.months.forEach(
      /**
      * @param {?} months
      * @param {?} rowIndex
      * @return {?}
      */
      function (months, rowIndex) {
        months.forEach(
        /**
        * @param {?} month
        * @param {?} monthIndex
        * @return {?}
        */
        function (month, monthIndex) {
          /** @type {?} */
          var isHovered = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(month.date, options.hoveredMonth);
          /** @type {?} */

          var isDisabled = options.isDisabled || isMonthDisabled(month.date, options.minDate, options.maxDate);
          /** @type {?} */

          var isSelected = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(month.date, options.selectedDate);
          /** @type {?} */

          var newMonth = Object.assign(
          /*{},*/
          month, {
            isHovered: isHovered,
            isDisabled: isDisabled,
            isSelected: isSelected
          });

          if (month.isHovered !== newMonth.isHovered || month.isDisabled !== newMonth.isDisabled || month.isSelected !== newMonth.isSelected) {
            monthCalendar.months[rowIndex][monthIndex] = newMonth;
          }
        });
      }); // todo: add check for linked calendars

      monthCalendar.hideLeftArrow = options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
      monthCalendar.hideRightArrow = options.monthIndex < options.displayMonths && options.monthIndex + 1 !== options.displayMonths;
      monthCalendar.disableLeftArrow = isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(monthCalendar.months[0][0].date, {
        year: -1
      }), options.minDate, options.maxDate);
      monthCalendar.disableRightArrow = isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(monthCalendar.months[0][0].date, {
        year: 1
      }), options.minDate, options.maxDate);
      return monthCalendar;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var height$1 = 4;
    /** @type {?} */

    var width$1 = 4;
    /** @type {?} */

    var yearsPerCalendar = height$1 * width$1;
    /** @type {?} */

    var initialYearShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
    /** @type {?} */

    var shift$1 = {
      year: 1
    };
    /**
     * @param {?} viewDate
     * @param {?} formatOptions
     * @param {?=} previousInitialDate
     * @return {?}
     */

    function formatYearsCalendar(viewDate, formatOptions, previousInitialDate) {
      /** @type {?} */
      var initialDate = calculateInitialDate(viewDate, previousInitialDate);
      /** @type {?} */

      var matrixOptions = {
        width: width$1,
        height: height$1,
        initialDate: initialDate,
        shift: shift$1
      };
      /** @type {?} */

      var yearsMatrix = createMatrix(matrixOptions,
      /**
      * @param {?} date
      * @return {?}
      */
      function (date) {
        return {
          date: date,
          label: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, formatOptions.yearLabel, formatOptions.locale)
        };
      });
      /** @type {?} */

      var yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
      return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle: yearTitle
      };
    }
    /**
     * @param {?} viewDate
     * @param {?=} previousInitialDate
     * @return {?}
     */


    function calculateInitialDate(viewDate, previousInitialDate) {
      if (previousInitialDate && viewDate.getFullYear() >= previousInitialDate.getFullYear() && viewDate.getFullYear() < previousInitialDate.getFullYear() + yearsPerCalendar) {
        return previousInitialDate;
      }

      return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate, {
        year: initialYearShift
      });
    }
    /**
     * @param {?} yearsMatrix
     * @param {?} formatOptions
     * @return {?}
     */


    function formatYearRangeTitle(yearsMatrix, formatOptions) {
      /** @type {?} */
      var from = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
      /** @type {?} */

      var to = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
      return "".concat(from, " - ").concat(to);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function FlagYearsCalendarOptions() {}

    if (false) {}
    /**
     * @param {?} yearsCalendar
     * @param {?} options
     * @return {?}
     */


    function flagYearsCalendar(yearsCalendar, options) {
      yearsCalendar.years.forEach(
      /**
      * @param {?} years
      * @param {?} rowIndex
      * @return {?}
      */
      function (years, rowIndex) {
        years.forEach(
        /**
        * @param {?} year
        * @param {?} yearIndex
        * @return {?}
        */
        function (year, yearIndex) {
          /** @type {?} */
          var isHovered = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameYear"])(year.date, options.hoveredYear);
          /** @type {?} */

          var isDisabled = options.isDisabled || isYearDisabled(year.date, options.minDate, options.maxDate);
          /** @type {?} */

          var isSelected = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSameYear"])(year.date, options.selectedDate);
          /** @type {?} */

          var newMonth = Object.assign(
          /*{},*/
          year, {
            isHovered: isHovered,
            isDisabled: isDisabled,
            isSelected: isSelected
          });

          if (year.isHovered !== newMonth.isHovered || year.isDisabled !== newMonth.isDisabled || year.isSelected !== newMonth.isSelected) {
            yearsCalendar.years[rowIndex][yearIndex] = newMonth;
          }
        });
      }); // todo: add check for linked calendars

      yearsCalendar.hideLeftArrow = options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
      yearsCalendar.hideRightArrow = options.yearIndex < options.displayMonths && options.yearIndex + 1 !== options.displayMonths;
      yearsCalendar.disableLeftArrow = isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(yearsCalendar.years[0][0].date, {
        year: -1
      }), options.minDate, options.maxDate);
      /** @type {?} */

      var i = yearsCalendar.years.length - 1;
      /** @type {?} */

      var j = yearsCalendar.years[i].length - 1;
      yearsCalendar.disableRightArrow = isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(yearsCalendar.years[i][j].date, {
        year: 1
      }), options.minDate, options.maxDate);
      return yearsCalendar;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /* tslint:disable-next-line: cyclomatic-complexity */

    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */


    function bsDatepickerReducer() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialDatepickerState;
      var action = arguments.length > 1 ? arguments[1] : undefined;

      switch (action.type) {
        case BsDatepickerActions.CALCULATE:
          {
            return calculateReducer(state);
          }

        case BsDatepickerActions.FORMAT:
          {
            return formatReducer(state, action);
          }

        case BsDatepickerActions.FLAG:
          {
            return flagReducer(state, action);
          }

        case BsDatepickerActions.NAVIGATE_OFFSET:
          {
            return navigateOffsetReducer(state, action);
          }

        case BsDatepickerActions.NAVIGATE_TO:
          {
            /** @type {?} */
            var payload = action.payload;
            /** @type {?} */

            var date = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["setFullDate"])(state.view.date, payload.unit);
            /** @type {?} */

            var newState;
            /** @type {?} */

            var mode;

            if (canSwitchMode(payload.viewMode, state.minMode)) {
              mode = payload.viewMode;
              newState = {
                view: {
                  date: date,
                  mode: mode
                }
              };
            } else {
              mode = state.view.mode;
              newState = {
                selectedDate: date,
                view: {
                  date: date,
                  mode: mode
                }
              };
            }

            return Object.assign({}, state, newState);
          }

        case BsDatepickerActions.CHANGE_VIEWMODE:
          {
            if (!canSwitchMode(action.payload, state.minMode)) {
              return state;
            }
            /** @type {?} */


            var _date2 = state.view.date;
            /** @type {?} */

            var _mode = action.payload;
            /** @type {?} */

            var _newState = {
              view: {
                date: _date2,
                mode: _mode
              }
            };
            return Object.assign({}, state, _newState);
          }

        case BsDatepickerActions.HOVER:
          {
            return Object.assign({}, state, {
              hoveredDate: action.payload
            });
          }

        case BsDatepickerActions.SELECT:
          {
            /** @type {?} */
            var _newState2 = {
              selectedDate: action.payload,
              view: state.view
            };
            /** @type {?} */

            var _mode2 = state.view.mode;
            /** @type {?} */

            var _date = action.payload || state.view.date;
            /** @type {?} */


            var _date3 = getViewDate(_date, state.minDate, state.maxDate);

            _newState2.view = {
              mode: _mode2,
              date: _date3
            };
            return Object.assign({}, state, _newState2);
          }

        case BsDatepickerActions.SET_OPTIONS:
          {
            /** @type {?} */
            var _newState3 = action.payload; // preserve view mode

            /** @type {?} */

            var _mode3 = _newState3.minMode ? _newState3.minMode : state.view.mode;
            /** @type {?} */


            var _viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDateValid"])(_newState3.value) && _newState3.value || Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isArray"])(_newState3.value) && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDateValid"])(_newState3.value[0]) && _newState3.value[0] || state.view.date;
            /** @type {?} */


            var _date4 = getViewDate(_viewDate, _newState3.minDate, _newState3.maxDate);

            _newState3.view = {
              mode: _mode3,
              date: _date4
            }; // update selected value

            if (_newState3.value) {
              // if new value is array we work with date range
              if (Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isArray"])(_newState3.value)) {
                _newState3.selectedRange = _newState3.value;
              } // if new value is a date -> datepicker


              if (_newState3.value instanceof Date) {
                _newState3.selectedDate = _newState3.value;
              } // provided value is not supported :)
              // need to report it somehow

            }

            return Object.assign({}, state, _newState3);
          }
        // date range picker

        case BsDatepickerActions.SELECT_RANGE:
          {
            /** @type {?} */
            var _newState4 = {
              selectedRange: action.payload,
              view: state.view
            };
            /** @type {?} */

            var _mode4 = state.view.mode;
            /** @type {?} */

            var _date5 = action.payload && action.payload[0] || state.view.date;
            /** @type {?} */


            var _date6 = getViewDate(_date5, state.minDate, state.maxDate);

            _newState4.view = {
              mode: _mode4,
              date: _date6
            };
            return Object.assign({}, state, _newState4);
          }

        case BsDatepickerActions.SET_MIN_DATE:
          {
            return Object.assign({}, state, {
              minDate: action.payload
            });
          }

        case BsDatepickerActions.SET_MAX_DATE:
          {
            return Object.assign({}, state, {
              maxDate: action.payload
            });
          }

        case BsDatepickerActions.SET_IS_DISABLED:
          {
            return Object.assign({}, state, {
              isDisabled: action.payload
            });
          }

        case BsDatepickerActions.SET_DATE_CUSTOM_CLASSES:
          {
            return Object.assign({}, state, {
              dateCustomClasses: action.payload
            });
          }

        default:
          return state;
      }
    }
    /**
     * @param {?} state
     * @return {?}
     */


    function calculateReducer(state) {
      // how many calendars

      /** @type {?} */
      var displayMonths = state.displayOneMonthRange && isDisplayOneMonth(state.view.date, state.minDate, state.maxDate) ? 1 : state.displayMonths; // use selected date on initial rendering if set

      /** @type {?} */

      var viewDate = state.view.date;

      if (state.view.mode === 'day') {
        if (state.showPreviousMonth && state.selectedRange.length === 0) {
          viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate, {
            month: -1
          });
        }

        state.monthViewOptions.firstDayOfWeek = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getLocale"])(state.locale).firstDayOfWeek();
        /** @type {?} */

        var monthsModel = new Array(displayMonths);

        for (var monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
          // todo: for unlinked calendars it will be harder
          monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
          viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate, {
            month: 1
          });
        }

        return Object.assign({}, state, {
          monthsModel: monthsModel
        });
      }

      if (state.view.mode === 'month') {
        /** @type {?} */
        var monthsCalendar = new Array(displayMonths);

        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
          // todo: for unlinked calendars it will be harder
          monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
          viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate, {
            year: 1
          });
        }

        return Object.assign({}, state, {
          monthsCalendar: monthsCalendar
        });
      }

      if (state.view.mode === 'year') {
        /** @type {?} */
        var yearsCalendarModel = new Array(displayMonths);

        for (var _calendarIndex = 0; _calendarIndex < displayMonths; _calendarIndex++) {
          // todo: for unlinked calendars it will be harder
          yearsCalendarModel[_calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state), state.minMode === 'year' ? getYearsCalendarInitialDate(state, _calendarIndex) : undefined);
          viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate, {
            year: yearsPerCalendar
          });
        }

        return Object.assign({}, state, {
          yearsCalendarModel: yearsCalendarModel
        });
      }

      return state;
    }
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */


    function formatReducer(state, action) {
      if (state.view.mode === 'day') {
        /** @type {?} */
        var formattedMonths = state.monthsModel.map(
        /**
        * @param {?} month
        * @param {?} monthIndex
        * @return {?}
        */
        function (month, monthIndex) {
          return formatDaysCalendar(month, getFormatOptions(state), monthIndex);
        });
        return Object.assign({}, state, {
          formattedMonths: formattedMonths
        });
      } // how many calendars

      /** @type {?} */


      var displayMonths = state.displayMonths; // check initial rendering
      // use selected date on initial rendering if set

      /** @type {?} */

      var viewDate = state.view.date;

      if (state.view.mode === 'month') {
        /** @type {?} */
        var monthsCalendar = new Array(displayMonths);

        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
          // todo: for unlinked calendars it will be harder
          monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
          viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate, {
            year: 1
          });
        }

        return Object.assign({}, state, {
          monthsCalendar: monthsCalendar
        });
      }

      if (state.view.mode === 'year') {
        /** @type {?} */
        var yearsCalendarModel = new Array(displayMonths);

        for (var _calendarIndex2 = 0; _calendarIndex2 < displayMonths; _calendarIndex2++) {
          // todo: for unlinked calendars it will be harder
          yearsCalendarModel[_calendarIndex2] = formatYearsCalendar(viewDate, getFormatOptions(state));
          viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(viewDate, {
            year: 16
          });
        }

        return Object.assign({}, state, {
          yearsCalendarModel: yearsCalendarModel
        });
      }

      return state;
    }
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */


    function flagReducer(state, action) {
      /** @type {?} */
      var displayMonths = isDisplayOneMonth(state.view.date, state.minDate, state.maxDate) ? 1 : state.displayMonths;

      if (state.view.mode === 'day') {
        /** @type {?} */
        var flaggedMonths = state.formattedMonths.map(
        /**
        * @param {?} formattedMonth
        * @param {?} monthIndex
        * @return {?}
        */
        function (formattedMonth, monthIndex) {
          return flagDaysCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            daysDisabled: state.daysDisabled,
            datesDisabled: state.datesDisabled,
            datesEnabled: state.datesEnabled,
            hoveredDate: state.hoveredDate,
            selectedDate: state.selectedDate,
            selectedRange: state.selectedRange,
            displayMonths: displayMonths,
            dateCustomClasses: state.dateCustomClasses,
            monthIndex: monthIndex
          });
        });
        return Object.assign({}, state, {
          flaggedMonths: flaggedMonths
        });
      }

      if (state.view.mode === 'month') {
        /** @type {?} */
        var flaggedMonthsCalendar = state.monthsCalendar.map(
        /**
        * @param {?} formattedMonth
        * @param {?} monthIndex
        * @return {?}
        */
        function (formattedMonth, monthIndex) {
          return flagMonthsCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            hoveredMonth: state.hoveredMonth,
            selectedDate: state.selectedDate,
            displayMonths: displayMonths,
            monthIndex: monthIndex
          });
        });
        return Object.assign({}, state, {
          flaggedMonthsCalendar: flaggedMonthsCalendar
        });
      }

      if (state.view.mode === 'year') {
        /** @type {?} */
        var yearsCalendarFlagged = state.yearsCalendarModel.map(
        /**
        * @param {?} formattedMonth
        * @param {?} yearIndex
        * @return {?}
        */
        function (formattedMonth, yearIndex) {
          return flagYearsCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            hoveredYear: state.hoveredYear,
            selectedDate: state.selectedDate,
            displayMonths: displayMonths,
            yearIndex: yearIndex
          });
        });
        return Object.assign({}, state, {
          yearsCalendarFlagged: yearsCalendarFlagged
        });
      }

      return state;
    }
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */


    function navigateOffsetReducer(state, action) {
      /** @type {?} */
      var newState = {
        view: {
          mode: state.view.mode,
          date: shiftViewDate(state, action)
        }
      };
      return Object.assign({}, state, newState);
    }
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */


    function shiftViewDate(state, action) {
      if (state.view.mode === 'year' && state.minMode === 'year') {
        /** @type {?} */
        var initialDate = getYearsCalendarInitialDate(state, 0);
        /** @type {?} */

        var middleDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(initialDate, {
          year: -initialYearShift
        });
        return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(middleDate, action.payload);
      }

      return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["shiftDate"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["startOf"])(state.view.date, 'month'), action.payload);
    }
    /**
     * @param {?} state
     * @return {?}
     */


    function getFormatOptions(state) {
      return {
        locale: state.locale,
        monthTitle: state.monthTitle,
        yearTitle: state.yearTitle,
        dayLabel: state.dayLabel,
        monthLabel: state.monthLabel,
        yearLabel: state.yearLabel,
        weekNumbers: state.weekNumbers
      };
    }
    /**
     * if view date is provided (bsValue|ngModel) it should be shown
     * if view date is not provider:
     * if minDate>currentDate (default view value), show minDate
     * if maxDate<currentDate(default view value) show maxDate
     * @param {?} viewDate
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */


    function getViewDate(viewDate, minDate, maxDate) {
      /** @type {?} */
      var _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;

      if (minDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(minDate, _date, 'day')) {
        return minDate;
      }

      if (maxDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(maxDate, _date, 'day')) {
        return maxDate;
      }

      return _date;
    }
    /**
     * @param {?} viewDate
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */


    function isDisplayOneMonth(viewDate, minDate, maxDate) {
      if (maxDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isSame"])(maxDate, viewDate, 'day')) {
        return true;
      }

      if (minDate && maxDate && minDate.getMonth() === maxDate.getMonth()) {
        return true;
      }

      return false;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDatepickerStore = /*#__PURE__*/function (_ngx_bootstrap_mini_n) {
      _inherits(BsDatepickerStore, _ngx_bootstrap_mini_n);

      var _super = _createSuper(BsDatepickerStore);

      function BsDatepickerStore() {
        _classCallCheck(this, BsDatepickerStore);

        /** @type {?} */
        var _dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
          type: '[datepicker] dispatcher init'
        });
        /** @type {?} */


        var state = new ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_4__["MiniState"](initialDatepickerState, _dispatcher, bsDatepickerReducer);
        return _super.call(this, _dispatcher, bsDatepickerReducer, state);
      }

      return BsDatepickerStore;
    }(ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_4__["MiniStore"]);

    BsDatepickerStore.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    BsDatepickerStore.ctorParameters = function () {
      return [];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DATEPICKER_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
    /** @type {?} */

    var datepickerAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('datepickerAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('animated-down', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      height: '*',
      overflow: 'hidden'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => animated-down', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      height: 0,
      overflow: 'hidden'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(DATEPICKER_ANIMATION_TIMING)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('animated-up', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      height: '*',
      overflow: 'hidden'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => animated-up', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
      height: '*',
      overflow: 'hidden'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(DATEPICKER_ANIMATION_TIMING)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => unanimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0s'))]);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var BsDatepickerContainerComponent = /*#__PURE__*/function (_BsDatepickerAbstract) {
      _inherits(BsDatepickerContainerComponent, _BsDatepickerAbstract);

      var _super2 = _createSuper(BsDatepickerContainerComponent);

      /**
       * @param {?} _renderer
       * @param {?} _config
       * @param {?} _store
       * @param {?} _element
       * @param {?} _actions
       * @param {?} _effects
       * @param {?} _positionService
       */
      function BsDatepickerContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
        var _this3;

        _classCallCheck(this, BsDatepickerContainerComponent);

        _this3 = _super2.call(this);
        _this3._config = _config;
        _this3._store = _store;
        _this3._element = _element;
        _this3._actions = _actions;
        _this3._positionService = _positionService;
        _this3.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this3.animationState = 'void';
        _this3._subs = [];
        _this3._effects = _effects;

        _renderer.setStyle(_element.nativeElement, 'display', 'block');

        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');

        return _this3;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(BsDatepickerContainerComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this4 = this;

          this._positionService.setOptions({
            modifiers: {
              flip: {
                enabled: this._config.adaptivePosition
              }
            },
            allowedPositions: ['top', 'bottom']
          });

          this._positionService.event$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this4._positionService.disable();

            if (_this4._config.isAnimated) {
              _this4.animationState = _this4.isTopPosition ? 'animated-up' : 'animated-down';
              return;
            }

            _this4.animationState = 'unanimated';
          });

          this.isOtherMonthsActive = this._config.selectFromOtherMonth;
          this.containerClass = this._config.containerClass;

          this._effects.init(this._store) // intial state options
          .setOptions(this._config) // data binding view --> model
          .setBindings(this) // set event handlers
          .setEventHandlers(this).registerDatepickerSideEffects(); // todo: move it somewhere else
          // on selected date change


          this._subs.push(this._store
          /* tslint:disable-next-line: no-any */
          .select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.selectedDate;
          })
          /* tslint:disable-next-line: no-any */
          .subscribe(
          /**
          * @param {?} date
          * @return {?}
          */
          function (date) {
            return _this4.valueChange.emit(date);
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "positionServiceEnable",

        /**
         * @return {?}
         */
        value: function positionServiceEnable() {
          this._positionService.enable();
        }
        /**
         * @param {?} day
         * @return {?}
         */

      }, {
        key: "daySelectHandler",
        value: function daySelectHandler(day) {
          if (!day) {
            return;
          }
          /** @type {?} */


          var isDisabled = this.isOtherMonthsActive ? day.isDisabled : day.isOtherMonth || day.isDisabled;

          if (isDisabled) {
            return;
          }

          this._store.dispatch(this._actions.select(day.date));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _iterator2 = _createForOfIteratorHelper(this._subs),
              _step3;

          try {
            for (_iterator2.s(); !(_step3 = _iterator2.n()).done;) {
              var sub = _step3.value;
              sub.unsubscribe();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this._effects.destroy();
        }
      }, {
        key: "value",
        set: function set(value) {
          this._effects.setValue(value);
        }
      }, {
        key: "isTopPosition",
        get: function get() {
          return this._element.nativeElement.classList.contains('top');
        }
      }]);

      return BsDatepickerContainerComponent;
    }(BsDatepickerAbstractComponent);

    BsDatepickerContainerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-datepicker-container',
        providers: [BsDatepickerStore, BsDatepickerEffects],
        template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges?.length > 0\">\n    <bs-custom-date-view \n      [selectedRange]=\"chosenRange\" \n      [ranges]=\"customRanges\"\n      (onSelect)=\"setRangeOnCalendar($event)\">\n    </bs-custom-date-view>\n  </div>\n</div>\n",
        host: {
          "class": 'bottom',
          '(click)': '_stopPropagation($event)',
          role: 'dialog',
          'aria-label': 'calendar'
        },
        animations: [datepickerAnimation]
      }]
    }];
    /** @nocollapse */

    BsDatepickerContainerComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: BsDatepickerConfig
      }, {
        type: BsDatepickerStore
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: BsDatepickerActions
      }, {
        type: BsDatepickerEffects
      }, {
        type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDatepickerDirective = /*#__PURE__*/function () {
      /**
       * @param {?} _config
       * @param {?} _elementRef
       * @param {?} _renderer
       * @param {?} _viewContainerRef
       * @param {?} cis
       */
      function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        _classCallCheck(this, BsDatepickerDirective);

        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */

        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */

        this.triggers = 'click';
        /**
         * Close datepicker on outside click
         */

        this.outsideClick = true;
        /**
         * A selector specifying the element the datepicker should be appended to.
         */

        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when datepicker value has been changed
         */

        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subs = []; // todo: assign only subset of fields

        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
        this.isOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.isOpen);
      }
      /**
       * Returns whether or not the datepicker is currently being shown
       * @return {?}
       */


      _createClass(BsDatepickerDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this5 = this;

          this.isDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();

          this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show:
            /**
            * @return {?}
            */
            function show() {
              return _this5.show();
            }
          });

          this.setConfig();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
          }

          if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
          }

          if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
          }

          if (changes.daysDisabled) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
          }

          if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
          }

          if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
          }

          if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
          }

          if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this6 = this;

          this.isOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} isOpen
          * @return {?}
          */
          function (isOpen) {
            return isOpen !== _this6.isOpen;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.isDestroy$)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this6.toggle();
          });
        }
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this7 = this;

          if (this._datepicker.isShown) {
            return;
          }

          this.setConfig();
          this._datepickerRef = this._datepicker.provide({
            provide: BsDatepickerConfig,
            useValue: this._config
          }).attach(BsDatepickerContainerComponent).to(this.container).position({
            attachment: this.placement
          }).show({
            placement: this.placement
          }); // if date changes from external source (model -> view)

          this._subs.push(this.bsValueChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this7._datepickerRef.instance.value = value;
          })); // if date changes from picker (view -> model)


          this._subs.push(this._datepickerRef.instance.valueChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this7.bsValue = value;

            _this7.hide();
          }));
        }
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          if (this.isOpen) {
            this._datepicker.hide();
          }

          var _iterator3 = _createForOfIteratorHelper(this._subs),
              _step4;

          try {
            for (_iterator3.s(); !(_step4 = _iterator3.n()).done;) {
              var sub = _step4.value;
              sub.unsubscribe();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          if (this._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
          }
        }
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this.isOpen) {
            return this.hide();
          }

          this.show();
        }
        /**
         * Set config for datepicker
         * @return {?}
         */

      }, {
        key: "setConfig",
        value: function setConfig() {
          this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._datepicker.dispose();

          this.isOpen$.next(false);

          if (this.isDestroy$) {
            this.isDestroy$.next();
            this.isDestroy$.complete();
          }
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this._datepicker.isShown;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.isOpen$.next(value);
        }
        /**
         * Initial value of datepicker
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "bsValue",
        set: function set(value) {
          if (this._bsValue && value && this._bsValue.getTime() === value.getTime()) {
            return;
          }

          this._bsValue = value;
          this.bsValueChange.emit(value);
        }
      }]);

      return BsDatepickerDirective;
    }();

    BsDatepickerDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[bsDatepicker]',
        exportAs: 'bsDatepicker'
      }]
    }];
    /** @nocollapse */

    BsDatepickerDirective.ctorParameters = function () {
      return [{
        type: BsDatepickerConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__["ComponentLoaderFactory"]
      }];
    };

    BsDatepickerDirective.propDecorators = {
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      triggers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outsideClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      container: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outsideEsc: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onShown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      bsValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bsConfig: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      daysDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      datesDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      datesEnabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dateCustomClasses: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bsValueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDatepickerInlineConfig = /*#__PURE__*/function (_BsDatepickerConfig) {
      _inherits(BsDatepickerInlineConfig, _BsDatepickerConfig);

      var _super3 = _createSuper(BsDatepickerInlineConfig);

      function BsDatepickerInlineConfig() {
        _classCallCheck(this, BsDatepickerInlineConfig);

        return _super3.apply(this, arguments);
      }

      return BsDatepickerInlineConfig;
    }(BsDatepickerConfig);

    BsDatepickerInlineConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var BsDatepickerInlineContainerComponent = /*#__PURE__*/function (_BsDatepickerContaine) {
      _inherits(BsDatepickerInlineContainerComponent, _BsDatepickerContaine);

      var _super4 = _createSuper(BsDatepickerInlineContainerComponent);

      /**
       * @param {?} _renderer
       * @param {?} _config
       * @param {?} _store
       * @param {?} _element
       * @param {?} _actions
       * @param {?} _effects
       * @param {?} _positioningService
       */
      function BsDatepickerInlineContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
        var _this8;

        _classCallCheck(this, BsDatepickerInlineContainerComponent);

        _this8 = _super4.call(this, _renderer, _config, _store, _element, _actions, _effects, _positioningService);

        _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');

        _renderer.setStyle(_element.nativeElement, 'position', 'static');

        return _this8;
      }

      return BsDatepickerInlineContainerComponent;
    }(BsDatepickerContainerComponent);

    BsDatepickerInlineContainerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-datepicker-inline-container',
        providers: [BsDatepickerStore, BsDatepickerEffects],
        template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges?.length > 0\">\n    <bs-custom-date-view \n      [selectedRange]=\"chosenRange\" \n      [ranges]=\"customRanges\"\n      (onSelect)=\"setRangeOnCalendar($event)\">\n    </bs-custom-date-view>\n  </div>\n</div>\n",
        host: {
          '(click)': '_stopPropagation($event)'
        },
        animations: [datepickerAnimation]
      }]
    }];
    /** @nocollapse */

    BsDatepickerInlineContainerComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: BsDatepickerConfig
      }, {
        type: BsDatepickerStore
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: BsDatepickerActions
      }, {
        type: BsDatepickerEffects
      }, {
        type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDatepickerInlineDirective = /*#__PURE__*/function () {
      /**
       * @param {?} _config
       * @param {?} _elementRef
       * @param {?} _renderer
       * @param {?} _viewContainerRef
       * @param {?} cis
       */
      function BsDatepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        _classCallCheck(this, BsDatepickerInlineDirective);

        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when datepicker value has been changed
         */

        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subs = []; // todo: assign only subset of fields

        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
      }
      /**
       * Initial value of datepicker
       * @param {?} value
       * @return {?}
       */


      _createClass(BsDatepickerInlineDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this9 = this;

          this.setConfig(); // if date changes from external source (model -> view)

          this._subs.push(this.bsValueChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this9._datepickerRef.instance.value = value;
          })); // if date changes from picker (view -> model)


          this._subs.push(this._datepickerRef.instance.valueChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this9.bsValue = value;
          }));
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
          }

          if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
            this.setConfig();
          }

          if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
            this.setConfig();
          }

          if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            this.setConfig();
          }

          if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
            this._datepickerRef.instance.value = this._bsValue;
          }

          if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
            this.setConfig();
          }

          if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            this.setConfig();
          }
        }
        /**
         * Set config for datepicker
         * @return {?}
         */

      }, {
        key: "setConfig",
        value: function setConfig() {
          if (this._datepicker) {
            this._datepicker.hide();
          }

          this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled
          });
          this._datepickerRef = this._datepicker.provide({
            provide: BsDatepickerConfig,
            useValue: this._config
          }).attach(BsDatepickerInlineContainerComponent).to(this._elementRef).show();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._datepicker.dispose();
        }
      }, {
        key: "bsValue",
        set: function set(value) {
          if (this._bsValue === value) {
            return;
          }

          this._bsValue = value;
          this.bsValueChange.emit(value);
        }
      }]);

      return BsDatepickerInlineDirective;
    }();

    BsDatepickerInlineDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'bs-datepicker-inline',
        exportAs: 'bsDatepickerInline'
      }]
    }];
    /** @nocollapse */

    BsDatepickerInlineDirective.ctorParameters = function () {
      return [{
        type: BsDatepickerInlineConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__["ComponentLoaderFactory"]
      }];
    };

    BsDatepickerInlineDirective.propDecorators = {
      bsValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bsConfig: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dateCustomClasses: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      datesEnabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      datesDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bsValueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDaterangepickerInlineConfig = /*#__PURE__*/function (_BsDatepickerConfig2) {
      _inherits(BsDaterangepickerInlineConfig, _BsDatepickerConfig2);

      var _super5 = _createSuper(BsDaterangepickerInlineConfig);

      function BsDaterangepickerInlineConfig() {
        var _this10;

        _classCallCheck(this, BsDaterangepickerInlineConfig);

        _this10 = _super5.apply(this, arguments); // DatepickerRenderOptions

        _this10.displayMonths = 2;
        /**
         * turn on/off animation
         */

        _this10.isAnimated = false;
        return _this10;
      }

      return BsDaterangepickerInlineConfig;
    }(BsDatepickerConfig);

    BsDaterangepickerInlineConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDaterangepickerContainerComponent = /*#__PURE__*/function (_BsDatepickerAbstract2) {
      _inherits(BsDaterangepickerContainerComponent, _BsDatepickerAbstract2);

      var _super6 = _createSuper(BsDaterangepickerContainerComponent);

      /**
       * @param {?} _renderer
       * @param {?} _config
       * @param {?} _store
       * @param {?} _element
       * @param {?} _actions
       * @param {?} _effects
       * @param {?} _positionService
       */
      function BsDaterangepickerContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
        var _this11;

        _classCallCheck(this, BsDaterangepickerContainerComponent);

        _this11 = _super6.call(this);
        _this11._config = _config;
        _this11._store = _store;
        _this11._element = _element;
        _this11._actions = _actions;
        _this11._positionService = _positionService;
        _this11.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this11.animationState = 'void';
        _this11._rangeStack = [];
        _this11.chosenRange = [];
        _this11._subs = [];
        _this11._effects = _effects;
        _this11.customRanges = _this11._config.ranges;

        _renderer.setStyle(_element.nativeElement, 'display', 'block');

        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');

        return _this11;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(BsDaterangepickerContainerComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this12 = this;

          this._positionService.setOptions({
            modifiers: {
              flip: {
                enabled: this._config.adaptivePosition
              }
            },
            allowedPositions: ['top', 'bottom']
          });

          this._positionService.event$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this12._positionService.disable();

            if (_this12._config.isAnimated) {
              _this12.animationState = _this12.isTopPosition ? 'animated-up' : 'animated-down';
              return;
            }

            _this12.animationState = 'unanimated';
          });

          this.containerClass = this._config.containerClass;
          this.isOtherMonthsActive = this._config.selectFromOtherMonth;

          this._effects.init(this._store) // intial state options
          // todo: fix this, split configs
          .setOptions(this._config) // data binding view --> model
          .setBindings(this) // set event handlers
          .setEventHandlers(this).registerDatepickerSideEffects(); // todo: move it somewhere else
          // on selected date change


          this._subs.push(this._store.select(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            return state.selectedRange;
          }).subscribe(
          /**
          * @param {?} date
          * @return {?}
          */
          function (date) {
            _this12.valueChange.emit(date);

            _this12.chosenRange = date;
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "positionServiceEnable",

        /**
         * @return {?}
         */
        value: function positionServiceEnable() {
          this._positionService.enable();
        }
        /**
         * @param {?} day
         * @return {?}
         */

      }, {
        key: "daySelectHandler",
        value: function daySelectHandler(day) {
          if (!day) {
            return;
          }
          /** @type {?} */


          var isDisabled = this.isOtherMonthsActive ? day.isDisabled : day.isOtherMonth || day.isDisabled;

          if (isDisabled) {
            return;
          } // if only one date is already selected
          // and user clicks on previous date
          // start selection from new date
          // but if new date is after initial one
          // than finish selection


          if (this._rangeStack.length === 1) {
            this._rangeStack = day.date >= this._rangeStack[0] ? [this._rangeStack[0], day.date] : [day.date];
          }

          if (this._rangeStack.length === 0) {
            this._rangeStack = [day.date];
          }

          this._store.dispatch(this._actions.selectRange(this._rangeStack));

          if (this._rangeStack.length === 2) {
            this._rangeStack = [];
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _iterator4 = _createForOfIteratorHelper(this._subs),
              _step5;

          try {
            for (_iterator4.s(); !(_step5 = _iterator4.n()).done;) {
              var sub = _step5.value;
              sub.unsubscribe();
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          this._effects.destroy();
        }
        /**
         * @param {?} dates
         * @return {?}
         */

      }, {
        key: "setRangeOnCalendar",
        value: function setRangeOnCalendar(dates) {
          this._rangeStack = dates === null ? [] : dates.value instanceof Date ? [dates.value] : dates.value;

          this._store.dispatch(this._actions.selectRange(this._rangeStack));
        }
      }, {
        key: "value",
        set: function set(value) {
          this._effects.setRangeValue(value);
        }
      }, {
        key: "isTopPosition",
        get: function get() {
          return this._element.nativeElement.classList.contains('top');
        }
      }]);

      return BsDaterangepickerContainerComponent;
    }(BsDatepickerAbstractComponent);

    BsDaterangepickerContainerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-daterangepicker-container',
        providers: [BsDatepickerStore, BsDatepickerEffects],
        template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges?.length > 0\">\n    <bs-custom-date-view \n      [selectedRange]=\"chosenRange\" \n      [ranges]=\"customRanges\"\n      (onSelect)=\"setRangeOnCalendar($event)\">\n    </bs-custom-date-view>\n  </div>\n</div>\n",
        host: {
          "class": 'bottom',
          '(click)': '_stopPropagation($event)',
          role: 'dialog',
          'aria-label': 'calendar'
        },
        animations: [datepickerAnimation]
      }]
    }];
    /** @nocollapse */

    BsDaterangepickerContainerComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: BsDatepickerConfig
      }, {
        type: BsDatepickerStore
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: BsDatepickerActions
      }, {
        type: BsDatepickerEffects
      }, {
        type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDaterangepickerInlineContainerComponent = /*#__PURE__*/function (_BsDaterangepickerCon) {
      _inherits(BsDaterangepickerInlineContainerComponent, _BsDaterangepickerCon);

      var _super7 = _createSuper(BsDaterangepickerInlineContainerComponent);

      /**
       * @param {?} _renderer
       * @param {?} _config
       * @param {?} _store
       * @param {?} _element
       * @param {?} _actions
       * @param {?} _effects
       * @param {?} _positioningService
       */
      function BsDaterangepickerInlineContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
        var _this13;

        _classCallCheck(this, BsDaterangepickerInlineContainerComponent);

        _this13 = _super7.call(this, _renderer, _config, _store, _element, _actions, _effects, _positioningService);

        _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');

        _renderer.setStyle(_element.nativeElement, 'position', 'static');

        return _this13;
      }

      return BsDaterangepickerInlineContainerComponent;
    }(BsDaterangepickerContainerComponent);

    BsDaterangepickerInlineContainerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-daterangepicker-inline-container',
        providers: [BsDatepickerStore, BsDatepickerEffects],
        template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\"\n    [@datepickerAnimation]=\"animationState\"\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of daysCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\">\n        </bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of monthsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\">\n        </bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n          *ngFor=\"let calendar of yearsCalendar | async\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"yearHoverHandler($event)\"\n          (onSelect)=\"yearSelectHandler($event)\">\n        </bs-years-calendar-view>\n      </div>\n    </div>\n\n    <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges?.length > 0\">\n    <bs-custom-date-view \n      [selectedRange]=\"chosenRange\" \n      [ranges]=\"customRanges\"\n      (onSelect)=\"setRangeOnCalendar($event)\">\n    </bs-custom-date-view>\n  </div>\n</div>\n",
        host: {
          '(click)': '_stopPropagation($event)'
        },
        animations: [datepickerAnimation]
      }]
    }];
    /** @nocollapse */

    BsDaterangepickerInlineContainerComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: BsDatepickerConfig
      }, {
        type: BsDatepickerStore
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: BsDatepickerActions
      }, {
        type: BsDatepickerEffects
      }, {
        type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDaterangepickerInlineDirective = /*#__PURE__*/function () {
      /**
       * @param {?} _config
       * @param {?} _elementRef
       * @param {?} _renderer
       * @param {?} _viewContainerRef
       * @param {?} cis
       */
      function BsDaterangepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        _classCallCheck(this, BsDaterangepickerInlineDirective);

        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when daterangepicker value has been changed
         */

        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subs = []; // todo: assign only subset of fields

        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
      }
      /**
       * Initial value of datepicker
       * @param {?} value
       * @return {?}
       */


      _createClass(BsDaterangepickerInlineDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this14 = this;

          this.setConfig(); // if date changes from external source (model -> view)

          this._subs.push(this.bsValueChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this14._datepickerRef.instance.value = value;
          })); // if date changes from picker (view -> model)


          this._subs.push(this._datepickerRef.instance.valueChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} range
          * @return {?}
          */
          function (range) {
            return range && range[0] && !!range[1];
          })).subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this14.bsValue = value;
          }));
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
          }

          if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
            this.setConfig();
          }

          if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
            this.setConfig();
          }

          if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
          }

          if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            this.setConfig();
          }

          if (changes.daysDisabled) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
            this.setConfig();
          }

          if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
            this.setConfig();
          }

          if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            this.setConfig();
          }
        }
        /**
         * Set config for datepicker
         * @return {?}
         */

      }, {
        key: "setConfig",
        value: function setConfig() {
          if (this._datepicker) {
            this._datepicker.hide();
          }

          this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            ranges: this.bsConfig && this.bsConfig.ranges
          });
          this._datepickerRef = this._datepicker.provide({
            provide: BsDatepickerConfig,
            useValue: this._config
          }).attach(BsDaterangepickerInlineContainerComponent).to(this._elementRef).show();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._datepicker.dispose();
        }
      }, {
        key: "bsValue",
        set: function set(value) {
          if (this._bsValue === value) {
            return;
          }

          this._bsValue = value;
          this.bsValueChange.emit(value);
        }
      }]);

      return BsDaterangepickerInlineDirective;
    }();

    BsDaterangepickerInlineDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'bs-daterangepicker-inline',
        exportAs: 'bsDaterangepickerInline'
      }]
    }];
    /** @nocollapse */

    BsDaterangepickerInlineDirective.ctorParameters = function () {
      return [{
        type: BsDaterangepickerInlineConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__["ComponentLoaderFactory"]
      }];
    };

    BsDaterangepickerInlineDirective.propDecorators = {
      bsValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bsConfig: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dateCustomClasses: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      daysDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      datesDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      datesEnabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bsValueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var BS_DATEPICKER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],

      /* tslint:disable-next-line: no-use-before-declare */
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return BsDatepickerInputDirective;
      }),
      multi: true
    };
    /** @type {?} */

    var BS_DATEPICKER_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALIDATORS"],

      /* tslint:disable-next-line: no-use-before-declare */
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return BsDatepickerInputDirective;
      }),
      multi: true
    };

    var BsDatepickerInputDirective = /*#__PURE__*/function () {
      /**
       * @param {?} _picker
       * @param {?} _localeService
       * @param {?} _renderer
       * @param {?} _elRef
       * @param {?} changeDetection
       */
      function BsDatepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
        var _this15 = this;

        _classCallCheck(this, BsDatepickerInputDirective);

        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        /* tslint:disable-next-line: no-unused-variable */

        this._validatorChange = Function.prototype; // update input value on datepicker value update

        this._picker.bsValueChange.subscribe(
        /**
        * @param {?} value
        * @return {?}
        */
        function (value) {
          _this15._setInputValue(value);

          if (_this15._value !== value) {
            _this15._value = value;

            _this15._onChange(value);

            _this15._onTouched();
          }

          _this15.changeDetection.markForCheck();
        }); // update input value on locale change


        this._localeService.localeChange.subscribe(
        /**
        * @return {?}
        */
        function () {
          _this15._setInputValue(_this15._value);
        });
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(BsDatepickerInputDirective, [{
        key: "onKeydownEvent",
        value: function onKeydownEvent(event) {
          if (event.keyCode === 13 || event.code === 'Enter') {
            this.hide();
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setInputValue",
        value: function _setInputValue(value) {
          /** @type {?} */
          var initialDate = !value ? '' : Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);

          this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onChange",
        value: function onChange(event) {
          /* tslint:disable-next-line: no-any*/
          this.writeValue(
          /** @type {?} */
          event.target.value);

          this._onChange(this._value);

          if (this._picker._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elRef.nativeElement).focus();
          }

          this._onTouched();
        }
        /**
         * @param {?} c
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(c) {
          /** @type {?} */
          var _value = c.value;
          /* tslint:disable-next-line: prefer-switch */

          if (_value === null || _value === undefined || _value === '') {
            return null;
          }

          if (Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDate"])(_value)) {
            /** @type {?} */
            var _isDateValid = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDateValid"])(_value);

            if (!_isDateValid) {
              return {
                bsDate: {
                  invalid: _value
                }
              };
            }

            if (this._picker && this._picker.minDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(_value, this._picker.minDate, 'date')) {
              this.writeValue(this._picker.minDate);
              return {
                bsDate: {
                  minDate: this._picker.minDate
                }
              };
            }

            if (this._picker && this._picker.maxDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(_value, this._picker.maxDate, 'date')) {
              this.writeValue(this._picker.maxDate);
              return {
                bsDate: {
                  maxDate: this._picker.maxDate
                }
              };
            }
          }
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._validatorChange = fn;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (!value) {
            this._value = null;
          } else {
            /** @type {?} */
            var _localeKey = this._localeService.currentLocale;
            /** @type {?} */

            var _locale = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getLocale"])(_localeKey);

            if (!_locale) {
              throw new Error("Locale \"".concat(_localeKey, "\" is not defined, please add it with \"defineLocale(...)\""));
            }

            this._value = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["parseDate"])(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);

            if (this._picker._config.useUtc) {
              this._value = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["utcAsLocal"])(this._value);
            }
          }

          this._picker.bsValue = this._value;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._picker.isDisabled = isDisabled;

          if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');

            return;
          }

          this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
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
         * @return {?}
         */

      }, {
        key: "onBlur",
        value: function onBlur() {
          this._onTouched();
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          this._picker.hide();

          this._renderer.selectRootElement(this._elRef.nativeElement).blur();

          if (this._picker._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elRef.nativeElement).focus();
          }
        }
      }]);

      return BsDatepickerInputDirective;
    }();

    BsDatepickerInputDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: "input[bsDatepicker]",
        host: {
          '(change)': 'onChange($event)',
          '(keyup.esc)': 'hide()',
          '(keydown)': 'onKeydownEvent($event)',
          '(blur)': 'onBlur()'
        },
        providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
      }]
    }];
    /** @nocollapse */

    BsDatepickerInputDirective.ctorParameters = function () {
      return [{
        type: BsDatepickerDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }, {
        type: BsLocaleService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDaterangepickerConfig = /*#__PURE__*/function (_BsDatepickerConfig3) {
      _inherits(BsDaterangepickerConfig, _BsDatepickerConfig3);

      var _super8 = _createSuper(BsDaterangepickerConfig);

      function BsDaterangepickerConfig() {
        var _this16;

        _classCallCheck(this, BsDaterangepickerConfig);

        _this16 = _super8.apply(this, arguments); // DatepickerRenderOptions

        _this16.displayMonths = 2;
        return _this16;
      }

      return BsDaterangepickerConfig;
    }(BsDatepickerConfig);

    BsDaterangepickerConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDaterangepickerDirective = /*#__PURE__*/function () {
      /**
       * @param {?} _config
       * @param {?} _elementRef
       * @param {?} _renderer
       * @param {?} _viewContainerRef
       * @param {?} cis
       */
      function BsDaterangepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        _classCallCheck(this, BsDaterangepickerDirective);

        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
         */

        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */

        this.triggers = 'click';
        /**
         * Close daterangepicker on outside click
         */

        this.outsideClick = true;
        /**
         * A selector specifying the element the daterangepicker should be appended to.
         */

        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when daterangepicker value has been changed
         */

        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._subs = [];
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        Object.assign(this, _config);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
        this.isOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.isOpen);
      }
      /**
       * Returns whether or not the daterangepicker is currently being shown
       * @return {?}
       */


      _createClass(BsDaterangepickerDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this17 = this;

          this.isDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();

          this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show:
            /**
            * @return {?}
            */
            function show() {
              return _this17.show();
            }
          });

          this.setConfig();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
          }

          if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
          }

          if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
          }

          if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
          }

          if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
          }

          if (changes.daysDisabled) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
          }

          if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
          }

          if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this18 = this;

          this.isOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} isOpen
          * @return {?}
          */
          function (isOpen) {
            return isOpen !== _this18.isOpen;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.isDestroy$)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this18.toggle();
          });
        }
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this19 = this;

          if (this._datepicker.isShown) {
            return;
          }

          this.setConfig();
          this._datepickerRef = this._datepicker.provide({
            provide: BsDatepickerConfig,
            useValue: this._config
          }).attach(BsDaterangepickerContainerComponent).to(this.container).position({
            attachment: this.placement
          }).show({
            placement: this.placement
          }); // if date changes from external source (model -> view)

          this._subs.push(this.bsValueChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this19._datepickerRef.instance.value = value;
          })); // if date changes from picker (view -> model)


          this._subs.push(this._datepickerRef.instance.valueChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(
          /**
          * @param {?} range
          * @return {?}
          */
          function (range) {
            return range && range[0] && !!range[1];
          })).subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this19.bsValue = value;

            _this19.hide();
          }));
        }
        /**
         * Set config for daterangepicker
         * @return {?}
         */

      }, {
        key: "setConfig",
        value: function setConfig() {
          this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            ranges: this.bsConfig && this.bsConfig.ranges
          });
        }
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          if (this.isOpen) {
            this._datepicker.hide();
          }

          var _iterator5 = _createForOfIteratorHelper(this._subs),
              _step6;

          try {
            for (_iterator5.s(); !(_step6 = _iterator5.n()).done;) {
              var sub = _step6.value;
              sub.unsubscribe();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          if (this._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
          }
        }
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this.isOpen) {
            return this.hide();
          }

          this.show();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._datepicker.dispose();

          this.isOpen$.next(false);

          if (this.isDestroy$) {
            this.isDestroy$.next();
            this.isDestroy$.complete();
          }
        }
      }, {
        key: "isOpen",
        get: function get() {
          return this._datepicker.isShown;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.isOpen$.next(value);
        }
        /**
         * Initial value of daterangepicker
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "bsValue",
        set: function set(value) {
          if (this._bsValue === value) {
            return;
          }

          this._bsValue = value;
          this.bsValueChange.emit(value);
        }
      }]);

      return BsDaterangepickerDirective;
    }();

    BsDaterangepickerDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[bsDaterangepicker]',
        exportAs: 'bsDaterangepicker'
      }]
    }];
    /** @nocollapse */

    BsDaterangepickerDirective.ctorParameters = function () {
      return [{
        type: BsDaterangepickerConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__["ComponentLoaderFactory"]
      }];
    };

    BsDaterangepickerDirective.propDecorators = {
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      triggers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outsideClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      container: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outsideEsc: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onShown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      bsValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bsConfig: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dateCustomClasses: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      daysDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      datesDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      datesEnabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      bsValueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],

      /* tslint:disable-next-line: no-use-before-declare */
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return BsDaterangepickerInputDirective;
      }),
      multi: true
    };
    /** @type {?} */

    var BS_DATERANGEPICKER_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALIDATORS"],

      /* tslint:disable-next-line: no-use-before-declare */
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return BsDaterangepickerInputDirective;
      }),
      multi: true
    };

    var BsDaterangepickerInputDirective = /*#__PURE__*/function () {
      /**
       * @param {?} _picker
       * @param {?} _localeService
       * @param {?} _renderer
       * @param {?} _elRef
       * @param {?} changeDetection
       */
      function BsDaterangepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
        var _this20 = this;

        _classCallCheck(this, BsDaterangepickerInputDirective);

        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        /* tslint:disable-next-line: no-unused-variable */

        this._validatorChange = Function.prototype; // update input value on datepicker value update

        this._picker.bsValueChange.subscribe(
        /**
        * @param {?} value
        * @return {?}
        */
        function (value) {
          _this20._setInputValue(value);

          if (_this20._value !== value) {
            _this20._value = value;

            _this20._onChange(value);

            _this20._onTouched();
          }

          _this20.changeDetection.markForCheck();
        }); // update input value on locale change


        this._localeService.localeChange.subscribe(
        /**
        * @return {?}
        */
        function () {
          _this20._setInputValue(_this20._value);
        });
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(BsDaterangepickerInputDirective, [{
        key: "onKeydownEvent",
        value: function onKeydownEvent(event) {
          if (event.keyCode === 13 || event.code === 'Enter') {
            this.hide();
          }
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_setInputValue",
        value: function _setInputValue(date) {
          /** @type {?} */
          var range = '';

          if (date) {
            /** @type {?} */
            var start = !date[0] ? '' : Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            /** @type {?} */

            var end = !date[1] ? '' : Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            range = start && end ? start + this._picker._config.rangeSeparator + end : '';
          }

          this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onChange",
        value: function onChange(event) {
          /* tslint:disable-next-line: no-any*/
          this.writeValue(
          /** @type {?} */
          event.target.value);

          this._onChange(this._value);

          if (this._picker._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elRef.nativeElement).focus();
          }

          this._onTouched();
        }
        /**
         * @param {?} c
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(c) {
          /** @type {?} */
          var _value = c.value;
          /** @type {?} */

          var errors = [];

          if (_value === null || _value === undefined || !Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isArray"])(_value)) {
            return null;
          } // @ts-ignore


          _value.sort(
          /**
          * @param {?} a
          * @param {?} b
          * @return {?}
          */
          function (a, b) {
            return a - b;
          });
          /** @type {?} */


          var _isFirstDateValid = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDateValid"])(_value[0]);
          /** @type {?} */


          var _isSecondDateValid = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isDateValid"])(_value[1]);

          if (!_isFirstDateValid) {
            return {
              bsDate: {
                invalid: _value[0]
              }
            };
          }

          if (!_isSecondDateValid) {
            return {
              bsDate: {
                invalid: _value[1]
              }
            };
          }

          if (this._picker && this._picker.minDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isBefore"])(_value[0], this._picker.minDate, 'date')) {
            _value[0] = this._picker.minDate;
            errors.push({
              bsDate: {
                minDate: this._picker.minDate
              }
            });
          }

          if (this._picker && this._picker.maxDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["isAfter"])(_value[1], this._picker.maxDate, 'date')) {
            _value[1] = this._picker.maxDate;
            errors.push({
              bsDate: {
                maxDate: this._picker.maxDate
              }
            });
          }

          if (errors.length > 0) {
            this.writeValue(_value);
            return errors;
          }
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._validatorChange = fn;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          var _this21 = this;

          if (!value) {
            this._value = null;
          } else {
            /** @type {?} */
            var _localeKey = this._localeService.currentLocale;
            /** @type {?} */

            var _locale = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["getLocale"])(_localeKey);

            if (!_locale) {
              throw new Error("Locale \"".concat(_localeKey, "\" is not defined, please add it with \"defineLocale(...)\""));
            }
            /** @type {?} */


            var _input = [];

            if (typeof value === 'string') {
              _input = value.split(this._picker._config.rangeSeparator);
            }

            if (Array.isArray(value)) {
              _input = value;
            }

            this._value =
            /** @type {?} */
            _input.map(
            /**
            * @param {?} _val
            * @return {?}
            */
            function (_val) {
              if (_this21._picker._config.useUtc) {
                return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["utcAsLocal"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["parseDate"])(_val, _this21._picker._config.dateInputFormat, _this21._localeService.currentLocale));
              }

              return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["parseDate"])(_val, _this21._picker._config.dateInputFormat, _this21._localeService.currentLocale);
            }).map(
            /**
            * @param {?} date
            * @return {?}
            */
            function (date) {
              return isNaN(date.valueOf()) ? null : date;
            });
          }

          this._picker.bsValue = this._value;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._picker.isDisabled = isDisabled;

          if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');

            return;
          }

          this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /* tslint:disable-next-line: no-any*/

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
         * @return {?}
         */

      }, {
        key: "onBlur",
        value: function onBlur() {
          this._onTouched();
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          this._picker.hide();

          this._renderer.selectRootElement(this._elRef.nativeElement).blur();

          if (this._picker._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elRef.nativeElement).focus();
          }
        }
      }]);

      return BsDaterangepickerInputDirective;
    }();

    BsDaterangepickerInputDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: "input[bsDaterangepicker]",
        host: {
          '(change)': 'onChange($event)',
          '(keyup.esc)': 'hide()',
          '(keydown)': 'onKeydownEvent($event)',
          '(blur)': 'onBlur()'
        },
        providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
      }]
    }];
    /** @nocollapse */

    BsDaterangepickerInputDirective.ctorParameters = function () {
      return [{
        type: BsDaterangepickerDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }, {
        type: BsLocaleService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsCalendarLayoutComponent = function BsCalendarLayoutComponent() {
      _classCallCheck(this, BsCalendarLayoutComponent);
    };

    BsCalendarLayoutComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-calendar-layout',
        template: "\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var BsCurrentDateViewComponent = function BsCurrentDateViewComponent() {
      _classCallCheck(this, BsCurrentDateViewComponent);
    };

    BsCurrentDateViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-current-date',
        template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
      }]
    }];
    BsCurrentDateViewComponent.propDecorators = {
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function BsCustomDates() {}

    if (false) {}

    var BsCustomDatesViewComponent = /*#__PURE__*/function () {
      function BsCustomDatesViewComponent() {
        _classCallCheck(this, BsCustomDatesViewComponent);

        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.customRange = null;
      }
      /**
       * @param {?} range
       * @return {?}
       */


      _createClass(BsCustomDatesViewComponent, [{
        key: "selectFromRanges",
        value: function selectFromRanges(range) {
          this.onSelect.emit(range);
        }
        /**
         * @return {?}
         */

      }, {
        key: "checkRange",
        value: function checkRange() {
          var _this22 = this;

          return this.ranges ? this.ranges.filter(
          /**
          * @param {?} range
          * @return {?}
          */
          function (range) {
            return range.value === _this22.selectedRange;
          }).length > 0 : false;
        }
      }]);

      return BsCustomDatesViewComponent;
    }();

    BsCustomDatesViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-custom-date-view',
        template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\"\n        type=\"button\"\n        class=\"btn\"\n        (click)=\"selectFromRanges(range)\"\n        [class.selected]=\"range.value === selectedRange\">\n        {{ range.label }}\n      </button>\n      <button\n        type=\"button\"\n        class=\"btn\"\n        (click)=\"selectFromRanges(customRange)\"\n        [class.selected]=\"!checkRange()\">\n        Custom Range\n      </button>\n    </div>\n  ",
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    BsCustomDatesViewComponent.propDecorators = {
      ranges: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectedRange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDatepickerDayDecoratorComponent = /*#__PURE__*/function () {
      /**
       * @param {?} _config
       * @param {?} _elRef
       * @param {?} _renderer
       */
      function BsDatepickerDayDecoratorComponent(_config, _elRef, _renderer) {
        _classCallCheck(this, BsDatepickerDayDecoratorComponent);

        this._config = _config;
        this._elRef = _elRef;
        this._renderer = _renderer;
      }
      /**
       * @return {?}
       */


      _createClass(BsDatepickerDayDecoratorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          if (this.day.isToday && this._config && this._config.customTodayClass) {
            this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
          }

          if (typeof this.day.customClasses === 'string') {
            this.day.customClasses.split(' ').filter(
            /**
            * @param {?} className
            * @return {?}
            */
            function (className) {
              return className;
            }).forEach(
            /**
            * @param {?} className
            * @return {?}
            */
            function (className) {
              _this23._renderer.addClass(_this23._elRef.nativeElement, className);
            });
          }
        }
      }]);

      return BsDatepickerDayDecoratorComponent;
    }();

    BsDatepickerDayDecoratorComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: '[bsDatepickerDayDecorator]',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        host: {
          '[class.disabled]': 'day.isDisabled',
          '[class.is-highlighted]': 'day.isHovered',
          '[class.is-other-month]': 'day.isOtherMonth',
          '[class.is-active-other-month]': 'day.isOtherMonthHovered',
          '[class.in-range]': 'day.isInRange',
          '[class.select-start]': 'day.isSelectionStart',
          '[class.select-end]': 'day.isSelectionEnd',
          '[class.selected]': 'day.isSelected'
        },
        template: "{{ day.label }}"
      }]
    }];
    /** @nocollapse */

    BsDatepickerDayDecoratorComponent.ctorParameters = function () {
      return [{
        type: BsDatepickerConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    BsDatepickerDayDecoratorComponent.propDecorators = {
      day: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * **************
     * @record
     */


    function NavigationViewModel() {}

    if (false) {}
    /**
     * @record
     */


    function CalendarCellViewModel() {}

    if (false) {}
    /**
     * **************
     * @record
     */


    function DayViewModel() {}

    if (false) {}
    /**
     * @record
     */


    function WeekViewModel() {}

    if (false) {}
    /**
     * @record
     */


    function DaysCalendarViewModel() {}

    if (false) {}
    /**
     * **************
     * @record
     */


    function MonthsCalendarViewModel() {}

    if (false) {}
    /**
     * **************
     * @record
     */


    function YearsCalendarViewModel() {}

    if (false) {}
    /**
     * **************
     * @record
     */


    function DaysCalendarModel() {}

    if (false) {}
    /**
     * **************
     * @record
     */


    function MonthViewOptions() {}

    if (false) {}
    /**
     * **************
     * @record
     */


    function DatepickerFormatOptions() {}

    if (false) {}
    /**
     * @record
     */


    function DatepickerRenderOptions() {}

    if (false) {}
    /**
     * @record
     */


    function DatepickerDateCustomClasses() {}

    if (false) {}
    /** @enum {number} */


    var BsNavigationDirection = {
      UP: 0,
      DOWN: 1
    };
    BsNavigationDirection[BsNavigationDirection.UP] = 'UP';
    BsNavigationDirection[BsNavigationDirection.DOWN] = 'DOWN';
    /**
     * @record
     */

    function BsNavigationEvent() {}

    if (false) {}
    /**
     * @record
     */


    function BsViewNavigationEvent() {}

    if (false) {}
    /**
     * @record
     */


    function CellHoverEvent() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDatepickerNavigationViewComponent = /*#__PURE__*/function () {
      function BsDatepickerNavigationViewComponent() {
        _classCallCheck(this, BsDatepickerNavigationViewComponent);

        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} down
       * @return {?}
       */


      _createClass(BsDatepickerNavigationViewComponent, [{
        key: "navTo",
        value: function navTo(down) {
          this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
        }
        /**
         * @param {?} viewMode
         * @return {?}
         */

      }, {
        key: "view",
        value: function view(viewMode) {
          this.onViewMode.emit(viewMode);
        }
      }]);

      return BsDatepickerNavigationViewComponent;
    }();

    BsDatepickerNavigationViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-datepicker-navigation-view',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            type=\"button\"\n            (click)=\"navTo(true)\">\n      <span>&lsaquo;</span>\n    </button>\n\n    <ng-container *ngIf=\"calendar.monthTitle\">\n      &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n      <button class=\"current\"\n            type=\"button\"\n            (click)=\"view('month')\"\n      ><span>{{ calendar.monthTitle }}</span>\n      </button>\n    </ng-container>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\" (click)=\"view('year')\" type=\"button\">\n      <span>{{ calendar.yearTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            type=\"button\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
      }]
    }];
    BsDatepickerNavigationViewComponent.propDecorators = {
      calendar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onNavigate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onViewMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDaysCalendarViewComponent = /*#__PURE__*/function () {
      /**
       * @param {?} _config
       */
      function BsDaysCalendarViewComponent(_config) {
        _classCallCheck(this, BsDaysCalendarViewComponent);

        this._config = _config;
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHoverWeek = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(BsDaysCalendarViewComponent, [{
        key: "navigateTo",
        value: function navigateTo(event) {
          /** @type {?} */
          var step = BsNavigationDirection.DOWN === event ? -1 : 1;
          this.onNavigate.emit({
            step: {
              month: step
            }
          });
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "changeViewMode",
        value: function changeViewMode(event) {
          this.onViewMode.emit(event);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "selectDay",
        value: function selectDay(event) {
          this.onSelect.emit(event);
        }
        /**
         * @param {?} week
         * @return {?}
         */

      }, {
        key: "selectWeek",
        value: function selectWeek(week) {
          var _this24 = this;

          if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
            return;
          }

          if (week.days.length === 0) {
            return;
          }

          if (this._config.selectWeek && week.days[0] && !week.days[0].isDisabled && this._config.selectFromOtherMonth) {
            this.onSelect.emit(week.days[0]);
            return;
          }
          /** @type {?} */


          var selectedDay = week.days.find(
          /**
          * @param {?} day
          * @return {?}
          */
          function (day) {
            return _this24._config.selectFromOtherMonth ? !day.isDisabled : !day.isOtherMonth && !day.isDisabled;
          });
          this.onSelect.emit(selectedDay);

          if (this._config.selectWeekDateRange) {
            /** @type {?} */
            var days = week.days.slice(0);
            /** @type {?} */

            var lastDayOfRange = days.reverse().find(
            /**
            * @param {?} day
            * @return {?}
            */
            function (day) {
              return _this24._config.selectFromOtherMonth ? !day.isDisabled : !day.isOtherMonth && !day.isDisabled;
            });
            this.onSelect.emit(lastDayOfRange);
          }
        }
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */

      }, {
        key: "weekHoverHandler",
        value: function weekHoverHandler(cell, isHovered) {
          var _this25 = this;

          if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
            return;
          }
          /** @type {?} */


          var hasActiveDays = cell.days.find(
          /**
          * @param {?} day
          * @return {?}
          */
          function (day) {
            return _this25._config.selectFromOtherMonth ? !day.isDisabled : !day.isOtherMonth && !day.isDisabled;
          });

          if (hasActiveDays) {
            cell.isHovered = isHovered;
            this.isWeekHovered = isHovered;
            this.onHoverWeek.emit(cell);
          }
        }
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */

      }, {
        key: "hoverDay",
        value: function hoverDay(cell, isHovered) {
          if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
            cell.isOtherMonthHovered = isHovered;
          }

          this.onHover.emit({
            cell: cell,
            isHovered: isHovered
          });
        }
      }]);

      return BsDaysCalendarViewComponent;
    }();

    BsDaysCalendarViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-days-calendar-view',
        // changeDetection: ChangeDetectionStrategy.OnPush,
        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" [class.active-week]=\"isWeekHovered\"  *ngIf=\"options.showWeekNumbers\">\n            <span\n                (click)=\"selectWeek(week)\"\n                (mouseenter)=\"weekHoverHandler(week, true)\"\n                (mouseleave)=\"weekHoverHandler(week, false)\">{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
      }]
    }];
    /** @nocollapse */

    BsDaysCalendarViewComponent.ctorParameters = function () {
      return [{
        type: BsDatepickerConfig
      }];
    };

    BsDaysCalendarViewComponent.propDecorators = {
      calendar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onNavigate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onViewMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHoverWeek: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsMonthCalendarViewComponent = /*#__PURE__*/function () {
      function BsMonthCalendarViewComponent() {
        _classCallCheck(this, BsMonthCalendarViewComponent);

        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(BsMonthCalendarViewComponent, [{
        key: "navigateTo",
        value: function navigateTo(event) {
          /** @type {?} */
          var step = BsNavigationDirection.DOWN === event ? -1 : 1;
          this.onNavigate.emit({
            step: {
              year: step
            }
          });
        }
        /**
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "viewMonth",
        value: function viewMonth(month) {
          this.onSelect.emit(month);
        }
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */

      }, {
        key: "hoverMonth",
        value: function hoverMonth(cell, isHovered) {
          this.onHover.emit({
            cell: cell,
            isHovered: isHovered
          });
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "changeViewMode",
        value: function changeViewMode(event) {
          this.onViewMode.emit(event);
        }
      }]);

      return BsMonthCalendarViewComponent;
    }();

    BsMonthCalendarViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-month-calendar-view',
        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span [class.selected]=\"month.isSelected\">{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
      }]
    }];
    BsMonthCalendarViewComponent.propDecorators = {
      calendar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onNavigate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onViewMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsTimepickerViewComponent = function BsTimepickerViewComponent() {
      _classCallCheck(this, BsTimepickerViewComponent);

      this.ampm = 'ok';
      this.hours = 0;
      this.minutes = 0;
    };

    BsTimepickerViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-timepicker',
        template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <button class=\"switch-time-format\" type=\"button\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
      }]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsYearsCalendarViewComponent = /*#__PURE__*/function () {
      function BsYearsCalendarViewComponent() {
        _classCallCheck(this, BsYearsCalendarViewComponent);

        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(BsYearsCalendarViewComponent, [{
        key: "navigateTo",
        value: function navigateTo(event) {
          /** @type {?} */
          var step = BsNavigationDirection.DOWN === event ? -1 : 1;
          this.onNavigate.emit({
            step: {
              year: step * yearsPerCalendar
            }
          });
        }
        /**
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "viewYear",
        value: function viewYear(year) {
          this.onSelect.emit(year);
        }
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */

      }, {
        key: "hoverYear",
        value: function hoverYear(cell, isHovered) {
          this.onHover.emit({
            cell: cell,
            isHovered: isHovered
          });
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "changeViewMode",
        value: function changeViewMode(event) {
          this.onViewMode.emit(event);
        }
      }]);

      return BsYearsCalendarViewComponent;
    }();

    BsYearsCalendarViewComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'bs-years-calendar-view',
        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span [class.selected]=\"year.isSelected\">{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
      }]
    }];
    BsYearsCalendarViewComponent.propDecorators = {
      calendar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onNavigate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onViewMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      onHover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BsDatepickerModule = /*#__PURE__*/function () {
      function BsDatepickerModule() {
        _classCallCheck(this, BsDatepickerModule);
      }

      _createClass(BsDatepickerModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: BsDatepickerModule,
            providers: [ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_7__["ComponentLoaderFactory"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_5__["PositioningService"], BsDatepickerStore, BsDatepickerActions, BsDatepickerConfig, BsDaterangepickerConfig, BsDatepickerInlineConfig, BsDaterangepickerInlineConfig, BsDatepickerEffects, BsLocaleService]
          };
        }
      }]);

      return BsDatepickerModule;
    }();

    BsDatepickerModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]],
        declarations: [BsCalendarLayoutComponent, BsCurrentDateViewComponent, BsCustomDatesViewComponent, BsDatepickerDayDecoratorComponent, BsDatepickerNavigationViewComponent, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsTimepickerViewComponent, BsYearsCalendarViewComponent, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective],
        entryComponents: [BsDatepickerContainerComponent, BsDaterangepickerContainerComponent, BsDatepickerInlineContainerComponent, BsDaterangepickerInlineContainerComponent],
        exports: [BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var DateFormatter = /*#__PURE__*/function () {
      function DateFormatter() {
        _classCallCheck(this, DateFormatter);
      }

      _createClass(DateFormatter, [{
        key: "format",

        /**
         * @param {?} date
         * @param {?} format
         * @param {?} locale
         * @return {?}
         */
        value: function format(date, _format2, locale) {
          return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(date, _format2, locale);
        }
      }]);

      return DateFormatter;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DatePickerInnerComponent = /*#__PURE__*/function () {
      function DatePickerInnerComponent() {
        _classCallCheck(this, DatePickerInnerComponent);

        this.selectionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);
        /* tslint:disable-next-line: no-any*/

        this.stepDay = {};
        /* tslint:disable-next-line: no-any*/

        this.stepMonth = {};
        /* tslint:disable-next-line: no-any*/

        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new DateFormatter();
      }
      /**
       * @return {?}
       */


      _createClass(DatePickerInnerComponent, [{
        key: "ngOnInit",
        // todo: add formatter value to Date object

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          // todo: use date for unique value
          this.uniqueId = "datepicker--".concat(Math.floor(Math.random() * 10000));

          if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
          } else if (this.activeDate === undefined) {
            this.activeDate = new Date();
          }
        } // this.refreshView should be called here to reflect the changes on the fly
        // tslint:disable-next-line:no-unused-variable

        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.refreshView();
          this.checkIfActiveDateGotUpdated(changes.activeDate);
        } // Check if activeDate has been update and then emit the activeDateChange with the new date

        /* tslint:disable-next-line: no-any */

        /**
         * @param {?} activeDate
         * @return {?}
         */

      }, {
        key: "checkIfActiveDateGotUpdated",
        value: function checkIfActiveDateGotUpdated(activeDate) {
          if (activeDate && !activeDate.firstChange) {
            /** @type {?} */
            var previousValue = activeDate.previousValue;

            if (previousValue && previousValue instanceof Date && previousValue.getTime() !== activeDate.currentValue.getTime()) {
              this.activeDateChange.emit(this.activeDate);
            }
          }
        }
        /**
         * @param {?} handler
         * @param {?} type
         * @return {?}
         */

      }, {
        key: "setCompareHandler",
        value: function setCompareHandler(handler, type) {
          if (type === 'day') {
            this.compareHandlerDay = handler;
          }

          if (type === 'month') {
            this.compareHandlerMonth = handler;
          }

          if (type === 'year') {
            this.compareHandlerYear = handler;
          }
        }
        /**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */

      }, {
        key: "compare",
        value: function compare(date1, date2) {
          if (date1 === undefined || date2 === undefined) {
            return undefined;
          }

          if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
          }

          if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
          }

          if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
          }

          return void 0;
        }
        /**
         * @param {?} handler
         * @param {?} type
         * @return {?}
         */

      }, {
        key: "setRefreshViewHandler",
        value: function setRefreshViewHandler(handler, type) {
          if (type === 'day') {
            this.refreshViewHandlerDay = handler;
          }

          if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
          }

          if (type === 'year') {
            this.refreshViewHandlerYear = handler;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "refreshView",
        value: function refreshView() {
          if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
          }

          if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
          }

          if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
          }
        }
        /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */

      }, {
        key: "dateFilter",
        value: function dateFilter(date, format) {
          return this.dateFormatter.format(date, format, this.locale);
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} dateObject
         * @return {?}
         */

      }, {
        key: "isActive",
        value: function isActive(dateObject) {
          if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
          }

          return false;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */

      }, {
        key: "createDateObject",
        value: function createDateObject(date, format) {
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */
          var dateObject = {};
          dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
          dateObject.date = this.fixTimeZone(dateObject.date);
          dateObject.label = this.dateFilter(date, format);
          dateObject.selected = this.compare(date, this.selectedDate) === 0;
          dateObject.disabled = this.isDisabled(date);
          dateObject.current = this.compare(date, new Date()) === 0;
          dateObject.customClass = this.getCustomClassForDate(dateObject.date);
          return dateObject;
        }
        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} arr
         * @param {?} size
         * @return {?}
         */

      }, {
        key: "split",
        value: function split(arr, size) {
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */
          var arrays = [];

          while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
          }

          return arrays;
        } // Fix a hard-reproducible bug with timezones
        // The bug depends on OS, browser, current timezone and current date
        // i.e.
        // var date = new Date(2014, 0, 1);
        // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
        // date.getHours()); can result in "2013 11 31 23" because of the bug.

        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "fixTimeZone",
        value: function fixTimeZone(date) {
          /** @type {?} */
          var hours = date.getHours();
          return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
        }
        /**
         * @param {?} date
         * @param {?=} isManual
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(date) {
          var isManual = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
              this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }

            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);

            if (isManual) {
              this.selectionDone.emit(this.activeDate);
            }
          } else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);

            if (isManual) {
              this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            }
          }

          this.selectedDate = new Date(this.activeDate.valueOf());
          this.update.emit(this.activeDate);
          this.refreshView();
        }
        /**
         * @param {?} direction
         * @return {?}
         */

      }, {
        key: "move",
        value: function move(direction) {
          /* tslint:disable-next-line: no-any*/

          /** @type {?} */
          var expectedStep;

          if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
          }

          if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
          }

          if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
          }

          if (expectedStep) {
            /** @type {?} */
            var year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            /** @type {?} */

            var month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
          }
        }
        /**
         * @param {?} _direction
         * @return {?}
         */

      }, {
        key: "toggleMode",
        value: function toggleMode(_direction) {
          /** @type {?} */
          var direction = _direction || 1;

          if (this.datepickerMode === this.maxMode && direction === 1 || this.datepickerMode === this.minMode && direction === -1) {
            return;
          }

          this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
          this.refreshView();
        }
        /**
         * @protected
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getCustomClassForDate",
        value: function getCustomClassForDate(date) {
          var _this26 = this;

          if (!this.customClass) {
            return '';
          } // todo: build a hash of custom classes, it will work faster

          /** @type {?} */


          var customClassObject = this.customClass.find(
          /**
          * @param {?} customClass
          * @return {?}
          */
          function (customClass) {
            return customClass.date.valueOf() === date.valueOf() && customClass.mode === _this26.datepickerMode;
          }, this);
          return customClassObject === undefined ? '' : customClassObject.clazz;
        }
        /**
         * @protected
         * @param {?} date1Disabled
         * @param {?} date2
         * @return {?}
         */

      }, {
        key: "compareDateDisabled",
        value: function compareDateDisabled(date1Disabled, date2) {
          if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
          }

          if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
          }

          if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
          }

          if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
          }

          return undefined;
        }
        /**
         * @protected
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isDisabled",
        value: function isDisabled(date) {
          var _this27 = this;

          /** @type {?} */
          var isDateDisabled = false;

          if (this.dateDisabled) {
            this.dateDisabled.forEach(
            /**
            * @param {?} disabledDate
            * @return {?}
            */
            function (disabledDate) {
              if (_this27.compareDateDisabled(disabledDate, date) === 0) {
                isDateDisabled = true;
              }
            });
          }

          if (this.dayDisabled) {
            isDateDisabled = isDateDisabled || this.dayDisabled.indexOf(date.getDay()) > -1;
          }

          return isDateDisabled || this.minDate && this.compare(date, this.minDate) < 0 || this.maxDate && this.compare(date, this.maxDate) > 0;
        }
      }, {
        key: "activeDate",
        get: function get() {
          return this._activeDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._activeDate = value;
        }
      }]);

      return DatePickerInnerComponent;
    }();

    DatePickerInnerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'datepicker-inner',
        template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "
      }]
    }];
    DatePickerInnerComponent.propDecorators = {
      locale: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      datepickerMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      startingDay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      yearRange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showWeeks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatDay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatMonth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatYear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatDayHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatDayTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatMonthTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onlyCurrentMonth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      shortcutPropagation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      monthColLimit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      yearColLimit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dateDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      initDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectionDone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      activeDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      activeDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DatepickerConfig = function DatepickerConfig() {
      _classCallCheck(this, DatepickerConfig);

      this.locale = 'en';
      this.datepickerMode = 'day';
      this.startingDay = 0;
      this.yearRange = 20;
      this.minMode = 'day';
      this.maxMode = 'year';
      this.showWeeks = true;
      this.formatDay = 'DD';
      this.formatMonth = 'MMMM';
      this.formatYear = 'YYYY';
      this.formatDayHeader = 'dd';
      this.formatDayTitle = 'MMMM YYYY';
      this.formatMonthTitle = 'YYYY';
      this.onlyCurrentMonth = false;
      this.monthColLimit = 3;
      this.yearColLimit = 5;
      this.shortcutPropagation = false;
    };

    DatepickerConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],

      /* tslint:disable-next-line: no-use-before-declare */
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return DatePickerComponent;
      }),
      multi: true
    };
    /* tslint:disable:component-selector-name component-selector-type */

    /* tslint:enable:component-selector-name component-selector-type */

    var DatePickerComponent = /*#__PURE__*/function () {
      /**
       * @param {?} config
       */
      function DatePickerComponent(config) {
        _classCallCheck(this, DatePickerComponent);

        /**
         * sets datepicker mode, supports: `day`, `month`, `year`
         */
        this.datepickerMode = 'day';
        /**
         * if false week numbers will be hidden
         */

        this.showWeeks = true;
        this.selectionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);
        /**
         * callback to invoke when the activeDate is changed.
         */

        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](undefined);
        /* tslint:disable-next-line: no-any*/

        this.onChange = Function.prototype;
        /* tslint:disable-next-line: no-any*/

        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
      }
      /**
       * currently active date
       * @return {?}
       */


      _createClass(DatePickerComponent, [{
        key: "configureOptions",

        /**
         * @return {?}
         */
        value: function configureOptions() {
          Object.assign(this, this.config);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onUpdate",
        value: function onUpdate(event) {
          this.activeDate = event;
          this.onChange(event);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onSelectionDone",
        value: function onSelectionDone(event) {
          this.selectionDone.emit(event);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onActiveDateChange",
        value: function onActiveDateChange(event) {
          this.activeDateChange.emit(event);
        } // todo: support null value

        /* tslint:disable-next-line: no-any*/

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
          }

          if (value && value instanceof Date) {
            this.activeDate = value;

            this._datePicker.select(value, false);

            return;
          }

          this.activeDate = value ? new Date(value) : void 0;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }, {
        key: "activeDate",
        get: function get() {
          return this._activeDate || this._now;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._activeDate = value;
        }
      }]);

      return DatePickerComponent;
    }();

    DatePickerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'datepicker',
        template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
        providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    DatePickerComponent.ctorParameters = function () {
      return [{
        type: DatepickerConfig
      }];
    };

    DatePickerComponent.propDecorators = {
      datepickerMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      initDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxMode: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showWeeks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatDay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatMonth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatYear: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatDayHeader: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatDayTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatMonthTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      startingDay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      yearRange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onlyCurrentMonth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      shortcutPropagation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      monthColLimit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      yearColLimit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dateDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      activeDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectionDone: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      activeDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      _datePicker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [DatePickerInnerComponent, {
          "static": true
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DayPickerComponent = /*#__PURE__*/function () {
      /**
       * @param {?} datePicker
       */
      function DayPickerComponent(datePicker) {
        _classCallCheck(this, DayPickerComponent);

        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.datePicker = datePicker;
      }
      /**
       * @return {?}
       */


      _createClass(DayPickerComponent, [{
        key: "ngOnInit",

        /*protected getDaysInMonth(year:number, month:number) {
           return ((month === 1) && (year % 4 === 0) &&
           ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
           }*/

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          /** @type {?} */
          var self = this;
          this.datePicker.stepDay = {
            months: 1
          };
          this.datePicker.setRefreshViewHandler(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var year = this.activeDate.getFullYear();
            /** @type {?} */

            var month = this.activeDate.getMonth();
            /** @type {?} */

            var firstDayOfMonth = new Date(year, month, 1);
            /** @type {?} */

            var difference = this.startingDay - firstDayOfMonth.getDay();
            /** @type {?} */

            var numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
            /** @type {?} */

            var firstDate = new Date(firstDayOfMonth.getTime());

            if (numDisplayedFromPreviousMonth > 0) {
              firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            } // 42 is the number of days on a six-week calendar

            /** @type {?} */


            var _days = self.getDates(firstDate, 42);
            /** @type {?} */


            var days = [];

            for (var i = 0; i < 42; i++) {
              /** @type {?} */
              var _dateObject = this.createDateObject(_days[i], this.formatDay);

              _dateObject.secondary = _days[i].getMonth() !== month;
              _dateObject.uid = this.uniqueId + '-' + i;
              days[i] = _dateObject;
            }

            self.labels = [];

            for (var j = 0; j < 7; j++) {
              self.labels[j] = {};
              self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
              self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }

            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);

            if (this.showWeeks) {
              self.weekNumbers = [];
              /** @type {?} */

              var thursdayIndex = (4 + 7 - this.startingDay) % 7;
              /** @type {?} */

              var numWeeks = self.rows.length;

              for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
              }
            }
          }, 'day');
          this.datePicker.setCompareHandler(
          /**
          * @param {?} date1
          * @param {?} date2
          * @return {?}
          */
          function (date1, date2) {
            /** @type {?} */
            var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            /** @type {?} */

            var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
          }, 'day');
          this.datePicker.refreshView();
        }
        /**
         * @protected
         * @param {?} startDate
         * @param {?} n
         * @return {?}
         */

      }, {
        key: "getDates",
        value: function getDates(startDate, n) {
          /** @type {?} */
          var dates = new Array(n);
          /** @type {?} */

          var current = new Date(startDate.getTime());
          /** @type {?} */

          var i = 0;
          /** @type {?} */

          var date;

          while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
          }

          return dates;
        }
        /**
         * @protected
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getISO8601WeekNumber",
        value: function getISO8601WeekNumber(date) {
          /** @type {?} */
          var checkDate = new Date(date.getTime()); // Thursday

          checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
          /** @type {?} */

          var time = checkDate.getTime(); // Compare with Jan 1

          checkDate.setMonth(0);
          checkDate.setDate(1);
          return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
        }
      }, {
        key: "isBs4",
        get: function get() {
          return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__["isBs3"])();
        }
      }]);

      return DayPickerComponent;
    }();

    DayPickerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'daypicker',
        template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
        styles: ["\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "]
      }]
    }];
    /** @nocollapse */

    DayPickerComponent.ctorParameters = function () {
      return [{
        type: DatePickerInnerComponent
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MonthPickerComponent = /*#__PURE__*/function () {
      /**
       * @param {?} datePicker
       */
      function MonthPickerComponent(datePicker) {
        _classCallCheck(this, MonthPickerComponent);

        this.rows = [];
        this.datePicker = datePicker;
      }
      /**
       * @return {?}
       */


      _createClass(MonthPickerComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          /** @type {?} */
          var self = this;
          this.datePicker.stepMonth = {
            years: 1
          };
          this.datePicker.setRefreshViewHandler(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var months = new Array(12);
            /** @type {?} */

            var year = this.activeDate.getFullYear();
            /** @type {?} */

            var date;

            for (var i = 0; i < 12; i++) {
              date = new Date(year, i, 1);
              date = this.fixTimeZone(date);
              months[i] = this.createDateObject(date, this.formatMonth);
              months[i].uid = this.uniqueId + '-' + i;
            }

            self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
            self.rows = this.split(months, self.datePicker.monthColLimit);
          }, 'month');
          this.datePicker.setCompareHandler(
          /**
          * @param {?} date1
          * @param {?} date2
          * @return {?}
          */
          function (date1, date2) {
            /** @type {?} */
            var d1 = new Date(date1.getFullYear(), date1.getMonth());
            /** @type {?} */

            var d2 = new Date(date2.getFullYear(), date2.getMonth());
            return d1.getTime() - d2.getTime();
          }, 'month');
          this.datePicker.refreshView();
        }
      }, {
        key: "isBs4",
        get: function get() {
          return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__["isBs3"])();
        }
      }]);

      return MonthPickerComponent;
    }();

    MonthPickerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'monthpicker',
        template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong> \n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
        styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
      }]
    }];
    /** @nocollapse */

    MonthPickerComponent.ctorParameters = function () {
      return [{
        type: DatePickerInnerComponent
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var YearPickerComponent = /*#__PURE__*/function () {
      /**
       * @param {?} datePicker
       */
      function YearPickerComponent(datePicker) {
        _classCallCheck(this, YearPickerComponent);

        this.rows = [];
        this.datePicker = datePicker;
      }
      /**
       * @return {?}
       */


      _createClass(YearPickerComponent, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          /** @type {?} */
          var self = this;
          this.datePicker.stepYear = {
            years: this.datePicker.yearRange
          };
          this.datePicker.setRefreshViewHandler(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var years = new Array(this.yearRange);
            /** @type {?} */

            var date;
            /** @type {?} */

            var start = self.getStartingYear(this.activeDate.getFullYear());

            for (var i = 0; i < this.yearRange; i++) {
              date = new Date(start + i, 0, 1);
              date = this.fixTimeZone(date);
              years[i] = this.createDateObject(date, this.formatYear);
              years[i].uid = this.uniqueId + '-' + i;
            }

            self.title = [years[0].label, years[this.yearRange - 1].label].join(' - ');
            self.rows = this.split(years, self.datePicker.yearColLimit);
          }, 'year');
          this.datePicker.setCompareHandler(
          /**
          * @param {?} date1
          * @param {?} date2
          * @return {?}
          */
          function (date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
          }, 'year');
          this.datePicker.refreshView();
        }
        /**
         * @protected
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "getStartingYear",
        value: function getStartingYear(year) {
          // todo: parseInt
          return (year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1;
        }
      }, {
        key: "isBs4",
        get: function get() {
          return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__["isBs3"])();
        }
      }]);

      return YearPickerComponent;
    }();

    YearPickerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'yearpicker',
        template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
        styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
      }]
    }];
    /** @nocollapse */

    YearPickerComponent.ctorParameters = function () {
      return [{
        type: DatePickerInnerComponent
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var DatepickerModule = /*#__PURE__*/function () {
      function DatepickerModule() {
        _classCallCheck(this, DatepickerModule);
      }

      _createClass(DatepickerModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: DatepickerModule,
            providers: [DatepickerConfig]
          };
        }
      }]);

      return DatepickerModule;
    }();

    DatepickerModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
        declarations: [DatePickerComponent, DatePickerInnerComponent, DayPickerComponent, MonthPickerComponent, YearPickerComponent],
        exports: [DatePickerComponent, DatePickerInnerComponent, DayPickerComponent, MonthPickerComponent, YearPickerComponent],
        entryComponents: [DatePickerComponent]
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
    //# sourceMappingURL=ngx-bootstrap-datepicker.js.map

    /***/
  },

  /***/
  "./node_modules/ngx-bootstrap/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/mini-ngrx/fesm2015/ngx-bootstrap-mini-ngrx.js ***!
    \**********************************************************************************/

  /*! exports provided: MiniState, MiniStore */

  /***/
  function node_modulesNgxBootstrapMiniNgrxFesm2015NgxBootstrapMiniNgrxJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiniState", function () {
      return MiniState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiniStore", function () {
      return MiniStore;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var MiniState = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT) {
      _inherits(MiniState, _rxjs__WEBPACK_IMPORT);

      var _super9 = _createSuper(MiniState);

      /**
       * @param {?} _initialState
       * @param {?} actionsDispatcher$
       * @param {?} reducer
       */
      function MiniState(_initialState, actionsDispatcher$, reducer) {
        var _this28;

        _classCallCheck(this, MiniState);

        _this28 = _super9.call(this, _initialState);
        /** @type {?} */

        var actionInQueue$ = actionsDispatcher$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_0__["queueScheduler"]));
        /** @type {?} */

        var state$ = actionInQueue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["scan"])(
        /**
        * @param {?} state
        * @param {?} action
        * @return {?}
        */
        function (state, action) {
          if (!action) {
            return state;
          }

          return reducer(state, action);
        }, _initialState));
        state$.subscribe(
        /**
        * @param {?} value
        * @return {?}
        */
        function (value) {
          return _this28.next(value);
        });
        return _this28;
      }

      return MiniState;
    }(rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @template T
     */


    var MiniStore = /*#__PURE__*/function (_rxjs__WEBPACK_IMPORT2) {
      _inherits(MiniStore, _rxjs__WEBPACK_IMPORT2);

      var _super10 = _createSuper(MiniStore);

      /**
       * @param {?} _dispatcher
       * @param {?} _reducer
       * @param {?} state$
       */
      function MiniStore(_dispatcher, _reducer,
      /* tslint:disable-next-line: no-any */
      state$) {
        var _this29;

        _classCallCheck(this, MiniStore);

        _this29 = _super10.call(this);
        _this29._dispatcher = _dispatcher;
        _this29._reducer = _reducer;
        /* tslint:disable-next-line: deprecation */

        _this29.source = state$;
        return _this29;
      }
      /**
       * @template R
       * @param {?} pathOrMapFn
       * @return {?}
       */


      _createClass(MiniStore, [{
        key: "select",
        value: function select(pathOrMapFn) {
          /* tslint:disable-next-line: deprecation */

          /** @type {?} */
          var mapped$ = this.source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(pathOrMapFn));
          return mapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        }
        /**
         * @template R
         * @param {?} operator
         * @return {?}
         */

      }, {
        key: "lift",
        value: function lift(operator) {
          /** @type {?} */
          var store = new MiniStore(this._dispatcher, this._reducer, this);
          /* tslint:disable-next-line: deprecation */

          store.operator = operator;
          return store;
        }
        /**
         * @param {?} action
         * @return {?}
         */

      }, {
        key: "dispatch",
        value: function dispatch(action) {
          this._dispatcher.next(action);
        }
        /**
         * @param {?} action
         * @return {?}
         */

      }, {
        key: "next",
        value: function next(action) {
          this._dispatcher.next(action);
        }
        /* tslint:disable-next-line: no-any */

        /**
         * @param {?} err
         * @return {?}
         */

      }, {
        key: "error",
        value: function error(err) {
          this._dispatcher.error(err);
        }
        /**
         * @return {?}
         */

      }, {
        key: "complete",
        value: function complete() {
          /*noop*/
        }
      }]);

      return MiniStore;
    }(rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]);

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function Action() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=ngx-bootstrap-mini-ngrx.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-pg/profile-pg.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-pg/profile-pg.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePgProfilePgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<section class=\"container\" id=\"profInfo\" *ngIf=\"profile\">\n    <div class=\"p-4\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-6\">\n                <span class=\"picImg\"></span>\n            </div>\n            <div class=\"col-12 col-md-6\">\n                <p><strong>User Id:</strong> DR{{profile.mobileNo}}</p>\n                <p><strong>Name:</strong> {{profile.fstName}} {{profile.lstName}} <a (click)=\"toggleInfo()\" class=\"ml-3\">Edit</a></p>\n                <p><strong>E-mail:</strong> {{profile.email}} <a (click)=\"toggleInfo()\" class=\"ml-3\">Edit</a></p>\n                <p *ngIf=\"profile.address\"><strong>Address</strong> {{profile.address}} <a (click)=\"toggleInfo()\" class=\"ml-3\">Edit</a></p>\n                <p><strong>Password:</strong> <a (click)=\"togglePass()\">Change Password</a></p>\n            </div>\n        </div>\n    </div>\n</section>\n<ng-template [ngIf]=\"userType != 1\">\n<section class=\"container my-4 py-4\" id=\"pwdSec\" *ngIf=\"password\">\n    <h3>Change Password</h3>\n    <div *ngIf=\"psMsg\" class=\"alert\" [ngClass]=\"psMsg.alert\">{{psMsg.msg}}</div>\n    <form [formGroup]=\"passFrm\" (submit)=\"updatePass()\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h4>New Password</h4>\n                <input type=\"password\" formControlName='newPass' />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"psSubmit && pssFrm.newPass.errors\">\n                    <div *ngIf=\"pssFrm.newPass.errors.required\">Please mention your New Password</div>\n                </div>\n                <h4>Confirm Password</h4>\n                <input type=\"password\" formControlName='confPass' />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"psSubmit && pssFrm.confPass.errors\">\n                    <div *ngIf=\"pssFrm.confPass.errors.required\">Please mention your confirm password</div>\n                </div>\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"psSubmit && pssFrm.confPass.value !== pssFrm.newPass.value\">\n                    <div>Please confirm password not match</div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <h4>Old Password</h4>\n                <input type=\"password\" formControlName='oldPass' />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"psSubmit && pssFrm.oldPass.errors\">\n                    <div *ngIf=\"pssFrm.oldPass.errors.required\">Please mention your old password</div>\n                </div>\n                <button type=\"submit\" [disabled]=\"psBtn\">Update</button>\n            </div>\n        </div>\n    </form>\n</section>\n\n<section class=\"container my-4 py-4\" id=\"infoSec\" *ngIf=\"info\">\n    <h3>User Information</h3>\n    <div *ngIf=\"regMsg\" class=\"alert\" [ngClass]=\"regMsg.alert\">{{regMsg.msg}}</div>\n    <form (submit)=\"updateInfo()\" [formGroup]=\"infoFrm\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h4>First Name</h4>\n                <input type=\"text\" formControlName=\"fstName\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.fstName.errors\">\n                    <div *ngIf=\"autoFrm.fstName.errors.required\">Please mention your first name</div>\n                </div>\n                <h4>E-mail</h4>\n                <input type=\"email\" formControlName=\"email\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.email.errors\">\n                    <div *ngIf=\"autoFrm.email.errors.required\">Please mention your email address</div>\n                    <div *ngIf=\"autoFrm.email.errors.email\">Please mention valid email address</div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <h4>Last Name</h4>\n                <input type=\"text\" formControlName=\"lstName\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.lstName.errors\">\n                    <div *ngIf=\"autoFrm.lstName.errors.required\">Please mention your last name</div>\n                </div>\n                <h4>Address</h4>\n                <input type=\"text\" formControlName=\"address\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.address.errors\">\n                    <div *ngIf=\"autoFrm.address.errors.required\">Please mention your address</div>\n                </div>\n                <button type=\"submit\" [disabled]=\"regBtn\">Update</button>\n            </div>\n        </div>\n    </form>\n</section>\n\n<section class=\"container my-4\" id=\"uploadSec\">\n    <div class=\"p-4\">\n        <h2>Old Uploaded Brochures</h2>\n        <div *ngIf=\"upMsg\" class=\"alert\" [ngClass]=\"upMsg.alert\">\n            {{upMsg.msg}}\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12 col-md-6\">\n                <h4>Select file</h4>\n                <label for=\"bill\" id=\"billLabel\" *ngIf=\"!fileName\">\n                    +<br />\n                    Drop jpg/png/pdf file here\n                </label>\n                <input type=\"file\" id=\"bill\" (change)=\"selectFile($event)\" />\n                <img [src]=\"serverPath+'pdfBills/'+fileName\" alt=\"\" />\n                <p *ngIf=\"fileName\">Selected File: {{selectedFile}}</p>\n            </div>\n            <div class=\"col-12 col-md-6\">\n                <form [formGroup]=\"billFrm\" (submit)=\"upBill()\">\n                    <h4>Bill Title</h4>\n                    <input type=\"text\" formControlName=\"title\" />\n                    <h4>Date</h4>\n                    <input type=\"text\" readonly bsDatepicker [bsConfig]=\"bsDate\" formControlName=\"date\" />\n                    <h4>Amount</h4>\n                    <input type=\"text\" formControlName=\"amount\" />\n                    <h4>Select Factory</h4>\n                    <select formControlName=\"factory\">\n                        <option *ngFor=\"let dp of department\" value=\"{{dp}}\">{{dp}}</option>\n                        <option value=\"Others\">Others</option>\n                    </select>\n                    <button type=\"submit\" [disabled]=\"upBtm\">Upload</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"container toggleMenu\">\n    <a (click)=\"toggleList('payee')\" class=\"tMenu\">Payee List</a>\n    <div class=\"p-4\" *ngIf=\"payeeList\">\n        <div class=\"usrList d-flex\">\n            <a *ngFor=\"let pyL of listPayee; let i = index\">\n                {{pyL.payeeName}}\n                <span></span>\n                {{pyL.payee}}\n                <i class=\"del\" (click)=\"delPye(pyL._id, i)\"></i>\n                <i *ngIf=\"!pyL.status\" class=\"apr\" (click)=\"approvePay(pyL._id, i)\"></i>\n            </a>\n        </div>\n\n        <nav class=\"d-flex justify-content-between align-items-end\" id=\"toggleMenu\" *ngIf=\"pyBill\">\n            <a [ngClass]=\"{'active': payee}\" (click)=\"togglePay('unpaid')\"> Unpaid </a>\n            <a [ngClass]=\"{'active': payer}\" (click)=\"togglePay('paid')\">Paid</a>\n        </nav>\n\n        <div class=\"p-4\" id=\"filterSec\" *ngIf=\"pyBill\">\n            <div class=\"\">\n                <owl-carousel [options]=\"menuOptions\" [items]=\"monthDataPy\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                    <div class=\"optionList\" *ngIf=\"monthDataPy[0]\" (click)=\"filterPyMonthsWeek(0, monthDataPy[0].list)\" [ngClass]=\"{'active': selectPyMonth === 0}\">\n                        <strong>Current Month</strong>\n                        <i class=\"currentMonth\"></i>\n                        Rs. {{monthDataPy[0].price}}/-\n                    </div>\n\n                    <div class=\"optionList\" *ngIf=\"monthDataPy[1]\" (click)=\"filterPyMonthsWeek(1, monthDataPy[1].list)\" [ngClass]=\"{'active': selectPyMonth === 1}\">\n                        <strong>Last 2 Months</strong>\n                        <i class=\"lastMonth\"></i>\n                        Rs. {{monthDataPy[1].price}}/-\n                    </div>\n\n                    <div class=\"optionList\" *ngIf=\"monthDataPy[2]\" (click)=\"filterPyMonthsWeek(2, monthDataPy[2].list)\" [ngClass]=\"{'active': selectPyMonth === 2}\">\n                        <strong>Last 3 Months</strong>\n                        <i class=\"lastMonth\"></i>\n                        Rs. {{monthDataPy[2].price}}/-\n                    </div>\n\n                    <div class=\"optionList\" *ngIf=\"monthDataPy[3]\" (click)=\"filterPyMonthsWeek(3, monthDataPy[3].list)\" [ngClass]=\"{'active': selectPyMonth === 3}\">\n                        <strong>Last 6 Months</strong>\n                        <i class=\"lastMonth\"></i>\n                        Rs. {{monthDataPy[3].price}}/-\n                    </div>\n\n                    <div class=\"optionList\" *ngIf=\"monthDataPy[4]\" (click)=\"filterPyMonthsWeek(4, monthDataPy[4].list)\" [ngClass]=\"{'active': selectPyMonth === 4}\">\n                        <strong>Last 9 Months</strong>\n                        <i class=\"lastMonth\"></i>\n                        Rs. {{monthDataPy[4].price}}/-\n                    </div>\n                </owl-carousel>\n            </div>\n            <div class=\"\">\n                <owl-carousel [options]=\"menuOptions\" [items]=\"weekPyData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                    <div class=\"optionList\" *ngFor=\"let wk of weekPyData; let i = index\" [ngClass]=\"{'active': selectPyWeek == i}\" (click)='sltPyWeek(i)'>\n                        <strong>Week {{i}}</strong>\n                        <i class=\"week\"></i>\n                        Rs. {{wk.price}}/-\n                    </div>\n                </owl-carousel>\n            </div>\n        </div>\n\n        <div class=\"\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"col3PyData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngFor=\"let cl3 of col3PyData\" [ngClass]=\"{'active': selectPySector === cl3.department}\" (click)=\"sltPyCustomer(cl3.department)\">\n                    <strong>{{cl3.department}}</strong>\n                    <i class=\"factory\"></i>\n                    Rs. {{cl3.price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n        <div class=\"overScroll\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"col4PyData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngFor=\"let c4th of col4PyData\" [ngClass]=\"{'active': selectPyBrand === c4th.brand}\" (click)=\"sltPyBrand(c4th.brand)\">\n                    <strong>{{c4th.brand}}</strong>\n                    <i class=\"factory\"></i>\n                    Rs. {{c4th.price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n\n        <div class=\"my-4\" id=\"paidSec\" *ngIf=\"pyBill\">\n            <owl-carousel\n                [options]=\"cOptions\" [items]=\"pyBill\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <fieldset *ngFor=\"let bImg of pyBill; let i = index\">\n                    <legend>{{bImg.billDetails.deportment}} {{bImg.billDetails.genDate | date: 'medium'}} {{bImg.billDetails.user}}</legend>\n                    <img [src]=\"serverPath+'/pdfBills/images/'+bImg.billDetails.billImg[0].name\" alt=\"{{bImg.billDetails.billImg[0].name}}\" />\n                </fieldset>\n            </owl-carousel>\n        </div>\n    </div>\n\n    <a (click)=\"toggleList('sponsor')\" class=\"tMenu\">Sponsor List</a>\n    <div class=\"p-4\" *ngIf=\"sponsorList\">\n        <nav class=\"menuBtn d-flex justify-content-between\">\n            <a (click)=\"openModal(template)\" class=\"btn ml-auto\">Add Sponsor</a>\n        </nav>\n\n        <div class=\"usrList d-flex\">\n            <a *ngFor='let spL of listSponsor; let i = index'>\n                {{spL.sponsorName}}\n                <span></span>\n                {{spL.sponsor}}\n                <i class=\"del\" (click)=\"delSpn(spL._id, i)\"></i>\n            </a>\n        </div>\n        <nav class=\"d-flex justify-content-between align-items-end\" id=\"toggleMenu\" *ngIf=\"spnBill\">\n            <a [ngClass]=\"{'active': payee}\" (click)=\"togglePay('unpaid')\"> Unpaid </a>\n            <a [ngClass]=\"{'active': payer}\" (click)=\"togglePay('paid')\">Paid</a>\n        </nav>\n        <div class=\"p-4\" id=\"filterSec\">\n            <div class=\"\">\n                <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                    <div class=\"optionList\" *ngIf=\"monthData[0]\" (click)=\"filterMonthsWeek(0, monthData[0].list)\" [ngClass]=\"{'active': selectMonth === 0}\">\n                        <strong>Current Month</strong>\n                        <i class=\"currentMonth\"></i>\n                        Rs. {{monthData[0].price}}/-\n                    </div>\n\n                    <div class=\"optionList\" *ngIf=\"monthData[1]\" (click)=\"filterMonthsWeek(1, monthData[1].list)\" [ngClass]=\"{'active': selectMonth === 1}\">\n                        <strong>Last 2 Months</strong>\n                        <i class=\"lastMonth\"></i>\n                        Rs. {{monthData[1].price}}/-\n                    </div>\n\n                    <div class=\"optionList\" *ngIf=\"monthData[2]\" (click)=\"filterMonthsWeek(2, monthData[2].list)\" [ngClass]=\"{'active': selectMonth === 2}\">\n                        <strong>Last 3 Months</strong>\n                        <i class=\"lastMonth\"></i>\n                        Rs. {{monthData[2].price}}/-\n                    </div>\n\n                    <div class=\"optionList\" *ngIf=\"monthData[3]\" (click)=\"filterMonthsWeek(3, monthData[3].list)\" [ngClass]=\"{'active': selectMonth === 3}\">\n                        <strong>Last 6 Months</strong>\n                        <i class=\"lastMonth\"></i>\n                        Rs. {{monthData[3].price}}/-\n                    </div>\n\n                    <div class=\"optionList\" *ngIf=\"monthData[4]\" (click)=\"filterMonthsWeek(4, monthData[4].list)\" [ngClass]=\"{'active': selectMonth === 4}\">\n                        <strong>Last 9 Months</strong>\n                        <i class=\"lastMonth\"></i>\n                        Rs. {{monthData[4].price}}/-\n                    </div>\n                </owl-carousel>\n            </div>\n            <div class=\"\">\n                <owl-carousel [options]=\"menuOptions\" [items]=\"weekData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                    <div class=\"optionList\" *ngFor=\"let wk of weekData; let i = index\" [ngClass]=\"{'active': selectWeek == i}\" (click)='sltWeek(i)'>\n                        <strong>Week {{i}}</strong>\n                        <i class=\"week\"></i>\n                        Rs. {{wk.price}}/-\n                    </div>\n                </owl-carousel>\n            </div>\n            <div class=\"\">\n                <owl-carousel [options]=\"menuOptions\" [items]=\"col3Data\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                    <div class=\"optionList\" *ngFor=\"let cl3 of col3Data\" [ngClass]=\"{'active': selectSector === cl3.department}\" (click)=\"sltCustomer(cl3.department)\">\n                        <strong>{{cl3.department}}</strong>\n                        <i class=\"factory\"></i>\n                        Rs. {{cl3.price}}/-\n                    </div>\n                </owl-carousel>\n            </div>\n            <div class=\"overScroll\">\n                <owl-carousel [options]=\"menuOptions\" [items]=\"col4Data\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                    <div class=\"optionList\" *ngFor=\"let c4th of col4Data\" [ngClass]=\"{'active': selectBrand === c4th.brand}\" (click)=\"sltBrand(c4th.brand)\">\n                        <strong>{{c4th.brand}}</strong>\n                        <i class=\"factory\"></i>\n                        Rs. {{c4th.price}}/-\n                    </div>\n                </owl-carousel>\n            </div>\n        </div>\n        <div class=\"my-4\" id=\"paidSec\" *ngIf=\"spnBill\">\n            <owl-carousel\n                [options]=\"cOptions\" [items]=\"spnBill\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <fieldset *ngFor=\"let bImg of spnBill; let i = index\">\n                    <legend>{{bImg.billDetails.deportment}} {{bImg.billDetails.genDate | date: 'medium'}} {{bImg.billDetails.user}}</legend>\n                    <img [src]=\"serverPath+'/pdfBills/images/'+bImg.billDetails.billImg[0].name\" alt=\"{{bImg.billDetails.billImg[0].name}}\" />\n                </fieldset>\n            </owl-carousel>\n        </div>\n    </div>\n</section>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Add Sponsor</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"spSorMsg\" class=\"alert\" [ngClass]=\"spSorMsg.alert\">{{spSorMsg.msg}}</div>\n    <form [formGroup]=\"sponsorFrm\" (submit)=\"addSponsor()\">\n        <h4>Mobile No.</h4>\n        <input type=\"text\" formControlName=\"mobileNo\" list=\"mobileList\" (change)=\"selectUsr($event)\" />\n        <datalist id=\"mobileList\">\n            <option *ngFor=\"let usr of usrList\" [value]=\"usr.mobileNo\">{{usr.mobileNo}} - {{usr.fstName}} {{usr.lstName}}</option>\n        </datalist>\n        <h4>Name</h4>\n        <input type=\"text\" formControlName=\"spName\" />\n        <button type=\"submit\" [disabled]=\"spSorBtn\">Add</button>\n    </form>\n  </div>\n</ng-template>\n\n<section class=\"container my-4\" id=\"creditSec\">\n    <div class=\"p-4\">\n        <h2>Credit Accounts</h2>\n        <table class=\"clickable\">\n            <thead>\n                <tr>\n                    <th>Id</th>\n                    <th>Factory Name</th>\n                    <th>Status</th>\n                    <th>Total Amount</th>\n                    <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>1</td>\n                    <td>Factory 1</td>\n                    <td>Requesting</td>\n                    <td>Rs. 205/-</td>\n                    <td><a href=\"\" class=\"btn\">Delete</a></td>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>Factory 2</td>\n                    <td><a href=\"\" class=\"btn\">Fill Application</a> </td>\n                    <td>Rs. 205/-</td>\n                    <td><a href=\"\" class=\"btn\">Delete</a></td>\n                </tr>\n                <tr>\n                    <td>1</td>\n                    <td>Factory 1</td>\n                    <td><a href=\"\" class=\"btn\">Submitted</a></td>\n                    <td>Rs. 205/-</td>\n                    <td><a href=\"\" class=\"btn\">Delete</a></td>\n                </tr>\n            </tbody>\n        </table>\n        <owl-carousel\n            [options]=\"cOptions\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <img src=\"/assets/images/slide1.jpg\" alt=\"third slide\">\n                <img src=\"/assets/images/slide2.jpg\" alt=\"third slide\">\n                <img src=\"/assets/images/slide3.jpg\" alt=\"third slide\">\n                <img src=\"/assets/images/slide4.jpg\" alt=\"third slide\">\n        </owl-carousel>\n    </div>\n</section>\n<section class=\"container\">\n    <nav class=\"menuBtn d-flex justify-content-between align-items-center\">\n        <select name=\"\" id=\"\">\n            <option value=\"\">Factory 1</option>\n            <option value=\"\">Factory 2</option>\n            <option value=\"\">Factory 3</option>\n            <option value=\"\">Factory 4</option>\n            <option value=\"\">Factory 5</option>\n        </select>\n        <a href=\"\" class=\"btn\">Create Credit Account</a>\n    </nav>\n</section>\n</ng-template>\n<app-side-bar></app-side-bar>\n";
    /***/
  },

  /***/
  "./src/app/profile/profile-pg/profile-pg.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/profile/profile-pg/profile-pg.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfilePgProfilePgComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "section#profInfo {\n  background-color: #ffffff;\n}\n\nsection#profInfo span.picImg {\n  display: inline-block;\n  width: 180px;\n  height: 200px;\n  background-color: #f2f2f2;\n}\n\nsection#profInfo p {\n  color: #989898;\n}\n\nsection#profInfo p a {\n  color: #aa0000;\n  cursor: pointer;\n}\n\nsection#profInfo p strong {\n  margin-right: 8px;\n  color: #686868;\n}\n\nsection#infoSec,\nsection#pwdSec {\n  background-color: #ffffff;\n}\n\nsection#pwdSec h3,\nsection#infoSec h3 {\n  font-size: 22px;\n  margin-bottom: 20px;\n}\n\nsection#infoSec h4,\nsection#pwdSec h4,\nsection#uploadSec h4 {\n  font-size: 14px;\n  font-weight: bold;\n  color: #999999;\n}\n\nsection#uploadSec img {\n  height: 250px;\n}\n\nsection#uploadSec input[type=date],\nsection#uploadSec input[type=text],\nsection#uploadSec select,\nsection#pwdSec input[type=password],\nsection#infoSec input[type=text],\nsection#infoSec input[type=email] {\n  font-size: 15px;\n  width: 100%;\n  padding: 5px 8px;\n  margin-bottom: 20px;\n  border: #ccc solid thin;\n  border-radius: 3px;\n}\n\ninput[type=file] {\n  display: none;\n}\n\nlabel#billLabel {\n  text-align: center;\n  font-size: 20px;\n  color: #383838;\n  cursor: pointer;\n  border: #686868 dashed 2px;\n  border-radius: 8px;\n  display: inline-block;\n  width: 100%;\n  padding: 50px 0;\n}\n\nsection#uploadSec button[type=submit],\ndiv.modal-body button[type=submit],\nsection#uploadSec .btn,\nsection#infoSec button[type=submit],\nsection#pwdSec button[type=submit] {\n  width: 100%;\n  border: none;\n  border-radius: 3px;\n  background-color: #aa0000;\n  color: #ffffff;\n  padding: 5px 0;\n  font-size: 15px;\n  margin-top: 25px;\n}\n\nsection#uploadSec .btn {\n  width: auto;\n  padding: 5px 20px;\n  margin: 0 0 0 5px;\n}\n\ndiv#paidSec {\n  margin: 10px 0;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n\ndiv#paidSec img {\n  width: 100%;\n}\n\nsection.paySec,\nsection#creditSec div.p-4,\nsection#uploadSec {\n  background-color: #ffffff;\n}\n\nsection#creditSec h2,\nsection#uploadSec h2 {\n  font-size: 22px;\n  margin-bottom: 10px;\n}\n\nsection.paySec table,\nsection#creditSec table,\nsection#uploadSec table {\n  width: 100%;\n}\n\nsection.paySec table thead th,\nsection#creditSec table thead th,\nsection#uploadSec table thead th {\n  background-color: #aa0000;\n  color: #ffffff;\n  padding: 5px;\n}\n\nsection#creditSec table thead td,\nsection.paySec table tbody td,\nsection#uploadSec table tbody td {\n  padding: 10px 5px;\n}\n\nsection.paySec table tbody td a.btn,\nsection.paySec table tbody td a.btn {\n  background-color: #aa0000;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: bold;\n  padding: 3px 8px;\n}\n\ntable.clickable tbody tr:hover td {\n  background-color: #aa000085;\n  cursor: pointer;\n}\n\nsection.toggleMenu a.tMenu {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background-color: #aa0000;\n  color: #ffffff;\n  padding: 5px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nsection.toggleMenu a.tMenu::after {\n  position: absolute;\n  content: \"\";\n  right: 10px;\n  top: 10px;\n  width: 15px;\n  height: 15px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/icons/down-arrow.svg\");\n}\n\nsection.toggleMenu div {\n  background-color: #ffffff;\n  border-radius: 5px;\n  padding: 8px;\n}\n\nul#colList li {\n  list-style: none;\n  background-color: #fff;\n  margin: 8px 0;\n  box-shadow: 0 0 3px 0 #C7C7C7;\n}\n\nul#colList li div.colBody {\n  display: none;\n}\n\nul#colList li h2 {\n  padding: 8px 15px;\n  font-size: 18px;\n  color: #AA0000;\n  cursor: pointer;\n  display: flex;\n  flex-flow: row nowrap;\n}\n\nul#colList li.active h2 {\n  background-color: #AA0000;\n  color: #ffffff;\n}\n\nul#colList li.active div.colBody {\n  display: block;\n}\n\ndiv.usrList {\n  margin: 20px 0;\n}\n\ndiv.usrList a {\n  width: 100px;\n  font-size: 14px;\n  margin: 0 10px;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #AA0000;\n  text-decoration: none;\n  padding: 8px;\n  background-color: #e8e8e8;\n  border-radius: 5px;\n  position: relative;\n  transition: 0.2s all linear;\n}\n\ndiv.usrList a i {\n  position: absolute;\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\ndiv.usrList a i.del {\n  right: -15px;\n  top: -5px;\n  background-image: url(\"/assets/icons/delete.svg\");\n}\n\ndiv.usrList a i.apr {\n  right: -15px;\n  bottom: -5px;\n  background-image: url(\"/assets/icons/approved.svg\");\n}\n\ndiv.usrList a span {\n  width: 70px;\n  height: 70px;\n  margin: 5px 0;\n  display: inline-block;\n  border-radius: 100%;\n  background-color: #fff;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\ndiv.usrList a:hover {\n  background-color: #AA0000;\n  color: #ffffff;\n}\n\ndiv.modal-body h4 {\n  font-size: 16px;\n  margin-top: 10px;\n}\n\ndiv.modal-body input[type=text] {\n  width: 100%;\n  border-radius: 5px;\n  padding: 5px 8px;\n  border: #dcdcdc solid thin;\n}\n\nfieldset {\n  border-radius: 5px;\n  padding: 8px;\n  margin: 10px 0;\n}\n\nfieldset legend {\n  font-size: 15px;\n  color: #AA0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLXBnL0M6XFxVc2Vyc1xcQWJoaXNoZWsuU2F4ZW5hMVxcRGVza3RvcFxccHJha2FzaFxcc2hvZWRlbGl2ZXJ5RnJvbnRFbmQvc3JjXFxhcHBcXHByb2ZpbGVcXHByb2ZpbGUtcGdcXHByb2ZpbGUtcGcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1wZy9wcm9maWxlLXBnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQXFCLGNBQUE7QUNFckI7O0FEQUE7RUFBdUIsY0FBQTtFQUFnQixlQUFBO0FDS3ZDOztBREhBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDTUo7O0FESEE7O0VBRUkseUJBQUE7QUNNSjs7QURIQTs7RUFFSSxlQUFBO0VBQ0EsbUJBQUE7QUNNSjs7QURIQTs7O0VBR0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ01KOztBREhBO0VBQXdCLGFBQUE7QUNPeEI7O0FETEE7Ozs7OztFQU1JLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QURMQTtFQUFtQixhQUFBO0FDU25COztBRFBBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1VKOztBRFBBOzs7OztFQUtJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDVUo7O0FEUEE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1VKOztBRFBBO0VBQ0ksY0FBQTtFQUFnQix5QkFBQTtFQUNoQixhQUFBO0FDV0o7O0FEUkE7RUFBa0IsV0FBQTtBQ1lsQjs7QURWQTs7O0VBR0kseUJBQUE7QUNhSjs7QURWQTs7RUFFSSxlQUFBO0VBQ0EsbUJBQUE7QUNhSjs7QURWQTs7O0VBRTBCLFdBQUE7QUNjMUI7O0FEWkE7OztFQUdJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNlSjs7QURaQTs7O0VBR0ksaUJBQUE7QUNlSjs7QURaQTs7RUFFSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2VKOztBRFpBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0FDZUo7O0FEWkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2VKOztBRFpBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHFEQUFBO0FDZUo7O0FEWkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2VKOztBRFpBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFFQSw2QkFBQTtBQ2VKOztBRFpBO0VBQTRCLGFBQUE7QUNnQjVCOztBRGRBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNpQko7O0FEYkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNnQko7O0FEYkE7RUFBbUMsY0FBQTtBQ2lCbkM7O0FEZkE7RUFBYyxjQUFBO0FDbUJkOztBRGpCQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ29CSjs7QURqQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ29CSjs7QURqQkE7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGlEQUFBO0FDb0JKOztBRGpCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbURBQUE7QUNvQko7O0FEakJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ29CSjs7QURqQkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNvQko7O0FEakJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDb0JKOztBRGpCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNvQko7O0FEakJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ29CSjs7QURqQkE7RUFBa0IsZUFBQTtFQUFpQixjQUFBO0FDc0JuQyIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1wZy9wcm9maWxlLXBnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiNwcm9mSW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuc2VjdGlvbiNwcm9mSW5mbyBzcGFuLnBpY0ltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbnNlY3Rpb24jcHJvZkluZm8gcCB7IGNvbG9yOiAjOTg5ODk4OyB9XG5cbnNlY3Rpb24jcHJvZkluZm8gcCBhIHsgY29sb3I6ICNhYTAwMDA7IGN1cnNvcjogcG9pbnRlcjsgfVxuXG5zZWN0aW9uI3Byb2ZJbmZvIHAgc3Ryb25nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBjb2xvcjogIzY4Njg2ODtcbn1cblxuc2VjdGlvbiNpbmZvU2VjLFxuc2VjdGlvbiNwd2RTZWMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbnNlY3Rpb24jcHdkU2VjIGgzLFxuc2VjdGlvbiNpbmZvU2VjIGgzIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuc2VjdGlvbiNpbmZvU2VjIGg0LFxuc2VjdGlvbiNwd2RTZWMgaDQsXG5zZWN0aW9uI3VwbG9hZFNlYyBoNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjOTk5OTk5O1xufVxuXG5zZWN0aW9uI3VwbG9hZFNlYyBpbWcgeyBoZWlnaHQ6IDI1MHB4OyB9XG5cbnNlY3Rpb24jdXBsb2FkU2VjIGlucHV0W3R5cGU9ZGF0ZV0sXG5zZWN0aW9uI3VwbG9hZFNlYyBpbnB1dFt0eXBlPXRleHRdLFxuc2VjdGlvbiN1cGxvYWRTZWMgc2VsZWN0LFxuc2VjdGlvbiNwd2RTZWMgaW5wdXRbdHlwZT1wYXNzd29yZF0sXG5zZWN0aW9uI2luZm9TZWMgaW5wdXRbdHlwZT10ZXh0XSxcbnNlY3Rpb24jaW5mb1NlYyBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0geyBkaXNwbGF5OiBub25lOyB9XG5cbmxhYmVsI2JpbGxMYWJlbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzM4MzgzODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAjNjg2ODY4IGRhc2hlZCAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1MHB4IDA7XG59XG5cbnNlY3Rpb24jdXBsb2FkU2VjIGJ1dHRvblt0eXBlPXN1Ym1pdF0sXG5kaXYubW9kYWwtYm9keSBidXR0b25bdHlwZT1zdWJtaXRdLFxuc2VjdGlvbiN1cGxvYWRTZWMgLmJ0bixcbnNlY3Rpb24jaW5mb1NlYyBidXR0b25bdHlwZT1zdWJtaXRdLFxuc2VjdGlvbiNwd2RTZWMgYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEwMDAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG5zZWN0aW9uI3VwbG9hZFNlYyAuYnRuIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBtYXJnaW46IDAgMCAwIDVweDtcbn1cblxuZGl2I3BhaWRTZWMge1xuICAgIG1hcmdpbjogMTBweCAwOyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbmRpdiNwYWlkU2VjIGltZyB7IHdpZHRoOiAxMDAlOyB9XG5cbnNlY3Rpb24ucGF5U2VjLFxuc2VjdGlvbiNjcmVkaXRTZWMgZGl2LnAtNCxcbnNlY3Rpb24jdXBsb2FkU2VjIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5zZWN0aW9uI2NyZWRpdFNlYyBoMixcbnNlY3Rpb24jdXBsb2FkU2VjIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuc2VjdGlvbi5wYXlTZWMgdGFibGUsXG5zZWN0aW9uI2NyZWRpdFNlYyB0YWJsZSxcbnNlY3Rpb24jdXBsb2FkU2VjIHRhYmxlIHsgd2lkdGg6IDEwMCU7IH1cblxuc2VjdGlvbi5wYXlTZWMgdGFibGUgdGhlYWQgdGgsXG5zZWN0aW9uI2NyZWRpdFNlYyB0YWJsZSB0aGVhZCB0aCxcbnNlY3Rpb24jdXBsb2FkU2VjIHRhYmxlIHRoZWFkIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEwMDAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuc2VjdGlvbiNjcmVkaXRTZWMgdGFibGUgdGhlYWQgdGQsXG5zZWN0aW9uLnBheVNlYyB0YWJsZSB0Ym9keSB0ZCxcbnNlY3Rpb24jdXBsb2FkU2VjIHRhYmxlIHRib2R5IHRkIHtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbn1cblxuc2VjdGlvbi5wYXlTZWMgdGFibGUgdGJvZHkgdGQgYS5idG4sXG5zZWN0aW9uLnBheVNlYyB0YWJsZSB0Ym9keSB0ZCBhLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhMDAwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogM3B4IDhweDtcbn1cblxudGFibGUuY2xpY2thYmxlIHRib2R5IHRyOmhvdmVyIHRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEwMDAwODU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWN0aW9uLnRvZ2dsZU1lbnUgYS50TWVudSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLDAsMCk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc2VjdGlvbi50b2dnbGVNZW51IGEudE1lbnU6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogJyc7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pY29ucy9kb3duLWFycm93LnN2ZycpO1xufVxuXG5zZWN0aW9uLnRvZ2dsZU1lbnUgZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG5cbnVsI2NvbExpc3QgbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAwICNDN0M3Qzc7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAwICNDN0M3Qzc7XG59XG5cbnVsI2NvbExpc3QgbGkgZGl2LmNvbEJvZHkgeyBkaXNwbGF5OiBub25lOyB9XG5cbnVsI2NvbExpc3QgbGkgaDIge1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogI0FBMDAwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgXG59XG5cbnVsI2NvbExpc3QgbGkuYWN0aXZlIGgyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG51bCNjb2xMaXN0IGxpLmFjdGl2ZSBkaXYuY29sQm9keSB7IGRpc3BsYXk6IGJsb2NrOyB9XG5cbmRpdi51c3JMaXN0IHsgbWFyZ2luOiAyMHB4IDA7IH1cblxuZGl2LnVzckxpc3QgYSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0FBMDAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgbGluZWFyO1xufVxuXG5kaXYudXNyTGlzdCBhIGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmRpdi51c3JMaXN0IGEgaS5kZWwge1xuICAgIHJpZ2h0OiAtMTVweDtcbiAgICB0b3A6IC01cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmcnKTtcbn1cblxuZGl2LnVzckxpc3QgYSBpLmFwciB7XG4gICAgcmlnaHQ6IC0xNXB4O1xuICAgIGJvdHRvbTogLTVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbnMvYXBwcm92ZWQuc3ZnJyk7XG59XG5cbmRpdi51c3JMaXN0IGEgc3BhbiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuZGl2LnVzckxpc3QgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuZGl2Lm1vZGFsLWJvZHkgaDQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5kaXYubW9kYWwtYm9keSBpbnB1dFt0eXBlPXRleHRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBib3JkZXI6ICNkY2RjZGMgc29saWQgdGhpbjtcbn1cblxuZmllbGRzZXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7IGZvbnQtc2l6ZTogMTVweDsgY29sb3I6ICNBQTAwMDA7IH0iLCJzZWN0aW9uI3Byb2ZJbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuc2VjdGlvbiNwcm9mSW5mbyBzcGFuLnBpY0ltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG5zZWN0aW9uI3Byb2ZJbmZvIHAge1xuICBjb2xvcjogIzk4OTg5ODtcbn1cblxuc2VjdGlvbiNwcm9mSW5mbyBwIGEge1xuICBjb2xvcjogI2FhMDAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWN0aW9uI3Byb2ZJbmZvIHAgc3Ryb25nIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGNvbG9yOiAjNjg2ODY4O1xufVxuXG5zZWN0aW9uI2luZm9TZWMsXG5zZWN0aW9uI3B3ZFNlYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbnNlY3Rpb24jcHdkU2VjIGgzLFxuc2VjdGlvbiNpbmZvU2VjIGgzIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5zZWN0aW9uI2luZm9TZWMgaDQsXG5zZWN0aW9uI3B3ZFNlYyBoNCxcbnNlY3Rpb24jdXBsb2FkU2VjIGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbnNlY3Rpb24jdXBsb2FkU2VjIGltZyB7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbnNlY3Rpb24jdXBsb2FkU2VjIGlucHV0W3R5cGU9ZGF0ZV0sXG5zZWN0aW9uI3VwbG9hZFNlYyBpbnB1dFt0eXBlPXRleHRdLFxuc2VjdGlvbiN1cGxvYWRTZWMgc2VsZWN0LFxuc2VjdGlvbiNwd2RTZWMgaW5wdXRbdHlwZT1wYXNzd29yZF0sXG5zZWN0aW9uI2luZm9TZWMgaW5wdXRbdHlwZT10ZXh0XSxcbnNlY3Rpb24jaW5mb1NlYyBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlcjogI2NjYyBzb2xpZCB0aGluO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5sYWJlbCNiaWxsTGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMzODM4Mzg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAjNjg2ODY4IGRhc2hlZCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNTBweCAwO1xufVxuXG5zZWN0aW9uI3VwbG9hZFNlYyBidXR0b25bdHlwZT1zdWJtaXRdLFxuZGl2Lm1vZGFsLWJvZHkgYnV0dG9uW3R5cGU9c3VibWl0XSxcbnNlY3Rpb24jdXBsb2FkU2VjIC5idG4sXG5zZWN0aW9uI2luZm9TZWMgYnV0dG9uW3R5cGU9c3VibWl0XSxcbnNlY3Rpb24jcHdkU2VjIGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG5zZWN0aW9uI3VwbG9hZFNlYyAuYnRuIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBtYXJnaW46IDAgMCAwIDVweDtcbn1cblxuZGl2I3BhaWRTZWMge1xuICBtYXJnaW46IDEwcHggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuZGl2I3BhaWRTZWMgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnNlY3Rpb24ucGF5U2VjLFxuc2VjdGlvbiNjcmVkaXRTZWMgZGl2LnAtNCxcbnNlY3Rpb24jdXBsb2FkU2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuc2VjdGlvbiNjcmVkaXRTZWMgaDIsXG5zZWN0aW9uI3VwbG9hZFNlYyBoMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuc2VjdGlvbi5wYXlTZWMgdGFibGUsXG5zZWN0aW9uI2NyZWRpdFNlYyB0YWJsZSxcbnNlY3Rpb24jdXBsb2FkU2VjIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnNlY3Rpb24ucGF5U2VjIHRhYmxlIHRoZWFkIHRoLFxuc2VjdGlvbiNjcmVkaXRTZWMgdGFibGUgdGhlYWQgdGgsXG5zZWN0aW9uI3VwbG9hZFNlYyB0YWJsZSB0aGVhZCB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbnNlY3Rpb24jY3JlZGl0U2VjIHRhYmxlIHRoZWFkIHRkLFxuc2VjdGlvbi5wYXlTZWMgdGFibGUgdGJvZHkgdGQsXG5zZWN0aW9uI3VwbG9hZFNlYyB0YWJsZSB0Ym9keSB0ZCB7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xufVxuXG5zZWN0aW9uLnBheVNlYyB0YWJsZSB0Ym9keSB0ZCBhLmJ0bixcbnNlY3Rpb24ucGF5U2VjIHRhYmxlIHRib2R5IHRkIGEuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG59XG5cbnRhYmxlLmNsaWNrYWJsZSB0Ym9keSB0cjpob3ZlciB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTAwMDA4NTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWN0aW9uLnRvZ2dsZU1lbnUgYS50TWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWN0aW9uLnRvZ2dsZU1lbnUgYS50TWVudTo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29ucy9kb3duLWFycm93LnN2Z1wiKTtcbn1cblxuc2VjdGlvbi50b2dnbGVNZW51IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG51bCNjb2xMaXN0IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiA4cHggMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4IDAgI0M3QzdDNztcbiAgYm94LXNoYWRvdzogMCAwIDNweCAwICNDN0M3Qzc7XG59XG5cbnVsI2NvbExpc3QgbGkgZGl2LmNvbEJvZHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG51bCNjb2xMaXN0IGxpIGgyIHtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNBQTAwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xufVxuXG51bCNjb2xMaXN0IGxpLmFjdGl2ZSBoMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG51bCNjb2xMaXN0IGxpLmFjdGl2ZSBkaXYuY29sQm9keSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5kaXYudXNyTGlzdCB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG5kaXYudXNyTGlzdCBhIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjQUEwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsIGxpbmVhcjtcbn1cblxuZGl2LnVzckxpc3QgYSBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuZGl2LnVzckxpc3QgYSBpLmRlbCB7XG4gIHJpZ2h0OiAtMTVweDtcbiAgdG9wOiAtNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb25zL2RlbGV0ZS5zdmdcIik7XG59XG5cbmRpdi51c3JMaXN0IGEgaS5hcHIge1xuICByaWdodDogLTE1cHg7XG4gIGJvdHRvbTogLTVweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29ucy9hcHByb3ZlZC5zdmdcIik7XG59XG5cbmRpdi51c3JMaXN0IGEgc3BhbiB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG5kaXYudXNyTGlzdCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmRpdi5tb2RhbC1ib2R5IGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5kaXYubW9kYWwtYm9keSBpbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyOiAjZGNkY2RjIHNvbGlkIHRoaW47XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjQUEwMDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/profile-pg/profile-pg.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/profile/profile-pg/profile-pg.component.ts ***!
    \************************************************************/

  /*! exports provided: ProfilePgComponent */

  /***/
  function srcAppProfileProfilePgProfilePgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePgComponent", function () {
      return ProfilePgComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _guard_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../guard/auth.service */
    "./src/app/guard/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../profile.service */
    "./src/app/profile/profile.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shared_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/filter.service */
    "./src/app/shared/filter.service.ts");

    ;
    ;

    var ProfilePgComponent = /*#__PURE__*/function () {
      function ProfilePgComponent(modalService, formBuilder, fetch, filterSrv, authService) {
        _classCallCheck(this, ProfilePgComponent);

        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.fetch = fetch;
        this.filterSrv = filterSrv;
        this.authService = authService;
        this.bsDate = {
          isAnimated: true,
          adaptivePosition: true,
          containerClass: 'theme-blue'
        };
        this.payee = true;
        this.payer = false;
        this.password = false;
        this.info = false;
        this.regSubmit = false;
        this.regBtn = false;
        this.psSubmit = false;
        this.psBtn = false;
        this.sponsorList = false;
        this.payeeList = false;
        this.spSorBtn = false;
        this.selectWeek = 0;
        this.selectPyWeek = 0;
        this.popBill = false;
        this.monthData = [];
        this.weekData = [];
        this.weekPyData = [];
        this.monthDataPy = [];
        this.weekDataPy = [];
        this.col4Data = [];
        this.col3Data = [];
        this.col4PyData = [];
        this.col3PyData = [];
        this.upBtm = false;
        this.uploading = false;
        this.department = [];
        this.upTypes = ['jpg', 'jpeg', 'png', 'pdf'];
        this.serverPath = this.fetch.serverPath;
        this.menuOptions = this.filterSrv.menuOptions;
        this.cOptions = this.filterSrv.cOptions;
        this.userType = this.authService.getUserType();
        console.log(this.userType);
      }

      _createClass(ProfilePgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.infoFrm = this.formBuilder.group({
            fstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            lstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.passFrm = this.formBuilder.group({
            oldPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            newPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            confPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.sponsorFrm = this.formBuilder.group({
            mobileNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            spName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.billFrm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            factory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            fileName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.getProfile();
          this.getSponsor();
          this.getPayee();
          this.getSpBill();
          this.getPyBill();
          this.getMonthData();
        }
      }, {
        key: "getSpBill",
        value: function getSpBill() {
          var _this30 = this;

          return this.fetch.getSponsorBill().subscribe(function (res) {
            _this30.spnBill = res;

            if (_this30.spnBill) {
              _this30.filterSrv.monthFilter.forEach(function (mth) {
                _this30.monthData.push(_this30.filterSrv.filterByBillDate(_this30.spnBill, _this30.filterSrv.monthFilter[0], mth));
              });
            }
          }, function (err) {
            _this30.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "getPyBill",
        value: function getPyBill() {
          var _this31 = this;

          return this.fetch.getPayeeBill().subscribe(function (res) {
            _this31.pyBill = res;

            if (_this31.pyBill) {
              _this31.filterSrv.monthFilter.forEach(function (mth) {
                _this31.monthDataPy.push(_this31.filterSrv.filterByBillDate(_this31.pyBill, _this31.filterSrv.monthFilter[0], mth));
              });
            }
          }, function (err) {
            _this31.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "getMonthData",
        value: function getMonthData() {
          var _this32 = this;

          this.department = [];
          this.fetch.getAllBill(this.filterSrv.lastNine.getMonth() + 1, this.filterSrv.lastNine.getFullYear()).subscribe(function (res) {
            var data = res; //this.billList = this.billData.filter((bill: any) => new Date(bill.date).getTime() >= this.lastTwo.getTime() && new Date(bill.date).getTime() <= this.today.getTime());
            // if(data) {
            //   this.filterSrv.monthFilter.forEach(mth => {
            //     this.monthDataDh.push(this.filterSrv.filterByDate(data, this.filterSrv.monthFilter[0], mth))
            //   });
            // }
            //this.generateBFilter(this.billData);
            //this.filterMonthsWeek(0, this.billData);
            //this.sltWeek(0);

            data.forEach(function (el) {
              var updateItem = _this32.department.find(function (x) {
                return x === el.deportment;
              });

              if (!updateItem) _this32.department.push(el.deportment);
            });
          }, function (err) {
            _this32.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "selectUsr",
        value: function selectUsr(e) {
          var updateItem = this.usrList.find(function (x) {
            return x.mobileNo === e.target.value;
          });

          if (updateItem) {
            var idx = this.usrList.indexOf(updateItem);
            this.sponsorFrm.patchValue({
              spName: this.usrList[idx].fstName + " " + this.usrList[idx].lstName
            });
          }
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this33 = this;

          this.fetch.getProfInfo().subscribe(function (res) {
            _this33.profile = res;

            _this33.infoFrm.patchValue({
              fstName: _this33.profile.fstName,
              lstName: _this33.profile.lstName,
              email: _this33.profile.email,
              address: _this33.profile.address
            });
          }, function (err) {
            _this33.pgMsg = err.error;
          });
        }
      }, {
        key: "togglePass",
        value: function togglePass() {
          this.password = !this.password;
          this.info = false;
        }
      }, {
        key: "toggleInfo",
        value: function toggleInfo() {
          this.info = !this.info;
          this.password = false;
        }
      }, {
        key: "togglePay",
        value: function togglePay(payType) {
          if (payType === 'unpaid') {
            this.payee = true;
            this.payer = false;
          } else if (payType === 'paid') {
            this.payer = true;
            this.payee = false;
          }
        }
      }, {
        key: "toggleList",
        value: function toggleList(payType) {
          if (payType === 'payee') {
            this.payeeList = !this.payeeList;
            this.sponsorList = false;
          } else if (payType === 'sponsor') {
            this.payeeList = false;
            this.sponsorList = !this.sponsorList;
          }
        }
      }, {
        key: "sltMonth",
        value: function sltMonth(month) {
          this.selectMonth = month;
        }
      }, {
        key: "sltPyMonth",
        value: function sltPyMonth(month) {
          this.selectPyMonth = month;
        }
      }, {
        key: "sltWeek",
        value: function sltWeek(week) {
          this.selectWeek = week;
          this.spnBill = this.weekDataList = this.weekData[week].list;
          this.generateFilter(this.spnBill);
        }
      }, {
        key: "sltPyWeek",
        value: function sltPyWeek(week) {
          console.log(this.weekPyData);
          this.selectPyWeek = week;
          this.pyBill = this.weekDataPyList = this.weekPyData[week].list;
          this.generatePyFilter(this.pyBill);
        }
      }, {
        key: "sltCustomer",
        value: function sltCustomer(customer) {
          var _this34 = this;

          this.selectSector = customer; // if(this.selectSector === 'Payee')
          //   this.col4Data = this.listPayee;
          // if(this.selectSector === 'Sponsor')
          //   this.col4Data = this.listSponsor;

          this.spnBill = this.sectorDataList = this.weekDataList.filter(function (e) {
            return e.billDetails.deportment.toLowerCase().includes(_this34.selectSector.toLowerCase());
          });
          this.generateBFilter(this.spnBill);
        }
      }, {
        key: "sltBrand",
        value: function sltBrand(brand) {
          var _this35 = this;

          this.selectBrand = brand;
          this.spnBill = this.sectorDataList.filter(function (e) {
            return e.billDetails.title.toLowerCase().includes(_this35.selectBrand.toLowerCase());
          });
        }
      }, {
        key: "sltPyCustomer",
        value: function sltPyCustomer(customer) {
          var _this36 = this;

          this.selectPySector = customer; // if(this.selectSector === 'Payee')
          //   this.col4Data = this.listPayee;
          // if(this.selectSector === 'Sponsor')
          //   this.col4Data = this.listSponsor;

          this.pyBill = this.sectorPyDataList = this.weekDataPyList.filter(function (e) {
            return e.billDetails.deportment.toLowerCase().includes(_this36.selectPySector.toLowerCase());
          });
          this.generatePyBFilter(this.pyBill);
        }
      }, {
        key: "sltPyBrand",
        value: function sltPyBrand(brand) {
          var _this37 = this;

          this.selectPyBrand = brand;
          this.pyBill = this.sectorPyDataList.filter(function (e) {
            return e.billDetails.title.toLowerCase().includes(_this37.selectPyBrand.toLowerCase());
          });
        }
      }, {
        key: "generateFilter",
        value: function generateFilter(data) {
          var _this38 = this;

          this.selectSector = null;
          this.col3Data = [];
          this.selectBrand = null;
          this.col4Data = [];
          data.forEach(function (e) {
            var updateItem = _this38.col3Data.find(function (x) {
              return x.department === e.billDetails.deportment;
            });

            if (!updateItem) _this38.col3Data.push({
              department: e.billDetails.deportment,
              price: _this38.cleanPrice(e.billDetails.total),
              userType: "department"
            });else {
              var index = _this38.col3Data.indexOf(updateItem);

              _this38.col3Data[index].price = _this38.col3Data[index].price + _this38.cleanPrice(e.billDetails.total);
            }
          });
        }
      }, {
        key: "generateBFilter",
        value: function generateBFilter(data) {
          var _this39 = this;

          this.selectBrand = null;
          this.col4Data = [];
          data.forEach(function (e) {
            var updateItem = _this39.col4Data.find(function (x) {
              return x.brand === e.billDetails.title;
            });

            if (!updateItem) _this39.col4Data.push({
              brand: e.billDetails.title,
              price: _this39.cleanPrice(e.billDetails.total),
              userType: "brand"
            });else {
              var index = _this39.col4Data.indexOf(updateItem);

              _this39.col4Data[index].price = _this39.col4Data[index].price + _this39.cleanPrice(e.billDetails.total);
            }
          });
        }
      }, {
        key: "generatePyBFilter",
        value: function generatePyBFilter(data) {
          var _this40 = this;

          this.selectBrand = null;
          this.col4PyData = [];
          data.forEach(function (e) {
            var updateItem = _this40.col4PyData.find(function (x) {
              return x.brand === e.billDetails.title;
            });

            if (!updateItem) _this40.col4PyData.push({
              brand: e.billDetails.title,
              price: _this40.cleanPrice(e.billDetails.total),
              userType: "brand"
            });else {
              var index = _this40.col4PyData.indexOf(updateItem);

              _this40.col4PyData[index].price = _this40.col4PyData[index].price + _this40.cleanPrice(e.billDetails.total);
            }
          });
        }
      }, {
        key: "generatePyFilter",
        value: function generatePyFilter(data) {
          var _this41 = this;

          this.selectPySector = null;
          this.col3PyData = [];
          this.selectPyBrand = null;
          this.col4PyData = [];
          data.forEach(function (e) {
            var updateItem = _this41.col3PyData.find(function (x) {
              return x.department === e.billDetails.deportment;
            });

            if (!updateItem) _this41.col3PyData.push({
              department: e.billDetails.deportment,
              price: _this41.cleanPrice(e.billDetails.total),
              userType: "department"
            });else {
              var index = _this41.col3PyData.indexOf(updateItem);

              _this41.col3PyData[index].price = _this41.col3PyData[index].price + _this41.cleanPrice(e.billDetails.total);
            }
          });
        }
      }, {
        key: "filterMonthsWeek",
        value: function filterMonthsWeek(month, data) {
          var _this42 = this;

          this.sltMonth(month);
          this.weekData = [];
          var weekList = this.filterSrv.weekCalculator(month, this.filterSrv.today.getMonth());
          weekList.forEach(function (e) {
            _this42.weekData.push(_this42.filterSrv.filterByBillDate(data, e.end.getTime(), e.start.getTime()));
          });
          this.spnBill = this.monthData[month].list;
          this.selectWeek = null;
          this.selectSector = null;
          this.selectBrand = null;
          this.col3Data = [];
          this.col4Data = []; //console.log(this.weekData);
        }
      }, {
        key: "filterPyMonthsWeek",
        value: function filterPyMonthsWeek(month, data) {
          var _this43 = this;

          this.sltPyMonth(month);
          this.weekPyData = [];
          var weekList = this.filterSrv.weekCalculator(month, this.filterSrv.today.getMonth());
          weekList.forEach(function (e) {
            _this43.weekPyData.push(_this43.filterSrv.filterByBillDate(data, e.end.getTime(), e.start.getTime()));
          });
          this.pyBill = this.monthDataPy[month].list;
          this.selectPyWeek = null;
          this.selectPySector = null;
          this.selectPyBrand = null;
          this.col3PyData = [];
          this.col4PyData = []; //console.log(this.weekData);
        }
      }, {
        key: "cleanPrice",
        value: function cleanPrice(amount) {
          return this.filterSrv.cleanPrice(amount);
        }
      }, {
        key: "updateInfo",
        value: function updateInfo() {
          var _this44 = this;

          this.regSubmit = true;
          this.regBtn = true;

          if (this.infoFrm.invalid) {
            this.regBtn = false;
            return;
          } else {
            var formObj = this.infoFrm.getRawValue();
            this.fetch.modUsr(formObj).subscribe(function (res) {
              _this44.infoFrm.reset();

              _this44.regBtn = false;
              _this44.regMsg = {
                msg: res,
                alert: "alert-success"
              };
              setTimeout(function () {
                _this44.info = false;

                _this44.getProfile();
              }, 3500);
            }, function (err) {
              _this44.regMsg = {
                msg: err.error,
                alert: "alert-danger"
              };
            });
            this.regSubmit = false;
            setTimeout(function () {
              _this44.regMsg = null;
            }, 3500);
          }
        }
      }, {
        key: "updatePass",
        value: function updatePass() {
          var _this45 = this;

          this.psSubmit = true;
          this.psBtn = true;

          if (this.passFrm.invalid || this.pssFrm.newPass.value !== this.pssFrm.confPass.value) {
            this.psBtn = false;
            return;
          } else {
            var formObj = this.passFrm.getRawValue();
            this.fetch.modPass(formObj).subscribe(function (res) {
              _this45.passFrm.reset();

              _this45.psBtn = false;
              _this45.psMsg = {
                msg: res,
                alert: "alert-success"
              };
              setTimeout(function () {
                _this45.password = false;
              }, 3500);
            }, function (err) {
              _this45.psMsg = {
                msg: err.error,
                alert: "alert-danger"
              };
              _this45.psBtn = false;
            });
            this.psSubmit = false;
            setTimeout(function () {
              _this45.psMsg = null;
            }, 3500);
          }
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "addSponsor",
        value: function addSponsor() {
          var _this46 = this;

          this.spSorBtn = true;

          if (this.sponsorFrm.invalid) {
            this.spSorBtn = false;
            return;
          } else {
            var formObj = this.sponsorFrm.getRawValue();
            this.fetch.addPayee(formObj).subscribe(function (res) {
              _this46.spSorMsg = {
                msg: res,
                alert: 'alert-success'
              };
              _this46.spSorBtn = false;

              _this46.getSponsor();

              setTimeout(function () {
                _this46.modalRef.hide();
              }, 2500);
            }, function (err) {
              _this46.spSorMsg = {
                msg: err.error,
                alert: 'alert-danger'
              };
              _this46.spSorBtn = false;
            });
            setTimeout(function () {
              _this46.spSorMsg = null;
            }, 3500);
          }
        }
      }, {
        key: "getSponsor",
        value: function getSponsor() {
          var _this47 = this;

          this.fetch.getSponsor().subscribe(function (res) {
            _this47.listSponsor = res;
          }, function (err) {
            _this47.psMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
          setTimeout(function () {
            _this47.psMsg = null;
          }, 3500);
        }
      }, {
        key: "getPayee",
        value: function getPayee() {
          var _this48 = this;

          this.fetch.getPayee().subscribe(function (res) {
            _this48.listPayee = res;
          }, function (err) {
            _this48.psMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
          setTimeout(function () {
            _this48.psMsg = null;
          }, 3500);
        }
      }, {
        key: "approvePay",
        value: function approvePay(spId, index) {
          var _this49 = this;

          this.fetch.apvSponsor(spId).subscribe(function (res) {
            _this49.pgMsg = {
              msg: res,
              alert: 'alert-success'
            };
            _this49.listPayee[index].status = true;
          }, function (err) {
            _this49.psMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
          setTimeout(function () {
            _this49.psMsg = null;
          }, 3500);
        }
      }, {
        key: "delSpn",
        value: function delSpn(spId, index) {
          var _this50 = this;

          if (confirm("Are you sure want to delete?")) {
            this.fetch.delSponsor(spId).subscribe(function (res) {
              _this50.psMsg = {
                msg: res,
                alert: 'alert-danger'
              };

              _this50.listSponsor.splice(index, 1);
            }, function (err) {
              _this50.psMsg = {
                msg: err.error,
                alert: 'alert-danger'
              };
            });
            setTimeout(function () {
              _this50.psMsg = null;
            }, 3500);
          }
        }
      }, {
        key: "delPye",
        value: function delPye(spId, index) {
          var _this51 = this;

          if (confirm("Are you sure want to delete?")) {
            this.fetch.delSponsor(spId).subscribe(function (res) {
              _this51.psMsg = {
                msg: res,
                alert: 'alert-danger'
              };

              _this51.listPayee.splice(index, 1);
            }, function (err) {
              _this51.psMsg = {
                msg: err.error,
                alert: 'alert-danger'
              };
            });
            setTimeout(function () {
              _this51.psMsg = null;
            }, 3500);
          }
        }
      }, {
        key: "selectFile",
        value: function selectFile(event) {
          var _this52 = this;

          var fileName = event.target.files[0].name.split('.');

          if (!this.upTypes.find(function (x) {
            return x === fileName[fileName.length - 1];
          })) {
            this.pgMsg = "Invalid file... Please select only jpg/jpeg/png/pdf file";
            return false;
          }

          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);

          reader.onload = function (e) {
            _this52.upBtm = true;
          };

          var uFrm = new FormData();
          var fName = fileName[0].toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
          this.selectedFile = fName + "-" + Date.now().toString() + '.' + fileName[fileName.length - 1];
          uFrm.append('bill', event.target.files[0], this.selectedFile);
          this.uploading = true;
          this.fetch.uploadImg(uFrm).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
              _this52.percent = Math.round(event.loaded / event.total * 100);
            } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].Response) {
              var res = event.body;
              _this52.fileName = res;

              _this52.billFrm.patchValue({
                fileName: _this52.fileName
              });

              _this52.uploading = false;
              _this52.upBtm = false;
            }
          }, function (error) {
            _this52.uploading = false;
            _this52.upBtm = false;
            _this52.upMsg = {
              msg: error,
              alert: "alert-danger"
            };
          });
        }
      }, {
        key: "upBill",
        value: function upBill() {
          var _this53 = this;

          this.upBtm = true;

          if (this.billFrm.invalid) {
            this.upBtm = false;
            return;
          } else {
            var formObj = this.billFrm.getRawValue();
            this.fetch.uploadBill(formObj).subscribe(function (res) {
              _this53.upMsg = {
                msg: res,
                alert: 'alert-success'
              };
              _this53.upBtm = false;

              _this53.billFrm.reset();

              _this53.fileName = null;
              _this53.selectedFile = null;
            }, function (err) {
              _this53.upMsg = {
                msg: err.error,
                alert: 'alert-danger'
              };
              _this53.upBtm = false;
            });
            setTimeout(function () {
              _this53.upMsg = null;
            }, 3500);
          }
        }
      }, {
        key: "autoFrm",
        get: function get() {
          return this.infoFrm.controls;
        }
      }, {
        key: "pssFrm",
        get: function get() {
          return this.passFrm.controls;
        }
      }]);

      return ProfilePgComponent;
    }();

    ProfilePgComponent.ctorParameters = function () {
      return [{
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
      }, {
        type: _shared_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"]
      }, {
        type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    ProfilePgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-profile-pg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-pg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile-pg/profile-pg.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-pg.component.scss */
      "./src/app/profile/profile-pg/profile-pg.component.scss"))["default"]]
    })], ProfilePgComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/profile/profile-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfileRoutingModule */

  /***/
  function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
      return ProfileRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _profile_pg_profile_pg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile-pg/profile-pg.component */
    "./src/app/profile/profile-pg/profile-pg.component.ts");

    var routes = [{
      path: "profile",
      component: _profile_pg_profile_pg_component__WEBPACK_IMPORTED_MODULE_3__["ProfilePgComponent"]
    }];

    var ProfileRoutingModule = function ProfileRoutingModule() {
      _classCallCheck(this, ProfileRoutingModule);
    };

    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_pg_profile_pg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./profile-pg/profile-pg.component */
    "./src/app/profile/profile-pg/profile-pg.component.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_profile_pg_profile_pg_component__WEBPACK_IMPORTED_MODULE_9__["ProfilePgComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfileRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot()]
    })], ProfileModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.service.ts":
  /*!********************************************!*\
    !*** ./src/app/profile/profile.service.ts ***!
    \********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppProfileProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/api-link.service */
    "./src/app/shared/api-link.service.ts");
    /* harmony import */


    var _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../guard/auth.service */
    "./src/app/guard/auth.service.ts");

    var ProfileService = /*#__PURE__*/function () {
      function ProfileService(http, api, auth) {
        _classCallCheck(this, ProfileService);

        this.http = http;
        this.api = api;
        this.auth = auth;
        this.serverPath = this.api.srvLink;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': "application/json",
          'Authorization': this.auth.getLogged()
        });
        this.upHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Authorization': this.auth.getLogged()
        });
      }

      _createClass(ProfileService, [{
        key: "uploadImg",
        value: function uploadImg(data) {
          return this.http.post(this.api.server + "profile/bill", data, {
            headers: this.upHeaders,
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "uploadBill",
        value: function uploadBill(data) {
          return this.http.post(this.api.server + "bill-info", data, {
            headers: this.headers
          });
        }
      }, {
        key: "getProfInfo",
        value: function getProfInfo() {
          return this.http.get(this.api.server + "profile", {
            headers: this.headers
          });
        }
      }, {
        key: "modUsr",
        value: function modUsr(data) {
          return this.http.put(this.api.server + "profile", data, {
            headers: this.headers
          });
        }
      }, {
        key: "modPass",
        value: function modPass(data) {
          return this.http.put(this.api.server + "profile/password", data, {
            headers: this.headers
          });
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.http.get(this.api.server + "user/all", {
            headers: this.headers
          });
        }
      }, {
        key: "addPayee",
        value: function addPayee(data) {
          return this.http.post(this.api.server + "sponsor", data, {
            headers: this.headers
          });
        }
      }, {
        key: "getSponsor",
        value: function getSponsor() {
          return this.http.get(this.api.server + "sponsor", {
            headers: this.headers
          });
        }
      }, {
        key: "getSponsorBill",
        value: function getSponsorBill() {
          return this.http.get(this.api.server + "sponsor/bill", {
            headers: this.headers
          });
        }
      }, {
        key: "getPayee",
        value: function getPayee() {
          return this.http.get(this.api.server + "payee", {
            headers: this.headers
          });
        }
      }, {
        key: "getPayeeBill",
        value: function getPayeeBill() {
          return this.http.get(this.api.server + "payee/bill", {
            headers: this.headers
          });
        }
      }, {
        key: "apvSponsor",
        value: function apvSponsor(spId) {
          return this.http.put(this.api.server + "sponsor/" + spId, {
            status: true
          }, {
            headers: this.headers
          });
        }
      }, {
        key: "delSponsor",
        value: function delSponsor(spId) {
          return this.http["delete"](this.api.server + "sponsor/" + spId, {
            headers: this.headers
          });
        }
      }, {
        key: "getAllBill",
        value: function getAllBill(month, year) {
          return this.http.get(this.api.server + "bill/" + month + "/" + year, {
            headers: this.headers
          });
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__["ApiLinkService"]
      }, {
        type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProfileService);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map