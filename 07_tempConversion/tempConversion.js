const ftoc = function(num) {
  let celcius = (num - 32) * .5556;
  return Number(celcius.toFixed(1));
};

const ctof = function(num) {
  let fahrenheit = (num * 1.8) + 32;
  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
