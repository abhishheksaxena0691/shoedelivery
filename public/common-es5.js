function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/dashboard/dashboard.service.ts":
  /*!************************************************!*\
    !*** ./src/app/dashboard/dashboard.service.ts ***!
    \************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppDashboardDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
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

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(http, api, auth) {
        _classCallCheck(this, DashboardService);

        this.http = http;
        this.api = api;
        this.auth = auth;
        this.serverPath = this.api.srvLink;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': "application/json",
          'Authorization': this.auth.getLogged()
        });
      }

      _createClass(DashboardService, [{
        key: "getProfInfo",
        value: function getProfInfo() {
          return this.http.get(this.api.server + "profile", {
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
      }, {
        key: "getSponsor",
        value: function getSponsor() {
          return this.http.get(this.api.server + "sponsor", {
            headers: this.headers
          });
        }
      }, {
        key: "addSponsor",
        value: function addSponsor(data) {
          return this.http.post(this.api.server + "sponsor/bill", data, {
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
        key: "addDelivery",
        value: function addDelivery(data) {
          return this.http.post(this.api.server + "delivery", data, {
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
        key: "getSponsorBill",
        value: function getSponsorBill() {
          return this.http.get(this.api.server + "sponsor/bill", {
            headers: this.headers
          });
        }
      }, {
        key: "getUploadBill",
        value: function getUploadBill() {
          return this.http.get(this.api.server + "bill-info", {
            headers: this.headers
          });
        }
      }, {
        key: "getProductList",
        value: function getProductList(data) {
          return this.http.post(this.api.server + "product/getProductList", data, {
            headers: this.headers
          });
        }
      }, {
        key: "createNewInvoice",
        value: function createNewInvoice(data) {
          return this.http.post(this.api.server + "bill/generateDealerBill", data, {
            headers: this.headers
          });
        }
      }, {
        key: "generateImageNewInvoice",
        value: function generateImageNewInvoice(data) {
          return this.http.post(this.api.server + "bill/generateDealerBill", data, {
            headers: this.headers
          });
        }
      }, {
        key: "updateDeleiveryInoice",
        value: function updateDeleiveryInoice(data) {
          return this.http.post(this.api.server + "delivery/updatedeliveryCredit", data, {
            headers: this.headers
          });
        }
      }, {
        key: "updateCreditInvoice",
        value: function updateCreditInvoice(data) {
          return this.http.post(this.api.server + "delivery/updatedeliveryCredit", data, {
            headers: this.headers
          });
        }
      }, {
        key: "updateInvoiceStatus",
        value: function updateInvoiceStatus(data) {
          return this.http.post(this.api.server + "delivery/updateInvoiceStatus", data, {
            headers: this.headers
          });
        }
      }, {
        key: "verifyRetailerMobileNumber",
        value: function verifyRetailerMobileNumber(data) {
          return this.http.post(this.api.server + "verifyMobileNumber", data, {
            headers: this.headers
          });
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__["ApiLinkService"]
      }, {
        type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DashboardService);
    /***/
  },

  /***/
  "./src/app/delivery/delivery.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/delivery/delivery.service.ts ***!
    \**********************************************/

  /*! exports provided: DeliveryService */

  /***/
  function srcAppDeliveryDeliveryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliveryService", function () {
      return DeliveryService;
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

    var DeliveryService = /*#__PURE__*/function () {
      function DeliveryService(http, api, auth) {
        _classCallCheck(this, DeliveryService);

        this.http = http;
        this.api = api;
        this.auth = auth;
        this.serverPath = this.api.srvLink;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          'Content-Type': "application/json",
          'Authorization': this.auth.getLogged()
        });
      }

      _createClass(DeliveryService, [{
        key: "getAllDelivery",
        value: function getAllDelivery() {
          return this.http.get(this.api.server + "delivery/all", {
            headers: this.headers
          });
        }
      }, {
        key: "updatepaymentMode",
        value: function updatepaymentMode(data) {
          return this.http.post(this.api.server + "delivery/updatePaymentMode", data, {
            headers: this.headers
          });
        }
      }, {
        key: "generateImageNewInvoice",
        value: function generateImageNewInvoice(data) {
          return this.http.post(this.api.server + "bill/uploadGeneratedBills", data, {
            headers: this.headers
          });
        }
      }, {
        key: "moveToDelivery",
        value: function moveToDelivery(data) {
          return this.http.post(this.api.server + "delivery/moveToDelivery", data, {
            headers: this.headers
          });
        }
      }]);

      return DeliveryService;
    }();

    DeliveryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__["ApiLinkService"]
      }, {
        type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    DeliveryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DeliveryService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map