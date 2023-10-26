// Obtén una referencia al <link>carrusel</link>
var carrusel = document.querySelector('.carrusel');

// Configura la velocidad de desplazamiento en milisegundos
var velocidad = 2000; // 2 segundos

// Función para desplazar el <link>carrusel</link> automáticamente
function desplazarCarrusel() {
  // Calcula la anchura de una imagen en el <link>carrusel</link>
  var anchuraImagen = carrusel.querySelector('img').offsetWidth;

  // Desplaza el <link>carrusel</link> hacia la izquierda
  carrusel.scrollLeft += anchuraImagen;

  // Si llegamos al final del <link>carrusel</link>, volvemos al principio
  if (carrusel.scrollLeft >= carrusel.scrollWidth - anchuraImagen) {
    carrusel.scrollLeft = 0;
  }
}

// Inicia el desplazamiento automático del <link>carrusel</link>
setInterval(desplazarCarrusel, velocidad);


