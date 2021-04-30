(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/login-pg/login-pg.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/login-pg/login-pg.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"d-flex justify-content-center align-items-center\">\n\n    <aside>\n      <div class=\"card-header\">\n        <ul class=\"nav nav-tabs card-header-tabs\">\n          <!-- <li class=\"nav-item\" (click)=\"setUser(2)\">\n            <a class=\"nav-link\" [ngClass]=\"logFrm.value.userType === 2 ? 'active': ' disabled'\" href=\"#\">Retailer</a>\n          </li> -->\n\n          <li class=\"nav-item\" (click)=\"setUser(1)\">\n            <a class=\"nav-link\" [ngClass]=\"logFrm.value.userType === 1 ? 'active': ' disabled'\" href=\"#\">Dealer</a>\n          </li>\n        </ul>\n      </div>\n        <div class=\"p-4\">\n\n            <h1>Dealer Login</h1>\n            <div *ngIf=\"logMsg\" class=\"alert\" [ngClass]=\"logMsg.alert\">{{logMsg.msg}}</div>\n            <form [formGroup]=\"logFrm\" (submit)=\"logOn()\">\n                <h4>Mobile No.</h4>\n                <input type=\"text\" formControlName=\"usrName\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"logSubmit && lgFrm.usrName.errors\">\n                    <div *ngIf=\"lgFrm.usrName.errors.required\">Please mention your username</div>\n                </div>\n                <h4>Password</h4>\n                <input type=\"password\" formControlName=\"yrPass\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"logSubmit && lgFrm.yrPass.errors\">\n                    <div *ngIf=\"lgFrm.yrPass.errors.required\">Please mention your password</div>\n                </div>\n                <button type=\"submit\" [disabled]=\"logBtm\">Login</button>\n                <hr />\n                <h3>Not yet register? <a routerLink=\"/register\">Join Now</a></h3>\n            </form>\n        </div>\n    </aside>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/reg-otp/reg-otp.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/reg-otp/reg-otp.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"d-flex justify-content-center align-items-center\">\n    <aside>\n        <div class=\"p-4\">\n            <h1>Verify Your Account</h1>\n            <div *ngIf=\"pgMsg\" class=\"alert\" [ngClass]=\"pgMsg.alert\">{{pgMsg.msg}}</div>\n            <form [formGroup]=\"regFrm\" (submit)=\"verifyOn()\">\n              <h4>OTP</h4>\n              <input type=\"text\" formControlName=\"otp\" />\n              <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.otp.errors\">\n                  <div *ngIf=\"autoFrm.otp.errors.required\">Please mention your username</div>\n              </div>\n              <h4>Language</h4>\n              <select formControlName=\"language\">\n                <option value=\"hindi\">Hindi</option>\n                <option value=\"english\">English</option>\n              </select>\n              <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.language.errors\">\n                  <div *ngIf=\"autoFrm.language.errors.required\">Please mention your Language</div>\n              </div>\n              <h4>Loyalty Point</h4>\n              <!-- <select formControlName=\"loyaltyPoint\">\n                <option value=\"yes\">Yes</option>\n                <option value=\"no\">No</option>\n              </select> -->\n              <label>\n                <input type=\"radio\" value=\"yes\" formControlName=\"loyaltyPoint\"/>\n                  <span>Yes</span>\n              </label>\n              <label>\n                <input type=\"radio\" value=\"no\" formControlName=\"loyaltyPoint\"/>\n                  <span>No</span>\n              </label>\n              <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.loyaltyPoint.errors\">\n                  <div *ngIf=\"autoFrm.loyaltyPoint.errors.required\">Please mention your Loyalty Point</div>\n              </div>\n              <h4>Refund Policy</h4>\n\n              <label>\n                <input type=\"radio\" value=\"yes\" formControlName=\"refundPolicy\"/>\n                  <span>Yes</span>\n              </label>\n              <label>\n                <input type=\"radio\" value=\"no\" formControlName=\"refundPolicy\"/>\n                  <span>No</span>\n              </label>\n              <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.refundPolicy.errors\">\n                  <div *ngIf=\"autoFrm.refundPolicy.errors.required\">Please mention your Refund Policy</div>\n              </div>\n              <h4>Return Policy</h4>\n              <label>\n                <input type=\"radio\" value=\"yes\" formControlName=\"returnPolicy\"/>\n                  <span>Yes</span>\n              </label>\n              <label>\n                <input type=\"radio\" value=\"no\" formControlName=\"returnPolicy\"/>\n                  <span>No</span>\n              </label>\n              <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.returnPolicy.errors\">\n                  <div *ngIf=\"autoFrm.returnPolicy.errors.required\">Please mention your Loyalty Point</div>\n              </div>\n\n              <h4>Credit</h4>\n              <label>\n                <input type=\"radio\" value=\"option\" formControlName=\"credit\"/>\n                  <span>Option</span>\n              </label>\n              <label>\n                <input type=\"radio\" value=\"policy\" formControlName=\"credit\"/>\n                  <span>Policy</span>\n              </label>\n              <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.credit.errors\">\n                  <div *ngIf=\"autoFrm.credit.errors.required\">Please mention your Loyalty Point</div>\n              </div>\n\n              <h4>Dor Delivery</h4>\n              <label>\n                <input type=\"radio\" value=\"yes\" formControlName=\"doorDelivery\"/>\n                  <span>Yes</span>\n              </label>\n              <label>\n                <input type=\"radio\" value=\"no\" formControlName=\"doorDelivery\"/>\n                  <span>No</span>\n              </label>\n              <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.doorDelivery.errors\">\n                  <div *ngIf=\"autoFrm.doorDelivery.errors.required\">Please mention your Loyalty Point</div>\n              </div>\n\n              <h4>shopName</h4>\n              <input type=\"text\" formControlName=\"shopName\" />\n              <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.shopName.errors\">\n                  <div *ngIf=\"autoFrm.shopName.errors.required\">Please mention your shop Name</div>\n              </div>\n\n              <h4>address</h4>\n              <input type=\"text\" formControlName=\"address\" />\n              <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.address.errors\">\n                  <div *ngIf=\"autoFrm.address.errors.required\">Please mention your address</div>\n              </div>\n\n\n              <h4>shopAge</h4>\n              <input type=\"text\" formControlName=\"shopAge\" />\n              <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.shopAge.errors\">\n                  <div *ngIf=\"autoFrm.shopAge.errors.required\">Please mention your shop age</div>\n              </div>\n\n\n              <h4>Shop Type</h4>\n              <input type=\"text\" formControlName=\"shopType\" />\n              <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.shopType.errors\">\n                  <div *ngIf=\"autoFrm.shopType.errors.required\">Please mention your shop type</div>\n              </div>\n\n              <h4>Total Area</h4>\n              <input type=\"text\" formControlName=\"totalArea\" />\n              <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.totalArea.errors\">\n                  <div *ngIf=\"autoFrm.totalArea.errors.required\">Please mention your total area</div>\n              </div>\n              <h4>Description of Shop</h4>\n              <angular-editor [placeholder]=\"'Enter text here...'\" formControlName=\"description\"  [config]=\"editorConfig\"></angular-editor>\n\n              <div class=\"row\">\n                <div class=\"col-12 form-group\">\n                  <label for=\"file-upload\" class=\"custom-file-upload caption\"> Add Image </label>\n                  <input id=\"file-upload\" type=\"file\" (change)=\"uploadClassifiedattachment($event)\" accept=\"image/x-png, image/jpeg\"/>\n                </div>\n                <span style=\"color: #aa0000;\" *ngIf=\"imgURL == 0\">At least one image is required</span>\n            </div>\n            <div class=\"row\"  *ngIf=\"uploadedVideo == ''\">\n              <div class=\"col-12 form-group\">\n                <label for=\"file-upload1\" class=\"custom-file-upload caption\"> Add Video </label>\n                <input id=\"file-upload1\" type=\"file\" (change)=\"uploadClassifiedVideo($event, uploadingFolder)\" accept=\"video/mp4\"/>\n              </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-12 form-group\">\n\n                  <ul class=\"nav mt-2\">\n                    <ng-container  *ngFor=\"let item of imgURL; index as i\">\n                      <li class=\"ml-2\">\n                        <div style=\"position:relative;\">\n                          <button type=\"submit\" class=\"close AClass\"  (click)=\"removeClassified(i)\">\n                            <span>&times;</span>\n                          </button>\n\n                          <img [src]=\"item\" height=\"200\" width=\"200\"/>\n                      </div>\n                      </li>\n\n                    </ng-container>\n                  </ul>\n                </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 form-group\" *ngIf=\"uploadedVideo != ''\">\n                <img src=\"../../../assets/images/videoThumbnail.jpg\" (click)=\"openVideo(playVideo, {'name': uploadedVideo})\" height=\"80px\" width=\"80px\"/>\n                {{uploadedVideo}} <span class=\"close\"    (click)=\"removeVideo(i)\">&times;</span>\n              </div>\n                <div class=\"col-12 mt-2\">\n                  <div class=\"form-group\">\n\n\n\n                  </div>\n                </div>\n            </div>\n              <button type=\"submit\" [disabled]=\"frmBtm\">Verify</button>\n              <hr />\n\n              <h3>Not yet get the code? <a >Resend</a></h3>\n          </form>\n        </div>\n    </aside>\n</section>\n\n\n<ng-template #playVideo>\n  <div class=\"modal-header\">\n\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n          <video width=\"420\" height=\"240\" controls>\n            <source  [src]=\"api.delear+ 'uploads/comunication/'+ setImageName\" type=\"video/mp4\">\n\n          </video>\n\n\n      </div>\n\n    </div>\n\n  </div>\n</ng-template>\n<ng-template #uploadingFolder>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Uploading Image</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"slideshow-container\">\n          <div class=\"mySlides\">\n            <div class=\"progress\">\n              <div class=\"progress-bar\" role=\"progressbar\"  [style.width]=\"imageUploadPercent + '%'\">\n                <span class=\"sr-only\">{{imageUploadPercent}} % Complete</span>\n              </div>\n            </div>\n            <div class=\"card-body sliderBody ml-1\"> {{imageUploadPercent}} % completed </div>\n            </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/register/register.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/register/register.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"d-flex justify-content-center align-items-center\">\n    <aside>\n      <!-- <div class=\"card-header\">\n        <ul class=\"nav nav-tabs card-header-tabs\">\n          <li class=\"nav-item\" (click)=\"setUser(2)\">\n            <a class=\"nav-link\" [ngClass]=\"regFrm.value.userType == 2 ? 'active': ' disabled'\">Retailer</a>\n          </li>\n\n          <li class=\"nav-item\" (click)=\"setUser(1)\">\n            <a class=\"nav-link\" [ngClass]=\"regFrm.value.userType == 1 ? 'active': ' disabled'\">Dealer</a>\n          </li>\n        </ul>\n      </div> -->\n        <div class=\"p-4\">\n            <!-- <h1 *ngIf=\"regFrm.value.userType == 2\">Retailer Register</h1>\n            <h1 *ngIf=\"regFrm.value.userType == 1\">Dealer Register</h1> -->\n            <h1>Register</h1>\n            <div *ngIf=\"regMsg\" class=\"alert\" [ngClass]=\"regMsg.alert\">{{regMsg.msg}}</div>\n            <form [formGroup]=\"regFrm\" (submit)=\"regOn()\">\n                <h4>Mobile</h4>\n                <input type=\"text\" formControlName=\"mobileNo\" pattern=\"^([+][9][1]|[9][1]|[0]){0,1}([6-9]{1})([0-9]{9})$\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.mobileNo.errors\">\n                    <div *ngIf=\"autoFrm.mobileNo.errors.required\">Please mention your mobile number</div>\n                    <div *ngIf=\"autoFrm.mobileNo.errors.pattern\">Please mention a valid mobile number (without +91 and 0)</div>\n                </div>\n                <h4>E-mail</h4>\n                <input type=\"text\" formControlName=\"email\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.email.errors\">\n                    <div *ngIf=\"autoFrm.email.errors.required\">Please mention your email address</div>\n                    <div *ngIf=\"autoFrm.email.errors.email\">Please enter a valid email address</div>\n                </div>\n                <h4>First Name</h4>\n                <input type=\"text\" formControlName=\"fstName\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.fstName.errors\">\n                    <div *ngIf=\"autoFrm.fstName.errors.required\">Please mention your first name</div>\n                </div>\n                <h4>Last Name</h4>\n                <input type=\"text\" formControlName=\"lstName\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.lstName.errors\">\n                    <div *ngIf=\"autoFrm.lstName.errors.required\">Please mention your last name</div>\n                </div>\n                <h4>Domain</h4>\n                <!-- <input type=\"text\" formControlName=\"domain\" /> -->\n                <select formControlName=\"domain\">\n                  <option value=\"\">Select</option>\n                  <option value=\"Medical\">Medical</option>\n                  <option value=\"Garments\">Garments</option>\n                  <option value=\"Footwear\">Footwear</option>\n                  <option value=\"Electronics\">Electronics</option>\n                </select>\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.domain.errors\">\n                    <div *ngIf=\"autoFrm.domain.errors.required\">Please mention your domain name</div>\n                </div>\n                <h4>Company Name</h4>\n                <input type=\"text\" formControlName=\"companyName\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.companyName.errors\">\n                    <div *ngIf=\"autoFrm.companyName.errors.required\">Please mention your company name</div>\n                </div>\n\n                <h4>Password</h4>\n                <input type=\"password\" formControlName=\"yrPass\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.yrPass.errors\">\n                    <div *ngIf=\"autoFrm.yrPass.errors.required\">Please mention your password</div>\n                </div>\n\n                <button type=\"submit\" >Register</button>\n                <hr />\n                <h3>Already registered? <a routerLink=\"\">Login Now</a></h3>\n            </form>\n        </div>\n    </aside>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/shopkeeperprofile/shopkeeperprofile.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/shopkeeperprofile/shopkeeperprofile.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"jumbotron\">\n  <div class=\"row\">\n    <div class=\"col-8\"> <h1>{{profileData.companyName}}</h1>\n      <h5>{{profileData.domain}}</h5></div>\n    <div class=\"col-4 heading\"> <h5>{{profileData.fstName}} {{profileData.lstName}} ({{profileData.mobileNo}})</h5></div>\n  </div>\n\n\n</div>\n<div class=\"container\">\n  <div class=\"cardDetails\">\n    <div class=\"container-fliud\">\n      <div class=\"wrapper row\">\n        <div class=\"preview col-md-12\">\n\n          <div class=\"preview-pic tab-content\">\n            <ng-container  *ngFor=\"let item of profileData.fileName; index as i\">\n                <div [ngClass]=\"{'active': i == setCurrentIndexImage}\" class=\"tab-pane\" id=\"pic-1\" *ngIf=\"item.extension != 'mp4'\">\n                  <img  [src]=\"api.delear+ 'uploads/comunication/'+ item.name\" height=\"500px\" />\n                </div>\n                <div [ngClass]=\"{'active': i == setCurrentIndexImage}\" class=\"tab-pane\" id=\"pic-1\" *ngIf=\"item.extension == 'mp4'\">\n                      <video width=\"420\" height=\"240\" controls>\n                        <source  [src]=\"api.delear+ 'uploads/comunication/'+ item.name\" type=\"video/mp4\"/>\n\n                      </video>\n                </div>\n          </ng-container>\n          </div>\n          <ul class=\"preview-thumbnail nav nav-tabs\">\n            <ng-container  *ngFor=\"let item of profileData.fileName; index as i\">\n              <li [ngClass]=\"{'active': i == setCurrentIndexImage}\"  *ngIf=\"item.extension != 'mp4'\" (click)=\"setCurrentImage(i)\"><a data-target=\"#pic-1\" data-toggle=\"tab\" >\n                  <img  [src]=\"api.delear+ 'uploads/comunication/medium/'+ item.name\" /></a>\n              </li>\n              <li [ngClass]=\"{'active': i == setCurrentIndexImage}\"  *ngIf=\"item.extension == 'mp4'\" (click)=\"setCurrentImage(i)\" ><a data-target=\"#pic-1\" data-toggle=\"tab\" >\n                  <img  src=\"../../../assets/images/videoThumbnail.jpg\" height=\"177\"/></a>\n               </li>\n            </ng-container>\n          </ul>\n\n        </div>\n        <div class=\"details col-md-12\">\n          <p class=\"product-description\" [innerHTML]=\"profileData.description | safeHtml\"></p>\n        </div>\n\n        <div class=\"card-body\">\n          <ul class=\"list-group\">\n\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                <span>Language </span><span class=\"badge badge-danger badge-pill\">{{profileData?.language}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              <span> Loyalty Point</span><span class=\"badge badge-danger badge-pill\">{{profileData?.loyaltyPoint}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            <span> Refund Policy</span><span class=\"badge badge-danger badge-pill\">{{profileData?.refundPolicy}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                <span> Return Policy</span><span class=\"badge badge-danger badge-pill\">{{profileData?.returnPolicy}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                <span>credit </span><span class=\"badge badge-danger badge-pill\">{{profileData?.credit}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              <span> Shop Name</span><span class=\"badge badge-danger badge-pill\">{{profileData?.shopName}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              <span>Address </span><span class=\"badge badge-danger badge-pill\">{{profileData?.address}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              <span>shop Age </span><span class=\"badge badge-danger badge-pill\">{{profileData?.shopAge}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              <span> Shop Type</span><span class=\"badge badge-danger badge-pill\">{{profileData?.shopType}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              <span> Total Area</span><span class=\"badge badge-danger badge-pill\">{{profileData?.totalArea}}</span>\n            </li>\n            <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n              <span> Door Delivery</span><span class=\"badge badge-danger badge-pill\">{{profileData?.doorDelivery}}</span>\n            </li>\n\n\n            </ul>\n            </div>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n");

