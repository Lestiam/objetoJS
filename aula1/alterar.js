const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };

  console.log(pessoa.nome);

  console.log(pessoa.telefone); //aqui vai ficar como indefinida

  pessoa.telefone = "11 22233334444"; //aqui defino a propriedade e o telefone

console.log(pessoa.telefone); //aqui vai aparecer o numero

pessoa.nome = "Luma Silva";

console.log(pessoa);