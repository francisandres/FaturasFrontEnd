import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Pagamentos } from '../pagamentos/pagamentos';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  constructor(private http: HttpClient) { }

  private Url = 'http://localhost:64634/api/pagamentos';
  adicionarPagamento(pagamento: Pagamentos): Observable<Pagamentos> {

    return this.http.post<Pagamentos>(this.Url, pagamento, httpOptions);
  }
}
