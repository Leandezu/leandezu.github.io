const botonSwitch = document.querySelector('#switch');
const body = document.querySelector('body');
const navegador = document.querySelector('.navegador');
const logoBar = document.querySelector('.navegador__logo');
const logoMain = document.querySelector('.main-nav__logo');
let enlaces = document.querySelectorAll('.menu__enlace');
const header = document.querySelector('.header');
let svg = document.querySelectorAll('.redes__svg');
const mensajeOfertas = document.querySelector('.header__ofertas');
const btnCatalogo = document.querySelector('#btnCatalogo');
const footer = document.querySelector('footer');

setInterval(() =>{
    if(mensajeOfertas.textContent == 'Ofertas todos los fin de semana!'){
        mensajeOfertas.textContent = 'Hasta 50% Off!';
    } else{
        mensajeOfertas.textContent = 'Ofertas todos los fin de semana!'
    }
}, 3000)

/* Menu desplegable */

btnMenu = document.querySelector('#menu__btn');
menuNav = document.querySelector('.menu');
btnMenu.addEventListener('click', () => {
    menuNav.classList.toggle('mostrar');
})

botonSwitch.addEventListener('click', () => {
    body.classList.toggle('fondo-grisOscuro');
    body.classList.toggle('color-blanco');
    header.classList.toggle('fondo-negro');
    header.classList.toggle('fondo-grisOscuro');
    navegador.classList.toggle('modoOscuro');
    logoMain.classList.toggle('color-blanco');
    logoBar.classList.toggle('color-blanco');
    btnMenu.classList.toggle('color-blanco');
    enlaces[0].classList.toggle('color-blanco');
    enlaces[0].classList.toggle('color-negro');
    enlaces[1].classList.toggle('color-blanco');
    enlaces[1].classList.toggle('color-negro');
    btnCatalogo.classList.toggle('fondo-negro');
    btnCatalogo.classList.toggle('modoOscuro');
    footer.classList.toggle('fondo-negro');
    footer.classList.toggle('modoOscuro');
});

/* Slider */

const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length -1]; /* Tomo la ultima imagen */

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast); /* Colocamos la ultima imagen al principio del Slider */
/* Luego en CSS modifico el margen para que se visualize la segunda imagen ("primera") */

function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0]; /* Tomo el primero */
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 1s';
    setTimeout(() => {
        slider.style.transition = 'none'; /* Sacamos la transicion */
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 1000);
}

function moverIzquierda(){
    let sliderSectionLast = document.querySelectorAll('.slider__section')[sliderSection.length - 1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 1s';
    setTimeout(() => {
        slider.style.transition = 'none'; /* Sacamos la transicion */
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 1000);
}

btnRight.addEventListener('click', () => {
    moverDerecha();
})

btnLeft.addEventListener('click', () => {
    moverIzquierda();
})

setInterval(() => {
    moverDerecha();
}, 5000);
