const filtro = document.querySelector(".filtro");

filtro.addEventListener("click", () =>{

      const form = document.getElementById("filtro-form");
    form.classList.toggle("desplegado")
    filtro.classList.toggle("desplegado")

document.addEventListener("DOMContentLoaded", () => {
  const genero = document.getElementById("filtro-genero");
  const tipo = document.getElementById("filtro-tipo");
  const localidad = document.getElementById("filtro-localidad");
  const artistas = document.querySelectorAll(".artista");



  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const generoVal = genero.value.toLowerCase();
    const tipoVal = tipo.value.toLowerCase();
    const localidadVal = localidad.value.toLowerCase();

    artistas.forEach(artista => {
      const categorias = artista.querySelector(".categorias").textContent.toLowerCase();
      const seccion = artista.closest("section.artistas").classList[1]; // poesia, musica, arte
      const descripcion = artista.querySelector("p").textContent.toLowerCase();

      const coincideGenero = !generoVal || categorias.includes(generoVal);
      const coincideTipo = !tipoVal || seccion.includes(tipoVal);
      const coincideLocalidad = !localidadVal || descripcion.includes(localidadVal);

      if (coincideGenero && coincideTipo && coincideLocalidad) {
        artista.style.display = "block";
      } else {
        artista.style.display = "none";
      }
    });
  });
});
});