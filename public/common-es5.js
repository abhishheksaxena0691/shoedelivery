function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
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
  },

  /***/
  "./src/app/shared/filter.service.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/filter.service.ts ***!
    \******************************************/

  /*! exports provided: FilterService */

  /***/
  function srcAppSharedFilterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterService", function () {
      return FilterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FilterService = /*#__PURE__*/function () {
      function FilterService() {
        _classCallCheck(this, FilterService);

        this.today = new Date();
        this.currentMonth = new Date();
        this.lastTwo = new Date();
        this.lastThree = new Date();
        this.lastSix = new Date();
        this.lastNine = new Date();
        this.e = this.currentMonth.setMonth(this.today.getMonth() - 1);
        this.a = this.lastTwo.setMonth(this.today.getMonth() - 2);
        this.b = this.lastThree.setMonth(this.today.getMonth() - 3);
        this.c = this.lastSix.setMonth(this.today.getMonth() - 6);
        this.d = this.lastNine.setMonth(this.today.getMonth() - 9);
        this.cOptions = {
          items: 1,
          dots: true,
          nav: true,
          lazyLoad: true,
          autoplay: false,
          loop: true,
          autoHeight: false
        };
        this.menuOptions = {
          dots: false,
          nav: false,
          lazyLoad: true,
          autoplay: false,
          loop: false,
          autoHeight: false,
          responsive: {
            0: {
              items: 3
            },
            600: {
              items: 4
            },
            1000: {
              items: 5
            }
          }
        };
        this.monthFilter = [this.currentMonth.getTime(), this.lastTwo.getTime(), this.lastThree.getTime(), this.lastSix.getTime(), this.lastNine.getTime()];
      }

      _createClass(FilterService, [{
        key: "weekCalculator",
        value: function weekCalculator(mCount, m) {
          var weeks = [];

          for (var i = mCount + 1; i >= 0; i--) {
            var thisMon = new Date();
            var a = thisMon.setMonth(m - i);
            var month = thisMon.getMonth();
            var year = thisMon.getFullYear();
            var daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var lastDate = new Date(year, month + 1, 0);
            var start = 0;
            var end = void 0;

            for (var _i = 1; _i < lastDate.getDate() + 1; _i++) {
              if (daysName[Number(new Date(year, month, _i).getDay())] == "Sunday" || _i == lastDate.getDate()) {
                end = _i;
                weeks.push({
                  start: new Date(year, month, start + 1),
                  end: new Date(year, month, end)
                });
                start = _i;
              }
            }
          }

          return weeks;
        }
      }, {
        key: "getWeeksStartAndEndInMonth",
        value: function getWeeksStartAndEndInMonth(month, year) {
          var weeks = [];
          month = month * 30 / 7;

          for (var i = 0; i < month; i++) {
            // Days you want to subtract
            var start = void 0;

            if (weeks.length === 0) {
              start = new Date();
            } else {
              start = new Date(weeks[weeks.length - 1].end);
            }

            var end = new Date(start.getTime() - 7 * 24 * 60 * 60 * 1000);
            weeks.push({
              start: start,
              end: end
            });
          }

          return weeks;
        }
      }, {
        key: "getDaysStartAndEndInMonth",
        value: function getDaysStartAndEndInMonth(day, year) {
          var days = [];
          day = day * 7;

          for (var i = 0; i < day; i++) {
            // Days you want to subtract
            var start = void 0;

            if (days.length === 0) {
              start = new Date();
            } else {
              start = new Date(days[days.length - 1].end);
            }

            var end = new Date(start.getTime() - 1 * 24 * 60 * 60 * 1000);
            days.push({
              start: start,
              end: end
            });
          }

          return days;
        }
      }, {
        key: "cleanPrice",
        value: function cleanPrice(amount) {
          return parseInt(amount.replace(/[^a-zA-Z0-9]/g, ''));
        }
      }, {
        key: "filterByDate",
        value: function filterByDate(billData, startDate, endDate) {
          var data = {
            list: [],
            price: 0
          };
          console.log(billData); //this.billList = this.billData.filter((bill: any) => new Date(bill.date).getTime() >= this.lastTwo.getTime() && new Date(bill.date).getTime() <= this.today.getTime());

          data.list = billData.filter(function (bill) {
            return new Date(bill.date).getTime() >= endDate && new Date(bill.date).getTime() <= startDate;
          }); //  console.log(data.list);

          if (data.list) {
            data.list.forEach(function (bill) {
              data.price += parseInt(bill.total.replace(/[^a-zA-Z0-9]/g, ''));
            });
            data.price = data.price / 100;
          }

          return data;
        }
      }, {
        key: "filterByDateCash",
        value: function filterByDateCash(billData, startDate, endDate) {
          // console.log(billData);
          var data = {
            list: [],
            price: 0
          }; //console.log(startDate);
          // console.log(endDate);
          //this.billList = this.billData.filter((bill: any) => new Date(bill.date).getTime() >= this.lastTwo.getTime() && new Date(bill.date).getTime() <= this.today.getTime());

          console.log(billData);
          data.list = billData.filter(function (bill) {
            return new Date(bill.billDetails.date).getTime() >= endDate && new Date(bill.billDetails.date).getTime() <= startDate;
          }); //console.log(data.list);

          if (data.list) {
            data.list.forEach(function (bill) {
              data.price += parseInt(bill.billDetails.total.replace(/[^a-zA-Z0-9]/g, ''));
            });
            data.price = data.price;
          }

          return data;
        }
      }, {
        key: "filterByBillDate",
        value: function filterByBillDate(billData, startDate, endDate) {
          var data = {
            list: [],
            price: 0
          }; // console.log(billData);
          //this.billList = this.billData.filter((bill: any) => new Date(bill.date).getTime() >= this.lastTwo.getTime() && new Date(bill.date).getTime() <= this.today.getTime());

          data.list = billData.filter(function (bill) {
            return new Date(bill.billDetails.date).getTime() >= endDate && new Date(bill.billDetails.date).getTime() <= startDate;
          });

          if (data.list) {
            data.list.forEach(function (bill) {
              console.log(bill.billDetails.total);
              data.price += parseInt(bill.billDetails.total.replace(/[^a-zA-Z0-9]/g, ''));
            });
            data.price = data.price;
          }

          return data;
        }
      }, {
        key: "filterByBillDatecash",
        value: function filterByBillDatecash(billData, startDate, endDate) {
          console.log(billData);
          var data = {
            list: [],
            price: 0
          };
          data.list = billData.filter(function (bill) {
            return new Date(bill.billDetails.date).getTime() >= startDate && new Date(bill.billDetails.date).getTime() <= endDate;
          });
          console.log(data.list);

          if (data.list) {
            data.list.forEach(function (bill) {
              data.price += parseInt(bill.billDetails.total.replace(/[^a-zA-Z0-9]/g, ''));
            });
            data.price = data.price;
          } // console.log(data);


          return data;
        }
      }]);

      return FilterService;
    }();

    FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FilterService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map