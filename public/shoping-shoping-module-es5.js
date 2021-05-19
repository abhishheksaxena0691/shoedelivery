function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shoping-shoping-module"], {
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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shoping/addproduct/addproduct.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shoping/addproduct/addproduct.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopingAddproductAddproductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"page-header\">\n    <div class=\"row\">\n          <div class=\"col-12 mt-2 mb-2\">\n            <span style=\"float: right;\"><button type=\"button\" class=\"btn btn-danger ml-2\" (click)=\"myproduct(true)\">Add Product</button></span>\n            <span style=\"float: right;\"><button type=\"button\" class=\"btn btn-danger ml-2\" (click)=\"myproduct(false)\">Listing</button></span>\n            <span style=\"float: right;\"><button type=\"button\" class=\"btn btn-danger\" (click)=\"myorders()\">My Orders</button></span>\n          </div>\n      </div>\n  </div>\n    <ng-template [ngIf]= \"!myOrderStatus\" [ngIfElse]=\"myOrderStatus1\">\n          <ng-template [ngIf]= \"addClassifiedTemplate\" [ngIfElse]=\"classifiedListing\">\n            <div class=\"container\" style=\"background-color: #fff;\">\n                  <form [formGroup]=\"classifiedForm\" class=\"form-horizontal\">\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                          <div class=\"form-group\">\n                            <label for=\"memberId\" class=\"control-label\">Item name</label>\n                            <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"memberId\"/>\n\n                          </div>\n                          <div class=\"form-group\">\n                            <input class=\"form-check-input com ml-2\" type=\"checkbox\" (change)=\"addToTopOffer($event.target.checked)\" [checked]=\"classifiedForm.value.category == 'category1'\"   name=\"committee\"/>\n                            <label class=\"form-check-label ml-4\">\n                               Make Top offer\n                            </label>\n                        </div>\n                          <div class=\"form-group\"  *ngIf=\"classifiedForm.value.category != 'category1'\">\n                              <label for=\"categoryId\" class=\"control-label\">Category</label>\n                              <select class=\"form-control\"   formControlName=\"category\" id=\"categoryId\" (change)=\"selectCategory($event.target.value)\">\n                                <option value=\"\" >Select</option>\n                                <!-- <option value=\"category1\"> Top Offer</option> -->\n                                <option value=\"category2\">Grocery</option>\n                                <option value=\"category3\">Mobiles </option>\n                                <option value=\"category4\">Fashion</option>\n                                <option value=\"category5\">Electronics</option>\n                                <option value=\"category6\">Home</option>\n                                <option value=\"category7\">Applicances</option>\n                                <option value=\"category8\">Beauty & Toys </option>\n                                <option value=\"category9\">Fruits and vegetable </option>\n                              </select>\n                          </div>\n\n                          <div class=\"form-group\" *ngIf=\"classifiedForm.value.category != 'category1'\">\n                            <label for=\"categoryId\" class=\"control-label\">Sub Category</label>\n                            <select class=\"form-control\"   formControlName=\"subcategory\" id=\"categoryId\">\n                              <option value=\"\" >Select</option>\n                              <option *ngFor=\"let obj of subCategoryClassifiedList[setClassified]\" [value]=\"obj.type\">{{obj.name}}</option>\n                            </select>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"categoryId\" class=\"control-label\">Brand</label>\n                            <input type=\"text\" formControlName=\"brand\" class=\"form-control\" id=\"brandId\"/>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"priceId\" class=\"control-label\">Price</label>\n                            <input type=\"number\" formControlName=\"price\" class=\"form-control\" id=\"priceId\"/>\n                          </div>\n\n                          <div class=\"form-group\">\n                            <label for=\"descriptionId\" class=\"control-label\">Description</label>\n                            <angular-editor [placeholder]=\"'Enter text here...'\" formControlName=\"description\"  [config]=\"editorConfig\"></angular-editor>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"quantityId\" class=\"control-label\">Quantity</label>\n                            <input type=\"text\" formControlName=\"quantity\" class=\"form-control\" id=\"quantityId\"/>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"quantityId\" class=\"control-label\">Key Features one</label>\n                            <input type=\"text\" formControlName=\"keyFeatureOne\" class=\"form-control\" id=\"quantityId\"/>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"quantityId\" class=\"control-label\">Key Features two</label>\n                            <input type=\"text\" formControlName=\"keyFeatureTwo\" class=\"form-control\" id=\"quantityId\"/>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"quantityId\" class=\"control-label\">Key Features three</label>\n                            <input type=\"text\" formControlName=\"keyFeatureThree\" class=\"form-control\" id=\"quantityId\"/>\n                          </div>\n\n\n                        </div>\n                  </div>\n                    <div class=\"row\">\n                          <div class=\"col-12 form-group\">\n                            <label for=\"file-upload\" class=\"custom-file-upload caption\"> Add Image </label>\n                            <input id=\"file-upload\" type=\"file\" (change)=\"uploadClassifiedattachment($event)\" accept=\"image/x-png, image/jpeg\"/>\n                          </div>\n                          <span style=\"color: #aa0000;\" *ngIf=\"imgURL == 0\">At least one image is required</span>\n                      </div>\n                      <div class=\"row\"  *ngIf=\"uploadedVideo == ''\">\n                        <div class=\"col-12 form-group\">\n                          <label for=\"file-upload1\" class=\"custom-file-upload caption\"> Add Video </label>\n                          <input id=\"file-upload1\" type=\"file\" (change)=\"uploadClassifiedVideo($event, uploadingFolder)\" accept=\"video/mp4\"/>\n                        </div>\n                      </div>\n                      <div class=\"row\" *ngIf=\"!editProductStatus\">\n                          <div class=\"col-12 form-group\">\n\n                            <ul class=\"nav mt-2\">\n                              <ng-container  *ngFor=\"let item of imgURL; index as i\">\n                                <li class=\"ml-2\">\n                                  <div style=\"position:relative;\">\n                                    <button type=\"submit\" class=\"close AClass\"  (click)=\"removeClassified(i)\">\n                                      <span>&times;</span>\n                                    </button>\n\n                                    <img [src]=\"item\" height=\"200\" width=\"200\"/>\n                                </div>\n                                </li>\n\n                              </ng-container>\n                            </ul>\n                          </div>\n                      </div>\n                      <div class=\"row\" *ngIf=\"editProductStatus\">\n                        <div class=\"col-12 form-group\">\n\n                          <ul class=\"nav mt-2\">\n                            <ng-container  *ngFor=\"let item of imgURL; index as i\">\n                              <li class=\"ml-2\" *ngIf=\"item.extension != 'mp4'\">\n                                <div style=\"position:relative;\">\n                                  <button type=\"submit\" class=\"close AClass\"  (click)=\"removeClassified(i)\">\n                                    <span>&times;</span>\n                                  </button>\n\n                                  <img *ngIf=\"item.name == undefined\" [src]=\"item\" height=\"200\" width=\"200\"/>\n                                  <img *ngIf=\"item.name != undefined\" [src]=\"api.delear+ 'uploads/comunication/'+ item.name\" height=\"200\" width=\"200\"/>\n                              </div>\n                              </li>\n\n                            </ng-container>\n                          </ul>\n\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-12 form-group\" *ngIf=\"uploadedVideo != ''\">\n                        <img src=\"../../../assets/images/videoThumbnail.jpg\" (click)=\"openVideo(playVideo, {'name': uploadedVideo})\" height=\"80px\" width=\"80px\"/>\n                        {{uploadedVideo}} <span class=\"close\"    (click)=\"removeVideo(i)\">&times;</span>\n                      </div>\n                        <div class=\"col-12 mt-2\">\n                          <div class=\"form-group\">\n\n                            <button type=\"button\"  *ngIf=\"!editProductStatus\" class=\"btn setColor mb-2\" [disabled]=\"(!classifiedForm.valid || imgURL.length == 0)\" (click)=\"addProduct(uploadingFolder)\">Submit</button>\n                            <button type=\"button\"  *ngIf=\"editProductStatus\" class=\"btn setColor mb-2\" [disabled]=\"(!classifiedForm.valid || imgURL.length == 0)\" (click)=\"addProduct(uploadingFolder)\">Submit</button>\n                          </div>\n                        </div>\n                    </div>\n\n                    </form>\n                </div>\n          </ng-template>\n          <ng-template #classifiedListing>\n            <ng-template [ngIf]= \"detailClassifiedStatus\" [ngIfElse]=\"productdetailsSection\">\n              <ul class=\"nav nav-tabs mt-2\" style=\"background-color: #fff;\">\n                <li class=\"nav-item active\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category1'}\"  (click)=\"setFirstCategory('category1','subCategorytype11');\">\n                  <a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category1'}\" data-toggle=\"tab\">\n                    <figure>\n                        <img src=\"../../../assets/images/BestOffericon.png\" alt=\"Trulli\" class=\"menuImage\">\n                        <figcaption>Top Offer</figcaption>\n                    </figure>\n                  </a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category2'}\" (click)=\"setFirstCategory('category2','subCategorytype21');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category2'}\" data-toggle=\"tab\">\n\n                  <figure>\n                    <img src=\"../../../assets/images/grocery.png\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Grocery</figcaption>\n                </figure>\n                  </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category3'}\"   (click)=\"setFirstCategory('category3','subCategorytype31');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category3'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/mobile.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Mobiles</figcaption>\n                </figure>\n                   </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category4'}\"  (click)=\"setFirstCategory('category4','subCategorytype41');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category4'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/fashionImages.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Fashion</figcaption>\n                </figure>\n                   </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category5'}\"  (click)=\"setFirstCategory('category5','subCategorytype51');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category5'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/electronics.png\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Electronics</figcaption>\n                </figure>\n                  </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category6'}\" (click)=\"setFirstCategory('category6','subCategorytype61');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category6'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/home.png\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Home</figcaption>\n                </figure>\n                  </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category7'}\"   (click)=\"setFirstCategory('category7','subCategorytype71');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category7'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/appliances.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Applicances</figcaption>\n                </figure>\n                  </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category8'}\"  (click)=\"setFirstCategory('category8','subCategorytype81');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category8'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/Beautyandpersonalcare.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Beauty & Toys</figcaption>\n                </figure>\n                    </a></li>\n                    <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category9'}\"  (click)=\"setFirstCategory('category9','subCategorytype91');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category9'}\" data-toggle=\"tab\">\n                      <figure>\n                        <img src=\"../../../assets/images/fruitvegetable.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                        <figcaption>Vegetable & Fruits</figcaption>\n                  </figure>\n                    </a></li>\n\n              </ul>\n              <div class=\"tab-content\" style=\"background-color: #fff;\">\n                <div id=\"home\" class=\"tab-pane fade in active show text-left\">\n                  Sub Menu\n                    <ul class=\"navsumenu nav-tabs submenu\">\n                      <li class=\"nav-item\" *ngFor=\"let item of subCategoryClassifiedList[setClassified]; index as i;\" [ngClass]=\"{'forumTabActiveli': subCategoryClassified == 'subCategorytype11'}\" >\n                            <a class=\"nav-link\" (click)=\"setSecondCategory(setClassified, item.type)\" [ngClass]=\"{'forumTabActive': subCategoryClassified == 'subCategorytype11'}\" data-toggle=\"tab\">\n                                <figure>\n                                  <img src=\"../../../assets/images/{{item.images}}\" alt=\"Trulli\" class=\"submenuImage\">\n                                  <figcaption class=\"figcaption1\">{{item.name}}</figcaption>\n                                </figure>\n                              </a>\n                      </li>\n                    </ul>\n                </div>\n            </div>\n              <ng-template [ngIf]=\"loadingTrue\" [ngIfElse]=\"realList\">\n                <div class=\"wrapper1\">\n                  <div class=\"row\">\n                    <div class=\"col-4\">\n                  <div class=\"card-loader1 card-loader--tabs\"></div>\n                </div>\n                <div class=\"col-4\">\n                  <div class=\"card-loader1 card-loader--tabs\"></div>\n                  </div>\n                  <div class=\"col-4\">\n                  <div class=\"card-loader1 card-loader--tabs\"></div>\n                  </div>\n                </div>\n                </div>\n              </ng-template>\n              <ng-template #realList>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-12\" *ngFor=\"let item of allProduct; index as i;\">\n                  <div class=\"container1\">\n                    <div class=\"card\">\n                      <div class=\"card-head\">\n                        <img [src]=\"api.delear+'uploads/comunication/medium/'+item.doc.fileName[0].name\" alt=\"logo\" class=\"card-logo\">\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"product-desc\">\n                          <span class=\"product-title\">\n                                {{item.doc.name}}\n                                  <span class=\"badge\">\n                                    &#x20B9;<b>{{item.doc.price}}</b>\n\n                                  </span>\n                                  <div class=\"popover__wrapper\" *ngIf=\"item.listPrice.length > 1\">\n                                    <a> <h2 class=\"popover__title\">see other offers</h2> </a>\n                                    <div class=\"popover__content\">\n                                      <p class=\"popover__message\" *ngFor=\"let priceList of item.listPrice\">\n                                        &#x20B9; {{priceList.price}} by {{priceList.ownerName}}\n                                      </p>\n                                    </div>\n                                  </div>\n\n                          </span>\n                          <span class=\"product-caption\">\n                                Brand: <b> {{item.doc.brand}}</b>\n                                </span>\n                            <span class=\"product-rating\">\n                              <div class=\"star-rating\" (click)=\"showRatingPercentage(Rating,item.doc.comment)\">\n                                  <div class=\"back-stars\">\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\n                                      <div class=\"front-stars\" [style.width.%]=\"((item.averageRating/5)*100)\">\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      </div>\n                                  </div>\n                              </div>\n                            </span>\n                        </div>\n                        <div class=\"product-properties\">\n                          <span class=\"product-size\">\n                                  <span class=\"cardDiv product-caption\">\n                                  {{item?.doc.keyFeatureOne}}\n                                  </span>\n                                  <span class=\"cardDiv product-caption\">\n                                    {{item?.doc.keyFeatureTwo}}\n                                  </span>\n                                  <span class=\"cardDiv product-caption\">\n                                    {{item?.doc.keyFeatureThree}}\n                                  </span>\n                                </span>\n\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-4\">\n                            <span class=\"setColor mt-2 ml-3 float-right btn\" (click)=\"deleteProduct(item._id,i)\">\n                              Delete\n                            </span>\n\n                            </div>\n                            <div class=\"col-4\">\n                              <span class=\"setColor mt-2 float-right btn\" (click)=\"detailProduct(item)\">\n                                Detail\n                              </span>\n                            </div>\n                            <div class=\"col-4\">\n                              <span class=\"setColor mt-2 float-right btn\" (click)=\"editProduct(item)\">\n                                    Edit\n                                    </span>\n                                    </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"col-4\"></div>\n                <div class=\"col-4\"></div>\n\n              </div>\n              </ng-template>\n              </ng-template>\n\n              <ng-template #productdetailsSection>\n                <div class=\"container\">\n                  <div class=\"cardDetails\">\n                    <div class=\"container-fliud\">\n                      <div class=\"wrapper row\">\n                        <div class=\"preview col-md-12\">\n\n                          <div class=\"preview-pic tab-content\">\n                            <ng-container  *ngFor=\"let item of detailedImages; index as i\">\n                                <div [ngClass]=\"{'active': i == setCurrentIndexImage}\" class=\"tab-pane\" id=\"pic-1\" *ngIf=\"item.extension != 'mp4'\">\n                                  <img  [src]=\"api.delear+ 'uploads/comunication/'+ item.name\" />\n                                </div>\n                                <div [ngClass]=\"{'active': i == setCurrentIndexImage}\" class=\"tab-pane\" id=\"pic-1\" *ngIf=\"item.extension == 'mp4'\">\n                                      <video width=\"420\" height=\"240\" controls>\n                                        <source  [src]=\"api.delear+ 'uploads/comunication/'+ item.name\" type=\"video/mp4\"/>\n\n                                      </video>\n                                </div>\n                          </ng-container>\n                          </div>\n                          <ul class=\"preview-thumbnail nav nav-tabs\">\n                            <ng-container  *ngFor=\"let item of detailedImages; index as i\">\n                            <li [ngClass]=\"{'active': i == setCurrentIndexImage}\"  *ngIf=\"item.extension != 'mp4'\" (click)=\"setCurrentImage(i)\" ><a data-target=\"#pic-1\" data-toggle=\"tab\" >\n                              <img  [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.name\" /></a>\n                              </li>\n                              <li [ngClass]=\"{'active': i == setCurrentIndexImage}\"  *ngIf=\"item.extension == 'mp4'\" (click)=\"setCurrentImage(i)\" ><a data-target=\"#pic-1\" data-toggle=\"tab\" >\n                                <img  src=\"../../../assets/images/videoThumbnail.jpg\" height=\"177\"/></a>\n                              </li>\n                            </ng-container>\n                          </ul>\n\n                        </div>\n                        <div class=\"details col-md-12\">\n                          <h3 class=\"product-title\">{{detailPageData.doc.name}}</h3>\n                          <div class=\"rating\">\n                            <span class=\"product-rating\">\n                                  <div class=\"star-rating\" (click)=\"showRatingPercentage(Rating,detailPageData.doc.comment)\">\n                                    <div class=\"back-stars\">\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <div class=\"front-stars\" [style.width.%]=\"ratingPercentage\">\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                              </span>\n                          </div>\n                          <div class=\"rating mt-2\">  <span class=\"review-no\">{{detailPageData.doc?.comment.length}} reviews</span></div>\n                          <h4 class=\"price mt-2\">price: <span>&#x20B9; {{detailPageData.doc.price}}</span></h4>\n                          <div class=\"product-properties\">\n                            <span class=\"product-size\">\n                                    <span class=\"cardDiv product-caption mt-2\" *ngIf=\"detailPageData?.doc.keyFeatureOne != undefined\">\n                                      <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg> {{detailPageData?.doc.keyFeatureOne}}\n                                    </span>\n                                    <span class=\"cardDiv product-caption mt-2\" *ngIf=\"detailPageData?.doc.keyFeatureTwo != undefined\">\n                                      <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg> {{detailPageData?.doc.keyFeatureTwo}}\n                                    </span>\n                                    <span class=\"cardDiv product-caption mt-2\" *ngIf=\"detailPageData?.doc.keyFeatureThree != undefined\">\n                                      <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg> {{detailPageData?.doc.keyFeatureThree}}\n                                    </span>\n                                  </span>\n\n                          </div>\n                          <p class=\"product-description\" [innerHTML]=\"detailPageData.doc.description | safeHtml\"></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                    <div class=\"row justify-content-center mx-0 mx-md-auto\">\n                        <div class=\"col-lg-12 col-md-11 px-1 px-sm-2\">\n                            <div class=\"card border-0 px-3\">\n\n                                  <ng-template [ngIf]=\"detailPageData.doc.comment != undefined && detailPageData.doc.comment.length > 0\">\n                                      <div class=\"review p-2\" *ngFor=\"let com of detailPageData.doc.comment; index as i\">\n                                          <div class=\"row d-flex\">\n                                              <div class=\"profile-pic\">{{com.associationId}}</div>\n                                              <div class=\"d-flex flex-column pl-3\">\n                                                  <h5>{{com.senderName}}</h5>\n                                                  <p class=\"grey-text\">{{com.createdOn | date: 'mediumDate'}}</p>\n                                              </div>\n                                          </div>\n                                          <div class=\"row pb-1 ml-5\">\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 0}\"></span>\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 1}\"></span>\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 2}\"></span>\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 3}\"></span>\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 4}\"></span>\n                                          </div>\n                                          <div class=\"row pb-1 ml-5\">\n                                              <p>{{com.reveiw}}</p>\n                                          </div>\n\n                                      </div>\n                                    </ng-template>\n\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n              </ng-template>\n          </ng-template>\n    </ng-template>\n    <ng-template #myOrderStatus1>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"topnav\">\n              <a [ngClass]=\"currentTab == 1 ? 'active' : ''\" (click)=\"changeTab(1, 'open')\">Request</a>\n              <a [ngClass]=\"currentTab == 2 ? 'active' : ''\" (click)=\"changeTab(2, 'close')\">Order</a>\n              <a [ngClass]=\"currentTab == 3 ? 'active' : ''\" (click)=\"changeTab(3, 'acceptedByMerchant')\">Response</a>\n              <a [ngClass]=\"currentTab == 4 ? 'active' : ''\" (click)=\"changeTab(4, 'rejectByMerchant')\">Cancel</a>\n              <a [ngClass]=\"currentTab == 5 ? 'active' : ''\" (click)=\"changeTab(5, 'rejectByRetailer')\">Reject</a>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngIf]=\"orderLoading\" [ngIfElse]=\"allOrderTemplate\">\n          <div class=\"wrapper1\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n            <div class=\"card-loader1 card-loader--tabs\"></div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"card-loader1 card-loader--tabs\"></div>\n            </div>\n            <div class=\"col-4\">\n            <div class=\"card-loader1 card-loader--tabs\"></div>\n            </div>\n          </div>\n          </div>\n        </ng-template>\n        <ng-template #allOrderTemplate>\n          <ng-container *ngTemplateOutlet=\"platformMobile ? mobileOrder : desktopOrder\"></ng-container>\n        </ng-template>\n      </div>\n    </ng-template>\n</div>\n\n\n\n<app-side-bar></app-side-bar>\n<ng-template #playVideo>\n  <div class=\"modal-header\">\n\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n          <video width=\"420\" height=\"240\" controls>\n            <source  [src]=\"api.delear+ 'uploads/comunication/'+ setImageName\" type=\"video/mp4\">\n\n          </video>\n\n\n      </div>\n\n    </div>\n\n  </div>\n</ng-template>\n\n<ng-template #uploadingFolder>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Uploading Image</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"slideshow-container\">\n          <div class=\"mySlides\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\"  [style.width]=\"imageUploadPercent + '%'\">\n                <span class=\"sr-only\">{{imageUploadPercent}} % Complete</span>\n              </div>\n            </div>\n            <div class=\"card-body sliderBody ml-1\"> {{imageUploadPercent}} % completed </div>\n            </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #desktopOrder>\n  <div class=\"row mt-3\"  *ngFor=\"let order of orderList; index as j\">\n    <div class=\"col-12 accordion\" id=\"accordionExample\">\n      <a data-toggle=\"collapse\" href=\"#collapseExample1{{j}}\" aria-expanded=\"true\" (click)=\"showCurrent(j)\">\n          <div class=\"row headingBorder\" >\n            <div class=\"col-md-4 col-sm-6\" style=\"text-align: left;\" >\n              <span><b>Order Id: {{order.orderId}}</b></span>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">  <span class=\"trackIdCom\"> <b> Date : {{order.orderId |  date: 'mediumDate'}}</b></span> </div>\n            <div class=\"col-md-2 col-sm-12\"> <span class=\"trackIdCom\"> <b> Time: {{order.orderId |  date: 'shortTime'}}</b></span> </div>\n            <div class=\"col-md-2 col-sm-12\"> <span class=\"trackIdCom\"> </span> orders({{order.values.length}})</div>\n          </div>\n        </a>\n          <div class=\"row mt-3\" [ngClass]=\"(j == 0) ? 'show' : ''\" id=\"collapseExample1{{j}}\">\n            <div class=\"col-12 mt-2\" >\n              <div class=\"col-12\"  *ngFor=\"let item of order.values; index as i\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\"> Order From:  {{item.senderName}}</h5>\n                    <div class=\"row\">\n                      <div class=\"col-md-1\"><b>Satus</b></div>\n                      <div class=\"col-md-2\"><b>Image</b></div>\n                      <div class=\"col-md-3\"><b>Name</b></div>\n                      <div class=\"col-md-2\"><b>Qantity</b></div>\n                      <div class=\"col-md-1\"><b>Price</b></div>\n                      <div class=\"col-md-2\"><b>Total</b></div>\n                      <div class=\"col-md-1\"></div>\n                    </div>\n                    <div class=\"row mt-2\" *ngFor=\"let p of item.cart| keyvalue;\">\n                          <div class=\"col-1\">\n                              <svg *ngIf=\"item.list[p.key] != undefined\" _ngcontent-shv-c64=\"\"  xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg>\n                              <svg *ngIf=\"item.list[p.key] == undefined\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" fill=\"#E64A19\"\n                                width=\"20.926px\" height=\"20.926px\" viewBox=\"0 0 94.926 94.926\" style=\"enable-background:new 0 0 94.926 94.926;\"\n                                xml:space=\"preserve\" class=\"mr-1 pl-1\">\n                                <g>\n                                  <path d=\"M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0\n                                    c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096\n                                    c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476\n                                    c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62\n                                    s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z\"/>\n                                </g>\n                              </svg>\n                          </div>\n                          <div class=\"col-2 text-left\" > <img [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.productImage[p.key]\" width=\"100px\" height=\"60px\" /> </div>\n                          <div class=\"col-3 text-left\"> {{p.key}} </div>\n                          <div class=\"col-2 text-left\"> {{p.value}} </div>\n                          <div class=\"col-1 text-left\"> {{item.list[p.key]}}</div>\n                          <div class=\"col-2 text-left\" *ngIf=\"item.list[p.key] != undefined\">  &#x20B9;  {{item.list[p.key]  * p.value}}</div>\n                          <div class=\"col-2 text-left\" *ngIf=\"item.list[p.key] == undefined\">  N/A</div>\n\n                          <div class=\"col-1 text-left\" *ngIf=\"item.list[p.key] != undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, true,j)\">Remove</button></div>\n                          <div class=\"col-1 text-left\" *ngIf=\"item.list[p.key] == undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, false,j)\">Add</button></div>\n                          <div class=\"col-1 text-left\" *ngIf= \"item.status != 'open'\"></div>\n                    </div>\n                    <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                      <div class=\"col-1\"> </div>\n                      <div class=\"col-2\"> </div>\n                      <div class=\"col-4\"> <b>Discount</b></div>\n                      <div class=\"col-2\">  <input type=\"number\" class=\"discountFeild\" [(ngModel)]=\"item.discount != undefiend ? item.discount : discount\" (input)=\"updateValue(i,$event.target.value)\"/> </div>\n                      <div class=\"col-3\"><button class=\"btn btn-danger ml-2\" (click)=\"applyDiscount(item._id, i, j)\">Apply</button> </div>\n                      </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-1\"> </div>\n                      <div class=\"col-4\"> </div>\n                      <div class=\"col-4\"> <b>Total Amount</b></div>\n                      <div class=\"col-2\" *ngIf=\"item.discount != undefined && item.discount != 0\"> <del>&#x20B9; {{item.totalamount }}</del> <ins>&#x20B9; {{item.totalamount  - (item.discount != undefiend ? item.discount : discount)}}</ins></div>\n                      <div class=\"col-2\" *ngIf=\"item.discount == undefined || item.discount == 0\">  &#x20B9;{{item.totalamount}} </div>\n                      <div class=\"col-1\"></div>\n                      </div>\n                      <div class=\"row mt-3\">\n                        <div class=\"col-5\"></div>\n                        <div class=\"col-4 text-left\"><b>Shipping Address</b></div>\n                        <div class=\"col-3\">{{item.address}}</div>\n                        </div>\n\n                  <div class=\"row mt-3\">\n                      <div class=\"col-6\"></div>\n                      <div class=\"col-6\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                                <div class=\"col-6 text-center\">\n                                  <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'acceptedByMerchant', i,j)\" [disabled]=\"item.totalamount == 0\">Accept</button></p>\n                                </div>\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'acceptedByMerchant'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\"> Waiting for Retailer</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'invoicerequestByretailer'\">\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger ml-2\"  (click)=\"InvoiceSend(item, 'close', i,j)\">Accept</button></p>\n                                </div>\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger ml-2\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'close'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\">Closed</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByMerchant'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\">Rejected</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByRetailer'\">\n                                <div class=\"col-12\">\n                                <p><button class=\"btn btn-danger ml-2\">Reject by Retailer</button></p>\n                              </div>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                  </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n</div>\n</ng-template>\n\n<ng-template #mobileOrder>\n  <div class=\"row mt-4\"  *ngFor=\"let order of orderList; index as j\">\n    <div class=\"col-12 accordion\" id=\"accordionExample\">\n      <a data-toggle=\"collapse\" href=\"#collapseExample{{j}}\" aria-expanded=\"true\" (click)=\"showCurrent(j)\">\n          <div class=\"row headingBorder\" >\n            <div class=\"col-4\" style=\"text-align: left;\" > <span class=\"trackIdComM\"><b>Id: {{order.values[0].customOrderId}}</b></span></div>\n            <div class=\"col-7\" style=\"text-align: left;\">  <span class=\"trackIdComM\"><b>Order Placed:   {{order.orderId |  date: 'short'}}</b></span> </div>\n\n\n          </div>\n        </a>\n\n          <div class=\"row mt-3 collapse\" [ngClass]=\"(j == 0) ? 'show' : ''\" id=\"collapseExample{{j}}\">\n                <div class=\"col-12\"  *ngFor=\"let item of order.values; index as i\">\n                  <div class=\"card\">\n\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">  {{item.senderName}}</h5>\n\n                      <p class=\"card-text\" (click)=\"redirectToMerchant(item.ownerNumber)\"> See profile </p>\n                      <div class=\"row\" *ngFor=\"let p of item.cart| keyvalue;\">\n\n                        <div class=\"col-3\">  <img [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.productImage[p.key]\" width=\"50\" height=\"60px\" /></div>\n                        <div class=\"col-9\">\n                          <ul class=\"itemList\">\n                                          <li style=\"text-transform: capitalize;\">  <svg *ngIf=\"item.list[p.key] != undefined\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path  fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg>\n                                            <svg *ngIf=\"item.list[p.key] == undefined\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" fill=\"#E64A19\"\n                                              width=\"18.926px\" height=\"18.926px\" viewBox=\"0 0 94.926 94.926\" style=\"enable-background:new 0 0 94.926 94.926;\"\n                                              xml:space=\"preserve\" class=\"mr-1 pl-1\">\n                                              <g>\n                                                <path d=\"M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0\n                                                  c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096\n                                                  c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476\n                                                  c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62\n                                                  s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z\"/>\n                                              </g>\n                                            </svg>\n                                           <b> {{p.key}}</b>\n                                          </li>\n                                          <li> <span class=\"ml-4\">Qty {{p.value}}</span></li>\n\n                                          <li>\n                                            <span class=\"ml-4\" *ngIf=\"item.list[p.key] != undefined\"> <b>&#x20B9;  {{item.list[p.key]  * p.value}}</b> </span>\n                                            <span class=\"ml-4\" *ngIf=\"item.list[p.key] == undefined\"> <b>N/A</b> </span>\n                                          </li>\n                                          <li *ngIf=\"item.list[p.key] != undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, true,j)\">Remove</button></li>\n                                          <li *ngIf=\"item.list[p.key] == undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, false,j)\">Add</button></li>\n\n                                        </ul>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"row mt-2\">\n                        <div class=\"col-4 footerM\" style=\"color: #78BE20;\" *ngIf=\"item.status == 'open'\"> <b>Discount</b></div>\n                            <div class=\"col-4\"> <input type=\"number\" class=\"discountFeild\" [(ngModel)]=\"item.discount != undefiend ? item.discount : discount\" (input)=\"updateValue(i,$event.target.value)\"/> </div>\n                            <div class=\"col-4\"><button class=\"btn btn-danger applyBtmM\" (click)=\"applyDiscount(item._id, i, j)\">Apply</button> </div>\n\n                        </div>\n                        <div class=\"row mt-2\">\n\n                              <div class=\"col-4\"> <b>Total</b></div>\n                              <div class=\"col-8\" *ngIf=\"item.discount != undefined && item.discount != 0\"> <del>&#x20B9; {{item.totalamount }}</del> <ins>&#x20B9; {{item.totalamount  - (item.discount != undefiend ? item.discount : discount)}}</ins></div>\n                              <div class=\"col-8\" *ngIf=\"item.discount == undefined || item.discount == 0\">  &#x20B9;{{item.totalamount}} </div>\n\n                        </div>\n\n                        <div class=\"row mt-3\">\n\n                          <div class=\"col-4 text-left footerM\"><b> Address</b></div>\n                          <div class=\"col-8 footerM\">{{item.address}}</div>\n                        </div>\n\n\n\n\n                            <div class=\"row mt-2\">\n                                <div class=\"col-12\">\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                                    <div class=\"col-6 text-center\">\n                                      <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'acceptedByMerchant', i,j)\" [disabled]=\"item.totalamount == 0\">Accept</button></p>\n                                    </div>\n                                    <div class=\"col-6\">\n                                      <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'acceptedByMerchant'\">\n                                    <div class=\"col-12\">\n                                      <p><button class=\"btn btn-danger ml-2\"> Waiting for Retailer</button></p>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'invoicerequestByretailer'\">\n                                    <div class=\"col-6\">\n                                      <p><button class=\"btn btn-danger ml-2\"  (click)=\"InvoiceSend(item, 'close', i,j)\">Accept</button></p>\n                                    </div>\n                                    <div class=\"col-6\">\n                                      <p><button class=\"btn btn-danger ml-2\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'close'\">\n                                    <div class=\"col-12\">\n                                      <a class=\"btn btn-danger\" style=\"font-size: 11px;\" data-toggle=\"collapse\" href=\"#collapseExample2{{i}}\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample2\">\n                                        Show Rating\n                                      </a>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByMerchant'\">\n                                    <div class=\"col-12\">\n                                      <p><button class=\"btn btn-danger ml-2\">Rejected</button></p>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByRetailer'\">\n                                    <div class=\"col-12\">\n                                    <p><button class=\"btn btn-danger ml-2\">Reject by Retailer</button></p>\n                                  </div>\n                                </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                              <div class=\"col-12\">\n                                      <div class=\"collapse\" id=\"collapseExample2{{i}}\">\n                                        <div class=\"card card-body\">\n                                                  <div class=\"row\">\n                                                          <div class=\"col-sm-12 col-md-4\">Average Delivery time taken</div>\n                                                          <div class=\"col-sm-12 col-md-8\">\n                                                            <div class=\"input-group\">\n                                                              <div id=\"radioBtn\" class=\"btn-group\">\n                                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.averageDelivery == 1) ? 'active' : 'notActive'\" (click)=\"setRating('averageDelivery', 1, i,j)\">Resonable</a>\n                                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.averageDelivery == 3) ? 'active' : 'notActive'\" (click)=\"setRating('averageDelivery', 3, i,j)\">Late</a>\n                                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.averageDelivery == 5) ? 'active' : 'notActive'\" (click)=\"setRating('averageDelivery', 5, i,j)\">Fast</a>\n                                                              </div>\n                                                            </div>\n                                                          </div>\n                                                  </div>\n                                                  <div class=\"row mt-2\">\n                                                      <div class=\"col-sm-12 col-md-4\">Product Qulaity</div>\n                                                      <div class=\"col-sm-12 col-md-8\">\n                                                        <div class=\"input-group\">\n                                                          <div id=\"radioBtn\" class=\"btn-group\">\n                                                            <a class=\"btn btn-danger btn-sm\"  [ngClass]=\"(item.productQuality == 2) ? 'active' : 'notActive'\" (click)=\"setRating('productQuality', 2, i,j)\">Poor</a>\n                                                            <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productQuality == 3) ? 'active' : 'notActive'\" (click)=\"setRating('productQuality', 3, i,j)\">Moderate</a>\n                                                            <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productQuality == 4) ? 'active' : 'notActive'\" (click)=\"setRating('productQuality', 4, i,j)\">Good</a>\n                                                            <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productQuality == 5) ? 'active' : 'notActive'\" (click)=\"setRating('productQuality', 5, i,j)\">Very Good</a>\n                                                          </div>\n                                                        </div>\n                                                      </div>\n                                                  </div>\n\n                                                  <div class=\"row mt-2\">\n                                                    <div class=\"col-sm-12 col-md-4\">Product Price</div>\n                                                    <div class=\"col-sm-12 col-md-8\">\n                                                      <div class=\"input-group\">\n                                                        <div id=\"radioBtn\" class=\"btn-group\">\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productPrice == 2) ? 'active' : 'notActive'\" (click)=\"setRating('productPrice', 2, i,j)\">Low</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productPrice == 3) ? 'active' : 'notActive'\" (click)=\"setRating('productPrice', 3, i,j)\">Moderate</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productPrice == 4) ? 'active' : 'notActive'\" (click)=\"setRating('productPrice', 4, i,j)\">Reasonable</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productPrice == 5) ? 'active' : 'notActive'\" (click)=\"setRating('productPrice', 5, i,j)\">Expensive</a>\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                  </div>\n\n                                                <div class=\"row mt-2\">\n                                                  <div class=\"col-sm-12 col-md-4\">Staff behaviour</div>\n                                                  <div class=\"col-sm-12 col-md-8\">\n                                                    <div class=\"input-group\">\n                                                      <div id=\"radioBtn\" class=\"btn-group\">\n                                                        <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffBehaviour == 2) ? 'active' : 'notActive'\" (click)=\"setRating('staffBehaviour', 2, i, j)\">Poor</a>\n                                                        <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffBehaviour == 3) ? 'active' : 'notActive'\" (click)=\"setRating('staffBehaviour', 3, i, j)\">Moderate</a>\n                                                        <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffBehaviour == 4) ? 'active' : 'notActive'\" (click)=\"setRating('staffBehaviour', 4, i, j)\">Good</a>\n                                                        <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffBehaviour == 5) ? 'active' : 'notActive'\" (click)=\"setRating('staffBehaviour', 5, i, j)\">Very Good</a>\n\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                              </div>\n                                              <div class=\"row mt-2\">\n                                                    <div class=\"col-sm-12 col-md-4\">Staff helping</div>\n                                                    <div class=\"col-sm-12 col-md-8\">\n                                                      <div class=\"input-group\">\n                                                        <div id=\"radioBtn\" class=\"btn-group\">\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffHelping == 2) ? 'active' : 'notActive'\" (click)=\"setRating('staffHelping', 2, i, j)\">Poor</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffHelping == 3) ? 'active' : 'notActive'\" (click)=\"setRating('staffHelping', 3, i, j)\">Moderate</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffHelping == 4) ? 'active' : 'notActive'\" (click)=\"setRating('staffHelping', 4, i, j)\">Good</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffHelping == 5) ? 'active' : 'notActive'\" (click)=\"setRating('staffHelping', 5, i, j)\">Very Good</a>\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                </div>\n\n                                            <div class=\"row mt-2\">\n                                              <div class=\"col-sm-12 col-md-4\">Payment ease</div>\n                                              <div class=\"col-sm-12 col-md-8\">\n                                                <div class=\"input-group\">\n                                                  <div id=\"radioBtn\" class=\"btn-group\">\n                                                    <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.paymentEase == 2) ? 'active' : 'notActive'\" (click)=\"setRating('paymentEase', 2, i, j)\">Poor</a>\n                                                    <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.paymentEase == 3) ? 'active' : 'notActive'\" (click)=\"setRating('paymentEase', 3, i, j)\">Moderate</a>\n                                                    <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.paymentEase == 4) ? 'active' : 'notActive'\" (click)=\"setRating('paymentEase', 4, i, j)\">Good</a>\n                                                    <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.paymentEase == 5) ? 'active' : 'notActive'\" (click)=\"setRating('paymentEase', 5, i, j)\">Very Good</a>\n\n                                                  </div>\n                                                </div>\n                                              </div>\n                                          </div>\n\n                                          <div class=\"row mt-2\">\n                                            <div class=\"col-sm-12 col-md-4\">Refund Rating</div>\n                                            <div class=\"col-sm-12 col-md-8\">\n                                              <div class=\"input-group\">\n                                                <div id=\"radioBtn\" class=\"btn-group\">\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 1) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 1, i, j)\">1</a>\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 2) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 2, i, j)\">2</a>\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 3) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 3, i, j)\">3</a>\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 4) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 4, i, j)\">4</a>\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 5) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 5, i, j)\">5</a>\n\n                                                </div>\n                                              </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"row mt-2\">\n                                          <div class=\"col-sm-12 col-md-4\">Return Rating</div>\n                                          <div class=\"col-sm-12 col-md-8\">\n                                            <div class=\"input-group\">\n                                              <div id=\"radioBtn\" class=\"btn-group\">\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 1) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 1, i, j)\">1</a>\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 2) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 2, i, j)\">2</a>\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 3) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 3, i, j)\">3</a>\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 4) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 4, i, j)\">4</a>\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 5) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 5, i, j)\">5</a>\n\n                                              </div>\n                                            </div>\n                                          </div>\n                                      </div>\n\n                                      <div class=\"row mt-2\" *ngIf=\"item.ratingDone != true\" >\n                                        <div class=\"col-sm-12 col-md-6\"></div>\n                                        <div class=\"col-sm-12 col-md-6\"><button class=\"btn btn-danger btn-sm\" (click)= \"submitRating(item,i, j)\">Submit</button></div>\n                                          </div>\n\n                                        </div>\n                                      </div>\n                              </div>\n                            </div>\n                    </div>\n\n                  </div>\n                  </div>\n\n          </div>\n\n    </div>\n  </div>\n  <!-- <div class=\"row mt-3\"  *ngFor=\"let order of orderList; index as j\">\n    <div class=\"col-12 accordion\" id=\"accordionExample\">\n      <a data-toggle=\"collapse\" href=\"#collapseExample1{{j}}\" aria-expanded=\"true\" (click)=\"showCurrent(j)\">\n          <div class=\"row headingBorder\" >\n            <div class=\"col-md-4 col-sm-6\" style=\"text-align: left;\" >\n              <span><b>Order Id: {{order.orderId}}</b></span>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">  <span class=\"trackIdCom\"> <b> Date : {{order.orderId |  date: 'mediumDate'}}</b></span> </div>\n            <div class=\"col-md-2 col-sm-12\"> <span class=\"trackIdCom\"> <b> Time: {{order.orderId |  date: 'shortTime'}}</b></span> </div>\n            <div class=\"col-md-2 col-sm-12\"> <span class=\"trackIdCom\"> </span> orders({{order.values.length}})</div>\n          </div>\n        </a>\n          <div class=\"row mt-3\" [ngClass]=\"(j == 0) ? 'show' : ''\" id=\"collapseExample1{{j}}\">\n            <div class=\"col-12 mt-2\" >\n              <div class=\"col-12\"  *ngFor=\"let item of order.values; index as i\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\"> Order From:  {{item.senderName}}</h5>\n                    <div class=\"row\">\n                      <div class=\"col-md-1\"><b>Satus</b></div>\n                      <div class=\"col-md-2\"><b>Image</b></div>\n                      <div class=\"col-md-3\"><b>Name</b></div>\n                      <div class=\"col-md-2\"><b>Qantity</b></div>\n                      <div class=\"col-md-1\"><b>Price</b></div>\n                      <div class=\"col-md-2\"><b>Total</b></div>\n                      <div class=\"col-md-1\"></div>\n                    </div>\n                    <div class=\"row mt-2\" *ngFor=\"let p of item.cart| keyvalue;\">\n                          <div class=\"col-1\">\n                              <svg *ngIf=\"item.list[p.key] != undefined\" _ngcontent-shv-c64=\"\"  xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg>\n                              <svg *ngIf=\"item.list[p.key] == undefined\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" fill=\"#E64A19\"\n                                width=\"20.926px\" height=\"20.926px\" viewBox=\"0 0 94.926 94.926\" style=\"enable-background:new 0 0 94.926 94.926;\"\n                                xml:space=\"preserve\" class=\"mr-1 pl-1\">\n                                <g>\n                                  <path d=\"M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0\n                                    c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096\n                                    c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476\n                                    c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62\n                                    s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z\"/>\n                                </g>\n                              </svg>\n                          </div>\n                          <div class=\"col-2 text-left\" > <img [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.productImage[p.key]\" width=\"100px\" height=\"60px\" /> </div>\n                          <div class=\"col-3 text-left\"> {{p.key}} </div>\n                          <div class=\"col-2 text-left\"> {{p.value}} </div>\n                          <div class=\"col-1 text-left\"> {{item.list[p.key]}}</div>\n                          <div class=\"col-2 text-left\" *ngIf=\"item.list[p.key] != undefined\">  &#x20B9;  {{item.list[p.key]  * p.value}}</div>\n                          <div class=\"col-2 text-left\" *ngIf=\"item.list[p.key] == undefined\">  N/A</div>\n\n                          <div class=\"col-1 text-left\" *ngIf=\"item.list[p.key] != undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, true,j)\">Remove</button></div>\n                          <div class=\"col-1 text-left\" *ngIf=\"item.list[p.key] == undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, false,j)\">Add</button></div>\n                          <div class=\"col-1 text-left\" *ngIf= \"item.status != 'open'\"></div>\n                    </div>\n                    <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                      <div class=\"col-1\"> </div>\n                      <div class=\"col-2\"> </div>\n                      <div class=\"col-4\"> <b>Discount</b></div>\n                      <div class=\"col-2\">  <input type=\"number\" class=\"discountFeild\" [(ngModel)]=\"item.discount != undefiend ? item.discount : discount\" (input)=\"updateValue(i,$event.target.value)\"/> </div>\n                      <div class=\"col-3\"><button class=\"btn btn-danger ml-2\" (click)=\"applyDiscount(item._id, i, j)\">Apply</button> </div>\n                      </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-1\"> </div>\n                      <div class=\"col-4\"> </div>\n                      <div class=\"col-4\"> <b>Total Amount</b></div>\n                      <div class=\"col-2\" *ngIf=\"item.discount != undefined && item.discount != 0\"> <del>&#x20B9; {{item.totalamount }}</del> <ins>&#x20B9; {{item.totalamount  - (item.discount != undefiend ? item.discount : discount)}}</ins></div>\n                      <div class=\"col-2\" *ngIf=\"item.discount == undefined || item.discount == 0\">  &#x20B9;{{item.totalamount}} </div>\n                      <div class=\"col-1\"></div>\n                      </div>\n                      <div class=\"row mt-3\">\n                        <div class=\"col-5\"></div>\n                        <div class=\"col-4 text-left\"><b>Shipping Address</b></div>\n                        <div class=\"col-3\">{{item.address}}</div>\n                        </div>\n\n                  <div class=\"row mt-3\">\n                      <div class=\"col-6\"></div>\n                      <div class=\"col-6\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                                <div class=\"col-6 text-center\">\n                                  <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'acceptedByMerchant', i,j)\" [disabled]=\"item.totalamount == 0\">Accept</button></p>\n                                </div>\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'acceptedByMerchant'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\"> Waiting for Retailer</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'invoicerequestByretailer'\">\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger ml-2\"  (click)=\"InvoiceSend(item, 'close', i,j)\">Send Invoice</button></p>\n                                </div>\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger ml-2\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'close'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\">Closed</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByMerchant'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\">Rejected</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByRetailer'\">\n                                <div class=\"col-12\">\n                                <p><button class=\"btn btn-danger ml-2\">Reject by Retailer</button></p>\n                              </div>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                  </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n</div> -->\n</ng-template>\n";
    /***/
  },

  /***/
  "./src/app/shoping/addproduct/addproduct.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/shoping/addproduct/addproduct.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopingAddproductAddproductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n@charset \"UTF-8\";\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\ninput[type=file] {\n  display: none;\n}\n.setColor {\n  background-color: #AA0000 !important;\n  color: #ffffff;\n}\n.container1 {\n  width: 350px;\n  height: auto;\n  margin: 30px auto;\n}\n.card {\n  border-radius: 25px;\n  box-shadow: -11px 11px 1px rgba(255, 253, 253, 0.3);\n}\n.card-head {\n  height: 300px;\n  border-radius: 25px 25px 0 0;\n}\n.card-head img {\n  width: 100%;\n}\n.product-img {\n  left: 0;\n}\n.product-detail {\n  padding: 0 20px;\n  font-size: 11px;\n  color: #fff;\n}\n.product-detail h2 {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 2px;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n}\n.back-text {\n  display: inline-block;\n  font-size: 125px;\n  font-weight: 900;\n  margin-left: -7px;\n  margin-top: -12px;\n  opacity: 0.1;\n}\n.card-body {\n  min-height: 220px;\n  height: auto;\n  background: #fff;\n  border-radius: 0 0 25px 25px;\n}\n.product-title {\n  padding: 20px 20px 5px 20px;\n  display: block;\n  font-size: 17px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: capitalize;\n}\n.product-title b {\n  font-weight: 900;\n  letter-spacing: 0px;\n}\n.badge {\n  position: relative;\n  font-size: 14px;\n  font-weight: 300;\n  color: #fff;\n  background: #dc3545;\n  padding: 15px 10px;\n  border-radius: 50%;\n  top: -2px;\n  margin-left: 5px;\n  float: right;\n}\n.product-caption {\n  display: block;\n  padding: 0 20px;\n  font-size: 15px;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n.product-rating {\n  float: left;\n  padding-left: 1rem;\n}\n.product-rating i.grey {\n  color: #cece15;\n}\n.product-size h4 {\n  font-size: 15px;\n  padding: 0 21px;\n  margin-top: 15px;\n  padding-bottom: 10px;\n  text-transform: uppercase;\n}\n.ul-size {\n  margin-left: 15px;\n}\n.ul-size li {\n  list-style: none;\n  float: left;\n  margin-right: 20px;\n}\n.ul-size li a {\n  display: block;\n  text-decoration: none;\n  font-size: 11px;\n  width: 22px;\n  height: 22px;\n  border-radius: 100%;\n  text-align: center;\n  line-height: 23px;\n  color: #000;\n}\n.ul-size li a.active {\n  background: #f35e3d;\n  color: #fff;\n}\n.product-size:before,\n.product-size:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.product-color h4 {\n  font-size: 11px;\n  padding: 0 21px;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  text-transform: uppercase;\n}\n.ul-color {\n  margin-left: 27px;\n}\n.ul-color li {\n  list-style: none;\n  float: left;\n  margin-right: 20px;\n}\n.ul-color li a {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n}\n.ul-color li a.orange {\n  background: #f35e3d;\n}\n.ul-color li a.green {\n  background: #dc3545;\n}\n.ul-color li a.yellow {\n  background: #ffd414;\n}\n.ul-color li a.active:after {\n  position: absolute;\n  content: \"\";\n  display: inline-block;\n  border: 1px solid #f35e3d;\n  width: 24px;\n  height: 24px;\n  border-radius: 100%;\n  margin-left: -5px;\n  margin-top: -5px;\n}\n.product-price {\n  background: #dc3545;\n  padding: 7px 20px;\n  text-align: center;\n  display: inline-block;\n  font-size: 15px;\n  font-weight: 200;\n  color: #fff;\n  border-radius: 7px;\n  margin-top: -13px;\n  margin-left: -5px;\n  box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);\n}\n.product-price b {\n  margin-left: 5px;\n}\n.yt {\n  position: fixed;\n  padding: 7px 10px 3px 10px;\n  top: 5px;\n  right: 5px;\n  background: rgba(0, 0, 0, 0.1);\n}\n.yt:hover {\n  background: rgba(0, 0, 0, 0.2);\n}\n.Plusbutton {\n  background-color: #dc3545;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n  margin: 4px 2px;\n  width: 20px;\n  height: 20px;\n}\n.button5 {\n  border-radius: 50%;\n}\n.input-number {\n  width: 50% !important;\n  flex: 1 1 0%;\n}\n.checked {\n  color: orange;\n}\n.fa-star {\n  cursor: pointer;\n  font-size: 21px;\n}\n/***************** Detail Page *************************/\n.preview {\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px;\n  }\n}\n.preview-pic {\n  flex-grow: 1;\n}\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px;\n}\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%;\n}\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block;\n  height: 177px !important;\n}\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0;\n}\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0;\n}\n.tab-content {\n  overflow: hidden;\n}\n.tab-content img {\n  width: 100%;\n  max-width: 700px;\n  max-height: 300px;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n}\n.cardDetails {\n  margin-top: 50px;\n  background: #eee;\n  padding: 3em;\n  line-height: 1.5em;\n}\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n  }\n}\n.details {\n  display: flex;\n  flex-direction: column;\n}\n.colors {\n  flex-grow: 1;\n}\n.product-title, .price, .sizes, .colors {\n  text-transform: capitalize;\n  font-weight: bold;\n}\n.checked, .price span {\n  color: #ff9f1a;\n}\n.product-title {\n  margin-top: 0;\n}\n.size {\n  margin-right: 10px;\n}\n.size:first-of-type {\n  margin-left: 40px;\n}\n.color {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n  height: 2em;\n  width: 2em;\n  border-radius: 2px;\n}\n.color:first-of-type {\n  margin-left: 20px;\n}\n.add-to-cart, .like {\n  background: #ff9f1a;\n  padding: 0.5em 1em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background 0.3s ease;\n}\n.add-to-cart:hover, .like:hover {\n  background: #b36800;\n  color: #fff;\n}\n.not-available {\n  text-align: center;\n  line-height: 2em;\n}\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\";\n  color: #fff;\n}\n.orange {\n  background: #ff9f1a;\n}\n.green {\n  background: #85ad00;\n}\n.blue {\n  background: #0076ad;\n}\n.tooltip-inner {\n  padding: 1.3em;\n}\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    transform: scale(3);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    transform: scale(3);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=style.css.map */\n.star {\n  font-size: 12px;\n}\n.detailStar {\n  font-size: 15px;\n}\n.btn {\n  cursor: pointer;\n}\n.sm-text {\n  font-size: 10px;\n  letter-spacing: 1px;\n}\n.sm-text-1 {\n  font-size: 14px;\n}\n.green-tab {\n  background-color: #00C853;\n  color: #fff;\n  border-radius: 5px;\n  padding: 5px 3px 5px 3px;\n}\n.btn-red {\n  background-color: #E64A19;\n  color: #fff;\n  border-radius: 20px;\n  border: none;\n  outline: none;\n}\n.btn-red:hover {\n  background-color: #BF360C;\n}\n.btn-red:focus {\n  box-shadow: none !important;\n  outline-width: 0;\n}\n.round-icon {\n  font-size: 40px;\n  padding-bottom: 10px;\n}\n.fa-circle {\n  font-size: 10px;\n  color: #EEEEEF;\n}\n.green-dot {\n  color: #4CAF50;\n}\n.red-dot {\n  color: #E64A19;\n}\n.yellow-dot {\n  color: #FFD54F;\n}\n.grey-text {\n  color: #BDBDBD;\n}\n.green-text {\n  color: #4CAF50;\n}\n.block {\n  border-right: 1px solid #F5EEEE;\n  border-top: 1px solid #F5EEEE;\n  border-bottom: 1px solid #F5EEEE;\n}\n.profile-pic {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  padding: 5px;\n  border: 1px solid #000;\n}\n.rating-dot {\n  letter-spacing: 5px;\n}\n.via {\n  border-radius: 20px;\n  height: 28px;\n}\n/* Base styling*/\n.popover__title {\n  font-size: 10px;\n  text-decoration: none;\n  color: #e44444;\n  text-align: center;\n}\n.popover__wrapper {\n  position: relative;\n  display: inline-block;\n}\n.popover__content {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  width: 200px;\n  left: -100px;\n  transform: translate(0, 10px);\n  background-color: #fff;\n  padding: 0.5rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  width: auto;\n}\n.popover__wrapper:hover .popover__content {\n  z-index: 10;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -20px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n.popover__message {\n  text-align: center;\n  font-size: 10px;\n}\n.cardDiv {\n  height: 20px;\n  word-break: break-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cardmerchant {\n  box-shadow: 0 4px 8px 0;\n  max-width: 350px;\n  margin: auto;\n  text-align: center;\n  font-family: arial;\n  border-radius: 25px;\n  background-color: #fff;\n}\n.cardmerchant h1 {\n  padding-left: 3rem;\n}\n.pricemercahnt {\n  color: grey;\n  font-size: 22px;\n}\n.merchantName {\n  font-size: 22px;\n  text-transform: capitalize;\n}\n.cardmerchant button {\n  border: none;\n  outline: 0;\n  padding: 12px;\n  color: white;\n  background-color: #AA0000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-size: 16px;\n}\n.cardmerchant button:hover {\n  opacity: 0.7;\n}\n.rowSegregate {\n  border-bottom: 2px solid #ccc;\n}\n.star-rating {\n  display: flex;\n  align-items: center;\n  font-size: 3em;\n  justify-content: center;\n  margin-top: 10px;\n}\n.back-stars {\n  display: flex;\n  color: #ccc;\n  position: relative;\n  text-shadow: 4px 4px 10px #843a3a;\n}\n.front-stars {\n  display: flex;\n  color: #AA0000;\n  overflow: hidden;\n  position: absolute;\n  text-shadow: 1px 1px 1px #AA0000;\n  top: 0;\n  transition: all 0.5s;\n}\n.progress-bar {\n  background-color: #AA0000 !important;\n}\n.topnav {\n  overflow: hidden;\n  float: left;\n}\n.topnav a {\n  float: left;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  border-bottom: 1px solid #ccc;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n  color: #AA0000;\n  opacity: 1;\n}\n.topnav a:hover {\n  border-bottom: 3px solid #AA0000;\n  cursor: pointer;\n}\n.topnav a.active {\n  border-bottom: 3px solid #AA0000;\n}\n.topnav a {\n  padding: 0.05rem 2.9rem;\n}\n.discountFeild {\n  width: 30%;\n}\n.headingBorder {\n  border: 2px solid #AA0000;\n  background-color: #AA0000;\n  color: #fff;\n}\n.headingBorder a {\n  color: #fff;\n}\n.collapse {\n  text-decoration: none;\n}\na:link {\n  text-decoration: none;\n}\n.forumTabActive {\n  font-size: 14px;\n  border-bottom: none !important;\n  color: #AA0000 !important;\n  cursor: pointer;\n}\n.forumTabActiveli {\n  border-bottom: 1px solid #AA0000 !important;\n  cursor: pointer;\n}\n.menuImage {\n  width: 44px !important;\n  height: 44px !important;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  text-align: center;\n  border: 1px solid #AA0000 !important;\n}\n.submenuImage {\n  width: 44px !important;\n  height: 44px !important;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  text-align: center;\n  border: 1px solid #AA0000 !important;\n}\nfigure {\n  text-align: center;\n  color: #000;\n  font-size: 11px;\n  min-width: 57px;\n}\n.card-loader1 {\n  background-color: #fff;\n  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.08), 0 -1px 3px 0 rgba(0, 0, 0, 0.06);\n  padding: 8px;\n  position: relative;\n  border-radius: 2px;\n  margin-bottom: 0;\n  height: 200px;\n  overflow: hidden;\n  width: 350px;\n}\n.card-loader1:only-child {\n  margin-top: 0;\n}\n.card-loader1:before {\n  content: \"\";\n  height: 110px;\n  display: block;\n  background-color: #ededed;\n  box-shadow: -48px 78px 0 -48px #ededed, -51px 102px 0 -51px #ededed;\n}\n.card-loader1:after {\n  content: \"\";\n  background-color: #333;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: loader-animate;\n          animation-name: loader-animate;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0) 81%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffffff\", endColorstr=\"#00ffffff\",GradientType=1 );\n}\n.AClass {\n  right: -16px;\n  top: -11px;\n  position: absolute;\n  color: #AA0000;\n}\n.submenuImage {\n  width: 50px !important;\n  height: 50px !important;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  text-align: center;\n  border: 1px solid #AA0000 !important;\n}\n@media only screen and (max-width: 500px) {\n  .topnav a {\n    padding: 0.05rem 0.5rem;\n    font-size: 11px;\n  }\n\n  .headingBorder {\n    font-size: 10px;\n  }\n\n  figure {\n    text-align: center;\n    color: #000;\n    font-size: 9px;\n    min-width: 57px;\n  }\n\n  .container1 {\n    width: 325px;\n    height: auto;\n    margin: 10px auto;\n  }\n\n  .card-head {\n    height: 250px;\n  }\n\n  .navsumenu {\n    display: flex;\n    flex-wrap: unset !important;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n  }\n\n  ul.submenu {\n    width: 400px;\n    overflow-x: scroll;\n    white-space: nowrap;\n  }\n  ul.submenu li {\n    display: inline-block;\n    zoom: 1;\n  }\n\n  .btn-danger {\n    max-width: 100px;\n    font-size: 10px;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .topnav a {\n    padding: 0.02em 0.2rem;\n    font-size: 7px;\n  }\n\n  .trackIdComM {\n    font-size: 9px !important;\n  }\n\n  .container1 {\n    width: 295px;\n    height: auto;\n    margin: 10px auto;\n  }\n}\n.backButton {\n  border-radius: 50%;\n  cursor: pointer;\n}\n.trackIdComM {\n  font-size: 10px;\n}\n.figcaption1 {\n  max-width: 73px;\n}\n.navsumenu {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\nul.itemList li {\n  list-style: none;\n  margin-left: 10px;\n  font-size: 12px;\n}\n.footerM {\n  font-size: 12px;\n}\n.input-numberM {\n  width: 14% !important;\n  flex: 1 1 0%;\n}\n.PlusbuttonM {\n  background-color: #dc3545;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 10px;\n  margin: 4px 2px;\n  width: 15px;\n  height: 15px;\n}\n.cartMob {\n  font-size: 15px !important;\n}\n.applyBtmM {\n  font-size: 9px;\n  width: auto;\n  height: 30px;\n}\n.discountFeild {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcGluZy9hZGRwcm9kdWN0L0M6XFxVc2Vyc1xcQWJoaXNoZWsuU2F4ZW5hMVxcRGVza3RvcFxccHJha2FzaFxcc2hvZWRlbGl2ZXJ5RnJvbnRFbmQvc3JjXFxhcHBcXHNob3BpbmdcXGFkZHByb2R1Y3RcXGFkZHByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nob3BpbmcvYWRkcHJvZHVjdC9hZGRwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBUSxpR0FBQTtBQ0FSLGdCQUFnQjtBRENoQjtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFRjtBREFBO0VBQ0UsYUFBQTtBQ0dGO0FEREE7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUNJRjtBRERBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0lGO0FEREE7RUFDRSxtQkFBQTtFQUNBLG1EQUFBO0FDSUY7QURBQTtFQUVFLGFBQUE7RUFFQSw0QkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0FDRUo7QURHQTtFQUVFLE9BQUE7QUNERjtBREtBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRkY7QURLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQ0ZGO0FES0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDRkY7QURLQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FES0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRkY7QURpQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDZEY7QURpQkE7RUFHRSxXQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxjQUFBO0FDaEJGO0FEbUJBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNoQkY7QURtQkE7RUFDRSxpQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ2hCRjtBRG1CQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ2hCRjtBRG1CQTs7RUFFRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNoQkY7QURtQkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ2hCRjtBRG1CQTtFQUNFLGlCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNoQkY7QURtQkE7RUFDRSxtQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLG1CQUFBO0FDaEJGO0FEbUJBO0VBQ0UsbUJBQUE7QUNoQkY7QURtQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7QURtQkE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3REFBQTtBQ2hCRjtBRG1CQTtFQUNFLGdCQUFBO0FDaEJGO0FEcUJBO0VBRUUsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtBQ25CRjtBRHNCQTtFQUVFLDhCQUFBO0FDcEJGO0FEdURBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNFLFlBQUE7QUNwREo7QUR1REE7RUFBVSxrQkFBQTtBQ25EVjtBRHFEQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ2xERjtBRG9EQTtFQUNFLGFBQUE7QUNqREY7QURtREE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ2hERjtBRG9EQSx3REFBQTtBQUNBO0VBSUUsYUFBQTtFQUtRLHNCQUFBO0FDakRWO0FEa0RFO0VBQ0U7SUFDRSxtQkFBQTtFQy9DSjtBQUNGO0FEZ0RBO0VBSVUsWUFBQTtBQzlDVjtBRGdEQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQzdDRjtBRDhDRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQzNDSjtBRDRDSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUN6Q047QUQyQ0k7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ3hDTjtBRHlDSTtFQUNFLGVBQUE7QUN0Q047QUR3Q0E7RUFDRSxnQkFBQTtBQ3JDRjtBRHNDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDUSx1QkFBQTtFQUNSLGdDQUFBO0VBQ1Esd0JBQUE7QUNuQ1o7QURzQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDbkNGO0FEcUNBO0VBQ0U7SUFJRSxhQUFBO0VDbENGO0FBQ0Y7QURtQ0E7RUFJRSxhQUFBO0VBS1Esc0JBQUE7QUNqQ1Y7QURtQ0E7RUFJVSxZQUFBO0FDaENWO0FEa0NBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQy9CRjtBRGlDQTtFQUNFLGNBQUE7QUM5QkY7QURtQ0E7RUFDRSxhQUFBO0FDaENGO0FEa0NBO0VBQ0Usa0JBQUE7QUMvQkY7QURnQ0U7RUFDRSxpQkFBQTtBQzdCSjtBRCtCQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUM1QkY7QUQ2QkU7RUFDRSxpQkFBQTtBQzFCSjtBRDRCQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFFUSxnQ0FBQTtBQ3pCVjtBRDBCRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ3ZCSjtBRHlCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR1QkU7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDcEJKO0FEc0JBO0VBQ0UsbUJBQUE7QUNuQkY7QURxQkE7RUFDRSxtQkFBQTtBQ2xCRjtBRG9CQTtFQUNFLG1CQUFBO0FDakJGO0FEbUJBO0VBQ0UsY0FBQTtBQ2hCRjtBRGtCQTtFQUNFO0lBQ0UsVUFBQTtJQUVRLG1CQUFBO0VDZlY7RURnQkE7SUFDRSxVQUFBO0lBRVEsbUJBQUE7RUNkVjtBQUNGO0FEZUE7RUFDRTtJQUNFLFVBQUE7SUFFUSxtQkFBQTtFQ2JWO0VEY0E7SUFDRSxVQUFBO0lBRVEsbUJBQUE7RUNaVjtBQUNGO0FEYUEsb0NBQUE7QUFFQTtFQUNFLGVBQUE7QUNaRjtBRGVBO0VBQ0UsZUFBQTtBQ1pGO0FEY0E7RUFDRSxlQUFBO0FDWEY7QURlQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ1pGO0FEZUE7RUFDRSxlQUFBO0FDWkY7QURlQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNaRjtBRGVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1pGO0FEZUE7RUFDRSx5QkFBQTtBQ1pGO0FEZUE7RUFHRSwyQkFBQTtFQUNBLGdCQUFBO0FDWkY7QURlQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ1pGO0FEZUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1pGO0FEZUE7RUFDRSxjQUFBO0FDWkY7QURlQTtFQUNFLGNBQUE7QUNaRjtBRGVBO0VBQ0UsY0FBQTtBQ1pGO0FEZUE7RUFDRSxjQUFBO0FDWkY7QURlQTtFQUNFLGNBQUE7QUNaRjtBRGVBO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDWkY7QURlQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNaRjtBRGVBO0VBQ0UsbUJBQUE7QUNaRjtBRGVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDWkY7QURjQSxnQkFBQTtBQUVBO0VBQ0UsZUFBQTtFQUVBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDYkY7QURpQkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDZEY7QURnQkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7QUNiRjtBRDJCQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FDeEJGO0FEMEJBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDdkJGO0FEeUJBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ3RCRjtBRHVCRTtFQUNFLGtCQUFBO0FDckJKO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUN0QkY7QUR3QkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUNyQkY7QUR3QkE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3JCRjtBRHdCQTtFQUNFLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSw2QkFBQTtBQ3JCRjtBRDhCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDM0JGO0FENkJBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDMUJGO0FENEJBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxNQUFBO0VBQ0Esb0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxvQ0FBQTtBQ3pCRjtBRDZCQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQzFCRjtBRDJCTTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUVBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQzNCVjtBRDZCVTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtBQzNCWjtBRGdDQTtFQUNFLGdDQUFBO0FDN0JGO0FEaUNBO0VBQ0UsdUJBQUE7QUM5QkY7QURpQ0E7RUFDRSxVQUFBO0FDOUJGO0FEaUNBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUM5QkY7QUQrQkc7RUFDRSxXQUFBO0FDN0JMO0FEZ0NBO0VBQ0UscUJBQUE7QUM3QkY7QUQrQkE7RUFBUyxxQkFBQTtBQzNCVDtBRDZCQTtFQUVFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQzNCRjtBRDZCQTtFQUNFLDJDQUFBO0VBQ0EsZUFBQTtBQzFCRjtBRDJDQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQ3hDRjtBRDBDQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQ3ZDRjtBRDBDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDdkNGO0FEMENBO0VBQ0Usc0JBQUE7RUFDQSwrRUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDdkNGO0FEd0NFO0VBQ0UsYUFBQTtBQ3RDSjtBRHlDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUVBQUE7QUN2Q0o7QUQwQ0U7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBR0EsMEhBQUE7RUFDQSx1SEFBQTtBQ3hDSjtBRDRDQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDekNGO0FEMkNBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDeENGO0FENENBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLGVBQUE7RUN6Q0Y7O0VEMkNBO0lBQ0UsZUFBQTtFQ3hDRjs7RUQwQ0E7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ3ZDRjs7RUR5Q0E7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDdENGOztFRHdDQTtJQUNFLGFBQUE7RUNyQ0Y7O0VEdUNBO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUNwQ0Y7O0VEc0NBO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNuQ0Y7RURvQ0U7SUFDRSxxQkFBQTtJQUNBLE9BQUE7RUNsQ0o7O0VEcUNBO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VDbENGO0FBQ0Y7QURxQ0U7RUFDQTtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtFQ25DSjs7RURxQ0E7SUFDRSx5QkFBQTtFQ2xDRjs7RURvQ0E7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDakNGO0FBQ0Y7QURzQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNwQ0Y7QURzQ0E7RUFDRSxlQUFBO0FDbkNGO0FEcUNBO0VBQ0UsZUFBQTtBQ2xDRjtBRHFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNsQ0Y7QURxQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2xDSjtBRHFDQTtFQUNFLGVBQUE7QUNsQ0Y7QURvQ0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNqQ0Y7QURvQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0UsWUFBQTtBQ2pDSjtBRG9DQTtFQUNFLDBCQUFBO0FDakNGO0FEbUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENGO0FEa0NBO0VBQ0UsVUFBQTtBQy9CRiIsImZpbGUiOiJzcmMvYXBwL3Nob3BpbmcvYWRkcHJvZHVjdC9hZGRwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIpO1xyXG4uY3VzdG9tLWZpbGUtdXBsb2FkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNldENvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIxIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3gtc2hhZG93OiAtMTFweCAxMXB4IDFweCByZ2JhKDI1NSwgMjUzLCAyNTMsIDAuMyk7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1oZWFkIHtcclxuXHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDAgMDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnByb2R1Y3QtaW1nIHtcclxuXHJcbiAgbGVmdDogMDtcclxuXHJcbn1cclxuXHJcbi5wcm9kdWN0LWRldGFpbCB7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlsIGgyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uYmFjay10ZXh0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMjVweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIG9wYWNpdHk6IDAuMTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgbWluLWhlaWdodDogMjIwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI1cHggMjVweDtcclxufVxyXG5cclxuLnByb2R1Y3QtdGl0bGUge1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCA1cHggMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4ucHJvZHVjdC10aXRsZSBiIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0b3A6IC0ycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBmbG9hdDpyaWdodDtcclxufVxyXG5cclxuLy8gLnJhdGluZyB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTFweDtcclxuLy8gICBmb250LXdlaWdodDogMzAwO1xyXG4vLyAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbi8vICAgcGFkZGluZzogNXB4IDVweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICAgdG9wOiAtMnB4O1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbi8vIH1cclxuXHJcbi5wcm9kdWN0LWNhcHRpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLnByb2R1Y3QtcmF0aW5nIHtcclxuICAvLyBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgLy8gZm9udC1zaXplOiAxMXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG5cclxuLnByb2R1Y3QtcmF0aW5nIGkuZ3JleSB7XHJcbiAgY29sb3I6ICNjZWNlMTU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXNpemUgaDQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAwIDIxcHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udWwtc2l6ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi51bC1zaXplIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnVsLXNpemUgbGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi51bC1zaXplIGxpIGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZjM1ZTNkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucHJvZHVjdC1zaXplOmJlZm9yZSxcclxuLnByb2R1Y3Qtc2l6ZTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNvbG9yIGg0IHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogMCAyMXB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnVsLWNvbG9yIHtcclxuICBtYXJnaW4tbGVmdDogMjdweDtcclxufVxyXG5cclxuLnVsLWNvbG9yIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnVsLWNvbG9yIGxpIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLnVsLWNvbG9yIGxpIGEub3JhbmdlIHtcclxuICBiYWNrZ3JvdW5kOiAjZjM1ZTNkO1xyXG59XHJcblxyXG4udWwtY29sb3IgbGkgYS5ncmVlbiB7XHJcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxufVxyXG5cclxuLnVsLWNvbG9yIGxpIGEueWVsbG93IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZkNDE0O1xyXG59XHJcblxyXG4udWwtY29sb3IgbGkgYS5hY3RpdmU6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzNWUzZDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1wcmljZSB7XHJcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICBwYWRkaW5nOiA3cHggMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBib3gtc2hhZG93OiAtMTBweCAyMHB4IDE1cHggLTEwcHggcmdiYSgxNywgMjMzLCA5MSwgMC4zKTtcclxufVxyXG5cclxuLnByb2R1Y3QtcHJpY2UgYiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuXHJcblxyXG4ueXRcclxue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOjdweCAxMHB4IDNweCAxMHB4O1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4ueXQ6aG92ZXJcclxue1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLy8gLnF1YW50aXR5IHtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vIH1cclxuXHJcbi8vIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuLy8gaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uXHJcbi8vIHtcclxuLy8gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4vLyBpbnB1dFt0eXBlPW51bWJlcl1cclxuLy8ge1xyXG4vLyAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4vLyB9XHJcblxyXG4vLyAucXVhbnRpdHkgaW5wdXQge1xyXG4vLyAgIHdpZHRoOiAyNXB4O1xyXG4vLyAgIGhlaWdodDogMjBweDtcclxuLy8gICBsaW5lLWhlaWdodDogMS42NTtcclxuLy8gICBmbG9hdDogbGVmdDtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBwYWRkaW5nOiAwO1xyXG4vLyAgIG1hcmdpbjogMDtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuLy8gfVxyXG5cclxuLy8gLnF1YW50aXR5IGlucHV0OmZvY3VzIHtcclxuLy8gICBvdXRsaW5lOiAwO1xyXG4vLyB9XHJcblxyXG4uUGx1c2J1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b241IHtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG5cclxuLmlucHV0LW51bWJlciB7XHJcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDEgMSAwJTtcclxufVxyXG4uY2hlY2tlZCB7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxufVxyXG4uZmEtc3RhciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKiBEZXRhaWwgUGFnZSAqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4ucHJldmlldyB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NnB4KSB7XHJcbiAgICAucHJldmlldyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH0gfVxyXG5cclxuLnByZXZpZXctcGljIHtcclxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG5cclxuLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDsgfVxyXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSB7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjUlOyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OiAxNzdweCAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwOyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XHJcblxyXG4udGFiLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cclxuICAudGFiLWNvbnRlbnQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IC4zczsgfVxyXG5cclxuXHJcbi5jYXJkRGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIHBhZGRpbmc6IDNlbTtcclxuICBsaW5lLWhlaWdodDogMS41ZW07IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5N3B4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IH0gfVxyXG5cclxuLmRldGFpbHMge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuXHJcbi5jb2xvcnMge1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcblxyXG4ucHJvZHVjdC10aXRsZSwgLnByaWNlLCAuc2l6ZXMsIC5jb2xvcnMge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XHJcblxyXG4uY2hlY2tlZCwgLnByaWNlIHNwYW4ge1xyXG4gIGNvbG9yOiAjZmY5ZjFhOyB9XHJcblxyXG4vLyAucHJvZHVjdC10aXRsZSwgLnJhdGluZywgLnByb2R1Y3QtZGVzY3JpcHRpb24sIC5wcmljZSwgLnZvdGUsIC5zaXplcyB7XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxyXG5cclxuLnByb2R1Y3QtdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDA7IH1cclxuXHJcbi5zaXplIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cclxuICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4OyB9XHJcblxyXG4uY29sb3Ige1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBoZWlnaHQ6IDJlbTtcclxuICB3aWR0aDogMmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDsgfVxyXG4gIC5jb2xvcjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XHJcblxyXG4uYWRkLXRvLWNhcnQsIC5saWtlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY5ZjFhO1xyXG4gIHBhZGRpbmc6IC41ZW0gMWVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogVVBQRVJDQVNFO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cclxuICAuYWRkLXRvLWNhcnQ6aG92ZXIsIC5saWtlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiMzY4MDA7XHJcbiAgICBjb2xvcjogI2ZmZjsgfVxyXG5cclxuLm5vdC1hdmFpbGFibGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMmVtOyB9XHJcbiAgLm5vdC1hdmFpbGFibGU6YmVmb3JlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XHJcbiAgICBjb2xvcjogI2ZmZjsgfVxyXG5cclxuLm9yYW5nZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmOWYxYTsgfVxyXG5cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiAjODVhZDAwOyB9XHJcblxyXG4uYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogIzAwNzZhZDsgfVxyXG5cclxuLnRvb2x0aXAtaW5uZXIge1xyXG4gIHBhZGRpbmc6IDEuM2VtOyB9XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2l0eSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgzKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzKTsgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcblxyXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xyXG5cclxuLnN0YXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmRldGFpbFN0YXIge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYnRuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uc20tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHhcclxufVxyXG5cclxuLnNtLXRleHQtMSB7XHJcbiAgZm9udC1zaXplOiAxNHB4XHJcbn1cclxuXHJcbi5ncmVlbi10YWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEM4NTM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweCAzcHggNXB4IDNweFxyXG59XHJcblxyXG4uYnRuLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2NEExOTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lXHJcbn1cclxuXHJcbi5idG4tcmVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkYzNjBDXHJcbn1cclxuXHJcbi5idG4tcmVkOmZvY3VzIHtcclxuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZS13aWR0aDogMFxyXG59XHJcblxyXG4ucm91bmQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi5mYS1jaXJjbGUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogI0VFRUVFRlxyXG59XHJcblxyXG4uZ3JlZW4tZG90IHtcclxuICBjb2xvcjogIzRDQUY1MFxyXG59XHJcblxyXG4ucmVkLWRvdCB7XHJcbiAgY29sb3I6ICNFNjRBMTlcclxufVxyXG5cclxuLnllbGxvdy1kb3Qge1xyXG4gIGNvbG9yOiAjRkZENTRGXHJcbn1cclxuXHJcbi5ncmV5LXRleHQge1xyXG4gIGNvbG9yOiAjQkRCREJEXHJcbn1cclxuXHJcbi5ncmVlbi10ZXh0IHtcclxuICBjb2xvcjogIzRDQUY1MFxyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNGNUVFRUU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGNUVFRUU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUVFRUVcclxufVxyXG5cclxuLnByb2ZpbGUtcGljIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4ucmF0aW5nLWRvdCB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDVweFxyXG59XHJcblxyXG4udmlhIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGhlaWdodDogMjhweFxyXG59XHJcbi8qIEJhc2Ugc3R5bGluZyovXHJcblxyXG4ucG9wb3Zlcl9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiByZ2IoMjI4LCA2OCwgNjgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5wb3BvdmVyX193cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5wb3BvdmVyX19jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6MjAwcHg7XHJcbiAgbGVmdDogLTEwMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4ucG9wb3Zlcl9fY29udGVudDpiZWZvcmUge1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB6LWluZGV4OiAtMTtcclxuICAvLyBjb250ZW50OiBcIlwiO1xyXG4gIC8vIHJpZ2h0OiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gIC8vIHRvcDogLThweDtcclxuICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8vIGJvcmRlci13aWR0aDogMCAxMHB4IDEwcHggMTBweDtcclxuICAvLyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNiZmJmYmYgdHJhbnNwYXJlbnQ7XHJcbiAgLy8gdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAvLyB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbn1cclxuLnBvcG92ZXJfX3dyYXBwZXI6aG92ZXIgLnBvcG92ZXJfX2NvbnRlbnQge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xyXG59XHJcbi5wb3BvdmVyX19tZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5jYXJkRGl2ICB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5jYXJkbWVyY2hhbnQge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwO1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGgxIHtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5wcmljZW1lcmNhaG50IHtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLm1lcmNoYW50TmFtZSB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2FyZG1lcmNoYW50IGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNhcmRtZXJjaGFudCBidXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLnJvd1NlZ3JlZ2F0ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcblxyXG5cclxuLnVsUHJvZHVjdCB7XHJcbiAvLyBsaXN0LXN0eWxlLWltYWdlOiB1cmwoJ3NxcHVycGxlLmdpZicpO1xyXG59XHJcblxyXG4uc3Rhci1yYXRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDNlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5iYWNrLXN0YXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCAxMHB4ICM4NDNhM2E7XHJcbn1cclxuLmZyb250LXN0YXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjQUEwMDAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjQUEwMDAwO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzXHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGEge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIC8vZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBjb2xvcjogI0FBMDAwMDtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQUEwMDAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxufVxyXG5cclxuLnRvcG5hdiBhLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNBQTAwMDA7XHJcbn1cclxuXHJcblxyXG4udG9wbmF2IGEge1xyXG4gIHBhZGRpbmc6IC4wNXJlbSAyLjlyZW07XHJcbn1cclxuXHJcbi5kaXNjb3VudEZlaWxkIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uaGVhZGluZ0JvcmRlciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0FBMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gICBhIHtcclxuICAgICBjb2xvcjogI2ZmZjtcclxuICAgfVxyXG59XHJcbi5jb2xsYXBzZSAge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5hOmxpbmsgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuXHJcbi5mb3J1bVRhYkFjdGl2ZSB7XHJcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCAjQUEwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNBQTAwMDAgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZvcnVtVGFiQWN0aXZlbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQUEwMDAwICAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gLm1lbnVJbWFnZSB7XHJcbi8vICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuLy8gICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI0FBMDAwMCAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gZmlndXJlIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgY29sb3I6ICMwMDA7XHJcbi8vIH1cclxuXHJcbi5tZW51SW1hZ2Uge1xyXG4gIHdpZHRoOiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQTAwMDAgICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN1Ym1lbnVJbWFnZSB7XHJcbiAgd2lkdGg6IDQ0cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBMDAwMCAgIWltcG9ydGFudDtcclxufVxyXG5cclxuZmlndXJlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIG1pbi13aWR0aDogNTdweDtcclxufVxyXG5cclxuLmNhcmQtbG9hZGVyMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggMXB4IHJnYmEoMCwwLDAsLjA4KSwgMCAtMXB4IDNweCAwIHJnYmEoMCwwLDAsMC4wNik7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6MzUwcHg7XHJcbiAgJjpvbmx5LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6MDtcclxuICB9XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICAgIGJveC1zaGFkb3c6IC00OHB4IDc4cHggMCAtNDhweCAjZWRlZGVkLCAtNTFweCAxMDJweCAwIC01MXB4ICNlZGVkZWQ7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxvYWRlci1hbmltYXRlO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjYpIDMwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA4MSUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC42KSAzMCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgODElKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjYpIDMwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA4MSUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwMGZmZmZmZicsIGVuZENvbG9yc3RyPScjMDBmZmZmZmYnLEdyYWRpZW50VHlwZT0xICk7XHJcbiAgfVxyXG59XHJcblxyXG4uQUNsYXNze1xyXG4gIHJpZ2h0OiAtMTZweDtcclxuICB0b3A6IC0xMXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogI0FBMDAwMDtcclxufVxyXG4uc3VibWVudUltYWdlIHtcclxuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQUEwMDAwICAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiAuMDVyZW0gLjVyZW07XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIC5oZWFkaW5nQm9yZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgZmlndXJlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBtaW4td2lkdGg6IDU3cHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXIxIHtcclxuICAgIHdpZHRoOiAzMjVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIH1cclxuICAuY2FyZC1oZWFkIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgfVxyXG4gIC5uYXZzdW1lbnUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICB1bC5zdWJtZW51IHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBsaSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgem9vbTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ0bi1kYW5nZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCl7XHJcbiAgLnRvcG5hdiBhe1xyXG4gICAgICBwYWRkaW5nOiAwLjAyZW0gMC4ycmVtO1xyXG4gICAgICBmb250LXNpemU6IDdweDtcclxuICB9XHJcbiAgLnRyYWNrSWRDb21NIHtcclxuICAgIGZvbnQtc2l6ZTogOXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jb250YWluZXIxIHtcclxuICAgIHdpZHRoOiAyOTVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG4uYmFja0J1dHRvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udHJhY2tJZENvbU0ge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uZmlnY2FwdGlvbjEge1xyXG4gIG1heC13aWR0aDogNzNweDtcclxufVxyXG5cclxuLm5hdnN1bWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG51bC5pdGVtTGlzdCAge1xyXG4gIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuLmZvb3Rlck0ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uaW5wdXQtbnVtYmVyTSB7XHJcbiAgd2lkdGg6IDE0JSAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDEgMSAwJTtcclxufVxyXG5cclxuLlBsdXNidXR0b25NIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1hcmdpbjogNHB4IDJweDtcclxuICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxufVxyXG5cclxuLmNhcnRNb2Ige1xyXG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5hcHBseUJ0bU0ge1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG4uZGlzY291bnRGZWlsZCB7XHJcbiAgd2lkdGg6ODAlO1xyXG59XHJcbiIsIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiKTtcbi5jdXN0b20tZmlsZS11cGxvYWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2V0Q29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY29udGFpbmVyMSB7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDMwcHggYXV0bztcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3gtc2hhZG93OiAtMTFweCAxMXB4IDFweCByZ2JhKDI1NSwgMjUzLCAyNTMsIDAuMyk7XG59XG5cbi5jYXJkLWhlYWQge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xufVxuLmNhcmQtaGVhZCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2R1Y3QtaW1nIHtcbiAgbGVmdDogMDtcbn1cblxuLnByb2R1Y3QtZGV0YWlsIHtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucHJvZHVjdC1kZXRhaWwgaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJhY2stdGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMjVweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBvcGFjaXR5OiAwLjE7XG59XG5cbi5jYXJkLWJvZHkge1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMjVweCAyNXB4O1xufVxuXG4ucHJvZHVjdC10aXRsZSB7XG4gIHBhZGRpbmc6IDIwcHggMjBweCA1cHggMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5wcm9kdWN0LXRpdGxlIGIge1xuICBmb250LXdlaWdodDogOTAwO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xufVxuXG4uYmFkZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IC0ycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnByb2R1Y3QtY2FwdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5wcm9kdWN0LXJhdGluZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbi5wcm9kdWN0LXJhdGluZyBpLmdyZXkge1xuICBjb2xvcjogI2NlY2UxNTtcbn1cblxuLnByb2R1Y3Qtc2l6ZSBoNCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMCAyMXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnVsLXNpemUge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLnVsLXNpemUgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4udWwtc2l6ZSBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnVsLXNpemUgbGkgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZjM1ZTNkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnByb2R1Y3Qtc2l6ZTpiZWZvcmUsXG4ucHJvZHVjdC1zaXplOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ucHJvZHVjdC1jb2xvciBoNCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMCAyMXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnVsLWNvbG9yIHtcbiAgbWFyZ2luLWxlZnQ6IDI3cHg7XG59XG5cbi51bC1jb2xvciBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi51bC1jb2xvciBsaSBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4udWwtY29sb3IgbGkgYS5vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZjM1ZTNkO1xufVxuXG4udWwtY29sb3IgbGkgYS5ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XG59XG5cbi51bC1jb2xvciBsaSBhLnllbGxvdyB7XG4gIGJhY2tncm91bmQ6ICNmZmQ0MTQ7XG59XG5cbi51bC1jb2xvciBsaSBhLmFjdGl2ZTphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjM1ZTNkO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgbWFyZ2luLXRvcDogLTEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3gtc2hhZG93OiAtMTBweCAyMHB4IDE1cHggLTEwcHggcmdiYSgxNywgMjMzLCA5MSwgMC4zKTtcbn1cblxuLnByb2R1Y3QtcHJpY2UgYiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi55dCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcGFkZGluZzogN3B4IDEwcHggM3B4IDEwcHg7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi55dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLlBsdXNidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDRweCAycHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5idXR0b241IHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW5wdXQtbnVtYmVyIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgMCU7XG59XG5cbi5jaGVja2VkIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cblxuLmZhLXN0YXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLyoqKioqKioqKioqKioqKioqIERldGFpbCBQYWdlICoqKioqKioqKioqKioqKioqKioqKioqKiovXG4ucHJldmlldyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcbiAgLnByZXZpZXcge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbi5wcmV2aWV3LXBpYyB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSB7XG4gIHdpZHRoOiAxOCU7XG4gIG1hcmdpbi1yaWdodDogMi41JTtcbn1cblxuLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTc3cHggIWltcG9ydGFudDtcbn1cblxuLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGEge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi50YWItY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50YWItY29udGVudCBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XG4gIGFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xufVxuXG4uY2FyZERldGFpbHMge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBwYWRkaW5nOiAzZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTk3cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG4uZGV0YWlscyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbG9ycyB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ucHJvZHVjdC10aXRsZSwgLnByaWNlLCAuc2l6ZXMsIC5jb2xvcnMge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jaGVja2VkLCAucHJpY2Ugc3BhbiB7XG4gIGNvbG9yOiAjZmY5ZjFhO1xufVxuXG4ucHJvZHVjdC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5zaXplIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc2l6ZTpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5jb2xvciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uY29sb3I6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYWRkLXRvLWNhcnQsIC5saWtlIHtcbiAgYmFja2dyb3VuZDogI2ZmOWYxYTtcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XG59XG5cbi5hZGQtdG8tY2FydDpob3ZlciwgLmxpa2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYjM2ODAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5vdC1hdmFpbGFibGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG59XG5cbi5ub3QtYXZhaWxhYmxlOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcbiAgY29udGVudDogXCLvgI1cIjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZmY5ZjFhO1xufVxuXG4uZ3JlZW4ge1xuICBiYWNrZ3JvdW5kOiAjODVhZDAwO1xufVxuXG4uYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMwMDc2YWQ7XG59XG5cbi50b29sdGlwLWlubmVyIHtcbiAgcGFkZGluZzogMS4zZW07XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBvcGFjaXR5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xuLnN0YXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kZXRhaWxTdGFyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYnRuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc20tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnNtLXRleHQtMSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmdyZWVuLXRhYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEM4NTM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweCAzcHggNXB4IDNweDtcbn1cblxuLmJ0bi1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTY0QTE5O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYnRuLXJlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRjM2MEM7XG59XG5cbi5idG4tcmVkOmZvY3VzIHtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtd2lkdGg6IDA7XG59XG5cbi5yb3VuZC1pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmZhLWNpcmNsZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNFRUVFRUY7XG59XG5cbi5ncmVlbi1kb3Qge1xuICBjb2xvcjogIzRDQUY1MDtcbn1cblxuLnJlZC1kb3Qge1xuICBjb2xvcjogI0U2NEExOTtcbn1cblxuLnllbGxvdy1kb3Qge1xuICBjb2xvcjogI0ZGRDU0Rjtcbn1cblxuLmdyZXktdGV4dCB7XG4gIGNvbG9yOiAjQkRCREJEO1xufVxuXG4uZ3JlZW4tdGV4dCB7XG4gIGNvbG9yOiAjNENBRjUwO1xufVxuXG4uYmxvY2sge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRjVFRUVFO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0Y1RUVFRTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUVFRUU7XG59XG5cbi5wcm9maWxlLXBpYyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufVxuXG4ucmF0aW5nLWRvdCB7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi52aWEge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBoZWlnaHQ6IDI4cHg7XG59XG5cbi8qIEJhc2Ugc3R5bGluZyovXG4ucG9wb3Zlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNlNDQ0NDQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvcG92ZXJfX3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnBvcG92ZXJfX2NvbnRlbnQge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBsZWZ0OiAtMTAwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4ucG9wb3Zlcl9fd3JhcHBlcjpob3ZlciAucG9wb3Zlcl9fY29udGVudCB7XG4gIHotaW5kZXg6IDEwO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjc1LCAtMC4wMiwgMC4yLCAwLjk3KTtcbn1cblxuLnBvcG92ZXJfX21lc3NhZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmNhcmREaXYge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5jYXJkbWVyY2hhbnQge1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5jYXJkbWVyY2hhbnQgaDEge1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG59XG5cbi5wcmljZW1lcmNhaG50IHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLm1lcmNoYW50TmFtZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5jYXJkbWVyY2hhbnQgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY2FyZG1lcmNoYW50IGJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnJvd1NlZ3JlZ2F0ZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xufVxuXG4uc3Rhci1yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDNlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5iYWNrLXN0YXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNjY2M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggMTBweCAjODQzYTNhO1xufVxuXG4uZnJvbnQtc3RhcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI0FBMDAwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggI0FBMDAwMDtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDAgIWltcG9ydGFudDtcbn1cblxuLnRvcG5hdiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnRvcG5hdiBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICNBQTAwMDA7XG4gIG9wYWNpdHk6IDE7XG59XG4udG9wbmF2IGE6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0FBMDAwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9wbmF2IGEuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNBQTAwMDA7XG59XG5cbi50b3BuYXYgYSB7XG4gIHBhZGRpbmc6IDAuMDVyZW0gMi45cmVtO1xufVxuXG4uZGlzY291bnRGZWlsZCB7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5oZWFkaW5nQm9yZGVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0FBMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGluZ0JvcmRlciBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb2xsYXBzZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpsaW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZm9ydW1UYWJBY3RpdmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNBQTAwMDAgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ydW1UYWJBY3RpdmVsaSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQUEwMDAwICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnVJbWFnZSB7XG4gIHdpZHRoOiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uc3VibWVudUltYWdlIHtcbiAgd2lkdGg6IDQ0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUEwMDAwICFpbXBvcnRhbnQ7XG59XG5cbmZpZ3VyZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWluLXdpZHRoOiA1N3B4O1xufVxuXG4uY2FyZC1sb2FkZXIxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIC0xcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgcGFkZGluZzogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDM1MHB4O1xufVxuLmNhcmQtbG9hZGVyMTpvbmx5LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5jYXJkLWxvYWRlcjE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG4gIGJveC1zaGFkb3c6IC00OHB4IDc4cHggMCAtNDhweCAjZWRlZGVkLCAtNTFweCAxMDJweCAwIC01MXB4ICNlZGVkZWQ7XG59XG4uY2FyZC1sb2FkZXIxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1uYW1lOiBsb2FkZXItYW5pbWF0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDgxJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDgxJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA4MSUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiMwMGZmZmZmZlwiLCBlbmRDb2xvcnN0cj1cIiMwMGZmZmZmZlwiLEdyYWRpZW50VHlwZT0xICk7XG59XG5cbi5BQ2xhc3Mge1xuICByaWdodDogLTE2cHg7XG4gIHRvcDogLTExcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNBQTAwMDA7XG59XG5cbi5zdWJtZW51SW1hZ2Uge1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQTAwMDAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAudG9wbmF2IGEge1xuICAgIHBhZGRpbmc6IDAuMDVyZW0gMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuXG4gIC5oZWFkaW5nQm9yZGVyIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICBmaWd1cmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBtaW4td2lkdGg6IDU3cHg7XG4gIH1cblxuICAuY29udGFpbmVyMSB7XG4gICAgd2lkdGg6IDMyNXB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxuXG4gIC5jYXJkLWhlYWQge1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cblxuICAubmF2c3VtZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogdW5zZXQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG5cbiAgdWwuc3VibWVudSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIHVsLnN1Ym1lbnUgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB6b29tOiAxO1xuICB9XG5cbiAgLmJ0bi1kYW5nZXIge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC50b3BuYXYgYSB7XG4gICAgcGFkZGluZzogMC4wMmVtIDAuMnJlbTtcbiAgICBmb250LXNpemU6IDdweDtcbiAgfVxuXG4gIC50cmFja0lkQ29tTSB7XG4gICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb250YWluZXIxIHtcbiAgICB3aWR0aDogMjk1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG59XG4uYmFja0J1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udHJhY2tJZENvbU0ge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5maWdjYXB0aW9uMSB7XG4gIG1heC13aWR0aDogNzNweDtcbn1cblxuLm5hdnN1bWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG51bC5pdGVtTGlzdCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb290ZXJNIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaW5wdXQtbnVtYmVyTSB7XG4gIHdpZHRoOiAxNCUgIWltcG9ydGFudDtcbiAgZmxleDogMSAxIDAlO1xufVxuXG4uUGx1c2J1dHRvbk0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW46IDRweCAycHg7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5jYXJ0TW9iIHtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hcHBseUJ0bU0ge1xuICBmb250LXNpemU6IDlweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmRpc2NvdW50RmVpbGQge1xuICB3aWR0aDogODAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shoping/addproduct/addproduct.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shoping/addproduct/addproduct.component.ts ***!
    \************************************************************/

  /*! exports provided: AddproductComponent */

  /***/
  function srcAppShopingAddproductAddproductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddproductComponent", function () {
      return AddproductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../delivery/delivery.service */
    "./src/app/delivery/delivery.service.ts");
    /* harmony import */


    var _shared_api_link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../shared/api-link.service */
    "./src/app/shared/api-link.service.ts");
    /* harmony import */


    var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../dashboard/dashboard.service */
    "./src/app/dashboard/dashboard.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _shoping_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shoping.service */
    "./src/app/shoping/shoping.service.ts");
    /* harmony import */


    var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! sweetalert2/src/sweetalert2.scss */
    "./node_modules/sweetalert2/src/sweetalert2.scss");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.all.min.js */
    "./node_modules/sweetalert2/dist/sweetalert2.all.min.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AddproductComponent = /*#__PURE__*/function () {
      function AddproductComponent(formBuilder, modalService, fetch, dasboard, api, deliveryService) {
        _classCallCheck(this, AddproductComponent);

        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.fetch = fetch;
        this.dasboard = dasboard;
        this.api = api;
        this.deliveryService = deliveryService;
        this.addClassifiedTemplate = false;
        this.uFrm = new FormData();
        this.selectedFile = "";
        this.fileNames = [];
        this.imagePath = "";
        this.imgURL = [];
        this.editorConfig = {
          editable: true,
          spellcheck: true,
          height: 'auto',
          minHeight: '100px',
          maxHeight: 'auto',
          width: 'auto',
          minWidth: '0',
          translate: 'yes',
          enableToolbar: false,
          showToolbar: true,
          placeholder: 'Enter text here...',
          defaultParagraphSeparator: '',
          defaultFontName: '',
          defaultFontSize: '',
          fonts: [{
            "class": 'arial',
            name: 'Arial'
          }, {
            "class": 'times-new-roman',
            name: 'Times New Roman'
          }, {
            "class": 'calibri',
            name: 'Calibri'
          }, {
            "class": 'comic-sans-ms',
            name: 'Comic Sans MS'
          }],
          customClasses: [{
            name: 'quote',
            "class": 'quote'
          }, {
            name: 'redText',
            "class": 'redText'
          }, {
            name: 'titleText',
            "class": 'titleText',
            tag: 'h1'
          }],
          uploadUrl: 'https://personal.softdocket.com/api/comunication/imageupload123',
          uploadWithCredentials: false,
          sanitize: false,
          toolbarPosition: 'top',
          toolbarHiddenButtons: [['undo', 'redo', 'underline', 'strikeThrough', 'subscript', 'superscript', 'indent', 'outdent', 'heading', 'fontName'], ['fontSize', 'backgroundColor', 'customClasses', 'link', 'unlink', 'insertImage', 'foregroundColorPicker-', 'insertVideo', 'insertHorizontalRule', 'removeFormat', 'toggleEditorMode', 'superscript', 'strikethrough', 'subscript']]
        };
        this.platformMobile = false;
        this.uploadedVideo = "";
        this.uFrmvideo = new FormData();
        this.imageUploadPercent = 0;
        this.objArray = [];
        this.profInfo = {};
        this.setImageName = "";
        this.allProduct = [];
        this.allProductWithoutCategory = [];
        this.loadingTrue = false;
        this.editProductStatus = false;
        this.currentIndexId = "";
        this.editfileNames = [];
        this.nameId = "";
        this.detailClassifiedStatus = true;
        this.detailedImages = [];
        this.detailPageData = [];
        this.ratingPercentage = 0;
        this.setCurrentIndexImage = 0;
        this.orderList = [];
        this.myOrderStatus = false;
        this.allOrderList = [];
        this.orderLoading = false;
        this.currentTab = 1;
        this.discount = 0;
        this.setClassified = "category1";
        this.subCategoryClassified = "subCategorytype11";
        this.selectedClassified = "";
        this.ClassifiedListData = [];
        this.subCategoryClassifiedList = {
          "category2": [{
            "name": "Staples",
            images: "staples.jpg",
            "type": "subCategorytype21"
          }, {
            "name": "Snacks & Beverages",
            images: "snackbreverages.jpg",
            "type": "subCategorytype22"
          }, {
            "name": " Packaged Food",
            images: "snackbreverages.jpg",
            "type": "subCategorytype23"
          }, {
            "name": "Personal & Baby Care",
            images: "personalandbabycare.png",
            "type": "subCategorytype24"
          }, {
            "name": "Household Care",
            images: "householdcare.jpg",
            "type": "subCategorytype25"
          }, {
            "name": "Dairy & Eggs",
            images: "dairyandeggs.jpg",
            "type": "subCategorytype26"
          }, {
            "name": "Home & Kitchen",
            images: "homekitchen.jpg",
            "type": "subCategorytype27"
          }],
          "category3": [{
            "name": "Mobile less 5000",
            images: "",
            "type": "subCategorytype31"
          }, {
            "name": "Mobile accessories",
            images: "",
            "type": "subCategorytype32"
          }, {
            "name": "Mobile Less then 10000",
            images: "",
            "type": "subCategorytype33"
          }, {
            "name": "Mobile Less then 15000",
            images: "",
            "type": "subCategorytype34"
          }, {
            "name": "Mobile Price 15K -30K",
            images: "",
            "type": "subCategorytype35"
          }, {
            "name": "Mobile Price 30000 - 50K",
            images: "",
            "type": "subCategorytype36"
          }, {
            "name": "Mobile Price 50k and above",
            images: "",
            "type": "subCategorytype37"
          }],
          "category4": [{
            "name": "Mens Top Wear",
            images: "",
            "type": "subCategorytype41"
          }, {
            "name": "Mens Bottam Wear",
            images: "",
            "type": "subCategorytype42"
          }, {
            "name": "Women Eiths",
            images: "",
            "type": "subCategorytype43"
          }, {
            "name": "Women western",
            images: "",
            "type": "subCategorytype44"
          }, {
            "name": "Mens foot wear",
            images: "",
            "type": "subCategorytype45"
          }, {
            "name": "Women foot wear",
            images: "",
            "type": "subCategorytype46"
          }, {
            "name": "Watches and Accesories",
            images: "",
            "type": "subCategorytype47"
          }, {
            "name": "Bags,Suitcase",
            images: "",
            "type": "subCategorytype48"
          }, {
            "name": "Boys Dress",
            images: "",
            "type": "subCategorytype49"
          }, {
            "name": "Girls Dress",
            images: "",
            "type": "subCategorytype410"
          }],
          "category5": [{
            "name": "Audio",
            images: "",
            "type": "subCategorytype51"
          }, {
            "name": "Camera and accessories",
            images: "",
            "type": "subCategorytype52"
          }, {
            "name": "Computer Phripherals",
            images: "",
            "type": "subCategorytype53"
          }, {
            "name": "Laptop and desktop",
            images: "",
            "type": "subCategorytype54"
          }, {
            "name": "Laptop Accesories",
            images: "",
            "type": "subCategorytype55"
          }, {
            "name": "Healt and personal care",
            images: "",
            "type": "subCategorytype56"
          }, {
            "name": "Power bank",
            images: "",
            "type": "subCategorytype57"
          }, {
            "name": "Storage",
            images: "",
            "type": "subCategorytype58"
          }, {
            "name": "Smart wearable",
            images: "",
            "type": "subCategorytype59"
          }, {
            "name": "Smart home automation",
            images: "",
            "type": "subCategorytype510"
          }, {
            "name": "Tablets and Accessories",
            images: "",
            "type": "subCategorytype511"
          }],
          "category6": [{
            "name": "Home Furnishing",
            images: "",
            "type": "subCategorytype61"
          }, {
            "name": "Living room",
            images: "",
            "type": "subCategorytype62"
          }, {
            "name": "Kitchen and Dining",
            images: "",
            "type": "subCategorytype63"
          }, {
            "name": "Bed Room",
            images: "",
            "type": "subCategorytype64"
          }, {
            "name": "Tool & Utility",
            images: "",
            "type": "subCategorytype65"
          }, {
            "name": "Lighting & Electrical",
            images: "",
            "type": "subCategorytype66"
          }, {
            "name": "Cleaning and Bath",
            images: "",
            "type": "subCategorytype67"
          }, {
            "name": "Kids Furniture",
            images: "",
            "type": "subCategorytype68"
          }, {
            "name": "Pets and gardening",
            images: "",
            "type": "subCategorytype69"
          }],
          "category7": [{
            "name": "Television",
            images: "",
            "type": "subCategorytype71"
          }, {
            "name": "Washing Mechine",
            images: "",
            "type": "subCategorytype72"
          }, {
            "name": "Air Conditioner",
            images: "",
            "type": "subCategorytype73"
          }, {
            "name": "Refrigerator",
            images: "",
            "type": "subCategorytype74"
          }, {
            "name": "Kitchen Appliances",
            images: "",
            "type": "subCategorytype75"
          }, {
            "name": "Home Appliances",
            images: "",
            "type": "subCategorytype76"
          }],
          "category8": [{
            "name": "Beauty and Personal care",
            images: "",
            "type": "subCategorytype81"
          }, {
            "name": "Mens Grooming",
            images: "",
            "type": "subCategorytype82"
          }, {
            "name": "Food and drinking",
            images: "",
            "type": "subCategorytype83"
          }, {
            "name": "Baby Care",
            images: "",
            "type": "subCategorytype84"
          }, {
            "name": "Nutrition and Health Care",
            images: "",
            "type": "subCategorytype85"
          }, {
            "name": "Toys and School Supplies",
            images: "",
            "type": "subCategorytype86"
          }, {
            "name": "Sports and Fitness",
            images: "",
            "type": "subCategorytype87"
          }, {
            "name": "Books and Music",
            images: "",
            "type": "subCategorytype88"
          }, {
            "name": "Stationary & Office supplies",
            images: "",
            "type": "subCategorytype89"
          }, {
            "name": "Saftey and Hygiene Essentials",
            images: "",
            "type": "subCategorytype810"
          }],
          "category9": [{
            "name": "Fruits",
            images: "fruitvegetable.jpg",
            "type": "subCategorytype91"
          }, {
            "name": "Vegetable",
            images: "fruitvegetable.jpg",
            "type": "subCategorytype92"
          }]
        };
        this.classifiedListData = [];
        this.ShowMenu = true;
      }

      _createClass(AddproductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (window.innerWidth < 800) {
            this.platformMobile = true;
          }

          this.getProfileInfo();
          this.classifiedForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            subcategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            keyFeatureOne: [''],
            keyFeatureTwo: [''],
            keyFeatureThree: [''],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.myproduct(false);
        }
      }, {
        key: "uploadClassifiedVideo",
        value: function uploadClassifiedVideo(event, template) {
          var _this2 = this;

          console.log(event.target);
          this.modalRef = this.modalService.show(template);

          for (var i = 0; i < event.target.files.length; i++) {
            var fileName = event.target.files[i].name.split('.');
            var fName = fileName[0].toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            this.selectedFile = fName + "-" + Date.now().toString() + '.' + fileName[fileName.length - 1];
            this.fileNames.push({
              "name": this.selectedFile,
              "extension": event.target.files[i].name.split('.').pop()
            });
            this.uFrmvideo.append('forumPhoto', event.target.files[i], this.selectedFile);
            this.uploadedVideo = this.selectedFile;
          }

          this.fetch.uploadImg(this.uFrmvideo).subscribe(function (imageData) {
            _this2.imageUploadPercent = (imageData.loaded / imageData.total * 100).toFixed(2);

            if (imageData.loaded != undefined && imageData.loaded == imageData.total) {
              _this2.modalRef.hide();

              _this2.uFrmvideo = new FormData();
              _this2.uploadedVideo = _this2.selectedFile;
              sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                title: "Uploaded successfully.",
                text: "",
                icon: 'success',
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false
              });
            } else {}
          });
        }
      }, {
        key: "uploadClassifiedattachment",
        value: function uploadClassifiedattachment(event) {
          var _this3 = this;

          console.log(event.target);

          for (var i = 0; i < event.target.files.length; i++) {
            var fileName = event.target.files[i].name.split('.');
            var fName = fileName[0].toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            this.selectedFile = fName + "-" + Date.now().toString() + '.' + fileName[fileName.length - 1];
            this.fileNames.push({
              "name": this.selectedFile,
              "extension": event.target.files[i].name.split('.').pop()
            });
            this.uFrm.append('classifiedImages', event.target.files[i], this.selectedFile);
            var mimeType = event.target.files[i].type;

            if (mimeType.match(/image\/*/) == null) {
              return;
            }

            console.log(this.fileNames);
            var reader = new FileReader();
            this.imagePath = event.target.files[i];
            reader.readAsDataURL(event.target.files[i]);

            reader.onload = function (_event) {
              _this3.imgURL.push(reader.result);
            };
          }
        }
      }, {
        key: "selectCategory",
        value: function selectCategory(val) {
          this.setClassified = val;

          if (val == '') {
            this.objArray = [];
          }
        }
      }, {
        key: "addProduct",
        value: function addProduct(template) {
          var _this4 = this;

          this.imageUploadPercent = 0;
          var data = this.classifiedForm.value;
          data["fileName"] = this.fileNames;
          data["ownerNumber"] = this.profInfo.mobileNo;
          data["SenderName"] = this.profInfo.fstName + ' ' + this.profInfo.lstName;
          data["companyName"] = this.profInfo.companyName;
          data["status"] = "open";
          data["createdOn"] = new Date().getTime();
          data["currentIndexId"] = this.currentIndexId;
          var url = "product/addProduct";
          var msg = "Product add successfully.";

          if (this.editProductStatus) {
            data["nameId"] = data.name.toLowerCase();
            msg = "Product edit successfully.";
            url = "product/editProduct";
          }

          this.fetch.addProduct(data, url).subscribe(function (data1) {
            console.log(data1);

            if (data1.status != 410) {
              _this4.classifiedForm.reset();

              _this4.fileNames = [];
              sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                title: msg,
                text: "",
                icon: "success"
              });

              _this4.fetch.uploadclassifiedImage(_this4.uFrm).subscribe(function () {
                _this4.uFrm = new FormData();
                _this4.imgURL = [];
                _this4.uploadedVideo = "";
                _this4.imageUploadPercent = (data.loaded / data.total * 100).toFixed(2);

                if (data.loaded == data.total) {} else {}
              });
            } else {}
          }, function (error) {
            sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
              title: "Product Already exit.",
              text: "",
              icon: 'warning',
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false
            });
          });
        }
      }, {
        key: "getProfileInfo",
        value: function getProfileInfo() {
          var _this5 = this;

          this.dasboard.getProfInfo().subscribe(function (res) {
            _this5.profInfo = res;
            console.log(_this5.profInfo);

            _this5.dasboard.setProfileInfo(_this5.profInfo);
          }, function (err) {});
        }
      }, {
        key: "openVideo",
        value: function openVideo(template, data) {
          this.modalRef = this.modalService.show(template);
          console.log(data);
          this.setImageName = data.name;
        }
      }, {
        key: "myproduct",
        value: function myproduct(type) {
          this.addClassifiedTemplate = type;
          this.myOrderStatus = type;

          if (!type) {
            this.detailClassifiedStatus = true;
            this.getMyProduct();
          } else {
            this.classifiedForm.reset();
            this.myOrderStatus = false;
            this.addClassifiedTemplate = true;
          }
        }
      }, {
        key: "getMyProduct",
        value: function getMyProduct() {
          var _this6 = this;

          this.loadingTrue = true;
          this.fetch.getAllProduct({
            "number": this.profInfo.mobileNo
          }).subscribe(function (data) {
            _this6.loadingTrue = false;
            _this6.allProductWithoutCategory = data;

            _this6.filterProductByCategory();
          });
        }
      }, {
        key: "removeVideo",
        value: function removeVideo() {
          var index = this.fileNames.findIndex(function (data) {
            return data.extension == 'mp4';
          });
          this.fileNames.splice(index, 1);
          this.uploadedVideo = "";
        }
      }, {
        key: "editProduct",
        value: function editProduct(data) {
          this.currentIndexId = data.doc._id;
          this.nameId = data.doc.nameId;
          this.editProductStatus = true;
          this.addClassifiedTemplate = true;
          this.selectCategory(data.doc.category);
          console.log(data.doc.category);
          this.classifiedForm.patchValue({
            "name": data.doc.name,
            "category": data.doc.category,
            "subcategory": data.doc.subcategory,
            "price": data.doc.price,
            "description": data.doc.description,
            "quantity": data.doc.quantity,
            "keyFeatureOne": data.doc.keyFeatureOne,
            "keyFeatureTwo": data.doc.keyFeatureTwo,
            "keyFeatureThree": data.doc.keyFeatureThree,
            "brand": data.doc.brand,
            "showNumber": data.doc.showNumber
          });
          this.fileNames = data.doc.fileName;
          var index = data.doc.fileName.findIndex(function (data) {
            return data.extension == 'mp4';
          });
          this.imgURL = data.doc.fileName.filter(function (data) {
            return data.extension != 'mp4';
          });

          if (index > -1) {
            this.uploadedVideo = data.doc.fileName[index].name;
          }

          console.log(data);
        }
      }, {
        key: "removeClassified",
        value: function removeClassified(index) {
          this.fileNames.splice(index, 1);
          console.log(this.fileNames);
          this.imgURL.splice(index, 1);
        }
      }, {
        key: "removeClassifiedEdit",
        value: function removeClassifiedEdit(index) {
          this.editfileNames.splice(index, 1);
          console.log(this.fileNames);
        }
      }, {
        key: "detailProduct",
        value: function detailProduct(item) {
          this.detailPageData = item;
          this.detailedImages = this.detailPageData.doc.fileName;

          if (this.detailPageData.doc.comment != undefined) {
            this.detailPageData.doc.comment.reverse();
          } else {
            this.detailPageData.doc.comment = [];
          }

          this.detailClassifiedStatus = false;
          this.ratingPercentage = this.detailPageData.averageRating / 5 * 100;
        }
      }, {
        key: "setCurrentImage",
        value: function setCurrentImage(index) {
          this.setCurrentIndexImage = index;
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(id, index) {
          var _this7 = this;

          sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: "Delete Product",
            text: "Are you sure you want to delete.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: 'Yes !',
            cancelButtonText: 'No'
          }).then(function (isConfirm) {
            if (isConfirm.isConfirmed) {
              _this7.fetch.delProduct({
                id: id
              }).subscribe(function (data) {
                _this7.allProduct.splice(index, 1);

                sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                  title: "Deleted Successfullt",
                  text: "",
                  icon: "success"
                });
              });
            }
          });
        }
      }, {
        key: "myorders",
        value: function myorders() {
          var _this8 = this;

          this.myOrderStatus = true;
          this.currentTab = 1;
          this.orderLoading = true;
          this.fetch.myorder().subscribe(function (data) {
            _this8.allOrderList = JSON.parse(JSON.stringify(data));
            _this8.orderLoading = false; // console.log(this.allOrderList);
            // this.orderList = this.allOrderList.filter((d:any) => d.status == 'open');

            _this8.changeTab(1, 'open');
          });
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(id, type, index, j) {
          var _this9 = this;

          var data = {};
          data = {
            "id": id,
            "value": {
              status: type
            }
          };

          if (type == 'acceptedByMerchant') {
            data = {
              "id": id,
              "value": {
                status: type,
                list: this.orderList[j].values[index].list,
                "totalamount": this.orderList[j].values[index].totalamount
              }
            };
          }

          this.fetch.acceptedInvoice(data).subscribe(function (data) {
            _this9.orderList[j].values[index].status = type;
            sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
              title: "Updated successfully.",
              text: "",
              icon: 'success',
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false
            });
          });
        }
      }, {
        key: "changeTab",
        value: function changeTab(type, val) {
          var _this10 = this;

          this.currentTab = type;
          var currentOrderData = [];

          if (val == 'acceptedByMerchant') {
            currentOrderData = this.allOrderList.filter(function (d) {
              return d.status == 'acceptedByMerchant' || d.status == 'invoicerequestByretailer';
            });
          } else {
            currentOrderData = this.allOrderList.filter(function (d) {
              return d.status == val;
            });
          }

          var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["from"])(currentOrderData);
          source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["groupBy"])(function (person) {
            return person.orderId;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["mergeMap"])(function (group) {
            return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["reduce"])(function (acc, cur) {
              acc.values.push(cur);
              return acc;
            }, {
              orderId: group.key,
              values: []
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["toArray"])()).subscribe(function (val) {
            _this10.orderList = val;
            console.log(_this10.orderList);
          });
        }
      }, {
        key: "InvoiceSend",
        value: function InvoiceSend(data, type, index, j) {
          var _this11 = this;

          var selectedProduct = [];
          data.productList.map(function (d) {
            selectedProduct.push({
              "name": d.name,
              "quantity": data.cart[d.name.toLowerCase()],
              "price": d.price
            });
          });

          if (data.discount == undefined) {
            data.discount = 0;
          }

          var requestData = {
            "id": data._id,
            "value": {
              status: type
            },
            "data": data
          };
          this.fetch.InvoiceSend(requestData).subscribe(function () {
            _this11.orderList[j].values[index].status = type;
            sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
              title: "Updated successfully.",
              text: "",
              icon: 'success',
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false
            });

            _this11.dasboard.createNewInvoice({
              "selectedProducts": selectedProduct,
              "company": _this11.profInfo.companyName,
              "type": "shop",
              "totalamount": (data.totalamount - data.discount).toString()
            }).subscribe(function (res) {
              res["mobilenumber"] = data.senderNumber;
              res['domain'] = _this11.profInfo.domain;
              res['companyName'] = _this11.profInfo.companyName;
              res['type'] = 'shop';
              res['totalamount'] = data.totalamount - data.discount;
              res['shippingAddress'] = data.address;

              _this11.deliveryService.generateImageNewInvoice(res).subscribe(function () {});
            }, function (err) {});
          });
        }
      }, {
        key: "applyDiscount",
        value: function applyDiscount(id, index, j) {
          var _this12 = this;

          if (this.orderList[j].values[index].totalamount > this.discount && parseInt(this.discount) > 0) {
            this.fetch.updateDiscount({
              "id": id,
              "val": {
                "discount": parseInt(this.discount)
              }
            }).subscribe(function () {
              //this.orderList[j].values[index].totalamount = parseInt(this.orderList[j].values[index].totalamount) - parseInt(this.discount);
              _this12.orderList[j].values[index]['discount'] = _this12.discount;
            });
          } else {
            sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
              title: "Discount shoud not be greater than total amount",
              text: "",
              icon: 'warning',
              timer: 2000,
              showCancelButton: false,
              showConfirmButton: false
            });
          }
        }
      }, {
        key: "updateValue",
        value: function updateValue(index, value) {
          //this.orderList[j].values[index].totalamount = this.orderList[j].values[index].totalamount - parseInt(value);
          this.discount = parseInt(value);
        }
      }, {
        key: "removeProduct",
        value: function removeProduct(index, key, type, j) {
          var _this13 = this;

          console.log(key);
          console.log(this.orderList[j].values[index].productList);

          if (type) {
            delete this.orderList[j].values[index].list[key];
          } else {
            this.orderList[j].values[index].list[key] = this.orderList[j].values[index].productList.filter(function (data) {
              return data.name.toLowerCase() == key.toLowerCase();
            })[0].price;
          }

          this.orderList[j].values[index].totalamount = 0;
          Object.keys(this.orderList[j].values[index].list).forEach(function (key, value) {
            return _this13.orderList[j].values[index].totalamount += _this13.orderList[j].values[index].list[key] * _this13.orderList[j].values[index].cart[key];
          });
        }
      }, {
        key: "setFirstCategory",
        value: function setFirstCategory(type) {
          this.setClassified = type;
          this.filterProductByCategory();
        }
      }, {
        key: "setSecondCategory",
        value: function setSecondCategory(type, subCategory) {
          this.setClassified = type;
          this.subCategoryClassified = subCategory;
          this.filterProductByCategoryAndSubCategory();
        }
      }, {
        key: "filterProductByCategory",
        value: function filterProductByCategory() {
          var _this14 = this;

          this.allProduct = JSON.parse(JSON.stringify(this.allProductWithoutCategory.filter(function (data) {
            return data.doc.category == _this14.setClassified;
          })));
        }
      }, {
        key: "filterProductByCategoryAndSubCategory",
        value: function filterProductByCategoryAndSubCategory() {
          var _this15 = this;

          this.allProduct = JSON.parse(JSON.stringify(this.allProductWithoutCategory.filter(function (data) {
            return data.doc.category == _this15.setClassified && data.doc.subcategory == _this15.subCategoryClassified;
          })));
        }
      }, {
        key: "addToTopOffer",
        value: function addToTopOffer(val) {
          if (val) {
            this.classifiedForm.patchValue({
              'category': 'category1'
            });
            this.classifiedForm.patchValue({
              'subcategory': 'category1'
            });
          } else {
            this.classifiedForm.patchValue({
              'category': null
            });
            this.classifiedForm.patchValue({
              'subcategory': null
            });
          }
        }
      }]);

      return AddproductComponent;
    }();

    AddproductComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]
      }, {
        type: _shoping_service__WEBPACK_IMPORTED_MODULE_7__["ShopingService"]
      }, {
        type: _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]
      }, {
        type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_2__["ApiLinkService"]
      }, {
        type: _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_1__["DeliveryService"]
      }];
    };

    AddproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-addproduct',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addproduct.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shoping/addproduct/addproduct.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addproduct.component.scss */
      "./src/app/shoping/addproduct/addproduct.component.scss"))["default"]]
    })], AddproductComponent);
    /***/
  },

  /***/
  "./src/app/shoping/shoping-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/shoping/shoping-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ShoppingAppRoutingModule */

  /***/
  function srcAppShopingShopingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingAppRoutingModule", function () {
      return ShoppingAppRoutingModule;
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


    var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addproduct/addproduct.component */
    "./src/app/shoping/addproduct/addproduct.component.ts");

    var routes = [{
      path: "shoping/addshoping",
      component: _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_3__["AddproductComponent"]
    }];

    var ShoppingAppRoutingModule = function ShoppingAppRoutingModule() {
      _classCallCheck(this, ShoppingAppRoutingModule);
    };

    ShoppingAppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ShoppingAppRoutingModule);
    /***/
  },

  /***/
  "./src/app/shoping/shoping.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/shoping/shoping.module.ts ***!
    \*******************************************/

  /*! exports provided: ShopingModule */

  /***/
  function srcAppShopingShopingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopingModule", function () {
      return ShopingModule;
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


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./addproduct/addproduct.component */
    "./src/app/shoping/addproduct/addproduct.component.ts");
    /* harmony import */


    var _shoping_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shoping-routing.module */
    "./src/app/shoping/shoping-routing.module.ts");
    /* harmony import */


    var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @kolkov/angular-editor */
    "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");

    var ShopingModule = function ShopingModule() {
      _classCallCheck(this, ShopingModule);
    };

    ShopingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_8__["AddproductComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__["OwlModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _shoping_routing_module__WEBPACK_IMPORTED_MODULE_9__["ShoppingAppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__["AngularEditorModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot()]
    })], ShopingModule);
    /***/
  }
}]);
//# sourceMappingURL=shoping-shoping-module-es5.js.map