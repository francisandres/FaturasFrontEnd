import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes/Clientes';
import { Faturas } from '../faturas/Faturas';
import { ClienteService } from '../servicos/cliente.service';
import { FaturasService } from '../servicos/faturas.service';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {

  clientes: Clientes[];
  faturas: Faturas[];
  clienteselecionado = new Clientes();
  pagamento: any;

  constructor(private cliser: ClienteService, private fatser: FaturasService) { }

  ngOnInit() {
    this.fatser.obterFaturas().subscribe(c => this.faturas = c);
    this.cliser.obterClientes().subscribe(c => this.clientes = c);
  }

  onSelect(clienteid) {

   this.faturas = this.faturas.filter(c => c.clienteId === clienteid);
  }

}
