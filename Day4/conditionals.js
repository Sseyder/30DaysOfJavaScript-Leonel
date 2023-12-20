// IF:
// Ejemplo:
let num = 3;
if (num > 0) {
    console.log(`${num} is a positive number`);
}; //  3 is a positive number

// IF-ELSE:
// Ejemplo 1:
let num2 = 3;
if (num2 > 0) {
    console.log(`${num2} is a positive number`);
} else {
    console.log(`${num2} is a negative number`);
}; //  3 is a positive number

num3 = -3;
if (num3 > 0) {
    console.log(`${num3} is a positive number`);
} else {
    console.log(`${num3} is a negative number`);
}; //  -3 is a negative number

// Ejemplo 2:
let isRaining = true;
if (isRaining) {
    console.log('You need a rain coat.');
} else {
    console.log('No need for a rain coat.');
}; // You need a rain coat.

isRaining = false;
if (isRaining) {
    console.log('You need a rain coat.');
} else {
    console.log('No need for a rain coat.');
}; // No need for a rain coat.

// IF ELSE IF ELSE:
// Ejemplo:
let weather = 'sunny';
if (weather === 'rainy') {
    console.log('You need a rain coat.');
} else if (weather === 'cloudy') {
    console.log('It might be cold, you need a jacket.');
} else if (weather === 'sunny') {
    console.log('Go out freely.');
} else {
    console.log('No need for rain coat.');
};

// SWITCH:
// Ejemplo 1:
let weather2 = 'cloudy';
switch (weather2) {
    case 'rainy':
        console.log('You need a rain coat.');
    break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.');
    break
    case 'sunny':
        console.log('Go out freely.');
    break
    default:
        console.log('No need for rain coat.');
};
// Ejemplo 2:
// Switch More Examples
let dayUserInput = prompt('What day is today ?');
let day = dayUserInput.toLowerCase();

switch (day) {
    case 'monday':
        console.log('Today is Monday');
    break;
    case 'tuesday':
        console.log('Today is Tuesday');
    break;
    case 'wednesday':
        console.log('Today is Wednesday');
    break;
    case 'thursday':
        console.log('Today is Thursday');
    break;
    case 'friday':
        console.log('Today is Friday');
    break;
    case 'saturday':
        console.log('Today is Saturday');
    break;
    case 'sunday':
        console.log('Today is Sunday');
    break;
    default:
        console.log('It is not a week day.');
}

// Operadores Ternarios
// Otra forma de escribir condicionales
let isRaining2 = true
isRaining2
? console.log('You need a rain coat.')
: console.log('No need for a rain coat.')