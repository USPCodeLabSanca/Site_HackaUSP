"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { ActiveLink } from "./Active-link";

export const Navbar = () => {
  // Estado para controlar se o menu mobile está aberto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar entre abrir e fecha o menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Links de navegação (nome e ancora)
  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Critérios", href: "#criterios" },
    { label: "Prêmios", href: "#premios" },
    // { label: "Programação", href: "#programacao" },
    { label: "Inscrição", href: "#inscricao" },
    { label: "Como chegar", href: "#como-chegar" },
    // { label: "Edições Anteriores", href: "#edicoes" },
    { label: "Apoio", href: "#apoio" },
  ];

  return (
    <div className="fixed top-0 z-10000 w-full lg:border-b border-white/10 bg-dark-blue backdrop-blur supports-[backdrop-filter]:bg-dark-blue/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={194}
              height={34}
              className="h-10 w-auto"
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
          </nav>

          {/* Menu hamburger para mobile */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:text-gray-300 transition-colors cursor-pointer"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="w-8 h-8">
              {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
            </div>
          </button>
        </div>

        {/* Menu mobile (visível apenas quando estiver aberto) */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} pb-4`}>
          <div className="bg-highlight rounded-lg shadow-lg mx-2 my-2 p-6">
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
