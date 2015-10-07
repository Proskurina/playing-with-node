Thermostat = function(){
  this.temp = 20;
  this.minTemp = 10;
  this.powerSave = true;
  this.displayColour = 'orange';
};

Thermostat.prototype.increase = function(){
  if (this.temp < this.maxTemp()) {
    this.temp++;
    this._changeDisplayColour();
  };
};

Thermostat.prototype.decrease = function(){
  if(this.temp > this.minTemp) {
    this.temp--;
    this._changeDisplayColour();
  };
};

Thermostat.prototype._changeDisplayColour = function(){
  if (this.temp<18) {
    this.displayColour = 'green';
  } else if (this.temp>=18 && this.temp<25){
    this.displayColour = 'orange';
  } else {
    this.displayColour = 'red';
  };
};

Thermostat.prototype.switchPowerSave = function(){
  if (this.powerSave == false && this.temp > 25) {
    this.temp = 25;
  };
  this.powerSave = !this.powerSave;
};

Thermostat.prototype.resetTemp = function(){
  this.temp = 20;
  this._changeDisplayColour();
};

Thermostat.prototype.maxTemp = function(){
  return (this.powerSave ? 25 : 32);
};
