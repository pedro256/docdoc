
'use client';
import { Input } from "@/components/ui/input";
import { FaRegFloppyDisk } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Document, Page, Text,List, View, PDFViewer, StyleSheet } from "@react-pdf/renderer";
import './styles.css';

export default function CreateNewDocument() {
    return (
        <main className="w-full">
            <div className="flex w-full" >
                <div className="w-2/3 p-2">
                    <div className="flex gap-4 items-center">
                        <IoDocumentTextOutline className="w-12 h-12" />
                        <Input className="font-bold" placeholder="Documento Tets 1" />
                        <FaRegFloppyDisk className=" text-green-600 w-8 h-8 opacity-75" />
                    </div>

                    <div className="flex my-4 gap-4">
                        <div>
                            Arquivo
                        </div>
                        <div>
                            Editar
                        </div>
                        <div>
                            Inserir
                        </div>
                        <div>
                            Visualizar
                        </div>
                        <div>
                            Ajuda
                        </div>


                    </div>
                    <textarea rows={10}></textarea>
                </div>
                <div className="w-1/3 border relative">
                    <h1 className="text-center text-sm py-2">Pré-visualização</h1>
                    <PDFViewer style={{ width: "100%", height: "500px" }}>
                        <MyDocument text={"texto qualquer"} />
                    </PDFViewer>
                </div>

            </div>

        </main>
    )
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