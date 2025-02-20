'use client';
import Link from "next/link"
import { useState } from "react"
import { AiOutlineGroup } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { IoDocumentTextOutline, IoLogOutOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import { twMerge } from "tailwind-merge";

export default function NavHeader() {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <div>
            <div className="w-12 h-screen flex flex-col items-center justify-between bg-primary py-4 gap-2  text-primary-foreground">
                {/* <div className="flex flex-col ">
                    <Link href="/app/realms">
                        Domínio
                    </Link>
                    <Link href="/app/projects">
                        Projetos
                    </Link>
                    <Link href="/app/folders">
                        Pastas
                    </Link>
                    <Link href="/app/docs/create">
                        Documentos
                    </Link>
                </div> */}

                <div className="flex flex-col items-center gap-4 ">

                    <div className="mb-8">
                        <div className="w-8 h-8 border rounded-full bg-white">

                        </div>
                    </div>
                    <div>
                        <AiOutlineGroup data-tooltip-id="basic" data-tooltip-content="Domínios" className="w-8 h-8" />
                    </div>
                    <div>
                        <FaProjectDiagram data-tooltip-id="basic" data-tooltip-content="Projetos" className="w-8 h-8" />
                    </div>
                    <div>
                        <IoDocumentTextOutline data-tooltip-id="basic" data-tooltip-content="Documentos" className="w-8 h-8" />
                    </div>


                </div>
                <div>
                    <IoLogOutOutline className="w-8 h-8" />

                </div>

            </div>

        </div>

    )
}