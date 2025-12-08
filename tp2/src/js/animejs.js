
import { animate, utils } from "https://esm.sh/animejs";

utils.set(".dial-needle", { rotate: 180 });


const sec = animate(".dial-needle", {
  rotate: "+=360deg",
  loop: true,
  ease: "linear"
});

const speedEl = document.getElementById("speed-value");
const fuelEl  = document.getElementById("energy-value");

if (speedEl) {
    setInterval(() => {
        const newSpeed = Math.floor(Math.random() * 301); // 0–300
        speedEl.textContent = newSpeed + " km/h";
    }, 200);
}

if (fuelEl) {
    setInterval(() => {
        const newFuel = Math.floor(Math.random() * 101); // 0–100
        fuelEl.textContent = newFuel + " %";
    }, 250);
}
