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




// // Función para calcular el precio final con descuento
// function calcularPrecioFinal(precio, descuento) {
//     return precio - (precio * descuento / 100);
// }

// // Reutilizando la función en diferentes contextos
// let precioCamisa = calcularPrecioFinal(100, 10);
// let precioPantalon = calcularPrecioFinal(500, 15);

// console.log(`Precio final de la camisa: ${precioCamisa}`);
// console.log(`Precio final del pantalón: ${precioPantalon}`);

// // Función para calcular el descuento
// function calcularDescuento(precio, porcentajeDescuento) {
//     return precio - (precio * porcentajeDescuento / 100);
// }

// // Función para calcular el precio final incluyendo impuestos
// function calcularPrecioFinal(precio, descuento, impuesto) {
//     let precioConDescuento = calcularDescuento(precio, descuento);
//     return precioConDescuento + (precioConDescuento * impuesto / 100);
// }

// // Invocación
// let total = calcularPrecioFinal(100, 10, 21);
// console.log(total); // Muestra: 98.9


// function calcularMulta(diasRetraso) {
//     const multaPorDia = 5; // 50 centavos por día de retraso
//     return diasRetraso * multaPorDia;
// }

// let multa = calcularMulta(10);
// console.log(`La multa total es: $${multa} dólares`); // Muestra: La multa total es: $50


// function devolverLibro(titulo, diasRetraso = 0) {
//     const multa = diasRetraso * 1;
//     const mensaje = diasRetraso > 0 
//         ? `Devuelto con ${diasRetraso} días de retraso. Multa: $${multa} dólares` 
//         : "Devuelto a tiempo. No hay multa.";
//     console.log(`Libro "${titulo}": ${mensaje}`);
// }

// devolverLibro("El Principito");
// // Muestra: Libro "El Principito": Devuelto a tiempo. No hay multa.

// devolverLibro("El Principito", 10);
// // Muestra: Libro "El Principito": Devuelto con 3 días de retraso. Multa: $1.5.



//cambiar descuento en una pagina con un boton de pocentaje
// const mensaje = document.getElementById('mensaje');
// const boton = document.getElementById('cambiarDescuento');

// let descuentoInicial;
// //una cierta logica que pueda modificar el descuento inicial

// const descuentoPredeterminado = 10;
// let descuentoActual = descuentoInicial || descuentoPredeterminado
// mensaje.textContent = `El descuento es del ${descuentoActual}%`

// boton.addEventListener('click', () => {
//     let descuentoIngresado = prompt("Ingrese el descuento en porcentaje..")

//     descuentoIngresado = Number(descuentoIngresado)

//     descuentoActual = descuentoIngresado || descuentoPredeterminado

//     mensaje.textContent = `El descuento es del ${descuentoActual}%`
// }

// )

// //funcion tradicional
// function sumar(a, b) {
//     return a + b;
// }

// console.log(sumar(10, 5));

//Funcion flecha

// const sumarFlecha = a => a + 10

// console.log(sumarFlecha(20))

// const sumarFlecha = a => a * 5

// console.log(sumarFlecha(5))

// const multiplicarValores = (a,b,c) => a * b * c + 10 + 50

// console.log(multiplicarValores(10,2,5))

//array simple

// let numeros = [5, 7 ,9, 12];

// console.group(numeros[2]);

// let palabras = ["auto", "manzana", "pera", "programación"];

// console.log(palabras[0])

// let booleanos = [true, false, true, false];

// console.log(booleanos);

// //arrays dentro de arrays (para generar matrices)

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(matriz[0][1]);

//metodos

// let numeros = [40, 1, 58, 54, 5, 22];

// numeros.sort((a,b)=> a - b); //creciente
// //numeros.sort((a,b)=> b - a); //decreciente
// console.log (numeros)

// let palabras = ["auto", "zorro", "programación", "Banana"]

// palabras.sort((a,b)=> a.localeCompare(b)); // de esta manera no funciona el sistema unicode y me ordena bien las palabras esten o no con mayusculas
// console.log(palabras)

// //reverse

// numeros.reverse();

// console.log(numeros)

// let arrayObjetos = [];

// arrayObjetos.push({
//     id:1 , nombre: "producto 1"
// })

// arrayObjetos.push({
//     id:2 , nombre: "producto 2"
// })
// arrayObjetos.push({
//     id:3 , nombre: "producto 3"
// })

// console.log(arrayObjetos);

// for(let objeto of arrayObjetos){
//     console.log(objeto.nombre)
// }

// let autosPrimeros = [];

// autosPrimeros.push({
//     id:1, producto:"Ford Focus"
// })

// autosPrimeros.push({
//     id:2, producto:"Peugeot 206"
// })

// autosPrimeros.push({
//     id:3, producto:"Renault Clío"
// })

// console.log(autosPrimeros);

