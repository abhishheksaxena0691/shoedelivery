(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shoping-shoping-module"],{

/***/ "./node_modules/ngx-owl-carousel/index.js":
/*!************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var owl_carousel_component_1 = __webpack_require__(/*! ./src/owl-carousel.component */ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js");
var owl_child_component_1 = __webpack_require__(/*! ./src/owl-child.component */ "./node_modules/ngx-owl-carousel/src/owl-child.component.js");
__export(__webpack_require__(/*! ./src/owl-carousel.component */ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js"));
var OwlModule = (function () {
    function OwlModule() {
    }
    OwlModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [
                owl_carousel_component_1.OwlCarousel, owl_child_component_1.OwlChild
            ],
            exports: [
                owl_carousel_component_1.OwlCarousel
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], OwlModule);
    return OwlModule;
}());
exports.OwlModule = OwlModule;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-owl-carousel/src/owl-carousel.component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/src/owl-carousel.component.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var owl_child_component_1 = __webpack_require__(/*! ./owl-child.component */ "./node_modules/ngx-owl-carousel/src/owl-child.component.js");
var OwlCarousel = (function () {
    function OwlCarousel(differs) {
        this.differs = differs;
        this.carouselClasses = '';
        this.options = {};
    }
    Object.defineProperty(OwlCarousel.prototype, "items", {
        set: function (coll) {
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
                var changedFn = function () {
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
    __decorate([
        core_1.ViewChild('owl'), 
        __metadata('design:type', owl_child_component_1.OwlChild)
    ], OwlCarousel.prototype, "$owlChild", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "carouselClasses", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlCarousel.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], OwlCarousel.prototype, "items", null);
    OwlCarousel = __decorate([
        core_1.Component({
            selector: 'owl-carousel',
            template: '<owl-carousel-child #owl [ngClass]="carouselClasses" [options]="options" >' +
                '<ng-content></ng-content></owl-carousel-child>',
        }), 
        __metadata('design:paramtypes', [core_1.IterableDiffers])
    ], OwlCarousel);
    return OwlCarousel;
}());
exports.OwlCarousel = OwlCarousel;
//# sourceMappingURL=owl-carousel.component.js.map

/***/ }),

/***/ "./node_modules/ngx-owl-carousel/src/owl-child.component.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-owl-carousel/src/owl-child.component.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var OwlChild = (function () {
    function OwlChild(el) {
        this.el = el;
        this.owlClass = true;
        this.options = {};
        if (typeof $ === 'undefined' && typeof jQuery !== 'undefined') {
            $ = jQuery;
        }
    }
    OwlChild.prototype.ngOnInit = function () {
        if ((typeof window !== 'undefined') && $ && typeof $.fn.owlCarousel === 'function') {
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
            this.$owl.trigger('destroy.owl.carousel')
                .removeClass('owl-loaded owl-hidden')
                .find('.owl-stage:empty, .owl-item:empty')
                .remove();
        }
    };
    __decorate([
        core_1.HostBinding('class.owl-carousel'), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "owlClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], OwlChild.prototype, "options", void 0);
    OwlChild = __decorate([
        core_1.Component({
            selector: 'owl-carousel-child',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], OwlChild);
    return OwlChild;
}());
exports.OwlChild = OwlChild;
//# sourceMappingURL=owl-child.component.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shoping/addproduct/addproduct.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shoping/addproduct/addproduct.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<div class=\"container\">\n  <div class=\"page-header\">\n    <div class=\"row\">\n          <div class=\"col-12 mt-2 mb-2\">\n            <span style=\"float: right;\"><button type=\"button\" class=\"btn btn-danger ml-2\" (click)=\"myproduct(true)\">Add Product</button></span>\n            <span style=\"float: right;\"><button type=\"button\" class=\"btn btn-danger ml-2\" (click)=\"myproduct(false)\">Listing</button></span>\n            <span style=\"float: right;\"><button type=\"button\" class=\"btn btn-danger\" (click)=\"myorders()\">My Orders</button></span>\n          </div>\n      </div>\n  </div>\n    <ng-template [ngIf]= \"!myOrderStatus\" [ngIfElse]=\"myOrderStatus1\">\n          <ng-template [ngIf]= \"addClassifiedTemplate\" [ngIfElse]=\"classifiedListing\">\n            <div class=\"container\" style=\"background-color: #fff;\">\n                  <form [formGroup]=\"classifiedForm\" class=\"form-horizontal\">\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                          <div class=\"form-group\">\n                            <label for=\"memberId\" class=\"control-label\">Item name</label>\n                            <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"memberId\"/>\n\n                          </div>\n                          <div class=\"form-group\">\n                            <input class=\"form-check-input com ml-2\" type=\"checkbox\" (change)=\"addToTopOffer($event.target.checked)\" [checked]=\"classifiedForm.value.category == 'category1'\"   name=\"committee\"/>\n                            <label class=\"form-check-label ml-4\">\n                               Make Top offer\n                            </label>\n                        </div>\n                          <div class=\"form-group\"  *ngIf=\"classifiedForm.value.category != 'category1'\">\n                              <label for=\"categoryId\" class=\"control-label\">Category</label>\n                              <select class=\"form-control\"   formControlName=\"category\" id=\"categoryId\" (change)=\"selectCategory($event.target.value)\">\n                                <option value=\"\" >Select</option>\n                                <!-- <option value=\"category1\"> Top Offer</option> -->\n                                <option value=\"category2\">Grocery</option>\n\n                                <option value=\"category4\">Fashion</option>\n                                <option value=\"category5\">Electronics</option>\n                                <option value=\"category6\">Home</option>\n\n                                <option value=\"category8\">Beauty & Toys </option>\n\n                                <option value=\"category10\">Medical  </option>\n                                <option value=\"category11\">Saloon</option>\n                                <option value=\"category12\">Repair </option>\n                                <option value=\"category13\">Legal Services</option>\n                                <option value=\"category14\">Civil Work</option>\n                                <option value=\"category15\">Education</option>\n                              </select>\n                          </div>\n\n                          <div class=\"form-group\" *ngIf=\"classifiedForm.value.category != 'category1'\">\n                            <label for=\"categoryId\" class=\"control-label\">Sub Category</label>\n                            <select class=\"form-control\"   formControlName=\"subcategory\" id=\"categoryId\">\n                              <option value=\"\" >Select</option>\n                              <option *ngFor=\"let obj of subCategoryClassifiedList[setClassified]\" [value]=\"obj.type\">{{obj.name}}</option>\n                            </select>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"categoryId\" class=\"control-label\">Brand</label>\n                            <input type=\"text\" formControlName=\"brand\" class=\"form-control\" id=\"brandId\"/>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"priceId\" class=\"control-label\">Price</label>\n                            <input type=\"number\" formControlName=\"price\" class=\"form-control\" id=\"priceId\"/>\n                          </div>\n\n                          <div class=\"form-group\">\n                            <label for=\"descriptionId\" class=\"control-label\">Description</label>\n                            <angular-editor [placeholder]=\"'Enter text here...'\" formControlName=\"description\"  [config]=\"editorConfig\"></angular-editor>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"quantityId\" class=\"control-label\">Quantity</label>\n                            <input type=\"text\" formControlName=\"quantity\" class=\"form-control\" id=\"quantityId\"/>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"quantityId\" class=\"control-label\">Key Features one</label>\n                            <input type=\"text\" formControlName=\"keyFeatureOne\" class=\"form-control\" id=\"quantityId\"/>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"quantityId\" class=\"control-label\">Key Features two</label>\n                            <input type=\"text\" formControlName=\"keyFeatureTwo\" class=\"form-control\" id=\"quantityId\"/>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"quantityId\" class=\"control-label\">Key Features three</label>\n                            <input type=\"text\" formControlName=\"keyFeatureThree\" class=\"form-control\" id=\"quantityId\"/>\n                          </div>\n\n\n                        </div>\n                  </div>\n                    <div class=\"row\">\n                          <div class=\"col-12 form-group\">\n                            <label for=\"file-upload\" class=\"custom-file-upload caption\"> Add Image </label>\n                            <input id=\"file-upload\" type=\"file\" (change)=\"uploadClassifiedattachment($event)\" accept=\"image/x-png, image/jpeg\"/>\n                          </div>\n                          <span style=\"color: #aa0000;\" *ngIf=\"imgURL == 0\">At least one image is required</span>\n                      </div>\n                      <div class=\"row\"  *ngIf=\"uploadedVideo == ''\">\n                        <div class=\"col-12 form-group\">\n                          <label for=\"file-upload1\" class=\"custom-file-upload caption\"> Add Video </label>\n                          <input id=\"file-upload1\" type=\"file\" (change)=\"uploadClassifiedVideo($event, uploadingFolder)\" accept=\"video/mp4\"/>\n                        </div>\n                      </div>\n                      <div class=\"row\" *ngIf=\"!editProductStatus\">\n                          <div class=\"col-12 form-group\">\n\n                            <ul class=\"nav mt-2\">\n                              <ng-container  *ngFor=\"let item of imgURL; index as i\">\n                                <li class=\"ml-2\">\n                                  <div style=\"position:relative;\">\n                                    <button type=\"submit\" class=\"close AClass\"  (click)=\"removeClassified(i)\">\n                                      <span>&times;</span>\n                                    </button>\n\n                                    <img [src]=\"item\" height=\"200\" width=\"200\"/>\n                                </div>\n                                </li>\n\n                              </ng-container>\n                            </ul>\n                          </div>\n                      </div>\n                      <div class=\"row\" *ngIf=\"editProductStatus\">\n                        <div class=\"col-12 form-group\">\n\n                          <ul class=\"nav mt-2\">\n                            <ng-container  *ngFor=\"let item of imgURL; index as i\">\n                              <li class=\"ml-2\" *ngIf=\"item.extension != 'mp4'\">\n                                <div style=\"position:relative;\">\n                                  <button type=\"submit\" class=\"close AClass\"  (click)=\"removeClassified(i)\">\n                                    <span>&times;</span>\n                                  </button>\n\n                                  <img *ngIf=\"item.name == undefined\" [src]=\"item\" height=\"200\" width=\"200\"/>\n                                  <img *ngIf=\"item.name != undefined\" [src]=\"api.delear+ 'uploads/comunication/'+ item.name\" height=\"200\" width=\"200\"/>\n                              </div>\n                              </li>\n\n                            </ng-container>\n                          </ul>\n\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-12 form-group\" *ngIf=\"uploadedVideo != ''\">\n                        <img src=\"../../../assets/images/videoThumbnail.jpg\" (click)=\"openVideo(playVideo, {'name': uploadedVideo})\" height=\"80px\" width=\"80px\"/>\n                        {{uploadedVideo}} <span class=\"close\"    (click)=\"removeVideo(i)\">&times;</span>\n                      </div>\n                        <div class=\"col-12 mt-2\">\n                          <div class=\"form-group\">\n\n                            <button type=\"button\"  *ngIf=\"!editProductStatus\" class=\"btn setColor mb-2\" [disabled]=\"(!classifiedForm.valid || imgURL.length == 0)\" (click)=\"addProduct(uploadingFolder)\">Submit</button>\n                            <button type=\"button\"  *ngIf=\"editProductStatus\" class=\"btn setColor mb-2\" [disabled]=\"(!classifiedForm.valid || imgURL.length == 0)\" (click)=\"addProduct(uploadingFolder)\">Submit</button>\n                          </div>\n                        </div>\n                    </div>\n\n                    </form>\n                </div>\n          </ng-template>\n          <ng-template #classifiedListing>\n            <ng-template [ngIf]= \"detailClassifiedStatus\" [ngIfElse]=\"productdetailsSection\">\n              <ul class=\"nav nav-tabs mt-2\" style=\"background-color: #fff;\">\n                <li class=\"nav-item active\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category1'}\"  (click)=\"setFirstCategory('category1','subCategorytype11');\">\n                  <a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category1'}\" data-toggle=\"tab\">\n                    <figure>\n                        <img src=\"../../../assets/images/BestOffericon.png\" alt=\"Trulli\" class=\"menuImage\">\n                        <figcaption>Top Offer</figcaption>\n                    </figure>\n                  </a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category2'}\" (click)=\"setFirstCategory('category2','subCategorytype21');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category2'}\" data-toggle=\"tab\">\n\n                  <figure>\n                    <img src=\"../../../assets/images/grocery.png\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Grocery</figcaption>\n                </figure>\n                  </a></li>\n                <!-- <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category3'}\"   (click)=\"setFirstCategory('category3','subCategorytype31');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category3'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/mobile.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Mobiles</figcaption>\n                </figure>\n                   </a></li> -->\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category4'}\"  (click)=\"setFirstCategory('category4','subCategorytype41');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category4'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/fashionImages.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Fashion</figcaption>\n                </figure>\n                   </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category5'}\"  (click)=\"setFirstCategory('category5','subCategorytype51');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category5'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/electronics.png\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Electronics</figcaption>\n                </figure>\n                  </a></li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category6'}\" (click)=\"setFirstCategory('category6','subCategorytype61');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category6'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/home.png\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Home</figcaption>\n                </figure>\n                  </a></li>\n                <!-- <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category7'}\"   (click)=\"setFirstCategory('category7','subCategorytype71');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category7'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/appliances.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Applicances</figcaption>\n                </figure>\n                  </a></li> -->\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category8'}\"  (click)=\"setFirstCategory('category8','subCategorytype81');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category8'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/Beautyandpersonalcare.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Beauty & Toys</figcaption>\n                </figure>\n                    </a></li>\n                <!-- <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category9'}\"  (click)=\"setFirstCategory('category9','subCategorytype91');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category9'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/fruitvegetable.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption>Vegetable & Fruits</figcaption>\n              </figure>\n                </a></li> -->\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category10'}\"  (click)=\"setFirstCategory('category10','subCategorytype101');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category10'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/MedicalCategory.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption class=\"figcaption1\">Medical</figcaption>\n                  </figure>\n                  </a>\n              </li>\n\n              <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category11'}\"  (click)=\"setFirstCategory('category11','subCategorytype201');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category11'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/Home_salon.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption class=\"figcaption1\">Salon</figcaption>\n                  </figure>\n                    </a>\n              </li>\n\n              <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category12'}\"  (click)=\"setFirstCategory('category12','subCategorytype301');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category12'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/Home-Repairs.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption class=\"figcaption1\">Repair</figcaption>\n                  </figure>\n                  </a>\n                </li>\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category13'}\"  (click)=\"setFirstCategory('category13','subCategorytype402');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category13'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/Legalservices.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption class=\"figcaption1\">Legal Services</figcaption>\n                  </figure>\n                  </a>\n                </li>\n\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category14'}\"  (click)=\"setFirstCategory('category14','subCategorytype502');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category14'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/CivilWork.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption class=\"figcaption1\">Civil Work\n                    </figcaption>\n                  </figure>\n                  </a>\n                </li>\n\n                <li class=\"nav-item\" [ngClass]=\"{'forumTabActiveli': setClassified == 'category15'}\"  (click)=\"setFirstCategory('category15','subCategorytype601');\"><a class=\"nav-link\" [ngClass]=\"{'forumTabActive': setClassified == 'category15'}\" data-toggle=\"tab\">\n                  <figure>\n                    <img src=\"../../../assets/images/E-Learning.jpg\" alt=\"Trulli\" class=\"menuImage\">\n                    <figcaption class=\"figcaption1\">Education</figcaption>\n                  </figure>\n                  </a>\n                </li>\n\n              </ul>\n              <div class=\"tab-content\" style=\"background-color: #fff;\">\n                <div id=\"home\" class=\"tab-pane fade in active show text-left\">\n                  Sub Menu\n                    <ul class=\"navsumenu nav-tabs submenu\">\n                      <li class=\"nav-item\" *ngFor=\"let item of subCategoryClassifiedList[setClassified]; index as i;\" [ngClass]=\"{'forumTabActiveli': subCategoryClassified == 'subCategorytype11'}\" >\n                            <a class=\"nav-link\" (click)=\"setSecondCategory(setClassified, item.type)\" [ngClass]=\"{'forumTabActive': subCategoryClassified == 'subCategorytype11'}\" data-toggle=\"tab\">\n                                <figure>\n                                  <img src=\"../../../assets/images/{{item.images}}\" alt=\"Trulli\" class=\"submenuImage\">\n                                  <figcaption class=\"figcaption1\">{{item.name}}</figcaption>\n                                </figure>\n                              </a>\n                      </li>\n                    </ul>\n                </div>\n            </div>\n              <ng-template [ngIf]=\"loadingTrue\" [ngIfElse]=\"realList\">\n                <div class=\"wrapper1\">\n                  <div class=\"row\">\n                    <div class=\"col-4\">\n                  <div class=\"card-loader1 card-loader--tabs\"></div>\n                </div>\n                <div class=\"col-4\">\n                  <div class=\"card-loader1 card-loader--tabs\"></div>\n                  </div>\n                  <div class=\"col-4\">\n                  <div class=\"card-loader1 card-loader--tabs\"></div>\n                  </div>\n                </div>\n                </div>\n              </ng-template>\n              <ng-template #realList>\n              <div class=\"row\">\n                <div class=\"col-md-4 col-sm-12\" *ngFor=\"let item of allProduct; index as i;\">\n                  <div class=\"container1\">\n                    <div class=\"card\">\n                      <div class=\"card-head\">\n                        <img [src]=\"api.delear+'uploads/comunication/medium/'+item.doc.fileName[0].name\" alt=\"logo\" class=\"card-logo\">\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-12\">\n                        <div class=\"product-desc\">\n                          <span class=\"product-title\">\n                                {{item.doc.name}}\n                                  <span class=\"badge\">\n                                    &#x20B9;<b>{{item.doc.price}}</b>\n\n                                  </span>\n                                  <div class=\"popover__wrapper\" *ngIf=\"item.listPrice.length > 1\">\n                                    <a> <h2 class=\"popover__title\">see other offers</h2> </a>\n                                    <div class=\"popover__content\">\n                                      <p class=\"popover__message\" *ngFor=\"let priceList of item.listPrice\">\n                                        &#x20B9; {{priceList.price}} by {{priceList.ownerName}}\n                                      </p>\n                                    </div>\n                                  </div>\n\n                          </span>\n                          <span class=\"product-caption\">\n                                Brand: <b> {{item.doc.brand}}</b>\n                                </span>\n                            <span class=\"product-rating\">\n                              <div class=\"star-rating\" (click)=\"showRatingPercentage(Rating,item.doc.comment)\">\n                                  <div class=\"back-stars\">\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n\n                                      <div class=\"front-stars\" [style.width.%]=\"((item.averageRating/5)*100)\">\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                          <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                      </div>\n                                  </div>\n                              </div>\n                            </span>\n                        </div>\n                        </div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-4\">\n                            <span class=\"setColor mt-2 ml-3 float-right btn\" (click)=\"deleteProduct(item.doc._id,i)\"> Delete </span>\n\n                            </div>\n                            <div class=\"col-4\">\n                              <span class=\"setColor mt-2 float-right btn\" (click)=\"detailProduct(item)\"> Detail </span>\n                            </div>\n                            <div class=\"col-4\">\n                              <span class=\"setColor mt-2 float-right btn\" (click)=\"editProduct(item)\"> Edit </span>\n                            </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"col-4\"></div>\n                <div class=\"col-4\"></div>\n\n              </div>\n              </ng-template>\n              </ng-template>\n\n              <ng-template #productdetailsSection>\n                <div class=\"container\">\n                  <div class=\"cardDetails\">\n                    <div class=\"container-fliud\">\n                      <div class=\"wrapper row\">\n                        <div class=\"preview col-md-12\">\n\n                          <div class=\"preview-pic tab-content\">\n                            <ng-container  *ngFor=\"let item of detailedImages; index as i\">\n                                <div [ngClass]=\"{'active': i == setCurrentIndexImage}\" class=\"tab-pane\" id=\"pic-1\" *ngIf=\"item.extension != 'mp4'\">\n                                  <img  [src]=\"api.delear+ 'uploads/comunication/'+ item.name\" />\n                                </div>\n                                <div [ngClass]=\"{'active': i == setCurrentIndexImage}\" class=\"tab-pane\" id=\"pic-1\" *ngIf=\"item.extension == 'mp4'\">\n                                      <video width=\"420\" height=\"240\" controls>\n                                        <source  [src]=\"api.delear+ 'uploads/comunication/'+ item.name\" type=\"video/mp4\"/>\n\n                                      </video>\n                                </div>\n                          </ng-container>\n                          </div>\n                          <ul class=\"preview-thumbnail nav nav-tabs\">\n                            <ng-container  *ngFor=\"let item of detailedImages; index as i\">\n                            <li [ngClass]=\"{'active': i == setCurrentIndexImage}\"  *ngIf=\"item.extension != 'mp4'\" (click)=\"setCurrentImage(i)\" ><a data-target=\"#pic-1\" data-toggle=\"tab\" >\n                              <img  [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.name\" /></a>\n                              </li>\n                              <li [ngClass]=\"{'active': i == setCurrentIndexImage}\"  *ngIf=\"item.extension == 'mp4'\" (click)=\"setCurrentImage(i)\" ><a data-target=\"#pic-1\" data-toggle=\"tab\" >\n                                <img  src=\"../../../assets/images/videoThumbnail.jpg\" height=\"177\"/></a>\n                              </li>\n                            </ng-container>\n                          </ul>\n\n                        </div>\n                        <div class=\"details col-md-12\">\n                          <h3 class=\"product-title\">{{detailPageData.doc.name}}</h3>\n                          <div class=\"rating\">\n                            <span class=\"product-rating\">\n                                  <div class=\"star-rating\" (click)=\"showRatingPercentage(Rating,detailPageData.doc.comment)\">\n                                    <div class=\"back-stars\">\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        <div class=\"front-stars\" [style.width.%]=\"ratingPercentage\">\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                            <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\n                                        </div>\n                                    </div>\n                                </div>\n                              </span>\n                          </div>\n                          <div class=\"rating mt-2\">  <span class=\"review-no\">{{detailPageData.doc?.comment.length}} reviews</span></div>\n                          <h4 class=\"price mt-2\">price: <span>&#x20B9; {{detailPageData.doc.price}}</span></h4>\n                          <div class=\"product-properties\">\n                            <span class=\"product-size\">\n                                    <span class=\"cardDiv product-caption mt-2\" *ngIf=\"detailPageData?.doc.keyFeatureOne != undefined\">\n                                      <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg> {{detailPageData?.doc.keyFeatureOne}}\n                                    </span>\n                                    <span class=\"cardDiv product-caption mt-2\" *ngIf=\"detailPageData?.doc.keyFeatureTwo != undefined\">\n                                      <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg> {{detailPageData?.doc.keyFeatureTwo}}\n                                    </span>\n                                    <span class=\"cardDiv product-caption mt-2\" *ngIf=\"detailPageData?.doc.keyFeatureThree != undefined\">\n                                      <svg   xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg> {{detailPageData?.doc.keyFeatureThree}}\n                                    </span>\n                                  </span>\n\n                          </div>\n                          <p class=\"product-description\" [innerHTML]=\"detailPageData.doc.description | safeHtml\"></p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                    <div class=\"row justify-content-center mx-0 mx-md-auto\">\n                        <div class=\"col-lg-12 col-md-11 px-1 px-sm-2\">\n                            <div class=\"card border-0 px-3\">\n\n                                  <ng-template [ngIf]=\"detailPageData.doc.comment != undefined && detailPageData.doc.comment.length > 0\">\n                                      <div class=\"review p-2\" *ngFor=\"let com of detailPageData.doc.comment; index as i\">\n                                          <div class=\"row d-flex\">\n                                              <div class=\"profile-pic\">{{com.associationId}}</div>\n                                              <div class=\"d-flex flex-column pl-3\">\n                                                  <h5>{{com.senderName}}</h5>\n                                                  <p class=\"grey-text\">{{com.createdOn | date: 'mediumDate'}}</p>\n                                              </div>\n                                          </div>\n                                          <div class=\"row pb-1 ml-5\">\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 0}\"></span>\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 1}\"></span>\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 2}\"></span>\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 3}\"></span>\n                                              <span class=\"fa fa-star detailStar\" [ngClass]=\"{'checked':  com.rating > 4}\"></span>\n                                          </div>\n                                          <div class=\"row pb-1 ml-5\">\n                                              <p>{{com.reveiw}}</p>\n                                          </div>\n\n                                      </div>\n                                    </ng-template>\n\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n              </ng-template>\n          </ng-template>\n    </ng-template>\n    <ng-template #myOrderStatus1>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"topnav\">\n              <a [ngClass]=\"currentTab == 1 ? 'active' : ''\" (click)=\"changeTab(1, 'open')\">Request</a>\n              <a [ngClass]=\"currentTab == 2 ? 'active' : ''\" (click)=\"changeTab(2, 'close')\">Order</a>\n              <a [ngClass]=\"currentTab == 3 ? 'active' : ''\" (click)=\"changeTab(3, 'acceptedByMerchant')\">Response</a>\n              <a [ngClass]=\"currentTab == 4 ? 'active' : ''\" (click)=\"changeTab(4, 'rejectByMerchant')\">Cancel</a>\n              <a [ngClass]=\"currentTab == 5 ? 'active' : ''\" (click)=\"changeTab(5, 'rejectByRetailer')\">Reject</a>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngIf]=\"orderLoading\" [ngIfElse]=\"allOrderTemplate\">\n          <div class=\"wrapper1\">\n            <div class=\"row\">\n              <div class=\"col-4\">\n            <div class=\"card-loader1 card-loader--tabs\"></div>\n          </div>\n          <div class=\"col-4\">\n            <div class=\"card-loader1 card-loader--tabs\"></div>\n            </div>\n            <div class=\"col-4\">\n            <div class=\"card-loader1 card-loader--tabs\"></div>\n            </div>\n          </div>\n          </div>\n        </ng-template>\n        <ng-template #allOrderTemplate>\n          <ng-container *ngTemplateOutlet=\"platformMobile ? mobileOrder : desktopOrder\"></ng-container>\n        </ng-template>\n      </div>\n    </ng-template>\n</div>\n\n\n\n<app-side-bar></app-side-bar>\n<ng-template #playVideo>\n  <div class=\"modal-header\">\n\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n          <video width=\"420\" height=\"240\" controls>\n            <source  [src]=\"api.delear+ 'uploads/comunication/'+ setImageName\" type=\"video/mp4\">\n\n          </video>\n\n\n      </div>\n\n    </div>\n\n  </div>\n</ng-template>\n\n<ng-template #uploadingFolder>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Uploading Image</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"slideshow-container\">\n          <div class=\"mySlides\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\"  [style.width]=\"imageUploadPercent + '%'\">\n                <span class=\"sr-only\">{{imageUploadPercent}} % Complete</span>\n              </div>\n            </div>\n            <div class=\"card-body sliderBody ml-1\"> {{imageUploadPercent}} % completed </div>\n            </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #desktopOrder>\n  <div class=\"row mt-3\"  *ngFor=\"let order of orderList; index as j\">\n    <div class=\"col-12 accordion\" id=\"accordionExample\">\n      <a data-toggle=\"collapse\" href=\"#collapseExample1{{j}}\" aria-expanded=\"true\"  (click)=\"showCurrent(j)\">\n          <div class=\"row headingBorder\" >\n            <div class=\"col-md-4 col-sm-6\" style=\"text-align: left;\" >\n              <span><b>Order Id: {{order.orderId}}</b></span>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">  <span class=\"trackIdCom\"> <b> Date : {{order.orderId |  date: 'mediumDate'}}</b></span> </div>\n            <div class=\"col-md-2 col-sm-12\"> <span class=\"trackIdCom\"> <b> Time: {{order.orderId |  date: 'shortTime'}}</b></span> </div>\n            <div class=\"col-md-2 col-sm-12\"> <span class=\"trackIdCom\"> </span> orders({{order.values.length}})</div>\n          </div>\n        </a>\n          <div class=\"row mt-3 collapse\" [ngClass]=\"(j == 0) ? 'show' : ''\" id=\"collapseExample1{{j}}\">\n            <div class=\"col-12 mt-2\" >\n              <div class=\"col-12\"  *ngFor=\"let item of order.values; index as i\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\"> Order From:  {{item.senderName}}</h5>\n                    <div class=\"row\">\n                      <div class=\"col-md-1\"><b>Satus</b></div>\n                      <div class=\"col-md-2\"><b>Image</b></div>\n                      <div class=\"col-md-3\"><b>Name</b></div>\n                      <div class=\"col-md-2\"><b>Qantity</b></div>\n                      <div class=\"col-md-1\"><b>Price</b></div>\n                      <div class=\"col-md-2\"><b>Total</b></div>\n                      <div class=\"col-md-1\"></div>\n                    </div>\n                    <div class=\"row mt-2\" *ngFor=\"let p of item.cart| keyvalue;\">\n                          <div class=\"col-1\">\n                              <svg *ngIf=\"item.list[p.key] != undefined\" _ngcontent-shv-c64=\"\"  xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg>\n                              <svg *ngIf=\"item.list[p.key] == undefined\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" fill=\"#E64A19\"\n                                width=\"20.926px\" height=\"20.926px\" viewBox=\"0 0 94.926 94.926\" style=\"enable-background:new 0 0 94.926 94.926;\"\n                                xml:space=\"preserve\" class=\"mr-1 pl-1\">\n                                <g>\n                                  <path d=\"M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0\n                                    c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096\n                                    c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476\n                                    c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62\n                                    s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z\"/>\n                                </g>\n                              </svg>\n                          </div>\n                          <div class=\"col-2 text-left\" > <img [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.productImage[p.key]\" width=\"100px\" height=\"60px\" /> </div>\n                          <div class=\"col-3 text-left\"> {{p.key}} </div>\n                          <div class=\"col-2 text-left\"> {{p.value}} </div>\n                          <div class=\"col-1 text-left\"> {{item.list[p.key]}}</div>\n                          <div class=\"col-2 text-left\" *ngIf=\"item.list[p.key] != undefined\">  &#x20B9;  {{item.list[p.key]  * p.value}}</div>\n                          <div class=\"col-2 text-left\" *ngIf=\"item.list[p.key] == undefined\">  N/A</div>\n\n                          <div class=\"col-1 text-left\" *ngIf=\"item.list[p.key] != undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, true,j)\">Remove</button></div>\n                          <div class=\"col-1 text-left\" *ngIf=\"item.list[p.key] == undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, false,j)\">Add</button></div>\n                          <div class=\"col-1 text-left\" *ngIf= \"item.status != 'open'\"></div>\n                    </div>\n                    <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                      <div class=\"col-1\"> </div>\n                      <div class=\"col-2\"> </div>\n                      <div class=\"col-4\"> <b>Discount</b></div>\n                      <div class=\"col-2\">  <input type=\"number\" class=\"discountFeild\" [(ngModel)]=\"item.discount != undefiend ? item.discount : discount\" (input)=\"updateValue(i,$event.target.value)\"/> </div>\n                      <div class=\"col-3\"><button class=\"btn btn-danger ml-2\" (click)=\"applyDiscount(item._id, i, j)\">Apply</button> </div>\n                      </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-1\"> </div>\n                      <div class=\"col-4\"> </div>\n                      <div class=\"col-4\"> <b>Total Amount</b></div>\n                      <div class=\"col-2\" *ngIf=\"item.discount != undefined && item.discount != 0\"> <del>&#x20B9; {{item.totalamount }}</del> <ins>&#x20B9; {{item.totalamount  - (item.discount != undefiend ? item.discount : discount)}}</ins></div>\n                      <div class=\"col-2\" *ngIf=\"item.discount == undefined || item.discount == 0\">  &#x20B9;{{item.totalamount}} </div>\n                      <div class=\"col-1\"></div>\n                      </div>\n                      <div class=\"row mt-3\">\n                        <div class=\"col-5\"></div>\n                        <div class=\"col-4 text-left\"><b>Shipping Address</b></div>\n                        <div class=\"col-3\">{{item.address}}</div>\n                        </div>\n\n                  <div class=\"row mt-3\">\n                      <div class=\"col-6\"></div>\n                      <div class=\"col-6\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                                <div class=\"col-6 text-center\">\n                                  <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'acceptedByMerchant', i,j)\" [disabled]=\"item.totalamount == 0\">Accept</button></p>\n                                </div>\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'acceptedByMerchant'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\"> Waiting for Retailer</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'invoicerequestByretailer'\">\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger ml-2\"  (click)=\"InvoiceSend(item, 'close', i,j)\">Accept</button></p>\n                                </div>\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger ml-2\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'close'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\">Closed</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByMerchant'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\">Rejected</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByRetailer'\">\n                                <div class=\"col-12\">\n                                <p><button class=\"btn btn-danger ml-2\">Reject by Retailer</button></p>\n                              </div>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                  </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n</div>\n</ng-template>\n\n<ng-template #mobileOrder>\n  <div class=\"row mt-4\"  *ngFor=\"let order of orderList; index as j\">\n    <div class=\"col-12 accordion\" id=\"accordionExample\">\n      <a data-toggle=\"collapse\" href=\"#collapseExample{{j}}\" aria-expanded=\"true\" (click)=\"showCurrent(j)\">\n          <div class=\"row headingBorder\" >\n            <div class=\"col-4\" style=\"text-align: left;\" > <span class=\"trackIdComM\"><b>Id: {{order.values[0].customOrderId}}</b></span></div>\n            <div class=\"col-7\" style=\"text-align: left;\">  <span class=\"trackIdComM\"><b>Order Placed:   {{order.orderId |  date: 'short'}}</b></span> </div>\n\n\n          </div>\n        </a>\n\n          <div class=\"row mt-3 collapse\" [ngClass]=\"(j == 0) ? 'show' : ''\" id=\"collapseExample{{j}}\">\n                <div class=\"col-12\"  *ngFor=\"let item of order.values; index as i\">\n                  <div class=\"card\">\n\n                    <div class=\"card-body\">\n                      <h5 class=\"card-title\">  {{item.senderName}}</h5>\n\n                      <p class=\"card-text\" (click)=\"redirectToMerchant(item.ownerNumber)\"> See profile </p>\n                      <div class=\"row\" *ngFor=\"let p of item.cart| keyvalue;\">\n\n                        <div class=\"col-3\">  <img [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.productImage[p.key]\" width=\"50\" height=\"60px\" /></div>\n                        <div class=\"col-9\">\n                          <ul class=\"itemList\">\n                                          <li style=\"text-transform: capitalize;\">  <svg *ngIf=\"item.list[p.key] != undefined\" xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path  fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg>\n                                            <svg *ngIf=\"item.list[p.key] == undefined\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" fill=\"#E64A19\"\n                                              width=\"18.926px\" height=\"18.926px\" viewBox=\"0 0 94.926 94.926\" style=\"enable-background:new 0 0 94.926 94.926;\"\n                                              xml:space=\"preserve\" class=\"mr-1 pl-1\">\n                                              <g>\n                                                <path d=\"M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0\n                                                  c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096\n                                                  c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476\n                                                  c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62\n                                                  s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z\"/>\n                                              </g>\n                                            </svg>\n                                           <b> {{p.key}}</b>\n                                          </li>\n                                          <li> <span class=\"ml-4\">Qty {{p.value}}</span></li>\n\n                                          <li>\n                                            <span class=\"ml-4\" *ngIf=\"item.list[p.key] != undefined\"> <b>&#x20B9;  {{item.list[p.key]  * p.value}}</b> </span>\n                                            <span class=\"ml-4\" *ngIf=\"item.list[p.key] == undefined\"> <b>N/A</b> </span>\n                                          </li>\n                                          <li *ngIf=\"item.list[p.key] != undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, true,j)\">Remove</button></li>\n                                          <li *ngIf=\"item.list[p.key] == undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, false,j)\">Add</button></li>\n\n                                        </ul>\n                        </div>\n\n                      </div>\n\n\n                      <div class=\"row mt-2\">\n                        <div class=\"col-4 footerM\" style=\"color: #78BE20;\" *ngIf=\"item.status == 'open'\"> <b>Discount</b></div>\n                            <div class=\"col-4\"> <input type=\"number\" class=\"discountFeild\" [(ngModel)]=\"item.discount != undefiend ? item.discount : discount\" (input)=\"updateValue(i,$event.target.value)\"/> </div>\n                            <div class=\"col-4\"><button class=\"btn btn-danger applyBtmM\" (click)=\"applyDiscount(item._id, i, j)\">Apply</button> </div>\n\n                        </div>\n                        <div class=\"row mt-2\">\n\n                              <div class=\"col-4\"> <b>Total</b></div>\n                              <div class=\"col-8\" *ngIf=\"item.discount != undefined && item.discount != 0\"> <del>&#x20B9; {{item.totalamount }}</del> <ins>&#x20B9; {{item.totalamount  - (item.discount != undefiend ? item.discount : discount)}}</ins></div>\n                              <div class=\"col-8\" *ngIf=\"item.discount == undefined || item.discount == 0\">  &#x20B9;{{item.totalamount}} </div>\n\n                        </div>\n\n                        <div class=\"row mt-3\">\n\n                          <div class=\"col-4 text-left footerM\"><b> Address</b></div>\n                          <div class=\"col-8 footerM\">{{item.address}}</div>\n                        </div>\n\n\n\n\n                            <div class=\"row mt-2\">\n                                <div class=\"col-12\">\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                                    <div class=\"col-6 text-center\">\n                                      <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'acceptedByMerchant', i,j)\" [disabled]=\"item.totalamount == 0\">Accept</button></p>\n                                    </div>\n                                    <div class=\"col-6\">\n                                      <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'acceptedByMerchant'\">\n                                    <div class=\"col-12\">\n                                      <p><button class=\"btn btn-danger ml-2\"> Waiting for Retailer</button></p>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'invoicerequestByretailer'\">\n                                    <div class=\"col-6\">\n                                      <p><button class=\"btn btn-danger ml-2\"  (click)=\"InvoiceSend(item, 'close', i,j)\">Accept</button></p>\n                                    </div>\n                                    <div class=\"col-6\">\n                                      <p><button class=\"btn btn-danger ml-2\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'close'\">\n                                    <div class=\"col-12\">\n                                      <a class=\"btn btn-danger\" style=\"font-size: 11px;\" data-toggle=\"collapse\" href=\"#collapseExample2{{i}}\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample2\">\n                                        Show Rating\n                                      </a>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByMerchant'\">\n                                    <div class=\"col-12\">\n                                      <p><button class=\"btn btn-danger ml-2\">Rejected</button></p>\n                                    </div>\n                                  </div>\n\n                                  <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByRetailer'\">\n                                    <div class=\"col-12\">\n                                    <p><button class=\"btn btn-danger ml-2\">Reject by Retailer</button></p>\n                                  </div>\n                                </div>\n                                </div>\n                            </div>\n\n\n                            <div class=\"row\">\n                              <div class=\"col-12\">\n                                      <div class=\"collapse\" id=\"collapseExample2{{i}}\">\n                                        <div class=\"card card-body\">\n                                                  <div class=\"row\">\n                                                          <div class=\"col-sm-12 col-md-4\">Average Delivery time taken</div>\n                                                          <div class=\"col-sm-12 col-md-8\">\n                                                            <div class=\"input-group\">\n                                                              <div id=\"radioBtn\" class=\"btn-group\">\n                                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.averageDelivery == 1) ? 'active' : 'notActive'\" (click)=\"setRating('averageDelivery', 1, i,j)\">Resonable</a>\n                                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.averageDelivery == 3) ? 'active' : 'notActive'\" (click)=\"setRating('averageDelivery', 3, i,j)\">Late</a>\n                                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.averageDelivery == 5) ? 'active' : 'notActive'\" (click)=\"setRating('averageDelivery', 5, i,j)\">Fast</a>\n                                                              </div>\n                                                            </div>\n                                                          </div>\n                                                  </div>\n                                                  <div class=\"row mt-2\">\n                                                      <div class=\"col-sm-12 col-md-4\">Product Qulaity</div>\n                                                      <div class=\"col-sm-12 col-md-8\">\n                                                        <div class=\"input-group\">\n                                                          <div id=\"radioBtn\" class=\"btn-group\">\n                                                            <a class=\"btn btn-danger btn-sm\"  [ngClass]=\"(item.productQuality == 2) ? 'active' : 'notActive'\" (click)=\"setRating('productQuality', 2, i,j)\">Poor</a>\n                                                            <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productQuality == 3) ? 'active' : 'notActive'\" (click)=\"setRating('productQuality', 3, i,j)\">Moderate</a>\n                                                            <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productQuality == 4) ? 'active' : 'notActive'\" (click)=\"setRating('productQuality', 4, i,j)\">Good</a>\n                                                            <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productQuality == 5) ? 'active' : 'notActive'\" (click)=\"setRating('productQuality', 5, i,j)\">Very Good</a>\n                                                          </div>\n                                                        </div>\n                                                      </div>\n                                                  </div>\n\n                                                  <div class=\"row mt-2\">\n                                                    <div class=\"col-sm-12 col-md-4\">Product Price</div>\n                                                    <div class=\"col-sm-12 col-md-8\">\n                                                      <div class=\"input-group\">\n                                                        <div id=\"radioBtn\" class=\"btn-group\">\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productPrice == 2) ? 'active' : 'notActive'\" (click)=\"setRating('productPrice', 2, i,j)\">Low</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productPrice == 3) ? 'active' : 'notActive'\" (click)=\"setRating('productPrice', 3, i,j)\">Moderate</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productPrice == 4) ? 'active' : 'notActive'\" (click)=\"setRating('productPrice', 4, i,j)\">Reasonable</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.productPrice == 5) ? 'active' : 'notActive'\" (click)=\"setRating('productPrice', 5, i,j)\">Expensive</a>\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                  </div>\n\n                                                <div class=\"row mt-2\">\n                                                  <div class=\"col-sm-12 col-md-4\">Staff behaviour</div>\n                                                  <div class=\"col-sm-12 col-md-8\">\n                                                    <div class=\"input-group\">\n                                                      <div id=\"radioBtn\" class=\"btn-group\">\n                                                        <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffBehaviour == 2) ? 'active' : 'notActive'\" (click)=\"setRating('staffBehaviour', 2, i, j)\">Poor</a>\n                                                        <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffBehaviour == 3) ? 'active' : 'notActive'\" (click)=\"setRating('staffBehaviour', 3, i, j)\">Moderate</a>\n                                                        <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffBehaviour == 4) ? 'active' : 'notActive'\" (click)=\"setRating('staffBehaviour', 4, i, j)\">Good</a>\n                                                        <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffBehaviour == 5) ? 'active' : 'notActive'\" (click)=\"setRating('staffBehaviour', 5, i, j)\">Very Good</a>\n\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                              </div>\n                                              <div class=\"row mt-2\">\n                                                    <div class=\"col-sm-12 col-md-4\">Staff helping</div>\n                                                    <div class=\"col-sm-12 col-md-8\">\n                                                      <div class=\"input-group\">\n                                                        <div id=\"radioBtn\" class=\"btn-group\">\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffHelping == 2) ? 'active' : 'notActive'\" (click)=\"setRating('staffHelping', 2, i, j)\">Poor</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffHelping == 3) ? 'active' : 'notActive'\" (click)=\"setRating('staffHelping', 3, i, j)\">Moderate</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffHelping == 4) ? 'active' : 'notActive'\" (click)=\"setRating('staffHelping', 4, i, j)\">Good</a>\n                                                          <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.staffHelping == 5) ? 'active' : 'notActive'\" (click)=\"setRating('staffHelping', 5, i, j)\">Very Good</a>\n                                                        </div>\n                                                      </div>\n                                                    </div>\n                                                </div>\n\n                                            <div class=\"row mt-2\">\n                                              <div class=\"col-sm-12 col-md-4\">Payment ease</div>\n                                              <div class=\"col-sm-12 col-md-8\">\n                                                <div class=\"input-group\">\n                                                  <div id=\"radioBtn\" class=\"btn-group\">\n                                                    <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.paymentEase == 2) ? 'active' : 'notActive'\" (click)=\"setRating('paymentEase', 2, i, j)\">Poor</a>\n                                                    <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.paymentEase == 3) ? 'active' : 'notActive'\" (click)=\"setRating('paymentEase', 3, i, j)\">Moderate</a>\n                                                    <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.paymentEase == 4) ? 'active' : 'notActive'\" (click)=\"setRating('paymentEase', 4, i, j)\">Good</a>\n                                                    <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.paymentEase == 5) ? 'active' : 'notActive'\" (click)=\"setRating('paymentEase', 5, i, j)\">Very Good</a>\n\n                                                  </div>\n                                                </div>\n                                              </div>\n                                          </div>\n\n                                          <div class=\"row mt-2\">\n                                            <div class=\"col-sm-12 col-md-4\">Refund Rating</div>\n                                            <div class=\"col-sm-12 col-md-8\">\n                                              <div class=\"input-group\">\n                                                <div id=\"radioBtn\" class=\"btn-group\">\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 1) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 1, i, j)\">1</a>\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 2) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 2, i, j)\">2</a>\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 3) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 3, i, j)\">3</a>\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 4) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 4, i, j)\">4</a>\n                                                  <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.refundRating == 5) ? 'active' : 'notActive'\" (click)=\"setRating('refundRating', 5, i, j)\">5</a>\n\n                                                </div>\n                                              </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"row mt-2\">\n                                          <div class=\"col-sm-12 col-md-4\">Return Rating</div>\n                                          <div class=\"col-sm-12 col-md-8\">\n                                            <div class=\"input-group\">\n                                              <div id=\"radioBtn\" class=\"btn-group\">\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 1) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 1, i, j)\">1</a>\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 2) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 2, i, j)\">2</a>\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 3) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 3, i, j)\">3</a>\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 4) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 4, i, j)\">4</a>\n                                                <a class=\"btn btn-danger btn-sm\" [ngClass]=\"(item.returnRating == 5) ? 'active' : 'notActive'\" (click)=\"setRating('returnRating', 5, i, j)\">5</a>\n\n                                              </div>\n                                            </div>\n                                          </div>\n                                      </div>\n\n                                      <div class=\"row mt-2\" *ngIf=\"item.ratingDone != true\" >\n                                        <div class=\"col-sm-12 col-md-6\"></div>\n                                        <div class=\"col-sm-12 col-md-6\"><button class=\"btn btn-danger btn-sm\" (click)= \"submitRating(item,i, j)\">Submit</button></div>\n                                          </div>\n\n                                        </div>\n                                      </div>\n                              </div>\n                            </div>\n                    </div>\n\n                  </div>\n                  </div>\n\n          </div>\n\n    </div>\n  </div>\n  <!-- <div class=\"row mt-3\"  *ngFor=\"let order of orderList; index as j\">\n    <div class=\"col-12 accordion\" id=\"accordionExample\">\n      <a data-toggle=\"collapse\" href=\"#collapseExample1{{j}}\" aria-expanded=\"true\" (click)=\"showCurrent(j)\">\n          <div class=\"row headingBorder\" >\n            <div class=\"col-md-4 col-sm-6\" style=\"text-align: left;\" >\n              <span><b>Order Id: {{order.orderId}}</b></span>\n            </div>\n            <div class=\"col-md-4 col-sm-12\">  <span class=\"trackIdCom\"> <b> Date : {{order.orderId |  date: 'mediumDate'}}</b></span> </div>\n            <div class=\"col-md-2 col-sm-12\"> <span class=\"trackIdCom\"> <b> Time: {{order.orderId |  date: 'shortTime'}}</b></span> </div>\n            <div class=\"col-md-2 col-sm-12\"> <span class=\"trackIdCom\"> </span> orders({{order.values.length}})</div>\n          </div>\n        </a>\n          <div class=\"row mt-3\" [ngClass]=\"(j == 0) ? 'show' : ''\" id=\"collapseExample1{{j}}\">\n            <div class=\"col-12 mt-2\" >\n              <div class=\"col-12\"  *ngFor=\"let item of order.values; index as i\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <h5 class=\"card-title\"> Order From:  {{item.senderName}}</h5>\n                    <div class=\"row\">\n                      <div class=\"col-md-1\"><b>Satus</b></div>\n                      <div class=\"col-md-2\"><b>Image</b></div>\n                      <div class=\"col-md-3\"><b>Name</b></div>\n                      <div class=\"col-md-2\"><b>Qantity</b></div>\n                      <div class=\"col-md-1\"><b>Price</b></div>\n                      <div class=\"col-md-2\"><b>Total</b></div>\n                      <div class=\"col-md-1\"></div>\n                    </div>\n                    <div class=\"row mt-2\" *ngFor=\"let p of item.cart| keyvalue;\">\n                          <div class=\"col-1\">\n                              <svg *ngIf=\"item.list[p.key] != undefined\" _ngcontent-shv-c64=\"\"  xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 16 16\" fill=\"#00a94f\" class=\"mr-1 pl-1\"><path _ngcontent-shv-c64=\"\" fill=\"#00a94f\" d=\"M11,3a8,8,0,1,0,8,8,7,7,0,0,0-.423-2.519l-1,.981A6.228,6.228,0,0,1,17.769,11,6.769,6.769,0,1,1,11,4.231a6.591,6.591,0,0,1,4.673,1.9l.865-.865A7.806,7.806,0,0,0,11,3Zm6.942,2.635L11,12.577,8.365,9.942l-.885.885L10.558,13.9l.442.423.442-.423,7.385-7.385Z\" transform=\"translate(-3 -3)\"></path></svg>\n                              <svg *ngIf=\"item.list[p.key] == undefined\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" fill=\"#E64A19\"\n                                width=\"20.926px\" height=\"20.926px\" viewBox=\"0 0 94.926 94.926\" style=\"enable-background:new 0 0 94.926 94.926;\"\n                                xml:space=\"preserve\" class=\"mr-1 pl-1\">\n                                <g>\n                                  <path d=\"M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0\n                                    c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096\n                                    c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476\n                                    c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62\n                                    s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z\"/>\n                                </g>\n                              </svg>\n                          </div>\n                          <div class=\"col-2 text-left\" > <img [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.productImage[p.key]\" width=\"100px\" height=\"60px\" /> </div>\n                          <div class=\"col-3 text-left\"> {{p.key}} </div>\n                          <div class=\"col-2 text-left\"> {{p.value}} </div>\n                          <div class=\"col-1 text-left\"> {{item.list[p.key]}}</div>\n                          <div class=\"col-2 text-left\" *ngIf=\"item.list[p.key] != undefined\">  &#x20B9;  {{item.list[p.key]  * p.value}}</div>\n                          <div class=\"col-2 text-left\" *ngIf=\"item.list[p.key] == undefined\">  N/A</div>\n\n                          <div class=\"col-1 text-left\" *ngIf=\"item.list[p.key] != undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, true,j)\">Remove</button></div>\n                          <div class=\"col-1 text-left\" *ngIf=\"item.list[p.key] == undefined && item.status == 'open'\"><button class=\"btn\" (click)=\"removeProduct(i,p.key, false,j)\">Add</button></div>\n                          <div class=\"col-1 text-left\" *ngIf= \"item.status != 'open'\"></div>\n                    </div>\n                    <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                      <div class=\"col-1\"> </div>\n                      <div class=\"col-2\"> </div>\n                      <div class=\"col-4\"> <b>Discount</b></div>\n                      <div class=\"col-2\">  <input type=\"number\" class=\"discountFeild\" [(ngModel)]=\"item.discount != undefiend ? item.discount : discount\" (input)=\"updateValue(i,$event.target.value)\"/> </div>\n                      <div class=\"col-3\"><button class=\"btn btn-danger ml-2\" (click)=\"applyDiscount(item._id, i, j)\">Apply</button> </div>\n                      </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-1\"> </div>\n                      <div class=\"col-4\"> </div>\n                      <div class=\"col-4\"> <b>Total Amount</b></div>\n                      <div class=\"col-2\" *ngIf=\"item.discount != undefined && item.discount != 0\"> <del>&#x20B9; {{item.totalamount }}</del> <ins>&#x20B9; {{item.totalamount  - (item.discount != undefiend ? item.discount : discount)}}</ins></div>\n                      <div class=\"col-2\" *ngIf=\"item.discount == undefined || item.discount == 0\">  &#x20B9;{{item.totalamount}} </div>\n                      <div class=\"col-1\"></div>\n                      </div>\n                      <div class=\"row mt-3\">\n                        <div class=\"col-5\"></div>\n                        <div class=\"col-4 text-left\"><b>Shipping Address</b></div>\n                        <div class=\"col-3\">{{item.address}}</div>\n                        </div>\n\n                  <div class=\"row mt-3\">\n                      <div class=\"col-6\"></div>\n                      <div class=\"col-6\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'open'\">\n                                <div class=\"col-6 text-center\">\n                                  <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'acceptedByMerchant', i,j)\" [disabled]=\"item.totalamount == 0\">Accept</button></p>\n                                </div>\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'acceptedByMerchant'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\"> Waiting for Retailer</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'invoicerequestByretailer'\">\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger ml-2\"  (click)=\"InvoiceSend(item, 'close', i,j)\">Send Invoice</button></p>\n                                </div>\n                                <div class=\"col-6\">\n                                  <p><button class=\"btn btn-danger ml-2\" (click)=\"updateStatus(item._id, 'rejectByMerchant', i,j)\">Reject</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'close'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\">Closed</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByMerchant'\">\n                                <div class=\"col-12\">\n                                  <p><button class=\"btn btn-danger ml-2\">Rejected</button></p>\n                                </div>\n                              </div>\n\n                              <div class=\"row mt-2\" *ngIf=\"item.status == 'rejectByRetailer'\">\n                                <div class=\"col-12\">\n                                <p><button class=\"btn btn-danger ml-2\">Reject by Retailer</button></p>\n                              </div>\n                            </div>\n                            </div>\n                        </div>\n                    </div>\n                  </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n    </div>\n</div> -->\n</ng-template>\n");

/***/ }),

/***/ "./src/app/shoping/addproduct/addproduct.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shoping/addproduct/addproduct.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n@import url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\");\n@charset \"UTF-8\";\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n}\ninput[type=file] {\n  display: none;\n}\n.setColor {\n  background-color: #AA0000 !important;\n  color: #ffffff;\n}\n.container1 {\n  width: 350px;\n  height: auto;\n  margin: 30px auto;\n}\n.card {\n  border-radius: 25px;\n  box-shadow: -11px 11px 1px rgba(255, 253, 253, 0.3);\n}\n.card-head {\n  height: 300px;\n  border-radius: 25px 25px 0 0;\n}\n.card-head img {\n  width: 100%;\n  height: 350px;\n}\n.product-img {\n  left: 0;\n}\n.product-detail {\n  padding: 0 20px;\n  font-size: 11px;\n  color: #fff;\n}\n.product-detail h2 {\n  font-size: 18px;\n  font-weight: 500;\n  letter-spacing: 2px;\n  padding-bottom: 10px;\n  text-transform: capitalize;\n}\n.back-text {\n  display: inline-block;\n  font-size: 125px;\n  font-weight: 900;\n  margin-left: -7px;\n  margin-top: -12px;\n  opacity: 0.1;\n}\n.card-body {\n  min-height: 220px;\n  height: auto;\n  background: #fff;\n  border-radius: 0 0 25px 25px;\n}\n.product-title {\n  padding: 20px 20px 5px 20px;\n  display: block;\n  font-size: 17px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: capitalize;\n}\n.product-title b {\n  font-weight: 900;\n  letter-spacing: 0px;\n}\n.badge {\n  position: relative;\n  font-size: 14px;\n  font-weight: 300;\n  color: #fff;\n  background: #dc3545;\n  padding: 15px 10px;\n  border-radius: 50%;\n  top: -2px;\n  margin-left: 5px;\n  float: right;\n}\n.product-caption {\n  display: block;\n  padding: 0 20px;\n  font-size: 15px;\n  font-weight: 400;\n  text-transform: capitalize;\n}\n.product-rating {\n  float: left;\n  padding-left: 1rem;\n}\n.product-rating i.grey {\n  color: #cece15;\n}\n.product-size h4 {\n  font-size: 15px;\n  padding: 0 21px;\n  margin-top: 15px;\n  padding-bottom: 10px;\n  text-transform: uppercase;\n}\n.ul-size {\n  margin-left: 15px;\n}\n.ul-size li {\n  list-style: none;\n  float: left;\n  margin-right: 20px;\n}\n.ul-size li a {\n  display: block;\n  text-decoration: none;\n  font-size: 11px;\n  width: 22px;\n  height: 22px;\n  border-radius: 100%;\n  text-align: center;\n  line-height: 23px;\n  color: #000;\n}\n.ul-size li a.active {\n  background: #f35e3d;\n  color: #fff;\n}\n.product-size:before,\n.product-size:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.product-color h4 {\n  font-size: 11px;\n  padding: 0 21px;\n  margin-top: 20px;\n  padding-bottom: 20px;\n  text-transform: uppercase;\n}\n.ul-color {\n  margin-left: 27px;\n}\n.ul-color li {\n  list-style: none;\n  float: left;\n  margin-right: 20px;\n}\n.ul-color li a {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n}\n.ul-color li a.orange {\n  background: #f35e3d;\n}\n.ul-color li a.green {\n  background: #dc3545;\n}\n.ul-color li a.yellow {\n  background: #ffd414;\n}\n.ul-color li a.active:after {\n  position: absolute;\n  content: \"\";\n  display: inline-block;\n  border: 1px solid #f35e3d;\n  width: 24px;\n  height: 24px;\n  border-radius: 100%;\n  margin-left: -5px;\n  margin-top: -5px;\n}\n.product-price {\n  background: #dc3545;\n  padding: 7px 20px;\n  text-align: center;\n  display: inline-block;\n  font-size: 15px;\n  font-weight: 200;\n  color: #fff;\n  border-radius: 7px;\n  margin-top: -13px;\n  margin-left: -5px;\n  box-shadow: -10px 20px 15px -10px rgba(17, 233, 91, 0.3);\n}\n.product-price b {\n  margin-left: 5px;\n}\n.yt {\n  position: fixed;\n  padding: 7px 10px 3px 10px;\n  top: 5px;\n  right: 5px;\n  background: rgba(0, 0, 0, 0.1);\n}\n.yt:hover {\n  background: rgba(0, 0, 0, 0.2);\n}\n.Plusbutton {\n  background-color: #dc3545;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 12px;\n  margin: 4px 2px;\n  width: 20px;\n  height: 20px;\n}\n.button5 {\n  border-radius: 50%;\n}\n.input-number {\n  width: 50% !important;\n  flex: 1 1 0%;\n}\n.checked {\n  color: orange;\n}\n.fa-star {\n  cursor: pointer;\n  font-size: 21px;\n}\n/***************** Detail Page *************************/\n.preview {\n  display: flex;\n  flex-direction: column;\n}\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px;\n  }\n}\n.preview-pic {\n  flex-grow: 1;\n}\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px;\n}\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%;\n}\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block;\n  height: 177px !important;\n}\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0;\n}\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0;\n}\n.tab-content {\n  overflow: hidden;\n}\n.tab-content img {\n  width: 100%;\n  max-width: 700px;\n  max-height: 300px;\n  -webkit-animation-name: opacity;\n  animation-name: opacity;\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n}\n.cardDetails {\n  margin-top: 50px;\n  background: #eee;\n  padding: 3em;\n  line-height: 1.5em;\n}\n@media screen and (min-width: 997px) {\n  .wrapper {\n    display: flex;\n  }\n}\n.details {\n  display: flex;\n  flex-direction: column;\n}\n.colors {\n  flex-grow: 1;\n}\n.product-title, .price, .sizes, .colors {\n  text-transform: capitalize;\n  font-weight: bold;\n}\n.checked, .price span {\n  color: #ff9f1a;\n}\n.product-title {\n  margin-top: 0;\n}\n.size {\n  margin-right: 10px;\n}\n.size:first-of-type {\n  margin-left: 40px;\n}\n.color {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 10px;\n  height: 2em;\n  width: 2em;\n  border-radius: 2px;\n}\n.color:first-of-type {\n  margin-left: 20px;\n}\n.add-to-cart, .like {\n  background: #ff9f1a;\n  padding: 0.5em 1em;\n  border: none;\n  text-transform: UPPERCASE;\n  font-weight: bold;\n  color: #fff;\n  transition: background 0.3s ease;\n}\n.add-to-cart:hover, .like:hover {\n  background: #b36800;\n  color: #fff;\n}\n.not-available {\n  text-align: center;\n  line-height: 2em;\n}\n.not-available:before {\n  font-family: fontawesome;\n  content: \"\";\n  color: #fff;\n}\n.orange {\n  background: #ff9f1a;\n}\n.green {\n  background: #85ad00;\n}\n.blue {\n  background: #0076ad;\n}\n.tooltip-inner {\n  padding: 1.3em;\n}\n@-webkit-keyframes opacity {\n  0% {\n    opacity: 0;\n    transform: scale(3);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes opacity {\n  0% {\n    opacity: 0;\n    transform: scale(3);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=style.css.map */\n.star {\n  font-size: 12px;\n}\n.detailStar {\n  font-size: 15px;\n}\n.btn {\n  cursor: pointer;\n}\n.sm-text {\n  font-size: 10px;\n  letter-spacing: 1px;\n}\n.sm-text-1 {\n  font-size: 14px;\n}\n.green-tab {\n  background-color: #00C853;\n  color: #fff;\n  border-radius: 5px;\n  padding: 5px 3px 5px 3px;\n}\n.btn-red {\n  background-color: #E64A19;\n  color: #fff;\n  border-radius: 20px;\n  border: none;\n  outline: none;\n}\n.btn-red:hover {\n  background-color: #BF360C;\n}\n.btn-red:focus {\n  box-shadow: none !important;\n  outline-width: 0;\n}\n.round-icon {\n  font-size: 40px;\n  padding-bottom: 10px;\n}\n.fa-circle {\n  font-size: 10px;\n  color: #EEEEEF;\n}\n.green-dot {\n  color: #4CAF50;\n}\n.red-dot {\n  color: #E64A19;\n}\n.yellow-dot {\n  color: #FFD54F;\n}\n.grey-text {\n  color: #BDBDBD;\n}\n.green-text {\n  color: #4CAF50;\n}\n.block {\n  border-right: 1px solid #F5EEEE;\n  border-top: 1px solid #F5EEEE;\n  border-bottom: 1px solid #F5EEEE;\n}\n.profile-pic {\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  padding: 5px;\n  border: 1px solid #000;\n}\n.rating-dot {\n  letter-spacing: 5px;\n}\n.via {\n  border-radius: 20px;\n  height: 28px;\n}\n/* Base styling*/\n.popover__title {\n  font-size: 10px;\n  text-decoration: none;\n  color: #e44444;\n  text-align: center;\n}\n.popover__wrapper {\n  position: relative;\n  display: inline-block;\n}\n.popover__content {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n  width: 200px;\n  left: -100px;\n  transform: translate(0, 10px);\n  background-color: #fff;\n  padding: 0.5rem;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  width: auto;\n}\n.popover__wrapper:hover .popover__content {\n  z-index: 10;\n  opacity: 1;\n  visibility: visible;\n  transform: translate(0, -20px);\n  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);\n}\n.popover__message {\n  text-align: center;\n  font-size: 10px;\n}\n.cardDiv {\n  height: 20px;\n  word-break: break-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cardmerchant {\n  box-shadow: 0 4px 8px 0;\n  max-width: 350px;\n  margin: auto;\n  text-align: center;\n  font-family: arial;\n  border-radius: 25px;\n  background-color: #fff;\n}\n.cardmerchant h1 {\n  padding-left: 3rem;\n}\n.pricemercahnt {\n  color: grey;\n  font-size: 22px;\n}\n.merchantName {\n  font-size: 22px;\n  text-transform: capitalize;\n}\n.cardmerchant button {\n  border: none;\n  outline: 0;\n  padding: 12px;\n  color: white;\n  background-color: #AA0000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n  font-size: 16px;\n}\n.cardmerchant button:hover {\n  opacity: 0.7;\n}\n.rowSegregate {\n  border-bottom: 2px solid #ccc;\n}\n.star-rating {\n  display: flex;\n  align-items: center;\n  font-size: 3em;\n  justify-content: center;\n  margin-top: 10px;\n}\n.back-stars {\n  display: flex;\n  color: #ccc;\n  position: relative;\n  text-shadow: 4px 4px 10px #843a3a;\n}\n.front-stars {\n  display: flex;\n  color: #AA0000;\n  overflow: hidden;\n  position: absolute;\n  text-shadow: 1px 1px 1px #AA0000;\n  top: 0;\n  transition: all 0.5s;\n}\n.progress-bar {\n  background-color: #AA0000 !important;\n}\n.topnav {\n  overflow: hidden;\n  float: left;\n}\n.topnav a {\n  float: left;\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  border-bottom: 1px solid #ccc;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 600;\n  color: #AA0000;\n  opacity: 1;\n}\n.topnav a:hover {\n  border-bottom: 3px solid #AA0000;\n  cursor: pointer;\n}\n.topnav a.active {\n  border-bottom: 3px solid #AA0000;\n}\n.topnav a {\n  padding: 0.05rem 2.9rem;\n}\n.discountFeild {\n  width: 30%;\n}\n.headingBorder {\n  border: 2px solid #AA0000;\n  background-color: #AA0000;\n  color: #fff;\n}\n.headingBorder a {\n  color: #fff;\n}\n.collapse {\n  text-decoration: none;\n}\na:link {\n  text-decoration: none;\n}\n.forumTabActive {\n  font-size: 14px;\n  border-bottom: none !important;\n  color: #AA0000 !important;\n  cursor: pointer;\n}\n.forumTabActiveli {\n  border-bottom: 1px solid #AA0000 !important;\n  cursor: pointer;\n}\n.menuImage {\n  width: 44px !important;\n  height: 44px !important;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  text-align: center;\n  border: 1px solid #AA0000 !important;\n}\n.submenuImage {\n  width: 44px !important;\n  height: 44px !important;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  text-align: center;\n  border: 1px solid #AA0000 !important;\n}\nfigure {\n  text-align: center;\n  color: #000;\n  font-size: 11px;\n  min-width: 57px;\n}\n.card-loader1 {\n  background-color: #fff;\n  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.08), 0 -1px 3px 0 rgba(0, 0, 0, 0.06);\n  padding: 8px;\n  position: relative;\n  border-radius: 2px;\n  margin-bottom: 0;\n  height: 200px;\n  overflow: hidden;\n  width: 350px;\n}\n.card-loader1:only-child {\n  margin-top: 0;\n}\n.card-loader1:before {\n  content: \"\";\n  height: 110px;\n  display: block;\n  background-color: #ededed;\n  box-shadow: -48px 78px 0 -48px #ededed, -51px 102px 0 -51px #ededed;\n}\n.card-loader1:after {\n  content: \"\";\n  background-color: #333;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: loader-animate;\n          animation-name: loader-animate;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0) 81%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#00ffffff\", endColorstr=\"#00ffffff\",GradientType=1 );\n}\n.AClass {\n  right: -16px;\n  top: -11px;\n  position: absolute;\n  color: #AA0000;\n}\n.submenuImage {\n  width: 45px !important;\n  height: 45px !important;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  text-align: center;\n  border: 1px solid #AA0000 !important;\n}\n@media only screen and (max-width: 500px) {\n  .topnav a {\n    padding: 0.05rem 0.5rem;\n    font-size: 11px;\n  }\n\n  .headingBorder {\n    font-size: 10px;\n  }\n\n  figure {\n    text-align: center;\n    color: #000;\n    font-size: 9px;\n    min-width: 57px;\n  }\n\n  .container1 {\n    width: 325px;\n    height: auto;\n    margin: 10px auto;\n  }\n\n  .card-head {\n    height: 250px;\n  }\n  .card-head img {\n    width: 100%;\n    height: 350px;\n  }\n\n  .navsumenu {\n    display: flex;\n    flex-wrap: unset !important;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n  }\n\n  ul.submenu {\n    width: 400px;\n    overflow-x: scroll;\n    white-space: nowrap;\n  }\n  ul.submenu li {\n    display: inline-block;\n    zoom: 1;\n  }\n\n  .btn-danger {\n    max-width: 100px;\n    font-size: 10px;\n  }\n}\n@media only screen and (max-width: 320px) {\n  .topnav a {\n    padding: 0.02em 0.2rem;\n    font-size: 7px;\n  }\n\n  .trackIdComM {\n    font-size: 9px !important;\n  }\n\n  .container1 {\n    width: 295px;\n    height: auto;\n    margin: 10px auto;\n  }\n}\n.backButton {\n  border-radius: 50%;\n  cursor: pointer;\n}\n.trackIdComM {\n  font-size: 10px;\n}\n.figcaption1 {\n  max-width: 73px;\n}\n.navsumenu {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\nul.itemList li {\n  list-style: none;\n  margin-left: 10px;\n  font-size: 12px;\n}\n.footerM {\n  font-size: 12px;\n}\n.input-numberM {\n  width: 14% !important;\n  flex: 1 1 0%;\n}\n.PlusbuttonM {\n  background-color: #dc3545;\n  border: none;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 10px;\n  margin: 4px 2px;\n  width: 15px;\n  height: 15px;\n}\n.cartMob {\n  font-size: 15px !important;\n}\n.applyBtmM {\n  font-size: 9px;\n  width: auto;\n  height: 30px;\n}\n.discountFeild {\n  width: 80%;\n}\n.nav-link {\n  padding: 0.2rem 0.7rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcGluZy9hZGRwcm9kdWN0L0M6XFxVc2Vyc1xcQWJoaXNoZWsuU2F4ZW5hMVxcRGVza3RvcFxccHJha2FzaFxcc2hvZWRlbGl2ZXJ5RnJvbnRFbmQvc3JjXFxhcHBcXHNob3BpbmdcXGFkZHByb2R1Y3RcXGFkZHByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nob3BpbmcvYWRkcHJvZHVjdC9hZGRwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBUSxpR0FBQTtBQ0FSLGdCQUFnQjtBRENoQjtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFRjtBREFBO0VBQ0UsYUFBQTtBQ0dGO0FEREE7RUFDRSxvQ0FBQTtFQUNBLGNBQUE7QUNJRjtBRERBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0lGO0FEREE7RUFDRSxtQkFBQTtFQUNBLG1EQUFBO0FDSUY7QURBQTtFQUVFLGFBQUE7RUFFQSw0QkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0VKO0FER0E7RUFFRSxPQUFBO0FDREY7QURLQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0ZGO0FES0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUNGRjtBREtBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNGRjtBREtBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0ZGO0FES0E7RUFDRSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FDRkY7QURLQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNGRjtBREtBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FEaUJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ2RGO0FEaUJBO0VBR0UsV0FBQTtFQUNBLGtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsY0FBQTtBQ2hCRjtBRG1CQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsaUJBQUE7QUNoQkY7QURtQkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNoQkY7QURtQkE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNoQkY7QURtQkE7O0VBRUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDaEJGO0FEbUJBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNoQkY7QURtQkE7RUFDRSxpQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDaEJGO0FEbUJBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDaEJGO0FEbUJBO0VBQ0UsbUJBQUE7QUNoQkY7QURtQkE7RUFDRSxtQkFBQTtBQ2hCRjtBRG1CQTtFQUNFLG1CQUFBO0FDaEJGO0FEbUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDaEJGO0FEbUJBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0RBQUE7QUNoQkY7QURtQkE7RUFDRSxnQkFBQTtBQ2hCRjtBRHFCQTtFQUVFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUNuQkY7QURzQkE7RUFFRSw4QkFBQTtBQ3BCRjtBRHVEQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDRSxZQUFBO0FDcERKO0FEdURBO0VBQVUsa0JBQUE7QUNuRFY7QURxREE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNsREY7QURvREE7RUFDRSxhQUFBO0FDakRGO0FEbURBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNoREY7QURvREEsd0RBQUE7QUFDQTtFQUlFLGFBQUE7RUFLUSxzQkFBQTtBQ2pEVjtBRGtERTtFQUNFO0lBQ0UsbUJBQUE7RUMvQ0o7QUFDRjtBRGdEQTtFQUlVLFlBQUE7QUM5Q1Y7QURnREE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUM3Q0Y7QUQ4Q0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUMzQ0o7QUQ0Q0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDekNOO0FEMkNJO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUN4Q047QUR5Q0k7RUFDRSxlQUFBO0FDdENOO0FEd0NBO0VBQ0UsZ0JBQUE7QUNyQ0Y7QURzQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ1EsdUJBQUE7RUFDUixnQ0FBQTtFQUNRLHdCQUFBO0FDbkNaO0FEc0NBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ25DRjtBRHFDQTtFQUNFO0lBSUUsYUFBQTtFQ2xDRjtBQUNGO0FEbUNBO0VBSUUsYUFBQTtFQUtRLHNCQUFBO0FDakNWO0FEbUNBO0VBSVUsWUFBQTtBQ2hDVjtBRGtDQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUMvQkY7QURpQ0E7RUFDRSxjQUFBO0FDOUJGO0FEbUNBO0VBQ0UsYUFBQTtBQ2hDRjtBRGtDQTtFQUNFLGtCQUFBO0FDL0JGO0FEZ0NFO0VBQ0UsaUJBQUE7QUM3Qko7QUQrQkE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDNUJGO0FENkJFO0VBQ0UsaUJBQUE7QUMxQko7QUQ0QkE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBRVEsZ0NBQUE7QUN6QlY7QUQwQkU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUN2Qko7QUR5QkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDdEJGO0FEdUJFO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3BCSjtBRHNCQTtFQUNFLG1CQUFBO0FDbkJGO0FEcUJBO0VBQ0UsbUJBQUE7QUNsQkY7QURvQkE7RUFDRSxtQkFBQTtBQ2pCRjtBRG1CQTtFQUNFLGNBQUE7QUNoQkY7QURrQkE7RUFDRTtJQUNFLFVBQUE7SUFFUSxtQkFBQTtFQ2ZWO0VEZ0JBO0lBQ0UsVUFBQTtJQUVRLG1CQUFBO0VDZFY7QUFDRjtBRGVBO0VBQ0U7SUFDRSxVQUFBO0lBRVEsbUJBQUE7RUNiVjtFRGNBO0lBQ0UsVUFBQTtJQUVRLG1CQUFBO0VDWlY7QUFDRjtBRGFBLG9DQUFBO0FBRUE7RUFDRSxlQUFBO0FDWkY7QURlQTtFQUNFLGVBQUE7QUNaRjtBRGNBO0VBQ0UsZUFBQTtBQ1hGO0FEZUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNaRjtBRGVBO0VBQ0UsZUFBQTtBQ1pGO0FEZUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDWkY7QURlQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNaRjtBRGVBO0VBQ0UseUJBQUE7QUNaRjtBRGVBO0VBR0UsMkJBQUE7RUFDQSxnQkFBQTtBQ1pGO0FEZUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUNaRjtBRGVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNaRjtBRGVBO0VBQ0UsY0FBQTtBQ1pGO0FEZUE7RUFDRSxjQUFBO0FDWkY7QURlQTtFQUNFLGNBQUE7QUNaRjtBRGVBO0VBQ0UsY0FBQTtBQ1pGO0FEZUE7RUFDRSxjQUFBO0FDWkY7QURlQTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ1pGO0FEZUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDWkY7QURlQTtFQUNFLG1CQUFBO0FDWkY7QURlQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBQ1pGO0FEY0EsZ0JBQUE7QUFFQTtFQUNFLGVBQUE7RUFFQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2JGO0FEaUJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ2RGO0FEZ0JBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0FDYkY7QUQyQkE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQ3hCRjtBRDBCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ3ZCRjtBRHlCQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUN0QkY7QUR1QkU7RUFDRSxrQkFBQTtBQ3JCSjtBRHlCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDdEJGO0FEd0JBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FDckJGO0FEd0JBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNyQkY7QUR3QkE7RUFDRSxZQUFBO0FDckJGO0FEd0JBO0VBQ0UsNkJBQUE7QUNyQkY7QUQ4QkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQzNCRjtBRDZCQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQzFCRjtBRDRCQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsTUFBQTtFQUNBLG9CQUFBO0FDekJGO0FENEJBO0VBQ0Usb0NBQUE7QUN6QkY7QUQ2QkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUMxQkY7QUQyQk07RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUMzQlY7QUQ2QlU7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7QUMzQlo7QURnQ0E7RUFDRSxnQ0FBQTtBQzdCRjtBRGlDQTtFQUNFLHVCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsVUFBQTtBQzlCRjtBRGlDQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDOUJGO0FEK0JHO0VBQ0UsV0FBQTtBQzdCTDtBRGdDQTtFQUNFLHFCQUFBO0FDN0JGO0FEK0JBO0VBQVMscUJBQUE7QUMzQlQ7QUQ2QkE7RUFFRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUMzQkY7QUQ2QkE7RUFDRSwyQ0FBQTtFQUNBLGVBQUE7QUMxQkY7QUQyQ0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUN4Q0Y7QUQwQ0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ3ZDRjtBRDBDQTtFQUNFLHNCQUFBO0VBQ0EsK0VBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ3ZDRjtBRHdDRTtFQUNFLGFBQUE7QUN0Q0o7QUR5Q0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1FQUFBO0FDdkNKO0FEMENFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUdBLDBIQUFBO0VBQ0EsdUhBQUE7QUN4Q0o7QUQ0Q0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ3pDRjtBRDJDQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQ3hDRjtBRDRDQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSxlQUFBO0VDekNGOztFRDJDQTtJQUNFLGVBQUE7RUN4Q0Y7O0VEMENBO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7RUN2Q0Y7O0VEeUNBO0lBQ0UsWUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQ3RDRjs7RUR3Q0E7SUFDRSxhQUFBO0VDckNGO0VEc0NFO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUNwQ0o7O0VEdUNBO0lBQ0UsYUFBQTtJQUNBLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUNwQ0Y7O0VEc0NBO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNuQ0Y7RURvQ0U7SUFDRSxxQkFBQTtJQUNBLE9BQUE7RUNsQ0o7O0VEcUNBO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VDbENGO0FBQ0Y7QURxQ0U7RUFDQTtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtFQ25DSjs7RURxQ0E7SUFDRSx5QkFBQTtFQ2xDRjs7RURvQ0E7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDakNGO0FBQ0Y7QURzQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNwQ0Y7QURzQ0E7RUFDRSxlQUFBO0FDbkNGO0FEcUNBO0VBQ0UsZUFBQTtBQ2xDRjtBRHFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNsQ0Y7QURxQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ2xDSjtBRHFDQTtFQUNFLGVBQUE7QUNsQ0Y7QURvQ0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNqQ0Y7QURvQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0UsWUFBQTtBQ2pDSjtBRG9DQTtFQUNFLDBCQUFBO0FDakNGO0FEbUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDaENGO0FEa0NBO0VBQ0UsVUFBQTtBQy9CRjtBRGlDQTtFQUNFLGlDQUFBO0FDOUJGIiwiZmlsZSI6InNyYy9hcHAvc2hvcGluZy9hZGRwcm9kdWN0L2FkZHByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS80LjcuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIik7XHJcbi5jdXN0b20tZmlsZS11cGxvYWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2V0Q29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lcjEge1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJveC1zaGFkb3c6IC0xMXB4IDExcHggMXB4IHJnYmEoMjU1LCAyNTMsIDI1MywgMC4zKTtcclxufVxyXG5cclxuXHJcbi5jYXJkLWhlYWQge1xyXG5cclxuICBoZWlnaHQ6IDMwMHB4O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnByb2R1Y3QtaW1nIHtcclxuXHJcbiAgbGVmdDogMDtcclxuXHJcbn1cclxuXHJcbi5wcm9kdWN0LWRldGFpbCB7XHJcbiAgcGFkZGluZzogMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlsIGgyIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uYmFjay10ZXh0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMjVweDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gIG9wYWNpdHk6IDAuMTtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgbWluLWhlaWdodDogMjIwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDI1cHggMjVweDtcclxufVxyXG5cclxuLnByb2R1Y3QtdGl0bGUge1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCA1cHggMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4ucHJvZHVjdC10aXRsZSBiIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0b3A6IC0ycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBmbG9hdDpyaWdodDtcclxufVxyXG5cclxuLy8gLnJhdGluZyB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTFweDtcclxuLy8gICBmb250LXdlaWdodDogMzAwO1xyXG4vLyAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XHJcbi8vICAgcGFkZGluZzogNXB4IDVweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbi8vICAgdG9wOiAtMnB4O1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbi8vIH1cclxuXHJcbi5wcm9kdWN0LWNhcHRpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLnByb2R1Y3QtcmF0aW5nIHtcclxuICAvLyBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgLy8gZm9udC1zaXplOiAxMXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG5cclxuLnByb2R1Y3QtcmF0aW5nIGkuZ3JleSB7XHJcbiAgY29sb3I6ICNjZWNlMTU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXNpemUgaDQge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBwYWRkaW5nOiAwIDIxcHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udWwtc2l6ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi51bC1zaXplIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnVsLXNpemUgbGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICB3aWR0aDogMjJweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi51bC1zaXplIGxpIGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZjM1ZTNkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucHJvZHVjdC1zaXplOmJlZm9yZSxcclxuLnByb2R1Y3Qtc2l6ZTphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWNvbG9yIGg0IHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogMCAyMXB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnVsLWNvbG9yIHtcclxuICBtYXJnaW4tbGVmdDogMjdweDtcclxufVxyXG5cclxuLnVsLWNvbG9yIGxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnVsLWNvbG9yIGxpIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLnVsLWNvbG9yIGxpIGEub3JhbmdlIHtcclxuICBiYWNrZ3JvdW5kOiAjZjM1ZTNkO1xyXG59XHJcblxyXG4udWwtY29sb3IgbGkgYS5ncmVlbiB7XHJcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxufVxyXG5cclxuLnVsLWNvbG9yIGxpIGEueWVsbG93IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZkNDE0O1xyXG59XHJcblxyXG4udWwtY29sb3IgbGkgYS5hY3RpdmU6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzNWUzZDtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBtYXJnaW4tdG9wOiAtNXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1wcmljZSB7XHJcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcclxuICBwYWRkaW5nOiA3cHggMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBib3gtc2hhZG93OiAtMTBweCAyMHB4IDE1cHggLTEwcHggcmdiYSgxNywgMjMzLCA5MSwgMC4zKTtcclxufVxyXG5cclxuLnByb2R1Y3QtcHJpY2UgYiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuXHJcblxyXG4ueXRcclxue1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nOjdweCAxMHB4IDNweCAxMHB4O1xyXG4gIHRvcDogNXB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4ueXQ6aG92ZXJcclxue1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLy8gLnF1YW50aXR5IHtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vIH1cclxuXHJcbi8vIGlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuLy8gaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uXHJcbi8vIHtcclxuLy8gICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyB9XHJcblxyXG4vLyBpbnB1dFt0eXBlPW51bWJlcl1cclxuLy8ge1xyXG4vLyAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG4vLyB9XHJcblxyXG4vLyAucXVhbnRpdHkgaW5wdXQge1xyXG4vLyAgIHdpZHRoOiAyNXB4O1xyXG4vLyAgIGhlaWdodDogMjBweDtcclxuLy8gICBsaW5lLWhlaWdodDogMS42NTtcclxuLy8gICBmbG9hdDogbGVmdDtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBwYWRkaW5nOiAwO1xyXG4vLyAgIG1hcmdpbjogMDtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuLy8gfVxyXG5cclxuLy8gLnF1YW50aXR5IGlucHV0OmZvY3VzIHtcclxuLy8gICBvdXRsaW5lOiAwO1xyXG4vLyB9XHJcblxyXG4uUGx1c2J1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDRweCAycHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b241IHtib3JkZXItcmFkaXVzOiA1MCU7fVxyXG5cclxuLmlucHV0LW51bWJlciB7XHJcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDEgMSAwJTtcclxufVxyXG4uY2hlY2tlZCB7XHJcbiAgY29sb3I6IG9yYW5nZTtcclxufVxyXG4uZmEtc3RhciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKiBEZXRhaWwgUGFnZSAqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4ucHJldmlldyB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NnB4KSB7XHJcbiAgICAucHJldmlldyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7IH0gfVxyXG5cclxuLnByZXZpZXctcGljIHtcclxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG5cclxuLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDsgfVxyXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSB7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjUlOyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OiAxNzdweCAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwOyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XHJcblxyXG4udGFiLWNvbnRlbnQge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cclxuICAudGFiLWNvbnRlbnQgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogb3BhY2l0eTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IC4zczsgfVxyXG5cclxuXHJcbi5jYXJkRGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gIHBhZGRpbmc6IDNlbTtcclxuICBsaW5lLWhlaWdodDogMS41ZW07IH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5N3B4KSB7XHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7IH0gfVxyXG5cclxuLmRldGFpbHMge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuXHJcbi5jb2xvcnMge1xyXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgICAgICAgZmxleC1ncm93OiAxOyB9XHJcblxyXG4ucHJvZHVjdC10aXRsZSwgLnByaWNlLCAuc2l6ZXMsIC5jb2xvcnMge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XHJcblxyXG4uY2hlY2tlZCwgLnByaWNlIHNwYW4ge1xyXG4gIGNvbG9yOiAjZmY5ZjFhOyB9XHJcblxyXG4vLyAucHJvZHVjdC10aXRsZSwgLnJhdGluZywgLnByb2R1Y3QtZGVzY3JpcHRpb24sIC5wcmljZSwgLnZvdGUsIC5zaXplcyB7XHJcbi8vICAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxyXG5cclxuLnByb2R1Y3QtdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDA7IH1cclxuXHJcbi5zaXplIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cclxuICAuc2l6ZTpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4OyB9XHJcblxyXG4uY29sb3Ige1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBoZWlnaHQ6IDJlbTtcclxuICB3aWR0aDogMmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDsgfVxyXG4gIC5jb2xvcjpmaXJzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XHJcblxyXG4uYWRkLXRvLWNhcnQsIC5saWtlIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY5ZjFhO1xyXG4gIHBhZGRpbmc6IC41ZW0gMWVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogVVBQRVJDQVNFO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7IH1cclxuICAuYWRkLXRvLWNhcnQ6aG92ZXIsIC5saWtlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiMzY4MDA7XHJcbiAgICBjb2xvcjogI2ZmZjsgfVxyXG5cclxuLm5vdC1hdmFpbGFibGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMmVtOyB9XHJcbiAgLm5vdC1hdmFpbGFibGU6YmVmb3JlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBmb250YXdlc29tZTtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMDBkXCI7XHJcbiAgICBjb2xvcjogI2ZmZjsgfVxyXG5cclxuLm9yYW5nZSB7XHJcbiAgYmFja2dyb3VuZDogI2ZmOWYxYTsgfVxyXG5cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiAjODVhZDAwOyB9XHJcblxyXG4uYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogIzAwNzZhZDsgfVxyXG5cclxuLnRvb2x0aXAtaW5uZXIge1xyXG4gIHBhZGRpbmc6IDEuM2VtOyB9XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgb3BhY2l0eSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgzKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgzKTsgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfSB9XHJcblxyXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7IH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7IH0gfVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xyXG5cclxuLnN0YXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmRldGFpbFN0YXIge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uYnRuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uc20tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHhcclxufVxyXG5cclxuLnNtLXRleHQtMSB7XHJcbiAgZm9udC1zaXplOiAxNHB4XHJcbn1cclxuXHJcbi5ncmVlbi10YWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEM4NTM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweCAzcHggNXB4IDNweFxyXG59XHJcblxyXG4uYnRuLXJlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2NEExOTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lXHJcbn1cclxuXHJcbi5idG4tcmVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkYzNjBDXHJcbn1cclxuXHJcbi5idG4tcmVkOmZvY3VzIHtcclxuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZS13aWR0aDogMFxyXG59XHJcblxyXG4ucm91bmQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi5mYS1jaXJjbGUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBjb2xvcjogI0VFRUVFRlxyXG59XHJcblxyXG4uZ3JlZW4tZG90IHtcclxuICBjb2xvcjogIzRDQUY1MFxyXG59XHJcblxyXG4ucmVkLWRvdCB7XHJcbiAgY29sb3I6ICNFNjRBMTlcclxufVxyXG5cclxuLnllbGxvdy1kb3Qge1xyXG4gIGNvbG9yOiAjRkZENTRGXHJcbn1cclxuXHJcbi5ncmV5LXRleHQge1xyXG4gIGNvbG9yOiAjQkRCREJEXHJcbn1cclxuXHJcbi5ncmVlbi10ZXh0IHtcclxuICBjb2xvcjogIzRDQUY1MFxyXG59XHJcblxyXG4uYmxvY2sge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNGNUVFRUU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGNUVFRUU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUVFRUVcclxufVxyXG5cclxuLnByb2ZpbGUtcGljIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4ucmF0aW5nLWRvdCB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDVweFxyXG59XHJcblxyXG4udmlhIHtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGhlaWdodDogMjhweFxyXG59XHJcbi8qIEJhc2Ugc3R5bGluZyovXHJcblxyXG4ucG9wb3Zlcl9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiByZ2IoMjI4LCA2OCwgNjgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5wb3BvdmVyX193cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5wb3BvdmVyX19jb250ZW50IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6MjAwcHg7XHJcbiAgbGVmdDogLTEwMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4ucG9wb3Zlcl9fY29udGVudDpiZWZvcmUge1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB6LWluZGV4OiAtMTtcclxuICAvLyBjb250ZW50OiBcIlwiO1xyXG4gIC8vIHJpZ2h0OiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gIC8vIHRvcDogLThweDtcclxuICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8vIGJvcmRlci13aWR0aDogMCAxMHB4IDEwcHggMTBweDtcclxuICAvLyBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNiZmJmYmYgdHJhbnNwYXJlbnQ7XHJcbiAgLy8gdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAvLyB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbn1cclxuLnBvcG92ZXJfX3dyYXBwZXI6aG92ZXIgLnBvcG92ZXJfX2NvbnRlbnQge1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjBweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xyXG59XHJcbi5wb3BvdmVyX19tZXNzYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5jYXJkRGl2ICB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5jYXJkbWVyY2hhbnQge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwO1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGgxIHtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICB9XHJcbn1cclxuXHJcbi5wcmljZW1lcmNhaG50IHtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuLm1lcmNoYW50TmFtZSB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uY2FyZG1lcmNoYW50IGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNhcmRtZXJjaGFudCBidXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLnJvd1NlZ3JlZ2F0ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcblxyXG5cclxuLnVsUHJvZHVjdCB7XHJcbiAvLyBsaXN0LXN0eWxlLWltYWdlOiB1cmwoJ3NxcHVycGxlLmdpZicpO1xyXG59XHJcblxyXG4uc3Rhci1yYXRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDNlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5iYWNrLXN0YXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LXNoYWRvdzogNHB4IDRweCAxMHB4ICM4NDNhM2E7XHJcbn1cclxuLmZyb250LXN0YXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjQUEwMDAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjQUEwMDAwO1xyXG4gIHRvcDogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzXHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGEge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIC8vZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBjb2xvcjogI0FBMDAwMDtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQUEwMDAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxufVxyXG5cclxuLnRvcG5hdiBhLmFjdGl2ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNBQTAwMDA7XHJcbn1cclxuXHJcblxyXG4udG9wbmF2IGEge1xyXG4gIHBhZGRpbmc6IC4wNXJlbSAyLjlyZW07XHJcbn1cclxuXHJcbi5kaXNjb3VudEZlaWxkIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uaGVhZGluZ0JvcmRlciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0FBMDAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gICBhIHtcclxuICAgICBjb2xvcjogI2ZmZjtcclxuICAgfVxyXG59XHJcbi5jb2xsYXBzZSAge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5hOmxpbmsgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cclxuXHJcbi5mb3J1bVRhYkFjdGl2ZSB7XHJcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCAjQUEwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNBQTAwMDAgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmZvcnVtVGFiQWN0aXZlbGkge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQUEwMDAwICAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLy8gLm1lbnVJbWFnZSB7XHJcbi8vICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuLy8gICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI0FBMDAwMCAgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gZmlndXJlIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgY29sb3I6ICMwMDA7XHJcbi8vIH1cclxuXHJcbi5tZW51SW1hZ2Uge1xyXG4gIHdpZHRoOiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQTAwMDAgICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN1Ym1lbnVJbWFnZSB7XHJcbiAgd2lkdGg6IDQ0cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBMDAwMCAgIWltcG9ydGFudDtcclxufVxyXG5cclxuZmlndXJlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIG1pbi13aWR0aDogNTdweDtcclxufVxyXG5cclxuLmNhcmQtbG9hZGVyMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggMXB4IHJnYmEoMCwwLDAsLjA4KSwgMCAtMXB4IDNweCAwIHJnYmEoMCwwLDAsMC4wNik7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6MzUwcHg7XHJcbiAgJjpvbmx5LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6MDtcclxuICB9XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICAgIGJveC1zaGFkb3c6IC00OHB4IDc4cHggMCAtNDhweCAjZWRlZGVkLCAtNTFweCAxMDJweCAwIC01MXB4ICNlZGVkZWQ7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxvYWRlci1hbmltYXRlO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjYpIDMwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA4MSUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LDI1NSwyNTUsMCkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMC42KSAzMCUsIHJnYmEoMjU1LDI1NSwyNTUsMCkgODElKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsMjU1LDI1NSwwKSAwJSwgcmdiYSgyNTUsMjU1LDI1NSwwLjYpIDMwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA4MSUpO1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwMGZmZmZmZicsIGVuZENvbG9yc3RyPScjMDBmZmZmZmYnLEdyYWRpZW50VHlwZT0xICk7XHJcbiAgfVxyXG59XHJcblxyXG4uQUNsYXNze1xyXG4gIHJpZ2h0OiAtMTZweDtcclxuICB0b3A6IC0xMXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogI0FBMDAwMDtcclxufVxyXG4uc3VibWVudUltYWdlIHtcclxuICB3aWR0aDogNDVweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjQUEwMDAwICAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC50b3BuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiAuMDVyZW0gLjVyZW07XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIC5oZWFkaW5nQm9yZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgZmlndXJlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBtaW4td2lkdGg6IDU3cHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXIxIHtcclxuICAgIHdpZHRoOiAzMjVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIH1cclxuICAuY2FyZC1oZWFkIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLm5hdnN1bWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIHVsLnN1Ym1lbnUge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGxpIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB6b29tOiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnRuLWRhbmdlciB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcclxuICAudG9wbmF2IGF7XHJcbiAgICAgIHBhZGRpbmc6IDAuMDJlbSAwLjJyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gIH1cclxuICAudHJhY2tJZENvbU0ge1xyXG4gICAgZm9udC1zaXplOiA5cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbnRhaW5lcjEge1xyXG4gICAgd2lkdGg6IDI5NXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5iYWNrQnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50cmFja0lkQ29tTSB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5maWdjYXB0aW9uMSB7XHJcbiAgbWF4LXdpZHRoOiA3M3B4O1xyXG59XHJcblxyXG4ubmF2c3VtZW51IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbnVsLml0ZW1MaXN0ICB7XHJcbiAgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG4uZm9vdGVyTSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5pbnB1dC1udW1iZXJNIHtcclxuICB3aWR0aDogMTQlICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMSAxIDAlO1xyXG59XHJcblxyXG4uUGx1c2J1dHRvbk0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY2FydE1vYiB7XHJcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFwcGx5QnRtTSB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5kaXNjb3VudEZlaWxkIHtcclxuICB3aWR0aDo4MCU7XHJcbn1cclxuLm5hdi1saW5rIHtcclxuICBwYWRkaW5nOiAuMnJlbSAuN3JlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIpO1xuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZXRDb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jb250YWluZXIxIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJveC1zaGFkb3c6IC0xMXB4IDExcHggMXB4IHJnYmEoMjU1LCAyNTMsIDI1MywgMC4zKTtcbn1cblxuLmNhcmQtaGVhZCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwIDA7XG59XG4uY2FyZC1oZWFkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM1MHB4O1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICBsZWZ0OiAwO1xufVxuXG4ucHJvZHVjdC1kZXRhaWwge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wcm9kdWN0LWRldGFpbCBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uYmFjay10ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEyNXB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIG9wYWNpdHk6IDAuMTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAyNXB4IDI1cHg7XG59XG5cbi5wcm9kdWN0LXRpdGxlIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDVweCAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnByb2R1Y3QtdGl0bGUgYiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG59XG5cbi5iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRvcDogLTJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucHJvZHVjdC1jYXB0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgMjBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnByb2R1Y3QtcmF0aW5nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuLnByb2R1Y3QtcmF0aW5nIGkuZ3JleSB7XG4gIGNvbG9yOiAjY2VjZTE1O1xufVxuXG4ucHJvZHVjdC1zaXplIGg0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAwIDIxcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udWwtc2l6ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4udWwtc2l6ZSBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi51bC1zaXplIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udWwtc2l6ZSBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNmMzVlM2Q7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucHJvZHVjdC1zaXplOmJlZm9yZSxcbi5wcm9kdWN0LXNpemU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5wcm9kdWN0LWNvbG9yIGg0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAwIDIxcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udWwtY29sb3Ige1xuICBtYXJnaW4tbGVmdDogMjdweDtcbn1cblxuLnVsLWNvbG9yIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnVsLWNvbG9yIGxpIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi51bC1jb2xvciBsaSBhLm9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNmMzVlM2Q7XG59XG5cbi51bC1jb2xvciBsaSBhLmdyZWVuIHtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbn1cblxuLnVsLWNvbG9yIGxpIGEueWVsbG93IHtcbiAgYmFja2dyb3VuZDogI2ZmZDQxNDtcbn1cblxuLnVsLWNvbG9yIGxpIGEuYWN0aXZlOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMzVlM2Q7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4ucHJvZHVjdC1wcmljZSB7XG4gIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAtMTNweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJveC1zaGFkb3c6IC0xMHB4IDIwcHggMTVweCAtMTBweCByZ2JhKDE3LCAyMzMsIDkxLCAwLjMpO1xufVxuXG4ucHJvZHVjdC1wcmljZSBiIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnl0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBwYWRkaW5nOiA3cHggMTBweCAzcHggMTBweDtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnl0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uUGx1c2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogNHB4IDJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmJ1dHRvbjUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbnB1dC1udW1iZXIge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSAwJTtcbn1cblxuLmNoZWNrZWQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuXG4uZmEtc3RhciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMXB4O1xufVxuXG4vKioqKioqKioqKioqKioqKiogRGV0YWlsIFBhZ2UgKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi5wcmV2aWV3IHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTZweCkge1xuICAucHJldmlldyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxufVxuLnByZXZpZXctcGljIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIHtcbiAgd2lkdGg6IDE4JTtcbiAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xufVxuXG4ucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxNzdweCAhaW1wb3J0YW50O1xufVxuXG4ucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkgYSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnRhYi1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRhYi1jb250ZW50IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogb3BhY2l0eTtcbiAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XG59XG5cbi5jYXJkRGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBhZGRpbmc6IDNlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTdweCkge1xuICAud3JhcHBlciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbi5kZXRhaWxzIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29sb3JzIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5wcm9kdWN0LXRpdGxlLCAucHJpY2UsIC5zaXplcywgLmNvbG9ycyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNoZWNrZWQsIC5wcmljZSBzcGFuIHtcbiAgY29sb3I6ICNmZjlmMWE7XG59XG5cbi5wcm9kdWN0LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnNpemUge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zaXplOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmNvbG9yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5jb2xvcjpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5hZGQtdG8tY2FydCwgLmxpa2Uge1xuICBiYWNrZ3JvdW5kOiAjZmY5ZjFhO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IFVQUEVSQ0FTRTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbn1cblxuLmFkZC10by1jYXJ0OmhvdmVyLCAubGlrZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNiMzY4MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubm90LWF2YWlsYWJsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbn1cblxuLm5vdC1hdmFpbGFibGU6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IGZvbnRhd2Vzb21lO1xuICBjb250ZW50OiBcIu+AjVwiO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm9yYW5nZSB7XG4gIGJhY2tncm91bmQ6ICNmZjlmMWE7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6ICM4NWFkMDA7XG59XG5cbi5ibHVlIHtcbiAgYmFja2dyb3VuZDogIzAwNzZhZDtcbn1cblxuLnRvb2x0aXAtaW5uZXIge1xuICBwYWRkaW5nOiAxLjNlbTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgzKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS5jc3MubWFwICovXG4uc3RhciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRldGFpbFN0YXIge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5idG4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uc20tdGV4dC0xIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZ3JlZW4tdGFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQzg1MztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4IDNweCA1cHggM3B4O1xufVxuXG4uYnRuLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjRBMTk7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idG4tcmVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JGMzYwQztcbn1cblxuLmJ0bi1yZWQ6Zm9jdXMge1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZS13aWR0aDogMDtcbn1cblxuLnJvdW5kLWljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uZmEtY2lyY2xlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI0VFRUVFRjtcbn1cblxuLmdyZWVuLWRvdCB7XG4gIGNvbG9yOiAjNENBRjUwO1xufVxuXG4ucmVkLWRvdCB7XG4gIGNvbG9yOiAjRTY0QTE5O1xufVxuXG4ueWVsbG93LWRvdCB7XG4gIGNvbG9yOiAjRkZENTRGO1xufVxuXG4uZ3JleS10ZXh0IHtcbiAgY29sb3I6ICNCREJEQkQ7XG59XG5cbi5ncmVlbi10ZXh0IHtcbiAgY29sb3I6ICM0Q0FGNTA7XG59XG5cbi5ibG9jayB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNGNUVFRUU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRjVFRUVFO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y1RUVFRTtcbn1cblxuLnByb2ZpbGUtcGljIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG59XG5cbi5yYXRpbmctZG90IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuLnZpYSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGhlaWdodDogMjhweDtcbn1cblxuLyogQmFzZSBzdHlsaW5nKi9cbi5wb3BvdmVyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2U0NDQ0NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9wb3Zlcl9fd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucG9wb3Zlcl9fY29udGVudCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIGxlZnQ6IC0xMDBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5wb3BvdmVyX193cmFwcGVyOmhvdmVyIC5wb3BvdmVyX19jb250ZW50IHtcbiAgei1pbmRleDogMTA7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yMHB4KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzUsIC0wLjAyLCAwLjIsIDAuOTcpO1xufVxuXG4ucG9wb3Zlcl9fbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY2FyZERpdiB7XG4gIGhlaWdodDogMjBweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNhcmRtZXJjaGFudCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNhcmRtZXJjaGFudCBoMSB7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbn1cblxuLnByaWNlbWVyY2FobnQge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ubWVyY2hhbnROYW1lIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmNhcmRtZXJjaGFudCBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5jYXJkbWVyY2hhbnQgYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4ucm93U2VncmVnYXRlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG59XG5cbi5zdGFyLXJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJhY2stc3RhcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI2NjYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXNoYWRvdzogNHB4IDRweCAxMHB4ICM4NDNhM2E7XG59XG5cbi5mcm9udC1zdGFycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjQUEwMDAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjQUEwMDAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMCAhaW1wb3J0YW50O1xufVxuXG4udG9wbmF2IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4udG9wbmF2IGEge1xuICBmbG9hdDogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogI0FBMDAwMDtcbiAgb3BhY2l0eTogMTtcbn1cbi50b3BuYXYgYTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjQUEwMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b3BuYXYgYS5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI0FBMDAwMDtcbn1cblxuLnRvcG5hdiBhIHtcbiAgcGFkZGluZzogMC4wNXJlbSAyLjlyZW07XG59XG5cbi5kaXNjb3VudEZlaWxkIHtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmhlYWRpbmdCb3JkZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQUEwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkaW5nQm9yZGVyIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbGxhcHNlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3J1bVRhYkFjdGl2ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI0FBMDAwMCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3J1bVRhYkFjdGl2ZWxpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBQTAwMDAgIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudUltYWdlIHtcbiAgd2lkdGg6IDQ0cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQUEwMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJtZW51SW1hZ2Uge1xuICB3aWR0aDogNDRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNBQTAwMDAgIWltcG9ydGFudDtcbn1cblxuZmlndXJlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtaW4td2lkdGg6IDU3cHg7XG59XG5cbi5jYXJkLWxvYWRlcjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wOCksIDAgLTFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzUwcHg7XG59XG4uY2FyZC1sb2FkZXIxOm9ubHktY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmNhcmQtbG9hZGVyMTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDExMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgYm94LXNoYWRvdzogLTQ4cHggNzhweCAwIC00OHB4ICNlZGVkZWQsIC01MXB4IDEwMnB4IDAgLTUxcHggI2VkZWRlZDtcbn1cbi5jYXJkLWxvYWRlcjE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGxvYWRlci1hbmltYXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgODElKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgODElKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikgMzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDgxJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsIGVuZENvbG9yc3RyPVwiIzAwZmZmZmZmXCIsR3JhZGllbnRUeXBlPTEgKTtcbn1cblxuLkFDbGFzcyB7XG4gIHJpZ2h0OiAtMTZweDtcbiAgdG9wOiAtMTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI0FBMDAwMDtcbn1cblxuLnN1Ym1lbnVJbWFnZSB7XG4gIHdpZHRoOiA0NXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBMDAwMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC50b3BuYXYgYSB7XG4gICAgcGFkZGluZzogMC4wNXJlbSAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICB9XG5cbiAgLmhlYWRpbmdCb3JkZXIge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuXG4gIGZpZ3VyZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIG1pbi13aWR0aDogNTdweDtcbiAgfVxuXG4gIC5jb250YWluZXIxIHtcbiAgICB3aWR0aDogMzI1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG5cbiAgLmNhcmQtaGVhZCB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuICAuY2FyZC1oZWFkIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxuXG4gIC5uYXZzdW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB1bnNldCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICB1bC5zdWJtZW51IHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgdWwuc3VibWVudSBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHpvb206IDE7XG4gIH1cblxuICAuYnRuLWRhbmdlciB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnRvcG5hdiBhIHtcbiAgICBwYWRkaW5nOiAwLjAyZW0gMC4ycmVtO1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICB9XG5cbiAgLnRyYWNrSWRDb21NIHtcbiAgICBmb250LXNpemU6IDlweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbnRhaW5lcjEge1xuICAgIHdpZHRoOiAyOTVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIH1cbn1cbi5iYWNrQnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cmFja0lkQ29tTSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmZpZ2NhcHRpb24xIHtcbiAgbWF4LXdpZHRoOiA3M3B4O1xufVxuXG4ubmF2c3VtZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbnVsLml0ZW1MaXN0IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvb3Rlck0ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pbnB1dC1udW1iZXJNIHtcbiAgd2lkdGg6IDE0JSAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgMCU7XG59XG5cbi5QbHVzYnV0dG9uTSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogNHB4IDJweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLmNhcnRNb2Ige1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmFwcGx5QnRtTSB7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uZGlzY291bnRGZWlsZCB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjdyZW0gIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shoping/addproduct/addproduct.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shoping/addproduct/addproduct.component.ts ***!
  \************************************************************/
/*! exports provided: AddproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductComponent", function() { return AddproductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _guard_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../guard/auth.service */ "./src/app/guard/auth.service.ts");
/* harmony import */ var _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../delivery/delivery.service */ "./src/app/delivery/delivery.service.ts");
/* harmony import */ var _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/api-link.service */ "./src/app/shared/api-link.service.ts");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shoping_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shoping.service */ "./src/app/shoping/shoping.service.ts");
/* harmony import */ var sweetalert2_src_sweetalert2_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2/src/sweetalert2.scss */ "./node_modules/sweetalert2/src/sweetalert2.scss");
/* harmony import */ var sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.all.min.js */ "./node_modules/sweetalert2/dist/sweetalert2.all.min.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");













