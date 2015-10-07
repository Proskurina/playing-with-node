var ts = new Thermostat;

function updateTemp(temperature){
    document.getElementById("temperature").innerHTML = temperature + ' Cº';
};

function updateColor(){
  document.getElementById("temperature").className = ts.displayColour;
};

function updateTempAndColor(){
  updateTemp(ts.temp);
  updateColor();
};

updateTempAndColor();

document.getElementById("tempUp").addEventListener("click", function(){
  ts.increase();
  updateTempAndColor();
});

document.getElementById("tempDown").addEventListener("click", function(){
  ts.decrease();
  updateTempAndColor();
});

document.getElementById("tempReset").addEventListener("click", function(){
  ts.resetTemp();
  updateTempAndColor();
});

document.getElementById("powerSave").addEventListener("change", function(){
  ts.switchPowerSave();
  updateTempAndColor();
});

// $.ajax({
//     type: "POST",
//     url: "http://localhost:3000/temp",
//     data: {'ts' : JSON.stringify(ts)},
//     dataType: "json",
// });