/***/ }),

/***/ "./src/app/landing/landing-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/landing/landing-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shopkeeperprofile_shopkeeperprofile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopkeeperprofile/shopkeeperprofile.component */ "./src/app/landing/shopkeeperprofile/shopkeeperprofile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_pg_login_pg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-pg/login-pg.component */ "./src/app/landing/login-pg/login-pg.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/landing/register/register.component.ts");
/* harmony import */ var _reg_otp_reg_otp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reg-otp/reg-otp.component */ "./src/app/landing/reg-otp/reg-otp.component.ts");







const routes = [
    {
        path: "",
        component: _login_pg_login_pg_component__WEBPACK_IMPORTED_MODULE_4__["LoginPgComponent"],
        pathMatch: 'full'
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: "OTP/:mobile",
        component: _reg_otp_reg_otp_component__WEBPACK_IMPORTED_MODULE_6__["RegOTPComponent"]
    },
    {
        path: "shopkeeper/:mobile",
        component: _shopkeeperprofile_shopkeeperprofile_component__WEBPACK_IMPORTED_MODULE_1__["ShopkeeperprofileComponent"]
    }
];
let LandingRoutingModule = class LandingRoutingModule {
};
LandingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], LandingRoutingModule);



/***/ }),

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/landing/landing-routing.module.ts");
/* harmony import */ var _login_pg_login_pg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-pg/login-pg.component */ "./src/app/landing/login-pg/login-pg.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/landing/register/register.component.ts");
/* harmony import */ var _reg_otp_reg_otp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reg-otp/reg-otp.component */ "./src/app/landing/reg-otp/reg-otp.component.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm2015/kolkov-angular-editor.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shopkeeperprofile_shopkeeperprofile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shopkeeperprofile/shopkeeperprofile.component */ "./src/app/landing/shopkeeperprofile/shopkeeperprofile.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");












