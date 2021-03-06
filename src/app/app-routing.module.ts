import { CriarfaturaComponent } from './faturas/add/criarfatura.component';
import { ProdutoslistaComponent } from './produtos/produtoslista/produtoslista.component';

import { ClienteslistaComponent } from './clientes/clienteslista/clienteslista.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PainelComponent } from './painel/painel.component';
import { ListardetalhesclienteComponent } from './clientes/detalhes/listardetalhescliente.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CriarprodutoComponent } from './produtos/criarproduto/criarproduto.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';

import { ClienteResolverService } from './servicos/cliente-resolver.service';
import { FaturasResolverService } from './servicos/faturas-resolver/faturas-resolver.service';
import { FaturadetalheComponent } from './faturas/faturadetalhe.component';
import { VendasComponent } from './vendas/vendas.component';
import { FinancasComponent } from './financas/financas.component';
import { ListarFaturasComponent } from './faturas/listagem/listar-faturas.component';
import { FaturaComponent } from './faturas/detalhes/fatura.component';
import { GastosMenuComponent } from './gastos/gastos-menu.component';
import { OrcamentoMenuComponent } from './orcamento/orcamento-menu.component';
import { ConfigNavComponent } from './configuracoes/config-nav.component';
import { ReceitaOrcamentoComponent } from './orcamento/receita/receita-orcamento.component';
import { CustoOrcamentoComponent } from './orcamento/custo/custo-orcamento.component';
import { AdicionarFaturaComponent } from './faturas/adicionar/adicionar-fatura.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AddFuncionarioComponent } from './funcionarios/funcionarios/add-funcionario.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'painel',
  pathMatch: 'full'
},
{
  path: 'painel',
  component: PainelComponent
},
{
  path: 'vendas',
  component: VendasComponent, children: [
    {path: '', redirectTo: 'clientes', pathMatch: 'full' },
    {path: 'clientes', component: ClienteslistaComponent },
    {path: 'detalhescliente/:id', component: ListardetalhesclienteComponent },

    {path: 'produtos', component: ProdutoslistaComponent},
    {path: 'criarproduto', component: CriarprodutoComponent},

    {path: 'criarfatura', component: AdicionarFaturaComponent },
    {path: 'faturadetalhe', component: FaturadetalheComponent},
    {path: 'detalhesfatura/:id', component: FaturaComponent},
    {path: 'faturas', component: ListarFaturasComponent},
    {path: 'receberpagamento', component: PagamentosComponent },
  ]
},
{
  path: 'financas',
  component: FinancasComponent
},
{
  path: 'gastos',
  component: GastosMenuComponent
},
{
  path: 'orcamentos', component: OrcamentoMenuComponent, children: [

    {path: '', redirectTo: 'criarreceita', pathMatch: 'full'},
    {path: 'criarreceita', component: ReceitaOrcamentoComponent},
    {path: 'criarcusto', component: CustoOrcamentoComponent}

]
},
{
  path: 'configuracoes',
  component: ConfigNavComponent
},
{
  path: 'funcionarios', component: FuncionariosComponent, children: [

    {path: '', redirectTo: 'addfuncionario', pathMatch: 'full'},
    {path: 'addfuncionario', component: AddFuncionarioComponent}

  ]
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
