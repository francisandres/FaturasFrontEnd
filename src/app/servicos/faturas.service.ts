import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Faturas } from '../faturas/Faturas';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class FaturasService {

  constructor(private http: HttpClient) { }
  private Url = 'http://localhost:64634/api/Faturas';

  obterFaturas(): Observable<Faturas[]> {
    console.log('Atacando o servidor...');
    return this.http.get<Faturas[]>(this.Url);
  }

  adicionarFatura(fatura: Faturas): Observable<Faturas> {
    console.log(JSON.stringify(fatura));
    return this.http.post<Faturas>(this.Url, JSON.stringify(fatura), httpOptions);
}
}
