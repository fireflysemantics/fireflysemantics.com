(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/ */ "./src/app/services/index.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const _c0 = function (a0) { return { "CenterContent": a0 }; };
class AppComponent {
    constructor(a, d, s, auth, rss, analytics) {
        this.a = a;
        this.d = d;
        this.s = s;
        this.auth = auth;
        this.rss = rss;
        this.analytics = analytics;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services___WEBPACK_IMPORTED_MODULE_1__["AssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services___WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services___WEBPACK_IMPORTED_MODULE_1__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services___WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services___WEBPACK_IMPORTED_MODULE_1__["RouterStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services___WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 5, consts: [[2, "padding", "2rem", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.rss.applicationNotShowing$)));
    } }, directives: [_components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_2__["ToolbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".CenterContent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 32rem;\n  margin: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkNlbnRlckNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDMycmVtO1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services___WEBPACK_IMPORTED_MODULE_1__["AssetService"] }, { type: _services___WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _services___WEBPACK_IMPORTED_MODULE_1__["StateService"] }, { type: _services___WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services___WEBPACK_IMPORTED_MODULE_1__["RouterStateService"] }, { type: _services___WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _modules_material_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/material.modules */ "./src/app/modules/material.modules.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _components_toolbar_toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/toolbar/toolbar-menu/toolbar-menu.component */ "./src/app/components/toolbar/toolbar-menu/toolbar-menu.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_application_application_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/application/application.component */ "./src/app/components/application/application.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/faq/faq.component */ "./src/app/components/faq/faq.component.ts");
/* harmony import */ var _components_support_support_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/support/support.component */ "./src/app/components/support/support.component.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");


















const routes = [
    {
        path: '',
        component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"]
    },
    /*
    {
      path: 'application',
      component: ApplicationComponent,
      canActivate: [AuthGuard]
    },
    */
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
    },
    {
        path: 'faq',
        component: _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__["FaqComponent"]
    },
    {
        path: 'support',
        component: _components_support_support_component__WEBPACK_IMPORTED_MODULE_14__["SupportComponent"]
    },
    {
        path: '**', redirectTo: ''
    }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _modules_material_modules__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__["ScullyLibModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"],
        _components_toolbar_toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarMenuComponent"],
        _components_application_application_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
        _components_support_support_component__WEBPACK_IMPORTED_MODULE_14__["SupportComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _modules_material_modules__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"],
                    _components_toolbar_toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarMenuComponent"],
                    _components_application_application_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                    _components_support_support_component__WEBPACK_IMPORTED_MODULE_14__["SupportComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _modules_material_modules__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_15__["ScullyLibModule"]
                ],
                entryComponents: [],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/application/application.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/application/application.component.ts ***!
  \*****************************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ApplicationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApplicationComponent.ɵfac = function ApplicationComponent_Factory(t) { return new (t || ApplicationComponent)(); };
ApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationComponent, selectors: [["app-application"]], decls: 2, vars: 0, template: function ApplicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "application works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-application',
                templateUrl: './application.component.html',
                styleUrls: ['./application.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/faq/faq.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/faq/faq.component.ts ***!
  \*************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 10, vars: 0, template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Do the browser based applications transfer applicaiton data to your servers?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " None of the application data imported by the browser based applications is transferred to our servers. The work is performed in the browser.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "How much do the services cost?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " We are currently offering the applications and services for free.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.75);\n}\n\nh2[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  font-family: \"Libre Baskerville\", serif !important;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"Cutive Mono\", monospace !important;\n  margin-bottom: 2.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrREFBQTtBQUNGOztBQUVBO0VBQ0UsZ0RBQUE7RUFDQSxxQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuaDIge1xuICBvcGFjaXR5OiAwLjc7XG4gIGZvbnQtZmFtaWx5OiBcIkxpYnJlIEJhc2tlcnZpbGxlXCIsIHNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJDdXRpdmUgTW9ub1wiLCBtb25vc3BhY2UgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fireflysemantics/constants */ "./node_modules/@fireflysemantics/constants/__ivy_ngcc__/fesm2015/fireflysemantics-constants.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ "./node_modules/@ngneat/until-destroy/__ivy_ngcc__/fesm2015/ngneat-until-destroy.js");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony import */ var src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");














function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-checkbox", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "I Have Reviewed and Agreed to the \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Terms of Service");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u00A0 and \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.tosControl);
} }
function LoginComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u00A0 \u00A0 Login With Google ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r1.isTOSAccepted()));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", ctx_r1.SVG_CONSTANTS.GOOGLE_LOGO.name);
} }
let LoginComponent = class LoginComponent {
    constructor(ds, s, auth) {
        this.ds = ds;
        this.s = s;
        this.auth = auth;
        this.SVG_CONSTANTS = _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__["SVG"];
        this.tosControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false);
        this.tosControl.
            valueChanges.pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this)).
            subscribe((accepted) => {
            this.acceptTOS();
        });
    }
    /**Accept TOS And Track the Event with GA */
    acceptTOS() {
        this.ds.saveTermsOfServiceAccepted();
        this.s.os.put(this.s.os.S.IS_TERMS_OF_SERVICE_ACCEPTED, true);
    }
    isTOSAccepted() {
        return this.s.os.S.IS_TERMS_OF_SERVICE_ACCEPTED.obs;
    }
    login() {
        this.auth.signInWithGoogle();
    }
    isAuthenticated() {
        return this.s.os.S.IS_AUTHENTICATED.obs;
    }
    ngOnInit() { }
};
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 6, vars: 6, consts: [["style", "display: flex;", 4, "ngIf"], [4, "ngIf"], [2, "display", "flex"], [1, "TermsOfServiceCheckBox"], [3, "formControl"], [1, "u-font-cutive-mono"], ["color", "primary", "mat-stroked-button", "", "href", "https://legal.fireflysemantics.com/terms-of-service/", "target", "_blank"], ["color", "primary", "mat-stroked-button", "", "href", "https://legal.fireflysemantics.com/privacy-policy/", "target", "_blank"], ["mat-button", "", 2, "padding", "1rem", 3, "disabled", "click"], [1, "GoogleIcon", 3, "svgIcon"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 12, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 5, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx.isTOSAccepted()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, ctx.isAuthenticated()));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".TermsOfServiceCheckBox[_ngcontent-%COMP%] {\n  padding: 2rem;\n  padding-left: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlRlcm1zT2ZTZXJ2aWNlQ2hlY2tCb3gge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICAgIGRpc3BsYXk6ZmxleDsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"] });
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])()
], LoginComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: src_app_services_state_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"] }, { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/support/support.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/support/support.component.ts ***!
  \*********************************************************/
