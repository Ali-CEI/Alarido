
const pildoras = document.querySelectorAll(".pildoras");

pildoras.forEach(pildora => { 

// Guardar texto original para restaurarlo luego
const textoOriginal = pildora.innerText;

pildora.innerHTML = pildora.innerText.split("").map(function(caracter){
    return caracter == " " ? caracter : `<span>${caracter}</span>`;
}).join("");


function mezclar(artista) {
    for (let i = artista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [artista[i], artista[j]] = [artista[j], artista[i]];
    }

    return artista;
};

const spans = pildora.querySelectorAll(".pildoras span");

function animarTextoAleatorio() {
    const mezclado = mezclar([...spans]);
        mezclado.forEach((span, i) => {
            setTimeout(() => {
            span.classList.add('aparecido');

                            if (i === mezclado.length - 1) {
                    setTimeout(() => {
                        pildora.textContent = textoOriginal;
                    }, 1000); // Espera un poco más después del último span
                }
        }, i * 200); // Delay aplicado a orden aleatorio de aparación del texto
    });
};

setTimeout(animarTextoAleatorio, 200);
});


/*las líneas horizontales se cargan al entrar en pantalla*/
const artes = document.querySelector(".ga");
const filas = document.querySelectorAll(".arte");

function actualizarBarra(barra) { //función que añade la animación a las barras
  barra.classList.add('visible');
}

const observer = new IntersectionObserver((entrada, observar) => { //constante que "observa" la ventana del navegador
entrada.forEach(entrada => { 
    if (entrada.isIntersecting) {
      actualizarBarra(entrada.target); //invoca la función
      observar.unobserve(entrada.target); // solo activarlo una vez
    }
  });
}, { threshold: 0.5 }); //porcentaje de visibilidad del elemento en el viewport

/*que el "observer" funcione para cada linea horizontal*/
filas.forEach(barra => observer.observe(barra));


console.log("¡Hola! Este es un mensaje de consola para verificar que el script se ha cargado correctamente.");