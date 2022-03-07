// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -92.3790], 4);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
    [37.6246436,-122.3983859],
    [19.4360812,-99.074097],
    [30.1974757,-97.6685416],
    [43.6740598,-79.6315379],
    [40.6413153,-73.780327]
  ];

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    weight: 2,
    opacity: 1,
    color: 'blue',
    dashArray: '4',
    fillOpacity: 0.5,
    fillColor: '#666666'
  }).addTo(map);
 
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{style}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
    style:'light-v10'
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);