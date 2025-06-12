'use client';
import {
  DocEditorAreaContextProvider,
  useDocEditAreaContext,
} from "./context/DocEditorAreaContext";
import TextEditor from "@/components/text-editor/TextEditor";
import { useForm } from "react-hook-form";
import DividerWithOpt from "./DividerWithOpt";

import { Input } from "@/components/ui/input";
import { FaRegFloppyDisk } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import DocBaseModel from "@/models/context/DocBase/DocBaseModel";

interface ITest {
  content?: string;
}

export default function DocEditorArea({ doc }: { doc: DocBaseModel }) {
  return (
    <DocEditorAreaContextProvider doc={doc}>
      <DocEditorAreaContainer />
    </DocEditorAreaContextProvider>
  );
}
function DocEditorAreaContainer() {
  const { parts, updPart,doc } = useDocEditAreaContext();
  const { handleSubmit } = useForm<ITest>();

  return (
    <div>
      <div className="flex gap-4 items-center ">
          <IoDocumentTextOutline className="w-12 h-12" />
          <Input
          defaultValue={doc.title}
            className="!text-xl font-bold"
            placeholder="Documento Tets 1"
          />
          <FaRegFloppyDisk className=" text-green-600 w-8 h-8 opacity-75" />
        </div>
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
            {/* <DividerWithOpt /> */}
          </div>
        ))}
      </form>
    </div>
  );
}
