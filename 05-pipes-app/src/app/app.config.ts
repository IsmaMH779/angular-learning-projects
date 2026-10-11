import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localEs from '@angular/common/locales/es'
import localFr from '@angular/common/locales/fr'
import { LocalService } from './services/locale.service';


registerLocaleData(localEs, 'es')
registerLocaleData(localFr, 'fr')


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      //useValue: 'fr',
      deps: [LocalService],
      useFactory: (localService: LocalService) => localService.getLocale(),
    }
  ]
};
