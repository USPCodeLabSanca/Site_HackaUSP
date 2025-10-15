// src/components/MapaLeaflet.tsx

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Coordenadas iniciais
const position: L.LatLngExpression = [-23.572637934713782, -46.69245796510123]; // São Paulo

// Configuração do ícone do marcador
// Esta é uma solução comum para problemas com ícones no Leaflet + React
const icon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function MapaLeaflet() {
  return (
    <MapContainer 
      center={position} 
      zoom={14} 
      scrollWheelZoom={false} 
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        // Atribuição é obrigatória ao usar tiles do OpenStreetMap
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <div className="text-center">
            <strong>HackaUSP</strong><br />
            Centro de São Paulo<br />
            Alice
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapaLeaflet;