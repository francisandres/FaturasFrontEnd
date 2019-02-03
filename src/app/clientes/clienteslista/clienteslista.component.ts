import { CriarclienteComponent } from './../add/criarcliente.component';
import { Clientes } from './../Clientes';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';



@Component({
  selector: 'app-clienteslista',
  templateUrl: './clienteslista.component.html',
  styleUrls: ['./clienteslista.component.css']
})
export class ClienteslistaComponent implements OnInit {


  constructor(private clienteservico: ClienteService, private dialog: MatDialog) { }

  // tslint:disable-next-line:member-ordering
  clientes: Clientes[];
  // tslint:disable-next-line:member-ordering
  displayedColumns: string[] = [ 'primeiro_nome', 'ultimo_nome', 'saldo', 'email', 'detalhes', 'apagar'];
   dataSource: any;
  // tslint:disable-next-line:max-line-length
  // dataSource = [{'clienteId':'499815f3-55eb-4495-9fb8-cc844586e788', 'saldo': 0.0, 'primeiro_nome':'Francisco','ultimo_nome':'André','email':'francisco.andre@gesprin.co.ao'}];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.clienteservico.obterClientes()
    .subscribe(
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

  abrirDialogBox(): void {
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(CriarclienteComponent, {
     width: '600px'
    });

    dialogRef.afterClosed().subscribe(r => {console.log('O resultado foi ', r); } );

  }




}

