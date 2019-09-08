import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbUserModule,
  NbInputModule
} from "@nebular/theme";

import { ContatosRoutingModule } from "./contatos-routing.module";
import { ContatosComponent } from "./contatos.component";
import { ContatosListagemComponent } from "./contatos-listagem/contatos-listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

@NgModule({
  declarations: [
    ContatosComponent,
    ContatosListagemComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbUserModule,
    NbInputModule
  ]
})
export class ContatosModule {}
