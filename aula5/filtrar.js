const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes) {
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento &&
             !cliente.endereco.hasOwnProperty("complemento")); //verifica se o cliente tem apartamento e valida se não tem complemento usando a função hasOwnProperty
    });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);