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
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getData = function () {
        return Promise.resolve(DATAS);
    };
    DataService.prototype.getDatas = function (id) {
        return Promise.resolve(DATAS)
            .then(function (datas) { return datas.filter(function (data) { return data.id === id; })[0]; });
    };
    DataService.prototype.getDataSlow = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(DATAS); }, 2000);
        });
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
var DATAS = [
    {
        id: "111",
        name: "Mr Bellingham",
        shortname: "Barot_Bellingham",
        reknown: "Royal Academy of Painting and Sculpture",
        bio: "Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different"
    },
    {
        id: "112",
        name: "Jonathan G. Ferrar II",
        shortname: "Jonathan_Ferrar",
        reknown: "Artist to Watch in 2012",
        bio: "The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations"
    },
    {
        id: "113",
        name: "Hillary Hewitt Goldwynn-Post",
        shortname: "Hillary_Goldwynn",
        reknown: "New York University",
        bio: "Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river."
    }
];
//# sourceMappingURL=data.service.js.map