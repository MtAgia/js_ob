/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar 
la descripción del estado de la cuenta.

*/

let cuenta = {
    titular: `alex`,
    saldo: 0,
    //metodcos
    ingresar: function(cantidad){
        cuenta.saldo = cuenta.saldo + cantidad
        document.write(`se ingreso nuevo saldo: ${cantidad}`)
    },
    extraer: function(sacar){
        cuenta.saldo = cuenta.saldo - sacar
        document.write(`<br> se extrajo ${sacar} de tu cuenta`)
    },
    informar: function(){
        return document.write(` <br> el usuario ${this.titular} esta con un saldo de ${cuenta.saldo} `)
    }
}

cuenta.ingresar(1000)
console.log(cuenta.saldo)
cuenta.extraer(500)
cuenta.informar()