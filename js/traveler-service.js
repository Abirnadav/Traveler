'use strict'
var gCurrLng = 34.7671218
var gCurrLat = 32.080525

function moveto(location) {


    google.maps.event.addDomListener(outer, 'click', function() {
        map.setCenter(location)
    });
}