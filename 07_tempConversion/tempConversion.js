const convertToCelsius = function(fahrneTemp) {

  if(fahrneTemp == 32){
    return 0;
  }

  return ( Math.round( (fahrneTemp-32)*(5/9)*10 ) ) / 10;

};

const convertToFahrenheit = function(celsTemp) {

  if(celsTemp == 0){
    return 32;
  }

  return Math.round(((celsTemp*(9/5)+32)*10)) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
