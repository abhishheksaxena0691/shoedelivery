(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dealer-app-dealer-app-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<section class=\"container py-4\">\n    <nav id=\"toggleMenu\" class=\"d-flex justify-content-between align-items-end\">\n        <a [ngClass]=\"paid ? 'active' : ''\" (click)=\"getMonthData(true)\"> Paid </a>\n        <a [ngClass]=\"!paid ? 'active' : ''\"  (click)=\"unpaid()\" #closeBtn>Unpaid</a>\n    </nav>\n    <a (click)=\"toggleFilter()\" class=\"filterNow\"><span class=\"filter\"></span> Filter</a>\n    <div class=\"p-4\" id=\"filterSec\" >\n        <div *ngIf=\"paid\">\n            <owl-carousel [options]=\"menuOptions\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthDataDh\">\n                <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'cash'}\" (click)=\"sltArea('cash')\">\n                        <strong>Cash</strong>\n                        <i class=\"payee\"></i>\n                      <span>({{dataResult['cash'] !== undefined ?dataResult['cash']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.cash}}/-</span>\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'card'}\" (click)=\"sltArea('card')\">\n                    <strong>Card</strong>\n                    <i class=\"payee\"></i>\n                    <span>({{dataResult['card'] !== undefined ? dataResult['card']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.card}}/-</span>\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'Net Banking'}\" (click)=\"sltArea('Net Banking')\">\n                    <strong>Net banking</strong>\n                    <i class=\"sponsor\"></i>\n                    ({{dataResult['Net Banking'] !== undefined ?dataResult['Net Banking']?.length : 0}})  &nbsp; &nbsp;Rs. {{this.netBanking}}/-\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'upi'}\" (click)=\"sltArea('upi')\">\n                    <strong>UPI</strong>\n                    <i class=\"sponsor\"></i>\n                    <span>({{dataResult['upi'] !== undefined ?dataResult['upi']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.upi}}/-</span>\n                </div>\n                <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab === 'other'}\" (click)=\"sltArea('other')\">\n                  <strong>Other</strong>\n                  <i class=\"sponsor\"></i>\n\n                  <span>({{dataResult['other'] !== undefined ? dataResult['other']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.other}}/-</span>\n              </div>\n            </owl-carousel>\n        </div>\n        <div  *ngIf=\"filter || !paid\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthData\">\n                <div class=\"optionList\" *ngIf=\"monthData[0]\" (click)=\"filterMonthsWeek(1,0, monthData[0].list)\" [ngClass]=\"{'active': selectMonth === 0}\">\n                    <strong>Current Month</strong>\n                    <i class=\"currentMonth\"></i>\n                    <span>({{monthData[0].list !== undefined ? monthData[0].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[0].price}}/-</span>\n                </div>\n                <div class=\"optionList\" *ngIf=\"monthData[1]\" (click)=\"filterMonthsWeek(2,1, monthData[1].list)\" [ngClass]=\"{'active': selectMonth === 1}\">\n                    <strong>Last 2 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    <span>({{monthData[0].list !== undefined ? monthData[2].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[2].price}}/-</span>\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[2]\" (click)=\"filterMonthsWeek(3,2, monthData[2].list)\" [ngClass]=\"{'active': selectMonth === 2}\">\n                    <strong>Last 3 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    <span>({{monthData[0].list !== undefined ? monthData[2].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[2].price}}/-</span>\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[3]\" (click)=\"filterMonthsWeek(6,3, monthData[3].list)\" [ngClass]=\"{'active': selectMonth === 3}\">\n                    <strong>Last 6 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    <span>({{monthData[0].list !== undefined ? monthData[3].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[3].price}}/-</span>\n                </div>\n\n                <div class=\"optionList\" *ngIf=\"monthData[4]\" (click)=\"filterMonthsWeek(9,4, monthData[4].list)\" [ngClass]=\"{'active': selectMonth === 4}\">\n                    <strong>Last 9 Months</strong>\n                    <i class=\"lastMonth\"></i>\n                    <span>({{monthData[0].list !== undefined ? monthData[4].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[4].price}}/-</span>\n                </div>\n            </owl-carousel>\n          </div>\n            <div class=\"\" *ngIf=\"filter\">\n                <div class=\"\">\n                    <owl-carousel [options]=\"menuOptions\" [items]=\"weekData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                        <div class=\"optionList\" *ngFor=\"let wk of weekData; let i = index\" [ngClass]=\"{'active': selectWeek == i}\" (click)='filterDays(i+1, monthData[4].list)'>\n                            <strong>Week {{i+1}}</strong>\n                            <i class=\"week\"></i>\n\n                            <span>({{wk.list?.length}}) &nbsp; &nbsp;  Rs. {{wk.price}}/-</span>\n                        </div>\n                    </owl-carousel>\n                </div>\n            </div>\n            <div class=\"\" *ngIf=\"filter\">\n              <div class=\"\">\n                  <owl-carousel [options]=\"menuOptions\" [items]=\"daysData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                      <div class=\"optionList\" *ngFor=\"let wk of daysData; let i = index\" (click)='upiPaymentData(i, wk)' [ngClass]=\"{'active': selectedDay == i}\">\n                          <strong *ngIf=\"i == 0 && selectWeek == 0\">Today</strong>\n                          <strong *ngIf=\"i == 1 && selectWeek == 0\">Yesterday</strong>\n                          <strong *ngIf=\"i == 0 && selectWeek > 0\">day 1</strong>\n                          <strong *ngIf=\"i == 1 && selectWeek > 0\">day 2</strong>\n                          <strong *ngIf=\"i > 1\">day {{i+1}}</strong>\n                          <i class=\"week\"></i>\n                          <span>({{wk.list?.length}}) &nbsp; &nbsp;  Rs. {{wk.price}}/-</span>\n                      </div>\n                  </owl-carousel>\n              </div>\n          </div>\n          <div class=\"\" *ngIf=\"filter && upiPaymmentArray.length &&  currentActiveTopTab === 'upi'\">\n\n            <owl-carousel [options]=\"menuOptions\" [items]=\"upiPaymmentArray\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\">\n                    <strong>GPay</strong>\n                    <i class=\"week\"></i>\n                    Rs. {{upiPaymmentArray[0]}}/-\n                </div>\n                <div class=\"optionList\">\n                  <strong>Phone Pay</strong>\n                  <i class=\"week\"></i>\n                  Rs. {{upiPaymmentArray[1]}}/-\n              </div>\n              <div class=\"optionList\">\n                <strong>Paytm</strong>\n                <i class=\"week\"></i>\n                Rs. {{upiPaymmentArray[2]}}/-\n            </div>\n            </owl-carousel>\n      </div>\n\n    </div>\n</section>\n<section class=\"container\">\n    <nav class=\"menuBtn d-flex justify-content-between mb-2\">\n         <a (click)=\"openModal(template)\" class=\"btn\"><i class=\"billing\"></i> New Bill</a>\n    </nav>\n    <div class=\"my-3\">\n\n        <owl-carousel\n            [options]=\"cOptions\" [items]=\"billDData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <fieldset *ngFor=\"let bImg of billDData; let i = index\">\n                <legend>{{bImg.billDetails.title}} {{bImg.billDetails.genDate | date: 'medium'}} {{bImg.retailerMobile}}</legend>\n                <nav class=\"menuBtn d-flex justify-content-between mb-4\">\n                  <a (click)=\"openDelivery(deliveryTemplate, bImg, bImg.paymentMode)\" class=\"btn\" *ngIf=\"bImg.category !== 'delivery'\"><i class=\"delivery\"></i> Delivery</a>\n                  <a (click)=\"openDelivery(deliveryTemplate, bImg, bImg.paymentMode)\" class=\"btn\" *ngIf=\"((bImg.category == 'delivery') && (bImg.invoiceStatus == undefined ||  bImg.invoiceStatus == 0 ||  bImg.invoiceStatus == 1))\"><i class=\"delivery\"></i> Delivery Inprogress</a>\n                  <a  class=\"btn nonActicebutton\" *ngIf=\"bImg.category == 'delivery' && bImg.invoiceStatus == 4\"><i class=\"delivery\"></i> Delivered</a>\n                  <a  class=\"btn\" *ngIf=\"bImg.category == 'delivery' && bImg.invoiceStatus >1 && bImg.invoiceStatus < 4\"><i class=\"delivery\"></i> Delivery Inprogress</a>\n\n\n                    <a class=\"btn nonActicebutton\" *ngIf=\"bImg.paymentMode !== 'credit' && bImg.payStatus\"><i class=\"forward\"></i> Paid</a>\n                    <a (click)=\"openMoveTocredit(moveToCredit, bImg._id)\" class=\"btn\" *ngIf=\"bImg.paymentMode !== 'credit' && !bImg.payStatus\"><i class=\"forward\"></i> Move to credit</a>\n                    <a  class=\"btn nonActicebutton\" *ngIf=\"bImg.paymentMode === 'credit'\"><i class=\"forward\"></i> Credited</a>\n                </nav>\n\n                <img [src]=\"serverPath+'pdfBills/images/'+bImg.billDetails.billImg[0].name\" alt=\"{{bImg.billDetails.billImg[0].name}}\" (click)=\"showBill(i)\" />\n                <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\" *ngIf=\"!bImg.payStatus\">\n                  <form class=\"d-flex align-items-center justify-content-between ml-auto\">\n                      <input type=\"text\" placeholder=\"Rs.\" [value]=\"cleanPrice(bImg.billDetails.total)\" disabled />\n                      <a class=\"btn\" (click)=\"openUpdatepayment(updatePayment, bImg._id)\">Update Payment</a>\n                  </form>\n              </nav>\n            </fieldset>\n        </owl-carousel>\n\n    </div>\n</section>\n<!-- <section id=\"chartSec\" class=\"container my-4 text-center\">\n    <img src=\"/assets/images/pie-chart.jpg\" alt=\"pie chart\" />\n</section> -->\n<app-side-bar></app-side-bar>\n\n<ng-template #template>\n  <div class=\"modal-header\" *ngIf=\"screenSecond\">\n    <h4 class=\"modal-title pull-left\">{{companyName}}</h4>\n    <!-- <h5 class=\"modal-title pull-left\">Select product</h5> -->\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\" *ngIf=\"screenFirst\">\n    <div class=\"row mt-4\">\n      <div class=\"col-4\"><b>Mobile Number</b></div>\n      <div class=\"col-8\">\n        <input type=\"text\" value=\"\" placeholder=\"Enter the mobile number of retailer\" (input)=\"setMobileNumber($event.target.value)\"/>\n      </div>\n    </div>\n\n    <div class=\"row mt-4\" *ngIf=\"verificationDone\">\n\n        <div class=\"col-4\"><b>Retailer Name</b></div>\n        <div class=\"col-8\" *ngIf=\"delearDetail !== null\"> {{delearDetail?.fstName}} {{delearDetail?.lstName}}</div>\n        <div class=\"col-8\" *ngIf=\"delearDetail == null\"> No retailer found</div>\n\n        <div class=\"col-4\"><b>Retailer Email</b></div>\n        <div class=\"col-8\" *ngIf=\"delearDetail !== null\"> {{delearDetail?.email}}</div>\n        <div class=\"col-8\" *ngIf=\"delearDetail == null\"> No retailer found</div>\n\n    </div>\n\n    <button type=\"submit\" class=\"mt-4\" [disabled]=\"setMobile?.length != 10\" (click)=\"verifyMobile()\" *ngIf=\"!verificationDone || delearDetail == null\">Verify Mobile</button>\n    <button type=\"submit\" class=\"mt-4\"  (click)=\"moveToSecondScreen()\" *ngIf=\"verificationDone && delearDetail != null\">Continue</button>\n  </div>\n  <div class=\"modal-body\" *ngIf=\"screenSecond\">\n    <div *ngIf=\"dMsg\" class=\"alert-success\">{{dMsg.msg}}</div>\n    <ng-select\n        [items]=\"productList\"\n        bindLabel=\"name\"\n        [multiple]=\"true\"\n        placeholder=\"Select Product\"\n        clearAllText=\"Clear\"\n        [searchable]=\"true\"\n        [(ngModel)]=\"selectedProduct\"\n        loadingText='Loading...'\n        [loading]=loadingProduct\n        (keyup)=\"searchProductName($event)\"\n        (change)=\"setQuantity()\">\n      </ng-select>\n      <div class=\"container mt-2\">\n\n\n        <div class=\"row setBoarder mt-4\" *ngIf=\"selectedProduct.length > 0\">\n          <div class=\"col-4\"><b>Product Name</b></div>\n          <div class=\"col-4\"><b>Price</b></div>\n          <div class=\"col-4\"><b>Quantity</b></div>\n        </div>\n        <div class=\"row mt-2\" *ngFor=\"let item of selectedProduct; index as i\">\n            <div class=\"col-4\">{{item.name}}</div>\n            <div class=\"col-4\">{{item.price}}</div>\n            <div class=\"col-4\">\n              <input type=\"number\" class=\"setWidth\" (input)=\"setQuantity($event.target.value, i)\" min=\"1\" value=\"1\"/>\n            </div>\n        </div>\n        <div class=\"row  mt-2\" *ngIf=\"selectedProduct.length > 0\">\n          <div class=\"col-4\"><b></b></div>\n          <div class=\"col-4\"><b>Total Price</b></div>\n          <div class=\"col-4\"><b> &#x20B9; {{totalPrice}}</b></div>\n        </div>\n      </div>\n    <button type=\"submit\" class=\"mt-4\" [disabled]=\"dBtm && totalPrice != 0\" (click)=\"NewDealerBill()\">Send</button>\n\n\n  </div>\n</ng-template>\n\n<ng-template #updatePayment>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Update Payment Status</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"dMsg\" class=\"alert-success\">{{msg}}</div>\n    <form [formGroup]=\"paymentForm\" (submit)=\"updatePayment1()\">\n        <h4>Select a payment method</h4>\n        <select formControlName=\"payMode\" class=\"form-control\" >\n            <option value=\"\">Select</option>\n            <option value=\"Net Banking\">Net Banking</option>\n            <option value=\"cash\">Cash</option>\n            <option value=\"card\">Card</option>\n            <option value=\"upi\">UPI</option>\n            <option value=\"other\">Other</option>\n            <option value=\"credit\">Credit</option>\n        </select>\n        <button type=\"submit\" class=\"mt-4 buttonClass\" [disabled]=\"dBtm\">Update</button>\n    </form>\n  </div>\n</ng-template>\n\n<ng-template #deliveryTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Delivered</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"dBtm\" class=\"alert\" [ngClass]=\"dMsg.alert\">{{dMsg.msg}}</div>\n    <form [formGroup]=\"deliveryFrm\" (submit)=\"addDelivery()\">\n        <h4>Enter Address</h4>\n        <textarea formControlName=\"address\" ></textarea>\n        <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"dSubmit && dFrm.address.errors\">\n            <div *ngIf=\"dFrm.address.errors.required\">Please mention your delivery address</div>\n        </div>\n        <hr />\n        <h4>Payment method</h4>\n        <p *ngIf=\"paid\">{{paymentModeForCredit === 'other' ? 'No Payment Found' : paymentModeForCredit}}</p>\n        <select formControlName=\"payMode\" *ngIf=\"!paid\">\n          <option value=\"\" disabled>Select</option>\n          <option value=\"\">Pay on Delivery</option>\n          <option value=\"Net Banking\">Net Banking</option>\n          <option value=\"cash\">Cash</option>\n          <option value=\"card\">Card</option>\n          <option value=\"upi\">UPI</option>\n          <option value=\"other\">Other</option>\n          <option value=\"credit\">Credit</option>\n        </select>\n        <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"dSubmit && dFrm.payMode.errors\">\n            <div *ngIf=\"dFrm.payMode.errors.required\">Please mention your payment mode</div>\n        </div>\n        <button type=\"submit\" class=\"mt-4\" [disabled]=\"dBtm\">Send</button>\n    </form>\n  </div>\n</ng-template>\n\n<ng-template #moveToCredit>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Move to credit</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"dBtm\" class=\"alert\" [ngClass]=\"dMsg.alert\">{{dMsg.msg}}</div>\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <div class=\"card\">\n                  <div class=\"card-body\">\n                    <div class=\"container\">\n                      <b>Credit Line</b>\n                      <div class=\"top\">\n                        <div class=\"top-element\">12 sep Rs 1000</div>\n                        <div class=\"top-element\">12 sep Rs 500</div>\n                        <div class=\"top-element\">30 sep Rs 2000</div>\n                      </div>\n                        <div class=\"line\"></div>\n                        <div class=\"bottom\">\n                          <!-- <div class=\"bottom-element\">20 september Rs 1000</div>\n                          <div class=\"bottom-element\">20 september Rs 1800</div> -->\n                        </div>\n                    </div>\n                    <div class=\"container\">\n                      <b>Purchase line</b>\n                      <div class=\"top\">\n\n                      </div>\n                        <div class=\"line\"></div>\n                        <div class=\"bottom\">\n                          <div class=\"bottom-element\">20 sep Rs 1000</div>\n                          <div class=\"bottom-element\">20 sep Rs 1800</div>\n                        </div>\n                    </div>\n                  </div>\n              </div>\n\n          </div>\n      </div>\n    </div>\n    <form [formGroup]=\"movetocredit\" (submit)=\"moveToCredit1()\">\n\n\n        <button type=\"submit\" class=\"mt-4\" [disabled]=\"dBtm\">Send</button>\n    </form>\n  </div>\n</ng-template>\n\n\n<section id=\"billPop\" *ngIf=\"popBill\">\n    <aside>\n        <a (click)=\"showBill(0)\" class=\"close\"></a>\n        <img [src]=\"serverPath+'/pdfBills/images/'+billData[popId].billImg[0].name\" alt=\"{{billData[popId].billImg[0].name}}\" />\n    </aside>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<section class=\"container py-4\">\n  <nav id=\"toggleMenu\" class=\"d-flex justify-content-between align-items-end\">\n      <a [ngClass]=\"paid ? 'active' : ''\" (click)=\"getMonthData()\"> Paid </a>\n      <a [ngClass]=\"!paid ? 'active' : ''\"  (click)=\"unpaid()\">Unpaid</a>\n  </nav>\n  <a (click)=\"toggleFilter()\" class=\"filterNow\"><span class=\"filter\"></span> Filter</a>\n  <div class=\"p-4\" id=\"filterSec\" >\n    <div *ngIf=\"paid\">\n      <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthDataDh\">\n          <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab == 'cash'}\" (click)=\"sltArea('cash')\">\n                  <strong>Cash</strong>\n                  <i class=\"payee\"></i>\n                <span>({{dataResult['cash'] !== undefined ?dataResult['cash']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.cash}}/-</span>\n          </div>\n          <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab == 'card'}\" (click)=\"sltArea('card')\">\n              <strong>Card</strong>\n              <i class=\"payee\"></i>\n              <span>({{dataResult['card'] !== undefined ? dataResult['card']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.card}}/-</span>\n          </div>\n          <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab == 'Net Banking'}\" (click)=\"sltArea('Net Banking')\">\n              <strong>Net banking</strong>\n              <i class=\"sponsor\"></i>\n              ({{dataResult['Net Banking'] !== undefined ?dataResult['Net Banking']?.length : 0}})  &nbsp; &nbsp;Rs. {{this.netBanking}}/-\n          </div>\n          <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab == 'upi'}\" (click)=\"sltArea('upi')\">\n              <strong>UPI</strong>\n              <i class=\"sponsor\"></i>\n              <span>({{dataResult['upi'] !== undefined ?dataResult['upi']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.upi}}/-</span>\n          </div>\n          <div class=\"optionList\" [ngClass]=\"{'active': currentActiveTopTab == 'other'}\" (click)=\"sltArea('other')\">\n            <strong>Other</strong>\n            <i class=\"sponsor\"></i>\n            <span>({{dataResult['Other'] !== undefined ? dataResult['Other']?.length : 0}}) &nbsp; &nbsp;  Rs. {{this.Other}}/-</span>\n        </div>\n      </owl-carousel>\n  </div>\n  <div  *ngIf=\"filter || !paid\">\n      <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthData\">\n          <div class=\"optionList\" *ngIf=\"monthData[0]\" (click)=\"filterMonthsWeek(1,0, monthData[0].list)\" [ngClass]=\"{'active': selectMonth == 1}\">\n              <strong>Current Month</strong>\n              <i class=\"currentMonth\"></i>\n              <span>({{monthData[0].list !== undefined ? monthData[0].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[0].price}}/-</span>\n          </div>\n          <div class=\"optionList\" *ngIf=\"monthData[1]\" (click)=\"filterMonthsWeek(2,1, monthData[1].list)\" [ngClass]=\"{'active': selectMonth == 2}\">\n              <strong>Last 2 Months</strong>\n              <i class=\"lastMonth\"></i>\n              <span>({{monthData[0].list !== undefined ? monthData[2].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[2].price}}/-</span>\n          </div>\n\n          <div class=\"optionList\" *ngIf=\"monthData[2]\" (click)=\"filterMonthsWeek(3,2, monthData[2].list)\" [ngClass]=\"{'active': selectMonth == 3}\">\n              <strong>Last 3 Months</strong>\n              <i class=\"lastMonth\"></i>\n              <span>({{monthData[0].list !== undefined ? monthData[2].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[2].price}}/-</span>\n          </div>\n\n          <div class=\"optionList\" *ngIf=\"monthData[3]\" (click)=\"filterMonthsWeek(6,3, monthData[3].list)\" [ngClass]=\"{'active': selectMonth == 6}\">\n              <strong>Last 6 Months</strong>\n              <i class=\"lastMonth\"></i>\n              <span>({{monthData[0].list !== undefined ? monthData[3].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[3].price}}/-</span>\n          </div>\n\n          <div class=\"optionList\" *ngIf=\"monthData[4]\" (click)=\"filterMonthsWeek(9,4, monthData[4].list)\" [ngClass]=\"{'active': selectMonth == 9}\">\n              <strong>Last 9 Months</strong>\n              <i class=\"lastMonth\"></i>\n              <span>({{monthData[0].list !== undefined ? monthData[4].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[4].price}}/-</span>\n          </div>\n      </owl-carousel>\n    </div>\n      <div class=\"\" *ngIf=\"filter\">\n          <div class=\"\">\n              <owl-carousel [options]=\"menuOptions\" [items]=\"weekData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                  <div class=\"optionList\" *ngFor=\"let wk of weekData; let i = index\" [ngClass]=\"{'active': selectWeek == i}\" (click)='filterDays(i+1, monthData[4].list)'>\n                      <strong>Week {{i+1}}</strong>\n                      <i class=\"week\"></i>\n\n                      <span>({{wk.list?.length}}) &nbsp; &nbsp;  Rs. {{wk.price}}/-</span>\n                  </div>\n              </owl-carousel>\n          </div>\n      </div>\n      <div class=\"\" *ngIf=\"filter\">\n        <div class=\"\">\n            <owl-carousel [options]=\"menuOptions\" [items]=\"daysData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n                <div class=\"optionList\" *ngFor=\"let wk of daysData; let i = index\" (click)='upiPaymentData(i,wk)'  [ngClass]=\"{'active': selectedDay == i}\">\n                  <strong *ngIf=\"i == 0 && selectWeek == 0\">Today</strong>\n                  <strong *ngIf=\"i == 1 && selectWeek == 0\">Yesterday</strong>\n                  <strong *ngIf=\"i == 0 && selectWeek > 0\">day 1</strong>\n                  <strong *ngIf=\"i == 1 && selectWeek > 0\">day 2</strong>\n                  <strong *ngIf=\"i > 1\">day {{i+1}}</strong>\n                  <i class=\"week\"></i>\n                  <span>({{wk.list?.length}}) &nbsp; &nbsp;  Rs. {{wk.price}}/-</span>\n                </div>\n            </owl-carousel>\n        </div>\n    </div>\n    <div class=\"\" *ngIf=\"filter && upiPaymmentArray.length &&  currentActiveTopTab === 'upi'\">\n\n      <owl-carousel [options]=\"menuOptions\" [items]=\"upiPaymmentArray\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n          <div class=\"optionList\">\n              <strong>GPay</strong>\n              <i class=\"week\"></i>\n              Rs. {{upiPaymmentArray[0]}}/-\n          </div>\n          <div class=\"optionList\">\n            <strong>Phone Pay</strong>\n            <i class=\"week\"></i>\n            Rs. {{upiPaymmentArray[1]}}/-\n        </div>\n        <div class=\"optionList\">\n          <strong>Paytm</strong>\n          <i class=\"week\"></i>\n          Rs. {{upiPaymmentArray[2]}}/-\n      </div>\n      </owl-carousel>\n</div>\n\n\n  </div>\n</section>\n<section class=\"container\">\n\n    <div class=\"my-3\">\n\n        <owl-carousel\n            [options]=\"cOptions\" [items]=\"billDData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\n            <fieldset *ngFor=\"let bImg of billDData; let i = index\">\n              <legend>{{bImg.billDetails.title}} {{bImg.billDetails.genDate | date: 'medium'}} {{bImg.retailerMobile}}</legend>\n\n                <nav class=\"menuBtn d-flex justify-content-between mb-4\">\n                    <a (click)=\"openInvoiceStatus(invoiceStatusTemplate, bImg)\" class=\"btn\"><i class=\"delivery\"></i> Update Status</a>\n                </nav>\n                <section id=\"deliverySec\" class=\"container my-4\">\n                  <div class=\"row p-4\">\n                      <div class=\"col-6\">\n                          <h3>From:</h3>\n                          <p>Warehouse location</p>\n                          <p><strong>Request ON:</strong> {{bImg.createdOn | date: 'medium'}}</p>\n                      </div>\n                      <div class=\"col-6\">\n                          <h3>To:</h3>\n                          <p>{{bImg?.userNamebill}} - {{bImg.usrNumber}}</p>\n                          <p>{{bImg.address}}</p>\n                      </div>\n                  </div>\n              </section>\n                <div id=\"shipTrack\" class=\"py-5\">\n                  <div class=\"d-flex justify-content-center align-items-center\">\n                      <i class=\"active\"></i>\n                      <span [ngClass]=\"bImg?.invoiceStatus >= 2? 'shipTrack1' : ''\"></span>\n                      <i [ngClass]=\"bImg?.invoiceStatus >= 2? 'active' : ''\"></i>\n                      <span  [ngClass]=\"bImg?.invoiceStatus >= 3? 'shipTrack1' : ''\"></span>\n                      <i [ngClass]=\"bImg?.invoiceStatus >= 3? 'active' : '' \"></i>\n                      <span  [ngClass]=\"bImg?.invoiceStatus >= 4? 'shipTrack1' : ''\"></span>\n                      <i [ngClass]=\"bImg?.invoiceStatus == 4? 'active' : ''\"></i>\n                  </div>\n                  <div class=\"d-flex justify-content-center align-items-center\">\n                    <span class=\"shipTrack2\">Ordered <p>({{bImg?.createdOn | date: 'mediumDate' }})</p> <p>({{bImg?.createdOn | date: 'shortTime' }})</p></span>\n                    <span class=\"shipTrack2 setAlign\">Packed <p *ngIf=\"bImg?.Packed !== undefiend\">({{bImg?.Packed | date: 'mediumDate'}})</p> <p  *ngIf=\"bImg?.Packed !== undefiend\">({{bImg?.Packed | date: 'shortTime' }})</p></span>\n                    <span class=\"shipTrack2 setAlign ml-3\">Shipped <p *ngIf=\"bImg?.Shipped !== undefiend\">({{bImg?.Shipped | date: 'mediumDate'}})</p> <p *ngIf=\"bImg?.Shipped !== undefiend\">({{bImg?.Shipped | date: 'shortTime' }})</p></span>\n                    <span class=\"shipTrack2 text-right\">Delivered <p *ngIf=\"bImg?.Delivered !== undefiend\">({{bImg?.Delivered | date: 'mediumDate'}})</p> <p *ngIf=\"bImg?.Delivered !== undefiend\">({{bImg?.Delivered | date: 'shortTime' }})</p></span>\n                  </div>\n                </div>\n                <img [src]=\"serverPath+'/pdfBills/images/'+bImg.billDetails.billImg[0].name\" alt=\"{{bImg.billDetails.billImg[0].name}}\" (click)=\"showBill(i)\" />\n                <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\" *ngIf=\"!bImg.payStatus\">\n                    <form class=\"d-flex align-items-center justify-content-between ml-auto\">\n                        <input type=\"text\" placeholder=\"Rs.\" [value]=\"cleanPrice(bImg.billDetails.total)\" disabled />\n                        <a class=\"btn\" (click)=\"openUpdatepayment(updatePayment, bImg._id)\">Update Payment</a>\n                    </form>\n                </nav>\n            </fieldset>\n        </owl-carousel>\n\n    </div>\n</section>\n\n<app-side-bar></app-side-bar>\n\n<ng-template #invoiceStatusTemplate>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Update Status</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    <form [formGroup]=\"invoicStatus\" (submit)=\"updateInvoiceStatus()\">\n        <h4>Select a status </h4>\n        <select formControlName=\"status\" class=\"form-control\" >\n          <option value=\"\" selected>Select</option>\n            <option value=\"1\" *ngIf=\"updateStatusValue < 2\">Ordered</option>\n            <option value=\"2\" [selected] =\"updateStatusValue == 2\" *ngIf=\"updateStatusValue < 2\">Packed</option>\n            <option value=\"3\" [selected] =\"updateStatusValue == 3\" *ngIf=\"updateStatusValue < 3\">Shipped</option>\n            <option value=\"4\" [selected] =\"updateStatusValue == 4\" *ngIf=\"updateStatusValue < 4\">Delivered</option>\n        </select>\n\n        <button type=\"submit\" class=\"mt-4 buttonClass\" [disabled]=\"dBtm\">Update</button>\n    </form>\n  </div>\n</ng-template>\n\n<section id=\"billPop\" *ngIf=\"popBill\">\n    <aside>\n        <a (click)=\"showBill(0)\" class=\"close\"></a>\n        <img [src]=\"serverPath+'/pdfBills/images/'+billData[popId].billImg[0].name\" alt=\"{{billData[popId].billImg[0].name}}\" />\n    </aside>\n</section>\n<ng-template #updatePayment>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Update Payment Status</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div *ngIf=\"dMsg\" class=\"alert-success\">{{msg}}</div>\n    <form [formGroup]=\"paymentForm\" (submit)=\"updatePayment1()\">\n        <h4>Select a payment method</h4>\n        <select formControlName=\"payMode\" class=\"form-control\" >\n            <option value=\"\">Select</option>\n            <option value=\"Net Banking\">Net Banking</option>\n            <option value=\"cash\">Cash</option>\n            <option value=\"card\">Card</option>\n            <option value=\"upi\">UPI</option>\n            <option value=\"other\">Other</option>\n            <option value=\"credit\">Credit</option>\n        </select>\n        <!-- <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"dSubmit && dFrm.payMode.errors\">\n            <div *ngIf=\"dFrm.payMode.errors.required\">Please mention your payment mode</div>\n        </div> -->\n        <!-- <button type=\"submit\" class=\"mt-4\"  [disabled]=\"dBtm\"><a class=\"btn\">Update</a></button> -->\n        <button type=\"submit\" class=\"mt-4 buttonClass\" [disabled]=\"dBtm\">Update</button>\n    </form>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/move-to-credit/move-to-credit.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/move-to-credit/move-to-credit.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n\r\n<section class=\"container py-4\">\r\n  <!-- <nav id=\"toggleMenu\" class=\"d-flex justify-content-between align-items-end\">\r\n      <a [ngClass]=\"paid ? 'active' : ''\" (click)=\"getMonthData()\"> Paid </a>\r\n      <a [ngClass]=\"!paid ? 'active' : ''\"  (click)=\"unpaid()\">Unpaid</a>\r\n  </nav> -->\r\n  <a (click)=\"toggleFilter()\" class=\"filterNow\"><span class=\"filter\"></span> Filter</a>\r\n  <div class=\"p-4\" id=\"filterSec\" >\r\n\r\n    <div  >\r\n      <owl-carousel [options]=\"menuOptions\" [items]=\"monthData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\" *ngIf=\"monthData\">\r\n          <div class=\"optionList\" *ngIf=\"monthData[0]\" (click)=\"filterMonthsWeek(1,0, monthData[0].list)\" [ngClass]=\"{'active': selectMonth === 0}\">\r\n              <strong>Current Month</strong>\r\n              <i class=\"currentMonth\"></i>\r\n              <span>({{monthData[0].list !== undefined ? monthData[0].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[0].price}}/-</span>\r\n          </div>\r\n          <div class=\"optionList\" *ngIf=\"monthData[1]\" (click)=\"filterMonthsWeek(2,1, monthData[1].list)\" [ngClass]=\"{'active': selectMonth === 1}\">\r\n              <strong>Last 2 Months</strong>\r\n              <i class=\"lastMonth\"></i>\r\n              <span>({{monthData[0].list !== undefined ? monthData[2].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[2].price}}/-</span>\r\n          </div>\r\n\r\n          <div class=\"optionList\" *ngIf=\"monthData[2]\" (click)=\"filterMonthsWeek(3,2, monthData[2].list)\" [ngClass]=\"{'active': selectMonth === 2}\">\r\n              <strong>Last 3 Months</strong>\r\n              <i class=\"lastMonth\"></i>\r\n              <span>({{monthData[0].list !== undefined ? monthData[2].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[2].price}}/-</span>\r\n          </div>\r\n\r\n          <div class=\"optionList\" *ngIf=\"monthData[3]\" (click)=\"filterMonthsWeek(6,3, monthData[3].list)\" [ngClass]=\"{'active': selectMonth === 3}\">\r\n              <strong>Last 6 Months</strong>\r\n              <i class=\"lastMonth\"></i>\r\n              <span>({{monthData[0].list !== undefined ? monthData[3].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[3].price}}/-</span>\r\n          </div>\r\n\r\n          <div class=\"optionList\" *ngIf=\"monthData[4]\" (click)=\"filterMonthsWeek(9,4, monthData[4].list)\" [ngClass]=\"{'active': selectMonth === 4}\">\r\n              <strong>Last 9 Months</strong>\r\n              <i class=\"lastMonth\"></i>\r\n              <span>({{monthData[0].list !== undefined ? monthData[4].list?.length : 0}}) &nbsp; &nbsp;  Rs. {{monthData[4].price}}/-</span>\r\n          </div>\r\n      </owl-carousel>\r\n    </div>\r\n    <div  *ngIf=\"filter\">\r\n          <div class=\"\">\r\n              <owl-carousel [options]=\"menuOptions\" [items]=\"weekData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n                  <div class=\"optionList\" *ngFor=\"let wk of weekData; let i = index\" [ngClass]=\"{'active': selectWeek == i}\" (click)='filterDays(i+1, monthData[4].list)'>\r\n                      <strong>Week {{i+1}}</strong>\r\n                      <i class=\"week\"></i>\r\n\r\n                      <span>({{wk.list?.length}}) &nbsp; &nbsp;  Rs. {{wk.price}}/-</span>\r\n                  </div>\r\n              </owl-carousel>\r\n          </div>\r\n      </div>\r\n      <div class=\"\" *ngIf=\"filter\">\r\n        <div class=\"\">\r\n            <owl-carousel [options]=\"menuOptions\" [items]=\"daysData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n                <div class=\"optionList\" *ngFor=\"let wk of daysData; let i = index\" (click)='upiPaymentData(wk)'>\r\n                  <strong *ngIf=\"i == 0 && selectWeek == 0\">Today</strong>\r\n                  <strong *ngIf=\"i == 1 && selectWeek == 0\">Yesterday</strong>\r\n                  <strong *ngIf=\"i == 0 && selectWeek > 0\">day 1</strong>\r\n                  <strong *ngIf=\"i == 1 && selectWeek > 0\">day 2</strong>\r\n                  <strong *ngIf=\"i > 1\">day {{i+1}}</strong>\r\n                  <i class=\"week\"></i>\r\n                  <span>({{wk.list?.length}}) &nbsp; &nbsp;  Rs. {{wk.price}}/-</span>\r\n                </div>\r\n            </owl-carousel>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"container\">\r\n                    <b>Purchase Line</b>\r\n                    <div class=\"top\">\r\n                      <div class=\"top-element\">12 sep Rs 1000</div>\r\n                      <div class=\"top-element\">12 sep Rs 500</div>\r\n                      <div class=\"top-element\">30 sep Rs 2000</div>\r\n                      <div class=\"top-element\">1 oct Rs 2000</div>\r\n                      <div class=\"top-element\">10 oct Rs 2000</div>\r\n                      <div class=\"top-element\">20 oct Rs 2000</div>\r\n                    </div>\r\n                      <div class=\"line\"></div>\r\n                      <div class=\"bottom\">\r\n                        <!-- <div class=\"bottom-element\">20 september Rs 1000</div>\r\n                        <div class=\"bottom-element\">20 september Rs 1800</div> -->\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"container\">\r\n                    <b>Payment line</b>\r\n                    <div class=\"top\">\r\n\r\n                    </div>\r\n                      <div class=\"line\"></div>\r\n                      <div class=\"bottom\">\r\n                        <div class=\"bottom-element\">20 sep Rs 1000</div>\r\n                        <div class=\"bottom-element\">20 sep Rs 1800</div>\r\n                        <div class=\"bottom-element\">30 sep Rs 1000</div>\r\n                        <div class=\"bottom-element\">1 oct Rs 1800</div>\r\n                        <div class=\"bottom-element\">10 oct Rs 1000</div>\r\n                        <div class=\"bottom-element\">25 oct Rs 1800</div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section class=\"container\">\r\n\r\n    <div class=\"my-3\">\r\n\r\n        <owl-carousel\r\n            [options]=\"cOptions\" [items]=\"billDData\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n            <fieldset *ngFor=\"let bImg of billDData; let i = index\">\r\n              <legend>{{bImg.billDetails.title}} {{bImg.billDetails.genDate | date: 'medium'}} {{bImg.retailerMobile}}</legend>\r\n\r\n\r\n\r\n                <img [src]=\"serverPath+'/pdfBills/images/'+bImg.billDetails.billImg[0].name\" alt=\"{{bImg.billDetails.billImg[0].name}}\" (click)=\"showBill(i)\" />\r\n                <nav class=\"menuBtn d-flex flex-wrap align-items-center justify-content-between\">\r\n\r\n                </nav>\r\n            </fieldset>\r\n        </owl-carousel>\r\n\r\n    </div>\r\n</section>\r\n<!-- <section id=\"chartSec\" class=\"container my-4 text-center\">\r\n    <img src=\"/assets/images/pie-chart.jpg\" alt=\"pie chart\" />\r\n</section> -->\r\n<app-side-bar></app-side-bar>\r\n\r\n<ng-template #deliveryTemplate>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">Delivered</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div *ngIf=\"dMsg\" class=\"alert-success\">{{msg}}</div>\r\n    <form [formGroup]=\"paymentForm\" (submit)=\"addDelivery()\">\r\n        <h4>Select a payment method</h4>\r\n        <select formControlName=\"payMode\" class=\"form-control\" >\r\n            <option value=\"\">Select</option>\r\n            <option value=\"Net Banking\">Net Banking</option>\r\n            <option value=\"cash\">Cash</option>\r\n            <option value=\"card\">Card</option>\r\n            <option value=\"upi\">UPI</option>\r\n            <option value=\"other\">Other</option>\r\n            <option value=\"credit\">Credit</option>\r\n        </select>\r\n        <!-- <div class=\"alert alert-danger inputMsg\" role=\"alert\" *ngIf=\"dSubmit && dFrm.payMode.errors\">\r\n            <div *ngIf=\"dFrm.payMode.errors.required\">Please mention your payment mode</div>\r\n        </div> -->\r\n        <!-- <button type=\"submit\" class=\"mt-4\"  [disabled]=\"dBtm\"><a class=\"btn\">Update</a></button> -->\r\n        <button type=\"submit\" class=\"mt-4 buttonClass\" [disabled]=\"dBtm\">Update</button>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n\r\n<section id=\"billPop\" *ngIf=\"popBill\">\r\n    <aside>\r\n        <a (click)=\"showBill(0)\" class=\"close\"></a>\r\n        <img [src]=\"serverPath+'/pdfBills/images/'+billData[popId].billImg[0].name\" alt=\"{{billData[popId].billImg[0].name}}\" />\r\n    </aside>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ../internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subject.js":
/*!***********************************************!*\
  !*** ./node_modules/rxjs/internal/Subject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ./Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var ObjectUnsubscribedError_1 = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js");
var SubjectSubscription_1 = __webpack_require__(/*! ./SubjectSubscription */ "./node_modules/rxjs/internal/SubjectSubscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var SubjectSubscriber = (function (_super) {
    __extends(SubjectSubscriber, _super);
    function SubjectSubscriber(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber;
}(Subscriber_1.Subscriber));
exports.SubjectSubscriber = SubjectSubscriber;
var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return new SubjectSubscriber(this);
    };
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype.next = function (value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for (var i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    };
    Subject.prototype.error = function (err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    };
    Subject.prototype.complete = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for (var i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject.prototype._trySubscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else {
            return _super.prototype._trySubscribe.call(this, subscriber);
        }
    };
    Subject.prototype._subscribe = function (subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription_1.Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription_1.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_1.Observable));
