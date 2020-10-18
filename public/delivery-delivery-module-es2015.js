(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-delivery-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/delivery/delivery-pg/delivery-pg.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delivery/delivery-pg/delivery-pg.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"container py-4\">\n    <nav id=\"toggleMenu\" class=\"d-flex justify-content-between align-items-end\">\n        <a class=\"active\">Unpaid</a>\n        <a href=\"\">Paid</a>\n    </nav>\n    <a (click)=\"toggleFilter()\" class=\"filterNow\"><span class=\"filter\"></span> Filter</a>\n    <div class=\"p-4\" id=\"filterSec\" *ngIf=\"filter\">\n        <div class=\"\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngIf=\"monthData[0]\" (click)=\"filterMonthsWeek(0, monthData[0].list)\" [ngClass]=\"{'active': selectMonth === 0}\">\n                    <strong>Current Month</strong>\n                    <i class=\"currentMonth\"></i>\n                    Rs. {{monthData[0].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[1]\" (click)=\"filterMonthsWeek(1, monthData[1].list)\" [ngClass]=\"{'active': selectMonth === 1}\">\n                    <strong>Last 2 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[1].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[2]\" (click)=\"filterMonthsWeek(2, monthData[2].list)\" [ngClass]=\"{'active': selectMonth === 2}\">\n                    <strong>Last 3 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[2].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[3]\" (click)=\"filterMonthsWeek(3, monthData[3].list)\" [ngClass]=\"{'active': selectMonth === 3}\">\n                    <strong>Last 6 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[3].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[4]\" (click)=\"filterMonthsWeek(4, monthData[4].list)\" [ngClass]=\"{'active': selectMonth === 4}\">\n                    <strong>Last 9 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[4].price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n        <div class=\"\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"weekData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngFor=\"let wk of weekData; let i = index\" [ngClass]=\"{'active': selectWeek == i}\" (click)='sltWeek(i)'>\n                    <strong>Week {{i}}</strong>\n                    <i class=\"week\"></i>\n                    Rs. {{wk.price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n        <div class=\"\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"col3Data\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngFor=\"let cl3 of col3Data\" [ngClass]=\"{'active': selectSector === cl3.department}\" (click)=\"sltCustomer(cl3.department)\">\n                    <strong>{{cl3.department}}</strong>\n                    <i class=\"factory\"></i>\n                    Rs. {{cl3.price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n        <div class=\"overScroll\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"col4Data\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngFor=\"let c4th of col4Data\" [ngClass]=\"{'active': selectBrand === c4th.brand}\" (click)=\"sltBrand(c4th.brand)\">\n                    <strong>{{c4th.brand}}</strong>\n                    <i class=\"factory\"></i>\n                    Rs. {{c4th.price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n    </div>\n</section>\n\n<section class=\"container\">\n    <owl-carousel\n            [options]=\"cOptions\" [items]=\"deliveryList\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n        <fieldset *ngFor=\"let bImg of deliveryList; let i = index\">\n            <legend>{{bImg.billDetails.deportment}} {{bImg.billDetails.genDate | date: 'medium'}} {{bImg.billDetails.user}}</legend>\n            <section id=\"deliverySec\" class=\"container my-4\">\n                <div class=\"row p-4\">\n                    <div class=\"col-6\">\n                        <h3>From:</h3>\n                        <p>Warehouse location</p>\n                        <p><strong>Request ON:</strong> {{bImg.createdOn | date: 'medium'}}</p>\n                    </div>\n                    <div class=\"col-6\">\n                        <h3>To:</h3>\n                        <p>{{bImg.paidBy}} - {{bImg.usrNumber}}</p>\n                        <p>{{bImg.address}}</p>\n                    </div>\n                </div>\n            </section>\n            <div id=\"shipTrack\" class=\"py-5\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                    <i class=\"active\"></i>\n                    <span></span>\n                    <i></i>\n                    <span></span>\n                    <i></i>\n                    <span></span>\n                    <i></i>\n                </div>\n                <h3 class=\"text-center mt-4\">Order Initiated</h3>\n            </div>\n\n            <img [src]=\"serverPath+'/pdfBills/images/'+bImg.billDetails.billImg[0].name\" alt=\"{{bImg.billDetails.billImg[0].name}}\" (click)=\"showBill(i)\" />\n            <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\">\n                <form class=\"d-flex align-items-center justify-content-between ml-auto\">\n                    <input type=\"text\" placeholder=\"Rs.\" [value]=\"cleanPrice(bImg.billDetails.total)\" />\n                    <a href=\"\" class=\"btn\">Pay Online</a>\n                </form>    \n            </nav>\n        </fieldset>\n    </owl-carousel>\n</section>\n<app-side-bar></app-side-bar>");

