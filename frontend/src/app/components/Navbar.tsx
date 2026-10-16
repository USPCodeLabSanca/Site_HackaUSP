"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ActiveLink } from "./Active-link";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  // Estado para controlar se o menu mobile está aberto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar entre abrir e fechar o menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Links de navegação (nome e âncora)
  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "História", href: "#edicoes" },
    { label: "Critérios", href: "#criterios" },
    { label: "Prêmios", href: "#premios" },
    // { label: "Programação", href: "#programacao" },
    { label: "Inscrição", href: "#inscricao" },
    { label: "Local", href: "#como-chegar" },
    { label: "Apoio", href: "#apoio" },
  ];

  return (
    <div className="fixed top-0 z-10000 w-full lg:border-b border-white/10 light:border-black/10 bg-background backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-2">
          <Link href="/" className="shrink min-w-0">
            {/* Escuro: logo original */}
            <Image
              src="/assets/logo-dark.svg"
              alt="Logo"
              width={194}
              height={34}
              className="h-7 sm:h-10 w-auto max-w-full light:hidden"
              priority
            />
            {/* Claro: logo para fundo claro */}
            <Image
              src="/assets/logo-light.svg"
              alt="Logo"
              width={194}
              height={34}
              className="h-7 sm:h-10 w-auto max-w-full hidden light:block"
              priority
            />
          </Link>

          {/* Navegação para desktop */}
          <nav className="hidden lg:flex items-center md:gap-3 gap-6">
            {links.map((link) => (
              <ActiveLink key={link.href} href={link.href}>
                {link.label}
              </ActiveLink>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile: toggle de tema + menu hamburger */}
          <div className="flex shrink-0 items-center gap-1 lg:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="relative flex h-8 w-8 items-center justify-center rounded-md border border-white/10 light:border-black/15 text-white light:text-neutral-900 hover:bg-white/10 light:hover:bg-black/10 transition-colors cursor-pointer"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
            {/* Barra de cima: desce ao centro e gira 45° */}
            <span
              aria-hidden="true"
              className={`absolute left-1/2 top-1/2 h-[1.5px] w-4 -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-in-out ${
                isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-1"
              }`}
            />
            {/* Barra do meio: some */}
            <span
              aria-hidden="true"
              className={`absolute left-1/2 top-1/2 h-[1.5px] w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-all duration-300 ease-in-out ${
                isMenuOpen ? "scale-x-0 opacity-0" : "opacity-100"
              }`}
            />
            {/* Barra de baixo: sobe ao centro e gira -45° */}
            <span
              aria-hidden="true"
              className={`absolute left-1/2 top-1/2 h-[1.5px] w-4 -translate-x-1/2 rounded-full bg-current transition-all duration-300 ease-in-out ${
                isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-0.75"
              }`}
            />
            </button>
          </div>
        </div>

        {/* Menu mobile (visível apenas quando estiver aberto) */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} pb-4`}>
          {/* O fundo é vermelho escuro nos dois temas, então os links mantêm a cor clara */}
          <div className="bg-primary-dark rounded-lg shadow-lg mx-2 my-2 p-6 light:[--color-neutral-light:#dde1e3]">
            <nav className="flex flex-col space-y-4 items-center text-center">
              {links.map((link) => (
                <ActiveLink key={link.href} href={link.href}>
                  {link.label}
                </ActiveLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};