ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.626929, 20037508.342789, 20037508.626929]);
var wms_layers = [];


        var lyr_StamenWatercolor_0 = new ol.layer.Tile({
            'title': 'Stamen Water color',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'
            })
        });
        

    var projection_Base_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_Base_1 = projection_Base_1.getExtent();
    var size_Base_1 = ol.extent.getWidth(projectionExtent_Base_1) / 256;
    var resolutions_Base_1 = new Array(14);
    var matrixIds_Base_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Base_1[z] = size_Base_1 / Math.pow(2, z);
        matrixIds_Base_1[z] = z;
    }


    
    var lyr_Base_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://api.mapbox.com/styles/v1/pprieto/ckdr8sgpv0qm519n0rmr2csuq/wmts?access_token=pk.eyJ1IjoicHByaWV0byIsImEiOiJja2RxNTVpYXkyOHV4MnJvZnJrMTQ0dW9lIn0.TBhCyxgV9qJFaSGcPVZ6hQ",
    attributions: ' ',
                                "layer": "ckdr8sgpv0qm519n0rmr2csuq",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Base_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Base_1),
                resolutions: resolutions_Base_1,
                matrixIds: matrixIds_Base_1
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Base",
                            opacity: 1.0,
                            
                            
                          });

        var lyr_Traficogoogle_2 = new ol.layer.Tile({
            'title': 'Trafico google',
            'type': 'base',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });
