import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from "@angular/google-maps";
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsTestComponent } from './components/google-maps-test/google-maps-test.component';
import { GoogleMapsBasicComponent } from './components/google-maps-basic/google-maps-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapsTestComponent,
    GoogleMapsBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [
    { provide: Window, useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
