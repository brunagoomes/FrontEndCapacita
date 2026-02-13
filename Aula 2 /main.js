// Declaração das variáveis
let depositoInicial = 500;
let depositoMes2 = 200;
let retiradaMes3 = 50;
let juros = 0.01;

let saldo;

// Mês 1
saldo = depositoInicial;
saldo += saldo * juros;   // rendimento do mês 1

// Mês 2
saldo += depositoMes2;    // depósito no mês 2
saldo += saldo * juros;   // rendimento do mês 2

// Mês 3
saldo -= retiradaMes3;    // retirada no mês 3
saldo += saldo * juros;   // rendimento do mês 3

// Mês 4
saldo += saldo * juros;   // rendimento do mês 4

console.log("Saldo ao final do 4º mês: R$ " + saldo.toFixed(2));
