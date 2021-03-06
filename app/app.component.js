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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Axe and Sirens';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\n    <h1>{{title}}</h1>\n    <nav class=\"hide-on-small-only\">\n      <div class=\"nav-wrapper blue-grey lighten-1\">\n        <div class=\"container\">\n          <ul>\n            <li><a routerLink=\"/dashboard\" routerLinkActive=\"active\">Products</a></li>\n            <li><a routerLink=\"/about\" routerLinkActive=\"active\">About</a></li>\n            <li><a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a></li>\n            <li><a routerLink=\"/checkout\" routerLinkActive=\"active\">Checkout</a></li>\n            <li><a routerLink=\"/faqs\" routerLinkActive=\"active\">FAQs</a></li>\n            <li><a routerLink=\"/custom\" routerLinkActive=\"active\">Custom</a></li>\n          </ul>\n        </div>\n      </div>\n    </nav>\n\n    <router-outlet></router-outlet>\n    <my-footer></my-footer>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map