import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Interface Plano (Corrigida)
 * Esta interface corresponde exatamente aos campos públicos da sua entidade Java 'Plano'.
 */
export interface Plano {
  id: number; // long no Java, mapeia para number no TypeScript
  nome: string; 
  descricao: string;
  precoPromocional: number; // double no Java, mapeia para number
  duracao: number; // integer no Java, mapeia para number
  beneficios: string;
  // O relacionamento List<Usuario> não é mapeado aqui, pois não o usaremos diretamente nas chamadas da API
}

@Injectable({
  providedIn: 'root'
})
export class PlansService  {
  
  // Confirmação: A base é 'http://localhost:8080' e o resource é '/planos'.
  // Assumimos que a sua config do Quarkus adiciona o '/api' no prefixo global.
  private readonly BASE_URL = 'https://probable-computing-machine-g4w7jwxqj4jp276g-8080.app.github.dev//planos'; 
  

  // Injeção do HttpClient
  private http = inject(HttpClient);

  // --- MÉTODOS DE COMUNICAÇÃO (APENAS OS IMPLEMENTADOS NO BACKEND) ---

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

  // OBSERVAÇÕES IMPORTANTES:
  // 1. Os métodos 'buscarPorId' e 'excluirPlano' foram removidos, pois não existem
  //    endpoints para GET /{id} e DELETE /{id} no seu PlanoResource de Quarkus.
  // 2. Você precisará implementá-los no backend para poder usá-los no frontend.
}