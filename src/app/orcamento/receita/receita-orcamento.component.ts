import { Component, OnInit } from '@angular/core';
import { ReceitaOrcamento } from '../models/ReceitaOrcamento';
import { OrcamentoreceitaService } from 'src/app/servicos/orcamentoreceita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receita-orcamento',
  templateUrl: './receita-orcamento.component.html',
  styleUrls: ['./receita-orcamento.component.css']
})
export class ReceitaOrcamentoComponent implements OnInit {
  artigo: any;
  venda: string;
  servico: string;
  plano: string;
  receita: string;

  receit = new ReceitaOrcamento();


  constructor(private orcrecei: OrcamentoreceitaService, private router: Router) { }

  ngOnInit() {
    this.venda = 'Nome do produto';
    this.servico = 'Nome do servico';
    this.plano = 'Nome do plano';
    this.receita = 'Receita Extraordinária';
  }

  onSalvar() {
    this.orcrecei.adicionarReceita(this.receit).subscribe(
      (data: ReceitaOrcamento) => {
        console.log(data);
        this.router.navigate(['/painel']);
      }
    );

  }

}
