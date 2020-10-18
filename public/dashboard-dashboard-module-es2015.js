(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard/dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard/dashboard.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<section class=\"container py-4\">\n    <nav id=\"toggleMenu\" class=\"d-flex justify-content-between align-items-end\">\n        <a class=\"active\"> Unpaid </a>\n        <a href=\"\">Paid</a>\n    </nav>\n    <a (click)=\"toggleFilter()\" class=\"filterNow\"><span class=\"filter\"></span> Filter</a>\n    <div class=\"p-4\" id=\"filterSec\" *ngIf=\"filter\">\n        <div>\n            <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthDataDh\">\n                <div class=\"optionList\" [ngClass]=\"{'active': selectArea === 'Dashboard'}\" (click)=\"sltArea('Dashboard')\">\n                        <strong>Dashboard</strong>\n                        <i class=\"payee\"></i>\n                        Rs. {{this.dashTotal}}/-\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': selectArea === 'Payee'}\" (click)=\"sltArea('Payee')\">\n                    <strong>Payee</strong>\n                    <i class=\"payee\"></i>\n                    Rs. {{this.pyTotal}}/-\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': selectArea === 'Sponsor'}\" (click)=\"sltArea('Sponsor')\">\n                    <strong>Sponsor</strong>\n                    <i class=\"sponsor\"></i>\n                    Rs. {{this.spTotal}}/-\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': selectArea === 'Uploaded'}\" (click)=\"sltArea('Uploaded')\">\n                    <strong>Uploaded</strong>\n                    <i class=\"sponsor\"></i>\n                    Rs. {{this.upTotal}}/-\n                </div>\n            </owl-carousel>\n        </div>\n            <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthData\">\n                <div class=\"optionList\" *ngIf=\"monthData[0]\" (click)=\"filterMonthsWeek(0, monthData[0].list)\" [ngClass]=\"{'active': selectMonth === 0}\">\n                    <strong>Current Month</strong>\n                    <i class=\"currentMonth\"></i>\n                    Rs. {{monthData[0].price}}/-\n                </div>\n                <div class=\"optionList\" *ngIf=\"monthData[1]\" (click)=\"filterMonthsWeek(1, monthData[1].list)\" [ngClass]=\"{'active': selectMonth === 1}\">\n                    <strong>Last 2 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[1].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[2]\" (click)=\"filterMonthsWeek(2, monthData[2].list)\" [ngClass]=\"{'active': selectMonth === 2}\">\n                    <strong>Last 3 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[2].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[3]\" (click)=\"filterMonthsWeek(3, monthData[3].list)\" [ngClass]=\"{'active': selectMonth === 3}\">\n                    <strong>Last 6 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[3].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[4]\" (click)=\"filterMonthsWeek(4, monthData[4].list)\" [ngClass]=\"{'active': selectMonth === 4}\">\n                    <strong>Last 9 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[4].price}}/-\n                </div>\n            </owl-carousel>\n        <div class=\"\">\n            <div class=\"\">\n                <owl-carousel [options]=\"menuOptions\" [items]=\"weekData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                    <div class=\"optionList\" *ngFor=\"let wk of weekData; let i = index\" [ngClass]=\"{'active': selectWeek == i}\" (click)='sltWeek(i)'>\n                        <strong>Week {{i}}</strong>\n                        <i class=\"week\"></i>\n                        Rs. {{wk.price}}/-\n                    </div>\n                </owl-carousel>\n                \n            </div>\n        </div>\n        <div class=\"overScroll\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"col3Data\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"col3Data\">\n                <div class=\"optionList\" *ngFor=\"let cl3 of col3Data\" [ngClass]=\"{'active': selectSector === cl3.department}\" (click)=\"sltCustomer(cl3.department)\">\n                    <strong>{{cl3.department}}</strong>\n                    <i class=\"factory\"></i>\n                    Rs. {{cl3.price}}/-\n                </div>\n                \n                <!-- <div class=\"optionList\" [ngClass]=\"{'active': selectSector === 'Payee'}\" (click)=\"sltCustomer('Payee')\">\n                    <strong>Payee</strong>\n                    <i class=\"payee\"></i>\n                    Rs. {{this.pyTotal}}/-\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': selectSector === 'Sponsor'}\" (click)=\"sltCustomer('Sponsor')\">\n                    <strong>Sponsor</strong>\n                    <i class=\"sponsor\"></i>\n                    Rs. {{this.spTotal}}/-\n                </div> -->\n                \n            </owl-carousel>\n        </div>\n        <div class=\"overScroll\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"col4Data\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngFor=\"let c4th of col4Data\" [ngClass]=\"{'active': selectBrand === c4th.brand}\" (click)=\"sltBrand(c4th.brand)\">\n                    <strong>{{c4th.brand}}</strong>\n                    <i class=\"factory\"></i>\n                    Rs. {{c4th.price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n    </div>\n</section>\n<section class=\"container\">\n    <nav class=\"menuBtn d-flex justify-content-between mb-2\">\n         <a (click)=\"openModal(template)\" class=\"btn\"><i class=\"billing\"></i> New Bill</a>\n    </nav>\n    <div class=\"my-3\">\n        <owl-carousel *ngIf=\"selectArea === 'Dashboard'\"\n            [options]=\"cOptions\" [items]=\"billData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <fieldset *ngFor=\"let bImg of billData; let i = index\">\n                <legend>{{bImg.deportment}} {{bImg.genDate | date: 'medium'}} {{bImg.user}}</legend>\n                <nav class=\"menuBtn d-flex justify-content-between mb-4\">\n                    <a (click)=\"openDelivery(deliveryTemplate, bImg._id)\" class=\"btn\"><i class=\"delivery\"></i> Delivery</a>\n                    <a (click)=\"openSponsor(sponsorTemplate, bImg)\" class=\"btn\"><i class=\"forward\"></i> Sponsored My Bill</a>\n                </nav>\n                <img [src]=\"serverPath+'/pdfBills/images/'+bImg.billImg[0].name\" alt=\"{{bImg.billImg[0].name}}\" (click)=\"showBill(i)\" />\n                <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\">\n                    <form class=\"d-flex align-items-center justify-content-between ml-auto\">\n                        <input type=\"text\" placeholder=\"Rs.\" [value]=\"cleanPrice(bImg.total)\" />\n                        <a href=\"\" class=\"btn\">Pay Online</a>\n                    </form>    \n                </nav>\n            </fieldset>\n        </owl-carousel>\n        <owl-carousel *ngIf=\"selectArea !== 'Dashboard' && selectArea !== 'Uploaded'\"\n            [options]=\"cOptions\" [items]=\"billDData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <fieldset *ngFor=\"let bImg of billDData; let i = index\">\n                <legend>{{bImg.billDetails.deportment}} {{bImg.billDetails.genDate | date: 'medium'}} {{bImg.billDetails.user}}</legend>\n                <nav class=\"menuBtn d-flex justify-content-between mb-4\">\n                    <a (click)=\"openDelivery(deliveryTemplate, bImg._id)\" class=\"btn\"><i class=\"delivery\"></i> Delivery</a>\n                </nav>\n                <img [src]=\"serverPath+'/pdfBills/images/'+bImg.billDetails.billImg[0].name\" alt=\"{{bImg.billDetails.billImg[0].name}}\" (click)=\"showBill(i)\" />\n                <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\">\n                    <form class=\"d-flex align-items-center justify-content-between ml-auto\">\n                        <input type=\"text\" placeholder=\"Rs.\" [value]=\"cleanPrice(bImg.billDetails.total)\" />\n                        <a href=\"\" class=\"btn\">Pay Online</a>\n                    </form>    \n                </nav>\n            </fieldset>\n        </owl-carousel>\n        <owl-carousel *ngIf=\"selectArea === 'Uploaded'\"\n            [options]=\"cOptions\" [items]=\"billData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <fieldset *ngFor=\"let bImg of billData; let i = index\">\n                <legend>{{bImg.deportment}} {{bImg.date | date: 'medium'}} {{bImg.user}}</legend>\n                <nav class=\"menuBtn d-flex justify-content-between mb-4\">\n                    <a (click)=\"openDelivery(deliveryTemplate, bImg._id)\" class=\"btn\"><i class=\"delivery\"></i> Delivery</a>\n                </nav>\n                <img [src]=\"serverPath+'pdfBills/'+bImg.billImg\" alt=\"{{bImg.billImg}}\" (click)=\"showBill(i)\" />\n                <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\">\n                    <form class=\"d-flex align-items-center justify-content-between ml-auto\">\n                        <input type=\"text\" placeholder=\"Rs.\" [value]=\"cleanPrice(bImg.total)\" />\n                        <a href=\"\" class=\"btn\">Pay Online</a>\n                    </form>    \n                </nav>\n            </fieldset>\n        </owl-carousel>\n    </div>\n</section>\n<!-- <section id=\"chartSec\" class=\"container my-4 text-center\">\n    <img src=\"/assets/images/pie-chart.jpg\" alt=\"pie chart\" />\n</section> -->\n<app-side-bar></app-side-bar>\n\n<ng-template #template>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Scan with your device</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <img src=\"/assets/images/qr-code.png\" alt=\"qr-code\" />\n  </div>\n</ng-template>\n\n<ng-template #sponsorTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Add Sponsor</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"spMsg\" class=\"alert\" [ngClass]=\"spMsg.alert\">{{spMsg.msg}}</div>\n    <ul class=\"sponsorList\">\n        <li *ngFor=\"let sp of sponsor\" class=\"d-flex justify-content-between align-items-center\">\n           <h4>{{sp.sponsorName}} - {{sp.sponsor}}</h4> <a (click)=\"addSponsor(sp, billId)\" class=\"btn\">Send</a>\n        </li>\n    </ul>\n  </div>\n</ng-template>\n\n<ng-template #deliveryTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Delivered</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"dMsg\" class=\"alert\" [ngClass]=\"dMsg.alert\">{{dMsg.msg}}</div>\n    <form [formGroup]=\"deliveryFrm\" (submit)=\"addDelivery()\">\n        <h4>Enter Address</h4>\n        <textarea formControlName=\"address\" ></textarea>\n        <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"dSubmit && dFrm.address.errors\">\n            <div *ngIf=\"dFrm.address.errors.required\">Please mention your delivery address</div>\n        </div>\n        <hr />\n        <h4>Select a payment method</h4>\n        <select formControlName=\"payMode\">\n            <option value=\"Add Debit/Credit/ATM Card\">Add Debit/Credit/ATM Card</option>\n            <option value=\"Net Banking\">Net Banking</option>\n            <option value=\"PayU Money\">PayU Money</option>\n            <option value=\"POD\">POD</option>\n        </select>\n        <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"dSubmit && dFrm.payMode.errors\">\n            <div *ngIf=\"dFrm.payMode.errors.required\">Please mention your payment mode</div>\n        </div>\n        <button type=\"submit\" class=\"mt-4\" [disabled]=\"dBtm\">Send</button>\n    </form>\n  </div>\n</ng-template>\n\n<section id=\"billPop\" *ngIf=\"popBill\">\n    <aside>\n        <a (click)=\"showBill(0)\" class=\"close\"></a>\n        <img [src]=\"serverPath+'/pdfBills/images/'+billData[popId].billImg[0].name\" alt=\"{{billData[popId].billImg[0].name}}\" />\n    </aside>\n</section>\n");

