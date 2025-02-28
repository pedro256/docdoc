
// import DocEditorArea from "../../components/doc-editor-area/DocEditorArea";
import ErrorApiResponse from "@/components/error/ErrorApiResponse";
import { getApiServerInstance } from "@/lib/api-server-side-service";
import DocBaseModel from "@/models/context/DocBase/DocBaseModel";
import DocEditorArea from "../../components/doc-editor-area/DocEditorArea";
// import DocBaseModel from "@/models/context/DocBase/DocBaseModel";
// import ErrorApiResponse from "@/components/error/ErrorApiResponse";

export default async function EditDocument({
  params
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const {id} = await params;
  const api = getApiServerInstance();
  // const nTitle = "New Document";

  // const newDoc = new DocBaseModel();
  let documento:DocBaseModel;
  try {
    const { data } = await api.get<DocBaseModel>("/document-base/"+id);
    documento =data;
  } catch (error) {
    console.log(error);
    return <ErrorApiResponse/>;
  }

  return (
    <main className="w-full">
      <div className="p-2">
        <div>
          <DocEditorArea doc={JSON.parse(JSON.stringify(documento))} />
        </div>
      </div>
    </main>
  );
}
