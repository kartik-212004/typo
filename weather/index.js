let input = document.getElementById("input");
let button = document.getElementById("button");
let city;
let data
let country = document.getElementById("country");
let clouds = document.getElementById("clouds");
let date = document.getElementById("date");
let temp = document.getElementById("temp");
let minmax = document.getElementById("min");
let humid = document.getElementById("humid");
let wind = document.getElementById("wind");
button.addEventListener(`click`, () => {

    city = input.value.toString().trim().toLowerCase();
    call();
}
)

async function call() {
    console.log(`1 ${city}`)
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b2d923cef657b2c50c1f8e4a7e8a3d0`)
    data = await response.json();

    if (city.length > 0) {
        console.log(data)
        country.innerText = city.toUpperCase()
        clouds.innerText = data.weather[0].main
        console.log(Date())
        date.innerText = Date().split("2024")[0];
        temp.innerText = `${Math.floor((Number(data.main.temp) - 273.5))}°c`;
        minmax.innerText = `${Math.floor((Number(data.main.temp_max) - 273.5))}°c/${Math.floor((Number(data.main.temp_min) - 273.5))}°c`;
        wind.innerText = `${data.wind.speed}`
        humid.innerText = data.main.humidity;

    }

}