/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");




const routes = [
    {
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");









let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_6__["OwlModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot()
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api-link.service */ "./src/app/shared/api-link.service.ts");
/* harmony import */ var _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guard/auth.service */ "./src/app/guard/auth.service.ts");





let DashboardService = class DashboardService {
    constructor(http, api, auth) {
        this.http = http;
        this.api = api;
        this.auth = auth;
        this.serverPath = this.api.srvLink;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': this.auth.getLogged()
        });
    }
    getProfInfo() {
        return this.http.get(this.api.server + "profile", { headers: this.headers });
    }
    getAllBill(month, year) {
        return this.http.get(this.api.server + "bill/" + month + "/" + year, { headers: this.headers });
    }
    getSponsor() {
        return this.http.get(this.api.server + "sponsor", { headers: this.headers });
    }
    addSponsor(data) {
        return this.http.post(this.api.server + "sponsor/bill", data, { headers: this.headers });
    }
    getPayee() {
        return this.http.get(this.api.server + "payee", { headers: this.headers });
    }
    addDelivery(data) {
        return this.http.post(this.api.server + "delivery", data, { headers: this.headers });
    }
    getPayeeBill() {
        return this.http.get(this.api.server + "payee/bill", { headers: this.headers });
    }
    getSponsorBill() {
        return this.http.get(this.api.server + "sponsor/bill", { headers: this.headers });
    }
    getUploadBill() {
        return this.http.get(this.api.server + "bill-info", { headers: this.headers });
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__["ApiLinkService"] },
    { type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashboardService);



