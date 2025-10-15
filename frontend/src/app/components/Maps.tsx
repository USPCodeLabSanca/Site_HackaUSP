"use client";

import Link from "next/link";
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
    <div className="min-h-screen" style={{ backgroundColor: '#041E37' }}>

      {/* Conteúdo Principal */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-white text-sm uppercase tracking-wide mb-2 font-roboto">
            LOCAL DO EVENTO
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-10 font-orbitron" style={{ color: '#179ADA' }}>
            Como Chegar
          </h1>
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2 font-roboto">
            Alice
          </h2>
          <p className="text-gray-300 text-lg max-w-md font-roboto mb-px">
            Av. Rebouças, 3535 - Pinheiros, São Paulo - SP, 05401-400
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
              href="https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6824124,-46.5952992,10z/data=!3m1!4b1!4m6!3m5!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571!16zL20vMDIycGZt?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold py-1 px-3 rounded-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ 
                backgroundColor: '#179ADA',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1372a1ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#179ADA';
              }}
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
    </div>
  );
}