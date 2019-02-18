import { Component, OnInit } from '@angular/core';
import { CustoOrcamento } from "../models/CustoOrcamento.1";
import { OrcamentocustoService } from 'src/app/servicos/orcamentocusto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custo-orcamento',
  templateUrl: './custo-orcamento.component.html',
  styleUrls: ['./custo-orcamento.component.css']
})
export class CustoOrcamentoComponent implements OnInit {
  custo = new CustoOrcamento();

  constructor(private orccusto: OrcamentocustoService, private router: Router) { }

  ngOnInit() {
  }

  onSalvar(): void {
    this.orccusto.adicionarCusto(this.custo).subscribe(
      (data: CustoOrcamento) => {
        console.log(data);
        this.router.navigate(['/painel']);
      }
    );
  }

}
