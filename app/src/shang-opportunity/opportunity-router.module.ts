import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpptunityComponent, OppHomeComponent } from './opportunity.component';
import { OppNewsComponent } from './news/o-news.component';
import { OppModelComponent } from './model/o-model.component';
import { OppSearchComponent } from './search/o-search.component';
import { OppStoryComponent } from './story/o-story.component';
import { OppTeachComponent } from './teach/o-teach.component';

import { OppNewsDetailComponent } from './news/o-news-detail.component';

const routes: Routes = [
    { 
      path: 'opportunity', component: OpptunityComponent,
      children: [
          { path: '', component: OppHomeComponent },
          { path: 'news', component: OppNewsComponent },
          { path: 'model', component: OppModelComponent },
          { path: 'search', component: OppSearchComponent },
          { path: 'story', component: OppStoryComponent },
          { path: 'teach', component: OppTeachComponent },
          { path: 'news/:id', component: OppNewsDetailComponent }
      ]  
    }
] 

@NgModule({
    imports: [ RouterModule.forChild( routes )],
    exports: [ RouterModule ]
})
export class OppRouteModule { }