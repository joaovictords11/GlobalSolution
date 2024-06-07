const btnTexto = document.querySelector('.btn-texto');
const btnMapa = document.querySelector('.btn-mapa');
const textoMapa = document.querySelector('.texto-mapa');
const imgMapa = document.querySelector('.mapa__img');
const formulario = document.querySelector('.formulario');
const inputNome = document.querySelector('#nome-form');
const inputEmail = document.querySelector('#email-form');
const inputMensagem = document.querySelector('#mensagem-form');

let denuncias = JSON.parse(localStorage.getItem('denuncias')) || []

function atualizarDados(){
    localStorage.setItem('denuncias', JSON.stringify(denuncias))
}

btnTexto.addEventListener('click', function(){
    btnMapa.classList.remove('btn-ativo');
    btnTexto.classList.add('btn-ativo');
    textoMapa.style.display = "block";
    imgMapa.style.display = "none";
})

btnMapa.addEventListener('click', () => {
    btnTexto.classList.remove('btn-ativo');
    btnMapa.classList.add('btn-ativo');
    textoMapa.style.display = "none";
    imgMapa.style.display = "block";
})

formulario.addEventListener('submit', () => {
    const denuncia = {nome: inputNome.value, email: inputEmail.value, mensagem: inputMensagem.value}
    denuncias.push(denuncia)
    atualizarDados()
})