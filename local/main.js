// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

mapboxgl.accessToken = 'pk.eyJ1IjoicHByaWV0byIsImEiOiJja2RxNTVpYXkyOHV4MnJvZnJrMTQ0dW9lIn0.TBhCyxgV9qJFaSGcPVZ6hQ';

// This adds the map
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/pprieto/ckdr8sgpv0qm519n0rmr2csuq',
  // initial position in [long, lat] format and zoom
  center: [-78.84, -2.74],
  zoom: 9
});

var stores = {
  "type": "FeatureCollection",
  "features": [

    { "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -78.8165212, -2.75175
      ]
    },
    "properties": {
      "nombre": "Río Bibilcay", //
      "contacto": "(202) 234-7336", //
      "celular": "2022347336",
      "tipo": "Ref", //
      "pais": "Ecuador",
      "direccion": "at 15th St NW",
      "observaciones": "20005",
      "provincia": "Cañar"
    }
   },

   { "type": "Feature", "properties": { "nombre": "Río Guarango", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates": [-78.85, -2.8011667] } }, // tipo 2

   { "type": "Feature", "geometry": { "type": "Point", "coordinates": [ -78.8516042, -2.8 ] }, "properties": { "nombre": "Río Guarango Chico", "tipo": "Rio" } }, // tipo 3

    /*{
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -77.043959498405,
          38.903883387232
        ]
      },
      "properties": {
        "contacto": "(202) 331-3355",
        "celular": "2023313355",
        "tipo": "1901 L St. NW",
        "nombre": "Azogues",
        "pais": "Ecuador",
        "direccion": "at 19th St",
        "observaciones": "20036",
        "provincia": "Cañar"
      }
    }*/
  ]
  };
// This adds the data to the map
map.on('load', function (e) {
  // This is where your '.addLayer()' used to be, instead add only the source without styling a layer
  map.addSource("places", {
    "type": "geojson",
    "data": stores
  });
  // Initialize the list
  buildLocationList(stores);

});

// This is where your interactions with the symbol layer used to be
// Now you have interactions with DOM markers instead
stores.features.forEach(function(marker, i) {
  // Create an img element for the marker
  var el = document.createElement('div');
  el.id = "marker-" + i;
  el.className = 'marker';
  el.style.left='-28px';
  el.style.top='-46px';
  // Add markers to the map at all points
  new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);

  el.addEventListener('click', function(e){
      // 1. Fly to the point
      flyToStore(marker);

      // 2. Close all other popups and display popup for clicked store
      createPopUp(marker);

      // 3. Highlight listing in sidebar (and remove highlight for all other listings)
      var activeItem = document.getElementsByClassName('active');

      e.stopPropagation();
      if (activeItem[0]) {
         activeItem[0].classList.remove('active');
      }

      var listing = document.getElementById('listing-' + i);
      listing.classList.add('active');

  });
});


function flyToStore(currentFeature) {
  map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
}

function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();


  var popup = new mapboxgl.Popup({closeOnClick: false})
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<h3>'+ currentFeature.properties.tipo +'</h3>' +
          '<h4>' + currentFeature.properties.nombre +'</h4>') /*+ currentFeature.properties.tipo + */
        .addTo(map);
}


function buildLocationList(data) {
  for (i = 0; i < data.features.length; i++) {
    var currentFeature = data.features[i];
    var prop = currentFeature.properties;

    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = "listing-" + i;

    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.dataPosition = i;
    link.innerHTML = prop.tipo;

    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.nombre;
    details.className = 'details'
    if (prop.celular) {
      details.innerHTML += ' &middot; ' + prop.contacto;
    }



    link.addEventListener('click', function(e){
      // Update the currentFeature to the store associated with the clicked link
      var clickedListing = data.features[this.dataPosition];

      // 1. Fly to the point
      flyToStore(clickedListing);

      // 2. Close all other popups and display popup for clicked store
      createPopUp(clickedListing);

      // 3. Highlight listing in sidebar (and remove highlight for all other listings)
      var activeItem = document.getElementsByClassName('active');

      if (activeItem[0]) {
         activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');




    });
  }
}
