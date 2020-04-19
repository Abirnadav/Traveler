'use strict'
var gCurrLng
var gCurrLat
var gLocations;


function createLocation(name, lng, lat) {
    gLocations.push({
        name: name,
        lng: lng,
        lat: lat
    })
}

