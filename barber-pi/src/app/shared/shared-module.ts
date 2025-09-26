import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// Componentes compartilhados
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [
    Header,
    Hero,
    Footer
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    Header,
    Hero,
    Footer,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class SharedModule {}
