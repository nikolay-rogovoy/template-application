import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceProviderList, ServiceProvider, ServiceProviderFilter, ServiceProviderListGroup } from './documents/CommonLib';
// import { TextMaskModule } from 'angular2-text-mask';

import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { MODULE_ROUTES, MODULE_COMPONENTS } from './workspace.routes';


@NgModule({
  imports: [
    BrowserModule, FormsModule,
    HttpModule, JsonpModule,
    // TextMaskModule,
    RouterModule.forChild(MODULE_ROUTES)
  ],
  providers: [
    ServiceProviderList,
    ServiceProvider,
    ServiceProviderFilter,
    ServiceProviderListGroup
  ],
  declarations: [ MODULE_COMPONENTS ]
})

export class WorkspaceModule {

}
