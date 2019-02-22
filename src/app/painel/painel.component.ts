import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicos/cliente.service';
import { TransacoesService } from '../servicos/transacoes.service';
import { Transacoes } from '../servicos/Transacoes';
import { ToastrService } from 'ngx-toastr';
import { FaturasService } from '../servicos/faturas.service';
import { Faturas } from '../faturas/Faturas';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  vendas;
  transacoes: Transacoes[];
  faturas: Faturas[];
  total;
  qtdclientes;




constructor( private transerv: TransacoesService, private toastr: ToastrService, private cliser: ClienteService,
  private fatser: FaturasService) { }

  ngOnInit() {
      this.fatser.obterFaturas().subscribe(c => {
      this.faturas = c;
      console.log(c);
      this.vendas = c.length;
      // tslint:disable-next-line:no-shadowed-variable
      const sum = c.reduce((sum, current) => sum + current.totalFatura, 0);
      this.total = sum;

    } );

    this.cliser.obterClientes().subscribe(c => this.qtdclientes = c.length );

  }



}
