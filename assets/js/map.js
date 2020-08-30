
    mapboxgl.accessToken = 'pk.eyJ1IjoicHByaWV0byIsImEiOiJja2RxNTVpYXkyOHV4MnJvZnJrMTQ0dW9lIn0.TBhCyxgV9qJFaSGcPVZ6hQ';
var  map
function mapinit(){


   map = new mapboxgl.Map({
  container: 'map',
  //style: 'mapbox://styles/pprieto/ckdr8sgpv0qm519n0rmr2csuq'
  style: 'mapbox://styles/mapbox/streets-v11',
    //center: [-96, 37.8], // starting position -2.7048371,
    //zoom: 3 // starting zoom

  });
//

  // Add geolocate control to the map.
  const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
  });
  
  ////map.addControl(geolocate);
  // Set an event listener that fires
  // when a geolocate event occurs.
  geolocate.on('geolocate', function (ev) {
    console.log(ev.coords); // you'll get the coordinates
  });

//
/* adicional
d3.select(.mapboxgl-ctrl-logo).remove()



//<a class="mapboxgl-ctrl-logo" target="_blank" rel="noopener nofollow" href="https://www.mapbox.com/" aria-label="Mapbox logo"></a>
*/

  feedData() }


  function feedData() {
      fetch('https://azogis-473d2.firebaseio.com/feed.json') 
      .then((response) => {
          return response.json()
      })
      .then((data)=>{
          var ids = Object.keys(data)

          for (i=0;i<ids.length;i++){
              // create the popup
var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    '<p> Status : ' + data[ids[i]].status + ' </p> <img src=' + data[ids[i]].image + ' /> <p> Email : ' + data[ids[i]].email + ' </p>'
    );
     
    // create DOM element for the marker
    var el = document.createElement('div');
    el.id = 'marker';
     
    // create the marker
    new mapboxgl.Marker()
    .setLngLat([data[ids[i]].location.longitude, data[ids[i]].location.latitude])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);
          }
      })
  }