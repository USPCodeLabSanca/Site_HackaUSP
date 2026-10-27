import { preload } from 'react-dom'
import { Countdown } from './Countdown'

// Fundo do topo é a imagem LCP. As versões AVIF ficam prontas em /public
// (geradas a partir de background.jpg) para não depender do otimizador
// de imagens do Next, que respondia devagar e atrasava o LCP.
const HERO_SRCSET = [640, 750, 960, 1280]
  .map((w) => `/assets/hero-${w}.avif ${w}w`)
  .join(', ')

export const Header = () => {
  preload('/assets/hero-1280.avif', {
    as: 'image',
    type: 'image/avif',
    imageSrcSet: HERO_SRCSET,
    imageSizes: '100vw',
    fetchPriority: 'high'
  })

  return (
    <section
      id="inicio"
      className="bg-background relative px-4 sm:px-8 text-center font-roboto h-100 md:h-125 lg:h-150 flex flex-col justify-center items-center overflow-hidden mt-16 light:[--color-background:#0e0d0d] light:[--color-highlight:#ff3a47]"
    >
      <picture>
        <source type="image/avif" srcSet={HERO_SRCSET} sizes="100vw" />
        <img
          src="/assets/background.jpg"
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-25 blur-[2px]"
        />
      </picture>

      <div className="relative z-10 text-white mt-10 lg:mt-25">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-5 lg:mb-8">
          HACKATHON USP
        </h1>
        <h2 className="text-base md:text-xl lg:text-3xl font-semibold text-highlight">
          9ª edição do maior hackathon da USP
        </h2>
        <div className="mt-10 md:mt-20 lg:mt-30">
          <Countdown targetDate="2026-11-07T08:00:00" />
        </div>
      </div>
    </section>
  )
}
