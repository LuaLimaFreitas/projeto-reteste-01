alert('Seja bem-vindo (a)');

// Passo 1: Pegar os elementos da classe "botao" do HTML

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2: Identificar o clique do usuário em cada botão

const botao1 = document.getElementById('botao1');

/* botao1.addEventListener('click', () => {

}); (funciona repetindo 3 vezes o codigo) */

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // Passo 3 - Desativar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // passo 4 - marcar o botao clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // Passo 5: esconder a imagem ativa de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // Passo 6 - fazer aparecer a immagem de fundo correspondente ao botão clocado (usar metodo indice para o foreach)
        imagens[indice].classList.add('ativa');

    })
})
