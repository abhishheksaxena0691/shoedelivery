(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quote-quote-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote/new-quote/new-quote.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quote/new-quote/new-quote.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"container\">\n    <div class=\"row\">\n        <aside class=\"col-6\">\n            <div id=\"category\" class=\"d-flex align-items-center justify-content-between\">\n                <select (change)=\"getCategories($event)\">\n                    <option value=\"\" disabled>---Select Field---</option>\n                    <option value=\"footware\">Footware</option>\n                    <option value=\"medical\">Medical</option>\n                </select>\n            </div>\n        </aside>\n        <aside class=\"col-6\">\n\n        </aside>\n    </div>\n\n    <div id=\"categoryList\" *ngIf=\"categories\">\n        <owl-carousel [options]=\"menuOptions\" [items]=\"categories\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <aside *ngFor=\"let cate of categories\" (click)=\"getProducts(cate.type, cate.name)\">\n                <span [style.background-image]= \"'url(/uploads/'+cate.url+'.jpg)'\"></span>\n                <h3>{{cate.name}}</h3>\n            </aside>\n        </owl-carousel>\n    </div>\n\n    <div id=\"productList\" class=\"my-3 text-center\" *ngIf=\"products\">\n        <owl-carousel [options]=\"menuOptions\" [items]=\"products\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <aside *ngFor=\"let prd of products\">\n                <span [style.background-image]= \"'url(/uploads/'+prd.url+'.jpg)'\"></span>\n                <div class=\"p-2\">\n                    <h3>{{prd.name}}</h3>\n                    <p>{{prd.description}}</p>\n                    <div class=\"d-flex align-items-center justify-content-between\">\n                        <h4>MRP: &#8377;{{prd.price}}</h4>\n                        <a (click)=\"setCart(prd)\" class=\"btn\">Add <i></i></a>\n                    </div>\n                </div>\n            </aside>\n        </owl-carousel>\n    </div>\n\n    <div id=\"cartSec\" class=\"my-5\" *ngIf=\"cartList && cartList.length != 0\">\n        <ul>\n            <li *ngFor=\"let cart of cartList; let i = index\">\n                <div class=\"proDes d-flex justify-content-between align-items-center\">\n                    <span [style.background-image]= \"'url(/uploads/'+cart.url+'.jpg)'\"></span>\n                    <div>\n                        <h3>{{cart.name}}</h3>\n                        <p>{{cart.description}}</p>\n                    </div>\n                </div>\n                <a (click)=\"rmvCart(i)\" class=\"remove\"></a>\n                <input type=\"number\" min=\"1\" max=\"20\" value=\"{{cart.qty}}\" (change)=\"setCart(cart)\" />\n                <h4>&#8377;{{cart.price * cart.qty}}</h4>\n            </li>\n        </ul>\n    </div>\n    <div class=\"d-flex justify-content-between\" *ngIf=\"cartList && cartList.length\">\n        <h3>Total</h3>\n        <h4>&#8377;{{total}}</h4>\n    </div>\n    <div class=\"mb-5 mt-5 text-right\" id=\"checkout\" *ngIf=\"cartList && cartList.length\">\n        <a (click)=\"openModal(factoryTemplate)\" class=\"btn\">Send Quote</a>\n    </div>\n</section>\n\n<ng-template #factoryTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Select Factory</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"aQMsg\" class=\"alert\" [ngClass]=\"aQMsg.alert\">{{aQMsg.msg}}</div>\n    <select [(ngModel)]=\"factory\">\n        <option value=\"\" disabled>Choose Factory</option>\n        <option value=\"factory1\">Factory 1</option>\n        <option value=\"factory2\">Factory 2</option>\n        <option value=\"factory3\">Factory 3</option>\n    </select>\n    <a class=\"btn mt-3\" *ngIf=\"factory !== ''\" (click)=\"submitQuote()\">Send</a>\n  </div>\n</ng-template>\n\n<app-side-bar></app-side-bar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote-pg/quote-pg.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote-pg/quote-pg.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"container py-4\">\n    <nav id=\"toggleMenu\" class=\"d-flex justify-content-between align-items-end\">\n        <a class=\"active\"> Dashboard </a>\n        <a href=\"\">Favorites</a>\n    </nav>\n    <a (click)=\"toggleFilter()\" class=\"filterNow\"><span class=\"filter\"></span> Filter</a>\n    <div class=\"p-4\" id=\"filterSec\" *ngIf=\"filter\">\n        <div *ngIf=\"qList\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngIf=\"monthData[0]\" (click)=\"filterPyMonthsWeek(0, monthData[0].list)\" [ngClass]=\"{'active': selectPyMonth === 0}\">\n                    <strong>Current Month</strong>\n                    <i class=\"currentMonth\"></i>\n                    Rs. {{monthData[0].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[1]\" (click)=\"filterPyMonthsWeek(1, monthData[1].list)\" [ngClass]=\"{'active': selectPyMonth === 1}\">\n                    <strong>Last 2 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[1].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[2]\" (click)=\"filterPyMonthsWeek(2, monthData[2].list)\" [ngClass]=\"{'active': selectPyMonth === 2}\">\n                    <strong>Last 3 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[2].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[3]\" (click)=\"filterPyMonthsWeek(3, monthData[3].list)\" [ngClass]=\"{'active': selectPyMonth === 3}\">\n                    <strong>Last 6 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[3].price}}/-\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[4]\" (click)=\"filterPyMonthsWeek(4, monthData[4].list)\" [ngClass]=\"{'active': selectPyMonth === 4}\">\n                    <strong>Last 9 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    Rs. {{monthData[4].price}}/-\n                </div>\n            </owl-carousel>\n        </div>\n    </div>\n</section>\n\n<section class=\"container text-center menuBtn\">\n    <a routerLink=\"/quote/new\" class=\"btn\">Create New Quote</a>\n    <nav class=\"d-flex justify-content-between mb-4\">\n        <a (click)=\"openDelivery(deliveryTemplate, bImg._id)\" class=\"btn\"> Proceed to Order</a>\n        <a (click)=\"openDelivery(deliveryTemplate, bImg._id)\" class=\"btn\"> Move to Favorites</a>\n    </nav>\n</section>\n\n<app-side-bar></app-side-bar>\n");

