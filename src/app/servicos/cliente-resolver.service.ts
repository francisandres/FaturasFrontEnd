import { Injectable } from '@angular/core';
import { Clientes } from '../clientes/Clientes';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProdutosService } from './produtos.service';
import { ClienteService } from './cliente.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteResolverService implements Resolve<Clientes[]> {

  constructor( private cliserv: ClienteService) { }
  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Clientes[]> {
    return this.cliserv.obterClientes().pipe(
      catchError(err => of(err))
    );
  }
}
