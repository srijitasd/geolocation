navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    console.log(position);
    // Show a map centered at latitude / longitude.
    console.log(latitude, longitude);
  },
  function error(msg) {
    alert("Please enable your GPS position feature.");
  },
  { enableHighAccuracy: true }
);
