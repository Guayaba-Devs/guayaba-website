import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { motion } from "framer-motion";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_API_KEY; // Coloca aquí tu token de Mapbox

const LocationsComponent = () => {
  return (
    <section className="relative w-screen bg-gray-900 text-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: false }}
        >
          Nuestras <span className="text-orange-400">Ubicaciones</span>
        </motion.h2>

        <motion.p
          className="text-center text-lg mb-10 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Estamos ubicados en CDMX y Puebla, dos ciudades claves para el
          crecimiento de nuestra comunidad.
        </motion.p>

        <motion.div
          className="w-full h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <Map
            initialViewState={{
              longitude: -98.763,
              latitude: 19.1017,
              zoom: 7,
            }}
            style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            <Marker longitude={-99.1824} latitude={19.3198}>
              <div className="flex items-center space-x-2">
                <img src="/vite.svg" alt="CDMX" className="w-10 h-10" />
                <span className="text-white bg-black px-2 py-1 rounded">
                  Guayaba Devs CDMX
                </span>
              </div>
            </Marker>

            <Marker longitude={-98.2645} latitude={19.1034}>
              <div className="flex items-center space-x-2">
                <img src="/vite.svg" alt="Puebla" className="w-10 h-10" />
                <span className="text-white bg-black px-2 py-1 rounded">
                  Guayaba Devs Puebla
                </span>
              </div>
            </Marker>
          </Map>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsComponent;
