// src/js/vfx.js

document.addEventListener("DOMContentLoaded", () => {
    const placeholders = document.querySelectorAll(".placeholder");

    placeholders.forEach(el => {
        el.addEventListener("mouseenter", () => {
            el.style.boxShadow = "0 0 16px rgba(15, 240, 252, 0.4)";
            el.style.borderColor = "#0ff0fc";
        });

        el.addEventListener("mouseleave", () => {
            el.style.boxShadow = "none";
            el.style.borderColor = "#1f2835";
        });
    });
});
