import { Input } from "@/components/ui/input";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function CreateNewDocument() {
    return (
        <main>
            <div className="grid grid-cols-4">
                <div className="col-span-2 flex">
                    <IoDocumentTextOutline className="w-8 h-8" />
                    <Input className="font-bold" placeholder="Documento Tets 1" />
                </div>

            </div>

        </main>
    )
}