import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Online from "./pages/Online"
import Presencial from "./pages/Presencial"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/online" element={<Online />} />
        <Route path="/presencial" element={<Presencial />} />
      </Routes>

      <Footer />
      
    </div>
  )
}

export default App