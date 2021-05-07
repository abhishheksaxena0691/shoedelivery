function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~dealer-app-dealer-app-module~delivery-delivery-module~profile-pro~9910a3ab"], {
  /***/
  "./node_modules/ngx-owl-carousel/index.js":
  /*!************************************************!*\
    !*** ./node_modules/ngx-owl-carousel/index.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNgxOwlCarouselIndexJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    function __export(m) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var common_1 = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var owl_carousel_component_1 = __webpack_require__(
    /*! ./src/owl-carousel.component */
    "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js");

    var owl_child_component_1 = __webpack_require__(
    /*! ./src/owl-child.component */
    "./node_modules/ngx-owl-carousel/src/owl-child.component.js");

    __export(__webpack_require__(
    /*! ./src/owl-carousel.component */
    "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js"));

    var OwlModule = function () {
      function OwlModule() {}

      OwlModule = __decorate([core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [owl_carousel_component_1.OwlCarousel, owl_child_component_1.OwlChild],
        exports: [owl_carousel_component_1.OwlCarousel]
      }), __metadata('design:paramtypes', [])], OwlModule);
      return OwlModule;
    }();

    exports.OwlModule = OwlModule; //# sourceMappingURL=index.js.map

    /***/
  },

  /***/
  "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/ngx-owl-carousel/src/owl-carousel.component.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNgxOwlCarouselSrcOwlCarouselComponentJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var owl_child_component_1 = __webpack_require__(
    /*! ./owl-child.component */
    "./node_modules/ngx-owl-carousel/src/owl-child.component.js");

    var OwlCarousel = function () {
      function OwlCarousel(differs) {
        this.differs = differs;
        this.carouselClasses = '';
        this.options = {};
      }

      Object.defineProperty(OwlCarousel.prototype, "items", {
        set: function set(coll) {
          this._items = coll;

          if (coll && !this.differ) {
            this.differ = this.differs.find(coll).create(null);
          }
        },
        enumerable: true,
        configurable: true
      });

      OwlCarousel.prototype.ngDoCheck = function () {
        if (this.differ) {
          var changes = this.differ.diff(this._items);

          if (changes) {
            var changed_1 = false;

            var changedFn = function changedFn() {
              changed_1 = true;
            };

            changes.forEachAddedItem(changedFn);
            changes.forEachMovedItem(changedFn);
            changes.forEachRemovedItem(changedFn);

            if (changed_1) {
              this.reInit();
            }
          }
        }
      };

      OwlCarousel.prototype.reInit = function () {
        var _this = this;

        if (this.$owlChild.$owl) {
          this.$owlChild.$owl.css('display', 'none');
        }

        setTimeout(function () {
          _this.$owlChild.destroyOwl();

          if (_this.$owlChild.$owl) {
            var itemLength = _this._items && _this._items.length;

            if (itemLength && itemLength <= _this.$owlChild.currentSlideIndex) {
              _this.$owlChild.currentSlideIndex = itemLength;
            }

            _this.$owlChild.$owl.css('display', 'block');
          }

          _this.$owlChild.initOwl();
        }, 0);
      };

      OwlCarousel.prototype.refresh = function () {
        this.trigger('refresh.owl.carousel');
      };

      OwlCarousel.prototype.next = function (options) {
        this.trigger('next.owl.carousel', options);
      };

      OwlCarousel.prototype.previous = function (options) {
        this.trigger('prev.owl.carousel', options);
      };

      OwlCarousel.prototype.to = function (options) {
        this.trigger('to.owl.carousel', options);
      };

      OwlCarousel.prototype.trigger = function (action, options) {
        this.$owlChild.trigger(action, options);
      };

      __decorate([core_1.ViewChild('owl'), __metadata('design:type', owl_child_component_1.OwlChild)], OwlCarousel.prototype, "$owlChild", void 0);

      __decorate([core_1.Input(), __metadata('design:type', Object)], OwlCarousel.prototype, "carouselClasses", void 0);

      __decorate([core_1.Input(), __metadata('design:type', Object)], OwlCarousel.prototype, "options", void 0);

      __decorate([core_1.Input(), __metadata('design:type', Array), __metadata('design:paramtypes', [Array])], OwlCarousel.prototype, "items", null);

      OwlCarousel = __decorate([core_1.Component({
        selector: 'owl-carousel',
        template: '<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" >' + '<ng-content></ng-content></owl-carousel-child>'
      }), __metadata('design:paramtypes', [core_1.IterableDiffers])], OwlCarousel);
      return OwlCarousel;
    }();

    exports.OwlCarousel = OwlCarousel; //# sourceMappingURL=owl-carousel.component.js.map

    /***/
  },

  /***/
  "./node_modules/ngx-owl-carousel/src/owl-child.component.js":
  /*!******************************************************************!*\
    !*** ./node_modules/ngx-owl-carousel/src/owl-child.component.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesNgxOwlCarouselSrcOwlChildComponentJs(module, exports, __webpack_require__) {
    "use strict";

    var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = this && this.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var core_1 = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OwlChild = function () {
      function OwlChild(el) {
        this.el = el;
        this.owlClass = true;
        this.options = {};

        if (typeof $ === 'undefined' && typeof jQuery !== 'undefined') {
          $ = jQuery;
        }
      }

      OwlChild.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined' && $ && typeof $.fn.owlCarousel === 'function') {
          this.$owl = $(this.el.nativeElement);
        }
      };

      OwlChild.prototype.ngAfterViewInit = function () {
        this.initOwl();
      };

      OwlChild.prototype.initOwl = function () {
        var _this = this;

        if (this.$owl) {
          var options = {};
          Object.assign(options, this.options);

          if (this.currentSlideIndex) {
            options.startPosition = this.currentSlideIndex;
          }

          this.$owl.owlCarousel(options);
          this.$owl.on('changed.owl.carousel', function (event) {
            _this.currentSlideIndex = event.item.index;
          });
        }
      };

      OwlChild.prototype.trigger = function (action, options) {
        if (this.$owl) {
          this.$owl.trigger(action, options);
        }
      };

      OwlChild.prototype.ngOnDestroy = function () {
        this.destroyOwl();
        delete this.$owl;
      };

      OwlChild.prototype.destroyOwl = function () {
        if (this.$owl) {
          this.$owl.trigger('destroy.owl.carousel').removeClass('owl-loaded owl-hidden').find('.owl-stage:empty, .owl-item:empty').remove();
        }
      };

      __decorate([core_1.HostBinding('class.owl-carousel'), __metadata('design:type', Object)], OwlChild.prototype, "owlClass", void 0);

      __decorate([core_1.Input(), __metadata('design:type', Object)], OwlChild.prototype, "options", void 0);

      OwlChild = __decorate([core_1.Component({
        selector: 'owl-carousel-child',
        template: '<ng-content></ng-content>'
      }), __metadata('design:paramtypes', [core_1.ElementRef])], OwlChild);
      return OwlChild;
    }();

    exports.OwlChild = OwlChild; //# sourceMappingURL=owl-child.component.js.map

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
          if (isNaN(amount)) {
            return parseInt(amount.replace(/[^a-zA-Z0-9]/g, ''));
          } else {
            return parseInt(amount);
          }
        }
      }, {
        key: "filterByDate",
        value: function filterByDate(billData, startDate, endDate) {
          var data = {
            list: [],
            price: 0
          }; //this.billList = this.billData.filter((bill: any) => new Date(bill.date).getTime() >= this.lastTwo.getTime() && new Date(bill.date).getTime() <= this.today.getTime());

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
//# sourceMappingURL=default~dashboard-dashboard-module~dealer-app-dealer-app-module~delivery-delivery-module~profile-pro~9910a3ab-es5.js.map