let LandingModule = class LandingModule {
};
LandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_pg_login_pg_component__WEBPACK_IMPORTED_MODULE_5__["LoginPgComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _reg_otp_reg_otp_component__WEBPACK_IMPORTED_MODULE_7__["RegOTPComponent"], _shopkeeperprofile_shopkeeperprofile_component__WEBPACK_IMPORTED_MODULE_10__["ShopkeeperprofileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_4__["LandingRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_8__["AngularEditorModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot()
        ]
    })
], LandingModule);



/***/ }),

/***/ "./src/app/landing/landing.service.ts":
/*!********************************************!*\
  !*** ./src/app/landing/landing.service.ts ***!
  \********************************************/
/*! exports provided: LandingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingService", function() { return LandingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api-link.service */ "./src/app/shared/api-link.service.ts");




let LandingService = class LandingService {
    constructor(http, api) {
        this.http = http;
        this.api = api;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json"
        });
    }
    logUsr(data) {
        return this.http.post(this.api.server + "login", data, { headers: this.headers });
    }
    regUsr(data) {
        return this.http.post(this.api.server + "register", data, { headers: this.headers });
    }
    usrVerify(data) {
        return this.http.post(this.api.server + "verify", data, { headers: this.headers });
    }
};
LandingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__["ApiLinkService"] }
];
LandingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LandingService);



