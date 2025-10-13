import React from 'react';
// Importações dos ícones
import { 
  LuBrain, 
  LuPencil, 
  LuStore, 
  LuLeaf, 
  LuDollarSign, 
  LuPresentation, 
} from 'react-icons/lu';

// Dados dos critérios
const criteriaData = [
  { 
    title: "Inovação", 
    description: "A empresa é disruptiva e possui produto inovador?", 
    IconComponent: LuBrain 
  },
  { 
    title: "MVP", 
    description: "Seu mínimo produto viável conseguiu validar seu problema e ideia?", 
    IconComponent: LuPencil 
  },
  { 
    title: "Product-market fit", 
    description: "O seu produto se encaixa no mercado e tem demanda?", 
    IconComponent: LuStore 
  },
  { 
    title: "Impacto socioambiental", 
    description: "Seu negócio melhora o mundo?", 
    IconComponent: LuLeaf 
  },
  { 
    title: "Modelo de negócios", 
    description: "O modelo proposto é viável financeiramente?", 
    IconComponent: LuDollarSign 
  },
  { 
    title: "Pitch", 
    description: "Sua proposta foi bem vendida com uma marca forte e bons argumentos?", 
    IconComponent: LuPresentation 
  },
];

const EvaluationCriteria: React.FC = () => {
  return (
    <section className="bg-dark-blue py-16 px-4 sm:px-8 text-center font-roboto">
      <p className="text-light-gray text-sm tracking-widest uppercase mb-1">
        TODOS OS CRITÉRIOS SERÃO CONSIDERADOS
      </p>
      <h2 className="text-4xl sm:text-5xl font-orbitron text-highlight mb-12">
        Critérios de avaliação
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {criteriaData.map((item, index) => (
          <div
            key={index}
            className="p-8 border-2 border-highlight rounded-lg flex flex-col items-center text-center transition-transform hover:scale-[1.02] hover:shadow-2xl"
          >
            {/* Ícone */}
            <div className="text-highlight mb-4">
              <item.IconComponent size={40} /> {/* Ajuste o size e strokeWidth */}
            </div>
            
            {/* Título */}
            <h3 className="text-xl font-bold font-orbitron text-highlight mb-2">
              {item.title}
            </h3>
            
            {/* Descrição */}
            <p className="text-light-gray text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EvaluationCriteria;