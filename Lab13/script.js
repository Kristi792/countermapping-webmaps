mapboxgl.accessToken = 'pk.eyJ1IjoiY3JvaXNzYW50LWNoZXVuZ3giLCJhIjoiY20xdGk1MnJvMDJvcjJrcTgxZXZ6em4wOCJ9.5aHf_tnCdC3gA9WMiCeYTw';

const map = new mapboxgl.Map({
  container: 'Xun', // container id
  style: 'mapbox://styles/croissant-cheungx/cm3hlfafo002e01qth5ey3czl', // replace this with your style URL
  center: [-122.42285, 37.76869],
  zoom: 13,
  pitch: 30.00,
  bearing: 0.00,
  minZoom: 13

});

map.on('load', function () {
  // MORE CODE WILL GO INSIDE HERE
    map.addSource('restaurantSource',{
        'type':'vector',
        'url': 'mapbox://croissant-cheungx.7gzhorpb'
      });

    
    map. addLayer({
    "id": "restaurantLayer",
    "source": "restaurantSource",
    "source-layer": "Historical_Restaurant_Inspect-7nnmh0",
    "type": "circle",
    'paint':{
      'circle-opacity': 0.3,
      'circle-color':
        ['step',
          ['to-number', ['get', 'inspection_score']],
          '#aaaaaa',  
          45, '#440154',  // (45 - 80)
          80, '#3b528b',  // (80 - 85)
          85, '#21908d',  // (85 - 90)
          90, '#5dc963',  // (90 - 95)
          95, '#fde725'   // (95 - 100)
          ]
        }
    });

    console.log('My name is Xun');
    map.on('mouseenter', 'restaurantLayer', (e) => {
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
        textField.innerHTML = name;
  })


});