exports.Subject = Subject;
var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var destination = this.destination;
        if (destination && destination.next) {
            destination.next(value);
        }
    };
    AnonymousSubject.prototype.error = function (err) {
        var destination = this.destination;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    };
    AnonymousSubject.prototype.complete = function () {
        var destination = this.destination;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var source = this.source;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription_1.Subscription.EMPTY;
        }
    };
    return AnonymousSubject;
}(Subject));
exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/SubjectSubscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/SubjectSubscription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var SubjectSubscription = (function (_super) {
    __extends(SubjectSubscription, _super);
    function SubjectSubscription(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    };
    return SubjectSubscription;
}(Subscription_1.Subscription));
exports.SubjectSubscription = SubjectSubscription;
//# sourceMappingURL=SubjectSubscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                hasErrors = true;
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        hasErrors = true;
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                if (!teardown) {
                    return Subscription.EMPTY;
                }
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        if (subscription._addParent(this)) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                subscriptions.push(subscription);
            }
            else {
                this._subscriptions = [subscription];
            }
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (_parent === parent) {
            return false;
        }
        else if (!_parent) {
            this._parent = parent;
            return true;
        }
        else if (!_parents) {
            this._parents = [parent];
            return true;
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
            return true;
        }
        return false;
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/ObjectUnsubscribedError.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function ObjectUnsubscribedErrorImpl() {
    Error.call(this);
    this.message = 'object unsubscribed';
    this.name = 'ObjectUnsubscribedError';
    return this;
}
ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
exports.ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;
//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/noop.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noop_1 = __webpack_require__(/*! ./noop */ "./node_modules/rxjs/internal/util/noop.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./src/app/dashboard/dashboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/api-link.service */ "./src/app/shared/api-link.service.ts");
/* harmony import */ var _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guard/auth.service */ "./src/app/guard/auth.service.ts");





