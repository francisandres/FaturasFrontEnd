export class Banco {
  bancoid: string;
  nomedobanco: string;
  nomedogestor: string;
  contactodogestor: string;
  emaildogestor: string;
  saldo: number;
  contabancaria: Contabancaria[];

}

export class Contabancaria{
  contabancariaid: string;
  numerodeconta: string;
  tipodeconta: string;
  saldo: number;
  bancoid;
}
