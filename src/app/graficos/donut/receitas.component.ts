import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {
  public doughnutChartLabels: string[] = ['Receitas vendas', 'Receitas Extraordinárias ', 'Financiamento'];
  public doughnutChartData: number[] = [950, 45, 100];
  public doughnutChartType = 'doughnut';


  constructor() { }

  ngOnInit() {
  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
