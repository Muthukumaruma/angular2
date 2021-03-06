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
//Muthu
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var data_service_1 = require('../data/data.service');
var detail_component_1 = require('../dashboard/detail.component');
var MuthuComponent = (function () {
    function MuthuComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    MuthuComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.getData().then(function (datas) { return _this.datas = datas; });
    };
    MuthuComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    MuthuComponent.prototype.onSelect = function (data) { this.selected = data; };
    MuthuComponent.prototype.gotoDetail = function () {
        this.router.navigate(['Detail', { id: this.selected.id }]);
    };
    MuthuComponent = __decorate([
        core_1.Component({
            selector: 'muthu',
            template: "\n    <ul class=\"list col-md-4\">\n      <li *ngFor= \"let data of datas\" \n      (click)=\"onSelect(data)\" \n      [class.selected]=\"data === selected\" class=\"bg-primary \">\n\n        <h3><span>{{data.id}}</span> {{data.name}}</h3>\n\n      </li>\n    </ul>\n ",
            directives: [detail_component_1.DetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, data_service_1.DataService])
    ], MuthuComponent);
    return MuthuComponent;
}());
exports.MuthuComponent = MuthuComponent;
//# sourceMappingURL=muthu.component.js.map