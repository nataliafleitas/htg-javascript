console.info('Cuando veas éste mensaje en consola, ya habrás terminado ésta parte del ejercicio. Borra ésta línea cuando ya la hayas visto alguna vez en la consola al acceder a ésta página.')
const comentario = document.querySelector('span');
comentario.style.color= 'red';

const favorito = document.querySelector('.comment');
favorito.classList.add('comment--text');


const borde = document.querySelectorAll('hr');
for(let i=0; i < borde.length;i++){
    borde[i].style.borderColor= "red";
};

