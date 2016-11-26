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
var fetch_server_1 = require('../../my-core/fetch.server');
var OppNewsComponent = (function () {
    function OppNewsComponent(_fetchServer) {
        this._fetchServer = _fetchServer;
        this.title = '商业精文';
    }
    OppNewsComponent.prototype.ngOnInit = function () {
        this._initData();
    };
    OppNewsComponent.prototype._initData = function () {
        var _this = this;
        this._fetchServer.getData('app/newsList')
            .then(function (data) {
            _this.NewsList = data;
        });
    };
    OppNewsComponent = __decorate([
        core_1.Component({
            template: require('./o-news.component.html'),
            styles: [require('./o-news.component.less').toString()]
        }), 
        __metadata('design:paramtypes', [fetch_server_1.FetchServer])
    ], OppNewsComponent);
    return OppNewsComponent;
}());
exports.OppNewsComponent = OppNewsComponent;
//# sourceMappingURL=o-news.component.js.map