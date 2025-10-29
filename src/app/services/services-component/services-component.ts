import { Component } from '@angular/core';

@Component({
  selector: 'app-services-component',
  standalone: false,
  templateUrl: './services-component.html',
  styleUrl: './services-component.css'
})
export class ServicesComponent {
  services = [
    {
      name: 'Corte de Cabelo',
      description: 'Corte clássico ou moderno, com acabamento preciso.',
      price: 'R$45',
      icon: 'content_cut',
    },
    {
      name: 'Barba Tradicional',
      description: 'Feita com toalha quente, navalha e finalização com balm.',
      price: 'R$35',
      icon: 'face_retouching_natural',
    },
    {
      name: 'Sobrancelha',
      description: 'Limpeza de sobrancelha feita na pinça ou navalha.',
      price: 'R$20',
      icon: 'remove_red_eye',
    },
    {
      name: 'Depilação Nasal',
      description: 'Remoção dos pelos indesejados com cera quente.',
      price: 'R$25',
      icon: 'air',
    },
  ];
}