import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"
import Navbar from "./components/Navbar"

export const ROUTES ={
  "homepage": {path:"/" ,title:"Home"},
  "crew": {path:"/crew" ,title:"Crew"},
  "destination": {path:"/destination" ,title:"Destination"},
  "technology": {path:"/technology" ,title:"Technology"},
}

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path={ROUTES.homepage.path} element={<Home/>}/>
        <Route path={ROUTES.crew.path} element={<Crew/>}/>
        <Route path={ROUTES.destination.path} element={<Destination/>}/>
        <Route path={ROUTES.technology.path} element={<Technology/>}/>
      </Routes>  
    </Router>
    </>
  )
}

export default App