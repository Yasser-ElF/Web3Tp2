// src/js/chartjs.js

document.addEventListener("DOMContentLoaded", () => {
    if (typeof Chart === "undefined") return;

    const topCtx = document.getElementById("topChart");
    const bottomCtx = document.getElementById("bottomChart");

    if (topCtx) {
        new Chart(topCtx, {
            type: "line",
            data: {
                labels: ["00", "01", "02", "03", "04", "05", "06"],
                datasets: [{
                    label: "Energy flow",
                    data: [20, 35, 32, 50, 48, 60, 55],
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                plugins: { legend: { display: false } },
                scales: {
                    x: { ticks: { color: "#9aa0a6" }, grid: { display: false } },
                    y: { ticks: { color: "#9aa0a6" }, grid: { color: "#1f2835" } }
                }
            }
        });
    }

    if (bottomCtx) {
        new Chart(bottomCtx, {
            type: "bar",
            data: {
                labels: ["ENG", "BAT", "TEMP", "BRAKE", "TIRE"],
                datasets: [{
                    label: "System load",
                    data: [80, 65, 45, 50, 70],
                    borderWidth: 0
                }]
            },
            options: {
                plugins: { legend: { display: false } },
                scales: {
                    x: { ticks: { color: "#9aa0a6" }, grid: { display: false } },
                    y: { ticks: { color: "#9aa0a6" }, grid: { color: "#1f2835" } }
                }
            }
        });
    }
});
