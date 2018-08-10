(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_add_designer_add_designer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-designer/add-designer.component */ "./src/app/components/add-designer/add-designer.component.ts");
/* harmony import */ var _components_designers_list_designers_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/designers-list/designers-list.component */ "./src/app/components/designers-list/designers-list.component.ts");
/* harmony import */ var _modules_routing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/routing/routing.module */ "./src/app/modules/routing/routing.module.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_designers_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/designers.service */ "./src/app/services/designers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_add_designer_add_designer_component__WEBPACK_IMPORTED_MODULE_3__["AddDesignerComponent"],
                _components_designers_list_designers_list_component__WEBPACK_IMPORTED_MODULE_4__["DesignersListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _modules_routing_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_9__["FlashMessagesModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"]
            ],
            providers: [_services_designers_service__WEBPACK_IMPORTED_MODULE_11__["DesignersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-designer/add-designer.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/add-designer/add-designer.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cb{\r\n  position: relative;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-20%);\r\n  transform: translateY(-20%);\r\n}\r\n\r\n.form-border {\r\n  border: solid 1px lightgray;\r\n  border-radius: 3px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/add-designer/add-designer.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-designer/add-designer.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-con\">\n  <div class=\"container py-3\">\n    <div class=\"row justify-content-center py-3\">\n      <div class=\"col-8 login-container p-5 form-border\">\n        <h2 class=\"text-center\">הוסף מעצב/ת</h2>\n        <hr>\n        <flash-messages class=\"text-center\"></flash-messages>\n        <form dir=\"rtl\" #form (submit)=\"addDesigner()\" class=\"text-right\">\n\n          <div class=\"row\">\n            <div class=\"form-group col\">\n              <label for=\"fullName\">שם מלא</label>\n              <input type=\"text\" class=\"form-control text-right\" id=\"fullName\" name=\"fullName\" [(ngModel)]=\"designer.fullName\"\n                     required>\n            </div>\n            <div class=\"form-group col\">\n              <label for=\"instagramName\">שם משתמש</label>\n              <input type=\"text\" class=\"form-control text-right\" id=\"instagramName\" name=\"instagramName\"  [(ngModel)]=\"designer.instagramName\"\n                     required>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"form-group col\">\n              <label for=\"phoneNumber\">מספר פלאפון</label>\n              <input type=\"text\" class=\"form-control text-right\" id=\"phoneNumber\" name=\"phoneNumber\" [(ngModel)]=\"designer.phoneNumber\"\n                     required>\n            </div>\n            <div class=\"form-group col\">\n              <label for=\"region\">אזור בארץ</label>\n              <input type=\"text\" class=\"form-control text-right\" id=\"region\" name=\"region\"  [(ngModel)]=\"designer.region\"\n                     required>\n            </div>\n            <div class=\"form-group col\">\n              <label for=\"numberOfFollowers\">מספר עוקבים</label>\n              <input type=\"number\" class=\"form-control text-right\" id=\"numberOfFollowers\" name=\"numberOfFollowers\" [(ngModel)]=\"designer.numberOfFollowers\"\n                     required>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"form-group col\">\n              <label for=\"startingDate\">תאריך התחלה</label>\n              <input type=\"date\" class=\"form-control text-right\" id=\"startingDate\" name=\"startingDate\" [(ngModel)]=\"designer.startingDate\"\n                     required>\n            </div>\n\n            <div class=\"form-check col\">\n              <div class=\"cb\">\n                <input class=\"form-check-input\" type=\"checkbox\" name=\"ownWebsite\" id=\"ownWebsite\" [(ngModel)]=\"designer.ownWebsite\" >\n                <label class=\"form-check-label mr-4\" for=\"ownWebsite\">\n                  בעל/ת אתר\n                </label>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\" *ngIf=\"isWebsiteOwner()\">\n            <div class=\"form-group col\">\n              <label for=\"websitesName\">שם האתר</label>\n              <input type=\"text\" class=\"form-control text-right\" id=\"websitesName\" name=\"websitesName\" [(ngModel)]=\"websitesName\"\n                     required>\n            </div>\n            <div class=\"form-group col\">\n              <label for=\"websitesURL\">כתובת אתר</label>\n              <input type=\"text\" class=\"form-control text-right\" id=\"websitesURL\" name=\"websitesURL\"  [(ngModel)]=\"websitesURL\"\n                     required>\n            </div>\n          </div>\n\n          <button [disabled]=\"!isValid()\" class=\"btn btn-outline-primary mt-3 btn-block\" type=\"submit\">הוסף</button>\n\n\n        </form>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-designer/add-designer.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-designer/add-designer.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddDesignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDesignerComponent", function() { return AddDesignerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_designer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/designer */ "./src/app/models/designer.ts");
/* harmony import */ var _services_designers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/designers.service */ "./src/app/services/designers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddDesignerComponent = /** @class */ (function () {
    function AddDesignerComponent(fms, designerSvc) {
        this.fms = fms;
        this.designerSvc = designerSvc;
        this.designer = _models_designer__WEBPACK_IMPORTED_MODULE_2__["DesignerMaker"].makeEmptyDesigner();
        this.websitesName = '';
        this.websitesURL = '';
    }
    AddDesignerComponent.prototype.ngOnInit = function () {
        console.log(this.designer.startingDate);
    };
    AddDesignerComponent.prototype.addDesigner = function () {
        var _this = this;
        this.tryToAddOwnership();
        this.designerSvc.addDesigner(this.designer).then(function () {
            _this.fms.show('עלה בהצלחה!', { cssClass: 'alert-success', timeout: 8000 });
        }).catch(function (err) {
            _this.fms.show('חלה בעיה במהלך העלאת המעצב/ת', { cssClass: 'alert-danger', timeout: 3000 });
        });
    };
    AddDesignerComponent.prototype.isWebsiteOwner = function () {
        return Object(_models_designer__WEBPACK_IMPORTED_MODULE_2__["isWebsiteOwner"])(this.designer);
    };
    AddDesignerComponent.prototype.tryToAddOwnership = function () {
        if (Object(_models_designer__WEBPACK_IMPORTED_MODULE_2__["isWebsiteOwner"])(this.designer)) {
            this.designer.websitesName = this.websitesName;
            this.designer.websitesURL = this.websitesURL;
        }
    };
    AddDesignerComponent.prototype.isValid = function () {
        return this.designerSvc.isValid(this.designer, this.websitesName, this.websitesURL);
    };
    AddDesignerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-designer',
            template: __webpack_require__(/*! ./add-designer.component.html */ "./src/app/components/add-designer/add-designer.component.html"),
            styles: [__webpack_require__(/*! ./add-designer.component.css */ "./src/app/components/add-designer/add-designer.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _services_designers_service__WEBPACK_IMPORTED_MODULE_3__["DesignersService"]])
    ], AddDesignerComponent);
    return AddDesignerComponent;
}());



