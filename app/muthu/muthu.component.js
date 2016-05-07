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
var data_service_1 = require('../data/data.service');
var MuthuComponent = (function () {
    function MuthuComponent(dataService) {
        this.dataService = dataService;
    }
    MuthuComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.getData().then(function (datas) { return _this.datas = datas; });
    };
    MuthuComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    MuthuComponent.prototype.onSelect = function (detail) { this.selected = detail; };
    MuthuComponent = __decorate([
        core_1.Component({
            selector: 'muthu',
            template: "\n    <ul class=\"list col-md-4\">\n      <li *ngFor= \"let detail of datas\" \n      (click)=\"onSelect(detail)\" \n      [class.selected]=\"detail === selected\" class=\"bg-primary \">\n\n        <h3>{{detail.name}}</h3>\n\n      </li>\n    </ul>\n    <div class=\"col-md-8\" *ngIf=\"selected\">\n      <h4>{{selected.name }}</h4>\n      <p>{{selected.reknown}}</p>\n      <p>{{selected.bio}}</p>\n    </div>",
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], MuthuComponent);
    return MuthuComponent;
}());
exports.MuthuComponent = MuthuComponent;
//# sourceMappingURL=muthu.component.js.map