import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LojaComponent } from './loja-component/loja-component';

const routes: Routes = [
  {path: 'unistore', component: LojaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LojaRoutingModule { }
