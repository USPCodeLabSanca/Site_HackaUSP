import Image from 'next/image';

interface Sponsor {
  id: number;
  name: string;
  logoPath?: string;
  link?: string;
  width?: number;
  height?: number;
}

const SPONSORS_DATA: Sponsor[] = [
  {
  id: 1,
  name: "Capim",
  logoPath: "/assets/patrocinadores/capim-logo.svg", 
  link: "https://capim.com.br/", 
  width: 190, 
  height: 80, 
  },
  {
  id: 2,
  name: "Pilea Labs",
  logoPath: "/assets/patrocinadores/pilealabs-logo.png",
  link: "https://www.pilealabs.com/", 
  width: 190, 
  height: 80, 
  },
  {
  id: 3,
  name: "Sebrae",
  logoPath: "/assets/patrocinadores/sebrae-logo.svg",
  link: "https://sebrae.com.br/", 
  width: 190, 
  height: 60, 
  }
];

// Card de patrocinador
const SponsorCard = ({ id, name, link, logoPath, width, height }: Sponsor) => {
  const BaseTag = link ? 'a' : 'div';
  
  const linkProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <BaseTag
    key={id}
    {...linkProps}
    className="group flex h-40 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:bg-white/10"
    >
    {/* Área da Logo */}
    <div className="relative w-full max-w-full flex justify-center items-center brightness-0 invert">
      {logoPath ? (
      <Image
        src={logoPath}
        alt={name} 
        width={width || 200}
        height={height || 80}
        className="object-contain max-h-full max-w-full p-2"
      />
      ) : (
      // FALLBACK - Se o logoPath não for fornecido, mostra um placeholder
      <div className="text-white text-4xl mb-2 text-center">
        {name}
        <div className="text-sm">(Logo Pendente)</div>
      </div>
      )}
    </div>
    </BaseTag>
  );
  };

// Componente de Patrocinadores
export default function Sponsors() {
  return (
  <section id="apoio" className="w-full py-16 px-4 bg-background">
    <div className="max-w-6xl mx-auto">
      {/* Título da seção */}
      <div className="text-center mb-16">
        <p className="text-neutral-light text-sm sm:text-lg uppercase tracking-wide mb-2 font-roboto">
          PATROCINADORES 
        </p>
        <h3 className="text-4xl md:text-5xl mb-10 font-orbitron text-highlight">
          Apoio
        </h3>
      </div>

      {/* Grid de patrocinadores (Dinâmico) */}
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6 md:gap-8">
        {SPONSORS_DATA.map((sponsor) => (
          <SponsorCard key={sponsor.id} {...sponsor} />
        ))}
      </div>
        
      {/* Mensagem de fallback caso não haja patrocinadores */}
      {SPONSORS_DATA.length === 0 && (
        <div className="text-center text-white/70 italic p-10 border border-dashed border-white/30 rounded-lg">
          <p>Ainda não há patrocinadores confirmados. Volte em breve!</p>
        </div>
      )}
    </div>
  </section>
  );
}