import * as Tone from "tone.js";

let isPlaying = false; // état du son

// un petit bip futuriste / synthé
const synth = new Tone.Synth({
  oscillator: { type: "sine" },
  envelope: {
    attack: 0.01,
    decay: 0.2,
    sustain: 0.1,
    release: 0.3
  }
}).toDestination();

// référence au bouton
const button = document.getElementById("audio-toggle");

if (button) {
  button.addEventListener("click", async () => {
    await Tone.start(); // obligatoire pour débloquer le son dans Chrome

    if (!isPlaying) {
      // jouer un son court
      synth.triggerAttackRelease("A4", "8n");
      isPlaying = true;
      button.textContent = "Audio ON"; //changer le nom du button de "Audio" a "Audio ON"
    } else {
      // jouer un son différent pour désactivation
      synth.triggerAttackRelease("D3", "8n");
      isPlaying = false;
      button.textContent = "Audio"; //remetre le no "Audio"
    }
  });
}
