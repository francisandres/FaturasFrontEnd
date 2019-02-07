import { Faturas } from './../Faturas';
import { FaturasService } from './../../servicos/faturas.service';
import { ProdutosService } from './../../servicos/produtos.service';
import { ClienteService } from 'src/app/servicos/cliente.service';
import { Clientes } from './../../clientes/Clientes';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Produtos } from 'src/app/produtos/produtos';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-criarfatura',
  templateUrl: './criarfatura.component.html',
  styleUrls: ['./criarfatura.component.css']
})
export class CriarfaturaComponent implements OnInit {
  clientes: Clientes[];
  produtos: Produtos[];
  currentProduto: string;

  orcamentoForm = this.fb.group({
    faturaid: null,
    clienteId: null,
    totalfatura: 0,
    linha: this.fb.array( [this.contruirLinha()]),

  });

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private faturaservico: FaturasService, private fb: FormBuilder, private servico: ClienteService, private ser: ProdutosService) { }

  ngOnInit() {
    this.getClientes();
    this.getProdutos();

  }

  get linha(): FormArray {
    return <FormArray>this.orcamentoForm.get('linha');
  }



  onSubmit() {
    const p = {...this.orcamentoForm.value};

    console.log('Submit', p as Faturas);
    this.faturaservico.definirFaturaTemp(p);
    this.router.navigate(['/faturadetalhe']);

  }

  getClientes(): void {
    this.servico.obterClientes()
    .subscribe(c => this.clientes = c);



}

getProdutos(): void {
  this.ser.obterProdutos()
  .subscribe(c => this.produtos = c);
}

onChangeProduct($event, i) {
  const linhaFormControl = (<FormArray>this.orcamentoForm.get('linha')).at(i) as FormControl;

  const product = this.produtos.find(item => item.produtoId === $event.value);
  console.log('Products', product);
  const total = product.preco * linhaFormControl.get('quantidade').value;
  linhaFormControl.patchValue({
    id: product.produtoId,
    totallinha: total,
    ProdutoId: product.produtoId,
    precovenda: product.preco
  });

  this.setAllTotal();
}


onChangQtdade($event, i) {
  const linhaFormControl = (<FormArray>this.orcamentoForm.get('linha')).at(i) as FormControl;
  const productId = linhaFormControl.get('id').value;

  const product = this.produtos.find(item => item.produtoId === productId);
  const total = product.preco * parseInt($event.target.value, 10);

  linhaFormControl.patchValue({
    totallinha: total,
  });

  this.setAllTotal();
}


contruirLinha(): FormGroup {
  return this.fb.group({
    id: [null],
    produtoId: [null, Validators.required],
    quantidade: [1, Validators.required],
    precovenda: ['', [
      RxwebValidators.numeric({isFormat: true})]],
    desconto: null,
    imposto: null,
    totallinha: 0
    });
}

addLinha(): void {
  this.linha.push(this.contruirLinha());
}

setAllTotal() {
  const linhaFormControlValues = (<FormArray>this.orcamentoForm.get('linha')).value;
  let itemsTotal = 0;
  linhaFormControlValues.forEach(item => {
    itemsTotal += item.totallinha;
  });

  this.orcamentoForm.get('totalfatura').patchValue(
    itemsTotal
  );

}

}
