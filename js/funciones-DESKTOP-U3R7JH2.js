    
    /*Cambia el nombre de la página en función de si está activa o no*/
    const tituloOriginal = "Somos el alarido"; //constante que la nombra si está activa
    const tituloInactivo = "¿escuchas el eco?"; //constante que la nombra si está inactiva

    document.addEventListener("visibilitychange", () => { //extrae del documento 
      if (document.hidden) { //condicional
        document.title = tituloInactivo; //si está inactiva el título (document.tittle) es la constante..
      } else { //condicional 2
        document.title = tituloOriginal; //si está activa el título es el original
      }
    });

   /*Hacce aparecer el logo de la página en la sección de introducción*/
    const textoAnimado = document.querySelector(".texto-animado");
    const spans = textoAnimado.querySelectorAll("span");

    // Función para mezclar el array
    function mezclar(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    function animarTextoAleatorio() {
      const mezclado = mezclar([...spans]);
      mezclado.forEach((span, i) => {
        setTimeout(() => {
          span.classList.add('aparecido');
        }, i * 200); // Delay aplicado a orden aleatorio de aparación del texto
      });
    };

    document.addEventListener('DOMContentLoaded', animarTextoAleatorio);

   
    
  // Activar clase solo con doble clic
  textoAnimado.addEventListener("dblclick", () => {
  textoAnimado.classList.add("seleccionado");
  });

  // Remover clase al perder selección
  document.addEventListener("selectionchange", () => {
    const seleccion = window.getSelection();
    const contiene = seleccion.anchorNode && textoAnimado.contains(seleccion.anchorNode);
    const textoSeleccionado = seleccion.toString();

    // Si ya no hay selección dentro de "palabra", quitar clase
    if (!textoSeleccionado || !contiene) {
      textoAnimado.classList.remove("seleccionado");
    }
  });

    const imagenes = document.querySelectorAll(".element-grid");
    const enlaces = document.querySelectorAll(".element-grid");
    const textosDescrip = document.querySelectorAll(".grid-texto");
    const tarjetas = document.querySelectorAll(".tarjeta");

    imagenes.forEach(imagen => {
  imagen.addEventListener("click", () => {
      textosDescrip.forEach(texto => {
    if (texto) {
      if (texto.style.visibility === 'visible' || texto.style.visibility === '') {
        texto.style.visibility = 'hidden';
        
      } else {
        texto.style.visibility = 'visible';
      }
    }          });

      tarjetas.forEach(tarjeta => {
        if (tarjeta) {
            if (texto.style.visibility === 'visible' || texto.style.visibility === '') {
            tarjeta.style.display = 'flex';
        } else {
             tarjeta.style.display = 'none';
        }
        }
      });
  });
});

  /*------- CAMBIA FONDO A AMARILLO AL COLOCAR EL CURSOR SOBRE KA IMAGEN DE PROJECTOS -------*/
    document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.element-grid-img-int');


    imgs.forEach(img => {
      let timeoutId;

      img.addEventListener('mouseenter', () => {
        document.body.style.backgroundColor = 'var(--color-1)';
        textosDescrip.forEach(texto => {
        texto.style.color = "white";
        });
        const gridItem = img.closest('.element-grid');
        if (!gridItem) return;

        const captionP = gridItem.querySelector('.element-grid-texto p');
        const otroDiv = gridItem.querySelector('.element-grid-texto-none p');
        

        /*// Esperar 1 segundo antes de añadir las clases
        timeoutId = setTimeout(() => {
          document.getElementsById('descrip').style.visibility = 'hidden'
          if (otroDiv) otroDiv.classList.add('texto-blanco');
        }, 500);*/
      });

      img.addEventListener('mouseleave', () => {
        document.body.style.backgroundColor = 'white';
        textosDescrip.forEach(texto => {
        texto.style.color = "black";
        });
        clearTimeout(timeoutId); // Cancelar si el usuario sale antes del segundo

      });
    });
  });

console.log("¡Hola! Este es un mensaje de consola para verificar que el script se ha cargado correctamente.");

/*SECCION PROJECTOS DESPLEGABLE*/
const navegacion = document.querySelector(".element-grid-img img");
const botones = document.querySelectorAll(".element-grid-img img");

/*
for(let i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", function(){
        navegacion.className = i == 0 ? "desplegado" : "";
    });
}*/

botones.forEach(boton => {
    boton.addEventListener("click", () => botones.classList.toggle("desplegado"));
    });

console.log("mensaje de prueba");
