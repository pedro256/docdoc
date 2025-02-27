"use client";
import { Input } from "@/components/ui/input";
import { FaRegFloppyDisk } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

// import {
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
// } from "@react-pdf/renderer";
import "./styles.css";

import DocEditorArea from "../components/doc-editor-area/DocEditorArea";


export default function CreateNewDocument() {
  
  return (
    <main className="w-full">
      <div className="p-2">
        <div className="flex gap-4 items-center ">
          <IoDocumentTextOutline className="w-12 h-12" />
          <Input
            className="!text-xl font-bold"
            placeholder="Documento Tets 1"
          />
          <FaRegFloppyDisk className=" text-green-600 w-8 h-8 opacity-75" />
        </div>

        <div>
          <DocEditorArea/>          
        </div>
      </div>
    </main>
  );
}

