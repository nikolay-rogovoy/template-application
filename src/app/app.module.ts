import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { TestComponent }  from './test/test-component';

@NgModule({
  imports:
    [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(
        [
          { path: '', redirectTo: 'test', pathMatch: 'full' },
          { path: 'test', component: TestComponent }
        ]
      )
    ],
  declarations:
    [
      AppComponent,
      TestComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
