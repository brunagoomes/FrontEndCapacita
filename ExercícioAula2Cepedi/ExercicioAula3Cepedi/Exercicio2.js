let a = 5;
let b = 5;
let c = 5;

// Verifica se pode formar triângulo
if (a + b > c && a + c > b && b + c > a) {
    
    if (a === b && b === c) {
        console.log("Triângulo equilátero");
    } else if (a === b || a === c || b === c) {
        console.log("Triângulo isósceles");
    } else {
        console.log("Triângulo escaleno");
    }

} else {
    console.log("Os valores informados NÃO formam um triângulo.");
}
