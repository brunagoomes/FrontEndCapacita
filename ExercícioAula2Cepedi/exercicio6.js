// Credenciais armazenadas no sistema
let usuarioCorreto = "admin";
let senhaCorreta = "1234";

// Credenciais fornecidas pelo usuário (exemplo)
let usuarioDigitado = "admin";
let senhaDigitada = "1234";

// Autenticação usando operadores lógicos
console.log("=== Sistema de Autenticação ===");

if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
    console.log("Login bem-sucedido! Bem-vindo, " + usuarioDigitado);
} else {
    console.log("Erro: usuário ou senha incorretos.");
}

// Uso de OR (||): acesso alternativo
let acessoEmergencia = false;
if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta || acessoEmergencia) {
    console.log("Acesso garantido (modo normal ou emergência).");
} else {
    console.log("Nenhum tipo de acesso permitido.");
}

// Uso de NOT (!): senha não pode estar vazia
if (!senhaDigitada) {
    console.log("Senha vazia não é permitida!");
} else {
    console.log("Senha informada corretamente.");
}