/*! exports provided: ISSUES_URL, SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISSUES_URL", function() { return ISSUES_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



const ISSUES_URL = 'https://github.com/fireflysemantics/fireflysemantics.com-discussion/issues';
class SupportComponent {
    constructor() { }
    ngOnInit() {
    }
    issuesTab(e) {
        e.stopPropagation();
        window.open(ISSUES_URL, '_blank');
    }
}
SupportComponent.ɵfac = function SupportComponent_Factory(t) { return new (t || SupportComponent)(); };
SupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportComponent, selectors: [["app-support"]], decls: 7, vars: 0, consts: [[1, "u-font-cutive-mono"], ["mat-button", "", "color", "primary", 3, "click"]], template: function SupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " For questions or support please create an issue in our publicly viewable discussion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportComponent_Template_button_click_4_listener($event) { return ctx.issuesTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Discussion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Github Repository.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-support',
                templateUrl: './support.component.html',
                styleUrls: ['./support.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/toolbar/toolbar-menu/toolbar-menu.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/toolbar/toolbar-menu/toolbar-menu.component.ts ***!
  \***************************************************************************/
/*! exports provided: ToolbarMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarMenuComponent", function() { return ToolbarMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model */ "./src/app/model/index.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _services_state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function ToolbarMenuComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarMenuComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onMenuClick(ctx_r4.menuItems.LOGIN); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r1.menuItems.LOGIN, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ToolbarMenuComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarMenuComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onMenuClick(ctx_r6.menuItems.LOGOUT); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r2.menuItems.LOGOUT, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class ToolbarMenuComponent {
    constructor(b, s, r, auth) {
        this.b = b;
        this.s = s;
        this.r = r;
        this.auth = auth;
        this.menuItems = _model__WEBPACK_IMPORTED_MODULE_1__["MenuItems"];
        this.ROUTES = _model__WEBPACK_IMPORTED_MODULE_1__["ROUTES"];
        this.URLS = _model__WEBPACK_IMPORTED_MODULE_1__["URLS"];
    }
    isAuthenticated() {
        return this.s.os.S.IS_AUTHENTICATED.obs;
    }
    onMenuClick(menu) {
        switch (menu) {
            case _model__WEBPACK_IMPORTED_MODULE_1__["MenuItems"].APPLICATION:
                this.r.navigate([_model__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].APPLICATION]);
                break;
            case _model__WEBPACK_IMPORTED_MODULE_1__["MenuItems"].WELCOME:
                this.r.navigate([_model__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].WELCOME]);
                break;
            case _model__WEBPACK_IMPORTED_MODULE_1__["MenuItems"].LOGIN:
                this.login();
                break;
            case _model__WEBPACK_IMPORTED_MODULE_1__["MenuItems"].LOGOUT:
                this.logout();
                break;
        }
        //IN case anything else needs to react 
        //to the currently active menu.
        this.s.os.put(this.s.os.S.ACTIVE_MENU, menu);
    }
    login() {
        const isTermOfServiceAccepted = this.s.os.snapshot(this.s.os.S.IS_TERMS_OF_SERVICE_ACCEPTED);
        isTermOfServiceAccepted
            ?
                this.auth.signInWithGoogle()
            :
                this.r.navigate([_model__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].LOGIN]);
    }
    logout() {
        this.auth.signOut();
    }
    ngOnInit() {
    }
}
ToolbarMenuComponent.ɵfac = function ToolbarMenuComponent_Factory(t) { return new (t || ToolbarMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_2__["BrowserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ToolbarMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarMenuComponent, selectors: [["app-toolbar-menu"]], decls: 24, vars: 13, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "innerHtml", "click", 4, "ngIf"], ["mat-menu-item", "", 3, "routerLink", "innerHtml", "click"], ["mat-menu-item", "", 3, "innerHtml", "click"], ["href", "https://enginnering.fireflysemantics.com/", "title", "Welcome to Fireflysematnics.com", 1, "hidden"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["policies", "matMenu"], ["href", "https://legal.fireflysemantics.com/privacy-policy/", "target", "_blank"], ["mat-menu-item", ""], ["href", "https://legal.fireflysemantics.com/terms-of-service/", "target", "_blank"]], template: function ToolbarMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToolbarMenuComponent_button_5_Template, 1, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ToolbarMenuComponent_button_7_Template, 1, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarMenuComponent_Template_button_click_9_listener() { return ctx.onMenuClick(ctx.menuItems.FAQ); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarMenuComponent_Template_button_click_10_listener() { return ctx.onMenuClick(ctx.menuItems.SUPPORT); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarMenuComponent_Template_button_click_11_listener() { return ctx.b.openInNewTab(ctx.URLS.engineering); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Firefly Semantics Engineering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, ctx.isAuthenticated()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, ctx.isAuthenticated()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.ROUTES.FAQ)("innerHtml", ctx.menuItems.FAQ, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.ROUTES.SUPPORT)("innerHtml", ctx.menuItems.SUPPORT, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.menuItems.ENGINEERING, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLW1lbnUvdG9vbGJhci1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar-menu',
                templateUrl: './toolbar-menu.component.html',
                styleUrls: ['./toolbar-menu.component.scss']
            }]
    }], function () { return [{ type: src_app_services__WEBPACK_IMPORTED_MODULE_2__["BrowserService"] }, { type: _services_state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/constants */ "./node_modules/@fireflysemantics/constants/__ivy_ngcc__/fesm2015/fireflysemantics-constants.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model */ "./src/app/model/index.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar-menu/toolbar-menu.component */ "./src/app/components/toolbar/toolbar-menu/toolbar-menu.component.ts");







const _c0 = function (a0) { return [a0]; };
class ToolbarComponent {
    constructor() {
        this.SVG_CONSTANTS = _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"];
        this.ROUTES = _model__WEBPACK_IMPORTED_MODULE_2__["ROUTES"];
    }
    ngOnInit() {
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], decls: 5, vars: 3, consts: [[2, "justify-content", "space-between"], [1, "LVHAContainer", "Ripple", 2, "outline", "none", 3, "routerLink"], [1, "fs-LogoContainer"], [1, "icon-fs-logo", "fs-Logo"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-toolbar-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.ROUTES.WELCOME));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _toolbar_menu_toolbar_menu_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarMenuComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n}\n\n.fs-Logo[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 2.5rem;\n  transition: 1s;\n}\n\n.LVHAContainer[_ngcontent-%COMP%]:hover   .fs-Logo[_ngcontent-%COMP%] {\n  color: azure;\n}\n\n.LVHAContainer[_ngcontent-%COMP%]:hover   .fs-LogoContainer[_ngcontent-%COMP%] {\n  background-color: black;\n  transition: 1s;\n}\n\n.fs-LogoContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.LVHAContainer[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 64px;\n  width: 64px;\n  transition: 1s;\n}\n\n.Ripple[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n}\n\n.Ripple[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: transform 0.5s, opacity 1s;\n}\n\n.Ripple[_ngcontent-%COMP%]:active:after {\n  transform: scale(0, 0);\n  opacity: 0.2;\n  transition: 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLHVFQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIG1hcmdpbi1ib3R0b206IDByZW07XG59XG5cbi5mcy1Mb2dvIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIHRyYW5zaXRpb246IDFzO1xufVxuXG4uTFZIQUNvbnRhaW5lcjpob3ZlciAuZnMtTG9nbyB7XG4gIGNvbG9yOiBhenVyZTtcbn1cblxuLkxWSEFDb250YWluZXI6aG92ZXIgLmZzLUxvZ29Db250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogMXM7XG59XG5cbi5mcy1Mb2dvQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5MVkhBQ29udGFpbmVyIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiA2NHB4O1xuICB0cmFuc2l0aW9uOiAxcztcbn1cblxuLlJpcHBsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbn1cblxuLlJpcHBsZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICMwMDAgMTAlLCB0cmFuc3BhcmVudCAxMC4wMSUpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMTAsIDEwKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIG9wYWNpdHkgMXM7XG59XG5cbi5SaXBwbGU6YWN0aXZlOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLCAwKTtcbiAgb3BhY2l0eTogMC4yO1xuICB0cmFuc2l0aW9uOiAwcztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model */ "./src/app/model/index.ts");
/* harmony import */ var _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fireflysemantics/constants */ "./node_modules/@fireflysemantics/constants/__ivy_ngcc__/fesm2015/fireflysemantics-constants.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _services_state_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









class WelcomeComponent {
    constructor(b, s, r) {
        this.b = b;
        this.s = s;
        this.r = r;
        this.SVG = _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_2__["SVG"];
    }
    ngOnInit() { }
    goToApplication() {
        this.r.navigate([_model__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].APPLICATION]);
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_3__["BrowserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_state_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 65, vars: 3, consts: [["mat-button", "", "href", "https://fs1.fireflysemantics.com/", "target", "_blank", 2, "padding", "2rem"], [2, "width", "6rem", "height", "6rem", "color", "#666666", 3, "svgIcon"], [2, "font-size", "20px"], ["mat-button", "", "href", "https://q.fireflysemantics.com/", "target", "_blank", 2, "padding", "2rem"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "href", "https://fsalpha.fireflysemantics.com/", "target", "_blank", 2, "padding", "2rem"], ["mat-button", "", "href", "https://csv.fireflysemantics.com/", "target", "_blank", 2, "padding", "2rem"], [2, "font-size", "6rem", "width", "6rem", "height", "6rem", "color", "#666666"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to Firefly Semantics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our Platform Provides Supply Chain Analytics and Big Data Applications for the Cloud.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Sales Forecasting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "FS 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", our browser based forecasting tool, takes sales history and creates expert AI driven time series forecasts minimizing forecasting error.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0 \u00A0 FS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u00A01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Inventory Optimization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " FS Q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ", our browser based forecasting tool, calculates safety stock, reorder points, economic order quantities, and projects a purchasing or manufacturing schedule.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00A0 \u00A0 FS \u00A0 Q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Service Parts Profit Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "FS Alpha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " is our browser based demo application for service parts profit optimization.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "It calculates optimal stocking levels for Long Lead Time, Capital Intensive, Low Demand service parts.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "The optimization performed is for a single SKU and one set of optimization parameters.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "To learn more visit our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_45_listener() { return ctx.b.openInNewTab("https://help-service-parts.fireflysemantics.com/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Service Parts Profit Optimization Help Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ".\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u00A0 \u00A0 FS \u00A0 Alpha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "CSV Data Verification and Application Integration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "FS CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " is our browser based data verfication and application integration tool.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "view_column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u00A0 \u00A0 FS \u00A0 CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", ctx.SVG.FS_1_LOGO.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", ctx.SVG.FS_Q_LOGO.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", ctx.SVG.FS_ALPHA_ALPHA.name);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.75);\n}\n\n.FSLetterLogo[_ngcontent-%COMP%] {\n  color: #d3d3d3;\n  letter-spacing: 2px;\n}\n\n.CSVLetterLogo[_ngcontent-%COMP%] {\n  letter-spacing: 3px;\n  color: black;\n  opacity: 0.8;\n}\n\nh1[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n}\n\nh2[_ngcontent-%COMP%] {\n  letter-spacing: 1px;\n  opacity: 0.7;\n  font-family: \"Libre Baskerville\", serif !important;\n}\n\np[_ngcontent-%COMP%] {\n  font-family: \"Cutive Mono\", monospace !important;\n  line-height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7QUFDRjs7QUFFQTtFQUNFLGdEQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLkZTTGV0dGVyTG9nbyB7XG4gIGNvbG9yOiAjZDNkM2QzO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uQ1NWTGV0dGVyTG9nbyB7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC44O1xufVxuXG5oMSB7IFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5oMiB7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1mYW1pbHk6IFwiTGlicmUgQmFza2VydmlsbGVcIiwgc2VyaWYgIWltcG9ydGFudDtcbn1cblxucCB7XG4gIGZvbnQtZmFtaWx5OiBcIkN1dGl2ZSBNb25vXCIsIG1vbm9zcGFjZSAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return [{ type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["BrowserService"] }, { type: _services_state_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model/constants.ts":
/*!************************************!*\
  !*** ./src/app/model/constants.ts ***!
  \************************************/
/*! exports provided: URLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLS", function() { return URLS; });
/**
 * TODO ...
 * This is in the constants module now. ... import from there.
 *
 */
const URLS = {
    engineering: "https://engineering.fireflysemantics.com/"
};


/***/ }),

/***/ "./src/app/model/index.ts":
/*!********************************!*\
  !*** ./src/app/model/index.ts ***!
  \********************************/
/*! exports provided: LOCAL_STORAGE_KEYS, ROUTES, MenuItems, URLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage */ "./src/app/model/localstorage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_KEYS", function() { return _localstorage__WEBPACK_IMPORTED_MODULE_0__["LOCAL_STORAGE_KEYS"]; });

/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./src/app/model/routes.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return _routes__WEBPACK_IMPORTED_MODULE_1__["ROUTES"]; });

