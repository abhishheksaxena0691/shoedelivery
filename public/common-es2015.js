(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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
    getProductList(data) {
        return this.http.post(this.api.server + "product/getProductList", data, { headers: this.headers });
    }
    createNewInvoice(data) {
        return this.http.post(this.api.server + "bill/generateDealerBill", data, { headers: this.headers });
    }
    generateImageNewInvoice(data) {
        return this.http.post(this.api.server + "bill/generateDealerBill", data, { headers: this.headers });
    }
    updateDeleiveryInoice(data) {
        return this.http.post(this.api.server + "delivery/updatedeliveryCredit", data, { headers: this.headers });
    }
    updateCreditInvoice(data) {
        return this.http.post(this.api.server + "delivery/updatedeliveryCredit", data, { headers: this.headers });
    }
    updateInvoiceStatus(data) {
        return this.http.post(this.api.server + "delivery/updateInvoiceStatus", data, { headers: this.headers });
    }
    verifyRetailerMobileNumber(data) {
        return this.http.post(this.api.server + "verifyMobileNumber", data, { headers: this.headers });
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

/***/ "./src/app/delivery/delivery.service.ts":
/*!**********************************************!*\
  !*** ./src/app/delivery/delivery.service.ts ***!
  \**********************************************/
/*! exports provided: DeliveryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryService", function() { return DeliveryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api-link.service */ "./src/app/shared/api-link.service.ts");
/* harmony import */ var _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guard/auth.service */ "./src/app/guard/auth.service.ts");





let DeliveryService = class DeliveryService {
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
    getAllDelivery() {
        return this.http.get(this.api.server + "delivery/all", { headers: this.headers });
    }
    updatepaymentMode(data) {
        return this.http.post(this.api.server + "delivery/updatePaymentMode", data, { headers: this.headers });
    }
    generateImageNewInvoice(data) {
        return this.http.post(this.api.server + "bill/uploadGeneratedBills", data, { headers: this.headers });
    }
    moveToDelivery(data) {
        return this.http.post(this.api.server + "delivery/moveToDelivery", data, { headers: this.headers });
    }
};
DeliveryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__["ApiLinkService"] },
    { type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
DeliveryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DeliveryService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map