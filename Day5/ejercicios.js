const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

// 1. Declare an empty array;
let emptyArray = [];

// 2. Declare an array with more than 5 number of elements
let numbersArray = [10, 25, 30, 45, 60, 75, 80];

// 3. Find the length of your array
let lenghtArray = numbersArray.length;
console.log('La longitud del array es de:', lenghtArray);

// 4. Get the first item, the middle item and the last item of the array
let firstItemArray = numbersArray[0];
let middleItemArray = numbersArray[Math.floor(numbersArray.length / 2)];
let lastItemArray = numbersArray[numbersArray.length - 1];
console.log(firstItemArray, middleItemArray, lastItemArray);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
// The array size should be greater than 5

let mixedDataTypes = [42, 'Hello', true, [1, 2, 3], { key: 'value' }, null, undefined];
let mixedArrayLenght = mixedDataTypes.length;
console.log('El array de datos mixtos contiene:', mixedDataTypes);
console.log('La longitud del array de datos mixto es:', mixedArrayLenght);
// 6. Declare an array variable name itCompanies
// and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log('Número de compañias:', itCompanies.length);

// 9. Print the first company, middle and last company
console.log('Primera Compañia:', itCompanies[0]);
let middleCompany = Math.floor(itCompanies.length / 2);
console.log('Compañia del Medio:', itCompanies[middleCompany]);
console.log('Ultima Compañia:', itCompanies[itCompanies.length - 1]);

// 10. Print out each company
console.log('Compañias:');
itCompanies.forEach(company => {
    console.log('-', company);
});

// 11. Change each company name to uppercase one by one and print them out
console.log('Compañias en Mayusculas:');
for (let i = 0; i < itCompanies.length; i++) {
    let uppercasedCompany = itCompanies[i].toUpperCase();
    console.log('-', uppercasedCompany);
}
// 12. Print the array like as a sentence:
// Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = itCompanies.join(', ') + ' are big IT companies.';
console.log(sentence);

// 13. Check if a certain company exists in the itCompanies array.
// If it exist return the company else return a company is not found.
function checkCompanyExistence(companyName) {
    if (itCompanies.includes(companyName)) {
        return `${companyName} exists in the array.`;
    } else {
        return `${companyName} is not found in the array.`;
    }
}
// Ejemplo de checkeo
let companyToCheck = 'Microsoft';
let result = checkCompanyExistence(companyToCheck);
console.log(result);

// 14. Filter out companies which have more than one 'o' without the filter method
function filterCompaniesWithMoreThanOneO(companies) {
let filteredCompanies = [];
for (let i = 0; i < companies.length; i++) {
let company = companies[i];
let oCount = 0;
for (let j = 0; j < company.length; j++) {
    if (company[j].toLowerCase() === 'o') {
        oCount++;
    if (oCount > 1) {
        break;
        }
    }
}
    if (oCount > 1) {
        filteredCompanies.push(company);
    }
}
return filteredCompanies;
}
let filteredCompanies = filterCompaniesWithMoreThanOneO(itCompanies);
console.log('Companies with more than one "o":', filteredCompanies);

// 15. Sort the array using sort() method
itCompanies.sort();
console.log('Sorted Companies:', itCompanies);

// 16. Reverse the array using reverse() method
itCompanies.reverse();
console.log('Reversed Companies:', itCompanies);

// 17. Slice out the first 3 companies from the array
let firstThreeCompanies = itCompanies.slice(0, 3);
console.log('First 3 Companies:', firstThreeCompanies);

// 18. Slice out the last 3 companies from the array
let lastThreeCompanies = itCompanies.slice(-3);
console.log('Last 3 Companies:', lastThreeCompanies);

// 19. Slice out the middle IT company or companies from the array
let middleIndex = Math.floor(itCompanies.length / 2);
let middleArrayCompany = itCompanies.slice(middleIndex, middleIndex + 1);
console.log('Middle Company:', middleArrayCompany);

// 20. Remove the first IT company from the array
let removeFirstCompany = itCompanies.shift();
console.log('Modified Companies Array:', itCompanies);
console.log('Removed Company:', removeFirstCompany);

// 21. Remove the middle IT company or companies from the array
let removeMiddleCompany = itCompanies.splice(middleIndex, 1);
console.log('Modified Companies Array:', itCompanies);
console.log('Removed Company:', removeMiddleCompany);

// 22. Remove the last IT company from the array
let removeLastCompany = itCompanies.pop();
console.log('Modified Companies Array:', itCompanies);
console.log('Removed Company:', removeLastCompany);

// 23. Remove all IT companies
itCompanies = [];
console.log('Modified IT Companies Array:', itCompanies);