/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menus */ "./src/app/model/menus.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return _menus__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/app/model/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "URLS", function() { return _constants__WEBPACK_IMPORTED_MODULE_3__["URLS"]; });







/***/ }),

/***/ "./src/app/model/localstorage.ts":
/*!***************************************!*\
  !*** ./src/app/model/localstorage.ts ***!
  \***************************************/
/*! exports provided: LOCAL_STORAGE_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_KEYS", function() { return LOCAL_STORAGE_KEYS; });
const LOCAL_STORAGE_KEYS = {
    APPLICATION_CONFIG: 'APPLICATION_CONFIG',
    TOS_ACCEPTED: 'TOS_ACCEPTED'
};


/***/ }),

/***/ "./src/app/model/menus.ts":
/*!********************************!*\
  !*** ./src/app/model/menus.ts ***!
  \********************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/**
 * The model for menu items
 * has to live here so that we
 * don't get circular dependency
 * warnings.
 */
var MenuItems;
(function (MenuItems) {
    MenuItems["NONE"] = "none";
    MenuItems["APPLICATION"] = "Application";
    MenuItems["WELCOME"] = "Welcome";
    MenuItems["LOGIN"] = "Login";
    MenuItems["LOGOUT"] = "Logout";
    MenuItems["ENGINEERING"] = "Engineering";
    MenuItems["TRANSACTIONS"] = "Transactions";
    MenuItems["FAQ"] = "FAQ";
    MenuItems["SUPPORT"] = "Support";
    MenuItems["SAVE"] = "Save";
})(MenuItems || (MenuItems = {}));


