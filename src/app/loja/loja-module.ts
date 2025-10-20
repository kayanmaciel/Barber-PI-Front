import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LojaRoutingModule } from './loja-routing-module';
import { LojaComponent } from './loja-component/loja-component';


@NgModule({
  declarations: [
    LojaComponent
  ],
  imports: [
    CommonModule,
    LojaRoutingModule
  ]
})
export class LojaModule { }
