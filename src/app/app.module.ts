import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbInputModule,
  NbButtonModule,
  NbCardModule
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbPasswordAuthStrategy, NbAuthModule } from "@nebular/auth";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NbThemeModule.forRoot({ name: "default" }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,

    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: "email"
        })
      ],
      forms: {
        login: {
          redirectDelay: 0,
          showMessages: {
            success: true
          }
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
