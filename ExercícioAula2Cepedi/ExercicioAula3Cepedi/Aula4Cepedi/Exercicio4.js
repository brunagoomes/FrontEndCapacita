function fibonacci(n) {
    let sequencia = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        sequencia.push(a);
        let proximo = a + b;
        a = b;
        b = proximo;
    }

    return sequencia;
}

// Exemplo
let n = 10;
console.log(`Os ${n} primeiros números da sequência de Fibonacci:`);
console.log(fibonacci(n));
