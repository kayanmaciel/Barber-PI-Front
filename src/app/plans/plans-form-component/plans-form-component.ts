import { Component } from '@angular/core';
import { PlansService, Plano } from '../../api/plans/plans';

@Component({
  selector: 'app-plans-form-component',
  standalone: false,
  templateUrl: './plans-form-component.html',
  styleUrl: './plans-form-component.css',
})
export class PlansFormComponent {

  // ====== OBJETO DO FORMULÁRIO ======
  plan: Omit<Plano, 'id'> = {
    nome: '',
    descricao: '',
    precoPromocional: 0,
    duracao: 30,
    beneficios: ''
  };

  constructor(private plansService: PlansService) {}

  // ====== FUNÇÃO DE SALVAR ======
  save() {
    console.log("Enviando plano para API:", this.plan);

    this.plansService.criarPlano(this.plan).subscribe({
      next: (res) => {
        console.log("Plano criado com sucesso:", res);
        alert("Plano criado com sucesso!");

        // Reset do formulário
        this.plan = {
          nome: '',
          descricao: '',
          precoPromocional: 0,
          duracao: 30,
          beneficios: ''
        };
      },
      error: (err) => {
        console.error("Erro ao criar plano:", err);
        alert("Erro ao criar plano. Veja o console.");
      }
    });
  }
}
