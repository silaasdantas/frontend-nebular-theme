import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule
} from "@nebular/theme";

import { DashboardComponent } from "./dashboard.component";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, NbLayoutModule, NbSidebarModule, NbButtonModule]
})
export class DashboardModule {}
