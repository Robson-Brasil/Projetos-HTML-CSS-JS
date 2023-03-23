const API_KEY = `60d425122abe8f777f5c08ea3979e9fa`
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    document.getElementById('city-name').value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temparature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main)
    // Set Weather Icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url)
}