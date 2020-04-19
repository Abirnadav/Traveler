'use strict'
<<<<<<< HEAD
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

=======
var gCurrLng = 34.7671218
var gCurrLat = 32.080525

function moveto(location) {


    google.maps.event.addDomListener(outer, 'click', function() {
        map.setCenter(location)
    });
}
>>>>>>> f5e83df84e7a33624d3f3f42840203bd65a75efa
