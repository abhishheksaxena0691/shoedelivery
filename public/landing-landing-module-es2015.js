(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/login-pg/login-pg.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/login-pg/login-pg.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"d-flex justify-content-center align-items-center\">\n    <aside>\n        <div class=\"p-4\">\n            <h1>Retailer Login</h1>\n            <div *ngIf=\"logMsg\" class=\"alert\" [ngClass]=\"logMsg.alert\">{{logMsg.msg}}</div>\n            <form [formGroup]=\"logFrm\" (submit)=\"logOn()\">\n                <h4>Mobile No.</h4>\n                <input type=\"text\" formControlName=\"usrName\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"logSubmit && lgFrm.usrName.errors\">\n                    <div *ngIf=\"lgFrm.usrName.errors.required\">Please mention your username</div>\n                </div>\n                <h4>Password</h4>\n                <input type=\"password\" formControlName=\"yrPass\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"logSubmit && lgFrm.yrPass.errors\">\n                    <div *ngIf=\"lgFrm.yrPass.errors.required\">Please mention your password</div>\n                </div>\n                <button type=\"submit\" [disabled]=\"logBtm\">Login</button>\n                <hr />\n                <h3>Not yet register? <a routerLink=\"/register\">Join Now</a></h3>\n            </form>\n        </div>\n    </aside>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/reg-otp/reg-otp.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/reg-otp/reg-otp.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"d-flex justify-content-center align-items-center\">\n    <aside>\n        <div class=\"p-4\">\n            <h1>Verify Your Account</h1>\n            <div *ngIf=\"pgMsg\" class=\"alert\" [ngClass]=\"pgMsg.alert\">{{pgMsg.msg}}</div>\n            <form [formGroup]=\"regFrm\" (submit)=\"verifyOn()\">\n                <h4>OTP</h4>\n                <input type=\"text\" formControlName=\"otp\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"frmSubmit && autoFrm.otp.errors\">\n                    <div *ngIf=\"autoFrm.otp.errors.required\">Please mention your username</div>\n                </div>\n                \n                <button type=\"submit\" [disabled]=\"frmBtm\">Verify</button>\n                <hr />\n                <h3>Not yet get the code? <a >Resend</a></h3>\n            </form>\n        </div>\n    </aside>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/register/register.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/register/register.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"d-flex justify-content-center align-items-center\">\n    <aside>\n        <div class=\"p-4\">\n            <h1>Retailer Register</h1>\n            <div *ngIf=\"regMsg\" class=\"alert\" [ngClass]=\"regMsg.alert\">{{regMsg.msg}}</div>\n            <form [formGroup]=\"regFrm\" (submit)=\"regOn()\">\n                <h4>Mobile</h4>\n                <input type=\"text\" formControlName=\"mobileNo\" pattern=\"^([+][9][1]|[9][1]|[0]){0,1}([6-9]{1})([0-9]{9})$\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.mobileNo.errors\">\n                    <div *ngIf=\"autoFrm.mobileNo.errors.required\">Please mention your mobile number</div>\n                    <div *ngIf=\"autoFrm.mobileNo.errors.pattern\">Please mention a valid mobile number (without +91 and 0)</div>\n                </div>\n                <h4>E-mail</h4>\n                <input type=\"text\" formControlName=\"email\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.email.errors\">\n                    <div *ngIf=\"autoFrm.email.errors.required\">Please mention your email address</div>\n                    <div *ngIf=\"autoFrm.email.errors.email\">Please enter a valid email address</div>\n                </div>\n                <h4>First Name</h4>\n                <input type=\"text\" formControlName=\"fstName\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.fstName.errors\">\n                    <div *ngIf=\"autoFrm.fstName.errors.required\">Please mention your first name</div>\n                </div>\n                <h4>Last Name</h4>\n                <input type=\"text\" formControlName=\"lstName\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.lstName.errors\">\n                    <div *ngIf=\"autoFrm.lstName.errors.required\">Please mention your last name</div>\n                </div>\n                <h4>Password</h4>\n                <input type=\"password\" formControlName=\"yrPass\" />\n                <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"regSubmit && autoFrm.yrPass.errors\">\n                    <div *ngIf=\"autoFrm.yrPass.errors.required\">Please mention your password</div>\n                </div>\n                <button type=\"submit\" [disabled]=\"regBtm\">Register</button>\n                <hr />\n                <h3>Already registered? <a routerLink=\"\">Login Now</a></h3>\n            </form>\n        </div>\n    </aside>\n</section>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_pg_login_pg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-pg/login-pg.component */ "./src/app/landing/login-pg/login-pg.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/landing/register/register.component.ts");
/* harmony import */ var _reg_otp_reg_otp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reg-otp/reg-otp.component */ "./src/app/landing/reg-otp/reg-otp.component.ts");






