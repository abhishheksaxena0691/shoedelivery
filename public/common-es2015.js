(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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



/***/ }),

/***/ "./src/app/shared/filter.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/filter.service.ts ***!
  \******************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterService = class FilterService {
    constructor() {
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
    weekCalculator(mCount, m) {
        const weeks = [];
        for (let i = mCount + 1; i >= 0; i--) {
            let thisMon = new Date();
            let a = thisMon.setMonth(m - i);
            let month = thisMon.getMonth();
            let year = thisMon.getFullYear();
            const daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const lastDate = new Date(year, month + 1, 0);
            let start = 0;
            let end;
            for (let i = 1; i < lastDate.getDate() + 1; i++) {
                if (daysName[Number(new Date(year, month, i).getDay())] == "Sunday" || i == lastDate.getDate()) {
                    end = i;
                    weeks.push({
                        start: new Date(year, month, start + 1),
                        end: new Date(year, month, end)
                    });
                    start = i;
                }
            }
        }
        return weeks;
    }
    getWeeksStartAndEndInMonth(month, year) {
        let weeks = [];
        month = (month * 30) / 7;
        for (let i = 0; i < month; i++) {
            // Days you want to subtract
            let start;
            if (weeks.length === 0) {
                start = new Date();
            }
            else {
                start = new Date(weeks[weeks.length - 1].end);
            }
            var end = new Date(start.getTime() - (7 * 24 * 60 * 60 * 1000));
            weeks.push({ start: start, end: end });
        }
        return weeks;
    }
    getDaysStartAndEndInMonth(day, year) {
        let days = [];
        day = day * 7;
        for (let i = 0; i < day; i++) {
            // Days you want to subtract
            let start;
            if (days.length === 0) {
                start = new Date();
            }
            else {
                start = new Date(days[days.length - 1].end);
            }
            var end = new Date(start.getTime() - (1 * 24 * 60 * 60 * 1000));
            days.push({ start: start, end: end });
        }
        return days;
    }
    cleanPrice(amount) {
        return parseInt(amount.replace(/[^a-zA-Z0-9]/g, ''));
    }
    filterByDate(billData, startDate, endDate) {
        let data = { list: [], price: 0 };
        console.log(billData);
        //this.billList = this.billData.filter((bill: any) => new Date(bill.date).getTime() >= this.lastTwo.getTime() && new Date(bill.date).getTime() <= this.today.getTime());
        data.list = billData.filter((bill) => new Date(bill.date).getTime() >= endDate && new Date(bill.date).getTime() <= startDate);
        //  console.log(data.list);
        if (data.list) {
            data.list.forEach(bill => {
                data.price += parseInt(bill.total.replace(/[^a-zA-Z0-9]/g, ''));
            });
            data.price = data.price / 100;
        }
        return data;
    }
    filterByDateCash(billData, startDate, endDate) {
        // console.log(billData);
        let data = { list: [], price: 0 };
        //console.log(startDate);
        // console.log(endDate);
        //this.billList = this.billData.filter((bill: any) => new Date(bill.date).getTime() >= this.lastTwo.getTime() && new Date(bill.date).getTime() <= this.today.getTime());
        console.log(billData);
        data.list = billData.filter((bill) => new Date(bill.billDetails.date).getTime() >= endDate && new Date(bill.billDetails.date).getTime() <= startDate);
        //console.log(data.list);
        if (data.list) {
            data.list.forEach(bill => {
                data.price += parseInt(bill.billDetails.total.replace(/[^a-zA-Z0-9]/g, ''));
            });
            data.price = data.price;
        }
        return data;
    }
    filterByBillDate(billData, startDate, endDate) {
        let data = { list: [], price: 0 };
        // console.log(billData);
        //this.billList = this.billData.filter((bill: any) => new Date(bill.date).getTime() >= this.lastTwo.getTime() && new Date(bill.date).getTime() <= this.today.getTime());
        data.list = billData.filter((bill) => new Date(bill.billDetails.date).getTime() >= endDate && new Date(bill.billDetails.date).getTime() <= startDate);
        if (data.list) {
            data.list.forEach(bill => {
                console.log(bill.billDetails.total);
                data.price += parseInt(bill.billDetails.total.replace(/[^a-zA-Z0-9]/g, ''));
            });
            data.price = data.price;
        }
        return data;
    }
    filterByBillDatecash(billData, startDate, endDate) {
        console.log(billData);
        let data = { list: [], price: 0 };
        data.list = billData.filter((bill) => new Date(bill.billDetails.date).getTime() >= startDate && new Date(bill.billDetails.date).getTime() <= endDate);
        console.log(data.list);
        if (data.list) {
            data.list.forEach(bill => {
                data.price += parseInt(bill.billDetails.total.replace(/[^a-zA-Z0-9]/g, ''));
            });
            data.price = data.price;
        }
        // console.log(data);
        return data;
    }
};
FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FilterService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map