import { ClienteService } from './../../servicos/cliente.service';
import { Clientes } from './../Clientes';
import { Component, OnInit } from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-criarcliente',
  templateUrl: './criarcliente.component.html',
  styleUrls: ['./criarcliente.component.css']
})
export class CriarclienteComponent implements OnInit {

  cliente: Clientes;

  constructor(private router: Router, private dialogRef: MatDialogRef<CriarclienteComponent>,
    private clienteservico: ClienteService) { }

  ngOnInit() {
    this.cliente = new Clientes();

  }

  salvar() {
        this.clienteservico.adicionarCliente(this.cliente).subscribe(
      (data: Clientes) => {this.router.navigateByUrl('/painel');

    }, (err: any) => console.log(err)
    );
    this.dialogRef.close(this.cliente);

  }

  cancelar() {
    this.dialogRef.close(null);

  }
}
