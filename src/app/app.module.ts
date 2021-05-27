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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { PageOneComponent } from './page-one/page-one.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { PaginaRistoranteComponent } from './pagina-ristorante/pagina-ristorante.component';


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
    CarouselComponent,
    PageOneComponent,
    NavbarComponent,
    SearchComponent,
    PaginaRistoranteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
