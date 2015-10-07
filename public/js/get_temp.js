var chosenCity =  window.location.search.substring(11) || 'London';

var connectedLink = "http://api.openweathermap.org/data/2.5/weather?q=" + chosenCity;

$.getJSON(connectedLink, function showWeather (data){
  document.getElementById("showWeather").innerHTML = _showTemp(chosenCity, data);
});

function _showTemp(chosenCity, data){
  return "The temperature in " + chosenCity + " is: " + _temperature(data) + "ºC"
};

function _temperature(data){
  return JSON.stringify(Math.round(data.main.temp))-273;
};

