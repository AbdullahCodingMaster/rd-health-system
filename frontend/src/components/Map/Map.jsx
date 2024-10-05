// src/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [40.7361, -73.9950]; // Latitude and Longitude for 123 5th Ave, NY

const MapComponent = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full mx-auto p-4">  {/* Full width and center */}
      <h1 className="text-2xl font-bold text-gray-800 text-center">Our Location</h1>
      <p className="mt-2 text-gray-600 text-center">123 5th Ave, New York, NY 10003, USA</p>
      <div className="w-full">  {/* Ensures full width for the map */}
        <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}> {/* Map takes full width */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              123 5th Ave, New York, NY 10003, USA
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
