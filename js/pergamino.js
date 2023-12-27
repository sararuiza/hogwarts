// SELECTORES 
const rollo = document.querySelectorAll(".rollo");
const textoArea = document.querySelector(".texto__area");
const textoMaquina = document.querySelector(".texto");
const inicioMaquina = document.querySelector("#start");
const pergamino = document.querySelector('.pergamino')

let me = {
  name: undefined,
  age: undefined,
  family: undefined,
  qualities: undefined,
  lineage: undefined,
  house: undefined,
  animalPatronus: undefined
};

const inputText = document.createElement('input');
inputText.placeholder = 'Mi nombre es...';
inputText.classList.add('input');

inputText.addEventListener('input', function() {
  validarLetras(this);
});

inputText.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Evita que se agregue el salto de línea por defecto

    // Lógica para obtener el valor del input y verificar si contiene números
    const inputValue = inputText.value;
    const containsNumbers = /\d/.test(inputValue); // Verifica si hay números

    if (containsNumbers) {
      alert('¡Solo se permiten letras!');
      return; // Detener el flujo si se ingresan números
    }

    // Si solo hay letras, puedes continuar con la lógica deseada aquí
    // Por ejemplo, asignar el valor a la propiedad 'name' del objeto 'me'
    me.name = inputValue;

    // Lógica adicional o acciones a realizar después de validar y procesar el valor
  }
});


// Función para validar solo letras
function validarLetras(input) {
  var regex = /^[a-zA-Z\s]*$/;
  var mensajeError = document.getElementById("mensajeErrorLetras");

  if (!regex.test(input.value)) {
    mensajeError.innerHTML = "¡Solo se permiten letras!";
    mostrarError('mensajeErrorLetras');
    input.value = input.value.slice(0, -1); // Elimina el último carácter
  } else {
    mensajeError.innerHTML = "";
  }
}

// Función para validar solo números
function validarNumeros(input) {
  var regex = /^\d+$/;
  var mensajeError = document.getElementById("mensajeErrorNumeros");

  if (!regex.test(input.value)) {
    mensajeError.innerHTML = "¡Solo se permiten números!";
    mostrarError('mensajeErrorNumeros');
    input.value = input.value.replace(/\D/g, ''); // Elimina los caracteres que no son números
  } else {
    mensajeError.innerHTML = "";
  }
}

function mostrarError(elemento) {
  var errorElemento = document.getElementById(elemento);
  errorElemento.classList.add('error-message'); // Agregar la clase de estilo al mensaje de error
  errorElemento.style.display = 'block';
  
  setTimeout(function() {
    errorElemento.style.display = 'none';
    errorElemento.classList.remove('error-message'); // Eliminar la clase después de ocultar el mensaje
  }, 5000); // Ocultar el mensaje después de 5 segundos
}


inicioMaquina.addEventListener("click", () => {
  setTimeout(() => {
    textoArea.classList.add("textoAbierto");
    rollo[1].classList.add("rolloCerrado");
    rollo[0].classList.add("rolloCerrado");
    maquinaEscribir("", true);
    maquinaEscribir(
      "¡Bienvenido a Hogwarts joven alma!",
      false
    );
    setTimeout(() => {
      maquinaEscribir("mi nombre es Albus Dumbledore...");
      setTimeout(() => {
        maquinaEscribir("¿Cuál es tu nombre?...");
        pergamino.insertAdjacentElement('afterend', inputText);
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
