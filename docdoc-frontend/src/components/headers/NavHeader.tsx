"use client";
import "./styles.css";

import { IoMdSettings } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  //   DropdownMenuPortal,
  DropdownMenuSeparator,
  //   DropdownMenuShortcut,
  //   DropdownMenuSub,
  //   DropdownMenuSubContent,
  //   DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiFile, FiFilePlus } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function NavHeader() {
  //   const [contextNav, setContextNav] = useState<string>();

  //   function setNav(nav?: string) {
  //     if (contextNav == nav) {
  //       setContextNav(undefined);
  //     } else {
  //       setContextNav(nav);
  //     }
  //   }

  return (
    <div className="flex h-screen fixed">
      <div className="w-auto flex flex-col items-center justify-between bg-primary py-4 gap-2 text-primary-foreground">
        <div className="flex flex-col items-center gap-12">
          <div className="mb-8">
            <div className="w-8 h-8 border rounded-full bg-white"></div>
          </div>

          <div className="p-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <FiFile className="w-8 h-8" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>
                  <h2 className="text-lg font-bold">Documentos</h2>
                </DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <FiFilePlus className="w-10 h-10" />
                    <a className="pr-8" href="/app/docs/create">Novo Documento</a>
                  </DropdownMenuItem>
                   <DropdownMenuItem>
                    <IoDocumentTextOutline className="w-10 h-10" />
                    <a className="pr-8" href="/app/docs/my">Meus Documentos</a>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="p-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <FiFilePlus className="w-8 h-8" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>
                    <h2 className="text-lg font-bold">Pasta</h2>
                  </DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <p className="pr-8">Minhas Pastas</p>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
        </div>
        <div>
          <IoMdSettings className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
}
