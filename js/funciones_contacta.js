
const pildoras = document.querySelectorAll(".pildoras");

pildoras.forEach(pildora => { 

const textoOriginal = pildora.innerText; // Guardar texto original para restaurarlo luego

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
        }, i * 100); // Delay aplicado a orden aleatorio de aparación del texto
    });
};

setTimeout(animarTextoAleatorio, 100);
});


/*las líneas horizontales se cargan al entrar en pantalla*/
const filas = document.querySelectorAll(".artista");

function actualizarBarra(fila) { //función que añade la animación a las barras
  fila.classList.add('visible');
}

const observer = new IntersectionObserver((entrada, observar) => { //constante que "observa" la ventana del navegador
entrada.forEach(entrada => { 
    if (entrada.isIntersecting) {
      actualizarBarra(entrada.target); //invoca la función
      observar.unobserve(entrada.target); // solo activarlo una vez
    }
  });
}, { threshold: 0.3 }); //porcentaje de visibilidad del elemento en el viewport

/*que el "observer" funcione para cada linea horizontal*/
filas.forEach(barra => observer.observe(barra));

function elegir() {
const matrix = document.querySelectorAll(".matrix");

    if(window.innerWidth < 770){
        matrix[1].style.display = "flex";
        matrix[0].style.display = "none";
    }else{
        matrix[0].style.display = "flex";
        matrix[1].style.display = "none";
        console.log("no funciona");
    };
};

/**/
function fotoTreboada () {

const alinearArtistas = document.querySelectorAll(".galeria-artistas picture img");

for (let a = 0; a < alinearArtistas.length; a++) {
  const altTexto = alinearArtistas[a].getAttribute("alt") || "";

  if (altTexto.includes("Treboada")) {
    alinearArtistas[a].style.top = "110px";
    alinearArtistas[a].style.height = "auto";
  } else {
    alinearArtistas[a].style.height = "100%";
  }
}
}

document.addEventListener("DOMContentLoaded", () => {
  elegir();
  fotoTreboada();
});


