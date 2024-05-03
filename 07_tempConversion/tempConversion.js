const convertToCelsius = function(farenheit) {
  resultCelsius = (farenheit - 32) / 1.8;

  return Math.round(resultCelsius * 10)/10;

};

const convertToFahrenheit = function(celsius) {
  resultFarenheit = celsius * 1.8 + 32;
  return Math.round(resultFarenheit * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
