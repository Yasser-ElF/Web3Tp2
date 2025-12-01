// src/js/animejs.js

document.addEventListener("DOMContentLoaded", () => {
    if (typeof anime === "undefined") return;

    // Légère pulsation des cadrans pour donner un effet "vivant"
    anime({
        targets: ".dial",
        scale: [1, 1.03],
        direction: "alternate",
        easing: "easeInOutSine",
        duration: 2000,
        loop: true
    });

    // SPEEDOMÈTRE : 0 -> 300 -> 0 en boucle
    const speedNeedle = document.querySelector(".dial-speed .speed-needle");
    const speedValueEl = document.getElementById("speed-value");

    if (speedNeedle && speedValueEl) {
        const speedObj = { v: 0 };

        anime({
            targets: speedObj,
            v: 300,
            direction: "alternate",
            loop: true,
            easing: "easeInOutSine",
            duration: 6000, // 0 -> 300 en 6s, puis retour
            update: () => {
                const v = Math.round(speedObj.v);
                speedValueEl.textContent = v + " km/h";

                // Angle pour 0–300 km/h (de -120° à +120°)
                const minAngle = -120;
                const maxAngle = 120;
                const angle = minAngle + (v / 300) * (maxAngle - minAngle);

                speedNeedle.style.transform = `translate(-50%, 0) rotate(${angle}deg)`;
            }
        });
    }

    // FUEL / ENERGY : 100% -> 5% -> 100% en boucle
    const energyNeedle = document.querySelector(".dial-energy .energy-needle");
    const energyValueEl = document.getElementById("energy-value");

    if (energyNeedle && energyValueEl) {
        const fuelObj = { v: 100 };

        anime({
            targets: fuelObj,
            v: 5,
            direction: "alternate",
            loop: true,
            easing: "easeInOutSine",
            duration: 8000, // descente puis montée
            update: () => {
                const v = Math.round(fuelObj.v);
                energyValueEl.textContent = v + " %";

                // Angle pour 0–100% (jauge style fuel)
                const minAngle = -90;
                const maxAngle = 90;
                const angle = minAngle + (v / 100) * (maxAngle - minAngle);

                energyNeedle.style.transform = `translate(-50%, 0) rotate(${angle}deg)`;

                // Couleur change quand le fuel est bas
                if (v < 20) {
                    energyValueEl.style.color = "#ff2f4b";
                } else {
                    energyValueEl.style.color = "#0ff0fc";
                }
            }
        });
    }
});
