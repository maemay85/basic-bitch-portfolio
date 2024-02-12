import { Route, Routes } from "react-router-dom"
import About from "./components/About"
import Projects from "./components/Projects"
import SingleProject from "./components/SingleProject"

function AppRoutes() {

  return (
    <div id='router'>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectId' element={<SingleProject />} />
        <Route path='*' element={<About />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
