const API_KEY = "da1f7bbf9eec0f82ee82dafab6e80cf9";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in ", lat, lng);
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    console.log(url);
    fetch(url);
}
function onGeoError() {
    alert("Can't Find you, No weathher for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);