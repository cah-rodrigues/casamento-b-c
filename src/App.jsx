import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Gallery from "./components/Gallery"



function App() {
  return (
    <div className="min-h-screen bg-[#f8f5f2]">

      <Navbar />
      <Hero /> 
      <Gallery />

    </div>
  )
}

export default App