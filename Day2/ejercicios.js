/*

// Ejercicio N°1:
// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';
// 2. Print the string on the browser console using console.log()
console.log(challenge);
// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);
// 4. Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());
// 5. Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());
// 6. Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3, 5));
// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3, 21));
// 8. Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));
// 9. Split the string into an array using split() method
console.log(challenge.split(''));
// 10. Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));
// 11. split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '));

*/



// Ejercicio N°2:
// 1. Using console.log() print out the following statement:
// console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
// 2. Using console.log() print out the following quote by Mother Teresa:
// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let string10 = '10';
console.log(string10 === 10);
let number10 = Number(string10);
console.log(number10);
// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.