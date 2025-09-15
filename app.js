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

const usuarios = [
    {nombre: "Ana", edad: 2, aceptaTerminos: true},
    {nombre: "Juan", edad: 19, aceptaTerminos: true},
    {nombre: "Carlos", edad: 15, aceptaTerminos: false},
    {nombre: "Maria", edad: 30, aceptaTerminos: true},
]
             // esto va a iterar siempre que i sea menor a la cantidad de elementos que contenga el array de usuarios - esto lo logramos con la propiedad .lenght
for(let i = 0; i < usuarios.length; i++){
    if(usuarios[i].edad >= 18 || usuarios[i].aceptaTerminos){
        console.log(usuarios[i].nombre);
    }
}

