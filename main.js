// set default view here
var map = L.map('map').setView([51.5, -0.09], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76]
  }
});

// set icon images here
var greenIcon = new LeafIcon({ iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png' });

// add icons to map here
L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map);
