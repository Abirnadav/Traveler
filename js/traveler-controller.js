'use strict'


// Initialize and add the map
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



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition();
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}