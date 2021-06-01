import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PaginaRistoranteComponent } from './pages/pagina-ristorante/pagina-ristorante.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomeComponent
  },
  {
    path: 'homepage/page-one',
    component: PageOneComponent
  },
  {
    path: '', //Redirec all'homepage in caso di path vuoto
    redirectTo: '/homepage',
    pathMatch: 'full' //
  },
  {
    path:'homepage/page-one/pagina-ristorante',
    component: PaginaRistoranteComponent
  },
  {
    path: '**', //Wildcard route - generico
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
