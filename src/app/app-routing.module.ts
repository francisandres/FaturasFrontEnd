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
    { path: '', redirectTo: 'clientes', pathMatch: 'full' },
    { path: 'clientes', component: ClienteslistaComponent },
    {path: 'produtos', component: ProdutoslistaComponent},
    {path: 'faturas', component: CriarfaturaComponent }
  ]
},
{
  path: 'financas',
  component: FinancasComponent
},
{
  path: 'faturadetalhe',
  component: FaturadetalheComponent
},
{
  path: 'pagamentos',
  component: PagamentosComponent, resolve: {data: ClienteResolverService}
},

{
  path: 'produtos',
  component: ProdutosComponent,
  children: [
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
    { path: 'listar', component: ProdutoslistaComponent },
    {path: 'criar', component: CriarprodutoComponent}
  ]
},
{
  path: 'faturas',
  component: CriarfaturaComponent
},
{ path: 'detalhescliente/:id', component: ListardetalhesclienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
