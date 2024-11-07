const contenedorEstudiantes = document.querySelector('.grandeEstudiantes');
const actividad = document.getElementById('actividad');
const seccionesEstudiante = document.querySelectorAll('.seccionEstudiante');

function mostrarActividad() {
    // Oculta todas las secciones de estudiante
    seccionesEstudiante.forEach(seccion => {
        seccion.style.display = 'none';
    });
    // Muestra la actividad
    actividad.style.display = 'block';
}

function ocultarActividad(){
    seccionesEstudiante.forEach(seccion => {
        seccion.style.display = 'block';
    });
    // Muestra la actividad
    actividad.style.display = 'none';
}


