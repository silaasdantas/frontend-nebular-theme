import { Component } from "@angular/core";

import { MENU_ITEMS } from "./pages-menu";

@Component({
  selector: "app-pages",
  // template: `
  //   <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
  //     <nb-menu [items]="menu"></nb-menu>
  //   </nb-sidebar>
  // `
  templateUrl: "./pages.component.html"
})
export class PagesComponent {
  menu = MENU_ITEMS;
}
