

function validar(input) {
    return new Promise(resolve => {
      input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          const inputValue = input.value;
          const containsNumbers = /\d/.test(inputValue);
  
          if (containsNumbers) {
            mostrarAlertaPersonalizada('¡Solo se permiten letras!');
            return;
          }
  
          resolve(inputValue);
          console.log(inputValue);
        }
      });
    });
  }
  
// recibe un elemento indefinido y una asignacion, en el momento es que el elemnto deja de ser indefinido se resuleve la promesa

  function continuar(element){
    return new Promise(resolve =>{
      setInterval(()=>{
        if(element != undefined){
          resolve(element)
        } else(
          console.log('pensando...')
        )
      },1000)
    })
  }
  
  function validarEdad(input) {
    return new Promise(resolve => {
      input.addEventListener('input', () => {
        const inputValue = input.value;
        const containsNonNumbers = /\D/.test(inputValue); // Verificar si hay caracteres que no sean números
  
        if (containsNonNumbers) {
          mostrarAlertaPersonalizada('¡Solo se permiten números para la edad!');
          return;
        }
  
        resolve(inputValue);
        console.log(inputValue);
      });
    });
  }
  
  
  
  
  
  function validarLetras(input) {
    var regex = /^[a-zA-Z\s]*$/;
    var mensajeError = document.getElementById("mensajeErrorLetras");
  
    if (!regex.test(input.value)) {
      mensajeError.textContent = "Solo se permiten letras!";
      mostrarError('mensajeErrorLetras');
      input.value = input.value.slice(0, -1); // Elimina el último carácter
      return false;
    } else {
      mensajeError.innerHTML = "";
      return true;
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
      alerta.textContent = mensaje;
      document.body.appendChild(alerta);
    
      alerta.style.display = 'block';
      const fondoOpaco = document.querySelector('.fondo-opaco');
      fondoOpaco.style.display = 'block';
    
      setTimeout(() => {
        fondoOpaco.style.opacity = 1;
      }, 100);
    
      setTimeout(function() {
        alerta.style.opacity = 0;
        setTimeout(() => {
          alerta.style.display = 'none';
          alerta.remove();
    
          fondoOpaco.style.opacity = 0;
          setTimeout(() => {
            fondoOpaco.style.display = 'none';
          }, 100);
        }, 500); // Cambiar este tiempo para ajustar la duración de la alerta
      }, 2000); // Cambiar este tiempo para ajustar el tiempo de visualización de la alerta
    }
    
    function mostrarError(elemento) {
      var errorElemento = document.getElementById(elemento);
      errorElemento.classList.add('error-message');
    
      const mensajeError = errorElemento.innerHTML;
      mostrarAlertaPersonalizada(mensajeError);
    }