// Variáveis de placar
let vitorias = 0;
let derrotas = 0;
let empates = 0;

// Função para gerar jogada do computador
function jogadaComputador() {
    let opcoes = ["pedra", "papel", "tesoura"];
    let indice = Math.floor(Math.random() * 3);
    return opcoes[indice];
}

// Função para decidir resultado
function jogar(usuario) {
    let computador = jogadaComputador();
    console.log(`Você jogou: ${usuario} | Computador jogou: ${computador}`);
    
    if (usuario === computador) {
        console.log("Empate!");
        empates++;
    } else if (
        (usuario === "pedra" && computador === "tesoura") ||
        (usuario === "papel" && computador === "pedra") ||
        (usuario === "tesoura" && computador === "papel")
    ) {
        console.log("Você venceu!");
        vitorias++;
    } else {
        console.log("Você perdeu!");
        derrotas++;
    }

    console.log(`Placar -> Vitórias: ${vitorias}, Derrotas: ${derrotas}, Empates: ${empates}`);
}

// Exemplo de jogadas
jogar("pedra");
jogar("papel");
jogar("tesoura");