/***/ }),

/***/ "./src/app/landing/login-pg/login-pg.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/landing/login-pg/login-pg.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  width: 100%;\n  height: 100vh;\n}\n\nsection aside {\n  width: 420px;\n  max-width: 98%;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px 0 #999999;\n  text-align: center;\n}\n\nsection aside h1 {\n  font-size: 25px;\n}\n\nsection aside h4 {\n  text-align: left;\n  font-size: 13px;\n  font-weight: bold;\n  margin-top: 8px;\n  margin-bottom: 2px;\n}\n\nsection aside h3 {\n  font-size: 16px;\n}\n\nsection aside h3 a {\n  color: #aa0000;\n  text-decoration: none;\n}\n\nsection aside h3 a:hover {\n  text-decoration: underline;\n}\n\ninput[type=text],\ninput[type=password], select {\n  width: 100%;\n  border: #ccc solid thin;\n  padding: 5px 8px;\n  font-size: 15px;\n  border-radius: 5px;\n}\n\nbutton[type=submit] {\n  width: 100%;\n  border: none;\n  margin-top: 15px;\n  padding: 5px 0;\n  color: #fff;\n  background-color: #AA0000;\n  border-radius: 5px;\n}\n\n.nav-item {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sb2dpbi1wZy9DOlxcVXNlcnNcXEFiaGlzaGVrLlNheGVuYTFcXERlc2t0b3BcXHByYWthc2hcXHNob2VkZWxpdmVyeUZyb250RW5kL3NyY1xcYXBwXFxsYW5kaW5nXFxsb2dpbi1wZ1xcbG9naW4tcGcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvbG9naW4tcGcvbG9naW4tcGcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEsK0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREdBO0VBQTJCLDBCQUFBO0FDQzNCOztBRENBOztFQUVJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDRSxlQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xvZ2luLXBnL2xvZ2luLXBnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuc2VjdGlvbiBhc2lkZSB7XG4gICAgd2lkdGg6IDQyMHB4O1xuICAgIG1heC13aWR0aDogOTglO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgIzk5OTk5OTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5zZWN0aW9uIGFzaWRlIGgxIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhIHtcbiAgICBjb2xvcjogI2FhMDAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDMgYTpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm5hdi1pdGVtICB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsInNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuc2VjdGlvbiBhc2lkZSB7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LXdpZHRoOiA5OCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDEge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhIHtcbiAgY29sb3I6ICNhYTAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogI2NjYyBzb2xpZCB0aGluO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubmF2LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/landing/login-pg/login-pg.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing/login-pg/login-pg.component.ts ***!
  \********************************************************/
