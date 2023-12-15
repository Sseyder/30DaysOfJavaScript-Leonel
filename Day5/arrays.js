// ARRAYS

// Crear un array vacio:
let arr = [];
console.log(arr);

// Crear Arrays con datos:
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon']; // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']; // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']; // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']; // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']; // array of strings, countries

// Print the array and its length
console.log('Numbers:', numbers);
console.log('Number of numbers:', numbers.length);

console.log('Fruits:', fruits);
console.log('Number of fruits:', fruits.length);

console.log('Vegetables:', vegetables);
console.log('Number of vegetables:', vegetables.length);

console.log('Animal products:', animalProducts);
console.log('Number of animal products:', animalProducts.length);

console.log('Web technologies:', webTechs);
console.log('Number of web technologies:', webTechs.length);

console.log('Countries:', countries);
console.log('Number of countries:', countries.length);

// Un array puede tener distintos tipos de datos:
let arrDistintosDatos = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
];
console.log(arrDistintosDatos);

// Crear un array usando split:
let js = 'JavaScript';
const charsInJavaScript = js.split('');

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companies = companiesString.split(',');

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = txt.split(' ');

console.log(words);
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// Acceder a los index de los arrays
let firstFruit = fruits[0]; // we are accessing the first item using its index
console.log(firstFruit); // banana

let secondFruit = fruits[1];
console.log(secondFruit); // orange

let lastFruit = fruits[3];
console.log(lastFruit); // lemon

// Last index can be calculated as follows
let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];
console.log(lastFruit);  // lemon

// Modificar un array:
numbers[0] = 10;      // changing 1 at index 0 to 10
numbers[1] = 20;      // changing  2 at index 1 to 20
console.log(numbers); // [10, 20, 9.81, 37, 98.6, 100]

countries[0] = 'Afghanistan';  // Replacing first index by Afghanistan
let lastIndex2 = countries.length - 1;
countries[lastIndex2] = 'Korea'; // Replacing last index by Korea
console.log(countries);

// Metodos para manipular los arrays:

// Crear arrays y llenarlos con datos privisorios
const arr2 = Array() // creates an an empty array
console.log(arr2)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]

// Concatenar arrays
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]

// Longitudn de Array:
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // -> 5 is the size of the array

// Obtener el index de algun dato
console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> -1
console.log(numbers.indexOf(1)) // -> 0
console.log(numbers.indexOf(6)) // -> -1