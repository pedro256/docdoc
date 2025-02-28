import DocBaseModel from "@/models/context/DocBase/DocBaseModel";
import React, { useState } from "react";

type DocEditorAreaContextType = {
  doc: DocBaseModel;
  parts: Array<IDocPart>;
  updPart: (id: number, content: string) => void;
  addNewDocPart: () => void;
};

interface IDocPart {
  id: string;
  referenceDoc?: string;
  content: string;
  sequence: number;
}
export const DocEditorAreaContext = React.createContext(
  {} as DocEditorAreaContextType
);


export function DocEditorAreaContextProvider({
  children,
  doc,
}: {
  doc: DocBaseModel;
  children: React.ReactNode;
}) {
  const [parts, setParts] = useState<Array<IDocPart>>([]);

  function genNewPseudoID() {
    return "parT_" + crypto.randomUUID();
  }


  function addNewDocPart() {
    const tempId = genNewPseudoID();
    setParts([
      ...parts,
      {
        id: tempId,
        content: "",
        referenceDoc: doc?.id,
        sequence: 1,
      },
    ]);
  }
  const updPart = (index: number, content: string) => {
    const _p: IDocPart[] = [...parts];
    _p[index].content = content;
    setParts(_p);
  };

  return (
    <DocEditorAreaContext.Provider
      value={{
        doc,
        parts,
        addNewDocPart,
        updPart,
      }}
    >
      {children}
    </DocEditorAreaContext.Provider>
  );
}
export function useDocEditAreaContext() {
  const context = React.useContext(DocEditorAreaContext);

  if (!context) {
    throw new Error("contexto não encontrado.");
  }

  return context;
}
