import Image from 'next/image'
import { Countdown } from './Countdown'

export const Header = () => {
  return (
    <section
      id="inicio"
      className="bg-background relative px-4 sm:px-8 text-center font-roboto h-100 md:h-125 lg:h-150 flex flex-col justify-center items-center overflow-hidden mt-16 light:[--color-background:#0e0d0d] light:[--color-highlight:#ff3a47]"
    >
      <Image
        src="/assets/background.jpg"
        alt="background"
        fill
        preload
        fetchPriority="high"
        sizes="100vw"
        // Imagem fica com 25% de opacidade e desfocada, então qualidade menor não é perceptível
        quality={50}
        className="object-cover object-center -z- opacity-25 blur-[2px]"
      />

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