"use client";
import { Input } from "@/components/ui/input";
import { FaRegFloppyDisk } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
  Document,
  Page,
  Text,
  View,
  PDFViewer,
  StyleSheet,
} from "@react-pdf/renderer";
import "./styles.css";
import TextEditor from "@/components/text-editor/TextEditor";
// import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface ITest {
  content?: string;
}

export default function CreateNewDocument() {
  const { control, handleSubmit } = useForm<ITest>();
  return (
    <main className="w-full">
      <div className="flex w-full">
        <div className="w-2/3 p-2">
          <div className="flex gap-4 items-center">
            <IoDocumentTextOutline className="w-12 h-12" />
            <Input
              className="text-2xl font-bold"
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
          <div>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
              <div className="editor_area_items">
                <Controller
                  control={control}
                  name="content"
                  render={({ field }) => (
                    <TextEditor
                      content={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>
              <button type="submit">OK</button>
            </form>
          </div>

          {/* <code className="text-xs bg-gray-900 text-white py-1 px-2 rounded">
            {document}
          </code> */}
        </div>
        <div className="w-1/3 border relative">
          <h1 className="text-center text-sm py-2">Pré-visualização</h1>
          <PDFViewer style={{ width: "100%", height: "500px" }}>
            <MyDocument text={"texto qualquer"} />
          </PDFViewer>
        </div>
      </div>
    </main>
  );
}

// Documento PDF dinâmico
const MyDocument = ({ text }: { text: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{text}</Text>
        <Text>{text}</Text>
      </View>
    </Page>
  </Document>
);

// Estilos do PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    fontSize: 12,
  },
});
