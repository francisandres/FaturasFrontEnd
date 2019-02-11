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
    ReceitasComponent

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
  providers: [ClienteService, ClienteResolverService, ProdutosService],
  bootstrap: [NavegacaoComponent]
})
export class AppModule { }