/***/ }),

/***/ "./src/app/components/designers-list/designers-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/designers-list/designers-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/designers-list/designers-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/designers-list/designers-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  designers-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/designers-list/designers-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/designers-list/designers-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: DesignersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignersListComponent", function() { return DesignersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesignersListComponent = /** @class */ (function () {
    function DesignersListComponent() {
    }
    DesignersListComponent.prototype.ngOnInit = function () {
    };
    DesignersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-designers-list',
            template: __webpack_require__(/*! ./designers-list.component.html */ "./src/app/components/designers-list/designers-list.component.html"),
            styles: [__webpack_require__(/*! ./designers-list.component.css */ "./src/app/components/designers-list/designers-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DesignersListComponent);
    return DesignersListComponent;
}());



/***/ }),

/***/ "./src/app/models/designer.ts":
/*!************************************!*\
  !*** ./src/app/models/designer.ts ***!
  \************************************/
/*! exports provided: DesignerMaker, isWebsiteOwner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerMaker", function() { return DesignerMaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWebsiteOwner", function() { return isWebsiteOwner; });
var DesignerMaker = /** @class */ (function () {
    function DesignerMaker() {
    }
    DesignerMaker.makeEmptyDesigner = function () {
        return {
            fullName: '',
            instagramName: '',
            ownWebsite: false,
            phoneNumber: '',
            numberOfFollowers: 0,
            region: '',
            startingDate: new Date(2016, 0, 1, 0, 0, 0)
        };
    };
    return DesignerMaker;
}());

function isWebsiteOwner(designer) {
    return designer.ownWebsite;
}


/***/ }),

/***/ "./src/app/modules/routing/routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/routing/routing.module.ts ***!
  \***************************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_add_designer_add_designer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/add-designer/add-designer.component */ "./src/app/components/add-designer/add-designer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'add-designer', pathMatch: 'full' },
    { path: 'add-designer', component: _components_add_designer_add_designer_component__WEBPACK_IMPORTED_MODULE_3__["AddDesignerComponent"] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/services/designers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/designers.service.ts ***!
  \***********************************************/
/*! exports provided: DesignersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignersService", function() { return DesignersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_designer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/designer */ "./src/app/models/designer.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DesignersService = /** @class */ (function () {
    function DesignersService(afs) {
        this.afs = afs;
    }
    DesignersService.prototype.isValid = function (designer, websitesName, websitesURL) {
        var designerIsValid = (designer.fullName != "" &&
            this.checkLastChar(designer.fullName) &&
            designer.instagramName != "" &&
            this.checkLastChar(designer.instagramName) &&
            designer.phoneNumber.length <= 11 &&
            designer.phoneNumber.length >= 10 &&
            designer.region != "" &&
            this.checkLastChar(designer.region) &&
            designer.numberOfFollowers > 0);
        if (Object(_models_designer__WEBPACK_IMPORTED_MODULE_1__["isWebsiteOwner"])(designer)) {
            designerIsValid = designerIsValid &&
                websitesName != "" &&
                this.checkLastChar(websitesName) &&
                websitesURL != "" &&
                this.checkLastChar(websitesURL);
        }
        return designerIsValid;
    };
    DesignersService.prototype.checkLastChar = function (str) {
        return str.substr(str.length) != " ";
    };
    DesignersService.prototype.addDesigner = function (designer) {
        return this.afs.collection("designers").add(designer);
    };
    DesignersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], DesignersService);
    return DesignersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBk6EX_6apprlU95aP3pKx8zAjynoJvHiU',
        authDomain: 'mode-d8c61.firebaseapp.com',
        databaseURL: 'https://mode-d8c61.firebaseio.com',
        projectId: 'mode-d8c61',
        storageBucket: 'mode-d8c61.appspot.com',
        messagingSenderId: '468249403896'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER\Desktop\Projects\MODE\עזרים\designers-list\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map