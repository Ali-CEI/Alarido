    /**/


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

function animarTextoAleatorio() {
    const mezclado = mezclar([...spans]);
        mezclado.forEach((span, i) => {
            setTimeout(() => {
            span.classList.add('aparecido');
        }, i * 200); // Delay aplicado a orden aleatorio de aparación del texto
    });
};

document.addEventListener('DOMContentLoaded', animarTextoAleatorio); //funciona al cargar el documento

    /*Al hacer doble click sobre el logo se subraya y parpadea*/
textoAnimado.addEventListener("dblclick", () => {
    textoAnimado.classList.add("seleccionado"); //funciona por la clase "seleccionado"
});

    /*Quitar clase al perder selección*/
document.addEventListener("selectionchange", () => {
    const seleccion = window.getSelection();
    const contiene = seleccion.anchorNode && textoAnimado.contains(seleccion.anchorNode);
    const textoSeleccionado = seleccion.toString();

        // Si ya no hay selección dentro de "palabra", quitar clase
        if (!textoSeleccionado || !contiene) {
            textoAnimado.classList.remove("seleccionado");}
});

const pocos = document.querySelector(".descrip.cabecera span");
const FGrupo = document.querySelector(".frente.grupo");
const amores = FGrupo.querySelectorAll(".descrip.cabecera");


//for (let a = 0; a < amores.length; a++) {
    pocos.addEventListener("mouseenter", () => {
        pocos.style.color = "white"; //Estoy segura de que hay una forma más práctica de agrupar esto
        amores[1].style.color = "var(--color-2)";
        pocos.style.mixBlendMode = "normal";
        amores[1].innerText = "¿nos quieres?";
        amores[2].remove();
    });
//};


                    /*----- JS DE LA SECCIÓN DE PROJECTOS -----*/
const imagenes = document.querySelectorAll(".element-grid-img-int");
const textosDescrip = document.querySelectorAll(".grid-texto");
const contenedor = document.querySelector(".tarjeta");
const tarjeta = document.querySelector(".tarjeta img");
const titulo = document.querySelector(".tarjeta h3");
const parrafo = document.querySelector(".tarjeta p");
const bio = document.querySelectorAll(".element-grid-texto p.bio");
const picture = document.querySelector("picture");
const nav = document.querySelector("nav")
const cuadro = document.querySelector(".element-grid-img-int.vacia")

console.log(imagenes[4].getAttribute("height"));

//cuadro.style.height = .style.height; //el cuadro sin imagen es del mismo tamaño uque la imagen 4

for (let i = 0; i < imagenes.length; i++) {
    
    imagenes[i].setAttribute('alt', textosDescrip[i].innerText); //asigna el texto de la descripción como atributo alt de la imagen
    
      /*------- Cambia el fondo a color al colocar el cursor sobre las imagenes de projectos -------*/
    imagenes[i].addEventListener('mouseenter', () => {
        document.body.style.backgroundColor = 'var(--color-1)';
        imagenes[5].style.backgroundColor = 'white';
    
        textosDescrip.forEach(texto => {
            texto.style.color = "white";
        });
    });
      
    /*------- Vuelve el fondo a blanco -------*/
    imagenes[i].addEventListener('mouseleave', () => {
        document.body.style.backgroundColor = 'white';
        imagenes[5].style.backgroundColor = 'var(--color-1)';
        
        textosDescrip.forEach(texto => {
            texto.style.color = "black";
        });
    });

    imagenes[i].addEventListener("click", () => {
        textosDescrip[i].style.visibility = 'hidden';
        nav.style.visibility = "hidden";

        if(i == 5){
            contenedor.classList.add("visible");
            tarjeta.innerHTML = "<canvas></canvas>";
            titulo.innerText = "Pulsa para dibujar"
            picture.remove();

        }else{
        let persona = imagenes[i].getAttribute("alt");

            contenedor.classList.add("visible");
            tarjeta.setAttribute('src', imagenes[i].getAttribute("src"));
            titulo.innerText = persona;

            let TextoParrafo = bio[i].innerText; // Obtiene el texto del párrafo más cercano
            parrafo.innerText = TextoParrafo;            
        }});
};  

    contenedor.addEventListener("click", () => {
        contenedor.classList.remove("visible");
        nav.style.visibility = "visible";


        textosDescrip.forEach(texto => {
            texto.style.visibility = 'visible'; //quiero que todas sean visibles
    });

  });

console.log("¡Hola! Este es un mensaje de consola para verificar que el script se ha cargado correctamente.");