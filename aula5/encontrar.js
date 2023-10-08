const clientes = require("./clientes.json");

function encontrar(lista, chave, valor) {
    return lista.find((item) => item[chave].includes(valor)); //pega o item dentro da chave e ve se ele é correspondente ao valor que estou buscando
}

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "telefone", "19918820860");

console.log(encontrado2);