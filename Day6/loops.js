// LOOPS:

// En JS se pueden usar loops para hacer repeticiones de tareas repetitivas

// Estructura de un loop FOR:
//for(initialization, condition, increment/decrement){
    // code goes here
//}

// Ejemplo:
for(let i = 0; i <= 5; i++){
    console.log(i);
}   // Imprime en consola: 0, 1, 2, 3, 4, 5
// Ejemplo 2:
for(let i = 5; i >= 0; i--){
    console.log(i);
} // Imprime en consola: 5, 4, 3, 2, 1, 0
// Ejemplo 3:
for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`);
} // Imprime en consola: 0 * 0 = 0, 1 * 1 = 1, 2 * 2 = 4, 3 * 3 = 9, 4 * 4 = 16, 5 * 5 = 25

// Sumar todos los elementos en el array:
let num = [1, 2, 3, 4, 5];
let sum2 = 0;
for(let i = 0; i < num.length; i++){
    sum2  = sum2 + num[i];  // can be shorten, sum += numbers[i]
};
console.log(sum2);  // Imprime la suma de todos los numeros dentro del array = 15

// Crear un nuevo array basado en el array existente:
let numbers = [1, 2, 3, 4, 5];
let newArr = [];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    newArr.push( numbers[i] ** 2);
};
console.log(newArr);  // [1, 4, 9, 16, 25]

// Bucle WHILE:
let i = 0;
while (i <= 5){
    console.log(i);
    i++;
}; // 0 1 2 3 4 5

// Bucle DO WHILE:
do {
    console.log(i);
    i++;
} while (i <= 5); // 0 1 2 3 4 5