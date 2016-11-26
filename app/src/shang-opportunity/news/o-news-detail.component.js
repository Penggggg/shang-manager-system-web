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
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var fetch_server_1 = require('../../my-core/fetch.server');
var OppNewsDetailComponent = (function () {
    function OppNewsDetailComponent(_route, _fetchServer) {
        this._route = _route;
        this._fetchServer = _fetchServer;
        this.newsClassify = ['餐饮', '连锁超市', '线下体验店', '量化投资', '外贸'];
    }
    OppNewsDetailComponent.prototype.ngOnInit = function () {
        this._initData();
    };
    OppNewsDetailComponent.prototype.ngAfterViewChecked = function () {
        // this._formChanged( );
    };
    OppNewsDetailComponent.prototype._initData = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this._fetchServer.getData("app/newsList?id=" + params['id'])
                .then(function (data) {
                _this.news = data[0];
            });
        });
    };
    OppNewsDetailComponent.prototype._formChanged = function () {
        if (this.currentForm === this.newsForm) {
            return;
        }
        this.newsForm = this.currentForm;
        if (this.newsForm) {
            this.newsForm.valueChanges
                .subscribe(function (data) {
            });
        }
    };
    OppNewsDetailComponent.prototype.update = function () {
        this._fetchServer.updateData("app/newsList/" + this.news.id, this.news);
    };
    __decorate([
        core_1.ViewChild('newsForm'), 
        __metadata('design:type', forms_1.NgForm)
    ], OppNewsDetailComponent.prototype, "currentForm", void 0);
    OppNewsDetailComponent = __decorate([
        core_1.Component({
            template: require('./o-news-detail.component.html'),
            styles: [require('./o-news-detail.component.less').toString()]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, fetch_server_1.FetchServer])
    ], OppNewsDetailComponent);
    return OppNewsDetailComponent;
}());
exports.OppNewsDetailComponent = OppNewsDetailComponent;
//# sourceMappingURL=o-news-detail.component.js.map