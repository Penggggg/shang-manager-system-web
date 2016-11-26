import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [ require('./app.component.less').toString( )]
})
export class AppComponent { }


@Component({
    template: ``
})
export class HomeComponent { }