/***/ }),

/***/ "./src/app/quote/new-quote/new-quote.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/quote/new-quote/new-quote.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div.modal-body select,\ndiv#category select {\n  width: 100%;\n  background-color: #fff;\n  font-size: 15px;\n  border: #ccc solid thin;\n  padding: 5px 8px;\n  border-radius: 5px;\n}\n\ndiv#categoryList aside,\ndiv#productList aside {\n  width: 260px;\n  display: inline-block;\n  background-color: #fff;\n  border: #cfcfcf solid thin;\n  border-radius: 8px;\n  margin: 8px;\n  text-align: left;\n}\n\ndiv#categoryList aside {\n  width: 180px;\n  cursor: pointer;\n}\n\ndiv#categoryList aside h3 {\n  text-align: center;\n  font-size: 18px;\n}\n\ndiv#categoryList aside span,\ndiv#productList aside span {\n  display: inline-block;\n  width: 100%;\n  height: 150px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  border-radius: 8px;\n}\n\ndiv#cartSec ul li div.proDes div h3,\ndiv#productList aside h3 {\n  font-size: 18px;\n  color: #484848;\n}\n\ndiv#cartSec ul li div.proDes div p,\ndiv#productList aside p {\n  color: #686868;\n  font-size: 15px;\n}\n\ndiv#productList aside h4 {\n  font-size: 16px;\n}\n\ndiv#productList aside a {\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 8px;\n}\n\ndiv#productList aside a i {\n  display: inline-block;\n  margin-left: 10px;\n  width: 15px;\n  height: 15px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/icons/cart.svg\");\n}\n\ndiv#cartSec {\n  border-top: #cfcfcf dashed thin;\n  border-bottom: #cfcfcf dashed thin;\n}\n\ndiv#cartSec ul li {\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px 0;\n}\n\ndiv#cartSec ul li div.proDes {\n  width: 350px;\n}\n\ndiv#cartSec ul li div.proDes div {\n  width: calc(100% - 160px);\n}\n\ndiv#cartSec ul li input[type=number] {\n  width: 100px;\n}\n\ndiv#cartSec ul li span {\n  width: 150px;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\ndiv#cartSec ul li a.remove {\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/icons/remove.svg\");\n}\n\ndiv.modal-body a.btn,\ndiv#checkout a.btn {\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 8px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyaWQvV29ya3MvQW5ndWxhci90cmF2ZXZpc2FsZ3VydS9TaG9lIERlbGl2ZXJ5IFNlcnZpY2Uvc2hvZVJldGFpbGVyL3NyYy9hcHAvcXVvdGUvbmV3LXF1b3RlL25ldy1xdW90ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcXVvdGUvbmV3LXF1b3RlL25ldy1xdW90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0E7O0VBRUksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFBeUIsWUFBQTtFQUFjLGVBQUE7QUNFdkM7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNHSjs7QURBQTs7RUFFSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURBQTs7RUFFSSxlQUFBO0VBQ0EsY0FBQTtBQ0dKOztBREFBOztFQUVJLGNBQUE7RUFDQSxlQUFBO0FDR0o7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREFBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7QUNHSjs7QURBQTtFQUNJLCtCQUFBO0VBQ0Esa0NBQUE7QUNHSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDR0o7O0FEQUE7RUFDSSxZQUFBO0FDR0o7O0FEQUE7RUFDSSx5QkFBQTtBQ0dKOztBREFBO0VBQ0ksWUFBQTtBQ0dKOztBREFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUNHSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0FDR0o7O0FEQUE7O0VBRUkseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlL25ldy1xdW90ZS9uZXctcXVvdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYubW9kYWwtYm9keSBzZWxlY3QsXG5kaXYjY2F0ZWdvcnkgc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuXG5kaXYjY2F0ZWdvcnlMaXN0IGFzaWRlLFxuZGl2I3Byb2R1Y3RMaXN0IGFzaWRlIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAjY2ZjZmNmIHNvbGlkIHRoaW47XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmRpdiNjYXRlZ29yeUxpc3QgYXNpZGUgeyB3aWR0aDogMTgwcHg7IGN1cnNvcjogcG9pbnRlcjsgfVxuXG5kaXYjY2F0ZWdvcnlMaXN0IGFzaWRlIGgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5kaXYjY2F0ZWdvcnlMaXN0IGFzaWRlIHNwYW4sXG5kaXYjcHJvZHVjdExpc3QgYXNpZGUgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuZGl2I2NhcnRTZWMgdWwgbGkgZGl2LnByb0RlcyBkaXYgaDMsXG5kaXYjcHJvZHVjdExpc3QgYXNpZGUgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuZGl2I2NhcnRTZWMgdWwgbGkgZGl2LnByb0RlcyBkaXYgcCxcbmRpdiNwcm9kdWN0TGlzdCBhc2lkZSBwIHtcbiAgICBjb2xvcjogIzY4Njg2ODtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbmRpdiNwcm9kdWN0TGlzdCBhc2lkZSBoNCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5kaXYjcHJvZHVjdExpc3QgYXNpZGUgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xufVxuXG5kaXYjcHJvZHVjdExpc3QgYXNpZGUgYSBpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zL2NhcnQuc3ZnJyk7XG59XG5cbmRpdiNjYXJ0U2VjIHtcbiAgICBib3JkZXItdG9wOiAjY2ZjZmNmIGRhc2hlZCB0aGluO1xuICAgIGJvcmRlci1ib3R0b206ICNjZmNmY2YgZGFzaGVkIHRoaW47XG59XG5cbmRpdiNjYXJ0U2VjIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbmRpdiNjYXJ0U2VjIHVsIGxpIGRpdi5wcm9EZXMge1xuICAgIHdpZHRoOiAzNTBweDtcbn1cblxuZGl2I2NhcnRTZWMgdWwgbGkgZGl2LnByb0RlcyBkaXYge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNjBweCk7XG59XG5cbmRpdiNjYXJ0U2VjIHVsIGxpIGlucHV0W3R5cGU9bnVtYmVyXSB7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG5kaXYjY2FydFNlYyB1bCBsaSBzcGFuIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbmRpdiNjYXJ0U2VjIHVsIGxpIGEucmVtb3ZlIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zL3JlbW92ZS5zdmcnKTtcbn1cblxuZGl2Lm1vZGFsLWJvZHkgYS5idG4sXG5kaXYjY2hlY2tvdXQgYS5idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG59IiwiZGl2Lm1vZGFsLWJvZHkgc2VsZWN0LFxuZGl2I2NhdGVnb3J5IHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlcjogI2NjYyBzb2xpZCB0aGluO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmRpdiNjYXRlZ29yeUxpc3QgYXNpZGUsXG5kaXYjcHJvZHVjdExpc3QgYXNpZGUge1xuICB3aWR0aDogMjYwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAjY2ZjZmNmIHNvbGlkIHRoaW47XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luOiA4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmRpdiNjYXRlZ29yeUxpc3QgYXNpZGUge1xuICB3aWR0aDogMTgwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2I2NhdGVnb3J5TGlzdCBhc2lkZSBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5kaXYjY2F0ZWdvcnlMaXN0IGFzaWRlIHNwYW4sXG5kaXYjcHJvZHVjdExpc3QgYXNpZGUgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmRpdiNjYXJ0U2VjIHVsIGxpIGRpdi5wcm9EZXMgZGl2IGgzLFxuZGl2I3Byb2R1Y3RMaXN0IGFzaWRlIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuZGl2I2NhcnRTZWMgdWwgbGkgZGl2LnByb0RlcyBkaXYgcCxcbmRpdiNwcm9kdWN0TGlzdCBhc2lkZSBwIHtcbiAgY29sb3I6ICM2ODY4Njg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuZGl2I3Byb2R1Y3RMaXN0IGFzaWRlIGg0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5kaXYjcHJvZHVjdExpc3QgYXNpZGUgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAzcHggOHB4O1xufVxuXG5kaXYjcHJvZHVjdExpc3QgYXNpZGUgYSBpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb25zL2NhcnQuc3ZnXCIpO1xufVxuXG5kaXYjY2FydFNlYyB7XG4gIGJvcmRlci10b3A6ICNjZmNmY2YgZGFzaGVkIHRoaW47XG4gIGJvcmRlci1ib3R0b206ICNjZmNmY2YgZGFzaGVkIHRoaW47XG59XG5cbmRpdiNjYXJ0U2VjIHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuZGl2I2NhcnRTZWMgdWwgbGkgZGl2LnByb0RlcyB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxuZGl2I2NhcnRTZWMgdWwgbGkgZGl2LnByb0RlcyBkaXYge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTYwcHgpO1xufVxuXG5kaXYjY2FydFNlYyB1bCBsaSBpbnB1dFt0eXBlPW51bWJlcl0ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbmRpdiNjYXJ0U2VjIHVsIGxpIHNwYW4ge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG5kaXYjY2FydFNlYyB1bCBsaSBhLnJlbW92ZSB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb25zL3JlbW92ZS5zdmdcIik7XG59XG5cbmRpdi5tb2RhbC1ib2R5IGEuYnRuLFxuZGl2I2NoZWNrb3V0IGEuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/quote/new-quote/new-quote.component.ts":
/*!********************************************************!*\
  !*** ./src/app/quote/new-quote/new-quote.component.ts ***!
  \********************************************************/
