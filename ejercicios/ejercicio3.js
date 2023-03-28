/*
Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, 
mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
*/
class Rectangulo {
    #id; #ancho; #alto;
    constructor(id,alto,ancho){
        this.#id = id 
        this.#alto = alto
        this.#ancho = ancho
    };

    // metodos
    perimetro() {
    this.perimetro = 2 * (this.alto+this.ancho);
        document.write('<p> el perimetro del rectangulo es : ('+ this.id+ ') es '+ this.perimetro+'</p>');
}
    area() {
    this.area = this.alto * this.ancho;
    document.write('<p> el area del rectangulo es:  ('+ this.id+ ') es '+ this.area +'</p>');
}

//propiedades computadas
get id(){
    return this.#id;
}
set id(nuevoid) {
this.#id= nuevoid;
}
get alto(){
    return this.#alto;
}
set alto(nueva_alt) {
this.#id= nueva_alt;
}
get ancho(){
    return this.#ancho;
}
set ancho(nuevoancho) {
this.#ancho= nuevoancho;
}
}

const rectangulo_prueba = new Rectangulo(3,11,30)
rectangulo_prueba.area()
rectangulo_prueba.perimetro()
