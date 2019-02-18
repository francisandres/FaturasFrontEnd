import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ReceitaOrcamento } from '../orcamento/models/ReceitaOrcamento';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrcamentoreceitaService {

  private orcareceita: ReceitaOrcamento;

  constructor(private http: HttpClient) { }
  private Url = 'http://localhost:64634/api/ReceitaOrcamentoes';

  adicionarReceita(receita: ReceitaOrcamento): Observable<ReceitaOrcamento> {

    return this.http.post<ReceitaOrcamento>(this.Url, receita, httpOptions);
  }

  obterReceitas(): Observable<ReceitaOrcamento[]> {

    return this.http.get<ReceitaOrcamento[]>(this.Url);
  }


}
