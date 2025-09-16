// let edad = Number(22) + 10;
// console.log(edad);

// let cookies = confirm("Aceptas cookies?");

// console.log(cookies);

// let patria = alert("Nota IMPORTANTISIMA - NO APTO PERONCHOS");

// console.log(patria);

// let mensaje = prompt("Explayate wachin");


// console.log(suma)

// let resta = 10 - 5 - 2;

// console.log(resta)

// let division = 100 / 5;

// console.log(division)

// let multiplicacion = 50000000055 * 78;

// console.log(multiplicacion);

// let suma = 50 + 20;

// if(suma == 20){
//     console.log("La suma es 20")
// } else if(suma < 0){
//     console.log("La suma da un resultado negativo")
// } else if(suma < 20){
//     console.log("la suma no es suficiente para llegar a 20")
// } else if(suma > 20){
//     console.log("La suma da + de 20 puntos")
// }
// let calificacion = 100;

// if(calificacion >= 100){
//     console.log("Excelente, te busca la NASA");
// } else if(calificacion >= 70){
//     console.log("Aprobado");
// } else if(calificacion >= 30){
//     console.log("Estas desaprobado, a estudiar más!!!");
// } else{
//     console.log("Tu calificación es demasiado baja, descendes de año por burro")
// }

// let edad = 20;
// let dinero = false;

// if(edad >= 18 || dinero) {
//     console.log("Podes entrar al Bar")
// } else {
//     console.log("No podes pasar")
// }

//AND (&&) = Se tienen que cumplir ambas condiciones para que el resultado sea TRUE
// OR || = Se tiene que cumplir almenos una de las condiciones

//CICLOS
//CONSIGNA, SALUDAR 5 VECES POR CONSOLA "HOLA MUNDO"


//CICLOS POR REPETICIÓN
// for(let i = 0; i < 5; i++) {
//     console.log("Hola Mundo");
// }

// for(let i = 0; i < 10; i++){
//     console.log("Hola papu");
// }


//CICLOS CONDICIONALES

// const password = "1234";

// let passwordIngresado = prompt("Ingrese su contraseña");

// while(passwordIngresado != password) {
//     passwordIngresado = prompt("Intentelo nuevamente, coloque su contraseña")

// }

//VALIDACION DE USUARIOS

// const usuarios = [
//     {nombre: "Ana", edad: 2, aceptaTerminos: true},
//     {nombre: "Juan", edad: 19, aceptaTerminos: true},
//     {nombre: "Carlos", edad: 15, aceptaTerminos: false},
//     {nombre: "Maria", edad: 30, aceptaTerminos: true},
// ]
//              // esto va a iterar siempre que i sea menor a la cantidad de elementos que contenga el array de usuarios - esto lo logramos con la propiedad .lenght
// for(let i = 0; i < usuarios.length; i++){
//     if(usuarios[i].edad >= 18 || usuarios[i].aceptaTerminos){
//         console.log(usuarios[i].nombre);
//     }
// }

//WHILE
// let i = 1;
// while (i < 4) {
//     console.log('Contraseña incorrecta, fallaste ' + i + ' veces. Sólo tienes 3 intentos en total');
//     i++;
// }

// //BREAK
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break; // Sale del ciclo cuando i es igual a 6
//     }
//     console.log(i); // Imprime los números de 1 a 5
// }

// //CONTINUE
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) {
//         continue; // Omite los números pares
//     }
//     console.log(i); // Imprime los números impares entre 0 y 9
// }

// javascript
// // Copiar código
// let edad = 10;

// if (edad >= 18) {
//     console.log("Eres mayor de edad");
// } else {
//     console.log("Eres menor de edad");
// }

// if (edad >= 18) {
//     console.log("Sos mayor de edad gay, pasa nomás")
// } else{
//     console.log("TROLO! sos menor de edad, anda a tu casa")
// }

// // javascript
// // Copiar código
// let edad = 18;
// let nombre = "Carlos";

// if (edad !== null && edad !== undefined) {
//     console.log(`Tienes ${edad} años`);
// } else {
//     if (nombre) {
//     console.log(`Bienvenido, ${nombre}`);
// } else {
//     console.log("Información incompleta");
// }
// }

// javascript
// Copiar código
// let valor1 = 0;
// let resultadoOR = valor1 || "Valor predeterminado";

// console.log(resultadoOR); // "Valor predeterminado"

// javascript
// Copiar código
// resultado = a ?? b;

// javascript
// Copiar código
// let valor2 = 0;
// let resultadoNullish = valor2 ?? "Valor predeterminado";

// console.log(resultadoNullish); // 0


// function saludar() {
//     console.log("¡Hola, mundo!");
// }

// saludar()


// function division(a, b)//parametros
// {
//     return a / b;
// }

// let resultado = division(10, 2); //argumentos 
// console.log(resultado);  // Muestra: 5




// Función para calcular el precio final con descuento
function calcularPrecioFinal(precio, descuento) {
    return precio - (precio * descuento / 100);
}

// Reutilizando la función en diferentes contextos
let precioCamisa = calcularPrecioFinal(50, 10);
let precioPantalon = calcularPrecioFinal(80, 15);

console.log(`Precio final de la camisa: ${precioCamisa}`);
console.log(`Precio final del pantalón: ${precioPantalon}`);