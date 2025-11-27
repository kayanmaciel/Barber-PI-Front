import { Component } from '@angular/core';

@Component({
  selector: 'app-services-form-component',
  standalone: false,
  templateUrl: './services-form-component.html',
  styleUrl: './services-form-component.css',
})
export class ServicesFormComponent {

  // ====== OBJETO DO FORMULÁRIO ======
  service = {
    nome: '',
    descricao: '',
    preco: null,
    duracao: null,
    tipo: ''
  };

  // ====== FUNÇÃO DE SALVAR ======
  save() {
    console.log("Serviço salvo:", this.service);
    // Depois enviaremos para API
  }
}
