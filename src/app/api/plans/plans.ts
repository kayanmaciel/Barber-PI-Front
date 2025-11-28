import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Plano {
  id?: number;
  nome: string;
  descricao: string;
  precoPromocional: number;
  duracao: number;
  beneficios: string;
  // O relacionamento List<Usuario> não é mapeado aqui, pois não o usaremos diretamente nas chamadas da API
}

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  private readonly BASE_URL = 'https://probable-computing-machine-g4w7jwxqj4jp276g-8080.app.github.dev//planos';

  // Injeção do HttpClient
  private http = inject(HttpClient);


  /**
   * [GET] Busca todos os planos disponíveis (Mapeia para PlanoResource.listarTodos()).
   * Endpoint: GET /api/planos
   * @returns Observable de um array de Plano.
   */
  buscarTodos(): Observable<Plano[]> {
    console.log(`Plans: Realizando GET em ${this.BASE_URL}`);
    return this.http.get<Plano[]>(this.BASE_URL);
  }

  /**
   * [POST] Cria um novo plano (Mapeia para PlanoResource.criarPlano(Plano plano)).
   * Endpoint: POST /api/planos
   * @param novoPlano O objeto a ser enviado, sem o 'id'.
   * @returns Observable do plano criado.
   */
  criarPlano(novoPlano: Omit<Plano, 'id'>): Observable<Plano> {
    console.log(`Plans: Realizando POST em ${this.BASE_URL}`);
    return this.http.post<Plano>(this.BASE_URL, novoPlano);
  }

  // DELETE /planos/{id}
  excluir(id: number): Observable<void> {
    console.log(`Plans: Realizando DELETE em ${this.BASE_URL}/${id}`);
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }

  // GET /planos/{id}
  buscarPorId(id: number): Observable<Plano> {
    console.log(`Plans: Realizando GET em ${this.BASE_URL}/${id}`);
    return this.http.get<Plano>(`${this.BASE_URL}/${id}`);
  }


}