const mensajeOfertas = document.querySelector('.header__ofertas');
const botonSwitch = document.querySelector('#switch');

console.log(mensajeOfertas);

setInterval(() =>{
    if(mensajeOfertas.textContent == 'Ofertas todos los fin de semana!'){
        mensajeOfertas.textContent = 'Hasta 50% Off!';
    } else{
        mensajeOfertas.textContent = 'Ofertas todos los fin de semana!'
    }
}, 3000)