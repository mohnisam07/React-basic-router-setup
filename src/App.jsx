import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar";
import "./index.css"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home dynamic="Home" />}/>
          <Route path="/about" element={<About dynamic="About" />} />
          <Route path= "/contact" element={<Contact dynamic="Contact"/>}  />
        </Routes>

    </Router>
    </div>
  )
}

export default App