import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface opcional para tipagem
export interface Servico {
  id?: number;
  nome: string;
  descricao?: string;
  preco: number;
  duracao: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private apiUrl = '/api/servicos';

  constructor(private http: HttpClient) {}

  // GET /servicos
  listarTodos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.apiUrl);
  }

  // POST /servicos
  criar(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.apiUrl, servico);
  }
}
