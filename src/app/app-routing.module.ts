import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageOneComponent } from './pages/page-one/page-one.component';
import { PaginaRistoranteComponent } from './pages/pagina-ristorante/pagina-ristorante.component';
import { CategoriesComponent } from './pages/categories/categories.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomeComponent
  },
  {
    path: 'page-one',
    component: PageOneComponent
  },
  {
    path: '', //Redirect all'homepage in caso di path vuoto
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  {
    path:'pagina-ristorante',
    component: PaginaRistoranteComponent
  },
  {
    path:'gallery',
    component: GalleryComponent
  },
  {
    path:'chi-siamo',
    component: ChiSiamoComponent
  },
  {
    path:'categories',
    component: CategoriesComponent
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