/*! exports provided: NewQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewQuoteComponent", function() { return NewQuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/filter.service */ "./src/app/shared/filter.service.ts");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quote.service */ "./src/app/quote/quote.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let NewQuoteComponent = class NewQuoteComponent {
    constructor(fetch, modalService, filterSrv, router) {
        this.fetch = fetch;
        this.modalService = modalService;
        this.filterSrv = filterSrv;
        this.router = router;
        this.total = 0;
        this.cartList = [];
        this.factory = "";
        this.menuOptions = {
            dots: false,
            nav: false,
            lazyLoad: true,
            autoplay: false,
            loop: false,
            autoHeight: false,
            margin: 20,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 4
                }
            }
        };
        this.cOptions = this.filterSrv.cOptions;
    }
    ngOnInit() {
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    getCategories(e) {
        this.categories = null;
        this.products = null;
        this.fetch.getCategory(e.target.value).subscribe(res => { this.categories = res; }, err => { this.pgMsg = { msg: err.error, alert: "alter-danger" }; });
    }
    getProducts(type, category) {
        this.fetch.getProduct(type, category).subscribe(res => { this.products = res; }, err => { this.pgMsg = { msg: err.error, alert: "alter-danger" }; });
    }
    setCart(data) {
        let updateItem = this.cartList.find(x => x._id === data._id);
        if (updateItem == undefined)
            this.cartList.push({ _id: data._id, description: data.description, category: data.category, name: data.name, price: data.price, type: data.type, qty: 1, url: data.url });
        else {
            let index = this.cartList.indexOf(updateItem);
            this.cartList[index].qty += 1;
        }
        this.countTotal();
    }
    rmvCart(index) {
        this.cartList.splice(index, 1);
        this.countTotal();
    }
    countTotal() {
        this.total = 0;
        this.cartList.forEach(el => {
            this.total += (+el.price * el.qty);
        });
    }
    submitQuote() {
        this.fetch.addQuote({ factory: this.factory, products: this.cartList, total: this.total }).subscribe(res => {
            this.aQMsg = { msg: res, alert: "alter-danger" };
            setTimeout(() => {
                this.router.navigate(['/quote']);
                this.modalRef.hide();
                this.cartList = [];
                this.aQMsg = null;
            }, 3500);
        }, err => { this.aQMsg = { msg: err.error, alert: "alter-danger" }; });
    }
};
NewQuoteComponent.ctorParameters = () => [
    { type: _quote_service__WEBPACK_IMPORTED_MODULE_3__["QuoteService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] },
    { type: src_app_shared_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
NewQuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-quote',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-quote.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote/new-quote/new-quote.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-quote.component.scss */ "./src/app/quote/new-quote/new-quote.component.scss")).default]
    })
], NewQuoteComponent);



