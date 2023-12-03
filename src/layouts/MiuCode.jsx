import React, { useState, useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { UseCheck } from "../context/CheckProvider";
import ScrollableFeed from "react-scrollable-feed";

function MiuCode() {
  const {
    checkGrammar,
    consoleMessage,
    isDebugEnable,
    setIsDebugEnable,
    isQuickEnable,
    setIsQuickEnable,
  } = UseCheck();

  const [messages, setMessages] = useState(["Write and check your miu Code"]);
  const editorRef = useRef(null);
  const [code, setCode] = useState(
    `fn Main() {\n\tfmt.Print("Hola, mundo!");\n}`
  );

  const [isDisabled, setIsDisabled] = useState(false);

  //fn Main() {\n\tfmt.Print("Hola, mundo!");\n}
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function setEditorTheme(monaco) {
    monaco.editor.defineTheme("miucode", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#0f172a",
        "editor.lineHighlightBackground": "#FFFFFF0F",
      },
    });
  }

  const options = {
    readOnly: false,
    minimap: { enabled: false },
    acceptSuggestionOnEnter: "off",
    quickSuggestions: false,
  };

  const handleChange = (e) => {
    setCode(editorRef.current.getValue());
  };

  const handleCLick = async () => {
    setIsDisabled(true);
    let messageInfo = await checkGrammar(code);
    setMessages((prevMessages) => [...prevMessages, messageInfo]);
    setIsDisabled(false);
  };

  const handleConsole = async () => {
    setMessages(["Clear"]);
  };

  const handleDebug = () => {
    setIsDebugEnable((prevState) => !prevState);
  };

  const handleQuick = () => {
    setIsQuickEnable((prevState) => !prevState);
  };

  useEffect(() => {
    setMessages((prevMessages) => [...prevMessages, consoleMessage]);
  }, [consoleMessage]);

  return (
    <div className="text-white h-full w-1/2 bg-slate-900 flex flex-col">
      <div className="h-1/3 pt-3 px-6">
        <Editor
          beforeMount={setEditorTheme}
          defaultValue={code}
          onChange={handleChange}
          theme="miucode"
          options={options}
          onMount={handleEditorDidMount}
        />
      </div>
      <div className="border border-transparent  border-t-slate-200 h-2/3 flex flex-col">
        <div className="h-auto flex flex-row-reverse px-2 pt-2">
          <button
            className="border border-slate-700 text-slate-700 hover:border-slate-400 hover:text-slate-400 rounded-md px-3 ml-2"
            onClick={handleCLick}
          >
            Check code
          </button>
          <button
            onClick={handleDebug}
            className={`border border-slate-700  hover:border-slate-400 hover:text-slate-400 rounded-md px-3 ml-2 ${
              isDebugEnable ? "bg-slate-500 text-slate-200" : "text-slate-700"
            }`}
          >
            Debug: {isDebugEnable ? "Enable" : "Disable"}
          </button>
          <button
            onClick={handleQuick}
            className={`border border-slate-700  hover:border-slate-400 hover:text-slate-400 rounded-md ml-2 px-3 ${
              isQuickEnable ? "bg-slate-500 text-slate-200" : "text-slate-700"
            }`}
          >
            Quick mode: {isQuickEnable ? "Enable" : "Disable"}
          </button>
          <button
            className="border border-slate-700 text-slate-700 hover:border-slate-400 hover:text-slate-400 rounded-md px-3 ml-2"
            onClick={handleConsole}
          >
            Clear console
          </button>
        </div>
        <div className=" px-2 text-slate-200 overflow-y-auto h-full pt-2">
          <ScrollableFeed>
            {messages.map((message, index) => (
              <p>{message}</p>
            ))}
          </ScrollableFeed>
        </div>
      </div>
    </div>
  );
}

export default MiuCode;
