import { Component } from "@angular/core";
import { MENU_ITEMS } from "./pages/pages-menu";

@Component({
  selector: "app-root",
  template: "<router-outlet></router-outlet>"
})
export class AppComponent {
  title = "frontend-nebular";
  menu = MENU_ITEMS;
}
