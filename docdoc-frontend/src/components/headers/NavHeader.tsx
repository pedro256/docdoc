"use client";
import navRoutes from "@/routes/routes";
import "./styles.css";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { IoGitNetwork, IoLogOutOutline } from "react-icons/io5";
import { FiFilePlus } from "react-icons/fi";
import { FaCashRegister, FaCode, FaList, FaRegFile } from "react-icons/fa";

export default function NavHeader() {
  const [contextNav, setContextNav] = useState<string>();

  function setNav(nav?: string) {
    if (contextNav == nav) {
      setContextNav(undefined);
    } else {
      setContextNav(nav);
    }
  }
  return (
    <div className="flex h-screen">
      {/* Barra Lateral */}
      <div className="w-24 flex flex-col items-center justify-between bg-primary py-4 gap-2 text-primary-foreground">
        <div className="flex flex-col items-center gap-12">
          <div className="mb-8">
            <div className="w-12 h-12 border rounded-full bg-white"></div>
          </div>

          {navRoutes.map((nav) => (
            <div
              key={nav.id}
              className={twMerge(
                "px-4 opacity-75 hover:opacity-100",
                contextNav == nav.id ? "border-l-8 border-white shadow-lg" : ""
              )}
              onClick={() => setNav(nav.id)}
            >
              {nav.content}
            </div>
          ))}
        </div>
        <div>
          <IoLogOutOutline className="w-10 h-10" />
        </div>
      </div>

      {/* Conteúdo Dinâmico */}
      {contextNav && (
        <div className="nav-animated bg-primary-700 w-80 border-r-8 border-[#27416E] p-4">
          {contextNav == "dom" && <DomContentItem />}
          {contextNav == "new-documents" && <NewDocsContentItem />}
        </div>
      )}
    </div>
  );
}
function DomContentItem() {
  return (
    <div>
      <h1 className="text-white text-2xl">Domínio</h1>
    </div>
  );
}

function NewDocsContentItem() {
  return (
    <div>
      <div className="flex items-center gap-2 my-2">
        <FiFilePlus className="w-10 h-10 focus:outline-0 text-white" />
        <h1 className="text-white text-2xl">Novos Documentos</h1>
      </div>
      <div className="py-8 px-2 flex flex-col gap-4">
        <div className="w-full p-4 bg-white flex justify-center itens-center gap-2">
          <div>
            <FaRegFile className="w-6 h-6" />
          </div>
          <div className="w-full">
            <p className=" text-center font-bold"> VAZIO</p>
          </div>
        </div>

        <div className="w-full p-4 bg-[#DB8D34] flex justify-center itens-center gap-2 text-white">
          <div>
            <FaCashRegister className="w-6 h-6" />
          </div>
          <div className="w-full">
            <p className=" text-center font-bold">ATA DE REUNIÃO</p>
          </div>
        </div>

        <div className="w-full p-4 bg-[#2B9E20] flex justify-center itens-center gap-2 text-white">
          <div>
            <FaList className="w-6 h-6" />
          </div>
          <div className="w-full">
            <p className=" text-center font-bold">ELABORAÇÃO DE REQUISITOS</p>
          </div>
        </div>

        <div className="w-full p-4 bg-[#212325] flex justify-center itens-center gap-2 text-white">
          <div>
            <FaCode className="w-6 h-6" />
          </div>
          <div className="w-full">
            <p className=" text-center font-bold">DOCUMENTAÇÃO DE CÓDIGO</p>
          </div>
        </div>
        <div className="w-full p-4 bg-[#D9D9D9] flex justify-center itens-center gap-2 text-white">
          <div>
            <IoGitNetwork className="text-[#212325] w-6 h-6" />
          </div>
          <div className="w-full">
            <p className=" text-center text-[#212325] font-bold">DOCUMENTAÇÃO DE CÓDIGO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
