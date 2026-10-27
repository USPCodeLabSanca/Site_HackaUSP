"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const MapPlaceholder = () => (
  <div className="bg-gray-300 h-[500px] flex items-center justify-center">
    <p className="text-gray-600">Carregando mapa...</p>
  </div>
);

// Importação dinâmica para evitar problemas de SSR com Leaflet
const MapaLeaflet = dynamic(() => import('./MapaLeaflet'), {
  ssr: false,
  loading: MapPlaceholder
});

export default function Maps() {
  // Só monta o mapa (JS do Leaflet + tiles) quando a seção chega perto da tela
  const mapRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-chegar" className="bg-background">

      {/* Conteúdo Principal */}
      <div className="mx-6 sm:mx-0 pt-16 flex flex-col items-center justify-center px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-neutral-light text-sm sm:text-lg uppercase tracking-wide mb-2 font-roboto">
            LOCAL DO EVENTO
          </p>
          <h2 className="text-4xl md:text-5xl mb-10 font-orbitron text-highlight">
            Como Chegar
          </h2>
          <h3 className="text-neutral-light text-2xl md:text-3xl font-semibold mb-2 font-roboto">
            Capim
          </h3>
          <p className="text-gray-300 light:text-neutral-700 text-lg max-w-md font-roboto mb-px">
            Av. Brig. Faria Lima, 1713 - Jardim Paulistano, São Paulo - SP, 01451-000
          </p>
        </div>

        {/* Mapa */}
        <div className="w-full max-w-4xl">
          <div ref={mapRef} className="bg-white rounded-xl overflow-hidden shadow-2xl mb-2">
            {showMap ? <MapaLeaflet /> : <MapPlaceholder />}
          </div>
          <br />
          {/* Botão Google Maps */}
          <div className="flex justify-center">
            <a
              href="https://maps.app.goo.gl/DGx9QccaWQCm3VSt6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold py-1 px-3 rounded-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 bg-primary hover:bg-primary-dark"
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