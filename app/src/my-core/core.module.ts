import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import { mockServer } from '../mock/mock.server'; 
import { FetchServer } from './fetch.server';



@NgModule({
    imports: [ 
        HttpModule,
        InMemoryWebApiModule.forRoot( mockServer )
    ],
    providers: [ FetchServer ]
})
export class CoreModule { }