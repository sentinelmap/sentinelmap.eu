var satAttr = 'Modified <a href="https://scihub.copernicus.eu/">Copernicus</a>' +
    ' Sentinel data 2016 by ' +
    '<a href="https://www.sentinelmap.eu">SentinelMap</a>' ;
var osmAttr = ' | © <a href="https://openstreetmap.org/copyright">OSM</a>' +
    ' contributors data by ' +
    '<a href="https://mapzen.com">Mapzen</a>' ;
var attr = satAttr + osmAttr ;

var layer = Tangram.leafletLayer({
    scene: {
	import: ['global.yaml'],
	global: {'labels_overlay': true,
		 'roads_overlay': true},
    },
    attribution: attr,
});
var scene = layer.scene;

var map = L.map('map' , {
    center: [ 48.92, 11.25],
    zoom: 6,
    maxZoom: 16,
    minZoom: 5,
    layers: [layer],
    zoomControl: false
});
L.control.zoom({position: 'bottomright'}).addTo(map);

var hash = new L.Hash(map);

var sidebar = L.control.sidebar('sidebar').addTo(map);

// DEBUG
/*
scene.subscribe({
    load: function (e) {
        console.log('scene loaded:', e);
    }
});

scene.subscribe({
    view_complete: function () {
	console.log('scene view complete');
    }
});
*/

