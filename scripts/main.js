const primeiroLi = document.querySelector('.menu-nav li:first-of-type');

let lista = document.querySelectorAll('.menu-nav li');

primeiroLi.classList.add('ativo');

for(let i = 0; i < lista.length; i++){
    lista[i].onmouseover = function(){
        let i2 = 0
        while(i2 < lista.length){
            lista[i2++].classList.remove('ativo');
        }
        lista[i].classList.add('ativo');
    }
}

lista.forEach(evento => {
    evento.addEventListener('mouseenter', function(adicionaCor){
        let background = document.querySelector('body');
        let dataCor = adicionaCor.target.getAttribute('data-cor');
        background.style.backgroundColor = dataCor;
    })
})

const secoes = document.querySelectorAll('.secao');
const links = document.querySelectorAll('.menu-nav li a');

function mostrarSecao(seletor) {
    secoes.forEach(secao => {
        secao.classList.remove('ativo');
    });
    const secaoAtiva = document.querySelector(seletor);
    secaoAtiva.classList.add('ativo');
}

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        const href = this.getAttribute('href'); 
        mostrarSecao(href);

        lista.forEach(item => item.classList.remove('ativo'));
        this.parentElement.classList.add('ativo');
    });
});


mostrarSecao('#home');
