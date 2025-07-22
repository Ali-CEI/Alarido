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
    modoOscuro.innerHTML = window.innerWidth <= 770 ? "&#x263C;" : "modo: &#x263C;";
}else {
  desactivarOscuro();
    modoOscuro.innerHTML = window.innerWidth <= 770 ? "&#9679;" : "modo: &#9679;";
};

modoOscuro.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    desactivarOscuro();
    modoOscuro.innerHTML = window.innerWidth <= 770 ? "&#9679;" : "modo: &#9679;";
  } else {
    activarOscuro();
    modoOscuro.innerHTML = window.innerWidth <= 770 ? "&#x263C;" : "modo: &#x263C;";
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

function formulario() {

const form = document.querySelector('.text-apuntarse');
const cierre = document.querySelector('.newsletter');
const simulacion = document.querySelector(".simulacion");

if (!form) return;

if (window.innerWidth < 1024) { /*doy por hecho que es vertical*/
 form.addEventListener('click', ()  => {
    if (window.innerWidth < 376) {
    form.style.transform = "translateY(-4.5em)";
    simulacion.style.transform = "translateY(-2.5em)";

  } else if (window.innerWidth < 771) {
    form.style.transform = "translateY(-3.9em)";
    simulacion.style.transform = "translateY(-1.9em)";
  }else{
    form.style.transform = "translateY(-3.3em)";
    simulacion.style.transform = "translateY(-1.9em)";
  }
    simulacion.style.opacity = "1";
});

} else {
   form.addEventListener('mouseenter', ()  => {
    form.style.transform = "translateY(-3.3em)";
    simulacion.style.transform = "translateY(-1.9em)";

  });

simulacion.style.opacity = "1";    
}
    

cierre.addEventListener("mouseleave", () => { //si no es vertical no se cierra
      if (window.innerWidth < 376) {
    form.style.transform = "translateY(-3.3em)";
    simulacion.style.transform = "translateY(-2.7em)";
      } else if (window.innerWidth < 771) {
    form.style.transform = "translateY(-2.7em)";
    simulacion.style.transform = "translateY(-0.7em)";
      } else {
    form.style.transform = "translateY(-2.25em)";
    simulacion.style.transform = "translateY(-0.7em)";
    }
    
    simulacion.style.opacity = "0";
});

simulacion.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Menos mal que no funciona. ¿Apuntándote a otra [m̷i̷e̷r̷d̷a̷] que vas a dejar sin leer?",
      "Esperamos que, al menos, no nos mandes a SPAM.");
});

};

formulario();

