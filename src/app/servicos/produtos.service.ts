import { Produtos } from './../produtos/produtos';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  private Url = 'http://localhost:64634/api/produtos';

  obterProdutos(): Observable<Produtos[]> {

    return this.http.get<Produtos[]>(this.Url);
  }

  adicionarProduto(produto: Produtos): Observable<Produtos> {

    return this.http.post<Produtos>(this.Url, produto, httpOptions);
  }

}
