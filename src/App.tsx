import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Edit from "./pages/edit/Edit"



const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Edit />} />
    </Routes>
  )
}
export default App