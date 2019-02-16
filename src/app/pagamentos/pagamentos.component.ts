import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes/Clientes';
import { Faturas } from '../faturas/Faturas';
import { ClienteService } from '../servicos/cliente.service';
import { FaturasService } from '../servicos/faturas.service';
import { ClienteResolverService } from '../servicos/cliente-resolver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagamentos } from './pagamentos';
import { PagamentoService } from '../servicos/pagamento.service';
import { BancoService } from '../servicos/banco.service';
import { Banco } from '../financas/modelos/banco';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {
  dataatual = new Date();

  fatura = new Faturas();
  pagamento = new Pagamentos;
  bancos: Banco[];
  bancoesc: Banco;

  constructor(private router: Router, private fatser: FaturasService, private route: ActivatedRoute,
              private pagser: PagamentoService,
              private bankser: BancoService) { }

  ngOnInit() {
    this.fatser.obterFaturaTemp().subscribe(
      c => this.fatura = c);

    this.bankser.obterBancos().subscribe(
      res => {(this.bancos as Banco[]) = res;
        console.log(this.bancos); } );

  }
  onPagamento(){
    this.pagamento.clienteid = this.fatura.clienteId;
    this.pagamento.faturaid = this.fatura.faturaId;

    console.log(this.pagamento);
   this.pagser.adicionarPagamento(this.pagamento).subscribe(
      (data: Pagamentos) => {

      });
   this.router.navigate(['/vendas/detalhesfatura', this.fatura.faturaId]);
  }

  onBancoSelecionado(banco): void {
    console.log(banco);
  }




}
