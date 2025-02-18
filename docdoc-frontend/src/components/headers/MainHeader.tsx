import Link from "next/link"

export default function MainHeader(){
    return (
        <div className="w-full flex bg-primary p-4 gap-4 text-primary-foreground">
            <Link href="/app/projects">
                Projetos
            </Link>
            <Link href="/app/folders">
                Pastas
            </Link>
            <Link href="/app/docs">
                Documentos
            </Link>
        </div>
    )
}