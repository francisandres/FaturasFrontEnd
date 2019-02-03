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
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatCardModule, MatSelectModule, MatInputModule } from '@angular/material';
import { PainelComponent } from './painel/painel.component';

import { ClienteService } from './servicos/cliente.service';
import { HttpClientModule } from '@angular/common/http';


import { FlexLayoutModule } from '@angular/flex-layout';

import { ClienteslistaComponent } from './clientes/clienteslista/clienteslista.component';
import { CriarclienteComponent } from './clientes/add/criarcliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarfaturaComponent } from './faturas/add/criarfatura.component';
import { ListardetalhesclienteComponent } from './clientes/detalhes/listardetalhescliente.component';
import { CriarprodutoComponent } from './produtos/criarproduto/criarproduto.component';
import { ToastrModule } from 'ngx-toastr';
import { ProdutosComponent } from './produtos/produtos.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { FaturaComponent } from './faturas/fatura/fatura.component';






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
    FaturaComponent,

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
    ToastrModule.forRoot()


  ],
  providers: [ClienteService],
  bootstrap: [NavegacaoComponent]
})
export class AppModule { }