const routes = [
    {
        path: "",
        component: _login_pg_login_pg_component__WEBPACK_IMPORTED_MODULE_3__["LoginPgComponent"],
        pathMatch: 'full'
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: "OTP/:mobile",
        component: _reg_otp_reg_otp_component__WEBPACK_IMPORTED_MODULE_5__["RegOTPComponent"]
    }
];
let LandingRoutingModule = class LandingRoutingModule {
};
LandingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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








let LandingModule = class LandingModule {
};
LandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_pg_login_pg_component__WEBPACK_IMPORTED_MODULE_5__["LoginPgComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _reg_otp_reg_otp_component__WEBPACK_IMPORTED_MODULE_7__["RegOTPComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_4__["LandingRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
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
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  width: 100%;\n  height: 100vh;\n}\n\nsection aside {\n  width: 420px;\n  max-width: 98%;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px 0 #999999;\n  text-align: center;\n}\n\nsection aside h1 {\n  font-size: 25px;\n}\n\nsection aside h4 {\n  text-align: left;\n  font-size: 13px;\n  font-weight: bold;\n  margin-top: 8px;\n  margin-bottom: 2px;\n}\n\nsection aside h3 {\n  font-size: 16px;\n}\n\nsection aside h3 a {\n  color: #aa0000;\n  text-decoration: none;\n}\n\nsection aside h3 a:hover {\n  text-decoration: underline;\n}\n\ninput[type=text],\ninput[type=password] {\n  width: 100%;\n  border: #ccc solid thin;\n  padding: 5px 8px;\n  font-size: 15px;\n  border-radius: 5px;\n}\n\nbutton[type=submit] {\n  width: 100%;\n  border: none;\n  margin-top: 15px;\n  padding: 5px 0;\n  color: #fff;\n  background-color: #AA0000;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyaWQvV29ya3MvQW5ndWxhci90cmF2ZXZpc2FsZ3VydS9TaG9lIERlbGl2ZXJ5IFNlcnZpY2Uvc2hvZVJldGFpbGVyL3NyYy9hcHAvbGFuZGluZy9sb2dpbi1wZy9sb2dpbi1wZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy9sb2dpbi1wZy9sb2dpbi1wZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0E7RUFBMkIsMEJBQUE7QUNDM0I7O0FEQ0E7O0VBRUksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbG9naW4tcGcvbG9naW4tcGcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5zZWN0aW9uIGFzaWRlIHtcbiAgICB3aWR0aDogNDIwcHg7XG4gICAgbWF4LXdpZHRoOiA5OCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwICM5OTk5OTk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbnNlY3Rpb24gYXNpZGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoNCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zZWN0aW9uIGFzaWRlIGgzIGEge1xuICAgIGNvbG9yOiAjYWEwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSIsInNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuc2VjdGlvbiBhc2lkZSB7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LXdpZHRoOiA5OCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDEge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhIHtcbiAgY29sb3I6ICNhYTAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

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
            yrPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (this.auth.isLoggedIn())
            this.route.navigate(['/dashboard']);
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
                const data = res;
                this.auth.sendToken(data.token, data.usrName);
                this.logMsg = { msg: "Login successfully!", alert: 'alert-success' };
                this.logFrm.reset();
                this.logBtm = false;
                setTimeout(() => {
                    this.route.navigate(["/dashboard"]);
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



/***/ }),

/***/ "./src/app/landing/reg-otp/reg-otp.component.scss":
/*!********************************************************!*\
  !*** ./src/app/landing/reg-otp/reg-otp.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  width: 100%;\n  height: 100vh;\n}\n\nsection aside {\n  width: 420px;\n  max-width: 98%;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px 0 #999999;\n  text-align: center;\n}\n\nsection aside h1 {\n  font-size: 25px;\n}\n\nsection aside h4 {\n  text-align: left;\n  font-size: 13px;\n  font-weight: bold;\n  margin-top: 8px;\n  margin-bottom: 2px;\n}\n\nsection aside h3 {\n  font-size: 16px;\n}\n\nsection aside h3 a {\n  color: #aa0000;\n  text-decoration: none;\n}\n\nsection aside h3 a:hover {\n  text-decoration: underline;\n}\n\ninput[type=text],\ninput[type=password] {\n  width: 100%;\n  border: #ccc solid thin;\n  padding: 5px 8px;\n  font-size: 15px;\n  border-radius: 5px;\n}\n\nbutton[type=submit] {\n  width: 100%;\n  border: none;\n  margin-top: 15px;\n  padding: 5px 0;\n  color: #fff;\n  background-color: #AA0000;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyaWQvV29ya3MvQW5ndWxhci90cmF2ZXZpc2FsZ3VydS9TaG9lIERlbGl2ZXJ5IFNlcnZpY2Uvc2hvZVJldGFpbGVyL3NyYy9hcHAvbGFuZGluZy9yZWctb3RwL3JlZy1vdHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvcmVnLW90cC9yZWctb3RwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUVBLCtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHQTtFQUEyQiwwQkFBQTtBQ0MzQjs7QURDQTs7RUFFSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9yZWctb3RwL3JlZy1vdHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5zZWN0aW9uIGFzaWRlIHtcbiAgICB3aWR0aDogNDIwcHg7XG4gICAgbWF4LXdpZHRoOiA5OCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwICM5OTk5OTk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbnNlY3Rpb24gYXNpZGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoNCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zZWN0aW9uIGFzaWRlIGgzIGEge1xuICAgIGNvbG9yOiAjYWEwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSIsInNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuc2VjdGlvbiBhc2lkZSB7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LXdpZHRoOiA5OCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDEge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhIHtcbiAgY29sb3I6ICNhYTAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../landing.service */ "./src/app/landing/landing.service.ts");





let RegOTPComponent = class RegOTPComponent {
    constructor(formBuilder, route, aRoute, fetch) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.aRoute = aRoute;
        this.fetch = fetch;
        this.frmSubmit = false;
        this.frmBtm = false;
    }
    ngOnInit() {
        this.regFrm = this.formBuilder.group({
            regMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
        if (this.regFrm.invalid) {
            this.frmBtm = false;
            return;
        }
        else {
            let formObj = this.regFrm.getRawValue();
            this.fetch.usrVerify(formObj).subscribe(res => {
                this.regFrm.reset();
                this.pgMsg = { msg: res, alert: "alert-success" };
                setTimeout(() => {
                    this.route.navigate(['/']);
                }, 3500);
            }, err => { this.pgMsg = { msg: err.error, alert: "alert-danger" }; });
            this.frmSubmit = false;
            this.frmBtm = false;
            setTimeout(() => {
                this.pgMsg = null;
            }, 3500);
        }
    }
};
RegOTPComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _landing_service__WEBPACK_IMPORTED_MODULE_4__["LandingService"] }
];
RegOTPComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  width: 100%;\n  height: 100vh;\n}\n\nsection aside {\n  width: 420px;\n  max-width: 98%;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px 0 #999999;\n  text-align: center;\n}\n\nsection aside h1 {\n  font-size: 25px;\n}\n\nsection aside h4 {\n  text-align: left;\n  font-size: 13px;\n  font-weight: bold;\n  margin-top: 8px;\n  margin-bottom: 2px;\n}\n\nsection aside h3 {\n  font-size: 16px;\n}\n\nsection aside h3 a {\n  color: #aa0000;\n  text-decoration: none;\n}\n\nsection aside h3 a:hover {\n  text-decoration: underline;\n}\n\ninput[type=text],\ninput[type=password] {\n  width: 100%;\n  border: #ccc solid thin;\n  padding: 5px 8px;\n  font-size: 15px;\n  border-radius: 5px;\n}\n\nbutton[type=submit] {\n  width: 100%;\n  border: none;\n  margin-top: 15px;\n  padding: 5px 0;\n  color: #fff;\n  background-color: #AA0000;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyaWQvV29ya3MvQW5ndWxhci90cmF2ZXZpc2FsZ3VydS9TaG9lIERlbGl2ZXJ5IFNlcnZpY2Uvc2hvZVJldGFpbGVyL3NyYy9hcHAvbGFuZGluZy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFFQSwrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0E7RUFBMkIsMEJBQUE7QUNDM0I7O0FEQ0E7O0VBRUksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5zZWN0aW9uIGFzaWRlIHtcbiAgICB3aWR0aDogNDIwcHg7XG4gICAgbWF4LXdpZHRoOiA5OCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwICM5OTk5OTk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbnNlY3Rpb24gYXNpZGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoNCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zZWN0aW9uIGFzaWRlIGgzIGEge1xuICAgIGNvbG9yOiAjYWEwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhOmhvdmVyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSIsInNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuc2VjdGlvbiBhc2lkZSB7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWF4LXdpZHRoOiA5OCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCAjOTk5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDEge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbnNlY3Rpb24gYXNpZGUgaDQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhIHtcbiAgY29sb3I6ICNhYTAwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuc2VjdGlvbiBhc2lkZSBoMyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

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
            yrPass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
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



/***/ })

}]);
//# sourceMappingURL=landing-landing-module-es2015.js.map