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
    name: "Irya",
    logoPath: "/assets/patrocinadores/irya-logo.png", 
    link: "https://www.iryasolutions.com.br/", 
    width: 200, 
    height: 80, 
  },
  {
    id: 2,
    name: "WEX",
    logoPath: "/assets/patrocinadores/wex-logo.png",
    link: "https://www.wexinc.com/", 
    width: 200, 
    height: 80, 
  },
  {
    id: 3,
    name: "Alice",
    logoPath: "/assets/patrocinadores/alice-logo.png",
    link: "https://alice.com.br/", 
    width: 160, 
    height: 60, 
  }
];


// Componente de Patrocinadores
export default function Sponsors() {
  
  // Função auxiliar para renderizar o Card do Patrocinador
  const SponsorCard = ({ id, name, link, logoPath, width, height }: Sponsor) => {
    const BaseTag = link ? 'a' : 'div';
    
    const linkProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

    return (
      <BaseTag
        key={id}
        {...linkProps}
        className="w-full md:w-64 lg:w-64 bg-[var(--color-highlight)] rounded-lg h-48 flex flex-col items-center justify-center hover:bg-[var(--color-light-blue)] transition-colors duration-300 cursor-pointer p-2"
      >
        {/* Área da Logo */}
        <div className="relative w-full max-w-full flex justify-center items-center h-2/3">
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

  const chunkSize = 3;
  const sponsorGroups = [];
  for (let i = 0; i < SPONSORS_DATA.length; i += chunkSize) {
    sponsorGroups.push(SPONSORS_DATA.slice(i, i + chunkSize));
  }


  return (
    <section className="w-full py-16 px-4 bg-[var(--color-dark-blue)]">
      <div className="max-w-6xl mx-auto">
        {/* Título da seção */}
        <div className="text-center mb-16">
          <p className="text-white text-xl md:text-2xl lg:text-3xl uppercase tracking-wide mb-2 font-roboto">
            PATROCINADORES 
          </p>
          <h3 className="text-4xl md:text-5xl font-bold mb-10 font-orbitron" style={{ color: '#179ADA' }}>
            Apoio
          </h3>
        </div>

        {/* Grid de patrocinadores (Dinâmico) */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Mapeamento dos grupos (linhas) de patrocinadores */}
          {sponsorGroups.map((group, index) => (
            <div 
              key={index}
              className="flex flex-wrap justify-center gap-16"
            >
              {/* Mapeamento dos cards dentro do grupo */}
              {group.map(sponsor => (
                <SponsorCard key={sponsor.id} {...sponsor} />
              ))}
            </div>
          ))}
          
          {/* Mensagem de fallback caso não haja patrocinadores */}
          {SPONSORS_DATA.length === 0 && (
              <div className="text-center text-white/70 italic p-10 border border-dashed border-white/30 rounded-lg">
                  <p>Ainda não há patrocinadores confirmados. Volte em breve!</p>
              </div>
          )}
        </div>
      </div>
    </section>
  );
}