/***/ }),

/***/ "./src/app/delivery/delivery-pg/delivery-pg.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/delivery/delivery-pg/delivery-pg.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div#filterSec {\n  background-color: #fff;\n  border-radius: 0 0 8px 8px;\n}\n\ndiv#filterSec h4 {\n  font-size: 15px;\n  font-weight: bold;\n  color: #aa0000;\n  margin: 20px 0 1px 0;\n}\n\ndiv.optionList {\n  margin: 5px 0;\n}\n\ndiv.optionList label {\n  width: 150px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  cursor: pointer;\n}\n\ndiv.optionList label input[type=radio] {\n  margin-right: 10px;\n}\n\nsection#deliverySec {\n  background-color: #ffffff;\n}\n\nsection#deliverySec h3 {\n  font-size: 22px;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\nsection#deliverySec p {\n  margin: 3px 0;\n}\n\ndiv#shipTrack i {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #E2E2E2;\n}\n\ndiv#shipTrack i.active {\n  background-color: #AA0000;\n}\n\ndiv#shipTrack span {\n  width: 130px;\n  border-top: #E2E2E2 solid 5px;\n}\n\ndiv#shipTrack h3 {\n  color: #aa0000;\n  font-size: 18px;\n}\n\nfieldset {\n  border-radius: 5px;\n  padding: 8px;\n  margin: 10px 0;\n}\n\nfieldset legend {\n  font-size: 15px;\n  color: #AA0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyaWQvV29ya3MvQW5ndWxhci90cmF2ZXZpc2FsZ3VydS9TaG9lIERlbGl2ZXJ5IFNlcnZpY2Uvc2hvZVJldGFpbGVyL3NyYy9hcHAvZGVsaXZlcnkvZGVsaXZlcnktcGcvZGVsaXZlcnktcGcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbGl2ZXJ5L2RlbGl2ZXJ5LXBnL2RlbGl2ZXJ5LXBnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFBeUMsa0JBQUE7QUNFekM7O0FEQUE7RUFBc0IseUJBQUE7QUNJdEI7O0FERkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREZBO0VBQ0ksYUFBQTtBQ0tKOztBREZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDS0o7O0FERkE7RUFBeUIseUJBQUE7QUNNekI7O0FESkE7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7QUNPSjs7QURKQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDT0o7O0FESkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDT0o7O0FESkE7RUFBa0IsZUFBQTtFQUFpQixjQUFBO0FDU25DIiwiZmlsZSI6InNyYy9hcHAvZGVsaXZlcnkvZGVsaXZlcnktcGcvZGVsaXZlcnktcGcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjZmlsdGVyU2VjIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuXG5kaXYjZmlsdGVyU2VjIGg0IHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHJnYigxNzAsMCwwKTtcbiAgICBtYXJnaW46IDIwcHggMCAxcHggMDtcbn1cblxuZGl2Lm9wdGlvbkxpc3Qge1xuICAgIG1hcmdpbjogNXB4IDA7XG59XG5cbmRpdi5vcHRpb25MaXN0IGxhYmVsIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5vcHRpb25MaXN0IGxhYmVsIGlucHV0W3R5cGU9cmFkaW9dIHsgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG5cbnNlY3Rpb24jZGVsaXZlcnlTZWMgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB9XG5cbnNlY3Rpb24jZGVsaXZlcnlTZWMgaDMge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnNlY3Rpb24jZGVsaXZlcnlTZWMgcCB7XG4gICAgbWFyZ2luOiAzcHggMDtcbn1cblxuZGl2I3NoaXBUcmFjayBpIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkuYWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDsgfVxuXG5kaXYjc2hpcFRyYWNrIHNwYW4ge1xuICAgIHdpZHRoOiAxMzBweDtcbiAgICBib3JkZXItdG9wOiAjRTJFMkUyIHNvbGlkIDVweDtcbn1cblxuZGl2I3NoaXBUcmFjayBoMyB7XG4gICAgY29sb3I6ICNhYTAwMDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5maWVsZHNldCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHsgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogI0FBMDAwMDsgfSIsImRpdiNmaWx0ZXJTZWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbn1cblxuZGl2I2ZpbHRlclNlYyBoNCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBtYXJnaW46IDIwcHggMCAxcHggMDtcbn1cblxuZGl2Lm9wdGlvbkxpc3Qge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG5kaXYub3B0aW9uTGlzdCBsYWJlbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5vcHRpb25MaXN0IGxhYmVsIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5zZWN0aW9uI2RlbGl2ZXJ5U2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBoMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBwIHtcbiAgbWFyZ2luOiAzcHggMDtcbn1cblxuZGl2I3NoaXBUcmFjayBpIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UyRTJFMjtcbn1cblxuZGl2I3NoaXBUcmFjayBpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG59XG5cbmRpdiNzaGlwVHJhY2sgc3BhbiB7XG4gIHdpZHRoOiAxMzBweDtcbiAgYm9yZGVyLXRvcDogI0UyRTJFMiBzb2xpZCA1cHg7XG59XG5cbmRpdiNzaGlwVHJhY2sgaDMge1xuICBjb2xvcjogI2FhMDAwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5maWVsZHNldCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI0FBMDAwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/delivery/delivery-pg/delivery-pg.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/delivery/delivery-pg/delivery-pg.component.ts ***!
  \***************************************************************/
