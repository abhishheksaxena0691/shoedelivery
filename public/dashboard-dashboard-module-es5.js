function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard/dashboard.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard/dashboard.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<section class=\"container py-4\">\n    <nav id=\"toggleMenu\" class=\"d-flex justify-content-between align-items-end\">\n        <a class=\"active\"> Unpaid </a>\n        <a href=\"\">Paid</a>\n    </nav>\n    <a (click)=\"toggleFilter()\" class=\"filterNow\"><span class=\"filter\"></span> Filter</a>\n    <div class=\"p-4\" id=\"filterSec\" *ngIf=\"filter\">\n        <div>\n            <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthDataDh\">\n                <div class=\"optionList\" [ngClass]=\"{'active': selectArea === 'Dashboard'}\" (click)=\"sltArea('Dashboard')\">\n                        <strong>Dashboard</strong>\n                        <i class=\"payee\"></i>\n                        Rs. {{this.dashTotal}}/-\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': selectArea === 'Payee'}\" (click)=\"sltArea('Payee')\">\n                    <strong>Payee</strong>\n                    <i class=\"payee\"></i>\n                    Rs. {{this.pyTotal}}/-\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': selectArea === 'Sponsor'}\" (click)=\"sltArea('Sponsor')\">\n                    <strong>Sponsor</strong>\n                    <i class=\"sponsor\"></i>\n                    Rs. {{this.spTotal}}/-\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': selectArea === 'Uploaded'}\" (click)=\"sltArea('Uploaded')\">\n                    <strong>Uploaded</strong>\n                    <i class=\"sponsor\"></i>\n                    Rs. {{this.upTotal}}/-\n                </div>\n            </owl-carousel>\n        </div>\n            <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthData\">\n                <div class=\"optionList\" *ngIf=\"monthData[0]\" (click)=\"filterMonthsWeek(0, monthData[0].list)\" [ngClass]=\"{'active': selectMonth === 0}\">\n                    <strong>Current Month</strong>\n                    <i class=\"currentMonth\"></i>\n                    Rs. {{monthData[0].price}}/-\n                </div>\n                <div class=\"optionList\" *ngIf=\"monthData[1]\" (click)=\"filterMonthsWeek(1, monthData[1].list)\" [ngClass]=\"{'active': selectMonth === 1}\">\n                    <strong>Last 2 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[1].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[2]\" (click)=\"filterMonthsWeek(2, monthData[2].list)\" [ngClass]=\"{'active': selectMonth === 2}\">\n                    <strong>Last 3 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[2].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[3]\" (click)=\"filterMonthsWeek(3, monthData[3].list)\" [ngClass]=\"{'active': selectMonth === 3}\">\n                    <strong>Last 6 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[3].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[4]\" (click)=\"filterMonthsWeek(4, monthData[4].list)\" [ngClass]=\"{'active': selectMonth === 4}\">\n                    <strong>Last 9 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[4].price}}/-\n                </div>\n            </owl-carousel>\n        <div class=\"\">\n            <div class=\"\">\n                {{weekData | json}}\n                <owl-carousel [options]=\"menuOptions\" [items]=\"weekData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                    <div class=\"optionList\" *ngFor=\"let wk of weekData; let i = index\" [ngClass]=\"{'active': selectWeek == i}\" (click)='sltWeek(i)'>\n                        <strong>Week {{i}}</strong>\n                        <i class=\"week\"></i>\n                        Rs. {{wk.price}}/-\n                    </div>\n                </owl-carousel>\n\n            </div>\n        </div>\n        <div class=\"overScroll\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"col3Data\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"col3Data\">\n                <div class=\"optionList\" *ngFor=\"let cl3 of col3Data\" [ngClass]=\"{'active': selectSector === cl3.department}\" (click)=\"sltCustomer(cl3.department)\">\n                    <strong>{{cl3.department}}</strong>\n                    <i class=\"factory\"></i>\n                    Rs. {{cl3.price}}/-\n                </div>\n\n                <!-- <div class=\"optionList\" [ngClass]=\"{'active': selectSector === 'Payee'}\" (click)=\"sltCustomer('Payee')\">\n                    <strong>Payee</strong>\n                    <i class=\"payee\"></i>\n                    Rs. {{this.pyTotal}}/-\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': selectSector === 'Sponsor'}\" (click)=\"sltCustomer('Sponsor')\">\n                    <strong>Sponsor</strong>\n                    <i class=\"sponsor\"></i>\n                    Rs. {{this.spTotal}}/-\n                </div> -->\n\n            </owl-carousel>\n        </div>\n        <div class=\"overScroll\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"col4Data\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngFor=\"let c4th of col4Data\" [ngClass]=\"{'active': selectBrand === c4th.brand}\" (click)=\"sltBrand(c4th.brand)\">\n                    <strong>{{c4th.brand}}</strong>\n                    <i class=\"factory\"></i>\n                    Rs. {{c4th.price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n    </div>\n</section>\n<section class=\"container\">\n    <nav class=\"menuBtn d-flex justify-content-between mb-2\">\n         <a (click)=\"openModal(template)\" class=\"btn\"><i class=\"billing\"></i> New Bill</a>\n    </nav>\n    <div class=\"my-3\">\n        <owl-carousel *ngIf=\"selectArea === 'Dashboard'\"\n            [options]=\"cOptions\" [items]=\"billData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <fieldset *ngFor=\"let bImg of billData; let i = index\">\n                <legend>{{bImg.deportment}} {{bImg.genDate | date: 'medium'}} {{bImg.user}}</legend>\n                <nav class=\"menuBtn d-flex justify-content-between mb-4\">\n                    <a (click)=\"openDelivery(deliveryTemplate, bImg._id)\" class=\"btn\"><i class=\"delivery\"></i> Delivery</a>\n                    <a (click)=\"openSponsor(sponsorTemplate, bImg)\" class=\"btn\"><i class=\"forward\"></i> Sponsored My Bill</a>\n                </nav>\n                <img [src]=\"serverPath+'/pdfBills/images/'+bImg.billImg[0].name\" alt=\"{{bImg.billImg[0].name}}\" (click)=\"showBill(i)\" />\n                <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\">\n                    <form class=\"d-flex align-items-center justify-content-between ml-auto\">\n                        <input type=\"text\" placeholder=\"Rs.\" [value]=\"cleanPrice(bImg.total)\" />\n                        <a href=\"\" class=\"btn\">Pay Online</a>\n                    </form>\n                </nav>\n            </fieldset>\n        </owl-carousel>\n        <owl-carousel *ngIf=\"selectArea !== 'Dashboard' && selectArea !== 'Uploaded'\"\n            [options]=\"cOptions\" [items]=\"billDData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <fieldset *ngFor=\"let bImg of billDData; let i = index\">\n                <legend>{{bImg.billDetails.deportment}} {{bImg.billDetails.genDate | date: 'medium'}} {{bImg.billDetails.user}}</legend>\n                <nav class=\"menuBtn d-flex justify-content-between mb-4\">\n                    <a (click)=\"openDelivery(deliveryTemplate, bImg._id)\" class=\"btn\"><i class=\"delivery\"></i> Delivery</a>\n                </nav>\n                <img [src]=\"serverPath+'/pdfBills/images/'+bImg.billDetails.billImg[0].name\" alt=\"{{bImg.billDetails.billImg[0].name}}\" (click)=\"showBill(i)\" />\n                <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\">\n                    <form class=\"d-flex align-items-center justify-content-between ml-auto\">\n                        <input type=\"text\" placeholder=\"Rs.\" [value]=\"cleanPrice(bImg.billDetails.total)\" />\n                        <a href=\"\" class=\"btn\">Pay Online</a>\n                    </form>\n                </nav>\n            </fieldset>\n        </owl-carousel>\n        <owl-carousel *ngIf=\"selectArea === 'Uploaded'\"\n            [options]=\"cOptions\" [items]=\"billData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <fieldset *ngFor=\"let bImg of billData; let i = index\">\n                <legend>{{bImg.deportment}} {{bImg.date | date: 'medium'}} {{bImg.user}}</legend>\n                <nav class=\"menuBtn d-flex justify-content-between mb-4\">\n                    <a (click)=\"openDelivery(deliveryTemplate, bImg._id)\" class=\"btn\"><i class=\"delivery\"></i> Delivery</a>\n                </nav>\n                <img [src]=\"serverPath+'pdfBills/'+bImg.billImg\" alt=\"{{bImg.billImg}}\" (click)=\"showBill(i)\" />\n                <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\">\n                    <form class=\"d-flex align-items-center justify-content-between ml-auto\">\n                        <input type=\"text\" placeholder=\"Rs.\" [value]=\"cleanPrice(bImg.total)\" />\n                        <a href=\"\" class=\"btn\">Pay Online</a>\n                    </form>\n                </nav>\n            </fieldset>\n        </owl-carousel>\n    </div>\n</section>\n<!-- <section id=\"chartSec\" class=\"container my-4 text-center\">\n    <img src=\"/assets/images/pie-chart.jpg\" alt=\"pie chart\" />\n</section> -->\n<app-side-bar></app-side-bar>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Scan with your device</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <img src=\"/assets/images/qr-code.png\" alt=\"qr-code\" />\n  </div>\n</ng-template>\n\n<ng-template #sponsorTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Add Sponsor</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"spMsg\" class=\"alert\" [ngClass]=\"spMsg.alert\">{{spMsg.msg}}</div>\n    <ul class=\"sponsorList\">\n        <li *ngFor=\"let sp of sponsor\" class=\"d-flex justify-content-between align-items-center\">\n           <h4>{{sp.sponsorName}} - {{sp.sponsor}}</h4> <a (click)=\"addSponsor(sp, billId)\" class=\"btn\">Send</a>\n        </li>\n    </ul>\n  </div>\n</ng-template>\n\n<ng-template #deliveryTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Delivered</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"dMsg\" class=\"alert\" [ngClass]=\"dMsg.alert\">{{dMsg.msg}}</div>\n    <form [formGroup]=\"deliveryFrm\" (submit)=\"addDelivery()\">\n        <h4>Enter Address</h4>\n        <textarea formControlName=\"address\" ></textarea>\n        <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"dSubmit && dFrm.address.errors\">\n            <div *ngIf=\"dFrm.address.errors.required\">Please mention your delivery address</div>\n        </div>\n        <hr />\n        <h4>Select a payment method</h4>\n        <select formControlName=\"payMode\">\n            <option value=\"Add Debit/Credit/ATM Card\">Add Debit/Credit/ATM Card</option>\n            <option value=\"Net Banking\">Net Banking</option>\n            <option value=\"PayU Money\">PayU Money</option>\n            <option value=\"POD\">POD</option>\n        </select>\n        <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"dSubmit && dFrm.payMode.errors\">\n            <div *ngIf=\"dFrm.payMode.errors.required\">Please mention your payment mode</div>\n        </div>\n        <button type=\"submit\" class=\"mt-4\" [disabled]=\"dBtm\">Send</button>\n    </form>\n  </div>\n</ng-template>\n\n\n\n<section id=\"billPop\" *ngIf=\"popBill\">\n    <aside>\n        <a (click)=\"showBill(0)\" class=\"close\"></a>\n        <img [src]=\"serverPath+'/pdfBills/images/'+billData[popId].billImg[0].name\" alt=\"{{billData[popId].billImg[0].name}}\" />\n    </aside>\n</section>\n\n\n";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard/dashboard.component.ts");

    var routes = [{
      path: "dashboard",
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard/dashboard.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__["OwlModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot()]
    })], DashboardModule);
    /***/
  },

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
  "./src/app/dashboard/dashboard/dashboard.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/dashboard/dashboard/dashboard.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "section#chartSec {\n  background-color: #ffffff;\n}\n\nsection#chartSec img {\n  max-width: 100%;\n}\n\nsection#billPop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 500;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n}\n\nsection#billPop aside {\n  background-color: #ffffff;\n  padding: 10px;\n  width: 95%;\n  max-width: 450px;\n  text-align: center;\n  position: relative;\n}\n\nsection#billPop aside {\n  max-width: 600px;\n}\n\nsection#billPop aside img {\n  width: 100%;\n}\n\nsection#billPop aside a.close {\n  cursor: pointer;\n  top: 5px;\n  right: 5px;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/icons/close.svg\");\n}\n\ndiv.modal-body img {\n  width: 100%;\n}\n\nfieldset {\n  border: #AA0000 solid thin;\n  border-radius: 5px;\n  padding: 8px;\n  margin: 10px 0;\n}\n\nfieldset legend {\n  font-size: 15px;\n}\n\nul.sponsorList li {\n  list-style: none;\n  margin: 5px 0;\n}\n\nul.sponsorList li h4 {\n  font-size: 15px;\n  color: #252525;\n}\n\nul.sponsorList li a.btn {\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 15px;\n  cursor: pointer;\n}\n\n.modal-body h4 {\n  font-size: 14px;\n  color: #686868;\n  margin-top: 8px;\n}\n\n.modal-body input[type=text],\n.modal-body textarea,\n.modal-body select {\n  width: 100%;\n  padding: 5px 8px;\n  border-radius: 5px;\n  border: #ccc solid thin;\n  background-color: #ffffff;\n}\n\n.modal-body textarea {\n  height: 80px;\n  resize: none;\n}\n\n.modal-body button[type=submit] {\n  margin-top: 8px;\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 20px;\n  border-radius: 5px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9DOlxcVXNlcnNcXEFiaGlzaGVrLlNheGVuYTFcXERlc2t0b3BcXHByYWthc2hcXHNob2VkZWxpdmVyeUZyb250RW5kL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFtQix5QkFBQTtBQ0FuQjs7QURFQTtFQUFzQixlQUFBO0FDRXRCOztBREFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUE7RUFBd0IsZ0JBQUE7QUNJeEI7O0FERkE7RUFBNEIsV0FBQTtBQ001Qjs7QURKQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnREFBQTtBQ09KOztBREpBO0VBQXFCLFdBQUE7QUNRckI7O0FETkE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNTSjs7QUROQTtFQUFrQixlQUFBO0FDVWxCOztBRFJBO0VBQW9CLGdCQUFBO0VBQWtCLGFBQUE7QUNhdEM7O0FEWEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ2NKOztBRFhBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDY0o7O0FEWEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNjSjs7QURYQTs7O0VBR0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDY0o7O0FEWEE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ2NKOztBRFhBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDY0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2xpYi5zY3NzJztcblxuc2VjdGlvbiNjaGFydFNlYyB7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cblxuc2VjdGlvbiNjaGFydFNlYyBpbWd7IG1heC13aWR0aDogMTAwJTsgfVxuXG5zZWN0aW9uI2JpbGxQb3Age1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogNTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5zZWN0aW9uI2JpbGxQb3AgYXNpZGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuc2VjdGlvbiNiaWxsUG9wIGFzaWRlIHsgbWF4LXdpZHRoOiA2MDBweDsgfVxuXG5zZWN0aW9uI2JpbGxQb3AgYXNpZGUgaW1nIHsgd2lkdGg6IDEwMCU7IH1cblxuc2VjdGlvbiNiaWxsUG9wIGFzaWRlIGEuY2xvc2Uge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDVweDtcbiAgICByaWdodDogNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaWNvbnMvY2xvc2Uuc3ZnJyk7XG59XG5cbmRpdi5tb2RhbC1ib2R5IGltZyB7IHdpZHRoOiAxMDAlOyB9XG5cbmZpZWxkc2V0IHtcbiAgICBib3JkZXI6ICNBQTAwMDAgc29saWQgdGhpbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG5maWVsZHNldCBsZWdlbmQgeyBmb250LXNpemU6IDE1cHg7IH1cblxudWwuc3BvbnNvckxpc3QgbGkgeyBsaXN0LXN0eWxlOiBub25lOyBtYXJnaW46IDVweCAwOyB9XG5cbnVsLnNwb25zb3JMaXN0IGxpIGg0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMyNTI1MjU7XG59XG5cbnVsLnNwb25zb3JMaXN0IGxpIGEuYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDNweCAxNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLWJvZHkgaDQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzY4Njg2ODtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tb2RhbC1ib2R5IGlucHV0W3R5cGU9dGV4dF0sXG4ubW9kYWwtYm9keSB0ZXh0YXJlYSxcbi5tb2RhbC1ib2R5IHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAjY2NjIHNvbGlkIHRoaW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1vZGFsLWJvZHkgdGV4dGFyZWEge1xuICAgIGhlaWdodDogODBweDtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbi5tb2RhbC1ib2R5IGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDNweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG59Iiwic2VjdGlvbiNjaGFydFNlYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbnNlY3Rpb24jY2hhcnRTZWMgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5zZWN0aW9uI2JpbGxQb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnNlY3Rpb24jYmlsbFBvcCBhc2lkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1heC13aWR0aDogNDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5zZWN0aW9uI2JpbGxQb3AgYXNpZGUge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG5zZWN0aW9uI2JpbGxQb3AgYXNpZGUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnNlY3Rpb24jYmlsbFBvcCBhc2lkZSBhLmNsb3NlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbnMvY2xvc2Uuc3ZnXCIpO1xufVxuXG5kaXYubW9kYWwtYm9keSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuZmllbGRzZXQge1xuICBib3JkZXI6ICNBQTAwMDAgc29saWQgdGhpbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbnVsLnNwb25zb3JMaXN0IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiA1cHggMDtcbn1cblxudWwuc3BvbnNvckxpc3QgbGkgaDQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjMjUyNTI1O1xufVxuXG51bC5zcG9uc29yTGlzdCBsaSBhLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAzcHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtYm9keSBoNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2ODY4Njg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm1vZGFsLWJvZHkgaW5wdXRbdHlwZT10ZXh0XSxcbi5tb2RhbC1ib2R5IHRleHRhcmVhLFxuLm1vZGFsLWJvZHkgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAjY2NjIHNvbGlkIHRoaW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5tb2RhbC1ib2R5IHRleHRhcmVhIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICByZXNpemU6IG5vbmU7XG59XG5cbi5tb2RhbC1ib2R5IGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAzcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard/dashboard.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/dashboard/dashboard/dashboard.component.ts ***!
    \************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dashboard.service */
    "./src/app/dashboard/dashboard.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/filter.service */
    "./src/app/shared/filter.service.ts");

    ;
    ;

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(formBuilder, fetch, modalService, filterSrv) {
        _classCallCheck(this, DashboardComponent);

        this.formBuilder = formBuilder;
        this.fetch = fetch;
        this.modalService = modalService;
        this.filterSrv = filterSrv;
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
        this.serverPath = this.fetch.serverPath;
        this.menuOptions = this.filterSrv.menuOptions;
        this.cOptions = this.filterSrv.cOptions;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.deliveryFrm = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            payMode: ['Net Banking', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.getMonthData();
          this.getSponsor();
          this.getPayee();
          this.getProfileInfo();
          this.getSpBill();
          this.getPyBill();
          this.getUpBill();
        }
      }, {
        key: "getUpBill",
        value: function getUpBill() {
          var _this = this;

          return this.fetch.getUploadBill().subscribe(function (res) {
            _this.upBill = res;

            if (_this.upBill) {
              _this.filterSrv.monthFilter.forEach(function (mth) {
                _this.monthDataUp.push(_this.filterSrv.filterByDate(_this.upBill, _this.filterSrv.monthFilter[0], mth));
              });

              _this.upBill.forEach(function (el) {
                _this.upTotal += +el.total;
              }); //this.upTotal = this.filterSrv.cleanPrice(this.upTotal.toString());

            }
          }, function (err) {
            _this.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "getSpBill",
        value: function getSpBill() {
          var _this2 = this;

          return this.fetch.getSponsorBill().subscribe(function (res) {
            _this2.spBill = res;

            if (_this2.spBill) {
              _this2.filterSrv.monthFilter.forEach(function (mth) {
                _this2.monthDataSp.push(_this2.filterSrv.filterByBillDate(_this2.spBill, _this2.filterSrv.monthFilter[0], mth));
              });

              _this2.spBill.forEach(function (el) {
                _this2.spTotal += +_this2.filterSrv.cleanPrice(el.billDetails.total);
              });
            }
          }, function (err) {
            _this2.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "getPyBill",
        value: function getPyBill() {
          var _this3 = this;

          return this.fetch.getPayeeBill().subscribe(function (res) {
            _this3.pyBill = res;

            if (_this3.pyBill) {
              _this3.filterSrv.monthFilter.forEach(function (mth) {
                _this3.monthDataPy.push(_this3.filterSrv.filterByBillDate(_this3.pyBill, _this3.filterSrv.monthFilter[0], mth));
              });

              _this3.pyBill.forEach(function (el) {
                _this3.pyTotal += +_this3.filterSrv.cleanPrice(el.billDetails.total);
              });
            }
          }, function (err) {
            _this3.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
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
          this.deliveryFrm.patchValue({
            billId: billId,
            address: this.profInfo.address
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
          this.billData = null;
          this.billDData = null;
          this.selectArea = area;
          this.selectWeek = null;
          this.selectSector = null;
          this.selectBrand = null;
          this.weekData = null;
          this.col3Data = [];
          this.col4Data = [];
          if (this.selectArea === 'Dashboard') this.monthData = this.monthDataDh;
          if (this.selectArea === 'Payee') this.monthData = this.monthDataPy;
          if (this.selectArea === 'Sponsor') this.monthData = this.monthDataSp;
          if (this.selectArea === 'Uploaded') this.monthData = this.monthDataUp;
        }
      }, {
        key: "sltMonth",
        value: function sltMonth(month) {
          this.selectMonth = month;
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
        key: "sltCustomer",
        value: function sltCustomer(customer) {
          var _this4 = this;

          this.selectSector = customer;

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            this.billData = this.sectorDataList = this.weekDataList.filter(function (e) {
              return e.deportment.toLowerCase().includes(_this4.selectSector.toLowerCase());
            });
            this.generateBFilter(this.billData);
          } else {
            this.billDData = this.sectorDataList = this.weekDataList.filter(function (e) {
              return e.billDetails.deportment.toLowerCase().includes(_this4.selectSector.toLowerCase());
            });
            this.generateBFilter(this.billDData);
          }
        }
      }, {
        key: "sltBrand",
        value: function sltBrand(brand) {
          var _this5 = this;

          this.selectBrand = brand;
          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') this.billData = this.sectorDataList.filter(function (e) {
            return e.title.toLowerCase().includes(_this5.selectBrand.toLowerCase());
          });else this.billDData = this.sectorDataList.filter(function (e) {
            return e.billDetails.title.toLowerCase().includes(_this5.selectBrand.toLowerCase());
          });
        }
      }, {
        key: "getProfileInfo",
        value: function getProfileInfo() {
          var _this6 = this;

          this.fetch.getProfInfo().subscribe(function (res) {
            _this6.profInfo = res;
          }, function (err) {
            _this6.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "getMonthData",
        value: function getMonthData() {
          var _this7 = this;

          this.fetch.getAllBill(this.filterSrv.lastNine.getMonth() + 1, this.filterSrv.lastNine.getFullYear()).subscribe(function (res) {
            var data = res;
            console.log(data); //this.billList = this.billData.filter((bill: any) => new Date(bill.date).getTime() >= this.lastTwo.getTime() && new Date(bill.date).getTime() <= this.today.getTime());

            if (data) {
              _this7.filterSrv.monthFilter.forEach(function (mth) {
                _this7.monthDataDh.push(_this7.filterSrv.filterByDate(data, _this7.filterSrv.monthFilter[0], mth));
              });
            } //this.generateBFilter(this.billData);
            //this.filterMonthsWeek(0, this.billData);
            //this.sltWeek(0);


            data.forEach(function (el) {
              _this7.dashTotal += +_this7.filterSrv.cleanPrice(el.total);
            });
          }, function (err) {
            _this7.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "filterMonthsWeek",
        value: function filterMonthsWeek(month, data) {
          var _this8 = this;

          this.sltMonth(month);
          this.weekData = [];
          var weekList = this.filterSrv.weekCalculator(month, this.filterSrv.today.getMonth());

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            weekList.forEach(function (e) {
              _this8.weekData.push(_this8.filterSrv.filterByDate(data, e.end.getTime(), e.start.getTime()));
            });
            this.billData = this.monthData[month].list;
          } else {
            weekList.forEach(function (e) {
              _this8.weekData.push(_this8.filterSrv.filterByBillDate(data, e.end.getTime(), e.start.getTime()));
            });
            this.billDData = this.monthData[month].list;
          }

          this.selectWeek = null;
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
        key: "getSponsor",
        value: function getSponsor() {
          var _this9 = this;

          this.fetch.getSponsor().subscribe(function (res) {
            var data = _this9.sponsor = res;
            data.forEach(function (e) {
              _this9.listSponsor.push({
                brand: e.sponsorName,
                price: e.price,
                userType: 'payee'
              });
            });
          }, function (err) {
            _this9.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
          setTimeout(function () {
            _this9.pgMsg = null;
          }, 3500);
        }
      }, {
        key: "getPayee",
        value: function getPayee() {
          var _this10 = this;

          this.fetch.getPayee().subscribe(function (res) {
            var data = _this10.payee = res;
            data.forEach(function (e) {
              _this10.listPayee.push({
                brand: e.payeeName,
                price: e.price,
                userType: 'payee'
              });
            });
          }, function (err) {
            _this10.pgMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
          setTimeout(function () {
            _this10.pgMsg = null;
          }, 3500);
        }
      }, {
        key: "generateFilter",
        value: function generateFilter(data) {
          var _this11 = this;

          this.selectSector = null;
          this.col3Data = [];
          this.selectBrand = null;
          this.col4Data = [];

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(function (e) {
              var updateItem = _this11.col3Data.find(function (x) {
                return x.department === e.deportment;
              });

              if (!updateItem) _this11.col3Data.push({
                department: e.deportment,
                price: _this11.cleanPrice(e.total),
                userType: "department"
              });else {
                var index = _this11.col3Data.indexOf(updateItem);

                _this11.col3Data[index].price = _this11.col3Data[index].price + _this11.cleanPrice(e.total);
              }
            });
          } else {
            data.forEach(function (e) {
              var updateItem = _this11.col3Data.find(function (x) {
                return x.department === e.billDetails.deportment;
              });

              if (!updateItem) _this11.col3Data.push({
                department: e.billDetails.deportment,
                price: _this11.cleanPrice(e.billDetails.total),
                userType: "department"
              });else {
                var index = _this11.col3Data.indexOf(updateItem);

                _this11.col3Data[index].price = _this11.col3Data[index].price + _this11.cleanPrice(e.billDetails.total);
              }
            });
          }
        }
      }, {
        key: "generateBFilter",
        value: function generateBFilter(data) {
          var _this12 = this;

          this.selectBrand = null;
          this.col4Data = [];

          if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(function (e) {
              var updateItem = _this12.col4Data.find(function (x) {
                return x.brand === e.title;
              });

              if (!updateItem) _this12.col4Data.push({
                brand: e.title,
                price: _this12.cleanPrice(e.total),
                userType: "brand"
              });else {
                var index = _this12.col4Data.indexOf(updateItem);

                _this12.col4Data[index].price = _this12.col4Data[index].price + _this12.cleanPrice(e.total);
              }
            });
          } else {
            data.forEach(function (e) {
              var updateItem = _this12.col4Data.find(function (x) {
                return x.brand === e.billDetails.title;
              });

              if (!updateItem) _this12.col4Data.push({
                brand: e.billDetails.title,
                price: _this12.cleanPrice(e.billDetails.total),
                userType: "brand"
              });else {
                var index = _this12.col4Data.indexOf(updateItem);

                _this12.col4Data[index].price = _this12.col4Data[index].price + _this12.cleanPrice(e.billDetails.total);
              }
            });
          }
        }
      }, {
        key: "addSponsor",
        value: function addSponsor(sp, bill) {
          var _this13 = this;

          var data = {
            sponsor: sp.sponsor,
            sponsorName: sp.sponsorName,
            payee: sp.payee,
            payeeName: sp.payeeName,
            billDetails: bill,
            createdOn: new Date().toString(),
            updatedOn: new Date().toString()
          };
          this.fetch.addSponsor(data).subscribe(function (res) {
            _this13.spMsg = {
              msg: res,
              alert: 'alert-success'
            };
          }, function (err) {
            _this13.spMsg = {
              msg: err.error,
              alert: 'alert-danger'
            };
          });
        }
      }, {
        key: "addDelivery",
        value: function addDelivery() {
          var _this14 = this;

          this.dSubmit = true;
          this.dBtm = true;

          if (this.deliveryFrm.invalid) {
            this.dBtm = false;
            return;
          } else {
            var formObj = this.deliveryFrm.getRawValue();
            this.fetch.addDelivery(formObj).subscribe(function (res) {
              _this14.dMsg = {
                msg: res,
                alert: 'alert-success'
              };

              _this14.deliveryFrm.reset();

              _this14.dBtm = false;
              setTimeout(function () {
                _this14.modalRef.hide();
              }, 2800);
            }, function (err) {
              _this14.dBtm = false;
              _this14.dMsg = {
                msg: err.error,
                alert: 'alert-danger'
              };
            });
          }

          this.dSubmit = false;
          setTimeout(function () {
            _this14.dMsg = null;
          }, 3500);
        }
      }, {
        key: "dFrm",
        get: function get() {
          return this.deliveryFrm.controls;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]
      }, {
        type: _shared_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map