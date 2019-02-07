import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Clientes } from '../clientes/Clientes';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  private Url = 'http://localhost:64634/api/Clientes';



  obterClientes(): Observable<Clientes[]> {

    return this.http.get<Clientes[]>(this.Url);
  }

  adicionarCliente(cliente: Clientes): Observable<Clientes> {

    return this.http.post<Clientes>(this.Url, cliente, httpOptions);
  }

  obterClienteporid(id: string): Observable<Clientes> {
    const url1 = `${this.Url}/${id}`;
     return this.http.get<Clientes>(url1);
  }



}
