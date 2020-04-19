'use strict'

// Initialize and add the map
function onClick(data) {
    createLocation(name, lng, lat)
}

function initMap() {
    // Curr Location
    var telaviv = {
        lat: gCurrLat,
        lng: gCurrLng
    };
    // The map, centered at 
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: telaviv
        });
    // The marker, 
    var marker = new google.maps.Marker({
        position: telaviv,
        map: map
    });
}




var gLocation

function getLocation() {
    if (navigator.geolocation) {
        gLocation = navigator.geolocation.getCurrentPosition(moveTo);
    } else {
        console.log('Not supported!')
    }
    return gLocation
}




function moveTo(postion) {



}


console.log('location ', gLocation)