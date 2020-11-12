(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report-pg/report-pg.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report-pg/report-pg.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"container py-4\">\n    <nav id=\"toggleMenu\" class=\"d-flex justify-content-between align-items-end\">\n        <a class=\"active\">\n            Report Debit\n        </a>\n        <a href=\"\">Report Credit</a>\n    </nav>\n    <a (click)=\"toggleFilter()\" class=\"filterNow\"><span class=\"filter\"></span> Filter</a>\n    <div class=\"p-4\" id=\"filterSec\" *ngIf=\"filter\">\n        <div class=\"overScroll\">\n            <div class=\"optionList d-flex justify-content-between\">\n                <div>\n                    <strong>Current Month</strong>\n                    <i class=\"currentMonth\"></i>\n                    Rs. 370\n                </div>\n\n                <div>\n                    <strong>Last 2 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. 370\n                </div>\n\n                <div>\n                    <strong>Last 3 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. 370\n                </div>\n\n                <div>\n                    <strong>Last 6 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. 370\n                </div>\n\n                <div>\n                    <strong>Last 9 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. 370\n                </div>\n            </div>\n        </div>\n        <div class=\"overScroll\">\n            <div class=\"optionList d-flex justify-content-between\">\n                <div>\n                    <strong>Factory</strong>\n                    <i class=\"factory\"></i>\n                    Rs. 370\n                </div>\n                <div>\n                    <strong>Factory1</strong>\n                    <i class=\"factory\"></i>\n                    Rs. 370\n                </div>\n                <div>\n                    <strong>Factory2</strong>\n                    <i class=\"factory\"></i>\n                    Rs. 370\n                </div>\n                <div>\n                    <strong>Factory3</strong>\n                    <i class=\"factory\"></i>\n                    Rs. 370\n                </div>\n                <div>\n                    <strong>Factory4</strong>\n                    <i class=\"factory\"></i>\n                    Rs. 370\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"container\" id=\"toggleMenu\">\n    <aside class=\"p4\">\n        <a (click)=\"toggleLine()\">Line Chart</a>\n        <div class=\"text-center\" *ngIf=\"lineSec\">\n            <img src=\"/assets/images/line-chart.png\" alt=\"line chart\" />\n        </div>\n        <a (click)=\"togglePie()\">Pie Chart</a>\n        <div class=\"text-center\" *ngIf=\"pieSec\">\n            <img src=\"/assets/images/pie-chart.jpg\" alt=\"pie chart\" />\n        </div>\n        <a (click)=\"togglePurchase()\">Top 15 Item Purchase</a>\n        <div *ngIf=\"purchaseSec\">\n            <table>\n                <thead>\n                    <tr>\n                        <th>Bill Id</th>\n                        <th>Item</th>\n                        <th>Price</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>12345</td>\n                        <td>Leather Shoe</td>\n                        <td>Rs. 5000/-</td>\n                    </tr>\n                    <tr>\n                        <td>12345</td>\n                        <td>Leather Shoe</td>\n                        <td>Rs. 5000/-</td>\n                    </tr>\n                    <tr>\n                        <td>12345</td>\n                        <td>Leather Shoe</td>\n                        <td>Rs. 5000/-</td>\n                    </tr>\n                    <tr>\n                        <td>12345</td>\n                        <td>Leather Shoe</td>\n                        <td>Rs. 5000/-</td>\n                    </tr>\n                    <tr>\n                        <td>12345</td>\n                        <td>Leather Shoe</td>\n                        <td>Rs. 5000/-</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <a (click)=\"togglePrice()\">Top 15 Price</a>\n        <div *ngIf=\"priceSec\">\n            <table>\n                <thead>\n                    <tr>\n                        <th>Bill Id</th>\n                        <th>Item</th>\n                        <th>Price</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>12345</td>\n                        <td>Leather Shoe</td>\n                        <td>Rs. 5000/-</td>\n                    </tr>\n                    <tr>\n                        <td>12345</td>\n                        <td>Leather Shoe</td>\n                        <td>Rs. 5000/-</td>\n                    </tr>\n                    <tr>\n                        <td>12345</td>\n                        <td>Leather Shoe</td>\n                        <td>Rs. 5000/-</td>\n                    </tr>\n                    <tr>\n                        <td>12345</td>\n                        <td>Leather Shoe</td>\n                        <td>Rs. 5000/-</td>\n                    </tr>\n                    <tr>\n                        <td>12345</td>\n                        <td>Leather Shoe</td>\n                        <td>Rs. 5000/-</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </aside>\n</section>\n\n\n\n<app-side-bar></app-side-bar>");

/***/ }),

