import { MdErrorOutline } from "react-icons/md";

export default function ErrorApiResponse() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 ">
        <MdErrorOutline className="w-10 h-10"/>
        <div>
          <h2>ERRO DE RESPOSTA</h2>
          <span className="opacity-75">Erro na busca de dados servidor</span>
        </div>
      </div>
    </div>
  );
}
