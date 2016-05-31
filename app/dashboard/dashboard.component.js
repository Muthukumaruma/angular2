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
var data_service_1 = require('../data/data.service');
var DashboardComponent = (function () {
    function DashboardComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.datas = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().then(function (datas) { return _this.datas = datas.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (data) {
        var link = ['Detail', { id: data.id }]; //set a route link parameters array
        this.router.navigate(link); //pass the array to the router's navigate method.
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            template: "\n  \t\t\t<ul class=\"list col-md-4\">\n\t\t      <li *ngFor= \"let list of datas\" (click)=\"gotoDetail(list)\" class=\"bg-primary \">\n\t\t        <h3>{{list.name}}</h3>\n            \n\t\t      </li>\n\t\t    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, data_service_1.DataService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map