import {
  DocEditorAreaContextProvider,
  useDocEditAreaContext,
} from "./context/DocEditorAreaContext";
import TextEditor from "@/components/text-editor/TextEditor";
import { useForm } from "react-hook-form";
import DividerWithOpt from "./DividerWithOpt";

interface ITest {
  content?: string;
}

export default function DocEditorArea({ idDoc }: { idDoc?: string }) {
  return (
    <DocEditorAreaContextProvider idDoc={idDoc}>
      <DocEditorAreaContainer />
    </DocEditorAreaContextProvider>
  );
}
function DocEditorAreaContainer() {
  const { parts, updPart } = useDocEditAreaContext();
  const { handleSubmit } = useForm<ITest>();

  return (
    <div>
      <div className="flex my-4 gap-4">
        <div>Arquivo</div>
        <div>Editar</div>
        <div>Inserir</div>
        <div>Visualizar</div>
        <div>Ajuda</div>
      </div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {parts.length < 1 && (
            <div className="py-24">
                
                <DividerWithOpt />
            </div>
        )}

        {parts.map((p, index) => (
          <div key={p.id} className="editor_area_items">
            <TextEditor
              key={p.id}
              content={p.content}
              onChange={(v) => updPart(index, v || "")}
            />
            <div className="select-none flex px-4 text-xs text-gray-400 font-bold italic">
              <p>id: {p.id}</p>
            </div>
            <DividerWithOpt />
          </div>
        ))}
      </form>
    </div>
  );
}
