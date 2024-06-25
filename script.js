const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. O Kaíque é Guerreiro?",
        alternativas: [
            "Depende do que você considera Guerreiro",
            "Não, não"
        ]
    },
    {
        enunciado: "2. Você respondeu \"Depende\" na questão anterior",
        alternativas: [
            "Sim",
            "Não"
        ]
    },
    {
        enunciado: "?. Essa é a questão No.4",
        alternativas: [
            "Sim",
            "Não"
        ]
    },
    {
        enunciado: "4. Fungos são legais",
        alternativas: [
            "Sim",
            "Óbvio"
        ]
    },
    {
        enunciado: "Você gostou do quiz? (Pakistan International Airlines)",
        alternativas: [
            "Sim",
            "Sim"
        ]
    }
]; 

var atual = 0;
var perguntaAtual;

function mostraPergunta(){
    caixaPerguntas.textContent = perguntas[atual].enunciado;
}

mostraPergunta();