import fotoCasal from "../assets/casal.jpeg"

function Hero () {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-16">

      {/* Texto */}
      <div className="text-center md:text-left">
    
        <p className="tracking-[0.3em] uppercase text-sm text-[#b08b7f]">
          Nosso Casamento
        </p>
    
        <h1 className="mt-6 text-6xl md:text-8xl font-serif text-[#5c4b43] leading-tight">
          Breno & Carla
        </h1>
    
        <p className="mt-6 text-xl text-[#9b7b6e]">
          3 de Janeiro de 2027
        </p>
    
        <p className="mt-6 max-w-lg text-[#7a6a63] leading-8">
          O início da nossa eternidade.
        </p>
    
        <button className="mt-10 bg-[#cfa79b] text-white px-8 py-4 rounded-full shadow-lg hover:opacity-80 hover:scale-105 transition">
          Confirmar presença
        </button>
    
      </div>
    
      {/* Imagem */}
      <div className="flex justify-center">
    
        <img
          src={fotoCasal}
          alt="Breno e Carla"
          className="w-full max-w-md rounded-[3rem] shadow-2xl object-cover"
        />
    
      </div>
    
    </section>
    )
}

export default Hero