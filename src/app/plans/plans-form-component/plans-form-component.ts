import { Component } from '@angular/core';

@Component({
  selector: 'app-plans-form-component',
  standalone: false,
  templateUrl: './plans-form-component.html',
  styleUrl: './plans-form-component.css',
})
export class PlansFormComponent {

  // ====== OBJETO DO FORMULÁRIO ======
  plan = {
    nome: '',
    descricao: '',
    precoPromocional: null,
    duracao: 30,
    beneficios: ''
  };

  // ====== FUNÇÃO DE SALVAR ======
  save() {
    console.log("Plano salvo:", this.plan);
    // Depois enviaremos para API
  }
}
