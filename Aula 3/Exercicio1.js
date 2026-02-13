// Entradas
let n1 = 8;
let n2 = 7;
let n3 = 6;

// Cálculo da média
let media = (n1 + n2 + n3) / 3;

console.log("Média:", media.toFixed(2));

// Verificação da situação
if (media >= 7) {
    console.log("Aluno aprovado!");
} else if (media >= 5 && media < 7) {
    console.log("Aluno em recuperação.");
} else {
    console.log("Aluno reprovado.");
}
