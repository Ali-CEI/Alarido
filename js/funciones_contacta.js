
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
const fotos = document.querySelectorAll(".artista");

function aparecerFotos(foto) { //función que añade la animación a las barras
  foto.classList.add('visible');
}

const o = new IntersectionObserver((entrada, observar) => { //constante que "observa" la ventana del navegador
entrada.forEach(entrada => { 
    if (entrada.isIntersecting) {
      aparecerFotos(entrada.target); //invoca la función
      observar.unobserve(entrada.target); // solo activarlo una vez
    }
  });
}, { threshold: 0.3 }); //porcentaje de visibilidad del elemento en el viewport

fotos.forEach(foto => o.observe(foto));


function elegir() {
const matrix = document.querySelector(".matrix");
const rojo = document.querySelector(".responsive");
const azul = document.querySelector(".ordena");

if (!matrix) return;

    if(window.innerWidth < 770){
        rojo.style.display ="flex";
    }else{
        azul.style.display = "flex";
    };
};

function fotoAli () {

const alinearArtistas = document.querySelectorAll(".galeria-artistas picture img");

for (let a = 0; a < alinearArtistas.length; a++) {
  const altTexto = alinearArtistas[a].getAttribute("alt") || "";

  if(window.innerWidth > 770){
  if (["Ali", "Hacher", "Carol"].some(nombre => altTexto.includes(nombre))) {
    alinearArtistas[a].style.height = "auto";
  };
  if (altTexto.includes("Ali")) {
    alinearArtistas[a].style.bottom = "130px";
    alinearArtistas[a].style.position = "relative";
  };
  if (altTexto.includes("Hacher")) {
    alinearArtistas[a].style.bottom = "70px";
    alinearArtistas[a].style.position = "relative";
  };
};
    if(window.innerWidth < 770){
        if (altTexto.includes("Carol")) {
        alinearArtistas[a].style.height = "auto";
  };
    }
};
}

function pasando (){
    const pasando = document.querySelector(".aqui");
    const mas = document.querySelector(".mas");

    if (!pasando) return;
    if(window.innerWidth > 770){
        pasando.addEventListener("mouseenter", () => {
            mas.style.visibility = "visible";
        });
    
    }else{
        pasando.addEventListener("click", () => {
            mas.style.visibility = "visible";
        });
    };
}

function contratar() {
   
    const contratar = document.querySelectorAll(".btn.contratar");
    const popup = document.getElementById("popup")
    contratado = false;

    contratar.forEach(contrato => {
        contrato.addEventListener("click", () => {
            popup.classList.add("desplegado");
            contratado = true;
        });

        if(contratado = true){
            window.addEventListener
        }
        
    });};


//FUNCIONES
elegir();
fotoAli();
pasando();
contratar();
