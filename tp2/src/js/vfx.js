import { VFX } from "vfx-js";

const vfx = new VFX();

// Sélectionne TOUS les éléments qui ont la classe "rgb"
const elements = document.querySelectorAll(".rgb");

// Pour chacun, applique le shader rgbShift
elements.forEach((el) => {
  vfx.add(el, {
    shader: "rgbShift",
    overflow: 40
  });
});
