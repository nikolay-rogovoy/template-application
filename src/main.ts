import { enableProdMode } from '@angular/core';
import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../tmp/aot/src/app/app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