let AddproductComponent = class AddproductComponent {
    constructor(formBuilder, modalService, fetch, dasboard, api, deliveryService, auth) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.fetch = fetch;
        this.dasboard = dasboard;
        this.api = api;
        this.deliveryService = deliveryService;
        this.auth = auth;
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
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: 'https://personal.softdocket.com/api/comunication/imageupload123',
            uploadWithCredentials: false,
            sanitize: false,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [
                ['undo',
                    'redo',
                    'underline',
                    'strikeThrough',
                    'subscript',
                    'superscript',
                    'indent',
                    'outdent',
                    'heading',
                    'fontName'],
                ['fontSize', 'backgroundColor',
                    'customClasses',
                    'link',
                    'unlink',
                    'insertImage',
                    'foregroundColorPicker-',
                    'insertVideo',
                    'insertHorizontalRule',
                    'removeFormat',
                    'toggleEditorMode', 'superscript', 'strikethrough', 'subscript']
            ]
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
            "category2": [{ "name": "Staples", images: "staples.jpg", "type": "subCategorytype21" },
                { "name": "Snacks & Beverages", images: "snackbreverages.jpg", "type": "subCategorytype22" },
                { "name": " Packaged Food", images: "snackbreverages.jpg", "type": "subCategorytype23" },
                { "name": "Personal & Baby Care", images: "personalandbabycare.png", "type": "subCategorytype24" },
                { "name": "Household Care", images: "householdcare.jpg", "type": "subCategorytype25" },
                { "name": "Dairy & Eggs", images: "dairyandeggs.jpg", "type": "subCategorytype26" },
                { "name": "Home & Kitchen", images: "homekitchen.jpg", "type": "subCategorytype27" },
                { "name": "Fruits", images: "fruitvegetable.jpg", "type": "subCategorytype91" },
                { "name": "Vegetable", images: "fruitvegetable.jpg", "type": "subCategorytype92" }],
            "category4": [{ "name": "Mens Top Wear", images: "menstopwear.jpg", "type": "subCategorytype41" },
                { "name": "Mens Bottam Wear", images: "mensbottomwear.jpg", "type": "subCategorytype42" },
                { "name": "Women Eiths", images: "womenethics.jpg", "type": "subCategorytype43" },
                { "name": "Women western", images: "womenwestern.jpg", "type": "subCategorytype44" },
                { "name": "Mens foot wear", images: "menfoottwear.jpg", "type": "subCategorytype45" },
                { "name": "Women foot wear", images: "womenfootwear.jpg", "type": "subCategorytype46" },
                { "name": "Watches and Accesories", images: "watchesaccesories.jpg", "type": "subCategorytype47" },
                { "name": "Bags,Suitcase", images: "bagsuit.jpg", "type": "subCategorytype48" },
                { "name": "Boys Dress", images: "boysdress.jpg", "type": "subCategorytype49" },
                { "name": "Girls Dress", images: "girlsdress.jpg", "type": "subCategorytype410" }],
            "category5": [{ "name": "Audio", images: "audio.jpg", "type": "subCategorytype51" },
                { "name": "Camera and accessories", images: "cameraassecories.jpg", "type": "subCategorytype52" },
                { "name": "Computer Phripherals", images: "computerperipheral.jpg", "type": "subCategorytype53" },
                { "name": "Laptop and desktop", images: "laptop.jpg", "type": "subCategorytype54" },
                { "name": "Laptop Accesories", images: "laptopaccesories.jpg", "type": "subCategorytype55" },
                { "name": "Health and personal care", images: "healthcare.jpg", "type": "subCategorytype56" },
                { "name": "Power bank", images: "powerbank.jpg", "type": "subCategorytype57" },
                { "name": "Storage", images: "storage.jpg", "type": "subCategorytype58" },
                { "name": "Smart wearable", images: "smartwear.jpg", "type": "subCategorytype59" },
                { "name": "Smart home automation", images: "smarthome.jpg", "type": "subCategorytype510" },
                { "name": "Tablets and Accessories", images: "tabletaccesories.jpg", "type": "subCategorytype511" },
                { "name": "Television", images: "tv.jpg", "type": "subCategorytype71" },
                { "name": "Washing Mechine", images: "WashingMechine.jpg", "type": "subCategorytype72" },
                { "name": "Air Conditioner", images: "aircondition.jpg", "type": "subCategorytype73" },
                { "name": "Refrigerator", images: "refrigerator.jpg", "type": "subCategorytype74" },
                { "name": "Kitchen Appliances", images: "kitchenappliances.jpg", "type": "subCategorytype75" },
                { "name": "Home Appliances", images: "homeappliances.jpg", "type": "subCategorytype76" },
                { "name": "Mobile less 5000", images: "mobile.jpg", "type": "subCategorytype31" },
                { "name": "Mobile accessories", images: "mobile.jpg", "type": "subCategorytype32" },
                { "name": "Mobile Less then 10000", images: "mobile.jpg", "type": "subCategorytype33" },
                { "name": "Mobile Less then 15000", images: "mobile.jpg", "type": "subCategorytype34" },
                { "name": "Mobile Price 15K -30K", images: "mobile.jpg", "type": "subCategorytype35" },
                { "name": "Mobile Price 30000 - 50K", images: "mobile.jpg", "type": "subCategorytype36" },
                { "name": "Mobile Price 50k and above", images: "mobile.jpg", "type": "subCategorytype37" }
            ],
            "category6": [{ "name": "Home Furnishing", images: "homefurniture.jpg", "type": "subCategorytype61" },
                { "name": "Living room", images: "livingroom.jpg", "type": "subCategorytype62" },
                { "name": "Kitchen and Dining", images: "kitchendinning.jpg", "type": "subCategorytype63" },
                { "name": "Bed Room", images: "bedroom.jpg", "type": "subCategorytype64" },
                { "name": "Tool & Utility", images: "toolutility.jpg", "type": "subCategorytype65" },
                { "name": "Lighting & Electrical", images: "lighting.jpg", "type": "subCategorytype66" },
                { "name": "Cleaning and Bath", images: "cleanbath.jpg", "type": "subCategorytype67" },
                { "name": "Kids Furniture", images: "kidsroom.jpg", "type": "subCategorytype68" },
                { "name": "Pets and gardening", images: "Petsandgardening.jpg", "type": "subCategorytype69" }
            ],
            "category8": [
                { "name": "Beauty and Personal care", images: "beautyandpersonal.jpg", "type": "subCategorytype81" },
                { "name": "Mens Grooming", images: "MensGrooming.jpg", "type": "subCategorytype82" },
                { "name": "Food and drinking", images: "foodanddrinking.jpg", "type": "subCategorytype83" },
                { "name": "Baby Care", images: "babycare.jpg", "type": "subCategorytype84" },
                { "name": "Nutrition and Health Care", images: "nutritionhealth.jpg", "type": "subCategorytype85" },
                { "name": "Toys and School Supplies", images: "ToysandSchoolSupplies.jpg", "type": "subCategorytype86" },
                { "name": "Sports and Fitness", images: "sportsandfitness.jpg", "type": "subCategorytype87" },
                { "name": "Books and Music", images: "booksmusic.jpg", "type": "subCategorytype88" },
                { "name": "Stationary & Office supplies", images: "StationeryOffice.jpg", "type": "subCategorytype89" },
                { "name": "Saftey and Hygiene Essentials", images: "SafetyHygiene.jpg", "type": "subCategorytype810" }
            ],
            "category10": [{ "name": "Ayush", images: "Ayush.jpg", "type": "subCategorytype101" },
                { "name": "Baby Essential", images: "BabyEssential.jpg", "type": "subCategorytype102" },
                { "name": "Covid Essential", images: "CovidEssential.jpg", "type": "subCategorytype103" },
                { "name": "Doctor", images: "Doctor.jpg", "type": "subCategorytype104" },
                { "name": "Eye Wear", images: "EyeWear.jpg", "type": "subCategorytype105" },
                { "name": "Fitness", images: "Fitness.jpg", "type": "subCategorytype106" },
                { "name": "Lab test", images: "Lab_test.jpg", "type": "subCategorytype107" },
                { "name": "Medical devices", images: "Medicaldevices.jpg", "type": "subCategorytype108" },
                { "name": "Medicine", images: "Lab_test.jpg", "type": "subCategorytype109" },
                { "name": "Personal care", images: "Personalcare.jpg", "type": "subCategorytype110" },
                { "name": "Surgical", images: "Surgical.jpg", "type": "subCategorytype111" },],
            "category11": [
                { "name": "Haire care", images: "Hairecare.jpg", "type": "subCategorytype201" },
                { "name": "Makeup", images: "makeup.jpg", "type": "subCategorytype202" },
                { "name": "Massages", images: "Massages.jpg", "type": "subCategorytype203" },
                { "name": "Pedicure & minicure", images: "Pedicure&minicure.jpg", "type": "subCategorytype204" },
                { "name": "Skin care", images: "Skincare.jpg", "type": "subCategorytype205" },
                { "name": "wax & Thread", images: "wax&Thread.jpg", "type": "subCategorytype206" }
            ],
            "category12": [
                { "name": "car& bike service", images: "car&bikeservice.jpg", "type": "subCategorytype301" },
                { "name": "Electronics & Appliances", images: "Electronics&Appliances.jpg", "type": "subCategorytype302" },
                { "name": "Home Clean", images: "homeclean.jpg", "type": "subCategorytype303" },
                { "name": "Packers & Movers", images: "packers&MOvers.jpg", "type": "subCategorytype304" },
                { "name": "Painting and interior", images: "paintingandinterior.jpg", "type": "subCategorytype305" },
                { "name": "Pest Control", images: "pestControl.jpg", "type": "subCategorytype306" },
                { "name": "Repair & Services", images: "Repair&Services.jpg", "type": "subCategorytype306" }
            ],
            "category13": [
                { "name": "Title Search", images: "TitalSearch.jpg", "type": "subCategorytype402" },
                { "name": "Banking/Finance Matters", images: "Banking&Finance Matters.jpg", "type": "subCategorytype403" },
                { "name": "Litigation Matters", images: "Litigation Matters.jpg", "type": "subCategorytype404" },
                { "name": "Partition of Property", images: "Partition of Property.jpg", "type": "subCategorytype405" },
                { "name": "Income Tax", images: "Income Tax.jpg", "type": "subCategorytype406" },
                { "name": "Landlord Tenant Dispute", images: "Landlord Tenant Dispute.jpg", "type": "subCategorytype407" },
                { "name": "Real Estate Service", images: "Real Estate Service.jpg", "type": "subCategorytype408" },
                { "name": "Succession Certificate", images: "Succession Certificate.jpg", "type": "subCategorytype409" },
                { "name": "Developer Claims", images: "Developer Claims.jpg", "type": "subCategorytype410" },
                { "name": "Adverse Possession", images: "Adverse Possession.jpg", "type": "subCategorytype411" },
                { "name": "Corporate Service Advisory", images: "Corporate Service Advisory.jpg", "type": "subCategorytype412" }
            ],
            "category14": [
                { "name": "Civil Contractors", images: "Civil Contractors.jpg", "type": "subCategorytype502" },
                { "name": "Construction Service", images: "Construction Service.jpg", "type": "subCategorytype503" },
                { "name": "Road Construction", images: "Road Construction.jpg", "type": "subCategorytype504" },
                { "name": "Civil Engineering Service", images: "Civil Engineering Service.jpg", "type": "subCategorytype505" },
                { "name": "Surveying", images: "Surveying.jpg", "type": "subCategorytype506" },
                { "name": "Piece Work", images: "Piece Work.jpg", "type": "subCategorytype507" },
                { "name": "Civil Consulation", images: "CivilConsultation.jpg", "type": "subCategorytype508" },
                { "name": "Carpentor", images: "Carpenter.jpg", "type": "subCategorytype509" },
                { "name": "Hardware", images: "Hardware.jpg", "type": "subCategorytype510" }
            ],
            "category15": [
                { "name": "State Board Tution", images: "State Board Tution.jpg", "type": "subCategorytype601" },
                { "name": "Central Board Tution", images: "Central Board Tution.jpg", "type": "subCategorytype602" },
                { "name": "Internation Board", images: "Internation Board.jpg", "type": "subCategorytype603" },
                { "name": "Spoken Language", images: "Spoken Language.jpg", "type": "subCategorytype604" },
                { "name": "Computer Language", images: "Computer Language.jpg", "type": "subCategorytype605" },
                { "name": "Project Instructor", images: "projectcoordinator.jpg", "type": "subCategorytype606" },
            ]
        };
        this.classifiedListData = [];
        this.ShowMenu = true;
        this.arialExpand = 0;
    }
    ngOnInit() {
        if (window.innerWidth < 800) {
            this.platformMobile = true;
        }
        this.getProfileInfo();
        this.classifiedForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            subcategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            quantity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            keyFeatureOne: [''],
            keyFeatureTwo: [''],
            keyFeatureThree: [''],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    uploadClassifiedVideo(event, template) {
        this.modalRef = this.modalService.show(template);
        for (let i = 0; i < event.target.files.length; i++) {
            const fileName = event.target.files[i].name.split('.');
            let fName = fileName[0].toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            this.selectedFile = fName + "-" + Date.now().toString() + '.' + fileName[fileName.length - 1];
            this.fileNames.push({ "name": this.selectedFile, "extension": event.target.files[i].name.split('.').pop() });
            this.uFrmvideo.append('forumPhoto', event.target.files[i], this.selectedFile);
            this.uploadedVideo = this.selectedFile;
        }
        this.fetch.uploadImg(this.uFrmvideo).subscribe((imageData) => {
            this.imageUploadPercent = (((imageData.loaded) / imageData.total) * 100).toFixed(2);
            if ((imageData.loaded != undefined) && (imageData.loaded == imageData.total)) {
                this.modalRef.hide();
                this.uFrmvideo = new FormData();
                this.uploadedVideo = this.selectedFile;
                sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                    title: "Uploaded successfully.",
                    text: "",
                    icon: 'success',
                    timer: 2000,
                    showCancelButton: false,
                    showConfirmButton: false,
                });
            }
            else {
            }
        });
    }
    uploadClassifiedattachment(event) {
        for (let i = 0; i < event.target.files.length; i++) {
            const fileName = event.target.files[i].name.split('.');
            let fName = fileName[0].toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            this.selectedFile = fName + "-" + Date.now().toString() + '.' + fileName[fileName.length - 1];
            this.fileNames.push({ "name": this.selectedFile, "extension": event.target.files[i].name.split('.').pop() });
            this.uFrm.append('classifiedImages', event.target.files[i], this.selectedFile);
            var mimeType = event.target.files[i].type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
            var reader = new FileReader();
            this.imagePath = event.target.files[i];
            reader.readAsDataURL(event.target.files[i]);
            reader.onload = (_event) => {
                this.imgURL.push(reader.result);
            };
        }
    }
    selectCategory(val) {
        this.setClassified = val;
        if (val == '') {
            this.objArray = [];
        }
    }
    addProduct(template) {
        this.imageUploadPercent = 0;
        const data = this.classifiedForm.value;
        data["fileName"] = this.fileNames;
        data["ownerNumber"] = this.profInfo.mobileNo;
        data["SenderName"] = this.profInfo.fstName + ' ' + this.profInfo.lstName;
        data["companyName"] = this.profInfo.companyName;
        data["status"] = "open";
        data["createdOn"] = new Date().getTime();
        data["currentIndexId"] = this.currentIndexId;
        let url = "product/addProduct";
        let msg = "Product add successfully.";
        if (this.editProductStatus) {
            data["nameId"] = data.name.toLowerCase();
            msg = "Product edit successfully.";
            url = "product/editProduct";
        }
        this.fetch.addProduct(data, url, this.auth.getLogged()).subscribe((data1) => {
            if (data1.status != 410) {
                this.classifiedForm.reset();
                this.fileNames = [];
                sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                    title: msg,
                    text: "",
                    icon: "success"
                });
                this.fetch.uploadclassifiedImage(this.uFrm).subscribe(() => {
                    this.uFrm = new FormData();
                    this.imgURL = [];
                    this.uploadedVideo = "";
                    this.imageUploadPercent = (((data.loaded) / data.total) * 100).toFixed(2);
                    if (data.loaded == data.total) {
                    }
                    else {
                    }
                });
            }
        }, (error) => {
            sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                title: "Product Already exit.",
                text: "",
                icon: 'warning',
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
        });
    }
    getProfileInfo() {
        this.profInfo = {};
        this.dasboard.getProfInfo(this.auth.getLogged()).subscribe(res => {
            this.profInfo = res;
            this.myproduct(false);
            this.dasboard.setProfileInfo(this.profInfo);
        }, err => { });
    }
    openVideo(template, data) {
        this.modalRef = this.modalService.show(template);
        this.setImageName = data.name;
    }
    myproduct(type) {
        this.addClassifiedTemplate = type;
        this.myOrderStatus = type;
        if (!type) {
            this.detailClassifiedStatus = true;
            this.getMyProduct();
        }
        else {
            this.classifiedForm.reset();
            this.myOrderStatus = false;
            this.addClassifiedTemplate = true;
        }
    }
    getMyProduct() {
        this.loadingTrue = true;
        this.fetch.getAllProduct({ "number": this.profInfo.mobileNo }, this.auth.getLogged()).subscribe((data) => {
            this.loadingTrue = false;
            this.allProductWithoutCategory = data;
            this.filterProductByCategory();
        });
    }
    removeVideo() {
        const index = this.fileNames.findIndex((data) => data.extension == 'mp4');
        this.fileNames.splice(index, 1);
        this.uploadedVideo = "";
    }
    editProduct(data) {
        this.currentIndexId = data.doc._id;
        this.nameId = data.doc.nameId;
        this.editProductStatus = true;
        this.addClassifiedTemplate = true;
        this.selectCategory(data.doc.category);
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
        const index = data.doc.fileName.findIndex((data) => data.extension == 'mp4');
        this.imgURL = data.doc.fileName.filter((data) => data.extension != 'mp4');
        if (index > -1) {
            this.uploadedVideo = data.doc.fileName[index].name;
        }
    }
    removeClassified(index) {
        this.fileNames.splice(index, 1);
        this.imgURL.splice(index, 1);
    }
    removeClassifiedEdit(index) {
        this.editfileNames.splice(index, 1);
    }
    detailProduct(item) {
        this.detailPageData = item;
        this.detailedImages = this.detailPageData.doc.fileName;
        if (this.detailPageData.doc.comment != undefined) {
            this.detailPageData.doc.comment.reverse();
        }
        else {
            this.detailPageData.doc.comment = [];
        }
        this.detailClassifiedStatus = false;
        this.ratingPercentage = (this.detailPageData.averageRating / 5) * 100;
    }
    setCurrentImage(index) {
        this.setCurrentIndexImage = index;
    }
    deleteProduct(id, index) {
        sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: "Delete Product",
            text: "Are you sure you want to delete.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: 'Yes !',
            cancelButtonText: 'No'
        }).then((isConfirm) => {
            if (isConfirm.isConfirmed) {
                this.fetch.delProduct({ id: id }).subscribe((data) => {
                    this.allProduct.splice(index, 1);
                    sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                        title: "Deleted Successfullt",
                        text: "",
                        icon: "success"
                    });
                });
            }
        });
    }
    myorders() {
        this.myOrderStatus = true;
        this.currentTab = 1;
        this.orderLoading = true;
        this.fetch.myorder(this.auth.getLogged()).subscribe((data) => {
            this.allOrderList = JSON.parse(JSON.stringify(data));
            this.orderLoading = false;
            this.changeTab(1, 'open');
        });
    }
    updateStatus(id, type, index, j) {
        let data = {};
        data = { "id": id, "value": { status: type } };
        if (type == 'acceptedByMerchant') {
            data = { "id": id, "value": { status: type, list: this.orderList[j].values[index].list, "totalamount": this.orderList[j].values[index].totalamount } };
        }
        this.fetch.acceptedInvoice(data).subscribe((data) => {
            this.orderList[j].values[index].status = type;
            sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                title: "Updated successfully.",
                text: "",
                icon: 'success',
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
        });
    }
    changeTab(type, val) {
        this.currentTab = type;
        let currentOrderData = [];
        if (val == 'acceptedByMerchant') {
            currentOrderData = this.allOrderList.filter((d) => d.status == 'acceptedByMerchant' || d.status == 'invoicerequestByretailer');
        }
        else {
            currentOrderData = this.allOrderList.filter((d) => d.status == val);
        }
        const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["from"])(currentOrderData);
        source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["groupBy"])((person) => person.orderId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["mergeMap"])(group => group
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["reduce"])((acc, cur) => {
            acc.values.push(cur);
            return acc;
        }, { orderId: group.key, values: [] }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["toArray"])()).subscribe(val => {
            this.orderList = val;
        });
    }
    InvoiceSend(data, type, index, j) {
        let selectedProduct = [];
        data.productList.map((d) => {
            selectedProduct.push({ "name": d.name, "quantity": data.cart[d.name.toLowerCase()], "price": d.price });
        });
        if (data.discount == undefined) {
            data.discount = 0;
        }
        const requestData = { "id": data._id, "value": { status: type }, "data": data };
        this.fetch.InvoiceSend(requestData).subscribe(() => {
            this.orderList[j].values[index].status = type;
            sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                title: "Updated successfully.",
                text: "",
                icon: 'success',
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
            this.dasboard.createNewInvoice({ "selectedProducts": selectedProduct, "company": this.profInfo.companyName, "type": "shop", "totalamount": (data.totalamount - data.discount).toString() }).subscribe(res => {
                res["mobilenumber"] = data.senderNumber;
                res['domain'] = this.profInfo.domain;
                res['companyName'] = this.profInfo.companyName;
                res['type'] = 'shop';
                res['totalamount'] = (data.totalamount - data.discount);
                res['shippingAddress'] = data.address;
                this.deliveryService.generateImageNewInvoice(res).subscribe(() => { });
            }, err => {
            });
        });
    }
    applyDiscount(id, index, j) {
        if (this.orderList[j].values[index].totalamount > this.discount && parseInt(this.discount) > 0) {
            this.fetch.updateDiscount({ "id": id, "val": { "discount": parseInt(this.discount) } }).subscribe(() => {
                //this.orderList[j].values[index].totalamount = parseInt(this.orderList[j].values[index].totalamount) - parseInt(this.discount);
                this.orderList[j].values[index]['discount'] = this.discount;
            });
        }
        else {
            sweetalert2_dist_sweetalert2_all_min_js__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                title: "Discount shoud not be greater than total amount",
                text: "",
                icon: 'warning',
                timer: 2000,
                showCancelButton: false,
                showConfirmButton: false,
            });
        }
    }
    updateValue(index, value) {
        //this.orderList[j].values[index].totalamount = this.orderList[j].values[index].totalamount - parseInt(value);
        this.discount = parseInt(value);
    }
    removeProduct(index, key, type, j) {
        if (type) {
            delete this.orderList[j].values[index].list[key];
        }
        else {
            this.orderList[j].values[index].list[key] = this.orderList[j].values[index].productList.filter((data) => data.name.toLowerCase() == key.toLowerCase())[0].price;
        }
        this.orderList[j].values[index].totalamount = 0;
        Object.keys(this.orderList[j].values[index].list).forEach((key, value) => this.orderList[j].values[index].totalamount += (this.orderList[j].values[index].list[key] * this.orderList[j].values[index].cart[key]));
    }
    setFirstCategory(type) {
        this.setClassified = type;
        this.filterProductByCategory();
    }
    setSecondCategory(type, subCategory) {
        this.setClassified = type;
        this.subCategoryClassified = subCategory;
        this.filterProductByCategoryAndSubCategory();
    }
    filterProductByCategory() {
        this.allProduct = JSON.parse(JSON.stringify(this.allProductWithoutCategory.filter((data) => data.doc.category == this.setClassified)));
    }
    filterProductByCategoryAndSubCategory() {
        this.allProduct = JSON.parse(JSON.stringify(this.allProductWithoutCategory.filter((data) => data.doc.category == this.setClassified && data.doc.subcategory == this.subCategoryClassified)));
    }
    addToTopOffer(val) {
        if (val) {
            this.classifiedForm.patchValue({ 'category': 'category1' });
            this.classifiedForm.patchValue({ 'subcategory': 'category1' });
        }
        else {
            this.classifiedForm.patchValue({ 'category': null });
            this.classifiedForm.patchValue({ 'subcategory': null });
        }
    }
    showCurrent(i) {
        this.arialExpand = i;
    }
};
AddproductComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] },
    { type: _shoping_service__WEBPACK_IMPORTED_MODULE_8__["ShopingService"] },
    { type: _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] },
    { type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__["ApiLinkService"] },
    { type: _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_2__["DeliveryService"] },
    { type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
AddproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-addproduct',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addproduct.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shoping/addproduct/addproduct.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addproduct.component.scss */ "./src/app/shoping/addproduct/addproduct.component.scss")).default]
    })
], AddproductComponent);



