import ErrorApiResponse from "@/components/error/ErrorApiResponse";
import { getApiServerInstance } from "@/lib/api-server-side-service";
import DocBaseModel from "@/models/context/DocBase/DocBaseModel";

export default async function MyDocumentsPage() {

  const api = getApiServerInstance();

  try {
    const { data } = await api.get<DocBaseModel[]>("/document-base");
    return (
      <div className="p-8 flex flex-col justify-center h-full">
        <h1 className="text-2xl font-bold mb-4">Meus Documentos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">

          {data.map((doc) => (
            <div
              key={doc.id}
              className="col-span-1 bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold">{doc.title}</h2>
              <p className="text-gray-600">Tipo: {doc.docType}</p>
              {/* <p className="text-gray-500">ID: {doc.id}</p> */}
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <ErrorApiResponse />;
  }
}
