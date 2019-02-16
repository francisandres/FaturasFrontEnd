import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { Banco } from '../financas/modelos/banco';
import { BancoService } from '../servicos/banco.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-nav',
  templateUrl: './config-nav.component.html',
  styleUrls: ['./config-nav.component.css']
})
export class ConfigNavComponent implements OnInit {
  bancoform = this.fb.group({
    bancoid: null,
    nomedobanco: null,
    nomedogestor: null,
    // tslint:disable-next-line:quotemark
    contactodogestor: null,
    emaildogestor: null,
    saldo: 0,

    contabancaria: this.fb.array( [this.contruirContaBancaria()]),

  });

  constructor(private fb: FormBuilder, private bankser: BancoService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    const p = {...this.bancoform.value as Banco};



    this.bankser.adicionarBanco(p as Banco).subscribe(
      (d: Banco) => {
        console.log(d);
        this.router.navigate(['/financas']);
      }
    );


  }

  get contabancaria(): FormArray {
    return <FormArray>this.bancoform.get('contabancaria');
  }
  contruirContaBancaria(){
    return this.fb.group({
      contabancariaid: [null],
      numerodeconta: null,
      tipodeconta: null,
      saldo: 0,
      bancoid: null,
      });

  }

  addConta(): void {
    this.contabancaria.push(this.contruirContaBancaria());
  }

}
