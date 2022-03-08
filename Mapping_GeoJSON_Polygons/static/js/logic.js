// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{style}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY,
  style:'streets-v11'
});

// Dark Map
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{style}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY,
  style:'satellite-streets-v11'
});

// Create a base layer that holds both maps.
let baseMaps = {
  'Streets': streets,
  'Satellite Streets': satelliteStreets
};

// Create the map object with a center and zoom level.
// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets]
});
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/RebecaOsorio/Mapping-Earthquakes/main/torontoNeighborhoods.json";

// Create a style for the lines.
let myStyle = {
  color: 'blue',
  fillColor: '#ffffa1',
  weight: 1,
  fillOpacity:.2
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data 
    ,{style:myStyle,
      onEachFeature: function(feature,layer){
        layer.bindPopup("<h2>Neighborhood: "+feature.properties.AREA_NAME+"</h2>");}
    }
  ).addTo(map);
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}