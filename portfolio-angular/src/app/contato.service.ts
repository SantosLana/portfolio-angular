import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface NovoContato {       // o que ENVIAMOS no POST
  nome: string; email: string; mensagem: string;
}

export interface RespostaContato { // o que a API DEVOLVE no 201
  sucesso: boolean; id: number; mensagem: string;
}

@Injectable({ providedIn: 'root' })
export class ContatoService {
  private http = inject(HttpClient);
  private url = 'https://humble-potato-97vx57v4rggp3jwv-8000.app.github.dev/api/contato.php';
  enviar(dados: NovoContato): Observable<RespostaContato> {
    return this.http.post<RespostaContato>(this.url, dados); 
  }
}