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
var share_module_1 = require('../my-share/share.module');
var opportunity_router_module_1 = require('./opportunity-router.module');
var opportunity_component_1 = require('./opportunity.component');
var o_news_component_1 = require('./news/o-news.component');
var o_model_component_1 = require('./model/o-model.component');
var o_search_component_1 = require('./search/o-search.component');
var o_story_component_1 = require('./story/o-story.component');
var o_teach_component_1 = require('./teach/o-teach.component');
var o_news_detail_component_1 = require('./news/o-news-detail.component');
var OpportunityModule = (function () {
    function OpportunityModule() {
    }
    OpportunityModule = __decorate([
        core_1.NgModule({
            imports: [opportunity_router_module_1.OppRouteModule, share_module_1.ShareModule],
            declarations: [
                opportunity_component_1.OpptunityComponent,
                opportunity_component_1.OppHomeComponent,
                o_news_component_1.OppNewsComponent,
                o_model_component_1.OppModelComponent,
                o_search_component_1.OppSearchComponent,
                o_story_component_1.OppStoryComponent,
                o_teach_component_1.OppTeachComponent,
                o_news_detail_component_1.OppNewsDetailComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], OpportunityModule);
    return OpportunityModule;
}());
exports.OpportunityModule = OpportunityModule;
//# sourceMappingURL=opportunity.module.js.map