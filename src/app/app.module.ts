import { ProdutoslistaComponent } from './produtos/produtoslista/produtoslista.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatCardModule, MatSelectModule, MatInputModule, MatMenuModule } from '@angular/material';
import { PainelComponent } from './painel/painel.component';

import { ClienteService } from './servicos/cliente.service';
import { HttpClientModule } from '@angular/common/http';


import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';


import { ClienteslistaComponent } from './clientes/clienteslista/clienteslista.component';
import { CriarclienteComponent } from './clientes/add/criarcliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarfaturaComponent } from './faturas/add/criarfatura.component';
import { ListardetalhesclienteComponent } from './clientes/detalhes/listardetalhescliente.component';
import { CriarprodutoComponent } from './produtos/criarproduto/criarproduto.component';
import { ToastrModule } from 'ngx-toastr';
import { ProdutosComponent } from './produtos/produtos.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';

import { ClienteResolverService } from './servicos/cliente-resolver.service';
import { ProdutosService } from './servicos/produtos.service';
import { FaturadetalheComponent } from './faturas/faturadetalhe.component';
import { VendasComponent } from './vendas/vendas.component';
import { FinancasComponent } from './financas/financas.component';
import { BarrasComponent } from './graficos/barras.component';
import { DespesasComponent } from './graficos/donut/despesas.component';
import { ReceitasComponent } from './graficos/donut/receitas.component';

import { ListarFaturasComponent } from './faturas/listagem/listar-faturas.component';
import { FaturaComponent } from './faturas/detalhes/fatura.component';
import { GastosMenuComponent } from './gastos/gastos-menu.component';
import { OrcamentoMenuComponent } from './orcamento/orcamento-menu.component';
import { ConfigNavComponent } from './configuracoes/config-nav.component';
import { ReceitaOrcamentoComponent } from './orcamento/receita/receita-orcamento.component';
import { CustoOrcamentoComponent } from './orcamento/custo/custo-orcamento.component';
import { AdicionarFaturaComponent } from './faturas/adicionar/adicionar-fatura.component';
import { CurrencyPipe } from '@angular/common';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AddFuncionarioComponent } from './funcionarios/funcionarios/add-funcionario.component';







@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    PainelComponent,
    ClienteslistaComponent,
    CriarclienteComponent,
    CriarfaturaComponent,
    ProdutoslistaComponent,
    ListardetalhesclienteComponent,
    CriarprodutoComponent,
    ProdutosComponent,
    PagamentosComponent,
    FaturadetalheComponent,
    VendasComponent,
    FinancasComponent,
    BarrasComponent,
    DespesasComponent,
    ReceitasComponent,
    ListarFaturasComponent,
    FaturaComponent,
    GastosMenuComponent,
    OrcamentoMenuComponent,
    ConfigNavComponent,
    ReceitaOrcamentoComponent,
    CustoOrcamentoComponent,
    AdicionarFaturaComponent,
    FuncionariosComponent,
    AddFuncionarioComponent,


  ],
  entryComponents: [
    CriarclienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ToastrModule.forRoot(),
    MatMenuModule,
    ChartsModule


  ],
  providers: [ClienteService, ClienteResolverService, ProdutosService, CurrencyPipe],
  bootstrap: [NavegacaoComponent]
})
export class AppModule { }
