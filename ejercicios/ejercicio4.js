class Producto {
  #codigo;
  #nombre;
  #precio;
  constructor(codigo, alto, ancho) {
    this.#codigo = codigo;
    this.#nombre = alto;
    this.#precio = ancho;
  }
  // metodos
  datos() {
    document.write("<ul>");
    document.write("<li> codigo: " + this.codigo + "</li>");
    document.write("<li> nombre: " + this.nombre + "</li>");
    document.write("<li> precio: " + this.precio + "</li>");

    document.write("</ul>");
  }

  get codigo() {
    return this.#codigo;
  }
  set codigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get precio() {
    return this.#precio;
  }
  set precio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }
}

const prod1 = new Producto(1, "producto 1", 2000);
const prod2 = new Producto(2, "producto 2", 5000);
const prod3 = new Producto(3, "producto 3", 6000);
const prod4 = new Producto(4, "producto 4", 62000);
const listaProductos = [prod1, prod2, prod3];
listaProductos.push(prod4)


let aux = listaProductos.map((prod) => prod.datos());

console.log(listaProductos)