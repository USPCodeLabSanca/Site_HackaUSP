'use client'
import { useState, useEffect, useCallback } from 'react'

interface CountdownProps {
  targetDate: string | Date // Data final
}

export const Countdown = ({ targetDate }: CountdownProps) => {
  // Estado para armazenar o tempo restante e se a contagem já terminou
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
    hasFinished: false
  })

  const calculateTimeLeft = useCallback(() => {
    const target = new Date(targetDate)

    // Verifica se a data é valida
    if (isNaN(target.getTime())) {
      console.error('Data inválida!')
      return { dias: 0, horas: 0, minutos: 0, segundos: 0, hasFinished: true }
    }

    const now = new Date()
    const difference = target.getTime() - now.getTime() // Calcula a diferença em milissegundos

    if (difference > 0) {
      // Calcula os dias, horas, minutos e segundos restantes
      return {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((difference % (1000 * 60)) / 1000),
        hasFinished: false
      }
    }

    // Se o tempo já acabou, retorna tudo zero
    return { dias: 0, horas: 0, minutos: 0, segundos: 0, hasFinished: true }
  }, [targetDate])

  // Inicia e controla o timer
  useEffect(() => {
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Função de limpeza
    return () => clearInterval(timer)
  }, [calculateTimeLeft]) // reexecuta se calculateTimeLeft mudar

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-light-blue rounded-lg shadow-lg p-4 md:p-6 w-[68px] h-[60px] md:w-[120px] md:h-[100px] lg:w-[150px] lg:h-[130px] flex flex-col items-center justify-center shrink-0 text-dark-blue">
      <span className="text-base md:text-2xl lg:text-4xl font-bold leading-none">
        {/* Formata o valor para dois dígitos */}
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs md:text-base lg:text-xl font-semibold uppercase tracking-wide mt-1.5">
        {label}
      </span>
    </div>
  )

  return (
    <div className="flex justify-center items-center p-4 md:p-6 lg:p-8">
      <div className="flex flex-wrap justify-center gap-3 md:gap-5 lg:gap-8 xl:gap-8">
        <TimeBox value={timeLeft.dias} label="dias" />
        <TimeBox value={timeLeft.horas} label="horas" />
        <TimeBox value={timeLeft.minutos} label="minutos" />
        <TimeBox value={timeLeft.segundos} label="segundos" />
      </div>
    </div>
  )
}
