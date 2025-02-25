"use client";

import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";

import "./styles.css";
import MenuBarEditText from "./MenuBar/MenuBar";


interface IPropsTextEditor{
    onChange?:(value?:string)=>void,
    content?:string
}
export default function TextEditor({
    onChange,
    content
}:IPropsTextEditor) {
  const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    // TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
  ];

  return (
    <div className="bg-white border rounded text-editor">
      <EditorProvider
        slotBefore={<MenuBarEditText />}
        extensions={extensions}
        content={content}
        immediatelyRender={false}
        onUpdate={({editor})=>{
            if(onChange)
            onChange(JSON.stringify(editor.getJSON()))
        }}
      ></EditorProvider>
    </div>
  );
}
