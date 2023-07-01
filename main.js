//1 Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello World!")

// ---------------------------------------------------------

//2 Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let num1 = 10
let num2 = 20

let sum = (num1+num2)

console.log(( `A Soma de ${num1} + ${num2} é igual a ${num1 + num2}`))

// ---------------------------------------------------------

//3 Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let isANumber = 51;

if (typeof isANumber === "number") {
  console.log("É um número");
} else {
  console.log("Não é um número");
}


// ---------------------------------------------------------

//4 Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let isAString = "Hello";

if (typeof isAString === "string") {
  console.log("É uma string");
} else {
  console.log("Não é uma string");
}


// ---------------------------------------------------------

//5 Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let isABoolean = true;

if (typeof isABoolean=== "boolean") {
  console.log("É um Booleano");
} else {
  console.log("Não é uma Booleano");
}

// ---------------------------------------------------------

//6 Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

var number1 = 5
var number2 = 3

var sub = (number1-number2)

console.log(( `A subtração de ${number1} - ${number2} é igual a ${number1 - number2}`))

// ---------------------------------------------------------

// 7 Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

var number3 = 8
var number4 = 7

var mult = (number3*number4)

console.log(( `A multiplicação de ${number3} * ${number4} é igual a ${number3 * number4}`))

// ---------------------------------------------------------

// 8 Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

var number5 = 10
var number6 = 5

var div = (number5*number6)

console.log(( `A divisão de ${number5} / ${number6} é igual a ${number5 / number6}`))

// ---------------------------------------------------------

// 9 Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let numIsEven = 10;

if (numIsEven % 2 === 0) {
  console.log("É um número par");
} else {
  console.log("Não é um número par");
}


// ---------------------------------------------------------

// 10 Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

let numIsOdd= 7;

if (numIsOdd % 2 !== 0) {
  console.log("É um número ímpar");
} else {
  console.log("Não é um número ímpar");
}
