import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes/Clientes';
import { Faturas } from '../faturas/Faturas';
import { ClienteService } from '../servicos/cliente.service';
import { FaturasService } from '../servicos/faturas.service';
import { ClienteResolverService } from '../servicos/cliente-resolver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagamentos } from './pagamentos';
import { PagamentoService } from '../servicos/pagamento.service';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {
  dataatual = new Date();

  fatura = new Faturas();
  pagamento= new Pagamentos;

  constructor(private router: Router, private fatser: FaturasService, private route: ActivatedRoute, private pagser: PagamentoService) { }

  ngOnInit() {
    this.fatser.obterFaturaTemp().subscribe(
      c => this.fatura = c
    );

  }
  onPagamento(){
    this.pagamento.clienteid = this.fatura.clienteId;
    this.pagamento.faturaid = this.fatura.faturaId;
   this.pagser.adicionarPagamento(this.pagamento).subscribe(
      (data: Pagamentos) => {

      });
   this.router.navigate(['/vendas/detalhesfatura', this.fatura.faturaId])
  }




}
