// WINDOW METHOD:
// Alerta:
// alert('Welcome to 30DaysOfJavaScript');

// Prompt:
// let number = prompt('Enter number', 'number goes here')
// console.log(number)

// Confirm:
// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree) // result will be true or false based on what you click on the dialog box

// DATE OBJECT:
/*
Utilizamos los siguientes metodos para obetener fechas:
getFullYear(), getMonth(), getDate(), getDay(), getHours(), 
getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()
*/

// Creando un objeto de tiempo:
const now = new Date();
// Obtener todos los datos:
console.log(now);
// Obtener año entero:
console.log(now.getFullYear());
// Obtener mes:
console.log(now.getMonth());
// Obtener dia del mes:
console.log(now.getDate());
// Obtener dia de la semana:
console.log(now.getDay());
// Obtener horas:
console.log(now.getHours());
// Obtener minutos:
console.log(now.getMinutes());
// Obtener segundos:
console.log(now.getSeconds());
// Obtener tiempo, este metodo brinda el tiempo en milisegundos desde 01/01/1970:
console.log(now.getTime());
// Ejemplo de obtencion de fecha completa:
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)