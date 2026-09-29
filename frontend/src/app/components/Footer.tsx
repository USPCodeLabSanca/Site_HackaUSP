import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

// Dados dos links
const SOCIAL_LINKS = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/hackathonusp/",
    label: "Instagram",
  },
];

export default function SimpleFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full text-neutral-light bg-background"
    >
      {/* Linha Divisória Superior (Para separar de outras seções) */}
      <div className="border-t border-primary-darke"></div>

      <div className="max-w-6xl mx-auto px-6 py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* COLUNA ESQUERDA: Ícones Sociais */}
          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link para o ${item.label} do Hackathon USP`}
                className="text-xl transition-colors duration-300 hover:text-highlight"
              >
                <item.icon />
              </a>
            ))}
          </div>

          {/* COLUNA DIREITA: Copyright e Logos */}
          <div className="flex items-center space-x-3 text-sm md:text-base">
            {/* Texto de Copyright */}
            <p className="whitespace-nowrap">
              &copy; 2016 - {currentYear} Hackathon USP
            </p>

            {/* Separador visual */}
            <span className="text-primary-darker hidden md:inline">
              |
            </span>

            {/* Contêiner das Logos (agrupadas à direita) */}
            <div className="flex items-center space-x-2">
              {/* Logo NEU */}
              <Image
                src="/assets/neu.png"
                alt="Logo NEU - ICMC USP"
                width={40}
                height={40}
                className="h-5 w-auto object-contain"
              />

              {/* Logo Codelab */}
              <Image
                src="/assets/ucl.png"
                alt="Logo Codelab - ICMC USP"
                width={70}
                height={40}
                className="h-5 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
