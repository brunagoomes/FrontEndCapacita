function ehPrimo(numero) {
    if (numero < 2) return false;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }

    return true;
}

// Testes
let teste = 29;
console.log(`${teste} é primo?`, ehPrimo(teste) ? "Sim" : "Não");

teste = 30;
console.log(`${teste} é primo?`, ehPrimo(teste) ? "Sim" : "Não");
