// src/js/chartjs.js
import Chart from "https://esm.sh/chart.js/auto";

// Grab the canvas safely
const ctx = document.querySelector("#topChart")?.getContext("2d");

if (!ctx) {
    console.warn(" topChart canvas not found");
} else {
    // Create the chart
    let graphique = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Engine Load",
                "Battery Health",
                "Oil Pressure",
                "Turbo Boost",
                "Coolant Temp",
                "Fuel Mix",
                "Brake Efficiency",
                "Tire Grip",
                "Suspension Stress"
            ],
            datasets: [
                {
                    label: "% de répondants",
                    data: [49, 49, 42, 42, 37, 31, 31, 23, 22],
                    backgroundColor: "rgba(85, 239, 239, 1)",
                    borderWidth: 1,
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y",
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        color: "#fff",
                        callback: v => v + "%"
                    },
                    grid: { color: "rgba(255,255,255,0.1)" }
                },
                y: {
                    ticks: { color: "#fff" },
                    grid: { color: "rgba(255,255,255,0.1)" }
                }
            }
        }
    });

    // Auto-update every second with random data
    setInterval(() => {
        for (let ds of graphique.data.datasets) {
            for (let i = 0; i < ds.data.length; i++) {
                ds.data[i] = Math.round(Math.random() * 80 + 20);
            }
        }
        graphique.update();
    }, 1000);
}
