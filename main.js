// set default view here
var map = L.map('map').setView([0, 0], 1);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var LeafIcon = L.Icon.extend({
  options: {
    //shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    iconSize: [38, 95],
    //shadowSize: [50, 64],
    iconAnchor: [22, 94],
    //shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  }
});

// set icon images here
var greenIcon = new LeafIcon({ iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png' });

// add icons to map here
// L.marker([45.82087222, -71.26870833], { icon: greenIcon }).addTo(map);


L.marker([45.82087222, -71.26870833]).addTo(map);
L.marker([48.47663333, -78.91451667]).addTo(map);
L.marker([48.26614722, -78.54778611]).addTo(map);
L.marker([47.67407778, -81.79919444]).addTo(map);
L.marker([14.37556389, 0.079280556]).addTo(map);
L.marker([5.077191667, -55.15584167]).addTo(map);
L.marker([48.257975, -78.50706111]).addTo(map);
