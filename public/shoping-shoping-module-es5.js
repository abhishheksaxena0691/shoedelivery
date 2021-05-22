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


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"page-header\">\n    <div class=\"row\">\n          <div class=\"col-12 mt-2 mb-2\">\n            <span style=\"float: right;\"><button type=\"button\" class=\"btn btn-danger ml-2\" (click)=\"myproduct(true)\">Add Product</button></span>\n            <span style=\"float: right;\"><button type=\"button\" class=\"btn btn-danger ml-2\" (click)=\"myproduct(false)\">Listing</button></span>\n            <span style=\"float: right;\"><button type=\"button\" class=\"btn btn-danger\" (click)=\"myorders()\">My Orders</button></span>\n          </div>\n      </div>\n  </div>\n    <ng-template [ngIf]= \"!myOrderStatus\" [ngIfElse]=\"myOrderStatus1\">\n          <ng-template [ngIf]= \"addClassifiedTemplate\" [ngIfElse]=\"classifiedListing\">\n            <div class=\"container\" style=\"background-color: #fff;\">\n                  <form [formGroup]=\"classifiedForm\" class=\"form-horizontal\">\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                          <div class=\"form-group\">\n                            <label for=\"memberId\" class=\"control-label\">Item name</label>\n                            <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"memberId\"/>\n\n                          </div>\n                          <div class=\"form-group\">\n                            <input class=\"form-check-input com ml-2\" type=\"checkbox\" (change)=\"addToTopOffer($event.target.checked)\" [checked]=\"classifiedForm.value.category == 'category1'\"   name=\"committee\"/>\n                            <label class=\"form-check-label ml-4\">\n                               Make Top offer\n                            </label>\n                        </div>\n                          <div class=\"form-group\"  *ngIf=\"classifiedForm.value.category != 'category1'\">\n                              <label for=\"categoryId\" class=\"control-label\">Category</label>\n                              <select class=\"form-control\"   formControlName=\"category\" id=\"categoryId\" (change)=\"selectCategory($event.target.value)\">\n                                <option value=\"\" >Select</option>\n                                <!-- <option value=\"category1\"> Top Offer</option> -->\n                                <option value=\"category2\">Grocery</option>\n                                <option value=\"category3\">Mobiles </option>\n                                <option value=\"category4\">Fashion</option>\n                                <option value=\"category5\">Electronics</option>\n                                <option value=\"category6\">Home</option>\n                                <option value=\"category7\">Applicances</option>\n                                <option value=\"category8\">Beauty & Toys </option>\n                                <option value=\"category9\">Fruits and vegetable </option>\n                                <option value=\"category10\">Medical  </option>\n                                <option value=\"category11\">Saloon</option>\n                                <option value=\"category12\">Repair </option>\n                              </select>\n                          </div>\n\n                          <div class=\"form-group\" *ngIf=\"classifiedForm.value.category != 'category1'\">\n                            <label for=\"categoryId\" class=\"control-label\">Sub Category</label>\n                            <select class=\"form-control\"   formControlName=\"subcategory\" id=\"categoryId\">\n                              <option value=\"\" >Select</option>\n                              <option *ngFor=\"let obj of subCategoryClassifiedList[setClassified]\" [value]=\"obj.type\">{{obj.name}}</option>\n                            </select>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"categoryId\" class=\"control-label\">Brand</label>\n                            <input type=\"text\" formControlName=\"brand\" class=\"form-control\" id=\"brandId\"/>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"priceId\" class=\"control-label\">Price</label>\n                            <input type=\"number\" formControlName=\"price\" class=\"form-control\" id=\"priceId\"/>\n                          </div>\n\n                          <div class=\"form-group\">\n                            <label for=\"descriptionId\" class=\"control-label\">Description</label>\n                            <angular-editor [placeholder]=\"'Enter text here...'\" formControlName=\"description\"  [config]=\"editorConfig\"></angular-editor>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"quantityId\" class=\"control-label\">Quantity</label>\n                            <input type=\"text\" formControlName=\"quantity\" class=\"form-control\" id=\"quantityId\"/>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"quantityId\" class=\"control-label\">Key Features one</label>\n                            <input type=\"text\" formControlName=\"keyFeatureOne\" class=\"form-control\" id=\"quantityId\"/>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"quantityId\" class=\"control-label\">Key Features two</label>\n                            <input type=\"text\" formControlName=\"keyFeatureTwo\" class=\"form-control\" id=\"quantityId\"/>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"quantityId\" class=\"control-label\">Key Features three</label>\n                            <input type=\"text\" formControlName=\"keyFeatureThree\" class=\"form-control\" id=\"quantityId\"/>\n                          </div>\n\n\n                        </div>\n                  </div>\n                    <div class=\"row\">\n                          <div class=\"col-12 form-group\">\n                            <label for=\"file-upload\" class=\"custom-file-upload caption\"> Add Image </label>\n                            <input id=\"file-upload\" type=\"file\" (change)=\"uploadClassifiedattachment($event)\" accept=\"image/x-png, image/jpeg\"/>\n                          </div>\n                          <span style=\"color: #aa0000;\" *ngIf=\"imgURL == 0\">At least one image is required</span>\n                      </div>\n                      <div class=\"row\"  *ngIf=\"uploadedVideo == ''\">\n                        <div class=\"col-12 form-group\">\n                          <label for=\"file-upload1\" class=\"custom-file-upload caption\"> Add Video </label>\n                          <input id=\"file-upload1\" type=\"file\" (change)=\"uploadClassifiedVideo($event, uploadingFolder)\" accept=\"video/mp4\"/>\n                        </div>\n                      </div>\n                      <div class=\"row\" *ngIf=\"!editProductStatus\">\n                          <div class=\"col-12 form-group\">\n\n                            <ul class=\"nav mt-2\">\n                              <ng-container  *ngFor=\"let item of imgURL; index as i\">\n                                <li class=\"ml-2\">\n                                  <div style=\"position:relative;\">\n                                    <button type=\"submit\" class=\"close AClass\"  (click)=\"removeClassified(i)\">\n                                      <span>&times;</span>\n                                    </button>\n\n                                    <img [src]=\"item\" height=\"200\" width=\"200\"/>\n                                </div>\n                                </li>\n\n                              </ng-container>\n                            </ul>\n                          </div>\n                      </div>\n                      <div class=\"row\" *ngIf=\"editProductStatus\">\n                        <div class=\"col-12 form-group\">\n\n                          <ul class=\"nav mt-2\">\n                            <ng-container  *ngFor=\"let item of imgURL; index as i\">\n                              <li class=\"ml-2\" *ngIf=\"item.extension != 'mp4'\">\n                                <div style=\"position:relative;\">\n                                  <button type=\"submit\" class=\"close AClass\"  (click)=\"removeClassified(i)\">\n                                    <span>&times;</span>\n                                  </button>\n\n                                  <img *ngIf=\"item.name == undefined\" [src]=\"item\" height=\"200\" width=\"200\"/>\n                                  <img *ngIf=\"item.name != undefined\" [src]=\"api.delear+ 'uploads/comunication/'+ item.name\" height=\"200\" width=\"200\"/>\n                              </div>\n                              </li>\n\n                            </ng-container>\n                          </ul>\n\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-12 form-group\" *ngIf=\"uploadedVideo != ''\">\n                        <img src=\"../../../assets/images/videoThumbnail.jpg\" (click)=\"openVideo(playVideo, {'name': uploadedVideo})\" height=\"80px\" width=\"80px\"/>\n                        {{uploadedVideo}} <span class=\"close\"    (click)=\"removeVideo(i)\">&times;</span>\n                      </div>\n                        <div class=\"col-12 mt-2\">\n                          <div class=\"form-group\">\n\n                            <button type=\"button\"  *ngIf=\"!editProductStatus\" class=\"btn setColor mb-2\" [disabled]=\"(!classifiedForm.valid || imgURL.length == 0)\" (click)=\"addProduct(uploadingFolder)\">Submit</button>\n                            <button type=\"button\"  *ngIf=\"editProductStatus\" class=\"btn setColor mb-2\" [disabled]=\"(!classifiedForm.valid || imgURL.length == 0)\" (click)=\"addProduct(uploadingFolder)\">Submit</button>\n                          </div>\n                        </div>\n                    </div>\n\n                    </form>\n                </div>\n          </ng-template>\n          <ng-template #classifiedListing>\n            <ng-template [ngIf]= \"detailClassifiedStatus\" [ngIfElse]=\"productdetailsSection\">\n              <ul class=\"nav nav-tabs mt-2\" style=\"background-color: #fff;\">\n                <li class=\"nav-item active\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category1'}\"  (click)=\"setFirstCategory('category1','subCategorytype11');\">\n                  <a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category1'}\" data-toggle=\"tab\">\n                    <figure>\n                        <img src=\"../../../assets/images/BestOffericon.png\" alt=\"Trulli\" class=\"menuImage\">\n                        <figcaption>Top Offer</figcaption>\n                    </figure>\n                  </a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category2'}\" (click)=\"setFirstCategory('category2','subCategorytype21');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category2'}\" data-toggle=\"tab\">\n\n                  <figure>\n                    <img src=\"../../../assets/images/grocery.png\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Grocery</figcaption>\n                </figure>\n                  </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category3'}\"   (click)=\"setFirstCategory('category3','subCategorytype31');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category3'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/mobile.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Mobiles</figcaption>\n                </figure>\n                   </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category4'}\"  (click)=\"setFirstCategory('category4','subCategorytype41');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category4'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/fashionImages.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Fashion</figcaption>\n                </figure>\n                   </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category5'}\"  (click)=\"setFirstCategory('category5','subCategorytype51');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category5'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/electronics.png\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Electronics</figcaption>\n                </figure>\n                  </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category6'}\" (click)=\"setFirstCategory('category6','subCategorytype61');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category6'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/home.png\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Home</figcaption>\n                </figure>\n                  </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category7'}\"   (click)=\"setFirstCategory('category7','subCategorytype71');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category7'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/appliances.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Applicances</figcaption>\n                </figure>\n                  </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category8'}\"  (click)=\"setFirstCategory('category8','subCategorytype81');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category8'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/Beautyandpersonalcare.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Beauty & Toys</figcaption>\n                </figure>\n                    </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category9'}\"  (click)=\"setFirstCategory('category9','subCategorytype91');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category9'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/fruitvegetable.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Vegetable & Fruits</figcaption>\n              </figure>\n                </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category10'}\"  (click)=\"setFirstCategory('category10','subCategorytype101');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category10'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/MedicalCategory.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption class=\"figcaption1\">Medical</figcaption>\n                  </figure>\n                  </a>\n              </li>\n\n              <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category11'}\"  (click)=\"setFirstCategory('category11','subCategorytype201');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category11'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/Home_salon.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption class=\"figcaption1\">Salon</figcaption>\n                  </figure>\n                    </a>\n              </li>\n\n              <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category12'}\"  (click)=\"setFirstCategory('category12','subCategorytype301');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category12'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/Home-Repairs.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption class=\"figcaption1\">Repair</figcaption>\n                  </figure>\n                  </a>\n                </li>\n\n              </ul>\n              <div class=\"tab-content\" style=\"background-color: #fff;\">\n                <div id=\"home\" class=\"tab-pane fade in active show text-left\">\n                  Sub Menu\n                    <ul class=\"navsumenu nav-tabs submenu\">\n                      <li class=\"nav-item\" *ngFor=\"let item of subCategoryClassifiedList[setClassified]; index as i;\" [ngClass]=\"{'forumTabActiveli': subCategoryClassified == 'subCategorytype11'}\" >\n                            <a class=\"nav-link\" (click)=\"setSecondCategory(setClassified, item.type)\" [ngClass]=\"{'forumTabActive': subCategoryClassified == 'subCategorytype11'}\" data-toggle=\"tab\">\n                                <figure>\n                                  <img src=\"../../../assets/images/{{item.images}}\" alt=\"Trulli\" class=\"submenuImage\">\n                                  <figcaption class=\"figcaption1\">{{item.name}}</figcaption>\n                                </figure>\n                              </a>\n                      </li>\n                    </ul>\n                </div>\n            </div>\n              <ng-template [ngIf]=\"loadingTrue\" [ngIfElse]=\"realList\">\n                <div class=\"wrapper1\">\n                  <div class=\"row\">\n                    <div class=\"col-4\">\n                  <div class=\"card-loader1 card-loader--tabs\"></div>\n                </div>\n                <div class=\"col-4\">\n                  <div class=\"card-loader1 card-loader--tabs\"></div>\n                  </div>\n                  <div class=\"col-4\">\n                  <div class=\"card-loader1 card-loader--tabs\"></div>\n                  </div>\n                </div>\n                </div>\n              </ng-template>\n              <ng-template #realList>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-12\" *ngFor=\"let item of allProduct; index as i;\">\n                  <div class=\"container1\">\n                    <div class=\"card\">\n                      <div class=\"card-head\">\n                        <img [src]=\"api.delear+'uploads/comunication/medium/'+item.doc.fileName[0].name\" alt=\"logo\" class=\"card-logo\">\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"product-desc\">\n                          <span class=\"product-title\">\n                                {{item.doc.name}}\n                                  <span class=\"badge\">\n                                    &#x20B9;<b>{{item.doc.price}}</b>\n\n                                  </span>\n                                  <div class=\"popover__wrapper\" *ngIf=\"item.listPrice.length > 1\">\n                                    <a> <h2 class=\"popover__title\">see other offers</h2> </a>\n                                    <div class=\"popover__content\">\n                                      <p class=\"popover__message\" *ngFor=\"let priceList of item.listPrice\">\n                                        &#x20B9; {{priceList.price}} by {{priceList.ownerName}}\n                                      </p>\n                                    </div>\n                                  </div>\n\n                          </span>\n                          <span class=\"product-caption\">\n                                Brand: <b> {{item.doc.brand}}</b>\n                                </span>\n                            <span class=\"product-rating\">\n                              <div class=\"star-rating\" (click)=\"showRatingPercentage(Rating,item.doc.comment)\">\n                                  <div class=\"back-stars\">\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\n                                      <div class=\"front-stars\" [style.width.%]=\"((item.averageRating/5)*100)\">\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      </div>\n                                  </div>\n                              </div>\n                            </span>\n                        </div>\n                        <div class=\"product-properties\">\n                          <span class=\"product-size\">\n                                  <span class=\"cardDiv product-caption\">\n                                  {{item?.doc.keyFeatureOne}}\n                                  </span>\n                                  <span class=\"cardDiv product-caption\">\n                                    {{item?.doc.keyFeatureTwo}}\n                                  </span>\n                                  <span class=\"cardDiv product-caption\">\n                                    {{item?.doc.keyFeatureThree}}\n                                  </span>\n                                </span>\n\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-4\">\n                            <span class=\"setColor mt-2 ml-3 float-right btn\" (click)=\"deleteProduct(item._id,i)\">\n                              Delete\n                            </span>\n\n                            </div>\n                            <div class=\"col-4\">\n                              <span class=\"setColor mt-2 float-right btn\" (click)=\"detailProduct(item)\">\n                                Detail\n                              </span>\n                            </div>\n                            <div class=\"col-4\">\n                              <span class=\"setColor mt-2 float-right btn\" (click)=\"editProduct(item)\">\n                                    Edit\n                                    </span>\n                                    </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"col-4\"></div>\n                <div class=\"col-4\"></div>\n\n              </div>\n              </ng-template>\n              </ng-template>\n\n              <ng-template #productdetailsSection>\n                <div class=\"container\">\n                  <div class=\"cardDetails\">\n                    <div class=\"container-fliud\">\n                      <div class=\"wrapper row\">\n                        <div class=\"preview col-md-12\">\n\n                          <div class=\"preview-pic tab-content\">\n                            <ng-container  *ngFor=\"let item of detailedImages; index as i\">\n                                <div [ngClass]=\"{'active': i == setCurrentIndexImage}\" class=\"tab-pane\" id=\"pic-1\" *ngIf=\"item.extension != 'mp4'\">\n                                  <img  [src]=\"api.delear+ 'uploads/comunication/'+ item.name\" />\n                                </div>\n                                <div [ngClass]=\"{'active': i == setCurrentIndexImage}\" class=\"tab-pane\" id=\"pic-1\" *ngIf=\"item.extension == 'mp4'\">\n                                      <video width=\"420\" height=\"240\" controls>\n                                        <source  [src]=\"api.delear+ 'uploads/comunication/'+ item.name\" type=\"video/mp4\"/>\n\n                                      </video>\n                                </div>\n                          </ng-container>\n                          </div>\n                          <ul class=\"preview-thumbnail nav nav-tabs\">\n                            <ng-container  *ngFor=\"let item of detailedImages; index as i\">\n                            <li [ngClass]=\"{'active': i == setCurrentIndexImage}\"  *ngIf=\"item.extension != 'mp4'\" (click)=\"setCurrentImage(i)\" ><a data-target=\"#pic-1\" data-toggle=\"tab\" >\n                              <img  [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.name\" /></a>\n                              </li>\n                              <li [ngClass]=\"{'active': i == setCurrentIndexImage}\"  *ngIf=\"item.extension == 'mp4'\" (click)=\"setCurrentImage(i)\" ><a data-target=\"#pic-1\" data-toggle=\"tab\" >\n                                <img  src=\"../../../assets/images/videoThumbnail.jpg\" height=\"177\"/></a>\n                              </li>\n                            </ng-container>\n                          </ul>\n\n                        </div>\n                        <div class=\"details col-md-12\">\n                          <h3 class=\"product-title\">{{detailPageData.doc.name}}</h3>\n                          <div class=\"rating\">\n                            <span class=\"product-rating\">\n                                  <div class=\"star-rating\" (click)=\"showRatingPercentage(Rating,detailPageData.doc.comment)\">\n                                    <div class=\"back-stars\">\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <div class=\"front-stars\" [style.width.%]=\"ratingPercentage\">\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                              </span>\n                          </div>\n                          <div class=\"rating mt-2\">  <span class=\"review-no\">{{detailPageData.doc?.comment.length}} reviews</span></div>\n                          <h4 class=\"price mt-2\">price: <span>&#x20B9; {{detailPageData.doc.price}}</span></h4>\n                          <div class=\"product-properties\">\n                            <span class=\"product-size\">\n                                    <span class=\"cardDiv product-caption mt-2\" *ngIf=\"detailPageData?.doc.keyFeatureOne != undefined\">\n                                      <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg> {{detailPageData?.doc.keyFeatureOne}}\n                                    </span>\n                                    <span class=\"cardDiv product-caption mt-2\" *ngIf=\"detailPageData?.doc.keyFeatureTwo != undefined\">\n                                      <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg> {{detailPageData?.doc.keyFeatureTwo}}\n                                    </span>\n                                    <span class=\"cardDiv product-caption mt-2\" *ngIf=\"detailPageData?.doc.keyFeatureThree != undefined\">\n                                      <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg> {{detailPageData?.doc.keyFeatureThree}}\n                                    </span>\n                                  </span>\n\n                          </div>\n                          <p class=\"product-description\" [innerHTML]=\"detailPageData.doc.description | safeHtml\"></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                    <div class=\"row justify-content-center mx-0 mx-md-auto\">\n                        <div class=\"col-lg-12 col-md-11 px-1 px-sm-2\">\n                            <div class=\"card border-0 px-3\">\n\n                                  <ng-template [ngIf]=\"detailPageData.doc.comment != undefined && detailPageData.doc.comment.length > 0\">\n                                      <div class=\"review p-2\" *ngFor=\"let com of detailPageData.doc.comment; index as i\">\n                                          <div class=\"row d-flex\">\n                                              <div class=\"profile-pic\">{{com.associationId}}</div>\n                                              <div class=\"d-flex flex-column pl-3\">\n                                                  <h5>{{com.senderName}}</h5>\n                                                  <p class=\"grey-text\">{{com.createdOn | date: 'mediumDate'}}</p>\n                                              </div>\n                                          </div>\n                                          <div class=\"row pb-1 ml-5\">\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 0}\"></span>\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 1}\"></span>\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 2}\"></span>\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 3}\"></span>\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 4}\"></span>\n                                          </div>\n                                          <div class=\"row pb-1 ml-5\">\n                                              <p>{{com.reveiw}}</p>\n                                          </div>\n\n                                      </div>\n                                    </ng-template>\n\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n              </ng-template>\n          </ng-template>\n    </ng-template>\n    <ng-template #myOrderStatus1>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"topnav\">\n              <a [ngClass]=\"currentTab == 1 ? 'active' : ''\" (click)=\"changeTab(1, 'open')\">Request</a>\n              <a [ngClass]=\"currentTab == 2 ? 'active' : ''\" (click)=\"changeTab(2, 'close')\">Order</a>\n              <a [ngClass]=\"currentTab == 3 ? 'active' : ''\" (click)=\"changeTab(3, 'acceptedByMerchant')\">Response</a>\n              <a [ngClass]=\"currentTab == 4 ? 'active' : ''\" (click)=\"changeTab(4, 'rejectByMerchant')\">Cancel</a>\n              <a [ngClass]=\"currentTab == 5 ? 'active' : ''\" (click)=\"changeTab(5, 'rejectByRetailer')\">Reject</a>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngIf]=\"orderLoading\" [ngIfElse]=\"allOrderTemplate\">\n          <div class=\"wrapper1\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n            <div class=\"card-loader1 card-loader--tabs\"></div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"card-loader1 card-loader--tabs\"></div>\n            </div>\n            <div class=\"col-4\">\n            <div class=\"card-loader1 card-loader--tabs\"></div>\n            </div>\n          </div>\n          </div>\n        </ng-template>\n        <ng-template #allOrderTemplate>\n          <ng-container *ngTemplateOutlet=\"platformMobile ? mobileOrder : desktopOrder\"></ng-container>\n        </ng-template>\n      </div>\n    </ng-template>\n</div>\n\n\n\n<app-side-bar></app-side-bar>\n<ng-template #playVideo>\n  <div class=\"modal-header\">\n\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n          <video width=\"420\" height=\"240\" controls>\n            <source  [src]=\"api.delear+ 'uploads/comunication/'+ setImageName\" type=\"video/mp4\">\n\n          </video>\n\n\n      </div>\n\n    </div>\n\n  </div>\n</ng-template>\n\n<ng-template #uploadingFolder>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Uploading Image</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"slideshow-container\">\n          <div class=\"mySlides\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\"  [style.width]=\"imageUploadPercent + '%'\">\n                <span class=\"sr-only\">{{imageUploadPercent}} % Complete</span>\n              </div>\n            </div>\n            <div class=\"card-body sliderBody ml-1\"> {{imageUploadPercent}} % completed </div>\n            </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #desktopOrder>\n  <div class=\"row mt-3\"  *ngFor=\"let order of orderList; index as j\">\n    <div class=\"col-12 accordion\" id=\"accordionExample\">\n      <a data-toggle=\"collapse\" href=\"#collapseExample1{{j}}\" aria-expanded=\"true\" (click)=\"showCurrent(j)\">\n          <div class=\"row headingBorder\" >\n            <div class=\"col-md-4 col-sm-6\" style=\"text-align: left;\" >\n              <span><b>Order Id: {{order.orderId}}</b></span>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">  <span class=\"trackIdCom\"> <b> Date : {{order.orderId |  date: 'mediumDate'}}</b></span> </div>\n            <div class=\"col-md-2 col-sm-12\"> <span class=\"trackIdCom\"> <b> Time: {{order.orderId |  date: 'shortTime'}}</b></span> </div>\n            <div class=\"col-md-2 col-sm-12\"> <span class=\"trackIdCom\"> </span> orders({{order.values.length}})</div>\n          </div>\n        </a>\n          <div class=\"row mt-3\" [ngClass]=\"(j == 0) ? 'show' : ''\" id=\"collapseExample1{{j}}\">\n            <div class=\"col-12 mt-2\" >\n              <div class=\"col-12\"  *ngFor=\"let item of order.values; index as i\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\"> Order From:  {{item.senderName}}</h5>\n                    <div class=\"row\">\n                      <div class=\"col-md-1\"><b>Satus</b></div>\n                      <div class=\"col-md-2\"><b>Image</b></div>\n                      <div class=\"col-md-3\"><b>Name</b></div>\n                      <div class=\"col-md-2\"><b>Qantity</b></div>\n                      <div class=\"col-md-1\"><b>Price</b></div>\n                      <div class=\"col-md-2\"><b>Total</b></div>\n                      <div class=\"col-md-1\"></div>\n                    </div>\n                    <div class=\"row mt-2\" *ngFor=\"let p of item.cart| keyvalue;\">\n                          <div class=\"col-1\">\n                              <svg *ngIf=\"item.list[p.key] != undefined\" _ngcontent-shv-c64=\"\"  xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg>\n                              <svg *ngIf=\"item.list[p.key] == undefined\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" fill=\"#E64A19\"\n                                width=\"20.926px\" height=\"20.926px\" viewBox=\"0 0 94.926 94.926\" style=\"enable-background:new 0 0 94.926 94.926;\"\n                                xml:space=\"preserve\" class=\"mr-1 pl-1\">\n                                <g>\n                                  <path d=\"M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0\n                                    c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096\n                                    c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476\n                                    c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62\n                                    s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z\"/>\n                                </g>\n                              </svg>\n                          </div>\n                          <div class=\"col-2 text-left\" > <img [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.productImage[p.key]\" width=\"100px\" height=\"60px\" /> </div>\n                          <div class=\"col-3 text-left\"> {{p.key}} </div>\n                          <div class=\"col-2 text-left\"> {{p.value}} </div>\n                          <div class=\"col-1 text-left\"> {{item.list[p.key]}}</div>\n                          <div class=\"col-2 text-left\" *ngIf=\"item.list[p.key] != undefined\">  &#x20B9;  {{item.list[p.key]  * p.value}}</div>\n                          <div class=\"col-2 text-left\" *ngIf=\"item.list[p.key] == undefined\">  N/A</div>\n\n                          <div class=\"col-1 text-left\" *ngIf=\"item.list[p.key] != undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, true,j)\">Remove</button></div>\n                          <div class=\"col-1 text-left\" *ngIf=\"item.list[p.key] == undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, false,j)\">Add</button></div>\n                          <div class=\"col-1 text-left\" *ngIf= \"item.status != 'open'\"></div>\n                    </div>\n                    <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                      <div class=\"col-1\"> </div>\n                      <div class=\"col-2\"> </div>\n                      <div class=\"col-4\"> <b>Discount</b></div>\n                      <div class=\"col-2\">  <input type=\"number\" class=\"discountFeild\" [(ngModel)]=\"item.discount != undefiend ? item.discount : discount\" (input)=\"updateValue(i,$event.target.value)\"/> </div>\n                      <div class=\"col-3\"><button class=\"btn btn-danger ml-2\" (click)=\"applyDiscount(item._id, i, j)\">Apply</button> </div>\n                      </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-1\"> </div>\n                      <div class=\"col-4\"> </div>\n                      <div class=\"col-4\"> <b>Total Amount</b></div>\n                      <div class=\"col-2\" *ngIf=\"item.discount != undefined && item.discount != 0\"> <del>&#x20B9; {{item.totalamount }}</del> <ins>&#x20B9; {{item.totalamount  - (item.discount != undefiend ? item.discount : discount)}}</ins></div>\n                      <div class=\"col-2\" *ngIf=\"item.discount == undefined || item.discount == 0\">  &#x20B9;{{item.totalamount}} </div>\n                      <div class=\"col-1\"></div>\n                      </div>\n                      <div class=\"row mt-3\">\n                        <div class=\"col-5\"></div>\n                        <div class=\"col-4 text-left\"><b>Shipping Address</b></div>\n                        <div class=\"col-3\">{{item.address}}</div>\n                        </div>\n\n                  <div class=\"row mt-3\">\n                      <div class=\"col-6\"></div>\n                      <div class=\"col-6\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                                <div class=\"col-6 text-center\">\n                                  <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'acceptedByMerchant', i,j)\" [disabled]=\"item.totalamount == 0\">Accept</button></p>\n                                </div>\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'acceptedByMerchant'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\"> Waiting for Retailer</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'invoicerequestByretailer'\">\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger ml-2\"  (click)=\"InvoiceSend(item, 'close', i,j)\">Accept</button></p>\n                                </div>\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger ml-2\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'close'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\">Closed</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByMerchant'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\">Rejected</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByRetailer'\">\n                                <div class=\"col-12\">\n                                <p><button class=\"btn btn-danger ml-2\">Reject by Retailer</button></p>\n                              </div>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                  </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n</div>\n</ng-template>\n\n<ng-template #mobileOrder>\n  <div class=\"row mt-4\"  *ngFor=\"let order of orderList; index as j\">\n    <div class=\"col-12 accordion\" id=\"accordionExample\">\n      <a data-toggle=\"collapse\" href=\"#collapseExample{{j}}\" aria-expanded=\"true\" (click)=\"showCurrent(j)\">\n          <div class=\"row headingBorder\" >\n            <div class=\"col-4\" style=\"text-align: left;\" > <span class=\"trackIdComM\"><b>Id: {{order.values[0].customOrderId}}</b></span></div>\n            <div class=\"col-7\" style=\"text-align: left;\">  <span class=\"trackIdComM\"><b>Order Placed:   {{order.orderId |  date: 'short'}}</b></span> </div>\n\n\n          </div>\n        </a>\n\n          <div class=\"row mt-3 collapse\" [ngClass]=\"(j == 0) ? 'show' : ''\" id=\"collapseExample{{j}}\">\n                <div class=\"col-12\"  *ngFor=\"let item of order.values; index as i\">\n                  <div class=\"card\">\n\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">  {{item.senderName}}</h5>\n\n                      <p class=\"card-text\" (click)=\"redirectToMerchant(item.ownerNumber)\"> See profile </p>\n                      <div class=\"row\" *ngFor=\"let p of item.cart| keyvalue;\">\n\n                        <div class=\"col-3\">  <img [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.productImage[p.key]\" width=\"50\" height=\"60px\" /></div>\n                        <div class=\"col-9\">\n                          <ul class=\"itemList\">\n                                          <li style=\"text-transform: capitalize;\">  <svg *ngIf=\"item.list[p.key] != undefined\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path  fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg>\n                                            <svg *ngIf=\"item.list[p.key] == undefined\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" fill=\"#E64A19\"\n                                              width=\"18.926px\" height=\"18.926px\" viewBox=\"0 0 94.926 94.926\" style=\"enable-background:new 0 0 94.926 94.926;\"\n                                              xml:space=\"preserve\" class=\"mr-1 pl-1\">\n                                              <g>\n                                                <path d=\"M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0\n                                                  c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096\n                                                  c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476\n                                                  c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62\n                                                  s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z\"/>\n                                              </g>\n                                            </svg>\n                                           <b> {{p.key}}</b>\n                                          </li>\n                                          <li> <span class=\"ml-4\">Qty {{p.value}}</span></li>\n\n                                          <li>\n                                            <span class=\"ml-4\" *ngIf=\"item.list[p.key] != undefined\"> <b>&#x20B9;  {{item.list[p.key]  * p.value}}</b> </span>\n                                            <span class=\"ml-4\" *ngIf=\"item.list[p.key] == undefined\"> <b>N/A</b> </span>\n                                          </li>\n                                          <li *ngIf=\"item.list[p.key] != undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, true,j)\">Remove</button></li>\n                                          <li *ngIf=\"item.list[p.key] == undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, false,j)\">Add</button></li>\n\n                                        </ul>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"row mt-2\">\n                        <div class=\"col-4 footerM\" style=\"color: #78BE20;\" *ngIf=\"item.status == 'open'\"> <b>Discount</b></div>\n                            <div class=\"col-4\"> <input type=\"number\" class=\"discountFeild\" [(ngModel)]=\"item.discount != undefiend ? item.discount : discount\" (input)=\"updateValue(i,$event.target.value)\"/> </div>\n                            <div class=\"col-4\"><button class=\"btn btn-danger applyBtmM\" (click)=\"applyDiscount(item._id, i, j)\">Apply</button> </div>\n\n                        </div>\n                        <div class=\"row mt-2\">\n\n                              <div class=\"col-4\"> <b>Total</b></div>\n                              <div class=\"col-8\" *ngIf=\"item.discount != undefined && item.discount != 0\"> <del>&#x20B9; {{item.totalamount }}</del> <ins>&#x20B9; {{item.totalamount  - (item.discount != undefiend ? item.discount : discount)}}</ins></div>\n                              <div class=\"col-8\" *ngIf=\"item.discount == undefined || item.discount == 0\">  &#x20B9;{{item.totalamount}} </div>\n\n                        </div>\n\n                        <div class=\"row mt-3\">\n\n                          <div class=\"col-4 text-left footerM\"><b> Address</b></div>\n                          <div class=\"col-8 footerM\">{{item.address}}</div>\n                        </div>\n\n\n\n\n                            <div class=\"row mt-2\">\n                                <div class=\"col-12\">\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                                    <div class=\"col-6 text-center\">\n                                      <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'acceptedByMerchant', i,j)\" [disabled]=\"item.totalamount == 0\">Accept</button></p>\n                                    </div>\n                                    <div class=\"col-6\">\n                                      <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'acceptedByMerchant'\">\n                                    <div class=\"col-12\">\n                                      <p><button class=\"btn btn-danger ml-2\"> Waiting for Retailer</button></p>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'invoicerequestByretailer'\">\n                                    <div class=\"col-6\">\n                                      <p><button class=\"btn btn-danger ml-2\"  (click)=\"InvoiceSend(item, 'close', i,j)\">Accept</button></p>\n                                    </div>\n                                    <div class=\"col-6\">\n                                      <p><button class=\"btn btn-danger ml-2\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'close'\">\n                                    <div class=\"col-12\">\n                                      <a class=\"btn btn-danger\" style=\"font-size: 11px;\" data-toggle=\"collapse\" href=\"#collapseExample2{{i}}\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample2\">\n                                        Show Rating\n                                      </a>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByMerchant'\">\n                                    <div class=\"col-12\">\n                                      <p><button class=\"btn btn-danger ml-2\">Rejected</button></p>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByRetailer'\">\n                                    <div class=\"col-12\">\n                                    <p><button class=\"btn btn-danger ml-2\">Reject by Retailer</button></p>\n                                  </div>\n                                </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                              <div class=\"col-12\">\n                                      <div class=\"collapse\" id=\"collapseExample2{{i}}\">\n                                        <div class=\"card card-body\">\n                                                  <div class=\"row\">\n                                                          <div class=\"col-sm-12 col-md-4\">Average Delivery time taken</div>\n                                                          <div class=\"col-sm-12 col-md-8\">\n                                                            <div class=\"input-group\">\n                                                              <div id=\"radioBtn\" class=\"btn-group\">\n                                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.averageDelivery == 1) ? 'active' : 'notActive'\" (click)=\"setRating('averageDelivery', 1, i,j)\">Resonable</a>\n                                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.averageDelivery == 3) ? 'active' : 'notActive'\" (click)=\"setRating('averageDelivery', 3, i,j)\">Late</a>\n                                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.averageDelivery == 5) ? 'active' : 'notActive'\" (click)=\"setRating('averageDelivery', 5, i,j)\">Fast</a>\n                                                              </div>\n                                                            </div>\n                                                          </div>\n                                                  </div>\n                                                  <div class=\"row mt-2\">\n                                                      <div class=\"col-sm-12 col-md-4\">Product Qulaity</div>\n                                                      <div class=\"col-sm-12 col-md-8\">\n                                                        <div class=\"input-group\">\n                                                          <div id=\"radioBtn\" class=\"btn-group\">\n                                                            <a class=\"btn btn-danger btn-sm\"  [ngClass]=\"(item.productQuality == 2) ? 'active' : 'notActive'\" (click)=\"setRating('productQuality', 2, i,j)\">Poor</a>\n                                                            <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productQuality == 3) ? 'active' : 'notActive'\" (click)=\"setRating('productQuality', 3, i,j)\">Moderate</a>\n                                                            <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productQuality == 4) ? 'active' : 'notActive'\" (click)=\"setRating('productQuality', 4, i,j)\">Good</a>\n                                                            <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productQuality == 5) ? 'active' : 'notActive'\" (click)=\"setRating('productQuality', 5, i,j)\">Very Good</a>\n                                                          </div>\n                                                        </div>\n                                                      </div>\n                                                  </div>\n\n                                                  <div class=\"row mt-2\">\n                                                    <div class=\"col-sm-12 col-md-4\">Product Price</div>\n                                                    <div class=\"col-sm-12 col-md-8\">\n                                                      <div class=\"input-group\">\n                                                        <div id=\"radioBtn\" class=\"btn-group\">\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productPrice == 2) ? 'active' : 'notActive'\" (click)=\"setRating('productPrice', 2, i,j)\">Low</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productPrice == 3) ? 'active' : 'notActive'\" (click)=\"setRating('productPrice', 3, i,j)\">Moderate</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productPrice == 4) ? 'active' : 'notActive'\" (click)=\"setRating('productPrice', 4, i,j)\">Reasonable</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productPrice == 5) ? 'active' : 'notActive'\" (click)=\"setRating('productPrice', 5, i,j)\">Expensive</a>\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                  </div>\n\n                                                <div class=\"row mt-2\">\n                                                  <div class=\"col-sm-12 col-md-4\">Staff behaviour</div>\n                                                  <div class=\"col-sm-12 col-md-8\">\n                                                    <div class=\"input-group\">\n                                                      <div id=\"radioBtn\" class=\"btn-group\">\n                                                        <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffBehaviour == 2) ? 'active' : 'notActive'\" (click)=\"setRating('staffBehaviour', 2, i, j)\">Poor</a>\n                                                        <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffBehaviour == 3) ? 'active' : 'notActive'\" (click)=\"setRating('staffBehaviour', 3, i, j)\">Moderate</a>\n                                                        <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffBehaviour == 4) ? 'active' : 'notActive'\" (click)=\"setRating('staffBehaviour', 4, i, j)\">Good</a>\n                                                        <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffBehaviour == 5) ? 'active' : 'notActive'\" (click)=\"setRating('staffBehaviour', 5, i, j)\">Very Good</a>\n\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                              </div>\n                                              <div class=\"row mt-2\">\n                                                    <div class=\"col-sm-12 col-md-4\">Staff helping</div>\n                                                    <div class=\"col-sm-12 col-md-8\">\n                                                      <div class=\"input-group\">\n                                                        <div id=\"radioBtn\" class=\"btn-group\">\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffHelping == 2) ? 'active' : 'notActive'\" (click)=\"setRating('staffHelping', 2, i, j)\">Poor</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffHelping == 3) ? 'active' : 'notActive'\" (click)=\"setRating('staffHelping', 3, i, j)\">Moderate</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffHelping == 4) ? 'active' : 'notActive'\" (click)=\"setRating('staffHelping', 4, i, j)\">Good</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffHelping == 5) ? 'active' : 'notActive'\" (click)=\"setRating('staffHelping', 5, i, j)\">Very Good</a>\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                </div>\n\n                                            <div class=\"row mt-2\">\n                                              <div class=\"col-sm-12 col-md-4\">Payment ease</div>\n                                              <div class=\"col-sm-12 col-md-8\">\n                                                <div class=\"input-group\">\n                                                  <div id=\"radioBtn\" class=\"btn-group\">\n                                                    <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.paymentEase == 2) ? 'active' : 'notActive'\" (click)=\"setRating('paymentEase', 2, i, j)\">Poor</a>\n                                                    <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.paymentEase == 3) ? 'active' : 'notActive'\" (click)=\"setRating('paymentEase', 3, i, j)\">Moderate</a>\n                                                    <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.paymentEase == 4) ? 'active' : 'notActive'\" (click)=\"setRating('paymentEase', 4, i, j)\">Good</a>\n                                                    <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.paymentEase == 5) ? 'active' : 'notActive'\" (click)=\"setRating('paymentEase', 5, i, j)\">Very Good</a>\n\n                                                  </div>\n                                                </div>\n                                              </div>\n                                          </div>\n\n                                          <div class=\"row mt-2\">\n                                            <div class=\"col-sm-12 col-md-4\">Refund Rating</div>\n                                            <div class=\"col-sm-12 col-md-8\">\n                                              <div class=\"input-group\">\n                                                <div id=\"radioBtn\" class=\"btn-group\">\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 1) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 1, i, j)\">1</a>\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 2) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 2, i, j)\">2</a>\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 3) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 3, i, j)\">3</a>\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 4) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 4, i, j)\">4</a>\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 5) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 5, i, j)\">5</a>\n\n                                                </div>\n                                              </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"row mt-2\">\n                                          <div class=\"col-sm-12 col-md-4\">Return Rating</div>\n                                          <div class=\"col-sm-12 col-md-8\">\n                                            <div class=\"input-group\">\n                                              <div id=\"radioBtn\" class=\"btn-group\">\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 1) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 1, i, j)\">1</a>\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 2) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 2, i, j)\">2</a>\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 3) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 3, i, j)\">3</a>\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 4) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 4, i, j)\">4</a>\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 5) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 5, i, j)\">5</a>\n\n                                              </div>\n                                            </div>\n                                          </div>\n                                      </div>\n\n                                      <div class=\"row mt-2\" *ngIf=\"item.ratingDone != true\" >\n                                        <div class=\"col-sm-12 col-md-6\"></div>\n                                        <div class=\"col-sm-12 col-md-6\"><button class=\"btn btn-danger btn-sm\" (click)= \"submitRating(item,i, j)\">Submit</button></div>\n                                          </div>\n\n                                        </div>\n                                      </div>\n                              </div>\n                            </div>\n                    </div>\n\n                  </div>\n                  </div>\n\n          </div>\n\n    </div>\n  </div>\n  <!-- <div class=\"row mt-3\"  *ngFor=\"let order of orderList; index as j\">\n    <div class=\"col-12 accordion\" id=\"accordionExample\">\n      <a data-toggle=\"collapse\" href=\"#collapseExample1{{j}}\" aria-expanded=\"true\" (click)=\"showCurrent(j)\">\n          <div class=\"row headingBorder\" >\n            <div class=\"col-md-4 col-sm-6\" style=\"text-align: left;\" >\n              <span><b>Order Id: {{order.orderId}}</b></span>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">  <span class=\"trackIdCom\"> <b> Date : {{order.orderId |  date: 'mediumDate'}}</b></span> </div>\n            <div class=\"col-md-2 col-sm-12\"> <span class=\"trackIdCom\"> <b> Time: {{order.orderId |  date: 'shortTime'}}</b></span> </div>\n            <div class=\"col-md-2 col-sm-12\"> <span class=\"trackIdCom\"> </span> orders({{order.values.length}})</div>\n          </div>\n        </a>\n          <div class=\"row mt-3\" [ngClass]=\"(j == 0) ? 'show' : ''\" id=\"collapseExample1{{j}}\">\n            <div class=\"col-12 mt-2\" >\n              <div class=\"col-12\"  *ngFor=\"let item of order.values; index as i\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\"> Order From:  {{item.senderName}}</h5>\n                    <div class=\"row\">\n                      <div class=\"col-md-1\"><b>Satus</b></div>\n                      <div class=\"col-md-2\"><b>Image</b></div>\n                      <div class=\"col-md-3\"><b>Name</b></div>\n                      <div class=\"col-md-2\"><b>Qantity</b></div>\n                      <div class=\"col-md-1\"><b>Price</b></div>\n                      <div class=\"col-md-2\"><b>Total</b></div>\n                      <div class=\"col-md-1\"></div>\n                    </div>\n                    <div class=\"row mt-2\" *ngFor=\"let p of item.cart| keyvalue;\">\n                          <div class=\"col-1\">\n                              <svg *ngIf=\"item.list[p.key] != undefined\" _ngcontent-shv-c64=\"\"  xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg>\n                              <svg *ngIf=\"item.list[p.key] == undefined\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" fill=\"#E64A19\"\n                                width=\"20.926px\" height=\"20.926px\" viewBox=\"0 0 94.926 94.926\" style=\"enable-background:new 0 0 94.926 94.926;\"\n                                xml:space=\"preserve\" class=\"mr-1 pl-1\">\n                                <g>\n                                  <path d=\"M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0\n                                    c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096\n                                    c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476\n                                    c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62\n                                    s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z\"/>\n                                </g>\n                              </svg>\n                          </div>\n                          <div class=\"col-2 text-left\" > <img [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.productImage[p.key]\" width=\"100px\" height=\"60px\" /> </div>\n                          <div class=\"col-3 text-left\"> {{p.key}} </div>\n                          <div class=\"col-2 text-left\"> {{p.value}} </div>\n                          <div class=\"col-1 text-left\"> {{item.list[p.key]}}</div>\n                          <div class=\"col-2 text-left\" *ngIf=\"item.list[p.key] != undefined\">  &#x20B9;  {{item.list[p.key]  * p.value}}</div>\n                          <div class=\"col-2 text-left\" *ngIf=\"item.list[p.key] == undefined\">  N/A</div>\n\n                          <div class=\"col-1 text-left\" *ngIf=\"item.list[p.key] != undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, true,j)\">Remove</button></div>\n                          <div class=\"col-1 text-left\" *ngIf=\"item.list[p.key] == undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, false,j)\">Add</button></div>\n                          <div class=\"col-1 text-left\" *ngIf= \"item.status != 'open'\"></div>\n                    </div>\n                    <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                      <div class=\"col-1\"> </div>\n                      <div class=\"col-2\"> </div>\n                      <div class=\"col-4\"> <b>Discount</b></div>\n                      <div class=\"col-2\">  <input type=\"number\" class=\"discountFeild\" [(ngModel)]=\"item.discount != undefiend ? item.discount : discount\" (input)=\"updateValue(i,$event.target.value)\"/> </div>\n                      <div class=\"col-3\"><button class=\"btn btn-danger ml-2\" (click)=\"applyDiscount(item._id, i, j)\">Apply</button> </div>\n                      </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-1\"> </div>\n                      <div class=\"col-4\"> </div>\n                      <div class=\"col-4\"> <b>Total Amount</b></div>\n                      <div class=\"col-2\" *ngIf=\"item.discount != undefined && item.discount != 0\"> <del>&#x20B9; {{item.totalamount }}</del> <ins>&#x20B9; {{item.totalamount  - (item.discount != undefiend ? item.discount : discount)}}</ins></div>\n                      <div class=\"col-2\" *ngIf=\"item.discount == undefined || item.discount == 0\">  &#x20B9;{{item.totalamount}} </div>\n                      <div class=\"col-1\"></div>\n                      </div>\n                      <div class=\"row mt-3\">\n                        <div class=\"col-5\"></div>\n                        <div class=\"col-4 text-left\"><b>Shipping Address</b></div>\n                        <div class=\"col-3\">{{item.address}}</div>\n                        </div>\n\n                  <div class=\"row mt-3\">\n                      <div class=\"col-6\"></div>\n                      <div class=\"col-6\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                                <div class=\"col-6 text-center\">\n                                  <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'acceptedByMerchant', i,j)\" [disabled]=\"item.totalamount == 0\">Accept</button></p>\n                                </div>\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'acceptedByMerchant'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\"> Waiting for Retailer</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'invoicerequestByretailer'\">\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger ml-2\"  (click)=\"InvoiceSend(item, 'close', i,j)\">Send Invoice</button></p>\n                                </div>\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger ml-2\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'close'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\">Closed</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByMerchant'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\">Rejected</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByRetailer'\">\n                                <div class=\"col-12\">\n                                <p><button class=\"btn btn-danger ml-2\">Reject by Retailer</button></p>\n                              </div>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                  </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n</div> -->\n</ng-template>\n";
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


    __webpack_exports__["default"] = "\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n@charset \"UTF-8\";\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\ninput[type=file] {\n  display: none;\n}\n.setColor {\n  background-color: #AA0000 !important;\n  color: #ffffff;\n}\n.container1 {\n  width: 350px;\n  height: auto;\n  margin: 30px auto;\n}\n.card {\n  border-radius: 25px;\n  box-shadow: -11px 11px 1px rgba(255, 253, 253, 0.3);\n}\n.card-head {\n  height: 300px;\n  border-radius: 25px 25px 0 0;\n}\n.card-head img {\n  width: 100%;\n}\n.product-img {\n  left: 0;\n}\n.product-detail {\n  padding: 0 20px;\n  font-size: 11px;\n  color: #fff;\n}\n.product-detail h2 {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 2px;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n}\n.back-text {\n  display: inline-block;\n  font-size: 125px;\n  font-weight: 900;\n  margin-left: -7px;\n  margin-top: -12px;\n  opacity: 0.1;\n}\n.card-body {\n  min-height: 220px;\n  height: auto;\n  background: #fff;\n  border-radius: 0 0 25px 25px;\n}\n.product-title {\n  padding: 20px 20px 5px 20px;\n  display: block;\n  font-size: 17px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: capitalize;\n}\n.product-title b {\n  font-weight: 900;\n  letter-spacing: 0px;\n}\n.badge {\n  position: relative;\n  font-size: 14px;\n  font-weight: 300;\n  color: #fff;\n  background: #dc3545;\n  padding: 15px 10px;\n  border-radius: 50%;\n  top: -2px;\n  margin-left: 5px;\n  float: right;\n}\n.product-caption {\n  display: block;\n  padding: 0 20px;\n  font-size: 15px;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n.product-rating {\n  float: left;\n  padding-left: 1rem;\n}\n.product-rating i.grey {\n  color: #cece15;\n}\n.product-size h4 {\n  font-size: 15px;\n  padding: 0 21px;\n  margin-top: 15px;\n  padding-bottom: 10px;\n  text-transform: uppercase;\n}\n.ul-size {\n  margin-left: 15px;\n}\n.ul-size li {\n  list-style: none;\n  float: left;\n  margin-right: 20px;\n}\n.ul-size li a {\n  display: block;\n  text-decoration: none;\n  font-size: 11px;\n  width: 22px;\n  height: 22px;\n  border-radius: 100%;\n  text-align: center;\n  line-height: 23px;\n  color: #000;\n}\n.ul-size li a.active {\n  background: #f35e3d;\n  color: #fff;\n}\n.product-size:before,\n.product-size:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.product-color h4 {\n  font-size: 11px;\n  padding: 0 21px;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  text-transform: uppercase;\n}\n.ul-color {\n  margin-left: 27px;\n}\n.ul-color li {\n  list-style: none;\n  float: left;\n  margin-right: 20px;\n}\n.ul-color li a {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n}\n.ul-color li a.orange {\n  background: #f35e3d;\n}\n.ul-color li a.green {\n  background: #dc3545;\n}\n.ul-color li a.yellow {\n  background: #ffd414;\n}\n.ul-color li a.active:after {\n  position: absolute;\n  content: \"\";\n  display: inline-block;\n  border: 1px solid #f35e3d;\n  width: 24px;\n  height: 24px;\n  border-radius: 100%;\n  margin-left: -5px;\n  margin-top: -5px;\n}\n.product-price {\n  background: #dc3545;\n  padding: 7px 20px;\n  text-align: center;\n  display: inline-block;\n  font-size: 15px;\n  font-weight: 200;\n  color: #fff;\n  border-radius: 7px;\n  margin-top: -13px;\n  margin-left: -5px;\n  box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);\n}\n.product-price b {\n  margin-left: 5px;\n}\n.yt {\n  position: fixed;\n  padding: 7px 10px 3px 10px;\n  top: 5px;\n  right: 5px;\n  background: rgba(0, 0, 0, 0.1);\n}\n.yt:hover {\n  background: rgba(0, 0, 0, 0.2);\n}\n.Plusbutton {\n  background-color: #dc3545;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n  margin: 4px 2px;\n  width: 20px;\n  height: 20px;\n}\n.button5 {\n  border-radius: 50%;\n}\n.input-number {\n  width: 50% !important;\n  flex: 1 1 0%;\n}\n.checked {\n  color: orange;\n}\n.fa-star {\n  cursor: pointer;\n  font-size: 21px;\n}\n/***************** Detail Page *************************/\n.preview {\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px;\n  }\n}\n.preview-pic {\n  flex-grow: 1;\n}\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px;\n}\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%;\n}\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block;\n  height: 177px !important;\n}\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0;\n}\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0;\n}\n.tab-content {\n  overflow: hidden;\n}\n.tab-content img {\n  width: 100%;\n  max-width: 700px;\n  max-height: 300px;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n}\n.cardDetails {\n  margin-top: 50px;\n  background: #eee;\n  padding: 3em;\n  line-height: 1.5em;\n}\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n  }\n}\n.details {\n  display: flex;\n  flex-direction: column;\n}\n.colors {\n  flex-grow: 1;\n}\n.product-title, .price, .sizes, .colors {\n  text-transform: capitalize;\n  font-weight: bold;\n}\n.checked, .price span {\n  color: #ff9f1a;\n}\n.product-title {\n  margin-top: 0;\n}\n.size {\n  margin-right: 10px;\n}\n.size:first-of-type {\n  margin-left: 40px;\n}\n.color {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n  height: 2em;\n  width: 2em;\n  border-radius: 2px;\n}\n.color:first-of-type {\n  margin-left: 20px;\n}\n.add-to-cart, .like {\n  background: #ff9f1a;\n  padding: 0.5em 1em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background 0.3s ease;\n}\n.add-to-cart:hover, .like:hover {\n  background: #b36800;\n  color: #fff;\n}\n.not-available {\n  text-align: center;\n  line-height: 2em;\n}\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\";\n  color: #fff;\n}\n.orange {\n  background: #ff9f1a;\n}\n.green {\n  background: #85ad00;\n}\n.blue {\n  background: #0076ad;\n}\n.tooltip-inner {\n  padding: 1.3em;\n}\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    transform: scale(3);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    transform: scale(3);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=style.css.map */\n.star {\n  font-size: 12px;\n}\n.detailStar {\n  font-size: 15px;\n}\n.btn {\n  cursor: pointer;\n}\n.sm-text {\n  font-size: 10px;\n  letter-spacing: 1px;\n}\n.sm-text-1 {\n  font-size: 14px;\n}\n.green-tab {\n  background-color: #00C853;\n  color: #fff;\n  border-radius: 5px;\n  padding: 5px 3px 5px 3px;\n}\n.btn-red {\n  background-color: #E64A19;\n  color: #fff;\n  border-radius: 20px;\n  border: none;\n  outline: none;\n}\n.btn-red:hover {\n  background-color: #BF360C;\n}\n.btn-red:focus {\n  box-shadow: none !important;\n  outline-width: 0;\n}\n.round-icon {\n  font-size: 40px;\n  padding-bottom: 10px;\n}\n.fa-circle {\n  font-size: 10px;\n  color: #EEEEEF;\n}\n.green-dot {\n  color: #4CAF50;\n}\n.red-dot {\n  color: #E64A19;\n}\n.yellow-dot {\n  color: #FFD54F;\n}\n.grey-text {\n  color: #BDBDBD;\n}\n.green-text {\n  color: #4CAF50;\n}\n.block {\n  border-right: 1px solid #F5EEEE;\n  border-top: 1px solid #F5EEEE;\n  border-bottom: 1px solid #F5EEEE;\n}\n.profile-pic {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  padding: 5px;\n  border: 1px solid #000;\n}\n.rating-dot {\n  letter-spacing: 5px;\n}\n.via {\n  border-radius: 20px;\n  height: 28px;\n}\n/* Base styling*/\n.popover__title {\n  font-size: 10px;\n  text-decoration: none;\n  color: #e44444;\n  text-align: center;\n}\n.popover__wrapper {\n  position: relative;\n  display: inline-block;\n}\n.popover__content {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  width: 200px;\n  left: -100px;\n  transform: translate(0, 10px);\n  background-color: #fff;\n  padding: 0.5rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  width: auto;\n}\n.popover__wrapper:hover .popover__content {\n  z-index: 10;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -20px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n.popover__message {\n  text-align: center;\n  font-size: 10px;\n}\n.cardDiv {\n  height: 20px;\n  word-break: break-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cardmerchant {\n  box-shadow: 0 4px 8px 0;\n  max-width: 350px;\n  margin: auto;\n  text-align: center;\n  font-family: arial;\n  border-radius: 25px;\n  background-color: #fff;\n}\n.cardmerchant h1 {\n  padding-left: 3rem;\n}\n.pricemercahnt {\n  color: grey;\n  font-size: 22px;\n}\n.merchantName {\n  font-size: 22px;\n  text-transform: capitalize;\n}\n.cardmerchant button {\n  border: none;\n  outline: 0;\n  padding: 12px;\n  color: white;\n  background-color: #AA0000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-size: 16px;\n}\n.cardmerchant button:hover {\n  opacity: 0.7;\n}\n.rowSegregate {\n  border-bottom: 2px solid #ccc;\n}\n.star-rating {\n  display: flex;\n  align-items: center;\n  font-size: 3em;\n  justify-content: center;\n  margin-top: 10px;\n}\n.back-stars {\n  display: flex;\n  color: #ccc;\n  position: relative;\n  text-shadow: 4px 4px 10px #843a3a;\n}\n.front-stars {\n  display: flex;\n  color: #AA0000;\n  overflow: hidden;\n  position: absolute;\n  text-shadow: 1px 1px 1px #AA0000;\n  top: 0;\n  transition: all 0.5s;\n}\n.progress-bar {\n  background-color: #AA0000 !important;\n}\n.topnav {\n  overflow: hidden;\n  float: left;\n}\n.topnav a {\n  float: left;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  border-bottom: 1px solid #ccc;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n  color: #AA0000;\n  opacity: 1;\n}\n.topnav a:hover {\n  border-bottom: 3px solid #AA0000;\n  cursor: pointer;\n}\n.topnav a.active {\n  border-bottom: 3px solid #AA0000;\n}\n.topnav a {\n  padding: 0.05rem 2.9rem;\n}\n.discountFeild {\n  width: 30%;\n}\n.headingBorder {\n  border: 2px solid #AA0000;\n  background-color: #AA0000;\n  color: #fff;\n}\n.headingBorder a {\n  color: #fff;\n}\n.collapse {\n  text-decoration: none;\n}\na:link {\n  text-decoration: none;\n}\n.forumTabActive {\n  font-size: 14px;\n  border-bottom: none !important;\n  color: #AA0000 !important;\n  cursor: pointer;\n}\n.forumTabActiveli {\n  border-bottom: 1px solid #AA0000 !important;\n  cursor: pointer;\n}\n.menuImage {\n  width: 44px !important;\n  height: 44px !important;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  text-align: center;\n  border: 1px solid #AA0000 !important;\n}\n.submenuImage {\n  width: 44px !important;\n  height: 44px !important;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  text-align: center;\n  border: 1px solid #AA0000 !important;\n}\nfigure {\n  text-align: center;\n  color: #000;\n  font-size: 11px;\n  min-width: 57px;\n}\n.card-loader1 {\n  background-color: #fff;\n  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.08), 0 -1px 3px 0 rgba(0, 0, 0, 0.06);\n  padding: 8px;\n  position: relative;\n  border-radius: 2px;\n  margin-bottom: 0;\n  height: 200px;\n  overflow: hidden;\n  width: 350px;\n}\n.card-loader1:only-child {\n  margin-top: 0;\n}\n.card-loader1:before {\n  content: \"\";\n  height: 110px;\n  display: block;\n  background-color: #ededed;\n  box-shadow: -48px 78px 0 -48px #ededed, -51px 102px 0 -51px #ededed;\n}\n.card-loader1:after {\n  content: \"\";\n  background-color: #333;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: loader-animate;\n          animation-name: loader-animate;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0) 81%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffffff\", endColorstr=\"#00ffffff\",GradientType=1 );\n}\n.AClass {\n  right: -16px;\n  top: -11px;\n  position: absolute;\n  color: #AA0000;\n}\n.submenuImage {\n  width: 45px !important;\n  height: 45px !important;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  text-align: center;\n  border: 1px solid #AA0000 !important;\n}\n@media only screen and (max-width: 500px) {\n  .topnav a {\n    padding: 0.05rem 0.5rem;\n    font-size: 11px;\n  }\n\n  .headingBorder {\n    font-size: 10px;\n  }\n\n  figure {\n    text-align: center;\n    color: #000;\n    font-size: 9px;\n    min-width: 57px;\n  }\n\n  .container1 {\n    width: 325px;\n    height: auto;\n    margin: 10px auto;\n  }\n\n  .card-head {\n    height: 250px;\n  }\n\n  .navsumenu {\n    display: flex;\n    flex-wrap: unset !important;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n  }\n\n  ul.submenu {\n    width: 400px;\n    overflow-x: scroll;\n    white-space: nowrap;\n  }\n  ul.submenu li {\n    display: inline-block;\n    zoom: 1;\n  }\n\n  .btn-danger {\n    max-width: 100px;\n    font-size: 10px;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .topnav a {\n    padding: 0.02em 0.2rem;\n    font-size: 7px;\n  }\n\n  .trackIdComM {\n    font-size: 9px !important;\n  }\n\n  .container1 {\n    width: 295px;\n    height: auto;\n    margin: 10px auto;\n  }\n}\n.backButton {\n  border-radius: 50%;\n  cursor: pointer;\n}\n.trackIdComM {\n  font-size: 10px;\n}\n.figcaption1 {\n  max-width: 73px;\n}\n.navsumenu {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\nul.itemList li {\n  list-style: none;\n  margin-left: 10px;\n  font-size: 12px;\n}\n.footerM {\n  font-size: 12px;\n}\n.input-numberM {\n  width: 14% !important;\n  flex: 1 1 0%;\n}\n.PlusbuttonM {\n  background-color: #dc3545;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 10px;\n  margin: 4px 2px;\n  width: 15px;\n  height: 15px;\n}\n.cartMob {\n  font-size: 15px !important;\n}\n.applyBtmM {\n  font-size: 9px;\n  width: auto;\n  height: 30px;\n}\n.discountFeild {\n  width: 80%;\n}\n.nav-link {\n  padding: 0.2rem 0.7rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcGluZy9hZGRwcm9kdWN0L0M6XFxVc2Vyc1xcQWJoaXNoZWsuU2F4ZW5hMVxcRGVza3RvcFxccHJha2FzaFxcc2hvZWRlbGl2ZXJ5RnJvbnRFbmQvc3JjXFxhcHBcXHNob3BpbmdcXGFkZHByb2R1Y3RcXGFkZHByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nob3BpbmcvYWRkcHJvZHVjdC9hZGRwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBUSxpR0FBQTtBQ0FSLGdCQUFnQjtBRENoQjtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFRjtBREFBO0VBQ0UsYUFBQTtBQ0dGO0FEREE7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUNJRjtBRERBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0lGO0FEREE7RUFDRSxtQkFBQTtFQUNBLG1EQUFBO0FDSUY7QURBQTtFQUVFLGFBQUE7RUFFQSw0QkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0FDRUo7QURHQTtFQUVFLE9BQUE7QUNERjtBREtBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRkY7QURLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQ0ZGO0FES0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDRkY7QURLQTtFQUNFLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUNGRjtBREtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZGO0FES0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRkY7QURpQkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDZEY7QURpQkE7RUFHRSxXQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxjQUFBO0FDaEJGO0FEbUJBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNoQkY7QURtQkE7RUFDRSxpQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ2hCRjtBRG1CQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ2hCRjtBRG1CQTs7RUFFRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNoQkY7QURtQkE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtBQ2hCRjtBRG1CQTtFQUNFLGlCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNoQkY7QURtQkE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNoQkY7QURtQkE7RUFDRSxtQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLG1CQUFBO0FDaEJGO0FEbUJBO0VBQ0UsbUJBQUE7QUNoQkY7QURtQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNoQkY7QURtQkE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3REFBQTtBQ2hCRjtBRG1CQTtFQUNFLGdCQUFBO0FDaEJGO0FEcUJBO0VBRUUsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtBQ25CRjtBRHNCQTtFQUVFLDhCQUFBO0FDcEJGO0FEdURBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNFLFlBQUE7QUNwREo7QUR1REE7RUFBVSxrQkFBQTtBQ25EVjtBRHFEQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQ2xERjtBRG9EQTtFQUNFLGFBQUE7QUNqREY7QURtREE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ2hERjtBRG9EQSx3REFBQTtBQUNBO0VBSUUsYUFBQTtFQUtRLHNCQUFBO0FDakRWO0FEa0RFO0VBQ0U7SUFDRSxtQkFBQTtFQy9DSjtBQUNGO0FEZ0RBO0VBSVUsWUFBQTtBQzlDVjtBRGdEQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQzdDRjtBRDhDRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQzNDSjtBRDRDSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUN6Q047QUQyQ0k7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ3hDTjtBRHlDSTtFQUNFLGVBQUE7QUN0Q047QUR3Q0E7RUFDRSxnQkFBQTtBQ3JDRjtBRHNDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDUSx1QkFBQTtFQUNSLGdDQUFBO0VBQ1Esd0JBQUE7QUNuQ1o7QURzQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDbkNGO0FEcUNBO0VBQ0U7SUFJRSxhQUFBO0VDbENGO0FBQ0Y7QURtQ0E7RUFJRSxhQUFBO0VBS1Esc0JBQUE7QUNqQ1Y7QURtQ0E7RUFJVSxZQUFBO0FDaENWO0FEa0NBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQy9CRjtBRGlDQTtFQUNFLGNBQUE7QUM5QkY7QURtQ0E7RUFDRSxhQUFBO0FDaENGO0FEa0NBO0VBQ0Usa0JBQUE7QUMvQkY7QURnQ0U7RUFDRSxpQkFBQTtBQzdCSjtBRCtCQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUM1QkY7QUQ2QkU7RUFDRSxpQkFBQTtBQzFCSjtBRDRCQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFFUSxnQ0FBQTtBQ3pCVjtBRDBCRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ3ZCSjtBRHlCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUR1QkU7RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDcEJKO0FEc0JBO0VBQ0UsbUJBQUE7QUNuQkY7QURxQkE7RUFDRSxtQkFBQTtBQ2xCRjtBRG9CQTtFQUNFLG1CQUFBO0FDakJGO0FEbUJBO0VBQ0UsY0FBQTtBQ2hCRjtBRGtCQTtFQUNFO0lBQ0UsVUFBQTtJQUVRLG1CQUFBO0VDZlY7RURnQkE7SUFDRSxVQUFBO0lBRVEsbUJBQUE7RUNkVjtBQUNGO0FEZUE7RUFDRTtJQUNFLFVBQUE7SUFFUSxtQkFBQTtFQ2JWO0VEY0E7SUFDRSxVQUFBO0lBRVEsbUJBQUE7RUNaVjtBQUNGO0FEYUEsb0NBQUE7QUFFQTtFQUNFLGVBQUE7QUNaRjtBRGVBO0VBQ0UsZUFBQTtBQ1pGO0FEY0E7RUFDRSxlQUFBO0FDWEY7QURlQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ1pGO0FEZUE7RUFDRSxlQUFBO0FDWkY7QURlQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNaRjtBRGVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1pGO0FEZUE7RUFDRSx5QkFBQTtBQ1pGO0FEZUE7RUFHRSwyQkFBQTtFQUNBLGdCQUFBO0FDWkY7QURlQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ1pGO0FEZUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1pGO0FEZUE7RUFDRSxjQUFBO0FDWkY7QURlQTtFQUNFLGNBQUE7QUNaRjtBRGVBO0VBQ0UsY0FBQTtBQ1pGO0FEZUE7RUFDRSxjQUFBO0FDWkY7QURlQTtFQUNFLGNBQUE7QUNaRjtBRGVBO0VBQ0UsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDWkY7QURlQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNaRjtBRGVBO0VBQ0UsbUJBQUE7QUNaRjtBRGVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDWkY7QURjQSxnQkFBQTtBQUVBO0VBQ0UsZUFBQTtFQUVBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDYkY7QURpQkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDZEY7QURnQkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7QUNiRjtBRDJCQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlEQUFBO0FDeEJGO0FEMEJBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDdkJGO0FEeUJBO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ3RCRjtBRHVCRTtFQUNFLGtCQUFBO0FDckJKO0FEeUJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUN0QkY7QUR3QkE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7QUNyQkY7QUR3QkE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3JCRjtBRHdCQTtFQUNFLFlBQUE7QUNyQkY7QUR3QkE7RUFDRSw2QkFBQTtBQ3JCRjtBRDhCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDM0JGO0FENkJBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDMUJGO0FENEJBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxNQUFBO0VBQ0Esb0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxvQ0FBQTtBQ3pCRjtBRDZCQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQzFCRjtBRDJCTTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUVBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQzNCVjtBRDZCVTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtBQzNCWjtBRGdDQTtFQUNFLGdDQUFBO0FDN0JGO0FEaUNBO0VBQ0UsdUJBQUE7QUM5QkY7QURpQ0E7RUFDRSxVQUFBO0FDOUJGO0FEaUNBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUM5QkY7QUQrQkc7RUFDRSxXQUFBO0FDN0JMO0FEZ0NBO0VBQ0UscUJBQUE7QUM3QkY7QUQrQkE7RUFBUyxxQkFBQTtBQzNCVDtBRDZCQTtFQUVFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQzNCRjtBRDZCQTtFQUNFLDJDQUFBO0VBQ0EsZUFBQTtBQzFCRjtBRDJDQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQ3hDRjtBRDBDQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQ3ZDRjtBRDBDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDdkNGO0FEMENBO0VBQ0Usc0JBQUE7RUFDQSwrRUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDdkNGO0FEd0NFO0VBQ0UsYUFBQTtBQ3RDSjtBRHlDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUVBQUE7QUN2Q0o7QUQwQ0U7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0VBR0EsMEhBQUE7RUFDQSx1SEFBQTtBQ3hDSjtBRDRDQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDekNGO0FEMkNBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDeENGO0FENENBO0VBQ0U7SUFDRSx1QkFBQTtJQUNBLGVBQUE7RUN6Q0Y7O0VEMkNBO0lBQ0UsZUFBQTtFQ3hDRjs7RUQwQ0E7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQ3ZDRjs7RUR5Q0E7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDdENGOztFRHdDQTtJQUNFLGFBQUE7RUNyQ0Y7O0VEdUNBO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUNwQ0Y7O0VEc0NBO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNuQ0Y7RURvQ0U7SUFDRSxxQkFBQTtJQUNBLE9BQUE7RUNsQ0o7O0VEcUNBO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VDbENGO0FBQ0Y7QURxQ0U7RUFDQTtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtFQ25DSjs7RURxQ0E7SUFDRSx5QkFBQTtFQ2xDRjs7RURvQ0E7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDakNGO0FBQ0Y7QURzQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNwQ0Y7QURzQ0E7RUFDRSxlQUFBO0FDbkNGO0FEcUNBO0VBQ0UsZUFBQTtBQ2xDRjtBRHFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNsQ0Y7QURxQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2xDSjtBRHFDQTtFQUNFLGVBQUE7QUNsQ0Y7QURvQ0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNqQ0Y7QURvQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0UsWUFBQTtBQ2pDSjtBRG9DQTtFQUNFLDBCQUFBO0FDakNGO0FEbUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENGO0FEa0NBO0VBQ0UsVUFBQTtBQy9CRjtBRGlDQTtFQUNFLGlDQUFBO0FDOUJGIiwiZmlsZSI6InNyYy9hcHAvc2hvcGluZy9hZGRwcm9kdWN0L2FkZHByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIik7XHJcbi5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2V0Q29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lcjEge1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJveC1zaGFkb3c6IC0xMXB4IDExcHggMXB4IHJnYmEoMjU1LCAyNTMsIDI1MywgMC4zKTtcclxufVxyXG5cclxuXHJcbi5jYXJkLWhlYWQge1xyXG5cclxuICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ucHJvZHVjdC1pbWcge1xyXG5cclxuICBsZWZ0OiAwO1xyXG5cclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlsIHtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXRhaWwgaDIge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5iYWNrLXRleHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XHJcbiAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAyMjBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMjVweCAyNXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC10aXRsZSB7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4IDVweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXRpdGxlIGIge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRvcDogLTJweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4vLyAucmF0aW5nIHtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgZm9udC1zaXplOiAxMXB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbi8vICAgY29sb3I6ICNmZmY7XHJcbi8vICAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuLy8gICBwYWRkaW5nOiA1cHggNXB4O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICB0b3A6IC0ycHg7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuLy8gfVxyXG5cclxuLnByb2R1Y3QtY2FwdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4ucHJvZHVjdC1yYXRpbmcge1xyXG4gIC8vIHBhZGRpbmc6IDAgMjBweDtcclxuICAvLyBmb250LXNpemU6IDExcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4ucHJvZHVjdC1yYXRpbmcgaS5ncmV5IHtcclxuICBjb2xvcjogI2NlY2UxNTtcclxufVxyXG5cclxuLnByb2R1Y3Qtc2l6ZSBoNCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDAgMjFweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi51bC1zaXplIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLnVsLXNpemUgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udWwtc2l6ZSBsaSBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnVsLXNpemUgbGkgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICNmMzVlM2Q7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXNpemU6YmVmb3JlLFxyXG4ucHJvZHVjdC1zaXplOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLnByb2R1Y3QtY29sb3IgaDQge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nOiAwIDIxcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udWwtY29sb3Ige1xyXG4gIG1hcmdpbi1sZWZ0OiAyN3B4O1xyXG59XHJcblxyXG4udWwtY29sb3IgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udWwtY29sb3IgbGkgYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4udWwtY29sb3IgbGkgYS5vcmFuZ2Uge1xyXG4gIGJhY2tncm91bmQ6ICNmMzVlM2Q7XHJcbn1cclxuXHJcbi51bC1jb2xvciBsaSBhLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG59XHJcblxyXG4udWwtY29sb3IgbGkgYS55ZWxsb3cge1xyXG4gIGJhY2tncm91bmQ6ICNmZmQ0MTQ7XHJcbn1cclxuXHJcbi51bC1jb2xvciBsaSBhLmFjdGl2ZTphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjM1ZTNkO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXByaWNlIHtcclxuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gIHBhZGRpbmc6IDdweCAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIG1hcmdpbi10b3A6IC0xM3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gIGJveC1zaGFkb3c6IC0xMHB4IDIwcHggMTVweCAtMTBweCByZ2JhKDE3LCAyMzMsIDkxLCAwLjMpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1wcmljZSBiIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbi55dFxyXG57XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHBhZGRpbmc6N3B4IDEwcHggM3B4IDEwcHg7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuXHJcbi55dDpob3ZlclxyXG57XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4vLyAucXVhbnRpdHkge1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gfVxyXG5cclxuLy8gaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4vLyBpbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b25cclxuLy8ge1xyXG4vLyAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vIH1cclxuXHJcbi8vIGlucHV0W3R5cGU9bnVtYmVyXVxyXG4vLyB7XHJcbi8vICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbi8vIH1cclxuXHJcbi8vIC5xdWFudGl0eSBpbnB1dCB7XHJcbi8vICAgd2lkdGg6IDI1cHg7XHJcbi8vICAgaGVpZ2h0OiAyMHB4O1xyXG4vLyAgIGxpbmUtaGVpZ2h0OiAxLjY1O1xyXG4vLyAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIHBhZGRpbmc6IDA7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4vLyB9XHJcblxyXG4vLyAucXVhbnRpdHkgaW5wdXQ6Zm9jdXMge1xyXG4vLyAgIG91dGxpbmU6IDA7XHJcbi8vIH1cclxuXHJcbi5QbHVzYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbjogNHB4IDJweDtcclxuICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmJ1dHRvbjUge2JvcmRlci1yYWRpdXM6IDUwJTt9XHJcblxyXG4uaW5wdXQtbnVtYmVyIHtcclxuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMSAxIDAlO1xyXG59XHJcbi5jaGVja2VkIHtcclxuICBjb2xvcjogb3JhbmdlO1xyXG59XHJcbi5mYS1zdGFyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqIERldGFpbCBQYWdlICoqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi5wcmV2aWV3IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk2cHgpIHtcclxuICAgIC5wcmV2aWV3IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDsgfSB9XHJcblxyXG4ucHJldmlldy1waWMge1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcblxyXG4ucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAxNXB4OyB9XHJcbiAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIHtcclxuICAgIHdpZHRoOiAxOCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIuNSU7IH1cclxuICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBpbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDE3N3B4ICAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGEge1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7IH1cclxuICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaTpsYXN0LW9mLXR5cGUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuXHJcbi50YWItY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4gIC50YWItY29udGVudCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBvcGFjaXR5O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzOyB9XHJcblxyXG5cclxuLmNhcmREZXRhaWxzIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgcGFkZGluZzogM2VtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTsgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTk3cHgpIHtcclxuICAud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDsgfSB9XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG5cclxuLmNvbG9ycyB7XHJcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XHJcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7IH1cclxuXHJcbi5wcm9kdWN0LXRpdGxlLCAucHJpY2UsIC5zaXplcywgLmNvbG9ycyB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxuXHJcbi5jaGVja2VkLCAucHJpY2Ugc3BhbiB7XHJcbiAgY29sb3I6ICNmZjlmMWE7IH1cclxuXHJcbi8vIC5wcm9kdWN0LXRpdGxlLCAucmF0aW5nLCAucHJvZHVjdC1kZXNjcmlwdGlvbiwgLnByaWNlLCAudm90ZSwgLnNpemVzIHtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XHJcblxyXG4ucHJvZHVjdC10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMDsgfVxyXG5cclxuLnNpemUge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxyXG4gIC5zaXplOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7IH1cclxuXHJcbi5jb2xvciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4OyB9XHJcbiAgLmNvbG9yOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cclxuXHJcbi5hZGQtdG8tY2FydCwgLmxpa2Uge1xyXG4gIGJhY2tncm91bmQ6ICNmZjlmMWE7XHJcbiAgcGFkZGluZzogLjVlbSAxZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBVUFBFUkNBU0U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTsgfVxyXG4gIC5hZGQtdG8tY2FydDpob3ZlciwgLmxpa2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2IzNjgwMDtcclxuICAgIGNvbG9yOiAjZmZmOyB9XHJcblxyXG4ubm90LWF2YWlsYWJsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyZW07IH1cclxuICAubm90LWF2YWlsYWJsZTpiZWZvcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IGZvbnRhd2Vzb21lO1xyXG4gICAgY29udGVudDogXCJcXGYwMGRcIjtcclxuICAgIGNvbG9yOiAjZmZmOyB9XHJcblxyXG4ub3JhbmdlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY5ZjFhOyB9XHJcblxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQ6ICM4NWFkMDA7IH1cclxuXHJcbi5ibHVlIHtcclxuICBiYWNrZ3JvdW5kOiAjMDA3NmFkOyB9XHJcblxyXG4udG9vbHRpcC1pbm5lciB7XHJcbiAgcGFkZGluZzogMS4zZW07IH1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDMpOyB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9IH1cclxuXHJcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgzKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzKTsgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcblxyXG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXHJcblxyXG4uc3RhciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZGV0YWlsU3RhciB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5idG4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5zbS10ZXh0IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweFxyXG59XHJcblxyXG4uc20tdGV4dC0xIHtcclxuICBmb250LXNpemU6IDE0cHhcclxufVxyXG5cclxuLmdyZWVuLXRhYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQzg1MztcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4IDNweCA1cHggM3B4XHJcbn1cclxuXHJcbi5idG4tcmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTY0QTE5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmVcclxufVxyXG5cclxuLmJ0bi1yZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCRjM2MENcclxufVxyXG5cclxuLmJ0bi1yZWQ6Zm9jdXMge1xyXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lLXdpZHRoOiAwXHJcbn1cclxuXHJcbi5yb3VuZC1pY29uIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHhcclxufVxyXG5cclxuLmZhLWNpcmNsZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiAjRUVFRUVGXHJcbn1cclxuXHJcbi5ncmVlbi1kb3Qge1xyXG4gIGNvbG9yOiAjNENBRjUwXHJcbn1cclxuXHJcbi5yZWQtZG90IHtcclxuICBjb2xvcjogI0U2NEExOVxyXG59XHJcblxyXG4ueWVsbG93LWRvdCB7XHJcbiAgY29sb3I6ICNGRkQ1NEZcclxufVxyXG5cclxuLmdyZXktdGV4dCB7XHJcbiAgY29sb3I6ICNCREJEQkRcclxufVxyXG5cclxuLmdyZWVuLXRleHQge1xyXG4gIGNvbG9yOiAjNENBRjUwXHJcbn1cclxuXHJcbi5ibG9jayB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0Y1RUVFRTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0Y1RUVFRTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y1RUVFRVxyXG59XHJcblxyXG4ucHJvZmlsZS1waWMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuXHJcbi5yYXRpbmctZG90IHtcclxuICBsZXR0ZXItc3BhY2luZzogNXB4XHJcbn1cclxuXHJcbi52aWEge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyOHB4XHJcbn1cclxuLyogQmFzZSBzdHlsaW5nKi9cclxuXHJcbi5wb3BvdmVyX190aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHJnYigyMjgsIDY4LCA2OCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnBvcG92ZXJfX3dyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnBvcG92ZXJfX2NvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDoyMDBweDtcclxuICBsZWZ0OiAtMTAwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5wb3BvdmVyX19jb250ZW50OmJlZm9yZSB7XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIHotaW5kZXg6IC0xO1xyXG4gIC8vIGNvbnRlbnQ6IFwiXCI7XHJcbiAgLy8gcmlnaHQ6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgLy8gdG9wOiAtOHB4O1xyXG4gIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLy8gYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gIC8vIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2JmYmZiZiB0cmFuc3BhcmVudDtcclxuICAvLyB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gIC8vIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxufVxyXG4ucG9wb3Zlcl9fd3JhcHBlcjpob3ZlciAucG9wb3Zlcl9fY29udGVudCB7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC43NSwgLTAuMDIsIDAuMiwgMC45Nyk7XHJcbn1cclxuLnBvcG92ZXJfX21lc3NhZ2Uge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLmNhcmREaXYgIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmNhcmRtZXJjaGFudCB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDA7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgaDEge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnByaWNlbWVyY2FobnQge1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG4ubWVyY2hhbnROYW1lIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5jYXJkbWVyY2hhbnQgYnV0dG9uIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogMDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZG1lcmNoYW50IGJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4ucm93U2VncmVnYXRlIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcclxufVxyXG5cclxuXHJcblxyXG4udWxQcm9kdWN0IHtcclxuIC8vIGxpc3Qtc3R5bGUtaW1hZ2U6IHVybCgnc3FwdXJwbGUuZ2lmJyk7XHJcbn1cclxuXHJcbi5zdGFyLXJhdGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogM2VtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLmJhY2stc3RhcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDEwcHggIzg0M2EzYTtcclxufVxyXG4uZnJvbnQtc3RhcnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6ICNBQTAwMDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICNBQTAwMDA7XHJcbiAgdG9wOiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXNcclxufVxyXG5cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLnRvcG5hdiB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmbG9hdDogbGVmdDtcclxuICAgICAgYSB7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgLy9mb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGNvbG9yOiAjQUEwMDAwO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNBQTAwMDA7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcblxyXG4udG9wbmF2IGEuYWN0aXZlIHtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0FBMDAwMDtcclxufVxyXG5cclxuXHJcbi50b3BuYXYgYSB7XHJcbiAgcGFkZGluZzogLjA1cmVtIDIuOXJlbTtcclxufVxyXG5cclxuLmRpc2NvdW50RmVpbGQge1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5oZWFkaW5nQm9yZGVyIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjQUEwMDAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgIGEge1xyXG4gICAgIGNvbG9yOiAjZmZmO1xyXG4gICB9XHJcbn1cclxuLmNvbGxhcHNlICB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmE6bGluayB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG5cclxuLmZvcnVtVGFiQWN0aXZlIHtcclxuICAvL2JvcmRlcjogMXB4IHNvbGlkICNBQTAwMDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICBjb2xvcjogI0FBMDAwMCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZm9ydW1UYWJBY3RpdmVsaSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBQTAwMDAgICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vLyAubWVudUltYWdlIHtcclxuLy8gICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xyXG4vLyAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjQUEwMDAwICAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyBmaWd1cmUge1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBjb2xvcjogIzAwMDtcclxuLy8gfVxyXG5cclxuLm1lbnVJbWFnZSB7XHJcbiAgd2lkdGg6IDQ0cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBMDAwMCAgIWltcG9ydGFudDtcclxufVxyXG4uc3VibWVudUltYWdlIHtcclxuICB3aWR0aDogNDRweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQUEwMDAwICAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5maWd1cmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbWluLXdpZHRoOiA1N3B4O1xyXG59XHJcblxyXG4uY2FyZC1sb2FkZXIxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAxcHggcmdiYSgwLDAsMCwuMDgpLCAwIC0xcHggM3B4IDAgcmdiYSgwLDAsMCwwLjA2KTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDozNTBweDtcclxuICAmOm9ubHktY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDowO1xyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gICAgYm94LXNoYWRvdzogLTQ4cHggNzhweCAwIC00OHB4ICNlZGVkZWQsIC01MXB4IDEwMnB4IDAgLTUxcHggI2VkZWRlZDtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbG9hZGVyLWFuaW1hdGU7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuNikgMzAlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDgxJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjYpIDMwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA4MSUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDAuNikgMzAlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDgxJSk7XHJcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwZmZmZmZmJywgZW5kQ29sb3JzdHI9JyMwMGZmZmZmZicsR3JhZGllbnRUeXBlPTEgKTtcclxuICB9XHJcbn1cclxuXHJcbi5BQ2xhc3N7XHJcbiAgcmlnaHQ6IC0xNnB4O1xyXG4gIHRvcDogLTExcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiAjQUEwMDAwO1xyXG59XHJcbi5zdWJtZW51SW1hZ2Uge1xyXG4gIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQTAwMDAgICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLnRvcG5hdiBhIHtcclxuICAgIHBhZGRpbmc6IC4wNXJlbSAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgLmhlYWRpbmdCb3JkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBmaWd1cmUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIG1pbi13aWR0aDogNTdweDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcjEge1xyXG4gICAgd2lkdGg6IDMyNXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgfVxyXG4gIC5jYXJkLWhlYWQge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgLm5hdnN1bWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIHVsLnN1Ym1lbnUge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB6b29tOiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnRuLWRhbmdlciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcclxuICAudG9wbmF2IGF7XHJcbiAgICAgIHBhZGRpbmc6IDAuMDJlbSAwLjJyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gIH1cclxuICAudHJhY2tJZENvbU0ge1xyXG4gICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcjEge1xyXG4gICAgd2lkdGg6IDI5NXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5iYWNrQnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50cmFja0lkQ29tTSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5maWdjYXB0aW9uMSB7XHJcbiAgbWF4LXdpZHRoOiA3M3B4O1xyXG59XHJcblxyXG4ubmF2c3VtZW51IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbnVsLml0ZW1MaXN0ICB7XHJcbiAgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG4uZm9vdGVyTSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5pbnB1dC1udW1iZXJNIHtcclxuICB3aWR0aDogMTQlICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMSAxIDAlO1xyXG59XHJcblxyXG4uUGx1c2J1dHRvbk0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY2FydE1vYiB7XHJcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFwcGx5QnRtTSB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5kaXNjb3VudEZlaWxkIHtcclxuICB3aWR0aDo4MCU7XHJcbn1cclxuLm5hdi1saW5rIHtcclxuICBwYWRkaW5nOiAuMnJlbSAuN3JlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIpO1xuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZXRDb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jb250YWluZXIxIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IC0xMXB4IDExcHggMXB4IHJnYmEoMjU1LCAyNTMsIDI1MywgMC4zKTtcbn1cblxuLmNhcmQtaGVhZCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG59XG4uY2FyZC1oZWFkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICBsZWZ0OiAwO1xufVxuXG4ucHJvZHVjdC1kZXRhaWwge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wcm9kdWN0LWRldGFpbCBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYmFjay10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEyNXB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyNXB4IDI1cHg7XG59XG5cbi5wcm9kdWN0LXRpdGxlIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDVweCAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnByb2R1Y3QtdGl0bGUgYiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG59XG5cbi5iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogLTJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvZHVjdC1jYXB0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnByb2R1Y3QtcmF0aW5nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuLnByb2R1Y3QtcmF0aW5nIGkuZ3JleSB7XG4gIGNvbG9yOiAjY2VjZTE1O1xufVxuXG4ucHJvZHVjdC1zaXplIGg0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAwIDIxcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udWwtc2l6ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4udWwtc2l6ZSBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi51bC1zaXplIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udWwtc2l6ZSBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNmMzVlM2Q7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucHJvZHVjdC1zaXplOmJlZm9yZSxcbi5wcm9kdWN0LXNpemU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5wcm9kdWN0LWNvbG9yIGg0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAwIDIxcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udWwtY29sb3Ige1xuICBtYXJnaW4tbGVmdDogMjdweDtcbn1cblxuLnVsLWNvbG9yIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnVsLWNvbG9yIGxpIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi51bC1jb2xvciBsaSBhLm9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNmMzVlM2Q7XG59XG5cbi51bC1jb2xvciBsaSBhLmdyZWVuIHtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbn1cblxuLnVsLWNvbG9yIGxpIGEueWVsbG93IHtcbiAgYmFja2dyb3VuZDogI2ZmZDQxNDtcbn1cblxuLnVsLWNvbG9yIGxpIGEuYWN0aXZlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMzVlM2Q7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4ucHJvZHVjdC1wcmljZSB7XG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAtMTNweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJveC1zaGFkb3c6IC0xMHB4IDIwcHggMTVweCAtMTBweCByZ2JhKDE3LCAyMzMsIDkxLCAwLjMpO1xufVxuXG4ucHJvZHVjdC1wcmljZSBiIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnl0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBwYWRkaW5nOiA3cHggMTBweCAzcHggMTBweDtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uUGx1c2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogNHB4IDJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbjUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbnB1dC1udW1iZXIge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSAwJTtcbn1cblxuLmNoZWNrZWQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uZmEtc3RhciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4vKioqKioqKioqKioqKioqKiogRGV0YWlsIFBhZ2UgKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5wcmV2aWV3IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTZweCkge1xuICAucHJldmlldyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLnByZXZpZXctcGljIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIHtcbiAgd2lkdGg6IDE4JTtcbiAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xufVxuXG4ucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxNzdweCAhaW1wb3J0YW50O1xufVxuXG4ucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkgYSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnRhYi1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYi1jb250ZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogb3BhY2l0eTtcbiAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5jYXJkRGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBhZGRpbmc6IDNlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xuICAud3JhcHBlciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbi5kZXRhaWxzIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29sb3JzIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5wcm9kdWN0LXRpdGxlLCAucHJpY2UsIC5zaXplcywgLmNvbG9ycyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNoZWNrZWQsIC5wcmljZSBzcGFuIHtcbiAgY29sb3I6ICNmZjlmMWE7XG59XG5cbi5wcm9kdWN0LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnNpemUge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zaXplOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmNvbG9yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5jb2xvcjpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5hZGQtdG8tY2FydCwgLmxpa2Uge1xuICBiYWNrZ3JvdW5kOiAjZmY5ZjFhO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbn1cblxuLmFkZC10by1jYXJ0OmhvdmVyLCAubGlrZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNiMzY4MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubm90LWF2YWlsYWJsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuLm5vdC1hdmFpbGFibGU6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IGZvbnRhd2Vzb21lO1xuICBjb250ZW50OiBcIu+AjVwiO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNmZjlmMWE7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICM4NWFkMDA7XG59XG5cbi5ibHVlIHtcbiAgYmFja2dyb3VuZDogIzAwNzZhZDtcbn1cblxuLnRvb2x0aXAtaW5uZXIge1xuICBwYWRkaW5nOiAxLjNlbTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXG4uc3RhciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRldGFpbFN0YXIge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uc20tdGV4dC0xIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZ3JlZW4tdGFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQzg1MztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4IDNweCA1cHggM3B4O1xufVxuXG4uYnRuLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjRBMTk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG4tcmVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JGMzYwQztcbn1cblxuLmJ0bi1yZWQ6Zm9jdXMge1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZS13aWR0aDogMDtcbn1cblxuLnJvdW5kLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uZmEtY2lyY2xlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI0VFRUVFRjtcbn1cblxuLmdyZWVuLWRvdCB7XG4gIGNvbG9yOiAjNENBRjUwO1xufVxuXG4ucmVkLWRvdCB7XG4gIGNvbG9yOiAjRTY0QTE5O1xufVxuXG4ueWVsbG93LWRvdCB7XG4gIGNvbG9yOiAjRkZENTRGO1xufVxuXG4uZ3JleS10ZXh0IHtcbiAgY29sb3I6ICNCREJEQkQ7XG59XG5cbi5ncmVlbi10ZXh0IHtcbiAgY29sb3I6ICM0Q0FGNTA7XG59XG5cbi5ibG9jayB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNGNUVFRUU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRjVFRUVFO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y1RUVFRTtcbn1cblxuLnByb2ZpbGUtcGljIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5yYXRpbmctZG90IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuLnZpYSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGhlaWdodDogMjhweDtcbn1cblxuLyogQmFzZSBzdHlsaW5nKi9cbi5wb3BvdmVyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2U0NDQ0NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9wb3Zlcl9fd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9wb3Zlcl9fY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGxlZnQ6IC0xMDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5wb3BvdmVyX193cmFwcGVyOmhvdmVyIC5wb3BvdmVyX19jb250ZW50IHtcbiAgei1pbmRleDogMTA7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xufVxuXG4ucG9wb3Zlcl9fbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY2FyZERpdiB7XG4gIGhlaWdodDogMjBweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNhcmRtZXJjaGFudCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNhcmRtZXJjaGFudCBoMSB7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbn1cblxuLnByaWNlbWVyY2FobnQge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ubWVyY2hhbnROYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNhcmRtZXJjaGFudCBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYXJkbWVyY2hhbnQgYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4ucm93U2VncmVnYXRlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG59XG5cbi5zdGFyLXJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJhY2stc3RhcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI2NjYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXNoYWRvdzogNHB4IDRweCAxMHB4ICM4NDNhM2E7XG59XG5cbi5mcm9udC1zdGFycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjQUEwMDAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjQUEwMDAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMCAhaW1wb3J0YW50O1xufVxuXG4udG9wbmF2IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4udG9wbmF2IGEge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI0FBMDAwMDtcbiAgb3BhY2l0eTogMTtcbn1cbi50b3BuYXYgYTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQUEwMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b3BuYXYgYS5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0FBMDAwMDtcbn1cblxuLnRvcG5hdiBhIHtcbiAgcGFkZGluZzogMC4wNXJlbSAyLjlyZW07XG59XG5cbi5kaXNjb3VudEZlaWxkIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmhlYWRpbmdCb3JkZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQUEwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkaW5nQm9yZGVyIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbGxhcHNlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3J1bVRhYkFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0FBMDAwMCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3J1bVRhYkFjdGl2ZWxpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBQTAwMDAgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudUltYWdlIHtcbiAgd2lkdGg6IDQ0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUEwMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJtZW51SW1hZ2Uge1xuICB3aWR0aDogNDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQTAwMDAgIWltcG9ydGFudDtcbn1cblxuZmlndXJlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtaW4td2lkdGg6IDU3cHg7XG59XG5cbi5jYXJkLWxvYWRlcjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDAgLTFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzUwcHg7XG59XG4uY2FyZC1sb2FkZXIxOm9ubHktY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmNhcmQtbG9hZGVyMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDExMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgYm94LXNoYWRvdzogLTQ4cHggNzhweCAwIC00OHB4ICNlZGVkZWQsIC01MXB4IDEwMnB4IDAgLTUxcHggI2VkZWRlZDtcbn1cbi5jYXJkLWxvYWRlcjE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGxvYWRlci1hbmltYXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgODElKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgODElKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDgxJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsIGVuZENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsR3JhZGllbnRUeXBlPTEgKTtcbn1cblxuLkFDbGFzcyB7XG4gIHJpZ2h0OiAtMTZweDtcbiAgdG9wOiAtMTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI0FBMDAwMDtcbn1cblxuLnN1Ym1lbnVJbWFnZSB7XG4gIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBMDAwMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC50b3BuYXYgYSB7XG4gICAgcGFkZGluZzogMC4wNXJlbSAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG5cbiAgLmhlYWRpbmdCb3JkZXIge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIGZpZ3VyZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIG1pbi13aWR0aDogNTdweDtcbiAgfVxuXG4gIC5jb250YWluZXIxIHtcbiAgICB3aWR0aDogMzI1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG5cbiAgLmNhcmQtaGVhZCB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuXG4gIC5uYXZzdW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICB1bC5zdWJtZW51IHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgdWwuc3VibWVudSBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHpvb206IDE7XG4gIH1cblxuICAuYnRuLWRhbmdlciB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnRvcG5hdiBhIHtcbiAgICBwYWRkaW5nOiAwLjAyZW0gMC4ycmVtO1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICB9XG5cbiAgLnRyYWNrSWRDb21NIHtcbiAgICBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRhaW5lcjEge1xuICAgIHdpZHRoOiAyOTVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cbn1cbi5iYWNrQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cmFja0lkQ29tTSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmZpZ2NhcHRpb24xIHtcbiAgbWF4LXdpZHRoOiA3M3B4O1xufVxuXG4ubmF2c3VtZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbnVsLml0ZW1MaXN0IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvb3Rlck0ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pbnB1dC1udW1iZXJNIHtcbiAgd2lkdGg6IDE0JSAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgMCU7XG59XG5cbi5QbHVzYnV0dG9uTSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogNHB4IDJweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLmNhcnRNb2Ige1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmFwcGx5QnRtTSB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZGlzY291bnRGZWlsZCB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjdyZW0gIWltcG9ydGFudDtcbn0iXX0= */";
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
          }, {
            "name": "Fruits",
            images: "fruitvegetable.jpg",
            "type": "subCategorytype91"
          }, {
            "name": "Vegetable",
            images: "fruitvegetable.jpg",
            "type": "subCategorytype92"
          }],
          "category4": [{
            "name": "Mens Top Wear",
            images: "menstopwear.jpg",
            "type": "subCategorytype41"
          }, {
            "name": "Mens Bottam Wear",
            images: "mensbottomwear.jpg",
            "type": "subCategorytype42"
          }, {
            "name": "Women Eiths",
            images: "womenethics.jpg",
            "type": "subCategorytype43"
          }, {
            "name": "Women western",
            images: "womenwestern.jpg",
            "type": "subCategorytype44"
          }, {
            "name": "Mens foot wear",
            images: "menfoottwear.jpg",
            "type": "subCategorytype45"
          }, {
            "name": "Women foot wear",
            images: "womenfootwear.jpg",
            "type": "subCategorytype46"
          }, {
            "name": "Watches and Accesories",
            images: "watchesaccesories.jpg",
            "type": "subCategorytype47"
          }, {
            "name": "Bags,Suitcase",
            images: "bagsuit.jpg",
            "type": "subCategorytype48"
          }, {
            "name": "Boys Dress",
            images: "boysdress.jpg",
            "type": "subCategorytype49"
          }, {
            "name": "Girls Dress",
            images: "girlsdress.jpg",
            "type": "subCategorytype410"
          }],
          "category5": [{
            "name": "Audio",
            images: "audio.jpg",
            "type": "subCategorytype51"
          }, {
            "name": "Camera and accessories",
            images: "cameraassecories.jpg",
            "type": "subCategorytype52"
          }, {
            "name": "Computer Phripherals",
            images: "computerperipheral.jpg",
            "type": "subCategorytype53"
          }, {
            "name": "Laptop and desktop",
            images: "laptop.jpg",
            "type": "subCategorytype54"
          }, {
            "name": "Laptop Accesories",
            images: "laptopaccesories.jpg",
            "type": "subCategorytype55"
          }, {
            "name": "Health and personal care",
            images: "healthcare.jpg",
            "type": "subCategorytype56"
          }, {
            "name": "Power bank",
            images: "powerbank.jpg",
            "type": "subCategorytype57"
          }, {
            "name": "Storage",
            images: "storage.jpg",
            "type": "subCategorytype58"
          }, {
            "name": "Smart wearable",
            images: "smartwear.jpg",
            "type": "subCategorytype59"
          }, {
            "name": "Smart home automation",
            images: "smarthome.jpg",
            "type": "subCategorytype510"
          }, {
            "name": "Tablets and Accessories",
            images: "tabletaccesories.jpg",
            "type": "subCategorytype511"
          }, {
            "name": "Television",
            images: "tv.jpg",
            "type": "subCategorytype71"
          }, {
            "name": "Washing Mechine",
            images: "WashingMechine.jpg",
            "type": "subCategorytype72"
          }, {
            "name": "Air Conditioner",
            images: "aircondition.jpg",
            "type": "subCategorytype73"
          }, {
            "name": "Refrigerator",
            images: "refrigerator.jpg",
            "type": "subCategorytype74"
          }, {
            "name": "Kitchen Appliances",
            images: "kitchenappliances.jpg",
            "type": "subCategorytype75"
          }, {
            "name": "Home Appliances",
            images: "homeappliances.jpg",
            "type": "subCategorytype76"
          }, {
            "name": "Mobile less 5000",
            images: "mobile.jpg",
            "type": "subCategorytype31"
          }, {
            "name": "Mobile accessories",
            images: "mobile.jpg",
            "type": "subCategorytype32"
          }, {
            "name": "Mobile Less then 10000",
            images: "mobile.jpg",
            "type": "subCategorytype33"
          }, {
            "name": "Mobile Less then 15000",
            images: "mobile.jpg",
            "type": "subCategorytype34"
          }, {
            "name": "Mobile Price 15K -30K",
            images: "mobile.jpg",
            "type": "subCategorytype35"
          }, {
            "name": "Mobile Price 30000 - 50K",
            images: "mobile.jpg",
            "type": "subCategorytype36"
          }, {
            "name": "Mobile Price 50k and above",
            images: "mobile.jpg",
            "type": "subCategorytype37"
          }],
          "category6": [{
            "name": "Home Furnishing",
            images: "homefurniture.jpg",
            "type": "subCategorytype61"
          }, {
            "name": "Living room",
            images: "livingroom.jpg",
            "type": "subCategorytype62"
          }, {
            "name": "Kitchen and Dining",
            images: "kitchendinning.jpg",
            "type": "subCategorytype63"
          }, {
            "name": "Bed Room",
            images: "bedroom.jpg",
            "type": "subCategorytype64"
          }, {
            "name": "Tool & Utility",
            images: "toolutility.jpg",
            "type": "subCategorytype65"
          }, {
            "name": "Lighting & Electrical",
            images: "lighting.jpg",
            "type": "subCategorytype66"
          }, {
            "name": "Cleaning and Bath",
            images: "cleanbath.jpg",
            "type": "subCategorytype67"
          }, {
            "name": "Kids Furniture",
            images: "kidsroom.jpg",
            "type": "subCategorytype68"
          }, {
            "name": "Pets and gardening",
            images: "Petsandgardening.jpg",
            "type": "subCategorytype69"
          }],
          "category8": [{
            "name": "Beauty and Personal care",
            images: "beautyandpersonal.jpg",
            "type": "subCategorytype81"
          }, {
            "name": "Mens Grooming",
            images: "MensGrooming.jpg",
            "type": "subCategorytype82"
          }, {
            "name": "Food and drinking",
            images: "foodanddrinking.jpg",
            "type": "subCategorytype83"
          }, {
            "name": "Baby Care",
            images: "babycare.jpg",
            "type": "subCategorytype84"
          }, {
            "name": "Nutrition and Health Care",
            images: "nutritionhealth.jpg",
            "type": "subCategorytype85"
          }, {
            "name": "Toys and School Supplies",
            images: "ToysandSchoolSupplies.jpg",
            "type": "subCategorytype86"
          }, {
            "name": "Sports and Fitness",
            images: "sportsandfitness.jpg",
            "type": "subCategorytype87"
          }, {
            "name": "Books and Music",
            images: "booksmusic.jpg",
            "type": "subCategorytype88"
          }, {
            "name": "Stationary & Office supplies",
            images: "StationeryOffice.jpg",
            "type": "subCategorytype89"
          }, {
            "name": "Saftey and Hygiene Essentials",
            images: "SafetyHygiene.jpg",
            "type": "subCategorytype810"
          }],
          "category10": [{
            "name": "Ayush",
            images: "Ayush.jpg",
            "type": "subCategorytype101"
          }, {
            "name": "Baby Essential",
            images: "BabyEssential.jpg",
            "type": "subCategorytype102"
          }, {
            "name": "Covid Essential",
            images: "CovidEssential.jpg",
            "type": "subCategorytype103"
          }, {
            "name": "Doctor",
            images: "Doctor.jpg",
            "type": "subCategorytype104"
          }, {
            "name": "Eye Wear",
            images: "EyeWear.jpg",
            "type": "subCategorytype105"
          }, {
            "name": "Fitness",
            images: "Fitness.jpg",
            "type": "subCategorytype106"
          }, {
            "name": "Lab test",
            images: "Lab_test.jpg",
            "type": "subCategorytype107"
          }, {
            "name": "Medical devices",
            images: "Medicaldevices.jpg",
            "type": "subCategorytype108"
          }, {
            "name": "Medicine",
            images: "Lab_test.jpg",
            "type": "subCategorytype109"
          }, {
            "name": "Personal care",
            images: "Personalcare.jpg",
            "type": "subCategorytype110"
          }, {
            "name": "Surgical",
            images: "Surgical.jpg",
            "type": "subCategorytype111"
          }],
          "category11": [{
            "name": "Haire care",
            images: "Hairecare.jpg",
            "type": "subCategorytype201"
          }, {
            "name": "Makeup",
            images: "makeup.jpg",
            "type": "subCategorytype202"
          }, {
            "name": "Massages",
            images: "Massages.jpg",
            "type": "subCategorytype203"
          }, {
            "name": "Pedicure & minicure",
            images: "Pedicure&minicure.jpg",
            "type": "subCategorytype204"
          }, {
            "name": "Skin care",
            images: "Skincare.jpg",
            "type": "subCategorytype205"
          }, {
            "name": "wax & Thread",
            images: "wax&Thread.jpg",
            "type": "subCategorytype206"
          }],
          "category12": [{
            "name": "car& bike service",
            images: "car&bikeservice.jpg",
            "type": "subCategorytype301"
          }, {
            "name": "Electronics & Appliances",
            images: "Electronics&Appliances.jpg",
            "type": "subCategorytype302"
          }, {
            "name": "Home Clean",
            images: "homeclean.jpg",
            "type": "subCategorytype303"
          }, {
            "name": "Packers & Movers",
            images: "packers&MOvers.jpg",
            "type": "subCategorytype304"
          }, {
            "name": "Painting and interior",
            images: "paintingandinterior.jpg",
            "type": "subCategorytype305"
          }, {
            "name": "Pest Control",
            images: "pestControl.jpg",
            "type": "subCategorytype306"
          }, {
            "name": "Repair & Services",
            images: "Repair&Services.jpg",
            "type": "subCategorytype306"
          }],
          "category13": [{
            "name": "Title Search",
            images: "TitalSearch.jpg",
            "type": "subCategorytype402"
          }, {
            "name": "Banking/Finance Matters",
            images: "Banking&Finance Matters.jpg",
            "type": "subCategorytype403"
          }, {
            "name": "Litigation Matters",
            images: "Litigation Matters.jpg",
            "type": "subCategorytype404"
          }, {
            "name": "Partition of Property",
            images: "Partition of Property.jpg",
            "type": "subCategorytype405"
          }, {
            "name": "Income Tax",
            images: "Income Tax.jpg",
            "type": "subCategorytype406"
          }, {
            "name": "Landlord Tenant Dispute",
            images: "Landlord Tenant Dispute.jpg",
            "type": "subCategorytype407"
          }, {
            "name": "Real Estate Service",
            images: "Real Estate Service.jpg",
            "type": "subCategorytype408"
          }, {
            "name": "Succession Certificate",
            images: "Succession Certificate.jpg",
            "type": "subCategorytype409"
          }, {
            "name": "Developer Claims",
            images: "Developer Claims.jpg",
            "type": "subCategorytype410"
          }, {
            "name": "Adverse Possession",
            images: "Adverse Possession.jpg",
            "type": "subCategorytype411"
          }, {
            "name": "Corporate Service Advisory",
            images: "Corporate Service Advisory.jpg",
            "type": "subCategorytype412"
          }],
          "category14": [{
            "name": "Civil Contractors",
            images: "Civil Contractors.jpg",
            "type": "subCategorytype502"
          }, {
            "name": "Construction Service",
            images: "Construction Service.jpg",
            "type": "subCategorytype503"
          }, {
            "name": "Road Construction",
            images: "Road Construction.jpg",
            "type": "subCategorytype504"
          }, {
            "name": "Civil Engineering Service",
            images: "Civil Engineering Service.jpg",
            "type": "subCategorytype505"
          }, {
            "name": "Surveying",
            images: "Surveying.jpg",
            "type": "subCategorytype506"
          }, {
            "name": "Piece Work",
            images: "Piece Work.jpg",
            "type": "subCategorytype507"
          }, {
            "name": "Civil Consulation",
            images: "Civil Consulation.jpg",
            "type": "subCategorytype508"
          }, {
            "name": "Carpentor",
            images: "Carpentor.jpg",
            "type": "subCategorytype509"
          }, {
            "name": "Hardware",
            images: "Hardware.jpg",
            "type": "subCategorytype510"
          }],
          "category15": [{
            "name": "State Board Tution",
            images: "State Board Tution.jpg",
            "type": "subCategorytype601"
          }, {
            "name": "Central Board Tution",
            images: "Central Board Tution.jpg",
            "type": "subCategorytype602"
          }, {
            "name": "Internation Board",
            images: "Internation Board.jpg",
            "type": "subCategorytype603"
          }, {
            "name": "Spoken Language",
            images: "Spoken Language.jpg",
            "type": "subCategorytype604"
          }, {
            "name": "Computer Language",
            images: "Computer Language.jpg",
            "type": "subCategorytype605"
          }, {
            "name": "Project Instructor",
            images: "Project Instructor.jpg",
            "type": "subCategorytype606"
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