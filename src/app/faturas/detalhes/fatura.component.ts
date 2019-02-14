import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaturasService } from 'src/app/servicos/faturas.service';
import { Faturas } from '../Faturas';

@Component({
  selector: 'app-fatura',
  templateUrl: './fatura.component.html',
  styleUrls: ['./fatura.component.css']
})
export class FaturaComponent implements OnInit {

  dataatual = new Date();
  fatura: Faturas;
  constructor(private route: ActivatedRoute, private fatser: FaturasService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.fatser.obterFaturaporid(id).subscribe(
      res => {
        this.fatura = new Faturas();
        this.fatura = res;
        console.log(res);
      }
    );
  }
  onPagamento(): void{
    this.fatser.definirFaturaTemp(this.fatura);
    this.router.navigate(['/vendas/receberpagamento']);


  }

}
