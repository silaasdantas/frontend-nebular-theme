import { Component, OnInit } from "@angular/core";
import { fruits } from "./fruits-list";
@Component({
  selector: "app-contatos-listagem",
  templateUrl: "./contatos-listagem.component.html",
  styleUrls: ["./contatos-listagem.component.scss"]
})
export class ContatosListagemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  fruits = fruits;

  users: { name: string; title: string }[] = [
    { name: "Carla Espinosa", title: "Nurse" },
    { name: "Bob Kelso", title: "Doctor of Medicine" },
    { name: "Janitor", title: "Janitor" },
    { name: "Perry Cox", title: "Doctor of Medicine" },
    { name: "Ben Sullivan", title: "Carpenter and photographer" }
  ];
}