let DashboardService = class DashboardService {
    constructor(http, api, auth) {
        this.http = http;
        this.api = api;
        this.auth = auth;
        this.serverPath = this.api.srvLink;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': this.auth.getLogged()
        });
        this.profileInfo = {};
    }
    getProfInfo(token) {
        console.log(token);
        const duplicateHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.get(this.api.server + "profile", { headers: duplicateHeader });
    }
    getAllBill(month, year) {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.get(this.api.server + "bill/" + month + "/" + year, { headers: headers });
    }
    getSponsor() {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.get(this.api.server + "sponsor", { headers: headers });
    }
    addSponsor(data) {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.post(this.api.server + "sponsor/bill", data, { headers: headers });
    }
    getPayee() {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.get(this.api.server + "payee", { headers: headers });
    }
    addDelivery(data) {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.post(this.api.server + "delivery", data, { headers: headers });
    }
    getPayeeBill() {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.get(this.api.server + "payee/bill", { headers: headers });
    }
    getSponsorBill() {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.get(this.api.server + "sponsor/bill", { headers: headers });
    }
    getUploadBill() {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.get(this.api.server + "bill-info", { headers: headers });
    }
    getProductList(data) {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.post(this.api.server + "product/getProductList", data, { headers: headers });
    }
    createNewInvoice(data) {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.post(this.api.server + "bill/generateDealerBill", data, { headers: headers });
    }
    generateImageNewInvoice(data) {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.post(this.api.server + "bill/generateDealerBill", data, { headers: headers });
    }
    updateDeleiveryInoice(data) {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.post(this.api.server + "delivery/updatedeliveryCredit", data, { headers: headers });
    }
    updateCreditInvoice(data) {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.post(this.api.server + "delivery/updatedeliveryCredit", data, { headers: headers });
    }
    updateInvoiceStatus(data) {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.post(this.api.server + "delivery/updateInvoiceStatus", data, { headers: headers });
    }
    verifyRetailerMobileNumber(data) {
        const token = this.auth.getLogged();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': "application/json",
            'Authorization': token
        });
        return this.http.post(this.api.server + "verifyMobileNumber", data, { headers: headers });
    }
    setProfileInfo(data) {
        this.profileInfo = data;
    }
    getProfileInfo() {
        return this.profileInfo;
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_api_link_service__WEBPACK_IMPORTED_MODULE_3__["ApiLinkService"] },
    { type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
DashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashboardService);



/***/ }),

/***/ "./src/app/dealer-app/dealer-app-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/dealer-app/dealer-app-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DealerAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerAppRoutingModule", function() { return DealerAppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _move_to_credit_move_to_credit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./move-to-credit/move-to-credit.component */ "./src/app/dealer-app/move-to-credit/move-to-credit.component.ts");
/* harmony import */ var _dealer_delivery_pg_dealer_delivery_pg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dealer-delivery-pg/dealer-delivery-pg.component */ "./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.ts");
/* harmony import */ var _dealer_dashboad_component_dealer_dashboad_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dealer-dashboad-component/dealer-dashboad-component */ "./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







const routes = [
    {
        path: "dealer/dashboard",
        component: _dealer_dashboad_component_dealer_dashboad_component__WEBPACK_IMPORTED_MODULE_4__["DealerDashboadComponent"]
    },
    {
        path: "dealer/delivery",
        component: _dealer_delivery_pg_dealer_delivery_pg_component__WEBPACK_IMPORTED_MODULE_3__["DealerDeliveryPgComponent"]
    },
    {
        path: "dealer/moveToCredit",
        component: _move_to_credit_move_to_credit_component__WEBPACK_IMPORTED_MODULE_2__["MoveToCreditComponent"]
    },
    {
        path: "/profile",
        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~dashboard-dashboard-module~dealer-app-dealer-app-module~delivery-delivery-module~landing-lan~6e15f554"), __webpack_require__.e("default~dashboard-dashboard-module~dealer-app-dealer-app-module~landing-landing-module~profile-profi~35c6fc6c"), __webpack_require__.e("default~dashboard-dashboard-module~dealer-app-dealer-app-module~delivery-delivery-module~profile-pro~9910a3ab"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../profile/profile.module */ "./src/app/profile/profile.module.ts")).then(m => m.ProfileModule),
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]]
    },
];
let DealerAppRoutingModule = class DealerAppRoutingModule {
};
DealerAppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })
], DealerAppRoutingModule);



/***/ }),

/***/ "./src/app/dealer-app/dealer-app.module.ts":
/*!*************************************************!*\
  !*** ./src/app/dealer-app/dealer-app.module.ts ***!
  \*************************************************/
/*! exports provided: DealerAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerAppModule", function() { return DealerAppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _move_to_credit_move_to_credit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./move-to-credit/move-to-credit.component */ "./src/app/dealer-app/move-to-credit/move-to-credit.component.ts");
/* harmony import */ var _dealer_delivery_pg_dealer_delivery_pg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dealer-delivery-pg/dealer-delivery-pg.component */ "./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _dealer_app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dealer-app-routing.module */ "./src/app/dealer-app/dealer-app-routing.module.ts");
/* harmony import */ var _dealer_dashboad_component_dealer_dashboad_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dealer-dashboad-component/dealer-dashboad-component */ "./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");












let DealerAppModule = class DealerAppModule {
};
DealerAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        declarations: [_dealer_dashboad_component_dealer_dashboad_component__WEBPACK_IMPORTED_MODULE_10__["DealerDashboadComponent"], _dealer_delivery_pg_dealer_delivery_pg_component__WEBPACK_IMPORTED_MODULE_2__["DealerDeliveryPgComponent"], _move_to_credit_move_to_credit_component__WEBPACK_IMPORTED_MODULE_1__["MoveToCreditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _dealer_app_routing_module__WEBPACK_IMPORTED_MODULE_9__["DealerAppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__["OwlModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot()
        ]
    })
], DealerAppModule);



/***/ }),

