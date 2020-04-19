'use strict'

<<<<<<< HEAD
function onClick(data) {
    createLocation(name, lng, lat)
}
=======
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: -gCurrLat, lng: gCurrLng },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        fullscreenControl: true
    });
}



var gtelaviv = {
    lat: gCurrLat,
    lng: gCurrLng
};
>>>>>>> f5e83df84e7a33624d3f3f42840203bd65a75efa
