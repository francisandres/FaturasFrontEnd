import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../Clientes';
import { TransacoesService } from 'src/app/servicos/transacoes.service';
import { Transacoes } from 'src/app/servicos/Transacoes';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}




@Component({
  selector: 'app-listardetalhescliente',
  templateUrl: './listardetalhescliente.component.html',
  styleUrls: ['./listardetalhescliente.component.css']
})
export class ListardetalhesclienteComponent implements OnInit {
  cliente: any;
  transacoes: Transacoes[];

  displayedColumns: string[] = ['transacaoId', 'faturaId', 'tipo_transacao', 'valor_transacao'];
  dataSource: any;

  constructor(private route: ActivatedRoute, private clienteservico: ClienteService, private transacaoservico: TransacoesService) { }

  ngOnInit() {
    this.obterCliente();
    this.obterTransacoes();
  }

  obterCliente(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clienteservico.obterClienteporid(id).subscribe(res => {
      this.cliente = new Clientes();
      this.cliente = res;
      console.log(this.cliente);
    });


  }

  obterTransacoes(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.transacaoservico.obterClienteporid(id).subscribe(t => {this.transacoes = t;
      this.dataSource = this.transacoes;
      console.log(this.transacoes);
    });


  }

}
