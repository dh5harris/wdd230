const info = 'f66666e34de75c8542449d7d4931f7b6';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Paducah,ky,us&units=imperial&APPID=${info}`

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);

    // set variables from the html elements
    const icon = document.querySelector('#icon');
    const temp = document.querySelector('#temperature');
    const wind = document.querySelector('#windSpeed');
    const description = document.querySelector('#description');

    // set variables to a value
    const currentTemp = jsObject.main.temp;
    const windSpeed = jsObject.wind.speed;
    const weatherIcon = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const weatherDescription = jsObject.weather[0].description;

    // set html elements to the values
    temp.textContent = currentTemp.toFixed(0);
    icon.setAttribute('src', weatherIcon);
    icon.setAttribute('alt', weatherDescription);
    description.textContent = weatherDescription;
    wind.textContent = windSpeed.toFixed();

    // To check for the windchill
    if (currentTemp <= 50 && windSpeed > 3) {
      windchill = windChill(currentTemp, windSpeed);
      windchill = `${windchill}&#176;F`;
    } else {
      windchill = 'N/A';
    }

    document.querySelector('#windChill').innerHTML = windchill;

    // The formula to calculate the wind chill factor. The .toFixed is to round the number.
    function windChill (temp, speed) {
      return (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed();
}
  })