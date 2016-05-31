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
var router_deprecated_1 = require('@angular/router-deprecated');
var data_1 = require('../data/data'); // data
var data_service_1 = require('../data/data.service');
var DetailComponent = (function () {
    function DetailComponent(dataService, routeParams) {
        this.dataService = dataService;
        this.routeParams = routeParams;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.routeParams.get('id');
        this.dataService.getDatas(id)
            .then(function (datas) { return _this.datas = datas; });
    };
    DetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', data_1.data)
    ], DetailComponent.prototype, "datas", void 0);
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'detail',
            template: "\n  <button (click)=\"goBack()\">Back</button>\n  \t\t\t<div class=\"col-md-12\" *ngIf=\"datas\">\n\t\t      <h4>{{datas.name }}</h4>\n\t\t      <p>{{datas.id}}</p>\n\t\t      <p>{{datas.reknown}}</p>\n\t\t      <p>{{datas.bio}}</p>\n\t\t      <div>\n\t\t        <label>name: </label>\n\t\t        <input [(ngModel)]=\"id\" placeholder=\"name\"/>\n\t\t      </div>\n\t\t    </div>\n  "
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, router_deprecated_1.RouteParams])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map