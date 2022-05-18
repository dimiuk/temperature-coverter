//temperature in kelvin for today
const kelvin = 0;

//Temp in celcius. It's always 273 degrees less than kelvin's
let celcius = kelvin - 273;
//Temp in Fahrenheit is calculated by formula below:
let fahrenheit = celcius * (9 / 5) + 32;
//use math method to round decimal number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
