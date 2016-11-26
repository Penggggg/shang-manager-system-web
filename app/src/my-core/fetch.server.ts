import { Injectable } from '@angular/core'; 
import { Http, Headers } from '@angular/http';

import { INews } from '../interface/news-list.interface';


@Injectable( )
export class FetchServer {

    private _myIP = '123.123.123.123';
    private _headers = new Headers({
        'Content-Type': 'application/json'
    })

    constructor( private _http: Http ) { }

    getData< T >( url: string ): Promise< T[] > { 
        url = process.env.ENV === 'develoption' ? url : url.replace( /app/, `${this._myIP}/api`);
        console.log( `fetching ${url}` );
        return this._http
                    .get( url )  
                    .toPromise( ) 
                    .then( response => response.json( ).data ) 
    }

    updateData< T >( url: string, target: T ): Promise< any > {
        return this._http  
            .post( url, JSON.stringify( target ), { headers: this._headers })
            .toPromise( )
    }

 }