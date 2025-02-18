import MainHeader from "@/components/headers/MainHeader"

export default function LayoutApp({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <MainHeader />
            <main className="px-4 pt-2 pb-8">

                {children}
            </main>
        </>
    )
}