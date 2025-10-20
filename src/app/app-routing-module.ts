import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
   {
    path: 'loja', 
    loadChildren: () => import('./loja/loja-routing-module').then(m => m.LojaRoutingModule)
  },
  {
    path: 'carrinho', 
    loadChildren: () => import('./carrinho/carrinho-routing-module').then(m => m.CarrinhoRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
