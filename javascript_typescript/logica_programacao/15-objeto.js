// 1- Como você cria um objeto vazio em JavaScript?

let objetoVazio = {};
console.log(objetoVazio);

// 2- Como você adiciona a propriedade "nome" com o valor "João"
// a um objeto chamado "pessoa"?

let pessoa = {};
pessoa.nome = "João";
console.log(pessoa);

// 3- Como você acessa o valor da propriedade "idade" de um objeto
// chamado "usuario"?

let usuario = {
    nome2: "Maria",
    idade1: 18,
}

console.log(usuario.idade1);

// 4- Suponha que você tenha um objeto "produto" com a
// propriedade "preco" definida como 50. Como você altera
// o valor dessa propriedade para 75?

let produto = {
    preco: 50,
}
console.log(`preço sem alteração: ${produto.preco}`);

produto.preco = 75;
console.log(`preço apos alteração: ${produto.preco}`);

// 5- Como você remove a propriedade "email" de um objeto chamado
// "contato"?

let contato = {
    nome3: "Fulano",
    email: "sememail@email.com",
}

console.log("contato sem alteração:", contato);

delete contato.email; // OU contato.email = undefined; OU contato.email = "";
console.log("contato apos alteração:", contato);

// 6- Como você adiciona uma propriedade "endereco" com o valor "Rua A,
// 123" a um objeto existente chamado "cliente"?

let cliente ={
    nome3: "Beltrano",
    email2: "bletrano@beltrano.com",
};
console.log("Cliente antes da alteração:", cliente);

cliente.endereco = "Rua A";
console.log("Cliente apos alteração:", cliente);


// 7- Se você tem um objeto "empresa" com uma propriedade
// "departamentos", como você acessa o nome do primeiro departamento?
let empresa = {
    departamentos: ["RH", "financeiro", "vendas"],
};

console.log("Departamentos:", empresa);
console.log("Primero departamento:", empresa.departamentos[0]);


// 8- Suponha que você tenha um objeto "aluno" com a propriedade
// "notas" contendo [85, 90, 78]. Como você altera a segunda nota
// para 95?

let aluno = {
    notas: [85, 90, 78]
};
console.log("Notas sem alteração:", aluno.notas);

aluno.notas[1] = 100;
console.log("Notas com alteração:", aluno.notas);

// 9- Se você tem um objeto "dados" com uma propriedade
// "valores" contendo [10, 20, 30], como você remove o segundo valor (20)
// desse array?

let dados = {
    valores: [10, 20, 30],
};
console.log("Dados sem alteração:", dados.valores);

delete dados.valores[1];
console.log("Dados com alteração:", dados.valores);

// 10- Como você cria um objeto com as propriedades "titulo"
// (com o valor "Livro") e "autor" (com o valor "Maria")?

//Literal
let biblioteca1 = {
    titulo1: "Livro",
    autor1: "Maria",
};

console.log(biblioteca1);

//Estanciado
let biblioteca2 = new Object();
biblioteca2.titulo2 = "Livro";
biblioteca2.autor2 = "Maria";
console.log(biblioteca2);


//Função Construtora 1
function Biblioteca3(){
    this.titulo3= "Livro";
    this.autor3= "Maria";
}

let meuObjeto3 = new Biblioteca3();
console.log(meuObjeto3);


//Função Construtora 2
function Biblioteca4(titulo4, autor4){
    this.titulo4 = titulo4;
    this.autor4 = autor4;
}

let meuObjeto4 = new Biblioteca4("Livro", "Maria");
console.log(meuObjeto4);
