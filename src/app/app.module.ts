import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent}  from './app.component';
import {TestComponent} from './test/test-component';
import {FormsModule} from '@angular/forms';
import {AtGridModule} from './at-grid/at-grid-module';

@NgModule({
  imports:
    [
      BrowserModule,
      FormsModule,
      AtGridModule,
      RouterModule.forRoot([
        { path: '', redirectTo: 'test', pathMatch: 'full' },
        { path: 'test', component: TestComponent }
      ])
  ],
  declarations: [ AppComponent,
    TestComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
