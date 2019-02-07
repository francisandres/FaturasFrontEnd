


export interface Faturas {
  faturaId: string;
  clienteId: string;
  nome: string;
  totalfatura: number;
  valoremdivida: number;
  numerodefatura: number;
  linha: Linha[];
}

export interface Linha {
  produtoid: string;
  quantidade: number;
  precovenda: number;
  desconto: number;
  imposto: null;
  totallinha: number;

}


