'use strict';

const section = document.querySelector('#map')

function initMap() {
  // Create a new map object
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 37.7749, lng: -122.4194 } // Set the map center to San Francisco
  });

  // Add a marker to the map
  const marker = new google.maps.Marker({
    position: { lat: 37.7749, lng: -122.4194 }, // Set the marker position to San Francisco
    map: map,
    title: "San Francisco" // Set the marker title
  });
}

const map = initMap();

section.append(map);
