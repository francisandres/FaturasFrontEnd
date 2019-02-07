import { Component, OnInit } from '@angular/core';
import { FaturasService } from '../servicos/faturas.service';
import { Faturas, Linha } from './Faturas';

@Component({
  selector: 'app-faturadetalhe',
  templateUrl: './faturadetalhe.component.html',
  styleUrls: ['./faturadetalhe.component.css']
})
export class FaturadetalheComponent implements OnInit {
   fatura: Faturas;
   x: Linha[];

  constructor(private serv: FaturasService ) { }

  ngOnInit() {
    this.serv.obterFaturaTemp().subscribe(
      c => this.fatura = c
    );
    console.log(Object.keys(this.fatura));
    // tslint:disable-next-line:prefer-const
  this.x = Object.assign({}, this.fatura.linha as Linha[]);
    console.log(this.x);

  }

}