/***/ "./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section#chartSec {\n  background-color: #ffffff;\n}\n\nsection#chartSec img {\n  max-width: 100%;\n}\n\nsection#billPop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 500;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n}\n\nsection#billPop aside {\n  background-color: #ffffff;\n  padding: 10px;\n  width: 95%;\n  max-width: 450px;\n  text-align: center;\n  position: relative;\n}\n\nsection#billPop aside {\n  max-width: 600px;\n}\n\nsection#billPop aside img {\n  width: 100%;\n}\n\nsection#billPop aside a.close {\n  cursor: pointer;\n  top: 5px;\n  right: 5px;\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/icons/close.svg\");\n}\n\ndiv.modal-body img {\n  width: 100%;\n}\n\nfieldset {\n  border: #AA0000 solid thin;\n  border-radius: 5px;\n  padding: 8px;\n  margin: 10px 0;\n}\n\nfieldset legend {\n  font-size: 15px;\n}\n\nul.sponsorList li {\n  list-style: none;\n  margin: 5px 0;\n}\n\nul.sponsorList li h4 {\n  font-size: 15px;\n  color: #252525;\n}\n\nul.sponsorList li a.btn {\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 15px;\n  cursor: pointer;\n}\n\n.modal-body h4 {\n  font-size: 14px;\n  color: #686868;\n  margin-top: 8px;\n}\n\n.modal-body input[type=text],\n.modal-body textarea,\n.modal-body select {\n  width: 100%;\n  padding: 5px 8px;\n  border-radius: 5px;\n  border: #ccc solid thin;\n  background-color: #ffffff;\n}\n\n.modal-body textarea {\n  height: 80px;\n  resize: none;\n}\n\n.modal-body button[type=submit] {\n  margin-top: 8px;\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 20px;\n  border-radius: 5px;\n  border: none;\n}\n\n.setWidth {\n  width: 100%;\n}\n\nbody {\n  background: #eee;\n  margin-top: 20px;\n}\n\n.hori-timeline .events {\n  border-top: 3px solid #e9ecef;\n}\n\n.hori-timeline .events .event-list {\n  display: block;\n  position: relative;\n  text-align: center;\n  padding-top: 70px;\n  margin-right: 0;\n}\n\n.hori-timeline .events .event-list:before {\n  content: \"\";\n  position: absolute;\n  height: 36px;\n  top: 0;\n}\n\n.hori-timeline .events .event-list .event-date {\n  position: absolute;\n  top: 38px;\n  left: 0;\n  right: 0;\n  width: 75px;\n  margin: 0 auto;\n  border-radius: 4px;\n  padding: 2px 4px;\n}\n\n@media (min-width: 1140px) {\n  .hori-timeline .events .event-list {\n    display: inline-block;\n    width: 24%;\n    padding-top: 45px;\n  }\n\n  .hori-timeline .events .event-list .event-date {\n    top: -12px;\n  }\n}\n\n.bg-soft-primary {\n  background-color: rgba(64, 144, 203, 0.3) !important;\n}\n\n.bg-soft-success {\n  background-color: rgba(71, 189, 154, 0.3) !important;\n}\n\n.bg-soft-danger {\n  background-color: rgba(231, 76, 94, 0.3) !important;\n}\n\n.bg-soft-warning {\n  background-color: rgba(249, 213, 112, 0.3) !important;\n}\n\n.card {\n  border: none;\n  margin-bottom: 24px;\n}\n\n.line {\n  width: 100%;\n  background: blue;\n  margin: 50px 0;\n  height: 5px;\n}\n\n.top,\n.bottom {\n  display: flex;\n  flex-direction: row;\n}\n\n.bottom {\n  padding-left: 50px;\n}\n\n.top .top-element,\n.bottom .bottom-element {\n  padding: 0 25px;\n  position: relative;\n}\n\n.top-element:before,\n.bottom-element:before {\n  content: \"I\";\n  height: 20px;\n  width: 20px;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background: #C33900;\n  color: white;\n  position: absolute;\n  left: 0;\n}\n\n.top-element:before {\n  bottom: -63px;\n}\n\n.bottom-element:before {\n  top: -63px;\n}\n\n.top-element:after,\n.bottom-element:after {\n  content: \"\";\n  height: 10px;\n  width: 2px;\n  background: #8ACCC6;\n  position: absolute;\n}\n\n.top-element:after {\n  left: 10px;\n  bottom: -40px;\n}\n\n.bottom-element:after {\n  left: 10px;\n  top: -20px;\n}\n\n.setBoarder {\n  border-bottom: 2px dashed #000;\n  padding-bottom: 10px;\n}\n\n.nonActicebutton {\n  background-color: #107438 !important;\n}\n\n.filterNow {\n  color: #212529 !important;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbGVyLWFwcC9kZWFsZXItZGFzaGJvYWQtY29tcG9uZW50L0M6XFxVc2Vyc1xcQWJoaXNoZWsuU2F4ZW5hMVxcRGVza3RvcFxccHJha2FzaFxcc2hvZWRlbGl2ZXJ5RnJvbnRFbmQvc3JjXFxhcHBcXGRlYWxlci1hcHBcXGRlYWxlci1kYXNoYm9hZC1jb21wb25lbnRcXGRlYWxlci1kYXNoYm9hZC1jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGVhbGVyLWFwcC9kZWFsZXItZGFzaGJvYWQtY29tcG9uZW50L2RlYWxlci1kYXNoYm9hZC1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUFtQix5QkFBQTtBQ0FuQjs7QURFQTtFQUFzQixlQUFBO0FDRXRCOztBREFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7O0FEQUE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FEQUE7RUFBd0IsZ0JBQUE7QUNJeEI7O0FERkE7RUFBNEIsV0FBQTtBQ001Qjs7QURKQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnREFBQTtBQ09KOztBREpBO0VBQXFCLFdBQUE7QUNRckI7O0FETkE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNTSjs7QUROQTtFQUFrQixlQUFBO0FDVWxCOztBRFJBO0VBQW9CLGdCQUFBO0VBQWtCLGFBQUE7QUNhdEM7O0FEWEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ2NKOztBRFhBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDY0o7O0FEWEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNjSjs7QURYQTs7O0VBR0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDY0o7O0FEWEE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ2NKOztBRFhBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDY0o7O0FEWEE7RUFDRSxXQUFBO0FDY0Y7O0FEWEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDY0Y7O0FEWkE7RUFDRSw2QkFBQTtBQ2VGOztBRGJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNnQkY7O0FEZEE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtBQ2lCRjs7QURmQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDa0JGOztBRGhCQTtFQUNFO0lBQ0kscUJBQUE7SUFDQSxVQUFBO0lBQ0EsaUJBQUE7RUNtQko7O0VEakJBO0lBQ0ksVUFBQTtFQ29CSjtBQUNGOztBRGxCQTtFQUNFLG9EQUFBO0FDb0JGOztBRGxCQTtFQUNFLG9EQUFBO0FDcUJGOztBRG5CQTtFQUNFLG1EQUFBO0FDc0JGOztBRHBCQTtFQUNFLHFEQUFBO0FDdUJGOztBRHJCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ3dCRjs7QURmQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDa0JGOztBRGZBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtBQ2tCRjs7QURmQTtFQUNFLGtCQUFBO0FDa0JGOztBRGZBOztFQUVFLGVBQUE7RUFDQSxrQkFBQTtBQ2tCRjs7QURmQTs7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUNrQkY7O0FEZkE7RUFDRSxhQUFBO0FDa0JGOztBRGZBO0VBQ0UsVUFBQTtBQ2tCRjs7QURmQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDa0JGOztBRGZBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNrQkY7O0FEZkE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQ2tCRjs7QURoQkE7RUFDRSw4QkFBQTtFQUNBLG9CQUFBO0FDbUJGOztBRGhCQTtFQUNFLG9DQUFBO0FDbUJGOztBRGpCQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUNvQkYiLCJmaWxlIjoic3JjL2FwcC9kZWFsZXItYXBwL2RlYWxlci1kYXNoYm9hZC1jb21wb25lbnQvZGVhbGVyLWRhc2hib2FkLWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvbGliLnNjc3MnO1xyXG5cclxuc2VjdGlvbiNjaGFydFNlYyB7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cclxuXHJcbnNlY3Rpb24jY2hhcnRTZWMgaW1neyBtYXgtd2lkdGg6IDEwMCU7IH1cclxuXHJcbnNlY3Rpb24jYmlsbFBvcCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5zZWN0aW9uI2JpbGxQb3AgYXNpZGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuc2VjdGlvbiNiaWxsUG9wIGFzaWRlIHsgbWF4LXdpZHRoOiA2MDBweDsgfVxyXG5cclxuc2VjdGlvbiNiaWxsUG9wIGFzaWRlIGltZyB7IHdpZHRoOiAxMDAlOyB9XHJcblxyXG5zZWN0aW9uI2JpbGxQb3AgYXNpZGUgYS5jbG9zZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zL2Nsb3NlLnN2ZycpO1xyXG59XHJcblxyXG5kaXYubW9kYWwtYm9keSBpbWcgeyB3aWR0aDogMTAwJTsgfVxyXG5cclxuZmllbGRzZXQge1xyXG4gICAgYm9yZGVyOiAjQUEwMDAwIHNvbGlkIHRoaW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuZmllbGRzZXQgbGVnZW5kIHsgZm9udC1zaXplOiAxNXB4OyB9XHJcblxyXG51bC5zcG9uc29yTGlzdCBsaSB7IGxpc3Qtc3R5bGU6IG5vbmU7IG1hcmdpbjogNXB4IDA7IH1cclxuXHJcbnVsLnNwb25zb3JMaXN0IGxpIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMjUyNTI1O1xyXG59XHJcblxyXG51bC5zcG9uc29yTGlzdCBsaSBhLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAzcHggMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkgaDQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM2ODY4Njg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IGlucHV0W3R5cGU9dGV4dF0sXHJcbi5tb2RhbC1ib2R5IHRleHRhcmVhLFxyXG4ubW9kYWwtYm9keSBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAjY2NjIHNvbGlkIHRoaW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB0ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogM3B4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5zZXRXaWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZDojZWVlO1xyXG4gIG1hcmdpbi10b3A6MjBweDtcclxufVxyXG4uaG9yaS10aW1lbGluZSAuZXZlbnRzIHtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgI2U5ZWNlZjtcclxufVxyXG4uaG9yaS10aW1lbGluZSAuZXZlbnRzIC5ldmVudC1saXN0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4uaG9yaS10aW1lbGluZSAuZXZlbnRzIC5ldmVudC1saXN0OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHRvcDogMDtcclxufVxyXG4uaG9yaS10aW1lbGluZSAuZXZlbnRzIC5ldmVudC1saXN0IC5ldmVudC1kYXRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzOHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDJweCA0cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDExNDBweCkge1xyXG4gIC5ob3JpLXRpbWVsaW5lIC5ldmVudHMgLmV2ZW50LWxpc3Qge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAyNCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIH1cclxuICAuaG9yaS10aW1lbGluZSAuZXZlbnRzIC5ldmVudC1saXN0IC5ldmVudC1kYXRlIHtcclxuICAgICAgdG9wOiAtMTJweDtcclxuICB9XHJcbn1cclxuLmJnLXNvZnQtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwxNDQsMjAzLC4zKSFpbXBvcnRhbnQ7XHJcbn1cclxuLmJnLXNvZnQtc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MSwxODksMTU0LC4zKSFpbXBvcnRhbnQ7XHJcbn1cclxuLmJnLXNvZnQtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSw3Niw5NCwuMykhaW1wb3J0YW50O1xyXG59XHJcbi5iZy1zb2Z0LXdhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ5LDIxMywxMTIsLjMpIWltcG9ydGFudDtcclxufVxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTNweCAwIHJnYmEoMjM2LDIzNiwyNDEsLjQ0KTtcclxuICAvLyBib3gtc2hhZG93OiAwIDAgMTNweCAwIHJnYmEoMjM2LDIzNiwyNDEsLjQ0KTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcblxyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogYmx1ZTtcclxuICBtYXJnaW46IDUwcHggMDtcclxuICBoZWlnaHQ6IDVweDtcclxufVxyXG5cclxuLnRvcCxcclxuLmJvdHRvbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uYm90dG9tIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi50b3AgLnRvcC1lbGVtZW50LFxyXG4uYm90dG9tIC5ib3R0b20tZWxlbWVudCB7XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRvcC1lbGVtZW50OmJlZm9yZSxcclxuLmJvdHRvbS1lbGVtZW50OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJJXCI7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogI0MzMzkwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi50b3AtZWxlbWVudDpiZWZvcmUge1xyXG4gIGJvdHRvbTogLTYzcHg7XHJcbn1cclxuXHJcbi5ib3R0b20tZWxlbWVudDpiZWZvcmUge1xyXG4gIHRvcDogLTYzcHg7XHJcbn1cclxuXHJcbi50b3AtZWxlbWVudDphZnRlcixcclxuLmJvdHRvbS1lbGVtZW50OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogMnB4O1xyXG4gIGJhY2tncm91bmQ6ICM4QUNDQzY7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4udG9wLWVsZW1lbnQ6YWZ0ZXIge1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgYm90dG9tOiAtNDBweDtcclxufVxyXG5cclxuLmJvdHRvbS1lbGVtZW50OmFmdGVyIHtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIHRvcDogLTIwcHg7XHJcbn1cclxuLnNldEJvYXJkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLm5vbkFjdGljZWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwNzQzOCAhaW1wb3J0YW50O1xyXG59XHJcbi5maWx0ZXJOb3cge1xyXG4gIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiIsInNlY3Rpb24jY2hhcnRTZWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG5zZWN0aW9uI2NoYXJ0U2VjIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuc2VjdGlvbiNiaWxsUG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5zZWN0aW9uI2JpbGxQb3AgYXNpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTUlO1xuICBtYXgtd2lkdGg6IDQ1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuc2VjdGlvbiNiaWxsUG9wIGFzaWRlIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuc2VjdGlvbiNiaWxsUG9wIGFzaWRlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5zZWN0aW9uI2JpbGxQb3AgYXNpZGUgYS5jbG9zZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb25zL2Nsb3NlLnN2Z1wiKTtcbn1cblxuZGl2Lm1vZGFsLWJvZHkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiAjQUEwMDAwIHNvbGlkIHRoaW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuZmllbGRzZXQgbGVnZW5kIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG51bC5zcG9uc29yTGlzdCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbnVsLnNwb25zb3JMaXN0IGxpIGg0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzI1MjUyNTtcbn1cblxudWwuc3BvbnNvckxpc3QgbGkgYS5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLWJvZHkgaDQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjg2ODY4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tb2RhbC1ib2R5IGlucHV0W3R5cGU9dGV4dF0sXG4ubW9kYWwtYm9keSB0ZXh0YXJlYSxcbi5tb2RhbC1ib2R5IHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogI2NjYyBzb2xpZCB0aGluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4ubW9kYWwtYm9keSB0ZXh0YXJlYSB7XG4gIGhlaWdodDogODBweDtcbiAgcmVzaXplOiBub25lO1xufVxuXG4ubW9kYWwtYm9keSBidXR0b25bdHlwZT1zdWJtaXRdIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogM3B4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uc2V0V2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5ob3JpLXRpbWVsaW5lIC5ldmVudHMge1xuICBib3JkZXItdG9wOiAzcHggc29saWQgI2U5ZWNlZjtcbn1cblxuLmhvcmktdGltZWxpbmUgLmV2ZW50cyAuZXZlbnQtbGlzdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmhvcmktdGltZWxpbmUgLmV2ZW50cyAuZXZlbnQtbGlzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzZweDtcbiAgdG9wOiAwO1xufVxuXG4uaG9yaS10aW1lbGluZSAuZXZlbnRzIC5ldmVudC1saXN0IC5ldmVudC1kYXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM4cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNzVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMnB4IDRweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDExNDBweCkge1xuICAuaG9yaS10aW1lbGluZSAuZXZlbnRzIC5ldmVudC1saXN0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI0JTtcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgfVxuXG4gIC5ob3JpLXRpbWVsaW5lIC5ldmVudHMgLmV2ZW50LWxpc3QgLmV2ZW50LWRhdGUge1xuICAgIHRvcDogLTEycHg7XG4gIH1cbn1cbi5iZy1zb2Z0LXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LCAxNDQsIDIwMywgMC4zKSAhaW1wb3J0YW50O1xufVxuXG4uYmctc29mdC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MSwgMTg5LCAxNTQsIDAuMykgIWltcG9ydGFudDtcbn1cblxuLmJnLXNvZnQtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzEsIDc2LCA5NCwgMC4zKSAhaW1wb3J0YW50O1xufVxuXG4uYmctc29mdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDksIDIxMywgMTEyLCAwLjMpICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ubGluZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBtYXJnaW46IDUwcHggMDtcbiAgaGVpZ2h0OiA1cHg7XG59XG5cbi50b3AsXG4uYm90dG9tIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmJvdHRvbSB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cblxuLnRvcCAudG9wLWVsZW1lbnQsXG4uYm90dG9tIC5ib3R0b20tZWxlbWVudCB7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9wLWVsZW1lbnQ6YmVmb3JlLFxuLmJvdHRvbS1lbGVtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiSVwiO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNDMzM5MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG4udG9wLWVsZW1lbnQ6YmVmb3JlIHtcbiAgYm90dG9tOiAtNjNweDtcbn1cblxuLmJvdHRvbS1lbGVtZW50OmJlZm9yZSB7XG4gIHRvcDogLTYzcHg7XG59XG5cbi50b3AtZWxlbWVudDphZnRlcixcbi5ib3R0b20tZWxlbWVudDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZDogIzhBQ0NDNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udG9wLWVsZW1lbnQ6YWZ0ZXIge1xuICBsZWZ0OiAxMHB4O1xuICBib3R0b206IC00MHB4O1xufVxuXG4uYm90dG9tLWVsZW1lbnQ6YWZ0ZXIge1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IC0yMHB4O1xufVxuXG4uc2V0Qm9hcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzAwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5ub25BY3RpY2VidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA3NDM4ICFpbXBvcnRhbnQ7XG59XG5cbi5maWx0ZXJOb3cge1xuICBjb2xvcjogIzIxMjUyOSAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.ts ***!
  \***********************************************************************************/
