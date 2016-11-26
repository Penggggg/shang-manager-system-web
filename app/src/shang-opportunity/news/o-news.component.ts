import { Component, OnInit } from '@angular/core';

import { INews } from '../../interface/news-list.interface';
import { FetchServer } from '../../my-core/fetch.server';



@Component({
     template: require('./o-news.component.html'),
     styles: [ require('./o-news.component.less').toString( )]
})
export class OppNewsComponent implements OnInit {
    title = '商业精文';
    NewsList: INews[ ];

    constructor( private _fetchServer: FetchServer ) { }

    ngOnInit( ): void {
        this._initData( );
    }

    private _initData( ): void {
        this._fetchServer.getData< INews >( 'app/newsList' )
            .then( data => {
                this.NewsList = data
            })
    }
}

