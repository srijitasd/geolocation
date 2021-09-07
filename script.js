

const latLong = navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    console.log(position);

    console.log(latitude, longitude);
    // alert(
    //   `latitute ${latitude} longitude ${longitude} accuracy ${position.coords.accuracy}`
    // );
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
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

