import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContatosComponent } from "./contatos.component";
import { ContatosListagemComponent } from "./contatos-listagem/contatos-listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

const routes: Routes = [
  {
    path: "",
    component: ContatosComponent,
    children: [
      {
        path: "contatos-listagem",
        component: ContatosListagemComponent
      },
      {
        path: "cadastro",
        component: CadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule {}
