import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';


import { DateSelectorComponent } from './dateSelector.component';

@NgModule({ 
    imports: [ BrowserModule, FormsModule ],
    declarations: [ DateSelectorComponent],
    exports: [ 
        BrowserModule, 
        FormsModule, 
        DateSelectorComponent
    ]
})
export class ShareModule { } 