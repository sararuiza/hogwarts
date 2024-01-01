// SELECTORES 
const rollo = document.querySelectorAll(".rollo");
const personaje = document.querySelector('.personaje')
const textoArea = document.querySelector(".texto__area");
const textoMaquina = document.querySelector(".texto");
const start = document.querySelector("#start");
const pergamino = document.querySelector('.pergamino')

// Inputs TEMPORALES
const inputText = document.createElement('input');
const div = document.createElement('div');

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


const apellidosHarryPotter = [
  "Potter",
  "Weasley",
  "Malfoy",
  "Black",
  "Longbottom",
  "Dursley",
  "Granger",
  "Lovegood",
  "Crouch",
  "Tonks",
];

function desordenar(array){
  array = array.sort(function() {return Math.random() - 0.5});
}

linagesDesorden = desordenar(linages)

inputText.placeholder = 'Mi nombre es...';
inputText.classList.add('input');


start.addEventListener("click", () => {
  setTimeout(() => {
    swichPergamino();
    maquinaEscribir("¡Bienvenido a Hogwarts joven alma!", true);
    personaje.style.animation = 'patinar 3s ease-out';
    setTimeout(() => {
      maquinaEscribir("mi nombre es Albus Dumbledore...");
      setTimeout(async () => {
        maquinaEscribir("¿Cuál es tu nombre?...");
        pergamino.insertAdjacentElement('afterend', inputText);
        me.name = await validar(inputText);
        inputText.style.animation = 'big-zoom .4s ease-out forwards';
        setTimeout(async () => {
          inputText.remove();
          maquinaEscribir(`Hola ${(me.name)[0].toUpperCase() + (me.name).slice(1)} ¿Cuál es tu edad?`, true);
          const ageInput = document.createElement('input');
          ageInput.placeholder = 'Mi edad es...';
          ageInput.classList.add('input');
          pergamino.insertAdjacentElement('afterend', ageInput);

          ageInput.addEventListener('keydown', async (event) => {
            if (event.key === 'Enter') {
              const inputValue = ageInput.value;
              if (isNaN(inputValue)) {
                mostrarAlertaPersonalizada('¡Solo se permiten números para la edad!');
                return;
              }

              me.age = inputValue;
              ageInput.style.animation = 'big-zoom .4s ease-out forwards';
              setTimeout(()=>{
                ageInput.remove();
              },400)
              personaje.classList.add('opacity0', 'personajeAbajo');
              personaje.classList.remove('opacity0');
              pergamino.classList.add('pergaminoArriba');
              maquinaEscribir(" ", true);
              swichPergamino();
              ruleta();
            }
          });
        }, 400);
      }, 2000);
    }, 2000);
  }, 3000);
});
// Función para validar solo números en el input de edad

function elegirCarta(){
    swichPergamino()
}

function ruleta(){
  setTimeout(()=>{
    maquinaEscribir('Elige una de las 3 cartas...',true)
    const contenedorFlotante = document.createElement('div')
    contenedorFlotante.classList.add('contenedorFilas')
    linages.forEach(e => {
      const div = document.createElement('div');
      const h4 = document.createElement('h4')
      div.appendChild(h4)
      div.classList.add('carta')
      h4.textContent = `${e}`; // Contenido para identificar cada div
      div.addEventListener('click', function() {
        div.classList.add('cartaFlip')
        me.lineage = e
        setTimeout(()=>{
          contenedorFlotante.classList.remove('patinarAlCentro')
          div.style.animation = 'big-zoom .4s ease-out forwards'
          setTimeout(() => {
            contenedorFlotante.remove()
          }, 400);
        },2000)
        console.log(me.lineage);
      });
      contenedorFlotante.appendChild(div)
      document.body.appendChild(contenedorFlotante)
      setTimeout(()=>{
        contenedorFlotante.classList.add('patinarAlCentro')
      },400)
    });
  },3000)
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

function elegirFamilia(){
  setTimeout(()=>{
    maquinaEscribir('Ahora, elige dos cartas; ellas revelarán los apellidos que te acompañarán en tu travesía mágica.',true)
    setTimeout(()=>{
      'Selecciona con sabiduría, pues tus apellidos te guiarán en tu viaje hacia el conocimiento y la magia.'
    },2000)
  },2500)
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




