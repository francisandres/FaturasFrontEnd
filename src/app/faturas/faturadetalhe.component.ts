import { Component, OnInit } from '@angular/core';
import { FaturasService } from '../servicos/faturas.service';
import { Faturas, Linha } from './Faturas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faturadetalhe',
  templateUrl: './faturadetalhe.component.html',
  styleUrls: ['./faturadetalhe.component.css']
})
export class FaturadetalheComponent implements OnInit {
  botoes: boolean;
   fatura: Faturas;
   x: Linha[];
   dataatual = new Date();

  constructor(private serv: FaturasService, private router: Router ) { }

  ngOnInit() {
    this.serv.obterFaturaTemp().subscribe(
      c => this.fatura = c
    );
    console.log(Object.keys(this.fatura));
    // tslint:disable-next-line:prefer-const
  this.x = Object.assign({}, this.fatura.linha as Linha[]);
    console.log(this.x);

  }

  onValidar() {
    console.log(this.fatura);
    this.serv.adicionarFatura(this.fatura).subscribe(
      (data: Faturas) => {
        console.log(data);
        this.router.navigate(['/vendas/detalhesfatura', data.faturaId]);

    }, (err: any) => console.log(err)
    );
  }

}
