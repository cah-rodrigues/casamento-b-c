import { useEffect, useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"

import foto1 from "../assets/galeria/casal.jpeg"
import foto2 from "../assets/galeria/2.jpg"
import foto3 from "../assets/galeria/3.jpg"
import foto4 from "../assets/galeria/4.png"
import foto9 from "../assets/galeria/9.png"
import foto11 from "../assets/galeria/11.png"
import foto17 from "../assets/galeria/17.png"
import foto18 from "../assets/galeria/18.png"
import foto19 from "../assets/galeria/19.png"
import foto20 from "../assets/galeria/20.png"
import foto23 from "../assets/galeria/23.jpg"
import foto27 from "../assets/galeria/27.png"
import foto28 from "../assets/galeria/28.jpeg"
import foto29 from "../assets/galeria/29.jpeg"

const imagensOriginais = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto9,
  foto11,
  foto17,
  foto18,
  foto19,
  foto20,
  foto23,
  foto27,
  foto28,
  foto29,
]

function Gallery() {

  const [imagens, setImagens] = useState(imagensOriginais)
  const [animando, setAnimando] = useState(false)

  // posição inicial correta
  useEffect(() => {

    const slider = document.getElementById("slider")

    slider.style.transform = "translateX(-688px)"

  }, [])

  function nextSlide() {

    if (animando) return

    setAnimando(true)

    const slider = document.getElementById("slider")

    // anima para esquerda
    slider.style.transition =
      "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)"

    slider.style.transform = "translateX(-1376px)"

    setTimeout(() => {

      // reorganiza depois da animação
      setImagens(prev => {

        const novas = [...prev]

        const duasPrimeiras = novas.splice(0, 2)

        novas.push(...duasPrimeiras)

        return novas

      })

      // reseta instantaneamente sem animação
      slider.style.transition = "none"

      slider.style.transform = "translateX(-688px)"

      setAnimando(false)

    }, 1200)

  }

  function prevSlide() {

    if (animando) return

    setAnimando(true)

    const slider = document.getElementById("slider")

    // reorganiza ANTES
    const novas = [...imagens]

    const duasUltimas = novas.splice(-2)

    novas.unshift(...duasUltimas)

    setImagens(novas)

    // começa deslocado
    slider.style.transition = "none"

    slider.style.transform = "translateX(-1376px)"

    requestAnimationFrame(() => {

      requestAnimationFrame(() => {

        // anima suavemente para posição normal
        slider.style.transition =
          "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)"

        slider.style.transform = "translateX(-688px)"

      })

    })

    setTimeout(() => {

      setAnimando(false)

    }, 1200)

  }

  return (

    <section className="py-32 overflow-hidden">

      {/* título */}
      <div className="text-center mb-20">

        <p className="tracking-[0.3em] uppercase text-sm text-[#b08b7f]">
          Memórias
        </p>

        <h2 className="mt-4 text-5xl font-serif text-[#5c4b43]">
          Nossos Momentos Favoritos
        </h2>

      </div>

      {/* slider */}
      <div className="relative overflow-hidden">

        {/* botão esquerda */}
        <button
          onClick={prevSlide}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            z-20
            bg-white/70
            backdrop-blur-md
            p-3
            rounded-full
            shadow-lg
            hover:scale-110
            transition
          "
        >

          <ChevronLeft className="text-[#5c4b43]" />

        </button>

        {/* track */}
        <div
          id="slider"
          className="
            flex
            gap-6
            px-10
          "
        >

          {[
            ...imagens.slice(-2),
            ...imagens,
            ...imagens.slice(0, 2)
          ].map((foto, index) => (

            <img
              key={index}
              src={foto}
              alt=""
              className="
                h-[540px]
                w-[320px]
                object-cover
                flex-shrink-0
                hover:brightness-105
                transition-all
                duration-500
              "
            />

          ))}

        </div>

        {/* botão direita */}
        <button
          onClick={nextSlide}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            z-20
            bg-white/70
            backdrop-blur-md
            p-3
            rounded-full
            shadow-lg
            hover:scale-110
            transition
          "
        >

          <ChevronRight className="text-[#5c4b43]" />

        </button>

      </div>

    </section>
  )
}

export default Gallery