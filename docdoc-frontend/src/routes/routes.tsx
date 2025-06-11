type format = "link" | "header" | "divider" | "dropdown";

export interface NavItem {
  id: string;
  content?: NavItem[];
  href?: string;
  title?: string;
  icon?: string;
  format: format;
}



const navRoutes: NavItem[] = [
  {
    id: "new-documents",
    title: "Documentos",
    icon: "FiFilePlus",
    format: "dropdown",
    content: [
      {
        id: "title-doc",
        title: "Documentos",
        icon: "FiHome",
        format: "header",
      },
      {
        id: "mys",
        title: "Meus Documentos",
        href: "/app/docs/my",
        format: "link",
      },
      {
        id: "empty",
        title: "Documento Vazio",
        href: "/app/docs/create",
        format: "link",
      },
    ],
  },
  {
    id: "dom",
    title: "Domínio",
    href: "/app/domains",
    icon: "FaObjectGroup",
    format: "link",
  },
];
export default navRoutes;
