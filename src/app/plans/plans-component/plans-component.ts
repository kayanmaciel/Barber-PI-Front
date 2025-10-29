import { Component } from '@angular/core';

@Component({
  selector: 'app-plans-component',
  standalone: false,
  templateUrl: './plans-component.html',
  styleUrl: './plans-component.css'
})
export class PlansComponent {
  plans = [
    {
      name: 'Plano Essencial',
      price: 'R$79',
      period: '/mês',
      description: 'Ideal para quem gosta de manter o visual sempre em dia.',
      services: [
        '2x corte de cabelo',
        '1x barba tradicional',
        '1x sobrancelha',
      ],
      color: 'primary',
    },
    {
      name: 'Plano Profissional',
      price: 'R$119',
      period: '/mês',
      description: 'Para quem quer um cuidado completo com estilo e frequência.',
      services: [
        '3x corte de cabelo',
        '2x barba',
        '1x sobrancelha',
        '1x limpeza facial',
      ],
      color: 'accent',
      highlight: true,
    },
    {
      name: 'Plano Premium',
      price: 'R$179',
      period: '/mês',
      description: 'A experiência mais completa e relaxante da barbearia.',
      services: [
        '4x corte de cabelo',
        '3x barba',
        '2x sobrancelha',
        '1x massagem relaxante',
        '1x hidratação capilar',
      ],
      color: 'warn',
    },
  ];
}