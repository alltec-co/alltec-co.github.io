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

//================================
function abrirDetalle(tipo) {
  const titulo = document.getElementById('tituloModalServicio');
  const contenido = document.getElementById('contenidoModalServicio');

  if (tipo === 'tienda') {
    titulo.innerText = 'Zona de Compra — Componentes & Accesorios';
    contenido.innerHTML = `
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="bg-dark p-3 rounded border border-secondary text-white h-100 d-flex flex-column">
            <h5 class="fw-bold">Disco Estado Sólido SSD 480GB</h5>
            <p class="small text-muted flex-grow-1">Aumenta hasta 10 veces la velocidad de procesamiento de tu equipo.</p>
            <span class="fs-4 fw-bold text-warning mb-3">$140.000 COP</span>
            <button class="btn btn-warning fw-bold w-100" onclick="solicitarCompra('SSD 480GB', '$140.000 COP')">
              Comprar por WhatsApp
            </button>
          </div>
        </div>
        <div class="col">
          <div class="bg-dark p-3 rounded border border-secondary text-white h-100 d-flex flex-column">
            <h5 class="fw-bold">Memoria RAM DDR4 8GB</h5>
            <p class="small text-muted flex-grow-1">Ideal para multitarea fluida en portátiles y equipos de escritorio.</p>
            <span class="fs-4 fw-bold text-warning mb-3">$95.000 COP</span>
            <button class="btn btn-warning fw-bold w-100" onclick="solicitarCompra('Memoria RAM 8GB DDR4', '$95.000 COP')">
              Comprar por WhatsApp
            </button>
          </div>
        </div>
        <div class="col">
          <div class="bg-dark p-3 rounded border border-secondary text-white h-100 d-flex flex-column">
            <h5 class="fw-bold">Kit de Tintas para Impresora</h5>
            <p class="small text-muted flex-grow-1">Botellas de tinta de alto rendimiento para sistemas de impresión continua.</p>
            <span class="fs-4 fw-bold text-warning mb-3">$85.000 COP</span>
            <button class="btn btn-warning fw-bold w-100" onclick="solicitarCompra('Kit de Tintas', '$85.000 COP')">
              Comprar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;
  } else if (tipo === 'soporte') {
    titulo.innerText = 'Soporte Técnico y Mantenimiento de Equipos';
    contenido.innerHTML = `
      <div class="p-2">
        <h4 class="text-warning mb-3">Detalle del Proceso de Mantenimiento</h4>
        <p class="text-light">
          El servicio técnico incluye desarme completo del equipo, aspirado y limpieza de componentes físicos con ultrasonido, sustitución de pasta térmica y diagnóstico lógico de sistema operativo.
        </p>
        <div class="mt-4">
          <a href="https://wa.me/573005563251?text=Hola%20Alltec,%20deseo%20agendar%20un%20mantenimiento%20técnico" target="_blank" class="btn btn-warning fw-bold px-4 py-2">
            Agendar Mantenimiento por WhatsApp
          </a>
        </div>
      </div>
    `;
  } else if (tipo === 'impresoras') {
    titulo.innerText = 'Impresoras y Suministros de Tinta';
    contenido.innerHTML = `
      <div class="p-2">
        <h4 class="text-warning mb-3">Servicios para Impresoras</h4>
        <p class="text-light">
          Mantenimiento correctivo de almohadillas, destape de cabezales y venta de tintas originales y genéricas para impresoras Epson, Canon y HP.
        </p>
        <div class="mt-4">
          <a href="https://wa.me/573005563251?text=Hola%20Alltec,%20necesito%20asesoría%20sobre%20tintas%20o%20mantenimiento%20de%20impresora" target="_blank" class="btn btn-warning fw-bold px-4 py-2">
            Consultar Tintas por WhatsApp
          </a>
        </div>
      </div>
    `;
  } else if (tipo === 'streaming') {
    titulo.innerText = 'Servicios Digitales y Cuentas de Streaming';
    contenido.innerHTML = `
      <div class="p-2">
        <h4 class="text-warning mb-3">Suscripciones y Licencias</h4>
        <p class="text-light">
          Gestión de plataformas digitales de entretenimiento y activación de licencias oficiales para software de oficina y sistemas operativos.
        </p>
        <div class="mt-4">
          <a href="https://wa.me/573005563251?text=Hola%20Alltec,%20quisiera%20consultar%20disponibilidad%20de%20cuentas%20o%20licencias" target="_blank" class="btn btn-warning fw-bold px-4 py-2">
            Consultar Disponibilidad por WhatsApp
          </a>
        </div>
      </div>
    `;
  }

  const modal = new bootstrap.Modal(document.getElementById('modalServicioExpandido'));
  modal.show();
}

function solicitarCompra(producto, precio) {
  const mensaje = `Hola Alltec, estoy interesado en comprar el producto: *${producto}* con valor de *${precio}*. ¿Tienen disponibilidad en Mosquera?`;
  window.open(`https://wa.me/573005563251?text=${encodeURIComponent(mensaje)}`, '_blank');
}