/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section#chartSec {\n  background-color: #ffffff;\n}\n\nsection#chartSec img {\n  max-width: 100%;\n}\n\nsection#billPop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 500;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n}\n\nsection#billPop aside {\n  background-color: #ffffff;\n  padding: 10px;\n  width: 95%;\n  max-width: 450px;\n  text-align: center;\n  position: relative;\n}\n\nsection#billPop aside {\n  max-width: 600px;\n}\n\nsection#billPop aside img {\n  width: 100%;\n}\n\nsection#billPop aside a.close {\n  cursor: pointer;\n  top: 5px;\n  right: 5px;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/icons/close.svg\");\n}\n\ndiv.modal-body img {\n  width: 100%;\n}\n\nfieldset {\n  border: #AA0000 solid thin;\n  border-radius: 5px;\n  padding: 8px;\n  margin: 10px 0;\n}\n\nfieldset legend {\n  font-size: 15px;\n}\n\nul.sponsorList li {\n  list-style: none;\n  margin: 5px 0;\n}\n\nul.sponsorList li h4 {\n  font-size: 15px;\n  color: #252525;\n}\n\nul.sponsorList li a.btn {\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 15px;\n  cursor: pointer;\n}\n\n.modal-body h4 {\n  font-size: 14px;\n  color: #686868;\n  margin-top: 8px;\n}\n\n.modal-body input[type=text],\n.modal-body textarea,\n.modal-body select {\n  width: 100%;\n  padding: 5px 8px;\n  border-radius: 5px;\n  border: #ccc solid thin;\n  background-color: #ffffff;\n}\n\n.modal-body textarea {\n  height: 80px;\n  resize: none;\n}\n\n.modal-body button[type=submit] {\n  margin-top: 8px;\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 20px;\n  border-radius: 5px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyaWQvV29ya3MvQW5ndWxhci90cmF2ZXZpc2FsZ3VydS9TaG9lIERlbGl2ZXJ5IFNlcnZpY2Uvc2hvZVJldGFpbGVyL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQW1CLHlCQUFBO0FDQW5COztBREVBO0VBQXNCLGVBQUE7QUNFdEI7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURBQTtFQUF3QixnQkFBQTtBQ0l4Qjs7QURGQTtFQUE0QixXQUFBO0FDTTVCOztBREpBO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdEQUFBO0FDT0o7O0FESkE7RUFBcUIsV0FBQTtBQ1FyQjs7QUROQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ1NKOztBRE5BO0VBQWtCLGVBQUE7QUNVbEI7O0FEUkE7RUFBb0IsZ0JBQUE7RUFBa0IsYUFBQTtBQ2F0Qzs7QURYQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDY0o7O0FEWEE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNjSjs7QURYQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2NKOztBRFhBOzs7RUFHSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUNjSjs7QURYQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDY0o7O0FEWEE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNjSiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvbGliLnNjc3MnO1xuXG5zZWN0aW9uI2NoYXJ0U2VjIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgfVxuXG5zZWN0aW9uI2NoYXJ0U2VjIGltZ3sgbWF4LXdpZHRoOiAxMDAlOyB9XG5cbnNlY3Rpb24jYmlsbFBvcCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiA1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbnNlY3Rpb24jYmlsbFBvcCBhc2lkZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5zZWN0aW9uI2JpbGxQb3AgYXNpZGUgeyBtYXgtd2lkdGg6IDYwMHB4OyB9XG5cbnNlY3Rpb24jYmlsbFBvcCBhc2lkZSBpbWcgeyB3aWR0aDogMTAwJTsgfVxuXG5zZWN0aW9uI2JpbGxQb3AgYXNpZGUgYS5jbG9zZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogNXB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pY29ucy9jbG9zZS5zdmcnKTtcbn1cblxuZGl2Lm1vZGFsLWJvZHkgaW1nIHsgd2lkdGg6IDEwMCU7IH1cblxuZmllbGRzZXQge1xuICAgIGJvcmRlcjogI0FBMDAwMCBzb2xpZCB0aGluO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7IGZvbnQtc2l6ZTogMTVweDsgfVxuXG51bC5zcG9uc29yTGlzdCBsaSB7IGxpc3Qtc3R5bGU6IG5vbmU7IG1hcmdpbjogNXB4IDA7IH1cblxudWwuc3BvbnNvckxpc3QgbGkgaDQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzI1MjUyNTtcbn1cblxudWwuc3BvbnNvckxpc3QgbGkgYS5idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogM3B4IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtYm9keSBoNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNjg2ODY4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm1vZGFsLWJvZHkgaW5wdXRbdHlwZT10ZXh0XSxcbi5tb2RhbC1ib2R5IHRleHRhcmVhLFxuLm1vZGFsLWJvZHkgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubW9kYWwtYm9keSB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLm1vZGFsLWJvZHkgYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogM3B4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn0iLCJzZWN0aW9uI2NoYXJ0U2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuc2VjdGlvbiNjaGFydFNlYyBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbnNlY3Rpb24jYmlsbFBvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuc2VjdGlvbiNiaWxsUG9wIGFzaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDk1JTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbnNlY3Rpb24jYmlsbFBvcCBhc2lkZSB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbnNlY3Rpb24jYmlsbFBvcCBhc2lkZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuc2VjdGlvbiNiaWxsUG9wIGFzaWRlIGEuY2xvc2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29ucy9jbG9zZS5zdmdcIik7XG59XG5cbmRpdi5tb2RhbC1ib2R5IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogI0FBMDAwMCBzb2xpZCB0aGluO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxudWwuc3BvbnNvckxpc3QgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDVweCAwO1xufVxuXG51bC5zcG9uc29yTGlzdCBsaSBoNCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMyNTI1MjU7XG59XG5cbnVsLnNwb25zb3JMaXN0IGxpIGEuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDNweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1ib2R5IGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY4Njg2ODtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubW9kYWwtYm9keSBpbnB1dFt0eXBlPXRleHRdLFxuLm1vZGFsLWJvZHkgdGV4dGFyZWEsXG4ubW9kYWwtYm9keSBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLm1vZGFsLWJvZHkgdGV4dGFyZWEge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLm1vZGFsLWJvZHkgYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDNweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/filter.service */ "./src/app/shared/filter.service.ts");






