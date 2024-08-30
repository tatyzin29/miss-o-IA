 const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a principal causa do aquecimento global?",
        alternativas: [
            {
                texto: "Emissão de gases de efeito estufa",
                afirmacao: "A crescente conscientização ambiental tem inspirado a implementação de políticas públicas voltadas para a sustentabilidade, promovendo a conservação de ecossistemas e a biodiversidade. Tecnologias renováveis, como energia solar e reciclagem, estão reduzindo significativamente as emissões de carbono. A pesquisa científica continua a oferecer soluções inovadoras para enfrentar desafios ambientais globais."
            },
            {
                texto: "Uso excessivo de plásticos",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual prática contribui diretamente para a destruição da biodiversidade?",
        alternativas: [
            {
                texto: "Desmatamento indiscriminado",
                afirmacao: ""
            },
            {
                texto: "Uso responsável de recursos naturais",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "O que representa uma fonte renovável de energia?",
        alternativas: [
            {
                texto: "Energia solar",
                afirmacao: ""
            },
            {
                texto: "Combustíveis fósseis",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual a consequência direta da poluição da água?",
        alternativas: [
            {
                texto: "Escassez de recursos hídricos",
                afirmacao: ""
            },
            {
                texto: "Aumento da fertilidade dos ecossistemas aquáticos",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Como podemos reduzir nossa camada de carbono? ",
        alternativas: [
            {
                texto: "Usando transporte público em vez de carros individuais",
                afirmacao: ""
            },
            {
                texto: "Aumentando o consumo de produtos descartáveis",
                afirmacao: " "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em resumo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
