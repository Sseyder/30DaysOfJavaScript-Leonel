/* 
Arithmetic Operators

Addition(+): a + b
Subtraction(-): a - b
Multiplication(*): a * b
Division(/): a / b
Modulus(%): a % b
Exponential(**): a ** b

*/
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) // 7,1,12,1.33,1, 64

// Ejemplo 2:
const PI = 3.14
let radius = 100          // length in meter

// Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m

const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC

// Concatenating string with numbers using string interpolation
/*
The boiling point of water is 100 oC.
Human body temperature is 37 oC.
The gravity of earth is 9.81 m/s2.
*/
console.log(
`The boiling point of water is ${boilingPoint} oC.\n
Human body temperature is ${bodyTemp} oC.\n
The gravity of earth is ${gravity} m / s2.`
)

// Comparison Operators
// Son los siguientes operadores >,<,!,=,==,===
// Ejemplos:
/*
console.log(3 > 2)              // true, because 3 is greater than 2
console.log(3 >= 2)             // true, because 3 is greater than 2
console.log(3 < 2)              // false,  because 3 is greater than 2
console.log(2 < 3)              // true, because 2 is less than 3
console.log(2 <= 3)             // true, because 2 is less than 3
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same
console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false, not exactly the same
console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false
*/

// Increment Operator:
// Pre-Increment:
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
// Post-Increment:
let count2 = 0
console.log(count2++)        // 0
console.log(count2)          // 1
// Decrement Operator:
// Pre-Decrement:
let count3 = 0
console.log(--count3) // -1
console.log(count3)  // -1
// Post-Decrement:
let count4 = 0
console.log(count4--) // 0
console.log(count4)   // -1

// Operadores Ternarios
// Permiten escribir una condicion de otra forma
// Ejemplo 1:
let isRaining = true
isRaining
? console.log('You need a rain coat.')
: console.log('No need for a rain coat.')
isRaining = false

isRaining
? console.log('You need a rain coat.')
: console.log('No need for a rain coat.')
// Ejemplo 2:
let number = 5
number > 0
? console.log(`${number} is a positive number`)
: console.log(`${number} is a negative number`)
number = -5

number > 0
? console.log(`${number} is a positive number`)
: console.log(`${number} is a negative number`)