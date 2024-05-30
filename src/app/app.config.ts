import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { MessageService } from "primeng/api";
import { provideHttpClient, withFetch } from '@angular/common/http';




export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    MessageService,
    provideHttpClient(withFetch()),
  ]
};
