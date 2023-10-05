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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para o telefone ${telefoneComercial}`);
    console.log(`Ligando para o telefone ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone); //... é o operador de espalhamento, ele pega os valores do array e passa como parametro para a função ligaParaCliente

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0], //espalha os valores do primeiro endereço do cliente
};

console.log(encomenda);