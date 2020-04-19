'use strict'
var gCurrLng
var gCurrLat
var gLocations;
// start here

function createLocation(name, lng, lat) {
    gLocations.push({
        name: name,
        lng: lng,
        lat: lat
    })
}

var gCurrLng = 34.7671218
var gCurrLat = 32.080525

function moveto(location) {


    google.maps.event.addDomListener(outer, 'click', function() {
        map.setCenter(location)
    });
}
