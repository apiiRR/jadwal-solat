function prayerTimes(latitude, longitude) {
    fetch('http://api.aladhan.com/v1/calendar?latitude=' + latitude + '&longitude=' + longitude + '&method=2')
        .then(response => response.json())
        .then(function(response) {
            console.log(response.data[0]);
        })
}

function success(position) {
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error() {
    alert('Posisi tidak dapat di akses');
}

function userLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation tidak di dukung dalam browser anda');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function index() {
    let app = document.getElementById('app');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Prayer Times';

    app.appendChild(h3);

    userLocation();
}

index();