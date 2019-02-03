export class Linha {
  precovenda: number;
  quantidade: number;
  produtoid: string;
}


export class Faturas {
  faturaId: string;
  clienteId: string;
  totalFatura: number;
  valorPago: number;
  linha: {[key: string]: Linha};
}


