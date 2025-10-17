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
    iconColor: "text-gold",
    bgColor: "bg-dark-blue",
    order: 1
  },
  { 
    rank: "2º LUGAR", 
    description: "R$2.000", 
    iconColor: "text-silver", 
    bgColor: "bg-dark-blue",
    order: 2 
  },
  { 
    rank: "3º LUGAR", 
    description: "R$1.000", 
    iconColor: "text-orange-prize", 
    bgColor: "bg-dark-blue",
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
    <section id="premios" className="bg-dark-blue py-16 px-4 sm:px-8 text-center font-roboto">
      <p className="text-light-gray text-sm sm:text-lg tracking-widest uppercase mb-2">
        As melhores soluções serão contempladas com prêmios
      </p>
      <h2 className="text-4xl sm:text-5xl font-orbitron text-highlight mb-12">
        Prêmios
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Card do 1º lugar centralizado em cima */}
        {firstPlace && (
          <div
            className={`p-10 bg-light-blue ${firstPlace.bgColor} rounded-lg flex flex-col items-center justify-center text-center shadow-xl w-full md:w-2/3 transition-transform hover:scale-[1.05]`}
          >
            <MedalIcon iconColor={firstPlace.iconColor} size={64} />
            <h3 className={`text-3xl font-bold font-orbitron mt-4 mb-2 ${firstPlace.iconColor}`}>
              {firstPlace.rank}
            </h3>
            <p className="text-light-gray font-orbitron text-2xl">{firstPlace.description}</p>
          </div>
        )}

        {/* 2º e 3º lugares embaixo lado a lado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {otherPlaces.map((item, index) => (
            <div
              key={index}
              className={`p-8 bg-light-blue ${item.bgColor} rounded-lg flex flex-col items-center justify-center text-center shadow-md transition-transform hover:scale-[1.05]`}
            >
              <MedalIcon iconColor={item.iconColor} />
              <h3 className={`text-2xl font-bold font-orbitron mt-4 mb-1 ${item.iconColor}`}>
                {item.rank}
              </h3>
              <p className="text-light-gray font-orbitron text-xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
