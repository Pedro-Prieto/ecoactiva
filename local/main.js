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

   { "type": "Feature", "properties": { "nombre": "Río Molinohuayco", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates": [ -78.8674599, -2.7170967 ] } },

   { "type": "Feature", "properties": { "nombre": "Río Nudpud", "tipo": "Ref" }, "geometry": { "type": "MultiPoint", "coordinates": [ [ -78.766667, -2.65 ] ] } },
   

   { "type": "Feature", "properties": { "nombre": "Río Nudpud", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.766667, -2.65 ] } },
    { "type": "Feature", "properties": { "nombre": "Río Ninfa", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8662583, -2.7174397 ] } },
    { "type": "Feature", "properties": { "nombre": "Río Pucay", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8498542, -2.785083 ] } },
    { "type": "Feature", "properties": { "nombre": "Río Púlpito", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.533333, -2.55 ] } },
    { "type": "Feature", "properties": { "nombre": "Quinualoma", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.6568332, -2.4867264 ] } },
    { "type": "Feature", "properties": { "nombre": "Quebrada San Luis", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8662583, -2.7165823 ] } },
    { "type": "Feature", "properties": { "nombre": "Comunidad Leg Abuga", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8341752, -2.7245632 ] } },
    { "type": "Feature", "properties": { "nombre": "Río Sucus", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.833333, -2.75 ] } },
    { "type": "Feature", "properties": { "nombre": "Río Shirincay", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.833333, -2.7513126 ] } },
    { "type": "Feature", "properties": { "nombre": "Allpacruz", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8239511, -2.7162585 ] } },
    { "type": "Feature", "properties": { "nombre": "Ayancay", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8861674, -2.8256945 ] } },
    { "type": "Feature", "properties": { "nombre": "Azogues", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8467191, -2.7380492 ] } },
    { "type": "Feature", "properties": { "nombre": "Bayas", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.806216, -2.7061277 ] } },
    { "type": "Feature", "properties": { "nombre": "Biblicay", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8191691, -2.7518113 ] } },
    { "type": "Feature", "properties": { "nombre": "Borrero", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.816667, -2.766667 ] } },
    { "type": "Feature", "properties": { "nombre": "Centro Parroquial Borrero", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8466924, -2.769157 ] } },
    { "type": "Feature", "properties": { "nombre": "Cachiloma", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8015903, -2.7354196 ] } },
    { "type": "Feature", "properties": { "nombre": "Cochahuaico", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8335976, -2.6134425 ] } },
    { "type": "Feature", "properties": { "nombre": "Tres Cruces", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8300628, -2.813365 ] } },
    { "type": "Feature", "properties": { "nombre": "Chavay Alto", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8603022, -2.7706916 ] } },
    { "type": "Feature", "properties": { "nombre": "Bolivia", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8594811, -2.7508105 ] } },
    { "type": "Feature", "properties": { "nombre": "Chandil", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8295726, -2.74347 ] } },
    { "type": "Feature", "properties": { "nombre": "ZhiZhiquin", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8597421, -2.7401693 ] } },
    { "type": "Feature", "properties": { "nombre": "Cojitambo", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8835105, -2.7589667 ] } },
    { "type": "Feature", "properties": { "nombre": "SAN NICOLAS", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.9029563, -2.7750042 ] } },
    { "type": "Feature", "properties": { "nombre": "Guarangos Chico", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8543538, -2.7875201 ] } },
    { "type": "Feature", "properties": { "nombre": "Opar Paccha", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8225344, -2.7221738 ] } },
    { "type": "Feature", "properties": { "nombre": "Jatumpamba", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8358581, -2.8115539 ] } },
    { "type": "Feature", "properties": { "nombre": "La Quinta", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.9, -2.833333 ] } },
    { "type": "Feature", "properties": { "nombre": "La Merced", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.65, -2.533333 ] } },
    { "type": "Feature", "properties": { "nombre": "Manzana Pata", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.6695765, -2.6403894 ] } },
    { "type": "Feature", "properties": { "nombre": "Javier Loyola", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8688613, -2.7990329 ] } },
    { "type": "Feature", "properties": { "nombre": "Aguilan", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8720422, -2.7001707 ] } },
    { "type": "Feature", "properties": { "nombre": "Leonán", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8156036, -2.7269749 ] } },
    { "type": "Feature", "properties": { "nombre": "Centro Parroquial Bayas", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8318632, -2.7311485 ] } },
    { "type": "Feature", "properties": { "nombre": "Paraíso", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.633333, -2.583333 ] } },
    { "type": "Feature", "properties": { "nombre": "Chacapamba", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8585799, -2.7254336 ] } },
    { "type": "Feature", "properties": { "nombre": "Mururco Llimpi", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8731711, -2.7316064 ] } },
    { "type": "Feature", "properties": { "nombre": "Purcay", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8446231, -2.7804759 ] } },
    { "type": "Feature", "properties": { "nombre": "Quisquis", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.816667, -2.7686847 ] } },
    { "type": "Feature", "properties": { "nombre": "Rivera", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.650608, -2.5776229 ] } },
    { "type": "Feature", "properties": { "nombre": "Capizhun", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8461913, -2.7830222 ] } },
    { "type": "Feature", "properties": { "nombre": "San Miguel de Porotos", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8452335, -2.7995121 ] } },
    { "type": "Feature", "properties": { "nombre": "San Pedro", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8512414, -2.7559115 ] } },
    { "type": "Feature", "properties": { "nombre": "SAN MIGUEL", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8829842, -2.7474877 ] } },
    { "type": "Feature", "properties": { "nombre": "San Jacinto", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8730577, -2.7559064 ] } },
    { "type": "Feature", "properties": { "nombre": "Uchupucún", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8422865, -2.7288394 ] } },
    { "type": "Feature", "properties": { "nombre": "Unión", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.883333, -2.833333 ] } },
    { "type": "Feature", "properties": { "nombre": "San Vicente", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.6672768, -2.5571413 ] } },
    { "type": "Feature", "properties": { "nombre": "Rumihurco", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8674356, -2.7866257 ] } },
    { "type": "Feature", "properties": { "nombre": "Surampa", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.9, -2.766667 ] } },
    { "type": "Feature", "properties": { "nombre": "Zhinzhún", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8454051, -2.8176516 ] } },
    { "type": "Feature", "properties": { "nombre": "Shorshán", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8389013, -2.7833651 ] } },
    { "type": "Feature", "properties": { "nombre": "Zhudum", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.6710519, -2.5737587 ] } },
    { "type": "Feature", "properties": { "nombre": "Sumbahuaico", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.9017094, -2.831086 ] } },
    { "type": "Feature", "properties": { "nombre": "San Francisco", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.65343, -2.5629612 ] } },
    { "type": "Feature", "properties": { "nombre": "Guillermo Dominguez Tapia", "tipo": "TEATRO" }, "geometry": { "type": "Point", "coordinates":  [ -78.8467955, -2.7387084 ] } },
    { "type": "Feature", "properties": { "nombre": "Hotel Rivera", "tipo": "HOTEL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8489858, -2.7407739 ] } },
    { "type": "Feature", "properties": { "nombre": "Hotel León", "tipo": "HOTEL" }, "geometry": { "type": "Point", "coordinates":  [ -78.850968, -2.7470604 ] } },
    { "type": "Feature", "properties": { "nombre": "Estación No.1 \"911\"", "tipo": "911" }, "geometry": { "type": "Point", "coordinates":  [ -78.8471592, -2.7517802 ] } },
    { "type": "Feature", "properties": { "nombre": "Farmacia Suiza 2", "tipo": "FARMACIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8472608, -2.7355703 ] } },
    { "type": "Feature", "properties": { "nombre": "Terminal Terrestre", "tipo": "S. TRANSITO bus_stop" }, "geometry": { "type": "Point", "coordinates":  [ -78.8477153, -2.7512153 ] } },
    { "type": "Feature", "properties": { "nombre": "Taxis", "tipo": "TAXI" }, "geometry": { "type": "Point", "coordinates":  [ -78.8475635, -2.7513047 ] } },
    { "type": "Feature", "properties": { "nombre": "Ccbs", "tipo": "COMERCIAL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8473193, -2.7395924 ] } },
    { "type": "Feature", "properties": { "nombre": "Aki", "tipo": "COMERCIAL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8465619, -2.7488702 ] } },
    { "type": "Feature", "properties": { "nombre": "Casa de la Cultura", "tipo": "TEATRO" }, "geometry": { "type": "Point", "coordinates":  [ -78.8466523, -2.7431031 ] } },
    { "type": "Feature", "properties": { "nombre": "Estación Central", "tipo": "ESTACION CENTRAL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8467237, -2.7351605 ] } },
    { "type": "Feature", "properties": { "nombre": "Macas", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.8566737, -2.7309234 ] } },
    { "type": "Feature", "properties": { "nombre": "Subcentro de salud uchupucun", "tipo": "OTROS amenity\"=>\"police\"" }, "geometry": { "type": "Point", "coordinates":  [ -78.8412886, -2.7269745 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia Católica Sagrado Corazón de Jesús", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8418295, -2.7292918 ] } },
    { "type": "Feature", "properties": { "nombre": "Primax", "tipo": "GASOLINERA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8508918, -2.7473835 ] } },
    { "type": "Feature", "properties": { "nombre": "Parque del Migrante", "tipo": "PARQUE" }, "geometry": { "type": "Point", "coordinates":  [ -78.8489005, -2.7491982 ] } },
    { "type": "Feature", "properties": { "nombre": "Carwash Coronel", "tipo": "CAR WASH" }, "geometry": { "type": "Point", "coordinates":  [ -78.8457838, -2.7563668 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "OTROS amenity\"=>\"post_box\",\"operator\"=>\"Correos de" }, "geometry": { "type": "Point", "coordinates":  [ -78.8464078, -2.7382113 ] } },
    { "type": "Feature", "properties": { "nombre": "Farmacia Suiza 1", "tipo": "FARMACIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8478366, -2.7368611 ] } },
    { "type": "Feature", "properties": { "nombre": "Emergencia", "tipo": "S. TRANSITO emergency_access_point" }, "geometry": { "type": "Point", "coordinates":  [ -78.8508313, -2.7377176 ] } },
    { "type": "Feature", "properties": { "nombre": "Parque Infantil Marco Romero Heredia", "tipo": "PARQUE" }, "geometry": { "type": "Point", "coordinates":  [ -78.8510599, -2.7357502 ] } },
    { "type": "Feature", "properties": { "nombre": "Centro de Rehabilitación Social", "tipo": "CARCEL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8539973, -2.735941 ] } },
    { "type": "Feature", "properties": { "nombre": "Mercado San Francisco", "tipo": "MERCADO" }, "geometry": { "type": "Point", "coordinates":  [ -78.844097, -2.7414609 ] } },
    { "type": "Feature", "properties": { "nombre": "Huangra", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.6108866, -2.470941 ] } },
    { "type": "Feature", "properties": { "nombre": "Zhall", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.6330839, -2.6185765 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.681297, -2.5322346 ] } },
    { "type": "Feature", "properties": { "nombre": "Cerro Suyala", "tipo": "CERRO" }, "geometry": { "type": "Point", "coordinates":  [ -78.7066901, -2.5620287 ] } },
    { "type": "Feature", "properties": { "nombre": "Biolán", "tipo": "Ref" }, "geometry": { "type": "Point", "coordinates":  [ -78.6553732, -2.6398925 ] } },
    { "type": "Feature", "properties": { "nombre": "Ms Prieto", "tipo": "COMERCIAL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8457684, -2.738921 ] } },
    { "type": "Feature", "properties": { "nombre": "Subestación de Tabacay", "tipo": "POSTE DE LUZ U SIMILAR" }, "geometry": { "type": "Point", "coordinates":  [ -78.8470214, -2.7217168 ] } },
    { "type": "Feature", "properties": { "nombre": "Tienda Artesanal Makiruray", "tipo": "COMERCIAL" }, "geometry": { "type": "Point", "coordinates":  [ -78.846255, -2.7398197 ] } },
    { "type": "Feature", "properties": { "nombre": "Colegio LENIN AVILA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8329702, -2.7323302 ] } },
    { "type": "Feature", "properties": { "nombre": "Automotriz TORRES", "tipo": "COMERCIAL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8447498, -2.7476313 ] } },
    { "type": "Feature", "properties": { "nombre": "Automotriz JR", "tipo": "COMERCIAL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8464884, -2.749721 ] } },
    { "type": "Feature", "properties": { "nombre": "Terminal Terrestre", "tipo": "ESTACION DE BUS" }, "geometry": { "type": "Point", "coordinates":  [ -78.8475113, -2.7509367 ] } },
    { "type": "Feature", "properties": { "nombre": "Esc. QUITO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8319827, -2.7313667 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia Católica Inmaculado Corazón de María de Ba", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8326659, -2.7303962 ] } },
    { "type": "Feature", "properties": { "nombre": "Central El Descanso", "tipo": "POSTE DE LUZ U SIMILAR" }, "geometry": { "type": "Point", "coordinates":  [ -78.8756086, -2.8382415 ] } },
    { "type": "Feature", "properties": { "nombre": "Centro Comercial Gisselle", "tipo": "COMERCIAL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8478917, -2.7415282 ] } },
    { "type": "Feature", "properties": { "nombre": "T Movil", "tipo": "COMERCIAL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8483959, -2.7391598 ] } },
    { "type": "Feature", "properties": { "nombre": "UTPL", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8458888, -2.7372296 ] } },
    { "type": "Feature", "properties": { "nombre": "FERRETERIA  MATELCO", "tipo": "COMERCIAL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8483557, -2.743897 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.8473639, -2.7288366 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.8492153, -2.7303458 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO crossing" }, "geometry": { "type": "Point", "coordinates":  [ -78.8582631, -2.7304956 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.848696, -2.7312753 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.8365418, -2.7325302 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "99" }, "geometry": { "type": "Point", "coordinates":  [ -78.8480369, -2.7356524 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO traffic_signals" }, "geometry": { "type": "Point", "coordinates":  [ -78.847485, -2.7357677 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO traffic_signals" }, "geometry": { "type": "Point", "coordinates":  [ -78.8521503, -2.7373481 ] } },
    { "type": "Feature", "properties": { "nombre": "Hostal peleusi", "tipo": "HOTEL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8469436, -2.7378335 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.8515233, -2.7388289 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO traffic_signals" }, "geometry": { "type": "Point", "coordinates":  [ -78.8481967, -2.7401551 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO traffic_signals" }, "geometry": { "type": "Point", "coordinates":  [ -78.8524551, -2.7403064 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO traffic_signals" }, "geometry": { "type": "Point", "coordinates":  [ -78.8490681, -2.7403765 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO traffic_signals" }, "geometry": { "type": "Point", "coordinates":  [ -78.8480605, -2.7406862 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO traffic_signals" }, "geometry": { "type": "Point", "coordinates":  [ -78.848882, -2.740927 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.8515127, -2.7411877 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO traffic_signals" }, "geometry": { "type": "Point", "coordinates":  [ -78.8465956, -2.7434324 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO traffic_signals" }, "geometry": { "type": "Point", "coordinates":  [ -78.8479485, -2.7437941 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO traffic_signals" }, "geometry": { "type": "Point", "coordinates":  [ -78.8502284, -2.7444965 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO traffic_signals" }, "geometry": { "type": "Point", "coordinates":  [ -78.8476647, -2.7449327 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.8528487, -2.7480456 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.8474298, -2.7546546 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.8476601, -2.7559146 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.8406254, -2.7713871 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.84284, -2.7720823 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO crossing" }, "geometry": { "type": "Point", "coordinates":  [ -78.849496, -2.7752071 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO traffic_signals" }, "geometry": { "type": "Point", "coordinates":  [ -78.8682742, -2.7985934 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO ARTESANAL GABRIEL SANCHEZ LUNA", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8838514, -2.75865 ] } },
    { "type": "Feature", "properties": { "nombre": "Centro Ocupacional Ayancay", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.9066374, -2.8144975 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO OCUPACIONAL MURURCO", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8737554, -2.7371485 ] } },
    { "type": "Feature", "properties": { "nombre": "COLEGIO DR. GABRIEL SANCHEZ LUNA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8845434, -2.7536098 ] } },
    { "type": "Feature", "properties": { "nombre": "Colegio Nacional Mixto Javier Loyola", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8723181, -2.7966928 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA 8 DE OCTUBRE", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8354897, -2.8169343 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA 9 DE OCTUBRE", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8700547, -2.7318239 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA ANGEL ENRIQUE MONTALVO - JARDIN GERMAN VEL", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8842374, -2.7599396 ] } },
    { "type": "Feature", "properties": { "nombre": "Escuela Argentina", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8684642, -2.7985988 ] } },
    { "type": "Feature", "properties": { "nombre": "Escuela Brasil Mesaloma", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.9035172, -2.8057928 ] } },
    { "type": "Feature", "properties": { "nombre": "Escuela Cacique Tenemaza", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8998576, -2.8314634 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA CAÑARI", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8500359, -2.8197133 ] } },
    { "type": "Feature", "properties": { "nombre": "Escuela Coronel Benigno Rivera", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.9069738, -2.7907839 ] } },
    { "type": "Feature", "properties": { "nombre": "Escuela Daniel Cordova Toral", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8824227, -2.8191862 ] } },
    { "type": "Feature", "properties": { "nombre": "Escuela Daniel Cordova Toral", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8827177, -2.8195777 ] } },
    { "type": "Feature", "properties": { "nombre": "Escuela Daniel Cordova Toral", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8806711, -2.8211602 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA DR. ANTONIO ANTE", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8366389, -2.7859405 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA EULOGIO ASTUDILLO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8758199, -2.7361949 ] } },
    { "type": "Feature", "properties": { "nombre": "Escuela Fray Vacas Galindo", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.9078772, -2.8149003 ] } },
    { "type": "Feature", "properties": { "nombre": "Escuela Leopoldo Chavez", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8605371, -2.7990623 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA LEOPOLDO CORDERO ALVARADO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8730635, -2.7570023 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA LUIS FERNANDO CASTANIER CRESPO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8657839, -2.7869035 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA LUIS FERNANDO CASTANIER CRESPO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.865658, -2.7869247 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA LUIS FERNANDO CASTANIER CRESPO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8655181, -2.7872109 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA MARIA CURIE", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8837121, -2.7579551 ] } },
    { "type": "Feature", "properties": { "nombre": "Escuela Mexico", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8706708, -2.8026826 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA PEDRO FERMIN CEVALLOS", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8481256, -2.7940863 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA PEDRO FERMIN CEVALLOS", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8455703, -2.7993966 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA PEDRO MONCAYO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8989156, -2.751593 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA SAMIRA BAYAS", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.90463, -2.7742969 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA SAMIRA BAYAS", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.9046339, -2.7744038 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA SAMIRA BAYAS", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.9051031, -2.7748339 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA UNIDOCENTE LUIS AURELIO OCHOA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8854554, -2.7779336 ] } },
    { "type": "Feature", "properties": { "nombre": "Escuela Vicente Cabrera Vega", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8895477, -2.8029191 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA VICENTE RAMON ROCA - JARDIN AIDA GOMEZCOEL", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8362803, -2.8114892 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA VICTORIA IZQUIERDO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8668133, -2.7753394 ] } },
    { "type": "Feature", "properties": { "nombre": "JARDIN ELODIA SAQUICELA", "tipo": "KINDER" }, "geometry": { "type": "Point", "coordinates":  [ -78.8760362, -2.7363729 ] } },
    { "type": "Feature", "properties": { "nombre": "JARDIN MANUELITA CAÑIZARES", "tipo": "KINDER" }, "geometry": { "type": "Point", "coordinates":  [ -78.871369, -2.8005493 ] } },
    { "type": "Feature", "properties": { "nombre": "SENESCYT", "tipo": "SENECYT" }, "geometry": { "type": "Point", "coordinates":  [ -78.845759, -2.7518069 ] } },
    { "type": "Feature", "properties": { "nombre": "CEMPROS", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8460273, -2.7438701 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO ALFABETIZACION SIN NOMBRE", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8525431, -2.7456887 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO DE ALFABETIZACION CARCEL DE AZOGUES", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8536562, -2.736204 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO DE ALFABETIZACION COMEDOR MUNICIPAL", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8464107, -2.74424 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO DE CULTURA MUNICIPAL", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8518004, -2.7358317 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO DE DIAGNOSTICO PSICOPEDAGOGICO DEL CAÑAR", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8451277, -2.753133 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO DE REABILITACION FISICA Y MENTAL MAGDALENA", "tipo": "CENTRO DE REHABILITACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8459828, -2.7460651 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO EDUCACION POPULAR ESPECIAL AZOGUES", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8453416, -2.7530307 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO EDUCATIVO ESPAÑOL", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8461244, -2.7653724 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO OCUPACIONAL ABEJITAS", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8528805, -2.7586284 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO OCUPACIONAL MUJERES TRABAJADORAS DE GUAPAN", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8508088, -2.7137263 ] } },
    { "type": "Feature", "properties": { "nombre": "CENTRO OCUPACIONAL NIÑO JESUS", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8411782, -2.7267905 ] } },
    { "type": "Feature", "properties": { "nombre": "CESAR CORDERO MOSCOSO - HUMBERTO VICUÑA NOVILLO", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8482376, -2.751991 ] } },
    { "type": "Feature", "properties": { "nombre": "COLEGIO LAICO INTERNACIONAL", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8525002, -2.7558588 ] } },
    { "type": "Feature", "properties": { "nombre": "COLEGIO LOS CAÑARIS", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8263268, -2.7464248 ] } },
    { "type": "Feature", "properties": { "nombre": "COLEGIO NOCTURNO GUAPAN", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8501073, -2.7140383 ] } },
    { "type": "Feature", "properties": { "nombre": "COLEGIO VICENTE CABRERA VEGA", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8450415, -2.7581088 ] } },
    { "type": "Feature", "properties": { "nombre": "COMUNIDAD FRANCISCANA DE AZOGUES", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8433596, -2.7413634 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA 27 DE FEBRERO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8275658, -2.7663866 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA 4 DE NOVIEMBRE", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8399102, -2.7367052 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA 9 DE OCTUBRE", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8699258, -2.7314912 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA ABDON CALDERON", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8412751, -2.7286716 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA ADOLFO PALOMEQUE", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8578587, -2.7501497 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA AMBATO Y JARDIN MERCEDES MACHADO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8722821, -2.7028276 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA ANTONIO NEUMANE", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8197027, -2.7518297 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA BARTOLOME SERRAMO CANCHA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8466357, -2.7178213 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA BARTOLOME SERRANO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8465413, -2.7177212 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA BARTOLOME SERRANO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8463174, -2.7177846 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA BARTOLOME SERRANO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8466658, -2.7179299 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA CARLOS SAMUEL ABAD", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8542628, -2.7426827 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA SAN FRANCISCO DE PELEUSI DE AZOGUES", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8475037, -2.7441054 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA CLEMENTINA ESPINOZA CORDERO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8014611, -2.7399777 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA DOLORES RODAS DE PESANTEZ", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8149259, -2.7280634 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA DR. GONZALO S. CORDOVA.", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8628438, -2.7105021 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA LUIS FELIPE BORJA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8484767, -2.7403846 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA EZEQUIEL SALINAS PALACIOS", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8530996, -2.7248325 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA FRANCISCO CRESPO TRELLES", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8195345, -2.6647456 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA FRANCISCO MAYANCELA JAIGUA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8046477, -2.6538189 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA GALO PLAZA LAZO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8555311, -2.783768 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA GASTON CASTAÑIER", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.7889296, -2.6667644 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA GUILLERMINA ORDOÑEZ", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8023624, -2.673489 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA HONORIO DOMINGUEZ CORDERO - JARDIN ISABEL", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8452554, -2.7067279 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA HONORIO DOMINGUEZ CORDERO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8450153, -2.70652 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA JOSE ANTONIO AVILA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8418536, -2.6670732 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA JUANA DE IBARBOROU", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.824545, -2.7438835 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA LEONIDAS GARCÍA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8445282, -2.7698054 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA MANUEL SEGUNDO ORMAZA BRIONES", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8066621, -2.702257 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA MARCELO ESPINOZA CALLE", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8198823, -2.6276547 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA MARCIAL GUILLEN LEON", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.825018, -2.7468516 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA MARISCAL SUCRE", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8523826, -2.7575171 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA ORIENTE ECUATORIANO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8590413, -2.7183394 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA OSWALDO IDROVO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8326495, -2.6863255 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA REINO DE HOLANDA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.7968612, -2.7534372 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA UNIDAD EDUCATIVA REPUBLICA DEL ECUADOR", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8621027, -2.7048721 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA VICTOR URGILES ALVARADO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8133223, -2.6339546 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA VIRGILIO URGILES MIRANDA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8535213, -2.709404 ] } },
    { "type": "Feature", "properties": { "nombre": "FUNDACION EDUCATIVA CESAR CORDERO MOSCOSO", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8480849, -2.7548226 ] } },
    { "type": "Feature", "properties": { "nombre": "INSTITUTO DE EDUCACION ESPECIAL", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8546828, -2.7323234 ] } },
    { "type": "Feature", "properties": { "nombre": "INSTITUTO LUS CORDERO CRESPO", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8467896, -2.734555 ] } },
    { "type": "Feature", "properties": { "nombre": "INSTITUTO PEDAGOGICO EXPERIMENTAL LUIS CORDERO", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8481654, -2.734557 ] } },
    { "type": "Feature", "properties": { "nombre": "INSTITUTO TECNICO SUPERIOR LUIS ROGELIO GONZALEZ", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.847344, -2.7417739 ] } },
    { "type": "Feature", "properties": { "nombre": "JARDIN ALONSO TORRES", "tipo": "KINDER" }, "geometry": { "type": "Point", "coordinates":  [ -78.846419, -2.7444647 ] } },
    { "type": "Feature", "properties": { "nombre": "JARDIN CLORINDA LOPEZ", "tipo": "KINDER" }, "geometry": { "type": "Point", "coordinates":  [ -78.8554456, -2.7182397 ] } },
    { "type": "Feature", "properties": { "nombre": "JARDIN MANUELITA SAENZ", "tipo": "KINDER" }, "geometry": { "type": "Point", "coordinates":  [ -78.831536, -2.7306798 ] } },
    { "type": "Feature", "properties": { "nombre": "JARDIN MARIA ESTHER IGLESIAS", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8165611, -2.7365261 ] } },
    { "type": "Feature", "properties": { "nombre": "JARDIN MARIA MONTESSORI", "tipo": "KINDER" }, "geometry": { "type": "Point", "coordinates":  [ -78.8453744, -2.7372839 ] } },
    { "type": "Feature", "properties": { "nombre": "JARDIN MIGUEL TOLEDO", "tipo": "KINDER" }, "geometry": { "type": "Point", "coordinates":  [ -78.862717, -2.7128534 ] } },
    { "type": "Feature", "properties": { "nombre": "JARDIN RAFAEL TAPIA", "tipo": "KINDER" }, "geometry": { "type": "Point", "coordinates":  [ -78.8400117, -2.7271648 ] } },
    { "type": "Feature", "properties": { "nombre": "UNIDAD ARTESANAL GRICELDA QUEZADA", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8462484, -2.7429506 ] } },
    { "type": "Feature", "properties": { "nombre": "UNIDAD ARTESANAL LUIS F. CASTANIER", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8484785, -2.7468855 ] } },
    { "type": "Feature", "properties": { "nombre": "UNIDAD EDUCATIVA A DISTANCIA DEL CAÑAR", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8559747, -2.7441558 ] } },
    { "type": "Feature", "properties": { "nombre": "UNIDAD EDUCATIVA ALEMAN", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8519738, -2.7332177 ] } },
    { "type": "Feature", "properties": { "nombre": "UNIDAD EDUCATIVA UNE", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8502522, -2.7460262 ] } },
    { "type": "Feature", "properties": { "nombre": "COLEGIO ANDRES GURITAVE", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.6955266, -2.6386232 ] } },
    { "type": "Feature", "properties": { "nombre": "COLEGIO MANUEL SEGUNDO ORMAZA BRIONES", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.6812377, -2.6257485 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA 2 DE AGOSTO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6360811, -2.6157684 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA 29 DE OCTUBRE", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.5632256, -2.5369235 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA BELISARIO QUEVEDO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6836175, -2.6207875 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA BUENOS AIRES", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6337629, -2.5702649 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA CARLOS ANTONIO MATA CORONEL", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6551616, -2.6397225 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA CARLOS ZAMBRANO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6393253, -2.5734686 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA EDUARDO SALUSTIO LOPEZ GUERRA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6533877, -2.5650937 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA EMILIO REYES HEREDIA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.665866, -2.5484073 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA GIL RAMIREZ SACOTO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.764392, -2.6708555 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA GUAYACANES", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.553078, -2.542367 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA HERMELINDA BECERRA PESANTEZ", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6206764, -2.5823594 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA IBELIA SERRANO TADAY", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.7154224, -2.6495101 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA JOSE MARIA NAVAEZ CALLE", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6794231, -2.641606 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA LA INMACULADA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6812397, -2.5349979 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA MIGUEL DE SAMANIEGO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6404373, -2.6437292 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA PANAMA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6081246, -2.5803875 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA PRIMERO DE MAYO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6696094, -2.640888 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA SAN ISIDRO", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.5706492, -2.5028779 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA SIMON RODRIGUEZ", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.7106749, -2.5955078 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA TIMOLEON BUSTOS", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6698011, -2.5741893 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA TOMEBAMBA", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6703658, -2.5531357 ] } },
    { "type": "Feature", "properties": { "nombre": "ESCUELA VICENTE ROCAFUERTE - JARDIN ZOBEIDA LOPEZ", "tipo": "ESCUELA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6934847, -2.639193 ] } },
    { "type": "Feature", "properties": { "nombre": "UNIDAD EDUCATIVA A DISTANCIA EXTENSION ZHALL", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.6325309, -2.6174253 ] } },
    { "type": "Feature", "properties": { "nombre": "TAXI", "tipo": "TAXI" }, "geometry": { "type": "Point", "coordinates":  [ -78.8485869, -2.7428113 ] } },
    { "type": "Feature", "properties": { "nombre": "Cajero BANRED", "tipo": "ATM" }, "geometry": { "type": "Point", "coordinates":  [ -78.8466262, -2.7364411 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia Biblica Centro Cristiano", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8479947, -2.7431433 ] } },
    { "type": "Feature", "properties": { "nombre": "CLINICA HUMANITARIA SAN JOSE", "tipo": "CLINICA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8511093, -2.7372542 ] } },
    { "type": "Feature", "properties": { "nombre": "CESACEL", "tipo": "OTROS amenity\"=>\"townhall\"" }, "geometry": { "type": "Point", "coordinates":  [ -78.8482237, -2.7381364 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia Católica de Macas - Javier Loyola", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8679132, -2.7735819 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia Católica de San Jacinto", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8733146, -2.7574389 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia de Pizhumaza", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8895416, -2.7457001 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "POLICIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8688906, -2.7983775 ] } },
    { "type": "Feature", "properties": { "nombre": "Love Sexy Lenceria", "tipo": "COMERCIAL" }, "geometry": { "type": "Point", "coordinates":  [ -78.84784, -2.7377951 ] } },
    { "type": "Feature", "properties": { "nombre": "CANCHA DEPORTIVA", "tipo": "CANCHA DEPORTIVA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8573866, -2.7707542 ] } },
    { "type": "Feature", "properties": { "nombre": "CANCHAS DE TENIS", "tipo": "CANCHA DEPORTIVA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8506039, -2.7740148 ] } },
    { "type": "Feature", "properties": { "nombre": "IGLESIA DEL DIVINO NIÑO DE CHARASOL", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8490914, -2.7696059 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.8533161, -2.7494369 ] } },
    { "type": "Feature", "properties": { "nombre": null, "tipo": "S. TRANSITO turning_circle" }, "geometry": { "type": "Point", "coordinates":  [ -78.8534104, -2.7499016 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia Católica de San Judas Tadeo - Javier Loyol", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8675755, -2.7980057 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia Católica San José de Jatumpamba", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8354243, -2.8117255 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia Católica de San Miguel de Porotos", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8452274, -2.7998932 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia Católica San Pedro de Guarangos Chico - El", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8556783, -2.78439 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia Católica de San Pedro", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8527756, -2.7575694 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia Católica de Chavay", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8570681, -2.77779 ] } },
    { "type": "Feature", "properties": { "nombre": "Quinta", "tipo": "QUINTA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8875794, -2.8202756 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia de Los Milagros El Tablon", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8907008, -2.8010801 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia El Cisne", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8856378, -2.7993673 ] } },
    { "type": "Feature", "properties": { "nombre": "Gasolinera Neoga", "tipo": "GASOLINERA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8453337, -2.7523618 ] } },
    { "type": "Feature", "properties": { "nombre": "GASOLINERA ABAD", "tipo": "GASOLINERA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8479344, -2.7441162 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia de Manzana Pata", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6690991, -2.6403991 ] } },
    { "type": "Feature", "properties": { "nombre": "La Sazón de la Abuela", "tipo": "RESTAURANTE" }, "geometry": { "type": "Point", "coordinates":  [ -78.8172982, -2.7375587 ] } },
    { "type": "Feature", "properties": { "nombre": "Imprenta ARTES GRÁFICAS;CENTRO ARTESANAL CORDOVA", "tipo": "CENTRO DE FORMACION" }, "geometry": { "type": "Point", "coordinates":  [ -78.8484348, -2.7386832 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia de San Pedro", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.6681563, -2.6296629 ] } },
    { "type": "Feature", "properties": { "nombre": "IGLESIA BAUTISTA LA GRAN COMISION", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8435222, -2.7364929 ] } },
    { "type": "Feature", "properties": { "nombre": "Cooperativa Cacpe Biblian", "tipo": "BANCO" }, "geometry": { "type": "Point", "coordinates":  [ -78.8464728, -2.7362928 ] } },
    { "type": "Feature", "properties": { "nombre": "Cajero Cacpe Bblian", "tipo": "ATM" }, "geometry": { "type": "Point", "coordinates":  [ -78.8490177, -2.7406167 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia de Zhapacal", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8371675, -2.7571515 ] } },
    { "type": "Feature", "properties": { "nombre": "Iglesia Cruz Blanca", "tipo": "IGLESIA" }, "geometry": { "type": "Point", "coordinates":  [ -78.8285229, -2.7507139 ] } },
    { "type": "Feature", "properties": { "nombre": "Casa Comunal de Pucagua", "tipo": "CASA COMUNAL" }, "geometry": { "type": "Point", "coordinates":  [ -78.8114312, -2.7434013 ] } },



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

