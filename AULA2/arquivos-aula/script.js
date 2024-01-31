//DECLARANDO VARIAVEIS
const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");
let imagemSelecionda = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;


//CRIANDO OBJETOS
const verdeCipreste = {
    nome: "Verde-cipreste",
    pasta: "imagens-verde-cipreste",
};

const meiaNoite = {
    nome: "Meia-noite",
    pasta: "imagens-meia-noite",
};


const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar",
};

const azulInverno = {
    nome: "Azul-inverno",
    pasta: "imagens-azul-inverno",
};

const rosaClaro = {
    nome: "Rosa-claro",
    pasta: "imagens-rosa-claro",
};

//DECLARANDO ARRAYS
const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ["41 mm", "45 mm"];

//DECLARANDO FUNÇÕES

function trocarImagem(){
    const idImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    console.log(imagemSelecionda);
    imagemSelecionda = idImagemSelecionada.charAt(0);
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionda}.jpeg`;
    
}

function trocarTamanho(){
    const idTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idTamanhoSelecionado.charAt(0);

    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;

    if(opcoesTamanho[tamanhoSelecionado] === "41 mm"){
        imagemVisualizacao.classList.add("caixa-pequena");
    } else {
        imagemVisualizacao.classList.remove("caixa-pequena");
    }
}

function trocarCor() {
    const idCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idCorSelecionada.charAt(0);

    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
    nomeCor.innerHTML = 'Cor - ' + opcoesCores[corSelecionada].nome;

    miniaturaImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`;
    miniaturaImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`;
    miniaturaImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`;

    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`;
}