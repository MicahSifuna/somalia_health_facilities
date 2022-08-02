import React from 'react';
import { MapContainer, Marker, Popup, TileLayer, LayersControl } from "react-leaflet";
import './App.css';
import Footer from './components/Footer';

import Header from './components/Header';

import healthData from  './data/health_facilities.json';
// import schoolData from  './data/school_facilities.json';

function App (){
  const { BaseLayer } = LayersControl;

  return (
    <div>
      <Header />
      <MapContainer
        center={[2.034666528, 45.338165314]}
        zoom={10}
        scrollWheelZoom = {true}
        touchZoom = {false}
        >
          <LayersControl>
            <BaseLayer checked name="OpenStreetMap">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </BaseLayer>
            <BaseLayer name="NASA Gibs Blue Marble">
                <TileLayer
                  url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
                  attribution="&copy; NASA Blue Marble, image service by OpenGeo"
                  maxNativeZoom={8}
                />
            </BaseLayer>

                {/* {schoolData.features.map((school)=> (
                  <Marker
                    key={school.properties.id}
                    position = {[
                      school.geometry.coordinates[1],
                      school.geometry.coordinates[0]
                    ]}
                  >
                    <Popup>
                      <div>
                        <h4> {school.properties.ZONE} </h4>
                      </div>
                    </Popup>
                  </Marker>
                ))} */}

                {healthData.features.map((health)=> (
                  <Marker
                    key={health.properties.ID}
                    position = {[
                      health.geometry.coordinates[1],
                      health.geometry.coordinates[0]
                    ]}
                  >
                    <Popup>
                      <div>
                        <h4> {health.properties.ID} </h4>
                        <h4> {health.properties.NAME} </h4>
                        <h2> POP {health.properties.POP} </h2>
                        <p> HEALTCOV_I {health.properties.HEALTCOV_I} </p>
                        <p> AREA {health.properties.AREA} </p>
                        <p> Latitude {health.geometry.coordinates[1]} </p>
                        <p> Longitude {health.geometry.coordinates[0]} </p>
                      </div>
                    </Popup>
                  </Marker>
                ))}

          </LayersControl>
      </MapContainer>

          {/* <GeoJSON data ={schoolData} /> */}
      <Footer />
    </div>

  );
}

export default App;