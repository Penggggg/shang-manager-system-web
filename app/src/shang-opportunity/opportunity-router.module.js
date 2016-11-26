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
var opportunity_component_1 = require('./opportunity.component');
var o_news_component_1 = require('./news/o-news.component');
var o_model_component_1 = require('./model/o-model.component');
var o_search_component_1 = require('./search/o-search.component');
var o_story_component_1 = require('./story/o-story.component');
var o_teach_component_1 = require('./teach/o-teach.component');
var o_news_detail_component_1 = require('./news/o-news-detail.component');
var routes = [
    {
        path: 'opportunity', component: opportunity_component_1.OpptunityComponent,
        children: [
            { path: '', component: opportunity_component_1.OppHomeComponent },
            { path: 'news', component: o_news_component_1.OppNewsComponent },
            { path: 'model', component: o_model_component_1.OppModelComponent },
            { path: 'search', component: o_search_component_1.OppSearchComponent },
            { path: 'story', component: o_story_component_1.OppStoryComponent },
            { path: 'teach', component: o_teach_component_1.OppTeachComponent },
            { path: 'news/:id', component: o_news_detail_component_1.OppNewsDetailComponent }
        ]
    }
];
var OppRouteModule = (function () {
    function OppRouteModule() {
    }
    OppRouteModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], OppRouteModule);
    return OppRouteModule;
}());
exports.OppRouteModule = OppRouteModule;
//# sourceMappingURL=opportunity-router.module.js.map