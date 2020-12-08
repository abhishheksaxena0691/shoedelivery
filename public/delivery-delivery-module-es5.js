function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-delivery-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/delivery/delivery-pg/delivery-pg.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delivery/delivery-pg/delivery-pg.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDeliveryDeliveryPgDeliveryPgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<section class=\"container py-4\">\n    <nav id=\"toggleMenu\" class=\"d-flex justify-content-between align-items-end\">\n        <a class=\"active\">Unpaid</a>\n        <a href=\"\">Paid</a>\n    </nav>\n    <a (click)=\"toggleFilter()\" class=\"filterNow\"><span class=\"filter\"></span> Filter</a>\n    <div class=\"p-4\" id=\"filterSec\" *ngIf=\"filter\">\n        <div class=\"\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngIf=\"monthData[0]\" (click)=\"filterMonthsWeek(0, monthData[0].list)\" [ngClass]=\"{'active': selectMonth === 0}\">\n                    <strong>Current Month</strong>\n                    <i class=\"currentMonth\"></i>\n                    Rs. {{monthData[0].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[1]\" (click)=\"filterMonthsWeek(1, monthData[1].list)\" [ngClass]=\"{'active': selectMonth === 1}\">\n                    <strong>Last 2 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[1].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[2]\" (click)=\"filterMonthsWeek(2, monthData[2].list)\" [ngClass]=\"{'active': selectMonth === 2}\">\n                    <strong>Last 3 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[2].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[3]\" (click)=\"filterMonthsWeek(3, monthData[3].list)\" [ngClass]=\"{'active': selectMonth === 3}\">\n                    <strong>Last 6 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[3].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[4]\" (click)=\"filterMonthsWeek(4, monthData[4].list)\" [ngClass]=\"{'active': selectMonth === 4}\">\n                    <strong>Last 9 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[4].price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n        <div class=\"\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"weekData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngFor=\"let wk of weekData; let i = index\" [ngClass]=\"{'active': selectWeek == i}\" (click)='sltWeek(i)'>\n                    <strong>Week {{i}}</strong>\n                    <i class=\"week\"></i>\n                    Rs. {{wk.price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n        <div class=\"\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"col3Data\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngFor=\"let cl3 of col3Data\" [ngClass]=\"{'active': selectSector === cl3.department}\" (click)=\"sltCustomer(cl3.department)\">\n                    <strong>{{cl3.department}}</strong>\n                    <i class=\"factory\"></i>\n                    Rs. {{cl3.price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n        <div class=\"overScroll\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"col4Data\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngFor=\"let c4th of col4Data\" [ngClass]=\"{'active': selectBrand === c4th.brand}\" (click)=\"sltBrand(c4th.brand)\">\n                    <strong>{{c4th.brand}}</strong>\n                    <i class=\"factory\"></i>\n                    Rs. {{c4th.price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n    </div>\n</section>\n\n<section class=\"container\">\n    <owl-carousel\n            [options]=\"cOptions\" [items]=\"deliveryList\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n        <fieldset *ngFor=\"let bImg of deliveryList; let i = index\">\n            <legend>{{bImg.billDetails.deportment}} {{bImg.billDetails.genDate | date: 'medium'}} {{bImg.billDetails.user}}</legend>\n            <section id=\"deliverySec\" class=\"container my-4\">\n                <div class=\"row p-4\">\n                    <div class=\"col-6\">\n                        <h3>From:</h3>\n                        <p>Warehouse location</p>\n                        <p><strong>Request ON:</strong> {{bImg.createdOn | date: 'medium'}}</p>\n                    </div>\n                    <div class=\"col-6\">\n                        <h3>To:</h3>\n                        <p>{{bImg.paidBy}} - {{bImg.usrNumber}}</p>\n                        <p>{{bImg.address}}</p>\n                    </div>\n                </div>\n            </section>\n            <div id=\"shipTrack\" class=\"py-5\">\n                <div class=\"d-flex justify-content-center align-items-center\">\n                    <i class=\"active\"></i>\n                    <span></span>\n                    <i></i>\n                    <span></span>\n                    <i></i>\n                    <span></span>\n                    <i></i>\n                </div>\n                <h3 class=\"text-center mt-4\">Order Initiated</h3>\n            </div>\n\n            <img [src]=\"serverPath+'/pdfBills/images/'+bImg.billDetails.billImg[0].name\" alt=\"{{bImg.billDetails.billImg[0].name}}\" (click)=\"showBill(i)\" />\n            <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\">\n                <form class=\"d-flex align-items-center justify-content-between ml-auto\">\n                    <input type=\"text\" placeholder=\"Rs.\" [value]=\"cleanPrice(bImg.billDetails.total)\" />\n                    <a href=\"\" class=\"btn\">Pay Online</a>\n                </form>    \n            </nav>\n        </fieldset>\n    </owl-carousel>\n</section>\n<app-side-bar></app-side-bar>";
    /***/
  },

  /***/
  "./src/app/delivery/delivery-pg/delivery-pg.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/delivery/delivery-pg/delivery-pg.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDeliveryDeliveryPgDeliveryPgComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div#filterSec {\n  background-color: #fff;\n  border-radius: 0 0 8px 8px;\n}\n\ndiv#filterSec h4 {\n  font-size: 15px;\n  font-weight: bold;\n  color: #aa0000;\n  margin: 20px 0 1px 0;\n}\n\ndiv.optionList {\n  margin: 5px 0;\n}\n\ndiv.optionList label {\n  width: 150px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  cursor: pointer;\n}\n\ndiv.optionList label input[type=radio] {\n  margin-right: 10px;\n}\n\nsection#deliverySec {\n  background-color: #ffffff;\n}\n\nsection#deliverySec h3 {\n  font-size: 22px;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\nsection#deliverySec p {\n  margin: 3px 0;\n}\n\ndiv#shipTrack i {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #E2E2E2;\n}\n\ndiv#shipTrack i.active {\n  background-color: #AA0000;\n}\n\ndiv#shipTrack span {\n  width: 130px;\n  border-top: #E2E2E2 solid 5px;\n}\n\ndiv#shipTrack h3 {\n  color: #aa0000;\n  font-size: 18px;\n}\n\nfieldset {\n  border-radius: 5px;\n  padding: 8px;\n  margin: 10px 0;\n}\n\nfieldset legend {\n  font-size: 15px;\n  color: #AA0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVsaXZlcnkvZGVsaXZlcnktcGcvQzpcXFVzZXJzXFxBYmhpc2hlay5TYXhlbmExXFxEZXNrdG9wXFxwcmFrYXNoXFxzaG9lZGVsaXZlcnlGcm9udEVuZC9zcmNcXGFwcFxcZGVsaXZlcnlcXGRlbGl2ZXJ5LXBnXFxkZWxpdmVyeS1wZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVsaXZlcnkvZGVsaXZlcnktcGcvZGVsaXZlcnktcGcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUF5QyxrQkFBQTtBQ0V6Qzs7QURBQTtFQUFzQix5QkFBQTtBQ0l0Qjs7QURGQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDS0o7O0FERkE7RUFDSSxhQUFBO0FDS0o7O0FERkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNLSjs7QURGQTtFQUF5Qix5QkFBQTtBQ016Qjs7QURKQTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtBQ09KOztBREpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNPSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNPSjs7QURKQTtFQUFrQixlQUFBO0VBQWlCLGNBQUE7QUNTbkMiLCJmaWxlIjoic3JjL2FwcC9kZWxpdmVyeS9kZWxpdmVyeS1wZy9kZWxpdmVyeS1wZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiNmaWx0ZXJTZWMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG59XG5cbmRpdiNmaWx0ZXJTZWMgaDQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmdiKDE3MCwwLDApO1xuICAgIG1hcmdpbjogMjBweCAwIDFweCAwO1xufVxuXG5kaXYub3B0aW9uTGlzdCB7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuZGl2Lm9wdGlvbkxpc3QgbGFiZWwge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2Lm9wdGlvbkxpc3QgbGFiZWwgaW5wdXRbdHlwZT1yYWRpb10geyBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyB7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBoMyB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBwIHtcbiAgICBtYXJnaW46IDNweCAwO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkUyRTI7XG59XG5cbmRpdiNzaGlwVHJhY2sgaS5hY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwOyB9XG5cbmRpdiNzaGlwVHJhY2sgc3BhbiB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGJvcmRlci10b3A6ICNFMkUyRTIgc29saWQgNXB4O1xufVxuXG5kaXYjc2hpcFRyYWNrIGgzIHtcbiAgICBjb2xvcjogI2FhMDAwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG5maWVsZHNldCBsZWdlbmQgeyBmb250LXNpemU6IDE1cHg7IGNvbG9yOiAjQUEwMDAwOyB9IiwiZGl2I2ZpbHRlclNlYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuXG5kaXYjZmlsdGVyU2VjIGg0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNhYTAwMDA7XG4gIG1hcmdpbjogMjBweCAwIDFweCAwO1xufVxuXG5kaXYub3B0aW9uTGlzdCB7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbmRpdi5vcHRpb25MaXN0IGxhYmVsIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2Lm9wdGlvbkxpc3QgbGFiZWwgaW5wdXRbdHlwZT1yYWRpb10ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbnNlY3Rpb24jZGVsaXZlcnlTZWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5zZWN0aW9uI2RlbGl2ZXJ5U2VjIGgzIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5zZWN0aW9uI2RlbGl2ZXJ5U2VjIHAge1xuICBtYXJnaW46IDNweCAwO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbn1cblxuZGl2I3NoaXBUcmFjayBzcGFuIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBib3JkZXItdG9wOiAjRTJFMkUyIHNvbGlkIDVweDtcbn1cblxuZGl2I3NoaXBUcmFjayBoMyB7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjQUEwMDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/delivery/delivery-pg/delivery-pg.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/delivery/delivery-pg/delivery-pg.component.ts ***!
    \***************************************************************/

  /*! exports provided: DeliveryPgComponent */

  /***/
  function srcAppDeliveryDeliveryPgDeliveryPgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliveryPgComponent", function () {
      return DeliveryPgComponent;
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


    var _delivery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../delivery.service */
    "./src/app/delivery/delivery.service.ts");
    /* harmony import */


    var _shared_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/filter.service */
    "./src/app/shared/filter.service.ts");

    ;
    ;

    var DeliveryPgComponent = /*#__PURE__*/function () {
      function DeliveryPgComponent(fetch, filterSrv) {
        _classCallCheck(this, DeliveryPgComponent);

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

      _createClass(DeliveryPgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getDelivery();
        }
      }, {
        key: "getDelivery",
        value: function getDelivery() {
          var _this = this;

          this.fetch.getAllDelivery().subscribe(function (res) {
            _this.deliveryList = res;

            if (_this.deliveryList) {
              _this.filterSrv.monthFilter.forEach(function (mth) {
                _this.monthData.push(_this.filterSrv.filterByBillDate(_this.deliveryList, _this.filterSrv.monthFilter[0], mth));
              });
            }
          }, function (err) {
            _this.pgMsg = {
              msg: err.error,
              alert: "alert-danger"
            };
          });
        }
      }, {
        key: "toggleFilter",
        value: function toggleFilter() {
          if (this.filter) this.filter = false;else this.filter = true;
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
          this.deliveryList = this.weekDataList = this.weekData[week].list;
          this.generateFilter(this.deliveryList);
        }
      }, {
        key: "sltCustomer",
        value: function sltCustomer(customer) {
          var _this2 = this;

          this.selectSector = customer; // if(this.selectSector === 'Payee')
          //   this.col4Data = this.listPayee;
          // if(this.selectSector === 'Sponsor')
          //   this.col4Data = this.listSponsor;

          this.deliveryList = this.sectorDataList = this.weekDataList.filter(function (e) {
            return e.billDetails.deportment.toLowerCase().includes(_this2.selectSector.toLowerCase());
          });
          this.generateBFilter(this.deliveryList);
        }
      }, {
        key: "sltBrand",
        value: function sltBrand(brand) {
          var _this3 = this;

          this.selectBrand = brand;
          this.deliveryList = this.sectorDataList.filter(function (e) {
            return e.billDetails.title.toLowerCase().includes(_this3.selectBrand.toLowerCase());
          });
        }
      }, {
        key: "generateFilter",
        value: function generateFilter(data) {
          var _this4 = this;

          this.selectSector = null;
          this.col3Data = [];
          this.selectBrand = null;
          this.col4Data = [];
          data.forEach(function (e) {
            var updateItem = _this4.col3Data.find(function (x) {
              return x.department === e.billDetails.deportment;
            });

            if (!updateItem) _this4.col3Data.push({
              department: e.billDetails.deportment,
              price: _this4.cleanPrice(e.billDetails.total),
              userType: "department"
            });else {
              var index = _this4.col3Data.indexOf(updateItem);

              _this4.col3Data[index].price = _this4.col3Data[index].price + _this4.cleanPrice(e.billDetails.total);
            }
          });
        }
      }, {
        key: "generateBFilter",
        value: function generateBFilter(data) {
          var _this5 = this;

          this.selectBrand = null;
          this.col4Data = [];
          data.forEach(function (e) {
            var updateItem = _this5.col4Data.find(function (x) {
              return x.brand === e.billDetails.title;
            });

            if (!updateItem) _this5.col4Data.push({
              brand: e.billDetails.title,
              price: _this5.cleanPrice(e.billDetails.total),
              userType: "brand"
            });else {
              var index = _this5.col4Data.indexOf(updateItem);

              _this5.col4Data[index].price = _this5.col4Data[index].price + _this5.cleanPrice(e.billDetails.total);
            }
          });
        }
      }, {
        key: "filterMonthsWeek",
        value: function filterMonthsWeek(month, data) {
          var _this6 = this;

          this.sltMonth(month);
          this.weekData = [];
          var weekList = this.filterSrv.weekCalculator(month, this.filterSrv.today.getMonth());
          weekList.forEach(function (e) {
            _this6.weekData.push(_this6.filterSrv.filterByBillDate(data, e.end.getTime(), e.start.getTime()));
          });
          this.deliveryList = this.monthData[month].list;
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
      }]);

      return DeliveryPgComponent;
    }();

    DeliveryPgComponent.ctorParameters = function () {
      return [{
        type: _delivery_service__WEBPACK_IMPORTED_MODULE_2__["DeliveryService"]
      }, {
        type: _shared_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"]
      }];
    };

    DeliveryPgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delivery-pg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delivery-pg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/delivery/delivery-pg/delivery-pg.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delivery-pg.component.scss */
      "./src/app/delivery/delivery-pg/delivery-pg.component.scss"))["default"]]
    })], DeliveryPgComponent);
    /***/
  },

  /***/
  "./src/app/delivery/delivery-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/delivery/delivery-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: DeliveryRoutingModule */

  /***/
  function srcAppDeliveryDeliveryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliveryRoutingModule", function () {
      return DeliveryRoutingModule;
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


    var _delivery_pg_delivery_pg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./delivery-pg/delivery-pg.component */
    "./src/app/delivery/delivery-pg/delivery-pg.component.ts");

    var routes = [{
      path: "delivery",
      component: _delivery_pg_delivery_pg_component__WEBPACK_IMPORTED_MODULE_3__["DeliveryPgComponent"]
    }];

    var DeliveryRoutingModule = function DeliveryRoutingModule() {
      _classCallCheck(this, DeliveryRoutingModule);
    };

    DeliveryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeliveryRoutingModule);
    /***/
  },

  /***/
  "./src/app/delivery/delivery.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/delivery/delivery.module.ts ***!
    \*********************************************/

  /*! exports provided: DeliveryModule */

  /***/
  function srcAppDeliveryDeliveryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliveryModule", function () {
      return DeliveryModule;
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


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _delivery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./delivery-routing.module */
    "./src/app/delivery/delivery-routing.module.ts");
    /* harmony import */


    var _delivery_pg_delivery_pg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./delivery-pg/delivery-pg.component */
    "./src/app/delivery/delivery-pg/delivery-pg.component.ts");

    var DeliveryModule = function DeliveryModule() {
      _classCallCheck(this, DeliveryModule);
    };

    DeliveryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_delivery_pg_delivery_pg_component__WEBPACK_IMPORTED_MODULE_6__["DeliveryPgComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _delivery_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeliveryRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__["OwlModule"]]
    })], DeliveryModule);
    /***/
  },

  /***/
  "./src/app/shared/api-link.service.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/api-link.service.ts ***!
    \********************************************/

  /*! exports provided: ApiLinkService */

  /***/
  function srcAppSharedApiLinkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiLinkService", function () {
      return ApiLinkService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ApiLinkService = function ApiLinkService() {
      _classCallCheck(this, ApiLinkService);

      //srvLink: string = "http://localhost:8080/";
      this.srvLink = "http://18.220.168.114:8080/"; //srvLink: string = "http://retail.mobinyx.com/";
      // srvLink: string = "http://35.154.98.22:8080/";
      //srvLink: string = "https://dealer.mobinyx.com/"

      this.server = this.srvLink + "api/";
    };

    ApiLinkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiLinkService);
    /***/
  }
}]);
//# sourceMappingURL=delivery-delivery-module-es5.js.map