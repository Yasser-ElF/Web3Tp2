// src/js/tonejs.js

document.addEventListener("DOMContentLoaded", () => {
    if (typeof Tone === "undefined") return;

    const btn = document.getElementById("audio-toggle");
    if (!btn) return;

    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    let playing = false;

    btn.addEventListener("click", async () => {
        await Tone.start();

        if (!playing) {
            // Petit accord pour faire "ambiance cockpit"
            synth.triggerAttackRelease(["A3", "C4", "E4"], "2n");
            playing = true;
            btn.classList.add("btn-success");
            btn.classList.remove("btn-outline-light");
        } else {
            synth.releaseAll();
            playing = false;
            btn.classList.remove("btn-success");
            btn.classList.add("btn-outline-light");
        }
    });
});
