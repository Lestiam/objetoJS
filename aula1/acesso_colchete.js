const cliente  = {
    nome: "Andre",
    idade: 32,
    cpf: "11212312312",
    email: "andre@dominio.com"
};

console.log(`O nome do cliené é ${cliente["nome"]} e sua idade é ${cliente["idade"]}`);//faz o mesmo que usando .

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => { //o valor de chave é uma string
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`) //uma string dentro de colchetes depois de uma propriedade de um objeto é uma chave
});