/*! exports provided: LoginPgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPgComponent", function() { return LoginPgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../guard/auth.service */ "./src/app/guard/auth.service.ts");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../landing.service */ "./src/app/landing/landing.service.ts");






let LoginPgComponent = class LoginPgComponent {
    constructor(formBuilder, route, auth, fetch) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.auth = auth;
        this.fetch = fetch;
        this.logSubmit = false;
        this.logBtm = false;
    }
    ngOnInit() {
        this.logFrm = this.formBuilder.group({
            usrName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            yrPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.logFrm.patchValue({ "userType": 1 });
        const user = parseInt(localStorage.getItem("userType"));
        console.log(user);
        if (this.auth.isLoggedIn()) {
            if (user == 2) {
                this.route.navigate(['/dashboard']);
            }
            else {
                this.route.navigate(['/dealer/dashboard']);
            }
        }
    }
    get lgFrm() { return this.logFrm.controls; }
    logOn() {
        this.logSubmit = true;
        this.logBtm = true;
        if (this.logFrm.invalid) {
            this.logBtm = false;
            return;
        }
        else {
            let formObj = this.logFrm.getRawValue();
            this.fetch.logUsr(formObj).subscribe(res => {
                console.log(res);
                const data = res;
                this.auth.sendToken(data.token, data.usrName, data.companyName, data.domainNme, this.logFrm.value.userType);
                this.logMsg = { msg: "Login successfully!", alert: 'alert-success' };
                this.logBtm = false;
                setTimeout(() => {
                    if (parseInt(this.logFrm.value.userType) === 1) {
                        this.route.navigate(["/dealer/dashboard"]);
                        this.logFrm.reset();
                    }
                    else {
                        this.route.navigate(["/dashboard"]);
                        this.logFrm.reset();
                    }
                }, 1500);
            }, err => {
                this.logBtm = false;
                this.logMsg = { msg: err.error, alert: 'alert-danger' };
            });
        }
        this.logSubmit = false;
        setTimeout(() => {
            this.logMsg = null;
        }, 3500);
    }
    setUser(type) {
        this.logFrm.patchValue({ "userType": type });
    }
};
LoginPgComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _landing_service__WEBPACK_IMPORTED_MODULE_5__["LandingService"] }
];
LoginPgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-pg',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-pg.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/login-pg/login-pg.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-pg.component.scss */ "./src/app/landing/login-pg/login-pg.component.scss")).default]
    })
], LoginPgComponent);

// css for the icoon to covert into triangle


/***/ }),