/***/ }),

/***/ "./src/app/quote/quote-pg/quote-pg.component.scss":
/*!********************************************************!*\
  !*** ./src/app/quote/quote-pg/quote-pg.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table.tableData {\n  width: 100%;\n  margin-top: 10px;\n}\n\ntable.tableData th {\n  padding: 5px;\n  text-align: center;\n  background-color: #aa0000;\n  color: #fff;\n}\n\ntable.tableData td {\n  background-color: #f2f2f2;\n  padding: 5px 8px;\n  text-align: center;\n}\n\ntable.tableData td select,\ntable.tableData td input[type=number] {\n  width: 100px;\n  background-color: #ffffff;\n  padding: 3px 8px;\n  font-size: 15px;\n  border: #ccc solid thin;\n}\n\nsection#qMenu a.tMenu {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background-color: #aa0000;\n  color: #ffffff;\n  padding: 5px 15px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nsection#qMenu a.tMenu::after {\n  position: absolute;\n  content: \"\";\n  right: 10px;\n  top: 10px;\n  width: 15px;\n  height: 15px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/icons/down-arrow.svg\");\n}\n\nsection#qMenu div.clpContent {\n  background-color: #ffffff;\n}\n\ntable.tableData td a.btn {\n  margin: 0;\n  font-size: 13px;\n  font-weight: bold;\n  padding: 3px 8px;\n  background-color: #aa0000;\n  color: #ffffff;\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyaWQvV29ya3MvQW5ndWxhci90cmF2ZXZpc2FsZ3VydS9TaG9lIERlbGl2ZXJ5IFNlcnZpY2Uvc2hvZVJldGFpbGVyL3NyYy9hcHAvcXVvdGUvcXVvdGUtcGcvcXVvdGUtcGcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3F1b3RlL3F1b3RlLXBnL3F1b3RlLXBnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWtCLFdBQUE7RUFBYSxnQkFBQTtBQ0cvQjs7QURGQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0tKOztBREhBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESEE7O0VBRUksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNNSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTUo7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EscURBQUE7QUNNSjs7QURIQTtFQUErQix5QkFBQTtBQ08vQjs7QURMQTtFQUNJLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3F1b3RlL3F1b3RlLXBnL3F1b3RlLXBnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUudGFibGVEYXRhIHsgd2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6IDEwcHg7IH1cbnRhYmxlLnRhYmxlRGF0YSB0aCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEwMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xufVxudGFibGUudGFibGVEYXRhIHRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50YWJsZS50YWJsZURhdGEgdGQgc2VsZWN0LFxudGFibGUudGFibGVEYXRhIHRkIGlucHV0W3R5cGU9bnVtYmVyXXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBib3JkZXI6ICNjY2Mgc29saWQgdGhpbjtcbn1cblxuc2VjdGlvbiNxTWVudSBhLnRNZW51IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsMCwwKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWN0aW9uI3FNZW51IGEudE1lbnU6OmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogJyc7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pY29ucy9kb3duLWFycm93LnN2ZycpO1xufVxuXG5zZWN0aW9uI3FNZW51IGRpdi5jbHBDb250ZW50IHsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgfVxuXG50YWJsZS50YWJsZURhdGEgdGQgYS5idG4ge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzogM3B4IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzAsMCwwKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW46IDAgNXB4O1xufSIsInRhYmxlLnRhYmxlRGF0YSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG50YWJsZS50YWJsZURhdGEgdGgge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnRhYmxlLnRhYmxlRGF0YSB0ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGUudGFibGVEYXRhIHRkIHNlbGVjdCxcbnRhYmxlLnRhYmxlRGF0YSB0ZCBpbnB1dFt0eXBlPW51bWJlcl0ge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyOiAjY2NjIHNvbGlkIHRoaW47XG59XG5cbnNlY3Rpb24jcU1lbnUgYS50TWVudSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWN0aW9uI3FNZW51IGEudE1lbnU6OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbnMvZG93bi1hcnJvdy5zdmdcIik7XG59XG5cbnNlY3Rpb24jcU1lbnUgZGl2LmNscENvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG50YWJsZS50YWJsZURhdGEgdGQgYS5idG4ge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYTAwMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDAgNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/quote/quote-pg/quote-pg.component.ts":
/*!******************************************************!*\
  !*** ./src/app/quote/quote-pg/quote-pg.component.ts ***!
  \******************************************************/
