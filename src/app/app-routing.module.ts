import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'homepage',
    component: HomeComponent
  },
  {
    path: '', //Redirec all'homepage in caso di path vuoto
    redirectTo: '/homepage',
    pathMatch: 'full' //
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
