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

  private apiUrl = 'https://probable-computing-machine-g4w7jwxqj4jp276g-8080.app.github.dev//servicos';

  constructor(private http: HttpClient) { }

  // GET /servicos
  listarTodos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.apiUrl);
  }

  // GET /servicos/{id}
  buscarPorId(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${this.apiUrl}/${id}`);
  }

  // POST /servicos
  criar(servico: Omit<Servico, 'id'>): Observable<Servico> {
    return this.http.post<Servico>(this.apiUrl, servico);
  }

  // PUT /servicos/{id}
  atualizar(id: number, servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(`${this.apiUrl}/${id}`, servico);
  }

  // DELETE /servicos/{id}
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
