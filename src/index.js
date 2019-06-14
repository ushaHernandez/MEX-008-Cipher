const buttonKey=document.getElementById('button-key');
const showSegundaSeccion=document.getElementById('segunda-seccion');
const hidePrimeraSeccion=document.getElementById('primera-seccion');

const siguientePagina = () => {
    hidePrimeraSeccion.classList.add('hide');
    showSegundaSeccion.classList.remove('hide');

}


buttonKey.addEventListener('click',siguientePagina);