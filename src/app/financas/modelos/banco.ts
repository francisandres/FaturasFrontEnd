export class Banco {
  bancoId: string;
  nomeDoBanco: string;
  nomeDoGestor: string;
  contactoDoGestor: string;
  emailDoGestor: string;
  saldo: number;
  contaBancaria: Contabancaria[];

}

export class Contabancaria{
  contabancariaid: string;
  numerodeconta: string;
  tipodeconta: string;
  saldo: number;
  bancoid;
}