/*! exports provided: DealerDashboadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerDashboadComponent", function() { return DealerDashboadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _guard_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../guard/auth.service */ "./src/app/guard/auth.service.ts");
/* harmony import */ var _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../delivery/delivery.service */ "./src/app/delivery/delivery.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/filter.service */ "./src/app/shared/filter.service.ts");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










;
;
let DealerDashboadComponent = class DealerDashboadComponent {
    constructor(formBuilder, fetch, modalService, filterSrv, deliveryService, authService) {
        this.formBuilder = formBuilder;
        this.fetch = fetch;
        this.modalService = modalService;
        this.filterSrv = filterSrv;
        this.deliveryService = deliveryService;
        this.authService = authService;
        this.paid = true;
        this.dSubmit = false;
        this.dBtm = false;
        this.popBill = false;
        this.filter = true;
        this.currentMonth = 0;
        this.twoMonth = 0;
        this.threeMonth = 0;
        this.sixMonth = 0;
        this.ninthMonth = 0;
        this.selectWeek = 0;
        this.monthData = [];
        this.weekData = [];
        this.listSponsor = [];
        this.listPayee = [];
        this.monthDataDh = [];
        this.monthDataSp = [];
        this.monthDataPy = [];
        this.monthDataUp = [];
        this.spTotal = 0;
        this.pyTotal = 0;
        this.dashTotal = 0;
        this.upTotal = 0;
        this.col4Data = [];
        this.col3Data = [];
        this.productList = [];
        this.productChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.loadingProduct = false;
        this.selectedProduct = [];
        this.cash = 0;
        this.netBanking = 0;
        this.card = 0;
        this.upi = 0;
        this.other = 0;
        this.dataResult = [];
        this.currentActiveTopTab = "";
        this.upiPaymmentArray = [];
        this.selectedDay = '';
        this.totalPrice = 0;
        this.screenFirst = true;
        this.screenSecond = false;
        this.verificationDone = false;
        this.serverPath = this.fetch.serverPath;
        this.menuOptions = this.filterSrv.menuOptions;
        this.cOptions = this.filterSrv.cOptions;
        this.groupedData = [];
        this.productChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(900), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])())
            .subscribe((value) => {
            console.log(value);
            this.productList = [];
            this.loadingProduct = true;
            this.fetch.getProductList({ "name": value }).subscribe((data) => {
                console.log(data);
                this.loadingProduct = false;
                this.productList = data;
            }, (err) => {
            });
        });
    }
    ngOnInit() {
        this.paymentForm = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            payMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.deliveryFrm = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            payMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.movetocredit = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.getMonthData(true);
        this.getProfileInfo();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
        this.companyName = this.authService.getCompanyName();
        this.screenFirst = true;
        this.screenSecond = false;
        this.verificationDone = false;
    }
    openDelivery(template, billId, paymentType) {
        this.paymentModeForCredit = paymentType;
        this.modalRef = this.modalService.show(template);
        this.deliveryFrm.patchValue({
            billId: billId,
        });
        console.log(this.deliveryFrm);
    }
    openMoveTocredit(template, billId) {
        this.modalRef = this.modalService.show(template);
        console.log(this.profInfo);
        this.movetocredit.patchValue({
            billId: billId,
        });
        console.log(this.movetocredit.value);
    }
    openSponsor(template, billId) {
        this.modalRef = this.modalService.show(template);
        this.billId = billId;
    }
    toggleFilter() {
        this.filter = !this.filter;
    }
    sltArea(area) {
        this.billDData = [];
        this.monthData = [];
        this.selectArea = area;
        this.selectSector = null;
        this.selectBrand = null;
        this.weekData = null;
        this.col3Data = [];
        this.col4Data = [];
        this.currentActiveTopTab = area;
        this.monthDataDh = [];
        if (this.dataResult[area] !== undefined) {
            this.filterSrv.monthFilter.forEach(mth => {
                this.monthDataDh.push(this.filterSrv.filterByDateCash(this.dataResult[area], new Date().getTime(), mth));
            });
        }
        this.monthData = [];
        this.weekData = [];
        this.daysData = [];
        this.upiPaymmentArray = [];
        this.monthData = this.monthDataDh;
        if (this.dataResult[area] !== undefined) {
            this.billDData = this.monthData[0].list;
        }
    }
    sltMonth(month) {
        this.selectMonth = month - 1;
    }
    sltWeek(week) {
        this.selectWeek = week;
        console.log(this.weekData[week].list);
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            this.billData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billData);
        }
        else {
            this.billDData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billDData);
        }
    }
    getProfileInfo() {
        this.fetch.getProfInfo(this.authService.getLogged()).subscribe(res => { this.profInfo = res; }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
    getMonthData(sectionType) {
        this.billDData = [];
        this.weekData = [];
        this.daysData = [];
        this.monthData = [];
        //this.fetch.getAllBill(this.filterSrv.lastNine.getMonth() + 1, this.filterSrv.lastNine.getFullYear())
        this.deliveryService.getAllDelivery()
            .subscribe(res => {
            let data = res;
            this.paid = sectionType;
            this.allData = data;
            //this.billDData = this.allData;
            data = data.filter((d) => d.paymentMode !== "");
            this.billDData = data;
            console.log(data);
            const result = data.reduce(function (r, a) {
                r[a.paymentMode] = r[a.paymentMode] || [];
                r[a.paymentMode].push(a);
                return r;
            }, Object.create(null));
            this.dataResult = result;
            console.log(this.dataResult);
            if (result !== undefined) {
                if (result['cash'] !== undefined) {
                    this.cash = result['cash'].reduce((accumulator, currentValue) => {
                        const v = this.cleanPrice(currentValue.billDetails.total);
                        return accumulator + parseInt(v);
                    }, 0);
                }
                if (result['Net Banking'] !== undefined) {
                    this.netBanking = result['Net Banking'].reduce((accumulator, currentValue) => {
                        const v = this.cleanPrice(currentValue.billDetails.total);
                        return accumulator + parseInt(v);
                    }, 0);
                }
                if (result['card'] !== undefined) {
                    this.card = result['card'].reduce((accumulator, currentValue) => {
                        const v = this.cleanPrice(currentValue.billDetails.total);
                        return accumulator + parseInt(v);
                    }, 0);
                }
                if (result['upi'] !== undefined) {
                    this.upi = result['upi'].reduce((accumulator, currentValue) => {
                        const v = this.cleanPrice(currentValue.billDetails.total);
                        return accumulator + parseInt(v);
                    }, 0);
                }
                if (result['other'] !== undefined) {
                    this.other = result['other'].reduce((accumulator, currentValue) => {
                        const v = this.cleanPrice(currentValue.billDetails.total);
                        return accumulator + parseInt(v);
                    }, 0);
                }
            }
            console.log(this.paid);
            if (!this.paid) {
                setTimeout(() => {
                    this.closeBtn.nativeElement.click();
                }, 2000);
            }
        }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
    unpaid() {
        console.log(this.allData);
        this.monthData = [];
        this.filter = true;
        this.billDData = [];
        this.weekData = [];
        this.daysData = [];
        this.monthData = [];
        this.upiPaymmentArray = [];
        this.allData = this.allData.filter((data) => data.payStatus === false);
        this.billDData = this.allData;
        this.monthDataDh = [];
        this.filterSrv.monthFilter.map(mth => {
            this.monthDataDh.push(this.filterSrv.filterByDateCash(this.allData, new Date().getTime(), mth));
        });
        this.monthData = this.monthDataDh;
        console.log(this.monthData);
        // for (var i = 0; i < this.monthData.length; i++) {
        //   this.billDData =  this.billDData.concat(this.monthData[i].list);
        //   }
        console.log(this.billDData);
        this.paid = false;
    }
    filterMonthsWeek(month, index, data) {
        this.sltMonth(month);
        this.weekData = [];
        this.billData = [];
        this.daysData = [];
        let weekList = this.filterSrv.getWeeksStartAndEndInMonth(month, this.filterSrv.today.getMonth());
        let filterData = [];
        if (this.paid) {
            filterData = this.dataResult[this.currentActiveTopTab];
        }
        else {
            filterData = this.allData;
        }
        weekList.forEach(e => {
            this.weekData.push(this.filterSrv.filterByBillDatecash(filterData, e.end.getTime(), e.start.getTime()));
        });
        this.billDData = this.monthData[index].list;
        this.selectSector = null;
        this.selectBrand = null;
        this.col3Data = [];
        this.col4Data = [];
    }
    filterDays(month, data) {
        this.daysData = [];
        let daysList = this.filterSrv.getDaysStartAndEndInMonth(month, this.filterSrv.today.getMonth());
        daysList.forEach(e => {
            this.daysData.push(this.filterSrv.filterByBillDatecash(data, e.end.getTime(), e.start.getTime()));
        });
        this.billDData = this.weekData[month - 1].list;
        const setRange = [(month - 1) * 7, (((month - 1) * 7) + 7)];
        let d = [];
        for (let i = 0; i < this.daysData.length; i++) {
            if (i >= setRange[0] && i <= setRange[1]) {
                d.push(this.daysData[i]);
            }
        }
        this.daysData = d;
        this.selectWeek = month - 1;
        this.selectSector = null;
        this.selectBrand = null;
        this.col3Data = [];
        this.col4Data = [];
    }
    cleanPrice(amount) {
        return this.filterSrv.cleanPrice(amount);
    }
    showBill(index) {
        this.popBill = !this.popBill;
        this.popId = index;
    }
    generateFilter(data) {
        this.selectSector = null;
        this.col3Data = [];
        this.selectBrand = null;
        this.col4Data = [];
        console.log(data);
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(e => {
                let updateItem = this.col3Data.find(x => x.department === e.deportment);
                if (!updateItem)
                    this.col3Data.push({ department: e.deportment, price: this.cleanPrice(e.total), userType: "department" });
                else {
                    let index = this.col3Data.indexOf(updateItem);
                    this.col3Data[index].price = this.col3Data[index].price + this.cleanPrice(e.total);
                }
            });
        }
        else {
            data.forEach(e => {
                let updateItem = this.col3Data.find(x => x.department === e.billDetails.deportment);
                if (!updateItem)
                    this.col3Data.push({ department: e.billDetails.deportment, price: this.cleanPrice(e.billDetails.total), userType: "department" });
                else {
                    let index = this.col3Data.indexOf(updateItem);
                    this.col3Data[index].price = this.col3Data[index].price + this.cleanPrice(e.billDetails.total);
                }
            });
        }
    }
    generateBFilter(data) {
        this.selectBrand = null;
        this.col4Data = [];
        console.log(this.selectArea);
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(e => {
                let updateItem = this.col4Data.find(x => x.brand === e.title);
                if (!updateItem)
                    this.col4Data.push({ brand: e.title, price: this.cleanPrice(e.total), userType: "brand" });
                else {
                    let index = this.col4Data.indexOf(updateItem);
                    this.col4Data[index].price = this.col4Data[index].price + this.cleanPrice(e.total);
                }
            });
        }
        else {
            data.forEach(e => {
                let updateItem = this.col4Data.find(x => x.brand === e.billDetails.title);
                if (!updateItem)
                    this.col4Data.push({ brand: e.billDetails.title, price: this.cleanPrice(e.billDetails.total), userType: "brand" });
                else {
                    let index = this.col4Data.indexOf(updateItem);
                    this.col4Data[index].price = this.col4Data[index].price + this.cleanPrice(e.billDetails.total);
                }
            });
        }
    }
    get dFrm() { return this.deliveryFrm.controls; }
    searchProductName(event) {
        if (event.target.value.length > 2) {
            this.loadingProduct = true;
            this.productChange.next(event.target.value);
        }
    }
    setMobileNumber(val) {
        this.setMobile = val;
    }
    verifyMobile() {
        this.dMsg = { msg: "Please wait verifying mobile number.", alert: 'alert-success' };
        this.fetch.verifyRetailerMobileNumber({ regMobile: this.setMobile }).subscribe((data) => {
            if (data == null) {
                this.delearDetail = data;
            }
            else {
                this.delearDetail = data;
                // this.screenFirst = false;
                // this.screenSecond = true;
            }
            this.verificationDone = true;
            this.dMsg = {};
            console.log(data);
        });
    }
    moveToSecondScreen() {
        this.screenFirst = false;
        this.screenSecond = true;
    }
    NewDealerBill() {
        this.newBill = true;
        this.selectedProduct.forEach((data, index) => {
            if (this.selectedProduct[index].quantity == undefined) {
                this.selectedProduct[index]["quantity"] = 1;
            }
        });
        this.fetch.createNewInvoice({ "selectedProducts": this.selectedProduct, "company": this.authService.getCompanyName(), "type": "dashboard" }).subscribe(res => {
            this.dMsg = { msg: "Bill created successfully.", alert: 'alert-success' };
            this.selectedProduct = [];
            this.dBtm = false;
            this.paid = false;
            res["mobilenumber"] = this.setMobile;
            res['domain'] = this.authService.getDomainName();
            res['companyName'] = this.authService.getCompanyName();
            res['type'] = 'shop';
            setTimeout(() => {
                this.dMsg = {};
                this.deliveryService.generateImageNewInvoice(res).subscribe(() => { this.getMonthData(false); });
                this.paid = false;
                this.modalRef.hide();
            }, 2800);
        }, err => {
            this.dBtm = false;
            this.dMsg = { msg: err.error, alert: 'alert-danger' };
        });
    }
    setQuantity(val, index) {
        this.totalPrice = 0;
        if (this.selectedProduct[index] !== undefined) {
            this.selectedProduct[index]['quantity'] = parseInt(val);
        }
        this.selectedProduct.map((data) => {
            console.log(data.price);
            console.log(data.quantity);
            this.totalPrice += (parseInt(data.price) * parseInt(data.quantity !== undefined ? data.quantity : 1));
        });
    }
    addDelivery() {
        this.dBtm = false;
        let requestData = this.deliveryFrm.value;
        requestData['category'] = 'delivery';
        requestData['payStatus'] = false;
        if (this.paid) {
            requestData['payMode'] = this.paymentModeForCredit;
            requestData['payStatus'] = true;
        }
        else {
            requestData['payMode'] = this.deliveryFrm.value.payMode;
            if (this.deliveryFrm.value.payMode !== "") {
                requestData['payStatus'] = true;
            }
            else {
                requestData['payStatus'] = false;
            }
        }
        this.deliveryService.moveToDelivery(requestData).subscribe(res => {
            this.dMsg = { msg: 'Updated Successfully', alert: 'alert-success' };
            this.dBtm = true;
            setTimeout(() => {
                this.dBtm = false;
                this.modalRef.hide();
            }, 2800);
        }, err => {
            this.dBtm = true;
            this.dMsg = { msg: err.error, alert: 'alert-danger' };
        });
    }
    moveToCredit1() {
        this.dBtm = false;
        let requestData = this.movetocredit.value;
        requestData['category'] = 'credit';
        requestData['payStatus'] = false;
        console.log(requestData);
        this.fetch.updateCreditInvoice(requestData).subscribe(res => {
            this.dMsg = { msg: 'Updated Successfully', alert: 'alert-success' };
            this.dBtm = true;
            setTimeout(() => {
                this.dBtm = false;
                this.modalRef.hide();
            }, 2800);
        }, err => {
            this.dBtm = true;
            this.dMsg = { msg: err.error, alert: 'alert-danger' };
        });
    }
    openUpdatepayment(template, billId) {
        this.modalRef = this.modalService.show(template);
        this.paymentForm.patchValue({
            billId: billId,
        });
    }
    updatePayment1() {
        console.log("hello");
        this.deliveryService.updatepaymentMode(this.paymentForm.value)
            .subscribe((data) => {
            this.paymentForm.reset();
            this.dMsg = true;
            this.msg = "Payment approved successfully!";
            console.log(data);
            setTimeout(() => {
                this.getMonthData(true);
                this.dMsg = null;
                this.msg = "";
                this.modalRef.hide();
            }, 3500);
        }, err => {
            console.log("hello");
        });
    }
    upiPaymentData(index, data) {
        this.billDData = this.daysData[index].list;
        this.selectedDay = index;
        const gpayData = data.list.filter((d) => d.upiType === 'gpay');
        const payTmData = data.list.filter((d) => d.upiType === 'payTm');
        const phonePay = data.list.filter((d) => d.upiType === 'phonePay');
        let gpay = 0;
        gpay = gpayData.reduce((accumulator, currentValue) => {
            const v = this.cleanPrice(currentValue.billDetails.total);
            return accumulator + parseInt(v);
        }, 0);
        let ptpay = 0;
        ptpay = payTmData.reduce((accumulator, currentValue) => {
            const v = this.cleanPrice(currentValue.billDetails.total);
            return accumulator + parseInt(v);
        }, 0);
        let phpay = 0;
        phpay = phonePay.reduce((accumulator, currentValue) => {
            const v = this.cleanPrice(currentValue.billDetails.total);
            return accumulator + parseInt(v);
        }, 0);
        this.upiPaymmentArray.push(gpay);
        this.upiPaymmentArray.push(ptpay);
        this.upiPaymmentArray.push(phpay);
    }
};
DealerDashboadComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _shared_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"] },
    { type: _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_2__["DeliveryService"] },
    { type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"])('closeBtn', { static: false })
], DealerDashboadComponent.prototype, "closeBtn", void 0);
DealerDashboadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-dealer-dashboad',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dealer-dashboad-component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dealer-dashboad-component.scss */ "./src/app/dealer-app/dealer-dashboad-component/dealer-dashboad-component.scss")).default]
    })
], DealerDashboadComponent);



