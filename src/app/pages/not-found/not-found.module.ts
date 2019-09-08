import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule
} from "@nebular/theme";

import { NotFoundComponent } from "./not-found.component";

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, NbLayoutModule, NbSidebarModule, NbButtonModule]
})
export class NotFoundModule {}
