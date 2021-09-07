navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    console.log(position);
    // Show a map centered at latitude / longitude.
    console.log(latitude, longitude);
    alert(
      `latitute ${latitude} longitude ${longitude} accuracy ${position.coords.accuracy}`
    );
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
