
const btn = document.querySelector(".button");

btn.addEventListener('click', () => {
    const cityInput = document.querySelector(".input").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=066eed8ac98ce29804ac0680164c1d3a`)
        .then(response => response.json())
        .then(data => updateTemp(data));
    document.querySelector(".input").value = "";
})

function updateTemp(data) {

    document.querySelector(".temp-city").innerHTML = `${data.name}`;
    document.querySelector(".temp").innerHTML = `${parseFloat(data.main.temp - 273.15).toFixed(2)}`;
    document.querySelector(".weather").innerHTML = `${data.weather[0].main}`;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
}