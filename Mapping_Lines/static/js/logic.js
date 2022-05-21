// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.68698, -97.33558], 4);

// Coordinates for each point to be used in the polyline.
let line1 = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line1, {
    color: "yellow"
}).addTo(map);

// Coordinates for each point to be used in the polyline.
let line2 = [
    [33.9416, -118.4085],
    [30.1974292, -97.6663058],
    [25.793333, -80.29056],
    [43.676666, -79.630554],
    [40.641766, -73.780968]
];

// Create a polyline using the line coordinates and make the line blue dashed.
L.polyline(line2, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: "30 10"
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);