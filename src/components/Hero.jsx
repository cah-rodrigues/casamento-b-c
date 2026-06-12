import fotoCasal from "../assets/casal.jpeg"
import { Link } from "react-router-dom"

function Hero () {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-16">
    
      {/* Imagem */}
      <div className="flex justify-center order-2 md:order-1">
    
        <img
          src={fotoCasal}
          alt="Breno e Carla"
          className="w-full max-w-lg h-[650px] object-cover rounded-[2rem] shadow-xl"
        />
    
      </div>


    {/* Texto */}
      <div className="text-center md:text-left order-1 md:order-2">
    
        <p className="tracking-[0.3em] uppercase text-sm text-[#b08b7f]">
          Nosso Casamento
        </p>
    
        <h1 className="mt-6 text-5xl md:text-7xl font-serif text-[#55613c] leading-tight">
          Breno 
          <br />
          & Carla
        </h1>
    
        <p className="mt-8 text-3xl font-serif tracking-[0.25em] text-[#5c4b43]">
          03 • 01 • 2027
        </p>
    
        <p className="mt-6 max-w-lg text-[#5c4b43] leading-8">
            "Para que todas as pessoas vejam e saibam, <br />
            Prestem atenção e compreendam <br />
            Que a mão de Jeová fez isso.” - Isaías 41:20
        </p>
    
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <Link to="/online" className="bg-[#55613c] text-white px-8 py-4 rounded-xl">
              Assistir Online
            </Link>

            <Link to="/presencial" className="border border-[#cfa79b] text-[#7b6458] px-8 py-4 rounded-xl">
              Informações Presenciais
            </Link>

          </div>
    
      </div>
    </section>
    )
}

export default Hero