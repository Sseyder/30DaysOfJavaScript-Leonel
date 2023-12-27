// 1. Declare firstName, lastName, country, city, age, isMarried, 
//year variable and assign value to it and use the typeof operator to check different data types.
let firstName = (typeof 'Leonel'); //String
console.log(firstName);
let lastName = (typeof 'Marsilli'); //String
console.log(lastName);
let country = (typeof 'Argentina'); //String
console.log(country);
let city = (typeof 'Quilmes'); //String
console.log(city);
let age = (typeof 25); //Number
console.log(age);
let isMarried = (typeof false); //Boolean
console.log(isMarried);
let year = (typeof 2023); //Number
console.log(year);

// 2. Check if type of '10' is equal to 10
let stringValue = '10';
let numberValue = 10;
console.log(stringValue === numberValue); //False

// 3. Check if parseInt('9.8') is equal to 10
let parseValue = parseInt('9.8');
console.log(parseValue == 10); //False

// 4. Boolean value is either true or false.
let trueValue = true;
console.log(trueValue); //True
let falseValue = false;
console.log(falseValue); //True

// 5. Write three JavaScript statement which provide truthy value.
let trueStatement = 5 > 2;
console.log(trueStatement); //True
let trueStatement1 = 4 > 3 && 10 > 5;
console.log(trueStatement1); //True
let someVariable = "True";
let trueStatement2 = !!someVariable;
console.log(trueStatement2); //True

// 6. Write three JavaScript statement which provide falsy value.
let falseStatement = 5 < 2;
console.log(falseStatement); //False
let falseStatement1 = 4 < 3 && 10 < 5;
console.log(falseStatement1); //False
let falseStatement2 = !someVariable;
console.log(falseStatement2); //False

// 7. Figure out the result of the following comparison expression first without using console.log(). 
// After you decide the result confirm it using console.log()
console.log(4 > 3); //True
console.log(4 >= 3); //True
console.log(4 < 3); //False
console.log(4 <= 3); //False
console.log(4 == 4); //True
console.log(4 === 4); //Ture
console.log(4 != 4); //False
console.log(4 !== 4); //False
console.log(4 != '4'); //False
console.log(4 == '4'); //True
console.log(4 === '4'); //False

// 8. Find the length of python and jargon and make a falsy comparison statement.
let pythonLenght = 'Python'.length;
let jargonLenght = 'Jargon'.length;
let falseComparison = pythonLenght > jargonLenght;
console.log('Length of "Python":', pythonLenght);
console.log('Length of "Jargon":', jargonLenght);
console.log('False Comparison (pythonLength > jargonLength):', falseComparison);

// 9. Figure out the result of the following expressions first without using console.log().
// After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12); //True
console.log(4 > 3 && 10 > 12); //False
console.log(4 > 3 || 10 < 12); //True
console.log(4 > 3 || 10 > 12); //True
console.log(!(4 > 3)); //False
console.log(!(4 < 3)); //True
console.log(!(false)); //True
console.log(!(4 > 3 && 10 < 12)); //False
console.log(!(4 > 3 && 10 > 12)); //True
console.log(!(4 === '4')); //True

// 10. There is no 'on' in both dragon and python
let includesInPython = 'Python'.includes('on');
let includesinDragon = 'Dragon'.includes('on');
console.log('"Python" includes "on":', includesInPython);
console.log('"Dragon" includes "on":', includesinDragon);

// 11. Use the Date object to do the following activities:
let currentDate = new Date();
// What is the year today?
let currentYear = currentDate.getFullYear();
console.log('Year:', currentYear);
// What is the month today as a number? (Add one because month is zero-based)
let Month = currentDate.getMonth() + 1;
console.log('Month:', Month);
// What is the date today?
let todayDate = currentDate.getDate();
console.log('Date:', todayDate);
// What is the day today as a number? (Sunday is 0, Monday is 1, etc)
let Day = currentDate.getDay();
console.log('Day:', Day);
// What is the hours now?
let Hours = currentDate.getHours();
console.log('Hours:', Hours);
// What is the minutes now?
let Minutes = currentDate.getMinutes();
console.log('Minutes:', Minutes);
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let secondsSince1970 = currentDate.getTime() / 1000; // Convert miliseconds to seconds
console.log('Seconds Since January 1, 1970:', secondsSince1970);