/*! exports provided: QuotePgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotePgComponent", function() { return QuotePgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote.service */ "./src/app/quote/quote.service.ts");
/* harmony import */ var src_app_shared_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/filter.service */ "./src/app/shared/filter.service.ts");




;
let QuotePgComponent = class QuotePgComponent {
    constructor(fetch, filterSrv) {
        this.fetch = fetch;
        this.filterSrv = filterSrv;
        this.filter = true;
        this.q1 = true;
        this.q2 = false;
        this.selectWeek = 0;
        this.monthData = [];
        this.weekData = [];
        this.col3Data = [];
    }
    ngOnInit() {
        this.getQuotes();
    }
    toggleFilter() {
        this.filter = !this.filter;
    }
    toggleQ1() {
        if (this.q1)
            this.q1 = false;
        else
            this.q1 = true;
    }
    toggleQ2() {
        if (this.q2)
            this.q2 = false;
        else
            this.q2 = true;
    }
    getQuotes() {
        this.fetch.getQuote().subscribe(res => {
            this.qList = res;
            console.log(this.qList);
            if (this.qList) {
                this.filterSrv.monthFilter.forEach(mth => {
                    this.monthData.push(this.filterSrv.filterByDate(this.qList, this.filterSrv.monthFilter[0], mth));
                });
            }
        }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
};
QuotePgComponent.ctorParameters = () => [
    { type: _quote_service__WEBPACK_IMPORTED_MODULE_2__["QuoteService"] },
    { type: src_app_shared_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"] }
];
QuotePgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote-pg',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quote-pg.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/quote/quote-pg/quote-pg.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quote-pg.component.scss */ "./src/app/quote/quote-pg/quote-pg.component.scss")).default]
    })
], QuotePgComponent);