/***/ }),

/***/ "./src/app/model/routes.ts":
/*!*********************************!*\
  !*** ./src/app/model/routes.ts ***!
  \*********************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES;
(function (ROUTES) {
    ROUTES["APPLICATION"] = "/application";
    ROUTES["WELCOME"] = "/welcome";
    ROUTES["LOGIN"] = "/login";
    ROUTES["FAQ"] = "/faq";
    ROUTES["SUPPORT"] = "/support";
})(ROUTES || (ROUTES = {}));


/***/ }),

/***/ "./src/app/modules/material.modules.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/material.modules.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
// material.module.ts






































const mm = [
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]
];
class MaterialModule {
    constructor(matIconRegistry) {
        this.matIconRegistry = matIconRegistry;
        // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    static forRoot() {
        return {
            ngModule: MaterialModule,
            providers: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]]
        };
    }
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"])); }, providers: [], imports: [[...mm], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [...mm],
                exports: [...mm
                ],
                providers: []
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/analytics/analytics.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/analytics/analytics.service.ts ***!
  \*********************************************************/
/*! exports provided: GTAG_EVENTS, AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTAG_EVENTS", function() { return GTAG_EVENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _model___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/ */ "./src/app/model/index.ts");
/**
 * The RUN_OPTIMIZATION is tracked in the run-forecast.component.
 */






