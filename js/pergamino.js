//SELECTORES 
const rollo = document.querySelectorAll(".rollo");
const textoArea = document.querySelector(".texto__area");
const textoMaquina = document.querySelector(".texto");
const inicioMaquina = document.querySelector("#start");
const pergamino = document.querySelector('.pergamino')

let me = { name: undefined, 
        age: undefined, 
        family: undefined, 
        qualities: undefined, 
        lineage: undefined, 
        house: undefined, 
        animalPatronus: undefined}

const inputText = document.createElement('input')
inputText.placeholder = 'Mi nombre es...'
inputText.classList.add('input')

//EVENTOS
inicioMaquina.addEventListener("click", () => {
  setTimeout(() => {
    textoArea.classList.add("textoAbierto");
    rollo[1].classList.add("rolloCerrado");
    rollo[0].classList.add("rolloCerrado");
    maquinaEscribir("",true)
    maquinaEscribir(
      "¡Bienvenido a Hogwarts joven alma!"
      ,false);
      setTimeout(()=>{
        maquinaEscribir("mi nombre es Albus Dumbledore...")
        setTimeout(()=>{
          maquinaEscribir("¿Cúal es tu nombre?...")
          pergamino.insertAdjacentElement('afterend',inputText)
        },3000)
      },3000)
  }, 3000);
});

//FUNCIONES

function maquinaEscribir(texto,clean=false) {
  if(clean){
    textoMaquina.innerHTML = ''
    return
  }

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


// Story... 
