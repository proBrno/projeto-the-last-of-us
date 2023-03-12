//passo1- dar um jeito de pegar o elemento HTML dos botôes:
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//passo2- dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //passo3- desmarcar o botão selecionado anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        //passo4- marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');
        //passo5- esconder a imagem ativa de fundo anterior
        const imaagemAtiva = document.querySelector('.ativa');
        imaagemAtiva.classList.remove('ativa');
        //passo6- fazer aparecer a imagem de fundo correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    })
})