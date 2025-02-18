import ApiService from "@/helpers/ApiService";
import { IRealmsItem } from "@/mocks/ListMyRealms";
import { IoDocumentTextOutline } from "react-icons/io5";

export default async function ListMyRealms() {
    const api = new ApiService()
    api.setToken("w")
    const response: IRealmsItem[] = await api.get("/realms/my")
    return (
        <div className="h-full overflow-auto rounded p-2 shadow border-r-2">
            {response.map(i => (
                <div className="my-2 rounded text-xs pl-4 py-1 flex gap-2 items-center hover:bg-primary-800  hover:text-white" key={i.id}>
                    <IoDocumentTextOutline className="w-4 h-4" /> <span>{i.name}</span>
                </div>
            ))}
        </div>
    )
}