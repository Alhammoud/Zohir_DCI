//Weather API
let authToken = '16d4785f9c10724266053adb3c29dcfd';

let inpBtnObj = document.getElementById('inputCityBtn');

let weatherByCity = [];


/* inpBtnObj.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        let reqCity = document.getElementById('inputCityField').value;
        if (reqCity === '') return;
    
        let urlServiceAddress = `https://api.openweathermap.org/data/2.5/weather?q=${reqCity}&APPID=${authToken}`;
    
        fetch(urlServiceAddress)
            .then(weatherResponse => {
                console.table(weatherResponse);
                return weatherResponse.json();
            }).then(weatherData => {
                console.table(weatherData);
                for (element of weatherByCity) {
                    if (weatherData.name === element.name) {
                        element = weatherData;
                        updateWeather(weatherData);
                        return;
                    }
                };
                createNewWeatherCard(weatherData);
            })
    }
 });
 */
inpBtnObj.addEventListener('click', () => {

    let reqCity = document.getElementById('inputCityField').value;
    if (reqCity === '') return;

    let urlServiceAddress = `https://api.openweathermap.org/data/2.5/weather?q=${reqCity}&APPID=${authToken}`;

    fetch(urlServiceAddress)
        .then(weatherResponse => {
            console.table(weatherResponse);
            return weatherResponse.json();
        }).then(weatherData => {
            console.table(weatherData);
            for (element of weatherByCity) {
                if (weatherData.name === element.name) {
                    element = weatherData;
                    updateWeather(weatherData);
                    return;
                }
            };
            createNewWeatherCard(weatherData);
        })
}); // end addEventListener() method 


let updateWeather = (weatherData) => {
    document.getElementById(`icon${weatherData.name}`).src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    document.getElementById(`city${weatherData.name}`).innerText = ` ${weatherData.name}`;
    document.getElementById(`temp${weatherData.name}`).innerText = ` ${Math.round(Number(weatherData.main.temp)-273.15)} °C`;
    document.getElementById(`sky${weatherData.name}`).innerText = ` ${weatherData.weather[0].description}`;
}
let createNewWeatherCard = (weatherData) => {
    weatherByCity.push(weatherData);
    let htmlStr = `
    <div class="cityCard" id="${weatherData.name}">
    <div class="icon">
        <img id="icon${weatherData.name}" src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png">
    </div>

        <table>
        <tr>
            <td>
            <span class="tag">City:</span>
            </td>
            <td>
            <h2 id="city${weatherData.name}" class="city"> ${weatherData.name} | ${weatherData.sys.country}</h2>
            </td>
        </tr>
        <tr>
            <td>
            <span class="tag">Temp:</span>
            </td>
            <td>
            <h3 id="temp${weatherData.name}" class="temperature"> ${Math.round(Number(weatherData.main.temp)-273.15)} °C</h3>
            </td>
        </tr>
        <tr>
            <td>
            <span class="tag">Sky</span>
            </td>
            <td>
            <h3 id="sky${weatherData.name}"class="sky"> ${weatherData.weather[0].description}</h3>
            </td>
        </tr>
        </table>
    </div>
    `;
    let tempTemp = Math.round(Number(weatherData.main.temp) - 273.15);
    let Colorizer = tempTemp * 255 / 30;
    let red = Colorizer;
    let blue = 255 - Colorizer;
    document.getElementById('responseCity').innerHTML += htmlStr;
    document.getElementById(`${weatherData.name}`).style.backgroundImage = `linear-gradient(-45deg, rgba(${red},0,${blue},1), rgba(${red},0,${blue},0))`
};