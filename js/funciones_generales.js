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
const tituloOriginal = "somos el alarido"; //constante que la nombra si está activa
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

const form = document.querySelector('.text-subtitle.apuntarse');
const email = document.querySelector('.text-sub');

document.addEventListener('click', (e) => {
    const clickedInsideForm = form.contains(e.target);
    const clickedInsideEmail = email.contains(e.target);

    if (clickedInsideForm) {
      form.classList.add('inactive');
    } else if (form.classList.contains('inactive') && !clickedInsideEmail) {
      form.classList.remove('inactive');
      form.classList.add('active');
    }
  });

console.log("¡Hola! Este es un mensaje de consola para verificar que el script se ha cargado correctamente.");