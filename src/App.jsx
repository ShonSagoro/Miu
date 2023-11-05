import MiuHome from './pages/MiuHome';
import CheckProvider from "./context/CheckProvider";


function App() {
  return (
    <CheckProvider>
      <MiuHome/>
    </CheckProvider>
  )
}

export default App