/*! exports provided: DeliveryPgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPgComponent", function() { return DeliveryPgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _delivery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delivery.service */ "./src/app/delivery/delivery.service.ts");
/* harmony import */ var _shared_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/filter.service */ "./src/app/shared/filter.service.ts");




;
;
let DeliveryPgComponent = class DeliveryPgComponent {
    constructor(fetch, filterSrv) {
        this.fetch = fetch;
        this.filterSrv = filterSrv;
        this.filter = true;
        this.selectWeek = 0;
        this.popBill = false;
        this.monthData = [];
        this.weekData = [];
        this.col4Data = [];
        this.col3Data = [];
        this.serverPath = this.fetch.serverPath;
        this.menuOptions = this.filterSrv.menuOptions;
        this.cOptions = this.filterSrv.cOptions;
    }
    ngOnInit() {
        this.getDelivery();
    }
    getDelivery() {
        this.fetch.getAllDelivery().subscribe(res => {
            this.deliveryList = res;
            if (this.deliveryList) {
                this.filterSrv.monthFilter.forEach(mth => {
                    this.monthData.push(this.filterSrv.filterByBillDate(this.deliveryList, this.filterSrv.monthFilter[0], mth));
                });
            }
        }, err => { this.pgMsg = { msg: err.error, alert: "alert-danger" }; });
    }
    toggleFilter() {
        if (this.filter)
            this.filter = false;
        else
            this.filter = true;
    }
    sltMonth(month) {
        this.selectMonth = month;
    }
    sltWeek(week) {
        this.selectWeek = week;
        this.deliveryList = this.weekDataList = this.weekData[week].list;
        this.generateFilter(this.deliveryList);
    }
    sltCustomer(customer) {
        this.selectSector = customer;
        // if(this.selectSector === 'Payee')
        //   this.col4Data = this.listPayee;
        // if(this.selectSector === 'Sponsor')
        //   this.col4Data = this.listSponsor;
        this.deliveryList = this.sectorDataList = this.weekDataList.filter(e => e.billDetails.deportment.toLowerCase().includes(this.selectSector.toLowerCase()));
        this.generateBFilter(this.deliveryList);
    }
    sltBrand(brand) {
        this.selectBrand = brand;
        this.deliveryList = this.sectorDataList.filter(e => e.billDetails.title.toLowerCase().includes(this.selectBrand.toLowerCase()));
    }
    generateFilter(data) {
        this.selectSector = null;
        this.col3Data = [];
        this.selectBrand = null;
        this.col4Data = [];
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
    generateBFilter(data) {
        this.selectBrand = null;
        this.col4Data = [];
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
    filterMonthsWeek(month, data) {
        this.sltMonth(month);
        this.weekData = [];
        let weekList = this.filterSrv.weekCalculator(month, this.filterSrv.today.getMonth());
        weekList.forEach(e => {
            this.weekData.push(this.filterSrv.filterByBillDate(data, e.end.getTime(), e.start.getTime()));
        });
        this.deliveryList = this.monthData[month].list;
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
};
DeliveryPgComponent.ctorParameters = () => [
    { type: _delivery_service__WEBPACK_IMPORTED_MODULE_2__["DeliveryService"] },
    { type: _shared_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"] }
];
DeliveryPgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delivery-pg',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delivery-pg.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/delivery/delivery-pg/delivery-pg.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delivery-pg.component.scss */ "./src/app/delivery/delivery-pg/delivery-pg.component.scss")).default]
    })
], DeliveryPgComponent);



