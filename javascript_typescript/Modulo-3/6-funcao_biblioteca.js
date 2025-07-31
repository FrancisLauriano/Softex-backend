function biblioteca(){
   
   const livro = {
      titulo: [],
      autor: [],
      isDisponivel: [],
   }

   function adicionar(titulo, autor, isDisponivel){
      livro.titulo.push(titulo);
      livro.autor.push(autor);
      livro.isDisponivel.push(isDisponivel);
   }
   

   function localizar(localizaPorTitulo){
      const indice = livro.titulo.indexOf(localizaPorTitulo);
       return indice !== -1 ? indice : "Título de livro Não Localizado!";
   }
   

   function remover(removePorTitulo){
      const indice = localizar(removePorTitulo);
      if(indice !== "Título de livro Não Localizado!"){
         livro.titulo.splice(indice,1);
         livro.autor.splice(indice,1);
         livro.isDisponivel.splice(indice,1);
      }else{
         return "Título de livro não pode ser removido! Não Localizado!"
      }
   }
   
   
   let exibirLista = ()=> {
      console.log(`##### LISTA DE LIVROS #####`);
      for(let item in livro.titulo){
         console.log(`Títulos: ${livro.titulo[item]}`);
         console.log(`Autores: ${livro.autor[item]}`);
         console.log(`Disponibilidade: ${livro.isDisponivel[item]}`);
         console.log("--------------------");
      }
   }

// Adicionar livros
adicionar("Harry Potter e a Pedra Filosofal", "Rowling, J.K", true); 
adicionar("O Senhor dos Anéis - A Sociedade do Anel", "J. R. R. Tolkien", false); 

// Exibir lista apos adcionar
exibirLista();

// Remover um livro por título
// remover("Harry Potter e a Pedra Filosofal");
 
// Exibir lista após a remoção
// exibirLista();

}
biblioteca();
