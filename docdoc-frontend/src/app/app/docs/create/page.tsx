import "./styles.css";

// import DocEditorArea from "../components/doc-editor-area/DocEditorArea";
import { getApiServerInstance } from "@/lib/api-server-side-service";
import DocBaseModel from "@/models/context/DocBase/DocBaseModel";
import ErrorApiResponse from "@/components/error/ErrorApiResponse";
import { redirect } from "next/navigation";

export default async function CreateNewDocument() {
  const api = getApiServerInstance();
  const nTitle = "New Document";

  const newDoc = new DocBaseModel();

  try {
    const { data } = await api.post<{ id: string }>("/document-base", {
      title: nTitle,
    });
    newDoc.id = data.id;
    newDoc.title = nTitle;
    
  } catch (error) {
    console.log(error);
    return <ErrorApiResponse />;
  }
  redirect("edit/"+newDoc.id);
}
