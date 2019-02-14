import { Injectable } from '@angular/core';
import { Produtos } from 'src/app/produtos/produtos';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FaturasService } from '../faturas.service';
import { Faturas } from 'src/app/faturas/Faturas';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FaturasResolverService implements Resolve<Faturas> {

  constructor(private fatser: FaturasService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Faturas> {
    return this.fatser.obterFaturaTemp().pipe(
      catchError(err => of(err))
    );
  }
}
