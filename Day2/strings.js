// STRINGS

// Ejemplos normales
let space = ' ';           // an empty space string
let firstName = 'Leonel';
let lastName = 'Marsilli';
let country = 'Argentina';
let city = 'Quilmes';
let language = 'JavaScript';
let job = 'Tecnico en Electronica';
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quoteWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;
let age = 25;

// CONCATENACION DE STRINGS
let fullName = firstName + space + lastName; // concatenation, merging two string together.

console.log(fullName);

// Otra forma de concatenar strings
let personInfoOne = fullName + '. I am ' + age + ' years old. I live in ' + country; // ES5 string addition

console.log(personInfoOne);

// Strings muy largas. (Se puede usar \ para hacer un salto de linea en strings)
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";

console.log(paragraph);

/*
SEQUENCIAS DE ESCAPE EN STRINGS
Si se coloca \ seguido de algun caracter se realiza una sequencia de escape.
Estas son las sequencias mas comunes:
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/

// Ejemplos
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')

/*
TEMPLATE STRINGS:
Para crearlas de usan backticks. Y para ingresarles informacion se coloca asi ${}

Ejemplo de sintaxis:
`String literal text`
`String literal text ${expression}`
*/

// Ejemplo 1:
console.log(`The sum of 2 and 3 is 5`);              // statically writing the data
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // injecting the data dynamically

// Ejemplo 2:
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);

// Ejemplo 3 agregando una operacion de comparacion:
console.log(`${a} is greater than ${b}: ${a > b}`)


// STRING METHODS:

// 1. lenght: 
let string = 'JavaScript';
console.log(string.length);

// 2. Accessing characters in a string:
let firstLetter = string[0];
console.log(firstLetter);           // J

let secondLetter = string[1];       // a
let thirdLetter = string[2];        //v
let lastLetter = string[9];         // t
console.log(secondLetter);
console.log(thirdLetter);
console.log(lastLetter);

let lastIndex = string.length - 1;
console.log(lastIndex);  // 9
console.log(string[lastIndex]);    // t

// 3. toUpperCase():
console.log(string.toUpperCase());    // JAVASCRIPT
console.log(firstName.toUpperCase()); // LEONEL
console.log(country.toUpperCase());   // ARGENTINA

// 4. toLowerCase():
console.log(string.toLowerCase());    // javascript
console.log(firstName.toLowerCase()); // leonel
console.log(country.toLowerCase());   // argentina

// 5. substr():
console.log(string.substr(4, 6));    // Script
console.log(country.substr(5, 6));   // tina

// 6. substring():
console.log(string.substring(0,4));     // Java
console.log(string.substring(4,10));    // Script
console.log(string.substring(4));       // Script

console.log(country.substring(0, 3));   // Fin
console.log(country.substring(5, 9));   // tina
console.log(country.substring(5));      // tina

// 7. split():
let string2 = '30 Days Of JavaScript';
console.log(string2.split());     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string2.split(' '));  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

console.log(firstName.split());    // Change to an array - > ["Leonel"]
console.log(firstName.split(''));  // Split to an array at each letter ->  ["L", "e", "o", "n", "e", "l"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','));  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

// 8. trim():
let string3 = '   30 Days Of JavaScript   ';
console.log(string3);
console.log(string3.trim(' '));

// 9. includes():
console.log(string2.includes('Days'));     // true
console.log(string2.includes('days'));     // false - it is case sensitive!
console.log(string2.includes('Script'));   // true
console.log(string2.includes('script'));   // false
console.log(string2.includes('java'));     // false
console.log(string2.includes('Java'));     // true


// CAMBIAR STRING A NUMERO INT
// parseInt
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10
// Number
let num2 = '10'
let numInt2 = Number(num2)
console.log(numInt2) // 10
// Plus sign +
let num3 = '10'
let numInt3 = +num3
console.log(numInt3) // 10

// CAMBIAR STRING A NUMERO FLOAT
// parseFloat
let num4 = '9.81'
let numFloat = parseFloat(num4)
console.log(numFloat) // 9.81
// Number
let num5 = '9.81'
let numFloat2 = Number(num5)
console.log(numFloat2) // 9.81
// Plus Sign +
let num6 = '9.81'
let numFloat3 = +num6
console.log(numFloat3) //9.81

// FLOAT TO INT
let num7 = 9.81
let numInt4 = parseInt(num7)
console.log(numInt4) // 9