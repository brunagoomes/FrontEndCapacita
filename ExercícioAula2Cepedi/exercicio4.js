// Lista de valores para testar truthy / falsy
let valores = [0, 1, "", "Olá", null, undefined, NaN, [], {}, "0", "false", false, true];

// Função que verifica truthy ou falsy
function verificarValor(valor) {
    if (valor) {
        return "Truthy";
    } else {
        return "Falsy";
    }
}

console.log("=== Teste de valores truthy/falsy ===");
valores.forEach(v => {
    console.log(v, "=>", verificarValor(v));
});

console.log("\n=== Sistema de validação ===");

// Validações reais

let nome = "";
let idade = 0;
let senha = "admin123";

// Verifica nome válido
if (nome) {
    console.log("Nome válido:", nome);
} else {
    console.log("Nome inválido (falsy):", nome);
}

// Verifica idade válida
if (idade) {
    console.log("Idade válida:", idade);
} else {
    console.log("Idade inválida (falsy):", idade);
}

// Verifica senha para login
if (senha && senha !== "") {
    console.log("Login permitido. Senha informada:", senha);
} else {
    console.log("Login bloqueado. Senha inválida.");
}

console.log("\n=== Explicação dos valores falsy ===");
console.log("Em JavaScript, os valores falsy são:");
console.log("false, 0, -0, 0n, '', null, undefined, NaN");
