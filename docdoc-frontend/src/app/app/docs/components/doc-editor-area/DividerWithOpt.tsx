import { FaCode, FaImage } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useDocEditAreaContext } from "./context/DocEditorAreaContext";

export default function DividerWithOpt() {
  const { addNewDocPart } = useDocEditAreaContext();

  return (
    <div className="my-1 flex justify-center items-center group min-h-24">
      <div className="hidden md:block border-t-4 w-full h-3 "></div>
      <div className="w-full md:w-auto transition-opacity opacity-25 group-hover:opacity-100">
        <div className=" before:border-2 flex border-4 px-8 py-2 rounded-md gap-x-6">
          <div
          onClick={addNewDocPart}
           className="flex items-center text-base font-bold gap-2 opacity-75 hover:opacity-100">
            {" "}
            <IoMdAdd className="w-8 h-8" />
            <div>Texto</div>
          </div>
          <div className="flex items-center text-base font-bold gap-2 opacity-75 hover:opacity-100">
            <FaImage className="w-8 h-8" />
            <div>Imagem</div>
          </div>
          <div className="flex items-center text-base font-bold gap-2 opacity-75 hover:opacity-100">
            <FaCode className="w-8 h-8" />
            <div>Código</div>
          </div>
        </div>
      </div>
      <div className="hidden md:block border-t-4 w-full h-3"></div>
    </div>
  );
}
