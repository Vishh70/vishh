import { generateRandomFlow } from './flowdata.js';

function showFlow() {
    const flowData = generateRandomFlow();
    document.getElementById('content').innerHTML = `
        <h2>See Flow</h2>
        <p>Flow Speed: ${flowData.flowSpeed} m/s</p>
        <p>Flow Direction: ${flowData.flowDirection}</p>
    `;
}



function initMap() {
    const map = L.map('map').setView([18.735, 73.675], 14); // Center the map on Talegaon Dabhade


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    // Define the coordinates and states for drainage points
    const drainagePoints = [
        { lat: 18.735, lng: 73.675, name: 'Point 1', status: 'Operational' },
        { lat: 18.736, lng: 73.676, name: 'Point 2', status: 'Blocked' },
        { lat: 18.737, lng: 73.677, name: 'Point 3', status: 'Operational' },
    ];


    // Add drainage points to the map
    drainagePoints.forEach(point => {
        const marker = L.marker([point.lat, point.lng]).addTo(map);
        marker.bindPopup(`
            <b>${point.name}</b><br>
            Status: <span style="color: ${point.status === 'Operational' ? 'green' : 'red'};">${point.status}</span>
        `);
    });


    // Define the coordinates for the drainage system path
    const drainageCoordinates = [
        [18.735, 73.675],
        [18.736, 73.676],
        [18.737, 73.677],
        // Add more coordinates as needed
    ];


    // Create a polyline to represent the drainage system path
    const drainagePath = L.polyline(drainageCoordinates, {
        color: 'red',
        weight: 3,
        opacity: 1.0,
        smoothFactor: 1
    }).addTo(map);
}


function showMap() {
    document.getElementById('content').innerHTML = `
        <h2>Map of City</h2>
        <p>Location of drainage system and live statuses will be displayed here.</p>
        <div id="map" style="height: 450px; width: 100%;"></div>
    `;
    initMap();
}


function showFlow() {
    document.getElementById('content').innerHTML = `
        <h2>See Flow</h2>
        <canvas id="flowChart" width="400" height="200"></canvas>
    `;


    // Create a line chart for flow rates
    const ctx = document.getElementById('flowChart').getContext('2d');
    const flowChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Pipe 1', 'Pipe 2', 'Pipe 3', 'Pipe 4'],
            datasets: [{
                label: 'Flow Rate (L/s)',
                data: [10, 20, 15, 25],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Pipes'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Flow Rate (L/s)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}


function showAnalysis() {
    document.getElementById('content').innerHTML = `
        <h2>Analysis</h2>
        <p>Detailed analysis of water outlet performance, blockages, and flow distribution will be displayed here.</p>
    `;
    
}




function showAdmin() {
    document.getElementById('content').innerHTML = `
        <h2>Admin Control</h2>
        <p>Administrator controls for managing maintenance schedules and adjusting flow settings will be displayed here.</p>
    `;
}






