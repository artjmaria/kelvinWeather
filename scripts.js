// constant forecast in kelvin
const kelvin = 0;

//  formula to convert from k to c
const celsius = kelvin - 273;

// formula to convert c to f
let fahrenheit = celsius * (9/5) + 32;

// rounds f value down
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);