import { NgModule } from '@angular/core';

import { AppRouteModule } from './app-route.module';
import { CoreModule } from '../my-core/core.module';
import { OpportunityModule } from '../shang-opportunity/opportunity.module';

import { AppComponent, HomeComponent } from './app.component';

import './app.less';

@NgModule({
    imports: [
        CoreModule,
        AppRouteModule,
        OpportunityModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
