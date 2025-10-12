import Image from 'next/image'
import { Countdown } from './Countdown'

export const Header = () => {
  return (
    <section
      id="inicio"
      className="relative px-4 sm:px-8 text-center font-roboto h-[400px] md:h-[500px] lg:h-[600px] flex flex-col justify-center items-center overflow-hidden mt-16"
    >
      <Image
        src="/assets/background.svg"
        alt="background"
        fill
        priority
        className="object-cover object-center -z- opacity-20 blur-[2px]"
      />

      <div className="relative z-10 text-white mt-10 lg:mt-25">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-5 lg:mb-8">
          HACKATHON-USP
        </h1>
        <h2 className="text-base md:text-xl lg:text-3xl font-semibold text-highlight">
          9ª edição do maior hackathon da USP
        </h2>
        <div className="mt-10 md:mt-20 lg:mt-30">
          <Countdown targetDate="2025-11-01T08:00:00" />
        </div>
      </div>
    </section>
  )
}
