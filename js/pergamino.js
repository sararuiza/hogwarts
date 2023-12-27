//SELECTORES 
const rollo = document.querySelectorAll(".rollo");
const textoArea = document.querySelector(".texto__area");
const textoMaquina = document.querySelector(".texto");
const inicioMaquina = document.querySelector("#start");


//EVENTOS
inicioMaquina.addEventListener("click", () => {
  setTimeout(() => {
    textoArea.classList.add("textoAbierto");
    rollo[1].classList.add("rolloCerrado");
    rollo[0].classList.add("rolloCerrado");
    maquinaEscribir(
      "¡Bienvenido a Hogwarts joven alma!"
      );
      setTimeout(()=>{
        maquinaEscribir("mi nombre es Albus Dumbledore...")
        setTimeout(()=>{
          maquinaEscribir("¿Cúal es tu nombre?...")
        },3000)
      },3000)
  }, 3000);
});

//FUNCIONES
function maquinaEscribir(texto) {
  let palabras = [texto];
  let currentIndex = 0;

  let textArr = palabras[currentIndex];
  textArr = textArr.split(""); // split lo que hace es separar por un caracter es comun puede ser coma o punto, pero si no le pongo nada, separa letra por letra

  let i = 0;
  const pintarString = setInterval(() => {
    textoMaquina.innerHTML += textArr[i];
    i++;

    if (i == textArr.length) {
      clearInterval(pintarString);
    }
  }, 50); //tiempo para escribir las letras
  textoMaquina.innerHTML += '<br>'
}
