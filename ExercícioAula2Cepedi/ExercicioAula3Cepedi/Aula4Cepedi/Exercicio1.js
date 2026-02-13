// Exemplo: notas da turma
let notas = [7, 8, 5, 10, 6, 9];

// Cálculo da média
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

let mediaTurma = soma / notas.length;

console.log("Notas da turma:", notas);
console.log("Média da turma:", mediaTurma.toFixed(2));
