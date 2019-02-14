


export class Faturas {
  faturaId: string;
  clienteId: string;
  nome: string;
  totalfatura: number;
  valoremdivida: number;
  numerodefatura: number;
  estadodafatura: string;
  linha: Linha[];
}

export class Linha {
  produtoid: string;
  descricao: string;
  nome: string;
  quantidade: number;
  precovenda: number;
  desconto: number;
  imposto: null;
  totallinha: number;

}


