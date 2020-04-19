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
            center: telaviv,
            mapTypeControl: true,
        });
    var geocoder = new google.maps.Geocoder();
    document.getElementById('search-btn').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('location').value;
    // if (address === '' || address === ' ') return;
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            document.querySelector('.status').innerText = `Showing Results For ${address}`

            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            document.querySelector('.status').innerText = 'Sure Its on Earth? Please Enter A correct Address!'

        }
    })

}


function onClick(data) {
    service.createLocation(name, lng, lat)
}

function onDelete(id) {
    var locationIndex = getLocationIdx(id);
    deleteLocation(locationIndex);
    renderFromArray()
}

function onSearchInput(value) {
    document.querySelector('.status').innerHTML = `Looking For ${value}...<br/> Please Wait!`

}
getWeather()

function getWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${gCurrLat}&lon=${gCurrLng}&APPID=0a9af044e53ea6925982142ac7e0e2db`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            renderWeather(data)
        });
}

function renderWeather(data) {
    document.querySelector('.weather-container').innerHTML = `

    <h2>Weather in ${data.name} 
    </h2>
    <p>
       Temperature is: 25c
    </p>
`

}

function renderFromArray() {
    var strHTML
    gLocations.forEach(location => {
        if (location.id > 0) {
            console.log(location, '?????')
            strHTML += `<tr> 
    <td> ${location.id} </td>
    <td> ${location.name} </td>
    <td onclick="onDelete(${location.id})"> Delete
    </td>
    </tr>`


        }

    })

    var elTableContainer = document.querySelector('tbody');
    elTableContainer.innerHTML = strHTML
}