/***/ }),

/***/ "./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div#filterSec {\n  background-color: #fff;\n  border-radius: 0 0 8px 8px;\n}\n\ndiv#filterSec h4 {\n  font-size: 15px;\n  font-weight: bold;\n  color: #aa0000;\n  margin: 20px 0 1px 0;\n}\n\ndiv.optionList {\n  margin: 5px 0;\n}\n\ndiv.optionList label {\n  width: 150px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  cursor: pointer;\n}\n\ndiv.optionList label input[type=radio] {\n  margin-right: 10px;\n}\n\nsection#deliverySec {\n  background-color: #ffffff;\n}\n\nsection#deliverySec h3 {\n  font-size: 22px;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\nsection#deliverySec p {\n  margin: 3px 0;\n}\n\ndiv#shipTrack i {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #E2E2E2;\n}\n\ndiv#shipTrack i.active {\n  background-color: #AA0000;\n}\n\ndiv#shipTrack span {\n  width: 130px;\n  border-top: #E2E2E2 solid 5px;\n}\n\n.shipTrack1 {\n  border-top: #AA0000 solid 5px !important;\n}\n\ndiv#shipTrack h3 {\n  color: #aa0000;\n  font-size: 18px;\n}\n\nfieldset {\n  border-radius: 5px;\n  padding: 8px;\n  margin: 10px 0;\n}\n\nfieldset legend {\n  font-size: 15px;\n  color: #AA0000;\n}\n\n.buttonClass {\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 15px;\n  cursor: pointer;\n  border: none;\n}\n\ndiv#shipTrack i {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #E2E2E2;\n}\n\ndiv#shipTrack i.active {\n  background-color: #AA0000;\n}\n\ndiv#shipTrack span {\n  width: 130px;\n  border-top: #E2E2E2 solid 5px;\n}\n\ndiv#shipTrack h3 {\n  color: #aa0000;\n  font-size: 18px;\n}\n\n.shipTrack2 {\n  border-top: none !important;\n  font-size: 12px;\n}\n\n.setAlign {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbGVyLWFwcC9kZWFsZXItZGVsaXZlcnktcGcvQzpcXFVzZXJzXFxBYmhpc2hlay5TYXhlbmExXFxEZXNrdG9wXFxwcmFrYXNoXFxzaG9lZGVsaXZlcnlGcm9udEVuZC9zcmNcXGFwcFxcZGVhbGVyLWFwcFxcZGVhbGVyLWRlbGl2ZXJ5LXBnXFxkZWFsZXItZGVsaXZlcnktcGcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlYWxlci1hcHAvZGVhbGVyLWRlbGl2ZXJ5LXBnL2RlYWxlci1kZWxpdmVyeS1wZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQXlDLGtCQUFBO0FDRXpDOztBREFBO0VBQXNCLHlCQUFBO0FDSXRCOztBREZBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURGQTtFQUNJLGFBQUE7QUNLSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0tKOztBREZBO0VBQXlCLHlCQUFBO0FDTXpCOztBREpBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0FDT0o7O0FESkE7RUFDRSx3Q0FBQTtBQ09GOztBREpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNPSjs7QURKQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNPSjs7QURKQTtFQUFrQixlQUFBO0VBQWlCLGNBQUE7QUNTbkM7O0FEUEE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDVUY7O0FEUkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNXRjs7QURSQTtFQUF5Qix5QkFBQTtBQ1l6Qjs7QURWQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQ2FGOztBRFZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNhRjs7QURWQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBQ2FGOztBRFRBO0VBQ0Usa0JBQUE7QUNZRiIsImZpbGUiOiJzcmMvYXBwL2RlYWxlci1hcHAvZGVhbGVyLWRlbGl2ZXJ5LXBnL2RlYWxlci1kZWxpdmVyeS1wZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiNmaWx0ZXJTZWMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG59XG5cbmRpdiNmaWx0ZXJTZWMgaDQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcmdiKDE3MCwwLDApO1xuICAgIG1hcmdpbjogMjBweCAwIDFweCAwO1xufVxuXG5kaXYub3B0aW9uTGlzdCB7XG4gICAgbWFyZ2luOiA1cHggMDtcbn1cblxuZGl2Lm9wdGlvbkxpc3QgbGFiZWwge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2Lm9wdGlvbkxpc3QgbGFiZWwgaW5wdXRbdHlwZT1yYWRpb10geyBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyB7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBoMyB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBwIHtcbiAgICBtYXJnaW46IDNweCAwO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMkUyRTI7XG59XG5cbmRpdiNzaGlwVHJhY2sgaS5hY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwOyB9XG5cbmRpdiNzaGlwVHJhY2sgc3BhbiB7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGJvcmRlci10b3A6ICNFMkUyRTIgc29saWQgNXB4O1xufVxuXG4uc2hpcFRyYWNrMSB7XG4gIGJvcmRlci10b3A6ICNBQTAwMDAgc29saWQgNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNzaGlwVHJhY2sgaDMge1xuICAgIGNvbG9yOiAjYWEwMDAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuZmllbGRzZXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbmZpZWxkc2V0IGxlZ2VuZCB7IGZvbnQtc2l6ZTogMTVweDsgY29sb3I6ICNBQTAwMDA7IH1cblxuLmJ1dHRvbkNsYXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDNweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmRpdiNzaGlwVHJhY2sgaSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMkUyRTI7XG59XG5cbmRpdiNzaGlwVHJhY2sgaS5hY3RpdmUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwOyB9XG5cbmRpdiNzaGlwVHJhY2sgc3BhbiB7XG4gIHdpZHRoOiAxMzBweDtcbiAgYm9yZGVyLXRvcDogI0UyRTJFMiBzb2xpZCA1cHg7XG59XG5cbmRpdiNzaGlwVHJhY2sgaDMge1xuICBjb2xvcjogI2FhMDAwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2hpcFRyYWNrMiB7XG4gIGJvcmRlci10b3A6IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xuXG59XG5cbi5zZXRBbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsImRpdiNmaWx0ZXJTZWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbn1cblxuZGl2I2ZpbHRlclNlYyBoNCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBtYXJnaW46IDIwcHggMCAxcHggMDtcbn1cblxuZGl2Lm9wdGlvbkxpc3Qge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG5kaXYub3B0aW9uTGlzdCBsYWJlbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5vcHRpb25MaXN0IGxhYmVsIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5zZWN0aW9uI2RlbGl2ZXJ5U2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBoMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBwIHtcbiAgbWFyZ2luOiAzcHggMDtcbn1cblxuZGl2I3NoaXBUcmFjayBpIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UyRTJFMjtcbn1cblxuZGl2I3NoaXBUcmFjayBpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG59XG5cbmRpdiNzaGlwVHJhY2sgc3BhbiB7XG4gIHdpZHRoOiAxMzBweDtcbiAgYm9yZGVyLXRvcDogI0UyRTJFMiBzb2xpZCA1cHg7XG59XG5cbi5zaGlwVHJhY2sxIHtcbiAgYm9yZGVyLXRvcDogI0FBMDAwMCBzb2xpZCA1cHggIWltcG9ydGFudDtcbn1cblxuZGl2I3NoaXBUcmFjayBoMyB7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjQUEwMDAwO1xufVxuXG4uYnV0dG9uQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbn1cblxuZGl2I3NoaXBUcmFjayBzcGFuIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBib3JkZXItdG9wOiAjRTJFMkUyIHNvbGlkIDVweDtcbn1cblxuZGl2I3NoaXBUcmFjayBoMyB7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaGlwVHJhY2syIHtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5zZXRBbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DealerDeliveryPgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerDeliveryPgComponent", function() { return DealerDeliveryPgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _guard_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../guard/auth.service */ "./src/app/guard/auth.service.ts");
/* harmony import */ var _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../delivery/delivery.service */ "./src/app/delivery/delivery.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/filter.service */ "./src/app/shared/filter.service.ts");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










;
;
let DealerDeliveryPgComponent = class DealerDeliveryPgComponent {
    constructor(formBuilder, fetch, modalService, filterSrv, deliveryService, authService) {
        this.formBuilder = formBuilder;
        this.fetch = fetch;
        this.modalService = modalService;
        this.filterSrv = filterSrv;
        this.deliveryService = deliveryService;
        this.authService = authService;
        this.paid = true;
        this.dSubmit = false;
        this.dBtm = false;
        this.popBill = false;
        this.filter = true;
        this.currentMonth = 0;
        this.twoMonth = 0;
        this.threeMonth = 0;
        this.sixMonth = 0;
        this.ninthMonth = 0;
        this.selectWeek = 0;
        this.monthData = [];
        this.weekData = [];
        this.listSponsor = [];
        this.listPayee = [];
        this.monthDataDh = [];
        this.monthDataSp = [];
        this.monthDataPy = [];
        this.monthDataUp = [];
        this.spTotal = 0;
        this.pyTotal = 0;
        this.dashTotal = 0;
        this.upTotal = 0;
        this.col4Data = [];
        this.col3Data = [];
        this.productList = [];
        this.productChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.loadingProduct = false;
        this.selectedProduct = [];
        this.cash = 0;
        this.netBanking = 0;
        this.card = 0;
        this.upi = 0;
        this.other = 0;
        this.dataResult = [];
        this.currentActiveTopTab = "";
        this.updateStatusValue = 1;
        this.upiPaymmentArray = [];
        this.serverPath = this.fetch.serverPath;
        this.menuOptions = this.filterSrv.menuOptions;
        this.cOptions = this.filterSrv.cOptions;
        this.groupedData = [];
        this.productChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(900), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])())
            .subscribe((value) => {
            console.log(value);
            this.productList = [];
            this.loadingProduct = true;
            this.fetch.getProductList({ "name": value }).subscribe((data) => {
                console.log(data);
                this.loadingProduct = false;
                this.productList = data;
            }, (err) => {
            });
        });
    }
    ngOnInit() {
        this.paymentForm = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            payMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.invoicStatus = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.getMonthData();
        this.getProfileInfo();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    openInvoiceStatus(template, billdata) {
        this.updateStatusValue = (billdata.invoiceStatus == undefined || billdata.invoiceStatus == "") ? 1 : billdata.invoiceStatus;
        console.log(this.billDData);
        const f = this.billDData.filter((data) => data._id == billdata._id);
        console.log(f);
        if (f.length) {
            // this.updateStatusValue = f[0].invoiceStatus;
            console.log(this.updateStatusValue);
        }
        this.modalRef = this.modalService.show(template);
        console.log(this.profInfo);
        this.invoicStatus.patchValue({
            billId: billdata._id,
        });
    }
    toggleFilter() {
        this.filter = !this.filter;
    }
    sltArea(area) {
        this.billDData = [];
        this.weekData = [];
        this.monthData = [];
        this.daysData = [];
        this.selectArea = area;
        this.selectWeek = null;
        this.selectSector = null;
        this.selectBrand = null;
        this.weekData = null;
        this.col3Data = [];
        this.col4Data = [];
        this.currentActiveTopTab = area;
        this.monthDataDh = [];
        if (this.dataResult[area] !== undefined) {
            this.filterSrv.monthFilter.forEach(mth => {
                this.monthDataDh.push(this.filterSrv.filterByDateCash(this.dataResult[area], new Date().getTime(), mth));
            });
        }
        this.monthData = [];
        this.weekData = [];
        this.daysData = [];
        this.upiPaymmentArray = [];
        this.monthData = this.monthDataDh;
        if (this.dataResult[area] !== undefined) {
            this.billDData = this.monthData[0].list;
        }
    }
    sltMonth(month) {
        this.selectMonth = month - 1;
    }
    sltWeek(week) {
        this.selectWeek = week;
        console.log(this.weekData[week].list);
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            this.billData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billData);
        }
        else {
            this.billDData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billDData);
        }
    }
    getProfileInfo() {
        this.fetch.getProfInfo(this.authService.getLogged()).subscribe(res => { this.profInfo = res; }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
    getMonthData() {
        this.monthData = [];
        this.billDData = [];
        this.deliveryService.getAllDelivery()
            .subscribe(res => {
            let data = res;
            this.paid = true;
            this.allData = data;
            this.billDData = this.allData;
            console.log(this.allData);
            data = data.filter((d) => d.paymentMode !== "" && d.category == "delivery");
            this.billDData = data;
            const result = data.reduce(function (r, a) {
                r[a.paymentMode] = r[a.paymentMode] || [];
                r[a.paymentMode].push(a);
                return r;
            }, Object.create(null));
            this.dataResult = result;
            console.log(this.dataResult);
            //this.billDData = this.dataResult.map((data: any))
            if (result !== undefined) {
                if (result['cash'] !== undefined) {
                    this.cash = result['cash'].reduce((accumulator, currentValue) => {
                        const v = this.cleanPrice(currentValue.billDetails.total);
                        return accumulator + parseInt(v);
                    }, 0);
                }
                if (result['Net Banking'] !== undefined) {
                    this.netBanking = result['Net Banking'].reduce((accumulator, currentValue) => {
                        const v = this.cleanPrice(currentValue.billDetails.total);
                        return accumulator + parseInt(v);
                    }, 0);
                }
                if (result['card'] !== undefined) {
                    this.card = result['card'].reduce((accumulator, currentValue) => {
                        const v = this.cleanPrice(currentValue.billDetails.total);
                        return accumulator + parseInt(v);
                    }, 0);
                }
                if (result['upi'] !== undefined) {
                    this.upi = result['upi'].reduce((accumulator, currentValue) => {
                        const v = this.cleanPrice(currentValue.billDetails.total);
                        return accumulator + parseInt(v);
                    }, 0);
                }
                if (result['other'] !== undefined) {
                    this.other = result['other'].reduce((accumulator, currentValue) => {
                        const v = this.cleanPrice(currentValue.billDetails.total);
                        return accumulator + parseInt(v);
                    }, 0);
                }
            }
        }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
    unpaid() {
        this.paid = false;
        this.filter = true;
        this.billDData = [];
        this.weekData = [];
        this.daysData = [];
        this.upiPaymmentArray = [];
        // this.filterSrv.monthFilter.forEach(mth => {
        //   this.monthDataDh.push(this.filterSrv.filterByDateCash(this.allData, this.filterSrv.monthFilter[0], mth))
        // });
        console.log(this.allData);
        this.allData = this.allData.filter((data) => data.payStatus === false && data.category === 'delivery');
        console.log(this.allData);
        this.billDData = this.allData;
        this.monthDataDh = [];
        this.filterSrv.monthFilter.forEach(mth => {
            this.monthDataDh.push(this.filterSrv.filterByDateCash(this.allData, new Date().getTime(), mth));
        });
        console.log(this.monthDataDh);
        this.monthData = [];
        this.monthData = this.monthDataDh;
        // for (var i = 0; i < this.monthData.length; i++) {
        //   this.billDData =  this.billDData.concat(this.monthData[i].list);
        //   }
        console.log(this.billDData);
    }
    filterMonthsWeek(month, index, data) {
        this.sltMonth(month);
        this.weekData = [];
        this.billData = [];
        this.daysData = [];
        let weekList = this.filterSrv.getWeeksStartAndEndInMonth(month, this.filterSrv.today.getMonth());
        console.log(weekList);
        // console.log(this.selectArea);
        //  console.log(this.monthDataDh);
        let filterData = [];
        if (this.paid) {
            filterData = this.dataResult[this.currentActiveTopTab];
        }
        else {
            filterData = this.allData;
        }
        weekList.forEach(e => {
            this.weekData.push(this.filterSrv.filterByBillDatecash(filterData, e.end.getTime(), e.start.getTime()));
        });
        console.log(this.weekData);
        this.billDData = this.monthData[index].list;
        // const setRange = [(month -1)*4, (((month -1)*4) + 4) ];
        // console.log(this.weekData);
        // let d = [];
        // for (let i=0; i < this.weekData.length; i++) {
        //   if (i>= setRange[0] && i<= setRange[1]) {
        //     d.push(this.weekData[i])
        //   }
        // }
        // this.weekData = d;
        console.log(this.billDData);
        this.selectWeek = null;
        this.selectSector = null;
        this.selectBrand = null;
        this.col3Data = [];
        this.col4Data = [];
        //console.log(this.weekData);
    }
    filterDays(month, data) {
        this.daysData = [];
        //console.log(data);
        // this.billDData = this.weekData[month].list;
        let daysList = this.filterSrv.getDaysStartAndEndInMonth(month, this.filterSrv.today.getMonth());
        console.log(daysList);
        // console.log(this.selectArea);
        daysList.forEach(e => {
            this.daysData.push(this.filterSrv.filterByBillDatecash(data, e.end.getTime(), e.start.getTime()));
        });
        this.billDData = this.weekData[month - 1].list;
        const setRange = [(month - 1) * 7, (((month - 1) * 7) + 7)];
        console.log(this.weekData);
        let d = [];
        for (let i = 0; i < this.daysData.length; i++) {
            if (i >= setRange[0] && i <= setRange[1]) {
                d.push(this.daysData[i]);
            }
        }
        this.daysData = d;
        console.log(this.daysData);
        this.selectWeek = month - 1;
        this.selectSector = null;
        this.selectBrand = null;
        this.col3Data = [];
        this.col4Data = [];
        //console.log(this.weekData);
    }
    cleanPrice(amount) {
        return this.filterSrv.cleanPrice(amount);
    }
    showBill(index) {
        this.popBill = !this.popBill;
        this.popId = index;
    }
    generateFilter(data) {
        this.selectSector = null;
        this.col3Data = [];
        this.selectBrand = null;
        this.col4Data = [];
        console.log(data);
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(e => {
                let updateItem = this.col3Data.find(x => x.department === e.deportment);
                if (!updateItem)
                    this.col3Data.push({ department: e.deportment, price: this.cleanPrice(e.total), userType: "department" });
                else {
                    let index = this.col3Data.indexOf(updateItem);
                    this.col3Data[index].price = this.col3Data[index].price + this.cleanPrice(e.total);
                }
            });
        }
        else {
            data.forEach(e => {
                let updateItem = this.col3Data.find(x => x.department === e.billDetails.deportment);
                if (!updateItem)
                    this.col3Data.push({ department: e.billDetails.deportment, price: this.cleanPrice(e.billDetails.total), userType: "department" });
                else {
                    let index = this.col3Data.indexOf(updateItem);
                    this.col3Data[index].price = this.col3Data[index].price + this.cleanPrice(e.billDetails.total);
                }
            });
        }
    }
    generateBFilter(data) {
        this.selectBrand = null;
        this.col4Data = [];
        console.log(this.selectArea);
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(e => {
                let updateItem = this.col4Data.find(x => x.brand === e.title);
                if (!updateItem)
                    this.col4Data.push({ brand: e.title, price: this.cleanPrice(e.total), userType: "brand" });
                else {
                    let index = this.col4Data.indexOf(updateItem);
                    this.col4Data[index].price = this.col4Data[index].price + this.cleanPrice(e.total);
                }
            });
        }
        else {
            data.forEach(e => {
                let updateItem = this.col4Data.find(x => x.brand === e.billDetails.title);
                if (!updateItem)
                    this.col4Data.push({ brand: e.billDetails.title, price: this.cleanPrice(e.billDetails.total), userType: "brand" });
                else {
                    let index = this.col4Data.indexOf(updateItem);
                    this.col4Data[index].price = this.col4Data[index].price + this.cleanPrice(e.billDetails.total);
                }
            });
        }
    }
    updateInvoiceStatus() {
        this.dBtm = true;
        this.fetch.updateInvoiceStatus(this.invoicStatus.value).subscribe(res => {
            this.dMsg1 = true;
            this.dMsg = { msg: res, alert: 'alert-success' };
            this.dBtm = false;
            for (let i = 0; i < this.billDData.length; i++) {
                if (this.billDData[i]._id == this.invoicStatus.value.billId) {
                    this.billDData[i].invoiceStatus = this.invoicStatus.value.status;
                    if (parseInt(this.invoicStatus.value.status) == 2) {
                        this.billDData[i]['Packed'] = new Date().getTime();
                    }
                    if (parseInt(this.invoicStatus.value.status) == 3) {
                        this.billDData[i]['Shipped'] = new Date().getTime();
                    }
                    if (parseInt(this.invoicStatus.value.status) == 4) {
                        this.billDData[i]['Delivered'] = new Date().getTime();
                    }
                }
            }
            setTimeout(() => {
                this.dMsg = null;
                this.msg = "";
                this.modalRef.hide();
            }, 2000);
        }, err => {
            this.dBtm = false;
            this.dMsg = { msg: err.error, alert: 'alert-danger' };
        });
    }
    openUpdatepayment(template, billId) {
        this.modalRef = this.modalService.show(template);
        this.paymentForm.patchValue({
            billId: billId,
        });
    }
    updatePayment1() {
        this.deliveryService.updatepaymentMode(this.paymentForm.value)
            .subscribe((data) => {
            this.paymentForm.reset();
            this.dMsg = true;
            this.msg = "Payment approved successfully!";
            this.getMonthData();
            console.log(data);
            setTimeout(() => {
                this.dMsg = null;
                this.msg = "";
                this.getMonthData();
                this.modalRef.hide();
            }, 3500);
        }, err => {
            console.log("hello");
        });
    }
    upiPaymentData(index, data) {
        console.log(data);
        this.billDData = this.daysData[index].list;
        this.selectedDay = index;
        const gpayData = data.list.filter((d) => d.upiType === 'gpay');
        const payTmData = data.list.filter((d) => d.upiType === 'payTm');
        const phonePay = data.list.filter((d) => d.upiType === 'phonePay');
        let gpay = 0;
        gpay = gpayData.reduce((accumulator, currentValue) => {
            const v = this.cleanPrice(currentValue.billDetails.total);
            return accumulator + parseInt(v);
        }, 0);
        let ptpay = 0;
        ptpay = payTmData.reduce((accumulator, currentValue) => {
            const v = this.cleanPrice(currentValue.billDetails.total);
            return accumulator + parseInt(v);
        }, 0);
        let phpay = 0;
        phpay = phonePay.reduce((accumulator, currentValue) => {
            const v = this.cleanPrice(currentValue.billDetails.total);
            return accumulator + parseInt(v);
        }, 0);
        this.upiPaymmentArray.push(gpay);
        this.upiPaymmentArray.push(ptpay);
        this.upiPaymmentArray.push(phpay);
    }
};
DealerDeliveryPgComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _shared_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"] },
    { type: _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_2__["DeliveryService"] },
    { type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
DealerDeliveryPgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-dealer-delivery-pg',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dealer-delivery-pg.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dealer-delivery-pg.component.scss */ "./src/app/dealer-app/dealer-delivery-pg/dealer-delivery-pg.component.scss")).default]
    })
], DealerDeliveryPgComponent);



