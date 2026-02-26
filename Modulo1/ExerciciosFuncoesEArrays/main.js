// Array que armazenará os itens
let itens = [];

// Função para adicionar um item
function adicionarItem(arranjo, item) {
    if (item && item.trim() !== "") {
        arranjo.push(item);
        console.log(`Item "${item}" adicionado com sucesso!`);
    } else {
        console.log("Item inválido! Não pode ser vazio.");
    }
}

// Função para mostrar todos os itens
function mostrarItens(arranjo) {
    if (arranjo.length === 0) {
        console.log("Nenhum item cadastrado.");
    } else {
        console.log("Itens cadastrados:");
        arranjo.forEach((item, index) => {
            console.log(`${index}: ${item}`);
        });
    }
}

// Função para atualizar um item
function atualizarItem(arranjo, indice, novoValor) {
    if (indice < 0 || indice >= arranjo.length) {
        console.log("Posição inválida!");
    } else if (!novoValor || novoValor.trim() === "") {
        console.log("Novo valor inválido!");
    } else {
        console.log(`Item "${arranjo[indice]}" atualizado para "${novoValor}"`);
        arranjo[indice] = novoValor;
    }
}

// Função para remover um item
function removerItem(arranjo, posicao = "ultimo") {
    if (arranjo.length === 0) {
        console.log("Nenhum item para remover!");
        return;
    }

    let removido;
    if (posicao === "primeiro") {
        removido = arranjo.shift();
    } else {
        removido = arranjo.pop();
    }
    console.log(`Item "${removido}" removido (${posicao}).`);
}

// Função para exibir menu e interagir com o usuário
function menu() {
    let opcao;
    do {
        opcao = prompt(
            "Sistema de Controle de Itens:\n" +
            "1 - Adicionar item\n" +
            "2 - Mostrar itens\n" +
            "3 - Atualizar item\n" +
            "4 - Remover item\n" +
            "5 - Sair\n" +
            "Escolha uma opção:"
        );

        switch (opcao) {
            case "1":
                let novoItem = prompt("Digite o nome do item:");
                adicionarItem(itens, novoItem);
                break;

            case "2":
                mostrarItens(itens);
                break;

            case "3":
                mostrarItens(itens);
                let indice = parseInt(prompt("Digite o índice do item a ser atualizado:"));
                let novoValor = prompt("Digite o novo valor:");
                atualizarItem(itens, indice, novoValor);
                break;

            case "4":
                let posicao = prompt("Remover primeiro ou último item? (primeiro/ultimo)").toLowerCase();
                if (posicao !== "primeiro" && posicao !== "ultimo") {
                    console.log("Opção inválida! Removendo último por padrão.");
                    posicao = "ultimo";
                }
                removerItem(itens, posicao);
                break;

            case "5":
                console.log("Saindo do sistema...");
                break;

            default:
                console.log("Opção inválida!");
        }

    } while (opcao !== "5");
}

// Executa o menu
menu();
