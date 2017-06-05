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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var hero_service_1 = require("./hero.service");
var HeroPickerComponent = (function () {
    //CONSTRUCTOR ========================================================
    function HeroPickerComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    //WHEN WE INITIALIZE IT ==================================================
    HeroPickerComponent.prototype.ngOnInit = function () {
    };
    //ALLOW TO GO BACK ================================================================
    HeroPickerComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroPickerComponent;
}());
HeroPickerComponent = __decorate([
    core_1.Component({
        selector: 'hero-picker',
        templateUrl: './hero-picker.component.html',
        styleUrls: ['./hero-picker.component.css'],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroPickerComponent);
exports.HeroPickerComponent = HeroPickerComponent;
//# sourceMappingURL=hero-picker.component.js.map