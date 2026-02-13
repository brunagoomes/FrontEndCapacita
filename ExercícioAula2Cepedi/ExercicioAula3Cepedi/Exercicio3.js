// Credenciais cadastradas
let usuarioDigitado = "admin";
let senhaDigitada = "123456";

// Usuários cadastrados além do admin
let usuariosCadastrados = ["joao", "maria", "pedro"];

if (usuarioDigitado === "admin" && senhaDigitada === "123456") {
    console.log("Acesso de administrador");
} else if (usuariosCadastrados.includes(usuarioDigitado) && senhaDigitada !== "") {
    console.log("Acesso de usuário");
} else {
    console.log("Acesso negado");
}