const GTAG_EVENTS = {
    GOOGLE_LOGIN: {
        category: "NAVIGATION",
        event: "LOGIN"
    },
    APPLICATION: {
        category: "NAVIGATION",
        event: "APPLICATION"
    },
    WELCOME: {
        category: "NAVIGATION",
        event: "WELCOME"
    },
    SUPPORT: {
        category: "NAVIGATION",
        event: "SUPPORT"
    },
    FAQ: {
        category: "NAVIGATION",
        event: "FAQ"
    }
};
class AnalyticsService {
    constructor(r) {
        this.r = r;
        const navEndEvents = r.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => event.url));
        navEndEvents.subscribe(url => {
            switch (url) {
                case _model___WEBPACK_IMPORTED_MODULE_3__["ROUTES"].LOGIN:
                    this.trackLoginNavigation();
                    break;
                case _model___WEBPACK_IMPORTED_MODULE_3__["ROUTES"].APPLICATION:
                    this.trackApplicationNavigation();
                    break;
                case _model___WEBPACK_IMPORTED_MODULE_3__["ROUTES"].WELCOME:
                    this.trackWelcomeNavigation();
                    break;
                case _model___WEBPACK_IMPORTED_MODULE_3__["ROUTES"].FAQ:
                    this.trackFAQNavigation();
                    break;
                case _model___WEBPACK_IMPORTED_MODULE_3__["ROUTES"].SUPPORT:
                    this.trackSupportNavigation();
                    break;
            }
        });
    }
    //=======================================
    // UI NAVIGATION
    //=======================================
    trackLoginNavigation() {
        if (gtag) {
            gtag('event', GTAG_EVENTS.GOOGLE_LOGIN.event, {
                'event_category': GTAG_EVENTS.GOOGLE_LOGIN.category
            });
        }
    }
    trackApplicationNavigation() {
        if (gtag) {
            gtag('event', GTAG_EVENTS.APPLICATION.event, {
                'event_category': GTAG_EVENTS.APPLICATION.category
            });
        }
    }
    trackWelcomeNavigation() {
        if (gtag) {
            gtag('event', GTAG_EVENTS.WELCOME.event, {
                'event_category': GTAG_EVENTS.WELCOME.category
            });
        }
    }
    trackFAQNavigation() {
        if (gtag) {
            gtag('event', GTAG_EVENTS.FAQ.event, {
                'event_category': GTAG_EVENTS.FAQ.category
            });
        }
    }
    trackSupportNavigation() {
        if (gtag) {
            gtag('event', GTAG_EVENTS.SUPPORT.event, {
                'event_category': GTAG_EVENTS.SUPPORT.category
            });
        }
    }
}
AnalyticsService.ɵfac = function AnalyticsService_Factory(t) { return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnalyticsService, factory: AnalyticsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/assets/asset.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/assets/asset.service.ts ***!
  \**************************************************/
/*! exports provided: AssetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetService", function() { return AssetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/constants */ "./node_modules/@fireflysemantics/constants/__ivy_ngcc__/fesm2015/fireflysemantics-constants.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





class AssetService {
    constructor(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        {
            this.matIconRegistry.addSvgIcon(_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"].FS_Q_LOGO.name, this.domSanitizer.bypassSecurityTrustResourceUrl(_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"].FS_Q_LOGO.url));
            this.matIconRegistry.addSvgIcon(_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"].FS_1_LOGO.name, this.domSanitizer.bypassSecurityTrustResourceUrl(_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"].FS_1_LOGO.url));
            this.matIconRegistry.addSvgIcon(_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"].FS_ALPHA_ALPHA.name, this.domSanitizer.bypassSecurityTrustResourceUrl(_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"].FS_ALPHA_ALPHA.url));
            this.matIconRegistry.addSvgIcon(_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"].GOOGLE_LOGO.name, this.domSanitizer.bypassSecurityTrustResourceUrl(_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"].GOOGLE_LOGO.url));
            this.matIconRegistry.addSvgIcon(_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"].FS_CSV_LOGO.name, this.domSanitizer.bypassSecurityTrustResourceUrl(_fireflysemantics_constants__WEBPACK_IMPORTED_MODULE_1__["SVG"].FS_CSV_LOGO.url));
        }
    }
}
AssetService.ɵfac = function AssetService_Factory(t) { return new (t || AssetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
AssetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AssetService, factory: AssetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/state.service */ "./src/app/services/state/state.service.ts");
/**
 * When someone arrives to the application
 * before they are allowed to proceed to the
 * application they must be authenticated.
 */





class AuthGuard {
    constructor(router, s) {
        this.router = router;
        this.s = s;
    }
    canActivate(next, state) {
        return this.s.os.S.IS_AUTHENTICATED.obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(authenticated => {
            if (!authenticated) {
                this.router.navigate(['']);
                return false;
            }
            return true;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _state_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model */ "./src/app/model/index.ts");
/* harmony import */ var _fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fireflysemantics/amplify */ "./node_modules/@fireflysemantics/amplify/__ivy_ngcc__/fesm2015/fireflysemantics-amplify.js");
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class AuthService {
    constructor(s, r) {
        this.s = s;
        this.r = r;
        //    this.initializeAuthState()
        //    this.initializeUser()
        //    this.redirectToApplication()
    }
    signOut() {
        return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].signOut()
            .then(() => this.s.os.post(this.s.os.S.IS_AUTHENTICATED, false));
    }
    socialSignIn(provider) {
        return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].federatedSignIn({
            'provider': provider
        });
    }
    signInWithGoogle() {
        this.socialSignIn(AuthService.GOOGLE);
    }
    initializeAuthState() {
        _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].currentAuthenticatedUser().
            then((u) => {
            this.s.os.put(this.s.os.S.IS_AUTHENTICATED, true);
        }).catch(() => {
            _aws_amplify_core__WEBPACK_IMPORTED_MODULE_3__["Hub"].listen('auth', (data) => {
                const { channel, payload } = data;
                if (channel === 'auth') {
                    this.s.os.put(this.s.os.S.IS_AUTHENTICATED, payload.event == _fireflysemantics_amplify__WEBPACK_IMPORTED_MODULE_5__["AMPLIFY_HUB_EVENTS"].SIGN_OUT ? false : true);
                }
            });
        });
    }
    redirectToApplication() {
        this.s.os.S.IS_AUTHENTICATED.obs.subscribe(auth => {
            auth && this.r.navigate([_model__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].APPLICATION]);
            //        auth && this.r.navigate([{outlets: { application: 'application'}}])
        });
    }
    initializeUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].currentUserInfo();
            if (user) {
                const { email, name, given_name, family_name } = user.attributes;
                const u = { email, name, given_name, family_name };
                this.s.os.put(this.s.os.S.USER, u);
            }
        });
    }
    /**
     * We need to keep the user session
     * fresh so that credit card transactions
     * are guaranteed to connect.
     */
    keepSessionFresh() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*
            const cognitoUser = await Auth.currentAuthenticatedUser();
            const currentSession = await Auth.currentSession();
            await cognitoUser.refreshSession(
                currentSession.refreshToken,
                (err, session) => {});*/
        });
    }
}
AuthService.GOOGLE = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["CognitoHostedUIIdentityProvider"].Google;
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_state_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _state_state_service__WEBPACK_IMPORTED_MODULE_6__["StateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/browser/browser.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/browser/browser.service.ts ***!
  \*****************************************************/
/*! exports provided: BrowserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserService", function() { return BrowserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BrowserService {
    constructor() { }
    openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
}
BrowserService.ɵfac = function BrowserService_Factory(t) { return new (t || BrowserService)(); };
BrowserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BrowserService, factory: BrowserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/data/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/ */ "./src/app/model/index.ts");
/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/state.service */ "./src/app/services/state/state.service.ts");




