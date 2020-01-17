'use strict';

const formulario = document.querySelector('#contacto');
const inputNombre = document.querySelector('#input-nombre');
const mensaje = document.querySelector('.mensaje');
const inputSolucion = document.querySelector('#input-solucion');
const comentario = document.querySelector('.comentarios');
const enviado = document.querySelector('.enviado');

function recibirNombre(event) {
  let comentarios = document.createElement('p');
  console.log('hola');
  event.preventDefault();
  enviado.innerText = 'El formulario se ah enviado correctamente';
  enviado.style.color = 'red';

  comentarios.textContent = inputNombre.value+' '+' '+  inputSolucion.value;
  comentario.appendChild(comentarios);

  setTimeout(function(){enviado.innerText = null}, 3000); //oculta el mensaje por determinado tiempo

  inputNombre.value ='';
  inputSolucion.value='';
 
  

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
function borrarNombre(){
  enviado.style.display = 'none';
  mensaje.style.display  = 'none';
  
}

formulario.addEventListener('submit', recibirNombre);
inputNombre.addEventListener('input', interceptarNombre);