/***/ }),

/***/ "./src/app/delivery/delivery-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/delivery/delivery-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DeliveryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryRoutingModule", function() { return DeliveryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _delivery_pg_delivery_pg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delivery-pg/delivery-pg.component */ "./src/app/delivery/delivery-pg/delivery-pg.component.ts");




const routes = [
    {
        path: "delivery",
        component: _delivery_pg_delivery_pg_component__WEBPACK_IMPORTED_MODULE_3__["DeliveryPgComponent"]
    }
];
let DeliveryRoutingModule = class DeliveryRoutingModule {
};
DeliveryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DeliveryRoutingModule);



/***/ }),

/***/ "./src/app/delivery/delivery.module.ts":
/*!*********************************************!*\
  !*** ./src/app/delivery/delivery.module.ts ***!
  \*********************************************/
/*! exports provided: DeliveryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryModule", function() { return DeliveryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _delivery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delivery-routing.module */ "./src/app/delivery/delivery-routing.module.ts");
/* harmony import */ var _delivery_pg_delivery_pg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery-pg/delivery-pg.component */ "./src/app/delivery/delivery-pg/delivery-pg.component.ts");







let DeliveryModule = class DeliveryModule {
};
DeliveryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_delivery_pg_delivery_pg_component__WEBPACK_IMPORTED_MODULE_6__["DeliveryPgComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _delivery_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeliveryRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__["OwlModule"],
        ]
    })
], DeliveryModule);



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



/***/ }),

/***/ "./src/app/shared/api-link.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/api-link.service.ts ***!
  \********************************************/
/*! exports provided: ApiLinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiLinkService", function() { return ApiLinkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ApiLinkService = class ApiLinkService {
    constructor() {
        //srvLink: string = "http://localhost:8080/";
        this.srvLink = "http://retail.mobinyx.com/";
        this.server = this.srvLink + "api/";
    }
};
ApiLinkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiLinkService);



/***/ })

}]);
//# sourceMappingURL=delivery-delivery-module-es2015.js.map