'use strict'
var gCurrLng = 34.7671218
var gCurrLat = 32.080525
var gLocations;

// var gUserLocation = getCurrentPosition()
// start here

function createLocation(name, lng, lat) {
    gLocations.push({
        name: name,
        lng: lng,
        lat: lat
    })
}