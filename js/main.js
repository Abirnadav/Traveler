import { Location } from './location-preview.js';

test();


renderLocations()

function renderLocations(locations) {
    var locations = getLocations();
    var strHTMLs = locations.map(getLocationHtml);
    var elTableContainer = document.querySelector('tbody');
    elTableContainer.innerHTML = strHTMLs.join('');
}

function getLocationHtml(location) {
    console.log(location);
    var rowHTML = new Location(location.id, location.name);
    console.log(rowHTML);
    var html = rowHTML.render();
    return html;
}