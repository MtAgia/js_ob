/*
Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() 
para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class libro{
    //propiedades priv
    #ISBN;
    #titulo;
    #autor;
    #numeroPaginas;
    constructor(isbn, titulo,autor,numeroPag){
    //ISBN Sistema internacional de numeración de libros para su fácil y correcta identificación.
        this.#ISBN = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numeroPaginas = numeroPag;
    }
    //METODOS
    mostrarLibro(){
        document.write(`<br> El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.numeroPag}`)
    }
    maximoPaginas(){
        if (libroNuevo1.numeroPag > libroNuevo2.numeroPag && libroNuevo3.numeroPag) {
            document.write(`<br> el libro ${libroNuevo1.titulo} es el de mayor paginas con ${libroNuevo1.numeroPag} `);
        }else if (libroNuevo2.numeroPag > libroNuevo1.numeroPag && libroNuevo3.numeroPag){
            document.write(`<br> el libro ${libroNuevo2.titulo} es el de mayor paginas con ${libroNuevo2.numeroPag} `);
        }else{
        document.write(`<br> el libro ${libroNuevo3.titulo} es el de mayor paginas con ${libroNuevo3.numeroPag} `);
        }
    }
    //GETERS Y SETERS
    get isbn(){
        return this.#ISBN;
    }
    get titulo(){
        return this.#titulo;
    }
    get autor(){
        return this.#autor;
    }
    get numeroPag(){
        return this.#numeroPaginas
    }
    //__
    set isbn(nuevoIsbn){
        this.#ISBN = nuevoIsbn;
    }
    set titulo(nuevoTitulo){
        this.#titulo = nuevoTitulo;
    }
    set autor(nuevoAutor){
        this.#autor = nuevoAutor;
    }
    set numeroPag(nuevaNumPag){
        this.#numeroPaginas = nuevaNumPag;
    }
}
//libros
const libroNuevo1 = new libro(
  `10: 8423913074`,
  `Luces de bohemia`,
  `Ramón María del Valle-Inclán`,
  304
);

libroNuevo1.mostrarLibro();

const libroNuevo2 = new libro(
  `10: 8418008121`,
  `Crimen y castigo`,
  `Fiòdor M. Dostoievski`,
  768
);
libroNuevo2.mostrarLibro()

const libroNuevo3 = new libro(`10: 8448700058`, `Drácula`, `Bram Stoker`, 576);
libroNuevo3.mostrarLibro()

//preguntar en clase.
libroNuevo1.maximoPaginas()

// (investigue y esta parte de codigo puede funcionar) objeto.resultados.filter((x) => x.value == maxValue);