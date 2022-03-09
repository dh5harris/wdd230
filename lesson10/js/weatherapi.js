const part1 = 'f66666e34de';
const part2 = '75c8542449';
const part3 = 'd7d4931f7b6';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,us&units=imperial&APPID=${part1}${part2}${part3}`


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    const weatherIcon = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const weatherDescription = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = weatherIcon;
    document.querySelector('#weathericon').setAttribute('src', weatherIcon);
    document.querySelector('#weathericon').setAttribute('alt', weatherDescription);
    document.querySelector('figcaption').textContent = weatherDescription;
  })