const cliente  = {
    nome: "Andre",
    idade: 32,
    cpf: "11212312312",
    email: "andre@dominio.com"
};

console.log(`O nome do cliené é ${cliente.nome} e sua idade é ${cliente.idade}`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`);