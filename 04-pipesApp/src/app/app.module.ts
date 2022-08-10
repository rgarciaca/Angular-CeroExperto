import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el localization de la app
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common'


registerLocaleData( localeEs );
registerLocaleData( localeFr );
registerLocaleData( localeDe );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule, 
    VentasModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'ES' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