/***/ "./src/app/landing/reg-otp/reg-otp.component.scss":
/*!********************************************************!*\
  !*** ./src/app/landing/reg-otp/reg-otp.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  width: 100%;\n  height: auto;\n}\n\nsection aside {\n  width: 70%;\n  max-width: 98%;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px 0 #999999;\n  text-align: center;\n}\n\nsection aside h1 {\n  font-size: 25px;\n}\n\nsection aside h4 {\n  text-align: left;\n  font-size: 13px;\n  font-weight: bold;\n  margin-top: 8px;\n  margin-bottom: 2px;\n}\n\nsection aside h3 {\n  font-size: 16px;\n}\n\nsection aside h3 a {\n  color: #aa0000;\n  text-decoration: none;\n}\n\nsection aside h3 a:hover {\n  text-decoration: underline;\n}\n\ninput[type=text],\ninput[type=password] {\n  width: 100%;\n  border: #ccc solid thin;\n  padding: 5px 8px;\n  font-size: 15px;\n  border-radius: 5px;\n}\n\nbutton[type=submit] {\n  width: 100%;\n  border: none;\n  margin-top: 15px;\n  padding: 5px 0;\n  color: #fff;\n  background-color: #AA0000;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9yZWctb3RwL0M6XFxVc2Vyc1xcQWJoaXNoZWsuU2F4ZW5hMVxcRGVza3RvcFxccHJha2FzaFxcc2hvZWRlbGl2ZXJ5RnJvbnRFbmQvc3JjXFxhcHBcXGxhbmRpbmdcXHJlZy1vdHBcXHJlZy1vdHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvcmVnLW90cC9yZWctb3RwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLCtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUEyQiwwQkFBQTtBQ0MzQjs7QURDQTs7RUFFSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9yZWctb3RwL3JlZy1vdHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbnNlY3Rpb24gYXNpZGUge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWF4LXdpZHRoOiA5OCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwICM5OTk5OTk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbnNlY3Rpb24gYXNpZGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoNCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zZWN0aW9uIGFzaWRlIGgzIGEge1xuICAgIGNvbG9yOiAjYWEwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuIiwic2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbnNlY3Rpb24gYXNpZGUge1xuICB3aWR0aDogNzAlO1xuICBtYXgtd2lkdGg6IDk4JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwICM5OTk5OTk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwICM5OTk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMSB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoNCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG5zZWN0aW9uIGFzaWRlIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zZWN0aW9uIGFzaWRlIGgzIGEge1xuICBjb2xvcjogI2FhMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5zZWN0aW9uIGFzaWRlIGgzIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogI2NjYyBzb2xpZCB0aGluO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/landing/reg-otp/reg-otp.component.ts":
/*!******************************************************!*\
  !*** ./src/app/landing/reg-otp/reg-otp.component.ts ***!
  \******************************************************/
/*! exports provided: RegOTPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegOTPComponent", function() { return RegOTPComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shoping_shoping_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shoping/shoping.service */ "./src/app/shoping/shoping.service.ts");
/* harmony import */ var _shared_api_link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/api-link.service */ "./src/app/shared/api-link.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../landing.service */ "./src/app/landing/landing.service.ts");








let RegOTPComponent = class RegOTPComponent {
    constructor(formBuilder, api, shop, route, aRoute, fetch, modalService) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.shop = shop;
        this.route = route;
        this.aRoute = aRoute;
        this.fetch = fetch;
        this.modalService = modalService;
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
        this.frmSubmit = false;
        this.frmBtm = false;
        this.imgURL = [];
        this.uFrm = new FormData();
        this.selectedFile = "";
        this.fileNames = [];
        this.imagePath = "";
        this.uploadedVideo = "";
        this.setImageName = "";
        this.uFrmvideo = new FormData();
        this.imageUploadPercent = 0;
    }
    ngOnInit() {
        this.regFrm = this.formBuilder.group({
            regMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            language: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            loyaltyPoint: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            refundPolicy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            returnPolicy: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            credit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            shopName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            shopAge: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            shopType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            totalArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            doorDelivery: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.aRoute.params.subscribe(param => {
            this.mobileNo = param['mobile'];
            this.regFrm.patchValue({
                regMobile: this.mobileNo,
            });
        });
    }
    get autoFrm() { return this.regFrm.controls; }
    verifyOn() {
        this.frmSubmit = true;
        this.frmBtm = true;
        console.log(this.regFrm.value);
        if (this.regFrm.invalid) {
            this.frmBtm = false;
            return;
        }
        else {
            let formObj = this.regFrm.getRawValue();
            formObj['fileName'] = this.fileNames;
            this.fetch.usrVerify(formObj).subscribe(res => {
                this.regFrm.reset();
                this.pgMsg = { msg: res, alert: "alert-success" };
                this.shop.uploadclassifiedImage(this.uFrm).subscribe(() => {
                    this.uFrm = new FormData();
                    this.imgURL = [];
                    this.uploadedVideo = "";
                    setTimeout(() => {
                        this.route.navigate(['/']);
                    }, 3500);
                });
            }, err => { this.pgMsg = { msg: err.error, alert: "alert-danger" }; });
            this.frmSubmit = false;
            this.frmBtm = false;
            setTimeout(() => {
                this.pgMsg = null;
            }, 3500);
        }
    }
    uploadClassifiedattachment(event) {
        console.log(event.target);
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
            console.log(this.fileNames);
            var reader = new FileReader();
            this.imagePath = event.target.files[i];
            reader.readAsDataURL(event.target.files[i]);
            reader.onload = (_event) => {
                this.imgURL.push(reader.result);
            };
        }
    }
    openVideo(template, data) {
        this.modalRef = this.modalService.show(template);
        console.log(data);
        this.setImageName = data.name;
    }
    removeVideo() {
        const index = this.fileNames.findIndex((data) => data.extension == 'mp4');
        this.fileNames.splice(index, 1);
        this.uploadedVideo = "";
    }
    uploadClassifiedVideo(event, template) {
        console.log(event.target);
        this.modalRef = this.modalService.show(template);
        for (let i = 0; i < event.target.files.length; i++) {
            const fileName = event.target.files[i].name.split('.');
            let fName = fileName[0].toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
            this.selectedFile = fName + "-" + Date.now().toString() + '.' + fileName[fileName.length - 1];
            this.fileNames.push({ "name": this.selectedFile, "extension": event.target.files[i].name.split('.').pop() });
            this.uFrmvideo.append('forumPhoto', event.target.files[i], this.selectedFile);
            this.uploadedVideo = this.selectedFile;
        }
        this.shop.uploadImg(this.uFrmvideo).subscribe((imageData) => {
            this.imageUploadPercent = (((imageData.loaded) / imageData.total) * 100).toFixed(2);
            if ((imageData.loaded != undefined) && (imageData.loaded == imageData.total)) {
                this.modalRef.hide();
                this.uFrmvideo = new FormData();
                this.uploadedVideo = this.selectedFile;
                // swal.fire({
                //   title: "Uploaded successfully.",
                //   text: "",
                //   icon: 'success',
                //   timer: 2000,
                //   showCancelButton: false,
                //   showConfirmButton: false,
                // });
            }
            else {
            }
        });
    }
};
RegOTPComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_2__["ApiLinkService"] },
    { type: _shoping_shoping_service__WEBPACK_IMPORTED_MODULE_1__["ShopingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _landing_service__WEBPACK_IMPORTED_MODULE_7__["LandingService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }
];
RegOTPComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reg-otp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reg-otp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/reg-otp/reg-otp.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reg-otp.component.scss */ "./src/app/landing/reg-otp/reg-otp.component.scss")).default]
    })
], RegOTPComponent);



