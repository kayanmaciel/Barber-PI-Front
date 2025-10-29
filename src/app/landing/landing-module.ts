import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing-module';
import { LandingComponent } from './landing-component/landing-component';
import { PlansModule } from '../plans/plans-module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ServicesModule } from '../services/services-module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    PlansModule, // 👈 agora o componente é reconhecidoS
    ServicesModule
  ],
})
export class LandingModule {}
