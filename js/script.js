
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// Função para fazer o Mario pular
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

// Evento para pular ao pressionar uma tecla
document.addEventListener('keydown', jump);

// Loop principal do jogo
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace('px', '');

    // Verifica se o Mario bateu no cano
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        // Para a animação do cano
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Para a animação do Mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // Troca a imagem do Mario
        mario.src = './images/game-over.png';

        // Ajusta o tamanho do Mario
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Para o jogo
        clearInterval(loop);
    }

}, 10);
