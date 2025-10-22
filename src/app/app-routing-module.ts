import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
   {
    path: '',
    loadChildren: () =>
      import('./landing/landing-routing-module').then((m) => m.LandingRoutingModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home-routing-module').then((m) => m.HomeRoutingModule),
  },
  {
    path: 'loja',
    loadChildren: () => import('./loja/loja-routing-module').then(m => m.LojaRoutingModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho-routing-module').then(m => m.CarrinhoRoutingModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda-routing-module').then(m => m.AgendaRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
