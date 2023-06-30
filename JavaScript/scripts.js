// scripts.js
// VARIÁVEIS
// var, let, const
// Tipos: int, float, string, boolean, function, object
let nome = "Zuleika";
let idade = 48;
let altura = 1.50;
let casada = false; // true | false
let sobrenome = "Aparecida";

imprime(nome + " " + sobrenome, true);
imprime("Idade: " + idade);

// Operadores matemáticos
// +, -, *, /, %, ^
let preco = 1.99;
let quantidade = 3;
let total = preco * quantidade;
imprime("R$ " + total);

// Estruturas Condicionais
// Operadores Relacionais:
// >, <, >=, <=, ==, !=, ===, !==
// Operadores lógicos:
// && (AND), || (OR), ! (NOT)

// IF
idade = 15;
if (idade < 16) {
    imprime("Não pode votar");
} else if ( idade >= 18 && idade < 65){
    imprime("Voto obrigatório");
} else {
    // (idade >= 16 && idade < 18 ) || idade >= 65
    imprime("Voto facultativo");
}


// SWITCH
let estado = "MG";
switch (estado) {
    case "MG":
        imprime("Mineiro");
        break;
    case "SP":
        imprime("Paulista");
        break;
    case "RJ":
        imprime("Carioca");
        break;
    default:
        imprime("Brasileiro");
}

switch (estado) {
    case "MG":
    case "SP":
    case "RJ":
        imprime("Sudeste");
        break;
    case "PR":
    case "SC":
    case "RS":
        imprime("Sul");
        break;
}

// Estruturas de Repetição
// WHILE
imprime("<br />WHILE");
let i = 0;
while ( i < 10) {
    imprime(i);
    // i = i + 1;
    i++;
}


// FOR
imprime("<br />FOR");
for ( let i = 0; i < 10; i++){
    imprime(i);
}

// === é usado para comparar tanto o conteúdo da variável quanto o tipo dela
let numero = "100";
if (numero === 100) {
    imprime("igual a 100");
} else {
    imprime("diferente de 100");
}


// FUNÇÕES
imprime("<br />FUNÇÕES");

function soma(num1, num2){
    let resultado = num1 + num2;

    return resultado;
}

// Chamar uma função
let conta = soma(10, 20);
imprime("Conta vale " + conta);

function multiplica (num1, num2) {
    let _num1;
    if(num1 == undefined) {
        _num1 = 1;
    } else {
        _num1 = num1;
    }

    // let _num2 = num2 == undefined ? 1 : num2;
    // let _num2 = num2 ?? 1;

    let resultado = _num1 * _num2;
    return resultado;
}


conta = multiplica(10, 4);
imprime("A multiplicação vale " + conta);

/*  Crie um programa que receba o preço de um produto, uma quantidade de itens comprados,
    o valor em dinheiro que o cliente possui.
    A cada item passado no caixa exiba o valor do produto e o valor parcial da compra.
    Ao final exiba o valor total e o troco do cliente.
    (Suponha que o cliente possua mais dinheiro que o valor total SEMPRE)
*/

let produto = 4.99;
let quantidadeProduto = 4;
let dinheiro = 25;
let precoCompra = 0;

imprime("<br />Valor do produto: " + produto + "<br />");
for (let i = 0; i < quantidadeProduto; i++) {
    precoCompra = precoCompra + produto;
    imprime("Valor da compra: " + precoCompra);
}

let troco = dinheiro - precoCompra;
imprime("Troco: " + troco);



function imprime(texto, limpar) {
    let caixa = document.getElementById("caixa");
    
    if ( limpar == true ) {
        caixa.innerHTML = "";
    }

    caixa.innerHTML += texto + "<br />";
}