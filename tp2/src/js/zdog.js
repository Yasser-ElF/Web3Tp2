// src/js/zdog.js

document.addEventListener("DOMContentLoaded", () => {
    if (typeof Zdog === "undefined") return;

    const canvas = document.getElementById("hud-scan-canvas");
    if (!canvas) return;

    const illo = new Zdog.Illustration({
        element: canvas,
        dragRotate: false,
        resize: "fit",
        zoom: 1.2
    });

    // Cercle principal
    new Zdog.Ellipse({
        addTo: illo,
        diameter: 120,
        stroke: 2,
        color: "#0ff0fc"
    });

    // Aiguille
    const needle = new Zdog.Shape({
        addTo: illo,
        path: [
            { x: 0, y: 0 },
            { x: 0, y: -60 }
        ],
        stroke: 3,
        color: "#ff2f4b",
        translate: { z: 1 }
    });

    function animate() {
        needle.rotate.z += 0.03;
        illo.updateRenderGraph();
        requestAnimationFrame(animate);
    }

    animate();
});
