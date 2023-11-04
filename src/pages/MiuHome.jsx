import MiuCode from '../layouts/MiuCode'
import MiuDoc from '../layouts/MiuDoc'
function MiuHome() {
  return (
    <>
        <div className="h-screen w-full flex flex-row bg-zinc-200">
            <MiuDoc/>
            <MiuCode/>
        </div>
    </>
  )
}

export default MiuHome