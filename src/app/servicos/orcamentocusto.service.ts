import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CustoOrcamento } from "../orcamento/models/CustoOrcamento.1";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrcamentocustoService {

  private orcareceita: CustoOrcamento;

  constructor(private http: HttpClient) { }
  private Url = 'http://localhost:64634/api/custoOrcamentos';

  adicionarCusto(custo: CustoOrcamento): Observable<CustoOrcamento> {

    return this.http.post<CustoOrcamento>(this.Url, custo, httpOptions);
  }

  obterCustos(): Observable<CustoOrcamento[]> {

    return this.http.get<CustoOrcamento[]>(this.Url);
  }

}
