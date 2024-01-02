import { playWindow } from './header.js'

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
  family: '',
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
              swichPergamino();
              linaje();
            }
          });
        }, 400);
      }, 2000);
    }, 2000);
  }, 3000);
});

function linaje(){
  setTimeout(()=>{ 
    maquinaEscribir('Elige una de las 3 cartas para definir tu linaje...',true)
    const contenedorFlotante = document.createElement('div')
    contenedorFlotante.classList.add('contenedorFilas')
    desordenar(linages)
    linages.forEach(e => {
      const div = document.createElement('div');
      const h4 = document.createElement('h4')
      div.appendChild(h4)
      div.classList.add('carta')
      h4.textContent = `${e}`; 
      div.addEventListener('click', function() {
        div.classList.add('cartaFlip')
        me.lineage = e
        setTimeout(()=>{
          contenedorFlotante.classList.remove('patinarAlCentro')
          div.style.animation = 'big-zoom .4s ease-out forwards'
          setTimeout(() => {
            contenedorFlotante.remove()
            elegirFamilia()
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
  maquinaEscribir(' ',true)
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
  swichPergamino()
  setTimeout(()=>{
    maquinaEscribir('Ahora, elige dos cartas; ellas revelarán los apellidos que te acompañarán en tu travesía mágica.',true)
    setTimeout(() => {
      setTimeout(()=>{
        maquinaEscribir('Selecciona con sabiduría, pues tus apellidos te guiarán en tu viaje hacia el conocimiento y la magia.',true)
        const contenedorFlotante = document.createElement('div')
        contenedorFlotante.classList.add('contenedorFilas')
        apellidosHarryPotter.forEach(e => {
          const div = document.createElement('div');
          const h4 = document.createElement('h4')
          div.appendChild(h4)
          div.classList.add('carta')
          h4.textContent = `${e}`; // Contenido para identificar cada div
          div.addEventListener('click', function() {
            div.classList.add('cartaFlip')
            me.family += e
            setTimeout(() => {
              div.style.animation = 'big-zoom .4s ease-out forwards'
            }, 2000);
            if(me.family.length > 10){
              setTimeout(()=>{
                setTimeout(() => {
                contenedorFlotante.classList.remove('patinarAlCentro')
                  contenedorFlotante.remove()
                  console.log(me.family)
                  valores()
                }, 400);
              },2000)
            }else{
              me.family += ' '
            }
          });
          contenedorFlotante.appendChild(div)
        });
        document.body.appendChild(contenedorFlotante)
        setTimeout(()=>{
          contenedorFlotante.classList.add('patinarAlCentro')
        },400)
      },3000)
    }, 4000);
  },3000)
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

function valores(){
  let listaValor = [ ]
  swichPergamino()
  setTimeout(()=>{
    maquinaEscribir('Frente a ti se encuentran tres cartas mágicas.',true);
    setTimeout(() => {
      maquinaEscribir('Cada carta representa un valor fundamental en la magia.');
      setTimeout(() => {
        maquinaEscribir('Deseo que elijas aquella que más resuene contigo...', true)
        me.lineage == 'sangre pura' ? listaValor = ['determinacion','valor','paciencia'] : listaValor = ['valor','lealtad','creatividad']
        const contenedorFlotante = document.createElement('div')
        contenedorFlotante.classList.add('contenedorFilas')
        listaValor.forEach(e =>{
          const div = document.createElement('div');
          div.classList.add('carta')
          div.classList.add('cartaFlip')
          const h4 = document.createElement('h4');
          h4.style.color = '#000'
          h4.textContent = `${e}`; 
          div.appendChild(h4)
          contenedorFlotante.appendChild(div)
          document.body.appendChild(contenedorFlotante)
          contenedorFlotante.classList.add('patinarAlCentro')
          div.addEventListener('click',()=>{
            div.style.animation = 'big-zoom .7s ease-out forwards'
            me.qualities = e
            if (e == 'determinacion'){
              me.house = 'Slytherin'
            }else if(e == 'valor'){
              me.house = 'Gryffindor'
            }else if(e == 'paciencia'){
              me.house = 'Hufflepuff'
            }else{
              me.house = 'Ravenclaw'
            }
            console.log(me.qualities)
            setTimeout(() => {
              contenedorFlotante.classList.remove('patinarAlCentro')
              contenedorFlotante.remove()
              personaje.classList.add('dissapear');
              setTimeout(()=>{
                personaje.classList.remove('dissapear', 'personajeAbajo');
                pergamino.classList.remove('pergaminoArriba');
                maquinaEscribir('Es hora de que seas asignado a una de las casas de Hogwarts...',true)
                setTimeout(()=>{
                  maquinaEscribir('El Sombrero Seleccionador evaluará tus elecciones y determinará dónde perteneces mejor.')
                  setTimeout(()=>{
                    maquinaEscribir('Confía en su elección y que la magia guíe tu destino...',true)
                    setTimeout(()=>{
                      personaje.classList.add('dissapear');
                      elegirCasa()
                    },6000)
                  },6000)
                },6000)
              },4000)
            }, 500);
          })
        })

      }, 3000);
    }, 3000);
  },3000)
}

function elegirCasa(){
  swichPergamino()
  personaje.classList.remove('dissapear');
  playWindow.classList.remove('appear')
  setTimeout(()=>{
    personaje.style.backgroundImage = 'url("../media/personajes/sortingHat.gif")'
    playWindow.classList.add('appear')
    maquinaEscribir(`¡Saludos , ${me.name}!...`,true)
    document.getElementsByClassName('play')[0].style.backgroundImage = 'url(../media/personajes/scena-1.jpg)'
    setTimeout(()=>{
      maquinaEscribir(`${me.age} años ¡ehh!? ¿Qué secretos oculta tu juventud, joven hechicero/a?...`, true);
      setTimeout(()=>{
        maquinaEscribir(`Veo mucha ${me.qualities}...`, true);
        setTimeout(()=>{
          maquinaEscribir('Interesante...')
          setTimeout(()=>{
            maquinaEscribir('Te voy a asignar a...')
            maquinaEscribir(' ',true)
            setTimeout(()=>{
              const sign = document.createElement('h4')
              sign.textContent = me.house
              sign.classList.add('sign')
              document.body.appendChild(sign)
              setTimeout(()=>{
                finallyResults()
              },4000)
            },3000)
          },3000)
        },3000)
      },6000)
    },3000)
  },3000)
}

function finallyResults(){
  swichPergamino()
  personaje.classList.add('dissapear');
  playWindow.classList.remove('appear')
  setTimeout(()=>{
    personaje.classList.remove('dissapear');
    playWindow.classList.add('appear')
    document.getElementsByClassName('play')[0].style.backgroundImage = 'url(../media/personajes/scena-3.png)'
    personaje.style.backgroundImage = 'url("../media/personajes/albus-512.png")'
    pergamino.style.height = '70vh'
    pergamino.style.width = '80vw'
    maquinaEscribir('Bienvenido, este es tu folio...',true)
    setTimeout(()=>{
      maquinaEscribir(`Nombre: ${me.name}`)
      setTimeout(()=>{
        maquinaEscribir(`Edad: ${me.age}`)
        setTimeout(()=>{
          maquinaEscribir(`Linaje: ${me.lineage}`)
          setTimeout(()=>{
            maquinaEscribir(`Familia: ${me.family}`)
            setTimeout(()=>{
              maquinaEscribir(`Cualidades: ${me.qualities}`)
              setTimeout(()=>{
                maquinaEscribir(`Casa: ${me.house}`)
                setTimeout(()=>{
                  maquinaEscribir('Te espera un 2024 lleno de retos en Riwi-Hogwarts... Que la disciplina te acompañe...',true)
                  setTimeout(()=>{
                    const sign = document.createElement('h4')
                    sign.textContent = 'Fin'
                    sign.classList.add('sign')
                    document.body.appendChild(sign)
                    setTimeout(()=>{
                      playWindow.classList.remove('appear')
                    },1500)
                  },5000)
                },6000)
              },1500)
            },1500)
          },1500)
        },1500)
      },1500)
    },2000)
  })
}