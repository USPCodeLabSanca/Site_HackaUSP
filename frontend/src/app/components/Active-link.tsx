'use client'

import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'

type ActiveLinkProps = {
  children: ReactNode
  href: string
}

export const ActiveLink = ({ children, href }: ActiveLinkProps) => {
  // Estado para controlar se o link está ativo
  const [isActive, setIsActive] = useState(false)

  // Efeito para monitorar a rolagem da página e determinar a seção ativa
  useEffect(() => {
    const sectionId = href.replace('#', '')

    const handleScroll = () => {
      const section = document.getElementById(sectionId)
      if (!section) return

      // Obtém as dimensões e posições da seção
      const rect = section.getBoundingClientRect()
      const scrollY = window.scrollY
      const sectionTop = scrollY + rect.top
      const sectionBottom = sectionTop + rect.height

      const offset = 100
      const currentScroll = scrollY + offset

      // Verifica se a posição atual de rolagem está dentro dos limites da seção
      const isInView =
        currentScroll >= sectionTop - offset &&
        currentScroll <= sectionBottom - offset

      setIsActive(isInView)
    }

    // Timeout que ajuda a garantir que a DOM já esteja totalmente renderizada
    const timeoutId = setTimeout(() => {
      handleScroll()
      window.addEventListener('scroll', handleScroll, { passive: true })
    }, 100)

    // Função de limpeza
    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [href]) // Reexecuta se o href mudar

  return (
    <Link
      href={href}
      className={`text-sm xl:text-base transition-all duration-200 hover:font-bold lg:hover:text-highlight ${
        isActive
          ? 'lg:text-highlight font-semibold lg:font-bold'
          : 'text-light-gray font-normal'
      }`}
    >
      {children}
    </Link>
  )
}
