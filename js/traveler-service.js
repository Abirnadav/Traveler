'use strict'
var gCurrLng = 34.7671218
var gCurrLat = 32.080525
var gLocations = [];
var gUserLocation


function createLocation(name, lng, lat) {
    gLocations.push({
        name: name,
        lng: lng,
        lat: lat
    })
}

// Creates a user Object with Lat and Lng
function createUserLocation(position) {
    console.log('pos', position)
    gUserLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log('curr location ', gUserLocation)
}

// Get user Location From Browser
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
/// Gets a Postion and focus on it!
function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var myCenter = new google.maps.LatLng(lat, lng);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myCenter,
        zoom: 5
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
    // Zoom to 9 when clicking on marker
    google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(9);
        map.setCenter(marker.getPosition());
    });
}