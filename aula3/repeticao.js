const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
}; 

cliente.endereco = [ //agora virou um array
{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
},
];

for (let chave in cliente) { //for in é um for que percorre as chaves de um objeto. Chave é uma variavel que vai receber o nome de cada chave do objeto cliente
    tipo = typeof cliente[chave]; //typeof é uma função que retorna o tipo de uma variavel
    if (tipo !== "object" && tipo !== "function") { //se o tipo não for objeto nem função, imprime a chave e o valor
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`); //cliente[chave] é o mesmo que cliente.nome, cliente.idade, cliente.email, cliente.telefone, cliente.endereco
    } 
}