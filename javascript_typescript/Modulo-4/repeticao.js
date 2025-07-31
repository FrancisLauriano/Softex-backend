let pessoa = [
	{
		nome: "João Silva",
		idade: 70,
		profissao: "aposentado",
		cidade: "Recife-PE",
	},
	{
		nome: "Maria Pereira",
		idade: 55,
		profissao: "professora",
		cidade: "Recife-PE",
	},
	{
		nome: "Helena Oliveira",
		idade: 18,
		profissao: "estudante",
		cidade: "Camaragibe-PE",
	},
	{
		nome: "Gabriel Cruz",
		idade: 15,
		profissao: "estudante",
		cidade: "Paulista-PE",
	},
];

	let cadastros = 1;
for(let item of pessoa){
	console.log(`---------------------------`);
	console.log(`Cadastro - Pessoa ${cadastros++}`);
	for(let propriedade in item){
		console.log(`${propriedade}: ${item[propriedade]}`);
	}
}

