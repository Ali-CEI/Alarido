    /**/
/*programa el modo oscuro*/
const modoOscuro = document.getElementById('modoOscuro');
const body = document.body;

const activarOscuro = () => {
  body.classList.add('dark');
  localStorage.setItem('oscuro', 'activado');
  actualizarFondo(); 
};

const desactivarOscuro = () => {
  body.classList.remove('dark');
  localStorage.setItem('oscuro', 'desactivado');
  actualizarFondo(); 
};

function actualizarFondo() {
  if (body.classList.contains('dark')) {
    body.style.backgroundColor = '#000';
  } else {
    body.style.backgroundColor = '#fff';
  }
}

if (localStorage.getItem('oscuro') === 'activado') {
  activarOscuro();
    modoOscuro.innerHTML = window.innerWidth < 770 ? "&#x263C;" : "modo: &#x263C;";
}else {
  desactivarOscuro();
    modoOscuro.innerHTML = window.innerWidth < 770 ? "&#9679;" : "modo: &#9679;";
};

modoOscuro.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    desactivarOscuro();
    modoOscuro.innerHTML = window.innerWidth < 770 ? "&#9679;" : "modo: &#9679;";
  } else {
    activarOscuro();
    modoOscuro.innerHTML = window.innerWidth < 770 ? "&#x263C;" : "modo: &#x263C;";
    }});


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


/*las líneas horizontales se cargan al entrar en pantalla*/
const linea = document.querySelector(".vertical-linea");
const barras = document.querySelectorAll(".horizontal-linea");

