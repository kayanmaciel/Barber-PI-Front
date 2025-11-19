import { Component, OnInit } from '@angular/core';
import { ServicoService, Servico } from '../../api/services/services'

@Component({
  selector: 'app-services-component',
  standalone: false,
  templateUrl: './services-component.html',
  styleUrl: './services-component.css'
})
export class ServicesComponent implements OnInit {

  services: Servico[] = [];
  loading = true;

  constructor(private servicoService: ServicoService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.servicoService.listarTodos().subscribe({
      next: (data) => {
        this.services = data;
        this.loading = false;

        console.log("Serviços carregados:", data);
      },
      error: (err) => {
        console.error("Erro ao carregar serviços:", err);
        this.loading = false;
      }
    });
  }
}
