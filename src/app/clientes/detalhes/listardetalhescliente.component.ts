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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


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
