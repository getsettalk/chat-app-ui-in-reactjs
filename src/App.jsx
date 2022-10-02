import Dash from "./Component/Dash"
import { BrowserRouter ,Routes,Route} from "react-router-dom";


function App() {
  return (
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dash />} />
  </Routes>
 </BrowserRouter>
  )
}

export default App
