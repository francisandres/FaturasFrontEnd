import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/servicos/produtos.service';
import { Produtos } from '../produtos';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-criarproduto',
  templateUrl: './criarproduto.component.html',
  styleUrls: ['./criarproduto.component.css']
})
export class CriarprodutoComponent implements OnInit {
  produto: Produtos;

  constructor(private proser: ProdutosService, private router: Router) { }

  ngOnInit() {
    this.produto = new Produtos();
  }

  salvar() {

    this.proser.adicionarProduto(this.produto).subscribe(
      (data: Produtos) => {this.router.navigateByUrl('/produtos');

    }, (err: any) => console.log(err)
    );


  }

  cancelar() {
    this.router.navigateByUrl('/produtos');


  }

}
