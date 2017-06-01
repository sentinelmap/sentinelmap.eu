var satAttr = 'Modified <a href="https://scihub.copernicus.eu/">Copernicus</a>' +
    ' Sentinel data 2016 by ' +
    '<a href="https://www.sentinelmap.eu">SentinelMap</a>' ;

var osmAttr = ' | © <a href="https://openstreetmap.org/copyright">OSM</a>' +
    ' contributors data by ' +
    '<a href="https://mapzen.com">Mapzen</a>' ;

var Attr = satAttr + osmAttr ;

var scLayer = Tangram.leafletLayer({
    scene: 'scene@1.1.yaml',
    attribution: Attr,
});

var map = L.map('map' , {
    center: [ 48.92, 11.25],
    //center: [ 47.04, 8.44],
    zoom: 6,
    maxZoom: 16,
    minZoom: 5,
    layers: [scLayer],
    zoomControl: false
});

var baseLayers = {
    "Sentinel-2": scLayer,
};

L.control.zoom({position: 'topright'}).addTo(map);

var hash = new L.Hash(map);

var sidebar = L.control.sidebar('sidebar').addTo(map);

// DEBUG
/*
scLayer.scene.subscribe({
    load: function (e) {
        console.log('scene loaded:', e);
    }
});

scLayer.scene.subscribe({
    view_complete: function () {
	console.log('scene view complete');
    }
});
*/

