const dados = require("./cliente.json"); //require é uma função do node que importa um arquivo

console.log(dados);

console.log(typeof dados); //typeof é uma função que retorna o tipo de uma variavel, neste caso, o tipo de dados é object, ou seja, transformei uma string JSON em um objeto

const clienteEmString = JSON.stringify(dados); //JSON.stringify transforma um objeto em uma string JSON

console.log(clienteEmString);
console.log(typeof clienteEmString);

const objetoCliente = JSON.parse(clienteEmString); //JSON.parse transforma uma string JSON em um objeto

console.log(objetoCliente);
console.log(typeof objetoCliente);