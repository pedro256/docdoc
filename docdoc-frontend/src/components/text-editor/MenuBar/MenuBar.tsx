"use client";
import { useCurrentEditor } from "@tiptap/react";
import "./styles.css";
import {
  FaBold,
  FaCode,
  FaItalic,
  FaLevelDownAlt,
  FaQuoteLeft,
  FaRedo,
  FaStrikethrough,
  FaUndo,
} from "react-icons/fa";
import {
  MdClearAll,
  MdFormatClear,
  MdFormatListBulleted,
  MdHorizontalRule,
} from "react-icons/md";
import { GoListOrdered } from "react-icons/go";
import { RiCodeBoxLine } from "react-icons/ri";

export default function MenuBarEditText() {
  const { editor } = useCurrentEditor();
  if (!editor) {
    return null;
  }
 
  const getSelectTypeText =():string=>{
    if(editor.isActive("paragraph")){
      return "p"
    }
    if(editor.isActive("heading", { level: 1 })){
      return "h1";
    }
    if(editor.isActive("heading", { level: 2 })){
      return "h2";
    }
    if(editor.isActive("heading", { level: 3 })){
      return "h3";
    }
    if(editor.isActive("heading", { level: 4 })){
      return "h4";
    }
    if(editor.isActive("heading", { level: 5 })){
      return "h5";
    }
    if(editor.isActive("heading", { level: 6 })){
      return "h5";
    }
    return "p";
  };
  const typeText  = getSelectTypeText();
  const onChangeSelectTextType = (value: string) => {
    switch (value) {
      case "p":
        editor.chain().focus().setParagraph().run();
        break;
      case "h1":
        editor.chain().focus().toggleHeading({ level: 1 }).run();
        break;
      case "h2":
        editor.chain().focus().toggleHeading({ level: 2 }).run();
        break;
      case "h3":
        editor.chain().focus().toggleHeading({ level: 3 }).run();
        break;
      case "h4":
        editor.chain().focus().toggleHeading({ level: 4 }).run();
        break;
      case "h5":
        editor.chain().focus().toggleHeading({ level: 5 }).run();
        break;
      case "h6":
        editor.chain().focus().toggleHeading({ level: 6 }).run();
        break;
      default:
        editor.chain().focus().setParagraph().run();
        break;
    }
  };
  return (
    <div className="control-group">
      <div className="button-group">
        <select
          className="item"
          value={typeText}
          onChange={(e) => onChangeSelectTextType(e.target.value)}
        >
          <option
            className={editor.isActive("paragraph") ? "is-active" : ""}
            value="p"
          >
            Parágrafo
          </option>
          <option
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
            value="h1"
          >
            Cabeçalho 1
          </option>
          <option
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
            value="h2"
          >
            Cabeçalho 2
          </option>
          <option
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }
            value="h3"
          >
            Cabeçalho 3
          </option>
          <option
            className={
              editor.isActive("heading", { level: 4 }) ? "is-active" : ""
            }
            value="h4"
          >
            Cabeçalho 4
          </option>
          <option
            className={
              editor.isActive("heading", { level: 5 }) ? "is-active" : ""
            }
            value="h5"
          >
            Cabeçalho 5
          </option>
          <option
            className={
              editor.isActive("heading", { level: 6 }) ? "is-active" : ""
            }
            value="h6"
          >
            Cabeçalho 6
          </option>
        </select>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={"item " + (editor.isActive("bold") ? "is-active" : "")}
          data-tooltip-id="basic"
          data-tooltip-content="Negrito"
        >
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={"item " + (editor.isActive("italic") ? "is-active" : "")}
          data-tooltip-id="basic"
          data-tooltip-content="Itálico"
        >
          <FaItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={"item " + (editor.isActive("strike") ? "is-active" : "")}
          data-tooltip-id="basic"
          data-tooltip-content="Tachado"
        >
          <FaStrikethrough />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={"item " + (editor.isActive("code") ? "is-active" : "")}
          data-tooltip-id="basic"
          data-tooltip-content="Código"
        >
          <FaCode />
        </button>
        <button
          className="item"
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          data-tooltip-id="basic"
          data-tooltip-content="Limpar Marcadores"
        >
          <MdFormatClear />
        </button>
        <button
          className="item"
          onClick={() => editor.chain().focus().clearNodes().run()}
          data-tooltip-id="basic"
          data-tooltip-content="Limpar Nós"
        >
          <MdClearAll />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            "item " + (editor.isActive("bulletList") ? "is-active" : "")
          }
          data-tooltip-id="basic"
          data-tooltip-content="Lista"
        >
          <MdFormatListBulleted />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            "item " + (editor.isActive("orderedList") ? "is-active" : "")
          }
          data-tooltip-id="basic"
          data-tooltip-content="Lista Ordenada"
        >
          <GoListOrdered />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={
            "item " + (editor.isActive("codeBlock") ? "is-active" : "")
          }
          data-tooltip-id="basic"
          data-tooltip-content="Bloco de código"
        >
          <RiCodeBoxLine />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={
            "item " + (editor.isActive("blockquote") ? "is-active" : "")
          }
          data-tooltip-id="basic"
          data-tooltip-content="Bloco de citação"
        >
          <FaQuoteLeft />
        </button>
        <button
          className="item"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <MdHorizontalRule />
        </button>
        <button
          className="item"
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          <FaLevelDownAlt />
        </button>
        <button
          className="item"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          data-tooltip-id="basic"
          data-tooltip-content="Desfazer"
        >
          <FaUndo />
        </button>
        <button
          className="item"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          data-tooltip-id="basic"
          data-tooltip-content="Refazer"
        >
          <FaRedo />
        </button>

        {/* <button
          onClick={() => editor.chain().focus().setColor("#958DF1").run()}
          className={
            editor.isActive("textStyle", { color: "#958DF1" })
              ? "is-active"
              : ""
          }
        >
          Purple
        </button> */}
      </div>
    </div>
  );
}