function actualizarBarra(barra) { //función que añade la animación a las barras
  barra.classList.add('animacion');
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
barras.forEach(barra => observer.observe(barra));

/*
        let altura = document.body.clientHeight - window.innerHeight;
        window.addEventListener("scroll", () => {
            linea.style.height = `${window.scrollY * 100 / altura}%`;
        })*/

    /*Hace aparecer el "logo" de la página en la sección de introducción*/
const textoAnimado = document.querySelector(".texto-animado");
const spans = textoAnimado.querySelectorAll("span");

    // Función para mezclar el texto
function mezclar(alarido) {
    for (let i = alarido.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [alarido[i], alarido[j]] = [alarido[j], alarido[i]];
    }

    return alarido;
};

document.addEventListener('DOMContentLoaded', animarTextoAleatorio);

function animarTextoAleatorio() {
    const mezclado = mezclar([...spans]);
        mezclado.forEach((span, i) => {
            setTimeout(() => {
            span.classList.add('aparecido');
        }, i * 200); // Delay aplicado a orden aleatorio de aparación del texto
    });
};

/**/
const textosTitulo =  [...document.querySelectorAll("h1, h2"), document.querySelector(".texto-animado")] // Selecciona todos los h1 y h2

textosTitulo.forEach(titulos => {
  titulos.addEventListener("dblclick", () => {
  titulos.classList.add("seleccionado");
});

    /*Quitar clase al perder selección*/
document.addEventListener("selectionchange", () => {
    const seleccion = window.getSelection();
    const contiene = seleccion.anchorNode && titulos.contains(seleccion.anchorNode);
    const textoSeleccionado = seleccion.toString();

        // Si ya no hay selección dentro de "palabra", quitar clase
        if (!textoSeleccionado || !contiene) {
            titulos.classList.remove("seleccionado");}
});
});


/*cambia la frase de la segunda seccion al pasar el cursor*/
const pocos = document.querySelector(".descrip.cabecera span");
const FGrupo = document.querySelector(".frente.grupo");
const amores = FGrupo.querySelectorAll(".descrip.cabecera");


    pocos.addEventListener("mouseenter", () => { //investigar si hay una forma más práctica de agrupar esto
        pocos.remove();
        amores[2].remove();
        amores[1].innerText = "¿nos quieres?";

        if(window.height > 720){
        amores[1].style.color = body.classList.contains('dark') ? "var(--texto-1)" : "var(--color-2)"; // No detecta el pulsar el botón de modo oscuro

        }else{
        amores[1].style.color = body.classList.contains('dark') ? "var(--texto-1)" : "var(--color-2)"; // No detecta el pulsar el botón de modo oscuro
        }
});

                    /*----- JS DE LA SECCIÓN DE PROJECTOS -----*/
const imagenes = document.querySelectorAll(".element-grid-img-int");
const textosDescrip = document.querySelectorAll(".grid-texto");
const contenedor = document.querySelector(".tarjeta");
const tarjeta = document.querySelector(".tarjeta img");
const titulo = document.querySelector(".tarjeta h3");
const parrafo = document.querySelector(".tarjeta p");
const bio = document.querySelectorAll(".element-grid-texto p.bio");
const picture = document.querySelector("picture");
const nav = document.querySelector("header")
const svgs = document.querySelectorAll("svg");

let boolean = false;

for (let i = 0; i < imagenes.length; i++) {

    for(let j = 0; j < svgs.length; j++){

    imagenes[i].setAttribute('alt', textosDescrip[i].innerText); //asigna el texto de la descripción como atributo alt de la imagen
    
        if(window.innerWidth > 770){

         /*------- Cambia el fondo a color al colocar el cursor sobre las imagenes de projectos -------*/
        imagenes[i].addEventListener('mouseenter', () => {

            document.body.style.backgroundColor = 'var(--color-1)'; //cambia el fondo del body al color de la variable
            imagenes[5].style.backgroundColor = 'var(--color-2)'; //cambia el fondo de la imagen del canvas al color de la variable
    
            textosDescrip.forEach(texto => {
                texto.style.color = "var(--texto-2)";
            });
        });
     
        }else{

  // SVGs: click -> color temporal
  svgs.forEach((svg) => {
    
    svg.style.display = "inline-block";

    svg.addEventListener("click", () => {
      svg.style.stroke = "var(--texto-2)";
      document.body.style.backgroundColor = 'var(--color-1)';
      imagenes[5].style.backgroundColor = 'var(--color-2)';
       textosDescrip.forEach(texto => {
                texto.style.color = "var(--texto-2)";
        });
      
      // Revertir después de 3 segundos
      setTimeout(() => {
        svg.style.stroke = "var(--texto-1)";

        if (body.classList.contains('dark')) {
            body.style.backgroundColor = '#000'; //si está en modo oscuro, el fondo vuelve a ser el del body   
        } else {
            body.style.backgroundColor = '#ffffff';
        };
        imagenes[5].style.backgroundColor = '';
        textosDescrip.forEach(texto => {
            texto.style.color = "inherit";
        });

      }, 3000);
    });
  });
        };  

        /*------- Vuelve el fondo a blanco -------*/
        imagenes[i].addEventListener('mouseleave', () => {

            if (body.classList.contains('dark')) {
                body.style.backgroundColor = '#000'; //si está en modo oscuro, el fondo vuelve a ser el del body
            
            } else {
                body.style.backgroundColor = '#ffffff';
            };

        imagenes[5].style.backgroundColor = 'var(--color-1)';
        textosDescrip.forEach(texto => {
            texto.style.color = "inherit";
        });
        });

/*al hacer click sobre las imágenes*/
    imagenes[i].addEventListener("click", () => {
        textosDescrip[i].style.visibility = 'hidden';
        nav.style.visibility = "hidden";
        let persona = imagenes[i].getAttribute("alt");
         
        if(i == 5){
            
            /*contenedor.classList.add("visible");
            tarjeta.innerHTML = "<canvas></canvas>";*/

        }else{
            contenedor.classList.add("visible");
            tarjeta.setAttribute('src', imagenes[i].getAttribute("src"));
            titulo.innerText = persona;

            let TextoParrafo = bio[i].innerText; // Obtiene el texto del párrafo más cercano
            parrafo.innerText = TextoParrafo;
        }});
};
};  

    contenedor.addEventListener("click", () => {
        contenedor.classList.remove("visible");
        nav.style.visibility = "visible";

        textosDescrip.forEach(texto => {
            texto.style.visibility = 'visible'; //quiero que todas sean visibles
    });

  });

  /*----- Modifica el cuadro final y las oraciones de la seccion de projectos"*/
const cuadro = document.querySelector(".element-grid-img-int.vacia");
const oraciones = document.querySelectorAll(".fondo.grid.oraciones");
const projectos = document.querySelector(".projectos");

const frase = projectos.getBoundingClientRect();
const medidasCuadro = imagenes[4].getBoundingClientRect();

function getCoords(projectos) {
  let posicionFrase = projectos.getBoundingClientRect();
  console.log(posicionFrase);
}

function ancho() {
    const altoCuadro = medidasCuadro.height;
    const anchoCuadro = medidasCuadro.width;
    const widthCuadro = cuadro.getBoundingClientRect();
    const anchoRect = widthCuadro.width;

    if (window.innerWidth < 720) {
        cuadro.style.height = medidasCuadro.height + "px";
        cuadro.style.width = "100%";

    } else {
        const x = altoCuadro * anchoRect / anchoCuadro; //variable para que sea proporcional el alto del cuadro
        cuadro.style.height = x + "px";
        cuadro.style.width = "100%";
    }    
}

ancho();

console.log("¡Hola! Este es un mensaje de consola para verificar que el script se ha cargado correctamente.");