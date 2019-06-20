const buttonInicio = document.getElementById('button-inicio');
const showSegundaSeccion = document.getElementById('segunda-seccion');
const hidePrimeraSeccion = document.getElementById('primera-seccion');
const inputText = document.getElementById('input-text');
const buttonPadlock = document.getElementById('button-padlock');
const offset = document.getElementById ('offset-box');
const buttonKey = document.getElementById ('button-key');
const buttonClear = document.getElementById ('button-clear');
const buttonSobre = document.getElementById ("boton-sobre");
const buttonEnviar= document.getElementById("enviar");

const siguientePagina = () => {
hidePrimeraSeccion.classList.add('hide');
showSegundaSeccion.classList.remove('hide'); 
}


buttonInicio.addEventListener('click',siguientePagina);
buttonPadlock.addEventListener('click', () => {
    const blankSpace = document.getElementById('exit-box');
    let offsetValue = parseInt(offset.value);
    const result = cipher.encode(offsetValue,inputText.value);
    blankSpace.innerHTML = result;
});

buttonKey.addEventListener('click', ( ) => {
    const blankSpace = document.getElementById('exit-box');
    let offsetValue = parseInt(offset.value);
    const result = cipher.decode(offsetValue,inputText.value);
    blankSpace.innerHTML = result;
});


buttonClear.addEventListener('click',() => {
    document.getElementById('my-form').reset();
    document.getElementById('exit-box').innerHTML = '';
})

const inicioPagina = () => {
    showSegundaSeccion.classList.add('hide');
    hidePrimeraSeccion.classList.remove('hide');
}
buttonSobre.addEventListener('click',inicioPagina);
 
buttonEnviar.addEventListener('click',()=>{
 window.open("https://wa.me/ladanumber?text=exit-box",'whast');
})



