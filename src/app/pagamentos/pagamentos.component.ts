import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes/Clientes';
import { Faturas } from '../faturas/Faturas';
import { ClienteService } from '../servicos/cliente.service';
import { FaturasService } from '../servicos/faturas.service';
import { ClienteResolverService } from '../servicos/cliente-resolver.service';
import { ActivatedRoute } from '@angular/router';
import { Pagamentos } from './pagamentos';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {

  clientes: Clientes[];
  faturas: Faturas[];




  constructor( private fatser: FaturasService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fatser.obterFaturas().subscribe(c => this.faturas = c);
    const resolvedData: Clientes[] = this.route.snapshot.data['data'];
    this.clientes = resolvedData;

    console.log(this.faturas);
  }


  onSelect(clienteid) {
    console.log(this.faturas);

   this.faturas = this.faturas.filter(c => c.clienteId === clienteid);
  }

}
