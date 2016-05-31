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
var core_1 = require('@angular/core'); //core angular
var router_deprecated_1 = require('@angular/router-deprecated'); // add rout
var data_service_1 = require('./data/data.service'); // data service
var muthu_component_1 = require('./muthu/muthu.component'); // data
var dashboard_component_1 = require('./dashboard/dashboard.component'); // dashboard
var detail_component_1 = require('./dashboard/detail.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "My First App";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t\t\t<a [routerLink]=\"['Muthu']\">Muthu</a><!--ROUTE NAVIGATION -->\n  \t\t\t<a [routerLink]=\"['Dashboard']\">Dashboard</a>\n  \t\t\t\n  \t\t\t\n  \t\t\t<h1>{{title}}</h1>\n  \t\t\t\n        <router-outlet></router-outlet> <!--its ROUTER_DIRECTIVES =>ALL ROUTE WILL SHOW INSID THIS TAG -->      \n  ",
            // moduleId: module.id,
            //templateUrl: 'muthu/muthu.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [data_service_1.DataService, router_deprecated_1.ROUTER_PROVIDERS],
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/muthu',
                name: 'Muthu',
                component: muthu_component_1.MuthuComponent
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/detail/:id',
                name: 'Detail',
                component: detail_component_1.DetailComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map