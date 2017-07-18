import { Route } from '@angular/router';
import { HomeComponent } from './dashboard/home.component';


import { SettingComponent } from './documents/setting/setting-component/setting-component';



import { Test_DictionaryListComponent } from './documents/test/test_dictionary-list-component/test_dictionary-list-component';
import { Test_DictionaryEditComponent } from './documents/test/test_dictionary-edit-component/test_dictionary-edit-component';
import { Test_DocListComponent } from './documents/test/test_doc-list-component/test_doc-list-component';
import { Test_DocEditComponent } from './documents/test/test_doc-edit-component/test_doc-edit-component';
import { Test_DocitemListComponent } from './documents/test/test_docitem-list-component/test_docitem-list-component';
import { Test_DocitemEditComponent } from './documents/test/test_docitem-edit-component/test_docitem-edit-component';


export const MODULE_ROUTES: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent },

  { path: 'documents/settings', component: SettingComponent },


  { path: 'documents/test_dictionary', component:  Test_DictionaryListComponent },
  { path: 'documents/test_dictionary/edit/:idtest_dictionary', component: Test_DictionaryEditComponent },
  { path: 'documents/test_dictionary/new', component: Test_DictionaryEditComponent },
  { path: 'documents/test_doc', component:  Test_DocListComponent },
  { path: 'documents/test_doc/edit/:idtest_doc', component: Test_DocEditComponent },
  { path: 'documents/test_doc/new', component: Test_DocEditComponent },
  { path: 'documents/test_docitem', component:  Test_DocitemListComponent },
  { path: 'documents/test_docitem/edit/:idtest_docitem', component: Test_DocitemEditComponent },
  { path: 'documents/test_docitem/new', component: Test_DocitemEditComponent }


]

export const MODULE_COMPONENTS = [
  HomeComponent,

  SettingComponent,

  Test_DictionaryListComponent,
  Test_DictionaryEditComponent,
  Test_DocListComponent,
  Test_DocEditComponent,
  Test_DocitemListComponent,
  Test_DocitemEditComponent


]
