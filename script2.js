// Sample data for waste collection schedule with timings and addresses
const wasteCollectionData = [
    { type: "General Waste", day: "2024-11-08", time: "08:00 AM - 10:00 AM", address: "Salgame Road" },
    { type: "Recyclables", day: "2024-11-10", time: "10:00 AM - 12:00 PM", address: "K R puram" },
    { type: "Compost", day: "2024-11-11", time: "02:00 PM - 04:00 PM", address: "Vidhyanagar" },
    { type: "Compost", day: "2024-11-12", time: "03:00 PM - 04:00 PM", address: "Vivekanagar" },
    { type: "General Waste", day: "2024-11-13", time: "02:00 PM - 04:00 PM", address: "Udaygiri" },
    { type: "Compost", day: "2024-11-14", time: "02:00 PM - 04:00 PM", address: " K R puram" },
    { type: "Recyclables", day: "2024-11-15", time: "10:00 AM - 12:00 PM", address: " Udaygiri" },
    { type: "Compost", day: "2024-11-15", time: "08:00 AM - 10:00 AM", address: "Salgame Road " },
    { type: "Recyclables", day: "2024-11-16", time: "02:00 PM - 04:00 PM", address: " Salgame Road" },
    
    
    
    // Additional data can be added here
];

// Initialize FullCalendar
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: wasteCollectionData.map(data => ({
            title: `${data.type} (${data.time})`, // Display type and timing in the calendar
            start: data.day,
            backgroundColor: getColorByWasteType(data.type)
        }))
    });
    calendar.render();
});

// Helper function to assign colors based on waste type
function getColorByWasteType(type) {
    switch (type) {
        case "General Waste": return '#e57373';
        case "Recyclables": return '#81c784';
        case "Compost": return '#ffb74d';
        default: return '#64b5f6';
    }
}

// Populate the collection table with data including address
function populateCollectionTable(data) {
    const tableBody = document.getElementById('collection-data');
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.type}</td><td>${item.day}</td><td>${item.time}</td><td>${item.address}</td>`;
        tableBody.appendChild(row);
    });
}

// Filter by address
document.getElementById('filter-button').addEventListener('click', () => {
    const addressInput = document.getElementById('address').value.trim().toLowerCase();
    const filteredData = wasteCollectionData.filter(item => 
        item.address.toLowerCase().includes(addressInput)
    );
    populateCollectionTable(filteredData);
});

// Initial load of all data
populateCollectionTable(wasteCollectionData);
