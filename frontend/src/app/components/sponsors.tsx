/**
 * Componente de Patrocinadores
 * 
 * As logos atuais são placeholders (ícones de empresas).
 * O componente está preparado para a fácil substituição pelas logos oficiais quando estas forem confirmadas.
 * 
 * Para substituir as logos:
 * 1. Adicione as imagens à pasta /public/images/sponsors/
 * 2. Substitua os ícones pelos componentes Image do Next.js
 * 3. Mantenha as dimensões e estilos para consistência visual
 */

export default function Sponsors() {
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

        {/* Grid de patrocinadores */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Primeira linha - 3 cards */}
          <div className="flex flex-wrap justify-center gap-16">
            <div className="w-full md:w-64 lg:w-64 bg-[var(--color-highlight)] rounded-lg h-48 flex flex-col items-center justify-center hover:bg-[var(--color-light-blue)] transition-colors duration-300 cursor-pointer p-6">
              <div className="text-white text-6xl mb-2">🏢</div>
              <div className="text-white text-sm text-center opacity-80">
                Logo Oficial
              </div>
            </div>
            <div className="w-full md:w-64 lg:w-64 bg-[var(--color-highlight)] rounded-lg h-48 flex flex-col items-center justify-center hover:bg-[var(--color-light-blue)] transition-colors duration-300 cursor-pointer p-6">
              <div className="text-white text-6xl mb-2">🏭</div>
              <div className="text-white text-sm text-center opacity-80">
                Logo Oficial
                <br />
                <span className="text-xs">(Placeholder)</span>
              </div>
            </div>
            <div className="w-full md:w-64 lg:w-64 bg-[var(--color-highlight)] rounded-lg h-48 flex flex-col items-center justify-center hover:bg-[var(--color-light-blue)] transition-colors duration-300 cursor-pointer p-6">
              <div className="text-white text-6xl mb-2">🏬</div>
              <div className="text-white text-sm text-center opacity-80">
                Logo Oficial
                <br />
                <span className="text-xs">(Placeholder)</span>
              </div>
            </div>
          </div>
          
          {/* Segunda linha - 2 cards centralizados */}
          <div className="flex flex-wrap justify-center gap-16">
            <div className="w-full md:w-64 lg:w-64 bg-[var(--color-highlight)] rounded-lg h-48 flex flex-col items-center justify-center hover:bg-[var(--color-light-blue)] transition-colors duration-300 cursor-pointer p-6">
              <div className="text-white text-6xl mb-2">🏛️</div>
              <div className="text-white text-sm text-center opacity-80">
                Logo Oficial
                <br />
                <span className="text-xs">(Placeholder)</span>
              </div>
            </div>
            <div className="w-full md:w-64 lg:w-64 bg-[var(--color-highlight)] rounded-lg h-48 flex flex-col items-center justify-center hover:bg-[var(--color-light-blue)] transition-colors duration-300 cursor-pointer p-6">
              <div className="text-white text-6xl mb-2">🏪</div>
              <div className="text-white text-sm text-center opacity-80">
                Logo Oficial
                <br />
                <span className="text-xs">(Placeholder)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}