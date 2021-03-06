
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
  
      var mymap = L.map('mapid').setView([latitude, longitude], 14);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3Jpaml0LWRhcyIsImEiOiJja2VzcW1xbmEzZHBxMnZucHBrNXlueXd2In0.mpCVKlCQnkP2EMF7yehWFA', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1Ijoic3Jpaml0LWRhcyIsImEiOiJja2VzcW1xbmEzZHBxMnZucHBrNXlueXd2In0.mpCVKlCQnkP2EMF7yehWFA'
      }).addTo(mymap);
  
      L.marker([latitude, longitude]).addTo(mymap);
  
   
    },
    (error) => {
      console.log(
        `Unable to retrieve your location due to ${error.code}: ${error.message}`
      );
    },
    {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    }
  );
}


