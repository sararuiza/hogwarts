// SELECTORES 
const rollo = document.querySelectorAll(".rollo");
const textoArea = document.querySelector(".texto__area");
const textoMaquina = document.querySelector(".texto");
const start = document.querySelector("#start");
const pergamino = document.querySelector('.pergamino')


// Inputs TEMPORALES
const inputText = document.createElement('input');

let me = {
  name: undefined,
  age: undefined,
  family: undefined,
  qualities: undefined,
  lineage: undefined,
  house: undefined,
  animalPatronus: undefined
};

inputText.placeholder = 'Mi nombre es...';
inputText.classList.add('input');


start.addEventListener("click", () => {
  setTimeout(() => {
    textoArea.classList.add("textoAbierto");
    rollo[1].classList.add("rolloCerrado");
    rollo[0].classList.add("rolloCerrado");
    maquinaEscribir("", true);
    maquinaEscribir("¡Bienvenido a Hogwarts joven alma!",false);
    setTimeout(() => {
      maquinaEscribir("mi nombre es Albus Dumbledore...");
      setTimeout( async () => {
        maquinaEscribir("¿Cuál es tu nombre?...");
        pergamino.insertAdjacentElement('afterend', inputText);
        me.name = await validar(inputText) ;
        inputText.style.animation = 'big-zoom .4s ease-out forwards '
        setTimeout(()=>{
          inputText.remove()
        },400)
      }, 3000);
    }, 3000);
  }, 3000);
});

function maquinaEscribir(texto, clean = false) {
  if (clean) {
    textoMaquina.innerHTML = '';
    return;
  }

  let palabras = [texto];
  let currentIndex = 0;

  let textArr = palabras[currentIndex];
  textArr = textArr.split("");

  let i = 0;
  const pintarString = setInterval(() => {
    textoMaquina.innerHTML += textArr[i];
    i++;

    if (i == textArr.length) {
      clearInterval(pintarString);
    }
  }, 50);
  textoMaquina.innerHTML += '<br>';
}