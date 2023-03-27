const botonSwitch = document.querySelector('#switch');
const body = document.querySelector('body');
const navegador = document.querySelector('.navegador');
const logo = document.querySelector('h1');
const enlaces = document.querySelectorAll('.enlaces');
const header = document.querySelector('.header');
const svg = document.querySelectorAll('.redes__svg');
const mensajeOfertas = document.querySelector('.header__ofertas');
const btnCatalogo = document.querySelector('#btnCatalogo');

setInterval(() =>{
    if(mensajeOfertas.textContent == 'Ofertas todos los fin de semana!'){
        mensajeOfertas.textContent = 'Hasta 50% Off!';
    } else{
        mensajeOfertas.textContent = 'Ofertas todos los fin de semana!'
    }
}, 3000)

botonSwitch.addEventListener('click', () => {
    body.classList.toggle('modoOscuro');
    navegador.classList.toggle('modoOscuro');
    logo.classList.toggle('color-blanco');
    enlaces[0].classList.toggle('color-blanco');
    enlaces[0].classList.toggle('color-negro');
    enlaces[1].classList.toggle('color-blanco');
    enlaces[1].classList.toggle('color-negro');
    btnCatalogo.classList.add('fondo-grisOscuro');
});