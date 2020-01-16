'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const mensaje = document.querySelector('.mensaje');
const inputSolucion = document.querySelector('#input-solucion');
const comentario = document.querySelector('.comentario');

function recibirNombre(event) {
  console.log('hola');
  comentario.textContent = inputNombre.value+' '+' '+  inputSolucion.value;
  event.preventDefault();
  //formulario.textContent = 'Se envio los datos'; ESTO LO QUE HACIA ERA TRANSFORMAR
  EL CAMPO INPUT EN TextDecoder, ENTONCES DESAPARECIA EL CAMPO.
  //formulario.style.color = 'blue';

  

}


function interceptarNombre(event) {

  const nombre = event.target.value;
  if(nombre.length < 5 || nombre.length > 50 ){
    mensaje.textContent = 'Supero la cantidad';
    mensaje.style.color = "green";
    console.log('no es valido');
  }else{
    mensaje.textContent='';

    }  
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);
mensaje.addEventListener('span', interceptarNombre); //No es necesario ponerlo, aca digo que es un evento "span"