class DataService {
    /**
     * Initializes the sku string
     * for creating the save when
     * the `IOptimizationParameters` have
     * been completed.
     */
    constructor(s) {
        this.s = s;
        this.initializeTermsOfServiceAccepted();
    }
    saveTermsOfServiceAccepted() {
        localStorage.setItem(_model___WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_KEYS"].TOS_ACCEPTED, 'true');
    }
    isTermsOfServiceAccepted() {
        return !!localStorage.getItem(_model___WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_KEYS"].TOS_ACCEPTED);
    }
    initializeTermsOfServiceAccepted() {
        if (this.isTermsOfServiceAccepted()) {
            this.s.os.put(this.s.os.S.IS_TERMS_OF_SERVICE_ACCEPTED, true);
        }
    }
    ngOnDestroy() { }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _state_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: GTAG_EVENTS, AnalyticsService, AssetService, AuthService, AuthGuard, DataService, OSK, StateService, RouterStateService, BrowserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics/analytics.service */ "./src/app/services/analytics/analytics.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GTAG_EVENTS", function() { return _analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__["GTAG_EVENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return _analytics_analytics_service__WEBPACK_IMPORTED_MODULE_0__["AnalyticsService"]; });

/* harmony import */ var _assets_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/asset.service */ "./src/app/services/assets/asset.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetService", function() { return _assets_asset_service__WEBPACK_IMPORTED_MODULE_1__["AssetService"]; });

/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]; });

/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/services/auth/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]; });

