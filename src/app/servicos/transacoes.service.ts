import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transacoes } from './Transacoes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  constructor(private http: HttpClient) { }
  private Url = 'http://localhost:64634/api/Transacoes';


  obterClienteporid(id: string): Observable<Transacoes[]> {
    const url1 = `${this.Url}/${id}`;
     return this.http.get<Transacoes[]>(url1);
  }

  obterTransacoes(): Observable<Transacoes[]> {

     return this.http.get<Transacoes[]>(this.Url);
  }
}
