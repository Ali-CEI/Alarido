    //FUNCIONES DEL INDICE
/*
Incluye:
- aparicion aleatoria de las letras del titulo
- los textos se subrayan al hacer dbl click sobre ellos
- cambio del texto en la seccion de grupo
- se coloca el texto alt a las imagenes
- tarjetas con la info de los artistas
- formulario de contratacion

agrupado por funcionalidad.
constantes arriba seguidos de la funcion.
*/


    /*Hace aparecer el "logo" de la página en la sección de introducción*/
const textoAnimado = document.querySelector(".texto-animado");
const spans = textoAnimado.querySelectorAll("span");

    // Función para mezclar el texto aleatoriamente
function mezclar(alarido) {
    for (let i = alarido.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [alarido[i], alarido[j]] = [alarido[j], alarido[i]];
    }

    return alarido;
};

document.addEventListener('DOMContentLoaded', animarTextoAleatorio); //carga cuando este cargada la pagina

function animarTextoAleatorio() { 
    const mezclado = mezclar([...spans]);
        mezclado.forEach((span, i) => {
            setTimeout(() => {
            span.classList.add('aparecido');
        }, i * 200); // Delay aplicado a orden aleatorio de aparación del texto
    });
};

/*Al hacer dbl click sobre los textos se subrayan*/
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

/*cambia la frase de la seccion de grupo (segunda seccion) al pasar el cursor*/
const pocos = document.querySelector(".descrip.cabecera span");
const FGrupo = document.querySelector(".frente.grupo");
const amores = FGrupo.querySelectorAll(".descrip.cabecera");

    pocos.addEventListener("mouseenter", () => { //investigar si hay una forma más práctica de agrupar esto
        pocos.remove();
        amores[2].remove();
        amores[1].innerText = "¿nos quieres?";

        if(window.innerWidth > 770){
            amores[1].style.color = "var(--color-2)";
        }else{
           amores[1].style.color = "#ffffff"; 
        }
    });

                    /*----- JS DE LA SECCIÓN DE PROJECTOS -----*/
//constantes agrupadas
const imagenes = document.querySelectorAll(".element-grid-img-int");
const textosDescrip = document.querySelectorAll(".grid-texto");
const contenedor = document.querySelector(".tarjeta");
const tarjeta = document.querySelector(".tarjeta picture img");
const titulo = document.querySelector(".titulo-popup");
const parrafo = document.querySelector(".tarjeta p");
const bio = document.querySelectorAll(".element-grid-texto p.bio");
const picture = document.querySelector("picture");
const grafico = document.querySelector(".tarjeta .grafico");
const nav = document.querySelector("header");
const svgs = document.querySelectorAll("svg");
const clicks = document.querySelectorAll(".haz-click");


for (let i = 0; i < imagenes.length; i++) { //detecta que img es
    imagenes[i].setAttribute('alt', textosDescrip[i].innerText); //asigna el texto de la descripción como atributo alt de la imagen
        
    if(window.innerWidth > 1024){ //pantallas grandes
         /*------- Cambia el fondo a color al colocar el cursor sobre las imagenes de projectos -------*/
        imagenes[i].addEventListener('mouseenter', () => {
            document.body.style.backgroundColor = 'var(--color-1)'; //cambia el fondo del body al color de la variable
            imagenes[5].style.backgroundColor = 'var(--color-2)'; //cambia el fondo de la imagen del canvas al color de la variable
    
            textosDescrip.forEach(texto => {
                texto.style.color = "var(--texto-2)";
            });
        });
     
        }else{
        clicks.forEach((descubrir) => { //cambia el color del fondo al pulsar el ojo (svg)
            descubrir.style.display = "block";});

        // SVGs: click -> color temporal
            svgs.forEach((svg) => {
                svg.style.display = "inline-block";

                svg.addEventListener("click", () => {
                    svg.style.stroke = "var(--color-1)";
                    document.body.style.backgroundColor = 'var(--color-1)';
                    imagenes[5].style.backgroundColor = 'var(--color-2)';
            
                    textosDescrip.forEach(texto => {
                        texto.style.color = "var(--texto-2)";});
      
                setTimeout(() => { // Revertir después de 2 segundos
                    svg.style.stroke = "var(--texto-1)";

                    if (body.classList.contains('dark')) { body.style.backgroundColor = '#000'; //si está en modo oscuro, el fondo vuelve a ser el del body   
                    } else { body.style.backgroundColor = '#ffffff';};

                    imagenes[5].style.backgroundColor = '';
            
                    textosDescrip.forEach(texto => {
                        texto.style.color = "inherit";});
                }, 2000);
            });
        });};  

        /*------- Vuelve el fondo a blanco en pantallas grandes -------*/
        imagenes[i].addEventListener('mouseleave', () => { 

            if (body.classList.contains('dark')) {
                body.style.backgroundColor = '#000'; //si está en modo oscuro, el fondo vuelve a ser el del body
            
            } else {
                body.style.backgroundColor = 'var(--texto-2)';
            };

        imagenes[5].style.backgroundColor = 'var(--color-1)';
        textosDescrip.forEach(texto => {
            texto.style.color = "inherit";
        });
        });

/*al hacer click sobre las imágenes*/
    imagenes[i].addEventListener("click", () => {
        textosDescrip[i].style.visibility = 'hidden'; //desaparece el nombre de la artisa
        nav.style.visibility = "hidden"; //desaparece el navegador

        let persona = imagenes[i].getAttribute("alt");
         
        if(i == 5){ //si pulsas la imagen vacia (5) se abre la web de unirse
            window.location.href = 'unete.html#';

        }else{ //si no se despliega la info del artista
            contenedor.classList.add("visible"); //aparece la tarjeta y se rellena
            tarjeta.setAttribute('src', imagenes[i].getAttribute("src"));
            titulo.innerText = persona; //coge el titulo del alt mas cercano

            let TextoParrafo = bio[i].innerText; // Obtiene el texto del párrafo más cercano
            parrafo.innerText = TextoParrafo;

                if (persona.includes("Ali")) { //alineacion para cuadrar la foto de Ali
                    picture.style.alignItems = "end";
                
                }if (persona.includes("Carol")) { //rt Carol
                    picture.style.alignItems = "flex-start";

                }else{
                    picture.style.alignItems = "center";
                };
            
                if(window.innerHeight > window.innerWidth){ //para pantallas verticales
                    grafico.style.height = "60%";
                }
        }});
};

    /*para cerrar la tarjeta*/
    contenedor.addEventListener("click", () => {
        contenedor.classList.remove("visible");
        nav.style.visibility = "visible";

        textosDescrip.forEach(texto => {
            texto.style.visibility = 'visible'; //quiero que todas sean visibles
    });
  });

/*si se pulsa el boton de ontratar acude a la pagina de artistas y se despliega el form */
function contratarTarjeta() {
   
    const contratarTarjeta = document.querySelector(".btn.contratar");

    contratarTarjeta.addEventListener("click", () => {
        window.location.href = 'artistas.html#contratar';
    });
};

contratarTarjeta();

console.log("¡Hola! Este es un mensaje de consola para verificar que el script se ha cargado correctamente.");