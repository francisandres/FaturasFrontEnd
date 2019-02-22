import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/clientes/Clientes';
import { Router } from '@angular/router';
import { FaturasService } from 'src/app/servicos/faturas.service';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { ProdutosService } from 'src/app/servicos/produtos.service';
import { Produtos } from 'src/app/produtos/produtos';
import { CurrencyPipe } from '@angular/common';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Faturas } from '../Faturas';


@Component({
  selector: 'app-adicionar-fatura',
  templateUrl: './adicionar-fatura.component.html',
  styleUrls: ['./adicionar-fatura.component.css']
})
export class AdicionarFaturaComponent implements OnInit {
  clientes: Clientes[];
  clienteselecionado: Clientes;
  produtos: Produtos[];
  total;

  orcamentoForm = this.fb.group({
    faturaId: null,
    clienteId: null,
    nome: null,
    // tslint:disable-next-line:quotemark
    estadoDaFatura: "Por emitir",
    totalFatura: 0,
    linha: this.fb.array( [this.contruirLinha()]),

  });

  constructor(private router: Router, private faturaservico: FaturasService, private fb: FormBuilder,
     private servico: ClienteService, private ser: ProdutosService,  private currencyPipe: CurrencyPipe) { }

  ngOnInit() {
    this.servico.obterClientes()
    .subscribe(c => this.clientes = c);

    this.ser.obterProdutos()
  .subscribe(c => this.produtos = c);
  }


  onSubmit() {
    this.orcamentoForm.patchValue(
   {
     // tslint:disable-next-line:quotemark
     nome: this.clienteselecionado.primeiro_nome + " " + this.clienteselecionado.ultimo_nome
   }
    );


    const p = {...this.orcamentoForm.value};

    console.log('Submit', p as Faturas);

    this.faturaservico.definirFaturaTemp(p);
    this.router.navigate(['/vendas/faturadetalhe']);

  }
  get linha(): FormArray {
    return <FormArray>this.orcamentoForm.get('linha');
  }

  onChangeNome($event) {
    this.clienteselecionado = this.clientes.find( c => c.clienteId === $event.value);
    console.log(this.clienteselecionado);

  }

  onChangeProduct($event, i) {
    const linhaFormControl = (<FormArray>this.orcamentoForm.get('linha')).at(i) as FormControl;

    const product = this.produtos.find(item => item.produtoId === $event.value);
    const total = product.preco * linhaFormControl.get('quantidade').value;

    linhaFormControl.patchValue({
      id: product.produtoId,
      totalLinha: total,
      nome: product.nome,
      descricao: product.descricao,
      ProdutoId: product.produtoId,
      precoVenda: product.preco,

    });


    this.setAllTotal();
  }
  addLinha(): void {
    this.linha.push(this.contruirLinha());
  }
  setAllTotal() {
    const linhaFormControlValues = (<FormArray>this.orcamentoForm.get('linha')).value;
    let itemsTotal = 0;
    linhaFormControlValues.forEach(item => {
      itemsTotal += item.totalLinha;
    });

    this.orcamentoForm.get('totalFatura').patchValue(
      itemsTotal
    );

  }


  onChangQtdade($event, i) {
    const linhaFormControl = (<FormArray>this.orcamentoForm.get('linha')).at(i) as FormControl;
    const productId = linhaFormControl.get('id').value;

    const product = this.produtos.find(item => item.produtoId === productId);
    const total = product.preco * parseInt($event.target.value, 10);

    linhaFormControl.patchValue({
      totalLinha: total,
    });

    this.setAllTotal();
  }

  contruirLinha(): FormGroup {
    return this.fb.group({
      id: [null],
      nome: null,
      produtoId: [null, Validators.required],
      quantidade: [1, Validators.required],
      precoVenda: ['', [
        RxwebValidators.numeric({isFormat: true})]],
      desconto: null,
      imposto: null,
      descricao: null,
      totalLinha: 0
      });
  }

}
