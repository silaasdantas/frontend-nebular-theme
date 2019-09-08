import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/pages/dashboard"
  },
  {
    title: "Contatos",
    icon: "grid-outline",
    children: [
      {
        title: "Cadastro",
        link: "/pages/contatos/cadastro"
      },
      {
        title: "Busca",
        link: "/pages/contatos/contatos-listagem"
      }
    ]
  }
];
