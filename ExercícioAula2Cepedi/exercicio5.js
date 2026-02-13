// Lista de pares de valores para testar
let testes = [
    [0, false],
    [1, true],
    [0, "0"],
    [1, "1"],
    [null, undefined],
    ["", false],
    ["", 0],
    ["true", true],
    ["false", false],
    [[], false],
    [{}, false],
    [NaN, NaN],
    ["123", 123]
];

// Função para comparar valores
function comparar(a, b) {
    console.log(`Comparando:`, a, "e", b);
    console.log("==  :", a == b);
    console.log("=== :", a === b);
    console.log("--------------------------");
}

console.log("=== Testes de igualdade ===\n");
testes.forEach(par => comparar(par[0], par[1]));

console.log("\n=== Observações importantes ===");
console.log("1. == permite conversão de tipos, por isso às vezes dá 'true' inesperado.");
console.log("2. === compara valor e tipo, sendo mais confiável.");
console.log("3. NaN nunca é igual a NaN, use Number.isNaN().");
