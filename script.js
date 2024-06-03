let weather = {
    paris: {
      temp: 19.7,
      humidity: 80,
    },
    tokyo: {
      temp: 17.3,
      humidity: 50,
    },
    lisbon: {
      temp: 30.2,
      humidity: 20,
    },
    "san francisco": {
      temp: 20.9,
      humidity: 100,
    },
    oslo: {
      temp: -5,
      humidity: 20,
    },
  };
  
  function displayWeatherInfo() {
    let city = prompt("Enter a city");
  
    let cityKey = city.toLowerCase();
  
    if (weather[cityKey]) {
      let weatherInfo = weather[cityKey];
      let tempCelsius = Math.round(weatherInfo.temp);
      let tempFahrenheit = Math.round((weatherInfo.temp * 9) / 5 + 32);
  
      alert(
        `It is currently ${tempCelsius}°C (${tempFahrenheit}°F) in ${city} with a humidity of ${weatherInfo.humidity}%`
      );
    } else {
      alert(
        `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
      );
    }
  }
  
  displayWeatherInfo();