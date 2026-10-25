  // 1. Lógica para mostrar/ocultar el campo "Otro problema"
  const selectProblema = document.getElementById('selectProblema');
  const contenedorOtro = document.getElementById('contenedorOtro');
  const inputOtro = document.getElementById('Otro');

  selectProblema.addEventListener('change', function() {
    if (this.value === '4') {
      contenedorOtro.classList.remove('d-none'); // Muestra usando Bootstrap 5
      inputOtro.required = true;                  // Lo hace obligatorio
    } else {
      contenedorOtro.classList.add('d-none');     // Oculta usando Bootstrap 5
      inputOtro.required = false;                 // Quita la obligación
      inputOtro.value = '';                       // Limpia el texto
    }
  });

  // 2. Validación nativa de formularios de Bootstrap 5
  (function () {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()