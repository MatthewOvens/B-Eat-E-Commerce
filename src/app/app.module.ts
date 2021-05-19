import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoComponent } from './logo/logo.component';
import { TastoIniziaComponent } from './tasto-inizia/tasto-inizia.component';
import { LendingPageBackgroundComponent } from './lending-page-background/lending-page-background.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PageNotFoundComponent,
    LogoComponent,
    TastoIniziaComponent,
    LendingPageBackgroundComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
