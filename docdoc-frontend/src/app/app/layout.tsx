import NavHeader from "@/components/headers/NavHeader"

export default function LayoutApp({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="flex">

                <NavHeader />
                <main className="px-4 pt-2 pb-8">

                    {children}
                </main>
            </div>
        </>
    )
}