const cities = ['Austin','Chicago',"New York","Orlando","San Francisco","Seattle","Denver","Atlanta"];

$(document).ready(function(){
displayButtons();
getWeatherData("Redmond");
})

// icon link
// http://openweathermap.org/img/wn/04d@2x.png

function getWeatherData(cityname){
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=imperial&appid=b45ecc5406887e49a29cd75e6b8dc427`,
        method: "GET"
      }).then(function(response) {
          console.log(response)
          let temp = response.main.temp;
          let windspeed = response.wind.speed;
          let humidity = response.main.humidity;
          let lat = response.coord.lat;
          let lon = response.coord.lon;
          let icon = response.weather[0].icon;
          $.ajax({
            url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=b45ecc5406887e49a29cd75e6b8dc427`,
            method: "GET"
          }).then(function(response) {
              let uvi = response.current.uvi;
              //change these variables into an object
              displayCurrentWeather(temp, windspeed, humidity, uvi, cityname, icon);
          });
      });
}

function displayCurrentWeather(temp, windspeed, humidity, uvi, cityname, icon){
let currentweatherData = `                    
    <div>
    <h3>${cityname} ${moment().format("D/M/YYYY")} <img id="iconimg" src="http://openweathermap.org/img/wn/${icon}@2x.png"></h3>
    <p>Temprature: ${temp}</p>
    <p>Humidity: ${humidity}</p>
    <p>Wind Speed: ${windspeed}</p>
    <p>UV Index: <span id="uvicolor">${uvi}</span></p>
    </div>
    `
    $("#cardbox").append(currentweatherData);
}
function displayButtons(){
    for(let i = 0; i < 8; i++){
        let buttonhtml = $(`
            <div class="citybutton">
                <div class="buttontext">
                    ${cities[i]}
                </div>
            </div>
        `)
        $("#citybuttonbox").append(buttonhtml);
    }
}