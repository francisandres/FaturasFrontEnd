import { Component, OnInit } from '@angular/core';
import { Banco } from './modelos/banco';
import { BancoService } from '../servicos/banco.service';

@Component({
  selector: 'app-financas',
  templateUrl: './financas.component.html',
  styleUrls: ['./financas.component.css']
})
export class FinancasComponent implements OnInit {

  bancos: Banco[];

  constructor(private bankser: BancoService) { }

  ngOnInit() {
    this.bankser.obterBancos().subscribe(
      b => {this.bancos = b;
            console.log(this.bancos);
      });

  }

}
