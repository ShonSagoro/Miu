import React, { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
function CodeSnippet(props) {
  const [code, setCode] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setCode(props.code.toString());
  },[]);

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="bg-slate-900 flex flex-col w-full mb-6">
      <div className="flex flex-row justify-end mb-2">
        <button className="bg-gray-800 p-2" onClick={handleCopyClick}>{isCopied ? "Copiado" : "Copiar código"}</button>
      </div>
      <pre className="pl-6 pr-6 pb-6">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default CodeSnippet
