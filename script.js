// Lista de imagens
const imagens = [
    "img/homem-de-blusa-preta.jpg",
    "img/mulher-com-blusa-preta.jpg",
];

let indiceAtual = 0; // começa na primeira imagem

const imagemPrincipal = document.getElementById("imagemPrincipal");
const botaoEsquerda = document.getElementById("esquerda");
const botaoDireita = document.getElementById("direita");

// Função para mostrar imagem
function mostrarImagem(indice) {
    imagemPrincipal.src = imagens[indice];
}

// Ao clicar na seta esquerda
botaoEsquerda.addEventListener("click", () => {
    indiceAtual--; // vai para a imagem anterior
    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1; // volta para a última imagem
    }
    mostrarImagem(indiceAtual);
});

// Ao clicar na seta direita
botaoDireita.addEventListener("click", () => {
    indiceAtual++; // vai para a próxima imagem
    if (indiceAtual >= imagens.length) {
        indiceAtual = 0; // volta para a primeira imagem
    }
    mostrarImagem(indiceAtual);
});

