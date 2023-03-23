let listaProductos = [
  {
    nombreProducto: "Hidratante facial",
    precio: 3500,
    categoria: "Hidratante",
  },
  { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
  {
    nombreProducto: "Protector solar factor 50",
    precio: 3300,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar toque seco factor 50",
    precio: 4100,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Protector solar con color factor 50",
    precio: 3850.5,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Gel de limpieza facial",
    precio: 1740.99,
    categoria: "Limpieza",
  },
  { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
  { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
  {
    nombreProducto: "Exfoliante de azúcar cherry",
    precio: 1200,
    categoria: "Labios",
  },
  {
    nombreProducto: "Pads de hidrogel para contorno de ojos",
    precio: 2800,
    categoria: "Ojos",
  },
  {
    nombreProducto: "Mascarilla facial",
    precio: 3250.99,
    categoria: "Mascaras",
  },
  { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
  { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
  { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
  {
    nombreProducto: "Protector solar en barra",
    precio: 3800,
    categoria: "Protector solar",
  },
  {
    nombreProducto: "Mascara de hidratación y reparación",
    precio: 1200,
    categoria: "Mascaras",
  },
  { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];
document.write(`LISTA DE PRODCUTOS POR NOMBRE DEL ARRAY`);
document.write(`<br>`);
// se puede usar foreach
function mostrar(array) {
  document.write(`<table>`);
  document.write(`<tr>`);

  document.write(`<th>`);
  document.write(`Nombre`);
  document.write(`</th>`);
  document.write(`<th>`);
  document.write(`categoria`);
  document.write(`</th>`);
  document.write(`<th>`);
  document.write(`precio`);
  document.write(`</th>`);

  document.write(`</tr>`);
  document.write(`<td>`);
  const lista = array.map((elementos) =>
    document.write(`<br> ${elementos.nombreProducto}`)
  );
  document.write(`</td>`);
  document.write(`<td>`);
  const lista2 = array.map((elementos) =>
    document.write(`<br> ${elementos.categoria}`)
  );
  document.write(`</td>`);
  document.write(`<td>`);
  const lista3 = array.map((elementos) =>
    document.write(`<br> ${elementos.precio}`)
  );
  document.write(`</td>`);
  document.write(`</tr>`);
  document.write(`</table>`);
}

mostrar(listaProductos);

let arregloFiltrado = listaProductos.filter((p) =>
  p.categoria.includes(`Protector solar`)
);
//console.log(arregloFiltrado);
mostrar(arregloFiltrado);

//preguntar en clase
let encontrar = listaProductos.find((p) => p.nombreProducto.includes(`Sérum`));
let aux = [];
aux.push(encontrar);
//console.log(encontrar);
console.log(aux);
mostrar(aux);

let existePeli = listaProductos.includes("Bruma")
  ? "Si encontramos la Bruma y existe"
  : "No encontramos la Bruma no existe";
document.write(`<br>`);
document.write(existePeli);
