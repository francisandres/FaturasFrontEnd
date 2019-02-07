import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Faturas } from '../faturas/Faturas';
import { Observable, of } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class FaturasService {


  private _faturatemp: Faturas;



  constructor(private http: HttpClient) { }
  private Url = 'http://localhost:64634/api/Faturas';

  obterFaturas(): Observable<Faturas[]> {

    return this.http.get<Faturas[]>(this.Url);
  }

  adicionarFatura(fatura: Faturas): Observable<Faturas> {

    return this.http.post<Faturas>(this.Url, JSON.stringify(fatura), httpOptions);
  }

  definirFaturaTemp(fatura: Faturas): void {
    this._faturatemp = fatura;
  }

  obterFaturaTemp(): Observable<Faturas> {
    return of(this._faturatemp);
  }


}
