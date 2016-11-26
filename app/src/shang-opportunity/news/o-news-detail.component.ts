import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { FetchServer } from '../../my-core/fetch.server'
import { INews } from '../../interface/news-list.interface';


@Component({
    template: require('./o-news-detail.component.html'),
    styles: [ require('./o-news-detail.component.less').toString( )]
})
export class OppNewsDetailComponent implements OnInit, AfterViewChecked {

    newsForm: NgForm;
    news: INews;
    @ViewChild('newsForm') currentForm: NgForm;
    newsClassify = [ '餐饮', '连锁超市', '线下体验店', '量化投资', '外贸' ]

    constructor( 
        private _route: ActivatedRoute,
        private _fetchServer: FetchServer
     ) { }

    ngOnInit( ): void {
        this._initData( );
    }

    ngAfterViewChecked( ): void {
        // this._formChanged( );
    }

    private _initData( ): void {
        this._route.params.forEach(( params: Params ) => {
            this._fetchServer.getData< INews >( `app/newsList?id=${params['id']}` )
                .then( data => {
                    this.news = data[0]
                })
        })
    }

    private _formChanged( ): void {
        if( this.currentForm === this.newsForm ) { return }
        this.newsForm = this.currentForm;
        if( this.newsForm ) {
            this.newsForm.valueChanges
                .subscribe( data => {

                })
        }

    }

    update( ):void {
        this._fetchServer.updateData< INews >( `app/newsList/${this.news.id}`, this.news )
    }

}