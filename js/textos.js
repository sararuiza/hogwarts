const textoMaquina = document.querySelector(".texto");

const palabras = ["hola como estas"];

let currentIndex = 0;

function maquinaEscribir() {
  textoMaquina.textContent = ""; //esto se hizo por que en el index habia un texto por defecto, entonces el objetivo es que este vacio
  let textArr = palabras[currentIndex];
  textArr = textArr.split(""); // split lo que hace es separar por un caracter es comun puede ser coma o punto, pero si no le pongo nada, separa letra por letra

  let i = 0;
  const pintarString = setInterval(() => {
    textoMaquina.textContent += textArr[i];
    i++;

    if (i == textArr.length) {
      clearInterval(pintarString);
    }
  }, 200); //tiempo para escribir las letras
}

maquinaEscribir();