/***/ }),

/***/ "./src/app/shoping/shoping-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shoping/shoping-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ShoppingAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingAppRoutingModule", function() { return ShoppingAppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addproduct/addproduct.component */ "./src/app/shoping/addproduct/addproduct.component.ts");




const routes = [
    {
        path: "shoping/addshoping",
        component: _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_3__["AddproductComponent"]
    }
];
let ShoppingAppRoutingModule = class ShoppingAppRoutingModule {
};
ShoppingAppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ShoppingAppRoutingModule);



/***/ }),

/***/ "./src/app/shoping/shoping.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shoping/shoping.module.ts ***!
  \*******************************************/
/*! exports provided: ShopingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingModule", function() { return ShopingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addproduct/addproduct.component */ "./src/app/shoping/addproduct/addproduct.component.ts");
/* harmony import */ var _shoping_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shoping-routing.module */ "./src/app/shoping/shoping-routing.module.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");











let ShopingModule = class ShopingModule {
};
ShopingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_8__["AddproductComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__["OwlModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _shoping_routing_module__WEBPACK_IMPORTED_MODULE_9__["ShoppingAppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__["AngularEditorModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot()
        ]
    })
], ShopingModule);



/***/ })

}]);
//# sourceMappingURL=shoping-shoping-module-es2015.js.map