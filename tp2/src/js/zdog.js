// src/js/zdog.js
import Zdog from "zzz";

// récupère canvas du radar
const canvas = document.getElementById("hud-scan-canvas");

// si canvas introuvable montrer un warning
if (!canvas) {
  console.warn("canvas #hud-scan-canvas introuvable pour le radar zdog.");
} else {

  // crée illustration zdog du radar
  const illo = new Zdog.Illustration({
    element: canvas,
    dragRotate: false,
    resize: "fit",
    zoom: 2.4
  });

  // couleurs du radar
  const radarGreen = "#0aff9d";
  const radarGrid = "rgba(10, 255, 157, 0.2)";
  const radarSweep = "rgba(10, 255, 157, 0.8)";

  // cercle extérieur du radar
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 280,
    stroke: 4,
    color: radarGreen
  });

  // anneaux internes du radar
  [200, 120].forEach(d => {
    new Zdog.Ellipse({
      addTo: illo,
      diameter: d,
      stroke: 2,
      color: radarGrid
    });
  });

  // ligne horizontale du radar
  new Zdog.Shape({
    addTo: illo,
    path: [
      { x: -140, y: 0 },
      { x: 140, y: 0 }
    ],
    stroke: 2,
    color: radarGrid
  });

  // ligne verticale du radar
  new Zdog.Shape({
    addTo: illo,
    path: [
      { x: 0, y: -140 },
      { x: 0, y: 140 }
    ],
    stroke: 2,
    color: radarGrid
  });

  // positions des points blips du radar
  const blipPositions = [
    { x: 50,  y: -60 },
    { x: -80, y: -20 },
    { x: 20,  y: 80 },
    { x: -40, y: 50 }
  ];

  // placer chaque blip
  blipPositions.forEach(pos => {
    new Zdog.Shape({
      addTo: illo,
      translate: { x: pos.x, y: pos.y },
      stroke: 8,
      color: radarGreen
    });
  });

  // aiguille du radar
  const sweep = new Zdog.Shape({
    addTo: illo,
    path: [
      { x: 0, y: 0 },
      { x: 0, y: -140 }
    ],
    stroke: 5,
    color: radarSweep,
    translate: { z: 2 }
  });

  // centre lumineux
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 16,
    stroke: 10,
    color: "rgba(10, 255, 157, 0.7)"
  });

  // angle du sweep
  let angle = 0;

  // anime rotation radar
  function animate() {
    angle += 0.04;
    if (angle > Zdog.TAU) angle -= Zdog.TAU;

    sweep.rotate.z = angle;

    illo.updateRenderGraph();
    requestAnimationFrame(animate);
  }

  animate();
}


// illustration pour le cube dans vehicle schematic
const illo = new Zdog.Illustration({
  element: "#vehicle-schematic-canvas",
  resize: true
});

// crée cube 3d
const cube = new Zdog.Box({
  addTo: illo,
  width: 300,
  height: 400,
  depth: 600,
  stroke: false,
  color: "#0ff0fc",
  leftFace: 'rgba(0, 68, 68, 1)',
  rightFace: 'rgba(0, 68, 68, 1)',
  topFace: 'rgba(4, 141, 141, 1)',
  bottomFace: 'rgba(4, 141, 141, 1)',
  rearFace: 'rgba(1, 199, 199, 1)'
});

// anime rotation du cube
function animateCube() {
  illo.rotate.y += 0.03;
  illo.rotate.x += 0.03;

  illo.updateRenderGraph();
  requestAnimationFrame(animateCube);
}

animateCube();
