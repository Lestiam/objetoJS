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

cliente.endereco.push({ // adicionei um segundo endereço para o cliente
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
})

const listaApenasApartamentos = cliente.endereco.filter((endereco) => endereco.apartamento); //criei uma lista apenas onde apartamento é true

console.log(listaApenasApartamentos)