var format_mappoints_3 = new ol.format.GeoJSON();
var features_mappoints_3 = format_mappoints_3.readFeatures(json_mappoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mappoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mappoints_3.addFeatures(features_mappoints_3);
var lyr_mappoints_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mappoints_3, 
                style: style_mappoints_3,
                interactive: true,
    title: 'map points<br />\
    <img src="styles/legend/mappoints_3_0.png" /> 0<br />\
    <img src="styles/legend/mappoints_3_1.png" /> 911<br />\
    <img src="styles/legend/mappoints_3_2.png" /> 99<br />\
    <img src="styles/legend/mappoints_3_3.png" /> ANT<br />\
    <img src="styles/legend/mappoints_3_4.png" /> ANTENA<br />\
    <img src="styles/legend/mappoints_3_5.png" /> ATM<br />\
    <img src="styles/legend/mappoints_3_6.png" /> BANCO<br />\
    <img src="styles/legend/mappoints_3_7.png" /> BAR<br />\
    <img src="styles/legend/mappoints_3_8.png" /> BOMBEROS<br />\
    <img src="styles/legend/mappoints_3_9.png" /> CAFE<br />\
    <img src="styles/legend/mappoints_3_10.png" /> CANCHA DEPORTIVA<br />\
    <img src="styles/legend/mappoints_3_11.png" /> CAR WASH<br />\
    <img src="styles/legend/mappoints_3_12.png" /> CARCEL<br />\
    <img src="styles/legend/mappoints_3_13.png" /> CASA COMUNAL<br />\
    <img src="styles/legend/mappoints_3_14.png" /> CASCADA<br />\
    <img src="styles/legend/mappoints_3_15.png" /> CENTRO DE FORMACION<br />\
    <img src="styles/legend/mappoints_3_16.png" /> CENTRO DE REHABILITACION<br />\
    <img src="styles/legend/mappoints_3_17.png" /> CENTRO DE SALUD<br />\
    <img src="styles/legend/mappoints_3_18.png" /> CLINICA<br />\
    <img src="styles/legend/mappoints_3_19.png" /> COMERCIAL<br />\
    <img src="styles/legend/mappoints_3_20.png" /> COMIDA RAPIDA<br />\
    <img src="styles/legend/mappoints_3_21.png" /> DENTISTA<br />\
    <img src="styles/legend/mappoints_3_22.png" /> DOCTOR<br />\
    <img src="styles/legend/mappoints_3_23.png" /> ESCUELA<br />\
    <img src="styles/legend/mappoints_3_24.png" /> ESTACION CENTRAL<br />\
    <img src="styles/legend/mappoints_3_25.png" /> ESTACION DE BUS<br />\
    <img src="styles/legend/mappoints_3_26.png" /> FARMACIA<br />\
    <img src="styles/legend/mappoints_3_27.png" /> GASOLINERA<br />\
    <img src="styles/legend/mappoints_3_28.png" /> HELADERIA<br />\
    <img src="styles/legend/mappoints_3_29.png" /> HOTEL<br />\
    <img src="styles/legend/mappoints_3_30.png" /> IGLESIA<br />\
    <img src="styles/legend/mappoints_3_31.png" /> JUEGOS INFANTILES<br />\
    <img src="styles/legend/mappoints_3_32.png" /> KINDER<br />\
    <img src="styles/legend/mappoints_3_33.png" /> MERCADO<br />\
    <img src="styles/legend/mappoints_3_34.png" /> MONUMENTO<br />\
    <img src="styles/legend/mappoints_3_35.png" /> NIGHT CLUB<br />\
    <img src="styles/legend/mappoints_3_36.png" /> OFICINA TURISMO AZOGUES<br />\
    <img src="styles/legend/mappoints_3_37.png" /> OTROS amenity"=>"casino"<br />\
    <img src="styles/legend/mappoints_3_38.png" /> OTROS amenity"=>"community_centre","internet_access"=>"w<br />\
    <img src="styles/legend/mappoints_3_39.png" /> OTROS amenity"=>"drinking_water","name:en"=>"Uchupucun,<br />\
    <img src="styles/legend/mappoints_3_40.png" /> OTROS amenity"=>"hospital","name:en"=>"Specialty Medical<br />\
    <img src="styles/legend/mappoints_3_41.png" /> OTROS amenity"=>"parking","fee"=>"no","park_ride"=>"no",<br />\
    <img src="styles/legend/mappoints_3_42.png" /> OTROS amenity"=>"police"<br />\
    <img src="styles/legend/mappoints_3_43.png" /> OTROS amenity"=>"post_box","operator"=>"Correos del Ecua<br />\
    <img src="styles/legend/mappoints_3_44.png" /> OTROS amenity"=>"pub"<br />\
    <img src="styles/legend/mappoints_3_45.png" /> OTROS amenity"=>"public_bath","bath:type"=>"thermal","na<br />\
    <img src="styles/legend/mappoints_3_46.png" /> OTROS amenity"=>"recycling","name:es"=>"Recicladora Sage<br />\
    <img src="styles/legend/mappoints_3_47.png" /> OTROS amenity"=>"shelter","internet_access"=>"wlan"<br />\
    <img src="styles/legend/mappoints_3_48.png" /> OTROS amenity"=>"townhall"<br />\
    <img src="styles/legend/mappoints_3_49.png" /> OTROS amenity"=>"university","contact:phone"=>"(07) 3701<br />\
    <img src="styles/legend/mappoints_3_50.png" /> OTROS amenity"=>"veterinary","email"=>"mascota182@gmail.<br />\
    <img src="styles/legend/mappoints_3_51.png" /> PAPELERIA<br />\
    <img src="styles/legend/mappoints_3_52.png" /> PARQUE<br />\
    <img src="styles/legend/mappoints_3_53.png" /> PARQUEO TERMINAL TERRESTRE<br />\
    <img src="styles/legend/mappoints_3_54.png" /> POLICIA<br />\
    <img src="styles/legend/mappoints_3_55.png" /> POSTE DE LUZ U SIMILAR<br />\
    <img src="styles/legend/mappoints_3_56.png" /> QUINTA<br />\
    <img src="styles/legend/mappoints_3_57.png" /> Ref<br />\
    <img src="styles/legend/mappoints_3_58.png" /> REGISTRO CIVIL<br />\
    <img src="styles/legend/mappoints_3_59.png" /> RENTA DE CARROS<br />\
    <img src="styles/legend/mappoints_3_60.png" /> RESTAURANTE<br />\
    <img src="styles/legend/mappoints_3_61.png" /> RUINAS DEL COJITAMBO<br />\
    <img src="styles/legend/mappoints_3_62.png" /> S. TRANSITO bus_stop<br />\
    <img src="styles/legend/mappoints_3_63.png" /> S. TRANSITO crossing<br />\
    <img src="styles/legend/mappoints_3_64.png" /> S. TRANSITO emergency_access_point<br />\
    <img src="styles/legend/mappoints_3_65.png" /> S. TRANSITO motorway_junction<br />\
    <img src="styles/legend/mappoints_3_66.png" /> S. TRANSITO stop<br />\
    <img src="styles/legend/mappoints_3_67.png" /> S. TRANSITO traffic_signals<br />\
    <img src="styles/legend/mappoints_3_68.png" /> S. TRANSITO turning_circle<br />\
    <img src="styles/legend/mappoints_3_69.png" /> SENECYT<br />\
    <img src="styles/legend/mappoints_3_70.png" /> TAXI<br />\
    <img src="styles/legend/mappoints_3_71.png" /> TEATRO<br />\
    <img src="styles/legend/mappoints_3_72.png" /> TENENCIA POLITICA<br />\
    <img src="styles/legend/mappoints_3_73.png" /> TIENDA DE BARRIO<br />\
    <img src="styles/legend/mappoints_3_74.png" /> VELOCIDAD MAX 30<br />\
    <img src="styles/legend/mappoints_3_75.png" /> VELOCIDAD MAX 50<br />\
    <img src="styles/legend/mappoints_3_76.png" /> <br />'
        });

lyr_StamenWatercolor_0.setVisible(true);lyr_Base_1.setVisible(true);lyr_Traficogoogle_2.setVisible(true);lyr_mappoints_3.setVisible(true);
var layersList = [lyr_StamenWatercolor_0,lyr_Base_1,lyr_Traficogoogle_2,lyr_mappoints_3];
lyr_mappoints_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'place': 'place', 'other_tags': 'other_tags', 'DPA_CANTON': 'DPA_CANTON', 'desc': 'desc', });
lyr_mappoints_3.set('fieldImages', {'osm_id': 'Hidden', 'name': 'Hidden', 'highway': 'Hidden', 'place': 'Hidden', 'other_tags': 'Hidden', 'DPA_CANTON': 'Hidden', 'desc': 'TextEdit', });
lyr_mappoints_3.set('fieldLabels', {'desc': 'header label', });
lyr_mappoints_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});