/***/ }),

/***/ "./src/app/dealer-app/move-to-credit/move-to-credit.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dealer-app/move-to-credit/move-to-credit.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div#filterSec {\n  background-color: #fff;\n  border-radius: 0 0 8px 8px;\n}\n\ndiv#filterSec h4 {\n  font-size: 15px;\n  font-weight: bold;\n  color: #aa0000;\n  margin: 20px 0 1px 0;\n}\n\ndiv.optionList {\n  margin: 5px 0;\n}\n\ndiv.optionList label {\n  width: 150px;\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  cursor: pointer;\n}\n\ndiv.optionList label input[type=radio] {\n  margin-right: 10px;\n}\n\nsection#deliverySec {\n  background-color: #ffffff;\n}\n\nsection#deliverySec h3 {\n  font-size: 22px;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\nsection#deliverySec p {\n  margin: 3px 0;\n}\n\ndiv#shipTrack i {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #E2E2E2;\n}\n\ndiv#shipTrack i.active {\n  background-color: #AA0000;\n}\n\ndiv#shipTrack span {\n  width: 130px;\n  border-top: #E2E2E2 solid 5px;\n}\n\n.shipTrack1 {\n  border-top: #AA0000 solid 5px !important;\n}\n\ndiv#shipTrack h3 {\n  color: #aa0000;\n  font-size: 18px;\n}\n\nfieldset {\n  border-radius: 5px;\n  padding: 8px;\n  margin: 10px 0;\n}\n\nfieldset legend {\n  font-size: 15px;\n  color: #AA0000;\n}\n\n.buttonClass {\n  background-color: #AA0000;\n  color: #ffffff;\n  padding: 3px 15px;\n  cursor: pointer;\n  border: none;\n}\n\ndiv#shipTrack i {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  background-color: #E2E2E2;\n}\n\ndiv#shipTrack i.active {\n  background-color: #AA0000;\n}\n\ndiv#shipTrack span {\n  width: 130px;\n  border-top: #E2E2E2 solid 5px;\n}\n\ndiv#shipTrack h3 {\n  color: #aa0000;\n  font-size: 18px;\n}\n\n.shipTrack2 {\n  border-top: none !important;\n}\n\n.setAlign {\n  text-align: center;\n}\n\n.line {\n  width: 100%;\n  background: blue;\n  margin: 50px 0;\n  height: 5px;\n}\n\n.top,\n.bottom {\n  display: flex;\n  flex-direction: row;\n}\n\n.bottom {\n  padding-left: 50px;\n}\n\n.top .top-element,\n.bottom .bottom-element {\n  padding: 0 25px;\n  position: relative;\n  padding-left: 0px;\n}\n\n.top-element:before,\n.bottom-element:before {\n  content: \"I\";\n  height: 20px;\n  width: 20px;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  background: #C33900;\n  color: white;\n  position: absolute;\n  left: 0;\n}\n\n.top-element:before {\n  bottom: -63px;\n}\n\n.bottom-element:before {\n  top: -63px;\n}\n\n.top-element:after,\n.bottom-element:after {\n  content: \"\";\n  height: 10px;\n  width: 2px;\n  background: #8ACCC6;\n  position: absolute;\n}\n\n.top-element:after {\n  left: 10px;\n  bottom: -40px;\n}\n\n.bottom-element:after {\n  left: 10px;\n  top: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhbGVyLWFwcC9tb3ZlLXRvLWNyZWRpdC9DOlxcVXNlcnNcXEFiaGlzaGVrLlNheGVuYTFcXERlc2t0b3BcXHByYWthc2hcXHNob2VkZWxpdmVyeUZyb250RW5kL3NyY1xcYXBwXFxkZWFsZXItYXBwXFxtb3ZlLXRvLWNyZWRpdFxcbW92ZS10by1jcmVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlYWxlci1hcHAvbW92ZS10by1jcmVkaXQvbW92ZS10by1jcmVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUF5QyxrQkFBQTtBQ0V6Qzs7QURBQTtFQUFzQix5QkFBQTtBQ0l0Qjs7QURGQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDS0Y7O0FERkE7RUFDRSxhQUFBO0FDS0Y7O0FERkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNLRjs7QURGQTtFQUF5Qix5QkFBQTtBQ016Qjs7QURKQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtBQ09GOztBREpBO0VBQ0Esd0NBQUE7QUNPQTs7QURKQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDT0Y7O0FESkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDT0Y7O0FESkE7RUFBa0IsZUFBQTtFQUFpQixjQUFBO0FDU25DOztBRFBBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1VBOztBRFJBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDV0E7O0FEUkE7RUFBeUIseUJBQUE7QUNZekI7O0FEVkE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNhQTs7QURWQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDYUE7O0FEVkE7RUFDQSwyQkFBQTtBQ2FBOztBRFRBO0VBQ0Esa0JBQUE7QUNZQTs7QUROQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDU0Y7O0FETkE7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0FDU0Y7O0FETkE7RUFDRSxrQkFBQTtBQ1NGOztBRE5BOztFQUVFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDU0Y7O0FETkE7O0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDU0Y7O0FETkE7RUFDRSxhQUFBO0FDU0Y7O0FETkE7RUFDRSxVQUFBO0FDU0Y7O0FETkE7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1NGOztBRE5BO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNTRjs7QUROQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9kZWFsZXItYXBwL21vdmUtdG8tY3JlZGl0L21vdmUtdG8tY3JlZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2I2ZpbHRlclNlYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcclxufVxyXG5cclxuZGl2I2ZpbHRlclNlYyBoNCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiByZ2IoMTcwLDAsMCk7XHJcbiAgbWFyZ2luOiAyMHB4IDAgMXB4IDA7XHJcbn1cclxuXHJcbmRpdi5vcHRpb25MaXN0IHtcclxuICBtYXJnaW46IDVweCAwO1xyXG59XHJcblxyXG5kaXYub3B0aW9uTGlzdCBsYWJlbCB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5kaXYub3B0aW9uTGlzdCBsYWJlbCBpbnB1dFt0eXBlPXJhZGlvXSB7IG1hcmdpbi1yaWdodDogMTBweDsgfVxyXG5cclxuc2VjdGlvbiNkZWxpdmVyeVNlYyB7IGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cclxuXHJcbnNlY3Rpb24jZGVsaXZlcnlTZWMgaDMge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnNlY3Rpb24jZGVsaXZlcnlTZWMgcCB7XHJcbiAgbWFyZ2luOiAzcHggMDtcclxufVxyXG5cclxuZGl2I3NoaXBUcmFjayBpIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xyXG59XHJcblxyXG5kaXYjc2hpcFRyYWNrIGkuYWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDsgfVxyXG5cclxuZGl2I3NoaXBUcmFjayBzcGFuIHtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgYm9yZGVyLXRvcDogI0UyRTJFMiBzb2xpZCA1cHg7XHJcbn1cclxuXHJcbi5zaGlwVHJhY2sxIHtcclxuYm9yZGVyLXRvcDogI0FBMDAwMCBzb2xpZCA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuZGl2I3NoaXBUcmFjayBoMyB7XHJcbiAgY29sb3I6ICNhYTAwMDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuZmllbGRzZXQgbGVnZW5kIHsgZm9udC1zaXplOiAxNXB4OyBjb2xvcjogI0FBMDAwMDsgfVxyXG5cclxuLmJ1dHRvbkNsYXNzIHtcclxuYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcclxuY29sb3I6ICNmZmZmZmY7XHJcbnBhZGRpbmc6IDNweCAxNXB4O1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbmJvcmRlcjogbm9uZTtcclxufVxyXG5kaXYjc2hpcFRyYWNrIGkge1xyXG53aWR0aDogMjBweDtcclxuaGVpZ2h0OiAyMHB4O1xyXG5ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xyXG59XHJcblxyXG5kaXYjc2hpcFRyYWNrIGkuYWN0aXZlIHsgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDsgfVxyXG5cclxuZGl2I3NoaXBUcmFjayBzcGFuIHtcclxud2lkdGg6IDEzMHB4O1xyXG5ib3JkZXItdG9wOiAjRTJFMkUyIHNvbGlkIDVweDtcclxufVxyXG5cclxuZGl2I3NoaXBUcmFjayBoMyB7XHJcbmNvbG9yOiAjYWEwMDAwO1xyXG5mb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5zaGlwVHJhY2syIHtcclxuYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLnNldEFsaWduIHtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXIge1xyXG5cclxufVxyXG5cclxuLmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi50b3AsXHJcbi5ib3R0b20ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmJvdHRvbSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4udG9wIC50b3AtZWxlbWVudCxcclxuLmJvdHRvbSAuYm90dG9tLWVsZW1lbnQge1xyXG4gIHBhZGRpbmc6IDAgMjVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi50b3AtZWxlbWVudDpiZWZvcmUsXHJcbi5ib3R0b20tZWxlbWVudDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiSVwiO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICNDMzM5MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4udG9wLWVsZW1lbnQ6YmVmb3JlIHtcclxuICBib3R0b206IC02M3B4O1xyXG59XHJcblxyXG4uYm90dG9tLWVsZW1lbnQ6YmVmb3JlIHtcclxuICB0b3A6IC02M3B4O1xyXG59XHJcblxyXG4udG9wLWVsZW1lbnQ6YWZ0ZXIsXHJcbi5ib3R0b20tZWxlbWVudDphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjOEFDQ0M2O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnRvcC1lbGVtZW50OmFmdGVyIHtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIGJvdHRvbTogLTQwcHg7XHJcbn1cclxuXHJcbi5ib3R0b20tZWxlbWVudDphZnRlciB7XHJcbiAgbGVmdDogMTBweDtcclxuICB0b3A6IC0yMHB4O1xyXG59XHJcbiIsImRpdiNmaWx0ZXJTZWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcbn1cblxuZGl2I2ZpbHRlclNlYyBoNCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBtYXJnaW46IDIwcHggMCAxcHggMDtcbn1cblxuZGl2Lm9wdGlvbkxpc3Qge1xuICBtYXJnaW46IDVweCAwO1xufVxuXG5kaXYub3B0aW9uTGlzdCBsYWJlbCB7XG4gIHdpZHRoOiAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5vcHRpb25MaXN0IGxhYmVsIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5zZWN0aW9uI2RlbGl2ZXJ5U2VjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBoMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuc2VjdGlvbiNkZWxpdmVyeVNlYyBwIHtcbiAgbWFyZ2luOiAzcHggMDtcbn1cblxuZGl2I3NoaXBUcmFjayBpIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UyRTJFMjtcbn1cblxuZGl2I3NoaXBUcmFjayBpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQTAwMDA7XG59XG5cbmRpdiNzaGlwVHJhY2sgc3BhbiB7XG4gIHdpZHRoOiAxMzBweDtcbiAgYm9yZGVyLXRvcDogI0UyRTJFMiBzb2xpZCA1cHg7XG59XG5cbi5zaGlwVHJhY2sxIHtcbiAgYm9yZGVyLXRvcDogI0FBMDAwMCBzb2xpZCA1cHggIWltcG9ydGFudDtcbn1cblxuZGl2I3NoaXBUcmFjayBoMyB7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG5maWVsZHNldCBsZWdlbmQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjQUEwMDAwO1xufVxuXG4uYnV0dG9uQ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwMDAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogM3B4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xufVxuXG5kaXYjc2hpcFRyYWNrIGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBMDAwMDtcbn1cblxuZGl2I3NoaXBUcmFjayBzcGFuIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBib3JkZXItdG9wOiAjRTJFMkUyIHNvbGlkIDVweDtcbn1cblxuZGl2I3NoaXBUcmFjayBoMyB7XG4gIGNvbG9yOiAjYWEwMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5zaGlwVHJhY2syIHtcbiAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2V0QWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIG1hcmdpbjogNTBweCAwO1xuICBoZWlnaHQ6IDVweDtcbn1cblxuLnRvcCxcbi5ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uYm90dG9tIHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4udG9wIC50b3AtZWxlbWVudCxcbi5ib3R0b20gLmJvdHRvbS1lbGVtZW50IHtcbiAgcGFkZGluZzogMCAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4udG9wLWVsZW1lbnQ6YmVmb3JlLFxuLmJvdHRvbS1lbGVtZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiSVwiO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNDMzM5MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG4udG9wLWVsZW1lbnQ6YmVmb3JlIHtcbiAgYm90dG9tOiAtNjNweDtcbn1cblxuLmJvdHRvbS1lbGVtZW50OmJlZm9yZSB7XG4gIHRvcDogLTYzcHg7XG59XG5cbi50b3AtZWxlbWVudDphZnRlcixcbi5ib3R0b20tZWxlbWVudDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZDogIzhBQ0NDNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udG9wLWVsZW1lbnQ6YWZ0ZXIge1xuICBsZWZ0OiAxMHB4O1xuICBib3R0b206IC00MHB4O1xufVxuXG4uYm90dG9tLWVsZW1lbnQ6YWZ0ZXIge1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IC0yMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/dealer-app/move-to-credit/move-to-credit.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dealer-app/move-to-credit/move-to-credit.component.ts ***!
  \***********************************************************************/
