import NavHeader from "@/components/headers/NavHeader"

export default function LayoutApp({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <div className="flex w-full relative">

                <NavHeader />
                <main className="ml-12 px-4 pt-2 pb-8 w-full">

                    {children}
                </main>
            </div>
        </>
    )
}