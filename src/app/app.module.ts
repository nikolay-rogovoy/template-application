import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { TestComponent }  from './test/test-component';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  imports:
    [
      BrowserModule,
      FormsModule,
      NavbarModule,
      SidebarModule,
      RouterModule.forRoot([])
    ],
  declarations:
    [
      AppComponent,
      TestComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
