import 'ol/ol.css';
import Feature from 'ol/Feature';
import Map from 'ol/Map';
import Point from 'ol/geom/Point';
import TileJSON from 'ol/source/TileJSON';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import {Icon, Style} from 'ol/style';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {fromLonLat} from 'ol/proj';


var slo = new ol.Feature({

  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-120.670375, 35.272506])
  ),  // Cordinates of New York's Town Hall
});
var sc = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-121.967669, 37.370946])
  ),  // Cordinates of New York's Town Hall
});
var merced = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-120.471435, 37.298784])
  ),  // Cordinates of New York's Town Hall
});

var vectorSource = new VectorSource({
  features: [slo, sc, merced]
});

var markerVectorLayer = new ol.layer.Vector({
  source: vectorSource,
});
var green = new ol.style.Style({
      image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({color: 'green'}),
        stroke: new ol.style.Stroke({
          color: [0,0,0], width: 2
        })
      })
    })
var orange = new ol.style.Style({
          image: new ol.style.Circle({
            radius: 10,
            fill: new ol.style.Fill({color: 'orange'}),
            stroke: new ol.style.Stroke({
              color: [0,0,0], width: 2
            })
          })
})
var purple = new ol.style.Style({
      image: new ol.style.Circle({
        radius: 14,
        fill: new ol.style.Fill({color: 'purple'}),
        stroke: new ol.style.Stroke({
          color: [0,0,0], width: 2
        })
      })
    })
var rasterLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
});
var map = new ol.Map({
  layers: [rasterLayer],
  target: 'map',
  controls: ol.control.defaults({
    attributionOptions: {
      collapsible: false
    }
  }),
  view: new ol.View({
    center: ol.proj.fromLonLat([-120.670375, 35.272506]),
    zoom: 5
  })
});
sc.setStyle(purple);
slo.setStyle(orange);
merced.setStyle(green);
map.addLayer(markerVectorLayer);
