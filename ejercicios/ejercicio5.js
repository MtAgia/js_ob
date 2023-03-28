class Persona {
  #nombre;
  #ed;
  #dni;
  #sexo;
  #peso;
  #altura;
  #añoNac;
  constructor(nombre, edad, dni, sexo, peso, altura, añoNac) {
    this.#nombre = nombre;
    this.#ed = edad;
    this.#dni = dni;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#añoNac = añoNac;
  }
  // metodos
  mostrarGeneracion() {
    if (this.añoNac >= 1930 && this.añoNac <= 1948) {
      document.write("<h2>" + this.nomb + " - clase: " + this.añoNac + "</h2>");
      document.write("<ul>");
      document.write("<li><b>Generacion:</b>Silent Generation</li>");
      document.write("<li><b>Rasgo caracteristico:</b> Austeridad</li>");
      document.write("</ul>");
    } else if (this.añoNac >= 1949 && this.añoNac <= 1968) {
      document.write("<h2>" + this.nomb + " - clase: " + this.añoNac + "</h2>");
      document.write("<ul>");
      document.write("<li><b>Generacion:</b> Baby Boom</li>");
      document.write("<li><b>Rasgo caracteristico:</b> Ambicion</li>");
      document.write("</ul>");
    } else if (this.añoNac >= 1969 && this.añoNac <= 1980) {
      document.write("<h2>" + this.nomb + " - clase: " + this.añoNac + "</h2>");
      document.write("<ul>");
      document.write("<li><b>Generacion:</b> Generacion X</li>");
      document.write(
        "<li><b>Rasgo caracteristico:</b> Obsesion por el exito</li>"
      );
      document.write("</ul>");
    } else if (this.añoNac >= 1981 && this.añoNac <= 1993) {
      document.write("<h2>" + this.nomb + " - clase: " + this.añoNac + "</h2>");
      document.write("<ul>");
      document.write("<li><b>Generacion:</b> Generacion Y</li>");
      document.write("<li><b>Rasgo caracteristico:</b> Frustacion</li>");
      document.write("</ul>");
    } else if (this.añoNac >= 1994 && this.añoNac <= 2010) {
      document.write("<h2>" + this.nomb + " - clase: " + this.añoNac + "</h2>");
      document.write("<ul>");
      document.write("<li><b>Generacion:</b> Generacion Z</li>");
      document.write("<li><b>Rasgo caracteristico:</b> Irreverencia</li>");
      document.write("</ul>");
    } else {
      document.write("<h2>" + this.nomb + " - clase: " + this.añoNac + "</h2>");
      document.write("<p>No hay generacion</p>");
    }
  }
  esMayorDeEdad() {
    document.write("<h3>" + this.nomb + ": " + this.edad + " años</h3>");
    if (this.edad > 18) {
      document.write("es mayor de edad");
    } else {
      document.write("es menor de edad");
    }
  }
  mostrarDatos() {
    document.write("<h2>Datos</h2>");
    document.write("<ul>");
    document.write("<li>" + "<b>Nombre:</b> " + this.nomb + "</li>");
    document.write("<li>" + "<b>edad:</b> " + this.edad + " Años </li>");
    document.write("<li>" + "<b>DNI:</b> " + this.generarDni() + "</li>");
    document.write("<li>" + "<b>Sexo:</b> " + this.sexo + "</li>");
    document.write("<li>" + "<b>Peso:</b> " + this.peso + "Kg</li>");
    document.write("<li>" + "<b>Altura:</b> " + this.altura + "M</li>");
    document.write(
      "<li>" + "<b>Año de nacimiento:</b> " + this.añoNac + "</li>"
    );
    document.write("</ul>");
  }
  //preguntar en clase
  generarDni(){
    const num = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };
    let aleatorio = num(0,9)
    for (let i = 1; i < 9; i++) {
        document.write(aleatorio)
    }
    
  }

  // propiedades computadas
  get nomb() {
    return this.#nombre;
  }
  set nomb(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  get edad() {
    return this.#ed;
  }
  set edad(nuevaEdad) {
    this.#ed = nuevaEdad;
  }
  get dni() {
    return this.#dni;
  }
  set dni(nuevoDni) {
    this.#dni = nuevoDni;
  }
  get sexo() {
    return this.#sexo;
  }
  set sexo(nuevoSex) {
    this.#sexo = nuevoSex;
  }
  get peso() {
    return this.#peso;
  }
  set peso(nuevoPeso) {
    this.#peso = nuevoPeso;
  }
  get altura() {
    return this.#altura;
  }
  set altura(nuevaAltura) {
    this.#altura = nuevaAltura;
  }
  get añoNac() {
    return this.#añoNac;
  }
  set añoNac(nuevaAño) {
    this.#añoNac = nuevaAño;
  }
}

const persona1 = new Persona("juan", 89, 11111111, "H", 70, 1.45, 1941);
const persona2 = new Persona("pepe", 99, 22222222, "H", 65, 1.7, 1955);
const persona3 = new Persona("martina", 53, 33333333, "M", 90, 1.86, 1972);
const persona4 = new Persona("dani", 41, 44444444, "D", 70, 1.79, 1985);
const persona6 = new Persona("victoria", 18, 66666666, "M", 60, 1.74, 2005);

persona6.mostrarGeneracion();
persona6.esMayorDeEdad();
persona6.esMayorDeEdad();
persona6.mostrarDatos();
