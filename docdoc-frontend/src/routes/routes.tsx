import { FaObjectGroup, FaShareAlt } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiFilePlus } from "react-icons/fi";

interface NavItem {
    id: string;
    content: React.ReactNode;
    title: string;
  }

const navRoutes: Array<NavItem> = [
  {
    id: "new-documents",
    title: "Novos Documentos",
    content: (
      <FiFilePlus
        data-tooltip-id="basic"
        data-tooltip-content="Novos Documentos"
        className="w-10 h-10 focus:outline-0"
      />
    ),
  },
  {
    id: "dom",
    title: "Domínio",
    content: (
      <FaObjectGroup
        data-tooltip-id="basic"
        data-tooltip-content="Domínio"
        className="w-10 h-10 focus:outline-0"
      />
    ),
  },
  {
    id: "docs",
    title: "Documentos",
    content: (
      <IoDocumentTextOutline
        data-tooltip-id="basic"
        data-tooltip-content="Documentos"
        className="w-10 h-10 focus:outline-0"
      />
    ),
  },
  {
    id: "shareds",
    title: "Compartilhados",
    content: (
      <FaShareAlt
        data-tooltip-id="basic"
        data-tooltip-content="Compartilhados"
        className="w-10 h-10 focus:outline-0"
      />
    ),
  },
];
export default navRoutes;