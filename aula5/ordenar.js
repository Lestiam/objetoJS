const clientes = require("./clientes.json");

function ordenar(lista, propriedade) {
    const resultado = lista.sort((a,b) => {
        if (a[propriedade] < b[propriedade]) {
            return -1;
        }
        if(a[propriedade] > b[propriedade]) {
            return 1;
        }
        return 0; //retorna 0 caso sejam iguais. Este é o else
    }); //sort significa ordenar

    return resultado;
}

const ordenadoNome = ordenar(clientes, "nome"); //passo a lista de clientes e passo que quero ordenar pelo nome

console.log(ordenadoNome);