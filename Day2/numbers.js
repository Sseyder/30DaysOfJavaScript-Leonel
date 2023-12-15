// NUMEROS
let age = 35;
const gravity = 9.81;  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72;         // mass in Kilogram
// const PI = 3.14;       // pi a geometrical constant

// Mas ejemplos
const boilingPoint = 100; // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37;      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, boilingPoint, bodyTemp);


// MATH OBJECT
// Permite muchas formas de manipular numeros
const PI = Math.PI;

console.log(PI);                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI));                // 3 to round values to the nearest number

console.log(Math.round(9.81));              // 10

console.log(Math.floor(PI));                // 3 rounding down

console.log(Math.ceil(PI));                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10));      // 10

//Square root
console.log(Math.sqrt(100));     // 10

console.log(Math.sqrt(2));       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2));     // 9

console.log(Math.E);             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2));        // 0.6931471805599453
console.log(Math.log(10));       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2);           // 0.6931471805599453
console.log(Math.LN10);          // 2.302585092994046

// Trigonometry
// Sin
console.log(Math.sin(0));
console.log(Math.sin(60));
// Cos
console.log(Math.cos(0));
console.log(Math.cos(60));


// RNG
let randomNum = Math.random(); // generates 0 to 0.999...

// Generemos un numero random del 0 al 10
let numBtnZeroAndTen = randomNum * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10