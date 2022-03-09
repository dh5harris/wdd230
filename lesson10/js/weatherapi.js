const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,us&units=imperial&APPID=f66666e34de75c8542449d7d4931f7b6'




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