// src/js/maplibre.js

document.addEventListener("DOMContentLoaded", () => {
    if (typeof maplibregl === "undefined") return;

    const container = document.getElementById("hud-map");
    if (!container) return;

    const map = new maplibregl.Map({
        container: container,
        style: "https://demotiles.maplibre.org/style.json",
        center: [-73.5673, 45.5017], // Montréal
        zoom: 10
    });

    new maplibregl.Marker({ color: "#ff2f4b" })
        .setLngLat([-73.5673, 45.5017])
        .addTo(map);
});
