"use client";

import dynamic from "next/dynamic";

// Importação dinâmica para evitar problemas de SSR com Leaflet
const MapaLeaflet = dynamic(() => import('./MapaLeaflet'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-300 rounded-xl h-96 flex items-center justify-center">
      <p className="text-gray-600">Carregando mapa...</p>
    </div>
  )
});

export default function Maps() {
  return (
    <section id="como-chegar" className="bg-background">

      {/* Conteúdo Principal */}
      <div className="mx-6 sm:mx-0 pt-16 flex flex-col items-center justify-center px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-neutral-light text-sm sm:text-lg uppercase tracking-wide mb-2 font-roboto">
            LOCAL DO EVENTO
          </p>
          <h1 className="text-4xl md:text-5xl mb-10 font-orbitron text-highlight">
            Como Chegar
          </h1>
          <h2 className="text-neutral-light text-2xl md:text-3xl font-semibold mb-2 font-roboto">
            Capim
          </h2>
          <p className="text-gray-300 light:text-neutral-700 text-lg max-w-md font-roboto mb-px">
            Av. Brig. Faria Lima, 1713 - Jardim Paulistano, São Paulo - SP, 01451-000
          </p>
        </div>

        {/* Mapa */}
        <div className="w-full max-w-4xl">
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl mb-2">
            <MapaLeaflet />
          </div>
          <br />
          {/* Botão Google Maps */}
          <div className="flex justify-center">
            <a
              href="https://maps.app.goo.gl/DGx9QccaWQCm3VSt6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold py-1 px-3 rounded-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 bg-highlight hover:bg-primary light:hover:bg-primary-dark"
            >
              <svg 
                className="w-5 h-5"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Veja no Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}