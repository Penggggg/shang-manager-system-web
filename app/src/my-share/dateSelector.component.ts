import { Component, Input, OnInit, AfterViewChecked, ViewChild, Output, EventEmitter  } from '@angular/core'
import { NgForm } from '@angular/forms';

import * as Rx from 'rxjs';

@Component({
    selector: 'date-selector',
    template: `
        <div class="form-inline">
            <input #date="ngModel" class="form-control" [(ngModel)]="this._date" name="date" type='date' />
            <input #time="ngModel" class="form-control" type='time' [(ngModel)]="_time" name="time" />
        </div>`
})
export class DateSelectorComponent implements OnInit {
    @Input( ) value: string;
    @Output( ) valueChange = new EventEmitter< string >();
    @ViewChild('date') currentDate: NgForm;
    @ViewChild('time') currentTime: NgForm;

    private _second: string;

    ngOnInit( ): void {
        this._dateChange( );
    }

    private get _date( ): string {
         let _time: Date = new Date( Number( this.value ));
         return  `${_time.getFullYear( )}-${_time.getMonth( )+1}-${_time.getDate( )}`
    }
    private get _time( ): string {
        let _poly = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
        let _time: Date = new Date( Number( this.value ));
          let _hour = _time.getHours( );
        let _min = _time.getMinutes( );
        let _sh =  _hour > 10 ? _hour : _poly[_hour];
        let _sm = _min > 10 ? _min : _poly[_min];
        return `${_sh}:${_sm}`
    }

    private _dateChange( ): void {
        
        this.currentDate.valueChanges
            .combineLatest( this.currentTime.valueChanges, ( date, time ) =>{
                console.log(`${date} ${time}:00`)
                return `${date} ${time}:00`
            })
            .subscribe( date => {
                let _time: Date = new Date( date );
                this.valueChange.emit( String( _time.getTime( )));
            })




    }


 }