function Navbar() {
    return (
      <header className="w-full flex justify-between items-center px-8 py-6">

      <h2 className="text-2xl font-serif text-[#5c4b43]">
        B & C
      </h2>

      <nav className="hidden md:flex gap-8 text-sm text-[#7a6a63]">
        <a href="#">Início</a>
        <a href="#">Nossa História</a>
        <a href="#">Cerimônia</a>
        <a href="#">Galeria</a>
      </nav>

    </header>
    )
}

export default Navbar