/*! exports provided: MoveToCreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveToCreditComponent", function() { return MoveToCreditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _guard_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../guard/auth.service */ "./src/app/guard/auth.service.ts");
/* harmony import */ var _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../delivery/delivery.service */ "./src/app/delivery/delivery.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _shared_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/filter.service */ "./src/app/shared/filter.service.ts");
/* harmony import */ var _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard/dashboard.service */ "./src/app/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










;
;
let MoveToCreditComponent = class MoveToCreditComponent {
    constructor(formBuilder, fetch, modalService, filterSrv, deliveryService, authService) {
        this.formBuilder = formBuilder;
        this.fetch = fetch;
        this.modalService = modalService;
        this.filterSrv = filterSrv;
        this.deliveryService = deliveryService;
        this.authService = authService;
        this.paid = true;
        this.dSubmit = false;
        this.dBtm = false;
        this.popBill = false;
        this.filter = true;
        this.currentMonth = 0;
        this.twoMonth = 0;
        this.threeMonth = 0;
        this.sixMonth = 0;
        this.ninthMonth = 0;
        this.selectWeek = 0;
        this.monthData = [];
        this.weekData = [];
        this.listSponsor = [];
        this.listPayee = [];
        this.monthDataDh = [];
        this.monthDataSp = [];
        this.monthDataPy = [];
        this.monthDataUp = [];
        this.spTotal = 0;
        this.pyTotal = 0;
        this.dashTotal = 0;
        this.upTotal = 0;
        this.col4Data = [];
        this.col3Data = [];
        this.productList = [];
        this.productChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.loadingProduct = false;
        this.selectedProduct = [];
        this.cash = 0;
        this.netBanking = 0;
        this.card = 0;
        this.upi = 0;
        this.other = 0;
        this.dataResult = [];
        this.currentActiveTopTab = "";
        this.serverPath = this.fetch.serverPath;
        this.menuOptions = this.filterSrv.menuOptions;
        this.cOptions = this.filterSrv.cOptions;
        this.groupedData = [];
        this.productChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(900), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["distinctUntilChanged"])())
            .subscribe((value) => {
            console.log(value);
            this.productList = [];
            this.loadingProduct = true;
            this.fetch.getProductList({ "name": value }).subscribe((data) => {
                console.log(data);
                this.loadingProduct = false;
                this.productList = data;
            }, (err) => {
            });
        });
    }
    ngOnInit() {
        this.paymentForm = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            payMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.deliveryFrm = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            payMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.movetocredit = this.formBuilder.group({
            billId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
        this.getMonthData();
        this.getProfileInfo();
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template);
    }
    openDelivery(template, billId) {
        this.modalRef = this.modalService.show(template);
        console.log(this.profInfo);
        this.deliveryFrm.patchValue({
            billId: billId,
        });
        console.log(this.deliveryFrm);
    }
    openMoveTocredit(template, billId) {
        this.modalRef = this.modalService.show(template);
        console.log(this.profInfo);
        this.movetocredit.patchValue({
            billId: billId,
        });
    }
    openSponsor(template, billId) {
        this.modalRef = this.modalService.show(template);
        this.billId = billId;
    }
    toggleFilter() {
        this.filter = !this.filter;
    }
    sltArea(area) {
        this.billDData = [];
        this.selectArea = area;
        this.selectWeek = null;
        this.selectSector = null;
        this.selectBrand = null;
        this.weekData = null;
        this.col3Data = [];
        this.col4Data = [];
        this.currentActiveTopTab = area;
        this.monthDataDh = [];
        console.log(this.filterSrv.monthFilter);
        this.filterSrv.monthFilter.forEach(mth => {
            this.monthDataDh.push(this.filterSrv.filterByDateCash(this.dataResult[area], new Date().getTime(), mth));
        });
        console.log(this.monthDataDh);
        this.monthData = [];
        this.daysData = [];
        this.monthData = this.monthDataDh;
        for (var i = 0; i < this.monthData.length; i++) {
            this.billDData = this.billDData.concat(this.monthData[i].list);
        }
        console.log(this.billDData);
    }
    sltMonth(month) {
        this.selectMonth = month - 1;
    }
    sltWeek(week) {
        this.selectWeek = week;
        console.log(this.weekData[week].list);
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            this.billData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billData);
        }
        else {
            this.billDData = this.weekDataList = this.weekData[week].list;
            this.generateFilter(this.billDData);
        }
    }
    getProfileInfo() {
        this.fetch.getProfInfo(this.authService.getLogged()).subscribe(res => { this.profInfo = res; }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
    getMonthData() {
        this.monthData = [];
        this.billDData = [];
        this.deliveryService.getAllDelivery()
            .subscribe(res => {
            let data = res;
            this.paid = true;
            console.log(data);
            this.allData = data.filter((d) => d.paymentMode !== "" && d.category === 'credit');
            this.billDData = this.allData;
            this.unpaid();
        }, err => { this.pgMsg = { msg: err.error, alert: 'alert-danger' }; });
    }
    unpaid() {
        this.paid = false;
        this.filter = true;
        //  this.billDData = [];
        // this.filterSrv.monthFilter.forEach(mth => {
        //   this.monthDataDh.push(this.filterSrv.filterByDateCash(this.allData, this.filterSrv.monthFilter[0], mth))
        // });
        console.log(this.allData);
        //this.allData = this.allData.filter((data: any) => data.payStatus === false);
        console.log(this.allData);
        this.monthDataDh = [];
        this.filterSrv.monthFilter.forEach(mth => {
            this.monthDataDh.push(this.filterSrv.filterByDateCash(this.allData, new Date().getTime(), mth));
        });
        console.log(this.monthDataDh);
        this.monthData = [];
        this.monthData = this.monthDataDh;
        // for (var i = 0; i < this.monthData.length; i++) {
        //   this.billDData =  this.billDData.concat(this.monthData[i].list);
        //   }
    }
    filterMonthsWeek(month, index, data) {
        this.sltMonth(month);
        this.weekData = [];
        this.billData = [];
        this.daysData = [];
        let weekList = this.filterSrv.getWeeksStartAndEndInMonth(month, this.filterSrv.today.getMonth());
        console.log(weekList);
        // console.log(this.selectArea);
        //  console.log(this.monthDataDh);
        let filterData = [];
        if (this.paid) {
            filterData = this.dataResult[this.currentActiveTopTab];
        }
        else {
            filterData = this.allData;
        }
        weekList.forEach(e => {
            this.weekData.push(this.filterSrv.filterByBillDatecash(filterData, e.end.getTime(), e.start.getTime()));
        });
        console.log(this.weekData);
        this.billDData = this.monthData[index].list;
        // const setRange = [(month -1)*4, (((month -1)*4) + 4) ];
        // console.log(this.weekData);
        // let d = [];
        // for (let i=0; i < this.weekData.length; i++) {
        //   if (i>= setRange[0] && i<= setRange[1]) {
        //     d.push(this.weekData[i])
        //   }
        // }
        // this.weekData = d;
        console.log(this.billDData);
        this.selectWeek = null;
        this.selectSector = null;
        this.selectBrand = null;
        this.col3Data = [];
        this.col4Data = [];
        //console.log(this.weekData);
    }
    filterDays(month, data) {
        // console.log(month);
        this.sltMonth(month);
        this.daysData = [];
        this.selectWeek = month - 1;
        //console.log(data);
        // this.billDData = this.weekData[month].list;
        let daysList = this.filterSrv.getDaysStartAndEndInMonth(month, this.filterSrv.today.getMonth());
        console.log(daysList);
        // console.log(this.selectArea);
        daysList.forEach(e => {
            this.daysData.push(this.filterSrv.filterByBillDatecash(data, e.end.getTime(), e.start.getTime()));
        });
        this.billDData = this.weekData[month - 1].list;
        const setRange = [(month - 1) * 7, (((month - 1) * 7) + 7)];
        console.log(this.weekData);
        let d = [];
        for (let i = 0; i < this.daysData.length; i++) {
            if (i >= setRange[0] && i <= setRange[1]) {
                d.push(this.daysData[i]);
            }
        }
        this.daysData = d;
        console.log(this.daysData);
        // console.log(this.weekData);
        this.selectWeek = month - 1;
        this.selectSector = null;
        this.selectBrand = null;
        this.col3Data = [];
        this.col4Data = [];
        //console.log(this.weekData);
    }
    cleanPrice(amount) {
        return this.filterSrv.cleanPrice(amount);
    }
    showBill(index) {
        this.popBill = !this.popBill;
        this.popId = index;
    }
    generateFilter(data) {
        this.selectSector = null;
        this.col3Data = [];
        this.selectBrand = null;
        this.col4Data = [];
        console.log(data);
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(e => {
                let updateItem = this.col3Data.find(x => x.department === e.deportment);
                if (!updateItem)
                    this.col3Data.push({ department: e.deportment, price: this.cleanPrice(e.total), userType: "department" });
                else {
                    let index = this.col3Data.indexOf(updateItem);
                    this.col3Data[index].price = this.col3Data[index].price + this.cleanPrice(e.total);
                }
            });
        }
        else {
            data.forEach(e => {
                let updateItem = this.col3Data.find(x => x.department === e.billDetails.deportment);
                if (!updateItem)
                    this.col3Data.push({ department: e.billDetails.deportment, price: this.cleanPrice(e.billDetails.total), userType: "department" });
                else {
                    let index = this.col3Data.indexOf(updateItem);
                    this.col3Data[index].price = this.col3Data[index].price + this.cleanPrice(e.billDetails.total);
                }
            });
        }
    }
    generateBFilter(data) {
        this.selectBrand = null;
        this.col4Data = [];
        console.log(this.selectArea);
        if (this.selectArea === 'Dashboard' || this.selectArea === 'Uploaded') {
            data.forEach(e => {
                let updateItem = this.col4Data.find(x => x.brand === e.title);
                if (!updateItem)
                    this.col4Data.push({ brand: e.title, price: this.cleanPrice(e.total), userType: "brand" });
                else {
                    let index = this.col4Data.indexOf(updateItem);
                    this.col4Data[index].price = this.col4Data[index].price + this.cleanPrice(e.total);
                }
            });
        }
        else {
            data.forEach(e => {
                let updateItem = this.col4Data.find(x => x.brand === e.billDetails.title);
                if (!updateItem)
                    this.col4Data.push({ brand: e.billDetails.title, price: this.cleanPrice(e.billDetails.total), userType: "brand" });
                else {
                    let index = this.col4Data.indexOf(updateItem);
                    this.col4Data[index].price = this.col4Data[index].price + this.cleanPrice(e.billDetails.total);
                }
            });
        }
    }
    get dFrm() { return this.deliveryFrm.controls; }
    searchProductName(event) {
        if (event.target.value.length > 2) {
            this.loadingProduct = true;
            this.productChange.next(event.target.value);
        }
    }
    NewDealerBill() {
        this.selectedProduct.forEach((data, index) => {
            if (this.selectedProduct[index].quantity == undefined) {
                this.selectedProduct[index]["quantity"] = 1;
            }
        });
        this.fetch.createNewInvoice({ "selectedProducts": this.selectedProduct }).subscribe(res => {
            this.dMsg = { msg: res, alert: 'alert-success' };
            this.selectedProduct = [];
            this.dBtm = false;
            setTimeout(() => {
                console.log(res);
                this.deliveryService.generateImageNewInvoice(res).subscribe(() => { });
                this.modalRef.hide();
            }, 2800);
        }, err => {
            this.dBtm = false;
            this.dMsg = { msg: err.error, alert: 'alert-danger' };
        });
    }
    setQuantity(val, index) {
        this.selectedProduct[index]['quantity'] = parseInt(val);
        console.log(this.selectedProduct);
    }
    addDelivery() {
        this.dBtm = false;
        let requestData = this.deliveryFrm.value;
        requestData['category'] = 'delivery';
        console.log(requestData);
        this.deliveryService.moveToDelivery(requestData).subscribe(res => {
            this.dMsg = { msg: 'Updated Successfully', alert: 'alert-success' };
            this.dBtm = true;
            setTimeout(() => {
                this.dBtm = false;
                this.modalRef.hide();
            }, 2800);
        }, err => {
            this.dBtm = true;
            this.dMsg = { msg: err.error, alert: 'alert-danger' };
        });
    }
    moveToCredit1() {
        this.dBtm = false;
        let requestData = this.movetocredit.value;
        requestData['category'] = 'credit';
        requestData['payStatus'] = false;
        console.log(requestData);
        this.fetch.updateCreditInvoice(requestData).subscribe(res => {
            this.dMsg = { msg: 'Updated Successfully', alert: 'alert-success' };
            this.dBtm = true;
            setTimeout(() => {
                this.dBtm = false;
                this.modalRef.hide();
            }, 2800);
        }, err => {
            this.dBtm = true;
            this.dMsg = { msg: err.error, alert: 'alert-danger' };
        });
    }
    openUpdatepayment(template, billId) {
        this.modalRef = this.modalService.show(template);
        this.paymentForm.patchValue({
            billId: billId,
        });
    }
    updatePayment() {
        console.log("hello");
        this.deliveryService.updatepaymentMode(this.paymentForm.value)
            .subscribe((data) => {
            this.paymentForm.reset();
            this.dMsg = true;
            this.msg = "Payment approved successfully!";
            console.log(data);
            setTimeout(() => {
                this.dMsg = null;
                this.msg = "";
                this.modalRef.hide();
            }, 3500);
        }, err => {
            console.log("hello");
        });
    }
};
MoveToCreditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _shared_filter_service__WEBPACK_IMPORTED_MODULE_4__["FilterService"] },
    { type: _delivery_delivery_service__WEBPACK_IMPORTED_MODULE_2__["DeliveryService"] },
    { type: _guard_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
MoveToCreditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
        selector: 'app-move-to-credit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./move-to-credit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dealer-app/move-to-credit/move-to-credit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./move-to-credit.component.scss */ "./src/app/dealer-app/move-to-credit/move-to-credit.component.scss")).default]
    })
], MoveToCreditComponent);



/***/ })

}]);
//# sourceMappingURL=dealer-app-dealer-app-module-es2015.js.map