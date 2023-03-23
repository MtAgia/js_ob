//PIEDRA PAPEL O TIJERAS
/*
Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 :crear un script (en el repo de conceptos de JS o realizar un nuevo repo) con toda la logica 
necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un movimiento y 
al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.
*/
const num = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let aleatorio = num(1, 4);
let resultado = (resultadoPosible) => {
  switch (resultadoPosible) {
    case `1`:
      document.write(`<br>`);
      document.write(`jugada: elegiste piedra`);
      document.write(`<br>`);
      if (aleatorio == 1) {
        document.write(`el resultado contra tu rival fue: `);
        document.write(`<br>`);
        document.write(`piedra y piedra empate!`);
      } else if (aleatorio == 2) {
        document.write(`perdiste :( te gano la compu xd`);
        document.write(`<br>`);
        document.write(`el papel le gana a la piedra`);
      } else if (aleatorio == 3) {
        document.write(`perdiste :( te gano la compu xd`);
        document.write(`<br>`);
        document.write(`la tijera pierde contra la piedra`);
      } else {
        document.write(`ingrese un numero valido`);
      }
      break;
    case `2`:
      document.write(`<br>`);
      document.write(`jugada: elegiste papel`);
      document.write(`<br>`);
      if (aleatorio == 1) {
        document.write(`el resultado contra tu rival fue: `);
        document.write(`<br>`);
        document.write(`piedra y papel gana papel`);
      } else if (aleatorio == 2) {
        document.write(`empate`);
        document.write(`<br>`);
        document.write(`papel y papel`);
      } else if (aleatorio == 3) {
        document.write(`perdiste :( te gano la compu xd`);
        document.write(`<br>`);
        document.write(`la tijera corta el papel`);
      } else {
        document.write(`ingrese un numero valido`);
      }
      break;
    case `3`:
      document.write(`<br>`);
      document.write(`jugada: elegiste tijeras`);
      document.write(`<br>`);
      if (aleatorio == 1) {
        document.write(`el resultado contra tu rival fue: `);
        document.write(`<br>`);
        document.write(`piedra gana a tijeras :(`);
      } else if (aleatorio == 2) {
        document.write(`ganaste pa`);
        document.write(`<br>`);
        document.write(`tijeras gana papel`);
      } else if (aleatorio == 3) {
        document.write(`empate`);
        document.write(`<br>`);
        document.write(`la tijera contra tijera`);
      } else {
        document.write(`ingrese un numero valido`);
      }
      break;
    default:
      document.write(`igrese jugada valida`);
      break;
  }
};
// preguntar.
alert(`F5 para reinicar`);
const inputJugar = confirm(`desea jugar ?`);
let input = prompt(`ingrese jugada= 1-piedra 2-papel 3-tijeras`);

resultado(input);
//document.write(`${num(1,4)}`)
