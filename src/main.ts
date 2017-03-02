import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

var environment = process.env.NODE_ENV;

if (environment === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
