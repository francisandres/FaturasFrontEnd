import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { FaturasService } from 'src/app/servicos/faturas.service';
import { Faturas } from '../Faturas';

@Component({
  selector: 'app-listar-faturas',
  templateUrl: './listar-faturas.component.html',
  styleUrls: ['./listar-faturas.component.css']
})
export class ListarFaturasComponent implements OnInit {

  constructor(private fatserv: FaturasService) { }
  faturas: Faturas[];
  displayedColumns: string[] = [ 'faturaid', 'nome', 'valorfatura',  'pago', 'detalhes', 'apagar'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.fatserv.obterFaturas().subscribe(
      res => {
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        console.log(res);
      },
      error => {
        console.log('Erro ao receber info da base de dados' + error);
      }

    );
  }

}