/***/ }),

/***/ "./src/app/quote/quote-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/quote/quote-routing.module.ts ***!
  \***********************************************/
/*! exports provided: QuoteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteRoutingModule", function() { return QuoteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quote_pg_quote_pg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote-pg/quote-pg.component */ "./src/app/quote/quote-pg/quote-pg.component.ts");
/* harmony import */ var _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-quote/new-quote.component */ "./src/app/quote/new-quote/new-quote.component.ts");





const routes = [
    {
        path: "quote",
        component: _quote_pg_quote_pg_component__WEBPACK_IMPORTED_MODULE_3__["QuotePgComponent"]
    },
    {
        path: "quote/new",
        component: _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_4__["NewQuoteComponent"]
    }
];
let QuoteRoutingModule = class QuoteRoutingModule {
};
QuoteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], QuoteRoutingModule);



/***/ }),

/***/ "./src/app/quote/quote.module.ts":
/*!***************************************!*\
  !*** ./src/app/quote/quote.module.ts ***!
  \***************************************/
/*! exports provided: QuoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteModule", function() { return QuoteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _quote_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote-routing.module */ "./src/app/quote/quote-routing.module.ts");
/* harmony import */ var _quote_pg_quote_pg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote-pg/quote-pg.component */ "./src/app/quote/quote-pg/quote-pg.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-quote/new-quote.component */ "./src/app/quote/new-quote/new-quote.component.ts");










