import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

import { SharedModule } from '../shared/shared-module';
import { PublicLayout } from './layouts/public-layout/public-layout';

@NgModule({
  declarations: [PublicLayout],
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule
  ],
  exports: [PublicLayout]
})
export class CoreModule {}
