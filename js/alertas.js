function validar(input) {
  return new Promise(resolve => {
    input.addEventListener('keydown', (event) => {
      // Aquí van las validaciones del señor Emanuel

      if (event.key === 'Enter') {
        resolve(input.value);
      }
    });
  });
}



inputText.addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
    event.preventDefault(); // Evita que se agregue el salto de línea por defecto

    // Lógica para obtener el valor del input y verificar si contiene números
    const inputValue = inputText.value;
    const containsNumbers = /\d/.test(inputValue); // Verifica si hay números

    if (containsNumbers) {
    mostrarAlertaPersonalizada('¡Solo se permiten letras!');

    return; // Detener el flujo si se ingresan números
    }

    // Si solo hay letras, puedes continuar con la lógica deseada aquí
    // Por ejemplo, asignar el valor a la propiedad 'name' del objeto 'me'
    me.name = inputValue;

    // Lógica adicional o acciones a realizar después de validar y procesar el valor
}
});
  
  
  function validarLetras(input) {
    var regex = /^[a-zA-Z\s]*$/;
    var mensajeError = document.getElementById("mensajeErrorLetras");
  
    if (!regex.test(input.value)) {
      mensajeError.textContent = "Solo se permiten letras!";
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
        mensajeError.innerHTML = "Solo se permiten números!";
        mostrarError('mensajeErrorNumeros');
        input.value = input.value.replace(/\D/g, ''); // Elimina los caracteres que no son números
    } else {
        mensajeError.innerHTML = "";
    }
}

  
  // Función para mostrar alertas personalizadas en un contenedor específico
function mostrarAlertaPersonalizada(mensaje) {
    const alerta = document.createElement('p');
    alerta.className = 'error-message';

    // Aplicar estilos y contenido a la alerta
    alerta.textContent = mensaje;

    // Insertar la alerta dentro del pergamino
    pergamino.appendChild(alerta);

    // Mostrar la alerta
    alerta.style.display = 'block';

    // Ocultar la alerta después de cierto tiempo
    setTimeout(function() {
        alerta.style.display = 'none';
        alerta.remove(); // Eliminar la alerta del DOM
    }, 2000); // Ocultar la alerta después de 2 segundos (ajusta este tiempo según tus necesidades)
}
  
  // Función para mostrar errores con alertas personalizadas
  function mostrarError(elemento) {
    var errorElemento = document.getElementById(elemento);
    errorElemento.classList.add('error-message');
  
    const mensajeError = errorElemento.innerHTML;
    mostrarAlertaPersonalizada(mensajeError);
  }
  
