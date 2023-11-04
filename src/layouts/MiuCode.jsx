import {useState} from "react"
function MiuCode() {
  const [code , setCode]=useState('');
  const [lines , setLines]=useState([]);

  const showCols=(e)=>{

    e.preventDefault();
    setCode(e.target.value)
    GetLines()
    console.log(lines)
  }

  const GetLines=()=>{
    let codeLines=[]
    for (let i=0; i<code.split('\n').length; i++){
      codeLines.push(i)
    }
    setLines(codeLines)
  }

  const handleTabKey = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();

      const { selectionStart, selectionEnd } = e.target;
      const newText = code.substring(0, selectionStart) + "\t" + code.substring(selectionEnd);
      setCode(newText);
    }
  };

  return (
    <div className="text-white h-full w-1/2 bg-slate-900 px-6 py-3 flex flex-row">
      <div className="mr-4">
        {lines.map((line) => (
          <p key={line} className="text-white">
            {line}
          </p>
        ))}
      </div>
        <textarea onKeyDown={handleTabKey} onChange={showCols} className="h-full w-full bg-transparent px-2">askdl;k</textarea>
    </div>
  )
}

export default MiuCode