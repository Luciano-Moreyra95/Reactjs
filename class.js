class Persona{

    //propiedades
    constructor(edad, nombre, humor){
        this.edad = edad;
        this.nombre = nombre;
        this.humor = humor;
    }


    //mètodos
    saludar() {
    
    return `Hola me llamo ${this.nombre} y tengo ${this.edad} años. Mucho gusto, hoy mi humor está al ${this.humor} %`;
    }

    random() {
        //con lo siguiente, puedo obtener nùmeros aleatorios entre 0 y 1
        const randomNumber =  Math.floor (Math.random() * 2); 
        return randomNumber;
    }

    tormentaElectrica(){
        const randomNumber = this.random();
        let mensaje = "";


        // si es igual a 1, se corta la luz
        if (randomNumber === 1) {
            this.humor -= 20;
            mensaje = `A ${this.nombre} por la tormenta se le corto la luz, su humor disminuyo a ${this.humor}`;
        } else {
            mensaje = `La tormenta eléctrica pasó sin consecuencias`;
        }

        return mensaje;
    }

    trabajar(){
        return ``
    }

    dormir(){
        return ``
    }
}

// nuevas instancias
const persona1 = new Persona ( 27, "Gabriel", 100) 

const persona2 = new Persona ( 30, "Antonio", 90 )

// console.log(persona1.saludar() );
// console.log(persona2.saludar() );

console.log(persona1.tormentaElectrica());
console.log(persona2.tormentaElectrica());