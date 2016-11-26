import { NgModule } from '@angular/core';
import { ShareModule } from '../my-share/share.module';
import { OppRouteModule } from './opportunity-router.module';
import { OpptunityComponent, OppHomeComponent } from './opportunity.component';


import { OppNewsComponent } from './news/o-news.component';
import { OppModelComponent } from './model/o-model.component'
import { OppSearchComponent } from './search/o-search.component';
import { OppStoryComponent } from './story/o-story.component';
import { OppTeachComponent } from './teach/o-teach.component';

import { OppNewsDetailComponent } from './news/o-news-detail.component';


@NgModule({
    imports: [ OppRouteModule, ShareModule ],
    declarations: [
        OpptunityComponent,
        OppHomeComponent,
        OppNewsComponent,
        OppModelComponent,
        OppSearchComponent,
        OppStoryComponent,
        OppTeachComponent,
        OppNewsDetailComponent
    ]
})
export class OpportunityModule { }