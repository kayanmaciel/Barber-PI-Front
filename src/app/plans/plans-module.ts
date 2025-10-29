import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans-component/plans-component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PlansComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [PlansComponent],
})
export class PlansModule {}
