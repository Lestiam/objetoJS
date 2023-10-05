const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 200,
    efetuaPagamento: function(valor) { //posso colocar funções dentro de objetos, esta valida se o valor é maior que o saldo
        if (valor > this.saldo) {
            console.log("Saldo insuficiente")
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    },
}; 

cliente.efetuaPagamento(25)