let QuoteModule = class QuoteModule {
};
QuoteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_quote_pg_quote_pg_component__WEBPACK_IMPORTED_MODULE_6__["QuotePgComponent"], _new_quote_new_quote_component__WEBPACK_IMPORTED_MODULE_9__["NewQuoteComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _quote_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuoteRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_7__["OwlModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot()
        ]
    })
], QuoteModule);



/***/ }),

/***/ "./src/app/quote/quote.service.ts":
/*!****************************************!*\
  !*** ./src/app/quote/quote.service.ts ***!
  \****************************************/
/*! exports provided: QuoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteService", function() { return QuoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api-link.service */ "./src/app/shared/api-link.service.ts");
/* harmony import */ var _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guard/auth.service */ "./src/app/guard/auth.service.ts");





let QuoteService = class QuoteService {
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
    getCategory(url) {
        return this.http.get(this.api.server + "category/product/" + url, { headers: this.headers });
    }
    getProduct(type, cate) {
        return this.http.get(this.api.server + "product/" + type + "/" + cate, { headers: this.headers });
    }
    addQuote(data) {
        return this.http.post(this.api.server + "quote", data, { headers: this.headers });
    }
    getQuote() {
        return this.http.get(this.api.server + "quotes", { headers: this.headers });
    }
};
QuoteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__["ApiLinkService"] },
    { type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
QuoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], QuoteService);



/***/ })

}]);
//# sourceMappingURL=quote-quote-module-es2015.js.map