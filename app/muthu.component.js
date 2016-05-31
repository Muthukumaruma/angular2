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
var MuthuComponent = (function () {
    function MuthuComponent() {
    }
    MuthuComponent.prototype.onSelect = function (detail) { this.selected = detail; }; // on select function. checking the detail with local/API data
    MuthuComponent = __decorate([
        core_1.Component({
            selector: 'muthu',
            template: "\n  <!--\n    *ngFor= \"let detail of datas\" ==> ngFor for repit the data and move the data to detail var\n    (click)=\"onSelect(detail)\"  ==> for click event for this \"detail\"\n    class.selected]=\"detail === selected\" ==> add selected class. checking with selected data\n    <div class=\"col-md-8\" *ngIf=\"selected\"> ==> checking the selected data with all local data and if the data will matching it will show the data\n\n  -->\n    <ul class=\"list col-md-4\">\n      <li *ngFor= \"let detail of datas\" \n      (click)=\"onSelect(detail)\" \n      [class.selected]=\"detail === selected\" class=\"bg-primary \">\n\n        <h3>{{detail.name}}</h3>\n        <p>detail.id</p>\n\n      </li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MuthuComponent);
    return MuthuComponent;
}());
exports.MuthuComponent = MuthuComponent; // local data shuld be outside the class
//# sourceMappingURL=muthu.component.js.map