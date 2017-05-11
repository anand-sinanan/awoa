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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
//import {HEROES} from './mock-heroes';
var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
        //    getHeroes(): Promise<Hero[]> {
        //      return Promise.resolve(HEROES);
        //     }
        //
        //  getHero(id: number): Promise<Hero> {
        //   return this.getHeroes()
        //              .then(heroes => heroes.find(hero => hero.id === id));
        // }
        this.imagesUrl = 'api/images'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ImageService.prototype.getImages = function () {
        return this.http.get(this.imagesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ImageService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ImageService.prototype.getImage = function (id) {
        var url = this.imagesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ImageService.prototype.update = function (image) {
        var url = this.imagesUrl + "/" + image.id;
        return this.http
            .put(url, JSON.stringify(image), { headers: this.headers })
            .toPromise()
            .then(function () { return image; })
            .catch(this.handleError);
    };
    ImageService.prototype.create = function (name) {
        return this.http
            .post(this.imagesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ImageService.prototype.delete = function (id) {
        var url = this.imagesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return ImageService;
}());
ImageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map