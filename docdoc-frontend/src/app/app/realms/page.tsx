import { Suspense } from "react";
import ListMyProjects from "./components/ListMyRealms";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
    return (<div className="grid grid-cols-5">
        <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="text-lg my-2 mx-2">Meus Domínios:</h3>
            <Suspense fallback={<Skeleton className="h-[400px] w-full" />}>
                <ListMyProjects />
            </Suspense>
        </div>
        <div className="col-span-4">
            <div className="w-full flex justify-end">
                <Button>Novo</Button>
            </div>
        </div>
    </div>)
}