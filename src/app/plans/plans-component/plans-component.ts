import { Component, OnInit } from '@angular/core';
import { PlansService, Plano } from '../../api/plans/plans';

@Component({
  selector: 'app-plans-component',
  standalone: false,
  templateUrl: './plans-component.html',
  styleUrl: './plans-component.css'
})
export class PlansComponent implements OnInit {

  plans: Plano[] = [];
  loading = true;

  constructor(private plansService: PlansService) {}

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans(): void {
    this.plansService.buscarTodos().subscribe({
      next: (data) => {
        this.plans = data;
        this.loading = false;

        console.log("Planos carregados: ", data);
      },
      error: (err) => {
        console.error("Erro ao carregar planos:", err);
        this.loading = false;
      }
    });
  }
}
