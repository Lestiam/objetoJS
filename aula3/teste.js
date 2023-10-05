const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    endereco: {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    }
}; 

const clienteJSON = JSON.stringify(cliente); //JSON.stringify transforma um objeto em uma string JSON
console.log(clienteJSON);