/***/ "./src/app/report/report-pg/report-pg.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/report/report-pg/report-pg.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section#toggleMenu a {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background-color: #aa0000;\n  color: #ffffff;\n  padding: 5px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nsection#toggleMenu a::after {\n  position: absolute;\n  content: \"\";\n  right: 10px;\n  top: 10px;\n  width: 15px;\n  height: 15px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/icons/down-arrow.svg\");\n}\n\nsection#toggleMenu div {\n  background-color: #ffffff;\n  border-radius: 5px;\n  padding: 8px;\n}\n\nsection#toggleMenu div img {\n  max-width: 100%;\n}\n\nsection#toggleMenu div table {\n  width: 100%;\n  text-align: center;\n}\n\nsection#toggleMenu div table td {\n  padding: 5px 0;\n  border-top: #ccc solid thin;\n  border-bottom: #ccc solid thin;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0L3JlcG9ydC1wZy9DOlxcVXNlcnNcXEFiaGlzaGVrLlNheGVuYTFcXERlc2t0b3BcXHByYWthc2hcXHNob2VkZWxpdmVyeUZyb250RW5kL3NyY1xcYXBwXFxyZXBvcnRcXHJlcG9ydC1wZ1xccmVwb3J0LXBnLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXBvcnQvcmVwb3J0LXBnL3JlcG9ydC1wZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EscURBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFBNkIsZUFBQTtBQ0M3Qjs7QURFQTtFQUErQixXQUFBO0VBQWEsa0JBQUE7QUNHNUM7O0FEREE7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvcmVwb3J0L3JlcG9ydC1wZy9yZXBvcnQtcGcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnNlY3Rpb24jdG9nZ2xlTWVudSBhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsMCwwKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWN0aW9uI3RvZ2dsZU1lbnUgYTo6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiAnJztcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zL2Rvd24tYXJyb3cuc3ZnJyk7XG59XG5cbnNlY3Rpb24jdG9nZ2xlTWVudSBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuc2VjdGlvbiN0b2dnbGVNZW51IGRpdiBpbWcgeyBtYXgtd2lkdGg6IDEwMCU7IH1cblxuXG5zZWN0aW9uI3RvZ2dsZU1lbnUgZGl2IHRhYmxlIHsgd2lkdGg6IDEwMCU7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG5zZWN0aW9uI3RvZ2dsZU1lbnUgZGl2IHRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgICBib3JkZXItdG9wOiAjY2NjIHNvbGlkIHRoaW47XG4gICAgYm9yZGVyLWJvdHRvbTogI2NjYyBzb2xpZCB0aGluO1xufSIsInNlY3Rpb24jdG9nZ2xlTWVudSBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNlY3Rpb24jdG9nZ2xlTWVudSBhOjphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb25zL2Rvd24tYXJyb3cuc3ZnXCIpO1xufVxuXG5zZWN0aW9uI3RvZ2dsZU1lbnUgZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbnNlY3Rpb24jdG9nZ2xlTWVudSBkaXYgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5zZWN0aW9uI3RvZ2dsZU1lbnUgZGl2IHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuc2VjdGlvbiN0b2dnbGVNZW51IGRpdiB0YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3JkZXItdG9wOiAjY2NjIHNvbGlkIHRoaW47XG4gIGJvcmRlci1ib3R0b206ICNjY2Mgc29saWQgdGhpbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/report/report-pg/report-pg.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/report/report-pg/report-pg.component.ts ***!
  \*********************************************************/
/*! exports provided: ReportPgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPgComponent", function() { return ReportPgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReportPgComponent = class ReportPgComponent {
    constructor() {
        this.filter = true;
        this.lineSec = true;
        this.pieSec = false;
        this.purchaseSec = false;
        this.priceSec = false;
    }
    ngOnInit() {
    }
    toggleFilter() {
        if (this.filter)
            this.filter = false;
        else
            this.filter = true;
    }
    toggleLine() {
        if (this.lineSec)
            this.lineSec = false;
        else
            this.lineSec = true;
    }
    togglePie() {
        if (this.pieSec)
            this.pieSec = false;
        else
            this.pieSec = true;
    }
    togglePurchase() {
        if (this.purchaseSec)
            this.purchaseSec = false;
        else
            this.purchaseSec = true;
    }
    togglePrice() {
        if (this.priceSec)
            this.priceSec = false;
        else
            this.priceSec = true;
    }
};
ReportPgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report-pg',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./report-pg.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/report/report-pg/report-pg.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./report-pg.component.scss */ "./src/app/report/report-pg/report-pg.component.scss")).default]
    })
], ReportPgComponent);



/***/ }),

/***/ "./src/app/report/report-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/report/report-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function() { return ReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _report_pg_report_pg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-pg/report-pg.component */ "./src/app/report/report-pg/report-pg.component.ts");




const routes = [
    {
        path: "report",
        component: _report_pg_report_pg_component__WEBPACK_IMPORTED_MODULE_3__["ReportPgComponent"]
    }
];
let ReportRoutingModule = class ReportRoutingModule {
};
ReportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ReportRoutingModule);



/***/ }),

/***/ "./src/app/report/report.module.ts":
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/report/report-routing.module.ts");
/* harmony import */ var _report_pg_report_pg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-pg/report-pg.component */ "./src/app/report/report-pg/report-pg.component.ts");






let ReportModule = class ReportModule {
};
ReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_report_pg_report_pg_component__WEBPACK_IMPORTED_MODULE_5__["ReportPgComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _report_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReportRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]
    })
], ReportModule);



/***/ })

}]);
//# sourceMappingURL=report-report-module-es2015.js.map