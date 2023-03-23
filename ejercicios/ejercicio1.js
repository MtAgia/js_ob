/*
1- Crea un objeto llamado auto que tenga algunas características como el color, 
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y 
apagar el auto.
*/
//this hace referencia a el objeto en este caso. Pero this puede variar su valor
let auto = {
    color: `azul`,
    marca: `BMW`,
    modelo: `m2`,
    //metodos
    encendido: function (){
        document.write(`el auto ${this.marca} ${this.modelo} esta encendido <br>`)
    },
    apagado: function() {
        document.write(`el auto ${this.marca}  ${this.modelo} esta apagado`);
    }
}

auto.encendido();
auto.apagado();