const apiKey = '2ae38ae076e245d086aa0b980afc5d94'
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector('.search-box')
const searchBtn = document.querySelector('.search-button')
const weatherImg = document.querySelector('.weather-img')

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';

    /// img status

    if(data.weather[0].main == 'Mist'){
        weatherImg.src = "img/mist.png"
    }else if(data.weather[0].main== 'Rain'){
        weatherImg.src = "img/rain.png"
    }else if(data.weather[0].main== 'Clouds'){
        weatherImg.src = "img/clouds.png"
    }else if(data.weather[0].main== 'Clear'){
        weatherImg.src = "img/clear.png"
    }else if(data.weather[0].main== 'Drizzle'){
        weatherImg.src = "img/drizzle.png"
    }
}

searchBtn.addEventListener('click', () => {
    checkweather(searchBox.value);
})