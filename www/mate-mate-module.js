(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mate-mate-module"],{

/***/ "./src/app/mate/mate.module.ts":
/*!*************************************!*\
  !*** ./src/app/mate/mate.module.ts ***!
  \*************************************/
/*! exports provided: MatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatePageModule", function() { return MatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mate.page */ "./src/app/mate/mate.page.ts");







var MatePageModule = /** @class */ (function () {
    function MatePageModule() {
    }
    MatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _mate_page__WEBPACK_IMPORTED_MODULE_6__["MatePage"] }])
            ],
            declarations: [_mate_page__WEBPACK_IMPORTED_MODULE_6__["MatePage"]]
        })
    ], MatePageModule);
    return MatePageModule;
}());



/***/ }),

/***/ "./src/app/mate/mate.page.html":
/*!*************************************!*\
  !*** ./src/app/mate/mate.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Mateus Chinês</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h1>Bem vindo a calculadora</h1>\n\n  <h3>Tabuada do {{n}}}</h3>\n\n  <p *ngFor=\"let x of xs\">\n    {{n}} vezes {{x}} é igual a {{n*x}}\n  </p>\n\n  <ion-button *ngFor=\"lei i of xs\" (click)=\"cal(i)\" color=\"secondary\">Tabuada do {{i}}</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mate/mate.page.scss":
/*!*************************************!*\
  !*** ./src/app/mate/mate.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGUvbWF0ZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/mate/mate.page.ts":
/*!***********************************!*\
  !*** ./src/app/mate/mate.page.ts ***!
  \***********************************/
/*! exports provided: MatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatePage", function() { return MatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatePage = /** @class */ (function () {
    function MatePage() {
        this.n = 7;
        this.xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    MatePage.prototype.ngOnInit = function () {
    };
    MatePage.prototype.cal = function (valor) {
        this.n = valor;
    };
    MatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mate',
            template: __webpack_require__(/*! ./mate.page.html */ "./src/app/mate/mate.page.html"),
            styles: [__webpack_require__(/*! ./mate.page.scss */ "./src/app/mate/mate.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatePage);
    return MatePage;
}());



/***/ })

}]);
//# sourceMappingURL=mate-mate-module.js.map