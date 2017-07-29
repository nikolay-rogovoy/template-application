var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceProviderList } from './documents/service-provider-list';
import { ServiceProvider } from './documents/service-provider';
import { ServiceProviderFilter } from './documents/service-provider-filter';
import { ServiceProviderListGroup } from './documents/service-provider-list-group';
// import { TextMaskModule } from 'angular2-text-mask';
// import {AtGridModule} from 'at-grid';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MODULE_ROUTES, MODULE_COMPONENTS } from './workspace.routes';
var WorkspaceModule = (function () {
    function WorkspaceModule() {
    }
    return WorkspaceModule;
}());
WorkspaceModule = __decorate([
    NgModule({
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
        declarations: [MODULE_COMPONENTS]
    })
], WorkspaceModule);
export { WorkspaceModule };
//# sourceMappingURL=workspace.module.js.map