import { Route } from '@angular/router';
import { HomeComponent } from './dashboard/home.component';


import { SettingComponent } from './documents/setting/setting-component/setting-component';

import { TestDictionaryListComponent } from './documents/test/test_dictionary-list-component/test_dictionary-list-component';
import { TestDictionaryEditComponent } from './documents/test/test_dictionary-edit-component/test_dictionary-edit-component';

export const MODULE_ROUTES: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },

  { path: 'documents/settings', component: SettingComponent },

  { path: 'documents/test_dictionary', component:  TestDictionaryListComponent },
  { path: 'documents/test_dictionary/edit/:idtest_dictionary', component: TestDictionaryEditComponent }

]

export const MODULE_COMPONENTS = [
  HomeComponent,

  SettingComponent,

  TestDictionaryListComponent,
  TestDictionaryEditComponent

]
