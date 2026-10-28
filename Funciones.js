//Formulario de diagnóstico y funcionamiento
document.addEventListener('DOMContentLoaded', function () {
  const selectProblema = document.getElementById('selectProblema');
  const contenedorOtro = document.getElementById('contenedorOtro');
  const inputOtro = document.getElementById('inputOtro');
  const formCuestionario = document.getElementById('formCuestionario');

  // 1. Alternar visibilidad del campo "Otro problema"
  if (selectProblema) {
    selectProblema.addEventListener('change', function () {
      if (this.value === 'otro') {
        contenedorOtro.classList.remove('d-none');
        inputOtro.required = true;
      } else {
        contenedorOtro.classList.add('d-none');
        inputOtro.required = false;
        inputOtro.value = '';
      }
    });
  }

  // 2. Validación de Bootstrap y redirección automática a WhatsApp
  if (formCuestionario) {
    formCuestionario.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita la recarga de página por defecto
      event.stopPropagation();

      if (formCuestionario.checkValidity()) {
        // Captura de datos ingresados
        const nombre = document.getElementById('inputNombre').value;
        const dispositivo = document.getElementById('selectDispositivo').value;
        let problema = selectProblema.value;

        if (problema === 'otro') {
          problema = inputOtro.value;
        }

        // Construcción del mensaje para WhatsApp Business (300 556 3251)
        const mensajeWhatsApp = `Hola Alltec, mi nombre es _${nombre}_. Requiero servicio técnico para mi equipo.\n\n` +
                                `*Dispositivo:* ${dispositivo}\n` +
                                `*Falla o problema:* ${problema}\n\n` +
                                `Quedo atento a sus indicaciones y cotización.`;

        // Generación de URL codificada
        const telefonoWhatsApp = '573005563251';
        const urlWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;

        // Apertura en pestaña nueva hacia WhatsApp
        window.open(urlWhatsApp, '_blank');
      }

      formCuestionario.classList.add('was-validated');
    }, false);
  }
});