;
;
let DashboardComponent = class DashboardComponent {
    constructor(formBuilder, fetch, modalService, filterSrv) {
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
    ngOnInit() {
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
    getUpBill() {
        return this.fetch.getUploadBill().subscribe(res => {
            this.upBill = res;
            if (this.upBill) {
                this.filterSrv.monthFilter.forEach(mth => {
                    this.monthDataUp.push(this.filterSrv.filterByDate(this.upBill, this.filterSrv.monthFilter[0], mth));
                });
                this.upBill.forEach(el => {
                    this.upTotal += +el.total;
                });
                //this.upTotal = this.filterSrv.cleanPrice(this.upTotal.toString());
            }
        }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
    getSpBill() {
        return this.fetch.getSponsorBill().subscribe(res => {
            this.spBill = res;
            if (this.spBill) {
                this.filterSrv.monthFilter.forEach(mth => {
                    this.monthDataSp.push(this.filterSrv.filterByBillDate(this.spBill, this.filterSrv.monthFilter[0], mth));
                });
                this.spBill.forEach(el => {
                    this.spTotal += +this.filterSrv.cleanPrice(el.billDetails.total);
                });
            }
        }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
    getPyBill() {
        return this.fetch.getPayeeBill().subscribe(res => {
            this.pyBill = res;
            if (this.pyBill) {
                this.filterSrv.monthFilter.forEach(mth => {
                    this.monthDataPy.push(this.filterSrv.filterByBillDate(this.pyBill, this.filterSrv.monthFilter[0], mth));
                });
                this.pyBill.forEach(el => {
                    this.pyTotal += +this.filterSrv.cleanPrice(el.billDetails.total);
                });
            }
        }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    openDelivery(template, billId) {
        this.modalRef = this.modalService.show(template);
        this.deliveryFrm.patchValue({
            billId: billId,
            address: this.profInfo.address
        });
    }
    openSponsor(template, billId) {
        this.modalRef = this.modalService.show(template);
        this.billId = billId;
    }
    toggleFilter() {
        this.filter = !this.filter;
    }
    sltArea(area) {
        this.billData = null;
        this.billDData = null;
        this.selectArea = area;
        this.selectWeek = null;
        this.selectSector = null;
        this.selectBrand = null;
        this.weekData = null;
        this.col3Data = [];
        this.col4Data = [];
        if (this.selectArea === 'Dashboard')
            this.monthData = this.monthDataDh;
        if (this.selectArea === 'Payee')
            this.monthData = this.monthDataPy;
        if (this.selectArea === 'Sponsor')
            this.monthData = this.monthDataSp;
        if (this.selectArea === 'Uploaded')
            this.monthData = this.monthDataUp;
    }
    sltMonth(month) {
        this.selectMonth = month;
    }
    sltWeek(week) {
        this.selectWeek = week;
        console.log(this.weekData[week].list);
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            this.billData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billData);
        }
        else {
            this.billDData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billDData);
        }
    }
    sltCustomer(customer) {
        this.selectSector = customer;
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            this.billData = this.sectorDataList = this.weekDataList.filter(e => e.deportment.toLowerCase().includes(this.selectSector.toLowerCase()));
            this.generateBFilter(this.billData);
        }
        else {
            this.billDData = this.sectorDataList = this.weekDataList.filter(e => e.billDetails.deportment.toLowerCase().includes(this.selectSector.toLowerCase()));
            this.generateBFilter(this.billDData);
        }
    }
    sltBrand(brand) {
        this.selectBrand = brand;
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded')
            this.billData = this.sectorDataList.filter(e => e.title.toLowerCase().includes(this.selectBrand.toLowerCase()));
        else
            this.billDData = this.sectorDataList.filter(e => e.billDetails.title.toLowerCase().includes(this.selectBrand.toLowerCase()));
    }
    getProfileInfo() {
        this.fetch.getProfInfo().subscribe(res => { this.profInfo = res; }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
    getMonthData() {
        this.fetch.getAllBill(this.filterSrv.lastNine.getMonth() + 1, this.filterSrv.lastNine.getFullYear()).subscribe(res => {
            let data = res;
            //this.billList = this.billData.filter((bill: any) => new Date(bill.date).getTime() >= this.lastTwo.getTime() && new Date(bill.date).getTime() <= this.today.getTime());
            if (data) {
                this.filterSrv.monthFilter.forEach(mth => {
                    this.monthDataDh.push(this.filterSrv.filterByDate(data, this.filterSrv.monthFilter[0], mth));
                });
            }
            //this.generateBFilter(this.billData);
            //this.filterMonthsWeek(0, this.billData);
            //this.sltWeek(0);
            data.forEach(el => {
                this.dashTotal += +this.filterSrv.cleanPrice(el.total);
            });
        }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
    filterMonthsWeek(month, data) {
        this.sltMonth(month);
        this.weekData = [];
        let weekList = this.filterSrv.weekCalculator(month, this.filterSrv.today.getMonth());
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            weekList.forEach(e => {
                this.weekData.push(this.filterSrv.filterByDate(data, e.end.getTime(), e.start.getTime()));
            });
            this.billData = this.monthData[month].list;
        }
        else {
            weekList.forEach(e => {
                this.weekData.push(this.filterSrv.filterByBillDate(data, e.end.getTime(), e.start.getTime()));
            });
            this.billDData = this.monthData[month].list;
        }
        this.selectWeek = null;
        this.selectSector = null;
        this.selectBrand = null;
        this.col3Data = [];
        this.col4Data = [];
        //console.log(this.weekData);
    }
    cleanPrice(amount) {
        return this.filterSrv.cleanPrice(amount);
    }
    showBill(index) {
        this.popBill = !this.popBill;
        this.popId = index;
    }
    getSponsor() {
        this.fetch.getSponsor().subscribe(res => {
            let data = this.sponsor = res;
            data.forEach(e => {
                this.listSponsor.push({ brand: e.sponsorName, price: e.price, userType: 'payee' });
            });
        }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
        setTimeout(() => {
            this.pgMsg = null;
        }, 3500);
    }
    getPayee() {
        this.fetch.getPayee().subscribe(res => {
            let data = this.payee = res;
            data.forEach(e => {
                this.listPayee.push({ brand: e.payeeName, price: e.price, userType: 'payee' });
            });
        }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
        setTimeout(() => {
            this.pgMsg = null;
        }, 3500);
    }
    generateFilter(data) {
        this.selectSector = null;
        this.col3Data = [];
        this.selectBrand = null;
        this.col4Data = [];
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(e => {
                let updateItem = this.col3Data.find(x => x.department === e.deportment);
                if (!updateItem)
                    this.col3Data.push({ department: e.deportment, price: this.cleanPrice(e.total), userType: "department" });
                else {
                    let index = this.col3Data.indexOf(updateItem);
                    this.col3Data[index].price = this.col3Data[index].price + this.cleanPrice(e.total);
                }
            });
        }
        else {
            data.forEach(e => {
                let updateItem = this.col3Data.find(x => x.department === e.billDetails.deportment);
                if (!updateItem)
                    this.col3Data.push({ department: e.billDetails.deportment, price: this.cleanPrice(e.billDetails.total), userType: "department" });
                else {
                    let index = this.col3Data.indexOf(updateItem);
                    this.col3Data[index].price = this.col3Data[index].price + this.cleanPrice(e.billDetails.total);
                }
            });
        }
    }
    generateBFilter(data) {
        this.selectBrand = null;
        this.col4Data = [];
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(e => {
                let updateItem = this.col4Data.find(x => x.brand === e.title);
                if (!updateItem)
                    this.col4Data.push({ brand: e.title, price: this.cleanPrice(e.total), userType: "brand" });
                else {
                    let index = this.col4Data.indexOf(updateItem);
                    this.col4Data[index].price = this.col4Data[index].price + this.cleanPrice(e.total);
                }
            });
        }
        else {
            data.forEach(e => {
                let updateItem = this.col4Data.find(x => x.brand === e.billDetails.title);
                if (!updateItem)
                    this.col4Data.push({ brand: e.billDetails.title, price: this.cleanPrice(e.billDetails.total), userType: "brand" });
                else {
                    let index = this.col4Data.indexOf(updateItem);
                    this.col4Data[index].price = this.col4Data[index].price + this.cleanPrice(e.billDetails.total);
                }
            });
        }
    }
    addSponsor(sp, bill) {
        let data = {
            sponsor: sp.sponsor,
            sponsorName: sp.sponsorName,
            payee: sp.payee,
            payeeName: sp.payeeName,
            billDetails: bill,
            createdOn: new Date().toString(),
            updatedOn: new Date().toString()
        };
        this.fetch.addSponsor(data).subscribe(res => { this.spMsg = { msg: res, alert: 'alert-success' }; }, err => { this.spMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
    get dFrm() { return this.deliveryFrm.controls; }
    addDelivery() {
        this.dSubmit = true;
        this.dBtm = true;
        if (this.deliveryFrm.invalid) {
            this.dBtm = false;
            return;
        }
        else {
            let formObj = this.deliveryFrm.getRawValue();
            this.fetch.addDelivery(formObj).subscribe(res => {
                this.dMsg = { msg: res, alert: 'alert-success' };
                this.deliveryFrm.reset();
                this.dBtm = false;
                setTimeout(() => {
                    this.modalRef.hide();
                }, 2800);
            }, err => {
                this.dBtm = false;
                this.dMsg = { msg: err.error, alert: 'alert-danger' };
            });
        }
        this.dSubmit = false;
        setTimeout(() => {
            this.dMsg = null;
        }, 3500);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _shared_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map