/***/ }),

/***/ "./src/app/landing/register/register.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/landing/register/register.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  width: 100%;\n  height: 100vh;\n}\n\nsection aside {\n  width: 420px;\n  max-width: 98%;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px 0 #999999;\n  text-align: center;\n}\n\nsection aside h1 {\n  font-size: 25px;\n}\n\nsection aside h4 {\n  text-align: left;\n  font-size: 13px;\n  font-weight: bold;\n  margin-top: 8px;\n  margin-bottom: 2px;\n}\n\nsection aside h3 {\n  font-size: 16px;\n}\n\nsection aside h3 a {\n  color: #aa0000;\n  text-decoration: none;\n}\n\nsection aside h3 a:hover {\n  text-decoration: underline;\n}\n\ninput[type=text],\ninput[type=password], select {\n  width: 100%;\n  border: #ccc solid thin;\n  padding: 5px 8px;\n  font-size: 15px;\n  border-radius: 5px;\n}\n\nbutton[type=submit] {\n  width: 100%;\n  border: none;\n  margin-top: 15px;\n  padding: 5px 0;\n  color: #fff;\n  background-color: #AA0000;\n  border-radius: 5px;\n}\n\n.nav-item {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9yZWdpc3Rlci9DOlxcVXNlcnNcXEFiaGlzaGVrLlNheGVuYTFcXERlc2t0b3BcXHByYWthc2hcXHNob2VkZWxpdmVyeUZyb250RW5kL3NyY1xcYXBwXFxsYW5kaW5nXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEsK0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREdBO0VBQTJCLDBCQUFBO0FDQzNCOztBRENBOztFQUVJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDRSxlQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuc2VjdGlvbiBhc2lkZSB7XG4gICAgd2lkdGg6IDQyMHB4O1xuICAgIG1heC13aWR0aDogOTglO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgIzk5OTk5OTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG5zZWN0aW9uIGFzaWRlIGgxIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhIHtcbiAgICBjb2xvcjogI2FhMDAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDMgYTpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm5hdi1pdGVtICB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsInNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuc2VjdGlvbiBhc2lkZSB7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LXdpZHRoOiA5OCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDEge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhIHtcbiAgY29sb3I6ICNhYTAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSwgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogI2NjYyBzb2xpZCB0aGluO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubmF2LWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/landing/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../guard/auth.service */ "./src/app/guard/auth.service.ts");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../landing.service */ "./src/app/landing/landing.service.ts");






