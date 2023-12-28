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

let linages = ["mestizo", "sangre pura","muggle"]

inputText.placeholder = 'Mi nombre es...';
inputText.classList.add('input');


start.addEventListener("click", () => {
  setTimeout(() => {
    swichPergamino()
    
    maquinaEscribir("¡Bienvenido a Hogwarts joven alma!",true);
    setTimeout(() => {
      maquinaEscribir("mi nombre es Albus Dumbledore...");
      setTimeout( async () => {
        maquinaEscribir("¿Cuál es tu nombre?...");
        pergamino.insertAdjacentElement('afterend', inputText);
        me.name = await validar(inputText) ;
        inputText.style.animation = 'big-zoom .4s ease-out forwards '
        setTimeout(async ()=>{
          inputText.remove()
          maquinaEscribir(`Hola ${(me.name).toUpperCase()} ¿Cual es tu edad?`, true)
          inputText.style.animation = ''
          inputText.placeholder = 'Mi edad es...';
          pergamino.insertAdjacentElement('afterend', inputText);
          inputText.value= ""
           me.edad = await validar(inputText) ;
          inputText.style.animation = 'big-zoom .4s ease-out forwards'
          maquinaEscribir(" ", true)

          swichPergamino()

        },400)
      }, 3000);
    }, 3000);
  }, 3000);
});

function elegirCarta(){
    swichPergamino()
}


function swichPergamino(){
  if(textoArea.classList.contains("textoAbierto")){
    textoArea.classList.remove("textoAbierto");
    rollo[1].classList.remove("rolloCerrado");
    rollo[0].classList.remove("rolloCerrado");
    setTimeout(()=>{
      textoArea.classList.add("textoAbierto");
    rollo[1].classList.add("rolloCerrado");
    rollo[0].classList.add("rolloCerrado");
    }, 3000)
  }else{
    textoArea.classList.add("textoAbierto");
    rollo[1].classList.add("rolloCerrado");
    rollo[0].classList.add("rolloCerrado");
    
  }

}





function maquinaEscribir(texto, clean = false) {
  if (clean) {
    textoMaquina.innerHTML = '';
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