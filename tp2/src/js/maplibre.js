// src/js/maplibre.js
import maplibregl from "maplibre-gl";

const map = new maplibregl.Map({
  container: "hud-map",  // matches the HTML
  style: "https://api.maptiler.com/maps/toner-v2/style.json?key=vi9DtA1TL0Ga3okiln2O",
  center: [139.7003, 35.6595],
  zoom: 17,
  attributionControl: false
});

// Optionnel : un petit marqueur
new maplibregl.Marker({ color: "#0065c4ff" })
  .setLngLat([139.7003, 35.6595])
  .addTo(map);
