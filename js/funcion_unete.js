    
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


    rastro();
