


export class Faturas {
  faturaId: string;
  clienteId: string;
  nome: string;
  totalFatura: number;
  valorPago: number;
  numerodefatura: number;
  estadoDaFatura: string;
  linha: Linha[];
}

export class Linha {
  produtoId: string;
  descricao: string;
  nome: string;
  quantidade: number;
  precoVenda: number;
  desconto: number;
  imposto: null;
  totalLinha: number;

}


