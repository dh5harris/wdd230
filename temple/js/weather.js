const info = 'f66666e34de75c8542449d7d4931f7b6';

// the div that will hold the weather icon and temperature
const currentConditions = document.querySelector('.current-weather');
const weatherNotify = document.querySelector('#weather-notify')
const weatherAlert = document.querySelector('#weather-alert');
const threeDay = document.querySelector('.three-day');

const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=37.08&lon=-88.60&units=imperial&APPID=${info}`

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject)
    const alerts = jsObject['alerts']
    // Check to see if the weather alerts need to be populated
    if (alerts.length !== 0) {
      // Adds button to weather alert button
      const delAlert = document.createElement('button');
      delAlert.textContent = String.fromCodePoint(0x2716);
      weatherNotify.appendChild(delAlert);
      delAlert.addEventListener('click', () => {weatherNotify.classList.add('remove-notify')}, true)
    }
    // Display any alerts
    alerts.forEach(displayAlerts)
  });


  function displayAlerts(alerts) {
    // A function to create a p element for each alert and append it to the weatherAlert div
    let event = document.createElement('p');
    let alert = alerts.event;
    event.innerText = alert
    weatherAlert.appendChild(event)
  }

  function displayWeather(weather) {
    // A function to display the weather
    const icon = document.createElement('img');
    const temp = document.createElement('p');
    const humidity = document.createElement('p');
    const description = document.createElement('p');
    

    const currentTemp = jsObject.current.temp;
    const currentDescription = jsObject.current.weather[0].description;
    const currentWeatherIcon = jsObject.current.weather[0].icon;
  }    
    
  