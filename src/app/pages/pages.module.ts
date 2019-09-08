import { NgModule } from "@angular/core";
import {
  NbMenuModule,
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule
} from "@nebular/theme";

import { DashboardModule } from "./dashboard/dashboard.module";
import { NotFoundModule } from "./not-found/not-found.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";

@NgModule({
  imports: [
    PagesRoutingModule,
    NbThemeModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule,
    DashboardModule,
    NotFoundModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule {}
