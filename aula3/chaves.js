const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
}; 

cliente.enderecos = [ //agora virou um array
{
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
},
];

const chavesDoObjeto = Object.keys(cliente); //Object.keys retorna um array com as chaves inicializadas do objeto cliente

console.log(chavesDoObjeto)

if (!chavesDoObjeto.includes("enderecos")) {//includes é uma função que retorna true se o array incluir o valor passado como parametro
    console.error("Erro. é necessário ter um endereço para o cadastrado");
}