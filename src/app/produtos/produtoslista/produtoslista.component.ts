import { Produtos } from './../produtos';
import { ProdutosService } from './../../servicos/produtos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { CriarprodutoComponent } from '../criarproduto/criarproduto.component';


@Component({
  selector: 'app-produtoslista',
  templateUrl: './produtoslista.component.html',
  styleUrls: ['./produtoslista.component.css']
})
export class ProdutoslistaComponent implements OnInit {

  constructor(private produtoservico: ProdutosService, private dialog: MatDialog) { }
  produtos: Produtos[];

  displayedColumns: string[] = [ 'nome', 'preco', 'stock', 'detalhes', 'apagar'];
   dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.produtoservico.obterProdutos().subscribe(

      res => {
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;

      },
      error => {
        console.log('Erro ao receber info da base de dados' + error);
      }
    );
  }


  abrirCaixaDialogo(): void {
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(CriarprodutoComponent, {
      width: '600px'
     });

     dialogRef.afterClosed().subscribe(r => {console.log('O resultado foi ', r); } );

  }


}
