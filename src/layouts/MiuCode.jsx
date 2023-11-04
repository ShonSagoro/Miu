import {useState,useRef } from "react"
import Editor from '@monaco-editor/react';

function MiuCode() {
  const editorRef = useRef(null);
  const [code , setCode]=useState(`fn Main() {\n\tfmt.Print("Hola, mundo!");\n}`);


  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  const options= {
    readOnly: false,
    minimap: { enabled: false },
  }

  const handleChange=(e)=>{
    setCode(editorRef.current.getValue())
    console.log(code)
  }

  return (
    
    <div className="text-white h-full w-1/2 bg-slate-900 px-6 py-3 flex flex-row">
        <Editor defaultLanguage="" defaultValue={code} onChange={handleChange} theme="vs-dark" options={options} onMount={handleEditorDidMount}/> 
    </div>
  )
}

export default MiuCode