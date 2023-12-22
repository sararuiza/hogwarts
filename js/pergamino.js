//SELECTORES 
const rollo = document.querySelectorAll(".rollo");
const textoArea = document.querySelector(".texto__area");
const textoMaquina = document.querySelector(".texto");
const inicioMaquina = document.querySelector("header a");


//EVENTOS
inicioMaquina.addEventListener("click", () => {
  textoArea.classList.add("textoAbierto");
  rollo[0].classList.add("rolloCerrado");
  rollo[1].classList.add("rolloCerrado");
  setTimeout(() => {
    maquinaEscribir(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tenetur assumenda iste non cupiditate quo et impedit dignissimos perferendis quos?"
    );
  }, 3000);
});

//FUNCIONES
function maquinaEscribir(texto) {
  let palabras = [texto];
  let currentIndex = 0;

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
  }, 50); //tiempo para escribir las letras
}
