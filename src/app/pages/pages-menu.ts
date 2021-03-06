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
  },
  {
    title: "Auth",
    icon: "lock-outline",
    children: [
      {
        title: "Login",
        link: "/auth/login"
      },
      {
        title: "Register",
        link: "/auth/register"
      },
      {
        title: "Request Password",
        link: "/auth/request-password"
      },
      {
        title: "Reset Password",
        link: "/auth/reset-password"
      }
    ]
  }
];
