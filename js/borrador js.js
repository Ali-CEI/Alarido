const imagenes = document.querySelectorAll(".element-grid-img-int");
const enlaces = document.querySelectorAll(".element-grid");
const textosDescrip = document.querySelectorAll(".grid-texto");
const ContenedorTarjetas = document.querySelectorAll(".tarjeta");
const tarjetas = document.querySelectorAll(".tarjeta img");
const titulos = document.querySelectorAll(".tarjeta h3");

/*
imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
      textosDescrip.forEach(texto => {
          if (texto) {
            if (texto.style.visibility === 'visible' || texto.style.visibility === '') {
            texto.style.visibility = 'hidden';
            } else {
            texto.style.visibility = 'visible';
      }}});
    });
});*/

for (let i = 0; i < imagenes.length; i++) {
imagenes[i].addEventListener("click", () => {
        textosDescrip[i].style.visibility = 'hidden';

        ContenedorTarjetas.forEach(contenedor => {
    contenedor.classList.add("visible");
      tarjetas.forEach(tarjeta => {
        tarjeta.setAttribute('src', imagen.getAttribute("src")); 
    });

      titulos.forEach(titulo => {
        titulo.setAttribute('innerText', imagen.getAttribute("alt")); 
    });});
});};  

ContenedorTarjetas.forEach(contenedor => {

    contenedor.addEventListener("click", () => {
    contenedor.classList.remove("visible");   
    });

    textosDescrip.style.visibility = 'visible'; // Oculta el texto al hacer clic en el contenedor
    });


/*imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
        textosDescrip.forEach(texto => {
            if (texto) {
            if (texto.style.visibility === 'visible' || texto.style.visibility === '') {
            texto.style.visibility = 'hidden';
            } else {
            texto.style.visibility = 'visible';
          }}});
    
    ContenedorTarjetas.forEach(contenedor => {
    contenedor.classList.add("visible");
      tarjetas.forEach(tarjeta => {
        tarjeta.setAttribute('src', imagen.getAttribute("src")); 
    });

      titulos.forEach(titulo => {
        titulo.setAttribute('innerText', imagen.getAttribute("alt")); 
    });
  });
});
});

  ContenedorTarjetas.forEach(contenedor => {
    contenedor.addEventListener("click", () => {
      contenedor.classList.remove("visible");   
      });
    });*/
