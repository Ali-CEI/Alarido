    /*FUNCIONES CONTACTO: contacto, unete y artistas */

/*
Incluye:
- funciones para la pagina de contacto
- funciones para la pagina de artistas
- funciones para la pagina de unete

Invoca las funciones al final

*/

    /*funciones contacto*/
    
/*js que crea el texto en la pagina*/
const pildoras = document.querySelectorAll(".pildoras");

pildoras.forEach(pildora => { 

const textoOriginal = pildora.innerText; // Guardar texto original para restaurarlo luego

pildora.innerHTML = pildora.innerText.split("").map(function(caracter){     /*corta el texto y lo separa en spans*/
    return caracter == " " ? caracter : `<span>${caracter}</span>`;
}).join("");     /*lo vuelve a unir*/


function mezclar(artista) {
    for (let i = artista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [artista[i], artista[j]] = [artista[j], artista[i]];
    }

    return artista;
};

const spans = pildora.querySelectorAll(".pildoras span"); 

    /*hace que aparezca el texto aleatoriamente*/
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

/*cambia el texto que aparece en funcion del tamaño de pantalla*/
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

/*funcion que hace que aparezca el contacto si la persona quiere mas info en general*/
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

/*PAGINA ARTISTAS (CONTRATAR)*/
function aparecerFotos(foto) { //función que añade la animación a las fotos como si se deslizasen desde abajo
  foto.classList.add('visible');
}

const o = new IntersectionObserver((entrada, observar) => { //constante que "observa" la ventana del navegador
entrada.forEach(entrada => { 
    if (entrada.isIntersecting) {
      aparecerFotos(entrada.target); //invoca la función
      observar.unobserve(entrada.target); // solo activarlo una vez
    }
  });
}, { threshold: 0.2 }); //porcentaje de visibilidad del elemento en el viewport

fotos.forEach(foto => o.observe(foto));

/*Funcion para alinear las fotos verticales (Ali y Carol)*/
function fotoAli () {

const alinearArtistas = document.querySelectorAll(".galeria-artistas picture img");

for (let a = 0; a < alinearArtistas.length; a++) {
  const altTexto = alinearArtistas[a].getAttribute("alt") || "";

  if(window.innerWidth > 770){
    if (["Ali", "Carol"].some(nombre => altTexto.includes(nombre))) {
        alinearArtistas[a].style.height = "auto";
    };

    if (altTexto.includes("Ali")) { //si es Ali...
        alinearArtistas[a].style.bottom = "130px";
        alinearArtistas[a].style.position = "relative";
    };
 };

    if(window.innerWidth < 770){ //Si es Carol...
        if (altTexto.includes("Carol")) {
        alinearArtistas[a].style.height = "auto";
        };
    }
};
}

/*funcion que despliega el formulario de contratacion*/
function contratar() {
    const contratar = document.querySelectorAll(".btn.contratar");
    const popup = document.getElementById("popup")

    if (contratar <= 0) return;
        
    contratar.forEach(contrato => {
        contrato.addEventListener("click", () => {
            popup.classList.add("desplegado");
        });

    const cerrar = document.querySelector(".cerrar");
    
    if (cerrar <= 0) return;
    
    cerrar.addEventListener("click", () => {
        popup.classList.remove("desplegado");
    });
  });
};

/*PAGINA DE UNETE*/
//funcion que crea un rastro de puntos donde el puntero al entrar desde el ordenador
//cambiar por estrellas o por una linea seguida
function rastro(){
  document.addEventListener('mousemove', rastro => {
    const punto = document.createElement('div');
    punto.className = 'rastro';
    punto.style.left = rastro.clientX + 'px';
    punto.style.top = rastro.clientY + 'px';

    document.body.appendChild(punto);
    punto.addEventListener('animationend', () => {
      punto.remove();
    });
  });
  };

 document.addEventListener('DOMContentLoaded', () => {//invocar al cargar

//FUNCIONES INVOCADAS
elegir();
fotoAli();
pasando();
contratar();

if (window.location.pathname.includes("unete.html"))  {
    rastro();
};

if (window.location.hash === '#contratar') { //para cuando va dirigido desde el btn de contratar del index
    
    const popup = document.getElementById("popup")
    popup.classList.add("desplegado");  
};
});