let RegisterComponent = class RegisterComponent {
    constructor(formBuilder, route, fetch, auth) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.fetch = fetch;
        this.auth = auth;
        this.regSubmit = false;
        this.regBtm = false;
    }
    ngOnInit() {
        this.regFrm = this.formBuilder.group({
            mobileNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            fstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            yrPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            companyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            domain: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.regFrm.patchValue({ "userType": 2 });
        if (this.auth.isLoggedIn())
            this.route.navigate(['/dashboard']);
    }
    get autoFrm() { return this.regFrm.controls; }
    regOn() {
        this.regSubmit = true;
        this.regBtm = true;
        if (this.regFrm.invalid) {
            this.regBtm = false;
            return;
        }
        else {
            let formObj = this.regFrm.getRawValue();
            this.fetch.regUsr(formObj).subscribe(res => {
                this.regFrm.reset();
                this.regBtm = false;
                this.regMsg = { msg: res, alert: "alert-success" };
                setTimeout(() => {
                    this.route.navigate(['/OTP/' + formObj.mobileNo]);
                }, 3500);
            }, err => { this.regMsg = { msg: err.error, alert: "alert-danger" }; });
            this.regSubmit = false;
            setTimeout(() => {
                this.regMsg = null;
            }, 3500);
        }
    }
    setUser(type) {
        this.regFrm.patchValue({ "userType": type });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _landing_service__WEBPACK_IMPORTED_MODULE_5__["LandingService"] },
    { type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/landing/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/landing/shopkeeperprofile/shopkeeperprofile.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/landing/shopkeeperprofile/shopkeeperprofile.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".preview {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n\n@media screen and (max-width: 996px) {\n  .preview {\n    margin-bottom: 20px;\n    text-align: center;\n  }\n}\n\n.preview-pic {\n  flex-grow: 1;\n}\n\n.preview-thumbnail.nav-tabs {\n  border: none;\n  margin-top: 15px;\n}\n\n.preview-thumbnail.nav-tabs li {\n  width: 18%;\n  margin-right: 2.5%;\n}\n\n.preview-thumbnail.nav-tabs li img {\n  max-width: 100%;\n  display: block;\n  height: 177px !important;\n}\n\n.preview-thumbnail.nav-tabs li a {\n  padding: 0;\n  margin: 0;\n}\n\n.preview-thumbnail.nav-tabs li:last-of-type {\n  margin-right: 0;\n}\n\n.badge {\n  text-transform: capitalize;\n}\n\n.jumbotron {\n  background-color: #f8f9fa !important;\n  height: 170px !important;\n}\n\n.heading {\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9zaG9wa2VlcGVycHJvZmlsZS9DOlxcVXNlcnNcXEFiaGlzaGVrLlNheGVuYTFcXERlc2t0b3BcXHByYWthc2hcXHNob2VkZWxpdmVyeUZyb250RW5kL3NyY1xcYXBwXFxsYW5kaW5nXFxzaG9wa2VlcGVycHJvZmlsZVxcc2hvcGtlZXBlcnByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvc2hvcGtlZXBlcnByb2ZpbGUvc2hvcGtlZXBlcnByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJRSxhQUFBO0VBS1Esc0JBQUE7RUFDUixrQkFBQTtBQ0NGOztBRENFO0VBQ0U7SUFDRSxtQkFBQTtJQUNGLGtCQUFBO0VDRUY7QUFDRjs7QUREQTtFQUlVLFlBQUE7QUNHVjs7QUREQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0lGOztBREhFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FDTUo7O0FETEk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FDUU47O0FETkk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ1NOOztBRFJJO0VBQ0UsZUFBQTtBQ1dOOztBRFRNO0VBQ0UsMEJBQUE7QUNZUjs7QURUTTtFQUNFLG9DQUFBO0VBQ0Esd0JBQUE7QUNZUjs7QURWTTtFQUNFLDBCQUFBO0FDYVIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL3Nob3BrZWVwZXJwcm9maWxlL3Nob3BrZWVwZXJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZXZpZXcge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTZweCkge1xyXG4gICAgLnByZXZpZXcge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO30gfVxyXG5cclxuLnByZXZpZXctcGljIHtcclxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xyXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgICAgICAgIGZsZXgtZ3JvdzogMTsgfVxyXG5cclxuLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDsgfVxyXG4gIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSB7XHJcbiAgICB3aWR0aDogMTglO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyLjUlOyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGkgaW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OiAxNzdweCAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSBhIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAwOyB9XHJcbiAgICAucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMgbGk6bGFzdC1vZi10eXBlIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XHJcblxyXG4gICAgICAuYmFkZ2Uge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuanVtYm90cm9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmOGY5ZmEgICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxNzBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkaW5nIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgfVxyXG4iLCIucHJldmlldyB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTZweCkge1xuICAucHJldmlldyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5wcmV2aWV3LXBpYyB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ucHJldmlldy10aHVtYm5haWwubmF2LXRhYnMge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaSB7XG4gIHdpZHRoOiAxOCU7XG4gIG1hcmdpbi1yaWdodDogMi41JTtcbn1cblxuLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTc3cHggIWltcG9ydGFudDtcbn1cblxuLnByZXZpZXctdGh1bWJuYWlsLm5hdi10YWJzIGxpIGEge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5wcmV2aWV3LXRodW1ibmFpbC5uYXYtdGFicyBsaTpsYXN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5iYWRnZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE3MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkaW5nIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */");

/***/ }),

/***/ "./src/app/landing/shopkeeperprofile/shopkeeperprofile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/landing/shopkeeperprofile/shopkeeperprofile.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShopkeeperprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopkeeperprofileComponent", function() { return ShopkeeperprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_link_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/api-link.service */ "./src/app/shared/api-link.service.ts");
/* harmony import */ var _shoping_shoping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shoping/shoping.service */ "./src/app/shoping/shoping.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let ShopkeeperprofileComponent = class ShopkeeperprofileComponent {
    constructor(aRoute, shop, api) {
        this.aRoute = aRoute;
        this.shop = shop;
        this.api = api;
        this.profileData = {};
        this.setCurrentIndexImage = 0;
    }
    ngOnInit() {
        this.aRoute.params.subscribe(param => {
            this.shop.getSopkeeperInfo({ "mobileNo": param['mobile'] }).subscribe((data) => {
                this.profileData = data;
            });
        });
    }
    setCurrentImage(index) {
        this.setCurrentIndexImage = index;
    }
};
ShopkeeperprofileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _shoping_shoping_service__WEBPACK_IMPORTED_MODULE_2__["ShopingService"] },
    { type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_1__["ApiLinkService"] }
];
ShopkeeperprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-shopkeeperprofile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopkeeperprofile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/shopkeeperprofile/shopkeeperprofile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopkeeperprofile.component.scss */ "./src/app/landing/shopkeeperprofile/shopkeeperprofile.component.scss")).default]
    })
], ShopkeeperprofileComponent);



/***/ })

}]);
//# sourceMappingURL=landing-landing-module-es2015.js.map