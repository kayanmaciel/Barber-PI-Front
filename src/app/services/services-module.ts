import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing-module';
import { ServicesComponent } from './services-component/services-component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MatIconModule,
  ],
  exports: [ServicesComponent],
})
export class ServicesModule { }
