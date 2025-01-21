function showSystemStats() {
    document.getElementById('content').innerHTML = `
        <h2>System Stats</h2>
        <p>Here you can monitor the overall health of the drainage system.</p>
        <ul>
            <li>Drainage Health: Good</li>
            <li>Water Flow Rate: 200 L/s</li>
            <li>Maintenance Due: No</li>
        </ul>
    `;
}

function showMaintenance() {
    document.getElementById('content').innerHTML = `
        <h2>Maintenance Schedule</h2>
        <p>Upcoming maintenance schedule for the drainage system.</p>
        <ul>
            <li>Next Maintenance: January 15, 2024</li>
            <li>Location: Sector 5, Downtown</li>
            <li>Scheduled Action: Pipe Cleaning</li>
        </ul>
    `;
}

function showAlerts() {
    document.getElementById('content').innerHTML = `
        <h2>Alerts</h2>
        <p>Recent alerts for system anomalies.</p>
        <ul>
            <li>Alert #1: Clogged Drain at Nmiet 1.3 - Urgent</li>
            <li>Alert #2: Water Overflow at Shahu colony 3.16 - Medium Priority</li>
        </ul>
    `;
}