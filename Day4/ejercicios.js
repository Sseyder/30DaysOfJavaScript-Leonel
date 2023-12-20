// Ejercicio 1:
//Get user input using prompt(“Enter your age:”).
//If user is 18 or older , give feedback:'You are old enough to drive' 
//but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Input de usuario.
let introducirEdad = prompt(`Introduzca su edad:`);
// Cambiamos de String a Number.
let edad = parseInt(introducirEdad);
// Chequear si es mayor de 18.
if (edad >= 18) {
    console.log(`Sos mayor de edad. Podes tramitar licencia de conducir`);
} else {
    let esperarEdad = 18 - edad;
    console.log(`Sos menor de edad. Necesitas esperar ${esperarEdad} para poder conducir`);
};

// Ejercicio 2:
// Compare the values of myAge and yourAge using if … else. 
// Based on the comparison and log the result to console stating who is older (me or you). 
// Use prompt(“Enter your age:”) to get the age as input.

// Introducir edad del otro.
let introducirTuEdad = prompt(`Introduzca edad 1:`);
let tuEdad = parseInt(introducirTuEdad);
// Introducir edad propia.
let introducirMiEdad = prompt(`Introduzca edad 2:`);
let miEdad = parseInt(introducirMiEdad);
// Logica a seguir.
if (tuEdad > miEdad) {
    console.log(`1 es mayor que 2.`);
} else if (tuEdad < miEdad) {
    console.log(`2 es mayor que 1.`);
} else {
    console.log(`1 y 2 tienen la misma edad`);
};

// Ejercicio 3:
// If a is greater than b return 'a is greater than b' else 'a is less than b'. 
// Try to implement it in to ways
// • Using if else
// • Using ternary operator.

// Valores de a y b.
let a = 10;
let b = 5;
// Condicional
if (a > b) {
    console.log(`A es MAYOR que B.`);
} else {
    console.log(`A es MENOR que B`);
};
// Con ternarios.
let comparacion = a > b 
    ? `A es MAYOR que B.`
    : `A es MENOR que B`;
console.log(comparacion);

// Ejercicio 3:
// Even numbers are divisible by 2 and the remainder is zero. 
// How do you check, if a number is even or not using JavaScript?
// Introducir numero:
let introducirNumero = prompt(`Introduzca su numero:`);
let miNumero = parseInt(introducirNumero);
// Ver si el numero es par o no
if (myNumber % 2 === 0) {
    console.log(`${myNumber} is an even number.`);
} else {
    console.log(`${myNumber} is an odd number.`);
};