/* harmony import */ var _data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/data.service */ "./src/app/services/data/data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return _data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]; });

/* harmony import */ var _state_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/state.service */ "./src/app/services/state/state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OSK", function() { return _state_state_service__WEBPACK_IMPORTED_MODULE_5__["OSK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return _state_state_service__WEBPACK_IMPORTED_MODULE_5__["StateService"]; });

/* harmony import */ var _state_router_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/router.state.service */ "./src/app/services/state/router.state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterStateService", function() { return _state_router_state_service__WEBPACK_IMPORTED_MODULE_6__["RouterStateService"]; });

/* harmony import */ var _browser_browser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./browser/browser.service */ "./src/app/services/browser/browser.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserService", function() { return _browser_browser_service__WEBPACK_IMPORTED_MODULE_7__["BrowserService"]; });











/***/ }),

/***/ "./src/app/services/state/router.state.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/state/router.state.service.ts ***!
  \********************************************************/
/*! exports provided: RouterStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterStateService", function() { return RouterStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model */ "./src/app/model/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state.service */ "./src/app/services/state/state.service.ts");







class RouterStateService {
    constructor(s, r) {
        this.s = s;
        this.r = r;
        this.applicationShowing$ = this.s.os.S.IS_APPLICATION_SHOWING.obs;
        this.applicationNotShowing$ = this.s.os.S.IS_APPLICATION_SHOWING.obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(v => !v));
        this.isApplicationShowing();
    }
    /**
     * The process button will
     * be enabled if the data map size is 1
     */
    isApplicationShowing() {
        const navEndEvents = this.r.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => event.url));
        navEndEvents.subscribe(url => {
            switch (url) {
                case _model__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].APPLICATION:
                    this.s.os.put(this.s.os.S.IS_APPLICATION_SHOWING, true);
                    break;
                default: {
                    this.s.os.put(this.s.os.S.IS_APPLICATION_SHOWING, false);
                }
            }
        });
    }
}
RouterStateService.ɵfac = function RouterStateService_Factory(t) { return new (t || RouterStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RouterStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouterStateService, factory: RouterStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_4__["StateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/state/state.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/state/state.service.ts ***!
  \*************************************************/
/*! exports provided: OSK, StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSK", function() { return OSK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fireflysemantics_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fireflysemantics/slice */ "./node_modules/@fireflysemantics/slice/__ivy_ngcc__/fesm2015/fireflysemantics-slice.js");



const OSK = {
    //=================================
    // CONFIGURATION
    //=================================
    APPLICATION_CONFIG: { value: null },
    //=================================
    // LOCAL STORAGE
    //=================================
    LOCAL_STORAGE_TERMS_OF_SERVICE_KEY: { value: null },
    IS_TERMS_OF_SERVICE_ACCEPTED: { value: false },
    //=================================
    // USER IDENTITY
    //=================================
    ON_SIGN_IN: { value: null },
    ON_SIGN_OUT: { value: null },
    AMPLIFY_USER: { value: null },
    USER: { value: null },
    USER_EMAIL: { value: null },
    IS_AUTHENTICATED: { value: false },
    //=================================
    // UI EVENTS
    //=================================
    ACTIVE_MENU: { value: null },
    //=================================
    // ROUTER EVENTS
    //=================================
    IS_APPLICATION_SHOWING: { value: false }
};
class StateService {
    constructor() {
        this.os = new _fireflysemantics_slice__WEBPACK_IMPORTED_MODULE_1__["OStore"](OSK);
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/aws-exports.js":
/*!****************************!*\
  !*** ./src/aws-exports.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_identity_pool_id": "us-east-1:ef203bfb-50e4-4dce-8fd0-da27951d6245",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_T0glLX3IP",
    "aws_user_pools_web_client_id": "7k8nbeit88bd32k6imlusgp38",
    "oauth": {
        "domain": "fireflysemanticscom0a6fc3ef-0a6fc3ef-dev.auth.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://fireflysemantics.com/",
        "redirectSignOut": "https://fireflysemantics.com/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS"
};


/* harmony default export */ __webpack_exports__["default"] = (awsmobile);


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aws-exports */ "./src/aws-exports.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));
_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_2__["default"].configure(_aws_exports__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ole/FireflySemantics/Repository/fireflysemantics/000-FIREFLYSEMANTICS/fireflysemantics/v1/fireflysemantics.com/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map