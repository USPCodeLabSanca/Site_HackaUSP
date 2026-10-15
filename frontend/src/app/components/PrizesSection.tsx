import React from 'react';
import { FaMedal } from "react-icons/fa";

// Interface para as propriedades
interface MedalIconProps {
  iconColor: string;
  size?: number;
}

// Dados dos Prêmios
const prizesData = [
  { 
    rank: "1º LUGAR", 
    description: "R$4.000", 
    iconColor: "text-prize-gold",
    bgColor: "bg-primary-dark",
    order: 1
  },
  { 
    rank: "2º LUGAR", 
    description: "R$2.000", 
    iconColor: "text-prize-silver", 
    bgColor: "bg-primary-dark",
    order: 2 
  },
  { 
    rank: "3º LUGAR", 
    description: "R$1.000", 
    iconColor: "text-prize-bronze", 
    bgColor: "bg-primary-dark",
    order: 3
  },
];

// Icone da Medalha
const MedalIcon: React.FC<MedalIconProps> = ({ iconColor, size = 48 }) => (
  <div className={iconColor}>
    <FaMedal size={size} />
  </div>
);

const PrizesSection: React.FC = () => {
  const firstPlace = prizesData.find(p => p.order === 1);
  const otherPlaces = prizesData.filter(p => p.order !== 1);

  return (
    <section id="premios" className="bg-background pt-16 px-4 sm:px-8 text-center font-roboto">
      <p className="text-neutral-light text-sm sm:text-lg tracking-widest uppercase mb-2">
        As melhores soluções serão contempladas com prêmios
      </p>
      <h2 className="text-4xl sm:text-5xl font-orbitron text-highlight mb-12">
        Prêmios
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Card do 1º lugar centralizado em cima */}
        {firstPlace && (
          <div
            className={`p-10${firstPlace.bgColor} flex flex-col items-center justify-center text-center sm:w-2/3 w-10/12 rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:bg-white/10 light:border-black/10 light:bg-black/5 light:hover:bg-black/10`}
          >
            <MedalIcon iconColor={firstPlace.iconColor} size={64} />
            <h3 className={`mb-2 text-3xl font-bold font-orbitron mt-4 ${firstPlace.iconColor}`}>
              {firstPlace.rank}
            </h3>
            <p className="text-neutral-light font-orbitron text-2xl">{firstPlace.description}</p>
          </div>
        )}

        {/* 2º e 3º lugares embaixo lado a lado */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full">
          {otherPlaces.map((item, index) => (
            <div
              key={index}
              className={`p-8${item.bgColor} flex flex-col items-center justify-center text-center md:w-full rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:bg-white/10 light:border-black/10 light:bg-black/5 light:hover:bg-black/10`}
            >
              <MedalIcon iconColor={item.iconColor} />
              <h3 className={`text-2xl font-bold font-orbitron mt-4 mb-1 ${item.iconColor}`}>
                {item.rank}
              </h3>
              <p className="text-neutral-light font-orbitron text-xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;