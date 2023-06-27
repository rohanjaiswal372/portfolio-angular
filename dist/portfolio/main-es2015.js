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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _service_mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/mail.service */ "./src/app/service/mail.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function AppComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thank you for reaching out to me.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ooops ... something went wrong! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(mail) {
        this.mail = mail;
        this.title = 'portfolio';
        this.onSuccess = false;
        this.onError = false;
    }
    ngOnInit() {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    }
    onSubmit() {
        //do something
        this.mail.sendMail(this.contactForm.value);
        //if success
        if (true) {
            this.onSuccess = true;
        }
        else {}
        setTimeout(() => {
            this.onSuccess = false;
            this.onError = false;
        }, 5000);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 115, vars: 3, consts: [[1, "container"], [1, "intro"], [1, "mobile-nav"], [1, "navbar-brand"], [1, "row"], [1, "col-6"], ["href", "#work", 1, "nav-link"], ["href", "#contact", 1, "nav-link"], [1, "full-nav", "navbar", "navbar-expand-lg", "fixed"], [1, "nav", "navbar-nav"], [1, "nav-item"], ["id", "para"], [1, "jumbotron"], [1, "justify-content-center", "list-group", "list-group-horizontal"], [1, "list-group-item"], ["href", "https://www.linkedin.com/in/rohan-jaiswal-developer/", "target", "_blank"], [1, "fab", "fa-linkedin-in"], ["href", "https://github.com/rohanjaiswal372", "target", "_blank"], [1, "fab", "fa-github"], ["href", "https://docs.google.com/document/d/1v6j0sAd5MrhIxZh3BptZjE8GMQVlPgj2bT7PO-967Uk/edit?usp=sharing", "target", "_blank"], [1, "fas", "fa-file"], ["id", "work", 1, "work"], [1, "company"], [1, "description"], [1, "technologies"], [1, "responsiblities", "text-left"], [1, "work"], [1, "entry-content"], ["id", "contact"], [1, "contact"], [1, "text-white"], ["class", "on-success", 4, "ngIf"], ["class", "on-error", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "exampleInputEmail1"], ["type", "text", "id", "exampleInputEmail1", "formControlName", "name", "placeholder", "Enter name", 1, "form-control"], ["type", "text", "id", "exampleInputEmail1", "formControlName", "company", "placeholder", "Enter company", 1, "form-control"], ["type", "email", "id", "exampleInputEmail1", "formControlName", "email", "placeholder", "Enter email", 1, "form-control"], ["for", "message"], ["name", "message", "id", "message", "formControlName", "message", "rows", "4", "cols", "30", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "on-success"], [1, "on-error"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rohan Jaiswal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Rohan Jaiswal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "I develop amazing applications with amazing People.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ION Media Networks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Ion Media is an American broadcasting company that owns and operates over 60 television stations in most major American markets, as well as a digital sub-channel through that group and a major commercial television network.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Technologies: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "PHP, Laravel, Vue JS, Javascript, Gulp, MS Sql, Vagrant Box,adobe captivate, Photoshop, Node JS, Composer, Rackspace, Apache, MS Server ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Strategic development, enhancements and refactoring of existing critical components in PHP and Node.js applications.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Detailed knowledge of Microsoft SQL Server technology and how to Administer, create, upgrade, maintain, and customize manually and using SQL Queries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Assist with writing well-designed, testable, efficient code by using best software development practices.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Cat Technology INC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "CAT Technology Inc. delivers digital transformation and technology services from ideation to execution, enabling clients to outperform the competition.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Technologies: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "HTML, CSS, Javascript, PHP, React, Redux, Angular JS, Javascript, Laravel, Rest API, Drupal, Composer, VPN, Node JS, MySql, LAMP, Rackspace ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Designed exceptional UI designs, determined back-end display; designed styling colors and interface; in-corporate best practices for technical SEO and optimized website navigation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Collaborate with designers, product managers, and others in delivering large and critical projects that support high-profile, designed consumer products, services, and sites.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Experience designing and developing application frameworks/platforms in a Microservices Architecture.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Esprit Business Solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Esprit Business Solution provides you with the tools to control business processes, gather reporting and analytical data that can help you make well informed decisions in a timely manner.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Technologies: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "HTML, CSS, Javascript, Wordpress, Drupal, PHP, MySql, Apache, WAMP, JQuery, Bootstrap, Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Designed the front end of the application using Python 2.7, HTML, CSS, AJAX, JSON and JQuery. Worked on the backend of the application, mainly using Active Records.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Hands-on development, debugging and on-going maintenance of new and existing applications.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Applied agile software development process with other software engineers, subject matter experts and stakeholders.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "section", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, AppComponent_div_94_Template, 2, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, AppComponent_div_95_Template, 2, 0, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "form", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_form_ngSubmit_96_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "textarea", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\nbody[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\nsection[_ngcontent-%COMP%] {\n  font-family: \"Rajdhani\", sans-serif;\n  text-align: center;\n  overflow: hidden;\n}\n\nmobile-nav[_ngcontent-%COMP%] {\n  display: hidden;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2vw;\n  font-family: \"Rajdhani\", sans-serif;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Raleway Dots\", cursive;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  font-family: \"Rajdhani\", sans-serif;\n}\n\n.jumbotron[_ngcontent-%COMP%] {\n  background-color: #000;\n  color: white;\n  text-align: center;\n}\n\n.company[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.technologies[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.responsiblities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.contact[_ngcontent-%COMP%] {\n  background-color: #8080801f;\n  border-radius: 1vw;\n  padding: 4vw 4vw;\n  margin-bottom: 5vw;\n  color: white;\n  width: 50%;\n}\n\n.on-success[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.on-error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n\n.page-section[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media (max-width: 600px) {\n  section[_ngcontent-%COMP%] {\n    padding: 4vh 0;\n    margin: 0 0;\n  }\n\n  .intro[_ngcontent-%COMP%] {\n    height: 100vh;\n    padding: 5vh 0 1vh 0;\n  }\n  .intro[_ngcontent-%COMP%]   .mobile-nav[_ngcontent-%COMP%] {\n    margin: 3vh 0;\n    display: block;\n  }\n  .intro[_ngcontent-%COMP%]   .full-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .intro[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: 100%;\n    border: 1px solid;\n    overflow: hidden;\n  }\n  .intro[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 14vw;\n    margin: 4vh 0;\n  }\n  .intro[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-size: 4vw;\n  }\n  .intro[_ngcontent-%COMP%]   #para[_ngcontent-%COMP%] {\n    padding: 2vh 0;\n  }\n  .intro[_ngcontent-%COMP%]   #para[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 9vw;\n  }\n  .intro[_ngcontent-%COMP%]   #para[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 3vh 0;\n  }\n\n  .work[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 8vw;\n    font-size: 8vw;\n  }\n  .work[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    margin: 2vw;\n    font-size: 4vw;\n    padding: 0 0;\n  }\n  .work[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%] {\n    margin: 2vw;\n    font-size: 2vw;\n  }\n  .work[_ngcontent-%COMP%]   .responsiblities[_ngcontent-%COMP%] {\n    margin: 2vw;\n  }\n  .work[_ngcontent-%COMP%]   .responsiblities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 3vw;\n  }\n\n  .contact[_ngcontent-%COMP%] {\n    margin: 8vw auto;\n    width: 80%;\n  }\n}\n\n@media (min-width: 600px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n  .container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    padding: 0 0;\n    margin: 0 0;\n  }\n\n  .intro[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n  .intro[_ngcontent-%COMP%]   .mobile-nav[_ngcontent-%COMP%] {\n    margin: 2vh 0;\n    display: block;\n  }\n  .intro[_ngcontent-%COMP%]   .full-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .intro[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: 100%;\n    border: 1px solid;\n    overflow: hidden;\n  }\n  .intro[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 13vw;\n    margin: 4vh 0 1vh 0;\n  }\n  .intro[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin: 0 0;\n  }\n  .intro[_ngcontent-%COMP%]   #para[_ngcontent-%COMP%] {\n    padding: 4vw 0;\n  }\n  .intro[_ngcontent-%COMP%]   #para[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%] {\n    padding: 0 0;\n    margin: 0 0;\n  }\n  .intro[_ngcontent-%COMP%]   #para[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 8vw;\n  }\n  .intro[_ngcontent-%COMP%]   #para[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 4vw 0;\n  }\n\n  .work[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 8vw;\n    font-size: 8vw;\n  }\n  .work[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    margin: 1vw;\n    font-size: 3vw;\n    padding: 0 0;\n  }\n  .work[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%] {\n    margin: 2vw;\n    font-size: 2vw;\n  }\n  .work[_ngcontent-%COMP%]   .responsiblities[_ngcontent-%COMP%] {\n    margin: 1vw;\n  }\n  .work[_ngcontent-%COMP%]   .responsiblities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n\n  .contact[_ngcontent-%COMP%] {\n    margin: 8vw auto;\n    width: 80%;\n  }\n}\n\n@media (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n  .container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    padding: 3vh 0;\n    margin: 0 0 0 0;\n  }\n\n  .intro[_ngcontent-%COMP%] {\n    height: 100vh;\n    padding: 0 0 !important;\n    margin: 0 0 5vh 0 !important;\n  }\n  .intro[_ngcontent-%COMP%]   .mobile-nav[_ngcontent-%COMP%] {\n    margin: 0;\n    display: block;\n  }\n  .intro[_ngcontent-%COMP%]   .full-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .intro[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    height: 100%;\n    border: 1px solid;\n    overflow: hidden;\n  }\n  .intro[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    font-size: 11vw;\n    margin: 0;\n  }\n  .intro[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin: 0 0;\n  }\n  .intro[_ngcontent-%COMP%]   #para[_ngcontent-%COMP%] {\n    padding: 1vw 0;\n  }\n  .intro[_ngcontent-%COMP%]   #para[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%] {\n    padding: 0 0;\n    margin: 0 0;\n  }\n  .intro[_ngcontent-%COMP%]   #para[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 7vw;\n  }\n  .intro[_ngcontent-%COMP%]   #para[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 1vw 0;\n  }\n\n  .work[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 1vw;\n    font-size: 7vw;\n  }\n  .work[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    margin: 1vw;\n    font-size: 2.5vw;\n    padding: 0 0;\n  }\n  .work[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%] {\n    margin: 1vw;\n    font-size: 1.5vw;\n  }\n  .work[_ngcontent-%COMP%]   .responsiblities[_ngcontent-%COMP%] {\n    margin: 1vw;\n  }\n  .work[_ngcontent-%COMP%]   .responsiblities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 2vw;\n  }\n\n  .contact[_ngcontent-%COMP%] {\n    margin: 4vw auto;\n    width: 50%;\n  }\n}\n\n@media (min-width: 1760px) {\n  #para[_ngcontent-%COMP%]   .jumbotron[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 6vw !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2hhbmphaXN3YWwvRG9jdW1lbnRzL1NpdGVzL2FuZ3VsYXIgdHV0cy9wb3J0Zm9saW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0dKOztBREZJO0VBQ0ksK0JBQUE7QUNJUjs7QURIQTtFQUNJLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ01KOztBRExBO0VBQ0ksZUFBQTtBQ1FKOztBRE5BO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtBQ1NKOztBRFJBO0VBQ0ksWUFBQTtFQUNBLG9DQUFBO0FDV0o7O0FEVkE7RUFDSSxtQ0FBQTtBQ2FKOztBRFhBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNjSjs7QURYQTtFQUNJLFdBQUE7QUNjSjs7QURiQTtFQUNJLCtCQUFBO0FDZ0JKOztBRGZBO0VBQ0ksK0JBQUE7QUNrQko7O0FEZlE7RUFDSSwrQkFBQTtBQ2tCWjs7QURmQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNrQko7O0FEaEJBO0VBQ0ksWUFBQTtBQ21CSjs7QURqQkE7RUFDSSxVQUFBO0FDb0JKOztBRGxCQTtFQUNJLHNCQUFBO0FDcUJKOztBRG5CQTtFQUNJLGtCQUFBO0FDc0JKOztBRGxCQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLFdBQUE7RUNxQk47O0VEbkJFO0lBQ0ksYUFBQTtJQUNBLG9CQUFBO0VDc0JOO0VEckJNO0lBQ0ksYUFBQTtJQUNBLGNBQUE7RUN1QlY7RUR0Qk07SUFDSSxhQUFBO0VDd0JWO0VEdkJNO0lBQ0ksWUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUN5QlY7RUR2QlU7SUFDSSxlQUFBO0lBQ0EsYUFBQTtFQ3lCZDtFRHhCVTtJQUNJLGNBQUE7RUMwQmQ7RUR6Qk07SUFDSSxjQUFBO0VDMkJWO0VEMUJVO0lBQ0ksY0FBQTtFQzRCZDtFRDNCVTtJQUNJLGNBQUE7RUM2QmQ7O0VEMUJNO0lBQ0ksV0FBQTtJQUNBLGNBQUE7RUM2QlY7RUQ1Qk07SUFDSSxXQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7RUM4QlY7RUQ3Qk07SUFDSSxXQUFBO0lBQ0EsY0FBQTtFQytCVjtFRDlCTTtJQUNJLFdBQUE7RUNnQ1Y7RUQ5QmM7SUFDSSxjQUFBO0VDZ0NsQjs7RUQ5QkU7SUFDSSxnQkFBQTtJQUNBLFVBQUE7RUNpQ047QUFDRjs7QUQvQkE7RUFDSTtJQUNJLGNBQUE7RUNpQ047RURoQ007SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQ2tDVjs7RURoQ0U7SUFDSSxhQUFBO0VDbUNOO0VEbENNO0lBQ0ksYUFBQTtJQUNBLGNBQUE7RUNvQ1Y7RURuQ007SUFDSSxhQUFBO0VDcUNWO0VEcENNO0lBQ0ksWUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNzQ1Y7RURwQ1U7SUFDSSxlQUFBO0lBQ0EsbUJBQUE7RUNzQ2Q7RURyQ1U7SUFDSSxXQUFBO0VDdUNkO0VEdENNO0lBQ0ksY0FBQTtFQ3dDVjtFRHZDVTtJQUNJLFlBQUE7SUFDQSxXQUFBO0VDeUNkO0VEeENjO0lBQ0ksY0FBQTtFQzBDbEI7RUR6Q1U7SUFDSSxjQUFBO0VDMkNkOztFRHhDTTtJQUNJLFdBQUE7SUFDQSxjQUFBO0VDMkNWO0VEMUNNO0lBQ0ksV0FBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0VDNENWO0VEM0NNO0lBQ0ksV0FBQTtJQUNBLGNBQUE7RUM2Q1Y7RUQ1Q007SUFDSSxXQUFBO0VDOENWO0VENUNjO0lBQ0ksY0FBQTtFQzhDbEI7O0VENUNFO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0VDK0NOO0FBQ0Y7O0FEN0NBO0VBQ0k7SUFDSSxjQUFBO0VDK0NOO0VEOUNNO0lBQ0ksY0FBQTtJQUNBLGVBQUE7RUNnRFY7O0VEL0NFO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0lBQ0EsNEJBQUE7RUNrRE47RURqRE07SUFDSSxTQUFBO0lBQ0EsY0FBQTtFQ21EVjtFRGxETTtJQUNJLGFBQUE7RUNvRFY7RURuRE07SUFDSSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQ3FEVjtFRG5EVTtJQUNJLGVBQUE7SUFDQSxTQUFBO0VDcURkO0VEcERVO0lBQ0ksV0FBQTtFQ3NEZDtFRHJETTtJQUNJLGNBQUE7RUN1RFY7RUR0RFU7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQ3dEZDtFRHZEYztJQUNJLGNBQUE7RUN5RGxCO0VEeERVO0lBQ0ksY0FBQTtFQzBEZDs7RUR2RE07SUFDSSxXQUFBO0lBQ0EsY0FBQTtFQzBEVjtFRHpETTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUMyRFY7RUQxRE07SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7RUM0RFY7RUQzRE07SUFDSSxXQUFBO0VDNkRWO0VEM0RjO0lBQ0ksY0FBQTtFQzZEbEI7O0VEM0RFO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0VDOEROO0FBQ0Y7O0FENURBO0VBR2dCO0lBQ0kseUJBQUE7RUM0RGxCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94XG5ib2R5IFxuICAgIGhlaWdodDogMTAwJVxuICAgIHdpZHRoOiAxMDAlXG4gICAgcFxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSlcbnNlY3Rpb25cbiAgICBmb250LWZhbWlseTogJ1JhamRoYW5pJywgc2Fucy1zZXJpZlxuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgIG92ZXJmbG93OiBoaWRkZW5cbm1vYmlsZS1uYXZcbiAgICBkaXNwbGF5OiBoaWRkZW5cblxuLm5hdi1saW5rXG4gICAgY29sb3I6IHdoaXRlXG4gICAgZm9udC1zaXplOjJ2d1xuICAgIGZvbnQtZmFtaWx5OiAnUmFqZGhhbmknLCBzYW5zLXNlcmlmXG4ubmF2YmFyLWJyYW5kXG4gICAgY29sb3I6IHdoaXRlXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5IERvdHMnLCBjdXJzaXZlXG4ubmF2LWl0ZW1cbiAgICBmb250LWZhbWlseTogJ1JhamRoYW5pJywgc2Fucy1zZXJpZlxuXG4uanVtYm90cm9uXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMFxuICAgIGNvbG9yOiB3aGl0ZVxuICAgIHRleHQtYWxpZ246IGNlbnRlclxuXG4vLyB3b3JrXG4uY29tcGFueVxuICAgIGNvbG9yOiAjZmZmXG4uZGVzY3JpcHRpb25cbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSlcbi50ZWNobm9sb2dpZXNcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNSlcbi5yZXNwb25zaWJsaXRpZXNcbiAgICB1bFxuICAgICAgICBsaVxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjUpXG5cbi8vY29udGFjdFxuLmNvbnRhY3RcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwMWZcbiAgICBib3JkZXItcmFkaXVzOiAxdndcbiAgICBwYWRkaW5nOiA0dncgNHZ3XG4gICAgbWFyZ2luLWJvdHRvbTogNXZ3XG4gICAgY29sb3I6IHdoaXRlXG4gICAgd2lkdGg6IDUwJVxuXG4ub24tc3VjY2Vzc1xuICAgIGNvbG9yOiBncmVlblxuXG4ub24tZXJyb3JcbiAgICBjb2xvcjogcmVkXG5cbi5saXN0LWdyb3VwLWl0ZW1cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDBcblxuLnBhZ2Utc2VjdGlvblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxuLy9lbmQgY29udGFjdFxuXG4vLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIGxlc3MgdGhhbiA1NzZweClcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkgXG4gICAgc2VjdGlvblxuICAgICAgICBwYWRkaW5nOiA0dmggMCBcbiAgICAgICAgbWFyZ2luOiAwIDBcblxuICAgIC5pbnRyb1xuICAgICAgICBoZWlnaHQ6IDEwMHZoXG4gICAgICAgIHBhZGRpbmc6IDV2aCAwIDF2aCAwXG4gICAgICAgIC5tb2JpbGUtbmF2XG4gICAgICAgICAgICBtYXJnaW46IDN2aCAwXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICAuZnVsbC1uYXZcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICAgICAgLmNvbnRhaW5lclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZFxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlblxuICAgICAgICBuYXZcbiAgICAgICAgICAgIC5uYXZiYXItYnJhbmRcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0dndcbiAgICAgICAgICAgICAgICBtYXJnaW46IDR2aCAwXG4gICAgICAgICAgICAubmF2LWxpbmtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDR2d1xuICAgICAgICAjcGFyYVxuICAgICAgICAgICAgcGFkZGluZzogMnZoIDBcbiAgICAgICAgICAgIGgxXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA5dndcbiAgICAgICAgICAgIHVsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3ZoIDAgXG5cbiAgICAud29ya1xuICAgICAgICBoMlxuICAgICAgICAgICAgbWFyZ2luOiA4dndcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo4dndcbiAgICAgICAgLmRlc2NyaXB0aW9uIFxuICAgICAgICAgICAgbWFyZ2luOiAydncgXG4gICAgICAgICAgICBmb250LXNpemU6IDR2d1xuICAgICAgICAgICAgcGFkZGluZzogMCAwXG4gICAgICAgIC50ZWNobm9sb2dpZXNcbiAgICAgICAgICAgIG1hcmdpbjogMnZ3IFxuICAgICAgICAgICAgZm9udC1zaXplOiAydndcbiAgICAgICAgLnJlc3BvbnNpYmxpdGllc1xuICAgICAgICAgICAgbWFyZ2luOiAydncgXG4gICAgICAgICAgICB1bFxuICAgICAgICAgICAgICAgIGxpXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM3Z3XG5cbiAgICAuY29udGFjdFxuICAgICAgICBtYXJnaW46IDh2dyBhdXRvIFxuICAgICAgICB3aWR0aDogODAlXG5cbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIGxlc3MgdGhhbiA3NjhweClcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgXG4gICAgLmNvbnRhaW5lclxuICAgICAgICBtYXgtd2lkdGg6OTAlXG4gICAgICAgIHNlY3Rpb25cbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMFxuICAgICAgICAgICAgbWFyZ2luOiAwIDBcbiAgICBcbiAgICAuaW50cm9cbiAgICAgICAgaGVpZ2h0OiAxMDB2aFxuICAgICAgICAubW9iaWxlLW5hdlxuICAgICAgICAgICAgbWFyZ2luOiAydmggMFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgICAgLmZ1bGwtbmF2XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgICAgIC5jb250YWluZXJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWRcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW5cbiAgICAgICAgbmF2XG4gICAgICAgICAgICAubmF2YmFyLWJyYW5kXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3Z3XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0dmggMCAxdmggMFxuICAgICAgICAgICAgLnJvdyBcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMFxuICAgICAgICAjcGFyYVxuICAgICAgICAgICAgcGFkZGluZzogNHZ3IDBcbiAgICAgICAgICAgIC5qdW1ib3Ryb25cbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDBcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMFxuICAgICAgICAgICAgICAgIGgxXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHZ3XG4gICAgICAgICAgICB1bFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDR2dyAwIFxuXG4gICAgLndvcmtcbiAgICAgICAgaDJcbiAgICAgICAgICAgIG1hcmdpbjogOHZ3XG4gICAgICAgICAgICBmb250LXNpemU6OHZ3XG4gICAgICAgIC5kZXNjcmlwdGlvbiBcbiAgICAgICAgICAgIG1hcmdpbjogMXZ3IFxuICAgICAgICAgICAgZm9udC1zaXplOiAzdndcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMFxuICAgICAgICAudGVjaG5vbG9naWVzXG4gICAgICAgICAgICBtYXJnaW46IDJ2dyBcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnZ3XG4gICAgICAgIC5yZXNwb25zaWJsaXRpZXNcbiAgICAgICAgICAgIG1hcmdpbjogMXZ3IFxuICAgICAgICAgICAgdWxcbiAgICAgICAgICAgICAgICBsaVxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJ2d1xuXG4gICAgLmNvbnRhY3RcbiAgICAgICAgbWFyZ2luOiA4dncgYXV0byBcbiAgICAgICAgd2lkdGg6IDgwJVxuXG4vLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgbGVzcyB0aGFuIDk5MnB4KVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBcbiAgICAuY29udGFpbmVyXG4gICAgICAgIG1heC13aWR0aDo5MCVcbiAgICAgICAgc2VjdGlvblxuICAgICAgICAgICAgcGFkZGluZzogM3ZoIDBcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMFxuICAgIC5pbnRyb1xuICAgICAgICBoZWlnaHQ6IDEwMHZoXG4gICAgICAgIHBhZGRpbmc6IDAgMCAhaW1wb3J0YW50XG4gICAgICAgIG1hcmdpbjogMCAwIDV2aCAwICFpbXBvcnRhbnRcbiAgICAgICAgLm1vYmlsZS1uYXZcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgICAgLmZ1bGwtbmF2XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgICAgIC5jb250YWluZXJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJVxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWRcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW5cbiAgICAgICAgbmF2XG4gICAgICAgICAgICAubmF2YmFyLWJyYW5kXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXZ3XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICAucm93IFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwXG4gICAgICAgICNwYXJhXG4gICAgICAgICAgICBwYWRkaW5nOiAxdncgMFxuICAgICAgICAgICAgLmp1bWJvdHJvblxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwXG4gICAgICAgICAgICAgICAgaDFcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA3dndcbiAgICAgICAgICAgIHVsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXZ3IDAgXG5cbiAgICAud29ya1xuICAgICAgICBoMlxuICAgICAgICAgICAgbWFyZ2luOiAxdndcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo3dndcbiAgICAgICAgLmRlc2NyaXB0aW9uIFxuICAgICAgICAgICAgbWFyZ2luOiAxdncgXG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXZ3XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDBcbiAgICAgICAgLnRlY2hub2xvZ2llc1xuICAgICAgICAgICAgbWFyZ2luOiAxdncgXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXZ3XG4gICAgICAgIC5yZXNwb25zaWJsaXRpZXNcbiAgICAgICAgICAgIG1hcmdpbjogMXZ3IFxuICAgICAgICAgICAgdWxcbiAgICAgICAgICAgICAgICBsaVxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJ2d1xuXG4gICAgLmNvbnRhY3RcbiAgICAgICAgbWFyZ2luOiA0dncgYXV0byBcbiAgICAgICAgd2lkdGg6IDUwJVxuICAgIFxuICAgIC8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCBsZXNzIHRoYW4gOTkycHgpXG5AbWVkaWEgKG1pbi13aWR0aDogMTc2MHB4KSBcbiAgICAgICAgI3BhcmFcbiAgICAgICAgICAgIC5qdW1ib3Ryb25cbiAgICAgICAgICAgICAgICBoMVxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDZ2dyAhaW1wb3J0YW50XG5cbiIsIioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbmJvZHkgcCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbnNlY3Rpb24ge1xuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbm1vYmlsZS1uYXYge1xuICBkaXNwbGF5OiBoaWRkZW47XG59XG5cbi5uYXYtbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAydnc7XG4gIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXkgRG90c1wiLCBjdXJzaXZlO1xufVxuXG4ubmF2LWl0ZW0ge1xuICBmb250LWZhbWlseTogXCJSYWpkaGFuaVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uanVtYm90cm9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb21wYW55IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi50ZWNobm9sb2dpZXMge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4ucmVzcG9uc2libGl0aWVzIHVsIGxpIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmNvbnRhY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwMWY7XG4gIGJvcmRlci1yYWRpdXM6IDF2dztcbiAgcGFkZGluZzogNHZ3IDR2dztcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5vbi1zdWNjZXNzIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ub24tZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLnBhZ2Utc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDR2aCAwO1xuICAgIG1hcmdpbjogMCAwO1xuICB9XG5cbiAgLmludHJvIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHBhZGRpbmc6IDV2aCAwIDF2aCAwO1xuICB9XG4gIC5pbnRybyAubW9iaWxlLW5hdiB7XG4gICAgbWFyZ2luOiAzdmggMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaW50cm8gLmZ1bGwtbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5pbnRybyAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuaW50cm8gbmF2IC5uYXZiYXItYnJhbmQge1xuICAgIGZvbnQtc2l6ZTogMTR2dztcbiAgICBtYXJnaW46IDR2aCAwO1xuICB9XG4gIC5pbnRybyBuYXYgLm5hdi1saW5rIHtcbiAgICBmb250LXNpemU6IDR2dztcbiAgfVxuICAuaW50cm8gI3BhcmEge1xuICAgIHBhZGRpbmc6IDJ2aCAwO1xuICB9XG4gIC5pbnRybyAjcGFyYSBoMSB7XG4gICAgZm9udC1zaXplOiA5dnc7XG4gIH1cbiAgLmludHJvICNwYXJhIHVsIHtcbiAgICBwYWRkaW5nOiAzdmggMDtcbiAgfVxuXG4gIC53b3JrIGgyIHtcbiAgICBtYXJnaW46IDh2dztcbiAgICBmb250LXNpemU6IDh2dztcbiAgfVxuICAud29yayAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMnZ3O1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgfVxuICAud29yayAudGVjaG5vbG9naWVzIHtcbiAgICBtYXJnaW46IDJ2dztcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxuICAud29yayAucmVzcG9uc2libGl0aWVzIHtcbiAgICBtYXJnaW46IDJ2dztcbiAgfVxuICAud29yayAucmVzcG9uc2libGl0aWVzIHVsIGxpIHtcbiAgICBmb250LXNpemU6IDN2dztcbiAgfVxuXG4gIC5jb250YWN0IHtcbiAgICBtYXJnaW46IDh2dyBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgfVxuICAuY29udGFpbmVyIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICBtYXJnaW46IDAgMDtcbiAgfVxuXG4gIC5pbnRybyB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuICAuaW50cm8gLm1vYmlsZS1uYXYge1xuICAgIG1hcmdpbjogMnZoIDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmludHJvIC5mdWxsLW5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaW50cm8gLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmludHJvIG5hdiAubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LXNpemU6IDEzdnc7XG4gICAgbWFyZ2luOiA0dmggMCAxdmggMDtcbiAgfVxuICAuaW50cm8gbmF2IC5yb3cge1xuICAgIG1hcmdpbjogMCAwO1xuICB9XG4gIC5pbnRybyAjcGFyYSB7XG4gICAgcGFkZGluZzogNHZ3IDA7XG4gIH1cbiAgLmludHJvICNwYXJhIC5qdW1ib3Ryb24ge1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICBtYXJnaW46IDAgMDtcbiAgfVxuICAuaW50cm8gI3BhcmEgLmp1bWJvdHJvbiBoMSB7XG4gICAgZm9udC1zaXplOiA4dnc7XG4gIH1cbiAgLmludHJvICNwYXJhIHVsIHtcbiAgICBwYWRkaW5nOiA0dncgMDtcbiAgfVxuXG4gIC53b3JrIGgyIHtcbiAgICBtYXJnaW46IDh2dztcbiAgICBmb250LXNpemU6IDh2dztcbiAgfVxuICAud29yayAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMXZ3O1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgfVxuICAud29yayAudGVjaG5vbG9naWVzIHtcbiAgICBtYXJnaW46IDJ2dztcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxuICAud29yayAucmVzcG9uc2libGl0aWVzIHtcbiAgICBtYXJnaW46IDF2dztcbiAgfVxuICAud29yayAucmVzcG9uc2libGl0aWVzIHVsIGxpIHtcbiAgICBmb250LXNpemU6IDJ2dztcbiAgfVxuXG4gIC5jb250YWN0IHtcbiAgICBtYXJnaW46IDh2dyBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgfVxuICAuY29udGFpbmVyIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDN2aCAwO1xuICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgfVxuXG4gIC5pbnRybyB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAwIDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgMCA1dmggMCAhaW1wb3J0YW50O1xuICB9XG4gIC5pbnRybyAubW9iaWxlLW5hdiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5pbnRybyAuZnVsbC1uYXYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmludHJvIC5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5pbnRybyBuYXYgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAxMXZ3O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuaW50cm8gbmF2IC5yb3cge1xuICAgIG1hcmdpbjogMCAwO1xuICB9XG4gIC5pbnRybyAjcGFyYSB7XG4gICAgcGFkZGluZzogMXZ3IDA7XG4gIH1cbiAgLmludHJvICNwYXJhIC5qdW1ib3Ryb24ge1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICBtYXJnaW46IDAgMDtcbiAgfVxuICAuaW50cm8gI3BhcmEgLmp1bWJvdHJvbiBoMSB7XG4gICAgZm9udC1zaXplOiA3dnc7XG4gIH1cbiAgLmludHJvICNwYXJhIHVsIHtcbiAgICBwYWRkaW5nOiAxdncgMDtcbiAgfVxuXG4gIC53b3JrIGgyIHtcbiAgICBtYXJnaW46IDF2dztcbiAgICBmb250LXNpemU6IDd2dztcbiAgfVxuICAud29yayAuZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMXZ3O1xuICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgcGFkZGluZzogMCAwO1xuICB9XG4gIC53b3JrIC50ZWNobm9sb2dpZXMge1xuICAgIG1hcmdpbjogMXZ3O1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gIH1cbiAgLndvcmsgLnJlc3BvbnNpYmxpdGllcyB7XG4gICAgbWFyZ2luOiAxdnc7XG4gIH1cbiAgLndvcmsgLnJlc3BvbnNpYmxpdGllcyB1bCBsaSB7XG4gICAgZm9udC1zaXplOiAydnc7XG4gIH1cblxuICAuY29udGFjdCB7XG4gICAgbWFyZ2luOiA0dncgYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTc2MHB4KSB7XG4gICNwYXJhIC5qdW1ib3Ryb24gaDEge1xuICAgIGZvbnQtc2l6ZTogNnZ3ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _service_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }]; }, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/service/mail.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/mail.service.ts ***!
  \*****************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class MailService {
    constructor(http) {
        this.http = http;
        this.url = 'http://localhost:8000/api/v1/send';
    }
    sendMail(value) {
        return this.http.post(this.url, value).toPromise().then(res => {
            console.log(res);
        });
    }
}
MailService.ɵfac = function MailService_Factory(t) { return new (t || MailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MailService, factory: MailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rohanjaiswal/Documents/Sites/angular tuts/portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map