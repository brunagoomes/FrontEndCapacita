// Informações do produto
let nomeProduto = "Teclado Mecânico";
let preco = 250.90;
let quantidade = 3;

// Processamento
let total = preco * quantidade;

// Saída 1: Texto simples
console.log("=== Saída 1: Texto simples ===");
console.log("Produto:", nomeProduto);
console.log("Preço: R$ " + preco.toFixed(2));
console.log("Quantidade:", quantidade);
console.log("Total: R$ " + total.toFixed(2));
console.log("\n");

// Saída 2: Formato de tabela
console.log("=== Saída 2: Tabela ===");
console.table({
    Produto: nomeProduto,
    Preço: preco.toFixed(2),
    Quantidade: quantidade,
    Total: total.toFixed(2)
});
console.log("\n");

// Saída 3: JSON formatado
console.log("=== Saída 3: JSON ===");
let produtoJSON = {
    nome: nomeProduto,
    preco: preco,
    quantidade: quantidade,
    total: total
};
console.log(JSON.stringify(produtoJSON, null, 4)); // identado
console.log("\n");

// Saída 4: Descrição completa
console.log("=== Saída 4: Descrição ===");
console.log(`O produto "${nomeProduto}" custa R$ ${preco.toFixed(2)}, com quantidade de ${quantidade} unidade(s). 
O valor total da compra é R$ ${total.toFixed(2)}.`);
