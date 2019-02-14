import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicos/cliente.service';
import { TransacoesService } from '../servicos/transacoes.service';
import { Transacoes } from '../servicos/Transacoes';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  vendas;
  transacoes: Transacoes[];
  total;
  qtdclientes;




constructor( private transerv: TransacoesService, private toastr: ToastrService, private cliser: ClienteService) { }

  ngOnInit() {
      this.transerv.obterTransacoes().subscribe(c => {
      this.transacoes = c;
      console.log(c);
      this.vendas = c.length;
      // tslint:disable-next-line:no-shadowed-variable
      const sum = c.reduce((sum, current) => sum + current.valor_transacao, 0);
      this.total = sum;

    } );

    this.cliser.obterClientes().subscribe(c => this.qtdclientes = c.length );

  }



}
