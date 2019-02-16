import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banco } from '../financas/modelos/banco';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor(private http: HttpClient) { }

  private Url = 'http://localhost:64634/api/banco';

  obterBancos(): Observable<Banco[]> {

    return this.http.get<Banco[]>(this.Url);
  }

  adicionarBanco(banco: Banco): Observable<Banco> {

    return this.http.post<Banco>(this.Url, banco, httpOptions);
  }

  obterBancoid(id: string): Observable<Banco> {
    const url1 = `${this.Url}/${id}`;
     return this.http.get<Banco>(url1);
  }


}
