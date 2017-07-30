import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {ServiceProviderList} from './documents/service-provider-list';
import {ServiceProvider} from './documents/service-provider';
import {ServiceProviderFilter} from './documents/service-provider-filter';
import {ServiceProviderListGroup} from './documents/service-provider-list-group';
// import { TextMaskModule } from 'angular2-text-mask';

// import {AtGridModule} from 'at-grid';


import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule}   from '@angular/forms';

import {MODULE_ROUTES, MODULE_COMPONENTS, MODULE_EXPORTS} from './workspace.routes';


@NgModule({
  imports: [
    BrowserModule, FormsModule,
    HttpModule, JsonpModule,
    // AtGridModule,
    // TextMaskModule,
    RouterModule.forChild(MODULE_ROUTES)
  ],
  providers: [
    ServiceProviderList,
    ServiceProvider,
    ServiceProviderFilter,
    ServiceProviderListGroup
  ],
  declarations: [ MODULE_COMPONENTS ],
  exports: [MODULE_EXPORTS]
})

export class WorkspaceModule {

}
