import { Component } from '@angular/core';
import { ServicoService, Servico } from '../../api/services/services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-services-form-component',
  standalone: false,
  templateUrl: './services-form-component.html',
  styleUrl: './services-form-component.css',
})
export class ServicesFormComponent {

  // ====== OBJETO DO FORMULÁRIO ======
  service: Omit<Servico, 'id'> = {
    nome: '',
    descricao: '',
    preco: 0,
    duracao: 0,
    status: ''
  };


  constructor(
    private servicoService: ServicoService,
    private location: Location
  ) { }

  // ====== FUNÇÃO DE SALVAR ======
  save() {
    console.log("Enviando serviço para API:", this.service);

    this.servicoService.criar(this.service).subscribe({
      next: (res) => {
        console.log("Serviço criado com sucesso:", res);
        alert("Serviço criado com sucesso!");

        // VOLTAR para a página anterior
        this.location.back();
      },
      error: (err) => {
        console.error("Erro ao criar serviço:", err);
        alert("Erro ao criar serviço.");
      }
    });
  }
}
