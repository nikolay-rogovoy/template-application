import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Для JIT не ключаем продакшен режим
// enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
