import {Route} from '@angular/router';
import {WorkspaceComponent} from './workspace.component';
import {HomeComponent} from './dashboard/home.component';


import {SettingComponent} from './documents/setting/setting-component/setting-component';

import {TestdictionaryListComponent} from './documents/test/testdictionary-list-component/testdictionary-list-component';
import {TestdictionaryEditComponent} from './documents/test/testdictionary-edit-component/testdictionary-edit-component';

export const MODULE_ROUTES: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },

  { path: 'documents/settings', component: SettingComponent },

  { path: 'documents/testdictionary', component:  TestdictionaryListComponent },
  { path: 'documents/testdictionary/edit/:idtestdictionary', component: TestdictionaryEditComponent },
  { path: 'documents/testdictionary/new', component: TestdictionaryEditComponent },

]

export const MODULE_COMPONENTS = [
  WorkspaceComponent,
  HomeComponent,

  SettingComponent,

  TestdictionaryListComponent,
  TestdictionaryEditComponent

]

export const MODULE_EXPORTS = [
  WorkspaceComponent
]
